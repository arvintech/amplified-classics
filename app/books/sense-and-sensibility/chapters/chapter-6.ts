/**
 * SENSE AND SENSIBILITY - CHAPTER 6
 * 
 * Sir John Middleton invites the Dashwoods to Barton Cottage in Devonshire,
 * offering them a new home and social connections.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter6: ChapterData = {
  number: 6,
  title: '',
  
  readingTime: 10,
  pages: 4,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Sir John Middleton invites the Dashwood family to Barton Cottage in Devonshire, offering them a new home and social connections. The sisters respond differently to this invitation, revealing their contrasting attitudes toward change and new opportunities.',
    
    full: [
      'Chapter 6 introduces Sir John Middleton, a distant relative who invites the Dashwood family to live at Barton Cottage on his estate in Devonshire. His offer provides them with a solution to their immediate housing problem and offers hope for establishing a new life. The invitation represents a fresh start after their displacement from Norland, though the new situation will bring its own challenges and limitations.',
      
      'The chapter reveals Sir John\'s character—he is gregarious, generous, and eager to provide social opportunities for the Dashwood sisters. His enthusiastic welcome contrasts with the cold treatment they received from Fanny Dashwood, showing how different relatives respond to their situation. His offer demonstrates genuine generosity but also reveals his interest in matchmaking and social activity.',
      
      'The sisters respond differently to the invitation, revealing their contrasting temperaments. Elinor appreciates the practical solution it provides and considers their situation rationally. Marianne is more reluctant to leave Norland, clinging to her romantic attachment to their former home. Their different responses establish patterns that will continue throughout the novel.',
      
      'The chapter sets up the family\'s move to Barton and introduces the social world they will enter. Barton Cottage will become the setting for much of the novel\'s action, and the relationships formed there will be crucial to the sisters\' romantic journeys. The invitation marks a turning point from loss to new possibilities.',
      
      'Building on the first five chapters\' arc of displacement and vulnerability, Chapter 6 represents a crucial turning point—the possibility of recovery and rebuilding after loss. Where Chapter 1 established the inheritance system that created vulnerability, Chapter 2 showed personal betrayal that deepened it, Chapter 3 revealed the emotional cost of losing home, Chapter 4 introduced romantic possibilities through Edward, and Chapter 5 explored the marriage market paradox, Chapter 6 now offers hope for restoration through Sir John\'s generosity. This invitation represents more than just housing—it offers social rehabilitation, a path back to respectability, and access to the marriage market that their displacement threatened to close. Yet this hope comes with compromise: Barton Cottage is smaller than Norland, Devonshire is distant from Edward, and their new social position depends on a relative\'s generosity rather than their own standing. The chapter reveals Austen\'s nuanced view of women\'s economic dependence: the same system that displaces them (through inheritance laws and male control) can also rescue them (through male generosity and family obligation), but rescue always comes with loss of autonomy and dignity. Sir John\'s genuine kindness contrasts sharply with John and Fanny Dashwood\'s betrayal, showing how individual choices within patriarchal systems can either deepen or alleviate women\'s vulnerability. This chapter completes the opening movement of the novel: from security through loss to tentative rebuilding. The sisters now face forward rather than backward, entering a new phase where their romantic journeys will unfold in a new setting with new possibilities and constraints. Austen shows that displacement, while devastating, isn\'t final—women can rebuild, but rebuilding requires accepting help, adapting to reduced circumstances, and finding dignity within dependence.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Social Generosity',
      definition: 'The willingness to provide assistance, hospitality, or resources to others, often motivated by a complex mixture of genuine kindness, social expectations, family obligation, and desire for social activity. In Regency England, generosity wasn\'t purely altruistic but embedded in social systems of reciprocity and obligation.',
      context: 'Sir John Middleton\'s invitation to Barton Cottage demonstrates social generosity motivated by multiple factors: genuine kindness toward distant relations, fulfillment of family obligations, desire to provide social company for his wife and mother-in-law, and his own gregarious nature that enjoys gathering people. His generosity is authentic but also serves his social needs.',
      whyItMatters: 'Understanding social generosity helps readers appreciate how people navigated family obligations and social expectations in Regency England. Generosity was rarely pure altruism but rather embedded in complex social systems where helping relatives, providing hospitality, and maintaining social connections were expected behaviors that also served self-interest. Recognizing this complexity helps us understand both the genuine kindness and the social motivations that drove helping behavior—a dynamic that persists today when we consider why people help family members or maintain social networks.'
    },
    {
      term: 'Fresh Start',
      definition: 'The opportunity to begin again in a new location or situation, leaving behind past problems, disappointments, or difficulties while facing the uncertainty and anxiety of rebuilding life in unfamiliar circumstances. Fresh starts involve both hope (for better circumstances) and loss (of familiar structures and relationships).',
      context: 'The invitation to Barton Cottage offers the Dashwood sisters a fresh start after their displacement from Norland, representing a transition from loss to new possibilities. However, this fresh start involves genuine challenges: leaving Edward (for Elinor), abandoning familiar places (painful for all), accepting reduced circumstances, and rebuilding social networks. The "freshness" is both opportunity and necessity—they must start over whether they want to or not.',
      whyItMatters: 'Understanding the concept of fresh starts helps readers appreciate the complex emotions involved in major life transitions. Fresh starts aren\'t simply positive or negative but ambivalent experiences mixing hope, loss, anxiety, and possibility. The Dashwoods must grieve what they\'ve lost while building new lives—a dynamic familiar to anyone who\'s experienced major relocation, career change, relationship transitions, or other significant life shifts. Austen captures the psychological complexity of beginning again, showing both the potential for renewal and the pain of leaving the familiar.'
    },
    {
      term: 'Patronage and Dependency',
      definition: 'A social system where more powerful or wealthy individuals provide assistance, protection, or opportunities to less fortunate people who become dependent on their benevolence. Patronage creates relationships of unequal power where recipients owe gratitude, deference, and often service or social support to patrons.',
      context: 'The Dashwoods\' acceptance of Sir John\'s invitation places them in a patronage relationship where they become dependent on his generosity for housing and social opportunities. While Sir John is genuinely kind, this relationship creates obligations: they owe him gratitude, must be available for his social gatherings, and occupy subordinate social position in his sphere. Their dependence limits their autonomy and choices.',
      whyItMatters: 'Understanding patronage helps readers recognize the complex power dynamics embedded in seemingly generous relationships. The Dashwoods aren\'t free tenants but dependent relations whose housing security depends on maintaining Sir John\'s goodwill. This reveals how economic vulnerability creates social subordination even in relationships characterized by genuine kindness. Modern parallels exist in employer-employee dynamics, family financial assistance, and any relationship where one party\'s security depends on another\'s continued benevolence. Recognizing these power dynamics helps us understand both historical social structures and contemporary patterns of dependency and obligation.'
    },
    {
      term: 'Gregarious Personality',
      definition: 'A temperament characterized by sociability, enjoyment of company, desire for social activity, and discomfort with solitude. Gregarious people derive energy from social interaction and often work to bring people together, sometimes without recognizing others\' different social needs.',
      context: 'Sir John Middleton embodies gregarious personality—he loves company, constantly arranges social gatherings, invites people to stay, and cannot understand why anyone would prefer solitude. His generosity toward the Dashwoods partly stems from his gregarious need for social activity: he wants company for himself, his wife, and his mother-in-law. While genuinely kind, his constant social planning doesn\'t always recognize that others (particularly Marianne) value privacy and solitude.',
      whyItMatters: 'Understanding gregarious personality helps readers appreciate both Sir John\'s genuine kindness and his limitations. His generosity serves others but also meets his own social needs. His inability to understand introversion or need for solitude will create complications, particularly for Marianne who values emotional privacy. This character type reveals how personality differences affect relationships and how even well-intentioned people can be insensitive to others\' different needs. Modern readers recognize this pattern in colleagues, family members, or friends whose extroversion sometimes overwhelms introverts\' needs for space.'
    },
    {
      term: 'Transitional Identity',
      definition: 'The state of being between old and new identities where former self-concepts have dissolved but new ones haven\'t fully formed. During transitions, people must renegotiate who they are, what they value, and how they relate to others, creating both disorientation and possibility for growth.',
      context: 'The Dashwoods occupy transitional identity as they prepare to leave Norland. They\'re no longer "the Dashwoods of Norland Park" but haven\'t yet become "the Dashwoods of Barton Cottage." This in-between state creates anxiety about who they\'ll become, how they\'ll be perceived, and what their new lives will involve. The invitation to Barton provides practical solution but also forces acceptance that their old identity is permanently lost.',
      whyItMatters: 'Understanding transitional identity helps readers recognize the psychological depth of the Dashwoods\' situation. They\'re not simply moving houses but renegotiating identity, social position, and sense of self. This concept remains relevant to anyone experiencing major life transitions—career changes, relationship endings, relocations, retirement—where old identities dissolve and new ones must be constructed. Austen\'s exploration of this psychological process shows remarkable sophistication about how major life changes affect sense of self and require internal as well as external adaptation.'
    },
    {
      term: 'Romantic Attachment to Place',
      definition: 'An emotional bond to specific locations that transcends practical value, where places become repositories of memory, meaning, and identity. Romantic attachment to place sees landscapes, homes, and familiar environments as deeply significant to self-concept and emotional well-being, making departure painful beyond practical considerations.',
      context: 'Marianne demonstrates romantic attachment to Norland, experiencing leaving as profound emotional loss beyond practical displacement. For her, Norland isn\'t just a house but a landscape infused with meaning, beauty, and memories. Her resistance to leaving and pain at departure reflect her sensibility: she feels attachment to place intensely, seeing it as part of her identity. Elinor, by contrast, while also feeling loss, approaches departure more practically, recognizing necessity and looking toward future rather than dwelling on past.',
      whyItMatters: 'Understanding romantic attachment to place helps readers appreciate Marianne\'s emotional response and the broader theme of how different people experience displacement. For those with strong place attachment, leaving familiar environments feels like losing part of themselves. This dynamic persists today in debates about development, gentrification, and relocation—some people feel deep attachment to specific places while others adapt more easily to change. Recognizing these differences helps us understand various responses to displacement and honor that for some people, place attachment is genuine and profound, not mere sentiment.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Sir John Middleton',
      development: 'Sir John emerges as a gregarious, generous character who provides social opportunities and genuine kindness to the Dashwood family. His enthusiastic welcome contrasts sharply with Fanny\'s cold calculation, establishing him as a positive force in their lives. However, his character is complex: while genuinely kind, his generosity also serves his own gregarious need for company and social activity. He loves gathering people, arranging parties, and facilitating social connections—partly from genuine hospitality, partly from inability to enjoy solitude. His invitation to Barton Cottage demonstrates both authentic generosity and enlightened self-interest: he helps his relations while ensuring continued social company for himself and his household. His character will be crucial for providing the Dashwoods with social opportunities but also for creating situations where his relentless sociability overwhelms their need for privacy, particularly affecting Marianne who values solitude.',
      keyTrait: {
        emoji: '🎉',
        text: 'Gregarious Generosity'
      }
    },
    {
      name: 'Elinor Dashwood',
      development: 'Elinor responds to Sir John\'s invitation with characteristic sense—she recognizes the practical solution it provides, appreciates his genuine kindness, and understands the necessity of accepting despite the pain of leaving Norland and (more painfully) leaving Edward. Her response demonstrates mature judgment: she can distinguish genuine generosity from selfishness, recognize both benefits and limitations of patronage relationships, and maintain gratitude while also understanding the power dynamics involved. Her pragmatic approach contrasts with Marianne\'s romantic resistance, showing how sense enables adaptation to change even when circumstances aren\'t ideal.',
      keyTrait: {
        emoji: '🧭',
        text: 'Pragmatic Gratitude'
      }
    },
    {
      name: 'Marianne Dashwood',
      development: 'Marianne\'s response to the invitation reveals her romantic sensibility and intense attachment to place. She resists leaving Norland not primarily for practical reasons but because of deep emotional connection to the landscape, the home, and the memories it contains. For her, Norland isn\'t just a house but a place infused with meaning and beauty that forms part of her identity. Her reluctance to embrace Barton demonstrates how sensibility can make necessary adaptations more painful—she must not only accept changed circumstances but also surrender romantic attachment to familiar places. This pattern will recur: her intense feelings make her more vulnerable to loss and disappointment.',
      keyTrait: {
        emoji: '🌲',
        text: 'Place Attachment'
      }
    },
    {
      name: 'Mrs. Dashwood',
      development: 'Mrs. Dashwood receives Sir John\'s invitation with gratitude and relief, recognizing the practical solution it provides while also feeling the pain of accepting charitable assistance from a distant relation. Her response mixes appreciation for his genuine kindness with awareness of how much they\'ve lost. As a widow facing economic vulnerability, she must balance pride with practical necessity, accepting help while maintaining dignity. Her character demonstrates the difficult position of women who must depend on male relatives\' generosity for basic security.',
      keyTrait: {
        emoji: '🙏',
        text: 'Grateful Dignity'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis (50-75 words max)
  // ===================================================================
  quotes: [
    {
      text: 'Sir John was a good looking man about forty. He had formerly visited at Stanhill, but it was too long ago for his young cousins to have any remembrance of him.',
      analysis: 'This introduction establishes Sir John as a distant relation whose connection to the family is more genealogical than personal—the sisters don\'t remember him, emphasizing how his invitation comes from family obligation rather than close relationship. The detail about his visiting "too long ago" underscores the Dashwoods\' isolation: they have few close family connections to help them, making Sir John\'s assistance more significant. His age (forty) and description as "good looking" establish him as mature, prosperous, and socially established—someone with resources to help but also someone who might have expectations about how his assistance should be acknowledged. This brief introduction foreshadows both his genuine kindness and the patronage relationship that his help will create.'
    },
    {
      text: 'No sooner was his father\'s funeral over, than Mrs. John Dashwood, without sending any message to her mother-in-law, arrived with her child and their attendants.',
      analysis: 'This earlier quote about Fanny\'s takeover of Norland provides crucial context for appreciating Sir John\'s generosity. Fanny arrived immediately after the funeral "without sending any message"—showing calculation, rudeness, and eagerness to claim her inheritance. Sir John\'s very different response to the Dashwoods\' situation—inviting them, offering assistance, showing genuine kindness—creates stark contrast that Austen uses to explore different forms of family obligation. Where Fanny sees opportunity for enrichment, Sir John sees opportunity for generosity. This contrast reveals character through how people respond when they have power over others: Fanny exploits it, Sir John shares it.'
    },
    {
      text: 'Their estate was large, and their residence was at Norland Park, in the centre of their property, where, for many generations, they had lived in so respectable a manner.',
      analysis: 'This description of Norland\'s former status makes Sir John\'s invitation more poignant: the family is moving from a "large estate" where they\'d lived "for many generations" "in so respectable a manner" to a small cottage dependent on a distant relation\'s charity. The fall from "Norland Park" to "Barton Cottage" represents dramatic social and economic decline. Understanding what they\'re losing helps readers appreciate both the necessity of Sir John\'s invitation and the pain of accepting it. The invitation isn\'t just about housing but about accepting reduced social status and loss of independence that their former position provided. This context adds weight to their acceptance: they\'re not choosing Barton so much as accepting the only viable option available.'
    },
    {
      text: 'Barton Cottage, though small, was comfortable and compact.',
      analysis: 'This description of their new home captures the reduction in circumstances through understated language. "Though small" acknowledges the downgrade while "comfortable and compact" frames it positively. This linguistic balance reflects Austen\'s characteristic irony: she neither exaggerates their poverty nor ignores the reality of their reduced status. "Comfortable" suggests adequate rather than luxurious accommodations, while "compact" is a polite term for cramped. The cottage represents both loss (from large estate to small cottage) and relief (from homelessness to housing). This ambivalence pervades the chapter: Sir John\'s invitation solves immediate problems while crystallizing how much they\'ve lost. The Dashwoods must adjust not just to smaller physical space but to diminished social position that the cottage symbolizes.'
    },
    {
      text: 'He had been a blessing to all the young ladies in the neighbourhood, for in summer he was for ever forming parties to eat cold ham and chicken out of doors.',
      analysis: 'This characterization reveals Sir John\'s gregarious personality through his social activities: he\'s "for ever forming parties," suggesting relentless sociability that doesn\'t always recognize others\' different needs. The specific detail about eating "cold ham and chicken out of doors" captures his particular style—informal, abundant, inclusive gatherings. He\'s a "blessing" to young ladies partly because he creates social opportunities but also because his constant entertaining serves his own need for company. This description foreshadows both benefits and drawbacks of his patronage: he\'ll provide the Dashwood sisters with social opportunities and potential romantic connections, but his constant party-planning will also intrude on their privacy and force participation in social activities they might prefer to avoid. His generosity creates both opportunities and obligations.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep thematic and technical analysis
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Generosity and Social Connections',
        explanation: 'The chapter explores how different relatives respond to the sisters\' situation, contrasting genuine generosity with selfishness and showing how social connections affect women\'s opportunities.'
      },
      {
        name: 'Adaptation to Change',
        explanation: 'The sisters must adapt to change and find hope in new circumstances, showing how people cope with loss and displacement.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Character Introduction',
        explanation: 'Austen introduces Sir John Middleton as a new character who will be important to the plot, establishing his personality and relationship to the family.',
        example: 'Sir John\'s gregarious welcome contrasts with Fanny\'s coldness, establishing him as a positive force.'
      },
      {
        name: 'Setting Transition',
        explanation: 'The chapter transitions the setting from Norland to Barton, marking a significant shift in the story.',
        example: 'The invitation to Barton represents moving from loss to new possibilities.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect classic text to contemporary life (~200 words)
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a modern family receiving help from a distant relative after experiencing displacement or economic hardship—perhaps a wealthy uncle offering to let the family stay in his rental property at reduced rent after job loss or divorce, or a cousin with connections helping someone find work after economic setback. The assistance is genuine and desperately needed, but comes with unspoken expectations: attending family gatherings, being available for social events, maintaining grateful demeanor, accepting well-meaning but sometimes intrusive advice. The extroverted benefactor constantly invites them to parties, introduces them to his social circle, and tries to set up the daughters with potential partners—all kindly meant but sometimes overwhelming for those who value privacy or are still processing their loss.',
    
    parallels: [
      '🏠 **Family Assistance**: Invitation to Barton = modern families helping relatives during difficult times—parents letting adult children move back home, siblings offering spare rooms during transitions, relatives providing financial support during hardship, always with complex emotional dynamics of dependency and gratitude',
      '🤝 **Social Connections**: New opportunities = how social networks affect modern opportunities—the relative who gets you interviews, the friend-of-a-friend dating introduction, the networking event you\'re expected to attend, recognizing that who you know shapes opportunities available',
      '🌱 **Fresh Starts**: New beginning = modern families starting over in new locations after divorce, job loss, foreclosure, or life disruption—the challenge of rebuilding social networks, establishing new identities, and processing loss while trying to appear hopeful',
      '💼 **Patronage Dynamics**: Dependency on benefactor = modern power imbalances when receiving help—the boss who gives flexibility but expects loyalty, the landlord who offers reduced rent but feels entitled to involvement, the relative whose financial help comes with strings attached',
      '🎉 **Gregarious Helpers**: Sir John\'s constant parties = modern well-meaning extroverts who don\'t understand introverts\' needs—the relative who constantly tries to include you in social activities when you need space, the friend who wants to "cheer you up" when you need to grieve',
      '📱 **Gratitude Performance**: Expected appreciation = modern social media culture where recipients of help must publicly demonstrate gratitude, the pressure to be continuously thankful even when assistance creates complicated feelings',
      '🏘️ **Class Mobility**: Moving to different social sphere = modern awareness that economic changes affect social circles—moving from homeowner to renter, private school to public school, professional networks to different employment sectors, each transition reshaping social identity',
      '🔐 **Privacy vs. Involvement**: Boundary challenges = modern families where helpers feel entitled to involvement—parents whose financial support comes with unsolicited advice about life choices, benefactors who expect updates and input on decisions',
      '🤗 **Well-Meaning Overwhelm**: Constant social planning = modern people whose attempts to help don\'t account for others\' different needs—the friend who won\'t accept "no" to invitations, the relative whose constant check-ins feel intrusive rather than supportive'
    ],
    
    discussionPrompt: 'How do we balance gratitude for genuine assistance with maintaining independence and boundaries? Sir John\'s generosity is authentic and solves real problems, yet creates dependency and limits autonomy—how different is this from modern scenarios where we need help but resent the loss of independence it creates? When someone with resources helps us during difficulty, do they earn the right to involvement in our lives, or should help come without strings? How do we navigate the complex feelings of needing assistance while wanting autonomy, being grateful while also feeling constrained? And what obligations do we have as helpers—is it enough to provide resources, or are we entitled to social returns like company, participation in our events, input on recipients\' decisions? How has modern individualism changed expectations about family assistance—do we still see helping relatives as social obligation or as optional individual choice? When economic inequality creates such different resources within families, how do we navigate helping relationships that are simultaneously genuine and create problematic power dynamics?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Tracking patterns across the novel - recurring themes that connect
  // chapters and show how ideas develop throughout the story
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🏠',
      name: 'Home and Identity',
      explanation: 'The move from Norland to Barton represents loss of identity and the challenge of rebuilding. Watch how the sisters struggle with leaving their home, how Marianne clings to place attachment, and how they must create new meaning in reduced circumstances. This thread explores how displacement forces them to discover who they are when stripped of familiar surroundings.'
    },
    {
      emoji: '🤝',
      name: 'Generosity vs. Selfishness',
      explanation: 'Sir John\'s authentic generosity contrasts sharply with Fanny\'s calculated selfishness (Chapters 2-3), revealing that character is most clearly shown through how we treat those with less power. Watch how different relatives respond to the Dashwoods\' vulnerability, and how genuine kindness can coexist with self-interest in complex patronage relationships.'
    },
    {
      emoji: '⚖️',
      name: 'Dependency and Autonomy',
      explanation: 'Accepting Sir John\'s help creates the paradox of necessary assistance: the Dashwoods need his generosity to survive, yet accepting it creates dependency that limits their autonomy and freedom. Watch how this tension between security and independence plays out, and how accepting help always involves trading some control for protection.'
    },
    {
      emoji: '🔄',
      name: 'Fresh Starts and Recovery',
      explanation: 'Chapter 6 marks the turning point from loss to rebuilding—the possibility of recovery after displacement. Watch how the family moves from grief and crisis (Chapters 1-5) to tentative hope and new possibilities, showing that while displacement is devastating, it isn\'t final. Recovery requires accepting help, adapting to reduced circumstances, and finding dignity within dependence.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // These questions are tools that LEAD YOU TO THE ANSWER - strategically
  // designed to guide you toward deeper appreciation of what matters most
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Character Contrast',
      question: 'How does Sir John\'s generous response to the Dashwoods\' crisis contrast with Fanny\'s selfish treatment in Chapters 2-3? What does this reveal about how character is shown through power?'
    },
    {
      title: 'Dependency Paradox',
      question: 'How does accepting Sir John\'s help create both security and loss of autonomy? What does this reveal about the complex dynamics of assistance and dependency?'
    },
    {
      title: 'Fresh Start',
      question: 'What makes a "fresh start" both hopeful and painful? How do the sisters respond differently to leaving Norland and starting over at Barton?'
    },
    {
      title: 'Place Attachment',
      question: 'Why is Marianne\'s reluctance to leave Norland so intense? What does place attachment reveal about how we form identity through location and memory?'
    },
    {
      title: 'Recovery and Rebuilding',
      question: 'How does Chapter 6 mark a turning point from loss (Chapters 1-5) to rebuilding? What does recovery require from the Dashwood women?'
    },
    {
      title: 'Patronage Dynamics',
      question: 'How do patronage relationships create both opportunity and constraint? What obligations do the Dashwoods have to Sir John, and how do these affect their freedom?'
    },
    {
      title: 'Sense vs. Sensibility',
      question: 'How do Elinor\'s practical appreciation and Marianne\'s emotional resistance to the Barton invitation reveal their contrasting temperaments? Which response seems more appropriate?'
    },
    {
      title: 'Modern Parallels',
      question: 'What modern situations parallel the Dashwoods\' situation of needing help that creates dependency? How do family assistance, workplace dynamics, or institutional aid create similar tensions?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // AI COLLABORATIVE TOOLS - Created through educator-AI partnership where
  // you bring pedagogical expertise and AI brings comprehensive analysis.
  // Together: teaching material neither could produce alone.
  // Teachers: Select which discussions best fit your classroom from the 6.
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'generosity-vs-selfishness',
      title: 'Authentic Generosity vs. Calculated Selfishness: Character Revealed Through Power',
      question: 'How does Sir John\'s generosity contrast with Fanny\'s selfishness? What does their different treatment of the Dashwoods reveal about character and values?',
      aiResponse: `**Character Revealed Through How We Use Power**

Chapter 6 creates stark contrast between two relatives' responses to the Dashwoods' vulnerability: Fanny's calculated selfishness (Chapters 2-3) versus Sir John's authentic generosity. This contrast reveals a profound truth: character is most clearly shown in how we treat people when we have power over them.

**Fanny Dashwood's Response:**

**The Situation:**
John Dashwood's father asked him to help his stepmother and sisters. John had all the power—legal control of Norland, financial resources, social advantage.

**Fanny's Approach:**
- Manipulated John to break his promise
- Reduced planned £3,000 gift to nothing
- Treated them coldly and hastened their departure
- Saw their vulnerability as opportunity for enrichment
- Took over their home "without sending any message"

**Her Motivation:**
Pure self-interest: keep all wealth for herself and her son, minimize obligations, exploit power advantage.

**The Result:**
The Dashwoods displaced, economically vulnerable, dependent on distant relations' charity.

**Sir John Middleton's Response:**

**The Situation:**
As a distant relation with resources, Sir John has no legal obligation to help. He has power to assist or ignore their situation.

**Sir John's Approach:**
- Invites them to Barton Cottage at reasonable rent
- Offers genuine welcome and social opportunities
- Treats them with kindness and respect
- Wants to help them rebuild social connections
- Uses his resources to ease their difficulty

**His Motivation:**
Complex mixture: genuine family feeling, fulfillment of social obligation, his own gregarious need for company, desire to be helpful.

**The Result:**
The Dashwoods receive housing, security, and social opportunities that allow rebuilding their lives.

**The Fundamental Contrast:**

**Fanny: Power Used to Exploit**
When she had power (through John's control of Norland), she used it to enrich herself at others' expense. She saw vulnerability as opportunity for personal gain.

**Sir John: Power Used to Help**
When he has resources and options, he uses them to assist relations in need. He sees capability to help as creating obligation to do so.

**What This Reveals:**

**About Character:**
Character isn't about what we profess but how we behave when we have power over others. Do we exploit advantage or use it to help?

**About Values:**
Fanny values wealth accumulation above family obligation. Sir John values family connection and social responsibility above hoarding resources.

**About Human Nature:**
Both responses exist in real people: some see others' vulnerability as opportunity for exploitation, others see it as call to assistance.

**The Complexity of Generosity:**

Austen doesn't present Sir John as purely altruistic. His generosity serves multiple purposes:

**Genuine Kindness:**
He feels family obligation and wants to help relations in need.

**Social Obligation:**
Wealthy relations were expected to help less fortunate family members. Sir John fulfills social expectations.

**Personal Benefit:**
His gregarious nature means he wants company. The Dashwoods provide social opportunities for himself, his wife, and his mother-in-law.

**Reputation:**
Being known as generous enhances social standing and respect.

**The Insight:**
Generosity can be simultaneously genuine AND self-serving. Sir John's help is no less real for also meeting his needs. This complexity is more realistic than pure altruism.

**The Gender Dimension:**

**Fanny's Position:**
As a woman, Fanny lacked direct power but influenced John's decisions. Her manipulation shows how women could exercise indirect power—sometimes (as here) for selfish ends.

**John's Weakness:**
John had direct power but lacked moral strength to use it ethically. His passive complicity enabled Fanny's selfishness.

**Sir John's Authority:**
As male property owner, Sir John has autonomous power to help. His generosity doesn't require convincing anyone else.

**The Dashwood Women's Vulnerability:**
Their powerlessness makes them dependent on which men choose to help. This reveals how gendered power structures made women's security contingent on male relatives' character.

**Modern Parallels:**

**Workplace Dynamics:**
How do people with power treat subordinates? Some exploit authority for personal advantage; others use it to mentor and support.

**Family Wealth:**
How do prosperous family members respond to less fortunate relations? Some hoard resources; others share generously.

**Social Inequality:**
How do those with advantages (education, wealth, connections) respond to others' needs? Some ignore or exploit; others work to help.

**Landlord-Tenant:**
Sir John's position as landowner who could offer reasonable rent or exploitation parallels modern landlord choices about how to treat tenants.

**The Philosophical Question:**

**What Creates Obligation to Help?**

**Family Connection?**
Both Fanny and Sir John are family, yet respond totally differently. Family relationship alone doesn't guarantee help.

**Capability?**
Those who can help are sometimes seen as obligated to do so. But Fanny rejected this principle while Sir John embraced it.

**Social Expectations?**
Regency society expected wealthy relations to help family. But expectations can be ignored (Fanny) or fulfilled (Sir John).

**Personal Values?**
Ultimately, individual character determines response: Do we see others' needs as our concern? Do we value helping or hoarding?

**The Practical Lesson:**

**For Understanding People:**
Watch how people treat those with less power. This reveals character more than how they treat equals or superiors.

**For Self-Examination:**
How do we use whatever power, resources, or advantages we have? To help or to exploit? To share or to hoard?

**For Social Systems:**
Systems that make people's security dependent on others' voluntary generosity are fragile. Fanny's selfishness shows the danger. Social safety nets matter because we can't rely on universal generosity.

**Austen's Wisdom:**

Austen doesn't moralize directly but shows consequences:
- Fanny's selfishness leaves the Dashwoods vulnerable
- Sir John's generosity provides genuine relief
- Character is revealed through how power is used
- Systems that depend on voluntary generosity are precarious

**The Takeaway:**

**For Readers:**
The contrast between Fanny and Sir John teaches us to evaluate character by how people use power, not by what they claim to value.

**For Life:**
We all have some power—resources, knowledge, connections, platforms, authority. The ethical question is always: Do we use it to help or to exploit? To share or to hoard? To ease others' burdens or to increase our own advantages?

**For Society:**
When systems make vulnerable people dependent on others' voluntary generosity, some will be helped (like the Dashwoods getting Sir John's assistance) while others will be exploited (like the Dashwoods experiencing Fanny's selfishness). This inconsistency shows why social structures shouldn't depend entirely on individual generosity—structural support matters because individual character varies widely.

Character is revealed in how we treat people when we have power over them. Fanny exploited advantage; Sir John shared resources. Their contrasting responses teach us that having power creates choice: we can use it to help or to harm, and that choice reveals who we truly are.`
    },
    {
      id: 'patronage-dependency',
      title: 'The Hidden Cost of Generosity: Patronage, Dependency, and Loss of Autonomy',
      question: 'What are the power dynamics and obligations created by Sir John\'s generosity? How does accepting help affect the Dashwoods\' autonomy?',
      aiResponse: `**When Generosity Creates Obligation**

Sir John's generous invitation solves the Dashwoods' immediate housing crisis, but accepting his help creates a patronage relationship with complex power dynamics and hidden costs. Understanding these dynamics reveals how even genuine generosity can create dependency and limit autonomy.

**What is Patronage?**

**Definition:**
A social system where more powerful/wealthy individuals provide assistance to less fortunate people who become dependent on their continued benevolence. Patronage creates relationships of unequal power where:
- Patrons provide resources, opportunities, protection
- Clients receive assistance but owe gratitude, deference, availability
- Power imbalance shapes all interactions
- Clients' security depends on maintaining patrons' goodwill

**The Dashwoods' Patronage Relationship:**

**What Sir John Provides:**
- Housing at Barton Cottage
- Reasonable rent they can afford
- Social opportunities and connections
- Welcome into his social circle
- Genuine kindness and hospitality

**What This Costs the Dashwoods:**

**1. Loss of Autonomy:**
They can't refuse his invitations without appearing ungrateful. If Sir John plans a party, they're expected to attend regardless of preference.

**2. Obligation to Participate:**
His constant social planning requires their participation. Marianne values solitude, but declining invitations would seem ungracious.

**3. Subordinate Social Position:**
They're no longer independent gentry but dependent relations living on his property. This reduces their social status and authority.

**4. Gratitude Obligations:**
They must continuously demonstrate appreciation, limiting ability to criticize, refuse, or maintain distance.

**5. Insecurity:**
Their housing depends on Sir John's continued goodwill. Displeasing him could threaten their security.

**6. Privacy Invasion:**
His gregarious nature means he feels entitled to involve himself in their lives, limiting their ability to maintain boundaries.

**The Subtle Power Dynamics:**

**Sir John Doesn't Intend Harm:**
He's genuinely kind and wants to help. But his generosity still creates power imbalance regardless of intentions.

**Gratitude Limits Refusal:**
When someone has helped you significantly, refusing their requests feels ungrateful even when those requests are burdensome.

**Dependency Creates Vulnerability:**
The Dashwoods need Sir John's continued assistance, giving him power over their lives even if he doesn't consciously exploit it.

**Social Expectations:**
Regency society expected recipients of patronage to be continuously grateful, available, and deferential. These weren't optional but required behaviors.

**The Gender Dimension:**

**Women's Particular Vulnerability:**
Women's lack of economic options made them more dependent on patronage than men. Men could:
- Pursue careers or professions
- Earn independent income
- Maintain autonomy through economic independence

Women couldn't, making patronage relationships more coercive and inescapable for women than men.

**Mrs. Dashwood's Position:**
As widow, she must accept help while maintaining dignity. The strain of being simultaneously grateful and subordinate is particular to her gendered position.

**The Sisters' Marriage Prospects:**
Their dependent status affects how potential suitors perceive them. Being "Sir John's poor relations" changes their social position in ways that could limit romantic opportunities.

**The Psychological Cost:**

**Loss of Agency:**
Constantly deferring to patron's wishes erodes sense of self-determination and autonomy.

**Gratitude Fatigue:**
Continuous obligation to be grateful becomes exhausting emotional labor.

**Pride vs. Necessity:**
Balancing need for assistance with desire to maintain dignity creates internal conflict.

**Resentment:**
Even genuine generosity can breed resentment when it creates dependency and limits freedom.

**Self-Perception:**
Being dependent can affect self-worth, creating feelings of inadequacy or failure.

**Austen's Critique:**

Austen shows both sides:

**Sir John's Genuine Kindness:**
His generosity is real and provides crucial help. Without him, the Dashwoods would face worse alternatives.

**The System's Problems:**
But individual generosity doesn't solve structural inequality. The Dashwoods shouldn't have to depend on individual kindness—the system that made them so vulnerable is the real problem.

**The Complexity:**
Neither pure gratitude nor pure resentment is appropriate. The relationship is genuinely helpful AND creates problematic power dynamics.

**Modern Parallels:**

**Employment:**
Employer generosity (flexibility, understanding, assistance) is appreciated but creates obligation. Employees may feel unable to refuse extra work, set boundaries, or leave for better opportunities.

**Family Financial Help:**
Adult children receiving parental assistance appreciate support but may resent feeling controlled or infantilized. Parents who help may feel entitled to input on recipients' decisions.

**Scholarships and Funding:**
Recipients are grateful but programs often create obligations (specific careers, geographical limitations, service requirements) that limit autonomy.

**Social Services:**
Government assistance helps but often includes means-testing, behavioral requirements, and surveillance that recipients experience as degrading or controlling.

**The Ethical Questions:**

**For Patrons/Helpers:**
- How do we help without creating unhealthy dependency?
- How do we give generously without expecting control?
- How do we recognize power dynamics our generosity creates?

**For Recipients:**
- How do we accept needed help while maintaining dignity?
- How do we balance gratitude with reasonable boundaries?
- How do we recognize when assistance becomes coercive?

**For Society:**
- Should basic security depend on individual generosity?
- How do we create systems that provide support without degrading dependency?
- What obligations do we have to reduce structural inequality?

**Strategies for Healthier Helping:**

**For Those Offering Help:**

**1. Give Without Strings:**
Genuine generosity doesn't require ongoing gratitude, control, or input.

**2. Respect Autonomy:**
Recipients have right to make their own choices even when receiving assistance.

**3. Recognize Power Dynamics:**
Acknowledge that help creates power imbalance and work to minimize its negative effects.

**4. Don't Expect Continuous Gratitude:**
Initial appreciation is appropriate; ongoing demonstrations become burdensome.

**For Those Receiving Help:**

**1. Accept When Necessary:**
Pride shouldn't prevent accepting needed assistance.

**2. Maintain Boundaries:**
Gratitude doesn't require surrendering all autonomy or privacy.

**3. Plan for Independence:**
Work toward self-sufficiency when possible to reduce dependency.

**4. Recognize Healthy vs. Unhealthy Dynamics:**
Some assistance empowers; some controls. Distinguish between them.

**The Structural Solution:**

**Individual generosity is insufficient** because:
- It's inconsistent (Fanny vs. Sir John)
- It creates dependency and power imbalance
- It makes security contingent on others' character
- It often includes hidden costs

**Structural supports** (social safety nets, women's economic rights, accessible education/employment) reduce dependency on individual generosity, allowing people to:
- Maintain autonomy and dignity
- Make choices based on preference not survival
- Avoid power imbalances patronage creates
- Build genuine independence

**The Lesson:**

**For Understanding Literature:**
Austen shows how even genuine kindness occurs within power structures that create inequality. Sir John is kind, but the system that makes the Dashwoods depend on his kindness is problematic.

**For Personal Life:**
When we help others or receive help, we should:
- Recognize power dynamics assistance creates
- Give (or receive) in ways that preserve dignity
- Understand gratitude is appropriate but shouldn't require surrendering autonomy
- Distinguish healthy help from controlling dependency

**For Social Change:**
Systems that make vulnerable people dependent on others' voluntary generosity are inherently unstable and create unhealthy power dynamics. Working toward structural supports that allow independence is more just than relying on individual charity.

**The Takeaway:**

Sir John's generosity is genuine and necessary—without it, the Dashwoods would face disaster. But accepting his help creates patronage relationship with real costs: loss of autonomy, obligation to participate in his social plans, subordinate status, and dependency on his continued goodwill.

This teaches us that:
- Generosity can be simultaneously helpful and create problematic dynamics
- Power imbalances affect relationships even when patrons are kind
- Gratitude is appropriate but shouldn't require surrendering all autonomy
- Structural supports are preferable to individual charity because they preserve dignity and independence

Understanding patronage dynamics helps us navigate helping relationships more ethically and work toward systems that provide support without creating degrading dependency.`
    },
    {
      id: 'place-attachment',
      title: 'Romantic Attachment to Place: When Leaving Home Means Losing Self',
      question: 'Why does Marianne resist leaving Norland so intensely? What does her attachment to place reveal about sensibility and identity?',
      aiResponse: `**The Psychology of Place Attachment**

Marianne's intense pain at leaving Norland reveals her romantic attachment to place—an emotional bond to specific locations that transcends practical considerations. Understanding this attachment illuminates both her character and broader questions about relationship between place, memory, and identity.

**What Is Romantic Attachment to Place?**

**Beyond Practical Value:**
For most people, homes have practical value: shelter, security, convenience. But for some, places become deeply meaningful beyond utility—they're repositories of memory, meaning, beauty, and identity.

**Emotional Investment:**
Marianne sees Norland not just as a house but as:
- Landscape of beauty and meaning
- Site of memories and experiences
- Part of her identity and self-concept
- Physical manifestation of her past and family history
- Source of emotional security and comfort

**Inseparable from Self:**
For those with strong place attachment, specific locations become part of who they are. Leaving feels like losing part of oneself.

**Marianne's Response to Leaving:**

**Her Resistance:**
Marianne doesn't just accept necessity of leaving—she actively resists, mourns, and struggles with the loss.

**Her Expression:**
Her response is characteristically dramatic and emotional, demonstrating sensibility:
- She grieves intensely
- She expresses feelings openly
- She resists practical arguments
- She dwells on what's being lost

**Her Values:**
Her attachment reveals what she values:
- Beauty and aesthetic experience
- Emotional connection to places
- Memory and history
- Romantic ideals about home

**Elinor's Contrasting Response:**

**Practical Acceptance:**
Elinor also feels loss but approaches departure differently:
- Recognizes necessity
- Focuses on future rather than dwelling on past
- Maintains emotional control
- Makes practical preparations

**Different Attachment Style:**
Elinor's lesser place attachment doesn't mean she doesn't care but reflects:
- Different temperament (sense vs. sensibility)
- Different coping mechanism (forward vs. backward looking)
- Different values (practical vs. romantic)
- Different emotional expression (controlled vs. intense)

**The Significance of Their Difference:**

This contrast isn't about one being right and the other wrong but about:
- **Different temperaments** experiencing loss differently
- **Sense vs. sensibility** approaching change with different strategies
- **Personality differences** in how people form attachments

**Why Marianne's Attachment Matters:**

**For Her Character:**
Her intense place attachment shows:
- Deep emotional capacity for connection
- Romantic sensibility that feels intensely
- Difficulty adapting to change
- Vulnerability to loss and disappointment

**For Her Arc:**
This pattern will recur throughout the novel:
- Intense feelings create intense suffering when circumstances change
- Difficulty letting go of what's lost
- Preference for dwelling in past or future over engaging present
- Challenge of adapting to reality that doesn't match romantic ideals

**The Psychology Behind Place Attachment:**

**Memory and Identity:**
Places hold memories that form part of identity. Losing places means losing physical reminders of who we were and where we came from.

**Security and Belonging:**
Familiar places provide psychological security. Known environments reduce anxiety and provide comfort.

**Aesthetic Experience:**
For aesthetically sensitive people (like Marianne), beautiful landscapes provide emotional sustenance. Losing access feels like losing part of emotional life.

**Continuity:**
Places provide continuity across time, connecting past, present, and future. Leaving disrupts this continuity, creating disorientation.

**Control:**
In uncertain lives, familiar places offer stability and control. Displacement removes this anchor.

**Cultural and Historical Context:**

**Regency-Era Stability:**
Regency society was less mobile than modern society. People often lived their entire lives in one place, making place attachment more common and intense.

**Class and Place:**
For gentry like the Dashwoods, family estates represented not just homes but:
- Social position and identity
- Family history spanning generations
- Connection to community and tenants
- Physical manifestation of family status

Losing Norland means losing all these dimensions simultaneously.

**Women's Attachment:**
Women's more limited mobility and career options meant they formed stronger attachments to domestic spaces that were their primary sphere of activity and influence.

**Modern Parallels:**

**Displacement and Loss:**
Modern experiences echo Marianne's pain:
- Families displaced by foreclosure or eviction
- Communities disrupted by gentrification
- Immigrants and refugees losing homelands
- Elderly people leaving long-time homes
- Military families frequently relocating

**Individual Differences:**
People still vary in place attachment:
- Some form deep bonds to specific places
- Others adapt easily to new locations
- Neither is superior—just different temperaments

**Digital Age Mobility:**
Modern life involves more mobility and less place stability. This may:
- Reduce average place attachment
- Make those with strong attachment seem nostalgic or rigid
- Create different patterns of belonging (online communities vs. geographical)
- Raise questions about what constitutes "home" in mobile societies

**The Value and Limitation of Place Attachment:**

**Values:**

**Depth of Connection:**
Strong place attachment indicates capacity for deep emotional bonds, appreciation of beauty, and valuing continuity.

**Environmental Care:**
People attached to specific places often care more deeply about protecting those environments.

**Community Ties:**
Place attachment often correlates with strong community bonds and local engagement.

**Limitations:**

**Difficulty with Change:**
Strong attachment can make necessary adaptations more painful and challenging.

**Idealization:**
Romantic attachment may idealize places, missing their problems or limitations.

**Resistance to Growth:**
Clinging to past can prevent engagement with present or future possibilities.

**The Wisdom for Navigating Place Attachment:**

**Honor the Loss:**
Place attachment is genuine. Marianne's pain isn't silly or excessive—it reflects real loss of meaningful connection.

**But Adapt to Necessity:**
While honoring feelings, practical necessity sometimes requires leaving. The challenge is grieving while still moving forward.

**Balance Attachment and Flexibility:**
We can value places deeply while also developing resilience for necessary changes.

**Find New Attachments:**
Creating connection to new places doesn't betray old ones. It's possible to love multiple places across a lifetime.

**Austen's Insight:**

Austen doesn't mock Marianne's attachment or champion Elinor's adaptability as simply superior. Instead, she shows:
- Different temperaments experience loss differently
- Both responses have legitimacy
- Wisdom involves both feeling deeply AND adapting to necessity
- Sensibility creates capacity for profound connection but also vulnerability to loss

**The Lesson:**

**For Understanding Marianne:**
Her resistance to leaving isn't stubbornness but genuine grief over losing places central to her identity.

**For Understanding Difference:**
People form different levels of attachment to places. Neither strong nor weak attachment is superior—they're different ways of relating to environment.

**For Navigating Change:**
Major transitions require:
- Honoring what's being lost
- Grieving appropriately
- But also adapting to new circumstances
- Finding balance between memory and present

**For Modern Life:**
In increasingly mobile societies, we face questions about:
- How do we form meaningful attachments in transient lives?
- How do we honor place attachment while accepting necessary mobility?
- What replaces geographical stability when life requires frequent moves?
- How do we create "home" that can travel with us?

**The Takeaway:**

Marianne's romantic attachment to Norland isn't excessive sentiment but genuine psychological phenomenon where places become part of identity. Her pain at leaving teaches us that:
- Place attachment is real and meaningful for some people
- Different temperaments experience displacement differently
- Leaving familiar places can feel like losing part of oneself
- Wisdom involves both honoring these feelings and adapting to necessary changes

Understanding place attachment helps us appreciate diverse responses to displacement, honor that for some people geographical connection is profound, and recognize that in our mobile modern world, we face ongoing challenges about how to form meaningful attachments while accepting life's necessary transitions.`
    },
    {
      id: 'dependency-autonomy-power',
      title: 'The Paradox of Necessary Help: Dependency, Gratitude, and Lost Autonomy',
      question: 'How does accepting Sir John\'s generous help create dependency that limits the Dashwoods\' autonomy? What does this reveal about the complex power dynamics of assistance?',
      aiResponse: `**When Help Creates Obligation**

The Dashwoods need Sir John's assistance desperately—without it, they have no secure housing and limited prospects. Yet accepting his help creates a relationship of dependency that limits their autonomy and creates ongoing obligations. This paradox—needing help that simultaneously constrains freedom—is fundamental to understanding power, assistance, and social relationships.

**The Nature of Dependency:**

**What They Need:**
- **Housing**: Secure place to live
- **Social connections**: Opportunities to meet people and potential partners
- **Economic stability**: Affordable living situation within their reduced income
- **Fresh start**: Chance to rebuild lives after displacement

**What Dependency Creates:**
- **Gratitude obligations**: Must show appreciation appropriately
- **Social availability**: Expected to attend Sir John's gatherings
- **Limited refusal**: Can't easily decline invitations or requests
- **Subordinate position**: They're dependent relations, not equals
- **Reduced autonomy**: Decisions affected by maintaining patron's goodwill

**The Paradox:**

The help they desperately need creates the very limitations they'd prefer to avoid. They must accept constraints on their freedom to gain the security that would theoretically provide freedom.

**How Dependency Works:**

**1. Unequal Power**

The relationship is inherently unequal:
- **Sir John controls**: Housing, social access, continued goodwill
- **Dashwoods depend on**: His continued generosity, his social network, his protection
- **Power imbalance**: He can withdraw help; they can't demand it
- **Structural inequality**: His resources create their dependency

This creates relationship where nominal generosity masks real power dynamics.

**2. Gratitude as Currency**

They must "pay" for assistance with:
- **Expressed appreciation**: Demonstrating gratitude appropriately
- **Social availability**: Attending events, being good company
- **Deference**: Treating him with respect due to benefactor
- **Positive regard**: Maintaining friendly relationship regardless of personal feelings

Gratitude isn't just feeling but performance expected as exchange for help.

**3. Limited Boundaries**

Dependency reduces ability to maintain boundaries:
- Can they refuse invitations without seeming ungrateful?
- Can they decline his matchmaking efforts without offense?
- Can they request privacy without appearing cold?
- Can they make independent decisions without consulting him?

Their need for his continued goodwill limits their ability to assert preferences that differ from his.

**4. Loss of Agency**

While physically housed at Barton, their agency is constrained:
- **Social schedule**: Shaped by Sir John's constant planning
- **Social circle**: Determined by whom he introduces them to
- **Reputation**: Affected by being known as his dependent relations
- **Future prospects**: Partly dependent on his social facilitation

They trade autonomy for security—necessary trade but real cost.

**The Complexity of Sir John's Assistance:**

**Is He Exploiting Them?**

This is complicated:

**Arguments He's NOT:**
- His generosity is genuine and saves them from worse alternatives
- He doesn't demand excessive services or compromise their dignity
- His personality is naturally gregarious—he treats everyone this way
- He provides real benefits without obvious exploitation
- His motivation seems authentic kindness mixed with self-interest

**Arguments He IS (subtly):**
- His assistance serves his needs (company, social gatherings)
- He expects social availability that limits their autonomy
- His relentless sociability doesn't accommodate their different needs
- The power imbalance creates obligations they can't easily refuse
- Their dependency enables his control over their social lives

**The Reality:**

Probably both are true—he's genuinely generous AND the relationship creates problematic dynamics. Most patronage relationships involve this mixture: real kindness that also serves patron's interests and creates power imbalances.

**Modern Parallels:**

**Family Assistance:**

Modern families face similar dynamics:
- **Parents helping adult children**: Reducing rent or providing housing creates gratitude obligations and potential loss of autonomy—do parents feel entitled to input on life choices?
- **Sibling financial help**: One sibling with resources helping another during hardship creates power dynamics that may affect relationship equality
- **Extended family support**: Wealthy relatives helping during difficulty may expect attendance at family events, availability for requests, deference to their advice

**Workplace Dynamics:**

Employment creates similar patterns:
- **Employer assistance**: Companies providing benefits create employee dependency
- **Mentorship**: Helpful mentors may expect loyalty, availability, or specific career choices in return
- **Networking favors**: People who facilitate opportunities may expect reciprocal support

**Institutional Help:**

Social services create complex dynamics:
- **Welfare assistance**: Provides necessary support while creating bureaucratic control
- **Scholarships**: Enable education while potentially constraining major/career choices
- **Housing assistance**: Solves immediate problem while creating dependency on systems

**The Ethical Questions:**

**For Helpers:**

If you provide assistance:
- Do you earn the right to involvement in recipients' lives?
- Should help come without expectations, or is reciprocity reasonable?
- How do you balance genuine generosity with acknowledging your own motivations?
- What obligations do recipients have to you?
- How do you avoid using assistance to control others?

**For Recipients:**

If you need help:
- How much autonomy must you trade for security?
- What obligations are reasonable in exchange for assistance?
- How do you maintain dignity and agency while dependent?
- When is it appropriate to refuse help that comes with too many strings?
- How do you balance gratitude with boundary-setting?

**For Society:**

Structurally:
- How do we provide assistance that doesn't create problematic dependency?
- What social safety nets reduce need for patronage relationships?
- How do we balance encouraging family/community mutual support with recognizing power dynamics it creates?
- What rights do people have to assistance without loss of autonomy?

**The Dashwoods' Dilemma:**

They have limited options:
- **Accept Sir John's help**: Gain security but lose autonomy
- **Refuse and find alternative**: Likely worse housing, fewer opportunities, continued vulnerability
- **Accept while trying to maintain boundaries**: Difficult given power imbalance

They choose wisely—accepting help they desperately need. But the text encourages us to recognize the cost: their social lives, privacy, and autonomy are partly sacrificed to gain security.

**Historical Context:**

**Women's Particular Vulnerability:**

Women's limited earning capacity made them especially vulnerable to patronage relationships:
- Couldn't independently secure housing or income
- Marriage prospects depended partly on social connections patrons provided
- Legal status made them dependent on male relatives' or patrons' goodwill
- Social expectations made refusing assistance difficult

The Dashwoods' dependency reflects broader gender structures that made women vulnerable to these power dynamics.

**Modern Changes:**

While legal structures have changed:
- Women can earn independent income
- Legal rights provide more autonomy
- Social safety nets reduce dependence on individual patrons

Yet economic inequality still creates similar dynamics whenever people need assistance they can't access through markets or rights.

**The Teaching Moment:**

**For Understanding Power:**

Power operates not just through obvious coercion but through:
- Control of resources others need
- Creation of dependency relationships
- Expectations of gratitude and reciprocity
- Subtle pressure enabled by structural inequality

**For Receiving Help:**

When we need assistance:
- Recognize the trade-offs between security and autonomy
- Try to maintain boundaries while acknowledging obligations
- Be aware of how dependency affects relationship dynamics
- Accept necessary help while protecting core agency

**For Providing Help:**

When we have resources to help:
- Acknowledge our own motivations honestly
- Recognize power dynamics our assistance creates
- Try to provide help that empowers rather than creates dependency
- Respect recipients' autonomy even when helping
- Don't use assistance to control or extract excessive gratitude

**Austen's Wisdom:**

By showing Sir John's genuine generosity while also revealing the dependency it creates, Austen demonstrates that:
- Assistance is rarely purely altruistic or exploitative—usually both
- Power dynamics exist even in relationships characterized by kindness
- Dependency limits autonomy even when necessary and beneficial
- Gratitude and obligation can coexist uncomfortably

**The Universal Truth:**

Whenever economic or social inequality creates situations where some people must depend on others' assistance, power dynamics emerge that constrain both parties—patrons feel obligated to help yet may expect returns; recipients need help yet resent loss of autonomy.

The Dashwoods' situation reveals this eternal paradox: we need help that we also resent needing, that comes with costs we'd prefer not to pay, from people whose generosity is genuine but also serves their interests. Understanding this complexity helps us navigate both giving and receiving assistance with more awareness, less judgment, and greater compassion for the difficult positions that structural inequality creates for everyone involved.`
    },
    {
      id: 'fresh-start-grief-hope',
      title: 'Fresh Starts After Loss: Balancing Grief for the Past with Hope for the Future',
      question: 'How do the sisters balance grieving Norland with embracing the opportunity Barton represents? What does this teach about navigating major life transitions?',
      aiResponse: `**The Psychology of Beginning Again**

The invitation to Barton creates a classic dilemma of major life transitions: how do you honor grief for what's lost while embracing hope for what's ahead? The sisters' different responses reveal diverse approaches to this psychological challenge, with Elinor leaning toward future-focused adaptation and Marianne clinging to past-oriented grief.

**The Nature of Fresh Starts:**

**What "Fresh Start" Promises:**
- New home and stability
- Social connections and opportunities
- Escape from painful memories and current difficulties
- Chance to rebuild identity and prospects
- Possibility of better circumstances

**What "Fresh Start" Requires:**
- Leaving familiar places and routines
- Abandoning remaining hopes tied to old situation (for Elinor, proximity to Edward)
- Accepting that previous life is truly over
- Investing emotional energy in unfamiliar circumstances
- Tolerating uncertainty of unknown future

**What "Fresh Start" Feels Like:**
- Mixture of hope and anxiety
- Relief and loss simultaneously
- Excitement about possibilities alongside grief for what's ending
- Pressure to feel optimistic when still grieving
- Ambivalence about whether this is opportunity or merely necessity

**The Sisters' Different Responses:**

**Elinor (Future-Focused):**

Elinor tends toward practical acceptance:
- **Recognizes necessity**: They need housing; Barton provides it
- **Focuses on benefits**: New social connections, stable situation, fresh environment
- **Makes practical preparations**: Organizing, planning, facilitating transition
- **Manages emotions**: Grieves privately while functioning publicly
- **Looks forward**: Considers how to adapt rather than dwelling on loss

**Strengths:**
- Enables smooth transition
- Prevents wallowing in unproductive grief
- Maintains family morale
- Facilitates practical adaptation

**Costs:**
- May suppress genuine grief
- Risks not processing loss fully
- Could appear cold or unfeeling
- Might move forward prematurely

**Marianne (Past-Focused):**

Marianne resists accepting the transition:
- **Clings to Norland**: Romanticizes what's lost, sees it as irreplaceable
- **Resents necessity**: Feels pushed into situation rather than choosing it
- **Expresses grief openly**: Refuses to hide pain or pretend enthusiasm
- **Resists adaptation**: Doesn't want new home to replace old one
- **Looks backward**: Focuses on what's lost rather than what's possible

**Strengths:**
- Honors genuine grief authentically
- Refuses to minimize what mattered
- Maintains emotional honesty
- Recognizes that some losses are profound

**Costs:**
- Makes transition harder for everyone
- Prolongs suffering unnecessarily
- May miss opportunities through resistance
- Creates difficulty adapting to new circumstances

**The Psychological Challenge:**

**Why This Is Hard:**

Fresh starts after loss require simultaneous, seemingly contradictory processes:

**1. Grieving While Adapting**

You must:
- Acknowledge and process loss
- Invest energy in new circumstances
- Honor past while building future
- Feel sadness and hope simultaneously

How do you grieve fully while also adapting effectively?

**2. Letting Go While Staying Connected**

You must:
- Accept that previous life is over
- Maintain connection to meaningful memories
- Move forward without betraying the past
- Build new identity while honoring old self

How do you let go without feeling you're betraying what mattered?

**3. Being Realistic While Staying Hopeful**

You must:
- Recognize challenges in new situation
- Maintain optimism about possibilities
- Avoid either idealization or pessimism
- Balance enthusiasm with realistic expectations

How do you hope wisely without either denial or despair?

**4. Respecting Different Timelines**

People process transitions differently:
- Some adapt quickly; others need more time
- Some focus forward; others need to process backward
- Some express openly; others grieve privately
- No single "right" pace or approach

How do families navigate transitions when members have different needs?

**What Healthy Transition Requires:**

**From Psychology:**

Research on transitions and grief suggests healthy adaptation involves:

**1. Acknowledging Loss**

Don't minimize or rush through grief:
- Loss is real and deserves recognition
- Grief is necessary, not self-indulgence
- Processing loss enables eventual adaptation
- Suppressed grief often emerges later

Marianne's instinct to grieve is healthy; her resistance to adaptation is where it becomes problematic.

**2. Gradual Adaptation**

Don't expect immediate adjustment:
- Transitions take time
- Ambivalence is normal
- Setbacks and difficult days will occur
- Adaptation happens gradually, not instantly

Elinor's approach risks pushing for adaptation too quickly, not allowing natural grief process.

**3. Holding Both**

The goal isn't choosing between grief and hope but holding both:
- Grieve what's lost AND explore what's possible
- Honor past AND build future
- Feel sadness AND remain open to joy
- Remember what mattered AND discover new meanings

This psychological flexibility—tolerating ambivalence rather than resolving it prematurely—characterizes healthy adaptation.

**4. Self-Compassion**

Be gentle with yourself and others:
- Transitions are difficult
- Different people adapt differently
- No single "correct" way to feel
- Allow time and space for complex emotions

**Historical Context:**

**Women's Limited Control:**

For Dashwood women, the transition isn't fully chosen:
- They didn't choose to leave Norland
- They can't easily return or change plans
- Their futures depend on adaptation to circumstances they couldn't control
- Economic vulnerability makes resistance impractical

This makes their psychological challenge harder—it's easier to embrace fresh starts we choose than those forced upon us.

**Modern Parallels:**

**Forced Transitions:**

Modern people face similar forced fresh starts:
- **Job loss**: Must adapt to unemployment or career change
- **Divorce**: Must rebuild life as single person
- **Health crises**: Must adapt to changed physical circumstances
- **Economic hardship**: Must adjust to reduced circumstances
- **Relocation**: Must move for job, family, or financial reasons

All involve balancing grief for what's lost with building new life.

**Chosen Transitions:**

Even chosen transitions create ambivalence:
- **Career changes**: Exciting but involve leaving colleagues, expertise, identity
- **Relocations**: New opportunities but loss of community, familiarity
- **Relationship transitions**: New partnership requires leaving single identity
- **Life stage shifts**: Parenthood, retirement, etc., involve loss alongside gain

**The Wisdom of Integration:**

Neither sister's approach is ideal; wisdom lies in integration:

**From Marianne**: Honor genuine grief, refuse to minimize what mattered, maintain emotional authenticity, recognize that some losses are profound and quick adaptation would be false.

**From Elinor**: Function despite pain, make practical preparations, remain open to possibilities, recognize that dwelling in grief indefinitely prevents building future.

**Integration**: Grieve authentically while adapting practically. Feel loss deeply while remaining open to new possibilities. Honor past while building future. Accept that transitions are messy, ambivalent processes requiring patience with ourselves and others.

**The Teaching Moment:**

**For Understanding Transitions:**

Major life transitions involve:
- Simultaneous loss and possibility
- Complex, contradictory emotions
- No single "right" way to feel or adapt
- Different people processing at different paces

**For Personal Development:**

When facing fresh starts:
- Allow genuine grief rather than rushing to optimism
- Don't get stuck in resistance or nostalgia
- Hold both grief and hope simultaneously
- Be patient with your own process
- Accept ambivalence as normal

**For Supporting Others:**

When others face transitions:
- Validate their grief without encouraging wallowing
- Support adaptation without minimizing loss
- Allow their process without imposing your timeline
- Recognize diverse responses as valid
- Offer both practical help and emotional support

**Austen's Wisdom:**

By showing both Elinor's practical adaptation and Marianne's resistance, Austen reveals that:
- Healthy transition requires both processing loss and embracing possibility
- No single approach is sufficient
- Families need both forward-looking and backward-looking members
- Wisdom lies in integration, not choosing one approach

**The Universal Challenge:**

How do we honor what we've lost while building what's ahead? How do we grieve authentically while adapting effectively? How do we move forward without betraying the past? How do we balance looking backward with moving forward?

These questions face anyone experiencing major life transitions—the Dashwood sisters' responses model different approaches and remind us that the goal isn't choosing between grief and hope but learning to hold both simultaneously, adapting to new circumstances while honoring what we've lost, building futures while respecting pasts.

The invitation to Barton represents both loss (leaving Norland, leaving proximity to Edward, leaving familiar life) and possibility (new home, new connections, fresh start). How the sisters navigate this duality—with Elinor's practical hope and Marianne's authentic grief—teaches us about the messy, ambivalent, difficult work of major life transitions.

The wisdom: Don't rush through grief to reach hope, but don't dwell in grief and refuse adaptation. Honor loss while embracing possibility. Grieve the past while building the future. Feel the complexity fully rather than resolving it prematurely. That's the psychological work of fresh starts after loss—difficult, necessary, and deeply human.`
    },
    {
      id: 'extrovert-introvert-social-needs',
      title: 'The Tyranny of the Extrovert: When Social Generosity Ignores Different Needs',
      question: 'Sir John\'s gregarious generosity doesn\'t account for the sisters\' different social needs. What does this reveal about how extroverts and introverts experience sociability differently?',
      aiResponse: `**When Helpers Assume Everyone Shares Their Needs**

Sir John is genuinely generous and well-intentioned—he provides housing, facilitates social connections, and creates opportunities for the Dashwood sisters. Yet his relentless sociability, his constant party-planning, and his inability to understand that others might prefer solitude reveal a subtle tyranny: he assumes everyone shares his gregarious nature and that more social activity is always better.

**Sir John's Personality:**

**His Nature:**
- Extremely extroverted and social
- Energized by gatherings and company
- Uncomfortable with solitude or quiet
- Genuinely believes socializing helps everyone
- Can't fathom that others might experience social situations differently

**His Behavior:**
- "For ever forming parties"
- Constantly introducing people
- Matchmaking relentlessly
- Expecting attendance at all gatherings
- Interpreting refusals as rudeness or unhappiness

**His Assumption:**
- Social activity = happiness
- More company = better situation
- Solitude = loneliness (never preference)
- His needs are universal needs

**The Sisters' Different Needs:**

**Social Preferences Vary:**

People have diverse social needs:
- **Extroverts** (like Sir John): Energized by social interaction, drained by solitude
- **Introverts** (like Marianne in some ways): Energized by solitude, drained by excessive social interaction
- **Ambiverts** (like Elinor): Somewhere between, needing balance of both

**Marianne's Needs:**

Marianne values:
- **Solitude for reflection**: Time alone to think, feel, read, walk
- **Deep conversations**: Meaningful exchanges rather than superficial socializing
- **Natural beauty**: Solitary walks in landscapes
- **Aesthetic experience**: Music, poetry, art—often enjoyed privately
- **Emotional authenticity**: Genuine connection rather than social performance

Sir John's constant parties—eating "cold ham and chicken out of doors"—represent exactly what Marianne doesn't want: superficial socializing, obligatory cheerfulness, forced interaction with strangers.

**The Conflict:**

**What Sir John Provides:**
- Frequent large gatherings
- Introductions to many people
- Constant activity and entertainment
- Cheerful, outgoing sociability

**What Marianne Needs:**
- Time alone to process grief and emotions
- Deep conversations with few intimate friends
- Privacy to be herself without social performance
- Freedom to choose when to socialize

**What He Can't Understand:**
- That his "help" might feel burdensome
- That refusing invitations isn't rudeness
- That solitude isn't loneliness
- That different people have different social needs

**The Power Dynamic:**

This creates problematic situation:

**1. Dependency Limits Refusal**

Because they depend on Sir John:
- Refusing invitations seems ungrateful
- Requesting privacy appears antisocial
- Not attending events might offend benefactor
- They must perform enthusiasm regardless of actual feelings

**2. His Good Intentions Make Resistance Difficult**

Because he genuinely means well:
- Criticizing his constant socializing seems churlish
- He believes he's helping them adapt and meet people
- His motivation is kind (if misguided)
- Resistance appears as rejection of generosity

**3. Social Expectations Support Him**

Society validates his approach:
- Gregariousness seen as generous
- Sociability interpreted as kindness
- Solitude viewed suspiciously as unfriendliness
- His perspective seems obviously correct

**The Result:**

Marianne must either:
- Attend constant events despite preferring solitude (exhausting, inauthentic)
- Refuse invitations and seem ungrateful/antisocial (damages relationship, threatens security)
- Find ways to balance both (requires skill and emotional labor)

**Modern Terminology: Introvert/Extrovert:**

While Austen didn't have this vocabulary, she understood the phenomenon:

**Extroverts:**
- Gain energy from social interaction
- Process thoughts by talking
- Prefer stimulating environments
- Experience solitude as deprivation
- Assume others share these needs

**Introverts:**
- Gain energy from solitude
- Process thoughts internally
- Prefer calm environments
- Experience excessive socialization as draining
- Need time alone to recharge

**The Tyranny of Extrovert Norms:**

Modern society often privileges extroversion:
- Open office plans (constant interaction)
- "Networking" as career requirement
- Social media rewarding constant sharing
- Introversion pathologized as shyness or social anxiety
- Solitude interpreted as loneliness requiring intervention

Like Sir John, extroverted culture often:
- Assumes socialization is universally beneficial
- Interprets preference for solitude as problem to fix
- Doesn't recognize that helping might harm
- Can't fathom different personalities have different needs

**Historical Context:**

**Social Obligations:**

In Regency England:
- Women's limited options made social connections crucial
- Marriage prospects depended partly on being seen socially
- Refusing social invitations was serious breach of etiquette
- Solitude was difficult to achieve and maintain
- Privacy was luxury, not expectation

Sir John's constant socializing wasn't just his preference but also what society expected—he was genuinely trying to help by facilitating social connections the sisters needed.

**Modern Parallels:**

**Workplace:**
- **Team-building required attendance**: Introverts drained by constant "fun" activities
- **Open offices**: No private space for concentration
- **Networking expectations**: Career advancement requires social performance
- **Meeting culture**: Constant collaboration exhausts some personality types

**Family:**
- **Extroverted family members**: Can't understand why you don't want to attend every gathering
- **"But we're helping you get out!"**: Assuming solitude is problem to solve
- **Obligation to participate**: Refusing seems antisocial or ungrateful
- **Different needs invalidated**: "You're just shy" or "You need to be more social"

**Social Pressure:**
- **FOMO culture**: Constant activity presented as ideal
- **Social media**: Pressure to be constantly connected
- **"Putting yourself out there"**: Dating, career, friendship advice assuming more is better
- **Pathologizing introversion**: Treating preference for solitude as social anxiety requiring treatment

**The Wisdom Needed:**

**From Extroverts (Sir Johns):**

If you're naturally social:
- **Recognize different personalities exist**: Not everyone gains energy from socializing
- **Don't impose your needs on others**: Your preferences aren't universal
- **Accept refusals gracefully**: "No" doesn't mean rejection of your friendship
- **Offer options, not obligations**: Let people choose participation level
- **Understand that helping requires understanding**: What helps you might drain others

**From Introverts:**

If you need solitude:
- **Communicate your needs**: Many extroverts genuinely don't understand different requirements
- **Set boundaries**: Decline invitations when necessary for your wellbeing
- **Don't mistake preference for moral superiority**: Different doesn't mean better
- **Recognize social connection has value**: Even if draining, some socializing serves important purposes
- **Find compromise**: Balance your needs with social obligations

**From Society:**

Structurally:
- **Validate diverse personality types**: Neither extroversion nor introversion is superior
- **Create spaces for different needs**: Options for both social connection and solitude
- **Stop pathologizing introversion**: Preference for solitude isn't disorder
- **Recognize power dynamics**: When helpers can't understand different needs, their "help" can harm

**The Teaching Moment:**

**For Understanding Personality:**

People genuinely experience social situations differently:
- What energizes one person exhausts another
- Social needs vary dramatically
- Neither preference is deficient
- Understanding differences reduces judgment

**For Providing Help:**

When helping others:
- Ask what they need rather than assuming
- Recognize your needs might differ from theirs
- Accept that refusing your help isn't rejection
- Understand that different personalities need different support

**For Receiving Help:**

When someone's help doesn't fit your needs:
- Communicate clearly about your different requirements
- Appreciate good intentions while setting boundaries
- Find ways to accept help that works for your personality
- Don't mistake different needs for ingratitude

**Austen's Insight:**

By showing Sir John's genuine generosity alongside his inability to understand different social needs, Austen reveals:
- Good intentions don't guarantee helpful actions
- Assuming others share our needs can make our "help" burdensome
- Power dynamics complicate refusing help that doesn't fit
- Personality differences affect what kinds of support actually support

**The Universal Truth:**

We all tend to assume our needs and preferences are universal—extroverts genuinely believe socializing helps everyone feel better, just as introverts struggle to understand why anyone would want constant company. This assumption—that how we're built is how everyone's built—creates situations where our attempts to help actually burden others.

Sir John isn't malicious—he's genuinely trying to help the Dashwood sisters adapt and find happiness. But his inability to understand that they might prefer fewer parties, more solitude, and less relentless sociability means his generosity comes with exhausting obligations.

The wisdom: When helping others, ask what they need rather than assuming they need what you would need. Recognize that personality differences are real, that diverse social needs are valid, and that sometimes the most generous thing we can do is leave people alone when they need solitude rather than insisting they join our parties.

Two hundred years before modern psychology developed introvert/extrovert concepts, Austen understood this dynamic—showing us a genuinely kind extrovert whose relentless sociability doesn't account for others' different needs, and reminding us that effective generosity requires understanding the specific needs of those we're helping rather than projecting our own needs onto them.`
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Teaching tools and activities
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Character Contrast Scene',
      description: 'Write a scene contrasting generous and selfish characters, showing how different people respond to the same situation.',
      purpose: 'Teaches students to create character contrast and explore themes through comparison.'
    },
    
    activity: {
      title: 'Generosity Discussion',
      description: 'Discuss what constitutes genuine generosity and how people balance kindness with social obligations.',
      materials: 'Discussion questions, examples'
    },
    
    crossCurricular: {
      title: 'Social Psychology of Generosity',
      description: 'Partner with psychology teachers to explore why people are generous and what motivates helping behavior.',
      subjects: ['Psychology', 'Sociology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE (Optional)
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'The Ethics of Generosity and Obligation',
    prompt: 'Analyze the forms of generosity and obligation in this chapter. What are the ethics of family assistance? When is generosity genuine vs. obligatory?',
    guidingQuestions: [
      'What motivates Sir John\'s generosity?',
      'How does it differ from Fanny\'s approach?',
      'What are the ethics of family obligations?'
    ],
    thinkingFramework: {
      analyze: 'Examine the forms of generosity shown.',
      evaluate: 'Assess motivations and ethics.',
      synthesize: 'Develop understanding of generosity and obligation.'
    },
    expectedDepth: 'Strong responses analyze different forms of generosity, assess motivations, and apply ethical frameworks.',
    classroomApplication: 'Essay or discussion. 1-2 class periods.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS - Closing Motivation
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(6),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter
  // ===================================================================
  nextTimeTeaser: {
    emoji: '✨',
    title: 'Next: Arrival at Barton',
    preview: 'The family arrives at Barton Cottage and meets their neighbors, including Colonel Brandon, who will become important to Marianne\'s story.',
    hookQuestion: 'How will Barton differ from Norland? What new relationships will develop?'
  }
}

