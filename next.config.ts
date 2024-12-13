/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-cm.freepik.com',
        pathname: '/resources/**',
      },
    ],
  },
};

module.exports = nextConfig;
