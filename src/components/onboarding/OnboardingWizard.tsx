'use client';

import { useState } from 'react';
import styles from './OnboardingWizard.module.css';
import { saveExpertProfile } from '@/app/actions/onboarding';
import { useRouter } from 'next/navigation';
import { CheckCircle, Upload, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

const SPECIALIZATIONS = [
    "Generative AI", "Prompt Engineering", "Machine Learning", "Computer Vision",
    "NLP", "AI Strategy", "RAG", "AI Agents", "Python for AI", "AI Ethics"
];

const LANGUAGES = ["Hebrew", "English", "Russian", "Arabic"];

export default function OnboardingWizard({ lang }: { lang: string }) {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', password: '',
        title: '', company: '', linkedin: '', cv: '',
        profile_image: '',
        specializations: [] as string[],
        languages: [] as string[],
        bio: '', experience_bullets: ['', '', ''],
        offerings: [] as any[]
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckbox = (option: string, field: 'specializations' | 'languages') => {
        setFormData(prev => {
            const list = prev[field];
            if (list.includes(option)) {
                return { ...prev, [field]: list.filter(item => item !== option) };
            } else {
                return { ...prev, [field]: [...list, option] };
            }
        });
    };

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = async () => {
        setLoading(true);
        const res = await saveExpertProfile(formData, lang);
        if (res.success) {
            router.push(`/${lang}/expert/pending`);
        } else {
            alert("Something went wrong. Please try again.");
            setLoading(false);
        }
    };

    // --- STEPS ---

    const Step1_BasicInfo = () => (
        <div>
            <h2 className={styles.stepTitle}>Tell us about yourself</h2>
            <div className={styles.grid}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input className={styles.input} name="name" value={formData.name} onChange={handleChange} placeholder="Israel Israeli" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input className={styles.input} name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Phone</label>
                    <input className={styles.input} name="phone" value={formData.phone} onChange={handleChange} placeholder="050-1234567" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input className={styles.input} name="password" type="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Professional Title</label>
                    <input className={styles.input} name="title" value={formData.title} onChange={handleChange} placeholder="Senior AI Engineer" />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Current Company</label>
                    <input className={styles.input} name="company" value={formData.company} onChange={handleChange} placeholder="TechCorp" />
                </div>
                <div className={styles.formGroup} style={{ gridColumn: '1/-1' }}>
                    <label className={styles.label}>LinkedIn Profile</label>
                    <input className={styles.input} name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/..." />
                </div>
            </div>
        </div>
    );

    const Step2_Skills = () => (
        <div>
            <h2 className={styles.stepTitle}>Your Expertise</h2>

            <label className={styles.label} style={{ marginBottom: '1rem' }}>Active Fields (Choose at least 2)</label>
            <div className={styles.grid}>
                {SPECIALIZATIONS.map(spec => (
                    <div
                        key={spec}
                        className={`${styles.checkboxCard} ${formData.specializations.includes(spec) ? styles.selected : ''}`}
                        onClick={() => handleCheckbox(spec, 'specializations')}
                    >
                        <div style={{ width: 20, height: 20, borderRadius: 4, border: '1px solid #555', background: formData.specializations.includes(spec) ? '#6366f1' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {formData.specializations.includes(spec) && <CheckCircle size={14} color="#fff" />}
                        </div>
                        {spec}
                    </div>
                ))}
            </div>

            <label className={styles.label} style={{ marginTop: '2rem', marginBottom: '1rem' }}>Languages</label>
            <div className={styles.grid}>
                {LANGUAGES.map(option => (
                    <div
                        key={option}
                        className={`${styles.checkboxCard} ${formData.languages.includes(option) ? styles.selected : ''}`}
                        onClick={() => handleCheckbox(option, 'languages')}
                    >
                        <div style={{ width: 20, height: 20, borderRadius: 4, border: '1px solid #555', background: formData.languages.includes(option) ? '#6366f1' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {formData.languages.includes(option) && <CheckCircle size={14} color="#fff" />}
                        </div>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );

    const Step3_Bio = () => (
        <div>
            <h2 className={styles.stepTitle}>Bio & Experience</h2>

            <div className={styles.formGroup}>
                <label className={styles.label}>Short Bio (500 chars max)</label>
                <textarea className={styles.textarea} name="bio" value={formData.bio} onChange={handleChange} maxLength={500} placeholder="I am a Senior AI Engineer with 8 years of experience..." />
                <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#666' }}>{formData.bio.length}/500</div>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Key Highlights (Bullets)</label>
                {formData.experience_bullets.map((bullet, i) => (
                    <input
                        key={i}
                        className={styles.input}
                        style={{ marginBottom: '0.5rem' }}
                        value={bullet}
                        onChange={(e) => {
                            const newBullets = [...formData.experience_bullets];
                            newBullets[i] = e.target.value;
                            setFormData({ ...formData, experience_bullets: newBullets });
                        }}
                        placeholder={`Highlight #${i + 1}`}
                    />
                ))}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Upload CV (PDF)</label>
                <div style={{ border: '2px dashed rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '2rem', textAlign: 'center', cursor: 'pointer' }}>
                    <Upload size={32} color="#666" style={{ marginBottom: '1rem' }} />
                    <p style={{ color: '#999' }}>Click to upload CV (Simulated)</p>
                </div>
            </div>
        </div>
    );

    const Step4_Offerings = () => {
        const addOffering = () => {
            setFormData(prev => ({
                ...prev,
                offerings: [...prev.offerings, { title: '', type: 'lecture', description: '', price: '', duration: '90', format: ['Zoom'], level: ['Beginner'], includes: '' }]
            }));
        };

        const updateOffering = (index: number, field: string, value: any) => {
            const newOfferings = [...formData.offerings];
            newOfferings[index] = { ...newOfferings[index], [field]: value };
            setFormData(prev => ({ ...prev, offerings: newOfferings }));
        };

        return (
            <div>
                <h2 className={styles.stepTitle}>Your Offerings</h2>
                <p style={{ textAlign: 'center', color: '#999', marginBottom: '2rem' }}>What sessions do you want to offer?</p>

                {formData.offerings.map((offering, i) => (
                    <div key={i} className={styles.offeringCard}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h3 className={styles.label}>Offering #{i + 1}</h3>
                            <Trash2
                                size={18}
                                color="#ef4444"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    const newOfferings = formData.offerings.filter((_, idx) => idx !== i);
                                    setFormData(prev => ({ ...prev, offerings: newOfferings }));
                                }}
                            />
                        </div>

                        <div className={styles.grid}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Title</label>
                                <input className={styles.input} value={offering.title} onChange={(e) => updateOffering(i, 'title', e.target.value)} placeholder="e.g. ChatGPT for Managers" />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Type</label>
                                <select className={styles.select} value={offering.type} onChange={(e) => updateOffering(i, 'type', e.target.value)}>
                                    <option value="lecture">Lecture (90 min)</option>
                                    <option value="workshop">Workshop (Half Day)</option>
                                    <option value="advisory">Advisory (Hourly)</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Price (NIS)</label>
                                <input className={styles.input} type="number" value={offering.price} onChange={(e) => updateOffering(i, 'price', e.target.value)} placeholder="5000" />
                            </div>
                            <div className={styles.formGroup} style={{ gridColumn: '1/-1' }}>
                                <label className={styles.label}>Description</label>
                                <textarea className={styles.textarea} style={{ minHeight: 80 }} value={offering.description} onChange={(e) => updateOffering(i, 'description', e.target.value)} />
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.addBtn} onClick={addOffering}>
                    <Plus size={20} /> Add Offering
                </div>
            </div>
        );
    };

    return (
        <div className={styles.container}>
            {/* Progress Bar */}
            <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${((step - 1) / 3) * 100}%` }} />
                {[1, 2, 3, 4].map(num => (
                    <div key={num} className={`${styles.progressStep} ${step >= num ? styles.active : ''} ${step > num ? styles.completed : ''}`}>
                        {step > num ? <CheckCircle size={20} /> : num}
                    </div>
                ))}
            </div>

            {/* Steps Render */}
            {step === 1 && <Step1_BasicInfo />}
            {step === 2 && <Step2_Skills />}
            {step === 3 && <Step3_Bio />}
            {step === 4 && <Step4_Offerings />}

            {/* Navigation */}
            <div className={styles.actions} style={{ flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                {step === 4 && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', padding: '1.2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', maxWidth: '600px', margin: '0 auto' }}>
                        <input
                            type="checkbox"
                            id="terms-expert"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            style={{ marginTop: '0.3rem', cursor: 'pointer', width: '20px', height: '20px' }}
                        />
                        <label htmlFor="terms-expert" style={{ fontSize: '0.85rem', color: '#aaa', cursor: 'pointer', lineHeight: '1.5', textAlign: lang === 'he' ? 'right' : 'left' }}>
                            {lang === 'he' ? (
                                <span>אני מאשר/ת שקראתי והסכמתי ל-<Link href={`/${lang}/terms`} target="_blank" style={{ color: '#6366f1', textDecoration: 'underline' }}>תנאי השימוש</Link>. אני מבין/ה כי האתר משמש כפלטפורמת קישור בלבד, וכל הסדר כספי או עבודה מתבצע ישירות מול הלקוח ובאחריותי הבלעדית.</span>
                            ) : (
                                <span>I agree to the <Link href={`/${lang}/terms`} target="_blank" style={{ color: '#6366f1', textDecoration: 'underline' }}>Terms of Service</Link>. I understand that this site is a lead-generation platform only, and I am solely responsible for all work and payment arrangements with the client.</span>
                            )}
                        </label>
                    </div>
                )}

                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: '1rem' }}>
                    {step > 1 ? (
                        <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleBack}>Back</button>
                    ) : <div />}

                    {step < 4 ? (
                        <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleNext}>Next Step</button>
                    ) : (
                        <button
                            className={`${styles.btn} ${styles.btnPrimary}`}
                            onClick={handleSubmit}
                            disabled={loading || !agreedToTerms}
                            style={{ opacity: agreedToTerms ? 1 : 0.5, cursor: agreedToTerms ? 'pointer' : 'not-allowed' }}
                        >
                            {loading ? 'Submitting...' : 'Submit Profile'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
