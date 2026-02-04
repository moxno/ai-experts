"use client";

import { useState } from 'react';
import { Trash2, Edit, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { deleteExpert } from '@/app/admin-actions';
import { useRouter } from 'next/navigation';

interface Expert {
    id: string;
    name: string;
    title_he: string | null;
    title_en: string | null;
    slug: string;
    active: boolean;
    hourly_rate_nis: number | null;
    email: string | null;
    specializations_list: { name_en: string; name_he: string }[];
}

export default function ExpertList({ experts, lang }: { experts: Expert[], lang: 'he' | 'en' }) {
    const router = useRouter();
    const [processingId, setProcessingId] = useState<string | null>(null);

    const handleDelete = async (expertId: string, expertName: string) => {
        const confirmMessage = lang === 'he'
            ? `האם אתה בטוח שברצונך למחוק את המומחה ${expertName}? פעולה זו אינה הפיכה.`
            : `Are you sure you want to delete expert ${expertName}? This action cannot be undone.`;

        if (!confirm(confirmMessage)) return;

        setProcessingId(expertId);
        try {
            const result = await deleteExpert(expertId);
            if (result.success) {
                router.refresh();
            } else {
                alert('Error: ' + result.error);
            }
        } catch (e) {
            alert('An unexpected error occurred');
        }
        setProcessingId(null);
    };

    return (
        <div style={{ display: 'grid', gap: '1rem' }}>
            {experts.map((expert) => (
                <div
                    key={expert.id}
                    className="glass-panel"
                    style={{
                        padding: '1.5rem',
                        borderRadius: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        opacity: processingId === expert.id ? 0.5 : 1,
                        pointerEvents: processingId === expert.id ? 'none' : 'auto'
                    }}
                >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            background: expert.active ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                            color: expert.active ? '#10b981' : '#ef4444',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            fontWeight: 700
                        }}>
                            {expert.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{expert.name}</h3>
                                {!expert.active && (
                                    <span style={{
                                        fontSize: '0.7rem',
                                        padding: '0.2rem 0.5rem',
                                        background: 'rgba(239, 68, 68, 0.2)',
                                        color: '#ef4444',
                                        borderRadius: '0.25rem'
                                    }}>
                                        INACTIVE
                                    </span>
                                )}
                            </div>
                            <p style={{ margin: '0.2rem 0', color: '#888', fontSize: '0.9rem' }}>{lang === 'he' ? expert.title_he : expert.title_en}</p>
                            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: '#666' }}>
                                <span>{expert.email}</span>
                                <span>•</span>
                                <span>₪{expert.hourly_rate_nis || 0}/hr</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <Link
                            href={`/${lang}/experts/${expert.slug}`}
                            target="_blank"
                            style={{
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255,255,255,0.05)',
                                color: '#ccc',
                                border: '1px solid transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            title="View Public Profile"
                        >
                            <ExternalLink size={18} />
                        </Link>

                        <Link
                            href={`/${lang}/admin/experts/${expert.id}`}
                            style={{
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(99, 102, 241, 0.2)',
                                color: '#818cf8',
                                border: '1px solid transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            title="Edit"
                        >
                            <Edit size={18} />
                        </Link>

                        <button
                            onClick={() => handleDelete(expert.id, expert.name)}
                            disabled={!!processingId}
                            style={{
                                padding: '0.5rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(239, 68, 68, 0.2)',
                                color: '#f87171',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            title="Delete"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
