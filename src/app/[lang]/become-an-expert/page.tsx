import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import { CheckCircle, ArrowRight, DollarSign, Users, Briefcase, Zap } from 'lucide-react';
import styles from './page.module.css';

export default async function BecomeExpertPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'he' | 'en');
    const t = dict.becomeExpert;
    const isHe = lang === 'he';

    return (
        <main className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{t.heroTitle}</h1>
                    <p className={styles.subtitle}>{t.heroSub}</p>
                    <div className={styles.ctaButtons}>
                        <Link href={`/${lang}/expert/signup`} className={styles.primaryBtn}>
                            {t.joinNow}
                        </Link>
                        <Link href={`/${lang}/experts`} className={styles.secondaryBtn}>
                            {t.seeExample}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className={styles.section} style={{ background: '#0a0a0a' }}>
                <h2 className={styles.sectionTitle}>{t.trust.title}</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>{t.trust.suitableFor}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {t.trust.roles.map((role: string, i: number) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: '#cbd5e1' }}>
                                    <CheckCircle size={18} color="#10b981" />
                                    {role}
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#64748b' }}>{t.trust.note}</p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>{t.benefits.title}</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <Users size={24} color="#6366f1" />
                                <div>
                                    <strong style={{ color: '#fff', display: 'block' }}>{t.benefits.item1}</strong>
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <DollarSign size={24} color="#10b981" />
                                <div>
                                    <strong style={{ color: '#fff', display: 'block' }}>{t.benefits.item2}</strong>
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <Briefcase size={24} color="#ec4899" />
                                <div>
                                    <strong style={{ color: '#fff', display: 'block' }}>{t.benefits.item3}</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t.howItWorks.title}</h2>
                <div className={styles.steps}>
                    {[t.howItWorks.step1, t.howItWorks.step2, t.howItWorks.step3, t.howItWorks.step4].map((step: any, i) => (
                        <div key={i} className={styles.step}>
                            <div className={styles.stepNumber}>{i + 1}</div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{step.title}</h3>
                            <p style={{ color: '#94a3b8' }}>{step.desc}</p>
                            {i < 3 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '25px',
                                    right: isHe ? 'auto' : '-50%',
                                    left: isHe ? '-50%' : 'auto',
                                    width: '100%',
                                    height: '2px',
                                    background: '#333',
                                    zIndex: -1,
                                    display: 'none' // Hidden on mobile, could be shown on desktop with media query
                                }} className="desktop-only" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Earnings Potential hidden at user request */}
            {/* 
            <section className={styles.section} style={{ borderRadius: '1.5rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.1))', padding: '4rem 2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                ...
            </section>
            */}

            {/* FAQ */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>{t.faq.title}</h2>
                <div className={styles.faqGrid}>
                    <div className={styles.faqItem}>
                        <h3 className={styles.question}>{t.faq.q1}</h3>
                        <p className={styles.answer}>{t.faq.a1}</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3 className={styles.question}>{t.faq.q2}</h3>
                        <p className={styles.answer}>{t.faq.a2}</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3 className={styles.question}>{t.faq.q3}</h3>
                        <p className={styles.answer}>{t.faq.a3}</p>
                    </div>
                    <div className={styles.faqItem}>
                        <h3 className={styles.question}>{t.faq.q4}</h3>
                        <p className={styles.answer}>{t.faq.a4}</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.finalCta}>
                <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>{t.cta.title}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Link href={`/${lang}/expert/signup`} className={styles.primaryBtn} style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
                        {t.cta.button}
                    </Link>
                    <p style={{ color: '#64748b' }}>{t.cta.contact}</p>
                </div>
            </section>
        </main>
    );
}
