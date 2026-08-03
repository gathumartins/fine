const nextConfig = {
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
