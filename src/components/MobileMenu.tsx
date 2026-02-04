
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Star, LayoutDashboard, Search, FileText, UserCircle, Briefcase } from 'lucide-react';
import styles from './Header.module.css';

interface MobileMenuProps {
    lang: 'he' | 'en';
    dict: any;
    session: any;
}

export default function MobileMenu({ lang, dict, session }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <div className={styles.mobileMenuWrapper}>
            <button
                className={styles.hamburger}
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <div className={styles.mobileOverlay}>
                    <div className={styles.mobileNavCard}>
                        {session?.user && (
                            <div className={styles.mobileUserHeader}>
                                {session.user.image ? (
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name || "User"}
                                        className={styles.mobileUserAvatar}
                                    />
                                ) : (
                                    <UserCircle size={40} color="#888" />
                                )}
                                <div>
                                    <div className={styles.mobileUserName}>{session.user.name}</div>
                                    <div className={styles.mobileUserEmail}>{session.user.email}</div>
                                </div>
                            </div>
                        )}

                        <nav className={styles.mobileLinks}>
                            <Link href={`/${lang}/experts`} className={styles.mobileLink} onClick={closeMenu}>
                                <Search size={20} />
                                {dict.common.findExpert}
                            </Link>
                            <Link href={`/${lang}/tasks`} className={styles.mobileLink} onClick={closeMenu}>
                                <Briefcase size={20} />
                                {dict.tasks.browseTasks}
                            </Link>
                            <Link href={`/${lang}/blog`} className={styles.mobileLink} onClick={closeMenu}>
                                <FileText size={20} />
                                {dict.common.resources}
                            </Link>
                            <Link href={`/${lang}/dashboard`} className={styles.mobileLink} onClick={closeMenu}>
                                <LayoutDashboard size={20} />
                                {dict.common.forExperts}
                            </Link>
                            {session?.user?.role === 'ADMIN' && (
                                <Link href={`/${lang}/admin/tasks`} className={styles.mobileLink} onClick={closeMenu}>
                                    <Star size={20} />
                                    {lang === 'he' ? 'ניהול משימות' : 'Manage Tasks'}
                                </Link>
                            )}
                        </nav>

                        <div className={styles.mobileActions}>
                            {!session?.user ? (
                                <>
                                    <Link
                                        href={`/${lang}/login`}
                                        className={styles.mobileLoginBtn}
                                        onClick={closeMenu}
                                        style={{ color: '#6366f1', fontSize: '0.9rem' }}
                                    >
                                        {dict.common.logIn}
                                    </Link>
                                    <Link
                                        href={`/${lang}/expert/signup`}
                                        className={styles.mobileLoginBtn}
                                        onClick={closeMenu}
                                    >
                                        {dict.common.registerAsExpert}
                                    </Link>
                                    <Link
                                        href={`/${lang}/tasks/new`}
                                        className={styles.mobileCta}
                                        onClick={closeMenu}
                                    >
                                        {dict.tasks.postTaskBtn}
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    href={`/${lang}/dashboard`}
                                    className={styles.mobileCta}
                                    onClick={closeMenu}
                                >
                                    {dict.common.dashboard}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}
