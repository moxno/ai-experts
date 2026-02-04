import 'server-only';

const dictionaries = {
    he: () => import('./dictionaries/he.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'he' | 'en') =>
    dictionaries[locale] ? dictionaries[locale]() : dictionaries['he']();
