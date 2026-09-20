"use client";

import * as React from "react";
import { dictionary, type DictionarySection, type Lang, type TranslationEntry } from "@/lib/i18n";

const STORAGE_KEY = "skillcert-ai:lang";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <S extends DictionarySection>(section: S, key: keyof (typeof dictionary)[S]) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("fr");

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // stockage indisponible : on garde la preference en memoire seulement
    }
    document.documentElement.lang = next;
  }, []);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "en") {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture unique d'une preference persistee (localStorage), impossible a connaitre avant le montage
        setLangState(stored);
        document.documentElement.lang = stored;
      }
    } catch {
      // ignore
    }
  }, []);

  const t = React.useCallback(
    <S extends DictionarySection>(section: S, key: keyof (typeof dictionary)[S]) => {
      const entry = dictionary[section][key] as unknown as TranslationEntry;
      return entry[lang];
    },
    [lang],
  );

  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage doit être utilisé sous LanguageProvider");
  return ctx;
}
