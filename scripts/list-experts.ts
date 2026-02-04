
import { prisma } from '../src/lib/prisma';

async function main() {
    const experts = await prisma.expert.findMany({
        include: { specializations_list: true }
    });

    console.log('--- Expert Data Audit ---');
    experts.forEach(e => {
        console.log(`ID: ${e.id}`);
        console.log(`Name: ${e.name} / ${e.name_he}`);
        console.log(`Title: ${e.title_en} / ${e.title_he}`);
        console.log(`Image: ${e.profile_image ? '✅ Has URL' : '❌ Missing'}`);
        console.log(`Specs: ${e.specializations_list.map(s => s.name_en).join(', ')}`);
        console.log('-------------------------');
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
