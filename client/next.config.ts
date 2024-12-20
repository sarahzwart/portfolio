import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: 'export',
  reactStrictMode: true,
  images: {
    domains: [''], 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
