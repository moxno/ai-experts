
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'he' | 'en');
    return {
        title: `${dict.howItWorksPage.title} | AI Experts`,
        description: dict.howItWorksPage.subtitle,
    };
}

export default async function HowItWorksPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);
    const isRtl = lang === 'he';

    return (
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>
            <header className={styles.header}>
                <h1 className={styles.title}>{dict.howItWorksPage.title}</h1>
                <p className={styles.subtitle}>{dict.howItWorksPage.subtitle}</p>
            </header>

            {/* Client Process */}
            <section className={styles.section} style={{ marginBottom: '6rem' }}>
                <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{dict.howItWorksPage.clients.title}</h2>
                <div className={styles.stepsGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {dict.howItWorksPage.clients.steps.map((step: any, index: number) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', position: 'relative' }}>
                            <div className={styles.stepNumber} style={{
                                position: 'absolute', top: '-1rem', left: isRtl ? 'auto' : '-1rem', right: isRtl ? '-1rem' : 'auto',
                                width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff',
                                boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)'
                            }}>{index + 1}</div>
                            <h3 className={styles.stepTitle} style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                            <p className={styles.stepDesc} style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Expert Process */}
            <section className={styles.section} style={{ marginBottom: '6rem' }}>
                <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{dict.howItWorksPage.experts.title}</h2>
                <div className={styles.stepsGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {dict.howItWorksPage.experts.steps.map((step: any, index: number) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', position: 'relative', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                            <div className={styles.stepNumber} style={{
                                position: 'absolute', top: '-1rem', left: isRtl ? 'auto' : '-1rem', right: isRtl ? '-1rem' : 'auto',
                                width: '40px', height: '40px', background: 'var(--secondary)', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff',
                                boxShadow: '0 4px 10px rgba(236, 72, 153, 0.3)'
                            }}>{index + 1}</div>
                            <h3 className={styles.stepTitle} style={{ fontSize: '1.25rem', marginTop: '1rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                            <p className={styles.stepDesc} style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection} style={{ maxWidth: '800px', margin: '0 auto 6rem' }}>
                <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>{dict.howItWorksPage.faq.title}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {dict.howItWorksPage.faq.items.map((item: any, index: number) => (
                        <div key={index} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <div className={styles.faqQuestion} style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.q}</div>
                            <div className={styles.faqAnswer} style={{ color: '#bbb' }}>{item.a}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <div className={styles.ctaSection}>
                <h2 className={styles.sectionTitle}>{dict.howItWorksPage.cta.text}</h2>
                <div className={styles.ctaButtons}>
                    <Link href={`/${lang}/tasks/new`} className={styles.primaryBtn}>
                        {dict.howItWorksPage.cta.btnClient}
                    </Link>
                    <Link href={`/${lang}/register-expert`} className={styles.secondaryBtn}>
                        {dict.howItWorksPage.cta.btnExpert}
                    </Link>
                </div>
            </div>
        </div>
    );
}
