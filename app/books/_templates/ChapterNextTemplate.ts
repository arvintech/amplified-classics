/**
 * CHAPTER NEXT TEMPLATE - For Chapters 2+ of Books
 * 
 * This template is for SUBSEQUENT chapters (2, 3, 4...onwards) of any book.
 * These chapters focus on Reading Moments pedagogy with minimal additional structure.
 * 
 * Use this template for: Chapters 2-onwards of any book
 * For first chapters, use: Chapter1Template.ts
 * 
 * Structure based on: Jane Eyre Chapter 20
 */

import { ChapterData } from '@/app/lib/types/book.types'

export const chapterX: ChapterData = {
  // ==========================================
  // BASIC INFO
  // ==========================================
  number: 20, // Change to actual chapter number
  title: '', // Optional: Add dramatic title if chapter has one
  
  readingTime: 15, // Minutes
  pages: 8, // Approximate page count
  
  // ==========================================
  // SUMMARY (Required - brief overview)
  // ==========================================
  summary: {
    brief: 'One powerful sentence capturing this chapter\'s essence',
    full: [
      'Brief paragraph summarizing the chapter events - this is lighter than Chapter 1 summaries',
      'Focus on what happens and why it matters for the narrative arc'
    ]
  },
  
  // ==========================================
  // PREVIOUSLY ON... (Brief Recap)
  // ==========================================
  previouslyOn: {
    summary: 'Brief 2-3 sentence recap of what happened in previous chapter(s) that readers need to remember for this chapter. Focus on setup for current events.',
    keyEvents: [
      'Key event 1 that led to this moment',
      'Key event 2 readers need to recall',
      'Key relationship or situation that matters now'
    ]
  },
  
  // ==========================================
  // CHAPTER OPENING CONTEXT
  // ==========================================
  chapterOpening: {
    setting: 'Where/when does this chapter begin? What\'s the immediate situation?',
    mood: 'What emotional/atmospheric tone opens this chapter?',
    stakes: 'What\'s at stake for the characters in this chapter?'
  },
  
  // ==========================================
  // READING MOMENTS (Primary Pedagogy)
  // ==========================================
  // 5-6 Reading Moments per chapter
  // These are the CORE of subsequent chapters
  // Structure: Notice → Explore → Amplify
  
  readingMoments: [
    {
      id: 'moment-1-unique-id',
      emoji: '🌧️', // Choose appropriate emoji for the moment
      title: 'The Moment Title - Make it Specific and Intriguing',
      
      // NOTICE: Set up the moment, quote key passage, ask what students notice
      notice: 'Context for this moment in the chapter. Quote the relevant passage: "Direct quote from text." Then ask: What catches your attention here? What stands out to you?',
      
      // EXPLORE: 3 progressive questions that guide discovery
      explore: [
        'Question 1: Focus on surface-level observation - what do you see/notice in the text?',
        'Question 2: Make a connection - put two pieces together, compare, contrast',
        'Question 3: Lead to insight - what does this pattern/choice/moment reveal?'
      ],
      
      // AMPLIFY: Reveal the literary technique with full context
      amplify: `**You've Discovered: [Name of Literary Technique/Concept]**

Opening paragraph: Validate what they discovered and explain its significance.

**What This Technique Accomplishes:**

**Point 1 - Specific Function**
- Subpoint with details
- How it works in this specific passage
- Why the author chose this approach

**Point 2 - Broader Pattern**
- How this moment fits into larger patterns
- Connections to other moments in novel
- Thematic significance

**Point 3 - Character/Plot Significance**
- What this reveals about character
- How it advances plot or conflict
- Emotional/psychological truth

**Victorian Context:**

Explain the historical/cultural context that makes this technique meaningful. What would Victorian readers have understood? What social/cultural norms does this engage with?

**Critical Readings:**

Mention 2-3 different ways critics have interpreted this moment:
- Traditional reading: [perspective]
- Feminist reading: [perspective]
- Postcolonial/Modern reading: [perspective]

**Why This Matters:**

Bigger takeaway - why should students care about this moment? What does it teach about literature, human nature, or the novel's themes?

**Modern Parallel:**

Connect to contemporary life, media, or experiences students recognize.

**You just discovered [big insight about literature/life]!**`
    },
    
    {
      id: 'moment-2-unique-id',
      emoji: '💔',
      title: 'Second Moment Title',
      notice: 'Context and quote for second key moment...',
      explore: [
        'Progressive question 1',
        'Progressive question 2', 
        'Progressive question 3'
      ],
      amplify: `Structure same as above...`
    }
    
    // Add 3-4 more Reading Moments
    // Each should cover a distinct pedagogical moment in the chapter
    // Focus on: character development, plot turns, themes, techniques, moral dilemmas
  ],
  
  // ==========================================
  // CHAPTER CLOSING
  // ==========================================
  chapterClosing: {
    resolution: 'How does this chapter end? What\'s resolved or unresolved?',
    cliffhanger: 'What question or tension carries into next chapter?',
    thematicShift: 'How have themes or character understanding evolved?'
  },
  
  // ==========================================
  // QUICK DISCUSSION PROMPTS
  // ==========================================
  // 2-3 fast discussion questions (not full essays)
  quickDiscussion: [
    {
      question: 'Quick thought-provoking question about key moment',
      purpose: 'What skill/insight this question develops'
    },
    {
      question: 'Another quick question about character or theme',
      purpose: 'What it helps students understand'
    }
  ],
  
  // ==========================================
  // CONNECTIONS
  // ==========================================
  connections: {
    lookBack: 'How does this chapter connect to or echo earlier moments in the novel?',
    lookForward: 'What does this chapter set up for future developments?',
    thematicEcho: 'What themes from earlier in the novel are being developed or complicated here?'
  },
  
  // ==========================================
  // OPTIONAL: EDUCATOR NOTE
  // ==========================================
  educatorNote: {
    teachingFocus: 'What is the primary pedagogical goal for this chapter?',
    commonMisreadings: 'What do students often misunderstand about this chapter?',
    discussionStarter: 'One powerful question to open discussion',
    comparativeReading: 'Optional: How does this chapter work with other texts or chapters?'
  }
}

// ==========================================
// GUIDELINES FOR READING MOMENTS
// ==========================================

/*
READING MOMENT SELECTION CRITERIA:

Choose moments that:
1. Teach a specific literary technique
2. Reveal character psychology
3. Advance thematic understanding
4. Present moral/philosophical dilemmas
5. Demonstrate Victorian social dynamics
6. Connect to students' lived experience

PROGRESSIVE QUESTIONING:

Question 1: OBSERVE
- "What do you notice?"
- "What words/images stand out?"
- "What's happening here?"

Question 2: CONNECT
- "How does X relate to Y?"
- "Compare this to earlier moment"
- "Put these two pieces together"

Question 3: INTERPRET
- "What does this pattern reveal?"
- "Why might the author choose this?"
- "What's the deeper meaning?"

AMPLIFY STRUCTURE:

1. Name the discovery (validate their insight)
2. Explain the technique/concept
3. Provide Victorian context
4. Offer multiple critical perspectives
5. Connect to modern experience
6. Celebrate the insight

TONE:

- Enthusiastic and validating
- "You discovered!" not "You should have noticed"
- Treat students as fellow readers making insights
- Academic but accessible
- Builds confidence in literary analysis

LENGTH:

Each Reading Moment amplification: 300-500 words
Total chapter: 5-6 Reading Moments = 1500-3000 words
Plus structure sections: ~500 words
Total chapter file: ~2000-3500 words

This is leaner than Chapter 1 but still pedagogically rich.
*/

