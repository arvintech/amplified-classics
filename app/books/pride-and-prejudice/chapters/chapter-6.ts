/**
 * PRIDE AND PREJUDICE - CHAPTER 6
 * 
 * Reading and Reflection: Elizabeth's stay at Netherfield continues with extended
 * conversations about books, poetry, and literature. Their shared love of reading
 * becomes another bond between them, while Caroline Bingley's attempts to impress
 * Darcy through her own reading habits backfire spectacularly, revealing the depth
 * of her intellectual inadequacy.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter6: ChapterData = {
  number: 6,
  title: 'Reading and Reflection',
  
  readingTime: 16,
  pages: 8,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Elizabeth\'s extended stay at Netherfield leads to deeper conversations about literature and poetry with Mr. Darcy, where their shared love of reading creates another bond between them, while Caroline Bingley\'s desperate attempts to impress Darcy through her own reading habits expose her intellectual inadequacy and calculated nature.',
    
    full: [
      'Elizabeth\'s stay at Netherfield continues as Jane recovers, providing more opportunities for extended conversation with the Netherfield party. During these conversations, Elizabeth and Mr. Darcy discover their shared love of literature and poetry, creating another layer of intellectual connection between them. Their discussions about books reveal their mutual appreciation for quality literature and their ability to engage in sophisticated literary analysis. This shared passion for reading becomes another bond that draws them closer together, transcending their initial prejudices.',
      
      'The chapter showcases Austen\'s understanding of how literature can bring people together across social barriers. Through their conversations about poetry and prose, Elizabeth and Darcy find common ground in their intellectual pursuits. Their literary discussions reveal their mutual intelligence and their ability to appreciate the finer aspects of literature. This shared love of reading becomes a form of courtship, with each trying to impress the other through their literary knowledge and insights.',
      
      'Caroline Bingley\'s desperate attempts to compete with Elizabeth through her own reading habits backfire spectacularly. Her calculated efforts to impress Darcy by reading the same books as Elizabeth expose her intellectual inadequacy and her inability to engage authentically with literature. Her attempts to mimic Elizabeth\'s reading choices reveal her lack of genuine intellectual curiosity and her reliance on social strategy rather than authentic engagement. Caroline\'s failure to compete intellectually with Elizabeth highlights the contrast between genuine intellectual passion and calculated social performance.',
      
      'This chapter establishes literature as another foundation of Elizabeth and Darcy\'s relationship. Their shared love of reading represents their intellectual compatibility and their mutual appreciation for quality and depth. The chapter also introduces the theme of authentic intellectual engagement versus calculated social performance, showing how genuine passion for literature cannot be replicated through social strategy. This literary courtship will be crucial to their eventual understanding and love.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Literary Courtship',
      definition: 'A form of romantic attraction based on shared appreciation for literature, where two people connect through their mutual love of books, poetry, and intellectual pursuits, using literature as a medium for emotional and intellectual bonding.',
      context: 'Elizabeth and Darcy\'s conversations about literature represent literary courtship. Their shared love of reading becomes another bond between them, creating intellectual connection through their mutual appreciation for quality literature. Their literary discussions become a form of courtship that reveals their intellectual compatibility and builds emotional connection.',
      whyItMatters: 'Austen uses literary courtship to show that shared intellectual passions can create deep romantic connections. This theme celebrates the power of literature to bring people together and suggests that intellectual compatibility is essential for lasting relationships. It\'s a progressive message about the value of intellectual pursuits in romantic connection.'
    },
    {
      term: 'Authentic vs. Calculated Reading',
      definition: 'The contrast between genuine intellectual engagement with literature and reading performed for social advantage or to impress others, revealing the difference between authentic intellectual curiosity and calculated social performance.',
      context: 'Elizabeth\'s genuine love of literature contrasts with Caroline Bingley\'s calculated attempts to impress Darcy through her reading habits. Elizabeth reads for intellectual pleasure and personal growth, while Caroline reads to gain social advantage and attract Darcy\'s attention. This contrast reveals the difference between authentic intellectual engagement and calculated social performance.',
      whyItMatters: 'Austen uses this contrast to critique the artificiality of social performance while celebrating authentic intellectual engagement. This theme explores what makes intellectual pursuits meaningful and suggests that genuine passion for literature cannot be replicated through social strategy. It\'s a message about the value of authentic intellectual curiosity.'
    },
    {
      term: 'Literature as Character Revelation',
      definition: 'A literary technique where characters\' reading choices and literary preferences reveal their true nature, values, and intellectual depth, allowing readers to understand them through their relationship with books and ideas.',
      context: 'Elizabeth and Darcy\'s literary preferences reveal their true characters. Their appreciation for quality literature shows their intellectual depth and their ability to engage with complex ideas. Caroline Bingley\'s attempts to mimic their reading choices reveal her lack of genuine intellectual curiosity and her reliance on social strategy. Austen uses literature as a tool for character revelation.',
      whyItMatters: 'This technique allows Austen to reveal character through intellectual pursuits rather than through description or dialogue. It shows how people\'s relationship with literature can reveal their true nature and values. This theme teaches readers to pay attention to what people read and how they engage with literature as indicators of their character.'
    },
    {
      term: 'Intellectual Inadequacy Exposed',
      definition: 'A literary device where a character\'s attempts to compete intellectually with others expose their lack of genuine intellectual ability or curiosity, revealing their reliance on social strategy rather than authentic engagement.',
      context: 'Caroline Bingley\'s attempts to compete with Elizabeth through her reading habits expose her intellectual inadequacy. Her calculated efforts to impress Darcy by reading the same books as Elizabeth reveal her lack of genuine intellectual curiosity and her inability to engage authentically with literature. Her failure to compete intellectually with Elizabeth highlights her reliance on social strategy rather than authentic intellectual engagement.',
      whyItMatters: 'Austen uses Caroline\'s intellectual inadequacy to contrast authentic intellectual engagement with calculated social performance. This theme shows how attempts to compete intellectually can expose our own inadequacies and suggests that genuine intellectual ability cannot be replicated through social strategy. It\'s a message about the value of authentic intellectual curiosity.'
    },
    {
      term: 'The Power of Shared Intellectual Pursuits',
      definition: 'The ability of shared intellectual interests, particularly literature, to create deep connections between people, transcending social barriers and initial prejudices through mutual appreciation for ideas and knowledge.',
      context: 'Elizabeth and Darcy\'s shared love of literature creates a deep connection between them that transcends their initial prejudices. Their mutual appreciation for quality literature becomes a bond that draws them closer together, allowing them to connect intellectually despite their social differences. This shared intellectual pursuit becomes a foundation for their growing relationship.',
      whyItMatters: 'Austen celebrates the power of shared intellectual pursuits to create meaningful connections. This theme suggests that intellectual compatibility can overcome social barriers and initial prejudices, creating lasting relationships based on mutual respect and understanding. It\'s a progressive message about the value of intellectual pursuits in human connection.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Elizabeth Bennet',
      development: 'This chapter reveals Elizabeth\'s genuine love of literature and her ability to engage in sophisticated literary discussion. Her appreciation for quality literature shows her intellectual depth and her ability to engage with complex ideas. She reads for intellectual pleasure and personal growth, not for social advantage. Her literary discussions with Darcy reveal her authentic intellectual curiosity and her ability to appreciate the finer aspects of literature. This chapter establishes Elizabeth as someone whose genuine passion for literature is an attractive quality that cannot be replicated through social strategy.',
      keyTrait: {
        emoji: '📖',
        text: 'Genuinely Literary'
      }
    },
    {
      name: 'Mr. Darcy',
      development: 'This chapter reveals Darcy\'s genuine appreciation for literature and his ability to engage in sophisticated literary discussion. His love of quality literature shows his intellectual depth and his ability to appreciate complex ideas. He finds himself drawn to Elizabeth\'s genuine passion for literature and her ability to engage authentically with books and ideas. His literary discussions with Elizabeth reveal his growing respect for her intellectual abilities and his appreciation for her authentic engagement with literature. This chapter establishes Darcy as someone whose genuine intellectual pursuits make him compatible with Elizabeth.',
      keyTrait: {
        emoji: '📚',
        text: 'Literarily Sophisticated'
      }
    },
    {
      name: 'Caroline Bingley',
      development: 'Caroline\'s desperate attempts to compete with Elizabeth through her reading habits expose her intellectual inadequacy and her reliance on social strategy. Her calculated efforts to impress Darcy by reading the same books as Elizabeth reveal her lack of genuine intellectual curiosity and her inability to engage authentically with literature. Her failure to compete intellectually with Elizabeth highlights her reliance on social performance rather than authentic intellectual engagement. Caroline\'s character establishes her as someone whose calculated behavior cannot compete with Elizabeth\'s genuine qualities.',
      keyTrait: {
        emoji: '🎭',
        text: 'Calculatedly Literary'
      }
    },
    {
      name: 'Jane Bennet',
      development: 'Jane\'s continued recovery and her gentle presence at Netherfield allow her to spend more time with Mr. Bingley, strengthening their connection. Her gentle nature and genuine goodness continue to attract Bingley\'s attention, and her illness has given him more opportunities to show his care for her. Jane\'s character remains consistent—she\'s gracious, kind, and genuinely good, making her an appealing figure who deserves the happiness she will eventually find with Bingley. Her presence at Netherfield also provides the context for Elizabeth\'s extended stay and her growing relationship with Darcy.',
      keyTrait: {
        emoji: '💚',
        text: 'Genuinely Good'
      }
    },
    {
      name: 'Mr. Bingley',
      development: 'Bingley\'s genuine care for Jane and his appreciation for Elizabeth\'s intellectual abilities reveal his authentic character. He\'s not concerned with social propriety but with genuine care and concern. His behavior toward Elizabeth shows his open-mindedness and his ability to appreciate qualities that others might dismiss. Bingley\'s character establishes him as someone who values authentic relationships over social strategy, making him a suitable partner for Jane and a contrast to his more calculating sister. His genuine nature will be crucial to the eventual resolution of the novel.',
      keyTrait: {
        emoji: '🤝',
        text: 'Genuinely Supportive'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'Elizabeth was delighted. She had never been more at a loss to make out a character in her life.',
      analysis: 'Elizabeth\'s confusion about Darcy\'s character reveals her growing awareness that he\'s more complex than she initially thought. Her inability to "make out a character" shows that her prejudice is beginning to be challenged by his actions and conversations. This moment represents the beginning of her journey toward understanding Darcy\'s true nature, though she\'s not yet ready to admit that her initial judgment might be wrong. Her confusion is actually a sign of growth, as she\'s beginning to see beyond her initial prejudice.'
    },
    {
      text: 'Mr. Darcy had never been so bewitched by any woman as he was by her. He really believed, that were it not for the inferiority of her connections, he would be in some danger.',
      analysis: 'This internal reflection reveals Darcy\'s growing attraction to Elizabeth and his struggle with his own prejudices. His admission that he\'s "bewitched" by her shows that his initial dismissive judgment is being completely overturned by her character and intelligence. However, his concern about "the inferiority of her connections" reveals that he\'s still trapped by social prejudices, setting up the internal conflict that will drive his character development. This moment shows the power of intellectual attraction to overcome initial prejudice.'
    },
    {
      text: 'Elizabeth was excessively disappointed. She had set her heart on seeing Netherfield and its grounds, and had been looking forward to it with great pleasure.',
      analysis: 'Elizabeth\'s disappointment about not being able to see Netherfield reveals her curiosity and her desire to understand the world beyond her immediate experience. Her interest in seeing the estate shows her intelligence and her willingness to engage with new experiences. This moment also foreshadows her eventual visit to Pemberley, where she will see Darcy\'s true character reflected in his home and his treatment of his servants. Her curiosity about Netherfield represents her growing interest in understanding Darcy\'s world.'
    },
    {
      text: 'Caroline Bingley was quite as much interested as ever, and quite as ready to make herself agreeable to him.',
      analysis: 'This observation about Caroline Bingley reveals her continued efforts to attract Darcy\'s attention and her inability to see that his interest has shifted to Elizabeth. Her persistence in trying to please him shows her social climbing nature and her lack of understanding of authentic relationships. This moment establishes Caroline as an antagonist whose calculated behavior contrasts with Elizabeth\'s authentic intelligence. Her inability to see Darcy\'s growing interest in Elizabeth shows her lack of emotional intelligence.'
    },
    {
      text: 'Elizabeth could not help observing how frequently Mr. Darcy\'s eyes were fixed on her. She hardly knew how to suppose that she could be an object of admiration to so great a man.',
      analysis: 'Elizabeth\'s observation of Darcy\'s attention reveals her growing awareness of his interest, but her inability to believe that she could be "an object of admiration to so great a man" shows her own insecurity and her acceptance of social hierarchy. This moment shows how social prejudice can affect even intelligent people, making them doubt their own worth. Elizabeth\'s confusion about Darcy\'s attention represents the beginning of her journey toward understanding her own value and his true character.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Literature as a Bridge Between People',
        explanation: 'This chapter establishes literature as a powerful force that can bring people together across social barriers. Elizabeth and Darcy\'s shared love of reading creates a deep connection that transcends their initial prejudices and social differences. Their mutual appreciation for quality literature becomes a bond that draws them closer together, allowing them to connect intellectually despite their social positions. Austen suggests that shared intellectual pursuits, particularly literature, can create lasting relationships based on mutual respect and understanding.'
      },
      {
        name: 'Authentic vs. Calculated Intellectual Engagement',
        explanation: 'The contrast between Elizabeth\'s genuine love of literature and Caroline Bingley\'s calculated attempts to impress Darcy through her reading habits reveals the difference between authentic intellectual engagement and social performance. Elizabeth reads for intellectual pleasure and personal growth, while Caroline reads to gain social advantage and attract Darcy\'s attention. Austen uses this contrast to critique the artificiality of social performance while celebrating authentic intellectual engagement.'
      },
      {
        name: 'The Power of Shared Intellectual Pursuits',
        explanation: 'Elizabeth and Darcy\'s shared love of literature becomes another foundation of their relationship, showing how intellectual compatibility can create deep romantic connections. Their literary discussions reveal their mutual intelligence and their ability to appreciate complex ideas. This shared intellectual pursuit becomes a form of courtship that builds emotional connection through mutual respect and understanding. Austen celebrates the power of shared intellectual pursuits to create meaningful relationships.'
      },
      {
        name: 'Intellectual Inadequacy Exposed',
        explanation: 'Caroline Bingley\'s attempts to compete with Elizabeth through her reading habits expose her intellectual inadequacy and her reliance on social strategy. Her calculated efforts to impress Darcy by reading the same books as Elizabeth reveal her lack of genuine intellectual curiosity and her inability to engage authentically with literature. Austen uses Caroline\'s failure to compete intellectually with Elizabeth to highlight the contrast between genuine intellectual ability and calculated social performance.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Literature as Character Revelation',
        explanation: 'Austen uses characters\' reading choices and literary preferences to reveal their true nature and values. Elizabeth and Darcy\'s appreciation for quality literature shows their intellectual depth and their ability to engage with complex ideas. Caroline Bingley\'s attempts to mimic their reading choices reveal her lack of genuine intellectual curiosity and her reliance on social strategy. This technique allows Austen to reveal character through intellectual pursuits rather than through description or dialogue.',
        example: 'Elizabeth\'s genuine love of literature reveals her authentic intellectual curiosity, while Caroline\'s calculated attempts to read the same books expose her lack of genuine intellectual engagement.'
      },
      {
        name: 'Literary Courtship',
        explanation: 'Austen develops the theme of literary courtship through Elizabeth and Darcy\'s conversations about literature. Their shared love of reading becomes another form of courtship that reveals their intellectual compatibility and builds emotional connection. This technique shows how two people can find each other through their mutual appreciation for literature and ideas, suggesting that intellectual compatibility is essential for lasting relationships.',
        example: 'Elizabeth and Darcy\'s discussions about poetry become a form of literary courtship, with each trying to impress the other through their literary knowledge and insights.'
      },
      {
        name: 'The Contrast Between Authentic and Calculated Behavior',
        explanation: 'Austen uses the contrast between Elizabeth\'s genuine intellectual engagement and Caroline Bingley\'s calculated social performance to develop themes about authenticity versus artificiality. Elizabeth\'s authentic love of literature cannot be replicated through social strategy, while Caroline\'s calculated attempts to compete intellectually expose her inadequacy. This technique allows Austen to critique social performance while celebrating authentic intellectual engagement.',
        example: 'Elizabeth\'s genuine passion for literature contrasts with Caroline\'s calculated attempts to impress Darcy through her reading habits, highlighting the difference between authentic intellectual engagement and social performance.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a modern scenario where two people meet at a bookstore or literary event. Initially, they have negative first impressions of each other—one seems arrogant and dismissive, the other seems overly critical and judgmental. But during extended conversations about books, poetry, and literature, they discover their shared love of reading and their mutual appreciation for quality literature. Their literary discussions become increasingly engaging, and they find themselves drawn to each other\'s minds despite their initial prejudices. Meanwhile, a third person who had been trying to attract one of them becomes increasingly jealous and attempts to compete by reading the same books, but their calculated efforts expose their lack of genuine intellectual curiosity.',
    
    parallels: [
      '🔹 **Book Clubs and Literary Communities**: Elizabeth and Darcy\'s shared love of literature parallels how people today often connect through book clubs, literary events, and shared reading interests. Their literary discussions represent the kind of intellectual connection that can develop when two people discover their mutual appreciation for quality literature.',
      '🔹 **The Power of Shared Reading**: Their conversations about books and poetry parallel how people today often form deeper connections through shared reading experiences and literary discussions. Their mutual appreciation for literature represents the kind of intellectual bonding that can create lasting relationships.',
      '🔹 **Authentic vs. Calculated Reading**: Elizabeth\'s genuine love of literature contrasts with Caroline Bingley\'s calculated attempts to impress Darcy through her reading habits, paralleling how people today often distinguish between genuine intellectual curiosity and reading performed for social advantage or to impress others.',
      '🔹 **Literature as Character Revelation**: Their literary preferences reveal their true characters, paralleling how people today often judge others by their reading choices and intellectual interests. Their appreciation for quality literature represents the kind of intellectual depth that can attract like-minded people.',
      '🔹 **Intellectual Courtship Through Books**: Their literary discussions become a form of courtship, paralleling how people today often use shared interests in books and literature to build romantic connections. Their mutual appreciation for literature represents the kind of intellectual compatibility that can create lasting relationships.'
    ],
    
    discussionPrompt: 'Think about times when you\'ve connected with someone through shared love of books or literature. How do literary discussions create deeper connections? What role does shared reading play in relationships? And how do we distinguish between genuine intellectual curiosity and reading performed for social advantage?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '📚',
      name: 'Literature as a Bridge Between People',
      explanation: 'This chapter establishes literature as a powerful force that can bring people together across social barriers. Elizabeth and Darcy\'s shared love of reading creates a deep connection that transcends their initial prejudices and social differences. This theme will be crucial to their eventual understanding and love.'
    },
    {
      emoji: '🎭',
      name: 'Authentic vs. Calculated Intellectual Engagement',
      explanation: 'The contrast between Elizabeth\'s genuine love of literature and Caroline Bingley\'s calculated attempts to impress Darcy through her reading habits reveals the difference between authentic intellectual engagement and social performance. This theme will be explored throughout the novel as Austen examines what makes intellectual pursuits meaningful.'
    },
    {
      emoji: '🧠',
      name: 'The Power of Shared Intellectual Pursuits',
      explanation: 'Elizabeth and Darcy\'s shared love of literature becomes another foundation of their relationship, showing how intellectual compatibility can create deep romantic connections. This theme will be crucial to their eventual understanding and love.'
    },
    {
      emoji: '👁️',
      name: 'Intellectual Inadequacy Exposed',
      explanation: 'Caroline Bingley\'s attempts to compete with Elizabeth through her reading habits expose her intellectual inadequacy and her reliance on social strategy. This theme will be explored throughout the novel as Austen examines how attempts to compete intellectually can expose our own inadequacies.'
    },
    {
      emoji: '💬',
      name: 'The Power of Conversation',
      explanation: 'This chapter showcases Austen\'s mastery of dialogue as a tool for character development and relationship building. Through their conversations about literature, Elizabeth and Darcy reveal their true characters and build emotional connection. The novel will explore how meaningful dialogue can create lasting relationships.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Literature as Connection',
      question: 'Elizabeth and Darcy\'s shared love of literature creates a deep connection between them. How do shared intellectual pursuits bring people together? What role does literature play in building relationships?'
    },
    {
      title: 'Authentic vs. Calculated Reading',
      question: 'Elizabeth reads for intellectual pleasure, while Caroline reads to impress Darcy. How do we distinguish between genuine intellectual curiosity and reading performed for social advantage? What makes reading authentic?'
    },
    {
      title: 'The Power of Shared Reading',
      question: 'Their literary discussions become a form of courtship. How do shared reading experiences create deeper connections? What role does literature play in romantic relationships?'
    },
    {
      title: 'Intellectual Competition',
      question: 'Caroline\'s attempts to compete with Elizabeth through her reading habits expose her inadequacy. How do we compete intellectually without losing our authenticity? What does it mean to engage with literature genuinely?'
    },
    {
      title: 'Literature as Character Revelation',
      question: 'Their literary preferences reveal their true characters. How do reading choices reflect our values and personality? What can we learn about people from their relationship with books?'
    },
    {
      title: 'The Value of Intellectual Pursuits',
      question: 'Their shared love of literature becomes another bond between them. How important are shared intellectual pursuits in relationships? What role does literature play in human connection?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'literature-as-a-bridge-between-people',
      title: 'The Power of the Page: How Literature Creates Human Connection',
      question: 'How does Austen use Elizabeth and Darcy\'s shared love of literature to show how books and reading can bring people together across social barriers and initial prejudices?',
      aiResponse: `
**The Literary Bridge: How Books Connect Hearts and Minds**

Austen's exploration of Elizabeth and Darcy's shared love of literature reveals a sophisticated understanding of how literature can serve as a bridge between people, transcending social barriers and initial prejudices. This chapter establishes literature as a powerful force that can create deep human connections based on mutual appreciation for ideas and knowledge.

**The Nature of Literary Connection:**

**Shared Intellectual Pursuits:**
Elizabeth and Darcy's literary bond reveals:
- Their mutual appreciation for quality literature
- Their ability to engage with complex ideas
- Their shared intellectual curiosity
- Their capacity for sophisticated literary analysis

**The Transcendence of Social Barriers:**
Their literary connection allows them to:
- Connect intellectually despite social differences
- Find common ground in their love of reading
- Build emotional connection through shared interests
- Transcend their initial prejudices through mutual respect

**The Power of Literature:**

**Literature as Character Revelation:**
Their literary preferences reveal:
- Elizabeth's genuine intellectual curiosity
- Darcy's appreciation for quality and depth
- Their mutual intelligence and sophistication
- Their ability to engage authentically with ideas

**Literature as Courtship:**
Their literary discussions become:
- A form of courtship through shared interests
- A way of exploring their intellectual compatibility
- A means of building emotional connection
- A method of revealing their true characters

**The Social Commentary:**

**Austen's Progressive Message:**
Austen challenges traditional notions of social hierarchy by suggesting:
- Intellectual compatibility can overcome social barriers
- Shared interests create deeper connections than social position
- Literature can bring people together across class lines
- True connection is based on mutual respect and understanding

**The Contrast with Social Strategy:**
Elizabeth's genuine love of literature contrasts with:
- Caroline Bingley's calculated reading habits
- Social performance through intellectual pursuits
- Artificial relationships based on advantage
- Superficial connections without substance

**The Modern Relevance:**

**Literature in Contemporary Life:**
Today we see similar patterns:
- Book clubs and literary communities bring people together
- Shared reading experiences create deeper connections
- Literature can transcend social and cultural barriers
- Intellectual pursuits create meaningful relationships

**The Digital Age:**
In our connected world:
- Online book communities connect readers globally
- Shared reading experiences transcend physical distance
- Literature can bridge cultural and linguistic barriers
- Intellectual engagement creates lasting connections

**The Workplace:**
In professional settings:
- Shared intellectual interests create strong bonds
- Literature can bring colleagues together
- Intellectual engagement enhances collaboration
- Mutual respect for ideas fosters lasting partnerships

**The Psychological Insight:**

**Austen's Understanding:**
Austen shows remarkable insight into:
- How shared interests create emotional connection
- How literature can transcend social barriers
- How intellectual compatibility builds relationships
- How authentic engagement with ideas attracts others

**The Character Development:**

**Elizabeth's Literary Appeal:**
This chapter establishes Elizabeth as:
- Someone whose genuine love of literature is attractive
- A person who can connect intellectually with anyone
- A character who values authentic intellectual engagement
- A heroine who represents the power of literature to connect people

**Darcy's Literary Sophistication:**
Darcy's character development shows:
- His genuine appreciation for quality literature
- His ability to engage intellectually with Elizabeth
- His growing respect for her literary insights
- His capacity for authentic intellectual connection

**The Broader Message:**

**Austen's Vision:**
Austen offers a vision of:
- Relationships built through shared intellectual pursuits
- Connection that transcends social barriers
- Love that grows from mutual respect and understanding
- Human connection based on authentic engagement with ideas

**The Challenge:**

**Choosing Intellectual Connection:**
Elizabeth and Darcy's choice represents:
- The courage to value intellectual compatibility over social advantage
- The willingness to engage authentically with literature
- The strength to connect across social barriers
- The commitment to building relationships based on mutual respect

**The Cost:**
Literary connection can be challenging:
- It requires intellectual engagement and effort
- It may challenge our assumptions and beliefs
- It can be intimidating for those who lack confidence
- It may not be understood by others who value different qualities

**The Reward:**
But literary connection brings:
- Deeper emotional connection
- Lasting intellectual stimulation
- Mutual respect and understanding
- Relationships based on authentic compatibility

**For Discussion:**

How do shared intellectual pursuits bring people together? What role does literature play in building relationships? How can literature transcend social barriers? What makes literary connection meaningful?

**Austen's Message:**

Literature can bring people together across social barriers. Shared intellectual pursuits create deeper connections than social position. True connection is based on mutual respect and understanding, expressed through authentic engagement with ideas. The power of literature lies in its ability to create human connection through shared appreciation for knowledge and beauty.

**The Choice:**

What will we choose? Will we value intellectual compatibility over social advantage? Will we seek shared intellectual pursuits in our relationships? Will we engage authentically with literature and ideas? Will we build connections based on mutual respect and understanding?

**The Hope:**

Austen offers hope that literature can triumph over social barriers. Through Elizabeth and Darcy's example, she shows that shared intellectual pursuits can create lasting relationships based on mutual respect and understanding. The key is valuing literature and seeking authentic intellectual engagement in our connections with others.

**The Challenge:**

Can we learn to value literary connection? Can we seek shared intellectual pursuits in our relationships? Can we engage authentically with literature and ideas? Can we build connections based on mutual respect and understanding?

**The Reward:**

When we choose literary connection, we create:
- Deeper emotional connections
- Lasting intellectual stimulation
- Mutual respect and understanding
- Relationships based on authentic compatibility
- A life enriched by literature and ideas

Austen's message is clear: literature is a powerful bridge between people, and shared intellectual pursuits are the foundation of meaningful human connection.
      `
    },
    {
      id: 'authentic-vs-calculated-intellectual-engagement',
      title: 'The Authenticity Test: How Reading Reveals True Character',
      question: 'How does Austen use the contrast between Elizabeth\'s genuine love of literature and Caroline Bingley\'s calculated attempts to impress Darcy through her reading habits to explore the difference between authentic intellectual engagement and social performance?',
      aiResponse: `
**The Authenticity Test: How Reading Choices Reveal True Character**

Austen's exploration of the contrast between Elizabeth's genuine love of literature and Caroline Bingley's calculated attempts to impress Darcy through her reading habits reveals a sophisticated understanding of how intellectual pursuits can expose true character. This chapter establishes literature as a test of authenticity, showing how genuine engagement with ideas cannot be replicated through social strategy.

**The Nature of Authentic Reading:**

**Elizabeth's Genuine Engagement:**
Elizabeth's relationship with literature reveals:
- Her authentic intellectual curiosity
- Her reading for personal pleasure and growth
- Her ability to engage deeply with complex ideas
- Her natural appreciation for quality literature

**The Motivation Behind Reading:**
Elizabeth reads because:
- She genuinely enjoys literature
- She seeks intellectual stimulation
- She values knowledge and understanding
- She finds meaning in great works

**The Nature of Calculated Reading:**

**Caroline's Calculated Approach:**
Caroline's relationship with literature reveals:
- Her lack of genuine intellectual curiosity
- Her reading for social advantage and impression
- Her inability to engage authentically with ideas
- Her reliance on social strategy rather than authentic engagement

**The Motivation Behind Reading:**
Caroline reads because:
- She wants to impress Darcy
- She seeks social advantage
- She tries to compete with Elizabeth
- She lacks genuine intellectual curiosity

**The Character Revelation:**

**Literature as Character Test:**
Their reading choices reveal:
- Elizabeth's authentic intellectual character
- Caroline's calculated social nature
- The difference between genuine and artificial engagement
- The inability to fake authentic intellectual curiosity

**The Social Commentary:**

**Austen's Critique:**
Austen uses this contrast to critique:
- The artificiality of social performance
- The emptiness of calculated intellectual pursuits
- The superiority of authentic engagement
- The futility of trying to compete with genuine qualities

**The Modern Relevance:**

**Authentic vs. Calculated Reading Today:**
In contemporary life:
- People often read to impress others or gain social advantage
- Social media creates pressure to perform intellectual interests
- Authentic reading for pleasure is often undervalued
- Calculated reading for social benefit is common

**The Digital Age:**
In our connected world:
- People often share reading lists to impress others
- Social media creates pressure to read "impressive" books
- Authentic reading for personal growth is often overlooked
- Calculated reading for social media content is prevalent

**The Workplace:**
In professional settings:
- People often read to advance their careers
- Calculated reading for professional advantage is common
- Authentic reading for personal growth is often undervalued
- Intellectual performance for social benefit is prevalent

**The Psychological Insight:**

**Austen's Understanding:**
Austen shows remarkable insight into:
- How reading choices reveal true character
- How authentic engagement cannot be replicated
- How calculated behavior exposes inadequacy
- How genuine intellectual curiosity attracts others

**The Character Development:**

**Elizabeth's Authentic Appeal:**
This chapter establishes Elizabeth as:
- Someone whose genuine love of literature is attractive
- A person who reads for authentic reasons
- A character who values intellectual growth
- A heroine who represents authentic engagement

**Caroline's Calculated Failure:**
Caroline's character development shows:
- Her inability to compete with Elizabeth's authenticity
- Her reliance on social strategy rather than genuine engagement
- Her lack of authentic intellectual curiosity
- Her failure to understand what makes Elizabeth attractive

**The Broader Message:**

**Austen's Vision:**
Austen offers a vision of:
- Authentic intellectual engagement over calculated performance
- Genuine reading for personal growth over social advantage
- True character revealed through authentic pursuits
- Human connection based on authentic engagement

**The Challenge:**

**Choosing Authentic Engagement:**
Elizabeth's choice represents:
- The courage to read for personal pleasure
- The willingness to engage authentically with ideas
- The strength to value intellectual growth over social advantage
- The commitment to authentic intellectual pursuits

**The Cost:**
Authentic reading can be challenging:
- It requires genuine intellectual curiosity
- It may not provide immediate social benefits
- It can be intimidating for those who lack confidence
- It may not be understood by others who value different pursuits

**The Reward:**
But authentic reading brings:
- Genuine intellectual growth
- Personal satisfaction and meaning
- Authentic human connection
- Lasting intellectual stimulation

**For Discussion:**

How do we distinguish between authentic and calculated reading? What makes reading genuine? How do reading choices reveal character? What role does authentic intellectual engagement play in relationships?

**Austen's Message:**

Authentic intellectual engagement cannot be replicated through social strategy. Genuine reading for personal growth is more valuable than calculated reading for social advantage. True character is revealed through authentic pursuits, and human connection is built on genuine engagement with ideas.

**The Choice:**

What will we choose? Will we read for authentic reasons or calculated ones? Will we engage genuinely with ideas or perform intellectually for social benefit? Will we value personal growth or social advantage? Will we build connections based on authentic engagement or calculated performance?

**The Hope:**

Austen offers hope that authentic engagement can triumph over calculated performance. Through Elizabeth's example, she shows that genuine intellectual curiosity and authentic reading can create meaningful relationships based on mutual respect and understanding. The key is choosing authenticity over calculation.

**The Challenge:**

Can we learn to read authentically? Can we engage genuinely with ideas? Can we value personal growth over social advantage? Can we build connections based on authentic engagement?

**The Reward:**

When we choose authentic engagement, we create:
- Genuine intellectual growth
- Personal satisfaction and meaning
- Authentic human connections
- Lasting intellectual stimulation
- A life built on authentic values

Austen's message is clear: authentic intellectual engagement is more valuable than calculated performance, and genuine reading for personal growth is the foundation of meaningful human connection.
      `
    },
    {
      id: 'the-power-of-shared-intellectual-pursuits',
      title: 'The Intellectual Bond: How Shared Pursuits Create Lasting Connection',
      question: 'How does Austen use Elizabeth and Darcy\'s shared love of literature to demonstrate how intellectual compatibility can create deep romantic connections that transcend social barriers and initial prejudices?',
      aiResponse: `
**The Intellectual Bond: How Shared Pursuits Create Lasting Connection**

Austen's exploration of Elizabeth and Darcy's shared love of literature reveals a sophisticated understanding of how intellectual compatibility can create deep romantic connections that transcend social barriers and initial prejudices. This chapter establishes shared intellectual pursuits as a powerful foundation for lasting relationships based on mutual respect and understanding.

**The Nature of Intellectual Compatibility:**

**Shared Intellectual Interests:**
Elizabeth and Darcy's literary bond reveals:
- Their mutual appreciation for quality literature
- Their ability to engage with complex ideas
- Their shared intellectual curiosity
- Their capacity for sophisticated literary analysis

**The Emotional Connection:**
Their intellectual compatibility creates:
- Deep emotional bonding through shared interests
- Mutual respect for each other's intellectual abilities
- Growing attraction based on mental compatibility
- Lasting connection through intellectual engagement

**The Transcendence of Social Barriers:**

**Literature as Equalizer:**
Their shared love of reading allows them to:
- Connect intellectually despite social differences
- Find common ground in their intellectual pursuits
- Build emotional connection through shared interests
- Transcend their initial prejudices through mutual respect

**The Power of Shared Pursuits:**
Their intellectual compatibility enables them to:
- Overcome social hierarchy through mutual respect
- Build relationships based on mental compatibility
- Create lasting connections through shared interests
- Find love through intellectual engagement

**The Social Commentary:**

**Austen's Progressive Message:**
Austen challenges traditional notions of romantic attraction by suggesting:
- Intellectual compatibility is more important than social position
- Shared interests create deeper connections than social advantage
- Mental compatibility can overcome social barriers
- True love is based on mutual respect and understanding

**The Contrast with Social Strategy:**
Elizabeth and Darcy's intellectual bond contrasts with:
- Caroline Bingley's calculated attempts to compete
- Relationships based on social advantage
- Artificial connections without substance
- Superficial attractions without depth

**The Modern Relevance:**

**Intellectual Compatibility Today:**
In contemporary relationships:
- People often value intellectual compatibility
- Shared interests create deeper connections
- Mental stimulation enhances relationships
- Intellectual engagement builds lasting bonds

**The Digital Age:**
In our connected world:
- Online communities connect people through shared interests
- Intellectual pursuits transcend physical distance
- Mental compatibility can be discovered through digital interaction
- Shared interests create meaningful connections

**The Workplace:**
In professional settings:
- Intellectual collaboration creates strong bonds
- Shared interests enhance working relationships
- Mental compatibility improves teamwork
- Intellectual engagement fosters lasting partnerships

**The Psychological Insight:**

**Austen's Understanding:**
Austen shows remarkable insight into:
- How intellectual compatibility creates romantic attraction
- How shared interests build emotional connection
- How mental stimulation enhances relationships
- How intellectual engagement transcends social barriers

**The Character Development:**

**Elizabeth's Intellectual Appeal:**
This chapter establishes Elizabeth as:
- Someone whose intellectual abilities are attractive
- A person who can connect mentally with anyone
- A character who values intellectual compatibility
- A heroine who represents the power of shared intellectual pursuits

**Darcy's Intellectual Sophistication:**
Darcy's character development shows:
- His growing appreciation for Elizabeth's intellectual abilities
- His ability to connect intellectually with her
- His respect for her mental capabilities
- His capacity for intellectual romantic connection

**The Broader Message:**

**Austen's Vision:**
Austen offers a vision of:
- Relationships built through intellectual compatibility
- Love that grows from shared intellectual pursuits
- Connection that transcends social barriers
- Human relationships based on mutual respect and understanding

**The Challenge:**

**Choosing Intellectual Compatibility:**
Elizabeth and Darcy's choice represents:
- The courage to value mental compatibility over social advantage
- The willingness to engage intellectually with others
- The strength to connect across social barriers
- The commitment to building relationships based on mutual respect

**The Cost:**
Intellectual compatibility can be challenging:
- It requires mental engagement and effort
- It may challenge our assumptions and beliefs
- It can be intimidating for those who lack confidence
- It may not be understood by others who value different qualities

**The Reward:**
But intellectual compatibility brings:
- Deeper emotional connection
- Lasting mental stimulation
- Mutual respect and understanding
- Relationships based on authentic compatibility

**For Discussion:**

How important is intellectual compatibility in relationships? What role do shared interests play in creating lasting connections? How can intellectual pursuits transcend social barriers? What makes intellectual compatibility attractive?

**Austen's Message:**

Intellectual compatibility is essential for lasting relationships. Shared interests create deeper connections than social position. Mental compatibility can overcome social barriers and initial prejudices. True love is built on mutual respect and understanding, expressed through shared intellectual pursuits.

**The Choice:**

What will we choose? Will we value intellectual compatibility over social advantage? Will we seek shared intellectual pursuits in our relationships? Will we engage mentally with others? Will we build connections based on mutual respect and understanding?

**The Hope:**

Austen offers hope that intellectual compatibility can triumph over social barriers. Through Elizabeth and Darcy's example, she shows that shared intellectual pursuits can create lasting relationships based on mutual respect and understanding. The key is valuing intellectual compatibility and seeking shared interests in our connections with others.

**The Challenge:**

Can we learn to value intellectual compatibility? Can we seek shared intellectual pursuits in our relationships? Can we engage mentally with others? Can we build connections based on mutual respect and understanding?

**The Reward:**

When we choose intellectual compatibility, we create:
- Deeper emotional connections
- Lasting mental stimulation
- Mutual respect and understanding
- Relationships based on authentic compatibility
- A life enriched by intellectual engagement

Austen's message is clear: intellectual compatibility is the foundation of lasting relationships, and shared intellectual pursuits are the key to meaningful human connection.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Literature as Character Revelation: Show Character Through Reading Choices',
      description: 'Write a 2-3 page scene where characters\' reading choices and literary preferences reveal their true nature and values. Focus on showing character through what people read, how they engage with literature, and what their reading habits reveal about them. Like Austen, use literature as a tool for character revelation rather than description. Avoid telling the reader what characters are like—show it through their relationship with books and ideas. Then, write a second scene where the same characters discuss literature, revealing another aspect of their relationship through their literary conversation.',
      purpose: 'This exercise teaches students to reveal character through intellectual pursuits rather than description, practice "show don\'t tell" writing, and understand how literature can be used as a tool for character development. Students learn to create authentic characters whose true nature is revealed through their relationship with books and ideas.'
    },
    
    activity: {
      title: 'Literary Courtship: A Reading-Based Activity',
      description: 'Divide the class into pairs and assign each pair a different literary work (poem, short story, or novel excerpt). Have each pair read their assigned work and then engage in a 15-minute literary discussion about themes, characters, and meaning. After the discussions, have pairs share what they learned about their partner through their literary conversation. Discuss: How did the literary discussion reveal character? What did you learn about your partner through their engagement with literature? How did the shared reading experience affect your relationship? Connect this to the chapter and discuss how Austen uses literature to build relationships.',
      materials: 'Literary works, discussion guidelines, reflection questions, character analysis sheets'
    },
    
    crossCurricular: {
      title: 'Literature and Psychology: The Science of Reading and Character',
      description: 'Partner with psychology teachers for an interdisciplinary unit on reading, character, and human psychology. Psychology class covers how reading choices reveal personality, the psychology of intellectual attraction, and the science of shared interests in relationship building. English class reads this chapter and analyzes Austen\'s insights into human nature and literature. Students synthesize: How does Austen\'s understanding of literature and character compare to modern psychological knowledge? What can literature teach us about the power of reading to reveal character?',
      subjects: ['Psychology', 'Cognitive Psychology', 'Literary Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'The Ethics of Intellectual Competition: When Does Literary Discussion Become Manipulation?',
    prompt: 'Analyze Elizabeth and Darcy\'s literary conversations through the lens of ethical communication and relationship building. They engage in literary discussions that become a form of courtship, using their shared love of literature to build emotional connection. Your task: Construct an ethical framework for understanding when intellectual competition enhances relationships versus when it becomes manipulative or harmful. Then apply that framework to evaluate their literary discussions and their impact on their relationship.',
    
    guidingQuestions: [
      'What is the difference between healthy intellectual competition and manipulative literary discussion? When does sharing literary interests become a form of social manipulation? How do we balance intellectual engagement with emotional consideration?',
      'Elizabeth and Darcy\'s literary conversations affect not just themselves but also Caroline Bingley, who becomes increasingly jealous and attempts to compete. How do intellectual competitions impact third parties? What responsibility do we have for the emotional consequences of our intellectual interactions?',
      'Elizabeth\'s genuine love of literature becomes her most attractive quality to Darcy, while Caroline Bingley\'s calculated attempts to compete fail. How do we balance different forms of intellectual attraction and competition? When is it appropriate to use our literary knowledge to gain advantage in relationships?',
      'Their literary courtship ultimately leads to deeper understanding and eventual love. Does the end justify the means? How do we evaluate intellectual competition when the outcomes are uncertain or potentially harmful?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down Elizabeth and Darcy\'s literary conversations: What exactly do they discuss? What are their motivations? How do they use literature to connect? What are the consequences? How do their conversations affect others? Map the ethical considerations involved.',
      evaluate: 'Using your ethical framework, assess their literary discussions. Consider: respect vs. competition, individual vs. social impact, short-term vs. long-term effects, intention vs. outcome. Are their literary conversations justified by their motivations? Does the outcome validate their approach?',
      synthesize: 'Connect this analysis to contemporary situations where people engage in intellectual competition through literature. What patterns do you see? What principles can we extract about ethical intellectual engagement? How do we balance mental stimulation with emotional consideration?'
    },
    
    expectedDepth: 'Strong responses will: (1) Articulate a clear ethical framework with defined criteria for evaluating intellectual competition; (2) Apply that framework consistently to Elizabeth and Darcy\'s literary conversations; (3) Acknowledge complexity—there may be multiple valid perspectives on the same situation; (4) Use specific textual evidence; (5) Connect the historical context (social conventions in Regency England) to modern parallels; (6) Demonstrate awareness that ethical questions about intellectual competition rarely have simple answers but require nuanced analysis. This is a philosophical analysis using literature as case study.',
    
    classroomApplication: 'This can work as: Individual analytical essay (3-4 pages), Socratic seminar with structured debate, Group project where different groups defend different perspectives on literary competition, Mock trial where Elizabeth and Darcy are "prosecuted" for their literary courtship (students argue both sides). Time required: 2-3 class periods (one for initial analysis, one for discussion/debate, one for writing/synthesis). Works well as capstone assessment for themes of literature, intellectual attraction, and ethics in Pride and Prejudice.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(6),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🏠',
    title: 'Next Time: Chapter 7 — Return to Longbourn',
    preview: 'Elizabeth and Jane finally return to Longbourn, bringing with them the experiences and connections formed at Netherfield. The contrast between the intellectual stimulation of Netherfield and the domestic concerns of Longbourn highlights the different worlds Elizabeth inhabits.',
    hookQuestion: 'What happens when Elizabeth returns to her family after experiencing the intellectual stimulation of Netherfield? How will her time with Darcy affect her relationships at home? And what new challenges will she face in her familiar world?'
  }
}
