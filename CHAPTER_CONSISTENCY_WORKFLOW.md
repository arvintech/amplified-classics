# Chapter Consistency Workflow

## Overview

This guide shows you how to use **CHAPTER-TEMPLATE-V2.md** and **ChapterAllTemplate.ts** to create and maintain consistent chapters across all Amplified Classics books.

---

## 📋 The Two Templates Working Together

### **CHAPTER-TEMPLATE-V2.md** (This Document)
- **What it is:** Complete reference guide with styling, structure, and content guidelines
- **When to use:** As your reference Bible when creating/editing chapters
- **What it covers:**
  - 13-section content structure
  - Complete styling reference (colors, typography, spacing)
  - Copy-paste code snippets
  - Quality checklists
  - B&W print guidelines

### **ChapterAllTemplate.ts** (TypeScript File)
- **What it is:** Actual working template file with all TypeScript structure
- **When to use:** Copy this file to create each new chapter
- **What it covers:**
  - TypeScript structure and types
  - All section placeholders
  - Comments explaining each section
  - Import statements

---

## 🚀 Workflow: Creating a New Chapter

### Step 1: Copy the TypeScript Template

```bash
# Navigate to your book's chapters directory
cd app/books/[your-book]/chapters/

# Copy the template
cp /path/to/ChapterAllTemplate.ts chapter-X.ts

# Example:
cp ../../../_templates/ChapterAllTemplate.ts chapter-5.ts
```

### Step 2: Open Both Reference Documents

**Have open side-by-side:**
1. **chapter-X.ts** (the file you're editing)
2. **CHAPTER-TEMPLATE-V2.md** (for reference)
3. **The actual book** (source text)
4. **A completed chapter** (like jane-eyre/chapter-13.ts) for inspiration

### Step 3: Fill in Basic Information

```typescript
export const chapterX: ChapterData = {
  number: X,  // Actual chapter number
  title: '', // Chapter title if it has one
  readingTime: 0, // Estimate minutes
  pages: 0, // Approximate page count
```

**Reference:** CHAPTER-TEMPLATE-V2.md → "Quick Section Overview" → Section 1

### Step 4: Work Through Each Section Systematically

Follow the **13-section structure** from CHAPTER-TEMPLATE-V2.md:

#### 1. Chapter Summary
```typescript
summary: {
  brief: 'One-sentence summary...',
  full: [
    'Paragraph 1...',
    'Paragraph 2...',
    'Paragraph 3...'
  ]
}
```
**Tips:**
- Brief = 1 sentence max
- Full = 3-4 substantial paragraphs
- Connect to previous chapters

#### 2. Terms to Know (5-7 terms)
```typescript
termsToKnow: [
  {
    term: 'Literary Device or Vocab',
    definition: 'Clear definition',
    context: 'How it appears in THIS chapter',
    whyItMatters: 'Why students should care'
  }
]
```
**Tips:**
- Mix literary devices + vocabulary + concepts
- Make "whyItMatters" practical and relatable
- Check CHAPTER-TEMPLATE-V2.md → "Section 3"

#### 3. Character Development (2-4 characters)
```typescript
characters: [
  {
    name: 'Character Name',
    development: 'Detailed paragraph...',
    keyTrait: {
      emoji: '🎭',
      text: 'Key Trait'
    }
  }
]
```
**Tips:**
- Focus on THIS chapter's developments
- Use B&W-safe emojis (check CHAPTER-TEMPLATE-V2.md → "Black & White Print Guidelines")
- Show change/growth

#### 4. Key Quotes (3-5 quotes)
```typescript
quotes: [
  {
    text: 'The actual quote from the text',
    analysis: 'Why this quote matters...'
  }
]
```
**Tips:**
- Choose quotes that reveal character/theme/technique
- Analysis should teach, not just describe

#### 5. Intelligence Amplified Analysis
```typescript
iaAnalysis: {
  themes: [
    { name: 'Theme', explanation: 'How it appears...' }
  ],
  literaryTechniques: [
    { 
      name: 'Technique',
      explanation: 'How it works...',
      example: 'Specific example from chapter'
    }
  ]
}
```
**Tips:**
- 2-3 themes, 2-3 techniques
- Connect to Chapter 1 themes when relevant

#### 6-13. Continue Through Remaining Sections

Follow the **Quick Section Overview** in CHAPTER-TEMPLATE-V2.md (lines 20-37) for the remaining sections:
- Modern Adaptation
- Thematic Threads
- Discussion Questions
- Amplified Discussions (4-6 deep dives)
- Educator Resources
- Critical Thinking Exercise
- Why Literature Matters
- Next Time Teaser

---

## 🎨 Ensuring Visual Consistency

### When Writing Content, Reference the Styling Guide

**CHAPTER-TEMPLATE-V2.md → "Styling Reference" section** provides:

#### Color Consistency
Check that you're using:
- `var(--primary)` for forest green accents
- `var(--text-primary)` for main text
- Special gradients for Modern Adaptation (blue) and Why Lit Matters (gold)

#### Emoji Consistency
**Before adding ANY emoji, check:**
- CHAPTER-TEMPLATE-V2.md → "Black & White Print Guidelines"
- ✅ Use: 📖, 👥, 💬, 🧠, ⚡, 📚, 🎨, 🪞, 🚪
- ❌ Avoid: 🔴, 🟢, 🔵 (color-dependent)

#### Typography Consistency
Reference the typography table:
- Section headings: `1.75rem`, `400` weight
- Subheadings: `1.25rem` - `1.375rem`, `600` weight
- Body text: `1rem`, `1.7` line height

---

## ✅ Quality Checklist: Before Publishing

### Content Completeness

Run through CHAPTER-TEMPLATE-V2.md → "Quality Checklist for Chapters 2+"

- [ ] All 13 sections present (or appropriate subset)
- [ ] No placeholder text `[like this]` remaining
- [ ] Chapter number correct throughout
- [ ] `whyLiteratureMatters` uses correct chapter number
- [ ] Summary connects to previous chapters
- [ ] At least 3 key quotes
- [ ] At least 4 amplified discussions (300-500 words each)
- [ ] Critical thinking exercise is substantial

### Styling Consistency

Run through CHAPTER-TEMPLATE-V2.md → "Quality Checklist: Styling"

- [ ] All CSS variables used correctly
- [ ] Consistent spacing (3rem between sections)
- [ ] All icons from lucide-react at consistent sizes
- [ ] Emojis are B&W print-safe
- [ ] Typography hierarchy is clear
- [ ] Modern Adaptation uses blue gradient
- [ ] Why Literature Matters uses gold gradient

### Connection to Previous Chapters

- [ ] Summary references earlier events
- [ ] Themes show development, not just repetition
- [ ] Characters show growth or change
- [ ] Thematic threads reference previous chapters
- [ ] Amplified discussions can compare to earlier chapters

### Technical Requirements

- [ ] TypeScript compiles without errors
- [ ] No `seriesOpening` section (that's Chapter 1 only)
- [ ] No `speedLearningNotice` section (that's Chapter 1 only)
- [ ] Proper markdown formatting in `aiResponse` fields
- [ ] IDs use kebab-case format

---

## 🔍 Auditing Existing Chapters for Consistency

### Quick Audit Process

When reviewing an existing chapter against the template:

#### 1. Structure Check
```bash
# Count sections in your chapter file
grep -E "^  // ===" app/books/[book]/chapters/chapter-X.ts | wc -l

# Should see 13 main section markers
```

**Compare against CHAPTER-TEMPLATE-V2.md → "Quick Section Overview"**

#### 2. Content Quality Check

Open chapter and CHAPTER-TEMPLATE-V2.md side-by-side:

| Section | ✅ Present? | ✅ Complete? | ✅ Quality? |
|---------|------------|-------------|------------|
| 1. Summary | | | |
| 2. Terms to Know | | | |
| 3. Characters | | | |
| 4. Quotes | | | |
| 5. IA Analysis | | | |
| 6. Literary Techniques | | | |
| 7. Modern Adaptation | | | |
| 8. Thematic Threads | | | |
| 9. Discussion Questions | | | |
| 10. Amplified Discussions | | | |
| 11. Educator Resources | | | |
| 12. Why Lit Matters | | | |
| 13. Next Time Teaser | | | |

#### 3. Styling Audit

Search chapter file for styling issues:

```bash
# Check for placeholder text
grep -n "\[" chapter-X.ts

# Check for correct chapter number in whyLiteratureMatters
grep "getLiteratureMessageByChapter" chapter-X.ts

# Check emoji usage
grep -o "[[:emoji:]]" chapter-X.ts | sort | uniq
```

**Cross-reference emojis with:** CHAPTER-TEMPLATE-V2.md → "Black & White Print Guidelines"

---

## 📚 Example: Complete Workflow Walkthrough

### Scenario: Creating Chapter 7 for a New Book

#### Morning Session (2-3 hours): Content Creation

1. **Copy template:**
   ```bash
   cp ChapterAllTemplate.ts chapter-7.ts
   ```

2. **Open references:**
   - chapter-7.ts (editing)
   - CHAPTER-TEMPLATE-V2.md (reference)
   - The book (source)
   - chapter-6.ts (see what came before)

3. **Fill in systematically:**
   - Basic info (5 min)
   - Summary (30 min) - Read chapter carefully, write brief + 3-4 paragraphs
   - Terms to Know (45 min) - Identify 5-7 key terms with context
   - Characters (30 min) - Focus on 2-4 main characters in this chapter
   - Quotes (30 min) - Find 3-5 significant quotes, write analyses

**Break**

#### Afternoon Session (3-4 hours): Deep Analysis

4. **Continue filling sections:**
   - IA Analysis (45 min) - Themes + techniques
   - Modern Adaptation (45 min) - Create authentic contemporary parallel
   - Thematic Threads (30 min) - Connect to ongoing themes
   - Discussion Questions (30 min) - 5-7 open-ended questions
   
**Break**

5. **Deep dives:**
   - Amplified Discussions (2 hours) - 4-6 discussions, 300-500 words each
   - This is the most time-consuming section but also the most valuable

6. **Finishing touches:**
   - Educator Resources (30 min)
   - Critical Thinking Exercise (45 min)
   - Next Time Teaser (15 min)
   - Verify whyLiteratureMatters has correct chapter number

#### Evening: Quality Review (1 hour)

7. **Run all checklists from CHAPTER-TEMPLATE-V2.md:**
   - Content Completeness checklist
   - Styling Consistency checklist
   - Connection to Previous Chapters checklist
   - Technical Requirements checklist

8. **Test the chapter:**
   - Import in `[chapter]/page.tsx`
   - View in browser
   - Check all sections render correctly
   - Verify navigation works

9. **Final polish:**
   - Fix any linter errors
   - Proofread all text
   - Verify all placeholders replaced
   - Commit to git

**Total time:** 6-8 hours for a complete, high-quality chapter

---

## 🎯 Power Tips for Efficiency

### 1. Batch Similar Work
- Write all summaries for chapters 1-5 in one sitting
- Create all Terms to Know for chapters 1-5 together
- This builds rhythm and maintains consistency

### 2. Use Find & Replace
```bash
# Update chapter numbers across file
:%s/chapterN/chapter7/g
:%s/number: 0/number: 7/g
:%s/getLiteratureMessageByChapter(0)/getLiteratureMessageByChapter(7)/g
```

### 3. Keep Examples Handy
Always reference a completed chapter (like jane-eyre/chapter-13.ts) for:
- Tone and voice
- Level of detail
- Analysis depth
- Formatting patterns

### 4. Create Snippets
If using VS Code, create snippets for repeated structures:

```json
{
  "Amplified Discussion": {
    "prefix": "ampdis",
    "body": [
      "{",
      "  id: '$1',",
      "  title: '$2',",
      "  question: '$3',",
      "  aiResponse: `",
      "**${4:Heading}**",
      "",
      "${5:Content}",
      "  `",
      "},"
    ]
  }
}
```

### 5. Use the Markdown as Your Checklist
Print or keep CHAPTER-TEMPLATE-V2.md open and literally check off sections as you complete them.

---

## 🔄 Maintaining Consistency Across a Book

### As You Work Through Multiple Chapters:

#### After Chapter 2:
- Review what worked well
- Note any template adjustments needed
- Establish your personal workflow rhythm

#### After Chapter 5:
- Audit chapters 1-5 for consistency:
  - Do themes track logically?
  - Is character development coherent?
  - Do modern adaptations connect?
- Make any needed adjustments

#### After Chapter 10:
- You should have a strong rhythm
- Consider batch-creating sections across multiple chapters
- Maintain quality control with checklists

#### Before Final Chapter:
- Read through ALL chapters for narrative arc
- Ensure thematic consistency
- Verify character development tracks properly
- Check that "Next Time" teasers connect chapters smoothly

---

## 🎨 Visual Consistency Across the Entire Site

### When Rendering Chapters (page.tsx)

The **styling reference** in CHAPTER-TEMPLATE-V2.md ensures visual consistency when the TypeScript data gets rendered.

**Example:** When you see this in your chapter-X.ts:
```typescript
modernAdaptation: {
  setting: 'Modern scenario...',
  parallels: ['...'],
  discussionPrompt: '...'
}
```

**Reference CHAPTER-TEMPLATE-V2.md → "Special Section Styles" → "Modern Adaptation"** to ensure your page.tsx component renders it with:
- Blue gradient background (`#0080FF` to `#0066CC`)
- White text
- "2025 Context" badge
- Decorative circles
- Proper spacing

### Checking Rendered Consistency

1. **Visual spot-check:** Open multiple chapters in browser tabs
2. **Compare sections:** Does every chapter's Summary section look identical?
3. **Color check:** Are Modern Adaptations always blue, Why Literature Matters always gold?
4. **Typography check:** Are all section headings the same size/weight?

If inconsistencies appear, reference CHAPTER-TEMPLATE-V2.md → "Styling Reference" to find the correct values.

---

## 📊 Consistency Dashboard (Self-Audit Tool)

Create a simple spreadsheet to track chapter completion:

| Chapter | Summary | Terms | Chars | Quotes | IA | Modern | Threads | Disc Q | Ampl Disc | Edu | Crit | Why Lit | Next | DONE |
|---------|---------|-------|-------|--------|----|----|---------|--------|-----------|-----|------|---------|------|------|
| Ch 1 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Ch 2 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 | ✅ | ✅ | ✅ | ✅ | 🟡 |
| Ch 3 | ✅ | ✅ | ✅ | ✅ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ | ⚪ |

**Legend:**
- ✅ Complete and quality-checked
- 🟡 Present but needs review
- ⚪ Not yet created

---

## 🚦 Common Consistency Issues & Fixes

### Issue 1: Inconsistent Chapter Numbering
**Symptom:** `whyLiteratureMatters` shows wrong chapter number
**Fix:** Search for `getLiteratureMessageByChapter(X)` and update X
**Reference:** CHAPTER-TEMPLATE-V2.md → Section 12

### Issue 2: Mixed Emoji Styles
**Symptom:** Some chapters use color emojis (🔴), others use neutral (📖)
**Fix:** Replace all color-dependent emojis
**Reference:** CHAPTER-TEMPLATE-V2.md → "Black & White Print Guidelines"

### Issue 3: Varying Content Length
**Symptom:** Some chapters have 2 amplified discussions, others have 8
**Fix:** Aim for 4-6 amplified discussions per chapter
**Reference:** CHAPTER-TEMPLATE-V2.md → Section 10

### Issue 4: Disconnected Chapters
**Symptom:** Each chapter feels like an island
**Fix:** Always reference previous chapters in summaries and thematic threads
**Reference:** CHAPTER-TEMPLATE-V2.md → "Connection to Previous Chapters"

### Issue 5: Styling Drift
**Symptom:** Sections look slightly different across chapters
**Fix:** Use copy-paste snippets from CHAPTER-TEMPLATE-V2.md
**Reference:** CHAPTER-TEMPLATE-V2.md → "Copy-Paste Snippets"

---

## 🎓 Pro Tips from Jane Eyre Completion

### What Worked Well:

1. **Batch similar work** - All summaries in one session = consistent tone
2. **Reference previous chapter** - Always start by re-reading the last chapter
3. **Use actual student questions** - Real classroom questions make the best "Discussion Questions"
4. **Keep themes consistent** - Create a master theme list for the book, reference it in every chapter
5. **Time yourself** - Knowing sections take 30-45 minutes helps you plan sessions

### What to Avoid:

1. **Don't rush Amplified Discussions** - They're the heart of the method; quality > speed
2. **Don't force modern adaptations** - If it feels strained, rethink the scenario
3. **Don't ignore linter errors** - Fix them immediately; they compound
4. **Don't skip quality checks** - The checklists exist for a reason
5. **Don't write in isolation** - Regular breaks = fresh perspective

---

## 📝 Final Checklist: Is My Chapter Consistent?

Before marking any chapter "complete," verify:

### Content ✅
- [ ] Follows 13-section structure from CHAPTER-TEMPLATE-V2.md
- [ ] All sections have substantial, quality content
- [ ] Connects to previous chapters appropriately
- [ ] Themes develop logically from earlier chapters
- [ ] No placeholder text remains

### Style ✅
- [ ] Uses correct CSS variables throughout
- [ ] Emojis are all B&W-safe
- [ ] Typography matches other chapters
- [ ] Spacing is consistent
- [ ] Special sections (Modern/Why Lit) use correct gradients

### Technical ✅
- [ ] TypeScript compiles without errors
- [ ] Chapter renders correctly in browser
- [ ] Navigation works (prev/next)
- [ ] All IDs are unique kebab-case
- [ ] Chapter number is correct everywhere

### Quality ✅
- [ ] Summaries are clear and comprehensive
- [ ] Analysis is deep and insightful
- [ ] Modern adaptations feel authentic
- [ ] Discussion questions are genuinely open-ended
- [ ] Amplified discussions are 300-500 words
- [ ] Critical thinking exercise requires synthesis

**If you can check every box, your chapter is consistent with the Amplified Classics standard!** ✨

---

## 🔗 Quick Reference Links

- **Content Structure:** CHAPTER-TEMPLATE-V2.md → "Quick Section Overview"
- **Styling Patterns:** CHAPTER-TEMPLATE-V2.md → "Styling Reference"
- **Code Snippets:** CHAPTER-TEMPLATE-V2.md → "Copy-Paste Snippets"
- **Quality Checks:** CHAPTER-TEMPLATE-V2.md → "Quality Checklist"
- **TypeScript Template:** ChapterAllTemplate.ts
- **Working Example:** app/books/jane-eyre/chapters/chapter-13.ts

---

**Remember:** Consistency isn't about being rigid—it's about providing students with a reliable, professional learning experience. Use these templates as your foundation, but let the unique character of each book shine through! 📚✨

