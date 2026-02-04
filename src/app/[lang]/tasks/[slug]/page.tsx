import { getDictionary } from '@/dictionaries';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Briefcase, Calendar, Tag, Mail, Building, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/auth';
import BidForm from '@/components/BidForm';
import { Metadata } from 'next';
import { generateJobPostingSchema } from '@/lib/structured-data';

export async function generateMetadata({
    params
}: {
    params: Promise<{ lang: 'he' | 'en', slug: string }>
}): Promise<Metadata> {
    const { lang, slug } = await params;
    const task = await prisma.task.findUnique({
        where: { slug },
        select: { title: true, description: true }
    });

    if (!task) return {};

    const baseUrl = 'https://ai-experts.co.il';
    const title = `${task.title} | AI Experts Israel`;
    const description = task.description.substring(0, 160);

    return {
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/${lang}/tasks/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${lang}/tasks/${slug}`,
            type: 'article',
            images: [`${baseUrl}/images/og-share.png`],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${baseUrl}/images/og-share.png`],
        }
    };
}

export default async function TaskDetailsPage({
    params
}: {
    params: Promise<{ lang: 'he' | 'en', slug: string }>
}) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);

    const task = await prisma.task.findUnique({
        where: { slug },
        include: { specializations: true }
    });

    const session = await auth();
    const expert = session?.user?.email ? await prisma.expert.findUnique({
        where: { email: session.user.email }
    }) : null;

    if (!task) {
        notFound();
    }

    const isHe = lang === 'he';

    return (
        <main className="min-h-screen py-20 px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJobPostingSchema(task, lang)) }}
            />
            <div className="container max-w-4xl mx-auto">
                <Link
                    href={`/${lang}/tasks`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#888',
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        fontSize: '0.9rem'
                    }}
                >
                    <ArrowLeft size={16} />
                    {dict.common.back}
                </Link>

                <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                {task.specializations.map(spec => (
                                    <span key={spec.id} style={{
                                        padding: '0.3rem 0.8rem',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        color: 'var(--primary)',
                                        borderRadius: '2rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 600
                                    }}>
                                        {isHe ? spec.name_he : spec.name_en}
                                    </span>
                                ))}
                            </div>
                            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{task.title}</h1>
                            <div style={{ display: 'flex', gap: '1.5rem', color: '#888', fontSize: '0.9rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Calendar size={16} />
                                    {new Date(task.created_at).toLocaleDateString(lang)}
                                </div>
                                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontWeight: 600 }}>
                                    <span>{task.budget_range}</span>
                                </div> */}
                            </div>
                        </div>
                        <div style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.8rem', color: '#aaa' }}>
                            Status: <span style={{ color: '#10b981', fontWeight: 700 }}>{task.status.toUpperCase()}</span>
                        </div>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>{isHe ? 'תיאור המשימה' : 'Task Description'}</h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '1.1rem' }}>
                            {task.description}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', marginBottom: '0.5rem' }}>
                                <User size={16} />
                                <span style={{ fontSize: '0.8rem' }}>{isHe ? 'איש קשר' : 'Contact Person'}</span>
                            </div>
                            <div style={{ fontWeight: 600 }}>{task.client_name}</div>
                        </div>
                        {task.client_company && (
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', marginBottom: '0.5rem' }}>
                                    <Building size={16} />
                                    <span style={{ fontSize: '0.8rem' }}>{isHe ? 'חברה' : 'Company'}</span>
                                </div>
                                <div style={{ fontWeight: 600 }}>{task.client_company}</div>
                            </div>
                        )}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', marginBottom: '0.5rem' }}>
                                <Mail size={16} />
                                <span style={{ fontSize: '0.8rem' }}>{isHe ? 'אימייל' : 'Email'}</span>
                            </div>
                            <div style={{ color: 'var(--primary)', fontWeight: 600 }}>
                                {task.client_email ? task.client_email.replace(/(.).+@(.+)/, "$1...$2") : 'N/A'} (Hidden)
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                        {expert ? (
                            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: isHe ? 'right' : 'left' }}>{isHe ? 'הגשת הצעה לפרויקט' : 'Submit a Proposal'}</h3>
                                <BidForm taskId={task.id} dict={dict} lang={lang} />
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '2rem', background: 'linear-gradient(rgba(99, 102, 241, 0.1), transparent)', borderRadius: '1rem' }}>
                                <h3 style={{ marginBottom: '1rem' }}>{isHe ? 'רוצה להגיש הצעה?' : 'Want to bid on this task?'}</h3>
                                <p style={{ color: '#aaa', marginBottom: '2.5rem' }}>
                                    {isHe
                                        ? 'רק מומחים מאומתים יכולים לראות את פרטי הקשר המלאים ולהגיש הצעות מחיר.'
                                        : 'Only verified experts can see full contact details and submit proposals.'}
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Link href={`/${lang}/register-expert`} className="primary-btn" style={{ padding: '0.8rem 1.5rem', background: 'var(--primary)', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600 }}>
                                        {dict.home.becomeSpeaker}
                                    </Link>
                                    <Link href={`/${lang}/login`} style={{ padding: '0.8rem 1.5rem', border: '1px solid var(--border)', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600 }}>
                                        {dict.common.logIn}
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
