import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#000',
            color: '#fff',
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'var(--font-outfit), sans-serif'
        }}>
            <div className="glass-panel" style={{
                padding: '4rem',
                borderRadius: '2rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                maxWidth: '600px',
                width: '100%'
            }}>
                <h1 style={{
                    fontSize: '8rem',
                    fontWeight: 800,
                    margin: 0,
                    background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1
                }}>404</h1>

                <h2 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Page Not Found</h2>
                <p style={{ color: '#aaa', fontSize: '1.2rem', marginBottom: '3rem' }}>
                    הדף שחיפשת לא נמצא / The page you are looking for does not exist.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="/he" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        transition: 'transform 0.2s',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <Home size={20} />
                        חזרה לדף הבית (עברית)
                    </Link>

                    <Link href="/en" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        background: 'rgba(255,255,255,0.05)',
                        color: 'white',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        Back to Home (English) <ArrowRight size={20} />
                    </Link>
                </div>
            </div>

            <div style={{
                marginTop: '3rem',
                opacity: 0.3,
                fontSize: '0.9rem',
                letterSpacing: '0.05em'
            }}>
                AI EXPERTS ISRAEL
            </div>
        </div>
    );
}
