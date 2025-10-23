# InDesign Import Guide for Amplified Classics

## 📋 Overview

This guide explains how to import and typeset Amplified Classics chapters in Adobe InDesign for print production.

## 📁 File Structure

Each chapter is provided as a `.docx` file with clear structural markers that map to InDesign styles:

```
wuthering-heights_chapter_01_sample.docx
wuthering-heights_chapter_02.docx
[... all 34 chapters ...]
```

## 🎨 Book Specifications

### Page Setup
- **Trim Size:** 6" × 9" (standard trade paperback)
- **Margins:** 
  - Top: 0.75"
  - Bottom: 0.75"
  - Inside (gutter): 0.9"
  - Outside: 0.75"
- **Bleed:** 0.125" on all sides
- **Binding:** Perfect bound

### Typography
- **Body Text:** EB Garamond 11pt, leading 13.2pt (1.2×)
- **Chapter Titles:** Lato Bold 24pt
- **Section Headings:** Lato Bold 14pt
- **Box Content:** EB Garamond 10pt

### Colors
- **IA Green (for green boxes):** 
  - Hex: #1E5631
  - CMYK: 71/32/100/34
- **Light Green Background:** 
  - Hex: #F0F7F2
  - CMYK: 6/0/6/0
- **Gray Box Border:** 
  - Hex: #666666
  - CMYK: 0/0/0/60

## 📦 Content Structure

Each chapter follows this consistent structure:

### 1. Chapter Header
```
CHAPTER [NUMBER]: [TITLE]
```
**InDesign Style:** `Chapter_Heading`

### 2. Series Opening (Chapter 1 only)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📗 GREEN BOX: SERIES OPENING
[Content]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
**InDesign Object Style:** `Green_Box_Frame`
**Text Style:** `Green_Box_Body`

### 3. Chapter Summary
```
Chapter Summary
[Brief summary - bold]
[Full paragraphs]
```
**InDesign Styles:** 
- Heading: `Section_Heading`
- Brief: `Summary_Brief`
- Body: `Body_Text`

### 4. At a Glance
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
At a Glance
Setting: [text]
Narrator: [text]
...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
**InDesign Object Style:** `Gray_Box_Frame`
**Text Styles:**
- Label (bold): `AtAGlance_Label`
- Value: `AtAGlance_Value`

### 5. Terms to Know
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Terms to Know
[Term] (bold)
[Definition]
Context: [text]
Why it matters: [text]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
**InDesign Object Style:** `Gray_Box_Frame`
**Text Styles:**
- Term: `Term_Title`
- Definition: `Body_Text`

### 6. Speed Learning Notice (Chapter 1 only)
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📗 GREEN BOX: SPEED LEARNING
[Content]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
**InDesign Object Style:** `Green_Box_Frame`

### 7. Reading Moments (Notice → Explore → Amplify)
```
Notice → Explore → Amplify

[emoji] [Title]

[ NOTICE ]
[Content]

[ EXPLORE ]
• Question 1
• Question 2

[ AMPLIFY ]
[Content]
```
**InDesign Object Styles:**
- Notice: `Notice_Box_Frame`
- Explore: `Explore_Box_Frame`
- Amplify: `Amplify_Box_Frame`

### 8. Critical Thinking Exercise
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Critical Thinking Exercise
[Title] (bold)
[Prompt]
Guiding Questions:
• Question 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
**InDesign Object Style:** `Gray_Box_Frame`

### 9. Next Time Teaser
```
[emoji] Next Time: [Title]
[Preview text]
[Hook question] (italic)
```
**InDesign Styles:**
- Heading: `Section_Heading`
- Body: `Body_Text`
- Question: `Italic_Body`

## 🎯 InDesign Style Setup

### Master Pages to Create

1. **Title_Page_Master**
   - Title page layout
   - Copyright page layout

2. **Chapter_1_Master**
   - Includes green box styles
   - Special handling for Series Opening

3. **Chapter_Standard_Master**
   - Standard chapter layout
   - Running headers (book title on verso, chapter on recto)

### Paragraph Styles to Create

| Style Name | Use | Font | Size | Leading | Color |
|------------|-----|------|------|---------|-------|
| `Chapter_Heading` | Chapter titles | Lato Bold | 24pt | 28.8pt | Black |
| `Section_Heading` | Section titles | Lato Bold | 14pt | 16.8pt | IA Green |
| `Body_Text` | Regular body | EB Garamond | 11pt | 13.2pt | Black |
| `Summary_Brief` | Brief summary | EB Garamond Bold | 11pt | 13.2pt | Black |
| `AtAGlance_Label` | "Setting:", etc. | EB Garamond Bold | 10pt | 12pt | Black |
| `AtAGlance_Value` | Values | EB Garamond | 10pt | 12pt | Black |
| `Term_Title` | Term names | EB Garamond Bold | 11pt | 13.2pt | IA Green |
| `Green_Box_Body` | Green box text | EB Garamond | 10pt | 12pt | Black |
| `Gray_Box_Body` | Gray box text | EB Garamond | 10pt | 12pt | Black |
| `Notice_Text` | Notice layer | EB Garamond | 10pt | 12pt | Black |
| `Explore_Text` | Explore layer | EB Garamond | 10pt | 12pt | Black |
| `Amplify_Text` | Amplify layer | EB Garamond | 10pt | 12pt | Black |
| `Italic_Body` | Italic emphasis | EB Garamond Italic | 11pt | 13.2pt | Black |

### Object Styles to Create

| Style Name | Purpose | Border | Fill | Padding |
|------------|---------|--------|------|---------|
| `Green_Box_Frame` | Series Opening, Speed Learning | 2pt solid, IA Green | Light Green | 12pt all |
| `Gray_Box_Frame` | At a Glance, Terms, Critical Thinking | 1pt solid, Gray | Light Gray | 10pt all |
| `Notice_Box_Frame` | Notice layer | 1pt solid, Light Gray | White | 8pt all |
| `Explore_Box_Frame` | Explore layer | 1pt solid, Medium Gray | Light Gray | 8pt all |
| `Amplify_Box_Frame` | Amplify layer | 1pt solid, Dark Gray | White | 8pt all |

## 🔧 Import Workflow

### Step 1: Setup (One Time)
1. Create new InDesign document with specs above
2. Set up all Master Pages
3. Create all Paragraph Styles
4. Create all Object Styles
5. Save as template

### Step 2: Import Chapter
1. Open template
2. Go to **File → Place** (Cmd/Ctrl+D)
3. Select chapter `.docx` file
4. Click to place text
5. Let text flow through pages

### Step 3: Apply Styles
1. **Find/Change** with GREP patterns:
   - Find: `━━━.*GREEN BOX.*━━━` → Tag for green box frame
   - Find: `━━━.*GRAY BOX.*━━━` → Tag for gray box frame
   - Find: `\[ NOTICE \]` → Apply Notice style
   - Find: `\[ EXPLORE \]` → Apply Explore style
   - Find: `\[ AMPLIFY \]` → Apply Amplify style

2. Apply object styles to tagged sections

3. Clean up box marker lines (delete `━━━` lines)

### Step 4: Final Adjustments
1. Check page breaks
2. Adjust widows/orphans
3. Verify box alignments
4. Check running headers
5. Proof one more time

### Step 5: Export
1. **File → Export → Adobe PDF (Print)**
2. Settings:
   - Preset: Press Quality
   - Marks and Bleeds: Include crop marks, use document bleed settings
   - Output: CMYK, 300 DPI
3. Save with filename: `wuthering_heights_amplified_PRINT.pdf`

## ⚡ Efficiency Tips

### Batch Processing
Once styles are set up, chapters should take:
- **First chapter (with green boxes):** ~30-45 minutes
- **Standard chapters:** ~15-20 minutes each

### Quality Checklist Per Chapter
- [ ] All styles applied correctly
- [ ] Green boxes have proper background color
- [ ] Gray boxes have proper border/background
- [ ] Reading Moments properly nested (Notice → Explore → Amplify)
- [ ] No orphaned box markers (`━━━`)
- [ ] Page breaks in appropriate places
- [ ] Running headers correct

## 📊 Estimated Timeline

For 34-chapter Wuthering Heights:

- **Setup (one time):** 4-6 hours
  - Document setup
  - Style creation
  - Sample chapter for approval
  
- **Bulk production:** 10-15 hours
  - Chapter 1 (special): 1 hour
  - Chapters 2-34: 15-20 min each = 8-11 hours
  - Final review and export: 2-3 hours

**Total:** ~15-20 hours of work

## 💰 Cost Considerations

**Recommended Pricing Model:**
- **Setup fee:** $200-300 (one time)
- **Per chapter fee:** $8-12 × 34 chapters = $272-408
- **Final production:** $100-150

**Total project:** $572-858

## 📧 Deliverables

Upon completion, provide:

1. **Source files:**
   - `.indd` files for all chapters
   - InDesign package (fonts included)

2. **Print-ready PDF:**
   - With crop marks and bleed
   - CMYK, 300 DPI
   - Press Quality preset

3. **Digital PDF:**
   - No bleed
   - RGB color
   - Hyperlinked table of contents
   - Bookmarked chapters

4. **Style guide document:**
   - Screenshots of all style settings
   - CMYK color values
   - Font specifications

## 🆘 Troubleshooting

### Issue: Docx import loses formatting
**Solution:** That's expected. The .docx uses structural markers (like `━━━`), not formatting. Apply InDesign styles after import.

### Issue: Emojis don't display
**Solution:** Ensure system emoji font is active, or replace with InDesign glyphs.

### Issue: Green box background doesn't print
**Solution:** Verify CMYK values are set, not RGB. Check "Overprint Fill" is off.

### Issue: Text overflows pages
**Solution:** Allow text to flow, then adjust tracking slightly (-5 to -10) if needed.

## ✅ Final Quality Standards

Before delivery, ensure:
- [ ] No spelling errors introduced during import
- [ ] All 34 chapters formatted consistently
- [ ] PDF file size reasonable (<50MB total)
- [ ] All fonts embedded in PDF
- [ ] Bleed extends 0.125" beyond trim
- [ ] No missing images/graphics
- [ ] Running headers accurate on every page

---

## 📞 Questions?

Contact: [Your Email]
Project: Wuthering Heights Amplified
Version: 1.0
Last Updated: 2025





