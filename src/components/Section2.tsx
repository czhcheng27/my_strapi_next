import React from "react";
import styles from "./Section2.module.scss";

const Section2 = () => {
  return (
    <div
      className="relative h-[759px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/backgrounds/section2.png')",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute top-[139px] left-[241px]">
        <div className={`flex ${styles.titleBox}`}>
          <div>投资</div>
          <div>管理</div>
          <div>创新</div>
        </div>
        <div className={styles.subTitleBox}>
          We deliver trusted, long-term value for clients and communities.
        </div>
      </div>
    </div>
  );
};

export default Section2;
