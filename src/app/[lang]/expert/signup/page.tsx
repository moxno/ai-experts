import OnboardingWizard from '@/components/onboarding/OnboardingWizard';
import { getDictionary } from '@/dictionaries';
import Link from 'next/link';

export default async function ExpertSignupPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as 'he' | 'en');

    return (
        <div style={{ minHeight: '100vh', background: '#000', paddingBottom: '4rem' }}>
            {/* Simple Header */}
            <div className="container" style={{ padding: '2rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href={`/${lang}`} style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', textDecoration: 'none' }}>
                    AI Experts
                </Link>
                <span style={{ color: '#666' }}>Expert Onboarding</span>
            </div>

            <OnboardingWizard lang={lang} />
        </div>
    );
}
