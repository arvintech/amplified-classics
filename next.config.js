/** @type {import('next').NextConfig} */
const nextConfig = {
  // M4 Mac optimizations
  experimental: {
    mdxRs: true,
    // Enable SWC for faster compilation on M4
    swcMinify: true,
    // Optimize for Apple Silicon
    esmExternals: true,
    // Optimize for ARM64 (CSS optimization)
    optimizeCss: true,
  },
  
  // Image optimization for M4
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Webpack optimizations for M4 (only applies when NOT using Turbo)
  webpack: (config, { dev, isServer }) => {
    // M4-specific optimizations
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Optimize for Apple Silicon
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }
    
    return config
  },
  
  // Enable compression
  compress: true,
  
  // Optimize bundle
  poweredByHeader: false,
  
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig
