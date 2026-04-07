import en from './en.json';
import zh from './zh.json';

const messages = {
  en,
  zh
};

export const getLocale = () => {
  // Check local storage or default to English
  if (typeof window !== 'undefined') {
    return localStorage.getItem('lang') || 'en';
  }
  return 'en';
};

export const t = (key, lang) => {
  const locale = lang || getLocale();
  const keys = key.split('.');
  let value = messages[locale];
  for (const k of keys) {
    value = value[k];
    if (value === undefined) break;
  }
  return value || key;
};