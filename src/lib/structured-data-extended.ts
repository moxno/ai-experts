import { BASE_URL } from './structured-data';

/**
 * Generate BreadcrumbList Schema for navigation hierarchy
 */
export function generateBreadcrumbSchema(breadcrumbs: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
        }))
    };
}

/**
 * Enhanced Person schema with more details for expert profiles
 */
export function generateExpertSchema(expert: any, lang: 'he' | 'en' = 'he') {
    const isHe = lang === 'he';
    const displayName = (!isHe && expert.name_he) ? expert.name_he : expert.name;
    const displayTitle = isHe ? expert.title_en : expert.title_he;
    const displayBio = ((!isHe && expert.bio_he) ? expert.bio_he : expert.bio_en) || "";

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": displayName,
        "jobTitle": displayTitle,
        "description": displayBio.substring(0, 160),
        "image": expert.profile_image,
        "url": `${BASE_URL}/${lang}/experts/${expert.slug}`,
        ...(expert.company && {
            "worksFor": {
                "@type": "Organization",
                "name": expert.company
            }
        }),
        ...(expert.linkedin_profile && {
            "sameAs": [expert.linkedin_profile]
        }),
        ...(expert.total_reviews > 0 && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": expert.average_rating,
                "reviewCount": expert.total_reviews,
                "bestRating": 5,
                "worstRating": 1
            }
        }),
        ...(expert.hourly_rate_nis && {
            "priceRange": `₪${expert.hourly_rate_nis}/hour`
        })
    };
}
