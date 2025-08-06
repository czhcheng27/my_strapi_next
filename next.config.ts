import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3.131.240.216",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "3.131.240.216",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // 允许通过代理 API 加载图片
      {
        protocol: "https",
        hostname: "my-strapi-next.vercel.app",
        pathname: "/api/proxy-image/**",
      },
      // 如果有自定义域名，也需要添加
      {
        protocol: "https",
        hostname: "**",
        pathname: "/api/proxy-image/**",
      },
    ],
  },
};

export default nextConfig;
