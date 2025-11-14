"use client";

import { useLanguage } from "@/context/LanguageContext";
import MainSection from "./MainSection";
import "./style.scss";

export default function HomePage() {
  return (
    <div className="aua-home">
      <MainSection />
    </div>
  );
}
