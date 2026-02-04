import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar, User, Tag } from 'lucide-react';
import { getDictionary } from '@/dictionaries';
import styles from './page.module.css';
import { prisma } from '@/lib/prisma';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'he' | 'en');
  return {
    title: dict.blog.title,
    description: dict.blog.sub,
  };
}

export default async function BlogPage({
  params,
  searchParams
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { lang } = await params;
  const { category: categorySlug } = await searchParams;
  const isHe = lang === 'he';
  const dict = await getDictionary(lang as 'he' | 'en');

  // Fetch categories for the filter
  const categories = await prisma.category.findMany();

  // Build the query
  const where: any = { published: true };
  if (categorySlug) {
    where.category = { slug: categorySlug };
  }

  // Fetch posts
  const posts = await prisma.blogPost.findMany({
    where,
    orderBy: { publishedAt: 'desc' },
    include: { category: true }
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{dict.blog.title}</h1>
        <p className={styles.subtitle}>{dict.blog.sub}</p>
      </header>

      {/* Categories Filter */}
      <div className={styles.categories}>
        <Link
          href={`/${lang}/blog`}
          className={`${styles.categoryPill} ${!categorySlug ? styles.activePill : ''}`}
        >
          {isHe ? 'הכל' : 'All'}
        </Link>
        {categories.map(cat => (
          <Link
            key={cat.id}
            href={`/${lang}/blog?category=${cat.slug}`}
            className={`${styles.categoryPill} ${categorySlug === cat.slug ? styles.activePill : ''}`}
          >
            {isHe ? cat.name_he : cat.name_en}
          </Link>
        ))}
      </div>

      <div className={styles.grid}>
        {posts.length === 0 ? (
          <div className={styles.noPosts}>
            <p>{dict.blog.noPosts || (isHe ? 'לא נמצאו פוסטים.' : 'No posts found.')}</p>
          </div>
        ) : (
          posts.map((post) => {
            const title = isHe ? post.title_he : post.title_en;
            const excerpt = isHe ? post.excerpt_he : post.excerpt_en;
            const categoryName = isHe ? post.category.name_he : post.category.name_en;
            const date = new Date(post.publishedAt).toLocaleDateString(isHe ? 'he-IL' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.imageWrapper}>
                  {post.cover_image && (
                    <Image
                      src={post.cover_image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    />
                  )}
                </div>
                <div className={styles.postContent}>
                  <span className={styles.category}>{categoryName}</span>
                  <h2 className={styles.postTitle}>{title}</h2>
                  <p className={styles.excerpt}>{excerpt}</p>

                  <div className={styles.meta}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={14} /> {date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <User size={14} /> {post.author_name}
                      </span>
                    </div>
                    <Link href={`/${lang}/blog/${post.slug}`} className={styles.readMore}>
                      {dict.blog.readMore} <ChevronRight size={16} style={{ transform: isHe ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
