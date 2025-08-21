import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const HomePortfolio = () => {
  return (
    <div className={`relative h-70 sm:h-100 lg:h-151 ${styles.portfolio}`}>
      {/* Quote text - 添加 sm 和更小屏幕的响应式 */}
      <div className="absolute top-8 sm:top-16 md:top-28 3xl:top-28 -right-10 sm:right-6 md:right-8 lg:right-20 xl:right-32 2xl:right-47 3xl:right-47 max-w-72 sm:max-w-80 md:max-w-90 lg:max-w-108 xl:max-w-156 2xl:max-w-204 3xl:max-w-264 italic text-xl sm:text-3xl md:text-[28px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] 3xl:text-5xl">
        OTT is poised to seize future opportunities across fintech, payments,
        and real estate.
      </div>

      {/* Avatar image - 添加 sm 和更小屏幕的响应式 */}
      <Image
        src="/images/backgrounds/duncan.png"
        alt="avartar"
        width={630}
        height={530}
        className="absolute bottom-0 -left-4 sm:left-6 md:left-8 lg:left-20 xl:left-32 2xl:left-45 3xl:left-45 w-64 h-56 sm:w-80 sm:h-72 md:w-[380px] md:h-[330px] lg:w-[440px] lg:h-[380px] xl:w-[500px] xl:h-[420px] 2xl:w-[630px] 2xl:h-[530px] 3xl:w-[630px] 3xl:h-[530px]"
      />

      {/* Bio text - 添加 sm 和更小屏幕的响应式 */}
      <div className="absolute right-4 sm:right-6 md:right-8 lg:right-20 xl:right-32 2xl:right-51 3xl:right-51 bottom-8 sm:bottom-12 md:bottom-18 3xl:bottom-18 text-end">
        <div className="text-lg sm:text-xl md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-2xl font-normal mb-2">
          Dwight Duncan
        </div>
        <div className="text-[12px] sm:text-base md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-lg font-[300px]">
          Advisor and Director, OTT Financial Group
        </div>
        <div className="text-[12px] sm:text-base md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-lg font-[300px]">
          Former Deputy Premier of Ontario
        </div>
        <div className="text-[12px] sm:text-base md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-lg font-[300px]">
          Former Minister of Finance of Ontario
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
