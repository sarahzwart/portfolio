import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['https://astonishing-beijinho-34d194.netlify.app/'], // Add allowed image domains
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
