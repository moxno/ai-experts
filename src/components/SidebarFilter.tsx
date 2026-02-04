"use client";

import { useState, useTransition, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, Check } from 'lucide-react';
import styles from './SidebarFilter.module.css';

interface SidebarFilterProps {
    dict: any;
    specializations: any[];
    lang: string;
}

export default function SidebarFilter({ dict, specializations, lang }: SidebarFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [localSearch, setLocalSearch] = useState(searchParams.get('q') || '');

    useEffect(() => {
        const timer = setTimeout(() => {
            if (localSearch !== (searchParams.get('q') || '')) {
                updateFilter('q', localSearch);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [localSearch]);

    const [isOpen, setIsOpen] = useState(false);

    // Close on navigation
    useEffect(() => {
        setIsOpen(false);
    }, [searchParams]);

    // Handle body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    const updateFilter = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            if (key === 'q') params.set(key, value);
            else {
                const current = params.get(key);
                // Simple toggle for single select or replace
                if (current === value) params.delete(key);
                else params.set(key, value);
            }
        } else {
            params.delete(key);
        }

        startTransition(() => {
            router.push(`?${params.toString()}`, { scroll: false });
        });
    };

    const isSelected = (key: string, value: string) => {
        return searchParams.get(key) === value;
    };

    return (
        <>
            <button
                className={styles.mobileToggle}
                onClick={() => setIsOpen(true)}
                aria-label={dict.findExpert || "Open search and filters"}
            >
                <Search size={16} aria-hidden="true" />
                {dict.findExpert || "Filter & Search"}
            </button>

            {/* Backdrop */}
            {isOpen && (
                <div
                    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999 }}
                    onClick={() => setIsOpen(false)}
                    className="lg:hidden"
                />
            )}

            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.closeBtn} onClick={() => setIsOpen(false)}>✕</div>

                <div style={{ position: 'relative' }}>
                    <Search size={16} className={styles.searchIcon} aria-hidden="true" />
                    <input
                        type="text"
                        className={styles.searchBox}
                        placeholder={dict.searchPlaceholder}
                        aria-label={dict.searchPlaceholder || "Search experts"}
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                    />
                </div>

                <div className={styles.filterSection}>
                    <h3 className={styles.sectionTitle}>{dict.level}</h3>
                    {[
                        { id: 'Beginner', label: dict.beginner },
                        { id: 'Advanced', label: dict.advanced },
                        { id: 'Executive', label: dict.executive }
                    ].map(level => (
                        <div key={level.id} className={styles.filterOption} onClick={() => updateFilter('level', level.id)}>
                            <div className={`${styles.checkbox} ${isSelected('level', level.id) ? styles.checked : ''}`}>
                                {isSelected('level', level.id) && <Check size={12} color="#fff" />}
                            </div>
                            <span>{level.label}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.filterSection}>
                    <h3 className={styles.sectionTitle}>{dict.allFormats}</h3>
                    {[
                        { id: 'lecture', label: dict.lecture },
                        { id: 'workshop', label: dict.workshop },
                        { id: 'advisory', label: dict.advisory }
                    ].map(format => (
                        <div key={format.id} className={styles.filterOption} onClick={() => updateFilter('format', format.id)}>
                            <div className={`${styles.checkbox} ${isSelected('format', format.id) ? styles.checked : ''}`}>
                                {isSelected('format', format.id) && <Check size={12} color="#fff" />}
                            </div>
                            <span>{format.label}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.filterSection}>
                    <h3 className={styles.sectionTitle}>{dict.allSpecializations}</h3>
                    {specializations.map((spec: any) => (
                        <div key={spec.slug} className={styles.filterOption} onClick={() => updateFilter('specialization', spec.slug)}>
                            <div className={`${styles.checkbox} ${isSelected('specialization', spec.slug) ? styles.checked : ''}`}>
                                {isSelected('specialization', spec.slug) && <Check size={12} color="#fff" />}
                            </div>
                            <span>{lang === 'he' ? spec.name_he : spec.name_en}</span>
                        </div>
                    ))}
                </div>

                {isPending && <div style={{ opacity: 0.5, fontSize: '0.9rem' }}>{dict.updating}</div>}
            </aside>
        </>
    );
}
