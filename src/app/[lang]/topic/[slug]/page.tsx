import { prisma } from '@/lib/prisma';
import ExpertCard from '@/components/ExpertCard';
import { getDictionary } from '@/dictionaries';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }): Promise<Metadata> {
    const { lang, slug } = await params;
    const topic = await prisma.specialization.findUnique({
        where: { slug }
    });

    if (!topic) return {};

    const isHe = lang === 'he';
    const heName = topic.name_he || '';
    const enName = topic.name_en || '';

    const title = isHe ? (topic.metaTitle_he || heName) : (topic.metaTitle_en || enName);
    const description = isHe ? (topic.metaDescription_he || topic.description_he) : (topic.metaDescription_en || topic.description_en);

    // Fallback if name/title is completely missing
    const finalTitle = title || (isHe ? 'נושא לא נמצא' : 'Topic Not Found');

    return {
        title: finalTitle.includes('|') ? finalTitle : `${finalTitle} | AI Experts`,
        description: description?.substring(0, 160),
        alternates: {
            canonical: `https://ai-experts.co.il/${lang}/topic/${slug}`
        }
    };

}

export default async function TopicPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang as 'he' | 'en');

    const topic = await prisma.specialization.findUnique({
        where: { slug },
        include: {
            experts: {
                where: { active: true },
                orderBy: { average_rating: 'desc' },
                include: { offerings: true, specializations_list: true }
            }
        }
    });

    if (!topic) notFound();

    const title = lang === 'he' ? topic.name_he : topic.name_en;
    const description = lang === 'he' ? topic.description_he : topic.description_en;

    return (
        <div style={{ paddingBottom: '8rem' }}>
            {/* Header / Hero for the Topic */}
            <div style={{
                padding: '6rem 0 4rem',
                background: 'linear-gradient(to bottom, #1a1a1a, transparent)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div className="container">
                    <Link
                        href={`/${lang}/experts`}
                        style={{ color: '#888', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontSize: '0.9rem' }}
                    >
                        <ArrowLeft size={16} /> {dict.experts.backToAll}
                    </Link>

                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem', fontWeight: 800 }}>{title}</h1>

                    {description && (
                        <div
                            style={{
                                color: '#ccc',
                                maxWidth: '800px',
                                fontSize: '1.2rem',
                                lineHeight: '1.7',
                                marginBottom: '2rem'
                            }}
                        >
                            {description}
                        </div>
                    )}
                </div>
            </div>

            <div className="container" style={{ paddingTop: '4rem' }}>
                <h2 style={{ marginBottom: '2.5rem', fontSize: '1.8rem' }}>
                    {lang === 'he' ? `מומחי ${title} מובילים` : `Top ${title} Experts`}
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '2rem'
                }}>
                    {topic.experts.map(expert => (
                        <ExpertCard key={expert.id} expert={expert} lang={lang} dict={dict.experts} />
                    ))}
                </div>

                {topic.experts.length === 0 && (
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
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                                {lang === 'he' ? `טרם נמצאו מומחי ${title}` : `No ${title} Experts Found`}
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: '400px', margin: '0 auto' }}>
                                {lang === 'he' ? 'אנחנו פועלים לצרף את המומחים הטובים ביותר בתחום זה בקרוב.' : 'We are working to bring the best experts in this field soon.'}
                            </p>
                        </div>
                        <Link href={`/${lang}/experts`} className="primary-btn" style={{ marginTop: '1rem', padding: '0.8rem 2rem', textDecoration: 'none' }}>
                            {dict.experts.backToAll}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
