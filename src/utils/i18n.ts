export type Lang = 'en' | 'de' | 'es';

export const getLang = (input?: string): Lang => {
  const v = (input || '').toLowerCase();
  if (v.startsWith('en')) return 'en';
  if (v.startsWith('de')) return 'de';
  if (v.startsWith('es')) return 'es';
  // default locale configured in intlayer.config.ts is German
  return 'de';
};

// Generic translator: supports strings, numbers, booleans, arrays, and objects
export const tr = <T>(lang: Lang, messages: { en: T; de: T; es: T }): T => messages[lang];
