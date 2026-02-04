
import Link from 'next/link';
import styles from './Header.module.css';
import { getDictionary } from '@/dictionaries';
import { auth } from "@/auth";
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import UserDropdown from './UserDropdown';
import { LogIn } from 'lucide-react';


export default async function Header({ lang }: { lang: 'he' | 'en' }) {
    const dict = await getDictionary(lang);
    const session = await auth();

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <Link href={`/${lang}`} className={styles.logo}>
                    AI Experts
                </Link>

                <nav className={`${styles.nav} ${styles.desktopOnly}`}>
                    <Link href={`/${lang}/experts`} className={styles.navLink} prefetch={true}>
                        {dict.common.findExpert}
                    </Link>
                    <Link href={`/${lang}/tasks`} className={styles.navLink} prefetch={true}>
                        {dict.tasks.browseTasks}
                    </Link>
                    <Link href={`/${lang}/blog`} className={styles.navLink} prefetch={true}>
                        {dict.common.resources}
                    </Link>
                    <Link href={`/${lang}/dashboard`} className={styles.navLink} prefetch={true}>
                        {dict.common.forExperts}
                    </Link>
                </nav>

                <div className={styles.actions}>
                    <LanguageSwitcher lang={lang} />
                    <MobileMenu lang={lang} dict={dict} session={session} />

                    {session?.user ? (
                        <div className={`${styles.nav} ${styles.desktopOnly}`}>
                            {session.user.role === 'ADMIN' && (
                                <Link href={`/${lang}/admin/tasks`} className={styles.adminLink}>
                                    {lang === 'he' ? 'ניהול משימות' : 'Manage Tasks'}
                                </Link>
                            )}
                            <Link href={`/${lang}/tasks/new`} className={styles.ctaPrimary}>
                                {dict.tasks.postTaskBtn}
                            </Link>
                            <UserDropdown lang={lang} dict={dict} session={session} />
                        </div>
                    ) : (
                        <div className={`${styles.actionsRight} ${styles.desktopOnly}`}>
                            <Link href={`/${lang}/login`} className={styles.loginIconLink} title={dict.common.logIn}>
                                <LogIn size={18} />
                                <span>{dict.common.logIn}</span>
                            </Link>
                            <Link href={`/${lang}/expert/signup`} className={styles.ctaSecondary}>
                                {dict.common.registerAsExpert}
                            </Link>
                            <Link href={`/${lang}/tasks/new`} className={styles.ctaPrimary}>
                                {dict.tasks.postTaskBtn}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
