
'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { addReview } from '@/app/actions';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ReviewForm({ expertId, dict, user }: { expertId: string, dict: any, user: any }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [rating, setRating] = useState(5);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const pathname = usePathname();

    const currentLang = pathname?.split('/')[1] || 'he';

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        setMessage('');

        formData.append('expertId', expertId);
        formData.append('rating', rating.toString());

        const result = await addReview(formData);

        setIsSubmitting(false);
        if (result.success) {
            setMessage(dict.success || 'Review submitted!');
            setIsExpanded(false);
            window.location.reload();
        } else {
            setMessage(dict.error || 'Something went wrong.');
        }
    };

    if (!user) {
        return (
            <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem', textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem', color: '#aaa' }}>
                    {currentLang === 'he' ? 'רק משתמשים רשומים יכולים לכתוב ביקורת' : 'Only logged in users can leave a review'}
                </p>
                <Link
                    href={`/${currentLang}/login?callbackUrl=${encodeURIComponent(pathname || '')}`}
                    className="primary-btn"
                    style={{
                        padding: '0.8rem 1.5rem',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}
                >
                    {currentLang === 'he' ? 'התחברות / הרשמה' : 'Login / Register'}
                </Link>
            </div>
        );
    }

    if (!isExpanded) {
        return (
            <button
                onClick={() => setIsExpanded(true)}
                style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid var(--border)',
                    color: 'white',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    marginBottom: '2rem',
                    fontWeight: 500
                }}
            >
                {dict.writeReview || 'Write a Review'}
            </button>
        );
    }

    return (
        <form action={handleSubmit} className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>{dict.writeReview || 'Write a Review'}</h3>

            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>
                    {dict.rating || 'Rating'}
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', cursor: 'pointer' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={24}
                            fill={star <= rating ? "#fbbf24" : "none"}
                            color={star <= rating ? "#fbbf24" : "#666"}
                            onClick={() => setRating(star)}
                        />
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>
                        {dict.yourName || 'Your Name'} *
                    </label>
                    <input
                        name="company_name"
                        required
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid var(--border)',
                            color: 'white'
                        }}
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>
                        {dict.reviewTitle || 'Title'}
                    </label>
                    <input
                        name="title"
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            borderRadius: '0.5rem',
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid var(--border)',
                            color: 'white'
                        }}
                        placeholder="Great experience..."
                    />
                </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#ccc' }}>
                    {dict.reviewText || 'Review'} *
                </label>
                <textarea
                    name="text"
                    required
                    rows={4}
                    style={{
                        width: '100%',
                        padding: '0.8rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(0,0,0,0.3)',
                        border: '1px solid var(--border)',
                        color: 'white',
                        resize: 'vertical'
                    }}
                    placeholder="Tell us about your experience..."
                />
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                        background: 'var(--primary)',
                        color: 'white',
                        padding: '0.8rem 2rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        fontWeight: 600,
                        cursor: isSubmitting ? 'wait' : 'pointer',
                        opacity: isSubmitting ? 0.7 : 1
                    }}
                >
                    {isSubmitting ? 'Submitting...' : (dict.submit || 'Submit Review')}
                </button>
                <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    style={{
                        background: 'transparent',
                        color: '#aaa',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    {dict.cancel || 'Cancel'}
                </button>
                {message && <span style={{ color: message.includes('wrong') ? 'red' : 'green' }}>{message}</span>}
            </div>
        </form>
    );
}
