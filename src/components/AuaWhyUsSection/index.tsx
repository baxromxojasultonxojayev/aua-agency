"use client";

import { useState } from "react";
import "./style.scss";

type Feature = {
  id: string;
  title: string;
  content: string;
};

const FEATURES: Feature[] = [
  {
    id: "engagement",
    title: "Strategic Customer Engagement",
    content:
      "We design websites that guide your visitors with clear journeys, turning casual clicks into loyal customers.",
  },
  {
    id: "digital",
    title: "Comprehensive Digital Solutions",
    content:
      "From UX/UI to development and launch, we cover the full cycle so your brand looks and feels consistent everywhere.",
  },
  {
    id: "sme",
    title: "Tailored to SME Needs",
    content:
      "We understand SMEs – fast timelines, clear pricing, and designs that focus on real business results.",
  },
];

export default function AuaWhyUsSection() {
  // ✅ Default: tepada turadigan panel active
  const [activeKey, setActiveKey] = useState<"header" | string>("header");

  const isHeaderActive = activeKey === "header";

  const handleHeaderClick = () => {
    // Agar pastdagidan biriga o'tgan bo‘lsang, qaytib header’ni bosganda
    // active yana header’ga qaytsin
    if (!isHeaderActive) {
      setActiveKey("header");
    }
    // Agar allaqachon header active bo‘lsa, hech narsa qilmaymiz
    // (header aynan sendagi misolda ham doim active bo‘lib turadi)
  };

  const handleItemClick = (id: string) => {
    // Pastdagidan qaysi biri bosilsa, activeKey o‘sha bo‘ladi.
    // Avtomatik ravishda header yopiladi.
    if (activeKey !== id) {
      setActiveKey(id);
    }
    // Agar shu item allaqachon active bo‘lsa, hech narsa qilmaymiz
    // (doim bitta active – header yoki shu item)
  };

  return (
    <section className="aua-whyus">
      <div className="aua-whyus__inner">
        {/* LEFT CARD */}
        <article className="aua-whyus__card aua-whyus__card--left">
          <div className="aua-whyus__ribbon">WWW</div>

          <p className="aua-whyus__heading">Why US?</p>

          <p className="aua-whyus__subtitle">
            Select us for unparalleled web design that amplifies your brand and
            engages your audience.
          </p>

          <button type="button" className="aua-whyus__cta">
            <span>See our packages</span>
            <span className="aua-whyus__cta-icon">➜</span>
          </button>
        </article>

        {/* RIGHT CARD */}
        <article className="aua-whyus__card aua-whyus__card--right">
          {/* HEADER + TOGGLE */}
          <header className="aua-whyus__panel-header">
            <div className="aua-whyus__panel-main" onClick={handleHeaderClick}>
              {/* TITLE – DOIM KO‘RINADI */}
              <p className="aua-whyus__panel-label">
                Award-Winning Design Expertise
              </p>

              {/* DESCRIPTION – faqat header active bo‘lsa ochiq */}
              <div
                className={`aua-whyus__panel-body ${
                  isHeaderActive ? "is-open" : ""
                }`}
              >
                <p className="aua-whyus__panel-text">
                  Leverage our track record of excellence in web design,
                  recognized by over 20 industry awards. Our expertise means
                  your website will not only look professional but be crafted to
                  the highest standards, ensuring it stands out in your
                  industry.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="aua-whyus__panel-toggle"
              onClick={handleHeaderClick}
              aria-expanded={isHeaderActive}
            >
              {isHeaderActive ? "−" : "+"}
            </button>
          </header>

          {/* ACCORDION ITEMS */}
          <div className="aua-whyus__accordion">
            {FEATURES.map((item) => {
              const isActive = activeKey === item.id;

              return (
                <div
                  key={item.id}
                  className={`aua-whyus__accordion-item ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="aua-whyus__accordion-btn"
                    onClick={() => handleItemClick(item.id)}
                  >
                    <span>{item.title}</span>

                    <span className="aua-whyus__accordion-icon">
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <div className="aua-whyus__accordion-body">
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
