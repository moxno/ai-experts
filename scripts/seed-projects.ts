
import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

const projects = [
    {
        title: 'בניית בוט שירות לקוחות מבוסס RAG',
        slug: 'rag-customer-support-bot',
        description: 'אנחנו מחפשים מומחה לבניית צ\'אטבוט חכם שיכול לענות על שאלות מורכבות על בסיס מסמכי החברה. הבוט צריך להתממשק ל-WhatsApp ולתת תשובות מדויקות בעברית.',
        budget_range: '₪5,000 - ₪10,000',
        client_name: 'דנה לוי',
        client_email: 'service@startup-hub.io',
        client_company: 'Startup Hub Israel',
        status: 'open',
        specialization_slugs: ['chatgpt-llms', 'nlp']
    },
    {
        title: 'אוטומציה של תהליכי שיווק ב-Make.com',
        slug: 'marketing-automation-make',
        description: 'דרושה אוטומציה מורכבת המחברת בין ה-CRM לכלים ליצירת תוכן ב-AI (כמו Claude) לפרסום אוטומטי ברשתות חברתיות.',
        budget_range: '₪3,000 - ₪7,000',
        client_name: 'יוסי כהן',
        client_email: 'yossi@marketing-agency.co.il',
        client_company: 'Creative Media',
        status: 'open',
        specialization_slugs: ['ai-automation', 'ai-in-marketing', 'no-code-ai']
    },
    {
        title: 'הטמעת Midjourney ליצירת קריאייטיב לפרסום',
        slug: 'midjourney-ad-creatives',
        description: 'אנחנו מחפשים מעצב AI שיכול להדריך את הצוות שלנו איך להשתמש ב-Midjourney ליצירת תמונות פרסומיות ברמה גבוהה ובעקביות.',
        budget_range: '₪2,000 - ₪4,000',
        client_name: 'מיכל אברהם',
        client_email: 'michal@ad-studio.com',
        client_company: 'The Ad Studio',
        status: 'open',
        specialization_slugs: ['generative-ai', 'ai-in-marketing']
    },
    {
        title: 'מערכת זיהוי הונאות מבוססת AI לפינטק',
        slug: 'ai-fraud-detection-fintech',
        description: 'פיתוח מודל למידת מכונה לזיהוי חריגות בעסקאות כרטיסי אשראי בזמן אמת. נדרש ניסיון עם טנזור-פלו או פייתורץ\'.',
        budget_range: '₪20,000+',
        client_name: 'אריאל שרון',
        client_email: 'ariel@fintech-safe.com',
        client_company: 'FinSafe Israel',
        status: 'open',
        specialization_slugs: ['fintech-ai', 'data-science', 'cybersecurity-ai']
    },
    {
        title: 'ממשק קולי למערכת בית חכם',
        slug: 'voice-interface-smart-home',
        description: 'דרוש פיתוח של מנוע זיהוי דיבור ופקודות קוליות בעברית למערכת בקרה ביתית. דגש על מהירות תגובה ודיוק.',
        budget_range: '₪10,000 - ₪15,000',
        client_name: 'רון גרין',
        client_email: 'ron@smart-life.co.il',
        client_company: 'Smart Life',
        status: 'open',
        specialization_slugs: ['voice-ai', 'nlp']
    },
    {
        title: 'ניתוח רגשות לביקורות בעברית (NLP)',
        slug: 'sentiment-analysis-hebrew',
        description: 'פיתוח מודל המסוגל לנתח אלפי תגובות ברשתות חברתיות ולהבין את הסנטימנט (חיובי/שלילי/ניטרלי) במיוחד בסלנג ישראלי.',
        budget_range: '₪4,000 - ₪8,000',
        client_name: 'טל ברקוביץ\'',
        client_email: 'tal@brand-monitor.io',
        client_company: 'BrandMonitor',
        status: 'open',
        specialization_slugs: ['nlp', 'data-science']
    },
    {
        title: 'ראייה ממוחשבת לבקרת איכות במפעל',
        slug: 'computer-vision-quality-control',
        description: 'הטמעת מערכת מצלמות המזהה פגמים בשיער ייצור בעזרת Computer Vision. דרוש ניסיון ב-OpenCV וזיהוי אובייקטים.',
        budget_range: '₪15,000 - ₪25,000',
        client_name: 'עמית לוי',
        client_email: 'amit@industry-tech.co.il',
        client_company: 'IndustryTech',
        status: 'open',
        specialization_slugs: ['computer-vision', 'ai-automation']
    },
    {
        title: 'ChatGPT מותאם אישית לקליטת עובדים',
        slug: 'custom-chatgpt-onboarding',
        description: 'יצירת סוכן AI שעונה לעובדים חדשים על שאלות (נהלי חברה, ימי חופשה, פנסיה) על בסיס ספר העובד של הארגון.',
        budget_range: '₪3,000 - ₪5,000',
        client_name: 'דנה שפירא',
        client_email: 'hr@big-corp.co.il',
        client_company: 'BigCorp Israel',
        status: 'open',
        specialization_slugs: ['chatgpt-llms', 'generative-ai']
    },
    {
        title: 'ניתוח נתונים וחיזוי מכירות לרשת קמעונאית',
        slug: 'sales-forecasting-retail',
        description: 'בניית מודל לחיזוי מלאי ומכירות על בסיס נתוני עבר, חגים ומזג אוויר. חיבור לדאטה-בייס הקיים של הרשת.',
        budget_range: '₪10,000 - ₪20,000',
        client_name: 'איציק כהן',
        client_email: 'itzik@retail-group.co.il',
        client_company: 'Retail Group',
        status: 'open',
        specialization_slugs: ['data-science', 'ecommerce-ai']
    },
    {
        title: 'ביקורת אתיקה ורגולציה של AI לסטארטאפ',
        slug: 'ai-ethics-audit-startup',
        description: 'אנחנו מפתחים מוצר AI רגיש וזקוקים לליווי משפטי/אתי בנושאי פרטיות משתמשים וזכויות יוצרים בשימוש במודלי שפה.',
        budget_range: '₪500 - ₪1,500 לשעה',
        client_name: 'ניר צור',
        client_email: 'nir@legal-ai.io',
        client_company: 'Legal Guardians',
        status: 'open',
        specialization_slugs: ['ai-ethics-compliance', 'ai-strategy']
    }
];

async function main() {
    console.log('🚀 Seeding 10 projects...');
    for (const p of projects) {
        const { specialization_slugs, ...taskData } = p;

        // Find specializations by slug
        const specs = await prisma.specialization.findMany({
            where: { slug: { in: specialization_slugs } }
        });

        await prisma.task.upsert({
            where: { slug: p.slug },
            update: {},
            create: {
                ...taskData,
                specializations: {
                    connect: specs.map(s => ({ id: s.id }))
                }
            }
        });
        console.log(`✅ Seeded project: ${p.title}`);
    }
    console.log('✨ Seeding completed!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
