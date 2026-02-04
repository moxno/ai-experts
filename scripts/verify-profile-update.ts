
// Verification Script for Profile Image Update
// Run with: npx tsx scripts/verify-profile-update.ts

import { prisma } from '../src/lib/prisma';

async function verify() {
    console.log('🧪 Starting Profile Update Verification...');

    // 1. Create a dummy expert if not exists
    const email = 'test-verification@example.com';
    let expert = await prisma.expert.findUnique({ where: { email } });

    if (!expert) {
        console.log('Creating test expert...');
        expert = await prisma.expert.create({
            data: {
                email,
                name: 'Test Verify',
                slug: 'test-verify-' + Date.now(),
                title_he: 'Original Title',
                bio_he: 'Bio',
                hourly_rate_nis: 100,
                languages: 'he'
            }
        });
    }

    console.log('Original Profile Image:', expert.profile_image);

    // 2. Perform Update (Simulating the logic from actions.ts)
    const newImage = 'https://example.com/new-image.jpg';
    console.log('Updating profile image to:', newImage);

    const updated = await prisma.expert.update({
        where: { email },
        data: {
            profile_image: newImage
        }
    });

    // 3. Verify
    if (updated.profile_image === newImage) {
        console.log('✅ SUCCESS: Profile image updated correctly in DB!');
    } else {
        console.error('❌ FAILED: Profile image mismatch:', updated.profile_image);
    }

    // Cleanup
    await prisma.expert.delete({ where: { email } });
    console.log('Cleanup complete.');
}

verify().catch(console.error);
