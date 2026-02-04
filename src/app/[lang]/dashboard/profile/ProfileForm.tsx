
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updateProfile } from './actions';

export default function ProfileForm({ expert, allSpecializations, lang }: any) {
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

        const result = await updateProfile(formData);

        if (result.success) {
            setMessage(lang === 'he' ? 'הפרופיל עודכן בהצלחה!' : 'Profile updated successfully!');
            router.refresh();
        } else {
            setMessage(lang === 'he' ? 'שגיאה בעדכון הפרופיל' : 'Error updating profile');
        }
        setIsPending(false);
    };

    const isHe = lang === 'he';

    return (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>{isHe ? 'שם' : 'Name'}</label>
                <input
                    name="name"
                    defaultValue={expert.name}
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>{isHe ? 'תפקיד / כותרת' : 'Title'}</label>
                <input
                    name={isHe ? "title_he" : "title_en"}
                    defaultValue={isHe ? expert.title_he : expert.title_en}
                />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#aaa' }}>{isHe ? 'כתובת תמונה (URL)' : 'Profile Image URL'}</label>
                <input
                    name="profile_image"
                    defaultValue={expert.profile_image || ''}
                    placeholder="https://..."
                    style={{ width: '100%', padding: '0.8rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '0.5rem', color: 'white' }}
                />
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '1rem', color: '#aaa' }}>{isHe ? 'מומחיות (תגיות)' : 'Specializations (Tags)'}</label>
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
                                fontSize: '0.9rem'
                            }}
                        >
                            {isHe ? spec.name_he : spec.name_en}
                        </div>
                    ))}
                </div>
            </div>

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
                    fontWeight: 600,
                    cursor: isPending ? 'not-allowed' : 'pointer',
                    opacity: isPending ? 0.7 : 1
                }}
            >
                {isPending ? (isHe ? 'מעדכן...' : 'Updating...') : (isHe ? 'שמור שינויים' : 'Save Changes')}
            </button>

            {message && (
                <p style={{ marginTop: '1rem', textAlign: 'center', color: message.includes('success') || message.includes('בהצלחה') ? '#10b981' : '#ef4444' }}>
                    {message}
                </p>
            )}
        </form>
    );
}
