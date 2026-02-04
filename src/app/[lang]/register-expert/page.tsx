
import { auth } from "@/auth";
import { getDictionary } from "@/dictionaries";
import { redirect } from "next/navigation";
import RegisterExpertForm from "@/components/RegisterExpertForm";
import { prisma } from "@/lib/prisma";

export default async function RegisterExpertPage(props: { params: Promise<{ lang: string }> }) {
    const session = await auth();
    const params = await props.params;
    const lang = params.lang;

    if (!session?.user) {
        redirect(`/${lang}/login`);
    }

    // Check if already an expert
    const existingExpert = await prisma.expert.findUnique({
        where: { email: session.user.email || "" }
    });

    if (existingExpert) {
        redirect(`/${lang}/dashboard`);
    }

    const dict = await getDictionary(lang as 'he' | 'en');
    const allSpecializations = await prisma.specialization.findMany({
        orderBy: { name_en: 'asc' }
    });

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>{dict.registerExpert.title}</h1>
                <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '3rem' }}>{dict.registerExpert.subtitle}</p>

                <RegisterExpertForm
                    dict={dict}
                    userEmail={session.user.email!}
                    userName={session.user.name!}
                    allSpecializations={allSpecializations}
                    lang={lang}
                />
            </div>
        </div>
    );
}
