import { getRequestConfig } from "next-intl/server";
import { i18n, type Locale } from "./settings";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale = (
    i18n.locales.includes(locale as Locale) ? locale : i18n.defaultLocale
  ) as string;

  // Load the single translation file for the locale
  const messages = (await import(`./${validLocale}.json`)).default;

  return {
    locale: validLocale,
    messages,
  };
});
