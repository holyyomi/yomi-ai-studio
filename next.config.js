/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' 제거
  // trailingSlash: true 제거
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 