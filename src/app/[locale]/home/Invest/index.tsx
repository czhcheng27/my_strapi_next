import React from "react";
import Image from "next/image";
import ExploreMore from "@/components/ExploreMore";
import styles from "./index.module.scss";

const HomeInvest = ({ t }: any) => {
  // 从国际化数据构建选项数组
  const options = [
    {
      title: t.card1.title,
      description: t.card1.description,
      img: "/images/backgrounds/bg1.jpg",
      link: "/news",
      gotoTxt: t.card1.gotoTxt,
    },
    {
      title: t.card2.title,
      description: t.card2.description,
      img: "/images/backgrounds/bg2.jpg",
      link: "/news",
      gotoTxt: t.card2.gotoTxt,
    },
    {
      title: t.card3.title,
      description: t.card3.description,
      img: "/images/backgrounds/bg3.jpg",
      link: "/news",
      gotoTxt: t.card3.gotoTxt,
    },
  ];
  return (
    <section className="py-12 lg:py-20">
      {/* Container with responsive padding matching Fintech */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0">
        {/* Header section */}
        <div className="mb-12 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            {t.title}
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-light mb-4">
            {t.subtitle}
          </h2>
          <p className="max-w-2xl lg:text-lg font-light leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Investment options grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {options.map((el, index) => {
            return (
              <div
                key={index}
                className="rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
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
                    <ExploreMore link={el.link} title={el.gotoTxt} />
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
