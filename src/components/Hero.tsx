'use client';

import Link from 'next/link';
import { Sparkles, Users, Calendar } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ lang, dict }: { lang: 'he' | 'en', dict: any }) {
    if (!dict) return <section className={styles.hero} style={{ minHeight: '90vh' }} />;

    return (
        <section
            className={styles.hero}
        >
            <div className={styles.heroBackground}>
                <div className={styles.overlay} />
            </div>


            <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className={styles.badge}>
                    <Sparkles size={14} />
                    <span>{dict.home.heroBadge}</span>
                </div>

                <h1 className={styles.headline}>
                    {dict.home.heroTitle}
                </h1>

                <p className={styles.subhead}>
                    {dict.home.heroSub}
                </p>

                <div className={styles.actions}>
                    <Link
                        href={`/${lang}/experts`}
                        className={styles.primaryBtn}
                        aria-label={dict.home.browseExperts}
                    >
                        {dict.home.browseExperts}
                    </Link>
                    <Link
                        href={`/${lang}/become-an-expert`}
                        className={styles.secondaryBtn}
                        aria-label={dict.home.becomeSpeaker}
                    >
                        {dict.home.becomeSpeaker}
                    </Link>
                </div>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <Sparkles size={18} color="#6366f1" />
                        <span className={styles.statValue}>4.8★</span> {dict.home.avgRating}
                    </div>
                    <div className={styles.division} />
                    <div className={styles.statItem}>
                        <Users size={18} color="#ec4899" />
                        <span className={styles.statValue}>{dict.home.verifiedExperts.split(' ')[0]}</span> {dict.home.verifiedExperts.split(' ').slice(1).join(' ')}
                    </div>
                    <div className={styles.division} />
                    <div className={styles.statItem}>
                        <Calendar size={18} color="#10b981" />
                        <span className={styles.statValue}>42+</span> {dict.home.successfulBookings}
                    </div>
                </div>
            </div>
        </section>
    );
}

