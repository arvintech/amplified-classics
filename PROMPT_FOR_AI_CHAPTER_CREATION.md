# AI Agent Prompt for Chapter Creation

This document provides a copy-paste prompt template for working with AI agents (like Claude, ChatGPT, etc.) to create V3-compliant chapters.

---

## 📋 What You Need Before Starting

### 1. The Source Chapter Text
For public domain books, you need the **actual chapter text** from:
- **Project Gutenberg** (gutenberg.org)
- **Internet Archive** (archive.org)
- Your own copy of the public domain book

**Important:** Copy the FULL chapter text (not just excerpts) to provide complete context.

### 2. Chapter Context
- Which chapter number is this?
- What happened in previous chapters?
- Book title and author

### 3. Reference Materials
Have these open:
- `CHAPTER-TEMPLATE-V3.md` (structure guide)
- Previous chapters from same book (for consistency)

---

## 🎯 The Copy-Paste Prompt Template

Copy everything below the line, fill in the `[BRACKETS]`, then paste to your AI agent:

---

```markdown
# Create Amplified Classics Chapter Using V3 Template

## Book Information
- **Book Title:** [e.g., Pride and Prejudice]
- **Author:** [e.g., Jane Austen]
- **Chapter Number:** [e.g., 5]
- **Chapter Title (if any):** [e.g., "Elizabeth at Netherfield" or leave blank]

## Previous Chapter Context
[Briefly summarize what happened in chapters 1-4 to provide context. 2-3 sentences.]

Example: "Elizabeth Bennet has met Mr. Darcy at a ball where he snubbed her. Jane has fallen ill at Netherfield and Elizabeth walked there to care for her. Elizabeth is now staying at the Bingleys' estate, observing the dynamics between the wealthy family and Mr. Darcy."

## Source Chapter Text

[PASTE THE COMPLETE CHAPTER TEXT FROM THE PUBLIC DOMAIN BOOK HERE]

[Important: Include the full text - don't truncate or summarize. The AI needs complete text to identify quotes, themes, and create accurate analysis.]

---

## Task: Create V3-Compliant Chapter

Using the chapter text above and the V3 template structure, create a complete TypeScript chapter file with all 13 sections:

### Required V3 Structure:

1. **Chapter Summary** (Brief + 3-4 full paragraphs)
2. **Terms to Know** (5-7 terms: literary devices + vocabulary + concepts)
3. **Character Development** (2-4 characters with development + keyTrait)
4. **Key Quotes** (3-5 quotes with 50-75 word speed-reading analyses)
5. **Intelligence Amplified Analysis** (2-3 themes + 2-3 techniques)
6. **Literary Techniques** (part of IA Analysis)
7. **Modern Adaptation** (Specific 2025 scenario with named platforms/contexts)
8. **Thematic Threads** (3-5 threads connecting to previous chapters)
9. **Discussion Questions** (5-7 open-ended questions as tools for appreciation)
10. **Amplified Discussions** (6 discussions, 300-500 words each, markdown formatted)
11. **Educator Resources** (writing prompt + activity + cross-curricular)
12. **Critical Thinking Exercise** (Optional - include if chapter warrants it)
13. **Why Literature Matters** (Use: `getLiteratureMessageByChapter([X])`)
14. **Next Time Teaser** (Preview of next chapter)

### V3 Quality Standards:

**Content Requirements:**
- Summary: Connect to previous chapters mentioned above
- Terms: Mix literary devices, vocabulary, historical concepts
- Quotes: Speed-reading style (50-75 words max, front-load insight)
- Modern Adaptation: Use 2025 language (Discord, TikTok, startup culture, "ghosting", "situationship", etc.)
- Amplified Discussions: Show AI-collaboration quality (300-500 words each, comprehensive)
- Thematic Threads: Reference and build on previous chapter developments

**Formatting:**
- All emojis must be B&W-safe (no 🔴🟢🔵)
- IDs use kebab-case
- Markdown formatting in aiResponse fields
- TypeScript structure

**Voice & Style:**
- Accessible but intellectually rigorous
- No jargon without explanation
- Connect to student concerns authentically
- Modern examples feel genuine, not forced

### Output Format:

Provide the complete TypeScript chapter file ready to save as `chapter-[X].ts`

Include:
```typescript
/**
 * [BOOK TITLE] - CHAPTER [X]
 * 
 * [One-line description]
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter[X]: ChapterData = {
  // ... complete chapter structure
}
```

---

## Reference Standards

For quality benchmarks, this chapter should match the level of:
- Jane Eyre Chapter 13 (completed example)
- CHAPTER-TEMPLATE-V3.md specifications

## Specific Focus Areas for This Chapter

[Optional: Add any specific elements you want the AI to pay attention to]

Example:
- "This chapter introduces Mr. Collins - make sure the comedy of his character comes through"
- "The power dynamics between Elizabeth and Lady Catherine are crucial here"
- "Focus on the theme of pride vs. prejudice as it develops"

---

Create the complete chapter now.
```

---

## 📖 How to Use This Prompt

### Step 1: Get the Source Text (15 minutes)

**For Project Gutenberg books:**

1. Go to gutenberg.org
2. Search for your book
3. Choose "Plain Text UTF-8" format
4. Copy the FULL chapter text you need
5. Paste into the prompt where indicated

**For Internet Archive books:**

1. Go to archive.org
2. Search for your book
3. Read online or download
4. Copy the chapter text
5. Paste into prompt

**Example - Getting Pride and Prejudice Chapter 5:**
```
1. Go to: https://www.gutenberg.org/ebooks/1342
2. Click "Plain Text UTF-8"
3. Find "Chapter 5" in the text
4. Copy from "Chapter 5" heading through the end of that chapter
5. Paste into prompt template
```

### Step 2: Fill in the Brackets (5 minutes)

Replace all `[BRACKETS]` with actual information:

```markdown
## Book Information
- **Book Title:** Pride and Prejudice
- **Author:** Jane Austen
- **Chapter Number:** 5
- **Chapter Title (if any):** [Leave blank - P&P chapters aren't titled]

## Previous Chapter Context
Elizabeth Bennet has met Mr. Darcy at a ball where he snubbed her, calling her "tolerable, but not handsome enough to tempt me." Jane has developed feelings for Mr. Bingley. The Bennet family dynamics and Mrs. Bennet's schemes are established.
```

### Step 3: Paste Complete Chapter Text

**Critical:** Include the FULL chapter text, not excerpts.

**Why?** The AI needs complete text to:
- Identify the best quotes accurately
- Understand full context
- Create accurate character development
- Spot all themes and techniques
- Write comprehensive analysis

**Example:**
```
## Source Chapter Text

Chapter 5

Within a short walk of Longbourn lived a family with whom the Bennets were particularly intimate. Sir William Lucas had been formerly in trade in Meryton, where he had made a tolerable fortune, and risen to the honour of knighthood by an address to the king during his mayoralty. The distinction had perhaps been felt too strongly...

[CONTINUE WITH COMPLETE CHAPTER TEXT - DON'T TRUNCATE]

...the conversation which immediately took place between them.
```

### Step 4: Add Any Special Focus (Optional)

If you want the AI to emphasize specific elements:

```markdown
## Specific Focus Areas for This Chapter

- Emphasize the social class dynamics and Charlotte Lucas's pragmatic view of marriage
- The gathering at Lucas Lodge sets up important relationships
- Focus on how this chapter contrasts Elizabeth's romantic ideals with social reality
```

### Step 5: Paste to AI Agent

Copy the complete filled-in prompt and paste to:
- **Claude** (Anthropic) - Works well with long context
- **ChatGPT** (OpenAI) - GPT-4 recommended
- **Other AI agents** that handle long prompts

### Step 6: Review and Edit Output (30-45 minutes)

**The AI will create 80-90% of the work.** You still need to:

- [ ] Verify quotes are accurate
- [ ] Check chapter number is correct everywhere
- [ ] Ensure modern adaptations feel authentic
- [ ] Polish any awkward phrasing
- [ ] Verify all V3 sections present
- [ ] Test that it compiles

---

## 🔄 For Replacing Existing Chapters

Use this modified prompt opening:

```markdown
# Replace Existing Chapter with V3 Template

I have an existing chapter that needs complete V3 replacement.

## Existing Chapter Content (for reference)

[PASTE OLD CHAPTER FILE HERE]

## What to Keep from Old Version

[LIST ANY INSIGHTS OR CONTENT WORTH PRESERVING]
- Good quote about X
- Modern adaptation scenario was working
- Terms ABC and DEF were solid

## Source Chapter Text from Book

[PASTE COMPLETE PUBLIC DOMAIN CHAPTER TEXT]

---

Create a completely new V3-compliant chapter using the source text. Reference the old version only for insights worth keeping, but ensure everything meets V3 standards...

[CONTINUE WITH REST OF STANDARD PROMPT]
```

---

## 📊 Time Savings

### Without AI:
- Create chapter from scratch: **6-8 hours**
- Replace existing chapter: **7-9 hours**

### With This Prompt:
- AI generates structure: **5-10 minutes**
- You review and polish: **30-45 minutes**
- **Total: ~1 hour** (85-90% time savings)

### What You Still Must Do:
- Verify accuracy of quotes
- Check chapter number throughout
- Polish modern adaptations for authenticity
- Ensure voice matches your standard
- Run quality checklists

---

## ⚠️ Important Notes

### Copyright Considerations

**Public Domain Books (Pre-1928 in US):** ✅ Safe to use full text
- Jane Austen, Charlotte Brontë, Charles Dickens, etc.
- Project Gutenberg books are safe

**Modern Books Still Under Copyright:** ❌ Cannot use full text
- Would need to work from your own reading/notes
- Cannot paste copyrighted text into AI
- Would need different approach

### Token Limits

**Long chapters may exceed AI token limits:**

**If chapter is very long (20+ pages):**
- Split into 2-3 sections
- Create prompt for each section
- Combine results

**Or:**
- Use Claude (100K+ token context)
- Use GPT-4 Turbo (128K tokens)

### Quality Control

**AI-generated content still needs human oversight:**

✅ **AI is excellent at:**
- Structure and formatting
- Initial analysis and insights
- Generating discussion questions
- Creating comprehensive content

⚠️ **Humans must verify:**
- Quote accuracy
- Tone and voice
- Cultural sensitivity
- Modern adaptation authenticity
- Overall quality and coherence

---

## 🎯 Example: Complete Filled Prompt

Here's what a ready-to-use prompt looks like:

```markdown
# Create Amplified Classics Chapter Using V3 Template

## Book Information
- **Book Title:** Pride and Prejudice
- **Author:** Jane Austen
- **Chapter Number:** 5
- **Chapter Title (if any):** 

## Previous Chapter Context
Mr. Bingley has rented Netherfield Park and attended a local ball with his friend Mr. Darcy. Darcy refused to dance with Elizabeth Bennet, calling her "tolerable, but not handsome enough to tempt me." Jane Bennet and Mr. Bingley showed mutual interest. Mrs. Bennet is scheming to marry her daughters well. The Bennet family includes five daughters: Jane, Elizabeth, Mary, Kitty, and Lydia.

## Source Chapter Text

Chapter 5

Within a short walk of Longbourn lived a family with whom the Bennets were particularly intimate. Sir William Lucas had been formerly in trade in Meryton, where he had made a tolerable fortune, and risen to the honour of knighthood by an address to the king during his mayoralty...

[COMPLETE CHAPTER TEXT - approximately 2000 words]

...and Elizabeth listened in silence, but was not convinced; their behaviour at the assembly had not been calculated to please in general; and with more quickness of observation and less pliancy of temper than her sister, and with a judgement too unassailed by any attention to herself, she was very little disposed to approve them.

---

## Task: Create V3-Compliant Chapter

[REST OF STANDARD PROMPT AS SHOWN ABOVE]

## Specific Focus Areas for This Chapter

- Charlotte Lucas is introduced as Elizabeth's pragmatic friend - her contrasting view of marriage is crucial
- The social dynamics between the Lucas and Bennet families show class mobility (Sir William's knighthood)
- Elizabeth's sharp observations vs Jane's generous interpretations establish their character contrast
- The gathering at Lucas Lodge serves as social commentary on provincial society
- Focus on Austen's irony and social critique

---

Create the complete chapter now.
```

---

## 📚 Quick Start Checklist

Before pasting to AI:
- [ ] Book title and author filled in
- [ ] Chapter number specified everywhere
- [ ] Previous chapters context written (2-3 sentences)
- [ ] COMPLETE chapter text pasted (not excerpts)
- [ ] Special focus areas added (if any)
- [ ] Using AI with sufficient token limit
- [ ] Ready to review and polish output

After AI generates chapter:
- [ ] Verify all quotes are accurate
- [ ] Check chapter number correct in `getLiteratureMessageByChapter(X)`
- [ ] Review modern adaptation for authenticity
- [ ] Ensure voice and tone match your standards
- [ ] Run V3 quality checklists
- [ ] Test TypeScript compiles
- [ ] View in browser to verify rendering

---

## 🚀 Batch Processing Multiple Chapters

**To create Chapters 1-5 efficiently:**

1. **Prepare all source texts** (30 min)
   - Copy chapters 1-5 from Project Gutenberg
   - Save each in separate text file
   - Write context for each

2. **Create chapters sequentially** (1 hour per chapter with AI)
   - Chapter 1: Run prompt, review, polish (1 hour)
   - Chapter 2: Run prompt (reference Chapter 1), review, polish (1 hour)
   - Chapter 3: Run prompt (reference Chapters 1-2), review, polish (1 hour)
   - Continue...

3. **Review for consistency** (1 hour)
   - Check themes track across chapters
   - Verify character development is coherent
   - Ensure quality is consistent

**Total time for 5 chapters with AI: ~6-7 hours**  
**vs. 30-40 hours creating manually**

---

## 💡 Pro Tips

### Getting Better Results

1. **Be specific about previous chapter context** - helps AI create better connections
2. **Mention key themes you want emphasized** - ensures they're developed
3. **Note character dynamics to highlight** - gets better character analysis
4. **Specify modern contexts relevant to your audience** - more authentic adaptations

### Iterating on Output

If first output isn't perfect:

```markdown
"The modern adaptation feels generic. Revise it to use specific 2025 platforms and situations. Instead of 'social media', name Instagram/TikTok/Discord. Instead of 'workplace', specify startup culture or retail job dynamics."
```

Or:

```markdown
"The amplified discussions are too academic. Rewrite in more accessible language that connects to what 18-year-old students actually care about. Use contemporary examples and explain without jargon."
```

### Building Your Prompt Library

Save customized prompts for:
- Different book genres (Gothic, Romance, etc.)
- Different student levels (AP vs general)
- Different emphases (historical context vs modern relevance)

---

**This prompt template can save you 5-7 hours per chapter while maintaining V3 quality standards!** 🎉

