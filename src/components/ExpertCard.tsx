
import Link from 'next/link';
import Image from 'next/image';
import { Star, User } from 'lucide-react';
import styles from './ExpertCard.module.css';

interface ExpertProps {
    slug: string;
    name: string;
    name_he?: string | null;
    title_he?: string | null;
    title_en?: string | null;
    profile_image?: string | null;
    average_rating: number;
    total_reviews: number;
    specializations_he?: string | null;
    specializations_en?: string | null;
    specializations_list?: {
        slug: string;
        name_he: string;
        name_en: string;
    }[];
    hourly_rate_usd?: number | null;
    hourly_rate_nis?: number | null;
    verified: boolean;
}

export default function ExpertCard({ expert, lang, dict }: { expert: ExpertProps, lang: string, dict: any }) {
    const isEn = lang === 'en';

    // Localization Logic
    const displayName = (!isEn && expert.name_he) ? expert.name_he : expert.name;
    const displayTitle = isEn ? expert.title_en : expert.title_he;

    // Prioritize the new many-to-many tags, fallback to CSV string
    let specs: string[] = [];
    if (expert.specializations_list && expert.specializations_list.length > 0) {
        specs = expert.specializations_list.map(s => isEn ? s.name_en : s.name_he);
    } else {
        const specsRaw = (isEn ? expert.specializations_en : expert.specializations_he) || "";
        specs = specsRaw ? specsRaw.split(',').map((s: string) => s.trim()) : [];
    }
    const visibleSpecs = specs.slice(0, 3);

    // Pricing Logic (Display in NIS)
    const priceNIS = expert.hourly_rate_nis || (expert.hourly_rate_usd ? expert.hourly_rate_usd * 3.7 : 550);
    const formattedPrice = lang === 'he'
        ? `${Math.round(priceNIS).toLocaleString()} ₪`
        : `₪${Math.round(priceNIS).toLocaleString()}`;

    const CardContent = () => (
        <>
            <div className={styles.imageWrapper}>
                <div className={styles.filterOverlay} />
                {!expert.verified && (
                    <div className={styles.unverifiedBadge}>
                        {dict.pendingApproval || 'Pending Approval'}
                    </div>
                )}
                {expert.profile_image ? (
                    <Image
                        src={expert.profile_image}
                        alt={`${displayName} - ${displayTitle}`}
                        fill
                        className={`${styles.image} ${!expert.verified ? styles.blur : ''}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                    />
                ) : (
                    <div className={`${styles.image} ${!expert.verified ? styles.blur : ''}`} style={{ background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={64} color="#555" />
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <div>
                        <h3 className={styles.name}>{displayName}</h3>
                        <p className={styles.title}>{displayTitle}</p>
                    </div>
                </div>

                <div className={styles.tags}>
                    {visibleSpecs.map((s, i) => (
                        <span key={i} className={styles.tag}>{s}</span>
                    ))}
                </div>

                <div className={styles.footer}>
                    {/* Price hidden at user request */}

                    <div className={styles.rating}>
                        <Star size={14} fill="currentColor" />
                        <span style={{ fontWeight: 600 }}>{expert.average_rating.toFixed(1)}</span>
                        <span style={{ color: '#666' }}>({expert.total_reviews})</span>
                    </div>
                </div>
            </div>
        </>
    );

    if (!expert.verified) {
        return (
            <div className={styles.card} style={{ cursor: 'default', opacity: 0.8 }}>
                <CardContent />
            </div>
        );
    }

    return (
        <Link
            href={`/${lang}/experts/${expert.slug}`}
            className={styles.card}
            aria-label={`${dict.viewProfile || 'View profile of'} ${displayName}`}
        >
            <CardContent />
        </Link>
    );
}
