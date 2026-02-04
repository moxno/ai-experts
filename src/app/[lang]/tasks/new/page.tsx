
import { getDictionary } from '@/dictionaries';
import { prisma } from '@/lib/prisma';
import PostTaskForm from '@/components/PostTaskForm';

export default async function NewTaskPage({
    params
}: {
    params: Promise<{ lang: 'he' | 'en' }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    // Fetch specializations for the dropdown
    const allSpecializations = await prisma.specialization.findMany({
        orderBy: { name_en: 'asc' }
    });

    return (
        <div className="min-h-screen py-20 px-4">
            <div className="container max-w-3xl mx-auto">
                <PostTaskForm
                    dict={dict}
                    allSpecializations={allSpecializations}
                    lang={lang}
                />
            </div>
        </div>
    );
}
