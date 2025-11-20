"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800, // animatsiya davomiyligi
      easing: "ease-out", // silliq effekt
      once: false, // scroll qaytganida ham animatsiya bo‘lsin
      mirror: true, // section yuqoriga qaytganda ham chiqsin
      offset: 100, // qaysi masofada trigger bo‘lishi
    });
  }, []);

  return (
    <div className="aua-layout">
      <Header />

      <main className="aua-layout__main">{children}</main>

      <Footer />
    </div>
  );
}
