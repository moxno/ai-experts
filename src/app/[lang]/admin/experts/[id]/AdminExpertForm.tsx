
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adminUpdateExpert } from './actions';

export default function AdminExpertForm({ expert, allSpecializations, lang }: any) {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const [selectedTags, setSelectedTags] = useState(expert.specializations_list.map((s: any) => s.id));
    const [message, setMessage] = useState('');

    const toggleTag = (id: string) => {
        if (selectedTags.includes(id)) {
            setSelectedTags(selectedTags.filter((t: string) => t !== id));
        } else {
            setSelectedTags([...selectedTags, id]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        setMessage('');

        const formData = new FormData(e.target as HTMLFormElement);
        formData.append('specializations', JSON.stringify(selectedTags));

        const result = await adminUpdateExpert(expert.id, formData);

        if (result.success) {
            setMessage('Profile updated successfully!');
            router.refresh();
        } else {
            setMessage('Error: ' + result.error);
        }
        setIsPending(false);
    };

    const isHe = lang === 'he';

    return (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{ gridColumn: 'span 2' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Basic Information</h3>
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Full Name</label>
                <input
                    name="name"
                    defaultValue={expert.name}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Email Address</label>
                <input
                    name="email"
                    defaultValue={expert.email}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Title (English)</label>
                <input
                    name="title_en"
                    defaultValue={expert.title_en}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Title (Hebrew)</label>
                <input
                    name="title_he"
                    defaultValue={expert.title_he}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                />
            </div>

            <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Bio (English)</label>
                <textarea
                    name="bio_en"
                    defaultValue={expert.bio_en}
                    rows={4}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white', resize: 'vertical' }}
                />
            </div>

            <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Bio (Hebrew)</label>
                <textarea
                    name="bio_he"
                    defaultValue={expert.bio_he}
                    rows={4}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white', resize: 'vertical' }}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Hourly Rate (₪)</label>
                <input
                    name="hourly_rate_usd"
                    type="number"
                    defaultValue={expert.hourly_rate_usd}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>Account Status</label>
                <select
                    name="active"
                    defaultValue={expert.active ? 'true' : 'false'}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                >
                    <option value="true" style={{ background: '#1c1c1c' }}>Active / Published</option>
                    <option value="false" style={{ background: '#1c1c1c' }}>Inactive / Pending</option>
                </select>
            </div>

            <div style={{ gridColumn: 'span 2', marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', color: '#aaa' }}>Specializations</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {allSpecializations.map((spec: any) => (
                        <div
                            key={spec.id}
                            onClick={() => toggleTag(spec.id)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '2rem',
                                border: '1px solid',
                                borderColor: selectedTags.includes(spec.id) ? 'var(--primary)' : 'var(--border)',
                                background: selectedTags.includes(spec.id) ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.03)',
                                color: selectedTags.includes(spec.id) ? 'white' : '#aaa',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontSize: '0.85rem'
                            }}
                        >
                            {spec.name_en}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ gridColumn: 'span 2' }}>
                <button
                    type="submit"
                    disabled={isPending}
                    className="primary-btn"
                    style={{
                        width: '100%',
                        padding: '1rem',
                        background: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontWeight: 700,
                        cursor: isPending ? 'not-allowed' : 'pointer',
                        opacity: isPending ? 0.7 : 1
                    }}
                >
                    {isPending ? 'Saving...' : 'Update Expert Profile'}
                </button>

                {message && (
                    <p style={{ marginTop: '1rem', textAlign: 'center', color: message.includes('success') ? '#10b981' : '#ef4444' }}>
                        {message}
                    </p>
                )}
            </div>
        </form>
    );
}
