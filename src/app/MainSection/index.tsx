// src/app/page.tsx
"use client";

import { useEffect, useRef } from "react";
import "./style.scss";
import MouseCircle from "@/components/MouseTrail/MouseCircle";

export default function MainSection() {
  const heroRef = useRef<HTMLElement | null>(null);

  // 🔎 Scroll bo'yicha background scale
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const rect = hero.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportH / 2;

      const dist = Math.abs(sectionCenter - viewportCenter);
      const maxDist = viewportH / 2;
      const clamped = Math.min(1, dist / maxDist);

      const minScale = 1.0;
      const maxScale = 1.4;

      const centerFactor = 1 - clamped;
      const scale = maxScale - (maxScale - minScale) * centerFactor;

      hero.style.setProperty("--hero-scale", scale.toFixed(3));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="aua-layout__main">
      <section ref={heroRef} className="aua-hero">
        {/* 🟡 Mouse circle faqat shu section ichida ishlaydi */}
        <MouseCircle containerRef={heroRef} />

        <div className="aua-hero__inner">
          <p className="aua-hero__eyebrow">What others say about us</p>
          <h1 className="aua-hero__title">
            We make <br />
            Websites that <br />
            <span>Build trust.</span>
          </h1>
          <p className="aua-hero__text">
            Try an award winning design studio, specialized in web design and
            development, brand strategy, content marketing and more, to find and
            engage customers and drive revenue across all your channels.
          </p>
        </div>
      </section>
    </main>
  );
}
