/**
 * PRIDE AND PREJUDICE - CHAPTER 1
 * 
 * The famous opening: Mr. Bingley arrives at Netherfield Park
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter1: ChapterData = {
  // ==========================================
  // BASIC INFO
  // ==========================================
  number: 1,
  title: '', // Pride and Prejudice chapters don't have titles
  
  readingTime: 8,
  pages: 4,
  
  // ==========================================
  // SERIES OPENING (Chapter 1 Only)
  // ==========================================
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
  
  // ==========================================
  // CHAPTER SUMMARY
  // ==========================================
  summary: {
    brief: 'Mrs. Bennet excitedly announces that wealthy bachelor Mr. Bingley has rented Netherfield Park, launching her determined campaign to marry off one of her five daughters while Mr. Bennet teases her mercilessly about her "poor nerves" and matchmaking schemes.',
    
    full: [
      'Chapter 1 opens with one of the most famous lines in English literature: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." This ironic statement immediately establishes Austen\'s satirical tone and introduces the central theme of marriage as economic necessity. Mrs. Bennet, the mother of five unmarried daughters, has just learned that wealthy bachelor Mr. Charles Bingley has rented Netherfield Park, a nearby estate. She is ecstatic about this opportunity to introduce her daughters to a potential husband.',
      
      'The chapter consists almost entirely of dialogue between Mr. and Mrs. Bennet, using their conversation to reveal their personalities, values, and marital dynamic. Mrs. Bennet\'s excited, repetitive speech patterns reveal her desperation and social ambition, while Mr. Bennet\'s sardonic responses show his wit and emotional detachment. Their contrasting communication styles establish the fundamental incompatibility of their marriage—she is all emotion and urgency, he is all irony and distance.',
      
      'Mrs. Bennet immediately focuses on Bingley\'s wealth ("four or five thousand a year") and marital status, treating him as a commodity to be acquired rather than a person to be known. Her excitement about "What a fine thing for our girls!" reduces marriage to economic transaction—the girls\' happiness matters less than their financial security. Austen uses this dialogue to expose how the marriage market dehumanizes both men and women, turning relationships into business deals.',
      
      'Mr. Bennet\'s response to his wife\'s enthusiasm reveals his character: he teases her about her "poor nerves" and pretends indifference to Bingley\'s arrival, though he will later reveal he has already visited the newcomer. His mockery of Mrs. Bennet\'s anxiety shows both his wit and his cruelty—he enjoys watching her distress while maintaining emotional distance from family concerns. This establishes the pattern of their relationship: he uses humor to avoid responsibility, she uses emotion to manipulate situations.',
      
      'The chapter masterfully establishes the novel\'s central themes: the intersection of love and money in marriage, the pressure on women to secure financial futures through strategic relationships, the gap between appearance and reality in social interactions, and the role of wit and irony in navigating social constraints. Austen introduces her critique of the marriage market while appearing to endorse its values—a technique she\'ll use throughout the novel. The chapter establishes the Bennets as both comic relief and social commentary: their dysfunctional marriage represents the broader dysfunction of a system that treats marriage as purely economic.'
    ]
  },
  
  // ==========================================
  // TERMS TO KNOW
  // ==========================================
  termsToKnow: [
    {
      term: 'Comedy of Manners',
      definition: 'A literary genre that satirizes the manners and affectations of a social class, often focusing on the gap between appearance and reality in social interactions.',
      context: 'Pride and Prejudice is a classic comedy of manners—Austen exposes the artificiality and hypocrisy of Regency society through witty dialogue and ironic observation.',
      whyItMatters: 'Understanding this genre helps readers recognize Austen\'s satirical purpose. She\'s not just telling a love story; she\'s critiquing social institutions and human nature through humor and irony.'
    },
    {
      term: 'Irony',
      definition: 'A literary device where the intended meaning is opposite to the literal meaning, often used to highlight contradictions or criticize social norms.',
      context: 'The opening line "It is a truth universally acknowledged" is deeply ironic—Austen immediately reveals this "universal truth" to be false through the novel\'s plot.',
      whyItMatters: 'Austen\'s use of irony is central to her social critique. She appears to endorse conventional wisdom while actually undermining it, forcing readers to think critically about accepted beliefs.'
    },
    {
      term: 'Marriage Market',
      definition: 'The social system in Regency England where marriage was treated as an economic transaction, with women\'s futures dependent on securing wealthy husbands.',
      context: 'Mrs. Bennet\'s excitement about Bingley\'s "four or five thousand a year" exemplifies the marriage market mentality—she evaluates him purely on financial terms.',
      whyItMatters: 'This concept is crucial for understanding the pressure on Austen\'s female characters. Marriage wasn\'t just about love—it was about economic survival and social advancement.'
    },
    {
      term: 'Patriarchy',
      definition: 'A social system in which men hold primary power and authority, particularly in the family and society, and women are largely excluded from power.',
      context: 'Mr. Bennet holds legal and social power over his family, while Mrs. Bennet must manipulate rather than command. The daughters have no inheritance rights and must marry for security.',
      whyItMatters: 'Austen\'s critique of patriarchy is subtle but profound. She shows how women navigate and resist male-dominated systems while appearing to accept them.'
    },
    {
      term: 'Social Class',
      definition: 'The hierarchical division of society based on wealth, birth, occupation, and social status, determining one\'s opportunities and relationships.',
      context: 'The Bennets are "gentry" (landed middle class), while Bingley represents new money. Class determines who can marry whom and what social circles one can enter.',
      whyItMatters: 'Class consciousness permeates every aspect of Regency life. Austen shows how class shapes identity, relationships, and opportunities while critiquing its artificiality.'
    },
    {
      term: 'Satire',
      definition: 'A literary technique that uses humor, irony, and exaggeration to criticize and expose the flaws and vices of individuals, institutions, or society.',
      context: 'Austen satirizes the marriage market, social pretensions, and human nature throughout the novel, using wit to expose serious social problems.',
      whyItMatters: 'Austen\'s satire makes her social critique palatable and entertaining. She uses humor to make readers laugh while making them think about serious issues.'
    }
  ],
  
  // ==========================================
  // CHARACTER DEVELOPMENT
  // ==========================================
  characters: [
    {
      name: 'Mrs. Bennet',
      development: 'The novel\'s most misunderstood character, Mrs. Bennet embodies both the worst aspects of Regency society and its most vulnerable victims. Her obsession with marrying off her daughters stems from genuine economic anxiety—as a woman with no inheritance rights, she knows her daughters\' futures depend entirely on securing wealthy husbands. Her "poor nerves" and emotional volatility are responses to a system that gives her no real power while demanding she manage her family\'s social and economic survival. Her crude, repetitive speech patterns reveal her desperation and lack of education, but also her single-minded focus on her daughters\' welfare. Austen presents her as both comic relief and tragic figure: ridiculous in her methods but justified in her goals. Her marriage to Mr. Bennet represents the failure of the system she\'s trying to navigate—she married for security rather than compatibility, and now must use manipulation to achieve what direct communication cannot.',
      keyTrait: {
        emoji: '💔',
        text: 'Desperate Love'
      }
    },
    {
      name: 'Mr. Bennet',
      development: 'A complex character who embodies both Austen\'s wit and her critique of male privilege. His sardonic humor and emotional detachment from family concerns reveal a man who married unwisely and now uses irony to maintain distance from the consequences. His teasing of Mrs. Bennet about her "poor nerves" shows both his intelligence and his cruelty—he enjoys watching her distress while avoiding responsibility for it. His mockery of her matchmaking schemes reveals his understanding of the marriage market\'s absurdity, but also his unwillingness to engage seriously with his daughters\' futures. He represents the educated, privileged man who can afford to be cynical about social institutions because they don\'t threaten his security. His wit is both his greatest asset and his greatest flaw—it protects him from emotional engagement while alienating him from his family. Austen presents him as sympathetic but flawed: intelligent enough to see the system\'s problems but too comfortable to work for change.',
      keyTrait: {
        emoji: '🎭',
        text: 'Ironic Detachment'
      }
    },
    {
      name: 'Elizabeth Bennet (implied)',
      development: 'Though Elizabeth doesn\'t appear directly in Chapter 1, her presence is felt through her parents\' conversation. Mrs. Bennet\'s reference to "our girls" and Mr. Bennet\'s teasing about their "poor nerves" establishes Elizabeth as one of five daughters whose futures depend on strategic marriages. The chapter sets up Elizabeth\'s central conflict: she must navigate a system that treats marriage as economic necessity while seeking genuine love and compatibility. Her father\'s wit suggests she may inherit his intelligence and skepticism, while her mother\'s desperation shows the pressure she faces. Elizabeth will emerge as Austen\'s ideal heroine: intelligent enough to see through social pretensions, independent enough to resist pressure, but practical enough to understand economic realities. The chapter establishes the world she must navigate—one where women\'s choices are limited by class, gender, and economic dependence.',
      keyTrait: {
        emoji: '⚖️',
        text: 'Balanced Wisdom'
      }
    },
    {
      name: 'Mr. Bingley (mentioned)',
      development: 'The wealthy bachelor whose arrival sets the plot in motion, Bingley represents the new money that threatens traditional class hierarchies. His "four or five thousand a year" makes him an attractive marriage prospect, but his character remains unknown—he\'s treated as a commodity rather than a person. Mrs. Bennet\'s focus on his wealth and marital status reduces him to economic value, while Mr. Bennet\'s mockery of her enthusiasm shows how the marriage market dehumanizes both men and women. Bingley will later prove to be genuinely kind and generous, but in Chapter 1, he\'s merely a symbol of opportunity and social mobility. His arrival represents the possibility of change in a static social system, but also the pressure on women to compete for limited resources. He embodies the intersection of old and new money, tradition and change, that defines Regency society.',
      keyTrait: {
        emoji: '💰',
        text: 'Economic Opportunity'
      }
    }
  ],
  
  // ==========================================
  // KEY QUOTES
  // ==========================================
  quotes: [
    {
      text: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
      analysis: 'The novel\'s famous opening line uses dramatic irony to establish Austen\'s satirical tone. The narrator claims this is "universally acknowledged," but the novel will prove this assumption false—many wealthy men don\'t want wives, and those who do often have very specific requirements. The line also introduces the central theme of marriage as economic necessity rather than romantic fulfillment. The formal, pompous language ("universally acknowledged," "in possession of") satirizes how society elevates marriage to the status of natural law. Austen is setting up her critique of the marriage market while appearing to endorse its values—a technique she\'ll use throughout the novel.'
    },
    {
      text: 'What is his name? "Bingley." Is he married or single? "Oh! single, my dear, to be sure! A single man of large fortune; four or five thousand a year. What a fine thing for our girls!"',
      analysis: 'This exchange reveals Mrs. Bennet\'s priorities and the economic logic of Regency marriage. She immediately focuses on Bingley\'s marital status and income, treating him as a commodity to be acquired rather than a person to be known. Her excitement about "four or five thousand a year" shows how women\'s futures depended entirely on their husbands\' wealth. The phrase "What a fine thing for our girls!" reduces marriage to economic transaction—the girls\' happiness matters less than their financial security. Austen uses this dialogue to expose how the marriage market dehumanizes both men and women, turning relationships into business deals.'
    },
    {
      text: 'You want to tell me, and I have no objection to hearing it.',
      analysis: 'Mr. Bennet\'s response to his wife\'s excitement reveals his character: he\'s intelligent enough to understand her motives but emotionally detached enough to treat her concerns as entertainment. His passive-aggressive phrasing ("I have no objection") shows his unwillingness to engage seriously with family matters. He\'s setting up his wife to perform for him, turning her anxiety into a source of amusement. This establishes the pattern of their relationship: he uses wit to maintain distance while she uses emotion to manipulate situations. His response also shows his understanding of the marriage market\'s absurdity—he can afford to be cynical because he\'s not threatened by it.'
    },
    {
      text: 'You are over-scrupulous, surely. I dare say Mr. Bingley will be very glad to see you; and I will send a few lines by you to assure him of my hearty consent to his marrying whichever he chooses of the girls.',
      analysis: 'Mr. Bennet\'s mockery of his wife\'s anxiety reveals both his wit and his cruelty. He pretends to take her concerns seriously while actually making fun of them, suggesting he\'ll give Bingley permission to marry any of his daughters. His use of "over-scrupulous" is ironic—he\'s calling her too careful when she\'s actually being manipulative. The phrase "whichever he chooses" reduces his daughters to objects to be selected, showing how the marriage market dehumanizes women. His mockery also reveals his understanding of the system\'s absurdity: he knows that Bingley\'s choice will be based on superficial factors rather than genuine compatibility. This establishes Mr. Bennet as both sympathetic (he sees through social pretensions) and unsympathetic (he uses his insight to avoid responsibility).'
    }
  ],
  
  // ==========================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // ==========================================
  iaAnalysis: {
    themes: [
      {
        name: 'Marriage as Economic Necessity',
        explanation: 'Chapter 1 establishes marriage as the primary means of economic survival for women in Regency England. Mrs. Bennet\'s obsession with Bingley\'s wealth ("four or five thousand a year") reveals how women\'s futures depended entirely on securing wealthy husbands. The Bennet daughters have no inheritance rights and must marry for security rather than love. Austen exposes how this system dehumanizes both men and women—men become sources of income, women become objects to be traded. The chapter shows how economic pressure distorts human relationships, turning marriage into a business transaction rather than a union of equals. This theme will drive the entire novel, as characters navigate the tension between economic necessity and romantic fulfillment.'
      },
      {
        name: 'The Gap Between Appearance and Reality',
        explanation: 'Austen uses irony throughout Chapter 1 to expose the gap between what people say and what they mean, between social appearances and underlying realities. The opening line\'s "universally acknowledged truth" is immediately revealed as false. Mrs. Bennet\'s concern for her daughters\' "happiness" masks her focus on their economic security. Mr. Bennet\'s mockery of his wife\'s anxiety reveals his understanding of the system\'s absurdity while maintaining his emotional distance. The chapter establishes Austen\'s technique of using surface meanings to reveal deeper truths, forcing readers to look beyond appearances to understand characters\' real motivations and the social system\'s true nature.'
      },
      {
        name: 'Gender and Power Dynamics',
        explanation: 'Chapter 1 reveals the complex power dynamics between men and women in Regency society. Mr. Bennet holds legal and social power over his family, but uses it primarily to maintain emotional distance. Mrs. Bennet has no direct power, so she must use manipulation and emotional pressure to achieve her goals. The daughters have no power at all—they must wait for men to choose them. Austen shows how this system creates dysfunctional relationships: Mr. Bennet uses wit to avoid responsibility, Mrs. Bennet uses emotion to manipulate situations, and both avoid genuine communication. The chapter establishes how gender roles limit both men and women, creating relationships based on power struggles rather than mutual respect.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Dramatic Irony',
        explanation: 'Austen uses dramatic irony throughout Chapter 1 to create humor and social critique. The opening line\'s "universally acknowledged truth" is immediately revealed as false through the characters\' behavior. Mrs. Bennet\'s concern for her daughters\' "happiness" masks her focus on their economic security. Mr. Bennet\'s mockery of his wife\'s anxiety reveals his understanding of the system\'s absurdity while maintaining his emotional distance. This technique allows Austen to critique social institutions while appearing to endorse them, forcing readers to think critically about accepted beliefs.',
        example: 'When Mrs. Bennet says "What a fine thing for our girls!" she appears to be expressing joy for her daughters, but the context reveals she\'s thinking about their economic security. The reader understands the true meaning while the character remains unaware of the irony.'
      },
      {
        name: 'Dialogue as Character Revelation',
        explanation: 'Chapter 1 consists almost entirely of dialogue between Mr. and Mrs. Bennet, using their conversation to reveal their personalities, values, and marital dynamic. Austen shows rather than tells, allowing readers to draw their own conclusions about the characters based on how they speak and what they say.',
        example: 'Mrs. Bennet\'s excited, repetitive speech patterns reveal her desperation and social ambition, while Mr. Bennet\'s sardonic responses show his wit and emotional detachment. Their contrasting communication styles establish the fundamental incompatibility of their marriage.'
      },
      {
        name: 'Satirical Tone',
        explanation: 'Austen establishes a satirical tone from the opening line, using humor and irony to critique social institutions and human nature. Her satire is gentle but pointed, making readers laugh while making them think about serious social problems.',
        example: 'The opening line\'s pompous language ("universally acknowledged," "in possession of") satirizes how society elevates marriage to the status of natural law, while the characters\' behavior reveals the absurdity of this belief.'
      },
      {
        name: 'Economic Language',
        explanation: 'Austen uses economic language throughout Chapter 1 to expose how the marriage market reduces human relationships to business transactions. Characters speak of marriage in terms of income, inheritance, and financial security rather than love or compatibility.',
        example: 'Mrs. Bennet\'s focus on Bingley\'s "four or five thousand a year" and her excitement about "What a fine thing for our girls!" reduces marriage to economic transaction, showing how the system dehumanizes both men and women.'
      }
    ]
  },
  
  // ==========================================
  // MODERN ADAPTATION
  // ==========================================
  modernAdaptation: {
    setting: 'Imagine Mrs. Bennet as a modern mother frantically scrolling through LinkedIn profiles of wealthy tech executives, trying to set up her daughters with "good catches" who can provide financial security. Or picture her as a parent pushing her children toward high-paying careers, prestigious universities, or advantageous marriages that will ensure their economic future. The underlying dynamic remains the same: parents trying to secure their children\'s financial future through strategic relationships, while children navigate the tension between personal fulfillment and economic necessity.',
    
    parallels: [
      '💼 **Professional Networking**: Mrs. Bennet\'s excitement about Bingley = parents pushing children toward "networking events," "professional connections," and "strategic relationships" for career advancement',
      '💰 **Economic Anxiety**: The pressure to marry wealthy = modern pressure to choose "practical" majors, "stable" careers, or "financially secure" partners over personal passion',
      '📱 **Social Media Stalking**: Mrs. Bennet\'s obsession with Bingley\'s details = parents researching potential partners\' social media, LinkedIn profiles, and financial backgrounds',
      '🎓 **Educational Investment**: The focus on marriage as economic strategy = modern focus on education as investment, choosing schools and majors based on earning potential rather than interest',
      '🏠 **Real Estate Obsession**: Bingley\'s rental of Netherfield = modern obsession with property values, neighborhood status, and "good addresses" as markers of social standing',
      '👥 **Social Climbing**: The Bennets\' excitement about Bingley\'s arrival = modern families\' excitement about "important" connections, "influential" friends, or "high-status" acquaintances',
      '💍 **Relationship Economics**: Marriage as business transaction = modern relationships evaluated in terms of "compatibility," "shared goals," and "financial planning" rather than pure emotion',
      '🎭 **Performance Anxiety**: Mrs. Bennet\'s "poor nerves" = modern parents\' anxiety about their children\'s social performance, academic achievement, and future prospects'
    ],
    
    discussionPrompt: 'The core dynamics remain unchanged across 200 years: parents trying to secure their children\'s economic future through strategic relationships, children navigating the tension between personal fulfillment and economic necessity, and social systems that pressure people to make life decisions based on financial considerations rather than genuine compatibility. What does it say about our society that Mrs. Bennet\'s situation is still immediately recognizable in modern parenting, career counseling, and relationship advice? What has changed? What hasn\'t?'
  },
  
  // ==========================================
  // THEMATIC THREADS
  // ==========================================
  thematicThreads: [
    {
      emoji: '💕',
      name: 'Love vs. Money',
      explanation: 'Chapter 1 establishes the central tension between romantic love and economic necessity in marriage. Mrs. Bennet focuses on Bingley\'s wealth, while the novel will explore whether genuine love can exist within a system that treats marriage as economic transaction. Watch how characters navigate this tension throughout the novel.'
    },
    {
      emoji: '🎭',
      name: 'Appearance vs. Reality',
      explanation: 'Austen uses irony to expose the gap between what people say and what they mean, between social appearances and underlying realities. This theme will recur as characters must learn to see through social pretensions to find genuine connection.'
    },
    {
      emoji: '⚖️',
      name: 'Gender and Power',
      explanation: 'The chapter reveals how gender roles limit both men and women, creating relationships based on power struggles rather than mutual respect. Watch how characters navigate these power dynamics throughout the novel.'
    },
    {
      emoji: '🏛️',
      name: 'Social Class',
      explanation: 'Class consciousness permeates every aspect of Regency life, determining who can marry whom and what social circles one can enter. Watch how characters navigate class boundaries and challenge social hierarchies.'
    }
  ],
  
  // ==========================================
  // DISCUSSION QUESTIONS
  // ==========================================
  discussionQuestions: [
    {
      title: 'Opening Irony',
      question: 'Why does Austen begin with "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"? How does this ironic opening establish the novel\'s themes and tone?'
    },
    {
      title: 'Mrs. Bennet\'s Motivation',
      question: 'Is Mrs. Bennet a sympathetic character or a comic figure? How does her obsession with marrying off her daughters reflect the economic realities of Regency England?'
    },
    {
      title: 'Mr. Bennet\'s Character',
      question: 'How does Mr. Bennet\'s treatment of his wife reveal his character? Is his mockery of her anxiety cruel or justified? What does his emotional detachment tell us about their marriage?'
    },
    {
      title: 'Marriage as Business',
      question: 'How does Austen use dialogue to expose how the marriage market reduces human relationships to business transactions? What modern parallels exist?'
    },
    {
      title: 'Gender Roles',
      question: 'How do the different ways Mr. and Mrs. Bennet approach Bingley\'s arrival reflect their different roles and power within the family?'
    },
    {
      title: 'Social Satire',
      question: 'What aspects of Regency society is Austen satirizing in this chapter? How does her humor serve her social critique?'
    },
    {
      title: 'Economic Pressure',
      question: 'How does the pressure to marry wealthy affect the Bennet family dynamics? What does this reveal about the economic realities of Regency England?'
    },
    {
      title: 'Communication Patterns',
      question: 'How do Mr. and Mrs. Bennet\'s different communication styles reflect their personalities and their relationship? What does this suggest about their marriage?'
    }
  ],
  
  // ==========================================
  // SPEED LEARNING NOTICE (Chapter 1 Only)
  // ==========================================
  speedLearningNotice: {
    title: '💡 How to Use Amplified Discussion',
    content: 'Below you\'ll find expandable "Amplified Discussion" sections that explore complex questions about this chapter. Here\'s how to use them effectively for maximum learning: **(1) Try answering the question yourself first**—think it through, form your own interpretation. **(2) Then expand the section and compare**—what did you get right? What did you miss? **(3) Notice the process**—how does expert analysis differ from your initial thinking? Over time, you\'ll internalize these analytical moves. This is teaching you HOW to read literature, not just WHAT to think about this chapter.'
  },
  
  // ==========================================
  // AMPLIFIED DISCUSSION
  // ==========================================
  amplifiedDiscussion: [
    {
      id: 'opening-irony',
      title: 'The Power of Ironic Opening',
      question: 'Why does Austen begin Pride and Prejudice with such an obviously false statement? How does this ironic opening establish the novel\'s themes and Austen\'s satirical approach?',
      aiResponse: `**The Genius of Austen's Ironic Opening**

Austen's famous first line is a masterclass in literary technique and social critique:

**1. Immediate Irony**
- The statement "It is a truth universally acknowledged" is immediately revealed as false
- Many wealthy men don't want wives, and those who do have very specific requirements
- Austen uses the pompous, formal language of "universal truth" to satirize how society elevates marriage to natural law
- The irony is both humorous and pointed—readers laugh while being forced to question accepted beliefs

**2. Establishing Satirical Tone**
- The opening sets up Austen's technique of appearing to endorse conventional wisdom while actually undermining it
- She uses the language of authority ("universally acknowledged") to expose its absurdity
- This establishes the novel's satirical approach: gentle humor that makes serious social critique palatable
- Readers are immediately positioned as critical observers rather than passive consumers

**3. Introducing Central Themes**
- The line introduces marriage as economic necessity rather than romantic fulfillment
- It establishes the intersection of money and love that will drive the entire plot
- The focus on "possession of a good fortune" reveals how wealth determines marriage prospects
- Austen immediately positions readers to question the marriage market's values

**4. Character Foreshadowing**
- The line foreshadows Mrs. Bennet's obsession with wealthy bachelors
- It sets up the tension between economic necessity and romantic love that Elizabeth will navigate
- It introduces the theme of appearance vs. reality that will define many characters
- The "universally acknowledged" truth will be proven false through individual characters' experiences

**5. Social Critique**
- Austen critiques how society treats marriage as natural law rather than social construct
- She exposes how economic systems determine personal relationships
- The formal language satirizes how institutions use pompous rhetoric to justify inequality
- She shows how "universal truths" often serve the interests of the powerful

**6. Reader Engagement**
- The irony immediately engages readers' critical thinking
- It positions them as co-conspirators with Austen in recognizing social absurdity
- Readers must actively interpret rather than passively accept
- This creates the intellectual partnership that makes Austen's novels so engaging

**Why This Matters:**
Austen's opening line is revolutionary because it uses humor to make serious social critique accessible. She doesn't preach or lecture—she makes readers laugh while making them think. This technique allows her to critique the marriage market, gender roles, and class hierarchy while appearing to endorse conventional values. The irony creates the perfect balance between entertainment and education, making her social commentary both palatable and powerful.

**Modern Resonance:**
This opening technique is still used by satirists today—using the language of authority to expose its absurdity, appearing to endorse conventional wisdom while actually undermining it. Austen's approach shows how humor can be a powerful tool for social critique, making serious issues accessible and engaging.`
    },
    {
      id: 'mrs-bennet-sympathy',
      title: 'Understanding Mrs. Bennet\'s Complexity',
      question: 'Mrs. Bennet is often dismissed as comic relief, but Austen actually presents her as a complex figure. How does she embody both the worst aspects of Regency society and its most vulnerable victims?',
      aiResponse: `**Mrs. Bennet: Victim and Perpetrator**

Mrs. Bennet is one of Austen's most misunderstood characters. She's often dismissed as comic relief, but Austen actually presents her as a complex figure who embodies both the worst aspects of Regency society and its most vulnerable victims:

**1. Economic Vulnerability**
- As a woman with no inheritance rights, Mrs. Bennet knows her daughters' futures depend entirely on securing wealthy husbands
- Her "poor nerves" and emotional volatility are responses to a system that gives her no real power while demanding she manage her family's social and economic survival
- She's trapped between economic necessity and social expectations—she must secure her daughters' futures but has no direct power to do so
- Her desperation stems from genuine fear about her daughters' economic security

**2. Limited Education and Options**
- Mrs. Bennet's crude, repetitive speech patterns reveal her lack of education and limited intellectual development
- She has no career options, no property rights, no legal power—marriage is her only path to security
- Her manipulation tactics are the only tools available to her in a system that denies women direct power
- She's doing the best she can with the limited resources and education available to her

**3. Maternal Love vs. Social Pressure**
- Her obsession with marrying off her daughters stems from genuine maternal concern—she wants them to be secure
- But her methods (manipulation, emotional pressure, social climbing) reflect the system's values rather than her own wisdom
- She's internalized the marriage market's logic: wealth = security = happiness
- Her love for her daughters is real, but it's expressed through the only framework she knows

**4. The Failure of Her Own Marriage**
- Mrs. Bennet's marriage to Mr. Bennet represents the failure of the system she's trying to navigate
- She married for security rather than compatibility, and now must use manipulation to achieve what direct communication cannot
- Her emotional volatility and his emotional detachment create a dysfunctional dynamic
- She's trying to prevent her daughters from making the same mistake she made

**5. Social Class Anxiety**
- The Bennets are "gentry" (landed middle class) but not wealthy—they're on the edge of financial insecurity
- Mrs. Bennet's obsession with Bingley's wealth reflects her anxiety about maintaining social status
- She knows that without advantageous marriages, her daughters could fall into poverty
- Her social climbing is driven by genuine fear about her family's economic future

**6. The System's Victim**
- Mrs. Bennet is a victim of the same system she perpetuates
- She's been taught that women's value lies in their marriageability
- She's internalized the belief that wealth equals worth
- She's doing what she's been taught is right, even though it's destructive

**7. Comic Relief vs. Tragic Figure**
- Austen presents Mrs. Bennet as both comic relief and tragic figure
- Her methods are ridiculous, but her goals are justified
- Her desperation is funny, but her situation is sad
- She's both the problem and the victim of the problem

**Why This Complexity Matters:**
Austen's portrayal of Mrs. Bennet shows how social systems create both victims and perpetrators. Mrs. Bennet is doing what she's been taught is right, even though it's destructive. She's trying to protect her daughters using the only tools available to her, but those tools are flawed. Her character reveals how difficult it is to resist systems that seem natural and necessary.

**Modern Resonance:**
Mrs. Bennet's situation resonates with modern parents who pressure their children toward "practical" careers, "stable" relationships, or "financially secure" choices. Like Mrs. Bennet, they're often motivated by genuine concern but express it through the values of the system rather than their own wisdom. Her character shows how difficult it is to resist social pressure, even when we know it's problematic.

**Austen's Compassion:**
Despite her flaws, Austen treats Mrs. Bennet with compassion. She shows how the system creates the very problems it claims to solve, how good intentions can lead to destructive behavior, and how difficult it is to resist social pressure. Mrs. Bennet is not evil—she's trapped in a system that gives her no good options.`
    },
    {
      id: 'mr-bennet-detachment',
      title: 'Mr. Bennet\'s Emotional Detachment',
      question: 'Mr. Bennet uses wit and irony to maintain emotional distance from his family. How does this detachment serve him, and what are its costs?',
      aiResponse: `**The Psychology of Mr. Bennet's Detachment**

Mr. Bennet's emotional detachment is both his greatest asset and his greatest flaw:

**1. Protective Mechanism**
- His wit and irony protect him from the emotional chaos of his family life
- He uses humor to maintain distance from his wife's anxiety and his daughters' futures
- His detachment allows him to avoid responsibility for family decisions he doesn't want to make
- He can observe and critique without having to engage or change anything

**2. Intellectual Superiority**
- His detachment allows him to feel intellectually superior to his wife and the social system
- He can see through the marriage market's absurdity while maintaining his own comfort
- His wit gives him power over situations he can't control directly
- He uses irony to maintain his sense of self in a system that limits his choices

**3. Avoidance of Conflict**
- His detachment helps him avoid direct confrontation with his wife
- He can mock her concerns without having to address them seriously
- His emotional distance prevents him from having to make difficult decisions about his daughters' futures
- He can maintain peace by not engaging with the real issues

**4. The Cost of Detachment**
- His emotional distance alienates him from his family
- He can't provide the guidance and support his daughters need
- His detachment makes him complicit in the system he critiques
- He uses his intelligence to avoid responsibility rather than to create change

**5. The Marriage Dynamic**
- His detachment creates a dysfunctional dynamic with his wife
- She uses emotion to manipulate; he uses wit to avoid
- Neither can communicate directly about their real concerns
- Their relationship becomes a power struggle rather than a partnership

**6. The Daughters' Perspective**
- His detachment leaves his daughters without a strong male role model
- They must navigate the marriage market without his guidance
- His wit doesn't help them understand how to make good choices
- They're left to figure out the system on their own

**7. The System's Complicity**
- His detachment makes him complicit in the system he critiques
- He can see the problems but won't work to solve them
- His intelligence gives him the power to resist, but he chooses not to use it
- He's part of the problem he claims to understand

**Why This Matters:**
Mr. Bennet represents the educated, privileged man who can afford to be cynical about social institutions because they don't threaten his security. His detachment shows how intelligence without engagement can be destructive. He's sympathetic because he sees through the system's absurdity, but he's also frustrating because he won't use his insight to create change.

**Modern Resonance:**
Mr. Bennet's detachment resonates with modern people who can see social problems but won't engage with them. His character shows how intelligence without action can be destructive, how cynicism can become a form of complicity, and how emotional distance can prevent meaningful change.

**Austen's Critique:**
Austen presents Mr. Bennet as both sympathetic and flawed. He's intelligent enough to see the system's problems, but too comfortable to work for change. His detachment is both his strength and his weakness—it protects him but also isolates him from the people he loves.`
    },
    {
      id: 'marriage-market-critique',
      title: 'Austen\'s Critique of the Marriage Market',
      question: 'How does Austen use Chapter 1 to expose how the marriage market dehumanizes both men and women? What techniques does she use to make this critique accessible?',
      aiResponse: `**Austen's Masterful Social Critique**

Austen uses Chapter 1 to expose the marriage market's dehumanizing effects through subtle but powerful techniques:

**1. Economic Language**
- Characters speak of marriage in terms of income, inheritance, and financial security
- Mrs. Bennet's focus on Bingley's "four or five thousand a year" reduces him to economic value
- The phrase "What a fine thing for our girls!" treats marriage as business transaction
- Austen shows how the system forces people to think in economic terms rather than human terms

**2. Commodification of People**
- Bingley is treated as a commodity to be acquired rather than a person to be known
- The Bennet daughters are objects to be "chosen" by wealthy men
- Marriage becomes a market transaction where people are bought and sold
- Austen exposes how the system reduces human relationships to economic calculations

**3. The Dehumanization of Women**
- Women are valued only for their marriageability and social connections
- Their individual personalities, interests, and desires are irrelevant
- They must compete for limited resources (wealthy husbands)
- Their futures depend entirely on their ability to attract male attention

**4. The Dehumanization of Men**
- Men are valued only for their wealth and social status
- Their individual personalities, interests, and desires are irrelevant
- They're expected to choose wives based on superficial criteria
- Their worth is measured by their economic value rather than their character

**5. The Pressure on Families**
- Families must strategize and manipulate to secure advantageous marriages
- Parents become matchmakers rather than nurturers
- Children become pawns in economic games
- Family relationships are distorted by economic pressure

**6. The Absurdity of the System**
- Austen uses humor to expose the system's absurdity
- Mrs. Bennet's obsession with Bingley's wealth is both funny and sad
- The contrast between romantic ideals and economic reality creates comedy
- Readers laugh while being forced to recognize the system's problems

**7. The Irony of "Universal Truth"**
- The opening line's "universally acknowledged truth" is immediately revealed as false
- Many wealthy men don't want wives, and those who do have specific requirements
- The system's "natural law" is actually a social construct
- Austen forces readers to question accepted beliefs

**8. The Human Cost**
- The system creates dysfunctional relationships based on power struggles
- People can't communicate directly about their real concerns
- Emotional manipulation becomes the only tool available
- Genuine love and compatibility become secondary to economic considerations

**Why This Critique Matters:**
Austen's critique is revolutionary because it exposes how social systems dehumanize people while appearing to serve their interests. She shows how the marriage market creates the very problems it claims to solve, how good intentions can lead to destructive behavior, and how difficult it is to resist social pressure.

**Modern Resonance:**
Austen's critique resonates with modern concerns about how economic systems dehumanize people. Her analysis of the marriage market applies to any system that reduces human relationships to economic transactions. She shows how difficult it is to resist social pressure, even when we know it's problematic.

**Austen's Technique:**
Austen makes her critique accessible through humor and irony. She doesn't preach or lecture—she makes readers laugh while making them think. Her technique allows her to critique the marriage market, gender roles, and class hierarchy while appearing to endorse conventional values. The irony creates the perfect balance between entertainment and education.`
    }
  ],
  
  // ==========================================
  // EDUCATOR RESOURCES
  // ==========================================
  educatorResources: {
    writingPrompt: {
      title: 'Perspective Analysis',
      description: 'Have students rewrite the scene from three different perspectives: (1) Mrs. Bennet\'s internal monologue—what is she really thinking and feeling? (2) Mr. Bennet\'s internal monologue—what is he really thinking and feeling? (3) An outside observer\'s perspective—what would a neighbor or servant notice about this family? After writing, discuss: How does changing perspective change our understanding of the characters? What does each perspective reveal that the others don\'t?',
      purpose: 'This exercise teaches: (1) how perspective shapes interpretation, (2) how the same events can be understood differently, (3) empathy through perspective-taking, (4) critical reading of narrative voice. It helps students understand that Austen\'s third-person narration is a choice with implications—we see events from multiple angles, but each character has their own interpretation.'
    },
    
    activity: {
      title: 'Marriage Market Simulation',
      description: 'Create a classroom simulation of the Regency marriage market. Assign students roles as different social classes (gentry, merchants, servants) and have them negotiate marriages based on economic considerations. Then discuss: How did economic pressure affect decision-making? What was gained and lost in the process? How does this compare to modern relationship dynamics? Duration: 45-60 minutes. Can be done in groups of 4-6.',
      materials: 'Role cards with character backgrounds, economic information, and social status; negotiation guidelines; reflection questions'
    },
    
    crossCurricular: {
      title: 'Regency Economics and Social Structure',
      description: 'Connect Pride and Prejudice to history, economics, and sociology. Research: (1) What was the economic structure of Regency England? (2) How did inheritance laws affect women and families? (3) What were the social classes and how did they interact? (4) How did the marriage market function as an economic system? Students create presentations showing how economic systems shape social relationships and individual choices. This connects literature to social history and helps students understand how novels can be primary sources for understanding social conditions.',
      subjects: ['History', 'Economics', 'Sociology', 'Women\'s Studies']
    }
  },
  
  // ==========================================
  // CRITICAL THINKING EXERCISE
  // ==========================================
  criticalThinkingExercise: {
    title: 'The Ethics of the Marriage Market: Is Strategic Marriage Justified?',
    
    prompt: 'Mrs. Bennet faces a moral dilemma that resonates across centuries: Should she pressure her daughters toward strategic marriages that ensure economic security but may sacrifice personal happiness? In Regency England, women had few options for economic independence, making marriage a matter of survival rather than choice. Analyze the ethics of Mrs. Bennet\'s approach. Is her focus on economic security justified given the constraints of her society? Should she prioritize her daughters\' happiness over their financial future? What obligations does a parent have to ensure their children\'s economic security, and at what cost?',
    
    guidingQuestions: [
      'Define "strategic marriage." What makes a marriage strategic rather than romantic? Are there situations where strategic marriage is justified?',
      'Consider historical context: What options did women have for economic independence in Regency England? How does this affect the ethics of marriage decisions?',
      'Analyze power dynamics: Who has the power to choose in the marriage market? How does this power imbalance affect the ethics of marriage decisions?',
      'Examine consequences: What are the costs and benefits of strategic marriage? What happens to women who don\'t marry strategically?',
      'Connect to modern issues: How do modern parents navigate the tension between their children\'s happiness and economic security? What parallels exist today?',
      'Apply ethical frameworks: Use different ethical approaches (consequentialist, deontological, virtue ethics) to analyze the marriage market\'s morality.'
    ],
    
    thinkingFramework: {
      analyze: 'Break down the marriage market into component parts: the economic pressures (inheritance laws, limited career options), the social expectations (class requirements, family obligations), the power dynamics (gender roles, age differences), and the values at stake (happiness, security, autonomy, family duty). Identify exactly what Mrs. Bennet is trying to achieve and what she risks by her approach.',
      
      evaluate: 'Judge the marriage market using multiple ethical frameworks: (1) Consequentialist ethics: Do strategic marriages produce better outcomes for individuals and families? (2) Deontological ethics: Are there moral duties that override economic considerations? (3) Virtue ethics: What virtues should guide marriage decisions? (4) Feminist ethics: How do gender roles affect moral obligations? Consider both historical context and universal principles.',
      
      synthesize: 'Develop your own ethical position on strategic marriage. Under what conditions is it justified? What are the limits? Create principles that could apply across different historical periods and social contexts. Defend your position using evidence from Pride and Prejudice, historical research, and ethical philosophy. Consider counter-arguments: What would someone who disagrees say? How would you respond?'
    },
    
    expectedDepth: 'A strong response will: (1) Demonstrate understanding of historical context and its impact on ethical decisions, (2) Use specific textual evidence from Chapter 1, (3) Apply multiple ethical frameworks to the analysis, (4) Connect historical issues to contemporary concerns, (5) Acknowledge complexity and trade-offs rather than simplifying, (6) Defend a clear position while recognizing valid objections. This exercise should produce 3-4 pages of written analysis or a 10-minute oral presentation with Q&A.',
    
    classroomApplication: 'This exercise works well as: (1) Socratic seminar with half the class defending strategic marriage and half defending romantic marriage, then switching sides, (2) Written essay with peer review focused on ethical reasoning, (3) Connection to current events—analyze modern examples of strategic relationships (arranged marriages, economic partnerships, social climbing) using the same framework. For advanced classes, introduce philosophical texts (Mill on women\'s rights, Wollstonecraft on marriage, modern feminist ethics) for comparison. For younger students, focus on personal scenarios: choosing colleges based on earning potential vs. interest, selecting careers based on financial security vs. passion, evaluating relationships based on practical considerations vs. emotional connection.'
  },
  
  // ==========================================
  // WHY LITERATURE MATTERS (Rotating Message)
  // ==========================================
  whyLiteratureMatters: getLiteratureMessageByChapter(1),
  
  // ==========================================
  // NEXT TIME TEASER
  // ==========================================
  nextTimeTeaser: {
    emoji: '🎭',
    title: 'Next: The Assembly Ball',
    preview: 'The Bennets attend the Meryton assembly ball where they\'ll finally meet Mr. Bingley and his mysterious friend Mr. Darcy. Elizabeth will form her famous first impressions—favorable toward the charming Mr. Wickham and unfavorable toward the proud Mr. Darcy. But first impressions can be deceiving, and the ball will reveal the complex social dynamics that will drive the entire novel.',
    hookQuestion: 'Will Elizabeth\'s first impressions prove accurate, or will she learn that people are more complex than they initially appear?'
  }
}