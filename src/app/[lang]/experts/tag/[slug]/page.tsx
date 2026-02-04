
import { prisma } from '@/lib/prisma';
import ExpertCard from '@/components/ExpertCard';
import { getDictionary } from '@/dictionaries';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }): Promise<Metadata> {
    const { lang, slug } = await params;
    const spec = await prisma.specialization.findUnique({ where: { slug } });
    if (!spec) return {};

    const title = lang === 'he' ? spec.name_he : spec.name_en;
    const description = lang === 'he' ? spec.description_he : spec.description_en;

    return {
        title: `${title} - מומחי בינה מלאכותית | AI Experts`,
        description: description?.slice(0, 160),
    };
}

export default async function SpecializationPage(props: {
    params: Promise<{ lang: string, slug: string }>
}) {
    const params = await props.params;
    const { lang, slug } = params;
    const dict = await getDictionary(lang as 'he' | 'en');

    const spec = await prisma.specialization.findUnique({
        where: { slug },
        include: {
            experts: {
                where: { active: true },
                include: { offerings: true, specializations_list: true },
                orderBy: { average_rating: 'desc' }
            }
        }
    });

    if (!spec) notFound();

    const title = lang === 'he' ? spec.name_he : spec.name_en;
    const description = lang === 'he' ? spec.description_he : spec.description_en;

    return (
        <div className="container" style={{ padding: 'var(--page-top-padding) 1.5rem 8rem' }}>
            <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>{title}</h1>
                {description && (
                    <div style={{
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        color: '#a3a3a3',
                        maxWidth: '800px',
                        margin: '0 auto',
                        textAlign: 'justify',
                        whiteSpace: 'pre-wrap'
                    }}>
                        {description}
                    </div>
                )}
            </div>

            <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>
                {lang === 'he' ? `מומחי ${title} זמינים:` : `Available ${title} Experts:`}
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '2rem'
            }}>
                {spec.experts.map(expert => (
                    <ExpertCard key={expert.id} expert={expert} lang={lang} dict={dict.experts} />
                ))}
            </div>

            {spec.experts.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem', color: '#666' }}>
                    {lang === 'he' ? 'כרגע אין מומחים רשומים תחת קטגוריה זו.' : 'No experts registered in this category yet.'}
                </div>
            )}
        </div>
    );
}
