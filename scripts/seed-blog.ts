
import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import { marked } from 'marked';

const prisma = new PrismaClient();

const categories = [
    { slug: 'strategy', name_he: 'אסטרטגיה', name_en: 'Strategy' },
    { slug: 'technology', name_he: 'טכנולוגיה', name_en: 'Technology' },
    { slug: 'ethics', name_he: 'אתיקה ורגולציה', name_en: 'Ethics & Regulation' },
    { slug: 'business', name_he: 'עסקים', name_en: 'Business' },
    { slug: 'development', name_he: 'פיתוח', name_en: 'Development' },
];

interface ArticleData {
    slug: string;
    title_he: string;
    title_en: string;
    excerpt_he: string;
    excerpt_en: string;
    cover_image: string;
    category: string;
    author_name: string;
    published_at: Date;
    content_he: string;
    content_en: string;
    faqs: {
        q_he: string;
        a_he: string;
        q_en: string;
        a_en: string;
    }[];
}

function parseFrontmatter(content: string): Record<string, string> {
    const match = content.match(/---\n([\s\S]*?)\n---/);
    if (!match) return {};
    const lines = match[1].split('\n');
    const metadata: Record<string, string> = {};
    for (const line of lines) {
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            let value = parts.slice(1).join(':').trim();
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            metadata[key] = value;
        }
    }
    return metadata;
}

function parseFaqs(content: string): { q: string, a: string }[] {
    const faqs: { q: string, a: string }[] = [];
    const faqSection = content.split(/##.*(?:FAQ|שאלות ותשובות).*/i)[1];
    if (!faqSection) return [];

    const lines = faqSection.trim().split('\n');
    let currentQ = '';
    let currentA = '';

    for (const line of lines) {
        if (line.trim().startsWith('**')) { // Question
            if (currentQ) {
                faqs.push({ q: currentQ, a: currentA.trim() });
                currentA = '';
            }
            currentQ = line.replace(/\*\*/g, '').trim();
            // Remove "Question X:" prefix if easy
            currentQ = currentQ.replace(/^(?:Question|שאלה)\s*\d+:\s*/i, '');
        } else if (line.trim().startsWith('>')) { // Answer
            currentA += line.replace(/^>\s*/, '') + ' ';
        } else if (line.trim()) { // Continued answer
            if (currentQ) currentA += line + ' ';
        }
    }
    if (currentQ) {
        faqs.push({ q: currentQ, a: currentA.trim() });
    }
    return faqs;
}

async function loadArticles(): Promise<ArticleData[]> {
    const articlesDir = path.join(process.cwd(), 'src/content/articles');
    if (!fs.existsSync(articlesDir)) {
        console.error('Articles directory not found!');
        return [];
    }

    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
    const articles: ArticleData[] = [];

    for (const file of files) {
        const rawContent = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
        const metadata = parseFrontmatter(rawContent);

        let hebrewPart = '';
        let englishPart = '';

        const heMatch = rawContent.match(/# START_HEBREW\n([\s\S]*?)\n# END_HEBREW/);
        if (heMatch) hebrewPart = heMatch[1];

        const enMatch = rawContent.match(/# START_ENGLISH\n([\s\S]*?)\n# END_ENGLISH/);
        if (enMatch) englishPart = enMatch[1];

        // Parse FAQs before converting to HTML (to remove them from content)
        const heFaqs = parseFaqs(hebrewPart);
        const enFaqs = parseFaqs(englishPart);

        // Remove FAQ section from content
        const cleanHe = hebrewPart.split(/##.*(?:FAQ|שאלות ותשובות).*/i)[0];
        const cleanEn = englishPart.split(/##.*(?:FAQ|Frequently Asked Questions).*/i)[0];

        // Convert to HTML
        const htmlHe = await marked.parse(cleanHe) as string;
        const htmlEn = await marked.parse(cleanEn) as string;

        // Zip FAQs
        const faqs = [];
        const count = Math.max(heFaqs.length, enFaqs.length);
        for (let i = 0; i < count; i++) {
            faqs.push({
                q_he: heFaqs[i]?.q || '',
                a_he: heFaqs[i]?.a || '',
                q_en: enFaqs[i]?.q || '',
                a_en: enFaqs[i]?.a || ''
            });
        }

        articles.push({
            slug: metadata.slug || file.replace('.md', ''),
            title_he: metadata.title_he,
            title_en: metadata.title_en,
            excerpt_he: metadata.excerpt_he,
            excerpt_en: metadata.excerpt_en,
            cover_image: metadata.cover_image,
            category: metadata.category,
            author_name: metadata.author_name,
            published_at: new Date(metadata.published_at || new Date()),
            content_he: htmlHe,
            content_en: htmlEn,
            faqs: faqs
        });
    }
    return articles;
}

async function main() {
    console.log('Seeding Categories and Articles...');

    for (const cat of categories) {
        await prisma.category.upsert({
            where: { slug: cat.slug },
            update: {},
            create: cat
        });
    }

    const dbCategories = await prisma.category.findMany();
    const catMap = new Map(dbCategories.map(c => [c.slug, c.id]));

    const articles = await loadArticles();

    for (const article of articles) {
        const categoryId = catMap.get(article.category);
        if (!categoryId) {
            console.warn(`Category ${article.category} not found for article ${article.slug}`);
            continue;
        }

        // Upsert Blog Post
        const upsertedPost = await prisma.blogPost.upsert({
            where: { slug: article.slug },
            update: {
                title_he: article.title_he,
                title_en: article.title_en,
                excerpt_he: article.excerpt_he,
                excerpt_en: article.excerpt_en,
                content_he: article.content_he,
                content_en: article.content_en,
                cover_image: article.cover_image,
                published: true,
                publishedAt: article.published_at,
                category_id: categoryId,
                author_name: article.author_name
            },
            create: {
                slug: article.slug,
                title_he: article.title_he,
                title_en: article.title_en,
                excerpt_he: article.excerpt_he,
                excerpt_en: article.excerpt_en,
                content_he: article.content_he,
                content_en: article.content_en,
                cover_image: article.cover_image,
                published: true,
                publishedAt: article.published_at,
                category_id: categoryId,
                author_name: article.author_name
            }
        });

        console.log(`Upserted Post: ${article.slug}`);

        // Handle FAQs
        if (article.faqs.length > 0) {
            // Delete existing FAQs
            await prisma.fAQ.deleteMany({ where: { post_id: upsertedPost.id } });

            await prisma.fAQ.createMany({
                data: article.faqs.map(f => ({
                    post_id: upsertedPost.id,
                    question_he: f.q_he,
                    answer_he: f.a_he,
                    question_en: f.q_en,
                    answer_en: f.a_en
                }))
            });
            console.log(`  - Added ${article.faqs.length} FAQs`);
        }
    }
    console.log('Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
