#!/bin/bash

# 🚀 Amplified Classics - Clone All Repositories Script
# Optimized for M4 Mac workflow across multiple machines

echo "╔══════════════════════════════════════════════════════════╗"
echo "║        Amplified Classics - Multi-Repo Clone Script      ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Configuration
BASE_DIR="$HOME/Documents/GitHub"
MAIN_REPO="amplified-classics"
GITHUB_USER="arvintech"  # Update this with your GitHub username

# Repositories to clone (add more as needed)
REPOS=(
    "amplified-classics"
    # Add other repositories here as you create them
    # "amplified-classics-blog"
    # "amplified-classics-api"
    # "amplified-classics-docs"
)

# Function: Check if Git is configured
check_git_config() {
    echo -e "${BLUE}🔧 Checking Git configuration...${NC}"
    
    if ! git config --global user.name > /dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  Git user.name not configured${NC}"
        read -p "Enter your Git username: " GIT_USERNAME
        git config --global user.name "$GIT_USERNAME"
    fi
    
    if ! git config --global user.email > /dev/null 2>&1; then
        echo -e "${YELLOW}⚠️  Git user.email not configured${NC}"
        read -p "Enter your Git email: " GIT_EMAIL
        git config --global user.email "$GIT_EMAIL"
    fi
    
    echo -e "${GREEN}✅ Git configuration verified${NC}"
}

# Function: Create base directory structure
setup_directories() {
    echo -e "${BLUE}📁 Setting up directory structure...${NC}"
    
    # Create GitHub directory if it doesn't exist
    if [ ! -d "$BASE_DIR" ]; then
        mkdir -p "$BASE_DIR"
        echo "   Created $BASE_DIR"
    fi
    
    # Create project-specific directories
    mkdir -p "$BASE_DIR/amplified-classics"
    mkdir -p "$BASE_DIR/amplified-classics-backup"
    
    echo -e "${GREEN}✅ Directory structure ready${NC}"
}

# Function: Clone main repository
clone_main_repo() {
    echo -e "${BLUE}📦 Cloning main repository...${NC}"
    
    cd "$BASE_DIR" || exit 1
    
    if [ -d "$MAIN_REPO" ]; then
        echo "   Main repository already exists"
        cd "$MAIN_REPO"
        
        # Check if it's a git repository
        if [ -d ".git" ]; then
            echo "   Updating existing repository..."
            git pull origin main
        else
            echo -e "${RED}❌ Directory exists but is not a git repository${NC}"
            echo "   Please remove the directory and run this script again"
            exit 1
        fi
    else
        echo "   Cloning main repository..."
        git clone "https://github.com/$GITHUB_USER/$MAIN_REPO.git"
        cd "$MAIN_REPO"
    fi
    
    echo -e "${GREEN}✅ Main repository ready${NC}"
}

# Function: Install dependencies
install_dependencies() {
    echo -e "${BLUE}📦 Installing dependencies...${NC}"
    
    # Check if package.json exists
    if [ ! -f "package.json" ]; then
        echo -e "${RED}❌ package.json not found${NC}"
        return 1
    fi
    
    # Install dependencies
    echo "   Installing npm dependencies..."
    npm install
    
    # Install M4 optimizations
    if [ -f "setup-mac-m4.sh" ]; then
        echo "   Running M4 optimization setup..."
        chmod +x setup-mac-m4.sh
        ./setup-mac-m4.sh
    fi
    
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Function: Setup M4 optimizations
setup_m4_optimizations() {
    echo -e "${BLUE}⚡ Setting up M4 optimizations...${NC}"
    
    # Run M4 setup script
    if [ -f "setup-mac-m4.sh" ]; then
        chmod +x setup-mac-m4.sh
        ./setup-mac-m4.sh
    else
        echo -e "${YELLOW}⚠️  M4 setup script not found${NC}"
    fi
    
    # Run optimization script
    if [ -f "optimize-for-m4.sh" ]; then
        chmod +x optimize-for-m4.sh
        echo "   M4 optimization script ready"
    fi
    
    echo -e "${GREEN}✅ M4 optimizations configured${NC}"
}

# Function: Setup multimachine workflow
setup_multimachine_workflow() {
    echo -e "${BLUE}🔄 Setting up multimachine workflow...${NC}"
    
    # Run multimachine workflow installer
    if [ -f "install-workflow.sh" ]; then
        chmod +x install-workflow.sh
        ./install-workflow.sh
    else
        echo -e "${YELLOW}⚠️  Multimachine workflow installer not found${NC}"
    fi
    
    echo -e "${GREEN}✅ Multimachine workflow configured${NC}"
}

# Function: Verify installation
verify_installation() {
    echo -e "${BLUE}🔍 Verifying installation...${NC}"
    
    # Check if main files exist
    local files_to_check=(
        "package.json"
        "next.config.js"
        "app/page.tsx"
        "README.md"
    )
    
    for file in "${files_to_check[@]}"; do
        if [ -f "$file" ]; then
            echo "   ✅ $file"
        else
            echo "   ❌ $file (missing)"
        fi
    done
    
    # Check if scripts are executable
    local scripts_to_check=(
        "setup-mac-m4.sh"
        "optimize-for-m4.sh"
        "install-workflow.sh"
    )
    
    for script in "${scripts_to_check[@]}"; do
        if [ -f "$script" ]; then
            if [ -x "$script" ]; then
                echo "   ✅ $script (executable)"
            else
                echo "   ⚠️  $script (not executable)"
                chmod +x "$script"
            fi
        else
            echo "   ❌ $script (missing)"
        fi
    done
    
    # Check Git status
    echo ""
    echo "📊 Git Status:"
    git status --porcelain | head -5
    
    echo ""
    echo "🌿 Current Branch:"
    git branch --show-current
    
    echo ""
    echo "📜 Recent Commits:"
    git log --oneline -3
    
    echo -e "${GREEN}✅ Installation verification complete${NC}"
}

# Function: Show next steps
show_next_steps() {
    echo ""
    echo -e "${GREEN}🎉 Installation Complete!${NC}"
    echo ""
    echo "╔════════════════════════════════════════════════════════╗"
    echo "║                    Next Steps                         ║"
    echo "╠════════════════════════════════════════════════════════╣"
    echo "║                                                        ║"
    echo "║  1. Start development server:                          ║"
    echo "║     npm run dev:m4                                    ║"
    echo "║                                                        ║"
    echo "║  2. Monitor performance:                              ║"
    echo "║     ~/monitor-m4.sh                                   ║"
    echo "║                                                        ║"
    echo "║  3. Use multimachine workflow:                        ║"
    echo "║     ~/sync-amplified.sh start                         ║"
    echo "║     ~/sync-amplified.sh end                           ║"
    echo "║                                                        ║"
    echo "║  4. Optimize performance:                             ║"
    echo "║     ./optimize-for-m4.sh                              ║"
    echo "║                                                        ║"
    echo "║  5. Run on other M4 Macs:                             ║"
    echo "║     Copy this script and run it                       ║"
    echo "║                                                        ║"
    echo "╚════════════════════════════════════════════════════════╝"
    echo ""
    echo -e "${BLUE}🖥️  Machine: $(hostname)${NC}"
    echo -e "${BLUE}📁 Location: $BASE_DIR/$MAIN_REPO${NC}"
    echo ""
    echo -e "${YELLOW}💡 Pro Tips:${NC}"
    echo "   • Use 'ac-start' alias to begin work sessions"
    echo "   • Use 'ac-end' alias to end work sessions"
    echo "   • Monitor performance with 'perf-monitor' alias"
    echo "   • Check status with '~/sync-amplified.sh status'"
    echo ""
    echo -e "${GREEN}✨ Ready to amplify classics on your M4 Mac!${NC}"
}

# Function: Clone additional repositories
clone_additional_repos() {
    echo -e "${BLUE}📦 Cloning additional repositories...${NC}"
    
    cd "$BASE_DIR" || exit 1
    
    for repo in "${REPOS[@]}"; do
        if [ "$repo" != "$MAIN_REPO" ]; then
            echo "   Checking $repo..."
            
            if [ -d "$repo" ]; then
                echo "   $repo already exists, updating..."
                cd "$repo"
                git pull origin main
                cd "$BASE_DIR"
            else
                echo "   Cloning $repo..."
                git clone "https://github.com/$GITHUB_USER/$repo.git"
            fi
        fi
    done
    
    echo -e "${GREEN}✅ Additional repositories ready${NC}"
}

# Main execution
main() {
    echo -e "${BLUE}🚀 Starting Amplified Classics setup for M4 Mac...${NC}"
    echo ""
    
    # Check system requirements
    ARCH=$(uname -m)
    if [[ "$ARCH" != "arm64" ]]; then
        echo -e "${RED}❌ This script is optimized for Apple Silicon (M1/M2/M3/M4) Macs${NC}"
        echo "Current architecture: $ARCH"
        exit 1
    fi
    
    # Show system info
    echo -e "${BLUE}🖥️  System Information:${NC}"
    echo "   Model: $(sysctl -n hw.model)"
    echo "   RAM: $(sysctl -n hw.memsize | awk '{print int($1/1024/1024/1024)}')GB"
    echo "   Architecture: $ARCH"
    echo ""
    
    # Run setup steps
    check_git_config
    setup_directories
    clone_main_repo
    install_dependencies
    setup_m4_optimizations
    setup_multimachine_workflow
    clone_additional_repos
    verify_installation
    show_next_steps
}

# Run main function
main "$@"
