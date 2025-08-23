import createMiddleware from "next-intl/middleware";
import { i18n } from "./src/i18n/settings";

export default createMiddleware({
  // A list of all locales that are supported
  locales: i18n.locales,

  // Used when no locale matches
  defaultLocale: i18n.defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(zh|en)/:path*"],
};
