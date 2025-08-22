import React from "react";
import HomeHero from "./Hero";
import HomeAbout from "./About";
import Divider from "./Divider";
import HomeInvest from "./Invest";
import HomeFintech from "./Fintech";
import HomePortfolio from "./Portfolio";
import HomeCareer from "./Career";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HomeHero />
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
