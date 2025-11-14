"use client";

import Header from "./Header";
import Footer from "./Footer";
import "./layout.scss";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="aua-layout">
      <Header />
      <main className="aua-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
