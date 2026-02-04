import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

const BASE_URL = 'https://ai-experts.co.il';
const LANGUAGES = ['he', 'en'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const experts = await prisma.expert.findMany({
        where: { active: true },
        select: { slug: true, updated_at: true },
    });

    const staticRoutes = [
        '',
        '/experts',
        '/pricing',
        '/terms',
        '/blog',
        '/contact',
        '/about',
        '/how-it-works',
        '/tasks'
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // 1. Static Routes for each language
    LANGUAGES.forEach(lang => {
        staticRoutes.forEach(route => {
            sitemapEntries.push({
                url: `${BASE_URL}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: route === '' ? 1.0 : 0.8,
            });
        });
    });

    // 2. Dynamic Expert Profiles for each language
    experts.forEach(expert => {
        LANGUAGES.forEach(lang => {
            sitemapEntries.push({
                url: `${BASE_URL}/${lang}/experts/${expert.slug}`,
                lastModified: expert.updated_at,
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        });
    });

    // 3. Dynamic Tasks for each language
    const tasks = await prisma.task.findMany({
        where: {
            status: 'open',
            approved: true  // Only include approved tasks in sitemap
        },
        select: { slug: true, updated_at: true },
    });

    tasks.forEach(task => {
        LANGUAGES.forEach(lang => {
            sitemapEntries.push({
                url: `${BASE_URL}/${lang}/tasks/${task.slug}`,
                lastModified: task.updated_at,
                changeFrequency: 'daily',
                priority: 0.7,
            });
        });
    });

    // 4. Dynamic Topic (Specialization) Pages for each language
    const specializations = await prisma.specialization.findMany({
        select: { slug: true, updated_at: true },
    });

    specializations.forEach(spec => {
        LANGUAGES.forEach(lang => {
            sitemapEntries.push({
                url: `${BASE_URL}/${lang}/topic/${spec.slug}`,
                lastModified: spec.updated_at,
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        });
    });

    return sitemapEntries;
}
