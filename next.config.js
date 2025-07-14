/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 배포 시 TypeScript 에러 무시
    ignoreBuildErrors: true,
  },
  eslint: {
    // 배포 시 ESLint 에러 무시
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      'oaidalleapiprodscus.blob.core.windows.net',
      'cdn.openai.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/healthcheck',
        destination: '/api/health',
      },
    ]
  },
}

module.exports = nextConfig 