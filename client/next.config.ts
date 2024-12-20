import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-domain.com'], // Add allowed image domains
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
