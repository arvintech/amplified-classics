/**
 * SENSE AND SENSIBILITY - CHAPTER 16
 * 
 * Elinor must conceal her heartbreak while supporting Marianne through
 * emotional turmoil.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter16: ChapterData = {
  number: 16,
  title: 'Concealed Pain',
  
  readingTime: 11,
  pages: 4,
  
  summary: {
    brief: 'Elinor maintains her emotional restraint while supporting Marianne through her own romantic challenges, demonstrating how sense provides strength for others while carrying private burden.',
    
    full: [
      'Chapter 16 explores the burden of emotional restraint as Elinor conceals her own heartbreak while supporting Marianne through romantic challenges. Her ability to maintain composure and provide comfort despite personal pain demonstrates the strength of "sense" but also reveals its emotional cost. She suffers privately while supporting others publicly.',
      
      'The chapter highlights the contrast between how sense and sensibility cope with pain. Elinor\'s private suffering contrasts with how Marianne would likely express open grief, revealing different approaches to emotional management. Both approaches have value and cost.',
      
      'Elinor\'s strength in supporting others despite her own pain shows the value of emotional regulation. Her ability to maintain dignity and provide comfort reveals how sense serves others while managing personal suffering. However, her concealment also isolates her from support.',
      
      'The chapter develops Elinor\'s character as she navigates the complex task of managing her own pain while supporting Marianne, revealing the ongoing cost of emotional restraint.'
    ]
  },
  
  termsToKnow: [
    {
      term: 'Emotional Labor',
      definition: 'The effort of managing one\'s own emotions while supporting others, often requiring suppression of personal feeling.',
      context: 'Elinor performs emotional labor by concealing her heartbreak while supporting Marianne through challenges.',
      whyItMatters: 'Understanding emotional labor helps readers appreciate the effort and cost of supporting others while managing personal pain.'
    }
  ],
  
  characters: [
    {
      name: 'Elinor Dashwood',
      development: 'Elinor\'s performance of emotional labor reveals her strength and vulnerability. She provides support while carrying private burden, demonstrating sense\'s capacity for service and its emotional cost.',
      keyTrait: {
        emoji: '💪',
        text: 'Emotional Strength'
      }
    }
  ],
  
  quotes: [
    {
      text: 'Elinor\'s composure lasted; it was forced, but it lasted.',
      analysis: 'This description shows Elinor\'s willed strength and the effort required to maintain emotional restraint despite profound pain.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'The Burden of Emotional Restraint',
        explanation: 'The chapter explores how emotional restraint enables strength but also creates isolation and sustained suffering.'
      },
      {
        name: 'Supporting Others While Suffering',
        explanation: 'Elinor\'s ability to support Marianne while concealing her own pain reveals the complexity of emotional management.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Emotional Irony',
        explanation: 'The contrast between what Elinor experiences privately and what she presents publicly creates emotional irony.',
        example: 'She suffers deeply while appearing composed, creating layered emotional experience.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'Imagine supporting others through their difficulties while managing your own hidden pain.',
    
    parallels: [
      '💪 **Supporting While Suffering**: Emotional labor = modern caregivers managing their own pain',
      '🎭 **Wearing Masks**: Concealed pain = modern pressure to appear strong',
      '😔 **Hidden Struggles**: Private suffering = modern invisible emotional labor'
    ],
    
    discussionPrompt: 'How do we balance supporting others with caring for ourselves? When is emotional concealment healthy vs. harmful?'
  },
  
  thematicThreads: [
    {
      emoji: '💪',
      name: 'Emotional Strength',
      explanation: 'Elinor\'s concealed strength will be tested further. Watch how sense manages ongoing pain.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'Emotional Labor',
      question: 'Is Elinor\'s support of others while suffering healthy? How do we balance helping others with self-care?'
    }
  ],
  
  amplifiedDiscussion: [
    {
      id: 'emotional-labor',
      title: 'The Cost of Emotional Labor',
      question: 'Is it healthy for Elinor to conceal her pain while supporting others? How do we balance emotional labor with self-care?',
      aiResponse: `**The Complexity of Emotional Labor**

Elinor's situation reveals important questions:

**The Benefits:**
- Maintains strength for others
- Provides comfort and support
- Enables social function
- Shows emotional maturity

**The Costs:**
- Private suffering
- Emotional isolation
- Lack of support
- Prolonged pain

**The Balance:**
Healthy emotional labor requires:
- Supporting others when possible
- But also receiving support
- Managing emotions appropriately
- But not suppressing entirely

**Austen's Exploration:**
Restraint can:
- Enable strength
- But also create burden
- Maintain propriety
- But prevent healing

**Modern Relevance:**
We see these patterns:
- Caregivers supporting while suffering
- Emotional labor expectations
- Pressure to appear strong
- Hidden struggles

**The Lesson:**
Emotional labor has value but requires boundaries. Supporting others is virtuous, but everyone needs support too. Healthy emotional management balances strength with vulnerability, maintaining composure while finding appropriate expression. The ideal recognizes that supporting others and receiving support are both necessary.`
    }
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Emotional Labor Scene',
      description: 'Write a scene where a character supports others while managing their own pain.',
      purpose: 'Teaches students to explore emotional complexity and the cost of supporting others.'
    },
    
    activity: {
      title: 'Support Systems Discussion',
      description: 'Discuss how to balance supporting others with receiving support, exploring emotional labor.',
      materials: 'Discussion questions, support system charts'
    },
    
    crossCurricular: {
      title: 'Psychology of Caregiving',
      description: 'Partner with psychology teachers to explore emotional labor and caregiver support.',
      subjects: ['Psychology', 'Health']
    }
  },
  
  criticalThinkingExercise: {
    title: 'The Ethics of Emotional Labor',
    prompt: 'Analyze the balance between supporting others and caring for oneself. What are healthy boundaries?',
    guidingQuestions: [
      'What constitutes healthy emotional labor?',
      'How do we balance support and self-care?',
      'What are appropriate boundaries?'
    ],
    thinkingFramework: {
      analyze: 'Examine emotional labor and its effects.',
      evaluate: 'Assess balance and boundaries.',
      synthesize: 'Develop healthy approach.'
    },
    expectedDepth: 'Strong responses analyze emotional labor, assess balance, and develop healthy frameworks.',
    classroomApplication: 'Essay or discussion. 1-2 class periods.'
  },
  
  whyLiteratureMatters: getLiteratureMessageByChapter(16),
  
  nextTimeTeaser: {
    emoji: '💨',
    title: 'Next: Willoughby Leaves',
    preview: 'Willoughby suddenly leaves Barton without explanation, leaving Marianne distraught.',
    hookQuestion: 'Will Marianne\'s romantic ideals survive crisis? How does sensibility respond to betrayal?'
  }
}

