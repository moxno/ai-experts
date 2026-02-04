'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
    params: { lang }
}: {
    error: Error & { digest?: string };
    reset: () => void;
    params: { lang: string };
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Global Error caught:', error);
    }, [error]);

    const isHe = lang === 'he';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '70vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                background: 'linear-gradient(to right, #6366f1, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
            }}>
                {isHe ? 'אופס!' : 'Oops!'}
            </h1>

            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'white' }}>
                {isHe ? 'משהו השתבש בדרך...' : 'Something went wrong...'}
            </h2>

            <p style={{ marginBottom: '2.5rem', color: '#aaa', maxWidth: '500px' }}>
                {isHe
                    ? 'נתקלנו בשגיאה לא צפויה. הצוות שלנו קיבל דיווח ויטפל בזה בהקדם.'
                    : 'We encountered an unexpected error. Our team has been notified and will fix it shortly.'}
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                    onClick={reset}
                    className="secondary-btn"
                    style={{
                        padding: '0.8rem 1.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--border)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    {isHe ? 'נסה שוב' : 'Try Again'}
                </button>

                <Link
                    href={`/${lang}`}
                    className="primary-btn"
                    style={{
                        padding: '0.8rem 1.5rem',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: 600
                    }}
                >
                    {isHe ? 'חזרה לדף הבית' : 'Back to Home'}
                </Link>
            </div>

            {/* Hidden technical details for debugging if needed */}
            {(process.env.NODE_ENV === 'development') && (
                <div style={{ marginTop: '4rem', padding: '1rem', background: '#222', borderRadius: '0.5rem', textAlign: 'left', maxWidth: '800px', overflow: 'auto' }}>
                    <p style={{ color: '#f87171', fontFamily: 'monospace' }}>{error.message}</p>
                    <pre style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.5rem' }}>{error.stack}</pre>
                </div>
            )}
        </div>
    );
}
