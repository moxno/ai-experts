"use client";

import { useState } from 'react';
import { approveTask, rejectTask } from '@/app/admin-actions';
import { Check, X, Eye, Clock, Mail, Building, DollarSign, Tag, Trash2 } from 'lucide-react';

interface Task {
    id: string;
    title: string;
    description: string;
    budget_range: string | null;
    client_name: string | null;
    client_email: string | null;
    client_company: string | null;
    created_at: Date;
    specializations: Array<{
        id: string;
        name_he: string;
        name_en: string;
    }>;
}

export default function TaskApprovalList({
    pendingTasks,
    approvedTasks,
    lang
}: {
    pendingTasks: Task[];
    approvedTasks: Task[];
    lang: 'he' | 'en';
}) {
    const [activeTab, setActiveTab] = useState<'pending' | 'approved'>('pending');
    const [expandedTask, setExpandedTask] = useState<string | null>(null);
    const [processingId, setProcessingId] = useState<string | null>(null);

    const handleApprove = async (taskId: string) => {
        setProcessingId(taskId);
        const result = await approveTask(taskId);
        if (result.success) {
            window.location.reload();
        } else {
            alert('Error: ' + result.error);
        }
        setProcessingId(null);
    };

    const handleReject = async (taskId: string) => {
        if (!confirm(lang === 'he' ? 'האם אתה בטוח שברצונך למחוק משימה זו?' : 'Are you sure you want to delete this task?')) {
            return;
        }
        setProcessingId(taskId);
        const result = await rejectTask(taskId);
        if (result.success) {
            window.location.reload();
        } else {
            alert('Error: ' + result.error);
        }
        setProcessingId(null);
    };

    const TaskCard = ({ task, isPending }: { task: Task; isPending: boolean }) => {
        const isExpanded = expandedTask === task.id;
        const isProcessing = processingId === task.id;

        return (
            <div
                className="glass-panel"
                style={{
                    padding: '1.5rem',
                    borderRadius: '1rem',
                    border: isPending ? '1px solid rgba(251, 191, 36, 0.3)' : '1px solid rgba(16, 185, 129, 0.3)',
                    background: isPending ? 'rgba(251, 191, 36, 0.05)' : 'rgba(16, 185, 129, 0.05)',
                    opacity: isProcessing ? 0.6 : 1,
                    pointerEvents: isProcessing ? 'none' : 'auto'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                            {task.title}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#888', fontSize: '0.85rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                <Clock size={14} />
                                <span>{new Date(task.created_at).toLocaleString(lang)}</span>
                            </div>
                            {task.client_email && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Mail size={14} />
                                    <span>{task.client_email}</span>
                                </div>
                            )}
                            {task.client_company && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                    <Building size={14} />
                                    <span>{task.client_company}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {isPending && (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={() => handleApprove(task.id)}
                                disabled={isProcessing}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem'
                                }}
                            >
                                <Check size={16} />
                                {lang === 'he' ? 'אשר' : 'Approve'}
                            </button>
                            <button
                                onClick={() => handleReject(task.id)}
                                disabled={isProcessing}
                                style={{
                                    padding: '0.6rem 1.2rem',
                                    background: 'rgba(239, 68, 68, 0.2)',
                                    color: '#f87171',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    cursor: isProcessing ? 'not-allowed' : 'pointer',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem'
                                }}
                            >
                                <Trash2 size={16} />
                                {lang === 'he' ? 'מחק' : 'Delete'}
                            </button>
                        </div>
                    )}
                </div>

                <p style={{
                    color: '#aaa',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    maxHeight: isExpanded ? 'none' : '3.6em',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: isExpanded ? 'block' : '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'unset' : 2,
                    WebkitBoxOrient: 'vertical'
                }}>
                    {task.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    {task.budget_range && (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: '0.5rem',
                            color: '#818cf8'
                        }}>
                            <DollarSign size={16} />
                            <span style={{ fontWeight: 600 }}>{task.budget_range}</span>
                        </div>
                    )}
                    {task.specializations.map(spec => (
                        <div
                            key={spec.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '0.5rem',
                                fontSize: '0.85rem'
                            }}
                        >
                            <Tag size={14} />
                            <span>{lang === 'he' ? spec.name_he : spec.name_en}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setExpandedTask(isExpanded ? null : task.id)}
                    style={{
                        color: 'var(--primary)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <Eye size={16} />
                    {isExpanded
                        ? (lang === 'he' ? 'הסתר פרטים' : 'Hide Details')
                        : (lang === 'he' ? 'הצג פרטים מלאים' : 'Show Full Details')
                    }
                </button>
            </div>
        );
    };

    const tasksToShow = activeTab === 'pending' ? pendingTasks : approvedTasks;

    return (
        <div>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                <button
                    onClick={() => setActiveTab('pending')}
                    style={{
                        padding: '1rem 2rem',
                        background: 'none',
                        border: 'none',
                        borderBottom: activeTab === 'pending' ? '3px solid var(--primary)' : '3px solid transparent',
                        color: activeTab === 'pending' ? 'white' : '#888',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        transition: 'all 0.2s'
                    }}
                >
                    {lang === 'he' ? 'ממתינות לאישור' : 'Pending'} ({pendingTasks.length})
                </button>
                <button
                    onClick={() => setActiveTab('approved')}
                    style={{
                        padding: '1rem 2rem',
                        background: 'none',
                        border: 'none',
                        borderBottom: activeTab === 'approved' ? '3px solid var(--primary)' : '3px solid transparent',
                        color: activeTab === 'approved' ? 'white' : '#888',
                        cursor: 'pointer',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        transition: 'all 0.2s'
                    }}
                >
                    {lang === 'he' ? 'מאושרות' : 'Approved'} ({approvedTasks.length})
                </button>
            </div>

            {/* Task List */}
            {tasksToShow.length === 0 ? (
                <div style={{
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: '1rem',
                    border: '1px dashed rgba(255,255,255,0.1)'
                }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#888' }}>
                        {activeTab === 'pending'
                            ? (lang === 'he' ? 'אין משימות ממתינות' : 'No Pending Tasks')
                            : (lang === 'he' ? 'אין משימות מאושרות' : 'No Approved Tasks')
                        }
                    </h3>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {tasksToShow.map(task => (
                        <TaskCard key={task.id} task={task} isPending={activeTab === 'pending'} />
                    ))}
                </div>
            )}
        </div>
    );
}
