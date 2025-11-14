"use client";

import Link from "next/link";
import "./layout.scss";
import { useState } from "react";

const nav = [
  { href: "#solutions", label: "Solutions +" },
  { href: "#work", label: "Work" },
  { href: "#culture", label: "Culture" },
  { href: "#insights", label: "Insights" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((v) => !v);
  const handleItemClick = () => setOpen(false);

  return (
    <header className="aua-header">
      <div className="aua-header__inner">
        <div className="aua-header__pill">
          <Link href="/" className="aua-header__logo">
            <span className="aua-header__logo-mark">A</span>
          </Link>
          <nav className="aua-header__nav">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="aua-header__nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="aua-header__cta" type="button">
            <span className="aua-header__cta-label">Start Project</span>
            <span className="aua-header__cta-circle">
              <span className="aua-header__cta-arrow">➜</span>
            </span>
          </button>
          <button
            type="button"
            className={
              "aua-header__burger" + (open ? " aua-header__burger--open" : "")
            }
            onClick={handleToggle}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="aua-header__mobile">
          <div className="aua-header__mobile-panel">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="aua-header__mobile-item"
                onClick={handleItemClick}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
