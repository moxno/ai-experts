
import { prisma } from '../src/lib/prisma';

async function main() {
    const tasks = await prisma.task.findMany({
        take: 5,
        orderBy: { created_at: 'desc' }
    });

    console.log(`Found ${tasks.length} tasks.`);
    tasks.forEach(t => console.log(`- ${t.title} (${t.status}, approved: ${t.approved})`));

    const task = await prisma.task.findFirst({
        orderBy: { created_at: 'desc' }
    });

    if (!task) {
        console.log('❌ No tasks found at all.');
        return;
    }

    console.log('✅ Found latest task ID:', task.id);

    // Fix title if empty
    if (!task.title || task.title.trim() === '') {
        console.log('⚠️ Title was empty, fixing it...');
        await prisma.task.update({
            where: { id: task.id },
            data: { title: 'Live System Test (בדיקת מערכת)' }
        });
        task.title = 'Live System Test (בדיקת מערכת)';
    }


    console.log('✅ Found task:', task.title);
    console.log('   ID:', task.id);
    console.log('   Status:', task.status);
    console.log('   Approved:', task.approved);

    approve(task);
}

async function approve(task: any) {
    if (task.approved) {
        console.log('ℹ️ Task is already approved.');
    } else {
        console.log('🔄 Approving task...');
        await prisma.task.update({
            where: { id: task.id },
            data: { approved: true }
        });
        console.log('✅ Task APPROVED by script.');
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
