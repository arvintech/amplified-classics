/**
 * SENSE AND SENSIBILITY - CHAPTER 13
 * 
 * Marianne and Willoughby's romance deepens despite warnings from
 * Elinor and Colonel Brandon.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter13: ChapterData = {
  number: 13,
  title: 'Warning Ignored',
  
  readingTime: 11,
  pages: 4,
  
  summary: {
    brief: 'Marianne\'s passionate romance with Willoughby continues to deepen despite Elinor\'s concerns and warnings. Her romantic sensibility prevents her from recognizing potential dangers.',
    
    full: [
      'Chapter 13 continues Marianne\'s romantic development as her relationship with Willoughby intensifies despite mounting concerns. Her passionate sensibility leads her to dismiss or ignore warnings about Willoughby\'s character, prioritizing her romantic ideals over cautious evaluation. This demonstrates the danger of unchecked sensibility—Marianne\'s emotional commitment prevents her from exercising judgment.',
      
      'Elinor\'s concerns grow as she observes Marianne\'s deepening attachment and Willoughby\'s behavior. Her sense-based approach leads her to evaluate the relationship critically, noticing inconsistencies and potential problems. However, her respect for Marianne\'s autonomy and reluctance to damage their relationship prevents her from direct intervention.',
      
      'The chapter builds dramatic tension as Marianne moves further toward potential heartbreak while Elinor remains powerless to prevent it. Their contrasting approaches—Marianne\'s romantic certainty vs. Elinor\'s cautious concern—highlight the novel\'s central conflict between sensibility and sense.',
      
      'The growing intensity of Marianne\'s romance combined with Elinor\'s knowledge of concerning information creates suspense about when revelation will occur and how it will affect Marianne.'
    ]
  },
  
  termsToKnow: [
    {
      term: 'Romantic Blindness',
      definition: 'The tendency to ignore or dismiss concerns about romantic partners due to emotional attachment and idealized perception.',
      context: 'Marianne demonstrates romantic blindness by dismissing warnings about Willoughby, prioritizing her romantic ideals over critical evaluation.',
      whyItMatters: 'Understanding romantic blindness helps readers appreciate how emotional attachment can impair judgment and lead to vulnerability.'
    }
  ],
  
  characters: [
    {
      name: 'Marianne Dashwood',
      development: 'Marianne\'s romantic blindness intensifies as her attachment to Willoughby deepens. Her sensibility-based approach prevents her from exercising judgment, demonstrating the danger of unchecked emotional commitment.',
      keyTrait: {
        emoji: '💫',
        text: 'Romantic Blindness'
      }
    }
  ],
  
  quotes: [
    {
      text: 'Marianne could never love by halves; and her whole heart became, in time, as much devoted to her husband, as it had once been to Willoughby.',
      analysis: 'This description shows Marianne\'s capacity for intense devotion, which makes her vulnerable but also capable of deep love.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'The Danger of Romantic Idealism',
        explanation: 'The chapter explores how romantic idealism can blind people to reality and create vulnerability.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Building Dramatic Tension',
        explanation: 'Austen builds tension through the contrast between readers\' knowledge and Marianne\'s ignorance.',
        example: 'We know concerns about Willoughby while Marianne remains romantically certain.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'Imagine watching a friend ignore red flags in a relationship you can see are concerning.',
    
    parallels: [
      '🚩 **Red Flags**: Warning signs = modern relationship concerns',
      '👀 **Blind Spots**: Missing problems = modern romantic blindness'
    ],
    
    discussionPrompt: 'How do we recognize when romantic attachment blinds us to problems? What helps maintain judgment in relationships?'
  },
  
  thematicThreads: [
    {
      emoji: '⚠️',
      name: 'Ignored Warnings',
      explanation: 'Marianne\'s dismissal of warnings will have consequences. Watch how romantic idealism creates vulnerability.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'Romantic Blindness',
      question: 'Why does Marianne ignore warnings about Willoughby? How does romantic attachment affect judgment?'
    }
  ],
  
  amplifiedDiscussion: [
    {
      id: 'romantic-blindness',
      title: 'The Psychology of Romantic Blindness',
      question: 'Why does Marianne ignore warnings about Willoughby? How does romantic attachment create blind spots?',
      aiResponse: `**Why We Ignore Warnings**

Marianne demonstrates common patterns of romantic blindness:

**The Causes:**
- Emotional attachment
- Idealized perception
- Desire for romance
- Cognitive dissonance

**The Mechanisms:**
- Dismissing contrary evidence
- Rationalizing concerns
- Prioritizing feeling over fact
- Maintaining romantic ideals

**Austen's Insight:**
Romantic attachment can:
- Create genuine connection
- But also impair judgment
- Enable authentic feeling
- But also vulnerability

**The Balance:**
Passion needs evaluation, attachment needs judgment, and feeling needs reasoning.

**Modern Relevance:**
We still face these challenges:
- Recognizing blind spots
- Maintaining judgment in love
- Balancing feeling with evaluation
- Protecting ourselves while loving

**The Lesson:**
Authentic love doesn't require blindness. Successful relationships integrate passion with wisdom, maintaining feeling while exercising judgment.`
    }
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Warning Scene',
      description: 'Write a scene where characters ignore warnings, exploring how emotion affects judgment.',
      purpose: 'Teaches students to create dramatic tension and explore psychological processes.'
    },
    
    activity: {
      title: 'Blind Spots Discussion',
      description: 'Discuss how romantic attachment can create blind spots and what helps maintain judgment.',
      materials: 'Discussion questions'
    },
    
    crossCurricular: {
      title: 'Psychology of Attachment',
      description: 'Partner with psychology teachers to explore how attachment affects perception and judgment.',
      subjects: ['Psychology']
    }
  },
  
  criticalThinkingExercise: {
    title: 'Romantic Blindness: When Are We Vulnerable?',
    prompt: 'Analyze the psychology of romantic blindness. What causes it? How can we protect ourselves?',
    guidingQuestions: [
      'What causes romantic blindness?',
      'How does attachment affect judgment?',
      'What protects against vulnerability?'
    ],
    thinkingFramework: {
      analyze: 'Examine romantic blindness and its causes.',
      evaluate: 'Assess psychological mechanisms.',
      synthesize: 'Develop protective strategies.'
    },
    expectedDepth: 'Strong responses analyze psychology, assess mechanisms, and propose protective strategies.',
    classroomApplication: 'Essay or discussion. 1-2 class periods.'
  },
  
  whyLiteratureMatters: getLiteratureMessageByChapter(13),
  
  nextTimeTeaser: {
    emoji: '💣',
    title: 'Next: Crisis Approaches',
    preview: 'Fanny and Edward visit, creating tension over Edward\'s mysterious behavior and family expectations.',
    hookQuestion: 'What complications will arise? How will secrets be revealed?'
  }
}

