"use client";

import { useLanguage } from "@/context/LanguageContext";
import MainSection from "./MainSection";
import "./style.scss";
import MouseTrail from "@/components/MouseTrail";
import MouseCircle from "@/components/MouseTrail/MouseCircle";
import AuaShowreelSection from "@/components/AuaShowreelSection";
import AuaHelpCards from "@/components/AuaHelpCards";
import AuaWhyUsSection from "@/components/AuaWhyUsSection";
import AuaAdvantagesNumbers from "@/components/AuaAdvantagesNumbers";
import AuaProjectsInclude from "@/components/AuaProjectsInclude";
import AuaTestimonials from "@/components/AuaTestimonials";

export default function HomePage() {
  return (
    <div className="aua-home">
      <MouseTrail />
      <MainSection />
      <AuaShowreelSection />
      <AuaHelpCards />
      <AuaWhyUsSection />
      <AuaAdvantagesNumbers />
      <AuaProjectsInclude />
      <AuaTestimonials />
    </div>
  );
}
