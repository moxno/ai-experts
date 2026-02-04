'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { notifyExpertOfNewTask, notifyClientOfNewBid, notifyExpertOfAcceptedBid, notifyExpertOfNewMessage, notifyClientOfAcceptedBid, notifyAdminOfNewTask, notifyClientOfTaskReceived } from '@/lib/mail';
import { slugify } from '@/lib/slug';

export async function createBooking(formData: any) {
    try {
        const {
            expertId,
            offeringId,
            companyName,
            contactName,
            email,
            date,
            time,
            notes,
            price
        } = formData;

        // In a real app, we'd calculate the price on the server
        const totalAmount = price;

        const booking = await prisma.booking.create({
            data: {
                expert_id: expertId,
                offering_id: offeringId,
                company_name: companyName,
                company_contact_name: contactName,
                company_email: email,
                date_requested: new Date(`${date}T${time}`),
                quote_amount_usd: totalAmount,
                notes_from_client: notes,
                status: 'pending',
                payment_status: 'unpaid'
            }
        });

        revalidatePath('/[lang]/dashboard', 'layout');
        return { success: true, bookingId: booking.id };
    } catch (error: any) {
        console.error('Failed to create booking:', error);
        return { success: false, error: error.message };
    }
}

export async function registerExpert(formData: any) {
    try {
        const {
            email,
            slug,
            name,
            title,
            bio,
            languages,
            hourlyRate,
            tagIds,
            profileImage
        } = formData;

        const expert = await prisma.expert.create({
            data: {
                email,
                slug: slugify(slug, false),
                name,
                title_he: title,
                bio_he: bio,
                languages,
                hourly_rate_nis: parseInt(hourlyRate),
                hourly_rate_usd: Math.round(parseInt(hourlyRate) / 3.7), // Approx conversion
                verified: false,
                active: true,
                profile_image: profileImage || null,
                specializations_list: {
                    connect: (tagIds || []).map((id: string) => ({ id }))
                }
            }
        });

        revalidatePath('/[lang]/dashboard', 'layout');
        return { success: true, expertId: expert.id };
    } catch (error: any) {
        console.error('Failed to register expert:', error);
        return { success: false, error: error.message };
    }
}

export async function addReview(formData: FormData) {
    const session = await auth();
    if (!session?.user) {
        return { success: false, error: "Must be logged in" };
    }

    try {
        const expertId = formData.get('expertId') as string;
        const companyName = formData.get('company_name') as string;
        const title = formData.get('title') as string;
        const text = formData.get('text') as string;
        const rating = parseInt(formData.get('rating') as string);

        await prisma.review.create({
            data: {
                expert_id: expertId,
                company_name: companyName,
                title: title,
                text: text,
                rating: rating,
                verified: false // User submitted reviews are unverified by default
            }
        });

        // Recalculate average rating
        const reviews = await prisma.review.findMany({
            where: { expert_id: expertId },
            select: { rating: true }
        });

        const totalReviews = reviews.length;
        const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews;

        await prisma.expert.update({
            where: { id: expertId },
            data: {
                total_reviews: totalReviews,
                average_rating: averageRating
            }
        });

        revalidatePath('/[lang]/experts/[slug]', 'page');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to add review:', error);
        return { success: false, error: error.message };
    }
}


export async function generatePaymentLinkAction(bookingId: string, lang: string = 'he') {
    const session = await auth();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    try {
        const booking = await prisma.booking.findUnique({
            where: { id: bookingId }
        });

        if (!booking) return { success: false, error: "Booking not found" };

        // Ensure only the expert implementation (or admin) can generate the link
        // For simplicity in this demo, we assume the dashboard ensures ownership, 
        // but robustly we should check: if (booking.expert.email !== session.user.email) ...

        const paymentLink = `/${lang}/payment-simulator?bookingId=${booking.id}&amount=${booking.quote_amount_usd}`;

        await prisma.booking.update({
            where: { id: bookingId },
            data: {
                payment_link: paymentLink,
                status: 'pending' // Still pending until paid
            }
        });

        revalidatePath('/[lang]/dashboard', 'layout');
        return { success: true, paymentLink };
    } catch (error: any) {
        console.error('Failed to generate link:', error);
        return { success: false, error: error.message };
    }
}

export async function processMockPayment(bookingId: string) {
    try {
        await prisma.booking.update({
            where: { id: bookingId },
            data: {
                payment_status: 'paid',
                status: 'confirmed'
            }
        });

        revalidatePath('/[lang]/dashboard', 'layout');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to process payment:', error);
        return { success: false, error: error.message };
    }
}

export async function createTask(formData: any) {
    try {
        const {
            title,
            description,
            budget,
            specializationId,
            clientName,
            clientEmail,
            clientCompany
        } = formData;

        const slug = slugify(title);

        const task = await prisma.task.create({
            data: {
                title,
                description,
                budget_range: budget,
                slug,
                client_name: clientName,
                client_email: clientEmail,
                client_company: clientCompany,
                status: 'open',
                specializations: {
                    connect: specializationId ? [{ id: specializationId }] : []
                }
            }
        })

        revalidatePath('/[lang]/tasks', 'page');

        // Notification Logic: Notify experts with matching specializations
        // Notification Logic: 
        // 1. Notify Admin (for approval)
        // 2. Notify Client (confirmation)
        const lang = formData.lang || 'he';

        // Notify Admin
        await notifyAdminOfNewTask(task, lang as any);

        // Notify Client
        if (clientEmail) {
            await notifyClientOfTaskReceived(clientEmail, clientName || 'Client', task, lang as any);
        }

        /* 
         * EXPERT NOTIFICATION MOVED TO APPROVAL STAGE 
         * Experts will be notified only after admin approves the task via /admin/tasks
         */

        return { success: true, taskId: task.id };
    } catch (error: any) {
        console.error('[createTask] Error:', error.message);
        return { success: false, error: error.message };
    }
}

export async function submitBid(formData: any) {
    const session = await auth();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    try {
        const { taskId, amount, message } = formData;

        // Find expert ID for current user
        const expert = await prisma.expert.findUnique({
            where: { email: session.user.email || "" }
        });

        if (!expert) return { success: false, error: "You must be a registered expert to bid." };

        const bid = await prisma.bid.create({
            data: {
                task_id: taskId,
                expert_id: expert.id,
                amount: parseFloat(amount.toString()),
                message,
                status: 'pending'
            }
        });

        revalidatePath('/[lang]/tasks/[slug]', 'page');
        revalidatePath('/[lang]/dashboard', 'page');

        // Notification Logic: Notify the client
        const task = await prisma.task.findUnique({
            where: { id: taskId }
        });

        if (task && task.client_email) {
            const lang = (taskId.includes('he') || task.title.match(/[\u0590-\u05FF]/)) ? 'he' : 'en'; // Simple heuristic or pass lang from form
            notifyClientOfNewBid(
                task.client_email,
                task.client_name || (lang === 'he' ? 'לקוח' : 'Client'),
                task.title,
                expert.name,
                bid,
                lang as any
            );
        }

        return { success: true, bidId: bid.id };
    } catch (error: any) {
        console.error('Failed to submit bid:', error);
        return { success: false, error: error.message };
    }
}

export async function acceptBid(bidId: string, taskId: string) {
    const session = await auth();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    try {
        // SECURITY: Verify that the logged-in user owns this task
        const task = await prisma.task.findUnique({
            where: { id: taskId },
            select: { client_email: true }
        });

        if (!task) {
            return { success: false, error: "Task not found" };
        }

        if (task.client_email !== session.user.email) {
            console.warn(`Security: User ${session.user.email} attempted to accept bid for task owned by ${task.client_email}`);
            return { success: false, error: "Unauthorized: You can only accept bids for your own tasks" };
        }

        // Update bid status to accepted
        const bid = await prisma.bid.update({
            where: { id: bidId },
            data: { status: 'accepted' },
            include: { expert: true, task: true }
        });

        // Update task status to in_progress
        await prisma.task.update({
            where: { id: taskId },
            data: { status: 'in_progress' }
        });

        // Reject all other bids for this task
        await prisma.bid.updateMany({
            where: {
                task_id: taskId,
                id: { not: bidId }
            },
            data: { status: 'rejected' }
        });

        // Send emails to both parties for the "Handshake"
        if (bid.expert.email && bid.task.client_email) {
            const lang = bid.task.title.match(/[\u0590-\u05FF]/) ? 'he' : 'en';

            // Notify Expert
            await notifyExpertOfAcceptedBid(
                bid.expert.email,
                bid.expert.name,
                bid.task,
                bid,
                bid.task.client_email,
                lang as any
            );

            // Notify Client
            await notifyClientOfAcceptedBid(
                bid.task.client_email,
                bid.task.client_name || (lang === 'he' ? 'לקוח' : 'Client'),
                bid.task,
                bid,
                bid.expert.email,
                bid.expert.name,
                lang as any
            );
        }

        revalidatePath('/[lang]/dashboard', 'page');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to accept bid:', error);
        return { success: false, error: error.message };
    }
}

export async function rejectBid(bidId: string) {
    const session = await auth();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    try {
        // SECURITY: Verify that the logged-in user owns the task for this bid
        const bid = await prisma.bid.findUnique({
            where: { id: bidId },
            include: { task: { select: { client_email: true } } }
        });

        if (!bid) {
            return { success: false, error: "Bid not found" };
        }

        if (bid.task.client_email !== session.user.email) {
            console.warn(`Security: User ${session.user.email} attempted to reject bid for task owned by ${bid.task.client_email}`);
            return { success: false, error: "Unauthorized: You can only reject bids for your own tasks" };
        }

        await prisma.bid.update({
            where: { id: bidId },
            data: { status: 'rejected' }
        });

        revalidatePath('/[lang]/dashboard', 'page');
        return { success: true };
    } catch (error: any) {
        console.error('Failed to reject bid:', error);
        return { success: false, error: error.message };
    }
}

export async function sendMessageToExpert(expertId: string, taskId: string, subject: string, message: string) {
    const session = await auth();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    try {
        // SECURITY: Verify that the logged-in user owns the task related to this expert interaction
        // Ideally, we check that the expert has actually bid on this task to prevent spam
        const task = await prisma.task.findUnique({
            where: { id: taskId },
            include: {
                bids: {
                    where: { expert_id: expertId }
                }
            }
        });

        if (!task) return { success: false, error: "Task not found" };

        if (task.client_email !== session.user.email) {
            return { success: false, error: "Unauthorized: You can only message experts for your own tasks" };
        }

        if (task.bids.length === 0) {
            return { success: false, error: "This expert has not bid on this task." };
        }

        const expert = await prisma.expert.findUnique({
            where: { id: expertId }
        });

        if (!expert || !expert.email) {
            return { success: false, error: "Expert not found" };
        }

        const lang = task.title.match(/[\u0590-\u05FF]/) ? 'he' : 'en'; // Infer language from task
        const clientName = task.client_name || session.user.name || (lang === 'he' ? 'לקוח' : 'Client');

        // Send the email
        await notifyExpertOfNewMessage(
            expert.email,
            expert.name,
            clientName,
            subject,
            message,
            session.user.email || 'noreply@ai-experts.co.il',
            lang as any
        );

        return { success: true };
    } catch (error: any) {
        console.error('Failed to send message:', error);
        return { success: false, error: error.message };
    }
}
