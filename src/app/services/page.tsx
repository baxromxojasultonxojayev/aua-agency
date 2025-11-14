import "@/styles/services.scss";
import { useLanguage } from "@/context/LanguageContext";

const services = (t: (k: string) => string) => [
  {
    title: t("services.smm.title"),
    items: [
      "SMM strategiya va kontent reja",
      "Instagram / TikTok / Telegram yuritish",
      "Vizual konsept va dizayn",
      "Komment va DM larni moderatsiya"
    ]
  },
  {
    title: t("services.performance.title"),
    items: [
      "Facebook / Instagram Ads",
      "Google Ads (Search, Display, YouTube)",
      "Retargeting va remarketing",
      "Analytics va optimizatsiya"
    ]
  },
  {
    title: t("services.branding.title"),
    items: [
      "Naming va pozitsionirovka",
      "Logo dizayn",
      "Brandbook va guideline",
      "Rebranding va refresh"
    ]
  }
];

function ServicesContent() {
  const { t } = useLanguage();
  const list = services(t);

  return (
    <div className="aua-services">
      <header className="aua-page-header">
        <h1>{t("services.title")}</h1>
        <p>{t("services.subtitle")}</p>
      </header>

      <div className="aua-services__grid">
        {list.map((block) => (
          <div key={block.title} className="aua-services__card">
            <h2>{block.title}</h2>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return <ServicesContent />;
}
