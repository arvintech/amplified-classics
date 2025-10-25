# 🖥️ 3-Machine Quick Start Guide

**Your Setup:** Machine A + Machine B + Machine C  
**Goal:** Keep all 3 machines perfectly synchronized  
**Time to First Sync:** 30 minutes  
**Daily Sync Time:** 2 minutes per session

---

## 🎯 The Big Picture

```
┌─────────────────────────────────────────────────────────┐
│                   Your 3-Machine Setup                   │
└─────────────────────────────────────────────────────────┘

    Machine A              Machine B              Machine C
  (Jane Eyre)       (Pride & Prejudice)       (Next Book)
       │                    │                      │
       │                    │                      │
       └────────────────────┼──────────────────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │   GitHub     │  ← Central Hub
                    │  (Main Repo) │     (Source of Truth)
                    └──────────────┘
                            │
       ┌────────────────────┼──────────────────────┐
       │                    │                      │
       ▼                    ▼                      ▼
    Machine A          Machine B              Machine C
   PULLS latest       PULLS latest          PULLS latest
```

**Key Insight:** All machines sync THROUGH GitHub, never directly to each other.

---

## 📋 Your First Sync (Do This Once)

### Machine A (You're here now)
```bash
# 1. Commit your work
git add app/books/jane-eyre/
git commit -m "Add Jane Eyre chapters 16-38"

# 2. Commit docs
git add *.md app/components/ app/page.tsx
git commit -m "Update docs and components"

# 3. Push everything
git push origin main
```

✅ **Machine A is done!**

---

### Machine B (Go there next)
```bash
# 1. Pull Machine A's work
git pull origin main

# 2. Commit Pride & Prejudice
git add app/books/pride-and-prejudice/
git commit -m "Update P&P to new format"

# 3. Push it
git push origin main
```

✅ **Machine B is done!**

---

### Machine C (Then go there)
```bash
# 1. Save any local work
git add .
git commit -m "Machine C local work"

# 2. Pull everything from A and B
git pull origin main

# 3. Push if you had local commits
git push origin main
```

✅ **Machine C is done!**

---

### Back to Machine A (Final step)
```bash
# Pull P&P updates from B and Machine C changes
git pull origin main

# Verify
git status  # Should show "working tree clean"
```

✅ **ALL 3 MACHINES SYNCED!** 🎉

---

## 🔄 Daily Workflow (Every Machine, Every Day)

### When You Start Work
```bash
cd ~/Documents/GitHub/amplified-classics
git pull origin main
npm run dev
```

### When You Finish Work
```bash
git add [files you changed]
git commit -m "Description of work"
git push origin main
```

**That's it!** Do this on every machine, every session.

---

## 🎯 Work Distribution Strategy

To avoid conflicts, assign books to machines:

```
┌──────────────────────────────────────────────────────────┐
│                 Machine Assignments                       │
├──────────────────────────────────────────────────────────┤
│  Machine A:  Jane Eyre (PRIMARY)                         │
│  Machine B:  Pride and Prejudice (PRIMARY)               │
│  Machine C:  Next book OR documentation                  │
└──────────────────────────────────────────────────────────┘
```

### The Rules
1. **Each machine "owns" specific books**
2. **Always pull before working on ANY book** (even your own)
3. **If you need to work on another machine's book:**
   - Pull latest first
   - Do your work
   - Push immediately
   - Let the "owner" know
4. **Push at the end of every session** (no exceptions!)

---

## 🚦 Traffic Light Status

### 🟢 GREEN - Safe to Work
- You pulled today
- No uncommitted changes on other machines
- Your working tree is clean
- Go ahead and work!

### 🟡 YELLOW - Pull First
- Haven't pulled today
- Not sure if others pushed
- **Action:** Run `git pull origin main`

### 🔴 RED - Stop and Sync
- You have uncommitted work on multiple machines
- Someone pushed while you were working
- Merge conflicts detected
- **Action:** Follow `SYNC_NOW_CHECKLIST.md`

---

## 📊 Visual Sync Flow

```
Start Session
     │
     ▼
  git pull ──────┐
     │           │  (Gets latest from
     │           │   all other machines)
     ▼           │
  npm run dev    │
     │           │
     ▼           │
  Do your work   │
     │           │
     ▼           │
  git add .      │
     │           │
     ▼           │
  git commit     │
     │           │
     ▼           │
  git push ──────┘
     │           (Shares your work
     │            with other machines)
     ▼
End Session
```

---

## 🎯 Real-World Example

### Monday Morning (Machine A)
```bash
~/sync-amplified.sh start
# Work on Jane Eyre Chapter 20
git add app/books/jane-eyre/chapters/chapter-20.ts
git commit -m "Add Jane Eyre Chapter 20"
~/sync-amplified.sh end
```

### Monday Afternoon (Machine B)
```bash
~/sync-amplified.sh start
# Automatically gets Jane Eyre Chapter 20!
# Work on Pride & Prejudice Chapter 10
git add app/books/pride-and-prejudice/chapters/chapter-10.ts
git commit -m "Add P&P Chapter 10"
~/sync-amplified.sh end
```

### Monday Evening (Machine C)
```bash
~/sync-amplified.sh start
# Automatically gets BOTH updates!
# Work on documentation
git add TEACHING_GUIDE.md
git commit -m "Add teaching guide"
~/sync-amplified.sh end
```

### Tuesday Morning (Machine A)
```bash
~/sync-amplified.sh start
# Automatically gets P&P Ch 10 AND teaching guide!
# Continue with Jane Eyre Chapter 21
```

**See how it works?** Each machine automatically gets everyone else's work!

---

## ⚡ Ultra-Quick Commands

### Starting
```bash
~/sync-amplified.sh start && npm run dev
```

### Finishing
```bash
~/sync-amplified.sh end
```

### Status Check
```bash
git status && git log --oneline -5
```

### See What's on GitHub (that you don't have)
```bash
git fetch && git log HEAD..origin/main --oneline
```

### See What You Have (that's not on GitHub)
```bash
git log origin/main..HEAD --oneline
```

---

## 🎓 Common Scenarios

### Scenario 1: Switching Machines Mid-Chapter
```bash
# Machine A
git add .
git commit -m "WIP: Jane Eyre Ch 20 - 50% complete [Machine-A]"
git push origin main

# Switch to Machine B
git pull origin main
# Continue working on the SAME file
# Commit when done
```

### Scenario 2: Forgot to Pull Before Starting
```bash
# You worked for 2 hours, now want to push but...
git push  # Rejected! Someone else pushed first

# Solution:
git stash              # Save your work temporarily
git pull origin main   # Get their changes
git stash pop          # Reapply your work
# Fix any conflicts
git add .
git commit -m "Your work"
git push origin main
```

### Scenario 3: Need to Work on Another Machine's Book
```bash
# Machine A wants to work on P&P (Machine B's book)
git pull origin main        # Get latest P&P version
# Edit P&P files
git add app/books/pride-and-prejudice/
git commit -m "Fix typo in P&P Ch 5 [Machine-A]"
git push origin main        # Push immediately
# Let Machine B know you made a change
```

### Scenario 4: All 3 Machines Out of Sync
```bash
# Just follow the First Sync process again:
# 1. Machine A pushes
# 2. Machine B pulls, then pushes
# 3. Machine C pulls, then pushes
# 4. Machine A pulls
# Done!
```

---

## 🛡️ Safety Net

### Before You Push
```bash
# Check what you're about to push
git diff origin/main..HEAD

# Make sure you meant to change those files
# If not:
git reset HEAD [filename]  # Unstage
git restore [filename]     # Undo changes
```

### If You Pushed Wrong Thing
```bash
# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Fix the issue

# Commit correctly
git add [correct files]
git commit -m "Correct message"
git push origin main
```

---

## 📝 Commit Message Patterns

### Good Examples
```bash
git commit -m "Add Jane Eyre Chapter 20 with full IA analysis [Machine-A]"
git commit -m "Update P&P config: Add chapters 10-15 metadata [Machine-B]"
git commit -m "WIP: Working on Chapter 22 - 60% done [Machine-C]"
git commit -m "Fix: Typo in Chapter 10 quote [Machine-A]"
git commit -m "Docs: Add teaching guide for educators [Machine-C]"
```

### Bad Examples
```bash
git commit -m "Updates"           # Too vague
git commit -m "Fix stuff"         # What stuff?
git commit -m "asdf"              # Meaningless
git commit -m "Chapter 20"        # Which book? What about it?
```

---

## 🎯 Success Checklist

After your first sync, verify on all 3 machines:

- [ ] `git status` shows "working tree clean"
- [ ] `git log --oneline -5` shows same commits
- [ ] Jane Eyre has chapters 1-38
- [ ] Pride & Prejudice uses NEW format (has `chapters/` folder)
- [ ] `npm run dev` works with no errors
- [ ] All books load in browser
- [ ] No TypeScript errors

If all checked ✅ → You're fully synced!

---

## 🆘 Emergency Commands

### "I messed up, go back!"
```bash
git reset --hard HEAD~1  # Go back 1 commit (DANGER: loses changes)
```

### "Save my work but undo commit"
```bash
git reset --soft HEAD~1  # Undo commit, keep changes
```

### "Discard ALL local changes"
```bash
git restore .            # DANGER: loses all uncommitted work
```

### "I need a clean slate"
```bash
git fetch origin
git reset --hard origin/main  # DANGER: makes your machine match GitHub exactly
```

---

## 📞 Quick Reference Card

```
┌────────────────────────────────────────────────┐
│           KEEP THIS VISIBLE!                   │
├────────────────────────────────────────────────┤
│                                                │
│  START:  git pull origin main                  │
│          npm run dev                           │
│                                                │
│  END:    git add [files]                       │
│          git commit -m "message"               │
│          git push origin main                  │
│                                                │
│  CHECK:  git status                            │
│          git log --oneline -5                  │
│                                                │
│  HELP:   See SYNC_NOW_CHECKLIST.md             │
│                                                │
└────────────────────────────────────────────────┘
```

---

## 🎉 You're Ready!

### Next Steps

1. **Right now:** Follow "Your First Sync" above
2. **Tomorrow:** Use "Daily Workflow" pattern
3. **This week:** Build the pull/push habit
4. **After 1 week:** It becomes automatic!

### Documentation

- **Quick start:** This file (bookmark it!)
- **Step-by-step:** `SYNC_NOW_CHECKLIST.md`
- **Deep dive:** `GIT_SYNC_PROCESS.md`
- **Visual:** `MACHINE_SYNC_VISUAL.md`
- **Daily use:** `MULTI_MACHINE_WORKFLOW.md`

### Support

- Check `SYNC_DOCUMENTATION_INDEX.md` for all guides
- Search docs for your specific error message
- Follow the troubleshooting sections
- Use the emergency commands above

---

## 💡 Final Pro Tips

1. **Pull before starting** - Make it muscle memory
2. **Push before finishing** - Never leave uncommitted work
3. **Commit frequently** - Small commits = fewer conflicts
4. **Use descriptive messages** - Your future self will thank you
5. **Assign books to machines** - Reduces conflicts by 95%
6. **Check status regularly** - `git status` is your friend
7. **Don't force push** - Unless you really know what you're doing
8. **Keep docs open** - Reference while working

---

## 🚀 The Golden Rule

```
╔═══════════════════════════════════════════╗
║                                           ║
║   PULL AT START                           ║
║   PUSH AT END                             ║
║                                           ║
║   Follow this and 95% of problems         ║
║   disappear completely!                   ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

**Ready?** Let's sync your 3 machines! 🎯

Start with Phase 1 in the checklist above, or jump to [`SYNC_NOW_CHECKLIST.md`](./SYNC_NOW_CHECKLIST.md) for the complete step-by-step guide.

**Last Updated:** October 25, 2025  
**For:** 3-machine Amplified Classics workflow


