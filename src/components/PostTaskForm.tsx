
"use client";

import { useState } from 'react';
import { createTask } from '@/app/actions';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PostTaskForm({
    dict,
    allSpecializations,
    lang
}: {
    dict: any,
    allSpecializations: any[],
    lang: string
}) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        budget: '',
        specializationId: '',
        clientName: '',
        clientEmail: '',
        clientCompany: ''
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [honeypot, setHoneypot] = useState(''); // Bot trap

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Bot detection: if honeypot is filled, silently reject
        if (honeypot) {
            console.warn('Bot detected via honeypot');
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSuccess(true);
                setTimeout(() => router.push(`/${lang}/tasks`), 2000);
            }, 1000);
            return;
        }

        setIsSubmitting(true);

        const result = await createTask({ ...formData, lang });

        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
            setTimeout(() => {
                router.push(`/${lang}/tasks`);
            }, 3000);
        } else {
            alert('Error: ' + result.error);
        }
    };

    if (isSuccess) {
        return (
            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1rem', textAlign: 'center' }}>
                <h2 style={{ color: '#10b981', marginBottom: '1rem' }}>{dict.tasks.form.success}</h2>
                <div className="loader" style={{ margin: '2rem auto' }}></div>
                <p style={{ color: '#aaa' }}>Redirecting to task marketplace...</p>
            </div>
        );
    }

    const t = dict.tasks.form;

    return (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', background: 'linear-gradient(to right, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t.title}</h2>
                <p style={{ color: '#888' }}>{t.subtitle}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa', fontWeight: 500 }}>{t.taskTitle}</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder={t.taskTitlePlaceholder}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: '#aaa', fontWeight: 500 }}>{t.specialization}</label>
                    <select
                        name="specializationId"
                        value={formData.specializationId}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    >
                        <option value="">{t.selectDomain}</option>
                        {allSpecializations.map((spec: any) => (
                            <option key={spec.id} value={spec.id}>
                                {lang === 'he' ? spec.name_he : spec.name_en}
                            </option>
                        ))}
                    </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: '#aaa', fontWeight: 500 }}>{t.budget}</label>
                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    >
                        <option value="">{t.selectBudget || (lang === 'he' ? 'בחר טווח תקציב' : 'Select budget range')}</option>
                        <option value="1000-3000">{lang === 'he' ? '₪1,000 - ₪3,000' : '$1,000 - $3,000'}</option>
                        <option value="3000-5000">{lang === 'he' ? '₪3,000 - ₪5,000' : '$3,000 - $5,000'}</option>
                        <option value="5000-7500">{lang === 'he' ? '₪5,000 - ₪7,500' : '$5,000 - $7,500'}</option>
                        <option value="7500-10000">{lang === 'he' ? '₪7,500 - ₪10,000' : '$7,500 - $10,000'}</option>
                        <option value="10000-15000">{lang === 'he' ? '₪10,000 - ₪15,000' : '$10,000 - $15,000'}</option>
                        <option value="15000+">{lang === 'he' ? '₪15,000+' : '$15,000+'}</option>
                    </select>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa', fontWeight: 500 }}>{t.description}</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                    placeholder={t.descriptionPlaceholder}
                />
            </div>

            <hr style={{ border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', margin: '0.5rem 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: '#aaa', fontWeight: 500 }}>{t.clientName}</label>
                    <input
                        type="text"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', color: '#aaa', fontWeight: 500 }}>{t.clientEmail}</label>
                    <input
                        type="email"
                        name="clientEmail"
                        value={formData.clientEmail}
                        onChange={handleInputChange}
                        required
                        style={inputStyle}
                    />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa', fontWeight: 500 }}>{t.clientCompany}</label>
                <input
                    type="text"
                    name="clientCompany"
                    value={formData.clientCompany}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
            </div>

            {/* Honeypot field - hidden from humans, visible to bots */}
            <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                <label htmlFor="website">Website (leave blank)</label>
                <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <input
                    type="checkbox"
                    id="terms-task"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    required
                    style={{ marginTop: '0.3rem', cursor: 'pointer', width: '20px', height: '20px' }}
                />
                <label htmlFor="terms-task" style={{ fontSize: '0.85rem', color: '#aaa', cursor: 'pointer', lineHeight: '1.5', textAlign: lang === 'he' ? 'right' : 'left', direction: lang === 'he' ? 'rtl' : 'ltr' }}>
                    {lang === 'he' ? (
                        <span>אני מאשר/ת שקראתי והסכמתי ל-<Link href={`/${lang}/terms`} target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>תנאי השימוש</Link>. אני מבין/ה כי האתר משמש כפלטפורמת קישור בלבד, וכל הסדר כספי או עבודה מתבצע ישירות מול המומחה ובאחריותי הבלעדית.</span>
                    ) : (
                        <span>I agree to the <Link href={`/${lang}/terms`} target="_blank" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Terms of Service</Link>. I understand that this site is a lead-generation platform only, and I am solely responsible for all work and payment arrangements with the expert.</span>
                    )}
                </label>
            </div>

            <button
                type="submit"
                disabled={isSubmitting || !agreedToTerms}
                className="primary-btn"
                style={{
                    marginTop: '1rem',
                    padding: '1.2rem',
                    background: 'linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(99, 102, 241, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(99, 102, 241, 0.4)';
                }}
            >
                {isSubmitting ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeDasharray="30 60" />
                        </svg>
                        <span>Processing...</span>
                    </div>
                ) : t.submit}
            </button>
        </form>
    );
}

const inputStyle = {
    width: '100%',
    padding: '1rem',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'white',
    borderRadius: '0.75rem',
    outline: 'none',
    fontSize: '1rem',
    transition: 'border-color 0.2s, background-color 0.2s'
};
