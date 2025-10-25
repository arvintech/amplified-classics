/**
 * PRIDE AND PREJUDICE - CHAPTER 3
 * 
 * The Meryton Assembly Ball: Jane and Bingley hit it off immediately, but Elizabeth's
 * first encounter with Mr. Darcy will be anything but romantic, setting the stage for
 * their entire relationship and establishing the central conflict of the novel.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter3: ChapterData = {
  number: 3,
  title: 'The Meryton Assembly',
  
  readingTime: 12,
  pages: 5,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'At the Meryton assembly ball, Jane and Mr. Bingley form an immediate connection, while Elizabeth\'s first encounter with Mr. Darcy begins with his infamous comment about her appearance, establishing the central conflict between pride and prejudice that will drive the entire novel.',
    
    full: [
      'The long-awaited Meryton assembly ball finally arrives, and the Bennet family gets their first real opportunity to meet Mr. Bingley and his party. The evening begins promisingly when Mr. Bingley immediately takes notice of Jane, dancing with her twice and showing clear signs of attraction. His genuine warmth and enthusiasm contrast sharply with his friend Mr. Darcy, who initially refuses to dance with anyone and maintains an aloof, superior demeanor throughout the evening.',
      
      'The pivotal moment occurs when Elizabeth overhears Mr. Darcy\'s conversation with Mr. Bingley. When Bingley suggests that Darcy dance with Elizabeth, Darcy responds with his now-famous line: "She is tolerable; but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men." This comment, delivered with casual cruelty, establishes Elizabeth\'s prejudice against Darcy and sets up the central dynamic of the novel.',
      
      'Elizabeth\'s reaction to this insult reveals her character and establishes her as Darcy\'s equal in wit and intelligence. Rather than being crushed by his rejection, she finds it amusing and uses it as material for her own wit, telling the story with "great spirit" to her friends. This response shows Elizabeth\'s resilience and her ability to turn personal slights into entertainment, but it also demonstrates how first impressions can create lasting prejudices.',
      
      'The chapter also introduces other important characters: Mr. Bingley\'s sisters, Caroline and Louisa, who are polite but clearly condescending; and Sir William Lucas, who provides comic relief with his excessive politeness. The assembly establishes the social dynamics that will drive the plot—the contrast between genuine warmth (Bingley) and artificial pride (Darcy), between natural grace (Jane) and spirited intelligence (Elizabeth), and between the welcoming local community and the judgmental newcomers from London.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Assembly Ball',
      definition: 'A formal social gathering in Regency England where people from different social classes could meet, dance, and socialize. These events were crucial for young people to meet potential marriage partners.',
      context: 'The Meryton assembly is the social event where the Bennet daughters can finally meet Mr. Bingley and his party. These balls were highly regulated social occasions where proper introductions, dancing etiquette, and social hierarchies were strictly observed.',
      whyItMatters: 'Assembly balls were the primary way young people met potential partners in Regency England. They were also sites of intense social scrutiny where every interaction was observed and judged. Understanding this context helps us appreciate the pressure Elizabeth and Jane felt to make good impressions.'
    },
    {
      term: 'First Impressions',
      definition: 'The initial judgments people form about others based on limited information, often leading to lasting prejudices that are difficult to overcome.',
      context: 'Darcy\'s first impression of Elizabeth (that she\'s "tolerable; but not handsome enough to tempt me") creates a lasting prejudice that will take most of the novel to overcome. Elizabeth\'s first impression of Darcy (that he\'s proud and cruel) similarly creates prejudice that blinds her to his true character.',
      whyItMatters: 'The novel\'s original title was "First Impressions," and this theme is central to Austen\'s exploration of how snap judgments can prevent people from seeing each other clearly. The assembly ball is where these crucial first impressions are formed.'
    },
    {
      term: 'Social Hierarchy',
      definition: 'The rigid class system in Regency England that determined people\'s social status, opportunities, and acceptable behavior based on birth, wealth, and connections.',
      context: 'Darcy\'s refusal to dance with local women reflects his awareness of social hierarchy—he considers himself above the Meryton society. His comment about not wanting to "give consequence to young ladies who are slighted by other men" shows how he uses social status as a weapon.',
      whyItMatters: 'Austen critiques the social hierarchy throughout the novel, showing how it creates artificial barriers between people and prevents genuine connection. Darcy\'s pride is rooted in his social position, while Elizabeth\'s prejudice stems from her resentment of that hierarchy.'
    },
    {
      term: 'Dramatic Irony',
      definition: 'A literary device where the audience knows something that the characters do not, creating tension and often humor.',
      context: 'We know from the novel\'s title that Darcy and Elizabeth will eventually fall in love, but at the assembly ball, they seem destined to hate each other. This dramatic irony makes their initial animosity both comic and poignant, as we know they\'re missing their chance at happiness.',
      whyItMatters: 'Dramatic irony allows Austen to critique the blindness caused by pride and prejudice. We see what the characters cannot—that they\'re perfect for each other—which makes their mutual dislike both frustrating and instructive.'
    },
    {
      term: 'Wit and Repartee',
      definition: 'Quick, clever verbal exchanges that demonstrate intelligence and social skill, often used as a form of social competition or courtship.',
      context: 'Elizabeth\'s ability to turn Darcy\'s insult into entertainment for her friends shows her wit and social intelligence. Her response demonstrates that she\'s not easily crushed by social slights and can hold her own in verbal exchanges.',
      whyItMatters: 'Wit becomes Elizabeth\'s primary weapon against social injustice and Darcy\'s pride. Her ability to use humor to deflect pain and critique society makes her an appealing heroine and shows how intelligence can be a form of resistance.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Elizabeth Bennet',
      development: 'This chapter reveals Elizabeth\'s resilience, wit, and ability to turn personal slights into entertainment. When she overhears Darcy\'s insulting comment about her appearance, she doesn\'t collapse in humiliation but instead finds it amusing and uses it as material for her own wit. Her response shows her intelligence and her refusal to be crushed by social rejection. However, her reaction also reveals how first impressions can create lasting prejudices—she will carry this moment with her throughout the novel, using it as evidence of Darcy\'s cruelty and pride. Elizabeth\'s ability to laugh at herself and turn pain into humor is both her strength and her potential weakness, as it allows her to avoid confronting her own prejudices.',
      keyTrait: {
        emoji: '🎭',
        text: 'Witty Survivor'
      }
    },
    {
      name: 'Mr. Darcy',
      development: 'Darcy\'s behavior at the assembly reveals the full extent of his pride and social snobbery. His refusal to dance with anyone, his dismissive comment about Elizabeth, and his general air of superiority show a man who considers himself above the local society. However, his behavior also reveals his social awkwardness and his inability to navigate unfamiliar social situations gracefully. His comment about Elizabeth being "tolerable; but not handsome enough to tempt me" shows both his cruelty and his blindness to her true worth. This chapter establishes Darcy as a complex character—proud and judgmental, but also socially uncomfortable and potentially redeemable.',
      keyTrait: {
        emoji: '👑',
        text: 'Proud Outsider'
      }
    },
    {
      name: 'Jane Bennet',
      development: 'Jane\'s natural grace and beauty immediately attract Mr. Bingley\'s attention, and their mutual attraction is evident from their first meeting. Jane\'s ability to make a good impression without seeming calculated or desperate shows her natural charm and her genuine goodness. Her success at the assembly contrasts with Elizabeth\'s rejection, highlighting the different ways women navigate the marriage market. Jane\'s character is established as someone who attracts love naturally through her inherent qualities rather than through strategy or manipulation.',
      keyTrait: {
        emoji: '✨',
        text: 'Natural Charmer'
      }
    },
    {
      name: 'Mr. Bingley',
      development: 'Bingley\'s immediate attraction to Jane and his genuine warmth toward the local society reveal his open, friendly nature. Unlike Darcy, he doesn\'t judge people by their social status but responds to their personal qualities. His enthusiasm for dancing and socializing shows his extroverted personality and his ability to make others feel comfortable. Bingley\'s character establishes him as Darcy\'s opposite—where Darcy is proud and judgmental, Bingley is humble and accepting.',
      keyTrait: {
        emoji: '☀️',
        text: 'Warm Enthusiast'
      }
    },
    {
      name: 'Caroline Bingley',
      development: 'Caroline\'s polite but condescending behavior toward the local society reveals her social climbing ambitions and her awareness of class distinctions. Her attempts to be gracious while maintaining her sense of superiority show her skill at navigating social situations, but also her lack of genuine warmth. Caroline\'s character establishes her as a potential antagonist who will try to separate Jane and Bingley based on class prejudice.',
      keyTrait: {
        emoji: '🎭',
        text: 'Polite Snob'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'She is tolerable; but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men.',
      analysis: 'This infamous line establishes Darcy\'s pride and Elizabeth\'s prejudice in one devastating moment. Darcy\'s casual cruelty reveals his social snobbery and his willingness to judge women solely on their appearance. The phrase "give consequence to young ladies who are slighted by other men" shows how he uses social status as a weapon, treating women as objects to be evaluated rather than people to be known. This comment will haunt both characters throughout the novel, representing everything that\'s wrong with their initial relationship.'
    },
    {
      text: 'I have been used to consider poetry as the food of love...',
      analysis: 'This line from Darcy\'s conversation with Caroline Bingley reveals his intellectual pretensions and his tendency to make sweeping generalizations. His comment about poetry and love shows his romantic idealism, but also his tendency to speak in absolutes. This characteristic will be important later when he makes his first proposal to Elizabeth, showing how his pride affects even his most intimate moments.'
    },
    {
      text: 'Elizabeth Bennet has been walking about the room with Mr. Bingley. She is a very pretty girl, and I dare say very agreeable.',
      analysis: 'This observation from Sir William Lucas shows how Elizabeth is perceived by the local society—as pretty and agreeable, but not extraordinary. The comment highlights the contrast between how Elizabeth sees herself (as someone worthy of respect) and how others see her (as merely "tolerable"). This gap between self-perception and social perception will be crucial to Elizabeth\'s character development.'
    },
    {
      text: 'You are dancing with the only handsome girl in the room.',
      analysis: 'Bingley\'s comment to Darcy about Jane reveals his genuine appreciation for beauty and his ability to see value in others. Unlike Darcy, who dismisses women based on superficial criteria, Bingley recognizes and celebrates Jane\'s qualities. This contrast between the two friends establishes the central dynamic of the novel—the difference between pride and humility, judgment and acceptance.'
    },
    {
      text: 'I can guess the subject of your reverie.',
      analysis: 'Elizabeth\'s teasing comment to Darcy shows her wit and her refusal to be intimidated by his social status. Her ability to engage him in conversation despite his rudeness reveals her confidence and her unwillingness to accept his dismissal. This moment foreshadows their future relationship, where Elizabeth\'s wit will challenge Darcy\'s pride and eventually win his respect.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'The Power of First Impressions',
        explanation: 'This chapter establishes how first impressions can create lasting prejudices that prevent people from seeing each other clearly. Darcy\'s dismissive comment about Elizabeth creates a prejudice that will take most of the novel to overcome, while Elizabeth\'s reaction to his rudeness creates her own prejudice against him. Austen shows how these initial judgments, formed in moments of social awkwardness or misunderstanding, can shape entire relationships. The theme explores how pride and prejudice work together to blind people to each other\'s true worth, creating barriers that must be overcome through experience and understanding.'
      },
      {
        name: 'Social Hierarchy and Class Prejudice',
        explanation: 'Darcy\'s behavior at the assembly reveals how social hierarchy creates artificial barriers between people. His refusal to dance with local women and his dismissive attitude toward the Meryton society show how class prejudice prevents genuine social interaction. Austen critiques this system throughout the novel, showing how it creates inequality, prevents authentic relationships, and leads to the kind of pride that blinds people to others\' true worth. The assembly ball becomes a microcosm of Regency society, where social status determines who can interact with whom and how those interactions are interpreted.'
      },
      {
        name: 'The Marriage Market and Female Agency',
        explanation: 'The assembly ball represents the marriage market in action, where young women must compete for male attention and approval. Elizabeth\'s rejection by Darcy highlights the vulnerability of women in this system—their worth is determined by men\'s judgments, often based on superficial criteria. However, Elizabeth\'s response to this rejection shows her agency and her refusal to be defined by others\' opinions. Austen explores how women navigate this system, showing both its constraints and the ways in which intelligent women can resist its limitations.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Dramatic Irony and Reader Superiority',
        explanation: 'Austen uses dramatic irony throughout this chapter to create tension and humor. We know from the novel\'s title that Darcy and Elizabeth will eventually fall in love, but at the assembly ball, they seem destined to hate each other. This creates a sense of dramatic irony that makes their initial animosity both comic and poignant. The technique allows Austen to critique the blindness caused by pride and prejudice while entertaining readers with the knowledge that the characters are missing their chance at happiness.',
        example: 'When Darcy dismisses Elizabeth as "tolerable; but not handsome enough to tempt me," we know he\'s making a terrible mistake that he\'ll spend the rest of the novel trying to correct. This dramatic irony makes his pride both comic and tragic.'
      },
      {
        name: 'Contrast and Foil Characters',
        explanation: 'Austen uses contrast throughout this chapter to highlight the differences between characters and to develop themes. Darcy and Bingley are foils—Darcy is proud and judgmental while Bingley is humble and accepting. Jane and Elizabeth are also foils—Jane attracts attention naturally while Elizabeth must rely on her wit. These contrasts help Austen explore different approaches to social interaction and different ways of navigating the marriage market.',
        example: 'Bingley\'s immediate attraction to Jane contrasts with Darcy\'s dismissal of Elizabeth, highlighting the difference between natural attraction and artificial social barriers.'
      },
      {
        name: 'Social Commentary Through Dialogue',
        explanation: 'Austen reveals character and develops themes through dialogue rather than through direct description. Darcy\'s dismissive comment about Elizabeth reveals his pride and social snobbery. Elizabeth\'s witty response shows her intelligence and resilience. Bingley\'s enthusiastic comments reveal his open, friendly nature. The dialogue allows Austen to show rather than tell, making her characters feel real and her social commentary more effective.',
        example: 'Darcy\'s line about not wanting to "give consequence to young ladies who are slighted by other men" reveals his entire worldview in one sentence—his pride, his social snobbery, and his tendency to use status as a weapon.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a modern networking event or party where a wealthy, attractive newcomer arrives with their friends. The local community is excited to meet them, hoping for social connections and potential romantic opportunities. However, one of the newcomers immediately dismisses the local people as "not worth their time," making cruel comments about their appearance and social status. Meanwhile, their friend is genuinely interested in getting to know people and forms an immediate connection with someone local.',
    
    parallels: [
      '🔹 **Social Media and First Impressions**: Darcy\'s dismissive comment about Elizabeth\'s appearance parallels how we often judge people based on their social media profiles, photos, or brief encounters. We still prioritize superficial qualities over character.',
      '🔹 **Class Prejudice in Social Settings**: Darcy\'s refusal to engage with the local community reflects how people today often stick to their own social circles, avoiding interactions with people from different backgrounds or economic levels.',
      '🔹 **The Power of Words**: Darcy\'s casual cruelty shows how words can create lasting damage. In the age of social media, hurtful comments can spread quickly and create prejudices that are difficult to overcome.',
      '🔹 **Social Awkwardness vs. Cruelty**: Darcy\'s behavior might stem from social awkwardness rather than genuine malice, similar to how people today might come across as rude or dismissive when they\'re actually just uncomfortable in social situations.',
      '🔹 **Resilience and Wit**: Elizabeth\'s ability to turn Darcy\'s insult into entertainment for her friends parallels how people today use humor to cope with rejection and social slights, turning pain into strength.'
    ],
    
    discussionPrompt: 'Think about times when you\'ve made snap judgments about people based on first impressions. How do social media and modern dating apps amplify these tendencies? What does it take to overcome initial prejudices and see people for who they really are?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '👁️',
      name: 'Seeing and Being Seen',
      explanation: 'This chapter establishes the theme of how we see others versus how we\'re seen by them. Darcy sees Elizabeth as "tolerable" while she sees herself as worthy of respect. Throughout the novel, Austen will explore how perception shapes reality and how people must learn to see each other clearly.'
    },
    {
      emoji: '⚖️',
      name: 'Pride and Prejudice',
      explanation: 'The central theme of the novel is established in this chapter through Darcy\'s pride (his social snobbery and dismissive attitude) and Elizabeth\'s prejudice (her quick judgment of his character). These two forces will drive the plot and must be overcome for true love to flourish.'
    },
    {
      emoji: '🎭',
      name: 'Performance vs. Authenticity',
      explanation: 'The assembly ball is a performance where people must present their best selves to make good impressions. Darcy\'s artificial pride contrasts with Bingley\'s natural warmth, while Elizabeth\'s authentic wit contrasts with Caroline\'s polite condescension. The novel explores the difference between genuine connection and social performance.'
    },
    {
      emoji: '💬',
      name: 'The Power of Words',
      explanation: 'Darcy\'s dismissive comment about Elizabeth shows how words can create lasting damage and shape entire relationships. Throughout the novel, Austen will explore how language can both hurt and heal, how words can create barriers or build bridges between people.'
    },
    {
      emoji: '🌉',
      name: 'Bridging Social Divides',
      explanation: 'The assembly ball represents the challenge of bridging social divides in a hierarchical society. Darcy\'s pride creates barriers that prevent genuine connection, while Bingley\'s humility allows for authentic relationships. The novel explores how people can overcome social barriers to find true connection.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'The Power of First Impressions',
      question: 'How do first impressions shape our relationships with others? Can you think of times when your initial judgment of someone was completely wrong? What does it take to overcome first impressions?'
    },
    {
      title: 'Social Hierarchy and Class Prejudice',
      question: 'Darcy\'s behavior reflects his awareness of social hierarchy. How do we still see class prejudice in modern society? What are the costs of judging people based on their social status or background?'
    },
    {
      title: 'The Marriage Market and Female Agency',
      question: 'The assembly ball represents the marriage market where women must compete for male attention. How do women today still face pressure to be evaluated based on their appearance or social status? How can women maintain their agency in such situations?'
    },
    {
      title: 'Words and Their Consequences',
      question: 'Darcy\'s dismissive comment about Elizabeth has lasting consequences. How do words create lasting damage in relationships? What responsibility do we have for the impact of our words on others?'
    },
    {
      title: 'Resilience and Humor',
      question: 'Elizabeth turns Darcy\'s insult into entertainment for her friends. How can humor help us cope with rejection and social slights? When is humor a healthy response, and when might it be a defense mechanism?'
    },
    {
      title: 'Social Awkwardness vs. Cruelty',
      question: 'Do you think Darcy\'s behavior stems from genuine cruelty or from social awkwardness? How can we distinguish between intentional harm and unintentional social mistakes? What responsibility do we have to be kind even when we\'re uncomfortable?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'first-impressions-power',
      title: 'The Tyranny of First Impressions: How Snap Judgments Shape Our Lives',
      question: 'Why do first impressions have such lasting power, and how does Austen use this psychological phenomenon to drive her plot?',
      aiResponse: `
**The Psychology of First Impressions: Why We Can't Escape Them**

Austen's exploration of first impressions in this chapter reveals a profound understanding of human psychology that remains relevant today. The assembly ball scene demonstrates how snap judgments can create lasting prejudices that shape entire relationships—a phenomenon that modern psychology confirms is deeply rooted in human nature.

**The Science Behind First Impressions:**

**Cognitive Efficiency:**
- Our brains are wired to make quick judgments for survival
- We form impressions within seconds of meeting someone
- These judgments are based on limited information but feel certain
- We're biologically programmed to trust our initial assessments

**Confirmation Bias:**
- Once we form an impression, we seek evidence to confirm it
- We ignore or dismiss information that contradicts our initial judgment
- This creates a self-reinforcing cycle that's difficult to break
- Our brains prefer consistency over accuracy

**The Halo Effect:**
- If we like someone initially, we tend to see everything they do positively
- If we dislike someone initially, we interpret their actions negatively
- This creates a "halo" or "horn" effect that colors all future interactions
- It's extremely difficult to overcome these initial biases

**Austen's Psychological Insight:**

**Darcy's Instant Judgment:**
When Darcy dismisses Elizabeth as "tolerable; but not handsome enough to tempt me," he's demonstrating classic first impression psychology:
- He makes a snap judgment based on limited information
- He feels certain about his assessment
- He's not interested in learning more about her
- His judgment feels objective but is actually subjective

**Elizabeth's Defensive Response:**
Elizabeth's reaction shows how first impressions create defensive mechanisms:
- She doesn't try to change Darcy's mind
- Instead, she uses his rejection as material for her own wit
- She creates her own first impression of him (proud, cruel)
- She builds a wall to protect herself from further rejection

**The Self-Reinforcing Cycle:**
Austen shows how first impressions create a cycle:
1. Darcy forms negative impression of Elizabeth
2. Elizabeth forms negative impression of Darcy
3. Both seek evidence to confirm their judgments
4. Both ignore evidence that contradicts their impressions
5. The cycle becomes increasingly difficult to break

**Modern Parallels:**

**Social Media and First Impressions:**
- We judge people based on their profiles, photos, posts
- These judgments feel objective but are actually subjective
- We rarely get the chance to revise our initial assessments
- Social media amplifies the power of first impressions

**Dating Apps and Snap Judgments:**
- Swiping culture encourages instant decisions
- We judge potential partners in seconds
- These judgments are based on photos and brief descriptions
- We rarely get the chance to see people's true character

**Professional Settings:**
- Job interviews often rely on first impressions
- We judge candidates based on initial interactions
- These judgments can determine entire careers
- It's difficult to overcome negative first impressions

**The Cost of First Impressions:**

**Missed Opportunities:**
- Darcy and Elizabeth miss their chance at happiness
- They're both intelligent, compatible people
- Their initial judgments prevent them from seeing this
- They waste time in mutual dislike

**Social Barriers:**
- First impressions create artificial barriers between people
- They prevent genuine connection and understanding
- They reinforce social hierarchies and prejudices
- They limit our ability to grow and learn

**Personal Growth:**
- First impressions prevent us from seeing our own biases
- They limit our ability to change and develop
- They create defensive mechanisms that protect us from growth
- They prevent us from learning from others

**Austen's Solution:**

**The Power of Experience:**
Austen suggests that first impressions can only be overcome through experience:
- Darcy must spend time with Elizabeth to see her true worth
- Elizabeth must see Darcy in different contexts to understand his character
- Both must be willing to revise their initial judgments
- Both must be open to new information

**The Role of Humility:**
Overcoming first impressions requires humility:
- We must admit that our initial judgments might be wrong
- We must be willing to change our minds
- We must be open to learning from others
- We must recognize our own biases

**The Importance of Time:**
First impressions can only be overcome with time and patience:
- We need multiple interactions to form accurate judgments
- We need to see people in different contexts
- We need to observe their actions, not just their words
- We need to be patient with the process

**For Discussion:**

How do first impressions still shape our relationships today? What are the costs of making snap judgments? How can we become more aware of our own biases? What does it take to overcome negative first impressions?

**Austen's Enduring Message:**

First impressions are powerful, but they're not destiny. With humility, patience, and openness to experience, we can overcome our initial judgments and see people for who they really are. The key is recognizing that our first impressions are often wrong and being willing to revise them based on new information.

**The Challenge:**

Can we learn to suspend judgment? Can we give people second chances? Can we recognize our own biases? These are the questions Austen asks us to consider, and they remain as relevant today as they were in Regency England.
      `
    },
    {
      id: 'social-hierarchy-critique',
      title: 'Breaking Down Barriers: Austen\'s Critique of Social Hierarchy',
      question: 'How does Austen use the assembly ball to critique the social hierarchy of Regency England, and what parallels do we see in modern society?',
      aiResponse: `
**Austen's Devastating Critique of Social Hierarchy**

The Meryton assembly ball serves as Austen's laboratory for examining how social hierarchy creates artificial barriers between people and prevents genuine connection. Through Darcy's dismissive behavior and the community's response, Austen exposes the dehumanizing effects of class prejudice and offers a vision of what society could be without these barriers.

**The Assembly Ball as Social Microcosm:**

**The Hierarchy in Action:**
- Darcy arrives with wealth, status, and connections from London
- The local community is excited to meet him but also intimidated
- Darcy uses his social position to judge and dismiss others
- The community accepts his judgment as legitimate

**The Power Dynamics:**
- Darcy holds all the power in social interactions
- He can choose who to dance with, who to talk to, who to ignore
- The local women must wait for his attention
- Their worth is determined by his judgment

**The Dehumanization:**
- Darcy treats people as objects to be evaluated
- He reduces Elizabeth to her appearance and social status
- He doesn't consider her intelligence, character, or personality
- He uses his position to inflict emotional harm

**Austen's Technique:**

**Contrast and Comparison:**
Austen uses contrast to highlight the problem:
- **Darcy vs. Bingley**: Pride vs. humility, judgment vs. acceptance
- **Elizabeth vs. Jane**: Rejection vs. acceptance, wit vs. beauty
- **Caroline vs. Elizabeth**: Artificial politeness vs. genuine intelligence

**Social Commentary Through Character:**
Each character represents different aspects of the social hierarchy:
- **Darcy**: The privileged who use their position to harm others
- **Bingley**: The privileged who use their position to include others
- **Elizabeth**: The intelligent who resist the hierarchy
- **Jane**: The beautiful who benefit from the hierarchy
- **Caroline**: The social climber who reinforces the hierarchy

**The Cost of Social Hierarchy:**

**For the Privileged:**
- Darcy's pride isolates him from genuine connection
- He misses opportunities for friendship and love
- His social position becomes a prison
- He's trapped by his own prejudices

**For the Disadvantaged:**
- Elizabeth's worth is determined by others' judgments
- She must prove herself worthy of attention
- Her intelligence and character are ignored
- She's reduced to her social position

**For Society:**
- Artificial barriers prevent genuine connection
- Talent and intelligence are wasted
- Social mobility is limited
- The system perpetuates itself

**Modern Parallels:**

**Economic Inequality:**
- Wealth still determines social opportunities
- People are judged by their economic status
- Social mobility is limited by class barriers
- The wealthy often dismiss the poor

**Educational Elitism:**
- Ivy League graduates often dismiss state school graduates
- Educational background determines social worth
- Intelligence is equated with institutional prestige
- Opportunities are limited by educational hierarchy

**Social Media Status:**
- Followers and likes determine social worth
- People are judged by their online presence
- Social media creates new hierarchies
- Digital status determines real-world opportunities

**Professional Hierarchies:**
- Job titles and salaries determine social worth
- People are judged by their career success
- Professional status creates social barriers
- The workplace reinforces social hierarchy

**Austen's Vision:**

**Bingley as Alternative:**
Bingley represents what society could be:
- He judges people by their character, not their status
- He's genuinely interested in others
- He uses his privilege to include, not exclude
- He sees value in everyone

**Elizabeth as Resistance:**
Elizabeth represents resistance to the hierarchy:
- She refuses to be defined by others' judgments
- She uses her intelligence to challenge the system
- She maintains her dignity despite rejection
- She creates her own worth

**The Power of Individual Choice:**
Austen suggests that individuals can resist the hierarchy:
- We can choose to judge people by their character
- We can use our privilege to include others
- We can refuse to accept others' judgments of our worth
- We can create genuine connections across social barriers

**The Challenge of Change:**

**Systemic Resistance:**
The social hierarchy resists change:
- It's reinforced by institutions and traditions
- It benefits those in power
- It's difficult to challenge without consequences
- It perpetuates itself through social pressure

**Individual Responsibility:**
But individuals can make choices:
- We can choose to be inclusive rather than exclusive
- We can choose to judge people by their character
- We can choose to use our privilege to help others
- We can choose to resist the hierarchy

**The Role of Education:**
Education can help break down barriers:
- It can teach us to recognize our biases
- It can help us understand different perspectives
- It can give us tools to challenge the system
- It can create opportunities for social mobility

**For Discussion:**

How do we still see social hierarchy creating barriers today? What are the costs of these barriers? How can we use our privilege to include others? What does it take to resist social hierarchy?

**Austen's Enduring Message:**

Social hierarchy is artificial and harmful, but it can be resisted. Through individual choice, genuine connection, and resistance to prejudice, we can create a more just and inclusive society. The key is recognizing that our social position doesn't determine our worth and that we have the power to choose how we treat others.

**The Hope:**

Austen offers hope that change is possible. Through characters like Bingley and Elizabeth, she shows that individuals can resist the hierarchy and create genuine connections across social barriers. The challenge is having the courage to make these choices and the humility to recognize our own biases.

**The Call to Action:**

What will we choose? Will we use our privilege to exclude or include? Will we judge people by their character or their status? Will we resist the hierarchy or reinforce it? These are the questions Austen asks us to consider, and they remain as urgent today as they were in Regency England.
      `
    },
    {
      id: 'words-power-consequences',
      title: 'The Weight of Words: How Language Shapes Reality',
      question: 'How does Austen explore the power of words to create lasting damage and shape relationships in this chapter?',
      aiResponse: `
**The Transformative Power of Words: How Language Creates Reality**

Austen's exploration of Darcy's dismissive comment about Elizabeth reveals a profound understanding of how words can create lasting damage and shape entire relationships. This chapter demonstrates that language isn't just communication—it's a force that can build bridges or create walls, heal wounds or inflict pain, and ultimately determine the course of human connection.

**The Anatomy of Darcy's Comment:**

**The Words Themselves:**
"She is tolerable; but not handsome enough to tempt me; and I am in no humour at present to give consequence to young ladies who are slighted by other men."

**Breaking Down the Damage:**
- **"Tolerable"**: Reduces Elizabeth to a barely acceptable object
- **"Not handsome enough"**: Judges her worth by appearance alone
- **"Tempt me"**: Treats her as a commodity to be consumed
- **"Give consequence"**: Uses his social power as a weapon
- **"Slighted by other men"**: Implies she's already been rejected

**The Psychological Impact:**

**On Elizabeth:**
- Creates a lasting wound that affects her self-perception
- Establishes her prejudice against Darcy
- Shapes how she interprets all future interactions
- Becomes a defining moment in her life

**On Their Relationship:**
- Creates a barrier that takes the entire novel to overcome
- Establishes a pattern of mutual misunderstanding
- Prevents genuine connection and communication
- Becomes the foundation of their conflict

**The Power of Casual Cruelty:**

**Intent vs. Impact:**
- Darcy may not have intended to cause lasting damage
- He was speaking casually to a friend
- He didn't know Elizabeth could hear him
- But the impact is devastating regardless of intent

**The Amplification Effect:**
- Elizabeth overhears the comment
- She tells others about it
- It spreads through the community
- It becomes part of her identity

**The Lasting Consequences:**
- Elizabeth carries this moment with her
- It shapes her perception of all men
- It affects her confidence and self-worth
- It becomes a barrier to future relationships

**Austen's Technique:**

**The Overheard Conversation:**
Austen uses the device of overheard conversation to show:
- How words can have unintended consequences
- How private comments can become public knowledge
- How casual cruelty can cause lasting damage
- How words can create reality

**The Ripple Effect:**
The comment creates ripples throughout the novel:
- Elizabeth's prejudice against Darcy
- Her defensive mechanisms
- Her resistance to his later interest
- The entire plot of the novel

**The Irony:**
The dramatic irony makes the damage more poignant:
- We know Darcy will eventually love Elizabeth
- We know his comment is completely wrong
- We see how words can prevent happiness
- We understand the cost of casual cruelty

**Modern Parallels:**

**Social Media and Public Shaming:**
- Casual comments can go viral
- Private thoughts become public knowledge
- Words can destroy reputations and lives
- The impact is often disproportionate to the intent

**Cyberbullying:**
- Online comments can cause lasting psychological damage
- Words can follow people throughout their lives
- The anonymity of the internet amplifies cruelty
- The damage can be irreversible

**Workplace Harassment:**
- Casual comments can create hostile environments
- Words can affect careers and opportunities
- The power dynamics amplify the damage
- The consequences can be lifelong

**Relationship Communication:**
- Words can create lasting wounds in relationships
- Casual cruelty can destroy trust and intimacy
- The damage can take years to repair
- Words can prevent future happiness

**The Healing Power of Words:**

**Elizabeth's Response:**
Elizabeth shows how words can also heal:
- She uses humor to deflect the pain
- She turns the insult into entertainment
- She maintains her dignity and self-worth
- She refuses to be defined by others' words

**The Power of Wit:**
Elizabeth's wit becomes a form of resistance:
- She uses language to protect herself
- She creates her own narrative
- She refuses to accept Darcy's judgment
- She maintains her agency through words

**The Possibility of Redemption:**
Austen suggests that words can also heal:
- Darcy's later words can undo the damage
- Apologies and explanations can repair relationships
- Language can build bridges as well as walls
- Words can create new realities

**The Responsibility of Language:**

**The Power We Hold:**
Every word we speak has the potential to:
- Build up or tear down
- Create connection or division
- Heal wounds or inflict pain
- Shape reality and relationships

**The Choice We Make:**
We can choose to use language to:
- Include rather than exclude
- Heal rather than harm
- Build rather than destroy
- Connect rather than divide

**The Impact We Have:**
Our words can:
- Shape others' self-perception
- Affect their confidence and worth
- Influence their relationships
- Determine their future happiness

**For Discussion:**

How do we still see words creating lasting damage today? What responsibility do we have for the impact of our words? How can we use language to heal rather than harm? What does it take to repair the damage caused by words?

**Austen's Enduring Message:**

Words have the power to create reality, but we have the power to choose our words. We can use language to build bridges or create walls, to heal wounds or inflict pain, to include others or exclude them. The choice is ours, but the consequences are real and lasting.

**The Challenge:**

Can we learn to use our words more carefully? Can we recognize the power we hold? Can we choose to build rather than destroy? Can we use language to create connection rather than division?

**The Hope:**

Austen offers hope that words can also heal. Through Elizabeth's wit and Darcy's eventual growth, she shows that language can repair damage and create new possibilities. The key is recognizing the power of our words and choosing to use them wisely.

**The Call to Action:**

What will we choose? Will we use our words to build or destroy? Will we recognize the power we hold? Will we take responsibility for the impact of our language? These are the questions Austen asks us to consider, and they remain as urgent today as they were in Regency England.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Power of Words: Write About a Moment When Words Changed Everything',
      description: 'Write a 1-2 page scene about a moment when someone\'s words had a profound impact on you or someone you know. Focus on the specific words that were said, the context in which they were spoken, and the lasting consequences. Then, write a second scene showing how those words could have been said differently to create a different outcome. Like Austen, explore how language can both hurt and heal, and how the same situation could be transformed by different words.',
      purpose: 'This exercise teaches students to recognize the power of language, understand the difference between intent and impact, and practice using words more carefully. Students learn to analyze how words create reality and how they can choose to use language to build rather than destroy.'
    },
    
    activity: {
      title: 'First Impressions Experiment',
      description: 'Have students participate in a "first impressions" experiment. Divide the class into groups and give each group photos of people they don\'t know. Ask them to write down their first impressions of each person based only on their appearance. Then reveal information about each person\'s character, accomplishments, and personality. Discuss: How accurate were the first impressions? What did we miss? How do our biases affect our judgments? Connect this to Darcy and Elizabeth\'s first impressions of each other.',
      materials: 'Photos of diverse people, character descriptions, discussion questions, reflection sheets'
    },
    
    crossCurricular: {
      title: 'Psychology and Literature: The Science of First Impressions',
      description: 'Partner with psychology teachers for an interdisciplinary unit on first impressions and social cognition. Psychology class covers the science behind first impressions, confirmation bias, the halo effect, and how our brains make snap judgments. English class reads this chapter and analyzes Austen\'s psychological insights. Students synthesize: How does Austen\'s understanding of human psychology compare to modern scientific knowledge? What can literature teach us about psychology?',
      subjects: ['Psychology', 'Cognitive Science', 'Social Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'The Ethics of Social Judgment: When Is It Acceptable to Judge Others?',
    prompt: 'Analyze Darcy\'s behavior at the assembly ball through the lens of social ethics and personal responsibility. He makes dismissive comments about Elizabeth\'s appearance and refuses to engage with the local community. Your task: Construct an ethical framework for understanding when it\'s acceptable to judge others and when it becomes harmful. Then apply that framework to evaluate Darcy\'s behavior and its consequences.',
    
    guidingQuestions: [
      'What is the difference between making personal preferences and making judgments that harm others? When do our private opinions become public problems?',
      'Darcy has the social power to make his judgments matter. How does power affect the ethics of judgment? What responsibility do people in positions of power have for the impact of their words?',
      'Elizabeth overhears Darcy\'s comment, but he didn\'t intend for her to hear it. Does intent matter when evaluating the ethics of harmful speech? How do we balance intent and impact?',
      'Darcy is in an unfamiliar social situation and may be uncomfortable. Does social awkwardness excuse harmful behavior? What responsibility do we have to be kind even when we\'re uncomfortable?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down Darcy\'s behavior: What exactly does he do? What are his motivations? What knowledge does he have about Elizabeth? How does his social position affect his behavior? What are the immediate and long-term consequences of his actions? Map the power dynamics in the social situation.',
      evaluate: 'Using your ethical framework, assess Darcy\'s behavior. Consider: intent vs. impact, power vs. vulnerability, knowledge vs. ignorance, individual vs. social responsibility. Is his behavior justified by his social position? Does his discomfort excuse his cruelty? What are the costs of his behavior?',
      synthesize: 'Connect this analysis to contemporary situations where people in positions of power make judgments that affect others. What patterns do you see? What principles can we extract about ethical behavior in social situations? How do we balance personal preferences with social responsibility?'
    },
    
    expectedDepth: 'Strong responses will: (1) Articulate a clear ethical framework with defined criteria for evaluating social judgment; (2) Apply that framework consistently to Darcy\'s behavior; (3) Acknowledge complexity—there may be multiple perspectives on the same behavior; (4) Use specific textual evidence; (5) Connect the historical context (social hierarchy in Regency England) to modern parallels; (6) Demonstrate awareness that ethical questions rarely have simple answers but require nuanced analysis. This is a philosophical analysis using literature as case study.',
    
    classroomApplication: 'This can work as: Individual analytical essay (3-4 pages), Socratic seminar with structured debate, Group project where different groups defend different perspectives on Darcy\'s behavior, Mock trial where Darcy is "prosecuted" for social cruelty (students argue both sides). Time required: 2-3 class periods (one for initial analysis, one for discussion/debate, one for writing/synthesis). Works well as capstone assessment for themes of power, judgment, and ethics in Pride and Prejudice.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(3),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '💌',
    title: 'Next Time: Chapter 4 — Jane\'s Visit to Netherfield',
    preview: 'Jane receives an invitation to visit Netherfield, but her journey there will be interrupted by rain and illness. When Elizabeth walks to Netherfield to nurse her sister, she\'ll encounter Mr. Darcy in a very different context—caring for someone he supposedly despises. This chapter will begin to reveal the complexity beneath Darcy\'s proud exterior and show how first impressions can be misleading.',
    hookQuestion: 'What happens when we see people in different contexts? Can someone who seems cruel in one situation be kind in another? And what will Elizabeth discover about Mr. Darcy when she sees him caring for her sister?'
  }
}
