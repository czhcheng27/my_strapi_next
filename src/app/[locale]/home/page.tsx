// Home 页
import { getDictionary } from "@/i18n/server";
import { Locale } from "@/i18n/settings";
import HomeHero from "./Hero";
import HomeAbout from "./About";
import Divider from "./Divider";
import HomeInvest from "./Invest";
import HomeFintech from "./Fintech";
import HomePortfolio from "./Portfolio";
import HomeCareer from "./Career";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="min-h-screen">
      <HomeHero />
      <HomeAbout t={dict.home.about} />
      <Divider />
      <HomeInvest />
      <HomeFintech />
      <HomePortfolio />
      <HomeCareer />
    </div>
  );
}
