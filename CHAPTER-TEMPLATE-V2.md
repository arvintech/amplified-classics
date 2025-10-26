# Chapter All Template - For Chapters 2+

## Overview

This template is for **all chapters except Chapter 1** (Chapters 2, 3, 4, etc.). It includes all the standard Amplified Classics sections but excludes the two Chapter 1-only sections.

## Key Difference from Chapter 1

**Chapter All Template** = **Chapter 1 Template** - 2 sections:

### ❌ Removed (Chapter 1 Only):
1. **`seriesOpening`** - Introduces Amplified method (only needed once)
2. **`speedLearningNotice`** - Meta-instruction on how to use sections (only needed once)

### ✅ Includes Everything Else:
All 14 other sections remain, including the new **`whyLiteratureMatters`** closing section.

---

## 📋 Quick Section Overview

Every chapter (2+) follows this 13-section structure:

1. **Chapter Summary** - Brief + detailed summary of what happens
2. **Terms to Know** - Literary & vocabulary terms with context
3. **Character Development** - How characters evolve in this chapter
4. **Key Quotes** - Important passages with analysis
5. **Intelligence Amplified Analysis** - Themes exploration
6. **Literary Techniques** - How the author crafts meaning
7. **Modern Adaptation** - Contemporary parallels
8. **Thematic Threads** - Ongoing themes across the novel
9. **Discussion Questions** - Open-ended critical thinking
10. **Amplified Discussions** - Deep-dive expert analysis (Notice → Explore → Amplify)
11. **Educator Resources** - Teaching tools & activities
12. **Why Literature Matters** - Rotating motivational message (END)
13. **Next Time** - Preview teaser for next chapter

---

## Complete Section List (14 sections)

### 1. **Basic Chapter Information** ✅ *REQUIRED*
- `number`: Chapter number (2, 3, 4, etc.)
- `title`: Chapter title (if applicable)
- `readingTime`: Estimated reading time in minutes
- `pages`: Approximate page count

**Purpose**: Basic metadata for navigation and planning

---

### 2. **summary** ✅ *REQUIRED*
Two-level summary system
- `brief`: One-sentence summary
- `full`: Array of 3-4 paragraphs providing comprehensive overview

**Purpose**: Help students understand what happens before diving into analysis

**Note**: For later chapters, connect to previous events in the summary

---

### 3. **termsToKnow** ⭐ *RECOMMENDED*
Literary and vocabulary terms (5-7 terms)
- Array of term objects:
  - `term`: The word or concept
  - `definition`: What it means
  - `context`: How it appears in this chapter
  - `whyItMatters`: Why students should care

**Purpose**: Build literary vocabulary and conceptual understanding progressively

**Example Terms for Later Chapters**:
- New literary devices that appear
- Character-specific vocabulary
- Historical/cultural concepts relevant to this chapter's events

---

### 4. **characters** ⭐ *RECOMMENDED*
Character development tracking
- Array of character objects:
  - `name`: Character name
  - `development`: How they develop in THIS chapter
  - `keyTrait`: Object with emoji and text

**Purpose**: Help students track character arcs across the novel

**Note**: Focus on how characters change or what new aspects we see in THIS chapter

---

### 5. **quotes** ⭐ *RECOMMENDED*
Key quotations with analysis (3-5 quotes)
- Array of quote objects:
  - `text`: The actual quote
  - `analysis`: Why it matters

**Purpose**: Teach close reading and textual evidence skills

---

### 6. **iaAnalysis** (Intelligence Amplifier Analysis) ⭐ *RECOMMENDED*
Deep thematic and technical analysis
- `themes`: Array of theme objects (2-3 themes)
  - `name`: Theme title
  - `explanation`: How it appears in this chapter
- `literaryTechniques`: Array of technique objects (2-3 techniques)
  - `name`: Technique name
  - `explanation`: How it works
  - `example`: Specific example from chapter

**Purpose**: Model literary analysis thinking

**Note**: Can reference themes introduced in Chapter 1 and show how they develop

---

### 7. **modernAdaptation** ⭐ *RECOMMENDED*
Connect classic text to contemporary life
- `setting`: Modern parallel scenario
- `parallels`: Array of emoji + text connections
- `discussionPrompt`: Question connecting past to present

**Purpose**: Make the text relevant and relatable to modern students

---

### 8. **thematicThreads** ⭐ *RECOMMENDED*
Ongoing themes that recur (3-5 threads)
- Array of thread objects:
  - `emoji`: Visual marker
  - `name`: Thread title
  - `explanation`: How it continues in this chapter

**Purpose**: Help students track themes across the entire book

**Note**: Should reference and build on threads from previous chapters

---

### 9. **discussionQuestions** ⭐ *RECOMMENDED*
Open-ended questions (5-7 questions)
- Array of question objects:
  - `title`: Question category
  - `question`: The actual question

**Purpose**: Facilitate discussion and critical thinking

---

### 10. **amplifiedDiscussion** ⭐ *RECOMMENDED*
Deep-dive answers to complex questions (4-6 discussions)
- Array of discussion objects:
  - `id`: Unique identifier (kebab-case)
  - `title`: Discussion topic
  - `question`: The driving question
  - `aiResponse`: Comprehensive markdown-formatted answer (300-500 words)

**Purpose**: Provide expert-level analysis students can learn from

**Common Topics for Later Chapters**:
- Character development and relationships
- Plot turning points
- Theme evolution
- Technique analysis
- Connection to earlier chapters

---

### 11. **educatorResources** ⭐ *RECOMMENDED*
Tools for teachers
- `writingPrompt`: Object with title, description, purpose
- `activity`: Object with title, description, materials
- `crossCurricular`: Object with title, description, subjects array

**Purpose**: Provide actionable classroom activities and connections

---

### 12. **criticalThinkingExercise** ⭐ *RECOMMENDED*
One focused, high-level analytical task
- `title`: Exercise name
- `prompt`: The challenge/task
- `guidingQuestions`: Array of questions to structure thinking
- `thinkingFramework`: Object with analyze/evaluate/synthesize steps
- `expectedDepth`: What level of thinking is required
- `classroomApplication`: How to use this in teaching

**Purpose**: Push students beyond comprehension into analysis and synthesis

---

### 13. **whyLiteratureMatters** ✅ *REQUIRED* 💰
**NEW! Rotating one-liner with gold money flair**
- Single string message
- Auto-generated by chapter number
- Appears at the END as closing motivation

**Purpose**: Leave students with motivation and perspective after completing the chapter

**Implementation**:
```typescript
whyLiteratureMatters: getLiteratureMessageByChapter(2), // Use actual chapter number
```

**Visual Design**: Elegant gold gradient card with shimmer effect and subtle $ watermark

---

### 14. **nextTimeTeaser** ⭐ *RECOMMENDED*
Preview of next chapter (except for final chapter)
- `emoji`: Visual hook
- `title`: Teaser title
- `preview`: What's coming next
- `hookQuestion`: Question to ponder

**Purpose**: Create narrative momentum and curiosity

---

## Quick Reference: Section Status

| Section | Status | Notes |
|---------|--------|-------|
| Basic Info | Required | Always include |
| Summary | Required | Connect to previous chapters |
| Terms to Know | Recommended | New terms for this chapter |
| Characters | Recommended | Track development |
| Quotes | Recommended | 3-5 per chapter |
| IA Analysis | Recommended | Themes + techniques |
| Modern Adaptation | Recommended | Contemporary parallels |
| Thematic Threads | Recommended | Build on previous |
| Discussion Questions | Recommended | 5-7 questions |
| Amplified Discussion | Recommended | 4-6 deep dives |
| Educator Resources | Recommended | Teaching tools |
| Critical Thinking | Recommended | One per chapter |
| **Why Literature Matters** | **Required** | **Auto-generated** |
| Next Time Teaser | Recommended | Except final chapter |

---

## Usage Instructions

### 1. Copy the Template

```bash
cp ChapterAllTemplate.ts app/books/[your-book]/chapters/chapter-2.ts
```

### 2. Update Header

```typescript
/**
 * JANE EYRE - CHAPTER 2
 * 
 * Jane is locked in the red room as punishment
 */
```

### 3. Fill in Basic Info

```typescript
export const chapter2: ChapterData = {
  number: 2,
  title: '', // Add title if chapter has one
  readingTime: 10,
  pages: 5,
```

### 4. Update Chapter Number in whyLiteratureMatters

```typescript
whyLiteratureMatters: getLiteratureMessageByChapter(2), // IMPORTANT: Change to 2
```

### 5. Work Through Sections

Follow the same process as Chapter 1, but remember:
- Connect to previous chapters in summary
- Show how themes develop, not just introduce them
- Build on character development from earlier
- Reference events from previous chapters when relevant

---

## Differences in Content Approach

### Chapter 1 Focus:
- **Introduce** characters, setting, themes
- **Establish** narrative techniques
- **Orient** readers to the world

### Chapters 2+ Focus:
- **Develop** characters and relationships
- **Complicate** themes and conflicts
- **Advance** the plot
- **Deepen** understanding of techniques
- **Connect** to what came before

---

## Section-by-Section Tips for Later Chapters

### Summary
- ✅ Reference previous events: "After Lockwood's unsettling first visit..."
- ✅ Show progression: "The conflict between X and Y intensifies..."
- ✅ Set context: "We now shift to..."

### Characters
- ✅ Focus on NEW developments, not repeating Chapter 1 descriptions
- ✅ Show change: "We now see a different side of..."
- ✅ Track relationships: "Their dynamic shifts when..."

### Themes
- ✅ Show evolution: "The theme of isolation deepens..."
- ✅ Connect to previous chapters: "Building on the introduction of..."
- ✅ Note turning points: "This chapter marks a shift in how..."

### Amplified Discussion
- ✅ Can compare to earlier chapters
- ✅ Can analyze character/theme development
- ✅ Can explore narrative structure across chapters

### Modern Adaptation
- ✅ Can build on previous modern scenarios
- ✅ Can show how situation escalates
- ✅ Can parallel chapter-to-chapter progression

---

## Common Mistakes to Avoid

### ❌ Don't:
1. **Repeat Chapter 1 content** - Build on it, don't rehash it
2. **Ignore previous chapters** - Show connections and development
3. **Forget to update chapter numbers** - Especially in `whyLiteratureMatters`
4. **Write in isolation** - Each chapter should feel connected to the whole
5. **Include seriesOpening or speedLearningNotice** - Those are Chapter 1 only!

### ✅ Do:
1. **Reference earlier events** - Help readers track the narrative
2. **Show development** - How do things change from previous chapters?
3. **Build complexity** - Deepen analysis as the story progresses
4. **Maintain consistency** - Use same thematic threads across chapters
5. **Update all placeholders** - Don't leave `[brackets]` in the final version

---

## Quality Checklist for Chapters 2+

Before finalizing any chapter:

### Content Completeness
- [ ] All placeholder text `[like this]` has been replaced
- [ ] Chapter number is correct throughout
- [ ] `whyLiteratureMatters` uses correct chapter number
- [ ] Summary references previous chapters when relevant
- [ ] At least 3 key quotes included
- [ ] At least 4 amplified discussions
- [ ] Critical thinking exercise is substantial

### Connection to Previous Chapters
- [ ] Summary connects to earlier events
- [ ] Themes show development, not just repetition
- [ ] Characters show growth or change
- [ ] Thematic threads reference previous chapters
- [ ] Amplified discussions can compare to earlier chapters

### Quality Standards
- [ ] Summaries are clear and comprehensive
- [ ] Character descriptions focus on THIS chapter's developments
- [ ] Quote analyses explain significance
- [ ] Amplified discussions are 300-500 words
- [ ] Modern adaptation feels authentic
- [ ] Discussion questions are genuinely open-ended
- [ ] Critical thinking exercise requires synthesis

### Technical Requirements
- [ ] TypeScript compiles without errors
- [ ] No `seriesOpening` section included
- [ ] No `speedLearningNotice` section included
- [ ] Proper markdown formatting in `aiResponse` fields
- [ ] IDs use kebab-case format

---

## Time Estimates

Creating quality content for Chapters 2+:

- **Basic info + Summary**: 20-30 minutes (faster than Chapter 1 since format is familiar)
- **Characters + Quotes**: 30-45 minutes
- **Terms to Know + IA Analysis**: 45-60 minutes
- **Modern Adaptation + Thematic Threads + Discussion Questions**: 45-60 minutes
- **Amplified Discussions (4-6)**: 2-2.5 hours
- **Educator Resources + Critical Thinking Exercise**: 45-60 minutes
- **Next Time Teaser**: 10-15 minutes
- **Review and connections to previous chapters**: 30 minutes

**Total**: 5-7 hours per chapter (slightly faster than Chapter 1 once you're in a rhythm)

---

## Progressive Workflow

As you work through multiple chapters:

### After Chapter 2:
- Review what themes/threads worked well
- Refine your template approach
- Note recurring discussion topics

### After Chapter 5:
- Ensure thematic consistency across chapters
- Check that character development tracks logically
- Verify modern adaptations connect coherently

### After Chapter 10:
- You should have a strong rhythm
- Consider batch-creating certain sections
- Maintain quality control with checklist

---

## 🎯 Remember

**ChapterAllTemplate** is for **all chapters 2+**. It's almost identical to Chapter1Template except:

1. ❌ **Remove** `seriesOpening`
2. ❌ **Remove** `speedLearningNotice`  
3. ✅ **Keep** everything else (including `whyLiteratureMatters`)
4. ✅ **Connect** to previous chapters
5. ✅ **Show development** not just introduction

---

## 🎨 Styling Reference

### Overview
All chapters use a consistent styling system based on **CSS variables** and **inline styles**. The design is **black & white print-safe** and uses the brand's forest green color.

---

### Color System

| Color | CSS Variable | Hex Code | Usage |
|-------|-------------|----------|-------|
| **Primary (Forest Green)** | `var(--primary)` | `#1e5631` | Borders, badges, headings, buttons |
| **Background** | `var(--background)` | Light gray | Page background |
| **Card Background** | `var(--card-bg)` | White/Light gray | Section backgrounds |
| **Text Primary** | `var(--text-primary)` | Dark gray | Main text |
| **Text Secondary** | `var(--text-secondary)` | Medium gray | Supporting text |
| **Border** | `var(--border-color)` | Light gray | Card borders |

**Special Colors:**
- **Modern Adaptation:** Blue gradient (`#0080FF` to `#0066CC`)
- **Why Literature Matters:** Gold gradient (`#D4AF37` to `#F4D03F`)

---

### Layout Structure

```typescript
// Main Page Container
<div style={{ background: 'var(--background)', minHeight: '100vh' }}>
  
  // Sticky Navigation Header
  <div style={{
    padding: '1.5rem 2rem',
    borderBottom: '1px solid var(--border-color)',
    background: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 10
  }}>
    // Navigation content
  </div>
  
  // Content Container
  <div style={{ 
    maxWidth: '900px', 
    margin: '0 auto', 
    padding: '3rem 2rem' 
  }}>
    // All chapter content here
  </div>
</div>
```

---

### Typography

| Element | Font Size | Font Weight | Line Height | Color |
|---------|-----------|-------------|-------------|-------|
| **Chapter Badge** | `0.75rem` | `700` | - | White on primary |
| **Book Title** | `3rem` | `300` | - | `var(--primary)` |
| **Section Headings** | `1.75rem` | `400` | - | `var(--text-primary)` |
| **Subheadings (H3)** | `1.25rem` - `1.375rem` | `600` | - | `var(--primary)` |
| **Body Text** | `1rem` | `400` | `1.7` | `var(--text-secondary)` |
| **Brief Summary** | `1.125rem` | `500` | `1.8` | `var(--text-primary)` |
| **Small Labels** | `0.75rem` - `0.875rem` | `700` | - | `var(--text-secondary)` |

**Font Families:**
- Headings: `var(--font-heading)` (serif)
- Body: System sans-serif stack
- Modern Adaptation: "Roboto Condensed" stack

---

### Section Styling Patterns

#### Standard Content Section
```typescript
<section style={{ marginBottom: '3rem' }}>
  <h2 style={{
    fontSize: '1.75rem',
    fontWeight: '400',
    marginBottom: '1.5rem',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-heading)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  }}>
    <Icon size={24} />
    Section Title
  </h2>
  <div style={{
    background: 'white',
    padding: '2rem',
    border: '2px solid var(--border-color)'
  }}>
    // Content here
  </div>
</section>
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

#### 1. Chapter Badge
```typescript
<div style={{
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  background: 'var(--primary)',
  color: 'white',
  fontSize: '0.75rem',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '1rem'
}}>
  Chapter {number}
</div>
```

#### 2. Series Opening (Chapter 1 Only)
```typescript
<div style={{
  background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.08) 0%, rgba(30, 86, 49, 0.15) 100%)',
  padding: '2.5rem',
  border: '3px solid var(--primary)',
  borderRadius: '0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
}}>
  // Features grid with white cards inside
</div>
```

#### 3. At A Glance Section
```typescript
<div style={{
  background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.05) 0%, rgba(30, 86, 49, 0.10) 100%)',
  padding: '2rem',
  border: '2px solid var(--primary)',
  borderLeft: '6px solid var(--primary)'
}}>
  // Grid layout with metadata
</div>
```

#### 4. Modern Adaptation (Blue Gradient)
```typescript
<div style={{
  background: 'linear-gradient(135deg, #0080FF 0%, #0066CC 100%)',
  color: 'white',
  padding: '2rem',
  border: '2px solid #0080FF',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 128, 255, 0.2)'
}}>
  // White/transparent text
  // Decorative circles
  // "2025 Context" badge
</div>
```

#### 5. Why Literature Matters (Gold Gradient) 💰
```typescript
<div style={{
  background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 50%, #D4AF37 100%)',
  padding: '2.5rem',
  border: '3px solid #B8860B',
  borderRadius: '0.75rem',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 12px 24px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
}}>
  // Shimmer animation
  // Gold coin decorations
  // Currency symbol watermark
  // Black box with gold gradient text
</div>
```

#### 6. Expandable Discussion Sections
```typescript
<button
  onClick={() => toggleSection(id)}
  style={{
    width: '100%',
    padding: '1.5rem',
    background: 'var(--primary)', // or 'var(--card-bg)' for softer look
    color: 'white',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1.125rem',
    fontWeight: '600'
  }}
>
  <span>💡 Amplify Your Understanding</span>
  {expanded ? <ChevronUp /> : <ChevronDown />}
</button>
```

#### 7. Critical Thinking Exercise
```typescript
<div style={{
  background: 'white',
  border: '3px solid var(--primary)',
  overflow: 'hidden'
}}>
  // Green banner header
  <div style={{
    background: 'var(--primary)',
    color: 'white',
    padding: '1.5rem 2rem'
  }}>
    <h3>{title}</h3>
  </div>
  
  // Content sections with framework grid
  <div style={{ padding: '2rem' }}>
    // Prompt, questions, framework, etc.
  </div>
</div>
```

---

### Grid Layouts

#### Responsive Auto-Fit Grid
```typescript
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
  gap: '1.5rem' 
}}>
  // Used for: Terms to Know, Thematic Threads, Features
</div>
```

#### Flexible Column Grid
```typescript
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
  gap: '1.5rem' 
}}>
  // Used for: At A Glance metadata
</div>
```

---

### Interactive Elements

#### Primary Button / Link
```typescript
<Link
  href="/path"
  style={{
    padding: '1rem 2rem',
    background: 'var(--primary)',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '2px solid var(--primary)'
  }}
>
  Next Chapter <ArrowRight size={20} />
</Link>
```

#### Secondary Button / Link
```typescript
<Link
  href="/path"
  style={{
    padding: '1rem 2rem',
    border: '2px solid var(--border-color)',
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  }}
>
  <ArrowLeft size={20} /> Previous Chapter
</Link>
```

#### Badge / Tag
```typescript
<span style={{
  padding: '0.375rem 0.875rem',
  background: 'white',
  border: '1px solid var(--primary)',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: 'var(--text-primary)'
}}>
  Tag Text
</span>
```

---

### Spacing System

| Size | Value | Usage |
|------|-------|-------|
| **xs** | `0.5rem` (8px) | Tight gaps, icon spacing |
| **sm** | `0.75rem` (12px) | Small gaps, badges |
| **md** | `1rem` (16px) | Default spacing |
| **lg** | `1.5rem` (24px) | Section internal spacing |
| **xl** | `2rem` (32px) | Card padding |
| **2xl** | `3rem` (48px) | Section margins |

**Standard Pattern:**
- Section margins: `marginBottom: '3rem'`
- Card padding: `padding: '2rem'`
- Internal spacing: `marginBottom: '1.5rem'`
- Small gaps: `gap: '0.75rem'`

---

### Icons

**From `lucide-react`:**
- **BookOpen** - Chapter Summary
- **Users** - Character Development
- **MessageSquare** - Key Quotes
- **Brain** - IA Analysis, Critical Thinking
- **Sparkles** - Modern Adaptation
- **Lightbulb** - Discussion Questions
- **ChevronDown/Up** - Expandable sections
- **ArrowLeft/Right** - Navigation
- **ShoppingCart** - Purchase links
- **Bookmark** - Decorative elements

**Standard icon size:** `24px` for section headers, `16-20px` for buttons

---

### Black & White Print Guidelines

**✅ DO:**
- Use clear, high-contrast emojis (📖, 👥, 💬, 🧠, ⚡, 📚)
- Use borders to define sections
- Use `var(--primary)` for accents (prints as dark gray/black)
- Test that gradients have sufficient contrast

**❌ AVOID:**
- Color-dependent emojis (🔴, 🟢, 🔵)
- Relying solely on color to convey meaning
- Low-contrast text/background combinations

**Safe Emoji Categories:**
- Objects with clear outlines (📖, 📚, 🎨, 🪞, 🚪)
- Weather symbols (🌧️, ⚡)
- Bold shapes (⚖️, 🔥)
- Face shapes (👻 - distinct white sheet)

---

### Responsive Behavior

**Content Container:**
- Max width: `900px`
- Padding: `3rem 2rem` (reduces on mobile)
- Grid columns: Auto-fit with min `280px` (stacks on mobile)

**Text Sizing:**
- Main title uses: `clamp(2rem, 5vw, 3rem)` for responsive scaling
- Most other text uses fixed `rem` values

---

### Copy-Paste Snippets

#### Standard Section Header
```typescript
<h2 style={{
  fontSize: '1.75rem',
  fontWeight: '400',
  marginBottom: '1.5rem',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-heading)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem'
}}>
  <IconName size={24} />
  Section Title
</h2>
```

#### White Card
```typescript
<div style={{
  background: 'white',
  padding: '2rem',
  border: '2px solid var(--border-color)'
}}>
  // Content
</div>
```

#### Emphasis Box
```typescript
<div style={{
  padding: '1.5rem',
  background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.05) 0%, rgba(30, 86, 49, 0.08) 100%)',
  borderLeft: '3px solid var(--primary)'
}}>
  // Content
</div>
```

---

### Quality Checklist: Styling

Before publishing, verify:

- [ ] All CSS variables used correctly (`var(--primary)`, etc.)
- [ ] Consistent spacing (3rem between sections)
- [ ] All icons from lucide-react at consistent sizes
- [ ] Emojis are B&W print-safe
- [ ] Typography hierarchy is clear
- [ ] Cards have proper borders and padding
- [ ] Buttons/links have proper hover states (if interactive)
- [ ] Modern Adaptation uses blue gradient
- [ ] Why Literature Matters uses gold gradient
- [ ] Expandable sections have ChevronUp/Down icons
- [ ] Content max-width is 900px
- [ ] Navigation is sticky at top
- [ ] Sufficient contrast for all text

---

*Use this template for every chapter from 2 onwards. Maintain consistency while showing progression!*

