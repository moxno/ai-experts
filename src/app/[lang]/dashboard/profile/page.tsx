
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import ProfileForm from "./ProfileForm";
import { getDictionary } from "@/dictionaries";

export default async function ProfilePage(props: { params: Promise<{ lang: string }> }) {
    const session = await auth();
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);

    if (!session?.user) {
        redirect(`/${lang}/login`);
    }

    const expert = await prisma.expert.findUnique({
        where: { email: session.user.email || "" },
        include: {
            specializations_list: true
        }
    });

    if (!expert) {
        redirect(`/${lang}/dashboard`);
    }

    const allSpecializations = await prisma.specialization.findMany({
        orderBy: { name_en: 'asc' }
    });

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>{lang === 'he' ? 'עריכת פרופיל' : 'Edit Profile'}</h1>
            <ProfileForm
                expert={expert}
                allSpecializations={allSpecializations}
                lang={lang}
            />
        </div>
    );
}
