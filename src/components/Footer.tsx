
import Link from 'next/link';
import styles from './Footer.module.css';
import { getDictionary } from '@/dictionaries';

export default async function Footer({ lang }: { lang: 'he' | 'en' }) {
    const dict = await getDictionary(lang);

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <h3>AI Experts</h3>
                    <p>{dict.footer.description}</p>
                </div>

                <div className={styles.column}>
                    <h4>{dict.footer.platform}</h4>
                    <ul>
                        <li><Link href={`/${lang}/experts`}>{dict.home.browseExperts}</Link></li>
                        <li><Link href={`/${lang}/how-it-works`}>{dict.footer.howItWorks}</Link></li>
                        <li><Link href={`/${lang}/pricing`}>{dict.footer.pricing}</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>{dict.footer.company}</h4>
                    <ul>
                        <li><Link href={`/${lang}/about`}>{dict.footer.aboutUs}</Link></li>
                        <li><Link href={`/${lang}/blog`}>{dict.common.resources}</Link></li>
                        <li><Link href={`/${lang}/contact`}>{dict.contact.title}</Link></li>
                        <li><Link href={`/${lang}/careers`}>{dict.footer.careers}</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>{dict.footer.legal}</h4>
                    <ul>
                        <li><Link href={`/${lang}/privacy`}>{dict.footer.privacyPolicy}</Link></li>
                        <li><Link href={`/${lang}/terms`}>{dict.footer.termsOfService}</Link></li>
                    </ul>
                </div>
            </div>



            <div className={styles.copyright}>
                © {new Date().getFullYear()} AI Experts IL. {dict.footer.rights}
            </div>
        </footer>
    );
}
