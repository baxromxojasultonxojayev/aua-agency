"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { uzDictionary } from "@/i18n/dictionaries/uz";
import { ruDictionary } from "@/i18n/dictionaries/ru";

export type Locale = "uz" | "ru";

type Dictionaries = Record<Locale, Record<string, string>>;

const DICTS: Dictionaries = {
  uz: uzDictionary,
  ru: ruDictionary,
};

type LangContextValue = {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LangContextValue | undefined>(undefined);

const STORAGE_KEY = "aua_lang";

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("uz");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "uz" || stored === "ru") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (loc: Locale) => {
    setLocaleState(loc);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, loc);
    }
  };

  const t = (key: string) => {
    const dict = DICTS[locale] || {};
    return dict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
