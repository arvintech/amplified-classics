# 📖 Book ↔ Web Integration Strategy

## **The Hybrid Experience: Physical Book + Digital Platform**

### **Overview**
The **Amplified Classics: Jane Eyre Teacher's Guide** is designed as a transmedia educational product where the physical book and web platform amplify each other.

---

## 📚 **The Book (KDP Print - B&W, ~380 pages)**

### **Specifications:**
- **Format:** 6" x 9" trade paperback (standard academic size)
- **Pages:** 344-380 pages (under 400 to keep costs down)
- **Color:** Black & white only (keeps KDP cost at $3-4 per copy)
- **Retail Price:** $24.99 (competitive for education market)
- **Your Royalty:** ~$8-10 per book (60% on KDP direct)

### **Book Structure:**

#### **Front Matter (15 pages)**
1. Title page
2. Copyright & ISBN
3. Dedication
4. About the Author
5. Table of Contents
6. **Introduction:** "What AI Revealed About How We Teach" (3 pages)
7. **The Method:** Notice → Explore → Amplify explained (8 pages)
8. How to Use This Book + Web Platform (2 pages)

#### **Main Content: 38 Chapters (304 pages = 8 pages/chapter)**

**Each Chapter Template (8 pages in B&W):**

**Page 1:**
```
┌────────────────────────────────────────┐
│ CHAPTER 2: THE RED-ROOM        [QR 📱] │
│                                ┌─────┐ │
│ Previously on Jane Eyre...     │ QR  │ │
│ [2-sentence recap]             │CODE │ │
│                                └─────┘ │
│ amplifiedclassics.com/qr/2            │
├────────────────────────────────────────┤
│ CHAPTER SUMMARY (starts)               │
│ [First paragraph of summary...]        │
└────────────────────────────────────────┘
```

**Pages 2-3:**
- Complete chapter summary (4 paragraphs)
- Character development (2-3 characters)
- Key traits boxes

**Pages 4-5:**
- Key Quotes (3-5 quotes with brief analysis)
- Each quote in a bordered box with analysis below

**Pages 6-7:**
- **Notice → Explore Moments** (condensed)
- Notice phase printed in full
- Explore questions listed (3-4 per moment)
- "Amplify" note: "Scan QR code for full insights"

**Page 8:**
```
┌────────────────────────────────────────┐
│ ✨ AMPLIFY ON THE WEB                  │
├────────────────────────────────────────┤
│ For full expert insights on each       │
│ Reading Moment, visit:                 │
│                                         │
│ amplifiedclassics.com/books/           │
│ jane-eyre/chapter-2                    │
│                                         │
│ Or scan the QR codes throughout this   │
│ chapter for instant access.            │
├────────────────────────────────────────┤
│ 📄 CLASSROOM WORKSHEET         [QR 📱] │
│                                ┌─────┐ │
│ Print-ready PDF with space     │ QR  │ │
│ for student responses          │CODE │ │
│                                └─────┘ │
│ /qr/2/worksheet                        │
├────────────────────────────────────────┤
│ 📺 NEXT TIME ON JANE EYRE              │
│                                         │
│ Chapter 3: Mr. Lloyd's Visit           │
│ [1-2 sentence teaser]                  │
│                                         │
│ What to Notice Next: [3 prompts]      │
└────────────────────────────────────────┘
```

#### **Back Matter (10 pages)**
1. How to Use This in Your Classroom (practical guide)
2. Assessment Without Tests
3. For Self-Learners
4. Resources & Community
5. QR Code Directory (all chapter links)
6. About Amplified Classics
7. Acknowledgments

---

## 💻 **The Web Platform**

### **Purpose:**
- Scales beyond print limitations
- Provides interactivity (Amplify buttons)
- Updates/improvements without reprinting
- Community features
- Analytics for improvement

### **QR Code Landing Pages:**

**Route Structure:**
```
/qr/[chapter]              → Chapter landing page
/qr/[chapter]/worksheet    → Printable PDF worksheet
/qr/[chapter]/guide        → Teacher discussion guide
```

#### **`/qr/[chapter]` (Main Landing)**

**What Users See:**
1. **Welcome Banner:**
   - "Welcome from the Book!"
   - Recognition that they scanned QR code
   - Chapter number confirmation

2. **3 Action Cards:**
   - **Interactive Chapter** → Full web experience
   - **Classroom Worksheet** → Print-ready PDF
   - **Discussion Guide** → Teacher facilitation tips

3. **Classroom Flow Box:**
   - 30-40 minute suggested timeline
   - Clear steps for teachers

4. **Book Owner Benefits:**
   - All free for book owners
   - Links to buy book (Amazon + Powell's)

#### **`/qr/[chapter]/worksheet` (Printable PDF)**

**Design Specs:**
- **Continuous form** (prints as multi-page document)
- **Black & white** (matches book aesthetic)
- **Standard 8.5" x 11"** letter size
- **Print-optimized** (no colors, web navigation hidden)

**Worksheet Structure:**
```
┌─────────────────────────────────────────┐
│ JANE EYRE — CHAPTER 2                   │
│ Amplified Classics: Notice → Explore →  │
│ Amplify                                  │
│                                          │
│ Name: _____________  Date: __________    │
├─────────────────────────────────────────┤
│ 📖 CHAPTER SUMMARY                      │
│ [2-3 sentence summary]                  │
├─────────────────────────────────────────┤
│ 🔴 READING MOMENT 1: THE COLOR RED      │
│ ┌─────────────────────────────────────┐ │
│ │ 👀 NOTICE:                          │ │
│ │ [Notice prompt printed]             │ │
│ └─────────────────────────────────────┘ │
│                                          │
│ 🔍 EXPLORE (Discuss with your group)    │
│                                          │
│ 1. [Question 1]                         │
│    ________________________________     │
│    ________________________________     │
│                                          │
│ 2. [Question 2]                         │
│    ________________________________     │
│    ________________________________     │
│                                          │
│ ✨ AMPLIFY: Visit amplifiedclassics.com │
│ /books/jane-eyre/chapter-2 for insights │
├─────────────────────────────────────────┤
│ [Repeat for each Reading Moment]        │
├─────────────────────────────────────────┤
│ 💭 REFLECTION (Optional 5-10 min)       │
│                                          │
│ What did you appreciate about Brontë's  │
│ craft in this chapter?                   │
│    ________________________________     │
│    ________________________________     │
│    ________________________________     │
└─────────────────────────────────────────┘
│ From: Amplified Classics: Jane Eyre     │
│ Teacher's Guide                          │
│ Available at Amazon & Powell's Books    │
└─────────────────────────────────────────┘
```

**Print Features:**
- Page breaks avoid splitting questions
- Ample writing space (2-3 lines per question)
- Footer on every page (branding)
- QR codes hidden when printing
- Clean, scannable format

---

## 🔲 **QR Code Strategy**

### **QR Code Placement in Book:**

**Every Chapter Gets 2 QR Codes:**

1. **Main QR (Page 1, top-right corner):**
   - Links to: `/qr/[chapter]`
   - Access to full interactive chapter
   - Size: 1.5" x 1.5" (easily scannable)
   - Labeled: "📱 Chapter [X] Interactive"

2. **Worksheet QR (Page 8, bottom):**
   - Links to: `/qr/[chapter]/worksheet`
   - Instant PDF download/print
   - Size: 1" x 1" (sufficient)
   - Labeled: "📄 Print Worksheet"

### **Additional QR Codes:**

**Front Matter:**
- **Method QR** → `/method` (full method documentation)
- **Community QR** → `/community` (discussion forums)

**Back Matter:**
- **All Chapters QR** → `/books/jane-eyre` (chapter list)
- **Resources QR** → `/resources` (printables, guides)

---

## 🎯 **User Journey Flows**

### **Flow 1: Teacher Discovers Book at Powell's**
1. Browses education section at Powell's
2. Finds **Amplified Classics: Jane Eyre** on shelf
3. Flips through, sees QR codes
4. Scans QR from Chapter 1
5. Lands on `/qr/1` → sees interactive features
6. Impressed → buys book
7. Uses in classroom → scans QR codes with students
8. Students access platform → engagement increases
9. Teacher recommends to colleagues

### **Flow 2: Faculty Member Gets Review Copy**
1. Department chair receives book in mail
2. Reads intro (3 pages) → intrigued by method
3. Scans Method QR → reads full framework online
4. Tries Chapter 1 worksheet → prints for test class
5. Students respond well (30-min session works!)
6. Requests 30 copies for department adoption
7. School becomes case study

### **Flow 3: Self-Learner Finds Book on Amazon**
1. Searches "Jane Eyre study guide"
2. Finds your book in results
3. Reads reviews (5 stars from teachers)
4. Buys for personal study
5. Scans QR codes → accesses full platform
6. Works through chapters at own pace
7. Uses "Teach It" prompts to solidify learning
8. Leaves glowing review → drives more sales

---

## 💰 **Revenue Strategy**

### **Book Sales (Primary Revenue)**
- **Retail:** $24.99 per book
- **Your cut:** $8-10 per book (KDP 60% royalty)
- **Class set (30 books):** $750 retail → $240-300 for you
- **Year 1 target:** 50 adoptions = 1,500 books = $12K-15K

### **Bulk/Institutional Sales**
- **School discount:** 20% off for 50+ copies
- **Still profitable:** $5-6 per book to you
- **Volume makes up for discount**

### **Web Platform (Secondary)**
- **Free for book owners** (lifetime access via code in book)
- **Paid tier for non-owners:** $10/month or $90/year
- **Drives book sales** (book is cheaper than subscription)

### **Workshop Revenue (Tertiary)**
- **Faculty training:** $500-1,000 per workshop
- **Book required:** Workshop attendees buy book
- **Consulting:** Schools pay for implementation

---

## 📊 **Success Metrics**

### **Book Metrics:**
- Units sold (Amazon + Powell's)
- Reviews & ratings
- "Customers also bought" placement
- Return rate (target: <5%)

### **Web Metrics:**
- QR code scans (tracks which chapters most popular)
- Time on site (engagement measure)
- Worksheet downloads (usage proxy)
- Return visits (retention)

### **Adoption Metrics:**
- Number of schools using
- Class set purchases
- Workshop requests
- Word-of-mouth referrals

---

## 🚀 **Implementation Checklist**

### **Phase 1: Build (Current)**
- [x] Chapter 1 complete with all sections
- [x] Chapter 2 complete with all sections
- [x] QR landing page structure (`/qr/[chapter]`)
- [x] Printable worksheet system (`/qr/[chapter]/worksheet`)
- [ ] Complete Chapters 3-10 (first 10 chapters for book)
- [ ] Teacher Discussion Guide pages (`/qr/[chapter]/guide`)
- [ ] Method documentation page (`/method`)

### **Phase 2: Book Production**
- [ ] Finalize chapter count for book (10 chapters or all 38?)
- [ ] Design book cover
- [ ] Format manuscript for KDP (6x9, B&W)
- [ ] Generate all QR codes with final URLs
- [ ] ISBN purchase ($125 for 10 ISBNs)
- [ ] Upload to KDP
- [ ] Order author copies (5-10 for review)

### **Phase 3: Pre-Launch**
- [ ] Send review copies to:
  - Education bloggers
  - Podcast hosts (Cult of Pedagogy, etc.)
  - Local college faculty
  - Powell's Books (for author event)
- [ ] Set up Amazon Author Central page
- [ ] Create launch landing page on web platform
- [ ] Build email list (teachers interested in method)

### **Phase 4: Launch**
- [ ] Powell's Books author event (Portland)
- [ ] Amazon launch (price at $0.99 for 5 days, then $24.99)
- [ ] Social media campaign
- [ ] Reach out to Portland State, PCC education depts
- [ ] Submit to education awards (IndieFab, etc.)

### **Phase 5: Scale**
- [ ] Track metrics (sales, scans, engagement)
- [ ] Gather testimonials from early adopters
- [ ] Create case studies (schools using successfully)
- [ ] Pitch to regional conferences (NCTE, etc.)
- [ ] Expand to more classics (Pride & Prejudice, 1984, etc.)

---

## 🎨 **Design Consistency: Book ↔ Web**

### **Visual Language (B&W for Print, Enhanced for Web):**

**Typography:**
- **Headings:** Georgia (serif, classic literary feel)
- **Body:** Arial/Helvetica (readable, professional)
- **Code/Links:** Monospace (tech element)

**Iconography:**
- **Emojis:** Same across both mediums
- **Icons:** Simple, recognizable (📖📱📄💬)
- **Borders:** Clean lines, no gradients in book

**Tone:**
- Collaborative, not authoritarian
- Empowering, not condescending
- Practical, not theoretical
- Enthusiastic, not academic

---

## 📖 **Book vs. Web: What Goes Where?**

### **What Stays in Book Only:**
- Condensed content (space constraints)
- Core method explanation (reproducible)
- Essential quotes & analysis
- "Amplify on web" prompts (drives traffic)

### **What Lives on Web Only:**
- Full Amplify insights (too long for print)
- Interactive buttons (obviously)
- Discussion forums
- Video content (future)
- Updates/refinements

### **What Appears in Both:**
- Notice phases (foundation)
- Explore questions (core pedagogy)
- Chapter summaries
- Character development
- Method framework

---

## 🏆 **Success Vision: 3-Year Plan**

### **Year 1: Establish Credibility**
- 50 school adoptions
- 1,500 books sold
- Powell's shelf presence
- 25+ 5-star reviews
- 1 major conference presentation

### **Year 2: Scale Method**
- 200 school adoptions
- 6,000 books sold
- Other books added (Pride & Prejudice, 1984)
- Chronicle of Higher Ed article
- Consulting contracts with 3-5 schools

### **Year 3: Movement Status**
- 1,000 school adoptions
- 30,000 books sold
- State-level adoption (Oregon, Washington)
- TED/TEDx talk
- Book series (10+ titles)

---

**This isn't just a book. It's an ecosystem where physical and digital amplify each other—exactly like the method itself.** 📚✨

