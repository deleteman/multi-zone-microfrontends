/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/blog',
        destination: 'http://localhost:3001/blog'
      },
      {
        source: '/blog/:path*',
        destination: 'http://localhost:3001/blog/:path*'
      }
    ]
  }
}

module.exports = nextConfig
