'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function saveExpertProfile(data: any, lang: string) {
    try {
        const {
            name,
            email,
            phone,
            password, // In a real app, hash this!
            title,
            company,
            linkedin,
            cv,
            bio,
            experience_bullets,
            specializations,
            languages,
            offerings
        } = data;

        // Create the Expert
        const expert = await prisma.expert.create({
            data: {
                name,
                email, // In real app, check duplicates
                slug: name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') + '-' + Math.floor(Math.random() * 1000),
                title_en: title,
                company,
                linkedin_profile: linkedin,
                cv_url: cv,
                bio_en: bio,
                specializations_en: specializations.join(','),
                languages: languages.join(','),
                status: 'pending',
                verified: false,
                active: true // Active but pending verification
            }
        });

        // Create Offerings
        if (offerings && offerings.length > 0) {
            await prisma.offering.createMany({
                data: offerings.map((o: any) => ({
                    expert_id: expert.id,
                    title: o.title,
                    type: o.type,
                    description: o.description,
                    format: o.format.join(','),
                    duration_minutes: parseInt(o.duration),
                    max_attendees: o.maxAttendees ? parseInt(o.maxAttendees) : null,
                    price_usd: parseInt(o.price),
                    audience_level: o.level.join(','),
                    includes: o.includes
                }))
            });
        }

        revalidatePath(`/${lang}/experts`);
        return { success: true, expertId: expert.id };

    } catch (error) {
        console.error("Failed to create expert:", error);
        return { success: false, error: "Failed to create profile" };
    }
}
