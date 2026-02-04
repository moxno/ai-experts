"use server";

import { sendEmail } from '@/lib/mail';

// Helper to convert File to Buffer
async function fileToBuffer(file: File): Promise<Buffer> {
    const arrayBuffer = await file.arrayBuffer();
    return Buffer.from(arrayBuffer);
}

export async function submitApplication(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const linkedin = formData.get('linkedin') as string;
    const expertise = formData.get('expertise') as string;
    const cvFile = formData.get('cv') as File;

    if (!name || !email || !linkedin || !expertise) {
        return { error: "Missing required fields" };
    }

    try {
        let attachments = [];
        if (cvFile && cvFile.size > 0) {
            // Basic validation
            if (cvFile.size > 5 * 1024 * 1024) { // 5MB limit
                return { error: "File too large (max 5MB)" };
            }

            const buffer = await fileToBuffer(cvFile);
            attachments.push({
                filename: cvFile.name,
                content: buffer,
            });
        }

        const result = await sendEmail({
            to: ['info@brandmeweb.com'],
            subject: `New Expert Application: ${name}`,
            replyTo: email,
            html: `
                <h2>New Expert Application</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
                <p><strong>Expertise:</strong> ${expertise}</p>
                <p><strong>CV Attached:</strong> ${attachments.length > 0 ? 'Yes' : 'No'}</p>
            `,
            attachments: attachments,
        });

        if (!result.success) {
            return { error: result.error || "Failed to send application" };
        }

        return { success: true };
    } catch (err: any) {
        console.error("Application error:", err);
        return { error: err.message || "An unexpected error occurred" };
    }
}
