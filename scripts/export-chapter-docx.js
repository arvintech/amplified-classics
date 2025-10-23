/**
 * Export Chapter to DOCX for InDesign Import
 */

const { Document, Paragraph, TextRun, HeadingLevel, Packer } = require('docx');
const fs = require('fs');
const path = require('path');

// Sample chapter data structure
const chapter1Data = {
  number: 1,
  title: '',
  
  seriesOpening: {
    title: 'Welcome to Your First Amplified Chapter',
    introduction: 'This is Chapter 1, so we\'ll take a moment to introduce you to how Amplified Classics works.',
    features: [
      { icon: '📖', name: 'Chapter Summary & Analysis', description: 'Get oriented with what happens.' },
      { icon: '🔍', name: 'Notice → Explore → Amplify', description: 'Our core teaching method.' },
    ],
    callToAction: 'Read the novel first, then come back and explore.'
  },
  
  summary: {
    brief: 'Mr. Lockwood visits Wuthering Heights and encounters a hostile household.',
    full: [
      'The novel opens with Mr. Lockwood introducing himself as the new tenant.',
      'He visits Heathcliff at Wuthering Heights on the Yorkshire moors.',
    ]
  },
  
  atAGlance: {
    setting: 'Yorkshire moors, 1801',
    narrator: 'Mr. Lockwood',
    mood: 'Gothic, foreboding',
  },
  
  termsToKnow: [
    {
      term: 'Wuthering',
      definition: 'A Yorkshire dialect word meaning stormy.',
      context: 'The novel\'s title establishes the harsh environment.',
      whyItMatters: 'Grounds the Gothic story in authentic place.'
    },
  ],
  
  readingMomentsIntro: {
    title: '⚡ Speed Learning: How Notice → Explore → Amplify Works',
    content: 'This method trains you to notice what matters and think critically.'
  },
  
  readingMoments: [
    {
      emoji: '🎭',
      title: 'Lockwood\'s Self-Deception',
      notice: 'Lockwood misreads Heathcliff\'s hostility.',
      explore: ['What contradicts his view?', 'Why does he want them similar?'],
      amplify: 'Lockwood projects romantic notions. Brontë warns: don\'t trust him.'
    },
  ],
  
  criticalThinkingExercise: {
    title: 'The Architecture of Narrative Distance',
    prompt: 'Why build such complex narrative layers?',
    guidingQuestions: ['What does each layer add?', 'Why start at the end?']
  },
  
  nextTimeTeaser: {
    emoji: '🌙',
    title: 'Next Time: The Nightmare Visit',
    preview: 'Lockwood returns during a snowstorm...',
    hookQuestion: 'What happened to create such trauma?'
  }
};

function createChapterDocument(chapterData) {
  const sections = [];

  // CHAPTER HEADER
  sections.push(
    new Paragraph({
      text: `CHAPTER ${chapterData.number}`,
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 400 },
    })
  );

  // SERIES OPENING (Green Box)
  if (chapterData.seriesOpening) {
    sections.push(
      new Paragraph({
        text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        spacing: { before: 200, after: 100 },
      }),
      new Paragraph({
        text: '📗 GREEN BOX: SERIES OPENING',
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: chapterData.seriesOpening.title,
        bold: true,
        spacing: { after: 100 },
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
            new TextRun({ text: `${feature.icon} ${feature.name}`, bold: true }),
          ],
          spacing: { before: 100, after: 50 },
        }),
        new Paragraph({
          text: feature.description,
          spacing: { after: 100 },
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
        text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        spacing: { after: 400 },
      })
    );
  }

  // CHAPTER SUMMARY
  sections.push(
    new Paragraph({
      text: 'Chapter Summary',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: chapterData.summary.brief, bold: true }),
      ],
      spacing: { after: 200 },
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

  // AT A GLANCE (Gray Box)
  sections.push(
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { before: 400, after: 100 },
    }),
    new Paragraph({
      text: 'At a Glance',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    })
  );

  Object.entries(chapterData.atAGlance).forEach(([key, value]) => {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${label}: `, bold: true }),
          new TextRun({ text: value }),
        ],
        spacing: { after: 100 },
      })
    );
  });

  sections.push(
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { after: 400 },
    })
  );

  // TERMS TO KNOW
  sections.push(
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { before: 400, after: 100 },
    }),
    new Paragraph({
      text: 'Terms to Know',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    })
  );

  chapterData.termsToKnow.forEach(term => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: term.term, bold: true }),
        ],
        spacing: { before: 150, after: 50 },
      }),
      new Paragraph({
        text: term.definition,
        spacing: { after: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Context: ', italics: true }),
          new TextRun({ text: term.context }),
        ],
        spacing: { after: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Why it matters: ', italics: true }),
          new TextRun({ text: term.whyItMatters }),
        ],
        spacing: { after: 100 },
      })
    );
  });

  sections.push(
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { after: 400 },
    })
  );

  // SPEED LEARNING NOTICE (Green Box)
  if (chapterData.readingMomentsIntro) {
    sections.push(
      new Paragraph({
        text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        spacing: { before: 400, after: 100 },
      }),
      new Paragraph({
        text: '📗 GREEN BOX: SPEED LEARNING',
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: chapterData.readingMomentsIntro.title,
        bold: true,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: chapterData.readingMomentsIntro.content,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        spacing: { after: 400 },
      })
    );
  }

  // READING MOMENTS
  sections.push(
    new Paragraph({
      text: 'Notice → Explore → Amplify',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
    })
  );

  chapterData.readingMoments.forEach(moment => {
    sections.push(
      new Paragraph({
        text: `${moment.emoji} ${moment.title}`,
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 300, after: 150 },
      }),
      
      // NOTICE
      new Paragraph({
        text: '[ NOTICE ]',
        bold: true,
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: moment.notice,
        spacing: { after: 100 },
      }),
      
      // EXPLORE
      new Paragraph({
        text: '[ EXPLORE ]',
        bold: true,
        spacing: { before: 100, after: 50 },
      })
    );

    moment.explore.forEach(q => {
      sections.push(
        new Paragraph({
          text: `• ${q}`,
          spacing: { after: 50 },
        })
      );
    });

    // AMPLIFY
    sections.push(
      new Paragraph({
        text: '[ AMPLIFY ]',
        bold: true,
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: moment.amplify,
        spacing: { after: 200 },
      })
    );
  });

  // CRITICAL THINKING
  sections.push(
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { before: 400, after: 100 },
    }),
    new Paragraph({
      text: 'Critical Thinking Exercise',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: chapterData.criticalThinkingExercise.title, bold: true }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({
      text: chapterData.criticalThinkingExercise.prompt,
      spacing: { after: 150 },
    }),
    new Paragraph({
      text: 'Guiding Questions:',
      bold: true,
      spacing: { before: 100, after: 50 },
    })
  );

  chapterData.criticalThinkingExercise.guidingQuestions.forEach(q => {
    sections.push(
      new Paragraph({
        text: `• ${q}`,
        spacing: { after: 50 },
      })
    );
  });

  sections.push(
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { after: 400 },
    })
  );

  // NEXT TIME TEASER
  if (chapterData.nextTimeTeaser) {
    sections.push(
      new Paragraph({
        text: `${chapterData.nextTimeTeaser.emoji} ${chapterData.nextTimeTeaser.title}`,
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
      }),
      new Paragraph({
        text: chapterData.nextTimeTeaser.preview,
        spacing: { after: 150 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: chapterData.nextTimeTeaser.hookQuestion, italics: true }),
        ],
        spacing: { after: 200 },
      })
    );
  }

  // Final note
  sections.push(
    new Paragraph({
      text: '',
      spacing: { before: 600 },
    }),
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { before: 200, after: 100 },
    }),
    new Paragraph({
      children: [
        new TextRun({ 
          text: 'END OF CHAPTER 1 AMPLIFIED CONTENT', 
          bold: true,
          allCaps: true 
        }),
      ],
      alignment: 'center',
      spacing: { after: 100 },
    }),
    new Paragraph({
      text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      spacing: { after: 200 },
    })
  );

  const doc = new Document({
    sections: [{
      properties: {},
      children: sections,
    }],
  });

  return doc;
}

async function exportChapter() {
  console.log('🚀 Starting chapter export...\n');
  
  const doc = createChapterDocument(chapter1Data);
  const buffer = await Packer.toBuffer(doc);
  
  const outputDir = path.join(__dirname, '../exports');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const outputPath = path.join(outputDir, 'wuthering-heights_chapter_01_sample.docx');
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ Chapter exported successfully!');
  console.log(`📄 File location: ${outputPath}`);
  console.log(`📊 File size: ${(buffer.length / 1024).toFixed(2)} KB`);
  console.log('\n🎨 This file is ready for InDesign import!');
  console.log('\n📋 Structure includes:');
  console.log('   • Series Opening (green box marker)');
  console.log('   • Chapter Summary');
  console.log('   • At a Glance (gray box marker)');
  console.log('   • Terms to Know');
  console.log('   • Speed Learning notice (green box marker)');
  console.log('   • Reading Moments (Notice → Explore → Amplify)');
  console.log('   • Critical Thinking Exercise');
  console.log('   • Next Time Teaser');
  console.log('\n💡 Box markers use ━━━ lines to show InDesign where to apply styles.');
}

exportChapter().catch(console.error);





