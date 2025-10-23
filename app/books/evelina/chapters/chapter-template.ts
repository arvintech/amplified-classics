/**
 * CHAPTER DATA TEMPLATE
 * 
 * Copy this file for each chapter: chapter-1.ts, chapter-2.ts, etc.
 * Fill in all sections following the guidelines in CHAPTER_TEMPLATE_STRUCTURE.md
 * 
 * Quick Tips:
 * - Summary: 300-500 words (3-4 paragraphs)
 * - Characters: 2-4 per chapter, 100-150 words each
 * - Quotes: 3-5 with brief analysis
 * - Themes: 2-3, detailed explanations
 * - Literary Techniques: 3-4 with examples
 * - Discussion Questions: Exactly 6
 * - Amplified Questions: Exactly 6, with 1,500-2,000 word responses
 */

import { ChapterData } from '@/app/lib/types/book.types'

export const chapter1: ChapterData = {
  // Basic Info
  number: 1, // Change this for each chapter
  title: '', // Optional: Only if chapter has a specific title
  
  // Reading Metadata (estimate)
  readingTime: 15, // in minutes
  pages: 8, // approximate page count
  
  // Summary
  summary: {
    // One sentence summary for chapter list
    brief: 'Brief one-sentence summary of what happens in this chapter.',
    
    // Comprehensive summary (3-4 paragraphs)
    full: [
      'First paragraph: Opening scene and setting. What situation are we in at the start of this chapter? Who is present? What is the immediate context?',
      
      'Second paragraph: Main action and events. What happens in this chapter? What are the key events and plot developments?',
      
      'Third paragraph: Character dynamics and interactions. How do characters relate to each other? What conflicts or connections emerge?',
      
      'Fourth paragraph: Consequences and chapter ending. What does this chapter set up for the future? What questions does it leave us with?' // Optional 4th paragraph
    ]
  },
  
  // Characters (2-4 key characters in this chapter)
  characters: [
    {
      name: 'Character Name',
      development: 'Paragraph (100-150 words) describing this character\'s role, actions, and development in THIS chapter specifically. What do they do? What do we learn about them? How do they change or reveal themselves?',
      keyTrait: {
        emoji: '🔥', // Choose relevant emoji
        text: 'Key Trait or Role' // 2-4 words
      }
    },
    {
      name: 'Another Character',
      development: 'Another paragraph about a different character\'s role in this chapter.',
      keyTrait: {
        emoji: '💭',
        text: 'Their Key Trait'
      }
    },
    // Add 2-4 total characters
  ],
  
  // Key Quotes (3-5 significant quotes from this chapter)
  quotes: [
    {
      text: 'The actual quote from the book...',
      analysis: 'Why this quote is significant. What does it reveal about theme, character, technique, or meaning? (1-2 sentences)'
    },
    {
      text: 'Another important quote...',
      analysis: 'Analysis of this quote\'s importance.'
    },
    {
      text: 'A third quote...',
      analysis: 'Why this matters.'
    },
    // Add 3-5 total quotes
  ],
  
  // Intelligence Amplified Analysis
  iaAnalysis: {
    // Themes (2-3 major themes in this chapter)
    themes: [
      {
        name: 'Theme Name',
        explanation: 'Detailed explanation (75-100 words) of how this theme appears in this chapter. What does the author explore? What questions are raised? How does this connect to the larger work?'
      },
      {
        name: 'Another Theme',
        explanation: 'Another detailed theme explanation with specific references to this chapter.'
      },
      // Add 2-3 total themes
    ],
    
    // Literary Techniques (3-4 techniques used in this chapter)
    literaryTechniques: [
      {
        name: 'Technique Name',
        explanation: 'Explanation (50-75 words) of how the author uses this technique in this chapter and why it matters.',
        example: 'Optional: Specific textual example showing the technique in action'
      },
      {
        name: 'Another Technique',
        explanation: 'How this technique is used and its effect.',
        example: 'Example from the text'
      },
      {
        name: 'Third Technique',
        explanation: 'Explanation of this technique.'
      },
      // Add 3-4 total techniques
    ]
  },
  
  // Modern Adaptation
  modernAdaptation: {
    setting: 'Describe what this chapter would look like in a modern setting. What contemporary situation parallels the historical context? (2-3 sentences)',
    
    parallels: [
      '📱 Modern parallel with emoji: How this relates to social media, technology, etc.',
      '💼 Another parallel: Workplace dynamics, career pressures, etc.',
      '🏫 Education parallel: School situations, learning contexts, etc.',
      '💭 Psychological parallel: Modern understanding of these dynamics'
    ],
    
    discussionPrompt: 'A question that connects the historical chapter to modern student experience. "How do we see similar pressures/situations today?" "What has changed and what remains the same?"'
  },
  
  // Thematic Threads (Exactly 3 - track across novel)
  thematicThreads: [
    {
      emoji: '🔥',
      name: 'Thread Name',
      explanation: 'How this thread appears or develops in THIS chapter. (2-3 sentences)'
    },
    {
      emoji: '💭',
      name: 'Another Thread',
      explanation: 'This thread\'s appearance in this chapter.'
    },
    {
      emoji: '⚖️',
      name: 'Third Thread',
      explanation: 'How we see this theme emerging here.'
    }
  ],
  
  // Discussion Questions (Exactly 6)
  discussionQuestions: [
    {
      title: 'Textual Analysis',
      question: 'Open-ended question about close reading of the text?'
    },
    {
      title: 'Character Psychology',
      question: 'Question about character motivations or development?'
    },
    {
      title: 'Theme Exploration',
      question: 'Question exploring a major theme in depth?'
    },
    {
      title: 'Historical Context',
      question: 'How does historical context help us understand this chapter?'
    },
    {
      title: 'Literary Technique',
      question: 'Question about how the author achieves certain effects?'
    },
    {
      title: 'Personal Connection',
      question: 'How does this chapter connect to modern experience or student lives?'
    }
  ],
  
  // Amplified Discussion (Exactly 6 interactive questions)
  amplifiedDiscussion: [
    {
      id: 'question-slug-1', // kebab-case unique ID
      title: 'Question Title',
      question: 'The full question text that students will explore?',
      aiResponse: `
**Main Analysis Section**

Start with the core insight students should discover. Use **bold** for emphasis.

Break into subsections as needed. Provide 1,500-2,000 words of deep analysis that includes:
- Textual evidence
- Literary/historical context
- Multiple interpretive perspectives
- Connections to larger themes

**Scholarly Context**

What do critics and scholars say about this? Introduce academic perspectives in accessible language.

**Historical/Cultural Context**

What did contemporary readers think? How was this received? What social issues does it engage?

**Modern Connections**

How does this relate to modern experiences? What parallels can students recognize?

**Discussion Prompts for Students**

Questions that push students deeper:
- Follow-up question 1?
- Follow-up question 2?
- Follow-up question 3?

**Teaching Tip**

Practical advice for educators: How to facilitate discussion of this topic? What misconceptions to address? What to emphasize?
      `
    },
    {
      id: 'question-slug-2',
      title: 'Second Question Title',
      question: 'Another deep question about the chapter?',
      aiResponse: `
**Your detailed 1,500-2,000 word response here...**

Use the same structure as above: main analysis, context, connections, discussion prompts, teaching tip.
      `
    },
    {
      id: 'question-slug-3',
      title: 'Third Question',
      question: 'Question text?',
      aiResponse: `**Response here...**`
    },
    {
      id: 'question-slug-4',
      title: 'Fourth Question',
      question: 'Question text?',
      aiResponse: `**Response here...**`
    },
    {
      id: 'question-slug-5',
      title: 'Fifth Question',
      question: 'Question text?',
      aiResponse: `**Response here...**`
    },
    {
      id: 'question-slug-6',
      title: 'Sixth Question',
      question: 'Question text?',
      aiResponse: `**Response here...**`
    }
  ],
  
  // Educator Resources
  educatorResources: {
    // Writing Prompt
    writingPrompt: {
      title: 'Writing Prompt Title',
      description: 'What students should write. Be specific about the task: "Write a paragraph analyzing..." "Compose a letter from X to Y..." "Compare and contrast..."',
      purpose: 'Why this helps learning. What skills does it develop? What understanding does it deepen?'
    },
    
    // Classroom Activity
    activity: {
      title: 'Activity Title',
      description: 'What to do in class. Step-by-step activity description: "Students will..." "In groups, analyze..." "Act out the scene where..."',
      materials: 'What you need: "Printed character cards, poster paper, markers" or "No materials needed" or "Copies of specific passages"'
    },
    
    // Cross-Curricular Connection
    crossCurricular: {
      title: 'Connection Title',
      description: 'How this chapter connects to other subjects. What would a history/art/science teacher appreciate about this? How can it be taught alongside other classes?',
      subjects: ['History', 'Art', 'Philosophy', 'Psychology'] // List relevant subjects
    }
  }
}

