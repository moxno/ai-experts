
"use client";

import { useState } from 'react';
import { registerExpert } from '@/app/actions';
import Link from 'next/link';

export default function RegisterExpertForm({
    dict,
    userEmail,
    userName,
    allSpecializations,
    lang
}: {
    dict: any,
    userEmail: string,
    userName: string,
    allSpecializations: any[],
    lang: string
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [formData, setFormData] = useState({
        name: userName,
        email: userEmail,
        slug: userName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
        title: '',
        bio: '',
        languages: 'Hebrew, English',
        hourlyRate: '150',
        profileImage: ''
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleTag = (id: string) => {
        if (selectedTags.includes(id)) {
            setSelectedTags(selectedTags.filter(t => t !== id));
        } else {
            setSelectedTags([...selectedTags, id]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await registerExpert({
            ...formData,
            tagIds: selectedTags
        });

        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
        } else {
            alert('Error: ' + result.error);
        }
    };

    if (isSuccess) {
        return (
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1rem', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{dict.registerExpert.success.title}</h2>
                <p style={{ color: '#aaa', marginBottom: '2rem' }}>{dict.registerExpert.success.message}</p>
                <Link href="/dashboard" className="primary-btn" style={{ padding: '1rem 2rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '0.5rem', textDecoration: 'none', display: 'inline-block' }}>
                    {dict.registerExpert.success.goToDashboard}
                </Link>
            </div>
        );
    }

    const t = dict.registerExpert.form;

    return (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{t.name}</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required style={inputStyle} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{t.slug}</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} required style={inputStyle} placeholder="e.g. ilya-sibiryakov" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{t.title}</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required style={inputStyle} placeholder={t.title} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{t.bio}</label>
                <textarea name="bio" value={formData.bio} onChange={handleInputChange} required style={{ ...inputStyle, minHeight: '100px' }} placeholder={t.bio} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>Profile Image URL (LinkedIn/GitHub/etc.)</label>
                <input type="url" name="profileImage" value={formData.profileImage} onChange={handleInputChange} style={inputStyle} placeholder="https://..." />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{t.specializations} (Tags)</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {allSpecializations.map((spec: any) => (
                        <div
                            key={spec.id}
                            onClick={() => toggleTag(spec.id)}
                            style={{
                                padding: '0.4rem 0.8rem',
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
                            {lang === 'he' ? spec.name_he : spec.name_en}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{t.languages}</label>
                    <input type="text" name="languages" value={formData.languages} onChange={handleInputChange} required style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{t.hourlyRate} (NIS ₪)</label>
                    <input type="number" name="hourlyRate" value={formData.hourlyRate} onChange={handleInputChange} required style={inputStyle} placeholder="e.g 450" />
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
                <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                    style={{ marginTop: '0.3rem', cursor: 'pointer', width: '20px', height: '20px' }}
                />
                <label htmlFor="terms" style={{ fontSize: '0.85rem', color: '#aaa', cursor: 'pointer', lineHeight: '1.4' }}>
                    {lang === 'he' ? (
                        <span>אני מאשר/ת שקראתי והסכמתי ל-<Link href={`/${lang}/terms`} target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>תנאי השימוש</Link> של האתר. אני מבין/ה כי האתר משמש כפלטפורמת קישור ומידע בלבד, וכי האחירות על הסדרת התשלומים והעבודה חלה עליי ועל הלקוח בלבד.</span>
                    ) : (
                        <span>I agree to the <Link href={`/${lang}/terms`} target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Terms of Service</Link>. I understand that this platform acts as an information intermediary only, and all payment and work arrangements are solely my responsibility.</span>
                    )}
                </label>
            </div>

            <button
                type="submit"
                disabled={isSubmitting || !agreedToTerms}
                className="primary-btn"
                style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)'
                }}
            >
                {isSubmitting ? '...' : t.submit}
            </button>
        </form>
    );
}

const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--border)',
    color: 'white',
    borderRadius: '0.5rem',
    outline: 'none',
    fontSize: '1rem'
};
