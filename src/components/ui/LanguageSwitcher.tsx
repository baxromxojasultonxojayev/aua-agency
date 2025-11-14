"use client";

import { useLanguage } from "@/context/LanguageContext";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="lang-switcher">
      <button
        type="button"
        className={
          "lang-switcher__btn" + (locale === "uz" ? " lang-switcher__btn--active" : "")
        }
        onClick={() => setLocale("uz")}
      >
        UZ
      </button>
      <button
        type="button"
        className={
          "lang-switcher__btn" + (locale === "ru" ? " lang-switcher__btn--active" : "")
        }
        onClick={() => setLocale("ru")}
      >
        RU
      </button>
    </div>
  );
}
