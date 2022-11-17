/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  optimizeFonts: false,
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
