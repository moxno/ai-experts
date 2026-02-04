import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { getDictionary } from '@/dictionaries';
import TaskApprovalList from '@/components/admin/TaskApprovalList';

export const dynamic = 'force-dynamic';

export default async function AdminTasksPage({
    params
}: {
    params: Promise<{ lang: 'he' | 'en' }>
}) {
    const { lang } = await params;
    const session = await auth();

    // Check if user is admin
    if (!session || session.user?.role !== 'ADMIN') {
        redirect(`/${lang}/login`);
    }

    const dict = await getDictionary(lang);

    // Fetch pending tasks
    const pendingTasks = await prisma.task.findMany({
        where: { approved: false },
        include: { specializations: true },
        orderBy: { created_at: 'desc' }
    });

    // Fetch recently approved tasks
    const approvedTasks = await prisma.task.findMany({
        where: { approved: true },
        include: { specializations: true },
        orderBy: { updated_at: 'desc' },
        take: 10
    });

    return (
        <main className="min-h-screen py-20 px-4">
            <div className="container max-w-7xl mx-auto">
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>
                        {lang === 'he' ? 'ניהול משימות' : 'Task Management'}
                    </h1>
                    <p style={{ color: '#aaa', fontSize: '1.1rem' }}>
                        {lang === 'he' ? 'אשר או דחה משימות חדשות' : 'Approve or reject new tasks'}
                    </p>
                </div>

                <TaskApprovalList
                    pendingTasks={pendingTasks}
                    approvedTasks={approvedTasks}
                    lang={lang}
                />
            </div>
        </main>
    );
}
