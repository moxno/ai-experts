
"use client";

import { useState } from 'react';
import { submitBid } from '@/app/actions';

export default function BidForm({
    taskId,
    dict,
    lang
}: {
    taskId: string,
    dict: any,
    lang: string
}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        amount: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await submitBid({
            taskId,
            ...formData
        });

        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
        } else {
            alert('Error: ' + result.error);
        }
    };

    if (isSuccess) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '1rem', border: '1px solid #10b981' }}>
                <h3 style={{ color: '#10b981', marginBottom: '0.5rem' }}>{lang === 'he' ? 'ההצעה נשלחה בהצלחה!' : 'Bid submitted successfully!'}</h3>
                <p style={{ color: '#aaa' }}>{lang === 'he' ? 'הלקוח יקבל הודעה על הצעתך.' : 'The client will be notified of your proposal.'}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{dict.dashboard.bidAmount} (₪)</label>
                <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    placeholder="e.g. 500"
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#aaa' }}>{dict.dashboard.bidMessage}</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{ ...inputStyle, minHeight: '120px' }}
                    placeholder={lang === 'he' ? 'ספר בקצרה למה כדאי לבחור בך...' : 'Briefly explain why they should choose you...'}
                />
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="primary-btn"
                style={{
                    padding: '1rem',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: 700,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
            >
                {isSubmitting ? '...' : dict.dashboard.submitBid}
            </button>
        </form>
    );
}

const inputStyle = {
    padding: '0.8rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid var(--border)',
    color: 'white',
    borderRadius: '0.5rem',
    outline: 'none'
};
