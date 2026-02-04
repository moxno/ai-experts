
import type { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Admin Panel | AI-Experts.co.il',
    description: 'Platform management and statistics.',
};

export default async function AdminPage(props: { params: Promise<{ lang: string }> }) {
    const session = await auth();
    const params = await props.params;
    const lang = params.lang;

    if (!session?.user || session.user.role !== 'ADMIN') {
        redirect(`/${lang}`);
    }
    const stats = await prisma.$transaction([
        prisma.booking.aggregate({
            where: { payment_status: 'paid' },
            _sum: { quote_amount_usd: true }
        }),
        prisma.expert.count({ where: { active: true } }),
        prisma.booking.count()
    ]);

    const totalRevenue = stats[0]._sum.quote_amount_usd || 0;
    const commissions = Math.round(totalRevenue * 0.15);
    const expertCount = stats[1];
    const bookingCount = stats[2];

    const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    const formatNumber = (val: number) => new Intl.NumberFormat('en-US').format(val);

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Admin Panel</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                    <h3 style={{ color: '#aaa', fontSize: '0.9rem' }}>Total Revenue</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700 }}>{formatCurrency(totalRevenue)}</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                    <h3 style={{ color: '#aaa', fontSize: '0.9rem' }}>Commissions (15%)</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700 }}>{formatCurrency(commissions)}</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                    <h3 style={{ color: '#aaa', fontSize: '0.9rem' }}>Experts</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700 }}>{formatNumber(expertCount)}</p>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                    <h3 style={{ color: '#aaa', fontSize: '0.9rem' }}>Bookings</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 700 }}>{formatNumber(bookingCount)}</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href={`/${lang}/admin/experts`} className="primary-btn" style={{ textDecoration: 'none', padding: '1rem 2rem', background: 'var(--primary)', color: 'white', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', display: 'inline-block' }}>Manage Experts</Link>
                <Link href={`/${lang}/admin/tasks`} className="secondary-btn" style={{ textDecoration: 'none', padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', cursor: 'pointer', display: 'inline-block' }}>Manage Tasks</Link>
                <button className="secondary-btn" style={{ padding: '1rem 2rem', background: 'rgba(255,255,255,0.05)', color: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', cursor: 'pointer' }}>Content</button>
            </div>
        </div>
    );
}
