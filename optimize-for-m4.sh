#!/bin/bash

# 🚀 Amplified Classics - M4 Mac Performance Optimizer
# Real-time optimization and monitoring for Apple Silicon M4 Macs

echo "╔══════════════════════════════════════════════════════════╗"
echo "║        Amplified Classics - M4 Performance Optimizer     ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# Configuration
PROJECT_DIR="$HOME/Documents/GitHub/amplified-classics"
MACHINE_NAME=$(hostname)
OPTIMIZATION_LEVEL="aggressive"  # conservative, balanced, aggressive

# Function: Show current performance
show_performance() {
    echo -e "${BLUE}📊 Current Performance Status${NC}"
    echo ""
    
    # System metrics
    echo "🖥️  System:"
    echo "   Model: $(sysctl -n hw.model)"
    echo "   CPU Usage: $(top -l 1 | grep "CPU usage" | awk '{print $3}' | sed 's/%//')"
    echo "   Memory Pressure: $(memory_pressure | grep "System-wide memory free percentage" | awk '{print $5}' | sed 's/%//')%"
    echo ""
    
    # Node.js processes
    NODE_PIDS=$(pgrep -f "node")
    if [ ! -z "$NODE_PIDS" ]; then
        echo "📦 Node.js Processes:"
        for pid in $NODE_PIDS; do
            MEMORY=$(ps -o rss= -p $pid | awk '{print int($1/1024)}')
            CPU=$(ps -o %cpu= -p $pid | awk '{print $1}')
            echo "   PID $pid: ${MEMORY}MB RAM, ${CPU}% CPU"
        done
    else
        echo "📦 Node.js: Not running"
    fi
    echo ""
    
    # Next.js specific
    NEXT_PID=$(pgrep -f "next")
    if [ ! -z "$NEXT_PID" ]; then
        echo "⚡ Next.js:"
        echo "   PID: $NEXT_PID"
        echo "   Status: Running"
        
        # Check if it's responding
        if curl -s http://localhost:3000 > /dev/null 2>&1; then
            echo "   Response: ✅ Healthy"
        else
            echo "   Response: ⚠️  Slow/Unresponsive"
        fi
    else
        echo "⚡ Next.js: Not running"
    fi
    echo ""
}

# Function: Optimize memory
optimize_memory() {
    echo -e "${YELLOW}🧹 Optimizing memory...${NC}"
    
    # Clear Node.js cache
    if [ -d "$PROJECT_DIR/.next" ]; then
        echo "   Clearing Next.js cache..."
        rm -rf "$PROJECT_DIR/.next/cache"
    fi
    
    # Clear npm cache
    echo "   Clearing npm cache..."
    npm cache clean --force > /dev/null 2>&1
    
    # Clear system caches if needed
    MEMORY_PRESSURE=$(memory_pressure | grep "System-wide memory free percentage" | awk '{print $5}' | sed 's/%//')
    if [ "$MEMORY_PRESSURE" -lt 20 ]; then
        echo "   Low memory detected, clearing system caches..."
        sudo purge > /dev/null 2>&1
    fi
    
    echo -e "${GREEN}   ✅ Memory optimization complete${NC}"
}

# Function: Optimize CPU
optimize_cpu() {
    echo -e "${YELLOW}⚡ Optimizing CPU performance...${NC}"
    
    # Check for CPU-intensive processes
    HIGH_CPU_PROCESSES=$(ps aux | awk '$3 > 50.0 { print $2, $3, $11 }' | head -5)
    if [ ! -z "$HIGH_CPU_PROCESSES" ]; then
        echo "   High CPU processes detected:"
        echo "$HIGH_CPU_PROCESSES"
    fi
    
    # Optimize Node.js processes
    NODE_PIDS=$(pgrep -f "node")
    if [ ! -z "$NODE_PIDS" ]; then
        echo "   Optimizing Node.js processes..."
        for pid in $NODE_PIDS; do
            # Set nice priority for Node.js processes
            renice -n -5 -p $pid > /dev/null 2>&1
        done
    fi
    
    echo -e "${GREEN}   ✅ CPU optimization complete${NC}"
}

# Function: Optimize network
optimize_network() {
    echo -e "${YELLOW}🌐 Optimizing network performance...${NC}"
    
    # Check network connectivity
    if ping -c 1 github.com > /dev/null 2>&1; then
        echo "   GitHub connectivity: ✅ Good"
    else
        echo "   GitHub connectivity: ⚠️  Issues detected"
    fi
    
    # Optimize Git for network performance
    git config --global http.postBuffer 524288000
    git config --global http.maxRequestBuffer 100M
    git config --global core.compression 0
    
    echo -e "${GREEN}   ✅ Network optimization complete${NC}"
}

# Function: Optimize development environment
optimize_dev_env() {
    echo -e "${YELLOW}🛠️  Optimizing development environment...${NC}"
    
    cd "$PROJECT_DIR" || exit 1
    
    # Check if dev server is running
    if pgrep -f "next dev" > /dev/null; then
        echo "   Development server is running"
        
        # Restart with optimized settings if needed
        if [ "$OPTIMIZATION_LEVEL" = "aggressive" ]; then
            echo "   Restarting with aggressive optimizations..."
            pkill -f "next dev"
            sleep 2
            NODE_OPTIONS="--max-old-space-size=8192 --experimental-loader" npm run dev:m4 &
            sleep 5
        fi
    else
        echo "   Starting optimized development server..."
        NODE_OPTIONS="--max-old-space-size=8192 --experimental-loader" npm run dev:m4 &
        sleep 5
    fi
    
    echo -e "${GREEN}   ✅ Development environment optimized${NC}"
}

# Function: Monitor and auto-optimize
auto_optimize() {
    echo -e "${CYAN}🔄 Starting auto-optimization mode...${NC}"
    echo "Press Ctrl+C to stop"
    echo ""
    
    while true; do
        # Check memory pressure
        MEMORY_PRESSURE=$(memory_pressure | grep "System-wide memory free percentage" | awk '{print $5}' | sed 's/%//')
        
        if [ "$MEMORY_PRESSURE" -lt 15 ]; then
            echo -e "${RED}⚠️  Low memory detected ($MEMORY_PRESSURE%), optimizing...${NC}"
            optimize_memory
        fi
        
        # Check CPU usage
        CPU_USAGE=$(top -l 1 | grep "CPU usage" | awk '{print $3}' | sed 's/%//')
        if (( $(echo "$CPU_USAGE > 80" | bc -l) )); then
            echo -e "${RED}⚠️  High CPU usage detected ($CPU_USAGE%), optimizing...${NC}"
            optimize_cpu
        fi
        
        # Show status every 30 seconds
        sleep 30
        show_performance
    done
}

# Function: Performance benchmark
benchmark() {
    echo -e "${BLUE}🏁 Running M4 performance benchmark...${NC}"
    echo ""
    
    # Build benchmark
    echo "📦 Building project..."
    START_TIME=$(date +%s)
    npm run build:m4 > /dev/null 2>&1
    BUILD_TIME=$(($(date +%s) - START_TIME))
    echo "   Build time: ${BUILD_TIME}s"
    
    # Memory usage benchmark
    echo "💾 Memory usage:"
    ps aux | grep -E '(next|node)' | grep -v grep | awk '{sum+=$6} END {print "   Total Node.js memory: " int(sum/1024) "MB"}'
    
    # CPU benchmark
    echo "⚡ CPU performance:"
    sysctl -n hw.ncpu | xargs echo "   CPU cores:"
    
    echo ""
    echo -e "${GREEN}✅ Benchmark complete${NC}"
}

# Function: Generate optimization report
generate_report() {
    echo -e "${BLUE}📊 Generating optimization report...${NC}"
    
    REPORT_FILE="$PROJECT_DIR/m4-optimization-report-$(date +%Y%m%d-%H%M%S).txt"
    
    {
        echo "M4 Mac Optimization Report"
        echo "Generated: $(date)"
        echo "Machine: $MACHINE_NAME"
        echo "Project: Amplified Classics"
        echo ""
        echo "System Information:"
        echo "  Model: $(sysctl -n hw.model)"
        echo "  CPU: $(sysctl -n machdep.cpu.brand_string)"
        echo "  RAM: $(sysctl -n hw.memsize | awk '{print int($1/1024/1024/1024)}')GB"
        echo "  Architecture: $(uname -m)"
        echo ""
        echo "Performance Metrics:"
        echo "  CPU Usage: $(top -l 1 | grep "CPU usage" | awk '{print $3}')"
        echo "  Memory Pressure: $(memory_pressure | grep "System-wide memory free percentage" | awk '{print $5}')"
        echo ""
        echo "Node.js Processes:"
        ps aux | grep -E '(next|node)' | grep -v grep
        echo ""
        echo "Git Status:"
        git status --porcelain
        echo ""
        echo "Optimization Level: $OPTIMIZATION_LEVEL"
    } > "$REPORT_FILE"
    
    echo "   Report saved to: $REPORT_FILE"
    echo -e "${GREEN}   ✅ Report generated${NC}"
}

# Main menu
show_menu() {
    echo ""
    echo -e "${CYAN}🎯 M4 Optimization Menu${NC}"
    echo "1. Show Performance Status"
    echo "2. Optimize Memory"
    echo "3. Optimize CPU"
    echo "4. Optimize Network"
    echo "5. Optimize Development Environment"
    echo "6. Auto-Optimize (Continuous)"
    echo "7. Run Performance Benchmark"
    echo "8. Generate Optimization Report"
    echo "9. Exit"
    echo ""
    read -p "Choose an option (1-9): " choice
}

# Main script
cd "$PROJECT_DIR" || exit 1

# Check if running with arguments
if [ $# -gt 0 ]; then
    case "$1" in
        "status")
            show_performance
            ;;
        "memory")
            optimize_memory
            ;;
        "cpu")
            optimize_cpu
            ;;
        "network")
            optimize_network
            ;;
        "dev")
            optimize_dev_env
            ;;
        "auto")
            auto_optimize
            ;;
        "benchmark")
            benchmark
            ;;
        "report")
            generate_report
            ;;
        "all")
            optimize_memory
            optimize_cpu
            optimize_network
            optimize_dev_env
            ;;
        *)
            echo "Usage: $0 {status|memory|cpu|network|dev|auto|benchmark|report|all}"
            exit 1
            ;;
    esac
else
    # Interactive mode
    while true; do
        show_menu
        case $choice in
            1)
                show_performance
                ;;
            2)
                optimize_memory
                ;;
            3)
                optimize_cpu
                ;;
            4)
                optimize_network
                ;;
            5)
                optimize_dev_env
                ;;
            6)
                auto_optimize
                ;;
            7)
                benchmark
                ;;
            8)
                generate_report
                ;;
            9)
                echo -e "${GREEN}👋 Goodbye!${NC}"
                exit 0
                ;;
            *)
                echo -e "${RED}❌ Invalid option. Please choose 1-9.${NC}"
                ;;
        esac
        echo ""
        read -p "Press Enter to continue..."
    done
fi
