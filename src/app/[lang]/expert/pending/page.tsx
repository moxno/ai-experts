import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default async function ExpertPendingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return (
        <main style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <div style={{
                maxWidth: '500px',
                width: '100%',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '1rem',
                padding: '3rem',
                textAlign: 'center',
                color: '#fff'
            }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
                    <CheckCircle size={40} color="#10b981" />
                </div>

                <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Success! Profile Submitted</h1>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Thank you for joining AI Experts. Your profile is now under review.
                    <br />We will notify you via email within 24 hours regarding your approval status.
                </p>

                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', marginBottom: '2rem', textAlign: 'left', fontSize: '0.9rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: '#fff' }}>What happens next?</strong>
                    <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8', margin: 0 }}>
                        <li style={{ marginBottom: '0.5rem' }}>Our team reviews your experience and credentials</li>
                        <li style={{ marginBottom: '0.5rem' }}>We verify your identity via LinkedIn</li>
                        <li>You'll get an email once approved and live</li>
                    </ul>
                </div>

                <Link href={`/${lang}`} style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600 }}>
                    ← Back to Homepage
                </Link>
            </div>
        </main>
    );
}
