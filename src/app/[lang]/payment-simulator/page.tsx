"use client";

import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { processMockPayment } from '@/app/actions';
import { CreditCard, Lock, ShieldCheck } from 'lucide-react';

function PaymentForm() {
    const searchParams = useSearchParams();
    const params = useParams();
    const lang = params.lang as string;
    const isHe = lang === 'he';

    const bookingId = searchParams.get('bookingId');
    const amount = searchParams.get('amount');
    const router = useRouter();

    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!bookingId) return;

        setIsProcessing(true);

        // Simulate delay
        await new Promise(r => setTimeout(r, 2000));

        const result = await processMockPayment(bookingId);

        setIsProcessing(false);
        if (result.success) {
            setIsSuccess(true);
            setTimeout(() => {
                router.push(`/${lang}/dashboard`); // Fixed redirect
            }, 3000);
        } else {
            alert(isHe ? 'התשלום נכשל: ' + result.error : 'Payment failed: ' + result.error);
        }
    };

    if (isSuccess) {
        return (
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center', direction: isHe ? 'rtl' : 'ltr' }}>
                <div style={{ width: 80, height: 80, background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}>
                    <ShieldCheck size={40} color="white" />
                </div>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{isHe ? 'התשלום בוצע בהצלחה!' : 'Payment Successful!'}</h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem' }}>{isHe ? 'מעביר אותך ללוח הבקרה...' : 'Redirecting you to your dashboard...'}</p>
            </div>
        );
    }

    return (
        <div className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', direction: isHe ? 'rtl' : 'ltr' }}>
            <div className="glass-panel" style={{ maxWidth: '480px', width: '100%', padding: '2.5rem', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{isHe ? 'תשלום מאובטח' : 'Secure Payment'}</h1>
                    <p style={{ color: '#aaa' }}>{isHe ? 'השלם את ההזמנה שלך בצורה מאובטחת' : 'Complete your booking securely'}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', marginBottom: '2rem' }}>
                    <span style={{ color: '#ccc' }}>{isHe ? 'סכום כולל' : 'Total Amount'}</span>
                    <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'white' }}>${amount}</span>
                </div>

                <form onSubmit={handlePay} style={{ display: 'grid', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>{isHe ? 'מספר כרטיס' : 'Card Number'}</label>
                        <div style={{ position: 'relative' }}>
                            <CreditCard size={20} style={{ position: 'absolute', [isHe ? 'right' : 'left']: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
                            <input
                                type="text"
                                placeholder="4242 4242 4242 4242"
                                defaultValue="4242 4242 4242 4242"
                                style={{ width: '100%', padding: isHe ? '1rem 3.5rem 1rem 1rem' : '1rem 1rem 1rem 3.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.8rem', color: 'white', outline: 'none' }}
                                readOnly
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>{isHe ? 'תוקף' : 'Expiry'}</label>
                            <input
                                type="text"
                                defaultValue="12/25"
                                style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.8rem', color: 'white', outline: 'none' }}
                                readOnly
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>CVC</label>
                            <input
                                type="text"
                                defaultValue="123"
                                style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.8rem', color: 'white', outline: 'none' }}
                                readOnly
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isProcessing}
                        className="primary-btn"
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.8rem',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.8rem',
                            marginTop: '1rem',
                            cursor: isProcessing ? 'not-allowed' : 'pointer',
                            opacity: isProcessing ? 0.7 : 1
                        }}
                    >
                        {isProcessing ? (isHe ? 'מעבד עסקה...' : 'Processing Transaction...') : (
                            <>
                                <Lock size={18} /> {isHe ? 'שלם עכשיו' : 'Pay Now'}
                            </>
                        )}
                    </button>

                    <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                        <Lock size={12} style={{ display: 'inline', verticalAlign: 'middle', [isHe ? 'marginLeft' : 'marginRight']: '4px' }} />
                        {isHe ? 'מאובטח על ידי MockPayment (הדגמה)' : 'Secured by MockPayment Gateway (Demo)'}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function PaymentSimulatorPage() {
    return (
        <Suspense fallback={<div>Loading payment gateway...</div>}>
            <PaymentForm />
        </Suspense>
    );
}
