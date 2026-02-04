
/**
 * Utility for generating JSON-LD Structured Data for AI Experts platform.
 */

export const BASE_URL = 'https://ai-experts.co.il';

export function generateOrganizationSchema(lang: 'he' | 'en' = 'he') {
    const isHe = lang === 'he';
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AI Experts Israel",
        "url": BASE_URL,
        "logo": `${BASE_URL}/logo.png`,
        "description": isHe
            ? "הנבחרת של מומחי הבינה המלאכותית בישראל להרצאות, סדנאות וייעוץ."
            : "Israel's leading network of AI experts for lectures, workshops, and consulting.",
        "sameAs": [
            "https://www.linkedin.com/company/ai-experts-israel",
            "https://facebook.com/aiexperts.co.il"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "Israel"
        }
    };
}

export function generateItemListSchema(tasks: any[], lang: 'he' | 'en' = 'he') {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": tasks.map((task, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `${BASE_URL}/${lang}/tasks/${task.slug}`,
            "name": task.title
        }))
    };
}

export function generateJobPostingSchema(task: any, lang: 'he' | 'en' = 'he') {
    const isHe = lang === 'he';
    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": task.title,
        "description": task.description,
        "datePosted": task.created_at,
        "validThrough": new Date(new Date(task.created_at).getTime() + 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days validity
        "employmentType": "CONTRACTOR", // Most AI consulting gigs are contractor based
        "hiringOrganization": {
            "@type": "Organization",
            "name": task.client_company || "AI Experts Marketplace",
            "url": BASE_URL
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "Israel"
            }
        },
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": "Israel"
        },
        ...(task.budget_range && {
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "ILS",
                "value": {
                    "@type": "QuantitativeValue",
                    "value": task.budget_range,
                    "unitText": "PROJECT"
                }
            }
        })
    };
}
