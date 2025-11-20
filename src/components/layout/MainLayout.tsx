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
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: false,
      mirror: true,
      offset: 100,
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
