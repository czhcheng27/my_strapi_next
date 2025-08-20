import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import ExploreMore from "@/components/ExploreMore";

const HomeCareer = () => {
  return (
    <div className={`flex bg-[#f2f0ec] ${styles.moduleBox}`}>
      <div className="w-1/2 relative">
        <div className="absolute top-32 left-61 max-w-150">
          <h2 className="text-[42px] font-[250] mb-6">Careers</h2>
          <div className="text-2xl mb-18">
            Join OTT and shape the future of finance and real estate—while
            growing your own career in a collaborative, forward-thinking team
          </div>
          <div>
            <ExploreMore link="/careers" />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src="/images/backgrounds/bg4.jpg"
          alt="Background Image"
          width={971}
          height={815}
        />
      </div>
    </div>
  );
};

export default HomeCareer;
