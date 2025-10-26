/**
 * SENSE AND SENSIBILITY - CHAPTER 14
 * 
 * Fanny and Edward Dashwood visit, creating tension over Edward's
 * mysterious behavior and family expectations.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter14: ChapterData = {
  number: 14,
  title: 'Family Visit',
  
  readingTime: 10,
  pages: 4,
  
  summary: {
    brief: 'Fanny and Edward Dashwood visit Barton, creating tension through Fanny\'s calculated behavior and Edward\'s ambiguous responses to Elinor.',
    
    full: [
      'Chapter 14 brings family tensions to Barton as Fanny and Edward Dashwood visit. Fanny\'s calculated behavior and obvious disapproval create social awkwardness, while Edward\'s ambiguous responses to Elinor maintain uncertainty about his feelings. The visit highlights the complexity of family relationships and social expectations.',
      
      'The chapter reveals Fanny\'s manipulation and social control as she attempts to influence relationships and maintain her superiority. Her behavior contrasts with Elinor\'s dignified handling of difficult social situations, showing how different temperaments navigate social complexity.',
      
      'Edward\'s behavior during the visit increases Elinor\'s uncertainty about his feelings. His responses remain ambiguous, creating emotional tension while maintaining social propriety. His behavior hints at complications that will be revealed later.',
      
      'The chapter develops social dynamics and prepares for future revelations about Edward\'s situation.'
    ]
  },
  
  termsToKnow: [
    {
      term: 'Social Manipulation',
      definition: 'The use of calculated behavior to influence others and control social situations.',
      context: 'Fanny\'s social manipulation attempts to control relationships and maintain her position of superiority.',
      whyItMatters: 'Understanding social manipulation helps readers recognize how people use behavior to influence others.'
    }
  ],
  
  characters: [
    {
      name: 'Fanny Dashwood',
      development: 'Fanny\'s visit reveals her continued manipulation and social control. Her calculated behavior shows her priorities and approach to maintaining social position.',
      keyTrait: {
        emoji: '🎭',
        text: 'Social Manipulator'
      }
    }
  ],
  
  quotes: [
    {
      text: 'Fanny was determined to be pleased, regardless of her brother\'s opposition.',
      analysis: 'This description shows Fanny\'s determination to control social situations regardless of others\' feelings.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'Social Control',
        explanation: 'The chapter explores how people use calculated behavior to control social situations and relationships.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Social Commentary',
        explanation: 'Austen uses social interactions to critique manipulative behavior and social expectations.',
        example: 'Fanny\'s calculated behavior reveals the negative aspects of social manipulation.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'Imagine difficult family visits where calculated behavior creates tension and social awkwardness.',
    
    parallels: [
      '👨‍👩‍👧 **Family Dynamics**: Difficult visits = modern family tensions and social maneuvering',
      '🎭 **Social Performance**: Calculated behavior = modern image management and social control'
    ],
    
    discussionPrompt: 'How do we navigate difficult family dynamics? What helps maintain dignity in awkward situations?'
  },
  
  thematicThreads: [
    {
      emoji: '🎭',
      name: 'Social Performance',
      explanation: 'Family interactions reveal social manipulation. Watch how characters navigate calculated behavior.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'Social Manipulation',
      question: 'How does Fanny use social behavior to control situations? What does this reveal about her character?'
    }
  ],
  
  amplifiedDiscussion: [
    {
      id: 'social-manipulation',
      title: 'The Art of Social Manipulation',
      question: 'How does Fanny use calculated behavior to control social situations? What techniques does she employ?',
      aiResponse: `**Social Manipulation in Action**

Fanny demonstrates sophisticated social manipulation:

**Her Techniques:**
- Calculated behavior
- Conditional approval
- Subtle social pressure
- Image management

**The Effects:**
- Creates awkwardness
- Controls interactions
- Maintains superiority
- Influences behavior

**Austen's Critique:**
Social manipulation:
- Prioritizes control over connection
- Values position over relationship
- Uses behavior to dominate
- Creates unnecessary tension

**The Contrast:**
Elinor's dignity vs. Fanny's manipulation shows different approaches to social situations and relationship management.

**Modern Relevance:**
We see these patterns today:
- Calculated social behavior
- Image management
- Social manipulation
- Control through behavior

**The Lesson:**
Authentic relationships require genuine behavior. Social manipulation creates short-term control but damages long-term connection.`
    }
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Social Tension Scene',
      description: 'Write a scene depicting awkward social interaction and calculated behavior.',
      purpose: 'Teaches students to create social tension and explore interpersonal dynamics.'
    },
    
    activity: {
      title: 'Social Behavior Discussion',
      description: 'Discuss how people use behavior to influence others and navigate social situations.',
      materials: 'Discussion questions'
    },
    
    crossCurricular: {
      title: 'Social Psychology',
      description: 'Partner with psychology teachers to explore social manipulation and behavior.',
      subjects: ['Psychology', 'Sociology']
    }
  },
  
  criticalThinkingExercise: {
    title: 'The Ethics of Social Manipulation',
    prompt: 'Analyze social manipulation. When is calculated behavior ethical vs. manipulative?',
    guidingQuestions: [
      'What constitutes manipulation?',
      'When is behavior harmful?',
      'What balances power vs. respect?'
    ],
    thinkingFramework: {
      analyze: 'Examine social manipulation and its techniques.',
      evaluate: 'Assess ethics and effects.',
      synthesize: 'Develop understanding of ethical behavior.'
    },
    expectedDepth: 'Strong responses analyze manipulation, assess ethics, and develop frameworks.',
    classroomApplication: 'Essay or discussion. 1-2 class periods.'
  },
  
  whyLiteratureMatters: getLiteratureMessageByChapter(14),
  
  nextTimeTeaser: {
    emoji: '💥',
    title: 'Next: The Revelation',
    preview: 'Edward\'s secret engagement to Lucy Steele is revealed, devastating Elinor.',
    hookQuestion: 'How will Elinor respond to Edward\'s betrayal? How does sense cope with heartbreak?'
  }
}

