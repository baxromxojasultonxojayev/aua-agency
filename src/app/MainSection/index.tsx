// src/app/page.tsx
"use client";

import "./style.scss";

export default function MainSection() {
  return (
    <main className="aua-layout__main">
      <section className="aua-hero">
        <div className="aua-hero__inner">
          {/* bu yerga sening kontenting – title, text, badges va h.k. */}
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
