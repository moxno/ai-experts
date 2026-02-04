
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Building2, MousePointerClick, ShieldCheck, ArrowRight, Star, ArrowLeft } from "lucide-react";

export default async function AboutPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);
    const isRtl = lang === 'he';
    const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

    return (
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>

            {/* Hero Section */}
            <section className={styles.hero} style={{ textAlign: 'center', padding: '4rem 0' }}>
                <h1 className={styles.title} style={{
                    fontSize: '3.5rem',
                    background: 'linear-gradient(to right, #fff, #94a3b8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>{dict.aboutPage.hero.title}</h1>
                <p className={styles.subtitle} style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto' }}>
                    {dict.aboutPage.hero.subtitle}
                </p>
            </section>

            {/* Mission / Story Section */}
            <section className={styles.missionSection}>
                <div className={styles.missionContent}>
                    <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{dict.aboutPage.mission.title}</h2>
                    <p className={styles.missionText} style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#ccc', marginBottom: '1rem' }}>{dict.aboutPage.mission.p1}</p>
                    <p className={styles.missionText} style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#ccc' }}>{dict.aboutPage.mission.p2}</p>
                </div>
                <div className={styles.missionImageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                        alt="Team meeting"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}></div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="glass-panel" style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '3rem',
                borderRadius: '1.5rem',
                margin: '4rem 0',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <div className={styles.statItem} style={{ textAlign: 'center' }}>
                    <div className={styles.statValue} style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>50+</div>
                    <div className={styles.statLabel} style={{ color: '#94a3b8' }}>{dict.aboutPage.stats.experts}</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div className={styles.statItem} style={{ textAlign: 'center' }}>
                    <div className={styles.statValue} style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>1,200+</div>
                    <div className={styles.statLabel} style={{ color: '#94a3b8' }}>{dict.aboutPage.stats.hours}</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div className={styles.statItem} style={{ textAlign: 'center' }}>
                    <div className={styles.statValue} style={{ fontSize: '2.5rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>4.9/5</div>
                    <div className={styles.statLabel} style={{ color: '#94a3b8' }}>{dict.aboutPage.stats.satisfaction}</div>
                </div>
            </section>

            {/* Features Grid */}
            <section className={styles.featuresSection} style={{ margin: '6rem 0' }}>
                <div className={styles.featuresGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Feature 1: Institutional */}
                    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', transition: 'transform 0.2s' }}>
                        <div className={styles.iconWrapper} style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            <Building2 size={40} />
                        </div>
                        <h3 className={styles.featureTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{dict.aboutPage.features.institutional.title}</h3>
                        <p className={styles.featureDesc} style={{ color: '#aaa', lineHeight: '1.6' }}>{dict.aboutPage.features.institutional.desc}</p>
                    </div>

                    {/* Feature 2: Booking */}
                    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', transition: 'transform 0.2s' }}>
                        <div className={styles.iconWrapper} style={{ marginBottom: '1.5rem', color: '#ec4899' }}>
                            <MousePointerClick size={40} />
                        </div>
                        <h3 className={styles.featureTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{dict.aboutPage.features.booking.title}</h3>
                        <p className={styles.featureDesc} style={{ color: '#aaa', lineHeight: '1.6' }}>{dict.aboutPage.features.booking.desc}</p>
                    </div>

                    {/* Feature 3: Quality */}
                    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', transition: 'transform 0.2s' }}>
                        <div className={styles.iconWrapper} style={{ marginBottom: '1.5rem', color: '#10b981' }}>
                            <ShieldCheck size={40} />
                        </div>
                        <h3 className={styles.featureTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{dict.aboutPage.features.quality.title}</h3>
                        <p className={styles.featureDesc} style={{ color: '#aaa', lineHeight: '1.6' }}>{dict.aboutPage.features.quality.desc}</p>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection} style={{
                textAlign: 'center',
                padding: '5rem 2rem',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.05))',
                borderRadius: '2rem',
                border: '1px solid rgba(255,255,255,0.05)',
                marginBottom: '4rem'
            }}>
                <h2 className={styles.ctaTitle} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{dict.aboutPage.cta.title}</h2>
                <p className={styles.ctaSub} style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '2.5rem', maxWidth: '600px', marginInline: 'auto' }}>{dict.aboutPage.cta.sub}</p>
                <Link href={`/${lang}/experts`} className={styles.ctaButton} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#fff',
                    color: '#000',
                    padding: '1rem 2.5rem',
                    borderRadius: '2rem',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    marginTop: '2rem'
                }}>
                    {dict.aboutPage.cta.btn}
                    <ArrowIcon size={20} />
                </Link>
            </section>

        </div>
    );
}
