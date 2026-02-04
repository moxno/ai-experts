
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import AdminExpertForm from "./AdminExpertForm";
import Link from 'next/link';

export default async function AdminEditExpertPage(props: {
    params: Promise<{ lang: string; id: string }>;
}) {
    const session = await auth();
    const params = await props.params;
    const { lang, id } = params;

    if (!session?.user || session.user.role !== 'ADMIN') {
        redirect(`/${lang}`);
    }

    const expert = await prisma.expert.findUnique({
        where: { id },
        include: {
            specializations_list: true
        }
    });

    if (!expert) {
        notFound();
    }

    const allSpecializations = await prisma.specialization.findMany({
        orderBy: { name_en: 'asc' }
    });

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link href={`/${lang}/dashboard`} style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    ← Back to Dashboard
                </Link>
                <h1 style={{ marginTop: '1rem', fontSize: '2.5rem' }}>Edit Expert: {expert.name}</h1>
                <p style={{ color: '#888' }}>Database ID: {expert.id}</p>
            </div>

            <AdminExpertForm
                expert={expert}
                allSpecializations={allSpecializations}
                lang={lang}
            />
        </div>
    );
}
