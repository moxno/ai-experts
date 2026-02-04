const path = require('path');
const { PrismaClient } = require(path.join(process.cwd(), 'src', 'generated', 'prisma'));
const prisma = new PrismaClient();

async function main() {
    const specCount = await prisma.specialization.count();
    const expertsCount = await prisma.expert.count();
    const tasksCount = await prisma.task.count();
    const offeringsCount = await prisma.offering.count();

    console.log(`--- DB Stats ---`);
    console.log(`Specializations: ${specCount}`);
    console.log(`Experts: ${expertsCount}`);
    console.log(`Tasks: ${tasksCount}`);
    console.log(`Offerings: ${offeringsCount}`);

    if (specCount > 0) {
        const specs = await prisma.specialization.findMany({ select: { slug: true, name_en: true } });
        console.log(`Slugs:`, specs.map(s => s.slug).join(', '));
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
