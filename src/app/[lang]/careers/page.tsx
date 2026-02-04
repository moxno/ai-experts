
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";
import CareerForm from "./CareerForm";
import { Briefcase, FileCheck, Users, ArrowRight, Zap, GraduationCap, TrendingUp, Code2 } from "lucide-react";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const isHe = lang === 'he';
    return {
        title: isHe ? 'קריירה ב-AI Experts | הצטרפו לנבחרת המומחים' : 'Careers at AI Experts | Join the Elite Team',
        description: isHe
            ? 'אנחנו מחפשים את המוחות המבריקים בתחום הבינה המלאכותית. מומחי אוטומציה, מרצים, מפתחים ויועצים אסטרטגיים - מקומכם איתנו.'
            : 'We are looking for the brightest minds in AI. Automation experts, lecturers, developers, and strategy consultants - join us.',
    };
}

const ICONS_MAP: Record<string, any> = {
    "automation": Zap,
    "lecturer": GraduationCap,
    "strategy": TrendingUp,
    "developer": Code2
};

export default async function CareersPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);
    const isRtl = lang === 'he';

    return (
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>

            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.title}>{dict.careersPage.hero.title}</h1>
                <p className={styles.subtitle}>{dict.careersPage.hero.subtitle}</p>
            </section>

            {/* Open Positions Grid */}
            <section className={styles.demandsSection} style={{ background: 'transparent', padding: '0 0 4rem 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className={styles.demandTitle} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {dict.careersPage.openPositions?.title || "We are hiring"}
                    </h2>
                    <p style={{ color: '#aaa' }}>{dict.careersPage.openPositions?.subtitle}</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {dict.careersPage.openPositions?.jobs.map((job: any) => {
                        const Icon = ICONS_MAP[job.id] || Briefcase;
                        return (
                            <div key={job.id} className="glass-panel" style={{
                                padding: '2rem',
                                borderRadius: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.2s',
                                border: '1px solid var(--border)'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    background: 'rgba(var(--primary-rgb), 0.1)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    color: 'var(--primary)'
                                }}>
                                    <Icon size={24} />
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>{job.title}</h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>
                                    {job.description}
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                    {job.tags.map((tag: string) => (
                                        <span key={tag} style={{
                                            fontSize: '0.75rem',
                                            padding: '0.2rem 0.6rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            borderRadius: '20px',
                                            color: '#ccc'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href="#application-form" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--primary)',
                                    textDecoration: 'none',
                                    fontWeight: 500
                                }}>
                                    {lang === 'he' ? 'הגש מועמדות' : 'Apply Now'} <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Benefits Grid */}
            <section className={styles.benefitsSection} style={{ marginBottom: '6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                        <div className={styles.iconWrapper} style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                            <Briefcase size={28} />
                        </div>
                        <h3 className={styles.benefitTitle} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{dict.careersPage.benefits.leads.title}</h3>
                        <p className={styles.benefitDesc} style={{ color: '#aaa', lineHeight: '1.6' }}>{dict.careersPage.benefits.leads.desc}</p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                        <div className={styles.iconWrapper} style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', color: '#10b981', marginBottom: '1.5rem' }}>
                            <FileCheck size={28} />
                        </div>
                        <h3 className={styles.benefitTitle} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{dict.careersPage.benefits.admin.title}</h3>
                        <p className={styles.benefitDesc} style={{ color: '#aaa', lineHeight: '1.6' }}>{dict.careersPage.benefits.admin.desc}</p>
                    </div>

                    <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                        <div className={styles.iconWrapper} style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '50%', color: '#ec4899', marginBottom: '1.5rem' }}>
                            <Users size={28} />
                        </div>
                        <h3 className={styles.benefitTitle} style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{dict.careersPage.benefits.community.title}</h3>
                        <p className={styles.benefitDesc} style={{ color: '#aaa', lineHeight: '1.6' }}>{dict.careersPage.benefits.community.desc}</p>
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="application-form" className={styles.formSection}>
                <CareerForm dict={dict} />
            </section>

        </div>
    );
}
