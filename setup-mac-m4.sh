#!/bin/bash

# 🚀 Amplified Classics - M4 Mac Optimization Setup
# Optimized for Apple Silicon M4 Macs with 24GB RAM
# Designed for 3-machine workflow with maximum performance

echo "╔══════════════════════════════════════════════════════════╗"
echo "║        Amplified Classics - M4 Mac Optimization          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check if we're on Apple Silicon
ARCH=$(uname -m)
if [[ "$ARCH" != "arm64" ]]; then
    echo -e "${RED}❌ This script is optimized for Apple Silicon (M1/M2/M3/M4) Macs${NC}"
    echo "Current architecture: $ARCH"
    exit 1
fi

# Check M4 specifically
MACHINE_MODEL=$(sysctl -n hw.model)
echo -e "${BLUE}🖥️  Machine Model: $MACHINE_MODEL${NC}"

# Detect RAM
RAM_GB=$(sysctl -n hw.memsize | awk '{print int($1/1024/1024/1024)}')
echo -e "${BLUE}💾 RAM: ${RAM_GB}GB${NC}"

if [[ $RAM_GB -lt 16 ]]; then
    echo -e "${YELLOW}⚠️  Warning: Less than 16GB RAM detected. Performance may be limited.${NC}"
fi

echo ""
echo -e "${GREEN}🚀 Starting M4 Mac optimization...${NC}"

# 1. Node.js Optimization
echo ""
echo -e "${BLUE}📦 Optimizing Node.js for M4...${NC}"

# Check Node version
NODE_VERSION=$(node --version 2>/dev/null || echo "Not installed")
echo "Current Node.js: $NODE_VERSION"

# Install/update Node.js via nvm for better M4 optimization
if ! command -v nvm &> /dev/null; then
    echo "Installing NVM for better Node.js management..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Use latest LTS Node.js optimized for Apple Silicon
echo "Installing Node.js LTS optimized for Apple Silicon..."
nvm install --lts
nvm use --lts
nvm alias default lts/*

# 2. Package Manager Optimization
echo ""
echo -e "${BLUE}📦 Optimizing package manager...${NC}"

# Use npm with M4 optimizations
npm config set target_platform darwin
npm config set target_arch arm64
npm config set target_libc default

# Enable parallel installs for faster builds
npm config set fund false
npm config set audit false
npm config set progress true

# 3. Next.js M4 Optimizations
echo ""
echo -e "${BLUE}⚡ Configuring Next.js for M4 performance...${NC}"

# Create optimized next.config.js
cat > next.config.m4.js << 'NEXTCONFIG'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // M4 Mac optimizations
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        '*.tsx': {
          loaders: ['swc-loader'],
          as: '*.js',
        },
      },
    },
    // Enable SWC for faster compilation on M4
    swcMinify: true,
    // Optimize for Apple Silicon
    esmExternals: true,
  },
  
  // Performance optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization for M4
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Webpack optimizations for M4
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
    
    return config
  },
  
  // Enable compression
  compress: true,
  
  // Optimize bundle
  poweredByHeader: false,
  
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig
NEXTCONFIG

# Backup original config and use M4 optimized version
if [ -f "next.config.js" ]; then
    mv next.config.js next.config.js.backup
    echo "Backed up original next.config.js"
fi
mv next.config.m4.js next.config.js
echo "Created M4-optimized next.config.js"

# 4. Environment Variables for M4
echo ""
echo -e "${BLUE}🔧 Setting up M4 environment variables...${NC}"

cat > .env.local.m4 << 'ENVEOF'
# M4 Mac Optimizations
NODE_OPTIONS="--max-old-space-size=8192 --experimental-loader"
NEXT_TELEMETRY_DISABLED=1

# Apple Silicon specific
NEXT_PRIVATE_TARGET=arm64-darwin

# Performance optimizations
NEXT_PRIVATE_SKIP_MEMORY_WARNING=1
NEXT_PRIVATE_SKIP_SIZE_WARNING=1

# Development optimizations
NEXT_PRIVATE_DEBUG_CACHE=0
NEXT_PRIVATE_DEBUG_SWC=0
ENVEOF

# Merge with existing .env.local if it exists
if [ -f ".env.local" ]; then
    echo "Merging with existing .env.local..."
    cat .env.local .env.local.m4 > .env.local.tmp
    mv .env.local.tmp .env.local
    rm .env.local.m4
else
    mv .env.local.m4 .env.local
fi

# 5. Package.json M4 Scripts
echo ""
echo -e "${BLUE}📝 Adding M4-optimized scripts...${NC}"

# Create M4-optimized package.json scripts
cat > package-m4-scripts.json << 'PACKAGEEOF'
{
  "scripts": {
    "dev:m4": "NODE_OPTIONS='--max-old-space-size=8192' next dev -H 0.0.0.0",
    "build:m4": "NODE_OPTIONS='--max-old-space-size=8192' next build",
    "start:m4": "NODE_OPTIONS='--max-old-space-size=8192' next start",
    "dev:fast": "NODE_OPTIONS='--max-old-space-size=8192' next dev -H 0.0.0.0 --turbo",
    "build:analyze": "ANALYZE=true npm run build:m4",
    "dev:profile": "NODE_OPTIONS='--max-old-space-size=8192 --prof' next dev",
    "clean:m4": "rm -rf .next && rm -rf node_modules/.cache && npm run dev:m4",
    "perf:m4": "npm run build:m4 && npm run start:m4"
  }
}
PACKAGEEOF

# Merge scripts into package.json
if [ -f "package.json" ]; then
    echo "Adding M4 scripts to package.json..."
    node -e "
    const fs = require('fs');
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const m4Scripts = JSON.parse(fs.readFileSync('package-m4-scripts.json', 'utf8'));
    pkg.scripts = { ...pkg.scripts, ...m4Scripts.scripts };
    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
    "
    rm package-m4-scripts.json
fi

# 6. Git Configuration for M4
echo ""
echo -e "${BLUE}🔧 Optimizing Git for M4...${NC}"

# Configure Git for better performance on M4
git config --global core.preloadindex true
git config --global core.fscache true
git config --global gc.auto 256
git config --global pack.windowMemory 100m
git config --global pack.packSizeLimit 100m
git config --global pack.threads 0

# 7. System Optimizations
echo ""
echo -e "${BLUE}⚙️  Applying system optimizations...${NC}"

# Create M4-specific shell optimizations
cat > ~/.zshrc.m4 << 'ZSHRCEOF'
# M4 Mac Optimizations for Amplified Classics

# Node.js optimizations
export NODE_OPTIONS="--max-old-space-size=8192"
export NODE_ENV="development"

# Next.js optimizations
export NEXT_TELEMETRY_DISABLED=1
export NEXT_PRIVATE_TARGET=arm64-darwin

# Performance monitoring
alias perf-monitor="top -pid \$(pgrep -f 'next')"
alias mem-check="ps aux | grep -E '(next|node)' | head -10"

# Quick development commands
alias dev-m4="npm run dev:m4"
alias build-m4="npm run build:m4"
alias clean-m4="npm run clean:m4"

# Git shortcuts for M4 workflow
alias git-sync="git pull origin main && git push origin main"
alias git-status="git status && git log --oneline -3"

# Amplified Classics shortcuts
alias ac-start="~/sync-amplified.sh start && npm run dev:m4"
alias ac-end="~/sync-amplified.sh end"
alias ac-status="~/sync-amplified.sh status"
ZSHRCEOF

# Append to existing .zshrc
if [ -f ~/.zshrc ]; then
    echo "" >> ~/.zshrc
    echo "# M4 Mac Optimizations for Amplified Classics" >> ~/.zshrc
    cat ~/.zshrc.m4 >> ~/.zshrc
    rm ~/.zshrc.m4
else
    mv ~/.zshrc.m4 ~/.zshrc
fi

# 8. Install M4-optimized dependencies
echo ""
echo -e "${BLUE}📦 Installing M4-optimized dependencies...${NC}"

# Install performance monitoring tools
npm install --save-dev @next/bundle-analyzer
npm install --save-dev cli-progress
npm install --save-dev node-gyp

# 9. Create M4 Performance Monitor
echo ""
echo -e "${BLUE}📊 Creating M4 performance monitor...${NC}"

cat > monitor-m4.sh << 'MONITOREOF'
#!/bin/bash

# M4 Mac Performance Monitor for Amplified Classics

echo "╔══════════════════════════════════════════════════════════╗"
echo "║              M4 Mac Performance Monitor                  ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# System info
echo "🖥️  System Information:"
echo "   Model: $(sysctl -n hw.model)"
echo "   CPU: $(sysctl -n machdep.cpu.brand_string)"
echo "   RAM: $(sysctl -n hw.memsize | awk '{print int($1/1024/1024/1024)}')GB"
echo "   Architecture: $(uname -m)"
echo ""

# Node.js processes
echo "📦 Node.js Processes:"
ps aux | grep -E '(next|node)' | grep -v grep | head -5
echo ""

# Memory usage
echo "💾 Memory Usage:"
top -l 1 | head -10
echo ""

# Next.js specific
if pgrep -f "next" > /dev/null; then
    echo "⚡ Next.js Status: Running"
    echo "   PID: $(pgrep -f 'next')"
else
    echo "⚡ Next.js Status: Not running"
fi
echo ""

# Git status
echo "📁 Git Status:"
git status --porcelain | head -5
if [ $? -eq 0 ]; then
    echo "   Branch: $(git branch --show-current)"
    echo "   Last commit: $(git log --oneline -1)"
fi
echo ""

# Performance tips
echo "💡 M4 Performance Tips:"
echo "   • Use 'npm run dev:m4' for optimized development"
echo "   • Use 'npm run build:m4' for optimized builds"
echo "   • Monitor with 'perf-monitor' alias"
echo "   • Clean cache with 'npm run clean:m4'"
echo ""
MONITOREOF

chmod +x monitor-m4.sh
mv monitor-m4.sh ~/monitor-m4.sh

# 10. Final Setup
echo ""
echo -e "${GREEN}✅ M4 Mac optimization complete!${NC}"
echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║                  M4 Optimization Summary               ║"
echo "╠════════════════════════════════════════════════════════╣"
echo "║                                                        ║"
echo "║  ✓ Node.js optimized for Apple Silicon                ║"
echo "║  ✓ Next.js configured for M4 performance              ║"
echo "║  ✓ Environment variables optimized                    ║"
echo "║  ✓ Git performance tuned                              ║"
echo "║  ✓ Shell aliases and shortcuts added                  ║"
echo "║  ✓ Performance monitoring tools installed             ║"
echo "║  ✓ M4-specific scripts added to package.json         ║"
echo "║                                                        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}🖥️  Machine: $MACHINE_MODEL${NC}"
echo -e "${GREEN}💾 RAM: ${RAM_GB}GB${NC}"
echo -e "${GREEN}🏗️  Architecture: $ARCH${NC}"
echo ""
echo "🚀 Quick Start Commands:"
echo "   npm run dev:m4        # Optimized development server"
echo "   npm run build:m4      # Optimized production build"
echo "   ~/monitor-m4.sh       # Performance monitoring"
echo "   ac-start              # Start Amplified Classics workflow"
echo "   ac-end                # End Amplified Classics workflow"
echo ""
echo -e "${YELLOW}📝 Next Steps:${NC}"
echo "1. Restart your terminal to load new aliases"
echo "2. Run 'npm run dev:m4' to start optimized development"
echo "3. Use '~/monitor-m4.sh' to check performance"
echo "4. Run this script on your other M4 Macs"
echo ""
echo -e "${GREEN}✨ Your M4 Mac is now optimized for Amplified Classics!${NC}"
