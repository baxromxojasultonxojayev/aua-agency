"use client";

import { FormEvent, useState } from "react";
import "@/styles/contact.scss";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="aua-contact">
      <header className="aua-page-header">
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.subtitle")}</p>
      </header>

      <form className="aua-contact__form" onSubmit={handleSubmit}>
        <div className="aua-contact__grid">
          <label>
            {t("contact.name")}
            <input name="name" required placeholder={t("contact.name")} />
          </label>
          <label>
            {t("contact.phone")}
            <input name="phone" required placeholder="+998" />
          </label>
        </div>

        <label>
          {t("contact.company")}
          <input name="company" placeholder={t("contact.company")} />
        </label>

        <label>
          {t("contact.project")}
          <textarea
            name="project"
            rows={4}
            placeholder={t("contact.project")}
          />
        </label>

        <button type="submit" className="btn btn--primary">
          {t("contact.submit")}
        </button>

        {sent && <p className="aua-contact__success">{t("contact.success")}</p>}
      </form>
    </div>
  );
}
