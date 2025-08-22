"use client";
import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface HlsPlayerProps {
  src: string;
  poster?: string; // 封面图
}

export default function HlsPlayer({ src, poster }: HlsPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 禁止浏览器控制 UI
    video.controls = false;
    video.muted = true; // 静音保证自动播放
    video.autoplay = true; // 自动播放
    video.loop = true; // 循环播放
    video.playsInline = true; // iOS 原生播放 inline
    video.preload = "auto"; // 预加载，减少加载圈

    // HLS 加载
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        autoStartLoad: true,
        startPosition: 0,
        maxBufferLength: 30, // 控制缓冲
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
