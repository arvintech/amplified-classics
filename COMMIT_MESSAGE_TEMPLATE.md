# Git Commit Message Template

Use this template when committing template-related work to the repository.

---

## Standard Commit for V3 Template System

```bash
git add CHAPTER-TEMPLATE-V3.md
git add HOW_TO_CREATE_A_CHAPTER.md
git add PROMPT_FOR_AI_CHAPTER_CREATION.md
git add EXAMPLE_SOURCE_CHAPTER.md
git add COMMIT_MESSAGE_TEMPLATE.md

git commit -m "Add complete V3 chapter template system with AI collaboration workflow

## New Files Created

- CHAPTER-TEMPLATE-V3.md (969 lines)
  Complete reference guide with 13-section structure, styling reference,
  quality checklists, and best practices. Improved organization over V2
  with Quick Start section, clear part divisions, and enhanced guidance.

- HOW_TO_CREATE_A_CHAPTER.md (971 lines)
  Step-by-step workflow for creating new chapters OR completely replacing
  existing chapters with V3 structure. Includes 20 creation steps and 11
  replacement steps with time estimates and quality gates.

- PROMPT_FOR_AI_CHAPTER_CREATION.md (470 lines)
  Copy-paste prompt template for AI-assisted chapter creation. Enables
  6-8 hour manual process to become ~1 hour with AI collaboration.
  Includes complete instructions for sourcing public domain text.

- EXAMPLE_SOURCE_CHAPTER.md (244 lines)
  Reference example showing how to format complete chapter text from
  Project Gutenberg for AI prompts. Includes P&P Chapter 5 as template.

- COMMIT_MESSAGE_TEMPLATE.md
  This file - standardized commit messages for template work.

## Key V3 Improvements

### Content Structure
- 13-section framework clearly defined
- Speed-reading approach for Key Quotes (50-75 words max)
- 6 Amplified Discussions (vs 4-6) for teacher selection flexibility
- Modern Adaptation with 2025-specific examples
- \"Why It Matters\" explanations for each major section

### Quality Standards
- Specific word count targets for each section
- B&W print-safe emoji guidelines
- Four comprehensive checklists (Content, Connection, Styling, Technical)
- Example quality comparisons (good vs bad)

### AI Collaboration
- Complete prompt template for AI-assisted creation
- 85-90% time savings (6-8 hrs → ~1 hr per chapter)
- Educator-AI partnership framework (collaborated, not assisted)
- Public domain text sourcing instructions

### Workflow Enhancements
- Two scenarios: new chapter creation OR complete replacement
- Decision trees for keep/adapt/create choices
- Batch processing strategies
- Quality gates at multiple checkpoints

## Impact

This V3 system enables:
- Consistent chapter quality across all books
- Faster chapter creation with AI collaboration
- Clear standards for 100 Rockstar Creators
- Scalable approach for 75,000+ public domain classics

## Reference
- Builds on V2 (CHAPTER-TEMPLATE-V2.md)
- Integrates with ChapterAllTemplate.ts
- Compatible with existing Jane Eyre chapters (38 complete)
- Ready for immediate use on new books

## Next Steps
- Test V3 workflow on new book chapter
- Update CHAPTER_CONSISTENCY_WORKFLOW.md to reference V3
- Create Chapter 1 template (V3 with seriesOpening section)
- Document best practices from first V3 implementations"
```

---

## For Individual File Commits

### Committing CHAPTER-TEMPLATE-V3.md Only

```bash
git add CHAPTER-TEMPLATE-V3.md

git commit -m "Add CHAPTER-TEMPLATE-V3.md - Enhanced chapter reference guide

- 969 lines with 4-part structure (Content, Styling, Checklists, Reference)
- 13-section framework with Quick Start overview
- Speed-reading approach for Key Quotes (50-75 words)
- Modern Adaptation with 2025-specific guidance
- 6 Amplified Discussions for teacher selection
- Comprehensive quality checklists
- All sections include 'Why It Matters' explanations
- B&W print-safe emoji guidelines
- Copy-paste styling snippets
- Time estimates for each section

Improves on V2 with better organization, actionable guidance,
and specific quality standards."
```

### Committing HOW_TO_CREATE_A_CHAPTER.md Only

```bash
git add HOW_TO_CREATE_A_CHAPTER.md

git commit -m "Add HOW_TO_CREATE_A_CHAPTER.md - Complete workflow guide

- 971 lines covering two scenarios:
  1. Creating brand new chapters (Steps 1-20, 6-8 hours)
  2. Replacing existing chapters (Steps R1-R11, 7-9 hours)

- Detailed workflow with time estimates for each step
- Decision trees for keep/adapt/create choices
- Quality gates and V3 compliance checklists
- Side-by-side comparison strategies
- Batch replacement planning
- Pro tips for efficiency

Complements CHAPTER-TEMPLATE-V3.md with actionable process."
```

### Committing PROMPT_FOR_AI_CHAPTER_CREATION.md Only

```bash
git add PROMPT_FOR_AI_CHAPTER_CREATION.md

git commit -m "Add PROMPT_FOR_AI_CHAPTER_CREATION.md - AI collaboration system

- Copy-paste prompt template for AI-assisted chapter creation
- Reduces 6-8 hour manual process to ~1 hour
- Complete instructions for sourcing public domain text
- Project Gutenberg integration guide
- Token limit considerations
- Quality control guidelines
- Batch processing strategies
- 85-90% time savings while maintaining V3 quality

Enables scalable chapter creation with AI collaboration."
```

### Committing EXAMPLE_SOURCE_CHAPTER.md Only

```bash
git add EXAMPLE_SOURCE_CHAPTER.md

git commit -m "Add EXAMPLE_SOURCE_CHAPTER.md - Source text format reference

- Complete Pride and Prejudice Chapter 5 example
- Shows proper formatting for AI prompts
- Instructions for getting text from Project Gutenberg
- Common mistakes to avoid
- Token limit guidance
- Public domain information
- Visual examples for multiple books

Reference template for preparing source chapters."
```

---

## For Updates to V3 Files

### When Improving Template Content

```bash
git add CHAPTER-TEMPLATE-V3.md

git commit -m "Update CHAPTER-TEMPLATE-V3.md: [specific improvement]

- [Describe what changed]
- [Why the change was made]
- [Impact on chapter creation]"
```

**Examples:**

```bash
git commit -m "Update CHAPTER-TEMPLATE-V3.md: Add time breakdown table

- Added detailed time estimates for each section
- Total creation time now clearly shown (6-8 hours)
- Helps creators plan work sessions"
```

```bash
git commit -m "Update CHAPTER-TEMPLATE-V3.md: Clarify Modern Adaptation guidelines

- Added 5-step process for creating adaptations
- Included specific 2025 platform examples
- Emphasized authenticity over generic scenarios"
```

### When Fixing Template Issues

```bash
git add CHAPTER-TEMPLATE-V3.md

git commit -m "Fix: Correct chapter number reference in V3 template

- Updated whyLiteratureMatters example to use correct parameter
- Clarified that chapter number must match throughout
- Added quality checklist item for verification"
```

---

## For Chapter Creation Work

### Creating New Chapter with V3

```bash
git add app/books/[book-name]/chapters/chapter-X.ts
git add app/books/[book-name]/[chapter]/page.tsx

git commit -m "Add Chapter X for [Book Title] using V3 template

- Complete 13-section V3 structure
- 6 amplified discussions (300-500 words each)
- Modern adaptation with 2025 context
- Speed-reading style quote analyses
- All quality checklists passed
- Total creation time: [X] hours

First/Nth chapter using V3 system."
```

### Replacing Existing Chapter with V3

```bash
git add app/books/[book-name]/chapters/chapter-X.ts

git commit -m "Replace Chapter X with V3-compliant version

Previous version:
- Missing 4 V3 sections
- No amplified discussions
- Generic modern adaptation

New V3 version:
- Complete 13-section structure
- 6 amplified discussions included
- Specific 2025 modern scenarios
- Speed-reading quote style
- All formatting and quality standards met

Migration time: [X] hours
Quality improvement: Significant"
```

---

## For Batch Work

### Creating Multiple Chapters

```bash
git add app/books/[book-name]/chapters/chapter-*.ts

git commit -m "Add Chapters X-Y for [Book Title] using V3 template

Created [N] chapters following V3 standards:
- Chapters [list numbers]
- All include 13-section structure
- Consistent quality across all chapters
- Thematic threads connect chapters
- Character development tracks properly

Batch creation time: [X] hours
Average per chapter: [Y] hours
Used AI-collaboration workflow"
```

### Replacing Multiple Chapters

```bash
git add app/books/[book-name]/chapters/chapter-*.ts

git commit -m "Batch V3 replacement: Chapters X-Y for [Book Title]

Replaced [N] chapters with V3-compliant versions:
- Chapters [list numbers]
- All now meet V3 quality standards
- Consistent structure across replaced chapters
- Verified thematic and character consistency

Total replacement time: [X] hours"
```

---

## For Documentation Updates

### Updating Workflow Docs

```bash
git add CHAPTER_CONSISTENCY_WORKFLOW.md

git commit -m "Update workflow guide to reference V3 template

- Added links to new V3 documents
- Updated step references to V3 sections
- Clarified V2 vs V3 differences
- Added AI collaboration workflow section"
```

### Adding New Template Guides

```bash
git add [NEW_GUIDE].md

git commit -m "Add [guide name] to V3 template system

- [Purpose of guide]
- [What it covers]
- [How it integrates with V3]
- [Time savings or benefits]"
```

---

## Quick Reference: Commit Types

| Type | Prefix | Example |
|------|--------|---------|
| **New template files** | `Add:` | `Add CHAPTER-TEMPLATE-V3.md - Enhanced reference` |
| **New chapter** | `Add:` | `Add Chapter 5 for Pride and Prejudice (V3)` |
| **Replace chapter** | `Replace:` | `Replace Chapter 5 with V3-compliant version` |
| **Template update** | `Update:` | `Update V3 template: Clarify Modern Adaptation` |
| **Bug fix** | `Fix:` | `Fix: Correct chapter number in V3 example` |
| **Documentation** | `Docs:` | `Docs: Update workflow to reference V3` |
| **Batch work** | `Add:` | `Add Chapters 1-5 using V3 (batch)` |

---

## Best Practices

### Write Clear Commit Messages
✅ **Good:**
```
Add Chapter 5 for Pride and Prejudice using V3 template

- Complete 13-section structure
- 6 amplified discussions included
- Modern adaptation uses Discord/Slack examples
- All quality checklists passed
- Creation time: 7 hours
```

❌ **Bad:**
```
updated chapter
```

### Include Context
- What was changed/added
- Why it was changed
- Impact or benefit
- Time invested (for chapters)

### Reference Related Work
```
Add Chapter 6 for Pride and Prejudice (V3)

Builds on Chapter 5 (commit abc123)
Continues thematic threads established in earlier chapters
Character development tracks with previous chapters
```

### Document First Implementations
```
Add first V3 chapter for Wuthering Heights

First chapter using new V3 system for this book.
Lessons learned:
- Modern adaptation needed 2 iterations
- Amplified discussions took longer than estimated
- Overall quality significantly improved over old template

Will inform V3 refinements.
```

---

## Git Workflow for V3 Work

### Daily Template Work

```bash
# Morning: Pull latest
git pull origin main

# Work on templates
# ... edit files ...

# End of day: Commit progress
git add CHAPTER-TEMPLATE-V3.md
git commit -m "WIP: Add styling reference to V3 template"
git push origin main
```

### Chapter Creation Session

```bash
# Start: Create feature branch (optional)
git checkout -b chapter-5-pride-prejudice

# Create chapter using V3
# ... 6-8 hours of work ...

# Commit when complete
git add app/books/pride-and-prejudice/chapters/chapter-5.ts
git commit -m "Add Chapter 5 for Pride and Prejudice (V3)"

# Merge to main
git checkout main
git merge chapter-5-pride-prejudice
git push origin main
```

### Template System Release

```bash
# Tag the V3 release
git tag -a v3.0 -m "Release V3 Template System

Complete rewrite of chapter creation system:
- Enhanced template with 13-section structure
- AI collaboration workflow
- 85-90% time savings
- Scalable for 75,000+ books"

git push origin v3.0
```

---

**Use this template to maintain clear git history for all V3 template and chapter work!**

