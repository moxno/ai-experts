'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { ChevronDown, User, LayoutDashboard, Shield, LogOut } from 'lucide-react';
import styles from './Header.module.css';

interface UserDropdownProps {
    lang: 'he' | 'en';
    dict: any;
    session: any;
}

export default function UserDropdown({ lang, dict, session }: UserDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleLogout = async () => {
        await signOut({ callbackUrl: `/${lang}` });
    };

    return (
        <div className={styles.userDropdownContainer} ref={dropdownRef}>
            <button
                className={styles.userProfile}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {session.user.image && (
                    <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        width={32}
                        height={32}
                        className={styles.avatar}
                    />
                )}
                <span className={styles.userName}>{session.user.name}</span>
                <ChevronDown
                    size={16}
                    style={{
                        transition: 'transform 0.2s',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                />
            </button>

            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <Link
                        href={`/${lang}/dashboard/profile`}
                        className={styles.dropdownItem}
                        onClick={() => setIsOpen(false)}
                    >
                        <User size={18} />
                        <span>{dict.common.profile}</span>
                    </Link>

                    <Link
                        href={`/${lang}/dashboard`}
                        className={styles.dropdownItem}
                        onClick={() => setIsOpen(false)}
                    >
                        <LayoutDashboard size={18} />
                        <span>{dict.common.dashboard}</span>
                    </Link>

                    {session.user.role === 'ADMIN' && (
                        <Link
                            href={`/${lang}/admin/tasks`}
                            className={styles.dropdownItem}
                            onClick={() => setIsOpen(false)}
                        >
                            <Shield size={18} />
                            <span>{lang === 'he' ? 'פאנל אדמין' : 'Admin Panel'}</span>
                        </Link>
                    )}

                    <div className={styles.dropdownDivider} />

                    <button
                        className={styles.dropdownItem}
                        onClick={handleLogout}
                    >
                        <LogOut size={18} />
                        <span>{dict.common.logOut}</span>
                    </button>
                </div>
            )}
        </div>
    );
}
