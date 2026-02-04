"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import styles from './FloatingActionButton.module.css';
import { usePathname } from 'next/navigation';

interface FloatingActionButtonProps {
    lang: 'he' | 'en';
    label: string;
}

export default function FloatingActionButton({ lang, label }: FloatingActionButtonProps) {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Hide FAB on the 'Post Project' page and 'Project Board' to avoid overlapping UI
    if (pathname && (pathname.includes('/tasks/new') || pathname.includes('/tasks'))) return null;

    return (
        <Link href={`/${lang}/tasks/new`} className={styles.fab} aria-label={label}>
            <Plus size={24} />
            <span className={styles.label}>{label}</span>
        </Link>
    );
}
