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

*Use this template for every chapter from 2 onwards. Maintain consistency while showing progression!*

