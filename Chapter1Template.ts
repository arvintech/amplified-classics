/**
 * [BOOK TITLE] - CHAPTER 1
 * 
 * [Brief description of what happens in this chapter]
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter1: ChapterData = {
  number: 1,
  title: '', // Often Chapter 1 has no specific title beyond "Chapter 1"
  
  readingTime: 0, // Estimated reading time in minutes
  pages: 0, // Approximate page count
  
  // ===================================================================
  // SERIES OPENING - Chapter 1 Only
  // This introduces the Amplified Classics method to first-time readers
  // ===================================================================
  seriesOpening: {
    title: 'Welcome to Your First Amplified Chapter',
    introduction: 'This is Chapter 1, so we\'ll take a moment to introduce you to how Amplified Classics works. You\'ll see several special sections designed to deepen your reading experience and understanding. Think of this as your guided tour through the anatomy of every chapter.',
    features: [
      {
        icon: '📖',
        name: 'Chapter Summary & Analysis',
        description: 'Get oriented with what happens, who\'s involved, and what quotes matter. These sections help you track the story.'
      },
      {
        icon: '🔍',
        name: 'Notice → Explore → Amplify',
        description: 'This is our core teaching method. We point out something interesting, ask you to think about it, then reveal deeper insights. It\'s progressive discovery, not just answers.'
      },
      {
        icon: '💡',
        name: 'Discussion Questions',
        description: 'Questions to spark conversation in class or guide your own thinking. These don\'t have single "right" answers—they\'re meant to open interpretation.'
      },
      {
        icon: '🧠',
        name: 'Critical Thinking Exercises',
        description: 'One focused exercise per chapter that pushes you beyond comprehension into analysis, evaluation, and synthesis. This is where deeper learning happens.'
      },
      {
        icon: '👩‍🏫',
        name: 'For Teachers',
        description: 'Resources for educators including writing prompts, activities, and teaching notes. Students can use these for independent study too.'
      }
    ],
    callToAction: 'Don\'t worry about understanding everything at once. These sections are here when you need them. Read the novel first, then come back and explore. That\'s how amplification works—you can\'t amplify what you haven\'t experienced yet.'
  },
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: '[One-sentence summary of what happens in this chapter.]',
    
    full: [
      '[First paragraph: Opening situation, who we meet, where we are.]',
      
      '[Second paragraph: Key events and developments in this chapter.]',
      
      '[Third paragraph: How this chapter sets up themes, conflicts, or questions.]',
      
      '[Optional fourth paragraph: Connection to larger narrative or what this chapter establishes for the novel.]'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
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
  // CHARACTERS
  // Character introduction/development for this chapter
  // Focus on what we learn about them in THIS chapter specifically
  // ===================================================================
  characters: [
    {
      name: '[Character Name]',
      development: '[Detailed paragraph about their role and development in this chapter. What do we learn? What do they do? What do they reveal about themselves or others? How are they introduced or changed?]',
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
  // KEY QUOTES
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
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // 2-3 themes, 2-3 techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: '[Theme Name]',
        explanation: '[How this theme appears and develops in this chapter. What should students notice? How does it function in the narrative? Why does it matter?]'
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
  // MODERN ADAPTATION
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
  // THEMATIC THREADS
  // Ongoing themes that will recur throughout the novel
  // 3-5 threads that readers should track across chapters
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🔹',
      name: '[Thread Name]',
      explanation: '[What this ongoing thread is about and what to watch for throughout the novel. How does it start in this chapter?]'
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
  // DISCUSSION QUESTIONS
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
  // SPEED LEARNING NOTICE - Chapter 1 Only
  // Meta-instruction on HOW to use the amplified sections
  // ===================================================================
  speedLearningNotice: {
    title: '💡 How to Use Amplified Discussion',
    content: 'These expandable sections contain in-depth analysis to help you understand complex aspects of the novel. Here\'s how to use them effectively: (1) Try answering the question yourself first—write down your thoughts. (2) Then expand the section and compare your thinking to the analysis provided. (3) Notice what you got right AND what you missed. This process builds your literary analysis skills. You\'re not just reading answers—you\'re training your mind to think like a literary scholar.'
  },
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
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
  // EDUCATOR RESOURCES
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
      description: '[How to connect this literature to other subjects. What interdisciplinary connections exist? How can teachers collaborate across departments?]',
      subjects: ['[Subject 1]', '[Subject 2]', '[Subject 3]']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
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
    
    classroomApplication: '[How teachers can use this exercise. Individual? Group? Essay? Presentation? Discussion? How much time should it take? What variations are possible?]'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS - All Chapters
  // Rotating one-liner about literature's importance in the age of STEM
  // Placed at the end as a powerful closing reminder after completing the chapter
  // Each chapter displays a different message (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(1), // Change number for each chapter
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of Chapter 2 to build anticipation and narrative momentum
  // ===================================================================
  nextTimeTeaser: {
    emoji: '📖',
    title: 'Next Time: [Chapter Title or Evocative Teaser]',
    preview: '[Exciting preview of what happens next. Build intrigue without spoiling. What changes? What intensifies? What new conflicts or revelations emerge?]',
    hookQuestion: '[A compelling question that makes readers want to continue. What mystery deepens? What will characters face? What should readers watch for?]'
  }
}

