// 服务器端翻译工具函数
import "server-only";
import { Locale } from "./settings";

// 动态加载 JSON
export async function getDictionary(locale: Locale) {
  try {
    const dict = (await import(`./${locale}.json`)).default;
    return dict;
  } catch {
    // fallback
    return (await import(`./en.json`)).default;
  }
}
