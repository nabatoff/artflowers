import React, { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/i18n';

type TranslationType = typeof translations[Language];

const STORAGE_KEY = 'artflowers-lang';

function readStoredLang(): Language {
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s === 'en' || s === 'kz' || s === 'ru') return s;
  } catch {
    /* ignore */
  }
  return 'ru';
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() =>
    typeof window !== 'undefined' ? readStoredLang() : 'ru'
  );

  useEffect(() => {
    const htmlLang: Record<Language, string> = { ru: 'ru', en: 'en', kz: 'kk' };
    document.documentElement.lang = htmlLang[language];
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, []);

  const t = translations[language] as TranslationType;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
