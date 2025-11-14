import type { Metadata } from "next";
import "@/styles/globals.scss";
import MainLayout from "@/components/layout/MainLayout";
import LanguageProvider from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "AUA Agency — Kreativ reklama va marketing",
  description:
    "AUA reklam agentligi — kreativ reklama, SMM va brending xizmatlari.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>
        <LanguageProvider>
          <MainLayout>{children}</MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
