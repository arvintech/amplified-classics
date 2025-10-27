# Chapter Template V3 - Amplified Classics

**Version:** 3.0  
**Last Updated:** October 26, 2025  
**For:** All chapters 2+ (Chapter 1 has unique sections)

---

## 🎯 Quick Start

### What You Need
- [ ] Copy `ChapterAllTemplate.ts` to create new chapter file
- [ ] Have the source book ready
- [ ] Reference this guide for structure & styling
- [ ] Check a completed chapter (e.g., `jane-eyre/chapter-13.ts`)
- [ ] **⚠️ DON'T FORGET:** Update routing in `[chapter]/page.tsx` (see Step 18 in HOW_TO_CREATE_A_CHAPTER.md)

### Time Estimate
**6-8 hours total** for a complete, high-quality chapter:
- Content creation: 4-5 hours
- Deep analysis (Amplified Discussions): 2-2.5 hours
- Quality review: 1 hour

### The 13-Section Structure
Every chapter (2+) includes these sections in order:

1. **Chapter Summary** - Brief + detailed overview
2. **Terms to Know** - Literary & vocabulary terms
3. **Characters** - Character development for this chapter
4. **Key Quotes** - Important passages with analysis
5. **IA Analysis** - Intelligence Amplified Analysis with themes & techniques
6. **Modern Adaptation** - Contemporary parallels
7. **Thematic Threads** - Ongoing themes tracking patterns
8. **Discussion Questions** - Open-ended thinking
9. **Amplified Discussions** - 6 deep expert analyses (REQUIRED)
10. **Educator Resources** - Teaching tools
11. **Critical Thinking Exercise** - Optional deep-dive
12. **Why Literature Matters** - Closing motivation
13. **Next Time Teaser** - Preview of next chapter

---

## 📋 Part 1: Content Structure

### V3 Section Formatting Standards

**All sections MUST use this exact format:**

```typescript
// ===================================================================
// SECTION NAME
// Brief description of section purpose
// ===================================================================
```

**Key Requirements:**
- Exactly **67 equal signs** (`===`) in divider lines
- Section name in ALL CAPS
- Descriptive comment on second line
- Blank line before section content

### Section 1: Summary ✅ REQUIRED

**Header Format:**
```typescript
// ===================================================================
// SUMMARY
// Two-level summary: brief (one sentence) and full (3-4 paragraphs)
// ===================================================================
```

**Purpose:** Orient readers to what happens before analysis

**Structure:**
```typescript
summary: {
  brief: 'One-sentence summary (max 50 words)',
  full: [
    'Paragraph 1: Opening situation, setting, mood',
    'Paragraph 2: Key events and developments',
    'Paragraph 3: Themes, conflicts, character revelations',
    'Paragraph 4 (optional): Connection to previous/future chapters'
  ]
}
```

**Best Practices:**
- Brief = truly one sentence, captures the essence
- Full = 3-4 substantial paragraphs (150-200 words each)
- Connect to previous chapters when relevant
- Focus on what students need to understand first

**Example Quality:**
- ✅ "Rochester returns to Thornfield and summons Jane for their first formal meeting..."
- ❌ "In this chapter, things happen with Rochester and Jane."

---

### Section 2: Terms to Know ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// TERMS TO KNOW
// Literary devices, vocabulary words, and concepts crucial to understanding
// ===================================================================
```

**Purpose:** Build literary vocabulary progressively

**Target:** 5-7 terms mixing:
- Literary devices (2-3)
- Vocabulary words (1-2)
- Historical/cultural concepts (1-2)

**Structure:**
```typescript
termsToKnow: [
  {
    term: 'Clear, Specific Term',
    definition: 'Accessible definition (no jargon)',
    context: 'How it appears in THIS chapter specifically',
    whyItMatters: 'Practical relevance to students'
  }
]
```

**Best Practices:**
- Make "whyItMatters" connect to student life
- Context should cite specific chapter moments
- Avoid academic jargon in definitions
- Balance sophistication with accessibility

**Example Quality:**
- ✅ whyItMatters: "This is revolutionary for 1847: a poor governess and wealthy gentleman relating as minds first, positions second."
- ❌ whyItMatters: "This is an important literary concept."

---

### Section 3: Characters ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// CHARACTERS
// Character development for this chapter
// ===================================================================
```

**Purpose:** Track character arcs chapter by chapter

**Target:** 2-4 characters who appear/develop in this chapter

**Structure:**
```typescript
characters: [
  {
    name: 'Character Name',
    development: 'Substantial paragraph (150-200 words) about THIS chapter',
    keyTrait: {
      emoji: '🎭', // B&W-safe emoji
      text: 'One or Two Words'
    }
  }
]
```

**Best Practices:**
- Focus on NEW developments, not recap
- Show change/growth from previous chapters
- Use B&W-safe emojis only (see Section 8: Emojis)
- Make it about THIS chapter's revelations

**Example Quality:**
- ✅ "This chapter shows Jane as Rochester first encounters her: poised, self-possessed..."
- ❌ "Jane is the protagonist and she appears in this chapter."

---

### Section 4: Key Quotes ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// KEY QUOTES
// 3-5 significant quotations with analysis (50-75 words max)
// ===================================================================
```

**Purpose:** Train students to speed-read for significance while building appreciation

**Why It Matters:** Students learn to spot literary gold—quotes that reveal character depth, advance themes, or demonstrate craft. This isn't slow analysis; it's learning to recognize what matters at reading speed.

**Structure:**
```typescript
quotes: [
  {
    text: 'Exact quote from the text',
    analysis: 'One focused insight (50-75 words max)'
  }
]
```

**Target:** 3-5 quotes that matter most

**Selection Criteria (Speed-Reading Questions):**
- Does this reveal hidden character motivation?
- Does this advance a major theme?
- Does this demonstrate exceptional craft?
- Would I highlight this while reading?
- Does this change how we see the story?

**Analysis Guidelines:**
- **One insight only** - What's the ONE thing readers must notice?
- **Front-load the point** - First sentence = why it matters
- **Be concrete** - Name the specific technique or revelation
- **Skip obvious** - Don't explain what's already clear
- **Make it quotable** - Write analysis worth remembering

**Example Quality:**

✅ **Good (Speed + Appreciation):**
- Quote: "I would always rather be happy than dignified."
- Analysis: "Jane rejects Victorian femininity's core mandate—dignity over desire. This single line predicts her ultimate choice: she'll leave Rochester rather than compromise integrity, then return when she can love him as an equal. It's rebellion compressed into eight words."

❌ **Bad (Too Slow):**
- Analysis: "This quote is important because it shows Jane's character. She values happiness. This is significant to the plot and tells us about her personality. We can see that she has strong feelings..."

**The Difference:** Good analysis hits fast, names exactly what matters, connects to bigger stakes. Bad analysis circles without landing.

**Visual Note:** Renders with **left green border accent** on white card

---

### Section 5: IA Analysis (Intelligence Amplifier Analysis) ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// IA ANALYSIS (Intelligence Amplifier Analysis)
// Deep thematic and technical analysis
// ===================================================================
```

**Purpose:** Model literary analysis thinking

**Target:** 2-3 themes, 2-3 techniques

**Structure:**
```typescript
iaAnalysis: {
  themes: [
    {
      name: 'Specific Theme Name',
      explanation: 'How it appears in this chapter (150-200 words)'
    }
  ],
  literaryTechniques: [
    {
      name: 'Technique Name',
      explanation: 'How it works (100-150 words)',
      example: 'Specific example from this chapter'
    }
  ]
}
```

**Best Practices:**
- Show theme development, not just presence
- Connect to Chapter 1 themes when relevant
- Techniques should have concrete examples
- Explain WHY author uses each technique

---

### Section 6: Literary Techniques ⭐ RECOMMENDED

**Purpose:** Show craft in action

**Note:** This is part of `iaAnalysis.literaryTechniques` (see Section 5)

**Common Techniques to Look For:**
- Narrative perspective shifts
- Symbolism and imagery
- Foreshadowing
- Irony (dramatic, verbal, situational)
- Dialogue as character revelation
- Setting as mood/theme
- Pacing and structure

---

### Section 7: Modern Adaptation ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// MODERN ADAPTATION
// Connect classic text to contemporary life (~200 words)
// ===================================================================
```

**Purpose:** Make classics relevant by creating authentic contemporary parallels

**Why It Matters:** Students engage deeply when they see their own experiences reflected in classic literature, recognizing that human conflicts transcend time periods. Authentic modern parallels transform "old stories" into urgent, relatable explorations of power, identity, and relationship dynamics students navigate daily.

**Structure:**
```typescript
modernAdaptation: {
  setting: 'Specific, detailed modern scenario (not generic)',
  parallels: [
    '🔹 **Aspect**: Specific connection to modern life',
    '🔹 **Aspect**: Another connection',
    '🔹 **Aspect**: Another connection',
    '🔹 **Aspect**: Another connection'
  ],
  discussionPrompt: 'Question bridging past and present'
}
```

**Target:** 4-5 specific parallels

**Best Practices:**
- **Be CONCRETE:** Name actual platforms (Slack, Discord, TikTok), real situations (startup accelerator, college roommate conflict)
- **Use 2025 language:** "ghosting," "trauma dumping," "main character energy," "situationship"
- **Make it relatable:** Focus on student experiences (academic pressure, workplace hierarchy, social dynamics)
- **Don't force it:** If parallel feels strained, rethink the scenario entirely
- **Show power dynamics:** If chapter involves hierarchy, reflect it authentically in modern context
- **Capture emotions:** Focus on universal feelings, not surface plot details

**Example Quality:**
- ✅ "Imagine you're in a competitive tech startup accelerator. Your co-founder criticized your pitch deck publicly in Slack..."
- ❌ "Imagine a modern workplace situation where there's conflict."

**The Difference:** Good examples name specific platforms, show power dynamics, capture psychological complexity, and use contemporary framing. Generic examples stay abstract and unmemorable.

**Visual Note:** Renders with **blue gradient** background (`#0080FF → #0066CC`), white text, "2025 Context" badge

---

### Section 8: Thematic Threads ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// THEMATIC THREADS
// Tracking patterns across the novel - recurring themes that connect
// chapters and show how ideas develop throughout the story
// ===================================================================
```

**Purpose:** Track themes across the entire book

**Why It Matters - Tracking Patterns Across the Novel:** These recurring themes connect chapters and show how ideas develop throughout the story. Thematic threads help readers see patterns and accumulate meaning across chapters—turning scattered observations into coherent understanding. They transform isolated chapter readings into cumulative insight about what the book is really about. Think of them as colored threads woven through the entire novel: once you see the pattern, each chapter adds to your understanding of the whole design.

**Target:** 3-5 ongoing threads

**Structure:**
```typescript
thematicThreads: [
  {
    emoji: '🔹', // B&W-safe
    name: 'Thread Name',
    explanation: 'How it continues/develops in this chapter'
  }
]
```

**Best Practices:**
- Reference previous chapters
- Show development, not just repetition
- Keep threads consistent across book
- Build cumulative understanding

---

### Section 9: Discussion Questions ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// DISCUSSION QUESTIONS
// These questions are tools that LEAD YOU TO THE ANSWER - strategically
// designed to guide you toward deeper appreciation of what matters most
// ===================================================================
```

**Purpose:** Facilitate dialogue and critical thinking

**Why It Matters:** These questions are tools—carefully designed pathways that **lead you to the answer**. They're not open-ended in the sense of "anything goes"; they're strategically crafted to guide you toward deeper appreciation of what truly matters in the text. They point you to what's worth noticing, what's complex, what's debatable. Think of them as a hiking guide who doesn't tell you what to see, but makes sure you're looking in the right direction when the vista opens up. They're not tests; they're guides showing you where the literary gold is hidden and helping you discover it yourself.

**Target:** 5-7 open-ended questions

**Structure:**
```typescript
discussionQuestions: [
  {
    title: 'Question Category',
    question: 'Genuinely open-ended question (no single right answer)'
  }
]
```

**Best Practices:**
- No single "right" answer
- Encourage interpretation
- Mix difficulty levels
- Connect to bigger ideas

**Example Quality:**
- ✅ "Why might the author choose to..."
- ❌ "What color was the dress?" (factual recall)

---

### Section 10: Amplified Discussions ✅ REQUIRED - 6 DISCUSSIONS PER CHAPTER

**Purpose:** Provide expert-level analysis students learn from

**⚠️ CRITICAL REQUIREMENT:** Every chapter MUST have exactly **6 Amplified Discussions**. This is a V3 standard, not optional.

**Why It Matters - AI Collaborative Tools:** These discussions are specifically designed as **collaborative tools between educators and AI**. This is NOT "AI writes it and you use it"—this is genuine partnership where you bring pedagogical expertise, student knowledge, and classroom context, while AI brings comprehensive literary analysis and instant synthesis. Together, you create teaching material neither could produce alone. 

**The Collaboration Model:**
- You specify what concepts students struggle with
- AI provides multiple analytical frameworks
- You select and refine what fits your classroom
- Result: Expert-level analysis customized to your students

This section models the sophisticated thinking you want students to develop, while giving teachers the flexibility to deploy it strategically.

**Target:** EXACTLY 6 discussions per chapter, 300-500 words each (often longer for depth)

**Teaching Note:** Having 6 discussions per chapter gives teachers flexibility—they can select which ones best fit their classroom needs, student level, or time constraints. Not all discussions need to be used in every class; having 6 options ensures you always have the right tool for the teaching moment.

**Header Format:**
```typescript
// ===================================================================
// AMPLIFIED DISCUSSION
// AI COLLABORATIVE TOOLS - Created through educator-AI partnership where
// you bring pedagogical expertise and AI brings comprehensive analysis.
// Together: teaching material neither could produce alone.
// Teachers: Select which discussions best fit your classroom from the 6.
// ===================================================================
```

**Structure:**
```typescript
amplifiedDiscussion: [
  {
    id: 'unique-kebab-case-id',
    title: 'Discussion Topic',
    question: 'Complex driving question',
    aiResponse: `**Main Heading**

Opening paragraph addressing the question directly.

**Subheading: Key Point 1**

Detailed exploration with:
- Bullet points
- Examples
- Evidence

**Subheading: Key Point 2**

More analysis...

**Historical/Literary Context:**

Background information...

**Modern Connection:**

Contemporary relevance...

**The Teaching Moment:**

Pedagogical applications and insights...
    `
  }
  // ... MUST HAVE 6 TOTAL
]
```

**Best Practices:**
- THIS IS THE MOST VALUABLE SECTION - invest time here
- 300-500 words per discussion
- Use markdown formatting (**, bullets, etc.)
- Be practical and accessible
- Connect to real student concerns
- No jargon without explanation

**Common Topics:**
- Character development/relationships
- Plot turning points
- Theme evolution
- Technique analysis
- Historical context
- Connections to other chapters

---

### Section 11: Educator Resources ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// EDUCATOR RESOURCES
// Teaching tools and activities
// ===================================================================
```

**Purpose:** Provide actionable teaching tools

**Structure:**
```typescript
educatorResources: {
  writingPrompt: {
    title: 'Assignment Title',
    description: 'Clear task description',
    purpose: 'Learning goal it achieves'
  },
  activity: {
    title: 'Activity Name',
    description: 'How to run it',
    materials: 'What's needed'
  },
  crossCurricular: {
    title: 'Connection Title',
    description: 'How to connect to other subjects',
    subjects: ['History', 'Science', 'Art']
  }
}
```

**Best Practices:**
- Make activities actually doable
- Specify time needed
- List concrete materials
- Cross-curricular should be genuine

---

### Section 12: Critical Thinking Exercise ⚪ OPTIONAL

**Header Format:**
```typescript
// ===================================================================
// CRITICAL THINKING EXERCISE (Optional)
// One focused, high-level analytical task
// ===================================================================
```

**Purpose:** Push beyond comprehension to synthesis

**Note:** This is an optional deep-dive exercise—include when you have a particularly rich analytical opportunity, skip when the chapter doesn't warrant it.

**Target:** ONE substantial exercise per chapter (when included)

**Structure:**
```typescript
criticalThinkingExercise: {
  title: 'Exercise Name',
  prompt: 'Complex analytical challenge',
  guidingQuestions: [
    'Question 1 to structure thinking',
    'Question 2 that goes deeper',
    'Question 3 requiring synthesis',
    'Question 4 connecting to broader issues'
  ],
  thinkingFramework: {
    analyze: 'What to break down and examine',
    evaluate: 'What to assess and judge',
    synthesize: 'What to combine or create'
  },
  expectedDepth: 'What strong response looks like',
  classroomApplication: 'How teachers can use this'
}
```

**Best Practices:**
- Require synthesis, not just comprehension
- Guide without prescribing answers
- Use Bloom's taxonomy (analyze/evaluate/synthesize)
- One deep exercise > multiple shallow ones

**Visual Note:** Renders with **green banner header**

---

### Section 13: Why Literature Matters ✅ REQUIRED

**Header Format:**
```typescript
// ===================================================================
// WHY LITERATURE MATTERS - Closing Motivation
// ===================================================================
```

**Purpose:** Close with motivation and perspective

**Structure:**
```typescript
whyLiteratureMatters: getLiteratureMessageByChapter(X) // Use actual chapter number
```

**Implementation:**
- Auto-generated by chapter number
- 50+ different messages rotating
- Appears at END as closing motivation

**Example Messages:**
- "STEM builds technology; literature teaches us what to build and why it matters."
- "AI can write code, but only humans who read literature can ask the right questions."

**Visual Note:** Renders with **gold gradient** background, shimmer effect, $ watermark

**CRITICAL:** Always update the chapter number parameter!

---

### Section 14: Next Time Teaser ⭐ RECOMMENDED

**Header Format:**
```typescript
// ===================================================================
// NEXT TIME TEASER
// Preview of next chapter
// ===================================================================
```

**Purpose:** Create narrative momentum

**Structure:**
```typescript
nextTimeTeaser: {
  emoji: '📖',
  title: 'Next Time: Evocative Teaser',
  preview: 'Exciting preview without spoiling',
  hookQuestion: 'Compelling question that builds anticipation'
}
```

**Best Practices:**
- Build intrigue without spoiling
- Use hook question effectively
- Create desire to continue
- Omit for final chapter

---

## 🎨 Part 2: Styling Reference

### Color System

| Element | CSS Variable | Hex | Usage |
|---------|--------------|-----|-------|
| **Primary** | `var(--primary)` | `#1e5631` | Borders, badges, headings, buttons |
| **Background** | `var(--background)` | Light gray | Page background |
| **Card BG** | `var(--card-bg)` | White/Light gray | Section backgrounds |
| **Text Primary** | `var(--text-primary)` | Dark gray | Main text |
| **Text Secondary** | `var(--text-secondary)` | Medium gray | Supporting text |
| **Border** | `var(--border-color)` | Light gray | Card borders |

**Special Colors:**
- **Modern Adaptation:** Blue gradient `#0080FF → #0066CC`
- **Why Literature Matters:** Gold gradient `#D4AF37 → #F4D03F → #D4AF37`

---

### Typography Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Chapter Badge | `0.75rem` | `700` | - |
| Book Title | `3rem` | `300` | - |
| Section Headings | `1.75rem` | `400` | - |
| Subheadings (H3) | `1.25-1.375rem` | `600` | - |
| Body Text | `1rem` | `400` | `1.7` |
| Brief Summary | `1.125rem` | `500` | `1.8` |
| Labels | `0.75-0.875rem` | `700` | - |

**Font Families:**
- Headings: `var(--font-heading)` (serif)
- Body: System sans-serif
- Modern Adaptation: "Roboto Condensed" stack

---

### Spacing System

| Name | Value | Usage |
|------|-------|-------|
| xs | `0.5rem` (8px) | Icon gaps |
| sm | `0.75rem` (12px) | Small gaps |
| md | `1rem` (16px) | Default |
| lg | `1.5rem` (24px) | Internal spacing |
| xl | `2rem` (32px) | Card padding |
| 2xl | `3rem` (48px) | Section margins |

**Standard Pattern:**
- Sections: `marginBottom: '3rem'`
- Cards: `padding: '2rem'`
- Internal: `marginBottom: '1.5rem'`

---

### Layout Structure

```typescript
// Main container
<div style={{ background: 'var(--background)', minHeight: '100vh' }}>
  
  // Sticky navigation
  <div style={{
    padding: '1.5rem 2rem',
    borderBottom: '1px solid var(--border-color)',
    background: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 10
  }}>
    // Nav content
  </div>
  
  // Content area
  <div style={{ 
    maxWidth: '900px', 
    margin: '0 auto', 
    padding: '3rem 2rem' 
  }}>
    // All sections
  </div>
</div>
```

---

### Card Patterns

#### Standard Card
```typescript
<div style={{
  background: 'white',
  padding: '2rem',
  border: '2px solid var(--border-color)'
}}>
  // Content
</div>
```

#### Card with Top Border Accent
```typescript
<div style={{
  background: 'white',
  padding: '2rem',
  border: '2px solid var(--border-color)',
  borderTop: '4px solid var(--primary)'
}}>
  // Used for: Terms to Know, Character cards
</div>
```

#### Card with Left Border Accent
```typescript
<div style={{
  background: 'white',
  padding: '2rem',
  border: '2px solid var(--border-color)',
  borderLeft: '4px solid var(--primary)'
}}>
  // Used for: Quotes, emphasis boxes
</div>
```

---

### Special Section Styles

#### Modern Adaptation (Blue Gradient)
```typescript
<div style={{
  background: 'linear-gradient(135deg, #0080FF 0%, #0066CC 100%)',
  color: 'white',
  padding: '2rem',
  border: '2px solid #0080FF',
  boxShadow: '0 4px 12px rgba(0, 128, 255, 0.2)'
}}>
  // White text
  // "2025 Context" badge
  // Decorative circles
</div>
```

#### Why Literature Matters (Gold Gradient)
```typescript
<div style={{
  background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
  padding: '2.5rem',
  border: '3px solid #B8860B',
  borderRadius: '0.75rem',
  boxShadow: '0 12px 24px rgba(212, 175, 55, 0.4)'
}}>
  // Shimmer animation
  // Gold coin decorations
  // $ watermark
  // Black box with gold gradient text
</div>
```

#### Critical Thinking (Green Banner)
```typescript
<div style={{
  background: 'white',
  border: '3px solid var(--primary)',
  overflow: 'hidden'
}}>
  // Green header banner
  <div style={{
    background: 'var(--primary)',
    color: 'white',
    padding: '1.5rem 2rem'
  }}>
    <h3>Title</h3>
  </div>
  
  // White content area
  <div style={{ padding: '2rem' }}>
    // Content
  </div>
</div>
```

---

### Icon Reference

**From `lucide-react`:**
- **BookOpen** (24px) - Chapter Summary
- **Users** (24px) - Character Development
- **MessageSquare** (24px) - Key Quotes
- **Brain** (24px) - IA Analysis, Critical Thinking
- **Sparkles** (24px) - Modern Adaptation
- **Lightbulb** (24px) - Discussion Questions
- **ChevronDown/Up** (24px) - Expandable sections
- **ArrowLeft/Right** (16-20px) - Navigation
- **ShoppingCart** (16px) - Purchase links

---

### Emoji Guidelines

**✅ B&W Print-Safe:**
- Objects: 📖 📚 🎨 🪞 🚪
- Weather: 🌧️ ⚡
- Shapes: ⚖️ 🔥
- Faces: 👻 (distinct shapes)

**❌ Color-Dependent (AVOID):**
- Color dots: 🔴 🟢 🔵 🟡
- Anything relying on color distinction

**Test:** If it prints clearly in grayscale, it's safe

---

### Grid Layouts

```typescript
// Responsive auto-fit (Terms to Know, Thematic Threads)
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
  gap: '1.5rem' 
}}>
```

```typescript
// Flexible columns (At A Glance)
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
  gap: '1.5rem' 
}}>
```

---

### Interactive Elements

#### Primary Button
```typescript
<Link style={{
  padding: '1rem 2rem',
  background: 'var(--primary)',
  color: 'white',
  fontSize: '1rem',
  fontWeight: '600',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  border: '2px solid var(--primary)'
}}>
  Next Chapter <ArrowRight size={20} />
</Link>
```

#### Secondary Button
```typescript
<Link style={{
  padding: '1rem 2rem',
  border: '2px solid var(--border-color)',
  color: 'var(--text-primary)',
  fontSize: '1rem',
  fontWeight: '600',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem'
}}>
  <ArrowLeft size={20} /> Previous
</Link>
```

---

## ✅ Part 3: Quality Checklists

### Content Completeness

- [ ] All 13 sections present (or appropriate subset)
- [ ] Empty `title: ''` field (no chapter-specific titles)
- [ ] All section dividers use exactly 67 equal signs (`===`)
- [ ] All section comments match V3 format exactly
- [ ] No placeholder text `[like this]` remaining
- [ ] Chapter number correct everywhere
- [ ] `whyLiteratureMatters` uses correct chapter number
- [ ] Summary connects to previous chapters
- [ ] At least 3 key quotes with analysis
- [ ] **EXACTLY 6 amplified discussions** (CRITICAL REQUIREMENT)
- [ ] Each amplified discussion is 300-500+ words
- [ ] Critical thinking exercise is substantial (if included)
- [ ] All markdown formatting correct in `aiResponse` fields
- [ ] All IDs use kebab-case format

### Connection to Previous Chapters

- [ ] Summary references earlier events when relevant
- [ ] Themes show development, not just repetition
- [ ] Characters show growth or change
- [ ] Thematic threads build on previous chapters
- [ ] Amplified discussions compare to earlier chapters when appropriate

### Styling Consistency

- [ ] All CSS variables used correctly (`var(--primary)`, etc.)
- [ ] Consistent spacing (3rem between sections)
- [ ] All icons from lucide-react at proper sizes
- [ ] Emojis are ALL B&W print-safe
- [ ] Typography hierarchy matches standards
- [ ] Cards have proper borders and padding
- [ ] Modern Adaptation uses blue gradient
- [ ] Why Literature Matters uses gold gradient
- [ ] Critical Thinking uses green banner
- [ ] Content max-width is 900px
- [ ] Navigation is sticky at top

### Technical Requirements

- [ ] TypeScript compiles without errors
- [ ] No `seriesOpening` section (Chapter 1 only)
- [ ] No `speedLearningNotice` section (Chapter 1 only)
- [ ] Chapter renders correctly in browser
- [ ] Navigation works (prev/next buttons)
- [ ] All expandable sections function
- [ ] No console errors

### Quality Standards

- [ ] Summaries are clear and comprehensive
- [ ] Character descriptions focus on THIS chapter
- [ ] Quote analyses explain significance
- [ ] Amplified discussions are deep and practical
- [ ] Modern adaptation feels authentic (not forced)
- [ ] Discussion questions are genuinely open-ended
- [ ] Critical thinking requires synthesis
- [ ] Educator resources are actionable
- [ ] No jargon without explanation
- [ ] Tone is accessible but intellectually rigorous

---

## 📝 Part 4: Quick Reference

### Time Breakdown (6-8 hours total)

| Section | Time | Notes |
|---------|------|-------|
| Basic info + Summary | 30 min | Read chapter first |
| Terms to Know | 45 min | 5-7 terms |
| Characters + Quotes | 45 min | 2-4 chars, 3-5 quotes |
| IA Analysis | 45 min | Themes + techniques |
| Modern + Threads + Questions | 60 min | Contemporary connections |
| Amplified Discussions | 2-2.5 hrs | MOST IMPORTANT |
| Educator Resources | 45 min | Practical tools |
| Critical Thinking | 45 min | One deep exercise |
| Next Time Teaser | 15 min | Build anticipation |
| Quality Review | 60 min | Run all checklists |

### Common Mistakes to Avoid

❌ **Don't:**
1. **Have fewer than 6 Amplified Discussions** - this is REQUIRED
2. Use inconsistent section dividers (must be exactly 67 `===`)
3. Forget empty `title: ''` field
4. Repeat Chapter 1 content - build on it
5. Ignore previous chapters - show connections
6. Forget to update chapter numbers in code
7. Write chapters in isolation - show development
8. Include `seriesOpening` or `speedLearningNotice`
9. Rush Amplified Discussions - they're the heart
10. Force modern adaptations - be authentic
11. Skip quality checklists
12. Use color-dependent emojis
13. Leave placeholder text
14. Use incorrect section comment format

✅ **Do:**
1. **Create exactly 6 Amplified Discussions** - no exceptions
2. Use exact V3 section divider format (67 `===`)
3. Set `title: ''` (empty string)
4. Copy section comments exactly from V3 format
5. Reference earlier events in summaries
6. Show character/theme development
7. Build complexity as story progresses
8. Maintain consistent thematic threads
9. Update ALL placeholders
10. Invest significant time in Amplified Discussions (2-2.5 hours)
11. Make modern connections genuine
12. Run quality checks before considering done
13. Test all emojis in grayscale
14. Proofread everything
15. Verify section formatting matches V3 exactly

### Essential Files to Reference

- **This guide** (CHAPTER-TEMPLATE-V3.md) - Complete reference
- **V3 Pure Example** (`wuthering-heights/chapters/chapter-1-v3-pure.ts`) - Perfect V3 implementation
- **ChapterAllTemplate.ts** - Copy for new chapters
- **Completed chapters** (`sense-and-sensibility/chapters/chapter-1.ts` through `chapter-6.ts`) - V3 examples
- **Workflow guide** (CHAPTER_CONSISTENCY_WORKFLOW.md) - Step-by-step process

---

## 🎯 Summary: The V3 Difference

### What Makes V3 Better:

1. **Better Organization**
   - Clear 4-part structure (Content, Styling, Checklists, Reference)
   - Quick Start section at top
   - Time estimates throughout

2. **More Actionable**
   - Best practices for each section
   - Example quality indicators
   - Common mistakes highlighted

3. **Easier to Scan**
   - Consistent formatting
   - Clear visual hierarchy
   - Quick reference tables

4. **Practical Focus**
   - Emphasis on what matters most (Amplified Discussions)
   - Real time estimates
   - Concrete examples

5. **Quality-Driven**
   - Comprehensive checklists
   - Visual consistency guidelines
   - B&W print standards

---

## 🚀 Getting Started

### Your First Chapter with V3:

1. **Open these four items:**
   - [ ] `ChapterAllTemplate.ts` (copy for new chapter)
   - [ ] This guide (CHAPTER-TEMPLATE-V3.md)
   - [ ] The source book
   - [ ] A completed chapter example

2. **Work systematically:**
   - [ ] Basic info (5 min)
   - [ ] Summary (30 min)
   - [ ] Work through sections 2-11 (4-5 hours)
   - [ ] Sections 12-14 (1 hour)

3. **Quality check:**
   - [ ] Run all checklists
   - [ ] Fix any issues
   - [ ] Test in browser
   - [ ] Proofread

4. **Done!**
   - [ ] Commit to git
   - [ ] Mark chapter complete
   - [ ] Celebrate! 🎉

---

**Use this template for every chapter from 2 onwards. Maintain consistency while showing progression!**

*Version 3.0 - October 26, 2025*

