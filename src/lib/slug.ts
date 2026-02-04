/**
 * Utility for generating URL-safe slugs.
 * Especially handles Hebrew transliteration to ensure ASCII-safe URLs.
 */

const hebrewMap: { [key: string]: string } = {
    'א': 'a', 'ב': 'b', 'ג': 'g', 'ד': 'd', 'ה': 'h', 'ו': 'v', 'ז': 'z', 'ח': 'ch',
    'ט': 't', 'י': 'y', 'כ': 'k', 'ך': 'k', 'ל': 'l', 'מ': 'm', 'ם': 'm', 'נ': 'n',
    'ן': 'n', 'ס': 's', 'ע': 'a', 'פ': 'p', 'ף': 'p', 'צ': 'ts', 'ץ': 'ts', 'ק': 'k',
    'ר': 'r', 'ש': 'sh', 'ת': 't'
};

export function slugify(text: string, addSuffix: boolean = true): string {
    if (!text) return '';

    // Convert to lowercase
    let result = text.toLowerCase();

    // Transliterate Hebrew
    result = result.split('').map(char => hebrewMap[char] || char).join('');

    // Remove anything that isn't a-z, 0-9, or whitespace/dash
    result = result.replace(/[^a-z0-9\s-]/g, '');

    // Replace spaces and underscores with dashes
    result = result.replace(/[\s_]+/g, '-');

    // Remove duplicate dashes
    result = result.replace(/-+/g, '-');

    // Trim dashes from ends
    result = result.replace(/^-+|-+$/g, '');

    if (addSuffix) {
        // Add unique suffix
        const suffix = Math.random().toString(36).substring(2, 7);
        return `${result}-${suffix}`;
    }

    return result;
}
