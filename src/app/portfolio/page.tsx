import "@/styles/portfolio.scss";
import { useLanguage } from "@/context/LanguageContext";

function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <div className="aua-portfolio">
      <header className="aua-page-header">
        <h1>{t("portfolio.title")}</h1>
        <p>{t("portfolio.subtitle")}</p>
      </header>

      <div className="aua-portfolio__grid">
        <div className="aua-portfolio__item">
          <h3>{t("portfolio.case1.title")}</h3>
          <p>{t("portfolio.case1.text")}</p>
        </div>
        <div className="aua-portfolio__item">
          <h3>{t("portfolio.case2.title")}</h3>
          <p>{t("portfolio.case2.text")}</p>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return <PortfolioContent />;
}
