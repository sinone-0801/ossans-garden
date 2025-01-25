/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ossans-garden',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/ossans-garden',
};

module.exports = nextConfig;