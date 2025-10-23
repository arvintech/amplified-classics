# Amplified Classics — Contributor Guide

## 🎯 Purpose

This guide enables multiple authors to independently develop books for the Amplified Classics platform while maintaining consistent structure, style, and quality.

---

## 📁 Project Structure

```
amplified-classics/
├── app/
│   ├── books/
│   │   ├── [book-slug]/          # Individual book directory
│   │   │   ├── config.ts          # Book metadata & configuration
│   │   │   ├── chapters/          # Chapter content files
│   │   │   │   ├── chapter-1.ts
│   │   │   │   ├── chapter-2.ts
│   │   │   │   └── ...
│   │   │   ├── page.tsx           # Book landing page
│   │   │   └── [chapter]/         # Dynamic chapter route
│   │   │       └── page.tsx       # Chapter template renderer
│   │   └── ...
│   ├── components/
│   │   ├── book/                  # Shared book components
│   │   │   ├── ChapterTemplate.tsx
│   │   │   ├── BookHeader.tsx
│   │   │   ├── ChapterNavigation.tsx
│   │   │   └── ...
│   │   └── ui/                    # UI primitives
│   └── lib/
│       ├── types/                 # TypeScript types
│       │   └── book.types.ts
│       └── utils/                 # Utility functions
└── docs/
    ├── CONTRIBUTOR_GUIDE.md       # This file
    ├── CHAPTER_TEMPLATE_STRUCTURE.md
    └── BOOK_SETUP_GUIDE.md
```

---

## 🚀 Quick Start: Adding a New Book

### 1. Create Book Directory

```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics/app/books
mkdir your-book-slug
cd your-book-slug
```

### 2. Copy Template Files

```bash
# Copy from template-book or existing book
cp -r ../jane-eyre/config.ts ./config.ts
cp -r ../jane-eyre/page.tsx ./page.tsx
mkdir chapters
mkdir [chapter]
cp ../jane-eyre/[chapter]/page.tsx ./[chapter]/page.tsx
```

### 3. Configure Book Metadata

Edit `config.ts`:

```typescript
export const bookConfig = {
  slug: 'your-book-slug',
  title: 'Your Book Title',
  author: 'Author Name',
  published: '1850',
  genre: 'Classic Fiction',
  totalChapters: 25,
  description: 'Brief book description...',
  themes: ['Theme 1', 'Theme 2', 'Theme 3'],
  // ... (see full config template below)
}
```

### 4. Start Adding Chapters

Create chapter content files in `chapters/`:

```typescript
// chapters/chapter-1.ts
import { ChapterData } from '@/app/lib/types/book.types'

export const chapter1: ChapterData = {
  number: 1,
  title: 'Chapter Title',
  summary: 'Brief summary...',
  // ... (see chapter data structure below)
}
```

### 5. Test Your Book

```bash
npm run dev
# Visit http://localhost:3000/books/your-book-slug
```

---

## 📊 Book Configuration Structure

### `config.ts` — Book Metadata

```typescript
import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  // Basic Information
  slug: 'pride-and-prejudice',
  title: 'Pride and Prejudice',
  subtitle: 'A Novel',
  author: 'Jane Austen',
  published: '1813',
  genre: 'Romance, Social Commentary',
  
  // Structure
  totalChapters: 61,
  parts: [
    {
      part: 1,
      title: 'First Impressions',
      subtitle: 'Meeting Mr. Darcy',
      description: 'Elizabeth Bennet meets the proud Mr. Darcy...',
      chapters: [1, 2, 3, 4, 5, 6] // chapter numbers
    },
    // ... more parts
  ],
  
  // Content
  description: 'A witty comedy of manners exploring love, class, and reputation in Regency England.',
  quote: 'It is a truth universally acknowledged...',
  
  // Themes
  themes: [
    'Love & Marriage',
    'Social Class',
    'Pride & Prejudice',
    'First Impressions',
    'Family',
    'Reputation'
  ],
  
  // Purchase Links
  purchaseLinks: {
    independent: {
      name: "Powell's Books",
      url: 'https://www.powells.com/book/...',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/dp/...',
      description: 'Fast delivery'
    }
  },
  
  // Free Resources
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/...'
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org/...'
    }
  ],
  
  // Contributor Info
  contributor: {
    name: 'Your Name',
    role: 'Content Author',
    email: 'your.email@example.com' // optional
  }
}
```

---

## 📝 Chapter Data Structure

### `chapters/chapter-X.ts` — Chapter Content

```typescript
import { ChapterData } from '@/app/lib/types/book.types'

export const chapter1: ChapterData = {
  // Basic Info
  number: 1,
  title: 'Chapter Title (optional)',
  
  // Reading Metadata
  readingTime: 15, // minutes
  pages: 8,
  
  // Summary Section
  summary: {
    brief: 'One sentence summary for chapter list',
    full: [
      'First paragraph of comprehensive summary...',
      'Second paragraph...',
      'Third paragraph...',
      'Fourth paragraph (optional)...'
    ]
  },
  
  // Characters
  characters: [
    {
      name: 'Character Name',
      development: 'Paragraph describing their role and development in this chapter...',
      keyTrait: {
        emoji: '🔥',
        text: 'Passionate & Independent'
      }
    },
    // 2-4 characters per chapter
  ],
  
  // Key Quotes
  quotes: [
    {
      text: 'The actual quote from the book...',
      analysis: 'Why this quote is significant...'
    },
    // 3-5 quotes per chapter
  ],
  
  // Intelligence Amplified Analysis
  iaAnalysis: {
    themes: [
      {
        name: 'Theme Name',
        explanation: 'Detailed explanation of theme in this chapter...'
      },
      // 2-3 themes
    ],
    literaryTechniques: [
      {
        name: 'Technique Name',
        explanation: 'How it's used and why...',
        example: 'Specific textual example (optional)'
      },
      // 3-4 techniques
    ]
  },
  
  // Modern Adaptation
  modernAdaptation: {
    setting: 'Description of modern equivalent setting...',
    parallels: [
      '📱 Social media parallel...',
      '💼 Workplace parallel...',
      '🏫 Educational parallel...'
    ],
    discussionPrompt: 'Question connecting past and present...'
  },
  
  // Thematic Threads (for tracking across novel)
  thematicThreads: [
    {
      emoji: '🔥',
      name: 'Independence',
      explanation: 'How this thread appears in this chapter...'
    },
    // Exactly 3 threads
  ],
  
  // Discussion Questions (Traditional)
  discussionQuestions: [
    {
      title: 'Question Category',
      question: 'The actual question?'
    },
    // Exactly 6 questions
  ],
  
  // Amplified Discussion (IA Feature)
  amplifiedDiscussion: [
    {
      id: 'question-slug',
      title: 'Question Title',
      question: 'Full question text?',
      aiResponse: `
**Main Analysis Section**

Detailed response with multiple subsections...

**Modern Connections**

How this relates to today...

**Discussion Prompts for Students**

Questions to explore further...

**Teaching Tip**

Practical classroom guidance...
      `
    },
    // Exactly 6 amplified questions
  ],
  
  // Educator Resources
  educatorResources: {
    writingPrompt: {
      title: 'Prompt Title',
      description: 'What students should write...',
      purpose: 'Why this helps learning...'
    },
    activity: {
      title: 'Activity Title',
      description: 'What to do...',
      materials: 'What you need...'
    },
    crossCurricular: {
      title: 'Connection Title',
      description: 'How to connect to other subjects...',
      subjects: ['History', 'Art', 'Philosophy']
    }
  }
}
```

---

## 🎨 Style & Design Guidelines

### Visual Design System

All books **must** follow these design standards:

#### Colors
```css
--primary: #1e5631 (deep green)
--background: #fafafa (off-white)
--card-bg: #f5f5f5 (light gray)
--text-primary: #1a1a1a (dark)
--text-secondary: #666666 (gray)
--border-color: #e0e0e0 (light gray)
```

#### Typography
- **Headings:** Playfair Display (`var(--font-heading)`)
- **Body:** Georgia (default serif)
- **H1:** `clamp(2rem, 5vw, 3rem)`
- **H2:** `1.5rem`
- **H3:** `1.125-1.25rem`
- **Body:** `1rem` with `line-height: 1.7-1.8`

#### Spacing
- Section margins: `3rem` bottom
- Card padding: `2rem`
- Max width: `900px` (centered)
- Grid gaps: `1rem`

#### Card Styles
```tsx
// Standard card
style={{
  background: 'white',
  border: '2px solid var(--border-color)',
  padding: '2rem'
}}

// Accent card (with left border)
style={{
  background: 'white',
  border: '2px solid var(--border-color)',
  borderLeft: '4px solid var(--primary)',
  padding: '2rem'
}}
```

---

## 🏗️ Component Usage

### Using ChapterTemplate Component

```tsx
// app/books/your-book/[chapter]/page.tsx
import { ChapterTemplate } from '@/app/components/book/ChapterTemplate'
import { bookConfig } from '../config'
import { chapter1 } from '../chapters/chapter-1'
import { chapter2 } from '../chapters/chapter-2'
// ... import all chapters

const chapters = [chapter1, chapter2, /* ... */]

export default function ChapterPage({ params }: { params: { chapter: string } }) {
  const chapterNum = parseInt(params.chapter.replace('chapter-', ''))
  const chapterData = chapters[chapterNum - 1]
  
  return (
    <ChapterTemplate
      bookConfig={bookConfig}
      chapterData={chapterData}
    />
  )
}
```

### Shared Components Available

- `<ChapterTemplate />` — Full chapter renderer
- `<BookHeader />` — Book landing page header
- `<ChapterNavigation />` — Previous/next navigation
- `<AmplifiedDiscussion />` — Interactive Q&A section
- `<CharacterCard />` — Character profile display
- `<QuoteCard />` — Quote with analysis
- `<ThemeCard />` — Theme explanation card
- `<EducatorCard />` — Educator resource card

---

## ✅ Quality Checklist

Before publishing a chapter, verify:

### Content Completeness
- [ ] Chapter number, title, summary
- [ ] 2-4 character profiles with key traits
- [ ] 3-5 key quotes with analysis
- [ ] IA Analysis (2-3 themes, 3-4 techniques)
- [ ] Modern adaptation with 3 parallels
- [ ] 3 thematic threads
- [ ] 6 traditional discussion questions
- [ ] 6 amplified discussion responses
- [ ] 3 educator resources

### Quality Standards
- [ ] Summary is 300-500 words (3-4 paragraphs)
- [ ] Each character description is 100-150 words
- [ ] Quote analyses are 1-2 sentences each
- [ ] Theme explanations are 75-100 words
- [ ] Technique explanations are 50-75 words
- [ ] Amplified responses are 1,500-2,000 words
- [ ] All content is proofread
- [ ] Tone is consistent (academic but accessible)

### Technical Requirements
- [ ] TypeScript types are correct
- [ ] All imports work
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Links are functional
- [ ] Icons display correctly
- [ ] Interactive features work

---

## 📋 Chapter Template Sections (Required Order)

Every chapter **must** include these 14 sections in order:

1. **Navigation Bar** (Sticky) — Back, chapter indicator, next
2. **Chapter Header** — Badges, title, summary, reading info
3. **Chapter Summary** 📖 — Comprehensive 3-4 paragraph summary
4. **Character Development** 👥 — 2-4 characters with traits
5. **Key Quotes** 💬 — 3-5 quotes with analysis
6. **Intelligence Amplified Analysis** 🧠 — Themes + techniques
7. **Modern Adaptation** ✨ — Contemporary setting + parallels
8. **Thematic Threads to Follow** 📈 — 3 tracking cards
9. **Discussion Questions** 💡 — 6 traditional questions
10. **Amplified Discussion** 🧠⚡ — 6 interactive questions (IA Feature)
11. **For Educators** 👨‍🏫 — 3 activity cards
12. **Get Your Copy** 📚 — Purchase links
13. **Chapter Navigation** (Bottom) — Next chapter link
14. **Footer Links** — IA Edition, all chapters, back to top

---

## 🔄 Workflow: Adding a Chapter

### Phase 1: Content Prep (1-2 hours)
1. Read the chapter 2-3 times
2. Take notes on themes, quotes, characters
3. Research historical context
4. Brainstorm modern parallels

### Phase 2: Data Creation (2-3 hours)
1. Create `chapters/chapter-X.ts` file
2. Fill in basic metadata (number, title, times)
3. Write comprehensive summary
4. Identify and describe 2-4 characters
5. Select and analyze 3-5 quotes
6. Write IA analysis (themes + techniques)

### Phase 3: Enhanced Content (3-4 hours)
1. Create modern adaptation
2. Identify 3 thematic threads
3. Write 6 discussion questions
4. Write 6 amplified responses (most time-intensive)
5. Create 3 educator resources

### Phase 4: Testing & Review (30 minutes)
1. Run `npm run dev`
2. Navigate to chapter page
3. Check all sections render correctly
4. Test interactive features
5. Verify mobile responsiveness
6. Proofread all content

**Total Time per Chapter:** 6-10 hours

---

## 🤝 Collaboration Best Practices

### Git Workflow

```bash
# 1. Create feature branch for your book
git checkout -b book/your-book-slug

# 2. Work on your book independently
# Add chapters incrementally

# 3. Commit regularly
git add app/books/your-book-slug/
git commit -m "Add Pride and Prejudice Chapter 5"

# 4. Push your branch
git push origin book/your-book-slug

# 5. Create pull request when ready
# Request review from maintainer
```

### Branch Naming Convention

- `book/[book-slug]` — Main book development
- `book/[book-slug]/chapter-X` — Individual chapter work
- `fix/[book-slug]/issue-description` — Bug fixes
- `feature/shared-component` — Shared component work

### Communication

- Create issues for questions
- Use pull request comments for feedback
- Tag maintainers for reviews
- Document decisions in PR descriptions

---

## 🎓 Learning Resources

### Required Reading
1. **CHAPTER_TEMPLATE_STRUCTURE.md** — Complete structure reference
2. **METHOD_DOCUMENTATION_SUMMARY.md** — Pedagogical approach
3. **Jane Eyre Chapter 1** — Reference implementation

### Recommended
- **CHAPTER_STYLE_AUDIT.md** — Style consistency guide
- **METHOD_QUICK_GUIDE.md** — Teaching methodology
- **IA_LOGO_INTEGRATION.md** — Branding guidelines

---

## 🆘 Getting Help

### Common Issues

**Q: My chapter doesn't render**
- Check TypeScript types match interface
- Verify all required fields are present
- Look for console errors in browser

**Q: Styling looks different**
- Use CSS variables (`var(--primary)`)
- Check spacing matches guidelines
- Verify card structure matches templates

**Q: Interactive features don't work**
- Ensure `"use client"` directive at top of file
- Check useState hooks are imported
- Verify event handlers are connected

### Support Channels

- **Documentation:** Read `/docs` folder
- **Examples:** Study `/app/books/jane-eyre`
- **Issues:** GitHub Issues for bugs
- **Questions:** Contact maintainer

---

## 🎯 Success Metrics

### For Your Book
- All chapters complete and reviewed
- Consistent quality across chapters
- No technical errors
- Mobile-responsive
- Pedagogically sound content

### For Contributors
- Follow style guide consistently
- Meet quality standards
- Communicate effectively
- Submit clean, well-tested code
- Respond to feedback constructively

---

## 📞 Maintainer Contact

**Project Lead:** [Your Name]  
**Email:** [your.email@example.com]  
**GitHub:** [@yourusername]

**Repository:** [GitHub URL]  
**Documentation:** `/docs` folder  
**Live Site:** [Production URL]

---

## ✨ Your Impact

Every book you add:
- ✅ Helps students engage with classic literature
- ✅ Empowers teachers with expert resources
- ✅ Demonstrates Intelligence Amplification
- ✅ Preserves literary heritage
- ✅ Makes learning more accessible

**Thank you for contributing to Amplified Classics!**

---

**Last Updated:** October 20, 2025  
**Guide Version:** 2.0  
**For Questions:** See Getting Help section above


