# Quick Start — Add a New Book in 5 Steps

## Prerequisites
- [ ] Read CONTRIBUTOR_GUIDE.md
- [ ] Understand CHAPTER_TEMPLATE_STRUCTURE.md
- [ ] Have git and Node.js installed

---

## Step 1: Copy Template (2 minutes)

```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics/app/books
cp -r _template-book your-book-slug
cd your-book-slug
```

**Example:** For "Pride and Prejudice"
```bash
cp -r _template-book pride-and-prejudice
cd pride-and-prejudice
```

---

## Step 2: Configure Book (10 minutes)

Edit `config.ts` and replace all `YOUR_*` placeholders:

```typescript
export const bookConfig: BookConfig = {
  slug: 'pride-and-prejudice',  // Match directory name
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  published: '1813',
  genre: 'Romance, Social Commentary',
  totalChapters: 61,
  description: 'A witty comedy of manners...',
  themes: ['Love & Marriage', 'Social Class', ...],
  contributor: {
    name: 'Your Name',
    role: 'Content Author'
  }
}
```

---

## Step 3: Create First Chapter (6-10 hours)

```bash
cp chapters/chapter-template.ts chapters/chapter-1.ts
```

Edit `chapter-1.ts` and fill in all sections:
- Summary (300-500 words)
- 2-4 Characters
- 3-5 Quotes
- IA Analysis
- Modern Adaptation
- 6 Discussion Questions
- 6 Amplified Responses (1,500-2,000 words each)
- 3 Educator Resources

**See CHAPTER_TEMPLATE_STRUCTURE.md for details.**

---

## Step 4: Register Chapter (2 minutes)

Edit `[chapter]/page.tsx`:

```typescript
// Import your chapter
import { chapter1 } from '../chapters/chapter-1'

// Add to chapters array
const chapters = [
  chapter1,
  // Add more as you create them
]
```

---

## Step 5: Test & Commit (5 minutes)

```bash
# Test locally
npm run dev
# Visit http://localhost:3000/books/your-book-slug

# Commit your work
git checkout -b book/your-book-slug
git add app/books/your-book-slug/
git commit -m "Add YOUR BOOK: Setup and Chapter 1"
git push origin book/your-book-slug
```

**Create Pull Request when ready for review!**

---

## Next Steps

- Continue with Chapter 2, 3, 4...
- Budget 6-10 hours per chapter
- Submit chapters in batches (every 5-10 chapters)
- Respond to PR feedback
- Celebrate when complete! 🎉

---

## Common Issues

**Q: My chapter doesn't show up**
- Check chapter is imported in `[chapter]/page.tsx`
- Verify it's added to `chapters` array
- Ensure chapter number matches array index

**Q: TypeScript errors**
- Make sure all required fields are present
- Check field names match `ChapterData` interface
- See `app/lib/types/book.types.ts` for reference

**Q: Styling looks wrong**
- Use CSS variables: `var(--primary)`, etc.
- Follow spacing guidelines (3rem margins, 2rem padding)
- Check card structure matches template

---

## Getting Help

- **Examples:** Study `/app/books/jane-eyre`
- **Full Guide:** CONTRIBUTOR_GUIDE.md
- **Setup Details:** BOOK_SETUP_GUIDE.md
- **Structure:** CHAPTER_TEMPLATE_STRUCTURE.md
- **Issues:** Create GitHub issue with `book-setup` label

---

## Checklist

- [ ] Template copied to new directory
- [ ] `config.ts` configured
- [ ] Chapter 1 content completed
- [ ] Chapter registered in `[chapter]/page.tsx`
- [ ] Tested at http://localhost:3000/books/YOUR-SLUG
- [ ] Committed to feature branch
- [ ] Ready to continue!

**Total Time:** ~15 hours for book setup + first chapter  
**Ongoing:** 6-10 hours per additional chapter

---

**You're ready to contribute to Amplified Classics!** 📚✨


