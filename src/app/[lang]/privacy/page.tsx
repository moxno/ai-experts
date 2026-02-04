
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | AI Experts',
    description: 'Privacy Policy for AI Experts platform',
};

export default async function PrivacyPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);
    const isRtl = lang === 'he';

    return (
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>
            <header className={styles.header}>
                <h1 className={styles.title}>{dict.privacyPage.title}</h1>
                <p className={styles.lastUpdated}>{dict.privacyPage.lastUpdated}</p>
            </header>

            <main className={styles.content}>
                <p className={styles.intro}>{dict.privacyPage.intro}</p>

                {dict.privacyPage.sections.map((section: any, index: number) => (
                    <section key={index} className={styles.section}>
                        <h2 className={styles.sectionTitle}>{section.title}</h2>
                        <p className={styles.sectionContent}>{section.content}</p>
                    </section>
                ))}
            </main>
        </div>
    );
}
