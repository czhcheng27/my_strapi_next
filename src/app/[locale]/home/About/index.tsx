import React from "react";
import Image from "next/image";
import ExploreMore from "@/components/ExploreMore";

// 定义翻译数据的类型
interface AboutTranslations {
  title: string;
  description: string;
  list: {
    item1: string;
    item2: string;
    item3: string;
  };
}

interface HomeAboutProps {
  t: AboutTranslations;
}

const HomeAbout = ({ t }: HomeAboutProps) => {
  return (
    <section className="font-noto py-12 lg:py-27">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 lg:gap-12">
          {/* Image */}
          <div className="w-full rounded-lg overflow-hidden">
            <div className="relative w-full aspect-[3/2]">
              <Image
                src="/images/backgrounds/section3.jpg"
                alt="About background"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-2">
            <div className="3xl:max-w-[624px] lg:ml-6">
              <h2
                className={`font-[250] text-3xl lg:text-3xl xl:text-4xl mb-4`}
              >
                {t.title}
              </h2>
              <p className={`font-light text-lg lg:text-sm xl:text-base`}>
                {t.description}
              </p>

              <ul className="list-disc ml-6 pt-2 pb-4 xl:pb-8 space-y-1 font-light">
                <li>{t.list.item1}</li>
                <li>{t.list.item2}</li>
                <li>{t.list.item3}</li>
              </ul>

              <ExploreMore link="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
