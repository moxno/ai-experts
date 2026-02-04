
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return {
        title: lang === 'he' ? 'מחירון ושקיפות | AI-Experts' : 'Pricing & Transparency | AI-Experts',
        description: 'Simple and transparent pricing model for AI experts and clients.',
    };
}

export default async function PricingPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);
    const isRtl = lang === 'he';

    const p = dict.pricingPage;

    return (
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>
            <header className={styles.header}>
                <h1 className={styles.title}>{p.title}</h1>
                <p className={styles.subtitle}>{p.subtitle}</p>
            </header>

            <div className={styles.grid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
                {/* Clients Card */}
                <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--primary)' }}></div>
                    <h2 className={styles.cardTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.clients.title}</h2>
                    <div className={styles.priceTag} style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem', color: '#fff' }}>{p.clients.price}</div>
                    <ul className={styles.featureList} style={{ listStyle: 'none', textAlign: 'left', display: 'inline-block' }}>
                        {p.clients.features.map((feature: string, i: number) => (
                            <li key={i} className={styles.featureItem} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ccc' }}>
                                <Check className={styles.check} size={20} color="#6366f1" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div style={{ marginTop: '2.5rem' }}>
                        <Link href={`/${lang}/tasks/new`} className="primary-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem' }}>
                            {dict.tasks.postTaskBtn} <ArrowRight size={18} className={isRtl ? "rotate-180" : ""} />
                        </Link>
                    </div>
                </div>

                {/* Experts Card */}
                <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: '#10b981' }}></div>
                    <h2 className={styles.cardTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.experts.title}</h2>
                    <div className={styles.priceTag} style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#fff' }}>{p.experts.price}</div>
                    <ul className={styles.featureList} style={{ listStyle: 'none', textAlign: 'left', display: 'inline-block' }}>
                        {p.experts.features.map((feature: string, i: number) => (
                            <li key={i} className={styles.featureItem} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#ccc' }}>
                                <Check className={styles.check} size={20} color="#10b981" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div style={{ marginTop: '2.5rem' }}>
                        <Link href={`/${lang}/register-expert`} className="secondary-btn" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                            {dict.home.ctaExpert.btn} <ArrowRight size={18} className={isRtl ? "rotate-180" : ""} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Commission Tiers hidden at user request */}
            {/* 
            <section className={styles.tiersSection}>
                ...
            </section>
            */}


        </div>
    );
}
