import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Divider = () => {
  return (
    <div className="h-61 bg-[#F8F7F5] flex items-center">
      {/* Left Side Image */}
      <div className="w-2/5">
        <div className="flex align-center pl-58">
          <Image
            src={"images/logos/logo.svg"}
            alt="img"
            width={180}
            height={63}
          />
          <Image
            src={"images/icons/Vector.svg"}
            alt="img"
            width={1}
            height={63}
            className="mx-5"
          />
          <Image
            src={"images/logos/logo4.svg"}
            alt="img"
            width={132}
            height={63}
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className={`w-3/5 ${styles.dividerText}`}>
        <div className="text-2xl font-normal mb-2">OTT Group 20 Years ：</div>
        <div className="text-4xl font-[250]">
          More Expertise, More Stability and More Vision
        </div>
      </div>
    </div>
  );
};

export default Divider;
