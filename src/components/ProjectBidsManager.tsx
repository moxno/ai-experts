"use client";

import { useState } from 'react';
import { acceptBid, rejectBid } from '@/app/actions';
import Link from 'next/link';
import { CheckCircle, XCircle, User, Mail, MessageSquare, AlertTriangle, Loader2, ArrowLeft, ArrowRight, Calendar, DollarSign } from 'lucide-react';
import Modal from './ui/Modal';
import MessageExpertModal from './MessageExpertModal';

export default function ProjectBidsManager({
    task,
    dict,
    lang
}: {
    task: any,
    dict: any,
    lang: string
}) {
    const [processing, setProcessing] = useState<string | null>(null);
    const [confirmAction, setConfirmAction] = useState<{
        type: 'accept' | 'reject';
        bidId: string;
        taskId?: string;
        expertName: string;
        amount: number;
    } | null>(null);

    const [messageModal, setMessageModal] = useState<{
        isOpen: boolean;
        expertId: string;
        expertName: string;
        taskId: string;
    }>({ isOpen: false, expertId: '', expertName: '', taskId: '' });

    const isHe = lang === 'he';

    const handleAcceptBid = async () => {
        if (!confirmAction || confirmAction.type !== 'accept' || !confirmAction.taskId) return;

        setProcessing(confirmAction.bidId);
        const result = await acceptBid(confirmAction.bidId, confirmAction.taskId);

        if (result.success) {
            window.location.reload();
        } else {
            alert('Error: ' + result.error);
            setProcessing(null);
            setConfirmAction(null);
        }
    };

    const handleRejectBid = async () => {
        if (!confirmAction || confirmAction.type !== 'reject') return;

        setProcessing(confirmAction.bidId);
        const result = await rejectBid(confirmAction.bidId);

        if (result.success) {
            window.location.reload();
        } else {
            alert('Error: ' + result.error);
            setProcessing(null);
            setConfirmAction(null);
        }
    };

    return (
        <>
            <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                    {dict.dashboard.bidsReceived} ({task.bids.length})
                </h2>

                {task.bids.length === 0 ? (
                    <div style={{ padding: '3rem', textAlign: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem' }}>
                        <p style={{ color: '#888', marginBottom: '1rem' }}>{dict.dashboard.noBids}</p>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>
                            {isHe ? 'המומחים שלנו עובדים על הכנת הצעות עבורך. תקבל התראה במייל ברגע שתתקבל הצעה חדשה.' : 'Our experts are working on proposals for you. You will be notified via email as soon as a new bid is received.'}
                        </p>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {task.bids.map((bid: any) => (
                            <div
                                key={bid.id}
                                style={{
                                    padding: '1.5rem',
                                    background: bid.status === 'accepted' ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.02)',
                                    borderRadius: '0.75rem',
                                    border: bid.status === 'accepted' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255,255,255,0.05)',
                                    transition: 'all 0.2s',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {bid.status === 'accepted' && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '4px',
                                        height: '100%',
                                        background: '#10b981'
                                    }} />
                                )}

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
                                    {/* Expert Info */}
                                    <div style={{ flex: 1, minWidth: '250px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                            <div style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '50%',
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                border: '1px solid rgba(99, 102, 241, 0.2)'
                                            }}>
                                                {bid.expert.profile_image ? (
                                                    <img src={bid.expert.profile_image} alt={bid.expert.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                                ) : (
                                                    <User size={20} color="#6366f1" />
                                                )}
                                            </div>
                                            <div>
                                                <Link
                                                    href={`/${lang}/experts/${bid.expert.slug}`}
                                                    className="hover-underline"
                                                    style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', textDecoration: 'none', display: 'block' }}
                                                >
                                                    {bid.expert.name}
                                                </Link>
                                                <div style={{ fontSize: '0.8rem', color: '#888' }}>{bid.expert.title}</div>
                                            </div>
                                        </div>

                                        <div style={{
                                            padding: '1rem',
                                            background: 'rgba(0,0,0,0.2)',
                                            borderRadius: '0.5rem',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            <p style={{ fontSize: '0.95rem', color: '#ccc', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                                                {bid.message}
                                            </p>
                                        </div>

                                        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                                <Calendar size={14} />
                                                {new Date(bid.created_at).toLocaleDateString(lang)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bid Amount & Actions */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', minWidth: '200px' }}>
                                        <div style={{ textAlign: isHe ? 'left' : 'right', width: '100%' }}>
                                            <div style={{ fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                                                {dict.dashboard.bidAmount}
                                            </div>
                                            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: isHe ? 'flex-start' : 'flex-end', gap: '0.2rem' }}>
                                                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>$</span>{bid.amount}
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
                                            {/* Contact Button - Always available if not rejected */}
                                            {bid.status !== 'rejected' && (
                                                <button
                                                    onClick={() => setMessageModal({
                                                        isOpen: true,
                                                        expertId: bid.expert.id,
                                                        expertName: bid.expert.name,
                                                        taskId: task.id
                                                    })}
                                                    className="secondary-btn"
                                                    style={{ width: '100%', justifyContent: 'center' }}
                                                >
                                                    <MessageSquare size={16} />
                                                    {isHe ? 'שלח הודעה' : 'Message Expert'}
                                                </button>
                                            )}

                                            {bid.status === 'pending' && task.status === 'open' && (
                                                <>
                                                    <button
                                                        onClick={() => setConfirmAction({
                                                            type: 'accept',
                                                            bidId: bid.id,
                                                            taskId: task.id,
                                                            expertName: bid.expert.name,
                                                            amount: bid.amount
                                                        })}
                                                        disabled={processing === bid.id}
                                                        className="primary-btn"
                                                        style={{ width: '100%', justifyContent: 'center', background: '#10b981' }}
                                                    >
                                                        <CheckCircle size={16} />
                                                        {dict.dashboard.acceptBid}
                                                    </button>
                                                    <button
                                                        onClick={() => setConfirmAction({
                                                            type: 'reject',
                                                            bidId: bid.id,
                                                            expertName: bid.expert.name,
                                                            amount: bid.amount
                                                        })}
                                                        disabled={processing === bid.id}
                                                        className="secondary-btn"
                                                        style={{ width: '100%', justifyContent: 'center', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)' }}
                                                    >
                                                        <XCircle size={16} />
                                                        {dict.dashboard.rejectBid}
                                                    </button>
                                                </>
                                            )}
                                        </div>

                                        {bid.status === 'accepted' && (
                                            <div style={{
                                                padding: '0.75rem',
                                                background: 'rgba(16, 185, 129, 0.1)',
                                                borderRadius: '0.5rem',
                                                color: '#10b981',
                                                fontWeight: 700,
                                                fontSize: '0.9rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                width: '100%',
                                                justifyContent: 'center',
                                                border: '1px solid rgba(16, 185, 129, 0.2)'
                                            }}>
                                                <CheckCircle size={18} />
                                                {isHe ? 'הצעה מאושרת' : 'Bid Accepted'}
                                            </div>
                                        )}

                                        {bid.status === 'rejected' && (
                                            <div style={{
                                                padding: '0.5rem 1rem',
                                                background: 'rgba(239, 68, 68, 0.1)',
                                                borderRadius: '0.5rem',
                                                color: '#ef4444',
                                                fontWeight: 700,
                                                fontSize: '0.85rem'
                                            }}>
                                                {isHe ? 'נדחתה' : 'Rejected'}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Contact Info (shown after acceptance) */}
                                {bid.status === 'accepted' && (
                                    <div style={{
                                        marginTop: '1.5rem',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid rgba(16, 185, 129, 0.2)',
                                        animation: 'fadeIn 0.5s ease'
                                    }}>
                                        <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: '#10b981' }}>
                                            {isHe ? 'פרטי התקשרות' : 'Contact Information'}
                                        </h4>
                                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%' }}>
                                                    <Mail size={18} color="#10b981" />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.75rem', color: '#888', marginBottom: '0.2rem' }}>Email</div>
                                                    <a href={`mailto:${bid.expert.email}`} style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
                                                        {bid.expert.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '0.5rem', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                            <p style={{ fontSize: '0.9rem', color: '#fff' }}>
                                                {isHe
                                                    ? 'מזל טוב! כעת ניתן ליצור קשר עם המומחה ולהתחיל בעבודה. המומחה קיבל גם הוא את פרטי הקשר שלך.'
                                                    : 'Congratulations! You can now contact the expert and start the project. The expert has also received your contact details.'}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Confirm Action Modal */}
            <Modal
                isOpen={!!confirmAction}
                onClose={() => !processing && setConfirmAction(null)}
                title={confirmAction?.type === 'accept' ? (isHe ? 'אישור הצעה' : 'Confirm Acceptance') : (isHe ? 'דחיית הצעה' : 'Reject Bid')}
            >
                <div style={{ textAlign: 'center' }}>
                    <div style={{ margin: '0 auto 1.5rem', width: '60px', height: '60px', borderRadius: '50%', background: confirmAction?.type === 'accept' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: confirmAction?.type === 'accept' ? '#10b981' : '#ef4444' }}>
                        {confirmAction?.type === 'accept' ? <CheckCircle size={32} /> : <AlertTriangle size={32} />}
                    </div>

                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>
                        {confirmAction?.type === 'accept'
                            ? (isHe ? `האם אתה בטוח שברצונך לאשר את ההצעה של ${confirmAction?.expertName}?` : `Are you sure you want to accept ${confirmAction?.expertName}'s bid?`)
                            : (isHe ? `האם אתה בטוח שברצונך לדחות את ההצעה של ${confirmAction?.expertName}?` : `Are you sure you want to reject ${confirmAction?.expertName}'s bid?`)
                        }
                    </p>

                    {confirmAction?.type === 'accept' && (
                        <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', margin: '1rem 0' }}>
                            ${confirmAction?.amount}
                        </p>
                    )}

                    <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '2rem' }}>
                        {confirmAction?.type === 'accept'
                            ? (isHe ? 'אישור ההצעה יאפשר לך ליצור קשר ישיר עם המומחה ולהתחיל לעבוד.' : 'Accepting this bid will allow you to contact the expert directly and start working.')
                            : (isHe ? 'הפעולה הזו לא ניתנת לביטול.' : 'This action cannot be undone.')
                        }
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button
                            onClick={() => setConfirmAction(null)}
                            disabled={!!processing}
                            className="secondary-btn"
                            style={{ padding: '0.75rem 2rem' }}
                        >
                            {isHe ? 'ביטול' : 'Cancel'}
                        </button>
                        <button
                            onClick={confirmAction?.type === 'accept' ? handleAcceptBid : handleRejectBid}
                            disabled={!!processing}
                            className="primary-btn"
                            style={{
                                padding: '0.75rem 2rem',
                                background: confirmAction?.type === 'accept' ? '#10b981' : '#ef4444',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            {processing ? (
                                <>
                                    <Loader2 className="spin" size={18} />
                                    {isHe ? 'מעבד...' : 'Processing...'}
                                </>
                            ) : (
                                <>
                                    {confirmAction?.type === 'accept' ? (isHe ? 'אשר הצעה' : 'Confirm Accept') : (isHe ? 'דחה הצעה' : 'Reject Bid')}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Message Expert Modal */}
            <MessageExpertModal
                isOpen={messageModal.isOpen}
                onClose={() => setMessageModal(prev => ({ ...prev, isOpen: false }))}
                expertId={messageModal.expertId}
                expertName={messageModal.expertName}
                taskId={messageModal.taskId}
                lang={lang}
            />

            <style jsx global>{`
                .hover-underline:hover {
                    text-decoration: underline !important;
                }
                .secondary-btn {
                    padding: 0.5rem 1rem;
                    background: rgba(255,255,255,0.1);
                    color: white;
                    border: 1px solid rgba(255,255,255,0.2);
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                }
                .secondary-btn:hover {
                    background: rgba(255,255,255,0.15);
                }
                .primary-btn {
                    padding: 0.5rem 1rem;
                    background: var(--primary);
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: all 0.2s;
                }
                .primary-btn:hover {
                    opacity: 0.9;
                }
                .spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </>
    );
}
