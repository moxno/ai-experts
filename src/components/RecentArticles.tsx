
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';
import { getDictionary } from '@/dictionaries';
import { prisma } from '@/lib/prisma';
import styles from './RecentArticles.module.css';

export default async function RecentArticles({ lang }: { lang: 'he' | 'en' }) {
    const dict = await getDictionary(lang);
    const isHe = lang === 'he';

    const posts = await prisma.blogPost.findMany({
        where: { published: true },
        orderBy: { publishedAt: 'desc' },
        take: 3,
        include: { category: true }
    });

    if (posts.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{dict.blog.title.split('-')[0].trim()}</h2>
                    <Link href={`/${lang}/blog`} className={styles.viewAll}>
                        {dict.blog.readMore} <ChevronRight size={16} style={{ transform: isHe ? 'rotate(180deg)' : 'none' }} />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {posts.map((post) => {
                        const title = isHe ? post.title_he : post.title_en;
                        const excerpt = isHe ? post.excerpt_he : post.excerpt_en;
                        const categoryName = isHe ? post.category.name_he : post.category.name_en;
                        const date = new Date(post.publishedAt).toLocaleDateString(isHe ? 'he-IL' : 'en-US', {
                            year: 'numeric', month: 'long', day: 'numeric'
                        });

                        return (
                            <Link key={post.id} href={`/${lang}/blog/${post.slug}`} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    {post.cover_image && (
                                        <Image
                                            src={post.cover_image}
                                            alt={title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 400px"
                                        />
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <span className={styles.category}>{categoryName}</span>
                                    <h3 className={styles.cardTitle}>{title}</h3>
                                    <p className={styles.excerpt}>{excerpt}</p>
                                    <div className={styles.meta}>
                                        <Calendar size={14} /> {date}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
