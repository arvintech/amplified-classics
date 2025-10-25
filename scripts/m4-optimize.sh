#!/bin/bash

# Amplified Classics - M4 Optimization Script
# Optimizes the development environment for Mac M4 chip

echo "🚀 Amplified Classics - M4 Optimization"
echo "========================================"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PROJECT_DIR="$HOME/Documents/GitHub/amplified-classics"
cd "$PROJECT_DIR" || exit 1

echo -e "${BLUE}🖥️  Detecting system architecture...${NC}"
ARCH=$(uname -m)
echo "Architecture: $ARCH"

if [[ "$ARCH" == "arm64" ]]; then
    echo -e "${GREEN}✅ ARM64 detected - M4 optimization enabled${NC}"
else
    echo -e "${YELLOW}⚠️  Non-ARM64 system detected${NC}"
fi

echo ""
echo -e "${BLUE}🔧 Setting M4-optimized environment variables...${NC}"

# Set M4-optimized Node.js options
export NODE_OPTIONS="--max-old-space-size=8192 --experimental-loader"
export NEXT_TELEMETRY_DISABLED=1
export NEXT_PRIVATE_SKIP_MEMORY_WARNING=1

echo "NODE_OPTIONS: $NODE_OPTIONS"
echo "NEXT_TELEMETRY_DISABLED: $NEXT_TELEMETRY_DISABLED"

echo ""
echo -e "${BLUE}📦 Checking dependencies...${NC}"

# Check if we need to install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "Dependencies already installed"
fi

echo ""
echo -e "${BLUE}🚀 Starting optimized development server...${NC}"
echo ""

# Start the M4-optimized development server
npm run dev:m4
