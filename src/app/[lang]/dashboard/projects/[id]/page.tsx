import { auth } from "@/auth";
import { prisma } from '@/lib/prisma';
import { redirect, notFound } from "next/navigation";
import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import { ArrowRight, ArrowLeft, Calendar, DollarSign, Clock, MapPin } from 'lucide-react';
import ProjectBidsManager from "@/components/ProjectBidsManager";

export default async function ProjectDetailsPage(props: { params: Promise<{ lang: string, id: string }> }) {
    const params = await props.params;
    const { lang, id } = params;
    const session = await auth();
    const isHe = lang === 'he';
    // Cast lang to any to avoid strict type issues with getDictionary in this context
    const dict = await getDictionary(lang as any);

    if (!session?.user) {
        redirect(`/${lang}/login`);
    }

    const email = session.user.email || "";

    const task = await prisma.task.findUnique({
        where: { id },
        include: {
            specializations: true,
            bids: {
                include: { expert: true },
                orderBy: { created_at: 'desc' }
            }
        }
    });

    if (!task) {
        notFound();
    }

    // Security check: Ensure the current user owns this task
    if (task.client_email !== email) {
        // In a real app, perhaps show a 403, but redirecting to dashboard is safe
        redirect(`/${lang}/dashboard`);
    }

    // Calculate stats
    const bidCount = task.bids.length;
    let avgBid = 0;
    if (bidCount > 0) {
        const total = task.bids.reduce((sum, bid) => sum + (bid.amount || 0), 0);
        avgBid = Math.round(total / bidCount);
    }

    // Determine status color
    const statusColors: any = {
        'open': '#10b981', // green
        'in_progress': '#6366f1', // indigo
        'closed': '#666', // gray
        'completed': '#10b981' // green
    };

    const statusLabels: any = {
        'open': isHe ? 'פתוח להצעות' : 'Open for Bids',
        'in_progress': isHe ? 'בתהליך' : 'In Progress',
        'closed': isHe ? 'סגור' : 'Closed',
        'completed': isHe ? 'הושלם' : 'Completed'
    };

    // Sanitize expert data: Remove emails unless bid is accepted
    const sanitizedBids = task.bids.map(bid => ({
        ...bid,
        expert: {
            ...bid.expert,
            email: bid.status === 'accepted' ? bid.expert.email : null
        }
    }));

    const sanitizedTask = {
        ...task,
        bids: sanitizedBids
    };

    return (
        <div className="container" style={{ padding: '4rem 1.5rem', direction: isHe ? 'rtl' : 'ltr', textAlign: isHe ? 'right' : 'left' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link
                    href={`/${lang}/dashboard`}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#888',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        marginBottom: '1rem',
                        transition: 'color 0.2s'
                    }}
                    className="hover-primary"
                >
                    {isHe ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                    {isHe ? 'חזרה ללוח הבקרה' : 'Back to Dashboard'}
                </Link>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{task.title}</h1>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{
                                padding: '0.3rem 0.8rem',
                                background: `${statusColors[task.status] || '#666'}20`,
                                color: statusColors[task.status] || '#666',
                                borderRadius: '99px',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                border: `1px solid ${statusColors[task.status] || '#666'}40`
                            }}>
                                {statusLabels[task.status] || task.status}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#aaa', fontSize: '0.9rem' }}>
                                <Calendar size={14} />
                                {new Date(task.created_at).toLocaleDateString(lang)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
                {/* Project Overview Card */}
                <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                        {isHe ? 'פרטי הפרויקט' : 'Project Overview'}
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.3rem' }}>{dict.tasks.form.budget}</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{task.budget_range}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.3rem' }}>{isHe ? 'מספר הצעות' : 'Total Bids'}</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{bidCount}</div>
                        </div>
                        {bidCount > 0 && (
                            <div>
                                <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.3rem' }}>{isHe ? 'ממוצע הצעות' : 'Avg. Bid'}</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>${avgBid}</div>
                            </div>
                        )}
                    </div>

                    <div>
                        <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>{isHe ? 'תיאור' : 'Description'}</div>
                        <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#ddd', whiteSpace: 'pre-line' }}>
                            {task.description}
                        </p>
                    </div>

                    {task.specializations.length > 0 && (
                        <div style={{ marginTop: '2rem' }}>
                            <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>{dict.tasks.form.specialization}</div>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {task.specializations.map(spec => (
                                    <span key={spec.id} style={{ padding: '0.3rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.85rem' }}>
                                        {isHe ? spec.name_he : spec.name_en}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Bids Manager Component */}
                <ProjectBidsManager task={sanitizedTask} dict={dict} lang={lang} />
            </div>

        </div>
    );
}
