/**
 * SENSE AND SENSIBILITY - CHAPTER 11
 * 
 * Marianne's relationship with Willoughby develops while Elinor observes
 * Edward's peculiar behavior with growing suspicion.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter11: ChapterData = {
  number: 11,
  title: 'Romance Deepens',
  
  readingTime: 10,
  pages: 4,
  
  summary: {
    brief: 'Marianne\'s passionate romance with Willoughby intensifies while Elinor continues to observe Edward\'s ambiguous behavior with growing concern and suspicion.',
    
    full: [
      'Chapter 11 continues the parallel development of both sisters\' romantic relationships. Marianne\'s romance with Willoughby becomes increasingly passionate and public, with their shared interests in music, poetry, and romantic ideals deepening their connection. Their relationship embodies Marianne\'s sensibility-based approach to love, prioritizing emotional intensity and immediate connection.',
      
      'Meanwhile, Elinor continues her quiet relationship with Edward, maintaining patient hope despite his ambiguous behavior. She observes his interactions with others and notices inconsistencies that raise questions about his character and intentions. Her "sense" leads her to evaluate his behavior carefully, maintaining optimism while acknowledging her uncertainty.',
      
      'The chapter develops the contrast between the sisters\' romantic approaches. Marianne\'s passionate certainty contrasts with Elinor\'s patient uncertainty, reflecting their different temperaments and philosophies. Both sisters pursue love according to their natures, setting up the different tests they will face.',
      
      'The growing intensity of Marianne\'s romance and the continued ambiguity of Edward\'s behavior create suspense about future complications. The chapter maintains the parallel structure while deepening both romantic plots.'
    ]
  },
  
  termsToKnow: [
    {
      term: 'Romantic Intensity',
      definition: 'The passionate depth and emotional engagement in romantic relationships.',
      context: 'Marianne\'s romantic intensity with Willoughby demonstrates her sensibility-based approach to love.',
      whyItMatters: 'Understanding romantic intensity helps readers appreciate different approaches to love and how passion can shape relationships.'
    }
  ],
  
  characters: [
    {
      name: 'Marianne Dashwood',
      development: 'Marianne\'s romantic intensity deepens, showing her commitment to sensibility-based love. Her passionate connection with Willoughby fulfills her romantic ideals but also increases her vulnerability.',
      keyTrait: {
        emoji: '💫',
        text: 'Passionate Romance'
      }
    }
  ],
  
  quotes: [
    {
      text: 'Their taste was strikingly alike. The same books, the same passages were idolized by each.',
      analysis: 'This description shows how Marianne and Willoughby\'s shared romantic sensibility creates intense connection.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'Romantic Intensity',
        explanation: 'The chapter explores how intense romantic connections develop and the role of shared interests and ideals in creating emotional bonds.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Parallel Plot Development',
        explanation: 'Austen develops both romantic plots simultaneously, comparing the sisters\' different approaches.',
        example: 'Marianne\'s passionate romance contrasts with Elinor\'s patient relationship.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'Imagine modern relationships where shared interests and passionate connection develop rapidly.',
    
    parallels: [
      '💑 **Shared Interests**: Common passions = modern couples bonding over hobbies and values',
      '⚡ **Rapid Intensity**: Quick connection = modern belief in instant chemistry'
    ],
    
    discussionPrompt: 'How do shared interests create romantic connection? When does intensity become problematic?'
  },
  
  thematicThreads: [
    {
      emoji: '💘',
      name: 'Passionate Romance',
      explanation: 'Marianne\'s intense romance will be tested. Watch how passion affects judgment and relationship dynamics.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'Romantic Intensity',
      question: 'How does romantic intensity affect judgment? What are the benefits and dangers of passionate connection?'
    }
  ],
  
  amplifiedDiscussion: [
    {
      id: 'romantic-intensity',
      title: 'The Power and Danger of Romantic Intensity',
      question: 'How does Marianne\'s intense romantic connection with Willoughby affect her judgment? What are the benefits and dangers of passionate romance?',
      aiResponse: `**The Intensity of Romantic Connection**

Marianne's relationship demonstrates the power and danger of romantic intensity:

**The Benefits:**
- Deep emotional connection
- Shared values and interests
- Authentic expression
- Memorable experience

**The Dangers:**
- Impaired judgment
- Blindness to flaws
- Rapid commitment
- Vulnerability to betrayal

**Austen's Exploration:**
Romantic intensity can:
- Create genuine connection
- But also prevent evaluation
- Allow authentic feeling
- But also enable exploitation

**The Balance:**
Passion needs judgment, intensity needs evaluation, and authentic feeling needs realistic assessment.

**Modern Relevance:**
We still navigate these challenges:
- Balancing passion with wisdom
- Maintaining intensity while evaluating
- Feeling deeply while thinking clearly

**The Lesson:**
Romantic intensity is valuable but requires balance with judgment to prevent vulnerability and ensure healthy relationships.`
    }
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Intense Romance Scene',
      description: 'Write a scene showing intense romantic connection, exploring how passion affects judgment.',
      purpose: 'Teaches students to create romantic tension while exploring its effects.'
    },
    
    activity: {
      title: 'Romantic Intensity Discussion',
      description: 'Discuss how romantic intensity affects judgment and relationships.',
      materials: 'Discussion questions'
    },
    
    crossCurricular: {
      title: 'Psychology of Attraction',
      description: 'Partner with psychology teachers to explore romantic intensity and its effects.',
      subjects: ['Psychology']
    }
  },
  
  criticalThinkingExercise: {
    title: 'Evaluating Romantic Intensity',
    prompt: 'Analyze how romantic intensity affects judgment. When is passion valuable vs. dangerous?',
    guidingQuestions: [
      'How does intensity affect judgment?',
      'What are the benefits and dangers?',
      'What balance is needed?'
    ],
    thinkingFramework: {
      analyze: 'Examine romantic intensity and its effects.',
      evaluate: 'Assess benefits and dangers.',
      synthesize: 'Develop understanding of balance.'
    },
    expectedDepth: 'Strong responses analyze intensity, assess its effects, and propose balanced approaches.',
    classroomApplication: 'Essay or discussion. 1-2 class periods.'
  },
  
  whyLiteratureMatters: getLiteratureMessageByChapter(11),
  
  nextTimeTeaser: {
    emoji: '🎭',
    title: 'Next: Colonel Brandon\'s Warning',
    preview: 'Colonel Brandon confides in Elinor about his tragic past and its connection to Willoughby, revealing disturbing information.',
    hookQuestion: 'What secrets does Colonel Brandon reveal? How will this affect Marianne\'s romance?'
  }
}

