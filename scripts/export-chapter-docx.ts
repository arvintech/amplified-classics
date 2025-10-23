/**
 * Export Chapter to DOCX for InDesign Import
 * 
 * This script exports chapter data to a structured Word document
 * that can be easily imported into InDesign with consistent styles.
 */

import { Document, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx'
import * as fs from 'fs'
import * as path from 'path'

// Import chapter data
import { chapter1 } from '../app/books/wuthering-heights/chapters/chapter-1'
import { bookConfig } from '../app/books/wuthering-heights/config'

function createChapterDocument(chapterData: any, bookInfo: any) {
  const sections = []

  // ============================================
  // CHAPTER HEADER
  // ============================================
  sections.push(
    new Paragraph({
      text: `CHAPTER ${chapterData.number}${chapterData.title ? ': ' + chapterData.title : ''}`,
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 400, after: 400 },
    })
  )

  // ============================================
  // SERIES OPENING (Chapter 1 only)
  // ============================================
  if (chapterData.seriesOpening) {
    sections.push(
      new Paragraph({
        text: '━━━ GREEN BOX START ━━━',
        style: 'BoxMarker',
        spacing: { before: 200, after: 100 },
      }),
      new Paragraph({
        text: `📗 ${chapterData.seriesOpening.title}`,
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: chapterData.seriesOpening.introduction,
        spacing: { after: 200 },
      })
    )

    chapterData.seriesOpening.features.forEach((feature: any) => {
      sections.push(
        new Paragraph({
          text: `${feature.icon} ${feature.name}`,
          style: 'FeatureTitle',
          spacing: { before: 100, after: 50 },
        }),
        new Paragraph({
          text: feature.description,
          style: 'FeatureDescription',
          spacing: { after: 100 },
        })
      )
    })

    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: chapterData.seriesOpening.callToAction, italics: true }),
        ],
        spacing: { before: 200, after: 100 },
      }),
      new Paragraph({
        text: '━━━ GREEN BOX END ━━━',
        style: 'BoxMarker',
        spacing: { after: 400 },
      })
    )
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
      text: chapterData.summary.brief,
      style: 'BriefSummary',
      spacing: { after: 200 },
    })
  )

  chapterData.summary.full.forEach((para: string) => {
    sections.push(
      new Paragraph({
        text: para,
        spacing: { after: 150 },
      })
    )
  })

  // ============================================
  // AT A GLANCE
  // ============================================
  sections.push(
    new Paragraph({
      text: '━━━ GRAY BOX START ━━━',
      style: 'BoxMarker',
      spacing: { before: 400, after: 100 },
    }),
    new Paragraph({
      text: 'At a Glance',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    })
  )

  const atAGlance = chapterData.atAGlance
  Object.entries(atAGlance).forEach(([key, value]: [string, any]) => {
    const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())
    sections.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${label}: `, bold: true }),
          new TextRun({ text: Array.isArray(value) ? value.join(', ') : value }),
        ],
        spacing: { after: 100 },
      })
    )
  })

  sections.push(
    new Paragraph({
      text: '━━━ GRAY BOX END ━━━',
      style: 'BoxMarker',
      spacing: { after: 400 },
    })
  )

  // ============================================
  // TERMS TO KNOW
  // ============================================
  sections.push(
    new Paragraph({
      text: '━━━ GRAY BOX START ━━━',
      style: 'BoxMarker',
      spacing: { before: 400, after: 100 },
    }),
    new Paragraph({
      text: 'Terms to Know',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    })
  )

  chapterData.termsToKnow.forEach((term: any) => {
    sections.push(
      new Paragraph({
        text: term.term,
        style: 'TermTitle',
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
    )
  })

  sections.push(
    new Paragraph({
      text: '━━━ GRAY BOX END ━━━',
      style: 'BoxMarker',
      spacing: { after: 400 },
    })
  )

  // ============================================
  // CHARACTER DEVELOPMENT
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Character Development',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
    })
  )

  chapterData.characters.forEach((char: any) => {
    sections.push(
      new Paragraph({
        text: `${char.keyTrait.emoji} ${char.name}`,
        style: 'CharacterName',
        spacing: { before: 150, after: 100 },
      }),
      new Paragraph({
        text: char.development,
        spacing: { after: 200 },
      })
    )
  })

  // ============================================
  // KEY QUOTES
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Key Quotes',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
    })
  )

  chapterData.quotes.forEach((quote: any, index: number) => {
    sections.push(
      new Paragraph({
        text: `"${quote.text}"`,
        style: 'QuoteText',
        spacing: { before: 150, after: 100 },
      }),
      new Paragraph({
        text: quote.analysis,
        spacing: { after: 200 },
      })
    )
  })

  // ============================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Intelligence Amplified Analysis',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
    })
  )

  // Themes
  sections.push(
    new Paragraph({
      text: 'Major Themes',
      heading: HeadingLevel.HEADING_3,
      spacing: { before: 200, after: 100 },
    })
  )

  chapterData.iaAnalysis.themes.forEach((theme: any) => {
    sections.push(
      new Paragraph({
        text: theme.name,
        style: 'ThemeTitle',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: theme.explanation,
        spacing: { after: 150 },
      })
    )
  })

  // Literary Techniques
  sections.push(
    new Paragraph({
      text: 'Literary Techniques',
      heading: HeadingLevel.HEADING_3,
      spacing: { before: 300, after: 100 },
    })
  )

  chapterData.iaAnalysis.literaryTechniques.forEach((tech: any) => {
    sections.push(
      new Paragraph({
        text: tech.name,
        style: 'TechniqueTitle',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: tech.explanation,
        spacing: { after: 50 },
      }),
      new Paragraph({
        children: [
          new TextRun({ text: 'Example: ', italics: true }),
          new TextRun({ text: tech.example }),
        ],
        spacing: { after: 150 },
      })
    )
  })

  // ============================================
  // SPEED LEARNING NOTICE (Chapter 1 only)
  // ============================================
  if (chapterData.readingMomentsIntro) {
    sections.push(
      new Paragraph({
        text: '━━━ GREEN BOX START ━━━',
        style: 'BoxMarker',
        spacing: { before: 400, after: 100 },
      }),
      new Paragraph({
        text: chapterData.readingMomentsIntro.title,
        heading: HeadingLevel.HEADING_2,
        spacing: { after: 200 },
      }),
      new Paragraph({
        text: chapterData.readingMomentsIntro.content,
        spacing: { after: 100 },
      }),
      new Paragraph({
        text: '━━━ GREEN BOX END ━━━',
        style: 'BoxMarker',
        spacing: { after: 400 },
      })
    )
  }

  // ============================================
  // READING MOMENTS (Notice → Explore → Amplify)
  // ============================================
  sections.push(
    new Paragraph({
      text: 'Notice → Explore → Amplify',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 400, after: 200 },
    })
  )

  chapterData.readingMoments.forEach((moment: any) => {
    sections.push(
      new Paragraph({
        text: `${moment.emoji} ${moment.title}`,
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 300, after: 150 },
      }),
      
      // NOTICE
      new Paragraph({
        text: '━━━ NOTICE BOX START ━━━',
        style: 'BoxMarker',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: 'NOTICE',
        style: 'LayerLabel',
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: moment.notice,
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: '━━━ NOTICE BOX END ━━━',
        style: 'BoxMarker',
        spacing: { after: 150 },
      }),
      
      // EXPLORE
      new Paragraph({
        text: '━━━ EXPLORE BOX START ━━━',
        style: 'BoxMarker',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: 'EXPLORE',
        style: 'LayerLabel',
        spacing: { after: 50 },
      })
    )

    moment.explore.forEach((question: string) => {
      sections.push(
        new Paragraph({
          text: `• ${question}`,
          spacing: { after: 50 },
        })
      )
    })

    sections.push(
      new Paragraph({
        text: '━━━ EXPLORE BOX END ━━━',
        style: 'BoxMarker',
        spacing: { after: 150 },
      }),
      
      // AMPLIFY
      new Paragraph({
        text: '━━━ AMPLIFY BOX START ━━━',
        style: 'BoxMarker',
        spacing: { before: 100, after: 50 },
      }),
      new Paragraph({
        text: 'AMPLIFY',
        style: 'LayerLabel',
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: moment.amplify,
        spacing: { after: 50 },
      }),
      new Paragraph({
        text: '━━━ AMPLIFY BOX END ━━━',
        style: 'BoxMarker',
        spacing: { after: 300 },
      })
    )
  })

  // ============================================
  // CRITICAL THINKING EXERCISE
  // ============================================
  sections.push(
    new Paragraph({
      text: '━━━ GRAY BOX START ━━━',
      style: 'BoxMarker',
      spacing: { before: 400, after: 100 },
    }),
    new Paragraph({
      text: 'Critical Thinking Exercise',
      heading: HeadingLevel.HEADING_2,
      spacing: { after: 200 },
    }),
    new Paragraph({
      text: chapterData.criticalThinkingExercise.title,
      style: 'ExerciseTitle',
      spacing: { after: 100 },
    }),
    new Paragraph({
      text: chapterData.criticalThinkingExercise.prompt,
      spacing: { after: 150 },
    })
  )

  if (chapterData.criticalThinkingExercise.guidingQuestions) {
    sections.push(
      new Paragraph({
        text: 'Guiding Questions:',
        style: 'SubLabel',
        spacing: { before: 100, after: 50 },
      })
    )

    chapterData.criticalThinkingExercise.guidingQuestions.forEach((q: string) => {
      sections.push(
        new Paragraph({
          text: `• ${q}`,
          spacing: { after: 50 },
        })
      )
    })
  }

  sections.push(
    new Paragraph({
      text: '━━━ GRAY BOX END ━━━',
      style: 'BoxMarker',
      spacing: { after: 400 },
    })
  )

  // ============================================
  // NEXT TIME TEASER
  // ============================================
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
    )
  }

  // ============================================
  // DOCUMENT METADATA
  // ============================================
  const doc = new Document({
    sections: [{
      properties: {},
      children: sections,
    }],
    styles: {
      paragraphStyles: [
        {
          id: 'BoxMarker',
          name: 'Box Marker',
          run: {
            color: '999999',
            size: 18,
            font: 'Courier New',
          },
        },
        {
          id: 'BriefSummary',
          name: 'Brief Summary',
          run: {
            bold: true,
            size: 24,
          },
        },
        {
          id: 'FeatureTitle',
          name: 'Feature Title',
          run: {
            bold: true,
            size: 22,
          },
        },
        {
          id: 'FeatureDescription',
          name: 'Feature Description',
          run: {
            size: 22,
          },
        },
        {
          id: 'TermTitle',
          name: 'Term Title',
          run: {
            bold: true,
            size: 24,
            color: '1E5631',
          },
        },
        {
          id: 'CharacterName',
          name: 'Character Name',
          run: {
            bold: true,
            size: 24,
          },
        },
        {
          id: 'QuoteText',
          name: 'Quote Text',
          run: {
            italics: true,
            size: 22,
          },
        },
        {
          id: 'ThemeTitle',
          name: 'Theme Title',
          run: {
            bold: true,
            size: 22,
          },
        },
        {
          id: 'TechniqueTitle',
          name: 'Technique Title',
          run: {
            bold: true,
            size: 22,
          },
        },
        {
          id: 'LayerLabel',
          name: 'Layer Label',
          run: {
            bold: true,
            size: 24,
            allCaps: true,
          },
        },
        {
          id: 'ExerciseTitle',
          name: 'Exercise Title',
          run: {
            bold: true,
            size: 22,
          },
        },
        {
          id: 'SubLabel',
          name: 'Sub Label',
          run: {
            bold: true,
            size: 22,
          },
        },
      ],
    },
  })

  return doc
}

// Export the document
async function exportChapter() {
  const { Packer } = await import('docx')
  
  const doc = createChapterDocument(chapter1, bookConfig)
  const buffer = await Packer.toBuffer(doc)
  
  const outputDir = path.join(__dirname, '../exports')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  
  const outputPath = path.join(outputDir, `${bookConfig.slug}_chapter_01_for_indesign.docx`)
  fs.writeFileSync(outputPath, buffer)
  
  console.log(`✅ Chapter exported successfully!`)
  console.log(`📄 File: ${outputPath}`)
  console.log(`📊 Size: ${(buffer.length / 1024).toFixed(2)} KB`)
  console.log(`\n🎨 Ready for InDesign import!`)
}

exportChapter().catch(console.error)

