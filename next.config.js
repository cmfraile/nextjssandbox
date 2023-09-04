/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lorem.picsum',
            port: '',
            pathname: '/account123/**',
          },
        ],
        domains: ['localhost', 'picsum.photos'],
      },
}

module.exports = nextConfig
