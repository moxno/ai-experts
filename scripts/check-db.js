const path = require('path');
const { PrismaClient } = require(path.join(process.cwd(), 'src', 'generated', 'prisma'));
const prisma = new PrismaClient();

async function main() {
    try {
        const count = await prisma.specialization.count();
        console.log(`Specializations count: ${count}`);
        const specs = await prisma.specialization.findMany({ take: 5 });
        console.log('Sample Specializations:', JSON.stringify(specs, null, 2));

        const tasksCount = await prisma.task.count();
        console.log(`Tasks count: ${tasksCount}`);
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
