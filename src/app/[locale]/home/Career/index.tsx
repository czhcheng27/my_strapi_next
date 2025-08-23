import React from "react";
import Image from "next/image";
import ExploreMore from "@/components/ExploreMore";

const HomeCareer = () => {
  return (
    <section className="bg-[#f2f0ec] relative">
      {/* Desktop: absolute positioned image covering right 50% */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <Image
          src="/images/backgrounds/bg4.jpg"
          alt="Background Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Text content with standard container alignment */}
      <div className="relative py-12 lg:py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 xl:px-36 3xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
            {/* Text content - always in left column */}
            <div className="flex items-start">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
                  Careers
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 lg:mb-12 leading-relaxed">
                  Join OTT and shape the future of finance and real estate—while
                  growing your own career in a collaborative, forward-thinking
                  team
                </p>
                <ExploreMore link="/careers" />
              </div>
            </div>

            {/* Mobile image - only visible on mobile */}
            <div className="lg:hidden relative min-h-[400px]">
              <Image
                src="/images/backgrounds/bg4.jpg"
                alt="Background Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Empty space on desktop (image is absolutely positioned) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareer;
