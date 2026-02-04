
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // Clear existing data
    await prisma.review.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.offering.deleteMany();
    await prisma.expert.deleteMany();

    // Create Expert 1
    const expert1 = await prisma.expert.create({
        data: {
            name: 'Ilya Sibiryakov',
            slug: 'ilya-sibiryakov',
            title: 'AI Consultant & Engineer',
            bio: 'Helping companies integrate LLMs and automation into their workflows. Ex-Google Deepmind.',
            bio_long: 'Ilya is a seasoned AI expert specializing in Large Language Models and prompt engineering...',
            profile_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
            company: 'Antigravity',
            specializations: 'ChatGPT, Automation, ML, Python',
            average_rating: 4.9,
            total_reviews: 24,
            hourly_rate_usd: 250,
            languages: 'English, Russian, Hebrew',
            verified: true
        }
    });

    await prisma.offering.create({
        data: {
            expert_id: expert1.id,
            title: 'AI for Marketing Teams',
            description: 'A comprehensive workshop on using ChatGPT for content creation and SEO.',
            format: 'workshop',
            duration_minutes: 180,
            price_usd: 1200,
            audience_level: 'Intermediate',
            active: true
        }
    });

    // Expert 2
    const expert2 = await prisma.expert.create({
        data: {
            name: 'Sarah Cohen',
            slug: 'sarah-cohen',
            title: 'Data Science Lead',
            bio: 'Expert in predictive analytics and business intelligence.',
            profile_image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
            company: 'TechFlow',
            specializations: 'Data Science, Analytics, Python, SQL',
            average_rating: 4.8,
            total_reviews: 12,
            hourly_rate_usd: 180,
            languages: 'Hebrew, English',
            verified: true
        }
    });

    await prisma.offering.create({
        data: {
            expert_id: expert2.id,
            title: 'Data Science for Executives',
            description: 'Understanding data strategy without the code.',
            format: 'lecture',
            duration_minutes: 60,
            price_usd: 500,
            audience_level: 'Executive',
            active: true
        }
    });

    // Expert 3
    const expert3 = await prisma.expert.create({
        data: {
            name: 'David Levi',
            slug: 'david-levi',
            title: 'Generative AI Artist',
            bio: 'Creative director specializing in Midjourney and Stable Diffusion.',
            profile_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60',
            company: 'CreativeAI',
            specializations: 'Midjourney, Stable Diffusion, Art Direction',
            average_rating: 5.0,
            total_reviews: 8,
            hourly_rate_usd: 200,
            languages: 'Hebrew, English',
            verified: true
        }
    });

    console.log('Seed completed!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
