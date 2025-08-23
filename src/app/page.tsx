// src/app/page.tsx
import { redirect } from "next/navigation";
import { i18n } from "@/i18n/settings";

export default function RootPage() {
  // 自动跳到默认语言
  redirect(`/${i18n.defaultLocale}`);
}
