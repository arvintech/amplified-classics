/**
 * SENSE AND SENSIBILITY - CHAPTER 12
 * 
 * Colonel Brandon confides in Elinor about his tragic past love affair
 * and its connection to Willoughby.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter12: ChapterData = {
  number: 12,
  title: 'Colonel Brandon\'s Secret',
  
  readingTime: 12,
  pages: 5,
  
  summary: {
    brief: 'Colonel Brandon confides in Elinor about his tragic past love affair and its connection to Willoughby, revealing information that raises concerns about Willoughby\'s character.',
    
    full: [
      'Chapter 12 introduces crucial plot developments as Colonel Brandon shares his tragic history with Elinor. He reveals a past love affair and its devastating consequences, which connects to Willoughby in disturbing ways. This revelation provides important information about Willoughby\'s character that Marianne remains unaware of.',
      
      'The chapter demonstrates Elinor\'s role as confidante and her ability to maintain emotional intelligence while managing difficult information. Colonel Brandon\'s trust in her shows her maturity and judgment, while his revelation creates dramatic irony—readers and Elinor know information that Marianne lacks.',
      
      'The tragic history Colonel Brandon shares adds depth to his character and explains his steady devotion to Marianne. His past suffering reveals the weight of genuine feeling and contrasts with Willoughby\'s surface appeal. The revelation hints at Willoughby\'s character flaws while maintaining suspense.',
      
      'The chapter creates tension between what readers know and what Marianne experiences, setting up future revelation and drama. Elinor must navigate her knowledge while respecting Marianne\'s autonomy and romantic hopes.'
    ]
  },
  
  termsToKnow: [
    {
      term: 'Dramatic Irony',
      definition: 'A literary device where the audience knows something that characters do not, creating tension and often emotion.',
      context: 'Elinor and readers know about Willoughby\'s past while Marianne remains unaware, creating dramatic irony.',
      whyItMatters: 'Understanding dramatic irony helps readers appreciate how Austen creates tension and emotional engagement.'
    }
  ],
  
  characters: [
    {
      name: 'Colonel Brandon',
      development: 'Colonel Brandon\'s tragic past reveals the depth of his character and genuine feeling. His willingness to share his history with Elinor shows trust and maturity, while his suffering explains his quiet devotion.',
      keyTrait: {
        emoji: '💔',
        text: 'Tragic Devotion'
      }
    }
  ],
  
  quotes: [
    {
      text: 'Colonel Brandon\'s story was touching; his feelings were tender; his attachment was honourable.',
      analysis: 'This description establishes Colonel Brandon\'s genuine character and contrasts it with Willoughby\'s questionable behavior.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'Past Secrets and Present Consequences',
        explanation: 'The chapter explores how past actions affect present relationships and how secrets shape understanding.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Revelation Through Confession',
        explanation: 'Austen uses Colonel Brandon\'s confession to reveal crucial information while developing his character.',
        example: 'His tragic story reveals depth and explains his behavior.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'Imagine learning disturbing information about a friend\'s romantic partner that they don\'t know.',
    
    parallels: [
      '🚨 **Red Flags**: Warning signs = modern concerns about partners\' pasts',
      '💬 **Difficult Truths**: Knowing secrets = modern dilemma of when to share information'
    ],
    
    discussionPrompt: 'When should we share concerning information about someone\'s romantic partner? What are the ethics of intervention?'
  },
  
  thematicThreads: [
    {
      emoji: '🔍',
      name: 'Hidden Truths',
      explanation: 'Colonel Brandon\'s revelation uncovers hidden information. Watch how secrets affect relationships and judgments.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'Secret Knowledge',
      question: 'How does knowing information Marianne doesn\'t affect Elinor\'s perspective? What are her ethical obligations?'
    }
  ],
  
  amplifiedDiscussion: [
    {
      id: 'secret-knowledge',
      title: 'The Ethics of Secret Knowledge',
      question: 'What are Elinor\'s ethical obligations regarding information about Willoughby? When should she intervene vs. respect Marianne\'s autonomy?',
      aiResponse: `**The Dilemma of Secret Knowledge**

Elinor faces an ethical dilemma:

**The Situation:**
- She knows concerning information
- Marianne is unaware
- Direct intervention could harm
- Silence could enable harm

**Ethical Considerations:**
- Respect for autonomy
- Duty to protect
- Trust and betrayal
- Timing and judgment

**The Complexity:**
No simple answers:
- Intervening too early damages trust
- Waiting too long enables harm
- Timing requires wisdom
- Balancing requires judgment

**Austen's Exploration:**
The dilemma shows:
- Real-world ethical complexity
- Difficulty of making choices
- Value of patient wisdom
- Necessity of evaluation

**Modern Relevance:**
We face similar choices:
- When to share concerns
- How to support loved ones
- Balancing advice with autonomy
- Navigating difficult truths

**The Lesson:**
Ethical decisions require balancing multiple values, considering consequences, and maintaining compassion while protecting others.`
    }
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Confession Scene',
      description: 'Write a scene where a character reveals a secret, exploring how revelation affects relationships.',
      purpose: 'Teaches students to create dramatic revelation and explore its effects.'
    },
    
    activity: {
      title: 'Ethical Dilemma Discussion',
      description: 'Discuss when and how to share concerning information about relationships.',
      materials: 'Discussion questions, scenarios'
    },
    
    crossCurricular: {
      title: 'Ethics of Intervention',
      description: 'Partner with ethics teachers to explore dilemmas of protecting vs. respecting autonomy.',
      subjects: ['Ethics', 'Philosophy']
    }
  },
  
  criticalThinkingExercise: {
    title: 'The Ethics of Intervention',
    prompt: 'Analyze the ethics of sharing concerning information about romantic partners. When is intervention justified?',
    guidingQuestions: [
      'What are the ethical obligations?',
      'When should we intervene?',
      'How do we balance competing values?'
    ],
    thinkingFramework: {
      analyze: 'Examine the ethical dilemma.',
      evaluate: 'Assess different approaches.',
      synthesize: 'Develop ethical framework.'
    },
    expectedDepth: 'Strong responses analyze ethical complexity, assess multiple perspectives, and develop frameworks.',
    classroomApplication: 'Essay or discussion. 2 class periods.'
  },
  
  whyLiteratureMatters: getLiteratureMessageByChapter(12),
  
  nextTimeTeaser: {
    emoji: '💔',
    title: 'Next: Warning Ignored',
    preview: 'Marianne\'s romance with Willoughby deepens despite warnings, leading toward crisis.',
    hookQuestion: 'Will Marianne heed warnings? What consequences await?'
  }
}

