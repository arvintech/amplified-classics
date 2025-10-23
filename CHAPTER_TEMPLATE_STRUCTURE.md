# Amplified Classics — Chapter Template Structure

## Overview

This document defines the **standard structure for all IA Edition chapter pages**. Chapter 1 of Jane Eyre serves as the reference implementation.

---

## 📋 Required Sections (in order)

### 1. **Navigation Bar** (Sticky)
- **Position:** Sticky, below main header
- **Content:**
  - ← Back to All Chapters (link)
  - Chapter X of Y (indicator)
  - Next Chapter → (button, primary color)

### 2. **Chapter Header**
- **Chapter Badge** (e.g., "Chapter 1")
- **IA Edition Badge** (with Sparkles icon)
- **Chapter Title** (e.g., "Jane Eyre — Chapter 1")
- **Brief Summary** (2-3 sentences)
- **Reading Info Card** (Reading Time, Pages)

### 3. **Chapter Summary** 📖
- **Icon:** BookOpen
- **Content:** 3-4 paragraph comprehensive summary
- **Style:** Card with left border accent
- **Purpose:** Orient readers to chapter content

### 4. **Character Development** 👥
- **Icon:** Users
- **Content:** 
  - Character name (H3)
  - Development paragraph
  - Key trait badge/card
- **Repeat** for 2-4 main characters in chapter
- **Style:** White card with top border

### 5. **Key Quotes** 💬
- **Icon:** MessageSquare
- **Content:** 3-5 significant quotes
- **Format:** 
  - Quote (blockquote, italic)
  - 💡 Analysis (regular text)
- **Style:** Border-left accent on each quote

### 6. **Intelligence Amplified Analysis** 🧠
- **Icon:** Brain
- **Content:**
  - **Themes Introduced** (H3)
    - 2-3 major themes with explanations
  - **Literary Techniques** (H3)
    - 3-4 techniques with examples
- **Style:** White card with top border accent
- **Purpose:** Deep literary analysis

### 7. **Modern Adaptation** ✨
- **Icon:** Sparkles
- **Badge:** "2025 Setting"
- **Content:**
  - Contemporary Setting description
  - 📱 Modern Parallels (bulleted list)
  - 💭 Discussion Prompt
- **Style:** Card with left border, nested boxes
- **Purpose:** Help students connect to themes

### 8. **Thematic Threads to Follow** 📈
- **Icon:** TrendingUp
- **Content:** 3 theme cards with:
  - Emoji
  - Theme name
  - Explanation
- **Style:** Grid layout (3 columns)
- **Purpose:** Longitudinal tracking across novel

### 9. **Discussion Questions** 💡
- **Icon:** Lightbulb
- **Content:** 6 discussion questions (numbered list)
- **Format:**
  - **Bold Title:** Question text
- **Style:** Simple card with border
- **Purpose:** Traditional discussion starters

### 10. **Amplified Discussion** 🧠⚡ (IA Feature)
- **Badge:** "IA Feature" (absolute positioned, top right)
- **Icon:** Brain
- **Title:** "Amplified Discussion"
- **Content:**
  - Intro paragraph
  - 6 expandable question cards
  - Each card includes:
    - Question title + text
    - "Amplify This Question" button
    - Loading state (spinner)
    - Amplified response (with formatting)
    - Teacher tip
  - Feature explanation footer
- **Style:** Green gradient background, special treatment
- **Purpose:** Interactive Intelligence Amplified guidance

### 11. **For Educators** 👨‍🏫
- **Icon:** BookMarked
- **Content:** 3 activity cards:
  - 📝 Writing Prompt
  - 🎭 Activity
  - 🔗 Cross-Curricular
- **Style:** Grid layout, light background cards
- **Purpose:** Practical teaching resources

### 12. **Get Your Copy** 📚
- **Icon:** BookOpen
- **Content:**
  - Section title + description
  - 2 purchase cards:
    - Powell's Books (independent)
    - Amazon (convenience)
  - Free digital notice (Project Gutenberg, Standard Ebooks)
- **Style:** Gradient background, interactive cards
- **Purpose:** Monetization + access

### 13. **Chapter Navigation** (Bottom)
- **Content:**
  - "Next: Chapter X — Title"
  - "Continue to Chapter X" button
- **Style:** White card, full-width
- **Purpose:** Clear progression path

### 14. **Footer Links**
- **Content:**
  - "Learn about IA Edition"
  - "View all chapters"
  - "↑ Back to top" (smooth scroll)
- **Style:** Small text, border-top separator

---

## 🎨 Visual Design System

### Colors
- **Primary:** `var(--primary)` - Deep green (#1e5631)
- **Background:** `var(--background)` - Off-white
- **Card BG:** `var(--card-bg)` - Light gray
- **Text Primary:** `var(--text-primary)` - Dark
- **Text Secondary:** `var(--text-secondary)` - Gray
- **Border:** `var(--border-color)` - Light gray

### Typography
- **Headings:** `var(--font-heading)` (Playfair Display)
- **Body:** Georgia (default)
- **H1:** `clamp(2rem, 5vw, 3rem)` - Responsive
- **H2:** `1.5rem` - Section headers
- **H3:** `1.125-1.25rem` - Subsections
- **Body:** `1rem` / Line height: `1.7-1.8`

### Spacing
- **Section margin:** `3rem` bottom
- **Card padding:** `2rem`
- **Max width:** `900px` (centered)
- **Gap:** `1rem` (grids/flexbox)

### Card Styles
- **Standard Card:** White bg, `2px solid var(--border-color)`
- **Accent Card:** + `4px solid var(--primary)` left/top
- **Gradient Card:** `linear-gradient(135deg, rgba(...))` background
- **Interactive Card:** Hover effects (transform, shadow)

### Icons (lucide-react)
- **Size 24:** Section headers
- **Size 28:** Major features
- **Size 16-20:** Inline, buttons
- **Color:** `var(--primary)` typically

---

## 💻 Technical Requirements

### Component Type
- **"use client"** directive (for interactivity)
- **React hooks:** `useState` for Amplified Discussion
- **TypeScript:** Proper typing

### Imports Required
```typescript
import { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, ArrowRight, BookOpen, Brain, 
  MessageSquare, Lightbulb, Users, Sparkles, 
  TrendingUp, BookMarked, ExternalLink, 
  Zap, ChevronDown, ChevronUp, Loader2 
} from 'lucide-react'
import { Badge } from '@/app/components/ui/Badge'
```

### State Management
```typescript
const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set())
const [loadingQuestions, setLoadingQuestions] = useState<Set<string>>(new Set())
const [aiResponses, setAiResponses] = useState<Record<string, string>>({})
```

### Data Structure
```typescript
const DISCUSSION_QUESTIONS = [
  {
    id: 'question-slug',
    title: 'Question Title',
    question: 'Full question text?',
    aiPrompt: 'Prompt for AI analysis'
  },
  // ... 6 total questions
]
```

---

## 📝 Content Guidelines

### Chapter Summary
- **Length:** 300-500 words (3-4 paragraphs)
- **Structure:**
  - Para 1: Setting/opening
  - Para 2: Main action
  - Para 3: Character dynamics
  - Para 4: Consequences/closing
- **Tone:** Clear, engaging, spoiler-appropriate

### Character Development
- **Length:** 100-150 words per character
- **Include:** 
  - Character description
  - Actions in this chapter
  - Psychological insight
  - Foreshadowing (if applicable)
- **Key trait:** 1-2 word summary + emoji

### Key Quotes
- **Number:** 3-5 quotes
- **Selection criteria:**
  - Thematically significant
  - Literarily interesting
  - Quotable/memorable
- **Analysis:** 1-2 sentences explaining significance

### IA Analysis
- **Themes:** 2-3, with 75-100 words each
- **Literary Techniques:** 3-4, with 50-75 words each
- **Tone:** Academic but accessible
- **Include:** Specific textual references

### Discussion Questions
- **Number:** 6 questions
- **Types:**
  - 2 textual analysis questions
  - 2 thematic questions
  - 1 historical context question
  - 1 narrative technique question
- **Format:** Open-ended, thought-provoking

### Amplified Responses
- **Length:** 1,500-2,000 words per question
- **Structure:**
  - Main analysis (multiple sub-sections)
  - Modern connections
  - Discussion prompts
- **Formatting:** Use `**bold**` for emphasis
- **Tone:** Teacher-to-teacher, expert but friendly

---

## 🚀 Implementation Workflow

### For Each New Chapter:

1. **Content Prep**
   - Read chapter 2-3 times
   - Take notes on themes, quotes, characters
   - Research historical context
   - Brainstorm modern parallels

2. **File Creation**
   - Copy `/app/books/jane-eyre/chapter-1/page.tsx`
   - Rename to chapter number
   - Update metadata

3. **Content Population**
   - Update chapter header (number, title, summary)
   - Write chapter summary
   - Identify 2-4 key characters
   - Select 3-5 quotes
   - Write IA analysis (themes + techniques)
   - Write modern adaptation
   - Identify 3 thematic threads
   - Create 6 discussion questions
   - Write 6 Amplified responses

4. **Testing**
   - Check all interactive features
   - Verify links work
   - Test mobile responsiveness
   - Proofread all content

5. **Review**
   - Peer review content
   - Check alignment with novel
   - Verify pedagogical value

---

## 📊 Quality Checklist

Before publishing a chapter:

- [ ] All 14 sections present
- [ ] 6 discussion questions with Amplified responses
- [ ] 3-5 key quotes with analysis
- [ ] 2-4 characters profiled
- [ ] Modern adaptation included
- [ ] Purchase links functional
- [ ] Navigation works (prev/next)
- [ ] Mobile responsive
- [ ] No typos/errors
- [ ] Consistent tone/voice
- [ ] IA Edition badge present
- [ ] Interactive features work
- [ ] All icons display correctly
- [ ] Links are correct

---

## 🎯 Customization Guidelines

### What Can Vary by Chapter:
- ✅ Number of characters (2-4)
- ✅ Number of quotes (3-5)
- ✅ Specific themes discussed
- ✅ Modern parallels chosen
- ✅ Discussion question topics
- ✅ Length of summaries (within ranges)

### What Must Stay Consistent:
- ❌ Section order
- ❌ Overall structure
- ❌ Visual design system
- ❌ Icon usage
- ❌ Card styling
- ❌ Interactive feature behavior
- ❌ Number of discussion questions (6)
- ❌ Branding (IA Edition, "Amplified")

---

## 🔄 Future Enhancements

Consider adding to future chapters:
- **Audio clips** (dramatic readings)
- **Timeline visualizations**
- **Character relationship maps**
- **Vocabulary sidebars**
- **Historical image galleries**
- **Student annotation tools**

---

## 📞 Support

Questions about implementing this template?
- Reference: `/app/books/jane-eyre/chapter-1/page.tsx`
- Documentation: This file
- Style guide: Use existing components in `/app/components/ui/`

---

**Last Updated:** October 20, 2025  
**Template Version:** 1.0  
**Reference Implementation:** Jane Eyre Chapter 1

