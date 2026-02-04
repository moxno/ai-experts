"use server";

import { sendEmail } from '@/lib/mail';

export async function sendContactEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: "Missing required fields" };
    }

    try {
        const result = await sendEmail({
            to: ['info@brandmeweb.com'],
            subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
        });

        if (!result.success) {
            return { error: result.error || "Failed to send email" };
        }

        return { success: true };
    } catch (err: any) {
        console.error("Email sending error:", err);
        return { error: err.message || "An unexpected error occurred" };
    }
}
