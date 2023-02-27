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
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
