/**
 * [BOOK TITLE] - CHAPTER [NUMBER]
 * 
 * [Brief description of what happens in this chapter]
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

// IMPORTANT: Change 'chapterN' to actual chapter number (chapter2, chapter3, etc.)
export const chapterN: ChapterData = {
  number: 0, // Change to chapter number (2, 3, 4, etc.)
  title: '', // Chapter title if it has one, otherwise leave empty
  
  readingTime: 0, // Estimated reading time in minutes
  pages: 0, // Approximate page count
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: '[One-sentence summary of what happens in this chapter.]',
    
    full: [
      '[First paragraph: Opening situation, what happens, where we are.]',
      
      '[Second paragraph: Key events and developments in this chapter.]',
      
      '[Third paragraph: How this chapter develops themes, conflicts, or questions.]',
      
      '[Optional fourth paragraph: Connection to previous chapters or what this sets up for future chapters.]'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW (Optional but recommended)
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // Mix of 5-7 terms: literary techniques, vocabulary, historical/cultural concepts
  // ===================================================================
  termsToKnow: [
    {
      term: '[Literary Device or Vocabulary Word]',
      definition: '[Clear, accessible definition]',
      context: '[How this term/concept appears specifically in this chapter]',
      whyItMatters: '[Why students should pay attention to this - how it affects meaning/understanding]'
    },
    {
      term: '[Another Term]',
      definition: '[Definition]',
      context: '[Context in chapter]',
      whyItMatters: '[Significance]'
    },
    {
      term: '[Another Term]',
      definition: '[Definition]',
      context: '[Context in chapter]',
      whyItMatters: '[Significance]'
    },
    {
      term: '[Another Term]',
      definition: '[Definition]',
      context: '[Context in chapter]',
      whyItMatters: '[Significance]'
    },
    {
      term: '[Another Term]',
      definition: '[Definition]',
      context: '[Context in chapter]',
      whyItMatters: '[Significance]'
    }
  ],
  
  // ===================================================================
  // CHARACTERS (Optional but recommended)
  // Character development for this chapter
  // Focus on what we learn about them in THIS chapter specifically
  // ===================================================================
  characters: [
    {
      name: '[Character Name]',
      development: '[Detailed paragraph about their role and development in this chapter. What do we learn? What do they do? What do they reveal? How do they change?]',
      keyTrait: {
        emoji: '🎭', // Choose an emoji that represents their key trait
        text: '[One or Two Word Trait]'
      }
    },
    {
      name: '[Another Character]',
      development: '[Their development in this chapter...]',
      keyTrait: {
        emoji: '⚡',
        text: '[Key Trait]'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES (Optional but recommended)
  // 3-5 significant quotations with analysis
  // Choose quotes that reveal character, theme, technique, or turning points
  // ===================================================================
  quotes: [
    {
      text: '[The actual quotation from the text]',
      analysis: '[Why this quote matters - what it reveals about character, theme, technique, or plot. What should readers notice?]'
    },
    {
      text: '[Another quote]',
      analysis: '[Analysis...]'
    },
    {
      text: '[Another quote]',
      analysis: '[Analysis...]'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis) (Optional)
  // Deep dive into themes and literary techniques
  // 2-3 themes, 2-3 techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: '[Theme Name]',
        explanation: '[How this theme appears and develops in this chapter. What should students notice? How does it function? Why does it matter?]'
      },
      {
        name: '[Another Theme]',
        explanation: '[Explanation...]'
      }
    ],
    
    literaryTechniques: [
      {
        name: '[Technique Name]',
        explanation: '[How this technique works in the text and why the author uses it. What effect does it create?]',
        example: '[Specific example from this chapter demonstrating the technique in action]'
      },
      {
        name: '[Another Technique]',
        explanation: '[Explanation...]',
        example: '[Example from chapter...]'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION (Optional but recommended)
  // Connect the classic text to contemporary life
  // Make it specific, relatable, and authentic - not forced
  // ===================================================================
  modernAdaptation: {
    setting: '[Imagine a specific modern scenario that genuinely parallels the situation in this chapter. Be concrete and detailed - not generic.]',
    
    parallels: [
      '🔹 **[Parallel Topic]**: [Specific explanation of how this aspect of the chapter connects to modern life, technology, social issues, or psychology]',
      '🔹 **[Another Parallel]**: [Connection to contemporary experience...]',
      '🔹 **[Another Parallel]**: [Connection...]',
      '🔹 **[Another Parallel]**: [Connection...]',
      '🔹 **[Another Parallel]**: [Connection...]'
    ],
    
    discussionPrompt: '[A thought-provoking question that bridges the historical text and contemporary experience. Make readers think about both past and present.]'
  },
  
  // ===================================================================
  // THEMATIC THREADS (Optional but recommended)
  // Ongoing themes that recur throughout the novel
  // 3-5 threads that readers should track across chapters
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🔹',
      name: '[Thread Name]',
      explanation: '[How this thread continues or develops in this chapter. What should readers notice?]'
    },
    {
      emoji: '🔹',
      name: '[Another Thread]',
      explanation: '[Explanation...]'
    },
    {
      emoji: '🔹',
      name: '[Another Thread]',
      explanation: '[Explanation...]'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS (Optional but recommended)
  // 5-7 open-ended questions for classroom or personal reflection
  // No single "right" answer - meant to open interpretation
  // ===================================================================
  discussionQuestions: [
    {
      title: '[Question Category/Topic]',
      question: '[The actual discussion question - open-ended and thought-provoking]'
    },
    {
      title: '[Another Category]',
      question: '[Question...]'
    },
    {
      title: '[Another Category]',
      question: '[Question...]'
    },
    {
      title: '[Another Category]',
      question: '[Question...]'
    },
    {
      title: '[Another Category]',
      question: '[Question...]'
    },
    {
      title: '[Another Category]',
      question: '[Question...]'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION (Optional but recommended)
  // Deep-dive answers to complex questions (Notice → Explore → Amplify)
  // 4-6 discussions on the most important/complex aspects
  // Each should be 300-500 words of rich analysis
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'unique-kebab-case-id',
      title: '[Discussion Topic Title]',
      question: '[The complex question being explored]',
      aiResponse: `
**[Main Heading]**

[Opening paragraph that addresses the question directly and provides context.]

**[Subheading - Key Point 1]**

[Content exploring this aspect...]

- [Bullet point]
- [Bullet point]
- [Bullet point]

**[Subheading - Key Point 2]**

[Content exploring another aspect...]

**[Historical/Literary Context]:**

[Relevant background information that helps readers understand the significance...]

**[Modern Comparison/Connection]:**

[How this relates to contemporary experience or other texts students might know...]

**[Teaching Moment or For Discussion]:**

[Questions or prompts that push thinking further...]
      `
    },
    {
      id: 'another-discussion-id',
      title: '[Another Topic]',
      question: '[Question...]',
      aiResponse: `
[Follow same structure as above - comprehensive markdown-formatted analysis]
      `
    },
    {
      id: 'third-discussion-id',
      title: '[Another Topic]',
      question: '[Question...]',
      aiResponse: `
[Rich analysis with multiple sections, examples, context, connections...]
      `
    },
    {
      id: 'fourth-discussion-id',
      title: '[Another Topic]',
      question: '[Question...]',
      aiResponse: `
[Comprehensive analysis...]
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES (Optional but recommended)
  // Practical classroom tools - but useful for independent learners too
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: '[Writing Assignment Title]',
      description: '[Detailed description of the writing task. What should students create? What should they focus on?]',
      purpose: '[What learning goal this achieves - what skills or understanding it develops]'
    },
    
    activity: {
      title: '[Activity Name]',
      description: '[How to run this activity. Step-by-step if needed. What do students do?]',
      materials: '[What physical or digital materials are needed]'
    },
    
    crossCurricular: {
      title: '[Cross-Curricular Connection Title]',
      description: '[How to connect this literature to other subjects. What interdisciplinary connections exist?]',
      subjects: ['[Subject 1]', '[Subject 2]', '[Subject 3]']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE (Optional but recommended)
  // ONE focused, high-level analytical task
  // Should require synthesis, not just comprehension
  // ===================================================================
  criticalThinkingExercise: {
    title: '[Exercise Name/Title]',
    prompt: '[The main challenge or analytical task. What complex problem or question are students tackling? This should require deep thinking about technique, structure, theme, or context.]',
    
    guidingQuestions: [
      '[Question 1 to help structure their thinking]',
      '[Question 2 that pushes deeper]',
      '[Question 3 that requires synthesis]',
      '[Question 4 that connects to broader issues]'
    ],
    
    thinkingFramework: {
      analyze: '[What students should break down and examine - specific elements to identify and investigate]',
      evaluate: '[What students should assess and judge - criteria for evaluation and weighing evidence]',
      synthesize: '[What students should combine, create, or conclude - bringing together insights into new understanding]'
    },
    
    expectedDepth: '[Description of the level of thinking required. What does a strong response look like? What should students demonstrate? Be specific about expectations.]',
    
    classroomApplication: '[How teachers can use this exercise. Individual? Group? Essay? Presentation? Discussion? How much time? What variations are possible?]'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS - All Chapters (CLOSING SECTION)
  // Rotating one-liner about literature's importance in the age of STEM
  // Placed at the END as a powerful closing reminder after completing the chapter
  // Each chapter displays a different message (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(0), // Change to chapter number
  
  // ===================================================================
  // NEXT TIME TEASER (Optional but recommended - except for final chapter)
  // Preview of next chapter to build anticipation and narrative momentum
  // ===================================================================
  nextTimeTeaser: {
    emoji: '📖',
    title: 'Next Time: [Chapter Title or Evocative Teaser]',
    preview: '[Exciting preview of what happens next. Build intrigue without spoiling. What changes? What intensifies? What new conflicts or revelations emerge?]',
    hookQuestion: '[A compelling question that makes readers want to continue. What mystery deepens? What will characters face? What should readers watch for?]'
  }
}

