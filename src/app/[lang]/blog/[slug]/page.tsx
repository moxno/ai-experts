import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { getDictionary } from '@/dictionaries';
import styles from './page.module.css';
import { prisma } from '@/lib/prisma';

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug }
  });

  if (!post) return { title: 'Post Not Found' };

  // Choose title based on lang
  const title = lang === 'he' ? post.title_he : post.title_en;
  return {
    title: title + " | AI-Experts.co.il",
    description: lang === 'he' ? post.excerpt_he : post.excerpt_en
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params;
  const isHe = lang === 'he';
  const dict = await getDictionary(lang as 'he' | 'en');

  const post = await prisma.blogPost.findUnique({
    where: { slug },
    include: {
      category: true,
      faqs: true
    }
  });

  if (!post || !post.published) notFound();

  const title = isHe ? post.title_he : post.title_en;
  const content = isHe ? post.content_he : post.content_en;
  const categoryName = isHe ? post.category.name_he : post.category.name_en;
  const date = new Date(post.publishedAt).toLocaleDateString(isHe ? 'he-IL' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Prepare JSON-LD (Structured Data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": post.cover_image,
    "author": {
      "@type": "Person",
      "name": post.author_name
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Experts Israel",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ai-experts.co.il/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updated_at
  };

  const faqJsonLd = post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": isHe ? faq.question_he : faq.question_en,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isHe ? faq.answer_he : faq.answer_en
      }
    }))
  } : null;

  return (
    <article className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Link href={"/" + lang + "/blog"} className={styles.backLink}>
        {isHe ? <ChevronRight size={18} /> : <ChevronLeft size={18} />} {dict.common.back}
      </Link>

      <header className={styles.header}>
        <span className={styles.category}>{categoryName}</span>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} /> {date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <User size={16} /> {post.author_name}
          </span>
        </div>
      </header>

      <div className={styles.imageWrapper}>
        {post.cover_image && (
          <Image
            src={post.cover_image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {post.faqs.length > 0 && (
        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>
            <HelpCircle size={24} /> {isHe ? 'שאלות ותשובות' : 'Frequently Asked Questions'}
          </h2>
          <div className={styles.faqList}>
            {post.faqs.map(faq => (
              <div key={faq.id} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{isHe ? faq.question_he : faq.question_en}</h3>
                <p className={styles.faqAnswer}>{isHe ? faq.answer_he : faq.answer_en}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
