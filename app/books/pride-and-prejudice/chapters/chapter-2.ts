/**
 * PRIDE AND PREJUDICE - CHAPTER 2
 * 
 * Mr. Bennet reveals he has already visited Mr. Bingley, delighting Mrs. Bennet
 * and proving that beneath his sardonic exterior, he does care about his daughters' prospects.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter2: ChapterData = {
  number: 2,
  title: 'Mr. Bennet\'s Surprise',
  
  readingTime: 8,
  pages: 3,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'After teasing his wife extensively in Chapter 1, Mr. Bennet surprises everyone by revealing that he has already visited Mr. Bingley at Netherfield, delighting Mrs. Bennet and setting up the family\'s formal introduction to the wealthy newcomer.',
    
    full: [
      'Following his elaborate teasing in Chapter 1, Mr. Bennet finally reveals his secret: he has already visited Mr. Bingley at Netherfield Park. This revelation comes after he has thoroughly enjoyed watching his wife\'s anxiety and frustration, demonstrating his characteristic blend of wit and genuine care for his family\'s welfare. The timing of his revelation—after building suspense and allowing Mrs. Bennet to work herself into a state of agitation—shows his theatrical approach to family dynamics.',
      
      'Mrs. Bennet\'s reaction to this news is predictably ecstatic. She immediately declares herself "quite delighted with him" and focuses first on Mr. Bingley\'s physical appearance: "He is so excessively handsome!" This response reveals her priorities and her approach to marriage—she evaluates potential suitors primarily on superficial qualities like wealth and looks, treating marriage as an economic transaction rather than a partnership based on compatibility and mutual respect.',
      
      'The daughters\' reactions are more measured than their mother\'s. Elizabeth and Jane appear pleased but not overwhelmed with excitement, suggesting they have different expectations for relationships than their mother. This generational difference hints at Austen\'s broader theme about the evolution of marriage from pure economic necessity to something that might include genuine affection and compatibility.',
      
      'This short but crucial chapter establishes several important patterns: Mr. Bennet\'s method of managing his wife through humor and surprise, Mrs. Bennet\'s approach to the marriage market, and the daughters\' more thoughtful perspective on relationships. It also sets up the social interactions that will drive the plot forward, as the family can now be formally introduced to Mr. Bingley and the story can begin in earnest.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Dramatic Irony',
      definition: 'A literary device where the audience knows something that the characters do not, creating tension and often humor.',
      context: 'Throughout this chapter, we know Mr. Bennet has already visited Bingley, but Mrs. Bennet doesn\'t. This creates dramatic irony as we watch her anxiety build while knowing her fears are unnecessary. Austen uses this technique to highlight the power dynamics in the Bennet marriage.',
      whyItMatters: 'Dramatic irony allows Austen to critique social institutions without being preachy. We see the absurdity of Mrs. Bennet\'s desperation and Mr. Bennet\'s manipulation through the gap between what we know and what the characters know. This technique makes the social commentary more engaging and less didactic.'
    },
    {
      term: 'Comedy of Manners',
      definition: 'A genre of comedy that satirizes the behavior and social conventions of a particular social class, often focusing on marriage, courtship, and social climbing.',
      context: 'This chapter exemplifies comedy of manners through its focus on the marriage market, social conventions around introductions, and the Bennet family\'s maneuvering to secure advantageous connections. The humor comes from the gap between social pretensions and human nature.',
      whyItMatters: 'Austen uses comedy of manners to critique Regency society while entertaining readers. The genre allows her to expose the absurdity of social conventions (like Mrs. Bennet\'s obsession with appearances) without being heavy-handed. It\'s social criticism disguised as entertainment.'
    },
    {
      term: 'Marriage Market',
      definition: 'The social system in Regency England where marriage was treated as an economic transaction, with women\'s worth measured by their beauty, dowry, and social connections.',
      context: 'Mrs. Bennet\'s immediate focus on Mr. Bingley\'s wealth and appearance ("He is so excessively handsome!") reveals her participation in the marriage market. She evaluates him like a commodity, considering his value to her daughters\' futures rather than his character or compatibility.',
      whyItMatters: 'Austen critiques the marriage market throughout the novel, showing how it reduces human relationships to economic transactions. Mrs. Bennet represents the worst aspects of this system—treating people as commodities and prioritizing superficial qualities over genuine compatibility.'
    },
    {
      term: 'Patriarchal Authority',
      definition: 'The social system where men hold primary power and authority, particularly in family and political structures.',
      context: 'Mr. Bennet\'s ability to control the family\'s social interactions—deciding when and how to visit Mr. Bingley—demonstrates his patriarchal authority. He holds the power to make decisions that affect everyone\'s lives, while Mrs. Bennet can only react and make requests.',
      whyItMatters: 'Austen shows how patriarchal authority shapes family dynamics and individual choices. Mr. Bennet\'s theatrical revelation highlights the power imbalance in marriage, where one partner controls important decisions while the other must wait and hope. This sets up themes about power, agency, and independence that will be crucial to Elizabeth\'s character development.'
    },
    {
      term: 'Social Climbing',
      definition: 'The attempt to improve one\'s social status through strategic relationships, particularly marriage, often involving calculated social interactions.',
      context: 'Mrs. Bennet\'s excitement about Mr. Bingley\'s arrival and her immediate planning for introductions reveals her social climbing ambitions. She sees Mr. Bingley not as a person but as an opportunity to improve her family\'s social standing and secure her daughters\' futures.',
      whyItMatters: 'Austen uses social climbing to critique the artificiality of Regency society, where relationships are often based on strategic calculation rather than genuine connection. Mrs. Bennet\'s approach represents the worst aspects of social climbing—treating people as means to an end rather than as individuals worthy of respect.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Mr. Bennet',
      development: 'This chapter reveals the complexity of Mr. Bennet\'s character. While he appears to be merely teasing his wife, his behavior actually demonstrates both his wit and his genuine care for his family. He enjoys the theatrical aspect of revealing his secret—building suspense and watching reactions—but he ultimately acts in his family\'s best interests by visiting Mr. Bingley. His approach shows his method of managing his marriage: using humor to maintain control while still fulfilling his responsibilities. However, his enjoyment of his wife\'s distress also reveals a certain cruelty in his character. He treats serious matters (his daughters\' futures) as entertainment, which suggests he may not fully appreciate the pressure his wife feels about securing good marriages for their daughters. This chapter establishes Mr. Bennet as a complex figure—intelligent and caring but also manipulative and sometimes insensitive.',
      keyTrait: {
        emoji: '🎭',
        text: 'Theatrical Manipulator'
      }
    },
    {
      name: 'Mrs. Bennet',
      development: 'Mrs. Bennet\'s reaction to Mr. Bennet\'s revelation reveals both her desperation and her approach to the marriage market. Her immediate focus on Mr. Bingley\'s physical appearance ("He is so excessively handsome!") shows that she evaluates potential suitors primarily on superficial qualities. Her ecstatic response demonstrates her emotional volatility and her tendency to see marriage as purely economic. However, her reaction also reveals genuine love for her daughters—she\'s genuinely excited about opportunities that might secure their futures. Her behavior, while often ridiculous, stems from real anxiety about her daughters\' prospects in a society that offers women few options for economic security. This chapter shows Mrs. Bennet as both comic relief and a sympathetic figure whose desperation, while exaggerated, reflects real social pressures.',
      keyTrait: {
        emoji: '💃',
        text: 'Desperate Matchmaker'
      }
    },
    {
      name: 'Elizabeth Bennet',
      development: 'Elizabeth\'s more measured reaction to the news about Mr. Bingley reveals her different approach to relationships compared to her mother. While she\'s pleased about the opportunity to meet Mr. Bingley, she doesn\'t share her mother\'s ecstatic excitement or immediate focus on his appearance. This suggests Elizabeth has higher standards for relationships—she\'s interested in compatibility and character, not just wealth and looks. Her reaction also shows her ability to see through social conventions and her resistance to the marriage market mentality. This chapter establishes Elizabeth as a thoughtful, independent-minded young woman who will evaluate potential partners on their merits rather than their social position or appearance.',
      keyTrait: {
        emoji: '🧠',
        text: 'Thoughtful Observer'
      }
    },
    {
      name: 'Jane Bennet',
      development: 'Jane\'s reaction mirrors Elizabeth\'s in its restraint, but with her characteristic sweetness and optimism. She\'s pleased about the opportunity to meet Mr. Bingley but doesn\'t share her mother\'s desperate excitement. Her response suggests she\'s open to the possibility of romance but won\'t rush into judgments based on superficial qualities. Jane\'s measured reaction reveals her balanced approach to relationships—she\'s hopeful but not desperate, interested but not calculating. This chapter establishes Jane as someone who approaches the marriage market with dignity and genuine interest in compatibility rather than pure economic calculation.',
      keyTrait: {
        emoji: '🌸',
        text: 'Hopeful Optimist'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'I have been to see Mr. Bingley.',
      analysis: 'This simple, direct statement is the climax of Mr. Bennet\'s theatrical revelation. The brevity of the sentence contrasts with the elaborate buildup, making it more dramatic and effective. Mr. Bennet\'s timing—revealing this after thoroughly enjoying his wife\'s anxiety—shows his manipulative nature and his enjoyment of being the center of attention. The statement also reveals his genuine care for his family despite his teasing behavior.'
    },
    {
      text: 'Oh! I am quite delighted with him. He is so excessively handsome!',
      analysis: 'Mrs. Bennet\'s immediate focus on Mr. Bingley\'s physical appearance reveals her approach to the marriage market. The exclamation marks and superlatives ("excessively handsome") show her emotional volatility and her tendency to make judgments based on superficial qualities. Her reaction demonstrates how she evaluates potential suitors as commodities rather than individuals, prioritizing wealth and appearance over character and compatibility.'
    },
    {
      text: 'You are a good deal too apt, you know, to like people in general. You never see a fault in anybody.',
      analysis: 'This comment from Mr. Bennet to Jane reveals his understanding of her character and foreshadows her relationship with Mr. Bingley. Jane\'s tendency to see the best in people will be both her strength and her potential weakness. Mr. Bennet\'s observation shows his perceptive nature and his awareness of his daughters\' personalities, even as he maintains his ironic distance from family affairs.'
    },
    {
      text: 'All the world are good and agreeable in your eyes. I never heard you speak ill of a human being in my life.',
      analysis: 'This further elaboration on Jane\'s character by Mr. Bennet establishes her as the moral center of the family. Her inability to speak ill of anyone contrasts sharply with her mother\'s tendency to judge people harshly and her father\'s ironic commentary. Jane\'s goodness will be crucial to the plot, particularly in her relationship with Mr. Bingley and her influence on Elizabeth\'s judgments.'
    },
    {
      text: 'I would not wish to be hasty in censuring anyone; but I always speak what I think.',
      analysis: 'Elizabeth\'s response to her father\'s comment about Jane reveals her own character and her approach to judgment. Unlike Jane, who sees only good in people, Elizabeth is willing to form opinions and express them honestly. This statement establishes Elizabeth as someone who values truth and directness, qualities that will be crucial to her relationship with Mr. Darcy and her role as the novel\'s moral center.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Theatricality and Performance in Marriage',
        explanation: 'This chapter reveals how marriage in Regency England often involved performance and manipulation rather than genuine partnership. Mr. Bennet treats his marriage as a stage where he can entertain himself by manipulating his wife\'s emotions. His theatrical revelation—building suspense, timing his announcement for maximum effect—shows how he uses his superior intelligence and social position to control the relationship. Mrs. Bennet, meanwhile, performs the role of the desperate, emotional wife, reacting predictably to her husband\'s manipulations. This theme of performance in marriage will be crucial throughout the novel, as Austen explores the difference between genuine relationships and those based on social conventions and power dynamics.'
      },
      {
        name: 'The Marriage Market as Economic System',
        explanation: 'Mrs. Bennet\'s immediate focus on Mr. Bingley\'s wealth and appearance reveals how marriage in Regency England was often treated as an economic transaction. She evaluates him like a commodity, considering his value to her daughters\' futures rather than his character or compatibility. This approach reduces human relationships to financial calculations, treating people as means to an end rather than as individuals worthy of respect. Austen critiques this system throughout the novel, showing how it creates pressure, desperation, and ultimately unhappiness. The marriage market theme will be central to the plot, as Elizabeth and Jane must navigate a world where their worth is measured by their beauty, dowry, and social connections rather than their intelligence, character, or genuine compatibility with potential partners.'
      },
      {
        name: 'Generational Differences in Relationship Expectations',
        explanation: 'The contrast between Mrs. Bennet\'s ecstatic reaction and her daughters\' more measured responses reveals generational differences in how people approach relationships. Mrs. Bennet represents the older generation\'s approach to marriage—purely economic, based on superficial qualities, desperate and calculating. Elizabeth and Jane, however, show signs of wanting something more from relationships—compatibility, mutual respect, genuine affection. This generational divide suggests Austen\'s optimism about social change, as younger people begin to question the assumptions of the marriage market and seek more meaningful connections. This theme will be crucial to the novel\'s resolution, as Elizabeth and Jane ultimately find partners who value them for who they are, not just what they represent socially.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Dramatic Irony and Reader Superiority',
        explanation: 'Austen uses dramatic irony throughout this chapter to create humor and social commentary. We know Mr. Bennet has already visited Bingley, but Mrs. Bennet doesn\'t, creating tension and comedy as we watch her anxiety build unnecessarily. This technique gives readers a sense of superiority—we understand what\'s happening while the characters don\'t—which allows Austen to critique social institutions without being preachy. The dramatic irony also highlights the power dynamics in the Bennet marriage, showing how Mr. Bennet\'s superior knowledge gives him control over his wife\'s emotions and actions.',
        example: 'The entire sequence where Mr. Bennet builds suspense about visiting Bingley while we know he\'s already done so creates dramatic irony. We watch Mrs. Bennet\'s mounting anxiety with amusement, knowing her fears are groundless, which makes her desperation seem both comic and pathetic.'
      },
      {
        name: 'Comedy of Manners and Social Satire',
        explanation: 'This chapter exemplifies Austen\'s mastery of comedy of manners, using humor to critique social conventions and human behavior. The humor comes from the gap between social pretensions and human nature—Mrs. Bennet\'s desperate social climbing, Mr. Bennet\'s manipulative wit, the daughters\' more thoughtful responses. Austen uses comedy to expose the absurdity of the marriage market and social conventions without being heavy-handed. The genre allows her to entertain readers while making serious points about society, relationships, and human nature.',
        example: 'Mrs. Bennet\'s immediate declaration that she\'s "delighted" with someone she\'s never met is pure comedy of manners. The gap between her emotional language and the reality of the situation (she doesn\'t know Bingley at all) creates humor while revealing her superficial approach to relationships.'
      },
      {
        name: 'Characterization Through Dialogue and Action',
        explanation: 'Austen reveals character through what people say and do rather than through direct description. Mr. Bennet\'s theatrical revelation shows his manipulative nature and his enjoyment of being the center of attention. Mrs. Bennet\'s immediate focus on Bingley\'s appearance reveals her approach to the marriage market. Elizabeth\'s measured response shows her thoughtful nature and her resistance to social conventions. Jane\'s optimistic reaction reveals her tendency to see the best in people. This technique allows Austen to show rather than tell, making her characters feel real and complex rather than like literary constructs.',
        example: 'Mr. Bennet\'s comment about Jane never speaking ill of anyone reveals both Jane\'s character (her goodness and optimism) and Mr. Bennet\'s perceptive nature (he understands his daughters\' personalities). The dialogue does double duty, characterizing both speaker and subject.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a modern family where the parents are trying to set up their daughter with a wealthy, attractive neighbor who just moved into the expensive house down the street. The father enjoys teasing his wife about whether they should invite the new neighbor over, watching her get increasingly anxious about missing this "opportunity." When he finally reveals he\'s already invited the neighbor to dinner, the mother immediately starts planning how to showcase their daughter\'s best qualities and speculates about the neighbor\'s wealth and appearance. Meanwhile, the daughter is more interested in whether they\'ll actually get along as people, not just whether he\'s rich and good-looking.',
    
    parallels: [
      '🔹 **Social Media and First Impressions**: Mrs. Bennet\'s immediate judgment of Bingley based on his appearance parallels how we often form opinions about people based on their social media profiles, photos, or brief encounters. We still prioritize superficial qualities over character.',
      '🔹 **Parental Pressure in Relationships**: Mrs. Bennet\'s desperation to secure advantageous marriages for her daughters reflects modern parental pressure around dating, marriage, and social status. Parents still often push their children toward "suitable" partners based on wealth, education, or social position.',
      '🔹 **The Performance of Relationships**: Mr. Bennet\'s theatrical approach to marriage mirrors how social media has made relationships more performative. We often present curated versions of our relationships rather than authentic connections.',
      '🔹 **Generational Differences in Dating**: The contrast between Mrs. Bennet\'s approach and her daughters\' more thoughtful responses reflects ongoing generational differences in how people approach relationships, from traditional expectations to more individualistic approaches.',
      '🔹 **Economic Pressure in Relationships**: The marriage market\'s focus on wealth and social status parallels modern concerns about financial compatibility, social mobility, and the economic pressures that still influence relationship choices.'
    ],
    
    discussionPrompt: 'Think about how we still judge potential partners by superficial qualities first—looks, wealth, status, social media presence. How do modern dating apps and social media amplify or change these tendencies? What does it mean to prioritize compatibility over convenience in relationships today?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🎭',
      name: 'Performance vs. Authenticity',
      explanation: 'This chapter establishes the theme of performance in relationships, as Mr. Bennet treats his marriage as entertainment and Mrs. Bennet performs the role of desperate matchmaker. Throughout the novel, Austen will explore the difference between genuine relationships and those based on social conventions and performance. Elizabeth\'s journey will be about finding authentic connection in a world full of social performance.'
    },
    {
      emoji: '💰',
      name: 'Love vs. Money',
      explanation: 'Mrs. Bennet\'s immediate focus on Mr. Bingley\'s wealth and appearance establishes the central tension between love and money in the novel. Austen will explore whether it\'s possible to find genuine love in a society that treats marriage as an economic transaction. This theme will be crucial to Elizabeth\'s relationship with Mr. Darcy and Jane\'s relationship with Mr. Bingley.'
    },
    {
      emoji: '👥',
      name: 'Individual vs. Society',
      explanation: 'The contrast between Elizabeth and Jane\'s thoughtful responses and their mother\'s desperate social climbing establishes the theme of individual choice versus social pressure. Throughout the novel, Austen will explore how individuals can maintain their integrity while navigating social expectations and conventions.'
    },
    {
      emoji: '🧠',
      name: 'Intelligence and Wit',
      explanation: 'Mr. Bennet\'s clever manipulation and Elizabeth\'s thoughtful responses establish the theme of intelligence as both a strength and a potential weapon. Austen will explore how intelligence can be used to navigate social situations, critique society, and find genuine connection, but also how it can be used to manipulate and control others.'
    },
    {
      emoji: '👨‍👩‍👧‍👧',
      name: 'Family Dynamics',
      explanation: 'This chapter reveals the complex power dynamics within the Bennet family, establishing themes about how families shape individual choices and how individuals can resist or embrace family expectations. The novel will explore how family relationships influence personal growth and romantic choices.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Theatrical Manipulation in Marriage',
      question: 'Is Mr. Bennet\'s teasing of his wife harmless fun or emotional manipulation? What does his enjoyment of her distress reveal about their relationship? How do you distinguish between playful teasing and harmful manipulation in relationships?'
    },
    {
      title: 'The Marriage Market Mentality',
      question: 'Mrs. Bennet immediately focuses on Mr. Bingley\'s wealth and appearance. What does this reveal about how she views marriage and relationships? How do we still prioritize superficial qualities in modern relationships?'
    },
    {
      title: 'Generational Differences',
      question: 'How do Elizabeth and Jane\'s reactions differ from their mother\'s? What does this suggest about generational differences in approaching relationships? How do younger generations often challenge their parents\' assumptions about love and marriage?'
    },
    {
      title: 'Power Dynamics in Marriage',
      question: 'Mr. Bennet holds the power to make decisions that affect everyone\'s lives. How does this power imbalance shape the family dynamics? What does this reveal about marriage and gender roles in Regency England?'
    },
    {
      title: 'Social Climbing and Status',
      question: 'Mrs. Bennet sees Mr. Bingley as an opportunity to improve her family\'s social standing. How do we still engage in social climbing today? What are the costs and benefits of trying to improve one\'s social status through relationships?'
    },
    {
      title: 'Authenticity vs. Performance',
      question: 'This chapter shows how relationships can become performances. How do we still perform in relationships today? What does it mean to be authentic in a world where social media and social expectations encourage performance?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'theatrical-manipulation',
      title: 'The Art of Theatrical Manipulation: Mr. Bennet\'s Performance',
      question: 'Why does Mr. Bennet enjoy teasing his wife so much, and what does this reveal about their marriage dynamic?',
      aiResponse: `
**Mr. Bennet's Theatrical Marriage: Entertainment or Emotional Abuse?**

Mr. Bennet's elaborate teasing of his wife reveals a complex and troubling dynamic that goes far beyond harmless humor. This isn't just playful banter—it's a sophisticated form of emotional manipulation that reveals deep power imbalances in their marriage.

**The Performance Unfolds:**

**Act 1: The Setup**
- Mr. Bennet knows he's already visited Bingley
- He deliberately withholds this information
- He watches his wife's mounting anxiety with amusement
- He builds suspense for his own entertainment

**Act 2: The Revelation**
- He times his announcement for maximum dramatic effect
- He enjoys watching her emotional journey from despair to ecstasy
- He treats her genuine concern as entertainment
- He makes her emotional state the subject of his wit

**What This Reveals About Their Marriage:**

**Power Imbalance:**
- Mr. Bennet holds all the cards (knowledge, authority, social position)
- Mrs. Bennet is completely dependent on his decisions
- He can make her happy or miserable at will
- She has no agency in matters that affect her entire life

**Emotional Manipulation:**
- He deliberately causes her distress for his amusement
- He treats her genuine emotions as entertainment
- He uses his superior intelligence to control her
- He makes her the object of his wit rather than his partner

**The Marriage as Theater:**
- He sees their relationship as a stage for his performance
- She becomes an audience for his cleverness
- Their marriage is about his entertainment, not mutual support
- He treats serious matters (daughters' futures) as comedy

**Victorian Context:**

In Regency England, husbands held legal and social power over wives:
- Women couldn't own property or make major decisions
- Marriage was often the only path to economic security
- Husbands had almost absolute authority in the household
- Women were expected to be emotionally dependent on their husbands

Mr. Bennet's behavior reflects this power structure—he can afford to be theatrical because he's in control.

**Modern Parallels:**

This dynamic still exists in relationships today:
- **Gaslighting**: Making someone doubt their own perceptions
- **Emotional manipulation**: Using someone's emotions for your own entertainment
- **Power plays**: Using superior knowledge or position to control others
- **Performance relationships**: Treating relationships as entertainment rather than partnership

**The Psychological Impact:**

Mrs. Bennet's behavior suggests the effects of this dynamic:
- She's emotionally volatile (years of being manipulated)
- She's desperate and anxious (learned helplessness)
- She focuses on external validation (seeking control where she can)
- She's become a caricature (defense mechanism against manipulation)

**Austen's Critique:**

Austen shows us that this isn't romantic or charming—it's emotionally abusive:
- Mr. Bennet's wit doesn't excuse his cruelty
- His intelligence doesn't justify his manipulation
- His care for his daughters doesn't negate his harm to his wife
- His humor masks genuine emotional damage

**The Daughters' Response:**

Elizabeth and Jane's more measured reactions suggest they've learned from their parents' example:
- They don't want relationships based on manipulation
- They seek genuine partnership, not performance
- They want to be seen as individuals, not entertainment
- They're developing their own values about relationships

**For Discussion:**

When does teasing become manipulation? How do we distinguish between playful humor and emotional abuse? What does it mean to use someone's emotions for your own entertainment? How do power imbalances affect relationship dynamics?

**The Real Question:**

Is Mr. Bennet a charming wit or an emotional manipulator? Austen's answer seems clear: intelligence and humor don't excuse cruelty, and marriage should be about partnership, not performance.
      `
    },
    {
      id: 'marriage-market-critique',
      title: 'The Marriage Market: Austen\'s Critique of Economic Love',
      question: 'How does Austen use Mrs. Bennet\'s reaction to critique the marriage market and its treatment of relationships as economic transactions?',
      aiResponse: `
**Austen's Devastating Critique of the Marriage Market**

Mrs. Bennet's immediate declaration that she's "delighted" with someone she's never met is Austen's brilliant critique of how Regency society reduced human relationships to economic transactions. This moment exposes the dehumanizing effects of the marriage market.

**The Marriage Market in Action:**

**Mrs. Bennet's Evaluation Process:**
1. **Wealth Assessment**: "He is so excessively handsome!" (code for wealthy and socially desirable)
2. **Commodity Evaluation**: She's shopping for husbands like products
3. **Strategic Planning**: Immediate focus on how to "acquire" him
4. **Economic Calculation**: Treating marriage as a business transaction

**What This Reveals About Regency Society:**

**Women's Limited Options:**
- Marriage was often the only path to economic security
- Women couldn't inherit property or pursue careers
- Social status depended entirely on marriage
- Unmarried women faced poverty and social exclusion

**The Pressure to Marry:**
- Families depended on daughters' marriages for survival
- Social standing was determined by marital connections
- Parents felt responsible for securing advantageous matches
- The stakes were literally life and death

**The Dehumanization:**
- People became commodities to be evaluated
- Relationships were reduced to economic calculations
- Character and compatibility were secondary concerns
- Love was often seen as a luxury, not a necessity

**Austen's Technique:**

**Dramatic Irony:**
- We know Mrs. Bennet hasn't met Bingley
- Her "delight" is based on pure speculation
- The gap between her certainty and her ignorance creates comedy
- But the comedy reveals a deeper tragedy

**Satirical Commentary:**
- Mrs. Bennet's behavior is exaggerated but recognizable
- Her priorities reflect real social pressures
- Her desperation is both comic and sympathetic
- Her approach reveals systemic problems

**Character Contrast:**
- Elizabeth and Jane's measured responses show alternative approaches
- They're interested in compatibility, not just acquisition
- They represent hope for change
- They suggest that better relationships are possible

**The Broader Critique:**

**Economic Determinism:**
Austen shows how economic pressure shapes human behavior:
- Mrs. Bennet's desperation comes from real fear
- Her superficiality is a survival strategy
- Her focus on wealth reflects economic necessity
- Her behavior is both understandable and problematic

**Social Conventions:**
The marriage market creates artificial standards:
- Wealth and appearance become primary qualifications
- Character and compatibility are secondary
- Social status matters more than personal happiness
- Relationships become strategic rather than authentic

**Gender Roles:**
The system reinforces gender inequality:
- Women are dependent on men for survival
- Men hold the power in the marriage market
- Women must compete for limited opportunities
- The system perpetuates itself through social pressure

**Modern Parallels:**

**Dating Apps and Social Media:**
- We still judge potential partners by superficial qualities first
- Photos and profiles reduce people to commodities
- Swiping culture treats relationships as consumption
- Algorithms prioritize appearance over compatibility

**Economic Pressure in Relationships:**
- Financial compatibility is still a major concern
- Social status influences relationship choices
- Economic inequality affects dating opportunities
- The pressure to "marry up" still exists

**Social Climbing:**
- People still seek advantageous connections
- Social media amplifies status consciousness
- Relationships are still used for social advancement
- The marriage market mentality persists

**Austen's Solution:**

**Elizabeth and Jane as Alternatives:**
- They're interested in character, not just wealth
- They want compatibility, not just acquisition
- They're thoughtful about relationships
- They represent hope for change

**The Novel's Resolution:**
- Elizabeth finds love with Darcy despite initial prejudice
- Jane finds happiness with Bingley through genuine compatibility
- Both relationships are based on mutual respect and understanding
- Austen suggests that better relationships are possible

**The Enduring Relevance:**

Austen's critique remains relevant because:
- Economic pressure still shapes relationship choices
- Social status still influences dating
- Superficial qualities are still prioritized
- The marriage market mentality persists

**For Discussion:**

How do we still treat relationships as economic transactions? What does it mean to prioritize compatibility over convenience? How do economic pressures affect our relationship choices? What would Austen think of modern dating culture?

**Austen's Message:**

The marriage market dehumanizes people and reduces relationships to economic calculations. But genuine love, based on mutual respect and compatibility, is possible—and worth fighting for.
      `
    },
    {
      id: 'generational-differences',
      title: 'Generational Change: The Evolution of Relationship Expectations',
      question: 'How does Austen use the contrast between Mrs. Bennet and her daughters to explore generational differences in approaching relationships?',
      aiResponse: `
**Austen's Optimistic Vision: Generational Change in Action**

The contrast between Mrs. Bennet's ecstatic reaction and her daughters' measured responses reveals Austen's sophisticated understanding of generational change and her optimism about social progress. This moment shows how younger generations can challenge and improve upon their parents' assumptions.

**The Generational Divide:**

**Mrs. Bennet's Generation (Older):**
- **Marriage as Economic Necessity**: Pure survival strategy
- **Superficial Evaluation**: Wealth and appearance are primary
- **Desperate Urgency**: Time is running out, opportunities are limited
- **Social Pressure**: Conformity to established norms
- **Commodity Mentality**: People as products to be acquired

**Elizabeth and Jane's Generation (Younger):**
- **Marriage as Partnership**: Seeking genuine compatibility
- **Character Evaluation**: Interested in personality and values
- **Thoughtful Consideration**: Taking time to evaluate compatibility
- **Individual Choice**: Resisting social pressure
- **Human Connection**: People as individuals worthy of respect

**What This Reveals About Social Change:**

**Economic Context:**
- Mrs. Bennet's generation faced more economic pressure
- Younger women had slightly more options and education
- Social mobility was beginning to increase
- Individual choice was becoming more possible

**Cultural Evolution:**
- Ideas about love and marriage were changing
- Romantic love was becoming more valued
- Individual happiness was gaining importance
- Social conventions were being questioned

**Austen's Technique:**

**Character Contrast:**
- Mrs. Bennet's exaggerated behavior highlights the problem
- Elizabeth and Jane's restraint shows the solution
- The contrast makes both approaches visible
- Readers can see the difference clearly

**Subtle Characterization:**
- Elizabeth's thoughtful response shows her intelligence
- Jane's measured reaction reveals her wisdom
- Their restraint suggests they've learned from their mother's example
- They represent hope for change

**Social Commentary:**
- Austen shows that change is possible
- Younger generations can do better
- Progress happens through individual choice
- Social evolution requires conscious effort

**The Broader Pattern:**

**Throughout the Novel:**
- Elizabeth will challenge social conventions
- Jane will maintain her dignity despite pressure
- Both will seek genuine compatibility
- Both will ultimately find love based on mutual respect

**Austen's Optimism:**
- She believes in human progress
- She shows that change is possible
- She suggests that younger generations can improve society
- She offers hope for the future

**Modern Parallels:**

**Generational Differences Today:**
- **Dating**: Older generations focused on marriage, younger on compatibility
- **Gender Roles**: Younger people challenge traditional expectations
- **Social Media**: Different approaches to relationship presentation
- **Career vs. Family**: Different priorities and timing
- **Individualism**: Younger generations prioritize personal fulfillment

**The Pattern of Change:**
- Each generation learns from the previous one's mistakes
- Social progress happens through individual choice
- Change requires conscious effort and resistance
- Younger generations often lead social evolution

**Austen's Message:**

**Hope for Change:**
- Social progress is possible
- Younger generations can improve society
- Individual choice matters
- Change happens through conscious effort

**The Importance of Education:**
- Elizabeth and Jane are more educated than their mother
- Education enables critical thinking about social conventions
- Knowledge allows people to make better choices
- Learning from others' mistakes is crucial

**The Role of Individual Agency:**
- Elizabeth and Jane choose differently
- They resist social pressure
- They create their own values
- They show that change is possible

**For Discussion:**

How do you see generational differences in approaching relationships today? What have you learned from your parents' generation? How do younger people often challenge established norms? What gives you hope for social progress?

**Austen's Enduring Relevance:**

Her exploration of generational change remains relevant because:
- Each generation still learns from the previous one
- Social progress still requires individual choice
- Younger people still challenge established norms
- Change still happens through conscious effort

**The Optimistic Vision:**

Austen suggests that while social problems persist, human progress is possible. Each generation can learn from the previous one's mistakes and create better relationships, better families, and better societies. The key is conscious choice and the courage to resist harmful social conventions.

**Elizabeth and Jane as Models:**

They show us that:
- We can choose differently from our parents
- We can resist social pressure
- We can seek genuine compatibility
- We can create better relationships
- We can contribute to social progress

Austen's message is ultimately hopeful: change is possible, progress is achievable, and each generation can do better than the last.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Theatrical Relationships: Write Your Own Performance',
      description: 'Write a 1-2 page scene where one character uses theatricality or manipulation to control another character in a relationship. Focus on dialogue, timing, and the power dynamics between the characters. Show how the manipulator builds suspense, controls information, and enjoys watching the other person\'s reactions. Then, write a second scene where someone resists this manipulation or calls it out. Like Austen, use dialogue and action to reveal character and critique relationship dynamics.',
      purpose: 'This exercise teaches students to recognize manipulation in relationships, understand power dynamics, and practice writing dialogue that reveals character. Students learn to show rather than tell, use dramatic timing effectively, and create scenes that critique social behavior while entertaining readers.'
    },
    
    activity: {
      title: 'The Marriage Market Simulation',
      description: 'Create a classroom simulation of the Regency marriage market. Assign students roles as potential suitors (with different wealth levels, social status, and character traits) and potential brides (with different dowries, beauty, and intelligence). Have them interact in a "social gathering" where they must evaluate potential matches based on the criteria of the time. After the simulation, discuss: What criteria did people prioritize? How did it feel to be evaluated as a commodity? What were the costs and benefits of this system? Then compare to modern dating and relationships.',
      materials: 'Role cards with character descriptions, social status indicators, evaluation sheets, discussion questions'
    },
    
    crossCurricular: {
      title: 'Economics and Relationships: The Marriage Market Then and Now',
      description: 'Partner with economics and history teachers for an interdisciplinary unit on how economic systems shape personal relationships. Economics class covers supply and demand in the marriage market, economic incentives, and how scarcity affects choices. History class covers women\'s legal and economic status in Regency England, inheritance laws, and social mobility. English class reads this chapter and analyzes Austen\'s critique of economic determinism in relationships. Students synthesize: How do economic systems still influence relationship choices today?',
      subjects: ['Economics', 'History/Social Studies', 'Sociology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'The Ethics of Manipulation: When Does Teasing Become Emotional Abuse?',
    prompt: 'Analyze Mr. Bennet\'s behavior in this chapter through the lens of emotional manipulation and power dynamics. He deliberately withholds information, builds suspense, and enjoys watching his wife\'s distress before revealing his secret. Your task: Construct an ethical framework for distinguishing between harmless teasing and harmful manipulation in relationships. Then apply that framework to evaluate Mr. Bennet\'s behavior and its impact on his family.',
    
    guidingQuestions: [
      'What is the difference between playful teasing and emotional manipulation? What criteria can we use to distinguish between them?',
      'Mr. Bennet enjoys watching his wife\'s anxiety and distress. At what point does deriving pleasure from someone else\'s suffering become morally problematic?',
      'Mrs. Bennet is dependent on Mr. Bennet for information that affects her entire life. How does this power imbalance affect the ethics of his behavior?',
      'Mr. Bennet\'s manipulation affects not just his wife but his daughters\' futures. How do we evaluate behavior that has ripple effects on others?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down Mr. Bennet\'s behavior: What exactly does he do? What are his motivations? What knowledge does he have that others don\'t? How does he use this knowledge? What are the immediate and long-term effects of his actions? Map the power dynamics in the Bennet household.',
      evaluate: 'Using your ethical framework, assess Mr. Bennet\'s behavior. Consider: intent vs. impact, power vs. vulnerability, knowledge vs. ignorance, individual vs. systemic responsibility. Is his behavior justified by his good intentions toward his daughters? Does his intelligence and wit excuse his manipulation?',
      synthesize: 'Connect this analysis to contemporary situations where people use superior knowledge, intelligence, or position to manipulate others. What patterns do you see? What principles can we extract about ethical behavior in relationships? How do we balance humor and entertainment with respect and care for others?'
    },
    
    expectedDepth: 'Strong responses will: (1) Articulate a clear ethical framework with defined criteria for distinguishing teasing from manipulation; (2) Apply that framework consistently to Mr. Bennet\'s behavior; (3) Acknowledge complexity—his behavior may have both positive and negative aspects; (4) Use specific textual evidence; (5) Connect the historical context (patriarchal authority in Regency England) to modern parallels; (6) Demonstrate awareness that ethical questions rarely have simple answers but require nuanced analysis. This is a philosophical analysis using literature as case study.',
    
    classroomApplication: 'This can work as: Individual analytical essay (3-4 pages), Socratic seminar with structured debate, Group project where different groups defend different perspectives on Mr. Bennet\'s behavior, Mock trial where Mr. Bennet is "prosecuted" for emotional manipulation (students argue both sides). Time required: 2-3 class periods (one for initial analysis, one for discussion/debate, one for writing/synthesis). Works well as capstone assessment for themes of power, manipulation, and ethics in Pride and Prejudice.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(2),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '💃',
    title: 'Next Time: Chapter 3 — The Meryton Assembly',
    preview: 'The Bennet family finally meets Mr. Bingley at the Meryton assembly ball, but the evening doesn\'t go as Mrs. Bennet planned. While Jane and Bingley seem to hit it off immediately, Elizabeth\'s first encounter with Mr. Darcy will be anything but romantic. His infamous comment about her appearance will set the stage for their entire relationship and establish the central conflict of the novel.',
    hookQuestion: 'What happens when first impressions go wrong? How do we recover from being judged unfairly? And what does Mr. Darcy\'s rude comment reveal about pride, prejudice, and the power of words?'
  }
}