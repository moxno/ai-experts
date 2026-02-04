
"use client";

import { useState } from 'react';
import Modal from './ui/Modal';
import { sendMessageToExpert } from '@/app/actions';
import { Send, Loader2 } from 'lucide-react';

interface MessageExpertModalProps {
    isOpen: boolean;
    onClose: () => void;
    expertId: string;
    expertName: string;
    taskId: string;
    lang: string;
}

export default function MessageExpertModal({
    isOpen,
    onClose,
    expertId,
    expertName,
    taskId,
    lang
}: MessageExpertModalProps) {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const isHe = lang === 'he';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSending(true);

        try {
            const formData = new FormData();
            formData.append('expertId', expertId);
            formData.append('taskId', taskId);
            formData.append('subject', subject);
            formData.append('message', message);

            const result = await sendMessageToExpert(expertId, taskId, subject, message);

            if (result.success) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setSubject('');
                    setMessage('');
                    onClose();
                }, 2000);
            } else {
                setError(result.error || 'Failed to send message');
            }
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred');
        } finally {
            setIsSending(false);
        }
    };

    const resetForm = () => {
        setSubject('');
        setMessage('');
        setError(null);
        setSuccess(false);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={resetForm}
            title={isHe ? `שלח הודעה ל-${expertName}` : `Message ${expertName}`}
        >
            {success ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                        color: '#10b981'
                    }}>
                        <Send size={30} />
                    </div>
                    <h3 style={{ marginBottom: '0.5rem' }}>{isHe ? 'הודעה נשלחה!' : 'Message Sent!'}</h3>
                    <p style={{ color: '#888' }}>
                        {isHe
                            ? 'המומחה יקבל התראה באימייל ויוכל להשיב לך ישירות.'
                            : 'The expert will be notified via email and can reply to you directly.'}
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {error && (
                        <div style={{
                            padding: '0.75rem',
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.2)',
                            borderRadius: '0.5rem',
                            color: '#ef4444',
                            fontSize: '0.9rem'
                        }}>
                            {error}
                        </div>
                    )}

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>
                            {isHe ? 'נושא' : 'Subject'}
                        </label>
                        <input
                            type="text"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder={isHe ? 'למשל: שאלה לגבי הצעת המחיר שלך...' : 'e.g., Question about your bid...'}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.5rem',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#ccc' }}>
                            {isHe ? 'הודעה' : 'Message'}
                        </label>
                        <textarea
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            placeholder={isHe ? 'כתוב את הודעתך כאן...' : 'Write your message here...'}
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '0.5rem',
                                color: 'white',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                        <button
                            type="button"
                            onClick={resetForm}
                            disabled={isSending}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                color: 'white',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                fontWeight: 500
                            }}
                        >
                            {isHe ? 'ביטול' : 'Cancel'}
                        </button>
                        <button
                            type="submit"
                            disabled={isSending}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: 'var(--primary)',
                                border: 'none',
                                color: 'white',
                                borderRadius: '0.5rem',
                                cursor: isSending ? 'not-allowed' : 'pointer',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                opacity: isSending ? 0.7 : 1
                            }}
                        >
                            {isSending ? (
                                <>
                                    <Loader2 className="spin" size={18} />
                                    {isHe ? 'שולח...' : 'Sending...'}
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    {isHe ? 'שלח הודעה' : 'Send Message'}
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
            <style jsx global>{`
                .spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </Modal>
    );
}
