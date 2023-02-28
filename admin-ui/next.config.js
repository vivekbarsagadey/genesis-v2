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
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

module.exports = nextConfig
