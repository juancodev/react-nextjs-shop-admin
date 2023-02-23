/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'api.lorem.space',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
