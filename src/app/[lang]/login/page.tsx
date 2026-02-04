import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import styles from './page.module.css';
import GoogleButton from '@/components/GoogleButton';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    const lang = params.lang;
    const isHe = lang === 'he';
    const dict = await getDictionary(lang as 'he' | 'en');

    // Check if valid session exists
    const session = await auth();
    if (session?.user) {
        redirect(`/${lang}/dashboard`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>{dict.auth.welcomeBack}</h1>
                <p className={styles.subtitle}>
                    {dict.auth.loginSubtitle}
                </p>

                <GoogleButton label={dict.auth.googleLogin} />

                <div className={styles.divider}>
                    <span>{isHe ? 'או' : 'OR'}</span>
                </div>

                <div className={styles.footer}>
                    {dict.auth.noAccount}
                    <Link href={`/${lang}/register`} className={styles.link}>
                        {dict.auth.registerNow}
                    </Link>
                </div>
            </div>
        </div>
    );
}
