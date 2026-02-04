
"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const ADMIN_EMAILS = ['ilya@antigravity.dev', 'admin@ai-experts.co.il', 'ilsimox@gmail.com'];

export async function adminUpdateExpert(expertId: string, formData: FormData) {
    const session = await auth();
    if (!session?.user?.email || !ADMIN_EMAILS.includes(session.user.email.toLowerCase())) {
        return { success: false, error: "Not authorized" };
    }

    const name = formData.get('name') as string;
    const title_en = formData.get('title_en') as string;
    const title_he = formData.get('title_he') as string;
    const active = formData.get('active') === 'true';
    const email = formData.get('email') as string;
    const bio_en = formData.get('bio_en') as string;
    const bio_he = formData.get('bio_he') as string;
    const hourly_rate_usd = parseInt(formData.get('hourly_rate_usd') as string) || 0;

    const tagsJson = formData.get('specializations') as string;
    const tagIds = JSON.parse(tagsJson || "[]");

    try {
        await prisma.expert.update({
            where: { id: expertId },
            data: {
                name,
                email,
                title_en,
                title_he,
                bio_en,
                bio_he,
                active,
                hourly_rate_usd,
                specializations_list: {
                    set: tagIds.map((id: string) => ({ id }))
                }
            }
        });

        revalidatePath('/[lang]/experts', 'page');
        revalidatePath('/[lang]/dashboard', 'page');
        revalidatePath(`/[lang]/experts/${expertId}`, 'page');

        return { success: true };
    } catch (error) {
        console.error("Admin Update Error:", error);
        return { success: false, error: "Update failed" };
    }
}
