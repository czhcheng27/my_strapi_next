import React from "react";
import HlsPlayer from "@/components/HlsPlayer";

const HomeHero = () => {
  return (
    <section className="relative h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden">
      <HlsPlayer src="/video/video.m3u8" poster="/video/video-cover.jpg" />
    </section>
  );
};

export default HomeHero;
