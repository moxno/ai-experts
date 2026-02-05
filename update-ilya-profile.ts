import { PrismaClient } from './src/generated/prisma';

const prisma = new PrismaClient();

async function updateIlyaProfile() {
    try {
        const bioHe = `מומחה לאורקסטרציה של מערכות בינה מלאכותית ולבניית פתרונות עסקיים מבוססי AI. בעל ניסיון מעשי בהטמעת מודלי שפה גדולים (LLMs) ואוטומציה של תהליכים עסקיים מורכבים.

מתמחה בפיתוח ויישום אסטרטגיות GEO (Generative Engine Optimization) לשיפור נראות מותגים ותוכן במנועי חיפוש מבוססי בינה מלאכותית ובמערכות כמו Google AI Overviews ומנועים גנרטיביים נוספים.

מלווה ארגונים ויזמים במינוף AI להאצת צמיחה, ייעול תהליכים ויצירת יתרון תחרותי מדיד.

יוצר ישויות טכנולוגיות מתקדמות המבוססות על Next.js, המותאמות לצרכים העסקיים של לקוחות, ומשלב בין מערכות AI, דאטה ותשתיות דיגיטליות ליצירת פתרונות יישומיים בקנה מידה ארגוני.`;

        const bioEn = `Expert in AI systems orchestration and building AI-powered business solutions. Experienced in implementing Large Language Models (LLMs) and automating complex business processes.

Specializes in developing and implementing GEO (Generative Engine Optimization) strategies to improve brand and content visibility in AI-powered search engines and systems like Google AI Overviews and other generative engines.

Guides organizations and entrepreneurs in leveraging AI to accelerate growth, optimize processes, and create measurable competitive advantages.

Creates advanced technological entities based on Next.js, tailored to clients' business needs, integrating AI systems, data, and digital infrastructure to deliver enterprise-scale practical solutions.`;

        // Find Ilya's expert record
        const expert = await prisma.expert.findFirst({
            where: {
                OR: [
                    { slug: 'ilya-sibiryakov' },
                    { name: { contains: 'Ilya', mode: 'insensitive' } },
                    { name_he: { contains: 'איליה' } }
                ]
            }
        });

        if (!expert) {
            console.error('Expert not found!');
            return;
        }

        console.log('Found expert:', expert.name, expert.slug);

        // Update the expert
        const updated = await prisma.expert.update({
            where: { id: expert.id },
            data: {
                bio_he: bioHe,
                bio_en: bioEn,
                title_he: 'מומחה AI Orchestration ו-GEO',
                title_en: 'AI Orchestration & GEO Expert',
            }
        });

        console.log('✅ Profile updated successfully!');
        console.log('Name:', updated.name);
        console.log('Slug:', updated.slug);
        console.log('Title (EN):', updated.title_en);
        console.log('Title (HE):', updated.title_he);
        console.log('Bio (EN) preview:', updated.bio_en?.substring(0, 100) + '...');
        console.log('Bio (HE) preview:', updated.bio_he?.substring(0, 100) + '...');

    } catch (error) {
        console.error('Error updating profile:', error);
    } finally {
        await prisma.$disconnect();
    }
}

updateIlyaProfile();
