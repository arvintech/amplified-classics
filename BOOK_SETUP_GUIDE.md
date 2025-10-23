# Book Setup Guide — Step-by-Step

## Overview

This guide walks you through setting up a new book in the Amplified Classics platform. Follow these steps to create a complete book structure that follows all standards.

---

## Prerequisites

- Access to the amplified-classics repository
- Basic understanding of TypeScript/React
- Familiarity with Next.js App Router
- Read CONTRIBUTOR_GUIDE.md
- Read CHAPTER_TEMPLATE_STRUCTURE.md

---

## Step 1: Create Book Directory Structure

```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics/app/books

# Create your book directory (use kebab-case)
mkdir pride-and-prejudice
cd pride-and-prejudice

# Create required subdirectories
mkdir chapters
mkdir [chapter]
```

---

## Step 2: Create Book Configuration

Create `config.ts` in your book directory:

```typescript
// app/books/pride-and-prejudice/config.ts
import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  slug: 'pride-and-prejudice',
  title: 'Pride and Prejudice',
  subtitle: 'A Novel',
  author: 'Jane Austen',
  published: '1813',
  genre: 'Romance, Social Commentary',
  totalChapters: 61,
  
  parts: [
    {
      part: 1,
      title: 'Netherfield Park',
      subtitle: 'First Impressions',
      description: 'The Bennet family meets the wealthy Mr. Bingley and the proud Mr. Darcy.',
      chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    // Add more parts...
  ],
  
  description: 'A witty comedy of manners exploring marriage, morality, and misconception in Regency England.',
  
  quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
  
  themes: [
    'Love & Marriage',
    'Social Class',
    'Pride & Prejudice',
    'First Impressions',
    'Family Dynamics',
    'Reputation'
  ],
  
  purchaseLinks: {
    independent: {
      name: "Powell's Books",
      url: 'https://www.powells.com/book/pride-prejudice-9780141439518',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/dp/0141439513',
      description: 'Fast delivery'
    }
  },
  
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/1342'
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org/ebooks/jane-austen/pride-and-prejudice'
    }
  ],
  
  contributor: {
    name: 'Your Name',
    role: 'Content Author',
    email: 'your.email@example.com'
  }
}
```

---

## Step 3: Create Book Landing Page

Create `page.tsx` in your book directory:

```typescript
// app/books/pride-and-prejudice/page.tsx
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, BookOpen, Clock, Users, Lightbulb } from 'lucide-react'
import { bookConfig } from './config'

export const metadata: Metadata = {
  title: `${bookConfig.title} by ${bookConfig.author} - Amplified Classics`,
  description: bookConfig.description,
}

export default function BookPage() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      {/* Back Navigation */}
      <div style={{
        padding: '1.5rem 2rem',
        borderBottom: '1px solid var(--border-color)',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: '600',
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowLeft size={18} />
            Back to Library
          </Link>
        </div>
      </div>

      {/* Book Header */}
      <section style={{
        background: 'var(--primary)',
        color: 'white',
        padding: '4rem 2rem',
        borderBottom: '3px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: 'rgba(255, 255, 255, 0.2)',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Complete Edition
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '300',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            fontFamily: 'var(--font-heading)'
          }}>
            {bookConfig.title}
          </h1>

          {bookConfig.subtitle && (
            <p style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              opacity: 0.9,
              marginBottom: '0.5rem'
            }}>
              {bookConfig.subtitle}
            </p>
          )}

          <p style={{
            fontSize: '1.25rem',
            opacity: 0.85,
            marginBottom: '2rem'
          }}>
            by {bookConfig.author}
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} />
              <span>{bookConfig.totalChapters} Chapters</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} />
              <span>Published {bookConfig.published}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} />
              <span>{bookConfig.genre}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                About This Novel
              </h2>

              {bookConfig.quote && (
                <blockquote style={{
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  borderLeft: '3px solid var(--primary)',
                  paddingLeft: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  "{bookConfig.quote}"
                </blockquote>
              )}

              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                {bookConfig.description}
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Key Themes
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {bookConfig.themes.map((theme) => (
                  <div key={theme} style={{
                    padding: '0.75rem 1rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.9375rem',
                    fontWeight: '600'
                  }}>
                    {theme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section style={{
        padding: '4rem 2rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              Chapters
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              fontSize: '0.875rem',
              color: 'var(--text-secondary)'
            }}>
              <Lightbulb size={16} />
              <span>Intelligence Amplified analysis available for all chapters</span>
            </div>
          </div>

          {/* Chapter Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            {Array.from({ length: bookConfig.totalChapters }, (_, i) => i + 1).map((chapterNum) => (
              <Link
                key={chapterNum}
                href={`/books/${bookConfig.slug}/chapter-${chapterNum}`}
                style={{
                  display: 'block',
                  padding: '1.5rem',
                  background: 'white',
                  border: '2px solid var(--border-color)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.5rem'
                }}>
                  Chapter {chapterNum}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600'
                }}>
                  <BookOpen size={14} />
                  Read Chapter
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
```

---

## Step 4: Create Dynamic Chapter Route

Create `[chapter]/page.tsx`:

```typescript
// app/books/pride-and-prejudice/[chapter]/page.tsx
'use client'

import { notFound } from 'next/navigation'
import { bookConfig } from '../config'
// Import all chapter data files
import { chapter1 } from '../chapters/chapter-1'
// import { chapter2 } from '../chapters/chapter-2'
// ... import all chapters

const chapters = [
  chapter1,
  // chapter2,
  // ... list all chapters
]

export default function ChapterPage({ params }: { params: { chapter: string } }) {
  const chapterNum = parseInt(params.chapter.replace('chapter-', ''))
  
  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > bookConfig.totalChapters) {
    notFound()
  }
  
  const chapterData = chapters[chapterNum - 1]
  
  if (!chapterData) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h1>Chapter {chapterNum} Coming Soon</h1>
        <p>This chapter is currently being developed.</p>
      </div>
    )
  }
  
  // For now, you can copy the structure from jane-eyre/chapter-1/page.tsx
  // Or create a shared ChapterTemplate component
  return (
    <div>
      {/* Copy chapter rendering structure from Jane Eyre Chapter 1 */}
      {/* Or use ChapterTemplate component if created */}
      <h1>{bookConfig.title} — Chapter {chapterNum}</h1>
      {/* ... render chapter sections ... */}
    </div>
  )
}
```

---

## Step 5: Create Your First Chapter

Create `chapters/chapter-1.ts`:

```typescript
// app/books/pride-and-prejudice/chapters/chapter-1.ts
import { ChapterData } from '@/app/lib/types/book.types'

export const chapter1: ChapterData = {
  number: 1,
  title: '', // Optional, if chapter has a title
  
  readingTime: 12,
  pages: 6,
  
  summary: {
    brief: 'Mr. Bingley arrives at Netherfield Park, and Mrs. Bennet schemes to marry one of her daughters to him.',
    full: [
      'The novel opens with the famous line about single men in possession of fortunes. Mrs. Bennet is excited about the arrival of Mr. Bingley, a wealthy young bachelor who has rented Netherfield Park.',
      'She urges her husband to visit Mr. Bingley and introduces their five daughters to him. Mr. Bennet teases his wife about her matchmaking schemes.',
      'The chapter establishes the Bennet family dynamics: Mrs. Bennet\'s obsession with marrying off her daughters, Mr. Bennet\'s sardonic humor, and the social importance of advantageous marriages.',
      'We learn about the five Bennet sisters and the entailment that will leave the estate to a distant male relative, making it crucial for the daughters to marry well.'
    ]
  },
  
  characters: [
    {
      name: 'Mrs. Bennet',
      development: 'Introduced as a woman obsessed with marrying her daughters to wealthy men. Her excitement about Mr. Bingley reveals her single-minded focus on social advancement through marriage. Her nervous energy and lack of sophistication contrast with her husband\'s wit.',
      keyTrait: {
        emoji: '💍',
        text: 'Matchmaking Obsession'
      }
    },
    {
      name: 'Mr. Bennet',
      development: 'Presents as a clever, sarcastic man who enjoys teasing his wife. His detached amusement at his wife\'s schemes hints at a complex marriage. He eventually visits Bingley despite pretending he won\'t, showing affection beneath his mockery.',
      keyTrait: {
        emoji: '📖',
        text: 'Sardonic Wit'
      }
    }
  ],
  
  quotes: [
    {
      text: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      analysis: 'This famous opening line ironically presents marriage from a mercenary perspective, immediately establishing the novel\'s satirical tone about social expectations and marriage markets.'
    },
    {
      text: 'You have no compassion on my poor nerves.',
      analysis: 'Mrs. Bennet\'s complaint reveals both her theatrical nature and the real anxiety women faced in an era where daughters\' futures depended entirely on advantageous marriages.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'Marriage as Economic Necessity',
        explanation: 'The chapter immediately establishes marriage not as romance but as financial survival. The entailment of the Bennet estate means the daughters must marry to secure their futures. Mrs. Bennet\'s obsession isn\'t just vanity—it\'s genuine concern for her daughters\' survival in a society where women couldn\'t inherit property.'
      },
      {
        name: 'Social Class and Expectations',
        explanation: 'Austen introduces the rigid class structures of Regency England. A man with £4,000 or £5,000 a year represents extraordinary wealth and social position. The entire neighborhood\'s excitement about Bingley reveals how class mobility through marriage dominated social thinking.'
      }
    ],
    literaryTechniques: [
      {
        name: 'Ironic Opening',
        explanation: 'The famous first sentence uses irony to critique social assumptions. It\'s not bachelors who want wives—it\'s families with daughters who want wealthy bachelors. This ironic voice continues throughout the novel.',
        example: '"It is a truth universally acknowledged..." actually means "According to scheming mothers..."'
      },
      {
        name: 'Dialogue-Driven Characterization',
        explanation: 'Austen reveals character through witty dialogue rather than description. Mr. Bennet\'s teasing responses and Mrs. Bennet\'s exasperated replies immediately establish their personalities and marital dynamics.',
        example: 'The back-and-forth about visiting Bingley shows Mr. Bennet\'s playful cruelty and Mrs. Bennet\'s inability to recognize his sarcasm.'
      },
      {
        name: 'Narrative Voice',
        explanation: 'The narrator maintains sophisticated distance, observing the characters with subtle judgment. This third-person limited perspective allows for social commentary while remaining intimate with character psychology.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'A wealthy tech entrepreneur moves into an upscale neighborhood, and local families with college-age children see opportunity for networking and career advancement through social connection.',
    parallels: [
      '💍 Social media matchmaking and LinkedIn networking replacing formal visits',
      '💰 Student loan debt creating similar financial pressures that marriage once solved',
      '👨‍👩‍👧‍👦 Parents still strategizing their children\'s social connections for advancement',
      '🏘️ Neighborhood group chats buzzing with news like Mrs. Bennet\'s gossip'
    ],
    discussionPrompt: 'In what ways do modern families still face economic pressures around their children\'s futures? How has the nature of these pressures changed or remained the same?'
  },
  
  thematicThreads: [
    {
      emoji: '💍',
      name: 'Marriage Market',
      explanation: 'The opening chapter establishes marriage as transaction. Track how Austen critiques and complicates this view as the novel progresses.'
    },
    {
      emoji: '🎭',
      name: 'First Impressions',
      explanation: 'The community forms immediate judgments about Bingley based on his wealth alone. The novel will challenge whether first impressions reveal truth or conceal it.'
    },
    {
      emoji: '💬',
      name: 'Wit and Intelligence',
      explanation: 'Mr. Bennet\'s cleverness is introduced. The novel will explore whether wit is a virtue or a weapon, and how different forms of intelligence matter.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'Irony and Truth',
      question: 'What does the famous opening line actually mean? What truth is Austen revealing through irony?'
    },
    {
      title: 'Character Dynamics',
      question: 'What does the dialogue between Mr. and Mrs. Bennet reveal about their marriage?'
    },
    {
      title: 'Economic Realities',
      question: 'Why is Mrs. Bennet so obsessed with her daughters marrying wealthy men? Is this just vanity?'
    },
    {
      title: 'Social Commentary',
      question: 'What is Austen criticizing about her society in this opening chapter?'
    },
    {
      title: 'Narrative Technique',
      question: 'How does Austen use dialogue to reveal character rather than description?'
    },
    {
      title: 'Modern Connections',
      question: 'What modern social pressures are similar to the marriage market Austen describes?'
    }
  ],
  
  amplifiedDiscussion: [
    {
      id: 'opening-irony',
      title: 'The Famous Opening Line',
      question: 'What is Austen actually saying with "It is a truth universally acknowledged..."?',
      aiResponse: `
**Understanding Austen's Irony**

This is one of the most famous opening lines in English literature, and it's brilliant because it says the opposite of what it seems to say.

**What It Seems to Say:**
"Wealthy single men want wives."

**What It Actually Means:**
"Families with unmarried daughters desperately want wealthy single men."

Austen is using irony—saying one thing while meaning another—to critique her society's obsession with marriage as economic transaction.

**Why This Is Revolutionary Writing:**

In 1813, most novels opened with elaborate descriptions of setting or character. Austen opens with a satirical observation that immediately:
- Establishes her ironic narrative voice
- Criticizes social assumptions about marriage
- Reveals the economic desperation behind romantic plots
- Invites readers to question "universal truths"

**The Psychological Insight:**

Austen is showing us that what society calls "truth" is often self-serving fiction. Mrs. Bennet believes wealthy men need wives because SHE needs her daughters married. We all construct "truths" that justify our desires.

**For Discussion:**

What "universal truths" do we accept today that might actually be self-serving assumptions? How does Austen teach us to question conventional wisdom?
      `
    },
    {
      id: 'mrs-bennet-sympathy',
      title: 'Understanding Mrs. Bennet',
      question: 'Is Mrs. Bennet just a ridiculous character, or does she deserve sympathy?',
      aiResponse: `
**Beyond the Stereotype**

Mrs. Bennet is often read as comic relief—silly, vapid, embarrassing. But Austen invites us to understand the real terror behind her behavior.

**Her Actual Situation:**

- She has FIVE daughters
- The estate is entailed to a male heir (Mr. Collins)
- When Mr. Bennet dies, they'll have almost no income
- She likely married Mr. Bennet for security, not love
- Her daughters' survival depends entirely on marriage
- She has no power to change this system

**What Looks Like Vanity Is Actually Panic:**

Every time Mrs. Bennet pushes her daughters toward eligible men, she's not being greedy—she's trying to prevent her family from becoming destitute. In Regency England, unmarried women with no inheritance faced real poverty.

**Austen's Complexity:**

The novel makes Mrs. Bennet ridiculous while also revealing WHY she's desperate. Her behavior is both comic and tragic. She's a victim of the same system she perpetuates.

**The Class Dimension:**

Mrs. Bennet came from a lower social class (trade). Her anxiety about her daughters' prospects reflects her own precarious position in gentry society. She knows how easily women fall from respectability.

**Teaching Moment:**

When students laugh at Mrs. Bennet, push them to ask: What economic realities create her behavior? How does Austen make us complicit in mocking a woman who has real reasons for fear?

**Modern Parallel:**

Think about how we judge anxious parents pushing their kids toward prestigious colleges or careers. What economic anxieties drive that behavior? When is ambition "ridiculous" and when is it survival?
      `
    }
    // Add remaining 4 amplified questions...
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Rewrite the Opening in Modern Context',
      description: 'Students rewrite Austen\'s opening line to reflect modern "universal truths" about relationships, money, or social status.',
      purpose: 'Helps students understand how irony works and how social critique can be embedded in seemingly simple statements.'
    },
    activity: {
      title: 'Marriage Market Game',
      description: 'Create a simulation where students role-play Regency-era social dynamics, navigating social calls, introductions, and the economics of marriage. Debrief about how economic necessity shaped relationship choices.',
      materials: 'Character cards with financial situations, social rank indicators, estate inheritance rules handout'
    },
    crossCurricular: {
      title: 'Economics of Marriage',
      description: 'Connect to economics by analyzing the actual financial calculations families made. Calculate what £5,000 a year meant in 1813 vs today. Explore entailment laws and property rights.',
      subjects: ['Economics', 'History', 'Women\'s Studies', 'Law']
    }
  }
}
```

---

## Step 6: Test Your Setup

```bash
# From project root
npm run dev

# Visit:
# http://localhost:3000/books/pride-and-prejudice
# http://localhost:3000/books/pride-and-prejudice/chapter-1
```

---

## Step 7: Commit Your Work

```bash
git checkout -b book/pride-and-prejudice
git add app/books/pride-and-prejudice/
git commit -m "Add Pride and Prejudice: Book setup and Chapter 1"
git push origin book/pride-and-prejudice
```

---

## Tips for Success

### Content Creation
- Read each chapter 2-3 times before writing
- Take notes on major themes, character moments, quotes
- Research historical context
- Draft modern parallels before writing formal analysis

### Quality Control
- Use the checklist in CONTRIBUTOR_GUIDE.md
- Test all interactive features
- Proofread carefully
- Get peer review before submitting

### Time Management
- Budget 6-10 hours per chapter
- Work on 2-3 chapters per week
- Keep backlog of drafted content
- Review and refine regularly

### Collaboration
- Communicate progress in issues/PRs
- Ask questions early
- Share challenges with team
- Learn from other books in repo

---

## Next Steps

1. ✅ Create book directory structure
2. ✅ Configure book metadata
3. ✅ Create book landing page
4. ✅ Set up dynamic chapter route
5. ✅ Create first chapter content
6. ✅ Test thoroughly
7. 📝 Continue with remaining chapters
8. 🔄 Submit for review
9. 🚀 Publish!

---

## Getting Help

**Questions?** See CONTRIBUTOR_GUIDE.md Getting Help section

**Examples?** Study `/app/books/jane-eyre`

**Issues?** Create GitHub issue with `book-setup` label

---

**Happy contributing!** 📚✨


