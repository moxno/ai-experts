
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const hebrewMap = {
    'א': 'a', 'ב': 'b', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v', 'ז': 'z', 'ח': 'ch',
    'ט': 't', 'י': 'y', 'כ': 'k', 'ך': 'k', 'ל': 'l', 'מ': 'm', 'ם': 'm', 'נ': 'n',
    'ן': 'n', 'ס': 's', 'ע': 'a', 'פ': 'p', 'ף': 'p', 'צ': 'ts', 'ץ': 'ts', 'ק': 'k',
    'ר': 'r', 'ש': 'sh', 'ת': 't'
};

function slugify(text) {
    if (!text) return '';
    let result = text.toLowerCase();
    result = result.split('').map(char => hebrewMap[char] || char).join('');
    result = result.replace(/[^a-z0-9\s-]/g, '');
    result = result.replace(/[\s_]+/g, '-');
    result = result.replace(/-+/g, '-');
    result = result.replace(/^-+|-+$/g, '');
    if (!result) return '';
    const suffix = Math.random().toString(36).substring(2, 7);
    return `${result}-${suffix}`;
}

async function migrate() {
    console.log('Starting slug migration...');
    const tasks = await prisma.task.findMany({
        select: { id: true, title: true, slug: true }
    });

    for (const task of tasks) {
        const hasHebrew = /[\u0590-\u05FF]/.test(task.slug);
        const isBroken = !task.slug || task.slug.startsWith('-') || task.slug.length < 3;

        if (hasHebrew || isBroken) {
            let newSlug = slugify(task.title);

            if (!newSlug || newSlug.length < 3) {
                console.log(`🗑️ Deleting invalid task: ID ${task.id} (Title: "${task.title}")`);
                await prisma.task.delete({ where: { id: task.id } }).catch(e => console.error('Delete failed', e));
                continue;
            }

            console.log(`🔄 Updating task: "${task.title}"`);
            console.log(`   OLD: ${task.slug}`);
            console.log(`   NEW: ${newSlug}`);

            await prisma.task.update({
                where: { id: task.id },
                data: { slug: newSlug }
            }).catch(e => console.error('Update failed', e));
        }
    }
    console.log('✅ Migration complete!');
}

migrate()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
