"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateProfile(formData: FormData) {
    const session = await auth();
    if (!session?.user?.email) {
        return { success: false, error: "Not authenticated" };
    }

    const name = formData.get('name') as string;
    const title_he = formData.get('title_he') as string | null;
    const title_en = formData.get('title_en') as string | null;
    const profile_image = formData.get('profile_image') as string | null;
    const tagsJson = formData.get('specializations') as string;
    const tagIds = JSON.parse(tagsJson);

    try {
        await prisma.expert.update({
            where: { email: session.user.email },
            data: {
                name,
                ...(title_he && { title_he }),
                ...(title_en && { title_en }),
                ...(profile_image && { profile_image }),
                specializations_list: {
                    set: tagIds.map((id: string) => ({ id }))
                }
            }
        });

        revalidatePath('/[lang]/experts', 'page');
        revalidatePath('/[lang]/dashboard', 'page');

        return { success: true };
    } catch (error) {
        console.error("Profile update error:", error);
        return { success: false, error: "Update failed" };
    }
}
