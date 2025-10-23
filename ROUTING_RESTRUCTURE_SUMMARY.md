# Routing Restructure — Multi-Contributor System

## Overview

The Amplified Classics routing has been restructured to support **multiple independent contributors** developing books simultaneously while maintaining consistent structure, style, and quality.

**Date:** October 20, 2025  
**Status:** ✅ Complete  
**Breaking Changes:** None (existing Jane Eyre structure remains compatible)

---

## 🎯 Goals Achieved

### 1. **Independent Development**
✅ Contributors can work on separate books without conflicts  
✅ Each book is self-contained in its own directory  
✅ Git branches can be organized by book  
✅ No shared state between books

### 2. **Consistent Structure**
✅ All books follow the same 14-section chapter template  
✅ Unified TypeScript types enforce standards  
✅ Shared design system via CSS variables  
✅ Quality checklists ensure consistency

### 3. **Easy Onboarding**
✅ Comprehensive documentation for new contributors  
✅ Copy-paste template book to get started  
✅ Step-by-step setup guide  
✅ Clear examples from Jane Eyre

### 4. **Scalable Architecture**
✅ Configuration-driven approach  
✅ Data/content separation  
✅ Dynamic routing eliminates file duplication  
✅ Ready for 100+ books

---

## 📁 New Structure

```
amplified-classics/
├── app/
│   ├── books/
│   │   ├── _template-book/          ← Copy this to start new book
│   │   │   ├── config.ts             ← Book metadata
│   │   │   ├── page.tsx              ← Book landing page
│   │   │   ├── [chapter]/            ← Dynamic chapter route
│   │   │   │   └── page.tsx
│   │   │   ├── chapters/             ← Chapter content files
│   │   │   │   └── chapter-template.ts
│   │   │   └── README.md
│   │   │
│   │   ├── jane-eyre/                ← Existing book (reference)
│   │   │   ├── config.ts
│   │   │   ├── page.tsx
│   │   │   ├── [chapter]/
│   │   │   │   └── page.tsx
│   │   │   └── chapters/
│   │   │       ├── chapter-1.ts
│   │   │       ├── chapter-2.ts
│   │   │       └── ...
│   │   │
│   │   └── [new-book-slug]/          ← Your new book
│   │       ├── config.ts
│   │       ├── page.tsx
│   │       ├── [chapter]/
│   │       └── chapters/
│   │
│   ├── components/
│   │   ├── book/                     ← Shared book components (future)
│   │   │   ├── ChapterTemplate.tsx
│   │   │   └── ...
│   │   └── ui/                       ← UI primitives (existing)
│   │
│   └── lib/
│       └── types/
│           └── book.types.ts         ← TypeScript definitions
│
└── docs/                              ← Documentation (root level)
    ├── CONTRIBUTOR_GUIDE.md           ← Complete contributor documentation
    ├── BOOK_SETUP_GUIDE.md            ← Step-by-step setup instructions
    ├── CHAPTER_TEMPLATE_STRUCTURE.md  ← Chapter structure reference
    ├── METHOD_DOCUMENTATION_SUMMARY.md ← Teaching methodology
    └── ROUTING_RESTRUCTURE_SUMMARY.md  ← This file
```

---

## 🔄 Routing System

### Book Landing Pages

**Route:** `/books/[book-slug]`  
**Example:** `/books/pride-and-prejudice`  
**File:** `/app/books/pride-and-prejudice/page.tsx`

**Displays:**
- Book title, author, metadata
- About section with description and quote
- Key themes
- All chapters organized by parts (if applicable)
- Links to each chapter

### Chapter Pages

**Route:** `/books/[book-slug]/chapter-[number]`  
**Example:** `/books/pride-and-prejudice/chapter-5`  
**File:** `/app/books/pride-and-prejudice/[chapter]/page.tsx`

**How It Works:**
1. Dynamic route captures chapter number from URL
2. Looks up chapter data from `chapters/chapter-X.ts`
3. Renders all 14 standard sections
4. Provides previous/next navigation

**Benefits:**
- Single file handles all chapters
- No duplication
- Consistent behavior across all chapters
- Easy to update template for all chapters

---

## 📊 Configuration System

### Book Config (`config.ts`)

```typescript
import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  slug: 'book-slug',
  title: 'Book Title',
  author: 'Author Name',
  totalChapters: 38,
  parts: [...], // Optional organization
  themes: [...],
  purchaseLinks: {...},
  contributor: {...}
}
```

**Purpose:**
- Single source of truth for book metadata
- Used by both book landing page and chapters
- Type-safe configuration
- Easy to update

### Chapter Data (`chapters/chapter-X.ts`)

```typescript
import { ChapterData } from '@/app/lib/types/book.types'

export const chapter1: ChapterData = {
  number: 1,
  summary: {...},
  characters: [...],
  quotes: [...],
  iaAnalysis: {...},
  // ... all required sections
}
```

**Purpose:**
- Separates content from presentation
- Enforces complete structure via TypeScript
- Enables content authoring without touching React
- Content can be reviewed independently

---

## 🎨 Design System

All books share a consistent design system via CSS variables:

```css
--primary: #1e5631        /* Deep green */
--background: #fafafa     /* Off-white */
--card-bg: #f5f5f5        /* Light gray */
--text-primary: #1a1a1a   /* Dark */
--text-secondary: #666666 /* Gray */
--border-color: #e0e0e0   /* Light gray */
--font-heading: Playfair Display
```

**Typography, spacing, and card styles are standardized** in the template.

---

## 👥 Multi-Contributor Workflow

### Scenario 1: Two Contributors, Two Books

**Contributor A: Adding Pride and Prejudice**
```bash
git checkout -b book/pride-and-prejudice
cp -r app/books/_template-book app/books/pride-and-prejudice
# ... develop book ...
git commit -m "Add Pride and Prejudice Chapters 1-10"
git push origin book/pride-and-prejudice
# Create PR when ready
```

**Contributor B: Adding Frankenstein**
```bash
git checkout -b book/frankenstein
cp -r app/books/_template-book app/books/frankenstein
# ... develop book ...
git commit -m "Add Frankenstein Chapters 1-5"
git push origin book/frankenstein
# Create PR when ready
```

**Result:** No conflicts! Each works independently.

### Scenario 2: Multiple Contributors on Same Book

**Contributor A: Chapters 1-10**
```bash
git checkout -b book/1984/chapters-1-10
# ... create chapters/chapter-1.ts through chapter-10.ts ...
git commit -m "Add 1984 Chapters 1-10"
```

**Contributor B: Chapters 11-20**
```bash
git checkout -b book/1984/chapters-11-20
# ... create chapters/chapter-11.ts through chapter-20.ts ...
git commit -m "Add 1984 Chapters 11-20"
```

**Result:** Different files, no conflicts!

---

## ✅ Quality Standards

Every book and chapter must meet these standards:

### Documentation Required
- [ ] CONTRIBUTOR_GUIDE.md read and understood
- [ ] CHAPTER_TEMPLATE_STRUCTURE.md followed
- [ ] BOOK_SETUP_GUIDE.md steps completed

### Book Requirements
- [ ] Complete `config.ts` with all metadata
- [ ] Book landing page (`page.tsx`)
- [ ] Dynamic chapter route (`[chapter]/page.tsx`)
- [ ] All chapters in `chapters/` directory

### Chapter Requirements
- [ ] All 14 sections present
- [ ] 2-4 characters with 100-150 word descriptions
- [ ] 3-5 quotes with analysis
- [ ] 2-3 themes, 3-4 literary techniques
- [ ] Modern adaptation with parallels
- [ ] 6 discussion questions
- [ ] 6 amplified responses (1,500-2,000 words each)
- [ ] 3 educator resources

### Technical Requirements
- [ ] TypeScript types correct
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All links functional
- [ ] Follows design system

---

## 📚 Documentation

### For Contributors

1. **CONTRIBUTOR_GUIDE.md** (17 KB)
   - Complete guide for adding books
   - Structure, workflow, standards
   - Quality checklist
   - Getting help

2. **BOOK_SETUP_GUIDE.md** (13 KB)
   - Step-by-step setup instructions
   - Code templates
   - Testing procedures
   - Example configurations

3. **CHAPTER_TEMPLATE_STRUCTURE.md** (existing)
   - 14-section chapter structure
   - Content guidelines
   - Design specifications
   - Implementation workflow

4. **METHOD_DOCUMENTATION_SUMMARY.md** (existing)
   - Teaching methodology
   - Notice → Explore → Amplify
   - Pedagogical foundations

### For Developers

1. **book.types.ts**
   - Complete TypeScript definitions
   - All interfaces documented
   - Type safety for all book/chapter data

2. **_template-book/**
   - Working template with all files
   - Ready to copy and customize
   - Includes explanatory comments

---

## 🚀 Getting Started (Quick Reference)

### New Contributor: Add a Book

```bash
# 1. Read documentation
open CONTRIBUTOR_GUIDE.md

# 2. Copy template
cd app/books
cp -r _template-book your-book-slug
cd your-book-slug

# 3. Configure
# Edit config.ts (replace YOUR_* placeholders)
# Edit page.tsx (if needed, defaults are good)

# 4. Create chapters
cp chapters/chapter-template.ts chapters/chapter-1.ts
# Fill in chapter-1.ts content

# 5. Register chapter
# Edit [chapter]/page.tsx:
# - Import chapter-1
# - Add to chapters array

# 6. Test
npm run dev
# Visit http://localhost:3000/books/your-book-slug

# 7. Commit
git checkout -b book/your-book-slug
git add app/books/your-book-slug
git commit -m "Add YOUR BOOK: Setup and Chapter 1"
git push origin book/your-book-slug
```

**Time to first chapter:** 30 minutes  
**Time per additional chapter:** 6-10 hours

---

## 🔮 Future Enhancements

### Planned

- [ ] **Shared ChapterTemplate Component**
  - Reusable component for rendering chapters
  - Props: `bookConfig` and `chapterData`
  - Eliminates copying chapter structure

- [ ] **Chapter Preview Mode**
  - See chapter before committing
  - Markdown preview for amplified responses
  - Live editing interface

- [ ] **Content Validation**
  - Script to validate chapter completeness
  - Check word counts, required sections
  - Run before PR submission

- [ ] **Automated Testing**
  - Ensure all chapters load
  - Check for broken links
  - Validate TypeScript types

### Possible

- [ ] CMS integration for non-technical contributors
- [ ] AI-assisted chapter scaffolding
- [ ] Collaborative editing tools
- [ ] Analytics dashboard per book

---

## 🎓 Example: From Template to Published Book

### Time Breakdown

| Phase | Task | Time |
|-------|------|------|
| Setup | Copy template, configure book | 30 min |
| Chapter 1 | Research, write, format | 8 hours |
| Chapters 2-5 | 4 chapters × 8 hours | 32 hours |
| Review | Proofread, test, refine | 4 hours |
| PR | Submit, address feedback | 2 hours |
| **Total** | **5 chapters from zero** | **46.5 hours** |

**Ongoing:** 6-10 hours per additional chapter

---

## 📞 Support

### Documentation
- **Full Guide:** CONTRIBUTOR_GUIDE.md
- **Setup Steps:** BOOK_SETUP_GUIDE.md
- **Chapter Structure:** CHAPTER_TEMPLATE_STRUCTURE.md
- **Types Reference:** app/lib/types/book.types.ts

### Examples
- **Complete Book:** `/app/books/jane-eyre`
- **Template:** `/app/books/_template-book`
- **Live Site:** [Production URL]

### Help
- **Issues:** GitHub Issues with `book-setup` label
- **Questions:** Tag maintainer in PR
- **Discussion:** Project discussion board

---

## ✨ Impact

This restructure enables:

✅ **Multiple contributors** working simultaneously  
✅ **Consistent quality** across all books  
✅ **Faster onboarding** for new contributors  
✅ **Scalable growth** to 100+ books  
✅ **Independent development** without conflicts  
✅ **Clear standards** and expectations  
✅ **Data-driven content** separated from presentation  
✅ **Type-safe** development with TypeScript

---

## 🎯 Success Metrics

### For Project
- Number of books in library
- Number of active contributors
- Chapters completed per month
- PR review time
- Bug/issue rate

### For Contributors
- Time to first published chapter
- Chapters per contributor
- Quality score (peer review)
- Contribution consistency

---

## 📝 Summary

**What Changed:**
- Configuration-driven book setup
- Template book for easy copying
- Comprehensive contributor documentation
- TypeScript types for all book/chapter data
- Clear standards and quality guidelines

**What Stayed the Same:**
- 14-section chapter structure
- Design system and visual style
- Teaching methodology
- Interactive features
- Jane Eyre as reference implementation

**Result:**
A system that empowers multiple contributors to independently create high-quality books while maintaining consistency and standards.

---

**Routing Restructure Complete!** ✅

**Status:** Production Ready  
**Breaking Changes:** None  
**Migration Required:** No (existing books compatible)  
**Documentation:** Complete  
**Ready for:** Multiple simultaneous contributors

---

**Last Updated:** October 20, 2025  
**Version:** 2.0  
**Maintainer:** [Project Lead]


