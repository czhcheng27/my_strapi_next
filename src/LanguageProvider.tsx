"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { IntlProvider } from "next-intl";

interface LanguageContextType {
  locale: string;
  switchLocale: (newLocale: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  switchLocale: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
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
