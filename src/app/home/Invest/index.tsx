import React from "react";
import Image from "next/image";
import ExploreMore from "@/components/ExploreMore";
import styles from "./index.module.scss";

const options = [
  {
    title: "Wealth Management",
    description:
      "Preserving and growing your wealth with insight and expertise.",
    img: "/images/backgrounds/bg1.jpg",
    link: "/news",
  },
  {
    title: "Real Estate",
    description:
      "Investment Opportunities in premium and strategic properties.",
    img: "/images/backgrounds/bg2.jpg",
    link: "/news",
  },
  {
    title: "Hospitality Investment",
    description: "Investing in exceptional clubs and lifestyle destinations",
    img: "/images/backgrounds/bg3.jpg",
    link: "/news",
  },
];

const HomeInvest = () => {
  return (
    <section className="py-12 lg:py-20 text-[#000]">
      {/* Container with responsive padding matching Fintech */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0">
        {/* Header section */}
        <div className="mb-12 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Investments
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-light mb-4 text-black">
            Smart strategies. Sustainable growth.
          </h2>
          <p className="max-w-2xl text-base lg:text-lg font-light text-black leading-relaxed">
            We manage and grow diverse assets with precision and care—building
            lasting value for clients and communities.
          </p>
        </div>

        {/* Investment options grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {options.map((el, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              >
                {/* Image with aspect ratio (does not grow) */}
                <div className="aspect-square relative flex-shrink-0">
                  <Image
                    src={el.img}
                    alt={el.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content section fills remaining height */}
                <div className="p-6 lg:p-8 bg-[#F8F7F5] flex-1 flex flex-col">
                  <h3 className="text-2xl lg:text-3xl font-light mb-3">
                    {el.title}
                  </h3>
                  <p className="text-lg lg:text-xl font-light mb-6 leading-relaxed">
                    {el.description}
                  </p>
                  <div className="mt-auto">
                    <ExploreMore link={el.link} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeInvest;
