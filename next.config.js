/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.s3.amazonaws.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'portal.ehawaii.gov',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
