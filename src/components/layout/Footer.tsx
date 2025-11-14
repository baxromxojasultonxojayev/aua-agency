"use client";

import Link from "next/link";
import "./layout.scss";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="aua-footer">
      <div className="aua-footer__top">
        <div className="aua-footer__brand">
          <div className="aua-footer__logo">AUA</div>
          <p>{t("footer.text")}</p>
        </div>

        <div className="aua-footer__cols">
          <div>
            <h4>{t("footer.services")}</h4>
            <ul>
              <li>Digital marketing</li>
              <li>SMM</li>
              <li>Branding</li>
              <li>Production</li>
            </ul>
          </div>
          <div>
            <h4>{t("footer.contact")}</h4>
            <ul>
              <li>+998 90 000 00 00</li>
              <li>info@aua.agency</li>
              <li>Toshkent, Uzbekistan</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="aua-footer__bottom">
        <span>
          © {new Date().getFullYear()} AUA Agency. {t("footer.rights")}
        </span>
        <div className="aua-footer__social">
          <Link href="#">Instagram</Link>
          <Link href="#">Telegram</Link>
          <Link href="#">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}
