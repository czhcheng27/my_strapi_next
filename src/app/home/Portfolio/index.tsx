import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";

const HomePortfolio = () => {
  return (
    <div className={`relative h-151 ${styles.portfolio}`}>
      <div className="absolute top-28 right-47 max-w-237 italic text-[52px]">
        OTT is poised to seize future opportunities across fintech, payments,
        and real estate.
      </div>

      <Image
        src="/images/backgrounds/duncan.png"
        alt="avartar"
        width={630}
        height={530}
        className="absolute bottom-0 left-45"
      />

      <div className="absolute right-51 bottom-18 text-end">
        <div className="text-[28px] font-normal mb-2">Dwight Duncan</div>
        <div className="text-[18px] font-[300px]">
          Advisor and Director, OTT Financial Group
        </div>
        <div className="text-[18px] font-[300px]">
          Former Deputy Premier of Ontario
        </div>
        <div className="text-[18px] font-[300px]">
          Former Minister of Finance of Ontario
        </div>
      </div>
    </div>
  );
};

export default HomePortfolio;
