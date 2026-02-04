
"use client";

import { Search } from 'lucide-react';
import styles from './SearchFilter.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition, useState, useEffect } from 'react';

interface SearchFilterProps {
    dict: {
        experts: {
            searchPlaceholder: string;
            allSpecializations: string;
            allFormats: string;
            level: string;
        }
    };
    specializations: {
        slug: string;
        name_he: string;
        name_en: string;
    }[];
    lang: string;
}

export default function SearchFilter({ dict, specializations, lang }: SearchFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

    // Debounced search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchTerm !== (searchParams.get('q') || '')) {
                updateFilters('q', searchTerm);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    const updateFilters = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        startTransition(() => {
            router.push(`?${params.toString()}`, { scroll: false });
        });
    };

    return (
        <div className={styles.wrapper}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.searchContainer}>
                    <Search className={styles.icon} size={20} />
                    <input
                        type="text"
                        placeholder={dict.experts.searchPlaceholder}
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className={styles.filterGroup}>
                    <select
                        className={styles.filterSelect}
                        value={searchParams.get('specialization') || ''}
                        onChange={(e) => updateFilters('specialization', e.target.value)}
                    >
                        <option value="">{dict.experts.allSpecializations}</option>
                        {specializations.map(spec => (
                            <option key={spec.slug} value={spec.slug}>
                                {lang === 'he' ? spec.name_he : spec.name_en}
                            </option>
                        ))}
                    </select>

                    <select
                        className={styles.filterSelect}
                        value={searchParams.get('format') || ''}
                        onChange={(e) => updateFilters('format', e.target.value)}
                    >
                        <option value="">{dict.experts.allFormats}</option>
                        <option value="lecture">Lecture</option>
                        <option value="workshop">Workshop</option>
                        <option value="consultation">Consultation</option>
                    </select>

                    <select
                        className={styles.filterSelect}
                        value={searchParams.get('level') || ''}
                        onChange={(e) => updateFilters('level', e.target.value)}
                    >
                        <option value="">{dict.experts.level}</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Executive">Executive</option>
                    </select>
                </div>
            </div>
            {isPending && (
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: 'var(--primary)', animation: 'pulse 1.5s infinite' }} />
            )}
        </div>
    );
}
