
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | AI Experts',
    description: 'Terms of Service for AI Experts platform',
};

export default async function TermsPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);
    const isRtl = lang === 'he';

    return (
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>
            <header className={styles.header}>
                <h1 className={styles.title}>{dict.termsPage.title}</h1>
                <p className={styles.lastUpdated}>{dict.termsPage.lastUpdated}</p>
            </header>

            <main className={styles.content}>
                <p className={styles.intro}>{dict.termsPage.intro}</p>

                {dict.termsPage.sections.map((section: any, index: number) => (
                    <section key={index} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                        <p className={styles.sectionContent}>{section.content}</p>
                    </section>
                ))}
            </main>
        </div>
    );
}
