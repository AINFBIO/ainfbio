import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "AINFBIO Official Brand Website",
  description: "깨끗함과 과학의 균형, 바이오 스킨케어 브랜드 앙프바이오",

  verification: {
    google: "83LO4YgwJfPBMqrk8_EMM5LftvWLB8tPxb5JuctyWYU",
    other: {
      "naver-site-verification": "f0688316e44ed8bd41f16a85e8c9d45dc1262352",
    },
  },

  other: { "codex-preview": "development" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}

