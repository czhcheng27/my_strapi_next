"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
import { IntlProvider } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/i18n/settings";

interface LanguageContextType {
  locale: string;
  switchLocale: (newLocale: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  switchLocale: () => {},
});

export function useLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  // 当前语言从 URL 中获取
  const locale =
    i18n.locales.find((l) => pathname.startsWith(`/${l}`)) ||
    i18n.defaultLocale;

  function switchLocale(newLocale: (typeof i18n.locales)[number]) {
    // 用新的 locale 替换 URL 中的语言部分
    const newPath = pathname.replace(/^\/(en|zh)/, `/${newLocale}`);
    router.push(newPath);
  }

  return { locale, switchLocale };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "en";
    setLocale(savedLocale);
    import(`./i18n/${savedLocale}.json`).then((mod) =>
      setMessages(mod.default)
    );
  }, []);

  const switchLocale = (newLocale: string) => {
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
    import(`./i18n/${newLocale}.json`).then((mod) => setMessages(mod.default));
  };

  if (!messages || Object.keys(messages).length === 0) return null;

  return (
    <LanguageContext.Provider value={{ locale, switchLocale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
}
