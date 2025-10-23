# Contributing to Amplified Classics

Thank you for your interest in contributing to Amplified Classics! This project transforms classic literature through Intelligence Amplified pedagogy, making it accessible and engaging for modern students and educators.

---

## 🎯 Ways to Contribute

### 1. **Add a New Book**
Create a complete book with chapters, analysis, and educational resources.

**Time Commitment:** 6-10 hours per chapter  
**Skills Needed:** Literary analysis, teaching experience (helpful), basic file editing  
**Get Started:** Read [QUICK_START.md](./QUICK_START.md)

### 2. **Add Chapters to Existing Books**
Help complete books that are in progress.

**Time Commitment:** 6-10 hours per chapter  
**Skills Needed:** Literary analysis, alignment with existing book style  
**Get Started:** Check Issues for books needing chapters

### 3. **Improve Documentation**
Help make guides clearer, add examples, fix typos.

**Time Commitment:** 30 minutes - 2 hours  
**Skills Needed:** Clear writing, attention to detail  
**Get Started:** Read docs and suggest improvements

### 4. **Develop Features**
Add technical features, components, or improvements.

**Time Commitment:** Varies  
**Skills Needed:** TypeScript, React, Next.js  
**Get Started:** Check Issues labeled `enhancement` or `feature`

### 5. **Report Issues**
Found a bug, broken link, or content error? Let us know!

**Time Commitment:** 5 minutes  
**Get Started:** Create a GitHub Issue

---

## 📚 Essential Reading

### Required for All Contributors
1. **[QUICK_START.md](./QUICK_START.md)** — 5-step guide to add a book (15 min)
2. **[CONTRIBUTOR_GUIDE.md](./CONTRIBUTOR_GUIDE.md)** — Complete contributor documentation (30 min)

### Required for Content Contributors
3. **[CHAPTER_TEMPLATE_STRUCTURE.md](./CHAPTER_TEMPLATE_STRUCTURE.md)** — Chapter standards (20 min)
4. **[METHOD_DOCUMENTATION_SUMMARY.md](./METHOD_DOCUMENTATION_SUMMARY.md)** — Teaching methodology (20 min)

### Reference
- **[BOOK_SETUP_GUIDE.md](./BOOK_SETUP_GUIDE.md)** — Detailed setup with code examples
- **[DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)** — Complete documentation map
- **[ROUTING_RESTRUCTURE_SUMMARY.md](./ROUTING_RESTRUCTURE_SUMMARY.md)** — Architecture overview

---

## 🚀 Quick Start for New Contributors

### Step 1: Read Documentation (1 hour)
```bash
# Essential reading
open QUICK_START.md
open CONTRIBUTOR_GUIDE.md
open CHAPTER_TEMPLATE_STRUCTURE.md
```

### Step 2: Set Up Your Book (30 minutes)
```bash
# Copy template
cd app/books
cp -r _template-book your-book-slug
cd your-book-slug

# Edit config.ts
# Fill in your book's metadata
```

### Step 3: Write First Chapter (8 hours)
```bash
# Copy chapter template
cp chapters/chapter-template.ts chapters/chapter-1.ts

# Fill in all sections following CHAPTER_TEMPLATE_STRUCTURE.md
```

### Step 4: Test Locally (5 minutes)
```bash
npm run dev
# Visit http://localhost:3000/books/your-book-slug
```

### Step 5: Submit for Review
```bash
git checkout -b book/your-book-slug
git add app/books/your-book-slug/
git commit -m "Add YOUR BOOK: Setup and Chapter 1"
git push origin book/your-book-slug
# Create Pull Request
```

---

## 🎨 Style & Quality Standards

### Content Standards

**Every chapter must include:**
- [ ] Comprehensive summary (300-500 words)
- [ ] 2-4 character analyses (100-150 words each)
- [ ] 3-5 key quotes with analysis
- [ ] IA Analysis (themes + techniques)
- [ ] Modern adaptation with parallels
- [ ] 6 discussion questions
- [ ] 6 amplified responses (1,500-2,000 words each)
- [ ] 3 educator resources

**Writing Quality:**
- Clear, engaging prose
- Academic but accessible tone
- Proper citations when quoting
- Proofread and error-free
- Consistent voice throughout

### Technical Standards

**Code Quality:**
- [ ] TypeScript types correct
- [ ] No linter errors
- [ ] No console errors
- [ ] Follows existing patterns
- [ ] Comments where helpful

**Testing:**
- [ ] Book landing page loads
- [ ] All chapters load
- [ ] Links work correctly
- [ ] Mobile responsive
- [ ] Navigation functional

### Design Standards

**Visual Consistency:**
- Use CSS variables (`var(--primary)`, etc.)
- Follow spacing guidelines (3rem margins, 2rem padding)
- Match existing card styles
- Use Lucide icons consistently
- Maintain typography standards

---

## 🤝 Collaboration Guidelines

### Git Workflow

```bash
# Always work on a feature branch
git checkout -b book/your-book-slug

# Commit regularly with clear messages
git commit -m "Add Chapter 5: Character analysis complete"

# Push to your branch
git push origin book/your-book-slug

# Create Pull Request when ready
```

### Branch Naming

- `book/[book-slug]` — Main book development
- `book/[book-slug]/chapter-X` — Individual chapter work
- `fix/[book-slug]/description` — Bug fixes
- `feature/description` — New features
- `docs/description` — Documentation updates

### Commit Messages

**Good:**
- "Add Pride and Prejudice: Chapters 1-5"
- "Update Jane Eyre Chapter 3: Add missing educator resources"
- "Fix: Correct typo in Frankenstein Chapter 2 summary"
- "Docs: Clarify chapter template instructions"

**Avoid:**
- "Updates"
- "Fix stuff"
- "WIP"
- "asdf"

### Pull Requests

**Include in your PR:**
1. **Clear title:** "Add [Book Title]: Chapters X-Y"
2. **Description:**
   - What book/chapters you're adding
   - Any questions or concerns
   - Checklist of completed items
3. **Self-review:**
   - Test locally before submitting
   - Run through quality checklist
   - Proofread all content

**PR Review Process:**
1. Submit PR
2. Automated checks run
3. Maintainer reviews content
4. Address feedback if needed
5. PR merged when approved

---

## 📋 Quality Checklist

Use this before submitting:

### Content Completeness
- [ ] All required sections present (see CHAPTER_TEMPLATE_STRUCTURE.md)
- [ ] Word counts meet guidelines
- [ ] 6 discussion questions + 6 amplified responses
- [ ] Educator resources complete

### Content Quality
- [ ] Proofread for typos and grammar
- [ ] Tone is consistent
- [ ] Analysis is insightful and accurate
- [ ] Modern parallels are relevant
- [ ] Citations are correct

### Technical Quality
- [ ] No TypeScript errors
- [ ] Tested locally
- [ ] Mobile responsive
- [ ] All links work
- [ ] Images load (if applicable)

### Design Consistency
- [ ] Follows design system
- [ ] Spacing is consistent
- [ ] Icons display correctly
- [ ] Cards styled properly

---

## 🎓 Learning Resources

### Example Books
- **Jane Eyre** — Complete reference implementation
  - `/app/books/jane-eyre/`
  - Study chapters 1-10 for examples

### Templates
- **_template-book** — Copy this to start
  - `/app/books/_template-book/`
  - Includes all necessary files

### Documentation
- **Full guide:** [CONTRIBUTOR_GUIDE.md](./CONTRIBUTOR_GUIDE.md)
- **Quick start:** [QUICK_START.md](./QUICK_START.md)
- **Structure:** [CHAPTER_TEMPLATE_STRUCTURE.md](./CHAPTER_TEMPLATE_STRUCTURE.md)
- **Index:** [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

---

## ❓ Getting Help

### Documentation
First, check if your question is answered in:
- [CONTRIBUTOR_GUIDE.md](./CONTRIBUTOR_GUIDE.md) → "Getting Help"
- [QUICK_START.md](./QUICK_START.md) → "Common Issues"
- [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) → "Find What You Need"

### GitHub Issues
Create an issue with appropriate label:
- `question` — General questions
- `help wanted` — Need assistance
- `bug` — Something's broken
- `documentation` — Docs unclear or wrong
- `book-setup` — Book setup problems

### In Your Pull Request
- Tag maintainer with @mention
- Ask specific questions in PR description
- Respond to review comments

### Discussion Board
For broader discussions:
- Ideas for new features
- Pedagogical approaches
- Content strategy
- Community building

---

## 🏆 Recognition

### Contributors Hall of Fame
All contributors are recognized in:
- Project README
- Book credits (for book contributors)
- Release notes

### Contributor Levels
- **Founding Contributor:** Complete first book
- **Chapter Author:** 10+ chapters contributed
- **Book Author:** Complete one full book
- **Prolific Author:** Multiple books completed
- **Core Contributor:** Ongoing significant contributions

---

## 📜 Code of Conduct

### Our Standards

**Be respectful:**
- Respectful communication
- Constructive feedback
- Welcome newcomers
- Celebrate contributions

**Be collaborative:**
- Share knowledge
- Help others learn
- Ask for help when needed
- Give credit where due

**Be professional:**
- Clear communication
- Meet commitments
- Accept feedback gracefully
- Focus on quality

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Spam or self-promotion
- Plagiarism or copyright violation

### Enforcement
Violations should be reported to project maintainers. We will review and take appropriate action, which may include warnings or removal from the project.

---

## 📊 Project Stats

### Current Status
- **Books:** 1+ (Jane Eyre complete, more in progress)
- **Chapters:** 10+ (and growing)
- **Contributors:** You could be next!
- **Target:** 100+ classic books with full IA analysis

### Contribution Opportunities
Check GitHub Issues for:
- Books needing chapters
- Documentation improvements
- Feature enhancements
- Bug fixes

---

## 🗺️ Contribution Roadmap

### Phase 1: Core Books (Current)
- Complete Jane Eyre (38 chapters)
- Add 5-10 essential classics
- Establish quality standards
- Build contributor community

### Phase 2: Expansion
- 20+ classic books
- Multiple contributors per book
- Enhanced features
- Teacher pilot program

### Phase 3: Scale
- 100+ books
- Global contributor network
- Advanced features (audio, video, interactive)
- Wide educational adoption

---

## 🎯 Impact

Your contribution helps:
- **Students** engage deeply with classic literature
- **Teachers** access expert analysis and resources
- **Educators** implement effective pedagogy
- **Literature** remain relevant and accessible
- **Community** preserve cultural heritage

**Every chapter you write impacts thousands of students!**

---

## 📞 Contact

### Project Lead
[Name]  
[Email]  
[@GitHub]

### Project Links
- **Repository:** [GitHub URL]
- **Live Site:** [Production URL]
- **Documentation:** [This repo]/docs
- **Issues:** [GitHub Issues]

---

## 🎉 Thank You!

Thank you for considering contributing to Amplified Classics. Whether you add a complete book, a single chapter, fix a typo, or spread the word—every contribution matters.

**Together, we're transforming how classic literature is taught and learned.**

---

## ✅ Ready to Start?

1. ✅ Read [QUICK_START.md](./QUICK_START.md)
2. ✅ Read [CONTRIBUTOR_GUIDE.md](./CONTRIBUTOR_GUIDE.md)
3. ✅ Copy `/app/books/_template-book`
4. ✅ Start writing!

**Questions?** Create an issue or reach out to maintainers.

**Let's amplify classic literature for the next generation!** 📚✨


