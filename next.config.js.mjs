// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.resolve.alias = {
      // keep Next’s defaults
      ...config.resolve.alias,
      // map '@' → project root
      '@': path.resolve(__dirname),
      // now these work relative to '@'
      '@/components': path.resolve(__dirname, 'components'),
      '@/app':        path.resolve(__dirname, 'app'),
    };
    return config;
  },
};

module.exports = nextConfig;
