/**
 * CHAPTER 1 TEMPLATE - For Opening Chapters of Books
 * 
 * This template is for the FIRST chapter of any book in Amplified Classics.
 * Opening chapters need comprehensive context-setting, world-building,
 * and extensive pedagogical support.
 * 
 * Use this template for: Chapter 1 of any book
 * For subsequent chapters, use: ChapterNextTemplate.ts
 */

import { ChapterData } from '@/app/lib/types/book.types'

export const chapter1: ChapterData = {
  // ==========================================
  // BASIC INFO
  // ==========================================
  number: 1,
  title: '', // Optional subtitle if chapter has one
  
  readingTime: 12, // Minutes
  pages: 6, // Approximate page count
  
  // ==========================================
  // CHAPTER SUMMARY
  // ==========================================
  summary: {
    brief: 'One powerful sentence that captures the chapter essence and hooks readers',
    
    full: [
      'Paragraph 1: Opening situation - Where are we? Who are we meeting? What\'s the initial context?',
      'Paragraph 2: Key events that unfold in this chapter',
      'Paragraph 3: Important character introductions and dynamics',
      'Paragraph 4: Why this chapter matters - what it establishes for the novel as a whole'
    ]
  },
  
  // ==========================================
  // CHARACTER DEVELOPMENT
  // ==========================================
  // Include ALL major characters introduced in Chapter 1
  characters: [
    {
      name: 'Character Name',
      development: 'How this character is introduced, what we learn about them, their role in this opening. Focus on first impressions and what the author wants us to notice.',
      keyTrait: {
        emoji: '🎭',
        text: '2-3 Word Trait'
      }
    }
    // Add 2-4 characters for opening chapter
  ],
  
  // ==========================================
  // KEY QUOTES (with deep analysis)
  // ==========================================
  // 3-4 crucial quotes that establish tone, themes, or character
  quotes: [
    {
      text: 'The exact quote from the text - choose quotes that are pedagogically rich',
      analysis: 'Why this quote matters for understanding the novel. Include: literary technique, thematic significance, Victorian context, or foreshadowing. Make it teachable.'
    }
  ],
  
  // ==========================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // ==========================================
  iaAnalysis: {
    // 2-3 major themes introduced in opening
    themes: [
      {
        name: 'Theme Name',
        explanation: 'How this theme is established in the opening chapter. Why it matters for the whole novel. Connect to specific moments in this chapter.'
      }
    ],
    
    // 3-4 key literary techniques the author uses
    literaryTechniques: [
      {
        name: 'Technique Name (e.g., Frame Narrative, Gothic Atmosphere, In Medias Res)',
        explanation: 'What the technique is, why the author chose it, how it functions in this opening',
        example: 'Specific example from this chapter showing the technique in action'
      }
    ]
  },
  
  // ==========================================
  // MODERN ADAPTATION
  // ==========================================
  modernAdaptation: {
    setting: 'How would this opening chapter play out in a modern setting? Translate the situation to today while preserving the core dynamics and themes.',
    
    parallels: [
      '📱 Modern parallel 1 with emoji',
      '💻 Modern parallel 2 with emoji',
      '🏠 Modern parallel 3 with emoji',
      '💔 Modern parallel 4 with emoji'
    ],
    
    discussionPrompt: 'Thought-provoking question that connects the Victorian opening to contemporary relevance. What makes this still matter today?'
  },
  
  // ==========================================
  // THEMATIC THREADS
  // ==========================================
  // 3-4 threads that will run through the entire novel
  thematicThreads: [
    {
      emoji: '🌪️',
      name: 'Thread Name',
      explanation: 'How this thematic thread is introduced in Chapter 1. What to watch for as it develops through the novel.'
    }
  ],
  
  // ==========================================
  // DISCUSSION QUESTIONS
  // ==========================================
  // 6 questions covering different aspects of the opening
  discussionQuestions: [
    {
      title: 'First Impressions',
      question: 'What is your first impression of [character/setting/situation]? What details shape your view?'
    },
    {
      title: 'Narrative Structure',
      question: 'Why might the author choose to open the novel in this way? What does this beginning accomplish?'
    },
    {
      title: 'Setting & Atmosphere',
      question: 'How does the author establish mood and tone in this opening? What atmosphere is created?'
    },
    {
      title: 'Literary Conventions',
      question: 'What genre conventions (Gothic, Realism, etc.) do you notice? How does the author use or subvert them?'
    },
    {
      title: 'Character Introduction',
      question: 'How are we introduced to the main character(s)? What do we learn and what is withheld?'
    },
    {
      title: 'Historical Context',
      question: 'What Victorian social dynamics are established in this opening? How do class, gender, or other factors shape the situation?'
    }
  ],
  
  // ==========================================
  // AMPLIFIED DISCUSSION (Deep Dives)
  // ==========================================
  // 5-6 major interpretive essays on key aspects of the opening
  amplifiedDiscussion: [
    {
      id: 'narrative-perspective',
      title: 'The Narrative Perspective',
      question: 'Why does the author choose this particular narrative voice/perspective for the opening?',
      aiResponse: `
**Understanding the Narrative Choice**

Opening paragraph explaining the significance of the narrative perspective.

**What This Perspective Provides:**

**Distance and Mediation**
- Point about narrative distance
- Point about reader access
- Point about reliability

**Narrative Authority**
- Who tells the story
- Why they're positioned to tell it
- What they might not see or understand

**Victorian Context:**

How narrative perspective worked in Victorian literature. Genre conventions. What was typical vs. what this author is doing differently.

**Structural Function:**

How this perspective enables certain plot developments or thematic explorations that wouldn't work otherwise.

**Modern Comparison:**

Connect to contemporary narratives students might know. Why do we still use these techniques?

**For Discussion:**

2-3 questions students can explore about narrative perspective.

**Teaching Moment:**

Specific pedagogical activity or approach for teaching narrative perspective through this opening.
      `
    }
    // Add 4-5 more amplified discussions covering:
    // - Opening technique/structure
    // - Key thematic introduction
    // - Character establishment
    // - Historical/cultural context
    // - Genre conventions
  ],
  
  // ==========================================
  // EDUCATOR RESOURCES
  // ==========================================
  educatorResources: {
    writingPrompt: {
      title: 'Perspective Shift Writing Exercise',
      description: 'Students rewrite the opening from a different character\'s perspective. If told by Character A, rewrite from Character B\'s viewpoint. If third-person, try first-person. How does changing perspective change what we understand and feel?',
      purpose: 'Helps students understand how narrative perspective shapes meaning, creates sympathy/distance, and controls information. Develops awareness of authorial choices and their effects.'
    },
    
    activity: {
      title: 'Mapping the Opening World',
      description: 'Students create visual map of the novel\'s world as established in Chapter 1: physical geography, social structures, character relationships, power dynamics. Use different visual elements for different types of information.',
      materials: 'Large paper, colored markers, reference materials for historical context'
    },
    
    crossCurricular: {
      title: 'Historical Context of the Opening',
      description: 'Connect to history by examining the specific time period, location, and social structures established in Chapter 1. Research Victorian (or relevant era) culture, class systems, gender roles, economic realities. How does historical context illuminate what\'s happening?',
      subjects: ['History', 'Sociology', 'Economics', 'Gender Studies']
    }
  }
}

