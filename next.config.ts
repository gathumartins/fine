import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.finework.co.ke',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
