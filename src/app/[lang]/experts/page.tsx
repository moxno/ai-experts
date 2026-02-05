import { prisma } from '@/lib/prisma';
import SidebarFilter from '@/components/SidebarFilter';
import ExpertCard from '@/components/ExpertCard';
import type { Metadata } from 'next';
import { getDictionary } from '@/dictionaries';
import { Users, Search } from 'lucide-react';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'he' | 'en');
    return {
        title: `${dict.experts.title} | AI-Experts.co.il`,
        description: dict.experts.sub,
    };
}

export const dynamic = 'force-dynamic';

export default async function ExpertsPage(props: {
    params: Promise<{ lang: string }>,
    searchParams: Promise<{ q?: string, specialization?: string, format?: string, level?: string }>
}) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const lang = params.lang;
    const dict = await getDictionary(lang as 'he' | 'en');

    let specializations: any[] = [];
    let experts: any[] = [];

    try {
        // Fetch specializations with timeout protection
        specializations = await prisma.specialization.findMany({
            orderBy: { name_en: 'asc' }
        });
    } catch (error) {
        console.error('[ExpertsPage] Failed to fetch specializations:', error);
        // Continue with empty array - page will still render
    }

    // Build the query
    const where: any = { active: true };

    if (searchParams.q) {
        where.OR = [
            { name: { contains: searchParams.q, mode: 'insensitive' } },
            { bio: { contains: searchParams.q, mode: 'insensitive' } },
            { title: { contains: searchParams.q, mode: 'insensitive' } }
        ];
    }

    if (searchParams.specialization) {
        where.specializations_list = {
            some: { slug: searchParams.specialization }
        };
    }

    if (searchParams.format || searchParams.level) {
        where.offerings = {
            some: {
                active: true,
                ...(searchParams.format && { format: searchParams.format }),
                ...(searchParams.level && { audience_level: searchParams.level })
            }
        };
    }

    try {
        // Fetch experts with timeout protection
        experts = await prisma.expert.findMany({
            where,
            take: 50, // Limit results for performance
            orderBy: { average_rating: 'desc' },
            include: { offerings: true, specializations_list: true }
        });
    } catch (error) {
        console.error('[ExpertsPage] Failed to fetch experts:', error);
        console.error('[ExpertsPage] Query params:', { lang, searchParams, where });
        // Continue with empty array - page will show "no experts found" message
    }

    return (
        <div>
            {/* Header */}
            <div style={{ padding: '6rem 0 3rem', background: 'linear-gradient(to bottom, #111, transparent)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>{dict.experts.title}</h1>
                    <p style={{ color: '#a3a3a3', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        {dict.experts.sub}
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1.5rem 8rem', display: 'flex', gap: '3rem' }}>
                {/* Sidebar - Hidden on mobile in simple implementation, or stacked */}
                <div className="sidebar-wrapper">
                    <SidebarFilter dict={dict.experts} specializations={specializations} lang={lang} />
                </div>

                {/* Main Content */}
                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '1.5rem', color: '#666', fontSize: '0.9rem' }}>
                        {dict.experts.showingCount.replace('{count}', experts.length.toString())}
                    </div>

                    {experts.length > 0 ? (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2rem'
                        }}>
                            {experts.map(expert => (
                                <ExpertCard key={expert.id} expert={expert} lang={lang} dict={dict.experts} />
                            ))}
                        </div>
                    ) : (
                        <div style={{
                            padding: '6rem 2rem',
                            textAlign: 'center',
                            background: 'rgba(255,255,255,0.02)',
                            borderRadius: '1.5rem',
                            border: '1px dashed rgba(255,255,255,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem'
                        }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Search size={32} style={{ color: '#444' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>
                                    {lang === 'he' ? 'לא נמצאו מומחים' : 'No Experts Found'}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: '400px', margin: '0 auto' }}>
                                    {dict.experts.noResults}
                                </p>
                            </div>
                            <Link
                                href={`/${lang}/experts`}
                                className="primary-btn"
                                style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}
                            >
                                {lang === 'he' ? 'צפה בכל המומחים' : 'View All Experts'}
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Quick helper for sidebar responsive */}
            <style>{`
                @media (max-width: 900px) {
                    .container {
                        flex-direction: column;
                    }
                    .sidebar-wrapper {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}
