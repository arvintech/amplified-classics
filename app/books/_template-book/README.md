# Template Book — Getting Started

## How to Use This Template

1. **Copy this directory:**
   ```bash
   cp -r app/books/_template-book app/books/YOUR-BOOK-SLUG
   cd app/books/YOUR-BOOK-SLUG
   ```

2. **Edit `config.ts`:**
   - Replace all `YOUR_*` placeholders
   - Add your book's metadata
   - Define parts/chapters structure

3. **Edit `page.tsx`:**
   - Update any custom descriptions
   - Adjust layout if needed (though defaults work well)

4. **Create chapter files:**
   - Copy `chapters/chapter-template.ts`
   - Rename to `chapter-1.ts`, `chapter-2.ts`, etc.
   - Fill in chapter content

5. **Edit `[chapter]/page.tsx`:**
   - Import your chapter files
   - Add them to the `chapters` array

6. **Test your book:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/books/YOUR-BOOK-SLUG
   ```

7. **Delete this README** when you're done setting up

## Required Reading

- **CONTRIBUTOR_GUIDE.md** — Complete contributor documentation
- **BOOK_SETUP_GUIDE.md** — Step-by-step setup instructions
- **CHAPTER_TEMPLATE_STRUCTURE.md** — Chapter content standards

## Getting Help

- Study `/app/books/jane-eyre` for a complete example
- See CONTRIBUTOR_GUIDE.md "Getting Help" section
- Create a GitHub issue with `book-setup` label

## Checklist

- [ ] Copied template to new directory with correct slug
- [ ] Updated config.ts with all book metadata
- [ ] Created at least one chapter file
- [ ] Tested book landing page loads
- [ ] Tested chapter-1 page loads
- [ ] Committed work to feature branch
- [ ] Ready to add more chapters

Good luck! 📚✨

