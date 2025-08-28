"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

interface PersonData {
  id: number;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  quote: string;
}

const portfolioData: PersonData[] = [
  {
    id: 1,
    name: "Dwight Duncan",
    title: "Advisor and Director, OTT Financial Group",
    subtitle: "Former Deputy Premier of Ontario",
    description: "Former Minister of Finance of Ontario",
    avatar: "/images/backgrounds/duncan.png",
    quote:
      "OTT is poised to seize future opportunities across fintech, payments, and real estate.",
  },
  {
    id: 2,
    name: "John McCallum",
    title: "Advisor and Director, OTT Financial Group",
    subtitle: "Former Immigration Minister of Canada",
    description: "Former Ambassador of Canada to China",
    avatar: "/images/backgrounds/bg1.jpg", // 临时使用，后续替换
    quote:
      "The people at OTT impress me with their energy, expertise, and genuine warmth.",
  },
  {
    id: 3,
    name: "Peter Van Loan",
    title: "Advisor, OTT Financial Group",
    subtitle: "Former Government House Leader of Canada",
    description: "Former Minister of International Trade of Canada",
    avatar: "/images/backgrounds/bg2.jpg", // 临时使用，后续替换
    quote:
      "OTT’s greatest strength is its people – led by a visionary filled with creative ideas.",
  },
];

const HomePortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + portfolioData.length) % portfolioData.length
    );
  };

  // 自动轮播逻辑
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000); // 每4秒切换一次
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const currentPerson = portfolioData[currentIndex];

  return (
    <div
      className={`relative h-70 sm:h-100 lg:h-151 overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform duration-200 cursor-pointer"
        aria-label="Previous person"
      >
        <Image
          src="/images/icons/arrow-left.svg"
          alt="Previous"
          width={28}
          height={72}
          className="w-8 h-8 sm:w-7 sm:h-18 cursor-pointer"
        />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-10 hover:scale-110 transition-transform duration-200 cursor-pointer"
        aria-label="Next person"
      >
        <Image
          src="/images/icons/arrow-right.svg"
          alt="Next"
          width={28}
          height={72}
          className="w-8 h-8 sm:w-7 sm:h-18 cursor-pointer"
        />
      </button>

      {/* Quote text - 修复移动端溢出问题 */}
      <div className="absolute font-[250] top-8 sm:top-16 md:top-28 3xl:top-28 right-2 sm:right-6 md:right-8 lg:right-20 xl:right-32 2xl:right-47 3xl:right-47 max-w-60 sm:max-w-80 md:max-w-90 lg:max-w-108 xl:max-w-156 2xl:max-w-204 3xl:max-w-264 italic text-lg sm:text-3xl md:text-[28px] lg:text-[36px] xl:text-[44px] 2xl:text-[52px] 3xl:text-5xl transition-opacity duration-300">
        {currentPerson.quote}
      </div>

      {/* Avatar image - 修复移动端溢出问题 */}
      <Image
        src={currentPerson.avatar}
        alt={currentPerson.name}
        width={630}
        height={530}
        className="absolute bottom-0 left-2 sm:left-6 md:left-8 lg:left-20 xl:left-32 2xl:left-45 3xl:left-45 w-64 h-56 sm:w-80 sm:h-72 md:w-[380px] md:h-[330px] lg:w-[440px] lg:h-[380px] xl:w-[500px] xl:h-[420px] 2xl:w-[630px] 2xl:h-[530px] 3xl:w-[630px] 3xl:h-[530px] object-cover transition-opacity duration-300"
      />

      {/* Bio text - 添加 sm 和更小屏幕的响应式 */}
      <div className="absolute right-4 sm:right-6 md:right-8 lg:right-20 xl:right-32 2xl:right-51 3xl:right-51 bottom-8 sm:bottom-12 md:bottom-18 3xl:bottom-18 text-end transition-opacity duration-300">
        <div className="text-lg sm:text-xl md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-2xl font-normal mb-2">
          {currentPerson.name}
        </div>
        <div className="text-[12px] sm:text-base md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-lg font-[300px]">
          {currentPerson.title}
        </div>
        <div className="text-[12px] sm:text-base md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-lg font-[300px]">
          {currentPerson.subtitle}
        </div>
        <div className="text-[12px] sm:text-base md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-lg font-[300px]">
          {currentPerson.description}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {portfolioData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePortfolio;
