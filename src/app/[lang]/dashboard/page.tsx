import type { Metadata } from 'next';
import PaymentAction from '@/components/PaymentAction';
import { auth } from "@/auth";
import { prisma } from '@/lib/prisma';
import { redirect } from "next/navigation";
import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import { getNextTierInfo, convertUsdToNis } from '@/lib/commission';
import ClientTaskManager from '@/components/ClientTaskManager';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return {
        title: lang === 'he' ? 'לוח בקרה | AI-Experts.co.il' : 'Dashboard | AI-Experts.co.il',
        description: 'Manage your bookings and profile.',
    };
}

export default async function DashboardPage(props: {
    params: Promise<{ lang: string }>,
    searchParams: Promise<{ mode?: string }>
}) {
    const session = await auth();
    const params = await props.params;
    const searchParams = await props.searchParams;
    const lang = params.lang as 'he' | 'en';
    const mode = searchParams.mode;
    const isRtl = lang === 'he';
    const dict = await getDictionary(lang);

    if (!session?.user) {
        redirect(`/${lang}/login`);
    }

    const email = session.user.email || "";
    const userId = session.user.id;

    // Check if user is an Expert
    const expert = await prisma.expert.findFirst({
        where: {
            OR: [
                { userId: userId },
                { email: email }
            ]
        },
        include: {
            bookings: {
                orderBy: { created_at: 'desc' },
            }
        }
    });

    // Also check for user's own bookings as a Client
    const clientBookings = await prisma.booking.findMany({
        where: { company_email: email },
        include: { expert: true },
        orderBy: { created_at: 'desc' }
    });

    // Fetch client's tasks (for marketplace)
    const clientTasks = await prisma.task.findMany({
        where: { client_email: email },
        include: {
            specializations: true,
            bids: {
                include: { expert: true },
                orderBy: { created_at: 'desc' }
            }
        },
        orderBy: { created_at: 'desc' }
    });

    // Marketplace Data
    let matchedTasks: any[] = [];
    let myBids: any[] = [];

    if (expert) {
        // Fetch tasks that match expert specializations
        const expertSpecIds = (await prisma.expert.findUnique({
            where: { id: expert.id },
            select: { specializations_list: { select: { id: true } } }
        }))?.specializations_list.map(s => s.id) || [];

        matchedTasks = await prisma.task.findMany({
            where: {
                status: 'open',
                specializations: {
                    some: {
                        id: { in: expertSpecIds }
                    }
                }
            },
            include: { specializations: true },
            orderBy: { created_at: 'desc' },
            take: 5
        });

        myBids = await prisma.bid.findMany({
            where: { expert_id: expert.id },
            include: { task: true },
            orderBy: { created_at: 'desc' }
        });
    }

    const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    const formatNIS = (val: number) => new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS', maximumFractionDigits: 0 }).format(val);

    // Check for Admin Role
    const isAdmin = session.user.role === 'ADMIN';

    // Render Admin Dashboard
    if (isAdmin && mode === 'admin') {
        const totalExperts = await prisma.expert.count();
        const totalBookings = await prisma.booking.count();
        const pendingBookings = await prisma.booking.count({ where: { status: 'pending' } });
        const allBookings = await prisma.booking.findMany({
            take: 10,
            orderBy: { created_at: 'desc' },
            include: { expert: true }
        });

        const allExperts = await prisma.expert.findMany({
            orderBy: { created_at: 'desc' }
        });

        return (
            <div className="container" style={{ padding: '4rem 1.5rem', direction: isRtl ? 'rtl' : 'ltr', textAlign: isRtl ? 'right' : 'left' }}>
                <h1 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Admin Dashboard (Manager Mode)</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--primary)' }}>
                        <h3 style={{ fontSize: '0.9rem', color: '#aaa' }}>Total Experts</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalExperts}</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--primary)' }}>
                        <h3 style={{ fontSize: '0.9rem', color: '#aaa' }}>Total Bookings</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalBookings}</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid #f59e0b' }}>
                        <h3 style={{ fontSize: '0.9rem', color: '#aaa' }}>Pending Action</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>{pendingBookings}</p>
                    </div>
                </div>

                <h2 style={{ marginBottom: '1rem' }}>Last 10 System Bookings</h2>
                <div className="glass-panel" style={{ padding: '0', borderRadius: '1rem', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: 'rgba(255,255,255,0.05)' }}>
                            <tr>
                                <th style={{ padding: '1rem' }}>Expert</th>
                                <th style={{ padding: '1rem' }}>Client</th>
                                <th style={{ padding: '1rem' }}>Date</th>
                                <th style={{ padding: '1rem' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allBookings.map(b => (
                                <tr key={b.id} style={{ borderTop: '1px solid var(--border)' }}>
                                    <td style={{ padding: '1rem' }}>{b.expert.name}</td>
                                    <td style={{ padding: '1rem' }}>{b.company_name}</td>
                                    <td style={{ padding: '1rem' }}>{new Date(b.created_at).toLocaleDateString()}</td>
                                    <td style={{ padding: '1rem' }}>{b.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h2>Expert Management</h2>
                        <Link href={`/${lang}/register-expert`} className="primary-btn" style={{ padding: '0.5rem 1rem', background: 'var(--primary)', color: 'white', borderRadius: '0.5rem', textDecoration: 'none', fontSize: '0.9rem' }}>
                            + Add New Expert
                        </Link>
                    </div>
                    <div className="glass-panel" style={{ padding: '0', borderRadius: '1rem', overflow: 'hidden' }}>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead style={{ background: 'rgba(255,255,255,0.05)' }}>
                                    <tr>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Name</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Email</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Status</th>
                                        <th style={{ padding: '1rem', textAlign: 'left' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allExperts.map(ex => (
                                        <tr key={ex.id} style={{ borderTop: '1px solid var(--border)' }}>
                                            <td style={{ padding: '1rem' }}>
                                                <div style={{ fontWeight: 600 }}>{ex.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#888' }}>{ex.title_en}</div>
                                            </td>
                                            <td style={{ padding: '1rem' }}>{ex.email}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '4px',
                                                    fontSize: '0.8rem',
                                                    background: ex.active ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                                                    color: ex.active ? '#10b981' : '#f59e0b'
                                                }}>
                                                    {ex.active ? 'Active' : 'Pending'}
                                                </span>
                                            </td>
                                            <td style={{ padding: '1rem' }}>
                                                <Link href={`/${lang}/admin/experts/${ex.id}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
                                                    Edit Profile
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Show the Expert dashboard below if the admin is also an expert */}
                {expert && (
                    <div style={{ marginTop: '4rem', opacity: 0.7 }}>
                        <hr style={{ borderColor: 'var(--border)', marginBottom: '2rem' }} />
                        <h3>Your Personal Expert Dashboard View:</h3>
                    </div>
                )}
            </div>
        );
    }

    // Render Expert Dashboard if registered
    if (expert) {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));

        const monthlyBookings = expert.bookings.filter(b =>
            new Date(b.created_at) >= thirtyDaysAgo &&
            b.status !== 'cancelled'
        );

        const monthlyVolumeUSD = monthlyBookings.reduce((sum, b) => sum + b.quote_amount_usd, 0);
        const monthlyVolumeNIS = convertUsdToNis(monthlyVolumeUSD);
        const tierInfo = getNextTierInfo(monthlyVolumeNIS);

        const totalEarnings = expert.bookings
            .filter(b => b.payment_status === 'paid')
            .reduce((sum, b) => sum + (b.expert_payout_usd || b.quote_amount_usd * (1 - tierInfo.currentRate)), 0);

        return (
            <div className="container" style={{ padding: '4rem 1.5rem', direction: isRtl ? 'rtl' : 'ltr', textAlign: isRtl ? 'right' : 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '2rem' }}>{dict.dashboard.welcome}, {expert.name}</h1>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link href={`/${lang}/dashboard/profile`} className="secondary-btn" style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', textDecoration: 'none' }}>
                            {dict.dashboard.editProfile}
                        </Link>
                        <Link href={`/${lang}/experts/${expert.slug}`} className="secondary-btn" style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', textDecoration: 'none' }}>
                            {dict.dashboard.viewPublicProfile}
                        </Link>
                    </div>
                </div>

                {/* Commission Tier Card */}
                <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1rem', marginBottom: '3rem', border: '1px solid rgba(99, 102, 241, 0.3)', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), transparent)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{dict.dashboard.performanceFee}</h3>
                            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{dict.dashboard.increaseVolume}</p>
                        </div>
                        <div style={{ textAlign: isRtl ? 'left' : 'right' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>{(tierInfo.currentRate * 100)}%</span>
                            <div style={{ fontSize: '0.8rem', color: '#aaa' }}>{dict.dashboard.currentFee}</div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '0.8rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span>{dict.dashboard.monthlyVolume} <strong>{formatNIS(monthlyVolumeNIS)}</strong></span>
                        {tierInfo.remaining > 0 && (
                            <span>{dict.dashboard.remainingForNextTier.replace('{amount}', formatNIS(tierInfo.remaining)).replace('{rate}', (tierInfo.nextRate * 100).toString())}</span>
                        )}
                    </div>

                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{
                            width: `${Math.min(100, (monthlyVolumeNIS / tierInfo.nextLimit) * 100)}%`,
                            height: '100%',
                            background: 'var(--primary)',
                            transition: 'width 0.5s ease'
                        }} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                        <h3 style={{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase' }}>{dict.dashboard.totalEarnings}</h3>
                        <p style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0' }}>{formatCurrency(totalEarnings)}</p>
                        <span style={{ color: '#10b981' }}>Payouts available</span>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                        <h3 style={{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase' }}>{dict.dashboard.pendingBookings}</h3>
                        <p style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0' }}>{expert.bookings.filter(b => b.status === 'pending').length}</p>
                        <span style={{ color: '#aaa' }}>{expert.bookings.length} total</span>
                    </div>
                    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                        <h3 style={{ color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase' }}>{dict.dashboard.avgRating}</h3>
                        <p style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0' }}>{expert.average_rating}</p>
                        <span style={{ color: '#fbbf24' }}>★ {expert.total_reviews} reviews</span>
                    </div>
                </div>

                <h2 style={{ marginBottom: '1.5rem' }}>{dict.dashboard.recentBookings}</h2>
                <div className="glass-panel" style={{ padding: '0', borderRadius: '1rem', overflow: 'hidden' }}>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: isRtl ? 'right' : 'left' }}>
                            <thead style={{ background: 'rgba(255,255,255,0.02)' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>{dict.dashboard.client}</th>
                                    <th style={{ padding: '1rem' }}>{dict.dashboard.date}</th>
                                    <th style={{ padding: '1rem' }}>{dict.dashboard.status}</th>
                                    <th style={{ padding: '1rem' }}>{dict.dashboard.amount}</th>
                                    <th style={{ padding: '1rem' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expert.bookings.length > 0 ? expert.bookings.map(booking => (
                                    <tr key={booking.id} style={{ borderTop: '1px solid var(--border)' }}>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ fontWeight: 600 }}>{booking.company_name}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#888' }}>{booking.company_contact_name}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>{new Date(booking.date_requested).toLocaleDateString(lang)}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                padding: '0.2rem 0.5rem',
                                                borderRadius: '4px',
                                                fontSize: '0.8rem',
                                                background: booking.status === 'pending' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                                                color: booking.status === 'pending' ? '#f59e0b' : '#10b981'
                                            }}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>${booking.quote_amount_usd}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <PaymentAction booking={booking} lang={lang} />
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: '#666' }}>{dict.dashboard.noBookings}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Marketplace Sections */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginTop: '4rem', marginBottom: '4rem' }}>
                    {/* Relevant Tasks */}
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h2 style={{ fontSize: '1.5rem' }}>{dict.dashboard.availableTasks}</h2>
                            <Link href={`/${lang}/tasks`} style={{ fontSize: '0.9rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
                                {dict.dashboard.taskMarketplace} →
                            </Link>
                        </div>
                        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            {matchedTasks.length > 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {matchedTasks.map(task => (
                                        <div key={task.id} className="task-card-mini" style={{ padding: '1rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.2s' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', gap: '1rem' }}>
                                                <h4 style={{ fontWeight: 600, fontSize: '1rem' }}>{task.title}</h4>
                                                <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{task.budget_range}</span>
                                            </div>
                                            <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '1rem', lineHeight: '1.5' }}>
                                                {task.description.length > 100 ? task.description.substring(0, 100) + '...' : task.description}
                                            </p>
                                            <Link href={`/${lang}/tasks/${task.slug}`} style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
                                                {lang === 'he' ? 'צפה והגש הצעה' : 'View & Bid'}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                        {lang === 'he' ? 'לא נמצאו משימות תואמות להתמחויות שלך.' : 'No matching tasks found for your specializations.'}
                                    </p>
                                    <Link href={`/${lang}/dashboard/profile`} style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}>
                                        {lang === 'he' ? 'עדכן התמחויות בפרופיל' : 'Update specializations in profile'}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* My Bids */}
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{dict.dashboard.myBids}</h2>
                        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                            {myBids.length > 0 ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {myBids.map(bid => (
                                        <div key={bid.id} style={{ padding: '1rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', gap: '1rem' }}>
                                                <h4 style={{ fontWeight: 600, fontSize: '1rem' }}>{bid.task.title}</h4>
                                                <span style={{
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '4px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                    background: bid.status === 'pending' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                                    color: bid.status === 'pending' ? '#f59e0b' : '#10b981',
                                                    textTransform: 'capitalize'
                                                }}>
                                                    {bid.status}
                                                </span>
                                            </div>
                                            <div style={{ fontSize: '0.85rem', color: '#888' }}>
                                                {lang === 'he' ? 'הצעה:' : 'Proposed:'} <span style={{ color: '#fff', fontWeight: 600 }}>${bid.amount}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center', padding: '2rem' }}>
                                    <p style={{ color: '#666', fontSize: '0.9rem' }}>
                                        {lang === 'he' ? 'עדיין לא הגשת הצעות מחיר.' : "You haven't placed any bids yet."}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* If Expert also has Client bookings, show them too */}
                {clientBookings.length > 0 && (
                    <div style={{ marginTop: '4rem' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>{dict.dashboard.clientTitle} ({dict.dashboard.trackStatus})</h2>
                        <div className="glass-panel" style={{ padding: '0', borderRadius: '1rem', overflow: 'hidden' }}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: isRtl ? 'right' : 'left' }}>
                                    <thead style={{ background: 'rgba(255,255,255,0.02)' }}>
                                        <tr>
                                            <th style={{ padding: '1rem' }}>{dict.dashboard.expert}</th>
                                            <th style={{ padding: '1rem' }}>{dict.dashboard.date}</th>
                                            <th style={{ padding: '1rem' }}>{dict.dashboard.status}</th>
                                            <th style={{ padding: '1rem' }}>{dict.dashboard.invoice}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clientBookings.map(booking => (
                                            <tr key={booking.id} style={{ borderTop: '1px solid var(--border)' }}>
                                                <td style={{ padding: '1rem' }}>
                                                    <div style={{ fontWeight: 600 }}>{booking.expert.name}</div>
                                                </td>
                                                <td style={{ padding: '1rem' }}>{new Date(booking.date_requested).toLocaleDateString(lang)}</td>
                                                <td style={{ padding: '1rem' }}>
                                                    <span style={{
                                                        padding: '0.2rem 0.5rem',
                                                        borderRadius: '4px',
                                                        fontSize: '0.8rem',
                                                        background: booking.status === 'pending' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                                                        color: booking.status === 'pending' ? '#f59e0b' : '#10b981'
                                                    }}>
                                                        {booking.status}
                                                    </span>
                                                </td>
                                                <td style={{ padding: '1rem' }}>
                                                    {booking.invoice_link ? (
                                                        <a href={booking.invoice_link} target="_blank" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                                            {dict.dashboard.downloadInvoice}
                                                        </a>
                                                    ) : (
                                                        <span style={{ color: '#666', fontSize: '0.8rem' }}>---</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Render Client Dashboard for regular users
    return (
        <div className="container" style={{ padding: '4rem 1.5rem', direction: isRtl ? 'rtl' : 'ltr', textAlign: isRtl ? 'right' : 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h1>{dict.dashboard.clientTitle}</h1>
                <Link
                    href={`/${lang}/tasks/new`}
                    className="primary-btn"
                    style={{
                        padding: '0.75rem 1.5rem',
                        background: 'var(--primary)',
                        color: 'white',
                        borderRadius: '0.5rem',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'inline-block'
                    }}
                >
                    {isRtl ? '+ פרסם משימה חדשה' : '+ Post New Task'}
                </Link>
            </div>

            {/* Marketplace Tasks Section */}
            {clientTasks.length > 0 && (
                <>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>{dict.dashboard.myTasks}</h2>
                    <ClientTaskManager tasks={clientTasks} dict={dict} lang={lang} />
                </>
            )}

            {/* Legacy Bookings Section */}
            {clientBookings.length > 0 && (
                <>
                    <h2 style={{ marginBottom: '1.5rem' }}>{dict.dashboard.recentBookings}</h2>
                    <div className="glass-panel" style={{ padding: '0', borderRadius: '1rem', overflow: 'hidden' }}>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: isRtl ? 'right' : 'left' }}>
                                <thead style={{ background: 'rgba(255,255,255,0.02)' }}>
                                    <tr>
                                        <th style={{ padding: '1rem' }}>{dict.dashboard.expert}</th>
                                        <th style={{ padding: '1rem' }}>{dict.dashboard.date}</th>
                                        <th style={{ padding: '1rem' }}>{dict.dashboard.status}</th>
                                        <th style={{ padding: '1rem' }}>{dict.dashboard.amount}</th>
                                        <th style={{ padding: '1rem' }}>{dict.dashboard.invoice}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientBookings.map(booking => (
                                        <tr key={booking.id} style={{ borderTop: '1px solid var(--border)' }}>
                                            <td style={{ padding: '1rem' }}>
                                                <div style={{ fontWeight: 600 }}>{booking.expert.name}</div>
                                            </td>
                                            <td style={{ padding: '1rem' }}>{new Date(booking.date_requested).toLocaleDateString(lang)}</td>
                                            <td style={{ padding: '1rem' }}>
                                                <span style={{
                                                    padding: '0.2rem 0.5rem',
                                                    borderRadius: '4px',
                                                    fontSize: '0.8rem',
                                                    background: booking.status === 'pending' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                                                    color: booking.status === 'pending' ? '#f59e0b' : '#10b981'
                                                }}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td style={{ padding: '1rem' }}>${booking.quote_amount_usd}</td>
                                            <td style={{ padding: '1rem' }}>
                                                {booking.invoice_link ? (
                                                    <a href={booking.invoice_link} target="_blank" style={{ color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                                        {dict.dashboard.downloadInvoice}
                                                    </a>
                                                ) : (
                                                    <span style={{ color: '#666', fontSize: '0.8rem' }}>---</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
