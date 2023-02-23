/** @type {import('next').NextConfig} */
const path = require('node:path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'styles'),
    };

    return config;
  },
}

module.exports = nextConfig
