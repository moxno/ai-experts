import { prisma } from '../src/lib/prisma.js';

async function createTestBid() {
    console.log('🧪 Creating test bid for client dashboard demo...\n');

    // Find a task
    const task = await prisma.task.findFirst({
        where: { status: 'open' }
    });

    if (!task) {
        console.log('❌ No open tasks found');
        return;
    }

    // Find an expert
    const expert = await prisma.expert.findFirst();

    if (!expert) {
        console.log('❌ No experts found');
        return;
    }

    console.log(`✅ Task: "${task.title}"`);
    console.log(`✅ Expert: ${expert.name}\n`);

    // Create a bid
    const bid = await prisma.bid.create({
        data: {
            task_id: task.id,
            expert_id: expert.id,
            amount: 750,
            message: 'שלום! אני מומחה AI עם ניסיון רב בבניית אוטומציות. אשמח לעזור לך עם הפרויקט הזה. אני יכול להתחיל מיד ולסיים תוך שבועיים.',
            status: 'pending'
        }
    });

    console.log('✅ Test bid created successfully!');
    console.log(`📧 Bid ID: ${bid.id}`);
    console.log(`💰 Amount: $${bid.amount}`);
    console.log(`\n🎯 Now login as the client (${task.client_email}) to see the bid in the dashboard!`);

    await prisma.$disconnect();
}

createTestBid()
    .then(() => process.exit(0))
    .catch(err => {
        console.error('Error:', err);
        process.exit(1);
    });
