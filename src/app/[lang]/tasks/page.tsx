
import { getDictionary } from '@/dictionaries';
import { prisma } from '@/lib/prisma';
export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { Briefcase, Clock, Tag, PlusCircle } from 'lucide-react';
import { Metadata } from 'next';
import { generateItemListSchema } from '@/lib/structured-data';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'he' | 'en' }> }): Promise<Metadata> {
    const { lang } = await params;
    const isHe = lang === 'he';
    const baseUrl = 'https://ai-experts.co.il';

    const title = isHe
        ? "לוח פרויקטים AI | מצא משימות בינה מלאכותית וייעוץ - AI Experts"
        : "AI Project Board | Find AI Gigs & Consulting Tasks - AI Experts";

    const description = isHe
        ? "חפשו והגישו מועמדות לפרויקטים וייעוץ בתחומי הבינה המלאכותית. לוח המשימות המעודכן ביותר למומחי AI בישראל."
        : "Browse and bid on high-quality AI projects and consulting tasks. The leading marketplace for AI professionals and enterprises.";

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/${lang}/tasks`,
        },
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${lang}/tasks`,
            type: 'website',
        }
    };
}

export default async function TasksPage({
    params
}: {
    params: Promise<{ lang: 'he' | 'en' }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const tasks = await prisma.task.findMany({
        where: {
            status: 'open',
            approved: true  // Only show approved tasks
        },
        include: { specializations: true },
        orderBy: { created_at: 'desc' }
    });

    const isHe = lang === 'he';

    return (
        <div className="min-h-screen py-20 px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateItemListSchema(tasks, lang)) }}
            />
            <div className="container max-w-5xl mx-auto">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>{dict.tasks.title}</h1>
                        <p style={{ color: '#aaa', fontSize: '1.1rem' }}>{dict.tasks.subtitle}</p>
                    </div>
                    <Link href={`/${lang}/tasks/new`} className="primary-btn" style={{
                        padding: '1rem 2rem',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <PlusCircle size={20} />
                        {dict.tasks.postTaskBtn}
                    </Link>
                </div>

                {tasks.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '6rem 2rem',
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
                            <Briefcase size={32} style={{ color: '#444' }} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                                {lang === 'he' ? 'אין פרויקטים פעילים' : 'No Active Projects'}
                            </h3>
                            <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '400px', margin: '0 auto' }}>
                                {dict.tasks.noTasks}
                            </p>
                        </div>
                        <Link href={`/${lang}/tasks/new`} className="primary-btn" style={{ marginTop: '1rem', padding: '0.8rem 2rem', textDecoration: 'none' }}>
                            {dict.tasks.postTaskBtn}
                        </Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {tasks.map((task) => (
                            <div key={task.id} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{task.title}</h3>
                                    <span style={{
                                        padding: '0.25rem 0.75rem',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        color: '#10b981',
                                        borderRadius: '2rem',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        {task.status}
                                    </span>
                                </div>

                                <p style={{ color: '#aaa', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                    {task.description.length > 200 ? task.description.substring(0, 200) + '...' : task.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: '#888', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Tag size={16} />
                                        <span>
                                            {task.specializations.map(s => isHe ? s.name_he : s.name_en).join(', ')}
                                        </span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} />
                                        <span>
                                            {(() => {
                                                try {
                                                    return new Date(task.created_at).toLocaleDateString(lang);
                                                } catch (e) {
                                                    return new Date(task.created_at).toLocaleDateString('en');
                                                }
                                            })()}
                                        </span>
                                    </div>
                                    {/* <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}>
                                        <span>{task.budget_range}</span>
                                    </div> */}
                                </div>

                                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                                    <Link href={`/${lang}/tasks/${task.slug}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
                                        {lang === 'he' ? 'צפה בפרטים והגש הצעה ←' : 'View Details & Bid →'}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
