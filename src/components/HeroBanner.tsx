// components/HeroBanner.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroBanner, getStrapiImageUrl } from "@/lib/strapi";

interface HeroBannerProps {
  banners: HeroBanner[];
}

const HeroBannerComponent: React.FC<HeroBannerProps> = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // 5秒切换一次

    return () => clearInterval(timer);
  }, [banners.length]);

  if (!banners || banners.length === 0) {
    // 默认的静态横幅（如果没有数据）
    return (
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Evolution
              <br />
              of Connected
              <br />
              <span className="text-yellow-400">Financial Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Put your trust in us. A bright future awaits.
            </p>
            <Link
              href="/company-overview"
              className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const currentBanner = banners[currentSlide];

  return (
    <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* 背景图片或渐变背景 */}
      {currentBanner.backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={getStrapiImageUrl(currentBanner.backgroundImage) || ""}
            alt={currentBanner.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      ) : (
        /* 渐变背景作为后备 */
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      )}

      {/* 内容 */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {currentBanner.title}
        </h1>

        {currentBanner.subtitle && (
          <p className="text-xl md:text-2xl mb-8">{currentBanner.subtitle}</p>
        )}

        {currentBanner.description && currentBanner.description.length > 0 && (
          <div className="text-lg mb-8 max-w-2xl mx-auto">
            {currentBanner.description.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p key={index} className="mb-4">
                    {block.children
                      ?.map(
                        (child: { type: string; text: string }) => child.text
                      )
                      .join("")}
                  </p>
                );
              }
              return null;
            })}
          </div>
        )}

        {currentBanner.buttonText && currentBanner.buttonLink && (
          <Link
            href={currentBanner.buttonLink}
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            {currentBanner.buttonText}
          </Link>
        )}
      </div>

      {/* 轮播指示器 */}
      {banners.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? "bg-yellow-400"
                    : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* 左右箭头（如果有多个横幅） */}
      {banners.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + banners.length) % banners.length
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % banners.length)
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </section>
  );
};

export default HeroBannerComponent;
