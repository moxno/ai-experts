
import { PrismaClient } from '../src/generated/client';
const prisma = new PrismaClient();

const specializations = [
    {
        slug: 'generative-ai',
        name_he: 'בינה מלאכותית יוצרת (Generative AI)',
        name_en: 'Generative AI',
        description_he: 'מומחיות ביישומי LLM (כמו ChatGPT, Claude), מודלי דיפוזיה ליצירת תמונות, ופיתוח פתרונות מבוססי בינה מלאכותית יוצרת לארגונים.',
        description_en: 'Expertise in LLM applications (ChatGPT, Claude), Diffusion models for image generation, and developing generative AI-based solutions for organizations.'
    },
    {
        slug: 'ai-strategy',
        name_he: 'אסטרטגיה וייעוץ AI',
        name_en: 'AI Strategy & Consulting',
        description_he: 'בניית מפת דרכים להטמעת בינה מלאכותית בארגון, ניתוח כדאיות (ROI), ובחירת הטכנולוגיות המתאימות להשגת יעדים עסקיים.',
        description_en: 'Building a roadmap for AI implementation in the organization, feasibility analysis (ROI), and choosing the right technologies to achieve business goals.'
    },
    {
        slug: 'ai-automation',
        name_he: 'אוטומציה וסוכני AI',
        name_en: 'AI Automation & Agents',
        description_he: 'פיתוח סוכנים אוטונומיים, אוטומציות חכמות מבוססות AI וחיבור מערכות ארגוניות באמצעות כלים כמו Make, Zapier ו-LangChain.',
        description_en: 'Developing autonomous agents, AI-based smart automations, and connecting organizational systems using tools like Make, Zapier, and LangChain.'
    },
    {
        slug: 'mlops',
        name_he: 'MLOps ותשתית AI',
        name_en: 'MLOps & AI Infrastructure',
        description_he: 'ניהול מחזור החיים של מודלי למידת מכונה (Machine Learning), בניית צינורות נתונים (Data Pipelines) ופריסת מודלים בסביבות ייצור.',
        description_en: 'Managing the lifecycle of Machine Learning models, building Data Pipelines, and deploying models in production environments.'
    },
    {
        slug: 'computer-vision',
        name_he: 'ראייה ממוחשבת',
        name_en: 'Computer Vision',
        description_en: 'Processing and analyzing visual information: image recognition, video analysis, OCR, and visual quality control systems.',
        description_he: 'עיבוד וניתוח מידע חזותי: זיהוי תמונות, ניתוח וידאו, OCR, ומערכות בקרת איכות חזותית.'
    },
    {
        slug: 'ai-ethics-compliance',
        name_he: 'אתיקה ורגולציית AI',
        name_en: 'AI Ethics & Compliance',
        description_he: 'ייעוץ בנושאי רגולציה (כמו ה-EU AI Act), פרטיות מידע, אתיקה בשימוש בבינה מלאכותית והפחתת הטיות במודלים.',
        description_en: 'Consulting on regulatory issues (such as the EU AI Act), data privacy, ethics in AI usage, and reducing model bias.'
    },
    {
        slug: 'nlp',
        name_he: 'עיבוד שפה טבעית (NLP)',
        name_en: 'Natural Language Processing (NLP)',
        description_he: 'ניתוח טקסט מתקדם, בניית צ\'אטבוטים חכמים, ניתוח סנטימנט, ותרגום מכונה מותאם אישית.',
        description_en: 'Advanced text analysis, building smart chatbots, sentiment analysis, and custom machine translation.'
    }
];

async function main() {
    console.log('Start seeding specializations...');
    for (const spec of specializations) {
        await prisma.specialization.upsert({
            where: { slug: spec.slug },
            update: spec,
            create: spec,
        });
    }
    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
