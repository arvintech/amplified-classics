# 🖥️ Amplified Classics - 3-Machine Workflow Cheat Sheet

## 🚀 Quick Start Commands

### Starting Work Session (ALWAYS DO THIS FIRST)
```bash
cd ~/Documents/GitHub/amplified-classics
git pull origin main
npm run dev
```

**Or use the automation script:**
```bash
~/sync-amplified.sh start
npm run dev
```

### Ending Work Session (ALWAYS DO THIS LAST)
```bash
git add .
git commit -m "Your message here"
git pull origin main
git push origin main
```

**Or use the automation script:**
```bash
~/sync-amplified.sh end
```

---

## ⚡ Essential Commands

| Task | Command |
|------|---------|
| Check status | `git status` |
| See what changed | `git diff` |
| View recent commits | `git log --oneline -5` |
| Check sync status | `~/sync-amplified.sh status` |
| Quick commit + push | `~/quick-commit.sh "message"` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |
| Discard local changes | `git restore .` |
| Check which machine | `hostname` |

---

## 📝 Commit Message Templates

```bash
# Chapter work
git commit -m "Add Jane Eyre Chapter 15"
git commit -m "WIP: Pride and Prejudice Ch 3 - 50% complete"
git commit -m "Fix: Chapter 10 quote analysis typo"

# Template updates
git commit -m "Update ChapterAllTemplate: Add historicalContext section"

# Book setup
git commit -m "Setup: Add Pride and Prejudice structure and Ch 1"

# Multiple changes
git commit -m "Add chapters 20-22 to Jane Eyre"
```

---

## 🚨 Troubleshooting

### Problem: "Updates were rejected"
```bash
git pull origin main
# Fix any conflicts in files (look for <<<<<<< markers)
git add .
git commit -m "Merge changes from other machine"
git push origin main
```

### Problem: Forgot to pull before editing
```bash
git stash                 # Save your work temporarily
git pull origin main      # Get latest
git stash pop            # Reapply your work
# Fix any conflicts
git add .
git commit -m "Your message"
git push origin main
```

### Problem: Need to switch machines mid-chapter
```bash
# Current machine
git add .
git commit -m "WIP: Chapter X - Partial work"
git push origin main

# New machine
git pull origin main
# Continue working on same file
```

### Problem: Check for conflicts
```bash
~/resolve-conflict.sh
```

---

## 🎯 Best Practices

### ✅ DO
- Pull before EVERY work session
- Commit small, logical changes
- Push at end of EVERY session
- Use descriptive commit messages
- Include machine name in WIP commits
- Use the sync scripts for safety

### ❌ DON'T
- Edit same file on 2 machines simultaneously
- Leave uncommitted changes when switching
- Work for days without pushing
- Force push (git push -f) unless you know why
- Skip the pull before starting work

---

## 🔄 Daily Workflow Pattern

```
Morning (Machine A):
  └─> ~/sync-amplified.sh start
  └─> npm run dev
  └─> Work 2-3 hours
  └─> ~/sync-amplified.sh end

Afternoon (Machine B):
  └─> ~/sync-amplified.sh start
  └─> npm run dev
  └─> Work 2-3 hours  
  └─> ~/sync-amplified.sh end

Evening (Machine C):
  └─> ~/sync-amplified.sh start
  └─> npm run dev
  └─> Work 2-3 hours
  └─> ~/sync-amplified.sh end
```

---

## 🆘 Emergency Contacts

- **Check GitHub:** https://github.com/[your-username]/amplified-classics
- **Check Vercel:** https://vercel.com/dashboard
- **Git Help:** `git --help`
- **Undo Guide:** https://ohshitgit.com/

---

## 📱 Automation Scripts Installed

| Script | Purpose | Usage |
|--------|---------|-------|
| `~/sync-amplified.sh start` | Pull latest and show status | Run before starting work |
| `~/sync-amplified.sh end` | Commit and push with prompts | Run when finishing work |
| `~/sync-amplified.sh status` | Check sync status | Anytime you want to check |
| `~/quick-commit.sh "msg"` | Fast commit and push | Quick saves |
| `~/resolve-conflict.sh` | Check for merge conflicts | When conflicts occur |
| `~/setup-git-aliases.sh` | Install helpful aliases | Run once per machine |

---

## 🎓 Git Aliases Available

After running `~/setup-git-aliases.sh`, you can use:

```bash
git sync      # Pull and push in one command
git st        # Status
git cm "msg"  # Commit with message
git recent    # Show last 5 commits
git save      # Quick WIP commit
git undo      # Undo last commit (keeps changes)
git unstage   # Unstage files
```

---

## 📊 Understanding Sync Status

When you run `~/sync-amplified.sh status`, you'll see:

- **✅ Fully synced** - All machines have same code
- **⬆️ X commits ahead** - You need to push
- **⬇️ X commits behind** - You need to pull
- **⚠️ Uncommitted changes** - You have unsaved work

---

## 🎯 Recommended Workflow for Chat Sessions

Since Cursor chat history doesn't sync between machines:

### When Starting New Book:
```bash
# Machine A
~/sync-amplified.sh start
# New chat: "Create new book: Pride and Prejudice"
# Do work, commit, push

# Machine B (later)
~/sync-amplified.sh start
# New chat: "Continue Pride and Prejudice - Add Chapter 2"
# AI can see the files, continue work
```

### For Chapter Work:
```bash
# Use complete prompts that include context
"Create Chapter 15 for Jane Eyre using ChapterAllTemplate.
What happens: [summary]
Reference chapter-14.ts for style consistency."
```

---

## 💡 Pro Tips

1. **Always check status before starting**: `~/sync-amplified.sh status`
2. **Commit WIP work before switching machines**: Don't leave work uncommitted
3. **Use branches for experiments**: `git checkout -b experiment/new-idea`
4. **Check Vercel after pushing**: Verify deployment succeeded
5. **Pull multiple times a day**: Even if you're not switching machines

---

## 🔒 Safety Features Built In

The `sync-amplified.sh` script includes:
- ✅ Automatic pull before you start
- ✅ Shows you what changed
- ✅ Checks for conflicts before pushing
- ✅ Pulls again before pushing (safety)
- ✅ Shows sync status with remote
- ✅ Machine name in commits for tracking

---

**Print this and keep it visible!** 🖨️

**Quick Start After Setup:**
```bash
~/sync-amplified.sh start    # Beginning of session
~/sync-amplified.sh end      # End of session
```

That's all you need to remember!

