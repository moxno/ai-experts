
import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

const experts = [
    {
        email: 'maya.lev@example.com',
        slug: 'dr-maya-lev',
        name: 'Dr. Maya Lev',
        name_he: 'ד״ר מאיה לב',
        title: 'AI Keynote Speaker & Strategic Consultant',
        title_he: 'מרצה וחוקרת בינה מלאכותית, יועצת אסטרטגית',
        title_en: 'AI Keynote Speaker & Strategic Consultant',
        bio: 'PhD in Cognitive Science. Specializes in AI adoption for management and HR. Keynote speaker at top global conferences.',
        languages: 'Hebrew, English',
        hourly_rate_nis: 2500,
        hourly_rate_usd: 680,
        active: true,
        specializations_list: ['ai-strategy', 'generative-ai', 'ai-ethics-compliance']
    },
    {
        email: 'idan.cohen@example.com',
        slug: 'idan-cohen',
        name: 'Idan Cohen',
        name_he: 'עידן כהן',
        title: 'AI Automation Expert (Make/Zapier)',
        title_he: 'מומחה אוטומציה וסוכני AI',
        title_en: 'AI Automation & Agents Architect',
        bio: 'Hands-on expert in building autonomous agents and workflow automations for SMBs. Certified Make.com partner.',
        languages: 'Hebrew, English',
        hourly_rate_nis: 450,
        hourly_rate_usd: 120,
        active: true,
        specializations_list: ['ai-automation', 'generative-ai']
    },
    {
        email: 'noa.baron@example.com',
        slug: 'noa-baron',
        name: 'Noa Bar-On',
        name_he: 'נועה בר-און',
        title: 'Senior AI Architect',
        title_he: 'ארכיטקטית AI בכירה',
        title_en: 'Senior AI Architect',
        bio: 'Ex-Google, 10 years experience in deploying large scale ML models and Computer Vision systems.',
        languages: 'Hebrew, English',
        hourly_rate_nis: 650,
        hourly_rate_usd: 175,
        active: true,
        specializations_list: ['mlops', 'computer-vision', 'nlp']
    }
];

async function main() {
    console.log('Seeding experts with researched pricing...');

    for (const expertData of experts) {
        const specs = expertData.specializations_list;
        // removing specs from data to insert separately
        const { specializations_list, ...data } = expertData;

        // Upsert expert
        const expert = await prisma.expert.upsert({
            where: { email: data.email },
            update: {
                ...data,
                specializations: specs.join(', ') // Legacy
            },
            create: {
                ...data,
                specializations: specs.join(', ') // Legacy
            }
        });

        // Connect specs
        for (const slug of specs) {
            const spec = await prisma.specialization.findUnique({ where: { slug } });
            if (spec) {
                await prisma.expert.update({
                    where: { id: expert.id },
                    data: {
                        specializations_list: {
                            connect: { id: spec.id }
                        }
                    }
                });
            }
        }
        console.log(`Updated ${expert.name}`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
