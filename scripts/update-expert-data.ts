
import { prisma } from '../src/lib/prisma';

async function main() {
    console.log('🧹 Cleaning up expert data...');

    // 1. Delete Victor Koko
    const deleted = await prisma.expert.deleteMany({
        where: { name: { contains: 'Victor Koko' } }
    });
    console.log(`❌ Deleted ${deleted.count} fake experts (Victor Koko).`);

    // 2. Update Images
    const updates = [
        { name: 'Idan Cohen', img: '/images/experts/idan.png' },
        { name: 'Noa Bar-On', img: '/images/experts/noa.png' },
        { name: 'Dr. Maya Lev', img: '/images/experts/maya_lev.png' }
    ];

    for (const up of updates) {
        const expert = await prisma.expert.findFirst({
            where: { name: { contains: up.name } }
        });

        if (expert) {
            await prisma.expert.update({
                where: { id: expert.id },
                data: { profile_image: up.img }
            });
            console.log(`✅ Updated image for ${up.name}`);
        } else {
            console.warn(`⚠️ Expert ${up.name} not found!`);
        }
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
