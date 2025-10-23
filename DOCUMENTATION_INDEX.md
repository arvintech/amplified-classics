# Amplified Classics — Documentation Index

## 🎯 Start Here

**New Contributor?** Start with these in order:

1. **QUICK_START.md** — Get your first book setup in 5 steps (15 min read)
2. **CONTRIBUTOR_GUIDE.md** — Complete contributor documentation (30 min read)
3. **BOOK_SETUP_GUIDE.md** — Detailed setup instructions with code examples (20 min read)
4. **CHAPTER_TEMPLATE_STRUCTURE.md** — Chapter content standards (20 min read)

---

## 📚 Core Documentation

### For Contributors

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **QUICK_START.md** | 5-step setup guide | Before starting your first book |
| **CONTRIBUTOR_GUIDE.md** | Complete contributor manual | Required reading for all contributors |
| **BOOK_SETUP_GUIDE.md** | Step-by-step setup with examples | While setting up your book |
| **CHAPTER_TEMPLATE_STRUCTURE.md** | Chapter structure reference | While writing chapters |

### For Developers

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **ROUTING_RESTRUCTURE_SUMMARY.md** | Architecture overview | Understanding the system |
| **app/lib/types/book.types.ts** | TypeScript definitions | Working with types |
| **_template-book/** | Working template | Copying for new books |

### For Project Management

| Document | Purpose | When to Read |
|----------|---------|--------------|
| **METHOD_DOCUMENTATION_SUMMARY.md** | Teaching methodology | Understanding pedagogical approach |
| **METHOD_QUICK_GUIDE.md** | Notice → Explore → Amplify summary | Quick reference |
| **ROUTING_RESTRUCTURE_SUMMARY.md** | System architecture | Planning and scaling |

---

## 🗂️ Documentation by Topic

### Getting Started
- QUICK_START.md — 5-step book setup
- CONTRIBUTOR_GUIDE.md → "Quick Start" section
- BOOK_SETUP_GUIDE.md → "Prerequisites"

### Book Setup
- BOOK_SETUP_GUIDE.md — Complete setup guide
- _template-book/README.md — Template instructions
- _template-book/config.ts — Configuration template

### Writing Chapters
- CHAPTER_TEMPLATE_STRUCTURE.md — Structure and standards
- _template-book/chapters/chapter-template.ts — Content template
- CONTRIBUTOR_GUIDE.md → "Chapter Data Structure"

### Design & Style
- CHAPTER_TEMPLATE_STRUCTURE.md → "Visual Design System"
- CONTRIBUTOR_GUIDE.md → "Style & Design Guidelines"
- app/globals.css — CSS variables

### Teaching Methodology
- METHOD_DOCUMENTATION_SUMMARY.md — Complete methodology
- METHOD_QUICK_GUIDE.md — Quick reference
- METHOD_ONE_PAGER.md — One-page summary

### Quality Standards
- CONTRIBUTOR_GUIDE.md → "Quality Checklist"
- CHAPTER_TEMPLATE_STRUCTURE.md → "Quality Checklist"
- BOOK_SETUP_GUIDE.md → "Tips for Success"

### Technical Reference
- app/lib/types/book.types.ts — TypeScript types
- ROUTING_RESTRUCTURE_SUMMARY.md → "Routing System"
- _template-book/[chapter]/page.tsx — Dynamic routing

### Collaboration
- CONTRIBUTOR_GUIDE.md → "Collaboration Best Practices"
- ROUTING_RESTRUCTURE_SUMMARY.md → "Multi-Contributor Workflow"
- BOOK_SETUP_GUIDE.md → "Commit Your Work"

### Getting Help
- CONTRIBUTOR_GUIDE.md → "Getting Help"
- QUICK_START.md → "Common Issues"
- BOOK_SETUP_GUIDE.md → "Getting Help"

---

## 📖 Example Files

### Complete Reference Implementation
- **/app/books/jane-eyre/** — Complete book with 10 chapters
  - `config.ts` — Real book configuration
  - `page.tsx` — Book landing page
  - `[chapter]/page.tsx` — Dynamic chapter route
  - `chapters/chapter-1.ts` through `chapter-10.ts` — Chapter content

### Templates to Copy
- **/app/books/_template-book/** — Copy this to start new book
  - `config.ts` — Configuration template
  - `page.tsx` — Landing page template
  - `[chapter]/page.tsx` — Chapter route template
  - `chapters/chapter-template.ts` — Chapter content template
  - `README.md` — Setup instructions

---

## 🎓 Learning Path

### Path 1: New Contributor (Content Author)

1. Read **QUICK_START.md** (15 min)
2. Read **CONTRIBUTOR_GUIDE.md** (30 min)
3. Skim **CHAPTER_TEMPLATE_STRUCTURE.md** (10 min)
4. Copy `_template-book` and start configuring
5. Reference **BOOK_SETUP_GUIDE.md** as you work
6. Read **METHOD_DOCUMENTATION_SUMMARY.md** for pedagogical context
7. Study `/app/books/jane-eyre/chapters/chapter-1.ts` as example
8. Write your first chapter using `chapter-template.ts`

**Total Time:** ~2 hours learning + 8 hours first chapter

### Path 2: Developer (Code Contributor)

1. Read **ROUTING_RESTRUCTURE_SUMMARY.md** (20 min)
2. Study **app/lib/types/book.types.ts** (10 min)
3. Examine **_template-book/** structure (15 min)
4. Review **/app/books/jane-eyre/** implementation (30 min)
5. Read **CONTRIBUTOR_GUIDE.md** for context (20 min)
6. Understand **CHAPTER_TEMPLATE_STRUCTURE.md** (15 min)

**Total Time:** ~2 hours

### Path 3: Project Manager / Reviewer

1. Read **ROUTING_RESTRUCTURE_SUMMARY.md** (20 min)
2. Read **METHOD_DOCUMENTATION_SUMMARY.md** (20 min)
3. Skim **CONTRIBUTOR_GUIDE.md** (15 min)
4. Review **CHAPTER_TEMPLATE_STRUCTURE.md** (15 min)
5. Examine quality checklists in both guides (10 min)

**Total Time:** ~1.5 hours

---

## 🔍 Find What You Need

### "How do I...?"

**...start a new book?**
→ QUICK_START.md

**...write a chapter?**
→ CHAPTER_TEMPLATE_STRUCTURE.md + _template-book/chapters/chapter-template.ts

**...configure book metadata?**
→ BOOK_SETUP_GUIDE.md → Step 3 + _template-book/config.ts

**...understand the teaching method?**
→ METHOD_DOCUMENTATION_SUMMARY.md

**...style my content?**
→ CHAPTER_TEMPLATE_STRUCTURE.md → "Visual Design System"

**...handle TypeScript types?**
→ app/lib/types/book.types.ts

**...work with other contributors?**
→ CONTRIBUTOR_GUIDE.md → "Collaboration Best Practices"

**...test my book locally?**
→ BOOK_SETUP_GUIDE.md → Step 6

**...get help?**
→ CONTRIBUTOR_GUIDE.md → "Getting Help"

---

## 📊 Documentation Stats

| Category | Files | Total Words | Est. Reading Time |
|----------|-------|-------------|-------------------|
| Core Guides | 4 | ~15,000 | 90 minutes |
| Reference | 3 | ~8,000 | 45 minutes |
| Templates | 4 | ~3,000 | 20 minutes |
| Method Docs | 3 | ~10,000 | 60 minutes |
| **Total** | **14** | **~36,000** | **3.5 hours** |

**Recommended:** Read core guides (~90 min), reference as needed

---

## 🗺️ Documentation Map

```
START HERE
│
├─ Quick Start (15 min)
│   └─→ Ready to setup? → Book Setup Guide
│
├─ Contributor Guide (30 min) ← REQUIRED READING
│   ├─→ Need setup details? → Book Setup Guide
│   ├─→ Need structure details? → Chapter Template Structure
│   ├─→ Need examples? → /app/books/jane-eyre
│   └─→ Ready to start? → Quick Start
│
├─ Book Setup Guide (20 min)
│   ├─→ Copy template → _template-book/
│   └─→ See example → /app/books/jane-eyre
│
├─ Chapter Template Structure (20 min)
│   ├─→ Use template → _template-book/chapters/chapter-template.ts
│   └─→ See example → /app/books/jane-eyre/chapters/chapter-1.ts
│
└─ Method Documentation (optional, 30 min)
    └─→ Understand pedagogy → METHOD_DOCUMENTATION_SUMMARY.md
```

---

## 📞 Support & Resources

### Documentation Issues
- Found an error? Create issue with `documentation` label
- Need clarification? Create issue with `question` label
- Have suggestion? Create issue with `enhancement` label

### Learning Resources
- **Live Example:** http://localhost:3000/books/jane-eyre
- **Code Examples:** /app/books/jane-eyre/
- **Templates:** /app/books/_template-book/

### Getting Help
- **Setup Issues:** BOOK_SETUP_GUIDE.md → "Getting Help"
- **Content Questions:** CONTRIBUTOR_GUIDE.md → "Getting Help"
- **Technical Issues:** Create GitHub issue
- **General Questions:** Tag maintainer in PR

---

## ✅ Documentation Checklist

Before starting, make sure you've:

- [ ] Read QUICK_START.md
- [ ] Read CONTRIBUTOR_GUIDE.md (required)
- [ ] Skimmed CHAPTER_TEMPLATE_STRUCTURE.md
- [ ] Located _template-book/ directory
- [ ] Examined /app/books/jane-eyre example
- [ ] Bookmarked this index for reference
- [ ] Ready to start!

---

## 📝 Documentation Versions

**Current Version:** 2.0  
**Last Updated:** October 20, 2025  
**Status:** Complete and Production Ready

### Version History
- **v2.0** (Oct 2025) — Multi-contributor restructure complete
- **v1.0** (Earlier) — Initial Jane Eyre implementation

### Keeping Updated
- Documentation lives in repository
- Updated with code changes
- Version noted in each file
- Check commit history for changes

---

**Everything you need to contribute to Amplified Classics!** 📚✨

**Questions?** Start with CONTRIBUTOR_GUIDE.md → "Getting Help"


