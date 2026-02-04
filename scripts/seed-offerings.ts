
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding offerings...');

    const experts = await prisma.expert.findMany();

    if (experts.length === 0) {
        console.log('No experts found. Please seed experts first.');
        return;
    }

    const offerings = [
        {
            title: 'AI Strategy for Executives',
            description: 'A half-day workshop on how to integrate AI into your business strategy.',
            format: 'workshop',
            duration_minutes: 240,
            audience_level: 'Executive',
            price_usd: 1200,
            expert_id: experts[0].id
        },
        {
            title: 'ChatGPT Prompt Engineering',
            description: 'Learn the secrets of effective prompting for your daily tasks.',
            format: 'lecture',
            duration_minutes: 90,
            audience_level: 'Beginner',
            price_usd: 350,
            expert_id: experts[0].id
        },
        {
            title: 'Custom LLM Implementation',
            description: 'Technical deep dive into fine-tuning and deploying local models.',
            format: 'consultation',
            duration_minutes: 60,
            audience_level: 'Advanced',
            price_usd: 500,
            expert_id: experts[1].id
        }
    ];

    for (const offering of offerings) {
        await prisma.offering.create({
            data: offering
        });
        console.log(`Created offering: ${offering.title}`);
    }

    console.log('Seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
