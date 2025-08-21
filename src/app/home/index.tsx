import React from "react";
import { getHeroBanners } from "@/lib/strapi";
import HeroBannerComponent from "@/components/HeroBanner";
import HomeAbout from "./About";
import HomeInvest from "./Invest";
import HomeCareer from "./Career";
import Divider from "./Divider";
import HomePortfolio from "./Portfolio";
import HomeFintech from "./Fintech";

const HomePage = async () => {
  const heroBanners = await getHeroBanners();
  return (
    <div className="min-h-screen">
      {/* Hero Section - 动态轮播图 */}
      <HeroBannerComponent banners={heroBanners} />
      <HomeAbout />
      <Divider />
      <HomeInvest />
      <HomeFintech />
      <HomePortfolio />
      <HomeCareer />
    </div>
  );
};

export default HomePage;
