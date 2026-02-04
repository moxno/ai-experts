"use client";

import Link from 'next/link';
import { ArrowRight, ArrowLeft, Calendar, FileText, Users } from 'lucide-react';

export default function ClientTaskManager({
    tasks,
    dict,
    lang
}: {
    tasks: any[],
    dict: any,
    lang: string
}) {
    const isHe = lang === 'he';

    if (tasks.length === 0) {
        return (
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1rem', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                    <FileText size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    {isHe ? 'אין פרויקטים פעילים' : 'No Active Projects'}
                </h3>
                <p style={{ color: '#888', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
                    {isHe ? 'זה הזמן ליצור פרויקט חדש ולקבל הצעות ממומחים.' : 'Create a new project to start receiving proposals from experts.'}
                </p>
                <Link
                    href={`/${lang}/tasks/new`}
                    className="primary-btn"
                    style={{
                        padding: '0.8rem 2rem',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontWeight: 600
                    }}
                >
                    {isHe ? 'פרסם פרויקט חדש' : 'Post New Project'}
                </Link>
            </div>
        );
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {tasks.map(task => {
                const bidCount = task.bids.length;
                const newBidsCount = task.bids.filter((b: any) => b.status === 'pending').length;

                return (
                    <div key={task.id} className="glass-panel hover-card" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', transition: 'transform 0.2s', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                            <span style={{
                                padding: '0.3rem 0.6rem',
                                borderRadius: '0.4rem',
                                background: task.status === 'open' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                color: task.status === 'open' ? '#10b981' : '#6366f1',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase'
                            }}>
                                {task.status}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: '#888', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                                <Calendar size={14} />
                                {new Date(task.created_at).toLocaleDateString(lang)}
                            </span>
                        </div>

                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: '1.4' }}>
                            {task.title}
                        </h3>

                        <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {task.description}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Users size={16} color="#aaa" />
                                <span style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                    {bidCount} {isHe ? 'הצעות' : 'Bids'}
                                </span>
                                {newBidsCount > 0 && (
                                    <span style={{
                                        background: '#ef4444',
                                        color: 'white',
                                        fontSize: '0.7rem',
                                        padding: '0.1rem 0.4rem',
                                        borderRadius: '99px',
                                        fontWeight: 700
                                    }}>
                                        {newBidsCount} {isHe ? 'חדש' : 'New'}
                                    </span>
                                )}
                            </div>

                            <Link
                                href={`/${lang}/dashboard/projects/${task.id}`}
                                style={{
                                    color: 'var(--primary)',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    textDecoration: 'none'
                                }}
                            >
                                {isHe ? 'ניהול' : 'Manage'}
                                {isHe ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                            </Link>
                        </div>
                    </div>
                );
            })}
            <style jsx>{`
                .hover-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--primary);
                }
            `}</style>
        </div>
    );
}
