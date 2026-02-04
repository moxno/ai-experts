
import { getDictionary } from "@/dictionaries";
import styles from "./page.module.css";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactFormClient from "./ContactFormClient";

export default async function ContactPage(props: {
    params: Promise<{ lang: string }>;
}) {
    const params = await props.params;
    const lang = params.lang as 'he' | 'en';
    const dict = await getDictionary(lang);
    const isRtl = lang === 'he';

    return (
        <div className={styles.container} dir={isRtl ? 'rtl' : 'ltr'}>
            <div className={styles.backgroundGlow} />

            <header className={styles.header}>
                <h1 className={styles.title}>{dict.contact.title}</h1>
                <p className={styles.subtitle}>{dict.contact.sub}</p>
            </header>

            <div className={styles.content}>
                <aside className={styles.infoSection}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}>
                            <Mail size={24} />
                        </div>
                        <div className={styles.infoContent}>
                            <span className={styles.infoLabel}>{dict.contact.info.email}</span>
                            <a href="mailto:info@ai-experts.co.il" className={styles.infoValue}>info@ai-experts.co.il</a>
                        </div>
                    </div>

                    {/* 
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}>
                            <Phone size={24} />
                        </div>
                        <div className={styles.infoContent}>
                            <span className={styles.infoLabel}>{dict.contact.info.phone}</span>
                            <span className={styles.infoValue}>+972 50-000-0000</span>
                        </div>
                    </div> 
                    */}

                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}>
                            <MapPin size={24} />
                        </div>
                        <div className={styles.infoContent}>
                            <span className={styles.infoLabel}>{dict.contact.info.office}</span>
                            <span className={styles.infoValue}>{lang === 'he' ? 'תל אביב, ישראל' : 'Tel Aviv, Israel'}</span>
                        </div>
                    </div>
                </aside>

                <main className={styles.formSection}>
                    <ContactFormClient dict={dict} />
                </main>
            </div>
        </div>
    );
}
