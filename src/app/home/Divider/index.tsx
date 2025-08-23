import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

const Divider = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#F8F7F5]">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0">
        {/* Unified layout: logos in flow; text will switch to absolute at larger breakpoints via CSS module */}
        <div className="relative">
          {/* Logos */}
          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/images/logos/logo.svg"
              alt="OTT Logo"
              width={180}
              height={63}
              className="h-12 lg:h-16 w-auto"
            />
            <Image
              src="/images/icons/Vector.svg"
              alt="Divider"
              width={1}
              height={63}
              className="mx-4 lg:mx-6 h-12 lg:h-16 w-auto"
            />
            <Image
              src="/images/logos/logo4.svg"
              alt="Partner Logo"
              width={132}
              height={63}
              className="h-12 lg:h-16 w-auto"
            />
          </div>

          {/* Text - stays in flow on small, becomes absolutely positioned on larger screens via module CSS */}
          <div
            className={
              styles.dividerText +
              " hidden md:block mt-6 text-center lg:text-left"
            }
          >
            <div className="text-lg mb-2">OTT Group 20 Years ：</div>
            <div className="text-2xl xl:text-4xl font-light">
              More Expertise, More Stability and More Vision
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divider;
