"use server";

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { notifyExpertOfNewTask } from '@/lib/mail';

export async function approveTask(taskId: string) {
    try {
        const session = await auth();

        // Check if user is admin
        if (!session || session.user?.role !== 'ADMIN') {
            return { success: false, error: 'Unauthorized' };
        }

        // Update task to approved
        const task = await prisma.task.update({
            where: { id: taskId },
            data: { approved: true },
            include: { specializations: true }
        });

        // Notify Experts with matching specializations
        await notifyExpertsForApprovedTask(task);

        // Revalidate relevant pages
        revalidatePath('/[lang]/admin/tasks');
        revalidatePath('/[lang]/tasks');
        revalidatePath('/[lang]');

        return { success: true };
    } catch (error: any) {
        console.error('Error approving task:', error);
        return { success: false, error: error.message };
    }
}

export async function rejectTask(taskId: string) {
    try {
        const session = await auth();

        // Check if user is admin
        if (!session || session.user?.role !== 'ADMIN') {
            return { success: false, error: 'Unauthorized' };
        }

        // Delete the task
        await prisma.task.delete({
            where: { id: taskId }
        });

        // Revalidate relevant pages
        revalidatePath('/[lang]/admin/tasks');
        revalidatePath('/[lang]/tasks');
        revalidatePath('/[lang]');

        return { success: true };
    } catch (error: any) {
        console.error('Error rejecting task:', error);
        return { success: false, error: error.message };
    }
}

async function notifyExpertsForApprovedTask(task: any) {
    if (!task.specializations || task.specializations.length === 0) return;

    const specializationIds = task.specializations.map((s: any) => s.id);

    const experts = await prisma.expert.findMany({
        where: {
            active: true,
            specializations_list: {
                some: { id: { in: specializationIds } }
            }
        },
        select: { email: true, name: true }
    });

    const lang = (task.title.match(/[\u0590-\u05FF]/) ? 'he' : 'en');

    // Send emails in parallel but don't block the response
    experts.forEach(expert => {
        if (expert.email) {
            // We don't await here to return fast to the admin
            notifyExpertOfNewTask(expert.email, expert.name, task, lang as any).catch(err =>
                console.error(`Failed to notify expert ${expert.email}:`, err)
            );
        }
    });
}

export async function deleteExpert(expertId: string) {
    try {
        const session = await auth();

        // Check if user is admin
        if (!session || session.user?.role !== 'ADMIN') {
            return { success: false, error: 'Unauthorized' };
        }

        // Delete the expert
        // Note: This might fail if there are related records (bookings, etc) without cascade delete
        // In a real app we might want to transparently disable instead of delete, or handle cascade explicitly
        await prisma.expert.delete({
            where: { id: expertId }
        });

        revalidatePath('/[lang]/admin/experts');
        revalidatePath('/[lang]/experts');
        revalidatePath('/[lang]');

        return { success: true };
    } catch (error: any) {
        console.error('Error deleting expert:', error);
        return { success: false, error: error.message };
    }
}
