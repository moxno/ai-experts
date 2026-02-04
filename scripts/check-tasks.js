const path = require('path');
const { PrismaClient } = require(path.join(process.cwd(), 'src', 'generated', 'prisma'));
const prisma = new PrismaClient();

async function main() {
    const tasks = await prisma.task.findMany({
        orderBy: { created_at: 'desc' },
        take: 5
    });
    console.log('Recent Tasks:', JSON.stringify(tasks, null, 2));
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
