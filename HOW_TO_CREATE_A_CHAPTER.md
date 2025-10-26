# How to Create a New Chapter Using V3 Template

**Time Required:** 6-8 hours for a complete chapter  
**References:** CHAPTER-TEMPLATE-V3.md, ChapterAllTemplate.ts

---

## 📖 Two Scenarios

This guide covers:
1. **Creating a brand new chapter from scratch** (Steps 1-20 below)
2. **Completely replacing an existing chapter with V3 structure** (See "Replacing Existing Chapter" section)

---

## 🔄 Replacing an Existing Chapter with V3 Template

### When to Use This Approach

Replace an existing chapter completely when:
- It was created with an older template structure
- It's missing key sections from V3
- The quality doesn't meet current standards
- You want to start fresh with V3 structure

**Important:** This is a COMPLETE REPLACEMENT, not an update. You'll recreate the chapter from scratch using V3 standards.

---

### Replacement Workflow (7-9 hours)

#### Step R1: Backup the Old Chapter (5 minutes)

```bash
# Navigate to the chapter directory
cd app/books/[your-book]/chapters/

# Create backup
cp chapter-X.ts chapter-X-OLD-BACKUP.ts

# Or create a backup directory
mkdir -p _backups
cp chapter-X.ts _backups/chapter-X-$(date +%Y%m%d).ts
```

**Git Safety:**
```bash
# Commit current state before replacing
git add chapter-X.ts
git commit -m "Backup Chapter X before V3 replacement"
```

---

#### Step R2: Extract Existing Content (30 minutes)

**Before deleting the old file, extract useful content:**

Open `chapter-X.ts` and copy to a temporary document:
- [ ] Any good summary paragraphs
- [ ] Key quotes you've already identified
- [ ] Terms to know that work well
- [ ] Character development insights
- [ ] Any amplified discussions worth keeping
- [ ] Modern adaptation scenarios

**Create a working notes file:**
```bash
# Create temporary notes file
touch chapter-X-migration-notes.md
```

In this file, paste extracted content with labels:
```markdown
# Chapter X Migration Notes

## Summary Content (to adapt)
[paste existing summary]

## Good Quotes Found
[paste quotes]

## Terms That Work
[paste terms]

## Keep These Insights
[paste any analysis worth preserving]
```

---

#### Step R3: Delete Old Chapter and Copy Template (5 minutes)

```bash
# Remove old chapter file
rm chapter-X.ts

# Copy fresh V3 template
cp ../../../_templates/ChapterAllTemplate.ts chapter-X.ts
```

**You now have a completely clean slate with V3 structure.**

---

#### Step R4: Reference Three Sources (Setup)

Work with these three documents open:
1. **chapter-X.ts** (your fresh template to fill)
2. **chapter-X-migration-notes.md** (your extracted content)
3. **CHAPTER-TEMPLATE-V3.md** (your V3 reference guide)
4. **The source book** (to verify and add new content)

---

#### Step R5: Follow Standard Creation Process

Now follow Steps 2-20 from the "Creating New Chapter" workflow below, but with this key difference:

**For each section:**
1. Read V3 requirements first
2. Check if you have useful content in migration notes
3. Decide: Keep/adapt existing OR create fresh
4. **Apply V3 standards** regardless (word counts, formatting, structure)

**Example Decision Tree:**

```
Summary Section:
├─ Check migration notes
├─ Do old paragraphs meet V3 standards? (150-200 words, connects to previous chapters)
│  ├─ YES → Adapt and enhance
│  └─ NO → Write fresh from book
└─ Ensure V3 structure (brief + 3-4 full paragraphs)

Key Quotes:
├─ Check migration notes for existing quotes
├─ Do analyses meet V3 standards? (50-75 words, speed reading style)
│  ├─ YES → Keep and polish
│  └─ NO → Rewrite or replace
└─ Add new quotes to reach 3-5 total

Amplified Discussions:
├─ Check migration notes
├─ Do old discussions meet V3 standards? (300-500 words, 6 total, markdown formatted)
│  ├─ MAYBE → Use as starting point, heavily revise
│  └─ NO → Write fresh with AI collaboration
└─ Create full set of 6 discussions
```

---

#### Step R6: Quality Gates (During Creation)

As you fill each section, verify against V3:

**Section Checklist (check after completing each):**
- [ ] Matches V3 word count targets
- [ ] Uses V3 formatting (markdown, structure)
- [ ] Follows V3 best practices
- [ ] Includes V3 "Why It Matters" understanding
- [ ] Meets V3 quality examples

**If a section doesn't meet these:** Rewrite it completely.

---

#### Step R7: Verify Complete V3 Compliance (1 hour)

After filling all sections, run comprehensive check:

**Structure Check:**
```bash
# Count sections (should match V3)
grep -c "^  // ===" chapter-X.ts
# Should show 13 section markers
```

**V3 Compliance Checklist:**

**Content:**
- [ ] All 13 V3 sections present
- [ ] Summary: brief + 3-4 full paragraphs
- [ ] Terms to Know: 5-7 terms with all 4 fields
- [ ] Characters: 2-4 with development + keyTrait
- [ ] Quotes: 3-5 with 50-75 word analyses
- [ ] IA Analysis: 2-3 themes + 2-3 techniques
- [ ] Modern Adaptation: specific 2025 scenario
- [ ] Thematic Threads: 3-5 threads
- [ ] Discussion Questions: 5-7 questions
- [ ] Amplified Discussions: 6 discussions, 300-500 words each
- [ ] Educator Resources: all 3 sub-sections
- [ ] Critical Thinking: present OR intentionally omitted
- [ ] Why Literature Matters: correct chapter number
- [ ] Next Time Teaser: present (or omitted if final chapter)

**Quality:**
- [ ] No content from old chapter that doesn't meet V3 standards
- [ ] All analyses use V3 "speed reading" approach
- [ ] Modern Adaptation uses 2025 language/platforms
- [ ] Amplified Discussions show AI collaboration quality
- [ ] All emojis are B&W-safe
- [ ] All formatting matches V3 patterns

**Technical:**
- [ ] TypeScript compiles
- [ ] No old template remnants
- [ ] Proper imports
- [ ] Correct chapter number everywhere

---

#### Step R8: Side-by-Side Comparison (15 minutes)

**Compare old vs new:**

Open both files:
```bash
# In one terminal/editor pane
code chapter-X-OLD-BACKUP.ts

# In another pane
code chapter-X.ts
```

**Check:**
- [ ] Did you lose any valuable insights from old version?
- [ ] Is new version BETTER in every way?
- [ ] Does new version feel complete?
- [ ] Would you be proud to show students the new version?

**If you find something valuable in old version:** Add it to new version now.

---

#### Step R9: Test Thoroughly (20 minutes)

```bash
# Run dev server
npm run dev
```

**Test in browser:**
- [ ] Chapter renders completely
- [ ] All sections display correctly
- [ ] Modern Adaptation shows blue gradient
- [ ] Why Literature Matters shows gold gradient
- [ ] Expandable sections work
- [ ] Navigation prev/next works
- [ ] No console errors
- [ ] Mobile responsive (check on phone or dev tools)

---

#### Step R10: Clean Up (5 minutes)

```bash
# If replacement is successful, clean up:

# Delete backup (after confirming new version works)
rm chapter-X-OLD-BACKUP.ts

# Delete migration notes
rm chapter-X-migration-notes.md

# Or move to archive if you want to keep history
mkdir -p _archive
mv chapter-X-OLD-BACKUP.ts _archive/
mv chapter-X-migration-notes.md _archive/
```

---

#### Step R11: Commit Replacement (5 minutes)

```bash
git add chapter-X.ts
git commit -m "Complete V3 replacement of Chapter X

- Rebuilt from V3 template structure
- All 13 sections now present
- Meets V3 quality standards
- 6 amplified discussions included
- Modern adaptation uses 2025 context"

# Optional: Delete old backup from git history if it was committed
# (Only if you're certain the new version is better)
```

---

### Replacement Quality Gates

**Before considering replacement complete, verify:**

#### Must Have:
✅ All 13 V3 sections present and complete  
✅ 6 amplified discussions (300-500 words each)  
✅ Speed-reading style quote analyses (50-75 words)  
✅ Modern adaptation with 2025 specifics  
✅ Thematic threads connecting to other chapters  
✅ All V3 formatting and styling  

#### Must NOT Have:
❌ Old template structures or formatting  
❌ Generic modern adaptations  
❌ Long, slow quote analyses  
❌ Placeholder text  
❌ Color-dependent emojis  
❌ Content that doesn't meet V3 quality bar  

---

### Time Comparison

| Approach | Time | When to Use |
|----------|------|-------------|
| **Update existing** | 2-3 hours | Minor improvements needed |
| **Complete replacement** | 7-9 hours | Old chapter doesn't meet V3 standards |
| **Create from scratch** | 6-8 hours | New chapter for book |

**Complete replacement takes longer** because you must:
1. Extract valuable content from old version
2. Make keep/replace decisions for each section
3. Verify nothing valuable is lost
4. Ensure everything meets V3 standards

But the result is a **truly V3-compliant chapter**, not a patched-together hybrid.

---

### Batch Replacement Strategy

**If replacing multiple chapters:**

**Week 1:** Replace Chapters 1-3
- Day 1-2: Chapter 1
- Day 3-4: Chapter 2  
- Day 5: Chapter 3

**Week 2:** Replace Chapters 4-6
- Continue pattern

**Advantages of batch replacement:**
- Build rhythm and efficiency
- Ensure consistency across replaced chapters
- Can reference completed replacements
- Easier to maintain quality bar

---

### Red Flags: When NOT to Replace

**Consider updating instead if:**
- Existing chapter mostly meets V3 standards
- Only missing 1-2 sections
- Amplified discussions are high quality
- Would only need 2-3 hours of updates

**Replace completely when:**
- Missing 4+ V3 sections
- Quality significantly below V3 standards
- Structure is fundamentally different
- Faster to start fresh than patch

---

## 🚀 Creating a Brand New Chapter (Step-by-Step Workflow)

### Step 1: Setup (5 minutes)

#### Copy the Template File
```bash
# Navigate to your book's chapters directory
cd app/books/[your-book]/chapters/

# Copy the TypeScript template
cp ../../../_templates/ChapterAllTemplate.ts chapter-X.ts

# Example for Chapter 5:
cp ../../../_templates/ChapterAllTemplate.ts chapter-5.ts
```

#### Open Your Workspace
Have these 4 items open:
1. **chapter-X.ts** (the file you're editing)
2. **CHAPTER-TEMPLATE-V3.md** (your reference guide)
3. **The source book** (the actual novel)
4. **A completed example** (like `jane-eyre/chapter-13.ts`)

---

### Step 2: Basic Information (5 minutes)

Open your new chapter file and update the header:

```typescript
/**
 * [BOOK TITLE] - CHAPTER X
 * 
 * [One-line description of what happens]
 */

export const chapterX: ChapterData = {
  number: X,  // Actual chapter number
  title: '', // Chapter title if it has one
  readingTime: 15, // Estimate in minutes
  pages: 8, // Approximate page count
```

**Reference:** CHAPTER-TEMPLATE-V3.md → Quick Start

---

### Step 3: Read the Chapter (15-20 minutes)

Before writing anything:
1. **Read the chapter** in the source book
2. **Take notes** on:
   - Key events
   - Character developments
   - Memorable quotes
   - Themes that appear
   - Literary techniques you notice
3. **Note the tone/mood**

---

### Step 4: Chapter Summary (30 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 1

```typescript
summary: {
  brief: '[One sentence capturing the essence - max 50 words]',
  
  full: [
    '[Paragraph 1: Opening situation, setting, mood - 150-200 words]',
    
    '[Paragraph 2: Key events and developments - 150-200 words]',
    
    '[Paragraph 3: Themes, conflicts, character revelations - 150-200 words]',
    
    '[Optional Paragraph 4: Connection to previous/future chapters - 150-200 words]'
  ]
}
```

**Tips:**
- Brief = truly ONE sentence
- Full = comprehensive but readable
- Connect to previous chapters
- Students should understand what happens after reading this

---

### Step 5: Terms to Know (45 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 2

**Target:** 5-7 terms

**Selection Process:**
1. Identify 2-3 **literary devices** used in chapter
2. Find 1-2 **vocabulary words** students might not know
3. Note 1-2 **historical/cultural concepts** relevant to chapter

```typescript
termsToKnow: [
  {
    term: 'Specific Literary Device or Word',
    definition: 'Clear, accessible definition',
    context: 'How it appears in THIS chapter specifically',
    whyItMatters: 'Why students should care - make it practical'
  },
  // ... 4-6 more terms
]
```

**Test:** Would a student finishing this chapter benefit from knowing this term?

---

### Step 6: Character Development (30 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 3

**Target:** 2-4 characters

**Selection:** Only characters who appear/develop in THIS chapter

```typescript
characters: [
  {
    name: 'Character Name',
    development: '[150-200 word paragraph about THIS chapter\'s developments]',
    keyTrait: {
      emoji: '🎭', // Check V3 emoji guidelines for B&W-safe options
      text: 'One or Two Words'
    }
  },
  // ... 1-3 more characters
]
```

**Focus:** What's NEW or CHANGED about this character in this chapter?

---

### Step 7: Key Quotes (30 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 4

**Target:** 3-5 quotes

**Selection Questions:**
- Does this reveal hidden character motivation?
- Does this advance a major theme?
- Does this demonstrate exceptional craft?
- Would I highlight this while reading?
- Does this change how we see the story?

```typescript
quotes: [
  {
    text: 'Exact quote from the text',
    analysis: '[50-75 words max - ONE focused insight. Front-load the point.]'
  },
  // ... 2-4 more quotes
]
```

**Remember:** Analysis should hit fast—one insight, concrete, quotable.

---

### Step 8: Intelligence Amplified Analysis (45 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 5

**Target:** 2-3 themes, 2-3 techniques

```typescript
iaAnalysis: {
  themes: [
    {
      name: 'Specific Theme Name',
      explanation: '[150-200 words on how it appears in this chapter]'
    },
    // ... 1-2 more themes
  ],
  
  literaryTechniques: [
    {
      name: 'Technique Name',
      explanation: '[100-150 words on how it works]',
      example: '[Specific example from this chapter]'
    },
    // ... 1-2 more techniques
  ]
}
```

**Tip:** Show theme DEVELOPMENT, not just presence. Connect to Chapter 1 themes.

---

### Step 9: Modern Adaptation (45 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 7

**Process:**
1. Identify core conflict/situation (not surface details)
2. Think about contemporary spaces with similar dynamics
3. Choose ONE specific scenario
4. Name concrete details (platforms, situations, dynamics)
5. Connect emotional truths

```typescript
modernAdaptation: {
  setting: '[Specific, detailed modern scenario with named platforms/contexts]',
  
  parallels: [
    '🔹 **Power Dynamics**: [How hierarchy/authority shows up today]',
    '🔹 **Communication**: [How people navigate this now]',
    '🔹 **Identity**: [How this affects modern sense of self]',
    '🔹 **Stakes**: [What\'s at risk in contemporary context]'
  ],
  
  discussionPrompt: '[Question bridging past and present]'
}
```

**Test:** Would a 2025 student immediately recognize this situation?

---

### Step 10: Thematic Threads (30 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 8

**Target:** 3-5 threads

```typescript
thematicThreads: [
  {
    emoji: '🔹', // B&W-safe
    name: 'Thread Name',
    explanation: '[How it continues/develops in this chapter - reference previous chapters]'
  },
  // ... 2-4 more threads
]
```

**Important:** Build on previous chapters—show DEVELOPMENT of threads.

---

### Step 11: Discussion Questions (30 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 9

**Target:** 5-7 questions

```typescript
discussionQuestions: [
  {
    title: 'Question Category',
    question: '[Open-ended, no single right answer]'
  },
  // ... 4-6 more questions
]
```

**Remember:** These are TOOLS guiding readers toward appreciation, not tests.

---

### Step 12: Amplified Discussions (2-2.5 hours) ⭐ MOST IMPORTANT

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 10

**Target:** 6 discussions, 300-500 words each

**This is AI-collaborated content—the heart of the method!**

**Common Topics:**
1. Character development/relationships
2. Plot turning point
3. Theme evolution
4. Literary technique
5. Historical context
6. Connection to earlier chapters

```typescript
amplifiedDiscussion: [
  {
    id: 'kebab-case-identifier',
    title: 'Discussion Topic',
    question: 'Complex driving question',
    aiResponse: `
**Main Heading**

Opening paragraph (direct answer).

**Subheading: Key Point 1**

Detailed exploration with:
- Bullet points
- Examples
- Evidence from text

**Subheading: Key Point 2**

More analysis...

**Historical/Literary Context:**

Background information...

**Modern Connection:**

Contemporary relevance...

**For Discussion:**

Follow-up questions...
    `
  },
  // ... 5 more discussions (6 total)
]
```

**Quality Check:**
- 300-500 words each
- Markdown formatted
- Accessible but sophisticated
- No jargon without explanation
- Connects to student concerns

**Time Management:** Spend 20-25 minutes per discussion.

---

### Step 13: Educator Resources (45 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 11

```typescript
educatorResources: {
  writingPrompt: {
    title: 'Assignment Title',
    description: '[Clear task description]',
    purpose: '[Learning goal it achieves]'
  },
  
  activity: {
    title: 'Activity Name',
    description: '[How to run it - be specific]',
    materials: '[What\'s needed]'
  },
  
  crossCurricular: {
    title: 'Connection Title',
    description: '[How to connect to other subjects]',
    subjects: ['History', 'Science', 'Art'] // Relevant subjects
  }
}
```

**Tip:** Make activities actually doable with listed materials and time estimates.

---

### Step 14: Critical Thinking Exercise (45 minutes) - OPTIONAL

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 12

**When to Include:** Only when chapter has a particularly rich analytical opportunity.

```typescript
criticalThinkingExercise: {
  title: 'Exercise Name',
  prompt: '[Complex analytical challenge]',
  
  guidingQuestions: [
    '[Question 1 structuring thinking]',
    '[Question 2 going deeper]',
    '[Question 3 requiring synthesis]',
    '[Question 4 connecting to broader issues]'
  ],
  
  thinkingFramework: {
    analyze: '[What to break down and examine]',
    evaluate: '[What to assess and judge]',
    synthesize: '[What to combine or create]'
  },
  
  expectedDepth: '[What strong response looks like]',
  classroomApplication: '[How teachers can use this]'
}
```

**Or skip it if chapter doesn't warrant a deep exercise.**

---

### Step 15: Why Literature Matters (2 minutes) ✅ REQUIRED

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 13

```typescript
whyLiteratureMatters: getLiteratureMessageByChapter(X) // CRITICAL: Use actual chapter number
```

**Double-check:** The chapter number in the function matches your actual chapter!

---

### Step 16: Next Time Teaser (15 minutes)

**Reference:** CHAPTER-TEMPLATE-V3.md → Section 14

```typescript
nextTimeTeaser: {
  emoji: '📖',
  title: 'Next Time: [Evocative Teaser]',
  preview: '[Exciting preview without spoiling - what changes/intensifies]',
  hookQuestion: '[Compelling question building anticipation]'
}
```

**Omit for final chapter.**

---

## ✅ Step 17: Quality Review (1 hour)

### Run All Checklists from CHAPTER-TEMPLATE-V3.md

**Reference:** CHAPTER-TEMPLATE-V3.md → Part 3: Quality Checklists

#### Content Completeness Checklist
- [ ] All 13 sections present (or appropriate subset)
- [ ] No placeholder text `[like this]` remaining
- [ ] Chapter number correct everywhere
- [ ] `whyLiteratureMatters` uses correct chapter number
- [ ] Summary connects to previous chapters
- [ ] At least 3 key quotes with analysis
- [ ] 6 amplified discussions (300-500 words each)
- [ ] All markdown formatting correct

#### Connection to Previous Chapters
- [ ] Summary references earlier events when relevant
- [ ] Themes show development, not repetition
- [ ] Characters show growth or change
- [ ] Thematic threads reference previous chapters

#### Styling Consistency
- [ ] All CSS variables used correctly
- [ ] All emojis are B&W-safe (check V3 guidelines)
- [ ] Typography hierarchy correct
- [ ] Modern Adaptation uses blue gradient
- [ ] Why Literature Matters uses gold gradient

#### Technical Requirements
- [ ] TypeScript compiles without errors
- [ ] No `seriesOpening` section (Chapter 1 only)
- [ ] No `speedLearningNotice` section (Chapter 1 only)
- [ ] All IDs use kebab-case format

---

## 🧪 Step 18: Test the Chapter (15 minutes)

### 1. **CRITICAL** Add Chapter to Routing

⚠️ **DON'T FORGET THIS STEP** - Your chapter won't be accessible without proper routing!

Open `/app/books/[your-book]/[chapter]/page.tsx`:

**Add import at the top:**
```typescript
import { chapter24 } from '../chapters/chapter-24'
import { chapter25 } from '../chapters/chapter-25' // ← ADD YOUR CHAPTER
```

**Add to chapters array:**
```typescript
const chapters: any[] = [
  chapter1,
  chapter2,
  // ... other chapters
  chapter24,
  chapter25, // ← ADD YOUR CHAPTER HERE TOO
]
```

**Example for Wuthering Heights Chapter 25:**
- Line ~35: Add `import { chapter25 } from '../chapters/chapter-25'`
- Line ~66: Add `chapter25,` to the chapters array

Save the file!

### 2. View in Browser

```bash
npm run dev
```

Navigate to: `http://localhost:3000/books/[your-book]/chapter-X`

### 3. Check Rendering
- [ ] All sections display correctly
- [ ] No console errors
- [ ] Navigation prev/next works
- [ ] Expandable sections function
- [ ] Modern Adaptation shows blue gradient
- [ ] Why Literature Matters shows gold gradient

---

## 📝 Step 19: Final Polish (15 minutes)

### Proofread
- Read through entire chapter
- Fix any typos
- Verify all quotes are accurate
- Check grammar and flow

### Verify Placeholders
```bash
# Search for any remaining placeholders
grep -n "\[" chapter-X.ts
```

### Run Linter
```bash
npm run lint
```

Fix any errors that appear.

---

## 💾 Step 20: Commit (5 minutes)

```bash
# Add the new chapter file
git add app/books/[your-book]/chapters/chapter-X.ts

# Add the routing file (IMPORTANT - includes your routing changes!)
git add app/books/[your-book]/[chapter]/page.tsx

# Commit both files
git commit -m "Add complete Chapter X for [Book Title]"
```

**What you're committing:**
1. The new chapter file with all V3 content
2. The updated routing file that makes your chapter accessible

---

## 🎉 Done!

**Total Time:** 6-8 hours

**Quality Check:** Can you confidently show this to students?

---

## 💡 Pro Tips

### Batch Work
- Write all summaries for chapters 1-5 together
- Create all Terms to Know as a batch
- Builds rhythm and consistency

### Use Examples
Always reference `jane-eyre/chapter-13.ts` for:
- Tone and voice
- Level of detail
- Analysis depth
- Formatting patterns

### Take Breaks
- After Step 11 (before Amplified Discussions)
- After Step 12 (before quality review)
- Fresh eyes catch more issues

### AI Collaboration Tips for Amplified Discussions
When working with AI to create discussions:
1. **Frame the context:** "This is Chapter X where [summary]"
2. **Ask specific questions:** Not "analyze this" but "How does this technique function here?"
3. **Request structure:** "Give me 400 words with 3 subheadings"
4. **Edit for voice:** Make it sound like YOU, not generic AI
5. **Add your pedagogical insight:** What do YOUR students need to understand?

---

## 🔄 Iterative Improvement

### After Your First Chapter
- Review what took longest
- Note what you'd do differently
- Refine your personal workflow

### After 5 Chapters
- Check consistency across all 5
- Ensure themes track properly
- Verify character development is coherent

### Ongoing
- Update CHAPTER-TEMPLATE-V3.md with any insights
- Add your own tips to this guide
- Share learnings with other creators

---

## 📚 Quick Reference Links

- **Content Structure:** CHAPTER-TEMPLATE-V3.md → Part 1
- **Styling Reference:** CHAPTER-TEMPLATE-V3.md → Part 2
- **Quality Checklists:** CHAPTER-TEMPLATE-V3.md → Part 3
- **TypeScript Template:** ChapterAllTemplate.ts
- **Working Example:** app/books/jane-eyre/chapters/chapter-13.ts
- **Workflow Overview:** CHAPTER_CONSISTENCY_WORKFLOW.md

---

**Remember:** Quality over speed. One excellent chapter is worth more than five rushed ones. Students deserve your best work! ✨

