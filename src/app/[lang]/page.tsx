import { prisma } from '@/lib/prisma';
import Hero from '@/components/Hero';
import RecentArticles from '@/components/RecentArticles';
import ExpertCard from '@/components/ExpertCard';
import { getDictionary } from '@/dictionaries';
import styles from './home.module.css';
import { Search, ArrowRight, Star, CreditCard, MessageSquare, Briefcase, Code, Brain, Zap, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { generateOrganizationSchema } from '@/lib/structured-data';

export const dynamic = 'force-dynamic';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'he' | 'en');
  const t = dict.home;

  const experts = await prisma.expert.findMany({
    where: { active: true },
    take: 6,
    orderBy: { average_rating: 'desc' },
    include: { specializations_list: true, offerings: true }
  });

  const latestTasks = await prisma.task.findMany({
    where: {
      status: 'open',
      approved: true  // Only show approved tasks
    },
    take: 3,
    orderBy: { created_at: 'desc' },
    include: { specializations: true }
  });

  const popularTopics = [
    { name: "Generative AI", slug: "generative-ai" },
    { name: "AI Strategy", slug: "ai-strategy" },
    { name: "Automation", slug: "ai-automation" },
    { name: "NLP", slug: "nlp" },
    { name: "Computer Vision", slug: "computer-vision" },
    { name: "MLOps", slug: "mlops" }
  ];

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema(lang as 'he' | 'en')) }}
      />
      <Hero lang={lang as 'he' | 'en'} dict={dict} />

      {/* Sticky Search Bar area */}
      <div className={styles.searchWrapper}>
        <div className="container">
          <form action={`/${lang}/experts`} method="GET" className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} aria-hidden="true" />
            <input
              name="q"
              type="text"
              placeholder={t.searchPlaceholder}
              aria-label={t.searchPlaceholder}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchBtn} aria-label={t.searchBtn}>{t.searchBtn}</button>
          </form>

          <div className={styles.popularTopics}>
            <span style={{ fontSize: '0.9rem', color: '#888', alignSelf: 'center' }}>{t.popularTopics}</span>
            {popularTopics.map(topic => (
              <Link key={topic.slug} href={`/${lang}/topic/${topic.slug}`} className={styles.topicTag}>
                {topic.name}
              </Link>
            ))}
          </div>
        </div>
      </div>


      {/* Services Section */}
      <section className={styles.section} style={{ marginTop: '3rem' }}>
        <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>{t.services?.title || 'Services'}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {(t.services?.items || []).map((service: any, idx: number) => {
            const icons = [Code, Brain, Zap, GraduationCap];
            const Icon = icons[idx] || Briefcase;
            return (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ color: '#10b981', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', fontFamily: 'var(--font-outfit)' }}>{service.title}</h3>
                <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.6' }}>{service.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Featured Experts */}
      <section className={styles.section}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2.5rem' }}>
          <div>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '0.5rem', textAlign: 'right' }}>{t.featuredExperts}</h2>
            <p style={{ color: '#888' }}>{t.featuredSub}</p>
          </div>
          <Link href={`/${lang}/experts`} style={{ color: '#6366f1', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {t.viewAllExperts} <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.expertGrid}>
          {experts.map(expert => (
            <ExpertCard key={expert.id} expert={expert} lang={lang} dict={dict.experts} />
          ))}
        </div>
      </section>

      {/* Latest Tasks Section */}
      <section className={styles.section} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '2rem', padding: '4rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2.5rem' }}>
          <div>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '0.5rem' }}>{lang === 'he' ? 'משימות אחרונות בזירה' : 'Latest Tasks in Marketplace'}</h2>
            <p style={{ color: '#888' }}>{lang === 'he' ? 'גלו פרויקטים חדשים שנוספו עכשיו' : 'Discover new projects added just now'}</p>
          </div>
          <Link href={`/${lang}/tasks`} style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            {lang === 'he' ? 'צפה בכל המשימות' : 'View All Tasks'} <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.taskGrid}>
          {latestTasks.map(task => (
            <Link key={task.id} href={`/${lang}/tasks/${task.slug}`} className="glass-panel" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none', transition: 'transform 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {task.specializations[0] ? (lang === 'he' ? task.specializations[0].name_he : task.specializations[0].name_en) : 'AI'}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#666' }}>
                  {(() => {
                    try {
                      return new Date(task.created_at).toLocaleDateString(lang);
                    } catch (e) {
                      return new Date(task.created_at).toLocaleDateString('en');
                    }
                  })()}
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.75rem' }}>{task.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#888', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{task.description}</p>
              {/* <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.95rem' }}>{task.budget_range}</div> */}
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className={`${styles.section} ${styles.howItWorks}`} style={{ maxWidth: '100%' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{t.howSteps.title}</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><Search /></div>
              <h3 className={styles.stepTitle}>{t.howSteps.step1}</h3>
              <p className={styles.stepDesc}>{t.howSteps.step1desc}</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><MessageSquare /></div>
              <h3 className={styles.stepTitle}>{t.howSteps.step2}</h3>
              <p className={styles.stepDesc}>{t.howSteps.step2desc}</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><CreditCard /></div>
              <h3 className={styles.stepTitle}>{t.howSteps.step3}</h3>
              <p className={styles.stepDesc}>{t.howSteps.step3desc}</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepIcon}><Star /></div>
              <h3 className={styles.stepTitle}>{t.howSteps.step4}</h3>
              <p className={styles.stepDesc}>{t.howSteps.step4desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.section}>
        <div className={styles.socialProof}>
          <h2 className={styles.sectionTitle} style={{ fontSize: '1.8rem' }}>{t.socialProof.title}</h2>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>"{t.socialProof.quote}"</p>
            <div className={styles.quoteAuthor}>{t.socialProof.author}</div>
            {/* <div className={styles.quoteRole}>VP R&D</div> */}
          </div>
        </div>
      </section>

      {/* CTA for Experts */}
      <section className="container">
        <div className={styles.ctaSection}>
          <div style={{ marginBottom: '2rem' }}>
            <Briefcase size={40} color="#a5b4fc" />
          </div>
          <h2 className={styles.ctaTitle}>{t.ctaExpert.title}</h2>
          <p className={styles.ctaSub}>{t.ctaExpert.sub}</p>
          <Link href={`/${lang}/become-an-expert`} className={styles.ctaBtn}>
            {t.ctaExpert.btn}
          </Link>
        </div>
      </section>

      <RecentArticles lang={lang as 'he' | 'en'} />
    </div>
  );
}
