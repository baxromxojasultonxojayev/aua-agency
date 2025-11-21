"use client";

import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // AOS faqat browserda, clientda yuklanadi
    (async () => {
      const AOS = (await import("aos")).default;

      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: false,
        mirror: true,
        offset: 100,
      });
    })();
  }, []);

  return (
    <div className="aua-layout">
      <Header />
      <main className="aua-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
