import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Section3.module.scss";

const Section3 = () => {
  return (
    <div className="h-[662px] flex items-center">
      <div className="w-1/2 flex justify-end">
        <Image
          src="/images/backgrounds/section3.jpg"
          alt="bg"
          width={714}
          height={476}
          style={{ width: "714px", height: "476px" }}
        />
      </div>
      <div className="w-1/2 h-full max-w-[624px] pl-24 pt-[93px]">
        <h2 className={styles.title}>关于方圆国际</h2>
        <p className={styles.subTitle}>
          Driven by smart investments and innovative financial solutions, we
          advance investment management and financial services in
          synergy—spanning wealth, real estate, and lifestyle club investments,
          as well as payments, cross-border finance, digital banking, and credit
          cards—creating sustainable value for clients and communities.
        </p>
        <ul className="list-disc ml-6 pt-2 pb-12 space-y-1">
          <li>Mission & Vision</li>
          <li>Our Story</li>
          <li>Community</li>
        </ul>
        <Link href="/news" className="flex items-center gap-4">
          <Image
            src="/images/icons/GoTo.svg"
            alt="Arrow Right"
            width={36}
            height={36}
          />
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Section3;
