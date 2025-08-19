import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Section4.module.scss";

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

const Section4 = () => {
  return (
    <div className="pt-20 pb-22 px-60 text-[#000]">
      <div className={styles.title}>Investments</div>
      <div className={styles.subtitle}>
        Smart strategies. Sustainable growth.
      </div>
      <div className={styles.description}>
        We manage and grow diverse assets with precision and care—building
        lasting value for clients and communities.
      </div>

      <div className="flex justify-between">
        {options.map((el, index) => {
          return (
            <div className={styles.option} key={index}>
              <Image
                src={el.img}
                alt={el.title}
                width={454}
                height={454}
                style={{ width: "454px", height: "454px" }}
              />
              <div className={styles.bottom}>
                <h3 className={styles.title}>{el.title}</h3>
                <p className={styles.description}>{el.description}</p>
                <Link href={el.link} className={styles.link}>
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
        })}
      </div>
    </div>
  );
};

export default Section4;
