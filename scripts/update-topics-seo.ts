
import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

const seoData = [
    {
        slug: 'ai-automation',
        metaTitle_he: 'אוטומציית AI לעסקים | AI Experts',
        metaTitle_en: 'AI Business Automation | AI Experts',
        metaDescription_he: 'מצאו את המומחים המובילים בישראל לאוטומציה עסקית מבוססת בינה מלאכותית. הגדילו את התפוקה והפחיתו עלויות.',
        metaDescription_en: 'Find Israel\'s leading experts for AI-powered business automation. Increase productivity and reduce costs.'
    },
    {
        slug: 'chatgpt-llms',
        metaTitle_he: 'פיתוח צ\'אטבוטים חכמים | AI Experts',
        metaTitle_en: 'Intelligent AI Chatbot Development | AI Experts',
        metaDescription_he: 'מומחים לפיתוח צ\'אטבוטים מבוססי AI (LLM, RAG) לשירות לקוחות ומכירות.',
        metaDescription_en: 'Experts in developing AI-powered chatbots (LLM, RAG) for customer service and sales.'
    },
    {
        slug: 'ai-in-marketing',
        metaTitle_he: 'בינה מלאכותית לשיווק | AI Experts',
        metaTitle_en: 'AI for Marketing & Content | AI Experts',
        metaDescription_he: 'גלו איך בינה מלאכותית יכולה לשדרג את השיווק שלכם: יצירת תוכן ואופטימיזציה.',
        metaDescription_en: 'Discover how AI can upgrade your marketing: content creation and optimization.'
    },
    {
        slug: 'generative-ai',
        metaTitle_he: 'מומחי Generative AI | AI Experts',
        metaTitle_en: 'Generative AI Experts | AI Experts',
        metaDescription_he: 'הטמעת כלי Generative AI (LLMs, Diffusion Models) בארגונים.',
        metaDescription_en: 'Implementing Generative AI tools (LLMs, Diffusion Models) in organizations.'
    },
    {
        slug: 'data-science',
        metaTitle_he: 'ניתוח נתונים ב-AI | AI Experts',
        metaTitle_en: 'AI Data Analysis & Insights | AI Experts',
        metaDescription_he: 'הפכו נתונים לתובנות עסקיות בעזרת אלגוריתמים של למידת מכונה.',
        metaDescription_en: 'Turn data into business insights with machine learning algorithms.'
    },
    {
        slug: 'ai-strategy',
        metaTitle_he: 'ייעוץ אסטרטגי ל-AI | AI Experts',
        metaTitle_en: 'AI Strategy & Consulting | AI Experts',
        metaDescription_he: 'בניית אסטרטגיית AI ארגונית, בחירת כלים וניהול שינוי.',
        metaDescription_en: 'Building organizational AI strategy, tool selection, and change management.'
    },
    {
        slug: 'nlp',
        metaTitle_he: 'פתרונות NLP מתקדמים | AI Experts',
        metaTitle_en: 'Advanced NLP Solutions | AI Experts',
        metaDescription_he: 'עיבוד שפה טבעית (NLP) לניתוח טקסט, תרגום, וסיווג מידע.',
        metaDescription_en: 'Natural Language Processing (NLP) for text analysis, translation, and classification.'
    },
    {
        slug: 'no-code-ai',
        metaTitle_he: 'הטמעת AI ללא קוד | AI Experts',
        metaTitle_en: 'No-Code AI Implementation | AI Experts',
        metaDescription_he: 'בניית פתרונות בינה מלאכותית ללא כתיבת קוד. הטמעה מהירה.',
        metaDescription_en: 'Building AI solutions without writing code. Rapid implementation.'
    },
    {
        slug: 'voice-ai',
        metaTitle_he: 'בינה מלאכותית לקול | AI Experts',
        metaTitle_en: 'Voice AI & Sound | AI Experts',
        metaDescription_he: 'פתרונות קול מבוססי AI: זיהוי דיבור ויצירת קולות.',
        metaDescription_en: 'AI-based voice solutions: speech recognition and voice creation.'
    },
    {
        slug: 'cybersecurity-ai',
        metaTitle_he: 'סייבר ובינה מלאכותית | AI Experts',
        metaTitle_en: 'AI Cybersecurity Solutions | AI Experts',
        metaDescription_he: 'הגנה על הארגון בעזרת בינה מלאכותית ואבטחת מוצרי AI.',
        metaDescription_en: 'Protecting the organization with AI and securing AI products.'
    },
    {
        slug: 'ai-workshops',
        metaTitle_he: 'סדנאות AI לעובדים | AI Experts',
        metaTitle_en: 'AI Workshops & Training | AI Experts',
        metaDescription_he: 'הדרכות וסדנאות מעשיות לארגונים על כלי בינה מלאכותית.',
        metaDescription_en: 'Practical workshops and training for organizations on AI tools.'
    },
    {
        slug: 'computer-vision',
        metaTitle_he: 'פתרונות Computer Vision | AI Experts',
        metaTitle_en: 'Computer Vision Solutions | AI Experts',
        metaDescription_he: 'עיבוד תמונה וראייה ממוחשבת לזיהוי אובייקטים וניטור.',
        metaDescription_en: 'Image processing and computer vision for object recognition.'
    },
    {
        slug: 'ai-ethics-compliance',
        metaTitle_he: 'אתיקה ומשפט ב-AI | AI Experts',
        metaTitle_en: 'AI Ethics & Legal | AI Experts',
        metaDescription_he: 'ייעוץ בנושאי רגולציה, אתיקה וזכויות יוצרים ב-AI.',
        metaDescription_en: 'Consulting on regulation, ethics, and copyright in AI.'
    },
    {
        slug: 'prompt-engineering',
        metaTitle_he: 'מומחי Prompt Engineering | AI Experts',
        metaTitle_en: 'Prompt Engineering Experts | AI Experts',
        metaDescription_he: 'אופטימיזציה של פניות למודלי שפה להשגת תוצאות מדויקות.',
        metaDescription_en: 'Optimizing prompts for language models to achieve precise results.'
    },
    {
        slug: 'ecommerce-ai',
        metaTitle_he: 'AI למסחר אלקטרוני | AI Experts',
        metaTitle_en: 'AI for E-commerce | AI Experts',
        metaDescription_he: 'שדרוג חנויות אונליין בעזרת בינה מלאכותית: המלצות מוצרים ושירות לקוחות.',
        metaDescription_en: 'Upgrading online stores with AI: product recommendations and customer service.'
    },
    {
        slug: 'video-ai',
        metaTitle_he: 'עריכת וידאו ב-AI | AI Experts',
        metaTitle_en: 'AI Video Editing | AI Experts',
        metaDescription_he: 'יצירה ועריכת וידאו בעזרת כלי בינה מלאכותית מתקדמים.',
        metaDescription_en: 'Creating and editing video with advanced AI tools.'
    },
    {
        slug: 'fintech-ai',
        metaTitle_he: 'AI לפיננסים | AI Experts',
        metaTitle_en: 'AI for Fintech | AI Experts',
        metaDescription_he: 'פתרונות בינה מלאכותית לעולם הפיננסי: חיזוי שוק וניהול סיכונים.',
        metaDescription_en: 'AI solutions for the financial world: market forecasting and risk management.'
    },
    {
        slug: 'healthcare-ai',
        metaTitle_he: 'AI בעולם הרפואה | AI Experts',
        metaTitle_en: 'Healthcare AI | AI Experts',
        metaDescription_he: 'הטמעת כלי בינה מלאכותית במערכות בריאות ואבחון רפואי.',
        metaDescription_en: 'Implementing AI tools in healthcare systems and medical diagnosis.'
    },
    {
        slug: 'personal-productivity',
        metaTitle_he: 'פריון אישי ב-AI | AI Experts',
        metaTitle_en: 'AI Personal Productivity | AI Experts',
        metaDescription_he: 'שיפור הפריון האישי והצוותי בעזרת כלי בינה מלאכותית.',
        metaDescription_en: 'Improving personal and team productivity with AI tools.'
    }
];

async function main() {
    console.log('🚀 Starting SEO data update...');
    for (const item of seoData) {
        const { slug, ...data } = item;
        try {
            await prisma.specialization.update({
                where: { slug },
                data
            });
            console.log(`✅ Updated SEO for: ${slug}`);
        } catch (e) {
            console.warn(`⚠️ Could not update slug: ${slug}`);
        }
    }
    console.log('✨ SEO update process completed!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
