// src/app/layout.tsx
// 根 layout 纯粹负责 HTML / body / global styles
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OTT Financial Group",
  description: "Leading provider of financial services in Canada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSans.variable}`}>
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
