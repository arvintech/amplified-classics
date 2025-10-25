/** @type {import('next').NextConfig} */
const nextConfig = {
  // M4 Apple Silicon Optimizations
  experimental: {
    mdxRs: true,
    // Enable turbo for faster builds on M4
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  
  // Optimize for Apple Silicon M4
  swcMinify: true, // Use SWC (Rust-based, faster on ARM)
  
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Optimize images for faster loading
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Optimize build output
  output: 'standalone',
}

module.exports = nextConfig
