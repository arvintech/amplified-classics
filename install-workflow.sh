#!/bin/bash

# Amplified Classics - Multi-Machine Workflow Installer
# Run this script on each of your machines to set up the workflow tools
#
# Usage: curl -fsSL [URL] | bash
# Or: bash install-workflow.sh

echo "╔══════════════════════════════════════════════════════════╗"
echo "║  Amplified Classics - Multi-Machine Workflow Installer  ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Check if we're in the project directory
if [ ! -f "package.json" ] || ! grep -q "amplified-classics" package.json 2>/dev/null; then
    echo -e "${YELLOW}⚠️  Not in amplified-classics directory${NC}"
    echo "Please run this from: ~/Documents/GitHub/amplified-classics"
    echo ""
    read -p "Continue anyway? (y/N): " continue
    if [[ ! $continue =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo -e "${GREEN}🚀 Installing workflow scripts...${NC}"
echo ""

# Create sync-amplified.sh
echo "📝 Creating ~/sync-amplified.sh..."
cat > ~/sync-amplified.sh << 'SYNCEOF'
#!/bin/bash

# Amplified Classics - Smart Sync Script
# Usage: ./sync-amplified.sh [start|end|status]

PROJECT_DIR="$HOME/Documents/GitHub/amplified-classics"
MACHINE_NAME=$(hostname)

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

cd "$PROJECT_DIR" || exit 1

# Function: Start work session
start_session() {
    echo -e "${GREEN}🚀 Starting work session on $MACHINE_NAME${NC}"
    echo ""
    
    # Pull latest changes
    echo "📥 Pulling latest changes..."
    if git pull origin main; then
        echo -e "${GREEN}✅ Successfully synced with remote${NC}"
    else
        echo -e "${RED}❌ Failed to pull. Check your connection.${NC}"
        exit 1
    fi
    
    # Check for updates
    COMMITS_BEHIND=$(git rev-list HEAD..origin/main --count 2>/dev/null)
    if [ "$COMMITS_BEHIND" -gt 0 ]; then
        echo -e "${YELLOW}⚠️  You were $COMMITS_BEHIND commits behind${NC}"
    fi
    
    # Show recent activity
    echo ""
    echo "📊 Recent commits:"
    git log --oneline -3 --color
    
    echo ""
    echo -e "${GREEN}✨ Ready to work! Run: npm run dev${NC}"
    echo -e "${GREEN}🚀 For M4 optimization: npm run dev:m4${NC}"
}

# Function: End work session
end_session() {
    echo -e "${GREEN}💾 Ending work session on $MACHINE_NAME${NC}"
    echo ""
    
    # Check for changes
    if [[ -z $(git status -s) ]]; then
        echo "ℹ️  No changes to commit"
        exit 0
    fi
    
    # Show what changed
    echo "📝 Changed files:"
    git status -s
    echo ""
    
    # Get commit message
    read -p "Commit message: " COMMIT_MSG
    
    if [ -z "$COMMIT_MSG" ]; then
        echo -e "${RED}❌ Commit message required${NC}"
        exit 1
    fi
    
    # Add and commit
    git add .
    git commit -m "$COMMIT_MSG ($MACHINE_NAME)"
    
    # Pull before push (safety)
    echo ""
    echo "🔄 Checking for remote changes..."
    git pull origin main
    
    # Push
    echo "📤 Pushing to GitHub..."
    if git push origin main; then
        echo -e "${GREEN}✅ Successfully pushed changes${NC}"
        echo ""
        echo "🌐 Deploying to Vercel..."
        echo "   Check: https://vercel.com/dashboard"
    else
        echo -e "${RED}❌ Failed to push. Resolve conflicts and try again.${NC}"
        exit 1
    fi
}

# Function: Show status
show_status() {
    echo -e "${GREEN}📊 Repository Status${NC}"
    echo ""
    echo "🖥️  Machine: $MACHINE_NAME"
    echo "📁 Location: $PROJECT_DIR"
    echo ""
    
    # Branch info
    BRANCH=$(git branch --show-current)
    echo "🌿 Branch: $BRANCH"
    
    # Local changes
    if [[ -n $(git status -s) ]]; then
        echo -e "${YELLOW}⚠️  Uncommitted changes:${NC}"
        git status -s
    else
        echo -e "${GREEN}✅ Working directory clean${NC}"
    fi
    
    echo ""
    
    # Remote status
    git fetch origin 2>/dev/null
    COMMITS_AHEAD=$(git rev-list origin/main..HEAD --count 2>/dev/null)
    COMMITS_BEHIND=$(git rev-list HEAD..origin/main --count 2>/dev/null)
    
    if [ "$COMMITS_AHEAD" -gt 0 ]; then
        echo -e "${YELLOW}⬆️  You are $COMMITS_AHEAD commits ahead (need to push)${NC}"
    fi
    
    if [ "$COMMITS_BEHIND" -gt 0 ]; then
        echo -e "${YELLOW}⬇️  You are $COMMITS_BEHIND commits behind (need to pull)${NC}"
    fi
    
    if [ "$COMMITS_AHEAD" -eq 0 ] && [ "$COMMITS_BEHIND" -eq 0 ]; then
        echo -e "${GREEN}✅ Fully synced with remote${NC}"
    fi
    
    echo ""
    echo "📜 Last 3 commits:"
    git log --oneline -3 --color
}

# Main script
case "$1" in
    start)
        start_session
        ;;
    end)
        end_session
        ;;
    status)
        show_status
        ;;
    *)
        echo "Usage: $0 {start|end|status}"
        echo ""
        echo "  start   - Pull latest changes and prepare for work"
        echo "  end     - Commit and push your changes"
        echo "  status  - Show repository status and sync state"
        exit 1
        ;;
esac
SYNCEOF

# Create quick-commit.sh
echo "📝 Creating ~/quick-commit.sh..."
cat > ~/quick-commit.sh << 'QUICKEOF'
#!/bin/bash

# Quick commit and push
# Usage: ./quick-commit.sh "Your commit message"

PROJECT_DIR="$HOME/Documents/GitHub/amplified-classics"
cd "$PROJECT_DIR" || exit 1

if [ -z "$1" ]; then
    echo "❌ Error: Commit message required"
    echo "Usage: ./quick-commit.sh \"Your message\""
    exit 1
fi

MACHINE_NAME=$(hostname)
COMMIT_MSG="$1 ($MACHINE_NAME)"

echo "📝 Committing: $COMMIT_MSG"
git add .
git commit -m "$COMMIT_MSG"

echo "🔄 Syncing with remote..."
git pull origin main

echo "📤 Pushing..."
git push origin main

echo "✅ Done!"
QUICKEOF

# Create resolve-conflict.sh
echo "📝 Creating ~/resolve-conflict.sh..."
cat > ~/resolve-conflict.sh << 'RESOLVEEOF'
#!/bin/bash

# Conflict Resolution Helper
PROJECT_DIR="$HOME/Documents/GitHub/amplified-classics"
cd "$PROJECT_DIR" || exit 1

echo "🔍 Checking for conflicts..."

# Check if in conflict state
if git ls-files -u | grep -q .; then
    echo "⚠️  Conflicts found in:"
    git diff --name-only --diff-filter=U
    echo ""
    echo "📝 Steps to resolve:"
    echo "1. Open conflicted files in your editor"
    echo "2. Look for <<<<<<< and >>>>>>> markers"
    echo "3. Keep the changes you want"
    echo "4. Remove conflict markers"
    echo "5. Run: git add ."
    echo "6. Run: git commit -m 'Resolve merge conflict'"
    echo "7. Run: git push origin main"
else
    echo "✅ No conflicts detected"
    
    # Check for uncommitted changes
    if [[ -n $(git status -s) ]]; then
        echo ""
        echo "ℹ️  You have uncommitted changes:"
        git status -s
    fi
fi
RESOLVEEOF

# Make scripts executable
echo "🔐 Making scripts executable..."
chmod +x ~/sync-amplified.sh
chmod +x ~/quick-commit.sh
chmod +x ~/resolve-conflict.sh

# Install git aliases
echo "⚙️  Installing Git aliases..."
git config --global alias.sync '!git pull origin main && git push origin main'
git config --global alias.st 'status'
git config --global alias.co 'checkout'
git config --global alias.cm 'commit -m'
git config --global alias.recent 'log --oneline -5'
git config --global alias.undo 'reset --soft HEAD~1'
git config --global alias.save '!git add . && git commit -m "WIP: Saving work"'
git config --global alias.unstage 'restore --staged .'

echo ""
echo -e "${GREEN}✅ Installation Complete!${NC}"
echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║                  Installation Summary                  ║"
echo "╠════════════════════════════════════════════════════════╣"
echo "║                                                        ║"
echo "║  ✓ ~/sync-amplified.sh        (Main sync tool)        ║"
echo "║  ✓ ~/quick-commit.sh          (Quick commits)         ║"
echo "║  ✓ ~/resolve-conflict.sh      (Conflict helper)       ║"
echo "║  ✓ Git aliases                (Shortcuts)             ║"
echo "║                                                        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}🖥️  Machine: $(hostname)${NC}"
echo ""
echo "📚 Quick Start:"
echo "   ~/sync-amplified.sh start    # Before working"
echo "   ~/sync-amplified.sh end      # After working"
echo "   ~/sync-amplified.sh status   # Check sync status"
echo ""
echo "🧪 Test it now:"
echo "   cd ~/Documents/GitHub/amplified-classics"
echo "   ~/sync-amplified.sh status"
echo ""
echo -e "${GREEN}✨ Ready to work across all your machines!${NC}"

