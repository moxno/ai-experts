
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface LanguageSwitcherProps {
    lang: 'he' | 'en';
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
    const pathname = usePathname();

    // Function to calculate the path in the other language
    const getTargetHref = () => {
        if (!pathname) return lang === 'he' ? '/en' : '/he';

        const segments = pathname.split('/');
        // Replacement: replace the first segment after the leading slash (the language code)
        if (segments[1] === 'he' || segments[1] === 'en') {
            segments[1] = lang === 'he' ? 'en' : 'he';
        } else {
            return lang === 'he' ? '/en' : '/he';
        }

        return segments.join('/') || '/';
    };

    const targetLang = lang === 'he' ? 'en' : 'he';
    const label = lang === 'he' ? 'Switch to English' : 'החלף לעברית';

    return (
        <Link
            href={getTargetHref()}
            className={styles.navLink}
            title={label}
            aria-label={label}
            style={{ display: 'flex', alignItems: 'center' }}
        >
            {targetLang === 'en' ? <FlagUSA /> : <FlagIL />}
        </Link>
    );
}

function FlagIL() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18" style={{ display: 'block', borderRadius: '2px' }}>
            <rect width="32" height="24" fill="white" />
            <rect y="3" width="32" height="4" fill="#005EB8" />
            <rect y="17" width="32" height="4" fill="#005EB8" />
            <g transform="translate(16, 12)">
                <g fill="none" stroke="#005EB8" strokeWidth="1.5">
                    <polygon points="0,-6 5.2,3 -5.2,3" />
                    <polygon points="0,6 5.2,-3 -5.2,-3" />
                </g>
            </g>
        </svg>
    );
}

function FlagUSA() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24" width="24" height="18" style={{ display: 'block', borderRadius: '2px' }}>
            <clipPath id="us-clip">
                <rect width="32" height="24" />
            </clipPath>
            <g clipPath="url(#us-clip)">
                <rect width="32" height="24" fill="white" />
                <path d="M0,0 h32 M0,4 h32 M0,8 h32 M0,12 h32 M0,16 h32 M0,20 h32 M0,24 h32" stroke="#B22234" strokeWidth="2" />
                <rect width="14" height="13" fill="#3C3B6E" />
                {/* Simplified stars pattern */}
                <g fill="white">
                    <circle cx="2" cy="2" r="0.8" /> <circle cx="5" cy="2" r="0.8" /> <circle cx="8" cy="2" r="0.8" /> <circle cx="11" cy="2" r="0.8" />
                    <circle cx="3.5" cy="4.5" r="0.8" /> <circle cx="6.5" cy="4.5" r="0.8" /> <circle cx="9.5" cy="4.5" r="0.8" />
                    <circle cx="2" cy="7" r="0.8" /> <circle cx="5" cy="7" r="0.8" /> <circle cx="8" cy="7" r="0.8" /> <circle cx="11" cy="7" r="0.8" />
                    <circle cx="3.5" cy="9.5" r="0.8" /> <circle cx="6.5" cy="9.5" r="0.8" /> <circle cx="9.5" cy="9.5" r="0.8" />
                </g>
            </g>
        </svg>
    );
}
