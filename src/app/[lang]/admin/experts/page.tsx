
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from 'next/link';
import ExpertList from "@/components/admin/ExpertList";
import { getDictionary } from '@/dictionaries';

export default async function AdminExpertsPage({
    params
}: {
    params: Promise<{ lang: 'he' | 'en' }>
}) {
    const { lang } = await params;
    const session = await auth();

    // Check if user is admin
    if (!session || session.user?.role !== 'ADMIN') {
        redirect(`/${lang}/login`);
    }

    const dict = await getDictionary(lang);

    // Fetch all experts
    const experts = await prisma.expert.findMany({
        orderBy: { created_at: 'desc' },
        include: { specializations_list: true }
    });

    return (
        <main className="min-h-screen py-20 px-4">
            <div className="container max-w-7xl mx-auto">
                <div style={{ marginBottom: '2rem' }}>
                    <Link href={`/${lang}/admin`} style={{ color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        ← {lang === 'he' ? 'חזרה לדאשבורד' : 'Back to Dashboard'}
                    </Link>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                        {lang === 'he' ? 'ניהול מומחים' : 'Expert Management'}
                    </h1>
                    <p style={{ color: '#aaa', fontSize: '1.1rem' }}>
                        {lang === 'he' ? `סה"כ ${experts.length} מומחים רשומים` : `Total ${experts.length} registered experts`}
                    </p>
                </div>

                <ExpertList experts={experts} lang={lang} />
            </div>
        </main>
    );
}
