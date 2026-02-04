
import { PrismaClient } from '@prisma/client';

const experts = [
    {
        "id": "15a0f4bb-18a1-4155-ad06-098192a65c34",
        "slug": "ilya-sibiryakov",
        "name": "Ilya Sibiryakov",
        "name_he": "איליה סיביריאקוב",
        "bio": "Helping companies integrate LLMs and automation into their workflows. Ex-Google Deepmind.",
        "bio_he": "עוזר לחברות להטמיע LLMs ואוטומציה בתהליכי העבודה. יוצא Google Deepmind.",
        "bio_en": "Helping companies integrate LLMs and automation into their workflows. Ex-Google Deepmind.",
        "bio_long": "Ilya is a seasoned AI expert specializing in Large Language Models and prompt engineering...",
        "bio_long_he": "איליה הוא מומחה AI מנוסה המתמחה במודלי שפה גדולים והנדסת פרומפטים...",
        "bio_long_en": "Ilya is a seasoned AI expert specializing in Large Language Models and prompt engineering...",
        "profile_image": "/images/experts/ilya.png",
        "company": "Antigravity",
        "title": "AI Consultant & Engineer",
        "title_he": "יועץ ומהנדס AI",
        "title_en": "AI Consultant & Engineer",
        "specializations": "ChatGPT, Automation, ML, Python",
        "specializations_he": "ChatGPT, אוטומציה, ML, Python",
        "specializations_en": "ChatGPT, Automation, ML, Python",
        "average_rating": 4.9,
        "total_reviews": 24,
        "hourly_rate_usd": 250,
        "languages": "English, Russian, Hebrew",
        "verified": true,
        "active": true,
        "created_at": "2026-01-13T12:00:11.312Z",
        "updated_at": "2026-01-13T12:00:11.312Z"
    },
    {
        "id": "1d1470b2-4233-4971-8b6f-4ea144be75f0",
        "slug": "sarah-cohen",
        "name": "Sarah Cohen",
        "name_he": "שרה כהן",
        "bio": "Expert in predictive analytics and business intelligence.",
        "bio_he": "מומחית לאנליטיקה חיזויית ובינה עסקית.",
        "bio_en": "Expert in predictive analytics and business intelligence.",
        "bio_long": null,
        "profile_image": "/images/experts/sarah.png",
        "company": "TechFlow",
        "title": "Data Science Lead",
        "title_he": "מובילת מדעי נתונים",
        "title_en": "Data Science Lead",
        "specializations": "Data Science, Analytics, Python, SQL",
        "specializations_he": "מדעי נתונים, אנליטיקה, Python, SQL",
        "specializations_en": "Data Science, Analytics, Python, SQL",
        "average_rating": 4.8,
        "total_reviews": 12,
        "hourly_rate_usd": 180,
        "languages": "Hebrew, English",
        "verified": true,
        "active": true,
        "created_at": "2026-01-13T12:00:11.315Z",
        "updated_at": "2026-01-13T12:00:11.315Z"
    },
    {
        "id": "40e6c66c-795f-4013-97f1-314dc66a7c8a",
        "slug": "david-levi",
        "name": "David Levi",
        "name_he": "דוד לוי",
        "bio": "Creative director specializing in Midjourney and Stable Diffusion.",
        "bio_he": "מנהל קריאייטיב המתמחה ב-Midjourney ו-Stable Diffusion.",
        "bio_en": "Creative director specializing in Midjourney and Stable Diffusion.",
        "bio_long": null,
        "profile_image": "/images/experts/david.png",
        "company": "CreativeAI",
        "title": "Generative AI Artist",
        "title_he": "אמן Generative AI",
        "title_en": "Generative AI Artist",
        "specializations": "Midjourney, Stable Diffusion, Art Direction",
        "specializations_he": "Midjourney, Stable Diffusion, ניהול אמנותי",
        "specializations_en": "Midjourney, Stable Diffusion, Art Direction",
        "average_rating": 5,
        "total_reviews": 8,
        "hourly_rate_usd": 200,
        "languages": "Hebrew, English",
        "verified": true,
        "active": true,
        "created_at": "2026-01-13T12:00:11.317Z",
        "updated_at": "2026-01-13T12:00:11.317Z"
    },
    {
        "id": "52f7d88e-806g-5124-00e2-425ed77b8d9c",
        "slug": "stas-leviatan",
        "name": "Stas Leviatan",
        "name_he": "סטס לוויתן",
        "bio": "CEO of Lightsite.io. Specializing in LLM Optimization (LLMO) and Brand Visibility.",
        "bio_he": "מנכ\"ל Lightsite.io. מתמחה באופטימיזציה למודלי שפה (LLMO) ונראות מותג.",
        "bio_en": "CEO of Lightsite.io. Specializing in LLM Optimization (LLMO) and Brand Visibility.",
        "bio_long": "Stas is the CEO of Lightsite.io. He focuses on ensuring brands and websites are perfectly visible and optimized across all major Large Language Models (LLMs), defining the new standard of SEO for the AI era.",
        "bio_long_he": "סטס הוא המנכ\"ל של Lightsite.io. הוא מתמקד בוידוא שמותגים ואתרים נראים בצורה מושלמת ועוברים אופטימיזציה בכל מודלי השפה הגדולים (LLMs) המובילים, ומגדיר את הסטנדרט החדש של SEO לעידן ה-AI.",
        "bio_long_en": "Stas is the CEO of Lightsite.io. He focuses on ensuring brands and websites are perfectly visible and optimized across all major Large Language Models (LLMs), defining the new standard of SEO for the AI era.",
        "profile_image": "/images/experts/stas.png",
        "company": "LightSite",
        "title": "CEO @ Lightsite.io",
        "title_he": "מנכ\"ל @ Lightsite.io",
        "title_en": "CEO @ Lightsite.io",
        "specializations": "LLM Optimization, AI SEO, Brand Visibility, Strategy",
        "specializations_he": "LLM Optimization, AI SEO, נראות מותג, אסטרטגיה",
        "specializations_en": "LLM Optimization, AI SEO, Brand Visibility, Strategy",
        "average_rating": 5.0,
        "total_reviews": 42,
        "hourly_rate_usd": 300,
        "languages": "Hebrew, English, Russian",
        "verified": true,
        "active": true,
        "created_at": "2026-01-23T12:00:00.000Z",
        "updated_at": "2026-01-23T12:00:00.000Z"
    },
    {
        "id": "63g8e99f-917h-6235-11f3-536fe88c9e0d",
        "slug": "maya-regev",
        "name": "Maya Regev",
        "name_he": "מאיה רגב",
        "bio": "Marketing Automation Specialist using GenAI tools.",
        "bio_he": "מומחית לאוטומציה שיווקית באמצעות כלי GenAI.",
        "bio_en": "Marketing Automation Specialist using GenAI tools.",
        "bio_long": "Maya helps marketing teams scale their content production and personalization efforts using the latest Generative AI tools.",
        "bio_long_he": "מאיה עוזרת לצוותי שיווק להגדיל את ייצור התוכן ומאמצי הפרסונליזציה שלהם באמצעות כלי הבינה המלאכותית היוצרת החדשים ביותר.",
        "bio_long_en": "Maya helps marketing teams scale their content production and personalization efforts using the latest Generative AI tools.",
        "profile_image": "/images/experts/maya.png",
        "company": "GrowthAI",
        "title": "AI Marketing Specialist",
        "title_he": "מומחית שיווק AI",
        "title_en": "AI Marketing Specialist",
        "specializations": "Marketing, Copywriting, Jasper, Automation",
        "specializations_he": "שיווק, קופירייטינג, Jasper, אוטומציה",
        "specializations_en": "Marketing, Copywriting, Jasper, Automation",
        "average_rating": 4.9,
        "total_reviews": 18,
        "hourly_rate_usd": 160,
        "languages": "Hebrew, English",
        "verified": true,
        "active": true,
        "created_at": "2026-01-23T12:00:00.000Z",
        "updated_at": "2026-01-23T12:00:00.000Z"
    }
];

const supabase = new PrismaClient();

async function main() {
    console.log('Seeding to Supabase...');
    for (const expert of experts) {
        // Convert string timestamps to Date objects
        const data = {
            ...expert,
            created_at: new Date(expert.created_at),
            updated_at: expert.updated_at ? new Date(expert.updated_at) : new Date(),
        };

        await supabase.expert.upsert({
            where: { id: expert.id },
            update: data,
            create: data,
        });
        console.log(`Upserted expert: ${expert.name}`);
    }
    console.log('Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await supabase.$disconnect();
    });
