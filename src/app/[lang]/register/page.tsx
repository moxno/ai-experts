import Link from 'next/link';
import { getDictionary } from '@/dictionaries';
import styles from '../login/page.module.css';
import GoogleButton from '@/components/GoogleButton';
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RegisterPage(props: { params: Promise<{ lang: string }> }) {
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
                <h1 className={styles.title}>{dict.auth.joinPlatform}</h1>
                <p className={styles.subtitle}>
                    {dict.auth.registerSubtitle}
                </p>

                <GoogleButton label={dict.auth.googleRegister} />

                <div className={styles.divider}>
                    <span>{isHe ? 'או' : 'OR'}</span>
                </div>

                <div className={styles.footer}>
                    {dict.auth.hasAccount}
                    <Link href={`/${lang}/login`} className={styles.link}>
                        {dict.auth.loginNow}
                    </Link>
                </div>
            </div>
        </div>
    );
}
