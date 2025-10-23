# Export Files for Print Production

## 📦 What's in This Folder

This folder contains everything you need to send to a Fiverr designer for InDesign typesetting:

### 1. **wuthering-heights_chapter_01_sample.docx** (8.71 KB)
   - **Sample chapter export** demonstrating the structure
   - Shows all section types that will appear
   - Uses clear structural markers (`━━━`) for InDesign style mapping
   - Based on abbreviated data (not full chapter content)

### 2. **INDESIGN_IMPORT_GUIDE.md**
   - **Complete guide for your designer**
   - Page specifications (6" × 9", margins, bleed)
   - Typography specs (EB Garamond, Lato fonts, sizing)
   - Color specifications (IA Green #1E5631, etc.)
   - Step-by-step import workflow
   - Style setup instructions
   - Quality checklists
   - Estimated timeline and costs

---

## 🎯 Strategy Overview

### The Cost-Effective Approach

**Problem:** Typesetting 34 chapters individually = expensive and inconsistent

**Solution:** Structured data export + reusable InDesign styles = mechanical replication

### How It Works

1. **One-Time Setup** ($200-300, 4-6 hours)
   - Designer creates InDesign template
   - Sets up all paragraph styles (20+ styles)
   - Sets up all object styles (green boxes, gray boxes, etc.)
   - Typesets sample chapter for approval
   - You review and approve

2. **Bulk Production** ($8-12 per chapter, 15-20 min each)
   - Once approved, remaining chapters are mechanical
   - Import .docx → Apply styles → Check quality → Done
   - 33 remaining chapters = $264-396 total

3. **Total Project Cost:** $572-858 for full 300-400 page book

---

## 📋 What You'll Provide to Designer

### Immediate (for quote/setup):
1. This `INDESIGN_IMPORT_GUIDE.md` file
2. The `wuthering-heights_chapter_01_sample.docx` file
3. Your introduction text (the one we wrote earlier)

### After Setup Phase (bulk production):
1. All 34 chapter .docx files
2. Cover image file (if using in interior)
3. Any additional front/back matter

---

## 🔧 The Export Script

Location: `/scripts/export-chapter-docx.js`

**What it does:**
- Reads chapter data from TypeScript files
- Exports to structured .docx format
- Adds clear section markers for InDesign
- Maintains consistent structure across all chapters

**To export a chapter:**
```bash
node scripts/export-chapter-docx.js
```

**To customize** for other books or chapters, edit the `chapter1Data` object in the script.

---

## 📊 Chapter Structure (What Designer Will See)

Each chapter .docx contains:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHAPTER [NUMBER]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📗 GREEN BOX: SERIES OPENING (Chapter 1 only)
[Welcome content]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Chapter Summary
[Brief summary in bold]
[Full paragraphs]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
At a Glance
Setting: Yorkshire moors, 1801
Narrator: Mr. Lockwood
Mood: Gothic, foreboding
[etc.]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Terms to Know
Wuthering (bold)
[Definition]
Context: [text]
Why it matters: [text]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📗 GREEN BOX: SPEED LEARNING (Chapter 1 only)
[Progressive disclosure explanation]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Notice → Explore → Amplify

🎭 Lockwood's Self-Deception

[ NOTICE ]
[Observation text]

[ EXPLORE ]
• Question 1
• Question 2

[ AMPLIFY ]
[Deep analysis]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Critical Thinking Exercise
[Title in bold]
[Prompt text]
Guiding Questions:
• Question 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌙 Next Time: The Nightmare Visit
[Preview text]
[Hook question in italic]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
END OF CHAPTER 1 AMPLIFIED CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Key Design Elements:**
- `━━━` lines = box boundaries (designer will replace with actual styled boxes)
- `📗 GREEN BOX` = apply green background, IA green border
- Sections without boxes = standard body text
- `[ NOTICE ]`, `[ EXPLORE ]`, `[ AMPLIFY ]` = apply progressive box styles

---

## 🎨 Design Specifications Summary

### Page Setup
- **6" × 9"** trade paperback
- **0.75"** margins (0.9" inner for binding)
- **0.125"** bleed

### Fonts
- **EB Garamond** for body text (11pt, leading 13.2pt)
- **Lato Bold** for headings (14pt-24pt)

### Colors
- **IA Green:** #1E5631 (borders, accent text)
- **Light Green:** #F0F7F2 (box backgrounds)

### Visual Hierarchy
1. Chapter numbers: Largest (24pt)
2. Section headings: Medium (14pt, IA green)
3. Body text: Standard (11pt, black)
4. Box content: Slightly smaller (10pt)

---

## ✅ Next Steps

### 1. Find Designer on Fiverr
**Search terms:**
- "book typesetting InDesign"
- "book interior design"
- "book layout formatting"

**Look for:**
- Portfolio with book interiors
- 4.9+ star rating
- InDesign expertise mentioned
- Print-ready PDF delivery

### 2. Initial Outreach
**Message template:**
```
Hi [Designer],

I'm publishing a series of classic literature books with added 
educational content called "Amplified Classics." I need InDesign 
typesetting for a 300-400 page book (Wuthering Heights).

I have:
- Complete content in structured .docx format
- Detailed InDesign style guide
- Sample chapter demonstrating structure

The project requires:
1. One-time setup (master pages, 20+ paragraph styles, 5+ object 
   styles)
2. Import and styling of 34 chapters
3. Print-ready PDF output (6×9", with bleed)

All chapters follow identical structure, so after setup it's mostly 
mechanical work. Estimated 15-20 hours total.

Can you provide a quote for:
- Setup phase (template + sample chapter)
- Per-chapter rate for bulk production
- Final PDF preparation

I'll send detailed specs and sample files upon interest.
```

### 3. Setup Phase
1. Send designer the `INDESIGN_IMPORT_GUIDE.md`
2. Send sample chapter .docx
3. Designer provides quote
4. Designer creates template and styles
5. Designer typesets 1-2 sample chapters
6. **You review and approve** (critical!)
7. Request any adjustments

### 4. Bulk Production
1. Export all 34 chapters using the script
2. Send all .docx files at once
3. Designer processes in batch
4. You review random samples for consistency
5. Final proofread

### 5. Final Delivery
Designer provides:
- Print-ready PDF (CMYK, 300 DPI, with bleed)
- Digital PDF (RGB, hyperlinked)
- InDesign source files (.indd)
- Packaged fonts and assets

---

## 💡 Pro Tips

### Minimize Costs
1. **Approve setup quickly** - changes after bulk work starts = expensive
2. **Provide all files at once** - batch work is faster than piecemeal
3. **Be specific in initial specs** - vague requirements = revisions = $$
4. **Use this structured format** - clear structure = less designer interpretation

### Ensure Quality
1. **Request test print** - screen PDFs look different than printed
2. **Check random chapters** - not just first and last
3. **Verify all boxes styled** - green boxes should be green, not just text notes
4. **Proof the PDF** - catch typos before printing 5000 copies!

### Scale for Future Books
Once you have the template and style guide:
- Jane Eyre uses same structure = just swap content
- Pride & Prejudice = same structure
- **Each new book gets cheaper** because setup is done

---

## 📞 Support

**If designer has questions about:**
- Content structure → Show them `INDESIGN_IMPORT_GUIDE.md`
- Visual examples → Point to website (http://localhost:3000)
- Specific sections → Reference this README

**If you need to modify the export:**
- Edit `/scripts/export-chapter-docx.js`
- Adjust the `chapter1Data` object
- Run `node scripts/export-chapter-docx.js`

---

## 🎉 Result

When done, you'll have:
- **Professional trade paperback** ready for KDP/IngramSpark
- **Consistent design** across all 34 chapters
- **Reusable template** for future books
- **Total cost under $900** (vs. $3000+ for custom design)

**The key:** Structure + Standards + Batch Processing = Affordable Professional Quality

Good luck with your Amplified Classics physical edition! 📚✨





