import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // 本地开发
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      // 允许通过代理 API 加载图片（这样所有远程图片都通过代理）
      {
        protocol: "https",
        hostname: "**",
        pathname: "/api/proxy-image",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
