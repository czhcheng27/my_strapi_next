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
      // 如果将来使用 HTTPS 或其他域名
      {
        protocol: "https",
        hostname: "**", // 允许所有 HTTPS 域名（生产环境建议具体指定）
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
  // 环境变量配置
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL,
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
};

export default nextConfig;
