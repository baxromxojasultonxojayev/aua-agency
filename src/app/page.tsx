"use client";

import { useLanguage } from "@/context/LanguageContext";
import MainSection from "./MainSection";
import "./style.scss";
import MouseTrail from "@/components/MouseTrail";
import MouseCircle from "@/components/MouseTrail/MouseCircle";

export default function HomePage() {
  return (
    <div className="aua-home">
      <MouseTrail />
      <MainSection />
    </div>
  );
}
