import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Star, CheckCircle, Clock, Globe } from 'lucide-react';
import type { Metadata } from 'next';
import styles from './page.module.css';
import { getDictionary } from '@/dictionaries';
import ReviewForm from '@/components/ReviewForm';

export async function generateMetadata({ params }: { params: Promise<{ slug: string, lang: string }> }): Promise<Metadata> {
    const { slug, lang } = await params;
    const isEn = lang === 'en';
    const expert = await prisma.expert.findUnique({
        where: { slug: slug },
        select: { name: true, name_he: true, title_he: true, title_en: true, bio_he: true, bio_en: true, profile_image: true }
    });

    if (!expert) return { title: 'Expert Not Found' };

    const displayName = (!isEn && expert.name_he) ? expert.name_he : expert.name;
    const displayTitle = isEn ? expert.title_en : expert.title_he;
    const description = (expert.bio_he || expert.bio_en || '').substring(0, 160);
    const url = `https://ai-experts.co.il/${lang}/experts/${slug}`;

    return {
        title: `${displayName} - ${displayTitle} | מומחה AI`,
        description,
        alternates: {
            canonical: url
        },
        openGraph: {
            title: `${displayName} | מומחה בינה מלאכותית`,
            description,
            url,
            images: expert.profile_image ? [{ url: expert.profile_image }] : [],
            type: 'profile',
        }
    };
}

import { auth } from '@/auth';

export default async function ExpertProfile({ params }: { params: Promise<{ slug: string, lang: string }> }) {
    const session = await auth();
    const { slug, lang } = await params;
    const dict = await getDictionary(lang as 'he' | 'en');
    const isEn = lang === 'en';

    const expert = await prisma.expert.findUnique({
        where: { slug: slug },
        include: {
            offerings: { where: { active: true } },
            reviews: true
        }
    });

    if (!expert) notFound();

    // Localization Logic
    const displayName = (!isEn && expert.name_he) ? expert.name_he : expert.name;
    const displayTitle = isEn ? expert.title_en : expert.title_he;

    // Bio
    const displayBio = ((!isEn && expert.bio_he) ? expert.bio_he : expert.bio_en) || "";

    // Specializations
    const specsRaw = (isEn ? expert.specializations_en : expert.specializations_he) || "";
    const displaySpecs = specsRaw.split(',').map(s => s.trim());

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": displayName,
        "jobTitle": displayTitle,
        "description": displayBio.substring(0, 160),
        "image": expert.profile_image,
        "url": `https://ai-experts.co.il/${lang}/experts/${slug}`,
        "worksFor": {
            "@type": "Organization",
            "name": expert.company
        },
        ...(expert.total_reviews > 0 && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": expert.average_rating,
                "reviewCount": expert.total_reviews
            }
        })
    };

    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Link href={`/${lang}/experts`} className={styles.backLink}>
                {lang === 'he' ? '→ ' : '← '}{dict.profile.backToExperts}
            </Link>

            <div className={styles.header}>
                <div className={styles.imageWrapper}>
                    <div className={styles.filterOverlay} />
                    {expert.profile_image ? (
                        <Image
                            src={expert.profile_image}
                            alt={`${displayName} - ${displayTitle}`}
                            fill
                            className={styles.image}
                            priority
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                    ) : (
                        <div style={{ width: '100%', height: '100%', background: '#333' }} />
                    )}
                </div>

                <div className={styles.info}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                        <h1 className={styles.name}>
                            {displayName}
                            {expert.verified && (
                                <span
                                    title="Verified Expert"
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        verticalAlign: 'middle',
                                        marginLeft: '1rem',
                                        background: 'rgba(16, 185, 129, 0.1)',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '2rem',
                                        border: '1px solid rgba(16, 185, 129, 0.3)'
                                    }}>
                                    <CheckCircle size={20} color="#10b981" />
                                    <span style={{ fontSize: '0.8rem', color: '#10b981', marginLeft: '0.3rem', fontWeight: 600, letterSpacing: '0.05em' }}>VERIFIED</span>
                                </span>
                            )}
                        </h1>
                        {expert.linkedin_profile && (
                            <a href={expert.linkedin_profile} target="_blank" rel="noopener noreferrer" style={{ background: '#0077b5', padding: '0.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        )}
                    </div>
                    <p className={styles.title}>{displayTitle}</p>
                    <p className={styles.company}>{lang === 'he' ? 'ב-' : 'at'} {expert.company}</p>

                    <div className={styles.statsBar}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>
                                <Star size={20} fill="#fbbf24" color="#fbbf24" />
                                {expert.average_rating.toFixed(1)}
                            </div>
                            <div className={styles.statLabel}>{expert.total_reviews} {lang === 'he' ? 'ביקורות' : 'Reviews'}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>
                                <Globe size={20} color="#6366f1" />
                                {expert.languages.split(',').length}
                            </div>
                            <div className={styles.statLabel}>{lang === 'he' ? 'שפות' : 'Languages'}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue} style={{ color: '#10b981' }}>
                                98%
                            </div>
                            <div className={styles.statLabel}>{lang === 'he' ? 'שביעות רצון' : 'Satisfaction'}</div>
                        </div>
                    </div>

                    <div className={styles.tags}>
                        {displaySpecs.map((s, i) => (
                            <span key={i} className={styles.tag}>{s.trim()}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.bio}>
                <h2 className={styles.sectionTitle}>{dict.profile.about}</h2>
                <div dangerouslySetInnerHTML={{ __html: displayBio.replace(/\n/g, '<br />') }} />
            </div>

            <div style={{ marginBottom: '5rem' }}>
                <h2 className={styles.sectionTitle}>
                    {dict.profile.availableOfferings}
                </h2>

                <div className={styles.offeringsGrid}>
                    {expert.offerings.map(offering => (
                        <div key={offering.id} className={styles.offeringCard}>
                            <div className={styles.offeringHeader}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                    <h3 className={styles.offeringTitle} style={{ marginBottom: 0 }}>{offering.title}</h3>
                                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', letterSpacing: '0.05em', height: 'fit-content' }}>
                                        {offering.type}
                                    </span>
                                </div>
                                <div className={styles.offeringMeta}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {offering.duration_minutes} min</span>
                                    <span style={{ textTransform: 'capitalize' }}>• {offering.format}</span>
                                </div>
                                <p className={styles.offeringDesc}>{offering.description.substring(0, 120)}...</p>
                                {offering.includes && (
                                    <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.5rem', fontSize: '0.85rem', color: '#888' }}>
                                        <strong>{lang === 'he' ? 'כולל:' : 'Includes:'}</strong> {offering.includes}
                                    </div>
                                )}
                            </div>

                            <div className={styles.offeringFooter}>
                                <div className={styles.priceContainer}>
                                    <span className={styles.priceLabel}>{dict.booking.total}</span>
                                    <span className={styles.priceValue}>${offering.price_usd}</span>
                                </div>
                                <Link href={`/${lang}/book?offeringId=${offering.id}`} className={styles.bookBtn}>
                                    {dict.profile.bookNow}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: '5rem' }}>
                <h2 className={styles.sectionTitle}>{dict.profile.availability}</h2>
                <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '1.5rem', color: '#aaa' }}>{dict.profile.next30Days}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.8rem', margin: '0 auto' }}>
                        {[...Array(30)].map((_, i) => (
                            <div key={i} style={{
                                height: '40px',
                                borderRadius: '0.5rem',
                                background: Math.random() > 0.6 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.02)',
                                border: Math.random() > 0.6 ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                color: Math.random() > 0.6 ? '#10b981' : '#444',
                                cursor: 'default'
                            }}>
                                {i + 1}
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981' }}></div>
                            {lang === 'he' ? 'זמין' : 'Available'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#333' }}></div>
                            {lang === 'he' ? 'לא זמין' : 'Booked'}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className={styles.sectionTitle}>
                    {dict.profile.reviews} <span style={{ fontSize: '1.2rem', color: '#666', fontWeight: 400 }}>({expert.reviews.length})</span>
                </h2>

                <ReviewForm expertId={expert.id} dict={dict.reviews || {}} user={session?.user} />

                {expert.reviews.length > 0 ? (
                    <div className={styles.reviewsGrid}>
                        {expert.reviews.map(review => (
                            <div key={review.id} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>
                                            {review.company_name.charAt(0)}
                                        </div>
                                        <span style={{ fontWeight: 600 }}>{review.company_name}</span>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill={i < review.rating ? "#fbbf24" : "none"} color={i < review.rating ? "#fbbf24" : "#444"} />
                                        ))}
                                    </div>
                                </div>
                                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>{review.title}</h4>
                                <p style={{ color: '#aaa', lineHeight: '1.6', fontSize: '0.95rem' }}>"{review.text}"</p>
                                {review.verified && (
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: '#10b981' }}>
                                        <CheckCircle size={12} />
                                        {dict.profile.verifiedClient}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p style={{ color: '#666', fontStyle: 'italic' }}>{dict.profile.noReviews}</p>
                )}
            </div>
        </div>
    );
}
