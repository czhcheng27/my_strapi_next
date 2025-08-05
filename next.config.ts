import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "3.131.240.216",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    // 添加图片优化配置
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  // 添加性能优化
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
  // 压缩配置
  compress: true,
};

export default nextConfig;
