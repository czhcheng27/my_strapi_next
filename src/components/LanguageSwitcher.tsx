"use client";
import { useLanguage } from "../LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useLanguage();

  return (
    <div
      className="mt-[1px] hover:cursor-pointer"
      onClick={() => switchLocale(locale === "en" ? "zh" : "en")}
    >
      <div className="text-lg hover:text-[#BAB6B5] transition-all duration-1000 ease-in-out hover:drop-shadow-md">
        {locale === "en" ? "CN" : "EN"}
      </div>
    </div>
  );
}
