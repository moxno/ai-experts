/**
 * Test script to verify Resend email integration
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
    console.log('🧪 Testing Resend email integration...');
    console.log('API Key present:', !!process.env.RESEND_API_KEY);

    if (!process.env.RESEND_API_KEY) {
        console.error('❌ RESEND_API_KEY not found in environment');
        process.exit(1);
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'AI Experts <noreply@ai-experts.co.il>',
            to: ['ilsimox@gmail.com'],
            subject: '🎉 Domain Verified - AI Experts',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #4F46E5;">✅ Email Integration Successful!</h1>
                    <p>This is a test email from the AI Experts platform.</p>
                    <p>If you're seeing this, it means:</p>
                    <ul>
                        <li>✅ Resend API is properly configured</li>
                        <li>✅ Email sending functionality is working</li>
                        <li>✅ Your platform is ready to send notifications</li>
                    </ul>
                    <hr style="border: 1px solid #E5E7EB; margin: 20px 0;">
                    <p style="color: #6B7280; font-size: 14px;">
                        Sent from AI Experts Platform<br>
                        <a href="https://ai-experts.co.il">ai-experts.co.il</a>
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('❌ Error sending email:', error);
            process.exit(1);
        }

        console.log('✅ Email sent successfully!');
        console.log('📧 Message ID:', data?.id);
        console.log('\n🎯 Check your inbox at: ilyalevner@gmail.com');
    } catch (err) {
        console.error('❌ Unexpected error:', err);
        process.exit(1);
    }
}

testEmail();
