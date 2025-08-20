import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const HomePortfolio = () => {
  return (
    <div className={`relative h-151 ${styles.portfolio}`}>
      {/* Quote text - 使用标准 Tailwind 断点语法 */}
      <div className="absolute 3xl:top-28 top-28 3xl:right-47 2xl:right-47 xl:right-32 lg:right-20 md:right-8 3xl:max-w-264 2xl:max-w-204 xl:max-w-156 lg:max-w-108 md:max-w-90 italic 3xl:text-5xl text-[52px] xl:text-[44px] lg:text-[36px] md:text-[28px]">
        OTT is poised to seize future opportunities across fintech, payments,
        and real estate.
      </div>

      {/* Avatar image - 使用标准 Tailwind 断点语法 */}
      <Image
        src="/images/backgrounds/duncan.png"
        alt="avartar"
        width={630}
        height={530}
        className="absolute bottom-0 3xl:left-45 2xl:left-45 xl:left-32 lg:left-20 md:left-8 xl:w-[500px] xl:h-[420px] lg:w-[440px] lg:h-[380px] md:w-[380px] md:h-[330px]"
      />

      {/* Bio text - 使用标准 Tailwind 断点语法 */}
      <div className="absolute 3xl:right-51 3xl:bottom-18 2xl:right-51 xl:right-32 lg:right-20 md:right-8 bottom-18 text-end">
        <div className="3xl:text-2xl text-[28px] xl:text-[24px] lg:text-[20px] md:text-[18px] font-normal mb-2">
          Dwight Duncan
        </div>
        <div className="3xl:text-lg text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] font-[300px]">
          Advisor and Director, OTT Financial Group
        </div>
        <div className="3xl:text-lg text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] font-[300px]">
          Former Deputy Premier of Ontario
        </div>
        <div className="3xl:text-lg text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] font-[300px]">
          Former Minister of Finance of Ontario
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
