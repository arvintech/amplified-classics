# 🔄 Git Sync Process: Multi-Machine Book Development

## Overview

This guide explains how to sync work done on different machines, particularly when a book (like Pride and Prejudice) was created on **Machine B** and needs to be synced with **Machine A** (current machine).

---

## 📊 Current Situation Analysis

### Your 3-Machine Setup
You have **3 machines** working on Amplified Classics:
- **Machine A** (Current/Primary)
- **Machine B** (Secondary)
- **Machine C** (Tertiary)

### Current State (October 25, 2025)

**Machine A (Current Machine - where you are now):**
- Has Jane Eyre work in progress (chapters 16-38 untracked)
- Has various documentation updates (modified and untracked)
- Is **ahead of origin/main by 5 commits** (needs push)
- Pride and Prejudice exists but in **OLD FORMAT** (static chapter folders)

**Machine B (Other Machine):**
- Created Pride and Prejudice with **NEW FORMAT** (dynamic routing with `/chapters/*.ts` data files)
- Has been working in isolation
- Changes NOT yet in GitHub

**Machine C (Third Machine):**
- Unknown current state
- May have local changes
- May be behind, ahead, or diverged from main

### The Problem
We need to sync all 3 machines so that:
- No work is lost from any machine
- All machines have Jane Eyre chapters 1-38
- All machines have Pride & Prejudice in NEW format
- No merge conflicts occur
- All machines can work independently going forward

---

## 🎯 The Solution: Systematic Git Sync Process (3 Machines)

The strategy for syncing 3 machines:
1. **Machine A** → Push all work to GitHub (becomes source of truth for Jane Eyre)
2. **Machine B** → Pull from GitHub, then push P&P updates (becomes source of truth for P&P)
3. **Machine C** → Pull everything (gets synced with A and B's work)
4. **All Machines** → Final verification pull

This creates a **hub-and-spoke model** with GitHub as the central hub.

```
    Machine A ──┐
                ├──→ GitHub ←──┐
    Machine B ──┘      ↓       │
                       └────→ Machine C
```

### Phase 1: Clean Up Machine A (Current)

**Step 1: Review Current Changes**
```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
git status
```

**Step 2: Commit Jane Eyre Progress**
```bash
# Add all Jane Eyre chapters
git add app/books/jane-eyre/chapters/chapter-*.ts
git add app/books/jane-eyre/about-the-author/
git add app/books/jane-eyre/[chapter]/page.tsx
git add app/books/jane-eyre/config.ts
git add app/books/jane-eyre/page.tsx

# Commit with clear message
git commit -m "Add Jane Eyre chapters 16-38 and about-the-author section"
```

**Step 3: Commit Documentation Updates**
```bash
# Add documentation files
git add AMPLIFIED_CLASSICS_DEEP_EXPLORATION.md
git add COMPLETE_BOOK_TEMPLATE.md
git add EXECUTIVE_SUMMARIES.md
git add SPLASH_PAGE_UPDATE.md
git add THE_AMPLIFIED_CLASSROOM.md
git add WHAT_MAKES_AN_AMPLIFIED_CLASSIC.md

git commit -m "Add project documentation and vision files"
```

**Step 4: Commit Other Changes**
```bash
# Add remaining modified files
git add app/components/Footer.tsx
git add app/page.tsx

git commit -m "Update footer and homepage"
```

**Step 5: Ignore Certain Files**
```bash
# Don't commit dev logs or .cursor directory
echo "dev-output.log" >> .gitignore
echo "dev-server.log" >> .gitignore
echo ".cursor/" >> .gitignore

git add .gitignore
git commit -m "Update gitignore for dev logs and cursor cache"
```

**Step 6: Push Machine A Changes to GitHub**
```bash
# Push all commits to GitHub
git push origin main
```

---

### Phase 2: Sync Machine B

**On Machine B:**

**Step 1: Pull Latest from GitHub**
```bash
cd ~/Documents/GitHub/amplified-classics
git pull origin main
```

This will bring in:
- All Jane Eyre chapters 16-38
- Documentation updates
- Any other changes from Machine A

**Step 2: Verify No Conflicts**
```bash
git status
```

If conflicts occur, see **Conflict Resolution** section below.

**Step 3: Commit Pride and Prejudice Changes**
```bash
# Check what Pride and Prejudice files exist
git status

# Add Pride and Prejudice changes
git add app/books/pride-and-prejudice/

# Commit with descriptive message
git commit -m "Update Pride and Prejudice to new dynamic routing format with chapter data files"
```

**Step 4: Push to GitHub**
```bash
git push origin main
```

---

### Phase 3: Sync Machine C

**On Machine C:**

**Step 1: Check Current Status**
```bash
cd ~/Documents/GitHub/amplified-classics
git status
```

**Step 2: Save Any Local Work**

If Machine C has uncommitted changes:
```bash
# Option A: Commit them
git add .
git commit -m "WIP: Machine C local work"

# Option B: Stash them temporarily
git stash
```

**Step 3: Pull All Updates**
```bash
# This brings in BOTH Jane Eyre AND P&P updates
git pull origin main
```

**Step 4: Resolve Any Conflicts**

If conflicts occur (unlikely if working on different files):
- See "Handling Merge Conflicts" section below

**Step 5: Verify Everything Works**
```bash
npm run dev
# Test both Jane Eyre and Pride & Prejudice
```

**Step 6: Push Any Local Changes**

If you committed or stashed work in Step 2:
```bash
# If you committed
git push origin main

# If you stashed
git stash pop
# Fix any conflicts
git add .
git commit -m "Merge Machine C local work with updates"
git push origin main
```

✅ **SUCCESS!** Machine C is now synced

---

### Phase 4: Final Sync on Machine A

**Back on Machine A:**

**Step 1: Pull All Updates**
```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
git pull origin main
```

This will bring in:
- New Pride and Prejudice structure from Machine B
- Any changes from Machine C
- Everything is now synchronized

**Step 2: Verify the Merge**
```bash
# Check that everything looks good
git log --oneline -10

# Verify Pride and Prejudice structure
ls -la app/books/pride-and-prejudice/
```

**Step 3: Test Locally**
```bash
npm run dev
# Visit http://localhost:3000/books/pride-and-prejudice
```

---

## 🚨 Handling Merge Conflicts

### If Git Shows Conflicts:

**Step 1: Identify Conflicted Files**
```bash
git status
# Look for files marked as "both modified"
```

**Step 2: Open Conflicted Files**
Files will have conflict markers:
```
<<<<<<< HEAD
(Your changes from Machine A)
=======
(Changes from Machine B)
>>>>>>> branch-name
```

**Step 3: Resolve Manually**
- **Option A:** Keep Machine A's version (delete B's section)
- **Option B:** Keep Machine B's version (delete A's section)
- **Option C:** Merge both (combine the best of both)

**Step 4: Mark as Resolved**
```bash
git add path/to/resolved/file.tsx
```

**Step 5: Complete the Merge**
```bash
git commit -m "Merge Pride and Prejudice updates from Machine B"
git push origin main
```

---

## 📋 Standard Operating Procedure (SOP)

### When Starting Work on ANY Machine

```bash
# 1. Navigate to project
cd ~/Documents/GitHub/amplified-classics

# 2. Pull latest changes FIRST
git pull origin main

# 3. Start dev server
npm run dev

# 4. Do your work...
```

### When Finishing Work on ANY Machine

```bash
# 1. Check what changed
git status

# 2. Add files logically (group related changes)
git add app/books/jane-eyre/chapters/chapter-16.ts
git add app/books/jane-eyre/chapters/chapter-17.ts
# ... etc

# 3. Commit with descriptive message
git commit -m "Add Jane Eyre chapters 16-17"

# 4. Pull again (in case someone pushed while you worked)
git pull origin main

# 5. Fix any conflicts if they appear
# (Usually won't happen if working on different chapters/books)

# 6. Push your changes
git push origin main
```

---

## 🎨 Book Structure: Old vs New Format

### Old Format (Static Routes)
```
app/books/pride-and-prejudice/
├── chapter-1/
│   └── page.tsx          # Full chapter component
├── chapter-2/
│   └── page.tsx          # Full chapter component
└── config.ts
```

### New Format (Dynamic Routes) ✅ PREFERRED
```
app/books/pride-and-prejudice/
├── [chapter]/
│   └── page.tsx          # Shared template for all chapters
├── chapters/
│   ├── chapter-1.ts      # Data only
│   ├── chapter-2.ts      # Data only
│   └── ...
└── config.ts
```

**Migration Notes:**
- If Machine B created chapters in new format, keep them
- If Machine A has old format, the new format will overwrite
- Backup old chapters if they contain unique content not in data files

---

## 🔍 Checking Sync Status

### See What's Different Between Machines

**On any machine:**
```bash
# See commits that need to be pushed
git log origin/main..HEAD

# See commits that need to be pulled
git log HEAD..origin/main

# See files changed locally (not committed)
git status

# See actual changes in files
git diff

# See what will be pushed
git diff origin/main..HEAD
```

---

## 🎯 Book-Specific Sync Strategy (3 Machines)

### For Pride and Prejudice

**Machine B has the source of truth** for P&P structure
1. Machine A should commit and push current work
2. Machine B should pull Machine A's changes
3. Machine B should verify P&P still works
4. Machine B should push P&P updates
5. Machines A and C should pull and verify

### For Jane Eyre

**Machine A has the source of truth** for Jane Eyre chapters 16-38
1. Machine A should commit and push immediately
2. Machines B and C should pull before working on Jane Eyre
3. All three machines now have same Jane Eyre state

### For New Books

**Designate ONE machine as primary** for each new book
- Start the book on that machine
- Push initial structure immediately
- Other 2 machines pull before contributing

### 3-Machine Work Distribution Strategy

To minimize conflicts, assign books to machines:

**Recommended Distribution:**
- **Machine A:** Jane Eyre (primary)
- **Machine B:** Pride and Prejudice (primary)
- **Machine C:** Next book OR documentation work

**Rules:**
1. Each machine "owns" specific books
2. Always pull before working on ANY book
3. If working on another machine's book, coordinate first
4. Push immediately when done
5. Other machines pull before their next session

---

## 📝 Commit Message Conventions

### Good Commit Messages
```bash
# Book setup
git commit -m "Setup: Add Pride and Prejudice book structure"

# Chapter work
git commit -m "Add Jane Eyre Chapter 16 with full IA analysis"
git commit -m "Add Pride and Prejudice Chapters 1-5"

# WIP commits
git commit -m "WIP: Pride and Prejudice Ch 10 - 50% complete [Machine-B]"

# Bug fixes
git commit -m "Fix: Chapter navigation broken on mobile"

# Updates
git commit -m "Update ChapterAllTemplate: Add modern parallels section"

# Multiple related changes
git commit -m "Jane Eyre: Add chapters 20-25 and update config"
```

### Include Machine Name for WIP
```bash
git commit -m "WIP: Working on P&P Chapter 15 [MacBook-Studio]"
```

This helps you remember where unfinished work lives.

---

## ⚡ Quick Commands Reference

### Daily Workflow
```bash
# Start of day (any machine)
~/sync-amplified.sh start

# End of day (any machine)
~/sync-amplified.sh end
```

### Manual Workflow
```bash
# Check status
git status

# See what's on GitHub that you don't have
git fetch
git log HEAD..origin/main --oneline

# Pull changes
git pull origin main

# Add specific files
git add app/books/jane-eyre/chapters/chapter-16.ts

# Add all files in directory
git add app/books/jane-eyre/chapters/

# Commit
git commit -m "Descriptive message"

# Push
git push origin main
```

### Undo Commands
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes (DANGER!)
git restore .

# Unstage file
git restore --staged filename.tsx

# Stash changes temporarily
git stash
git pull origin main
git stash pop
```

---

## 🎓 Understanding the Current P&P Situation

### What Happened
1. Machine B created Pride and Prejudice in the NEW format
2. Machine B never pushed to GitHub
3. Machine A has OLD format (from earlier setup)
4. They diverged independently

### Resolution Strategy
```mermaid
Machine A                GitHub (origin)         Machine B
─────────────────────────────────────────────────────────
Jane Eyre 16-38    -->   Push            -->    Pull
                   <--   (synced)         <--    
Old P&P format     <--   Pull P&P new    <--    New P&P format
```

### Steps to Execute NOW

**Machine A (Current - RIGHT NOW):**
```bash
# 1. Commit Jane Eyre work
git add app/books/jane-eyre/
git commit -m "Add Jane Eyre chapters 16-38"

# 2. Commit docs
git add *.md app/components/ app/page.tsx
git commit -m "Update documentation and UI components"

# 3. Push everything
git push origin main
```

**Machine B (Next):**
```bash
# 1. Pull Jane Eyre and docs
git pull origin main

# 2. Verify Pride and Prejudice still works
npm run dev
# Test P&P chapters

# 3. If working, commit P&P structure
git add app/books/pride-and-prejudice/
git commit -m "Update Pride and Prejudice to dynamic routing with chapter data files"

# 4. Push P&P
git push origin main
```

**Machine A (Finally):**
```bash
# 1. Pull P&P updates
git pull origin main

# 2. Test everything
npm run dev

# 3. You're synced! 🎉
```

---

## 🛡️ Preventing Future Conflicts

### Best Practices

**1. Pull Before Starting Work**
```bash
# ALWAYS do this first
git pull origin main
```

**2. Push When Done for the Day**
```bash
# ALWAYS do this before closing laptop
git push origin main
```

**3. Work on Different Files**
- Machine A: Jane Eyre chapters
- Machine B: Pride and Prejudice chapters
- Minimal overlap = minimal conflicts

**4. Communicate**
If working simultaneously:
- "I'm working on Jane Eyre Ch 20 now"
- "I'm pushing P&P updates"
- "I updated the ChapterTemplate, pull before working"

**5. Use Branches for Experiments**
```bash
# For major changes, use a branch
git checkout -b experiment/new-template
# Work on new template
git add .
git commit -m "Experimental: New template design"
git push origin experiment/new-template

# Later, merge when ready
git checkout main
git merge experiment/new-template
git push origin main
```

---

## 🆘 Emergency Procedures

### "I Pushed and Broke Everything!"
```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

### "I Have Uncommitted Changes and Need to Pull!"
```bash
# Save changes temporarily
git stash

# Pull updates
git pull origin main

# Reapply your changes
git stash pop

# Fix any conflicts
git add .
git commit -m "Your work"
git push origin main
```

### "I Accidentally Deleted a File!"
```bash
# Restore from last commit
git restore deleted-file.tsx

# Or restore from specific commit
git restore --source=HEAD~5 deleted-file.tsx
```

### "GitHub Says I'm Behind and Ahead Simultaneously!"
```bash
# You have local commits AND remote commits
git fetch origin
git log HEAD..origin/main    # See what's on GitHub
git log origin/main..HEAD    # See what's local

# Pull and merge
git pull origin main
# Fix conflicts if any
git push origin main
```

---

## 📊 Visual Workflow

```
┌─────────────────────────────────────────────────────────┐
│                    START WORK SESSION                    │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
                 ┌─────────────────┐
                 │  git pull       │
                 │  origin main    │
                 └─────────────────┘
                           │
                           ▼
                 ┌─────────────────┐
                 │  npm run dev    │
                 │  Do work...     │
                 └─────────────────┘
                           │
                           ▼
                 ┌─────────────────┐
                 │  git add files  │
                 │  git commit -m  │
                 └─────────────────┘
                           │
                           ▼
                 ┌─────────────────┐
                 │  git pull       │
                 │  (safety check) │
                 └─────────────────┘
                           │
                           ▼
                 ┌─────────────────┐
                 │  git push       │
                 │  origin main    │
                 └─────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    END WORK SESSION                      │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 TL;DR - Quick Start (3 Machines)

### Step 1: Machine A (Current - Do This First):
```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
git add app/books/jane-eyre/
git commit -m "Add Jane Eyre chapters 16-38"
git add *.md app/components/ app/page.tsx
git commit -m "Update documentation and components"
git push origin main
```

### Step 2: Machine B (Do This Second):
```bash
cd ~/Documents/GitHub/amplified-classics
git pull origin main  # Gets Jane Eyre updates
git add app/books/pride-and-prejudice/
git commit -m "Update Pride and Prejudice to new format"
git push origin main
```

### Step 3: Machine C (Do This Third):
```bash
cd ~/Documents/GitHub/amplified-classics
git status  # Check for local changes
git add .   # If you have local work
git commit -m "Machine C local work"  # If needed
git pull origin main  # Gets everything from A and B
git push origin main  # If you had local commits
```

### Step 4: Back to Machine A (Final Sync):
```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
git pull origin main  # Gets P&P + Machine C updates
npm run dev
# Test everything works ✅
```

### Verification (All 3 Machines):
On each machine, run:
```bash
git log --oneline -5  # Should show same commits
git status            # Should show "working tree clean"
```

---

## 🎉 System Benefits

Once synced:
- ✅ Work seamlessly across machines
- ✅ Never lose work
- ✅ Always have latest code
- ✅ Deploy automatically to Vercel
- ✅ Collaborate efficiently
- ✅ Track progress over time
- ✅ Rollback if needed

---

**Created:** October 25, 2025  
**Purpose:** Establish systematic git workflow for multi-machine book development  
**Status:** Living document — update as process evolves


