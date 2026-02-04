
import { Brain, Rocket, Shield, Zap } from 'lucide-react';
import styles from './Features.module.css';
import { getDictionary } from '@/dictionaries';

export default async function Features({ lang }: { lang: 'he' | 'en' }) {
    const dict = await getDictionary(lang);

    // Mock features for now as they might not be in the dictionary
    const features = [
        {
            icon: <Brain size={32} />,
            title: lang === 'he' ? 'מומחיות AI מוכחת' : 'Proven AI Expertise',
            desc: lang === 'he' ? 'כל המומחים שלנו עברו סינון קפדני ואימות של הידע המקצועי שלהם.' : 'All our experts have undergone rigorous screening and verification of their professional knowledge.'
        },
        {
            icon: <Zap size={32} />,
            title: lang === 'he' ? 'הטמעה מהירה' : 'Fast Implementation',
            desc: lang === 'he' ? 'קבלו תוצאות עסקיות תוך שבועות, לא חודשים, עם הכלים הנכונים.' : 'Get business results in weeks, not months, with the right tools.'
        },
        {
            icon: <Shield size={32} />,
            title: lang === 'he' ? 'אבטחת מידע' : 'Data Security',
            desc: lang === 'he' ? 'ליווי מקצועי בבחירת כלים שעומדים בתקני האבטחה המחמירים ביותר.' : 'Professional guidance in choosing tools that meet the strictest security standards.'
        },
        {
            icon: <Rocket size={32} />,
            title: lang === 'he' ? 'סדנאות מעשיות' : 'Hands-on Workshops',
            desc: lang === 'he' ? 'הכשרת צוותים ליצירה ושימוש ב-AI ביומיום הארגוני.' : 'Training teams to create and use AI in their daily organizational routine.'
        }
    ];

    return (
        <section className={styles.features}>
            <div className="container">
                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {f.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
