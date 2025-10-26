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
