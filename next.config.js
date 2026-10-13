/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ],
  },
  // Let browsers cache images in /public for 30 days.
  // If you replace an image, give it a new file name so visitors get the new one.
  async headers() {
    return [
      {
        source: '/:all*(webp|png|jpg|jpeg|svg|ico|avif)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
  // Optimize for performance
  experimental: {
    optimizePackageImports: ['@tabler/icons-react', 'motion'],
  },
};

module.exports = nextConfig;
