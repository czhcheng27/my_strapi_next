import { redirect } from "next/navigation";
import { i18n } from "@/i18n/settings";

export default function IndexPage() {
  // 默认跳转到 /en
  redirect(`/${i18n.defaultLocale}/home`);
}
