const fs = require('fs');
const path = require('path');

const requiredKeys = [
    'DATABASE_URL',
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL',
    'AUTH_GOOGLE_ID',
    'AUTH_GOOGLE_SECRET',
    'RESEND_API_KEY',
    'NEXT_PUBLIC_APP_URL'
];

async function checkEnv() {
    console.log('\x1b[36m%s\x1b[0m', '🔍 Scanning Environment Variables for Vercel Deployment...');

    const envPath = path.join(process.cwd(), '.env');
    const localEnvPath = path.join(process.cwd(), '.env.local');

    let envContent = '';

    // Read both files
    if (fs.existsSync(envPath)) envContent += fs.readFileSync(envPath, 'utf8') + '\n';
    if (fs.existsSync(localEnvPath)) envContent += fs.readFileSync(localEnvPath, 'utf8') + '\n';

    const vars = {};
    const lines = envContent.split('\n');

    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
            const [key, ...valueParts] = trimmed.split('=');
            if (key) {
                vars[key.trim()] = valueParts.join('=').trim();
            }
        }
    });

    const foundKeys = Object.keys(vars);
    const missingKeys = requiredKeys.filter(k => !foundKeys.includes(k));

    console.log('\n📋 \x1b[1mFound Variables:\x1b[0m');
    foundKeys.forEach(key => console.log(`   ✅ ${key}`));

    if (missingKeys.length > 0) {
        console.log('\n❌ \x1b[31mMissing Critical Variables:\x1b[0m');
        missingKeys.forEach(key => console.log(`   🚨 ${key}`));
        console.log('\n⚠️  Please make sure to add these to Vercel!');
    } else {
        console.log('\n✅ \x1b[32mAll critical variables are present!\x1b[0m');
    }

    console.log('\n💡 \x1b[33mTip: You can copy the content of your .env.local file directly into Vercel\'s Environment Variables input box.\x1b[0m');
    console.log('   Vercel will automatically parse them for you!');

    console.log('\n🔒 \x1b[1mReminder for Google Cloud Console:\x1b[0m');
    console.log('   Add this Redirect URI: \x1b[36mhttps://[YOUR-PROJECT].vercel.app/api/auth/callback/google\x1b[0m');
}

checkEnv();
