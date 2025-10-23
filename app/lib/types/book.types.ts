/**
 * Amplified Classics — Book & Chapter Type Definitions
 * 
 * These types define the structure for all books and chapters
 * in the Amplified Classics platform.
 */

// ==================== BOOK CONFIGURATION ====================

export interface BookConfig {
  // Basic Information
  slug: string
  title: string
  subtitle?: string
  author: string
  published: string
  genre: string
  
  // Visual
  coverImage?: string // URL or path to book cover image
  
  // Structure
  totalChapters: number
  parts?: BookPart[]
  
  // Content
  description: string
  quote?: string
  
  // Themes & Topics
  themes: string[]
  
  // Purchase & Resources
  purchaseLinks?: {
    independent?: PurchaseLink
    amazon?: PurchaseLink
  }
  freeResources?: FreeResource[]
  
  // Contributor Information
  contributor: Contributor
}

export interface BookPart {
  part: number
  title: string
  subtitle: string
  description: string
  chapters: number[] | ChapterMetadata[] // array of chapter numbers or chapter objects with descriptions
}

export interface PurchaseLink {
  name: string
  url: string
  description: string
}

export interface FreeResource {
  name: string
  url: string
}

export interface Contributor {
  name: string
  role: string
  email?: string
}

// ==================== CHAPTER DATA ====================

export interface ChapterData {
  // Basic Info
  number: number
  title?: string
  
  // Reading Metadata
  readingTime: number // in minutes
  pages: number
  
  // ==========================================
  // CHAPTER 1 TEMPLATE FIELDS (Always included)
  // ==========================================
  
  // Why Literature Matters (All chapters - rotating one-liner about literature in STEM age)
  whyLiteratureMatters?: string
  
  // Series Opening (Chapter 1 only - green instructional box introducing IA anatomy)
  seriesOpening?: {
    title: string
    introduction: string
    features: Array<{
      icon: string
      name: string
      description: string
    }>
    callToAction: string
  }
  
  // Summary
  summary: {
    brief: string // one sentence for chapter list
    full: string[] // array of paragraphs for full summary
  }
  
  // Terms to Know (vocabulary glossary)
  termsToKnow?: TermToKnow[]
  
  // Characters (optional for ChapterNextTemplate)
  characters?: Character[]
  
  // Key Quotes (optional for ChapterNextTemplate)
  quotes?: Quote[]
  
  // Intelligence Amplified Analysis (optional for ChapterNextTemplate)
  iaAnalysis?: {
    themes: Theme[]
    literaryTechniques: LiteraryTechnique[]
  }
  
  // Modern Adaptation (optional for ChapterNextTemplate)
  modernAdaptation?: ModernAdaptation
  
  // Thematic Threads (optional for ChapterNextTemplate)
  thematicThreads?: ThematicThread[]
  
  // Discussion Questions (optional for ChapterNextTemplate)
  discussionQuestions?: DiscussionQuestion[]
  
  // Amplified Discussion (optional for ChapterNextTemplate)
  amplifiedDiscussion?: AmplifiedQuestion[]
  
  // Speed Learning Notice (Chapter 1 only - brief pedagogical guidance for Amplified Discussion)
  speedLearningNotice?: {
    title: string
    content: string
  }
  
  // Educator Resources (optional for ChapterNextTemplate)
  educatorResources?: EducatorResources
  
  // Critical Thinking Exercise (one per chapter - focus on higher-order thinking)
  criticalThinkingExercise?: CriticalThinkingExercise
  
  // Next Time Teaser (Chapter 1 only - preview of what's coming in Chapter 2)
  nextTimeTeaser?: {
    emoji: string
    title: string
    preview: string
    hookQuestion: string
  }
  
  // ==========================================
  // CHAPTER NEXT TEMPLATE FIELDS (Chapters 2+)
  // ==========================================
  
  // Previously On (for context continuity)
  previouslyOn?: {
    summary: string
    keyEvents: string[]
  }
  
  // Chapter Opening
  chapterOpening?: {
    setting: string
    mood: string
    stakes: string
  }
  
  // Reading Moments (PRIMARY pedagogy for Chapters 2+)
  readingMoments?: ReadingMoment[]
  
  // Reading Moments Intro (Speed Learning Box - Chapter 1 only)
  readingMomentsIntro?: {
    title: string
    content: string
  }
  
  // Chapter Closing
  chapterClosing?: {
    resolution: string
    cliffhanger: string
    thematicShift: string
  }
  
  // Quick Discussion (lighter than full discussion questions)
  quickDiscussion?: QuickDiscussionPrompt[]
  
  // Connections (narrative continuity)
  connections?: {
    lookBack: string
    lookForward: string
    thematicEcho: string
  }
  
  // Educator Note (teaching guidance)
  educatorNote?: {
    teachingFocus: string
    commonMisreadings: string
    discussionStarter: string
    comparativeReading?: string
  }
}

export interface TermToKnow {
  term: string
  definition: string
  context: string // how it appears in the chapter
  whyItMatters: string // significance for understanding the novel
}

export interface CriticalThinkingExercise {
  title: string
  prompt: string // the main critical thinking question/task
  guidingQuestions: string[] // scaffolding questions
  thinkingFramework: {
    analyze: string
    evaluate: string
    synthesize: string
  }
  expectedDepth: string // what depth of thinking is expected
  classroomApplication: string // how to use this in teaching
}

export interface Character {
  name: string
  development: string // paragraph describing their development
  keyTrait: {
    emoji: string
    text: string
  }
}

export interface Quote {
  text: string
  analysis: string // why this quote is significant
}

export interface Theme {
  name: string
  explanation: string // detailed explanation
}

export interface LiteraryTechnique {
  name: string
  explanation: string
  example?: string // optional specific textual example
}

export interface ModernAdaptation {
  setting: string // description of modern equivalent
  parallels: string[] // array of modern parallels (with emoji prefixes)
  discussionPrompt: string // connecting question
}

export interface ThematicThread {
  emoji: string
  name: string
  explanation: string // how this appears in this chapter
}

export interface DiscussionQuestion {
  title: string
  question: string
}

export interface AmplifiedQuestion {
  id: string // kebab-case slug
  title: string
  question: string
  aiResponse: string // markdown-formatted response
}

export interface EducatorResources {
  writingPrompt: {
    title: string
    description: string
    purpose: string
  }
  activity: {
    title: string
    description: string
    materials: string
  }
  crossCurricular: {
    title: string
    description: string
    subjects: string[]
  }
}

// ==================== READING MOMENTS (ChapterNextTemplate) ====================

export interface ReadingMoment {
  id: string // unique kebab-case id
  emoji: string // emoji icon for the moment
  title: string // descriptive title
  notice: string // what to notice in the text (includes quote + prompt)
  explore: string[] // 3 progressive questions
  amplify: string // markdown-formatted discovery reveal
}

export interface QuickDiscussionPrompt {
  question: string // the discussion question
  purpose: string // what pedagogical goal this serves
}

// ==================== COMPONENT PROPS ====================

export interface ChapterTemplateProps {
  bookConfig: BookConfig
  chapterData: ChapterData
}

export interface BookHeaderProps {
  bookConfig: BookConfig
}

export interface ChapterNavigationProps {
  bookSlug: string
  currentChapter: number
  totalChapters: number
  nextChapterTitle?: string
}

export interface AmplifiedDiscussionProps {
  questions: AmplifiedQuestion[]
}

export interface CharacterCardProps {
  character: Character
}

export interface QuoteCardProps {
  quote: Quote
}

export interface ThemeCardProps {
  theme: Theme
}

export interface ThematicThreadCardProps {
  thread: ThematicThread
}

export interface EducatorCardProps {
  type: 'writing' | 'activity' | 'crossCurricular'
  resource: EducatorResources[keyof EducatorResources]
}

// ==================== UTILITY TYPES ====================

/**
 * Helper type for chapter metadata (used in book landing page)
 */
export interface ChapterMetadata {
  number: number
  title?: string
  description: string // brief summary
}

/**
 * Helper type for chapter list grouped by parts
 */
export interface PartWithChapters extends BookPart {
  chapterMetadata: ChapterMetadata[]
}

/**
 * Navigation metadata for chapter pages
 */
export interface ChapterNavigation {
  previous?: {
    number: number
    title?: string
  }
  next?: {
    number: number
    title?: string
  }
}

