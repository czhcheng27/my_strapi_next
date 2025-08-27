import React from "react";
import Image from "next/image";
import ExploreMore from "@/components/ExploreMore";
import styles from "./index.module.scss";

const HomeFintech = ({ t }: any) => {
  return (
    <div className={`bg-[#DDD]`}>
      {/* Container with responsive padding matching other components */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0">
        {/* Hero section - text and image */}
        <div className="relative py-12 md:py-16 lg:py-12 xl:py-16 2xl:py-20 3xl:py-26">
          <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Text content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-5xl font-light mb-6 lg:mb-8">
                {t.title}
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-light mb-2">
                {t.subtitle}
              </h2>
              <p className="lg:text-lg font-light mb-2 leading-relaxed">
                {t.description}
              </p>
              <ul className="list-disc lg:text-lg font-light ml-6 mb-8 lg:mb-12 space-y-2">
                <li>{t.card1.title}</li>
                <li>{t.card2.title}</li>
                <li>{t.card3.title}</li>
              </ul>
              <ExploreMore />
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <Image
                src="/images/backgrounds/girl.png"
                alt="Girl"
                width={585}
                height={718}
                className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Services cards section */}
        <div className="-mt-8 md:-mt-12 lg:-mt-40 xl:-mt-50 2xl:-mt-55 3xl:-mt-60 pb-8 lg:pb-10 xl:pb-20 2xl:pb-30">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/images/backgrounds/bg6.png"
                    alt="Payment Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8 flex items-center justify-between">
                  <h3 className="text-2xl lg:text-3xl font-light flex-1">
                    {t.card1.title}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <Image
                      src="/images/logos/logo1.png"
                      alt="Logo"
                      width={196}
                      height={132}
                      className="w-12 h-8 lg:w-16 lg:h-10 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/images/backgrounds/bg7.jpg"
                    alt="International Remittance"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8 flex items-center justify-between">
                  <h3 className="text-2xl lg:text-3xl font-light flex-1">
                    {t.card2.title}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <Image
                      src="/images/logos/logo2.png"
                      alt="Logo"
                      width={162}
                      height={85}
                      className="w-12 h-6 lg:w-16 lg:h-8 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/images/backgrounds/bg8.jpg"
                    alt="Digital Banking & Card Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8 flex items-center justify-between">
                  <h3 className="text-2xl lg:text-3xl font-light flex-1">
                    {t.card3.title}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <Image
                      src="/images/logos/logo3.jpg"
                      alt="Logo"
                      width={107}
                      height={92}
                      className="w-10 h-8 lg:w-12 lg:h-10 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFintech;
