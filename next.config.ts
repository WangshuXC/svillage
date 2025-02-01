import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com", "api.microlink.io", "svillage.cn", "images.unsplash.com"],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.bilibili.com/:path*',
      },
    ];
  },
};

export default nextConfig;
