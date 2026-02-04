const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
// We use the custom output path we set in schema.prisma
const sourceEnginesDir = path.join(projectRoot, 'src', 'generated', 'prisma');
const firebaseFunctionsDir = path.join(projectRoot, '.firebase', 'ai-experts-co-il', 'functions');

// Destinations
const destPaths = [
    path.join(firebaseFunctionsDir, '.next', 'server'),
    path.join(firebaseFunctionsDir, 'node_modules', '.prisma', 'client'),
    path.join(firebaseFunctionsDir, 'src', 'generated', 'prisma') // Just in case it checks here too
];

console.log(`[Fix Script] Starting Prisma engine copy...`);
console.log(`[Fix Script] Source: ${sourceEnginesDir}`);

if (!fs.existsSync(sourceEnginesDir)) {
    console.error(`❌ Error: Source engines dir not found at ${sourceEnginesDir}.`);
    process.exit(1);
}

const engines = fs.readdirSync(sourceEnginesDir).filter(f => f.includes('libquery_engine') || f === 'schema.prisma');

destPaths.forEach(dest => {
    try {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }

        engines.forEach(engine => {
            const srcPath = path.join(sourceEnginesDir, engine);
            const destPath = path.join(dest, engine);
            console.log(`[Fix Script] Copying ${engine} to ${dest}...`);
            fs.copyFileSync(srcPath, destPath);
        });
    } catch (e) {
        console.warn(`⚠️ Warning: Failed to copy to ${dest}: ${e.message}`);
    }
});

console.log(`✅ Successfully injected Prisma engines into the deployment artifact.`);
