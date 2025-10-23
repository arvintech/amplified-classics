# Jane Eyre - Amplified Classics Edition

This is the **template-based** version of Jane Eyre using the Amplified Classics chapter data structure.

## ✅ Setup Complete

- Config file: `config.ts`
- Dynamic routing: `[chapter]/page.tsx`
- Chapter 1 data: `chapters/chapter-1.ts`

## 🚀 How to Add More Chapters

### For Chapter 2+, use `ChapterNextTemplate`:

1. Copy `/app/books/_templates/ChapterNextTemplate.ts` 
2. Rename to `chapters/chapter-2.ts`
3. Fill in the data following the template structure
4. Import in `[chapter]/page.tsx`:
   ```typescript
   import { chapter2 } from '../chapters/chapter-2'
   ```
5. Add to the chapters array

## 📁 Structure

```
jane-eyre-new/
├── config.ts              # Book metadata
├── page.tsx               # Book landing page
├── [chapter]/            
│   └── page.tsx           # Dynamic chapter renderer
├── chapters/
│   ├── chapter-1.ts       # Chapter 1 data (complete!)
│   ├── chapter-2.ts       # TODO: Create from ChapterNextTemplate
│   └── ...
└── README.md              # This file
```

## 🎯 Concurrent Development Workflow

### For Multiple Contributors on Different Machines:

1. **Claim a Chapter**: Create an issue or comment in your team workspace
   - "I'm working on Chapter 5"

2. **Pull Latest**: Always pull before starting
   ```bash
   git pull origin main
   ```

3. **Create Your Branch**: 
   ```bash
   git checkout -b jane-eyre/chapter-5-yourname
   ```

4. **Work on Your Chapter**:
   - Copy the template
   - Fill in your chapter data
   - Test locally: `npm run dev`
   - Visit `http://localhost:3000/books/jane-eyre-new/chapter-5`

5. **Commit & Push**:
   ```bash
   git add app/books/jane-eyre-new/chapters/chapter-5.ts
   git commit -m "Add Jane Eyre Chapter 5 analysis"
   git push origin jane-eyre/chapter-5-yourname
   ```

6. **Create Pull Request**: Others review before merging

### Avoiding Conflicts:

- **Each chapter is a separate file** - no conflicts if working on different chapters!
- **Only edit**: `chapters/chapter-X.ts` (your assigned chapter)
- **Don't edit**: `[chapter]/page.tsx` or `config.ts` unless coordinating

### Quality Checks:

- Use the template structure exactly
- Include all required sections
- Test the chapter renders properly
- Run linter: `npm run lint`

## 🔧 Testing Your Chapter

```bash
cd /Users/arvinlioanag/Documents/GitHub/amplified-classics
npm run dev
```

Visit: `http://localhost:3000/books/jane-eyre-new/chapter-1`

## 📚 Templates

- **Chapter 1**: Use `/app/books/_templates/Chapter1Template.ts`
  - Has `seriesOpening` and `speedLearningNotice` sections
  
- **Chapter 2+**: Use `/app/books/_templates/ChapterNextTemplate.ts`
  - Simplified structure for subsequent chapters

## ✨ Chapter 1 Status

**COMPLETE! ✅**

Chapter 1 includes:
- Full summary (brief + 4 paragraphs)
- 6 Terms to Know
- 4 Character analyses  
- 4 Key quotes with analysis
- 3 Themes + 4 Literary techniques
- Modern adaptation with 8 parallels
- 4 Thematic threads
- 8 Discussion questions
- 5 Amplified Discussion deep-dives
- Educator resources
- Critical thinking exercise
- And more!

Ready to view at: `/books/jane-eyre-new/chapter-1`

