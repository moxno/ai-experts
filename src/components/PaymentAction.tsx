"use client";

import { useState } from 'react';
import { generatePaymentLinkAction } from '@/app/actions';
import { LinkIcon, Check, Loader2 } from 'lucide-react';

export default function PaymentAction({ booking, lang = 'he' }: { booking: any, lang?: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const [paymentLink, setPaymentLink] = useState(booking.payment_link);

    const handleGenerateLink = async () => {
        setIsLoading(true);
        const result = await generatePaymentLinkAction(booking.id, lang);
        setIsLoading(false);

        if (result.success) {
            setPaymentLink(result.paymentLink);
        } else {
            alert('Failed: ' + result.error);
        }
    };

    if (booking.payment_status === 'paid') {
        return <span style={{ color: '#10b981', fontWeight: 600 }}>PAID</span>;
    }

    if (paymentLink) {
        return (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <a
                    href={paymentLink}
                    target="_blank"
                    className="secondary-btn"
                    style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        textDecoration: 'none',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: '#10b981',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                    }}
                >
                    <LinkIcon size={12} /> Pay Link
                </a>
                {/* Could add a copy button here */}
            </div>
        );
    }

    return (
        <button
            onClick={handleGenerateLink}
            disabled={isLoading}
            className="primary-btn"
            style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                border: 'none',
                background: 'var(--primary)',
                color: 'white',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.7 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}
        >
            {isLoading ? <Loader2 size={12} className="animate-spin" /> : <LinkIcon size={12} />}
            {isLoading ? 'Creating...' : 'Accept & Send Link'}
        </button>
    );
}
