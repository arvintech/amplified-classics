/**
 * Export FULL Chapter 1 with Real Data to DOCX for InDesign
 */

const { Document, Paragraph, TextRun, HeadingLevel, Packer, AlignmentType } = require('docx');
const fs = require('fs');
const path = require('path');

// Import the actual TypeScript data (we'll read it as text and parse)
const chapterDataPath = path.join(__dirname, '../app/books/wuthering-heights/chapters/chapter-1.ts');
const chapterContent = fs.readFileSync(chapterDataPath, 'utf8');

// Execute the TypeScript to get the data
const { chapter1 } = require('../app/books/wuthering-heights/chapters/chapter-1.ts');

function createFullChapterDocument(chapterData) {
  const sections = [];

  // Helper function to add separator
  const addSeparator = () => sections.push(
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
    })
  );

  // ============================================
  // TITLE PAGE
  // ============================================
  sections.push(
    new Paragraph({
      text: 'WUTHERING HEIGHTS',
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { before: 1200, after: 200 },
    }),
    new Paragraph({
      text: 'by Emily Brontë',
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    }),
    new Paragraph({
      text: 'AMPLIFIED EDITION',
      bold: true,
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
    }),
    new Paragraph({
      text: 'Chapter 1 Sample for InDesign Import',
      alignment: AlignmentType.CENTER,
      spacing: { after: 800 },
    })
  );

  addSeparator();

  // ============================================
  // CHAPTER HEADER
  // ============================================
  sections.push(
    new Paragraph({
      text: `CHAPTER ${chapterData.number}`,
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
      spacing: { before: 600, after: 400 },
    })
  );

  // ============================================
  // SERIES OPENING (Green Box)
  // ============================================
  if (chapterData.seriesOpening) {
    sections.push(
      new Paragraph({ text: '', spacing: { before: 200 } }),
      new Paragraph({
        text: '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: '📗 GREEN BOX: SERIES OPENING',
        bold: true,
        allCaps: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: chapterData.seriesOpening.title, bold: true, size: 28 }),
        ],
        spacing: { after: 150 },
      }),
      new Paragraph({
        text: chapterData.seriesOpening.introduction,
        spacing: { after: 200 },
      })
    );

    chapterData.seriesOpening.features.forEach(feature => {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${feature.icon} ${feature.name}`, bold: true, size: 24 }),
          ],
          spacing: { before: 150, after: 75 },
        }),
        new Paragraph({
          text: feature.description,
          spacing: { after: 150 },
        })
      );
    });

    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: chapterData.seriesOpening.callToAction, italics: true }),
        ],
        spacing: { before: 150, after: 100 },
      }),
      new Paragraph({
        text: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛',
        spacing: { after: 400 },
      })
    );
  }

  // ============================================
  // CHAPTER SUMMARY
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Chapter Summary',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: chapterData.summary.brief, bold: true, size: 24 }),
      ],
      spacing: { after: 250 },
    })
  );

  chapterData.summary.full.forEach(para => {
    sections.push(
      new Paragraph({
        text: para,
        spacing: { after: 150 },
      })
    );
  });

  // ============================================
  // AT A GLANCE (Gray Box)
  // ============================================
  sections.push(
    new Paragraph({ text: '', spacing: { before: 300 } }),
    new Paragraph({
      text: '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
      spacing: { before: 100, after: 50 },
    }),
    new Paragraph({
      text: 'At a Glance',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    })
  );

  const atAGlanceOrder = ['setting', 'narrator', 'keyEvent', 'mood', 'importantCharacters', 'literaryDevices', 'centralQuestion'];
  atAGlanceOrder.forEach(key => {
    if (chapterData.atAGlance[key]) {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      const value = Array.isArray(chapterData.atAGlance[key]) 
        ? chapterData.atAGlance[key].join(', ') 
        : chapterData.atAGlance[key];
      
      sections.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${label}: `, bold: true }),
            new TextRun({ text: value }),
          ],
          spacing: { after: 100 },
        })
      );
    }
  });

  sections.push(
    new Paragraph({
      text: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛',
      spacing: { after: 400 },
    })
  );

  // ============================================
  // TERMS TO KNOW (Gray Box)
  // ============================================
  sections.push(
    new Paragraph({ text: '', spacing: { before: 300 } }),
    new Paragraph({
      text: '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
      spacing: { before: 100, after: 50 },
    }),
    new Paragraph({
      text: 'Terms to Know',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 250 },
    })
  );

  chapterData.termsToKnow.forEach((term, index) => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: term.term, bold: true, size: 26, color: '1E5631' }),
        ],
        spacing: { before: index > 0 ? 250 : 150, after: 100 },
      }),
      new Paragraph({
        text: term.definition,
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Context: ', italics: true, bold: true }),
          new TextRun({ text: term.context, italics: true }),
        ],
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Why it matters: ', italics: true, bold: true }),
          new TextRun({ text: term.whyItMatters, italics: true }),
        ],
        spacing: { after: 150 },
      })
    );
  });

  sections.push(
    new Paragraph({
      text: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛',
      spacing: { after: 400 },
    })
  );

  // ============================================
  // CHARACTER DEVELOPMENT
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Character Development',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 250 },
    })
  );

  chapterData.characters.forEach(char => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${char.keyTrait.emoji} ${char.name}`, bold: true, size: 24 }),
        ],
        spacing: { before: 200, after: 100 },
      }),
      new Paragraph({
        text: char.development,
        spacing: { after: 250 },
      })
    );
  });

  // ============================================
  // KEY QUOTES
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Key Quotes',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 250 },
    })
  );

  chapterData.quotes.forEach((quote, index) => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: `"${quote.text}"`, italics: true, size: 24 }),
        ],
        spacing: { before: index > 0 ? 250 : 150, after: 125 },
      }),
      new Paragraph({
        text: quote.analysis,
        spacing: { after: 250 },
      })
    );
  });

  // ============================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Intelligence Amplified Analysis',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 500, after: 300 },
    })
  );

  // Themes
  sections.push(
    new Paragraph({
      text: 'Major Themes',
      heading: HeadingLevel.HEADING_3,
      spacing: { before: 250, after: 150 },
    })
  );

  chapterData.iaAnalysis.themes.forEach(theme => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: theme.name, bold: true, size: 24 }),
        ],
        spacing: { before: 175, after: 100 },
      }),
      new Paragraph({
        text: theme.explanation,
        spacing: { after: 200 },
      })
    );
  });

  // Literary Techniques
  sections.push(
    new Paragraph({
      text: 'Literary Techniques',
      heading: HeadingLevel.HEADING_3,
      spacing: { before: 350, after: 150 },
    })
  );

  chapterData.iaAnalysis.literaryTechniques.forEach(tech => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: tech.name, bold: true, size: 24 }),
        ],
        spacing: { before: 175, after: 100 },
      }),
      new Paragraph({
        text: tech.explanation,
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Example: ', italics: true, bold: true }),
          new TextRun({ text: tech.example, italics: true }),
        ],
        spacing: { after: 200 },
      })
    );
  });

  // ============================================
  // SPEED LEARNING NOTICE (Green Box)
  // ============================================
  if (chapterData.readingMomentsIntro) {
    sections.push(
      new Paragraph({ text: '', spacing: { before: 400 } }),
      new Paragraph({
        text: '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: '📗 GREEN BOX: SPEED LEARNING',
        bold: true,
        allCaps: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: chapterData.readingMomentsIntro.title, bold: true, size: 26 }),
        ],
        spacing: { after: 150 },
      }),
      new Paragraph({
        text: chapterData.readingMomentsIntro.content,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛',
        spacing: { after: 400 },
      })
    );
  }

  // ============================================
  // READING MOMENTS (Notice → Explore → Amplify)
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Notice → Explore → Amplify',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 500, after: 300 },
    })
  );

  chapterData.readingMoments.forEach((moment, momentIndex) => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${moment.emoji} ${moment.title}`, bold: true, size: 26 }),
        ],
        heading: HeadingLevel.HEADING_3,
        spacing: { before: momentIndex > 0 ? 400 : 250, after: 200 },
      }),
      
      // NOTICE
      new Paragraph({
        text: '┌─────────────────────────────────────┐',
        spacing: { before: 150, after: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'NOTICE', bold: true, allCaps: true, size: 24 }),
        ],
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: moment.notice,
        spacing: { after: 75 },
      }),
      new Paragraph({
        text: '└─────────────────────────────────────┘',
        spacing: { after: 175 },
      }),
      
      // EXPLORE
      new Paragraph({
        text: '┌─────────────────────────────────────┐',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'EXPLORE', bold: true, allCaps: true, size: 24 }),
        ],
        spacing: { after: 100 },
      })
    );

    moment.explore.forEach(question => {
      sections.push(
        new Paragraph({
          text: `• ${question}`,
          spacing: { after: 75 },
        })
      );
    });

    sections.push(
      new Paragraph({
        text: '└─────────────────────────────────────┘',
        spacing: { after: 175 },
      }),
      
      // AMPLIFY
      new Paragraph({
        text: '┌─────────────────────────────────────┐',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'AMPLIFY', bold: true, allCaps: true, size: 24 }),
        ],
        spacing: { after: 100 },
      })
    );

    // Split amplify content by paragraphs
    const amplifyParagraphs = moment.amplify.split(/\n\n+/);
    amplifyParagraphs.forEach(para => {
      if (para.trim()) {
        sections.push(
          new Paragraph({
            text: para.trim(),
            spacing: { after: 125 },
          })
        );
      }
    });

    sections.push(
      new Paragraph({
        text: '└─────────────────────────────────────┘',
        spacing: { after: 300 },
      })
    );
  });

  // ============================================
  // CRITICAL THINKING EXERCISE (Gray Box)
  // ============================================
  sections.push(
    new Paragraph({ text: '', spacing: { before: 400 } }),
    new Paragraph({
      text: '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
      spacing: { before: 100, after: 50 },
    }),
    new Paragraph({
      text: 'Critical Thinking Exercise',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: chapterData.criticalThinkingExercise.title, bold: true, size: 24 }),
      ],
      spacing: { after: 150 },
    }),
    new Paragraph({
      text: chapterData.criticalThinkingExercise.prompt,
      spacing: { after: 200 },
    })
  );

  if (chapterData.criticalThinkingExercise.guidingQuestions) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: 'Guiding Questions:', bold: true }),
        ],
        spacing: { before: 150, after: 100 },
      })
    );

    chapterData.criticalThinkingExercise.guidingQuestions.forEach(q => {
      sections.push(
        new Paragraph({
          text: `• ${q}`,
          spacing: { after: 75 },
        })
      );
    });
  }

  sections.push(
    new Paragraph({
      text: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛',
      spacing: { after: 400 },
    })
  );

  // ============================================
  // NEXT TIME TEASER
  // ============================================
  if (chapterData.nextTimeTeaser) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ 
            text: `${chapterData.nextTimeTeaser.emoji} ${chapterData.nextTimeTeaser.title}`, 
            bold: true, 
            size: 26 
          }),
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 500, after: 250 },
      }),
      new Paragraph({
        text: chapterData.nextTimeTeaser.preview,
        spacing: { after: 175 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: chapterData.nextTimeTeaser.hookQuestion, italics: true, size: 24 }),
        ],
        spacing: { after: 300 },
      })
    );
  }

  // ============================================
  // END MARKER
  // ============================================
  addSeparator();
  sections.push(
    new Paragraph({
      children: [
        new TextRun({ 
          text: 'END OF CHAPTER 1 AMPLIFIED CONTENT', 
          bold: true,
          allCaps: true,
          size: 24
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
    })
  );
  addSeparator();

  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 1440,    // 1 inch = 1440 twips
            right: 1440,
            bottom: 1440,
            left: 1440,
          },
        },
      },
      children: sections,
    }],
  });

  return doc;
}

async function exportFullChapter() {
  console.log('🚀 Exporting FULL Chapter 1 with complete data...\n');
  
  const doc = createFullChapterDocument(chapter1);
  const buffer = await Packer.toBuffer(doc);
  
  const outputDir = path.join(__dirname, '../exports');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const outputPath = path.join(outputDir, 'wuthering-heights_chapter_01_FULL.docx');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ FULL Chapter exported successfully!');
  console.log(`📄 File: ${outputPath}`);
  console.log(`📊 Size: ${(buffer.length / 1024).toFixed(2)} KB`);
  console.log(`\n📋 Complete content includes:`);
  console.log(`   ✓ Series Opening (${chapter1.seriesOpening.features.length} features)`);
  console.log(`   ✓ Full Summary (${chapter1.summary.full.length} paragraphs)`);
  console.log(`   ✓ At a Glance (7 fields)`);
  console.log(`   ✓ Terms to Know (${chapter1.termsToKnow.length} terms with full definitions)`);
  console.log(`   ✓ Character Development (${chapter1.characters.length} characters)`);
  console.log(`   ✓ Key Quotes (${chapter1.quotes.length} with analysis)`);
  console.log(`   ✓ IA Analysis (${chapter1.iaAnalysis.themes.length} themes, ${chapter1.iaAnalysis.literaryTechniques.length} techniques)`);
  console.log(`   ✓ Reading Moments (${chapter1.readingMoments.length} complete moments with Notice → Explore → Amplify)`);
  console.log(`   ✓ Critical Thinking Exercise (with ${chapter1.criticalThinkingExercise.guidingQuestions.length} guiding questions)`);
  console.log(`   ✓ Next Time Teaser\n`);
  console.log('🎨 This is the REAL deal - ready for professional typesetting!');
  console.log('📖 Estimated printed pages: 15-20 pages for this chapter alone!');
}

exportFullChapter().catch(console.error);





