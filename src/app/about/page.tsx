import "@/styles/about.scss";
import { useLanguage } from "@/context/LanguageContext";

function AboutContent() {
  const { t } = useLanguage();

  return (
    <div className="aua-about">
      <header className="aua-page-header">
        <h1>{t("about.title")}</h1>
        <p>{t("about.subtitle")}</p>
      </header>

      <div className="aua-about__content">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return <AboutContent />;
}
