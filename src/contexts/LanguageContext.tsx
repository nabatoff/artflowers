import React, { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, translations } from '@/lib/i18n';

type TranslationType = typeof translations[Language];

const STORAGE_KEY = 'artflowers-lang';
const LANG_PROMPT_SESSION_KEY = 'artflowers-lang-prompt-seen';

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
  /** Попап выбора языка (старт сессии или кнопка в шапке) */
  languagePickerOpen: boolean;
  setLanguagePickerOpen: (open: boolean) => void;
  /** true — нельзя закрыть без выбора (первый показ за сессию) */
  languagePickerForceChoice: boolean;
  setLanguagePickerForceChoice: (value: boolean) => void;
  openLanguagePicker: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() =>
    typeof window !== 'undefined' ? readStoredLang() : 'ru'
  );

  const [languagePickerOpen, setLanguagePickerOpen] = useState(false);
  const [languagePickerForceChoice, setLanguagePickerForceChoice] = useState(false);

  useEffect(() => {
    const htmlLang: Record<Language, string> = { ru: 'ru', en: 'en', kz: 'kk' };
    document.documentElement.lang = htmlLang[language];
  }, [language]);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(LANG_PROMPT_SESSION_KEY)) {
        setLanguagePickerForceChoice(true);
        setLanguagePickerOpen(true);
      }
    } catch {
      setLanguagePickerForceChoice(true);
      setLanguagePickerOpen(true);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, []);

  const openLanguagePicker = useCallback(() => {
    setLanguagePickerForceChoice(false);
    setLanguagePickerOpen(true);
  }, []);

  const t = translations[language] as TranslationType;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languagePickerOpen,
        setLanguagePickerOpen,
        languagePickerForceChoice,
        setLanguagePickerForceChoice,
        openLanguagePicker,
      }}
    >
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
