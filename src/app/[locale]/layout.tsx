// src/app/[locale]/layout.tsx
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Locale, i18n } from "@/i18n/settings";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale: paramLocale } = await params;
  const locale = i18n.locales.includes(paramLocale)
    ? paramLocale
    : i18n.defaultLocale;

  // 使用 next-intl 的 getMessages 并传递 locale 参数
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main className="pt-30 w-full max-w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
