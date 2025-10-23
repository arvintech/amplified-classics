/**
 * WUTHERING HEIGHTS - CHAPTER 9
 * 
 * Catherine confesses to Nelly that Edgar Linton has proposed and she will accept, devastating the eavesdropping Heathcliff who flees
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter9: ChapterData = {
  number: 9,
  title: '',
  
  readingTime: 18,
  pages: 10,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Catherine confesses to Nelly that Edgar has proposed marriage and she will accept—despite declaring "I AM Heathcliff"—but Heathcliff, eavesdropping, only hears her say marrying him would degrade her and flees into the night.',
    
    full: [
      'Catherine comes to Nelly Dean with news: Edgar Linton has proposed marriage. Nelly asks if Catherine has accepted, and Catherine admits she has—though she\'s clearly conflicted. When Nelly asks if she loves Edgar, Catherine\'s response is telling: she gives practical reasons (he\'s handsome, pleasant, rich, will make her the greatest woman in the neighborhood) but struggles to articulate genuine passion. She says she loves Edgar like "the foliage in the woods: time will change it, I\'m well aware, as winter changes the trees." Not exactly a ringing endorsement of eternal love.',
      
      'Then Nelly asks the crucial question: what about Heathcliff? Catherine explains it would "degrade" her to marry Heathcliff because Hindley has reduced him so low. Heathcliff, who has been listening from behind a bench, hears only this—that marrying him would be degradation—and silently flees into the stormy night. He doesn\'t hear what Catherine says next, which is the novel\'s most famous declaration of love.',
      
      'Catherine continues, explaining to Nelly that she\'s marrying Edgar precisely to help Heathcliff—she\'ll use Edgar\'s wealth and position to elevate Heathcliff from Hindley\'s oppression. Then comes the confession: her love for Edgar is temporary and changeable, but her love for Heathcliff is eternal and elemental. "I AM Heathcliff!" she declares—they\'re not just connected but spiritually identical, two halves of one being. Whatever their souls are made of, hers and Heathcliff\'s are the same. She believes she can marry Edgar socially while remaining spiritually united with Heathcliff.',
      
      'When Catherine realizes Heathcliff has overheard and fled, she becomes hysterical, running into the storm to search for him. She stays out all night in the rain, returns soaked and feverish, and falls seriously ill. Heathcliff is gone—disappeared into the night without a trace. Catherine\'s decision to marry Edgar, combined with Heathcliff\'s misunderstanding of her motives, has set the tragedy in irreversible motion. The chapter ends with Heathcliff gone and Catherine delirious with fever, the first of many illnesses that will eventually kill her. The novel\'s central misunderstanding—overhearing rejection but missing the declaration of love—drives everything that follows.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Tragic Irony (Overhearing)',
      definition: 'When a character makes a decision based on incomplete information they overheard, creating tragic misunderstanding—knowing just enough to be wrong.',
      context: 'Heathcliff hears Catherine say marrying him would "degrade" her but flees before hearing "I AM Heathcliff" and her explanation that she\'s marrying Edgar to help him. This partial knowledge creates the novel\'s central tragedy: if he\'d stayed five more minutes, everything would be different.',
      whyItMatters: 'Tragic irony shows how misunderstanding drives tragedy—not malice or fate but incomplete knowledge leading to irreversible decisions. This makes tragedy feel simultaneously inevitable (the structure creates misunderstanding) and preventable (if only he\'d stayed, if only she\'d spoken sooner). Great tragedy makes us feel "if only" while showing why "if only" was impossible.'
    },
    {
      term: 'Romantic vs. Companionate Love',
      definition: 'The difference between passionate, transcendent romantic love and practical, comfortable companionate love—two incompatible visions of marriage.',
      context: 'Catherine describes loving Edgar like "foliage in the woods" (changeable, seasonal, pleasant) but loving Heathcliff like "eternal rocks beneath" (unchanging, fundamental, necessary). She distinguishes between social marriage (Edgar) and spiritual unity (Heathcliff), believing she can have both.',
      whyItMatters: 'Victorian marriage required one partner but Catherine wants both kinds of love from different men. Her belief she can separate social self from spiritual self is the novel\'s central delusion. Understanding these different types of love helps us see why Catherine thinks her plan could work and why it absolutely cannot.'
    },
    {
      term: 'Dramatic Monologue',
      definition: 'An extended speech by one character revealing their psychology, values, and internal conflicts—here, Catherine\'s confession to Nelly.',
      context: 'Catherine\'s confession is a dramatic monologue where she reveals her entire psychological state: practical calculation (Edgar\'s wealth), social ambition (being "greatest woman in the neighborhood"), spiritual conviction ("I AM Heathcliff"), and tragic self-deception (believing she can have both). All her contradictions emerge in one speech.',
      whyItMatters: 'Dramatic monologues reveal character through their own words rather than narrator commentary. We see Catherine\'s mind working—her rationalizations, her genuine feelings, her self-deception. We understand her not through judgment but through witnessing her attempt to explain the inexplicable: why marry one man while loving another.'
    },
    {
      term: 'Pathetic Fallacy (The Storm)',
      definition: 'Nature reflecting human emotions—the external storm mirrors Catherine\'s internal turmoil and foreshadows coming tragedy.',
      context: 'The night Catherine confesses and Heathcliff flees, a violent storm rages. Catherine runs into the rain searching for him, stays out all night in the tempest, returns soaked and feverish. The storm isn\'t just background—it\'s the emotional chaos made physical, the violence of their separation externalized as weather.',
      whyItMatters: 'Brontë uses storms throughout to mark emotional/psychological crisis. The pathetic fallacy shows internal states becoming external reality—Catherine and Heathcliff\'s spiritual connection is so powerful that even nature responds to their separation. This isn\'t just weather; it\'s cosmic commentary on human tragedy.'
    },
    {
      term: 'The Impossible Choice',
      definition: 'A tragic dilemma where every option leads to devastating loss—no good choice exists, only different forms of sacrifice.',
      context: 'Catherine must choose: marry Heathcliff (social degradation, poverty, Hindley\'s abuse) or marry Edgar (social advancement, comfort, spiritual betrayal). She tries to escape the choice by taking both, but Victorian society permits no such division. Heathcliff offers spiritual unity; Edgar offers social legitimacy. She needs both but can have only one.',
      whyItMatters: 'Great tragedy presents impossible choices where the protagonist is doomed regardless of decision. This prevents simple moral judgment (we can\'t just say "she should have chosen differently") because both choices require devastating sacrifice. Understanding impossible choices creates empathy: we see why Catherine makes her choice while recognizing it cannot work.'
    },
    {
      term: 'Identity Fusion vs. Identity Boundaries',
      definition: 'Catherine\'s claim "I AM Heathcliff" expresses identity fusion—seeing yourself as merged with another rather than maintaining distinct boundaries.',
      context: 'Catherine doesn\'t say "I love Heathcliff" but "I AM Heathcliff"—claiming not connection but identity. She sees him not as separate beloved but as extension of her own being. This fusion makes separation literally threatening to self—losing him means losing part of herself. It\'s why she thinks marrying Edgar is compatible: Edgar is husband, but Heathcliff is self.',
      whyItMatters: 'Understanding identity fusion vs. healthy boundaries helps us see why Catherine\'s psychology is both profound and pathological. She experiences genuine spiritual unity with Heathcliff but this fusion prevents her from seeing him as separate person with his own needs and reactions. Her "I AM Heathcliff" is both the novel\'s greatest expression of love and its most dangerous delusion.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Catherine Earnshaw',
      development: 'This chapter reveals Catherine\'s full psychological complexity through her confession. She\'s not simply choosing Edgar over Heathcliff—she\'s attempting to occupy two incompatible identities simultaneously. She believes she can be Edgar\'s wife (social self) while remaining Heathcliff\'s spiritual double (authentic self). Her famous "I AM Heathcliff" expresses genuine spiritual fusion, but her plan to marry Edgar shows she doesn\'t understand that Victorian marriage claims total identity. She thinks she\'s being clever—marrying Edgar to gain resources to help Heathcliff—but she\'s actually attempting the impossible: serving two masters, inhabiting two selves, maintaining divided loyalties. Her tragedy is that she\'s wrong about something she\'s absolutely certain about. She believes her spiritual bond with Heathcliff transcends social reality; the novel will prove that social reality destroys spiritual bonds.',
      keyTrait: {
        emoji: '💔',
        text: 'Tragically Self-Deceived'
      }
    },
    {
      name: 'Heathcliff',
      development: 'Heathcliff\'s decision to leave is the novel\'s pivotal action. He overhears Catherine say marrying him would "degrade" her—confirmation of what he\'s learned through systematic degradation: social position matters more than love, he\'s been reduced too low to be acceptable, his love is worthless because he is worthless. He doesn\'t stay to hear "I AM Heathcliff" because he\'s learned not to hope. Years of abuse have taught him to expect rejection, so when he hears it, he accepts it as truth and flees. His leaving isn\'t just flight—it\'s acceptance of what he\'s been taught: he\'s too degraded to be loved. But his departure also reveals agency: he refuses to remain where he\'s not wanted, won\'t witness Catherine\'s marriage, chooses exile over humiliation. This decision—to leave rather than hear the whole truth—determines his entire future.',
      keyTrait: {
        emoji: '🏃',
        text: 'Flight From Humiliation'
      }
    },
    {
      name: 'Edgar Linton',
      development: 'Edgar is mostly absent from this chapter but his presence looms. Catherine describes him in lukewarm terms: "handsome, and pleasant to be with," "young and cheerful," will make her "the greatest woman of the neighborhood." These are social calculations, not passionate declarations. Edgar represents everything practical—wealth, position, respectability, comfort. He\'s "foliage in the woods" (pleasant but changeable) compared to Heathcliff\'s "eternal rocks." But Edgar has what Heathcliff lacks: social legitimacy. He can offer marriage, home, position—all the things Victorian women needed and couldn\'t obtain independently. Edgar\'s not villain or fool; he\'s the acceptable choice, which is precisely the problem.',
      keyTrait: {
        emoji: '📜',
        text: 'Respectable Choice'
      }
    },
    {
      name: 'Nelly Dean',
      development: 'Nelly serves as confessor and conscience, asking the questions that force Catherine to articulate her choices. She tries to stop Catherine from accepting Edgar, recognizing the impossibility of the situation. But Nelly also reveals her limitations: she sees Catherine\'s choice as morally wrong (betraying Heathcliff, deceiving Edgar) without understanding the structural impossibility. Nelly believes Catherine should "choose correctly," not recognizing there is no correct choice. Her moral clarity—"you love Heathcliff, so marry him"—ignores the social realities that make such a choice devastating. She means well but can\'t imagine alternatives to the system she inhabits.',
      keyTrait: {
        emoji: '⚖️',
        text: 'Moral but Limited'
      }
    },
    {
      name: 'Hindley Earnshaw',
      development: 'Though not prominently featured, Hindley\'s role is crucial: his degradation of Heathcliff creates the impossibility Catherine faces. She explicitly says she can\'t marry Heathcliff because "Hindley has brought him so low." Hindley\'s systematic oppression of Heathcliff makes him socially unacceptable, creating the conditions for Catherine\'s impossible choice. Hindley doesn\'t just abuse Heathcliff—he destroys Catherine\'s future by making her authentic love socially impossible. His villainy echoes through generations.',
      keyTrait: {
        emoji: '⛓️',
        text: 'Absent but Decisive'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotes with analysis
  // ===================================================================
  quotes: [
    {
      text: 'It would degrade me to marry Heathcliff now; so he shall never know how I love him.',
      analysis: 'This sentence—what Heathcliff overhears before fleeing—contains tragic irony. Catherine means: "Society has degraded Heathcliff so low that marrying him would ruin me socially, but I love him spiritually." Heathcliff hears: "Marrying me would degrade her because I\'m worthless; she doesn\'t love me." The word "degrade" means different things to each: Catherine means social degradation (loss of status), Heathcliff hears personal degradation (he himself is degrading). This misunderstanding—same words, different meanings—drives the tragedy. If Heathcliff understood she meant social position rather than personal worth, he might stay. But systematic degradation has taught him to interpret everything as confirmation of his worthlessness.'
    },
    {
      text: 'My great miseries in this world have been Heathcliff\'s miseries, and I watched and felt each from the beginning: my great thought in living is himself.',
      analysis: 'Catherine describes identity fusion: Heathcliff\'s suffering is her suffering, his existence is her reason for living. This isn\'t healthy interdependence but merged identity—she experiences his pain as her own, cannot separate his wellbeing from hers. This explains why she thinks marrying Edgar while loving Heathcliff is viable: Edgar is external (husband, social role) but Heathcliff is internal (self, spiritual core). She doesn\'t see marrying Edgar as betraying Heathcliff because Heathcliff isn\'t separate from her—he\'s part of her that cannot be betrayed by social arrangements. This psychology is simultaneously profound (genuine spiritual unity) and pathological (inability to see Heathcliff as separate person who will experience her marriage as abandonment).'
    },
    {
      text: 'Nelly, I am Heathcliff! He\'s always, always in my mind: not as a pleasure, any more than I am always a pleasure to myself, but as my own being.',
      analysis: 'The novel\'s most famous quote reveals Catherine\'s psychology entirely. "I AM Heathcliff"—not "I love" but "I am." She claims identity, not affection. He\'s "not as a pleasure" (not pleasant or enjoyable) but "as my own being" (fundamental and inescapable). This is crucial: she doesn\'t love Heathcliff because he makes her happy but because he\'s part of her identity. Just as you can\'t divorce yourself from your own consciousness, Catherine believes she can\'t divorce herself from Heathcliff regardless of who she marries socially. This explains her certainty that marrying Edgar is compatible with loving Heathcliff—social marriage doesn\'t affect spiritual identity. But she\'s wrong: Victorian marriage claimed total identity, and social reality destroys spiritual bonds regardless of internal certainty.'
    },
    {
      text: 'If all else perished, and he remained, I should still continue to be; and if all else remained, and he were annihilated, the universe would turn to a mighty stranger.',
      analysis: 'Catherine articulates an apocalyptic vision: Heathcliff is more fundamental than existence itself. If everything else disappeared but he remained, she\'d still exist (because she is him). If everything else remained but he disappeared, the universe would become alien and incomprehensible. This isn\'t romantic exaggeration—it\'s literal metaphysics: Heathcliff is her ontological anchor, the fixed point that makes reality coherent. This explains her later mental breakdown and death: when Heathcliff disappears, her prediction comes true—the universe does become a "mighty stranger," reality loses coherence, she cannot continue to exist. Her language here is prophetic: she\'s describing her own future dissolution.'
    },
    {
      text: 'He\'s more myself than I am. Whatever our souls are made of, his and mine are the same.',
      analysis: 'Catherine claims Heathcliff is "more myself than I am"—he\'s more authentically her than her own conscious self. This suggests her social self (Catherine Earnshaw, Edgar\'s future wife) is false or secondary, while Heathcliff represents her authentic being. "Whatever our souls are made of" acknowledges she doesn\'t understand the metaphysics, but empirically knows: their souls are identical substance. This creates impossible situation: if you believe you share one soul with someone, how can you marry another? Catherine thinks she can because she distinguishes social self (can marry Edgar) from spiritual self (is Heathcliff). But this distinction—between social performance and authentic identity—cannot be maintained in reality. Victorian marriage claimed the whole person, not just social self.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS
  // Intelligence Amplified deep analysis
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'The Tragedy of Incomplete Information',
        explanation: 'The chapter\'s central tragedy is Heathcliff overhearing partial truth. He hears "degrade me to marry Heathcliff" but not "I AM Heathcliff." This incomplete information drives his decision to flee, which determines the rest of the novel. Brontë shows how tragedy emerges not from malice or fate but from information asymmetry: different characters knowing different things, making decisions based on partial knowledge. If Heathcliff had stayed five more minutes, heard the full confession, everything would change. But his systematic degradation has taught him not to hope, so when he hears rejection, he accepts it as complete truth. The tragedy is structural: the situation creates the misunderstanding, which creates the irreversible decision.'
      },
      {
        name: 'Identity Fusion and Its Impossibilities',
        explanation: 'Catherine\'s "I AM Heathcliff" expresses identity fusion—merged rather than connected selves. This psychology is both profoundly romantic (spiritual unity transcending physical separation) and tragically impossible (society requires distinct individuals with clear boundaries). Catherine believes identity fusion means she can marry Edgar while remaining spiritually united with Heathcliff—social marriage won\'t affect spiritual identity. But she doesn\'t understand that Victorian marriage claimed total identity: wives became legally and socially absorbed into husbands. You couldn\'t maintain separate spiritual identity while being legally "one flesh" with your husband. Catherine\'s psychology—genuine and deeply felt—crashes against social reality that permits no such distinction.'
      },
      {
        name: 'Romantic Love vs. Social Reality',
        explanation: 'The chapter presents the conflict between romantic ideals (love conquers all, spiritual unity transcends worldly concerns) and social realities (marriage requires economic security, social position matters, women need male protection in Victorian society). Catherine\'s romantic conviction that she can have both Edgar (social security) and Heathcliff (spiritual unity) fails because social reality doesn\'t recognize spiritual marriage. Victorian society had one category—legal marriage—and it claimed the whole person. Catherine tries to create dual existence: social wife to Edgar, spiritual self fused with Heathcliff. Society permits no such division, and her attempt to force this impossibility destroys everyone.'
      }
    ],
    literaryTechniques: [
      {
        name: 'The Overhead Confession Structure',
        explanation: 'Brontë structures the chapter around overhearing: Heathcliff listens from behind a bench, Catherine doesn\'t know he\'s there, Nelly knows but doesn\'t interrupt. This creates layers of knowledge: readers know what Heathcliff hears (partial) and what Catherine says (complete); Nelly knows Catherine\'s full confession; Catherine doesn\'t know Heathcliff is listening; Heathcliff only knows his fragment. This layered knowledge creates dramatic irony—we see the misunderstanding forming, watch Heathcliff leave before hearing crucial information, witness Catherine\'s realization too late. The structure makes tragedy feel simultaneously preventable (if only Nelly had spoken, if only Catherine had looked around, if only Heathcliff had stayed) and inevitable (the situation created the conditions for this exact misunderstanding).',
        example: 'The timing is perfect and terrible: Heathcliff leaves exactly when Catherine begins explaining she\'s marrying Edgar to help Heathcliff. We see him go, know what he\'s missing, watch Catherine continue speaking to empty room. This precision shows Brontë\'s control: tragedy requires exact timing—five minutes earlier or later changes everything.'
      },
      {
        name: 'Contrasting Language Registers',
        explanation: 'Catherine uses different language for Edgar vs. Heathcliff, revealing different types of love through linguistic register. For Edgar: social language (handsome, pleasant, cheerful, rich, respectable)—adjectives describing external qualities and social benefits. For Heathcliff: metaphysical language (eternal rocks, souls, being, existence)—nouns describing fundamental reality. Edgar gets descriptors; Heathcliff gets ontology. This linguistic contrast shows Catherine\'s two registers: social/practical vs. spiritual/essential. She doesn\'t just say she loves them differently—her language performs the difference.',
        example: 'Edgar is "foliage in the woods" (pleasant, changeable, decorative); Heathcliff is "eternal rocks beneath" (fundamental, unchanging, structural). The metaphors aren\'t just poetic—they\'re diagnostic: foliage can be enjoyed or ignored, but rocks hold up the ground you stand on. One is optional pleasure, the other is necessary existence.'
      },
      {
        name: 'Storm as Emotional Externalization',
        explanation: 'The pathetic fallacy intensifies: as Catherine confesses and Heathcliff flees, nature itself responds with violent storm. Catherine runs into the tempest searching for him, stays out all night in rain, returns soaked and feverish. The storm isn\'t backdrop—it\'s the internal chaos made external. Separation from Heathcliff creates literal atmospheric violence. This technique shows Brontë\'s Gothic inheritance: in Gothic literature, extreme emotions break the boundary between inner and outer, psychological and physical. Catherine\'s turmoil becomes weather, her fever becomes natural force.',
        example: 'Catherine\'s illness after the storm is both realistic (exposure to cold/rain causes fever) and symbolic (separation from Heathcliff literally makes her sick). The fever that will eventually kill her begins this night—suggesting that marrying Edgar while Heathcliff is gone initiates her death. Her body responds to spiritual violation.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Contemporary reimagining of chapter events
  // ===================================================================
  modernAdaptation: {
    setting: 'A young woman tells her best friend she\'s accepted a marriage proposal from a wealthy, respectable man—even though she\'s spiritually bonded to someone from her past who has been systematically excluded and degraded by society. She explains she\'ll marry for security and use that security to help her true love. But he\'s listening outside the door, hears only that marrying him would be "settling" and "embarrassing socially," and disappears. He doesn\'t hear her explain that he\'s her soulmate, that "we\'re the same person," that she\'s doing this FOR him.',
    parallels: [
      '**The overhearing tragedy**: Text messages sent to wrong person, emails left open on shared computer, conversations overheard through thin walls. Modern technology multiplies ways to access partial information—screenshots without context, overheard phone calls, social media posts that don\'t tell whole story. We make life decisions based on fragments.',
      '**Practical vs. romantic love**: Marrying for security/healthcare/immigration status while maintaining emotional primary partnership with someone else. Polyamory\'s distinction between "anchor partner" (practical stability) and "romantic love" (emotional intensity). Society increasingly recognizes these can be different people—but still creates legal/social structures assuming they\'re the same.',
      '**"I AM them" vs. healthy boundaries**: Codependency, trauma bonding, identity fusion with romantic partners. The inability to distinguish "I love them" from "I am them." Modern psychology calls this enmeshment, recognizes it as both profound connection and pathological boundary violation. Catherine\'s "I AM Heathcliff" expresses both.',
      '**Impossible choices for marginalized people**: Choosing between authentic self and social survival. Closeted LGBTQ+ people marrying "acceptable" partners while maintaining hidden relationships. First-gen immigrants choosing partners parents approve over those they love. Every impossible choice between authenticity and survival echoes Catherine\'s dilemma.',
      '**Overhearing and mental health**: How partial information fuels anxiety and trauma responses. People conditioned by abuse interpret ambiguous information as confirmation of rejection. Heathcliff hears "degrade" and immediately assumes complete rejection because that\'s what systematic degradation taught him to expect. Modern trauma therapy addresses these interpretation patterns.'
    ],
    discussionPrompt: 'Have you ever overheard partial information and made a decision based on incomplete truth? Or been misunderstood because someone only heard part of what you said? How do we deal with impossible choices between practical needs and authentic desires?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // 4-6 key themes with emoji and explanation
  // ===================================================================
  thematicThreads: [
    {
      emoji: '👂',
      name: 'The Tragedy of Overhearing',
      explanation: 'Heathcliff overhears "degrade me to marry Heathcliff" but leaves before "I AM Heathcliff." This partial knowledge drives his decision to flee, which determines the entire future. Five more minutes would change everything—but systematic degradation taught him not to hope, so he accepts rejection as complete truth.'
    },
    {
      emoji: '💫',
      name: 'I AM Heathcliff',
      explanation: 'The novel\'s most famous quote reveals Catherine\'s belief in identity fusion—she doesn\'t love Heathcliff as separate person but experiences him as part of her own being. This psychology explains why she thinks marrying Edgar is compatible with loving Heathcliff: Edgar is external husband, but Heathcliff is internal self.'
    },
    {
      emoji: '🍂',
      name: 'Foliage vs. Eternal Rocks',
      explanation: 'Catherine\'s metaphors reveal two types of love: Edgar is "foliage in the woods" (pleasant but changeable, seasonal, decorative) while Heathcliff is "eternal rocks beneath" (fundamental, unchanging, structural). One is optional pleasure, the other is necessary existence. She wants both but can have only one.'
    },
    {
      emoji: '⛈️',
      name: 'Storm as Separation',
      explanation: 'The violent storm the night Heathcliff leaves mirrors Catherine\'s internal chaos. She runs into the tempest searching for him, stays out all night, returns feverish. The pathetic fallacy shows their separation creating literal atmospheric violence—internal turmoil becoming external reality.'
    },
    {
      emoji: '🎭',
      name: 'Social Self vs. Spiritual Self',
      explanation: 'Catherine believes she can separate social self (Edgar\'s wife, respectable woman) from spiritual self (fused with Heathcliff, authentic being). She thinks these can coexist—marry Edgar socially while remaining Heathcliff spiritually. Society permits no such division, and her attempt destroys everyone.'
    },
    {
      emoji: '❌',
      name: 'The Impossible Choice',
      explanation: 'Catherine faces genuine dilemma: marry Heathcliff (poverty, social degradation, Hindley\'s abuse) or marry Edgar (wealth, position, spiritual betrayal). Both choices require devastating sacrifice. She tries to escape by taking both—and discovers this is the worst choice of all.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // 5-7 thought-provoking questions
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Is Catherine\'s Plan Selfish or Selfless?',
      question: 'Catherine claims she\'s marrying Edgar to help Heathcliff—she\'ll use Edgar\'s wealth to elevate Heathcliff from Hindley\'s oppression. Is this genuinely selfless (sacrificing authentic love for practical help) or profoundly selfish (using Edgar\'s resources while maintaining spiritual bond with Heathcliff, having both without asking either man\'s consent)? Can we even judge her intentions given the impossible position she occupies?'
    },
    {
      title: 'If Heathcliff Had Stayed...',
      question: 'If Heathcliff had stayed five more minutes and heard "I AM Heathcliff," would the tragedy have been prevented? Would knowing Catherine sees them as spiritually unified change his decision? Or would he still leave, recognizing that spiritual unity without social marriage means nothing in Victorian society? Does the misunderstanding cause the tragedy, or just accelerate the inevitable?'
    },
    {
      title: 'What Does "I AM Heathcliff" Actually Mean?',
      question: 'Is Catherine\'s claim "I AM Heathcliff" profound spiritual unity or pathological boundary violation? Does it express genuine transcendent love or unhealthy enmeshment? Can it be both simultaneously? What\'s the difference between deep connection and identity fusion? Is it romantic or concerning that she cannot distinguish herself from him?'
    },
    {
      title: 'Foliage vs. Eternal Rocks: Can You Love Two Ways?',
      question: 'Catherine distinguishes between loving Edgar (pleasant, changeable, social) and loving Heathcliff (essential, eternal, spiritual). Can these coexist? Can you love one person practically and another spiritually? Modern polyamory says yes—you can have different types of relationships meeting different needs. Victorian society said no—marriage claims total identity. Who\'s right?'
    },
    {
      title: 'Is Catherine Deceiving Edgar or Herself?',
      question: 'Catherine plans to marry Edgar without telling him she loves Heathcliff with her soul. Is this deception of Edgar (entering marriage under false pretenses) or self-deception (genuinely believing she can be good wife while spiritually bonded to another)? Does her belief in the plan make it honest, or does Edgar\'s ignorance make it fraud? Can you ethically marry someone while being spiritually fused with someone else?'
    },
    {
      title: 'Degradation Social or Personal?',
      question: 'When Catherine says marrying Heathcliff would "degrade" her, she means socially (loss of status). Heathcliff hears personally (he himself is degrading). This misunderstanding is the novel\'s hinge. Could Catherine have said it differently? Should she have anticipated his interpretation? Or is this misunderstanding inevitable given their different positions—she can consider social position abstractly, he experiences it as personal worth?'
    },
    {
      title: 'Impossible Choices and Moral Judgment',
      question: 'Catherine faces impossible choice: marry Heathcliff (authentic love, social ruin) or Edgar (social security, spiritual betrayal). When someone faces impossible choice where every option requires devastating sacrifice, can we judge their decision morally? Should we evaluate the choice (marry Edgar) or acknowledge the impossibility (no good option existed)? Does structural impossibility excuse individual decisions?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // 3-4 expandable deep-dive discussions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'amp-discuss-1',
      title: 'The Tragedy of Overhearing: How Partial Information Drives Irreversible Decisions',
      question: 'Why does Heathcliff flee after hearing "degrade me to marry Heathcliff" without staying to hear "I AM Heathcliff"?',
      aiResponse: `This is the novel\'s central tragedy: Heathcliff makes a life-changing decision (to leave forever) based on partial information (overhearing rejection) without knowing the complete truth (Catherine sees them as spiritually identical). Understanding why he leaves—and why he doesn\'t stay—reveals how tragedy emerges from structure rather than character flaws.

**What Heathcliff hears:**

"It would degrade me to marry Heathcliff now."

This sentence, isolated, confirms everything systematic degradation has taught him:
- He is socially worthless (marrying him = degradation)
- His love is unacceptable (Catherine couldn\'t marry him without shame)
- Catherine sees him as Hindley does (as degraded, inferior, unworthy)
- His hopes were delusions (he could never be acceptable)

**What he doesn\'t hear:**

"Nelly, I AM Heathcliff! He\'s always, always in my mind... my great thought in living is himself. If all else perished, and he remained, I should still continue to be."

This declaration would tell him:
- Catherine sees them as spiritually identical (not separate people)
- She\'s marrying Edgar to HELP him (using Edgar\'s wealth to elevate Heathcliff)
- Her love is eternal and essential (not conditional on social position)
- She believes they can maintain spiritual unity regardless of her social marriage

**Why he doesn\'t stay to hear more:**

**Systematic degradation conditions interpretation**: Years of abuse have taught Heathcliff to expect rejection. When he hears confirmation of his worthlessness, his trauma response is to accept it as complete truth. Staying to hear more would require hope—and hope has been systematically beaten out of him.

**Partial information feels complete**: When you hear something that confirms your deepest fears, it doesn\'t feel partial—it feels like revelation of hidden truth. Heathcliff doesn\'t think "maybe there\'s more"—he thinks "now I know what she really thinks."

**Pride and protection**: Staying means witnessing Catherine explain his degradation, hearing her pity, becoming object of her charity. Leaving means avoiding the complete humiliation of hearing why he\'s unacceptable. Flight protects what little dignity he has left.

**Misunderstanding "degrade"**: Catherine means social degradation (loss of status in society\'s eyes). Heathcliff hears personal degradation (he himself is degrading, his nature is inferior). Same word, different meanings—and he cannot imagine she means anything other than what he heard.

**The structural tragedy:**

The overhearing isn\'t random bad luck—it\'s structured into the situation:

**Hidden conversations breed misunderstanding**: Catherine and Nelly talk privately because Catherine is working through her decision. But private conversations about someone create conditions for partial overhearing.

**Systematic degradation creates interpretation patterns**: Heathcliff\'s abuse history makes him interpret ambiguous information as confirmation of worthlessness. His past determines how he hears the present.

**Timing is both chance and inevitable**: That Heathcliff leaves exactly when Catherine begins explaining she\'s doing this FOR him seems like terrible coincidence. But it\'s inevitable that someone conditioned to expect rejection would leave upon hearing rejection rather than stay for explanation.

**Victorian gender dynamics matter**: Catherine talks to Nelly (woman) about Heathcliff rather than talking to Heathcliff directly because Victorian propriety forbids young women declaring love to men. The social rules that prevent direct communication create conditions for catastrophic misunderstanding.

**Modern parallels:**

**Text message without context**: Screenshot of message shared without surrounding conversation. Someone sees "I can\'t stand them" without seeing "...when they don\'t take care of themselves." Partial information creates complete misunderstanding.

**Overheard conversations**: Walking in mid-discussion and hearing your name with negative context. Not staying to hear full explanation because you\'re hurt and want to protect yourself from hearing more painful things.

**Social media fragment**: Seeing post about "toxic people I\'m cutting out" and assuming it\'s about you. Not asking for clarification because you\'re already hurt and fear confirmation.

**Trauma-informed interpretation**: People with abuse histories interpret ambiguous information through lens of past harm. Neutral statement gets read as threat because that\'s what experience taught. Not paranoia—adaptive response to past danger applied to present ambiguity.

**The "if only" that defines tragedy:**

If only Heathcliff had stayed five more minutes...
If only Catherine had spoken sooner...
If only Nelly had interrupted to tell Heathcliff he was there...
If only Victorian society allowed direct communication...
If only systematic degradation hadn\'t conditioned him to expect rejection...

Great tragedy makes us feel "if only" while showing why "if only" was impossible. The structure creates the misunderstanding. Individual choices (Heathcliff leaving, Catherine confessing to Nelly rather than to him, Nelly not interrupting) flow from structural conditions (trauma responses, gender norms, class degradation, communication constraints).

**What this teaches about information and tragedy:**

**Partial information is dangerous**: We make life decisions based on fragments—overheard conversations, screenshots, partial accounts. Need to recognize that what we know is always incomplete.

**Past trauma shapes present interpretation**: How we interpret ambiguous information depends on what experience taught us to expect. Recognizing this helps us understand different people hearing same words differently.

**Communication requires safety**: Heathcliff can\'t ask "what did you mean?" because his social position makes that impossible. Many modern communication failures stem from power imbalances that prevent clarification.

**Structure creates tragedy more than character**: We want to blame someone (Heathcliff for leaving, Catherine for not checking if anyone was listening, Nelly for not interrupting). But the conditions—trauma, class system, gender norms, hidden conversations—created inevitable misunderstanding.

The chapter is devastating precisely because it\'s both completely preventable (five more minutes!) and absolutely inevitable (the structure made this exact misunderstanding likely). That\'s what makes it great tragedy rather than just sad story.`
    },
    {
      id: 'amp-discuss-2',
      title: '"I AM Heathcliff": Identity Fusion vs. Healthy Boundaries',
      question: 'Is Catherine\'s claim "I AM Heathcliff" profound spiritual unity or pathological boundary violation?',
      aiResponse: `Catherine\'s famous declaration "I AM Heathcliff" is both the novel\'s greatest expression of love AND a diagnostic statement revealing profound psychological enmeshment. Understanding this duality—simultaneously beautiful and concerning—helps us see why her love is real yet doomed.

**What Catherine actually says:**

"Nelly, I AM Heathcliff! He\'s always, always in my mind: not as a pleasure, any more than I am always a pleasure to myself, but as my own being."

Let\'s break down this psychology:

**"I AM" not "I love"**: She claims identity, not affection. This isn\'t "we\'re very close" but "we\'re the same person." She experiences Heathcliff not as beloved other but as extension of self.

**"Not as a pleasure"**: She doesn\'t love him because he makes her happy. He\'s not enjoyable or pleasant (in fact, often the opposite). He\'s inescapable like consciousness itself—you don\'t enjoy being conscious, you just are.

**"As my own being"**: Heathcliff is to her as she is to herself. Just as you cannot separate from your own existence, she cannot separate from Heathcliff. He\'s ontologically necessary—fundamental to her being rather than enhancement of it.

**"Whatever our souls are made of, his and mine are the same"**: Not "compatible" or "complementary" but identical. Same substance, same essence. Two manifestations of one underlying reality.

**Why this is profound/romantic:**

**Transcendent unity**: Catherine experiences what mystics describe—dissolution of ego boundaries, recognition of fundamental unity beneath apparent separation. This is rare and precious: genuine experience of non-separation.

**Beyond social construction**: Her bond with Heathcliff exists beneath social identities (Catherine Earnshaw, future Mrs. Linton). It\'s pre-social, pre-individual—the ground of being before separation into distinct persons.

**Eternal and unchanging**: Unlike romantic love (which can fade), identity is permanent. If Heathcliff is literally part of her being, that cannot change regardless of social arrangements or physical separation.

**Explains her certainty**: Catherine isn\'t just being dramatic—she\'s describing direct experience. She KNOWS they\'re one being the way you know you\'re conscious. This isn\'t belief but empirical certainty about her own experience.

**Why this is pathological/concerning:**

**Failure of individuation**: Healthy development requires distinguishing self from other. Catherine hasn\'t completed this process with Heathcliff—still experiences merged rather than bounded self. This is normal for infants, concerning for adults.

**Inability to recognize his separateness**: If Catherine IS Heathcliff, she cannot see him as separate person with his own needs, feelings, and reactions. Her identity fusion means she assumes he experiences what she experiences, knows what she knows, wants what she wants.

**This explains her plan\'s failure**: Catherine thinks she can marry Edgar while maintaining unity with Heathcliff because SHE experiences him as internal (part of self) rather than external (separate person). She doesn\'t anticipate his devastation because she cannot imagine he experiences her marriage differently than she does.

**Codependency and enmeshment**: Modern psychology recognizes identity fusion as form of enmeshment—inability to distinguish where one person ends and another begins. This prevents both people from having distinct identities, needs, and boundaries.

**Can it be both?**

YES. And this is crucial for understanding Wuthering Heights:

**Profound AND problematic**: Catherine\'s experience of unity with Heathcliff is genuinely felt, spiritually significant, AND psychologically problematic. These aren\'t contradictory—many intense experiences are both meaningful and unhealthy.

**Real love, impossible structure**: Her love is absolutely real, but its structure (identity fusion rather than connection between distinct individuals) makes healthy relationship impossible. You can\'t have partnership with someone you don\'t experience as separate from yourself.

**Romantic ideal reveals romantic danger**: The novel presents the most intense possible love (identity fusion, spiritual unity) and shows why that intensity is destructive. Too much unity prevents the distance required for relationship.

**Modern psychological understanding:**

**Trauma bonding**: Catherine and Heathcliff\'s childhood bond formed under conditions of trauma (losing parents, Hindley\'s abuse, social isolation). Trauma bonding creates intense attachment often confused with healthy love. The intensity comes from shared survival, not compatibility.

**Enmeshment in families**: Common in families where boundaries are violated—children treated as extensions of parents\' needs, individuals not allowed separate identities. Catherine and Heathcliff\'s childhood at Wuthering Heights shows this pattern: neither allowed to develop separate from the other.

**Differentiation vs. fusion**: Healthy relationships require differentiation—being connected to someone while maintaining distinct identity. Catherine experiences fusion—no distinction between self and Heathcliff. This feels profound but prevents actual relationship.

**"I am" vs "I love"**: Modern therapy distinguishes these: "I love you" respects boundaries (two people connected); "I am you" violates boundaries (merged identity). Catherine cannot say "I love Heathcliff" because she doesn\'t experience him as separate enough to love.

**Why her plan fails:**

Catherine\'s plan (marry Edgar, remain spiritually unified with Heathcliff) requires Heathcliff to experience the marriage as she does—as social arrangement not affecting spiritual identity. But because she sees him as extension of self, she cannot imagine he experiences it differently. Her identity fusion prevents her from recognizing he\'s separate person who will experience her marriage as abandonment.

If she could say "I love Heathcliff as separate person," she might anticipate his reaction. But "I AM Heathcliff" means she assumes he knows what she knows, feels what she feels, understands her plan as she does. Identity fusion creates empathy failure.

**The novel\'s radical insight:**

Brontë presents the most intense possible love—identity fusion, spiritual unity—and shows it\'s precisely this intensity that makes relationship impossible. Not because love isn\'t real but because this type of love prevents the boundaries required for actual partnership.

Catherine\'s "I AM Heathcliff" is:
- Genuinely felt (not performance or exaggeration)
- Spiritually significant (rare experience of non-separation)
- Psychologically problematic (prevents healthy boundaries)
- Socially impossible (Victorian marriage couldn\'t accommodate it)
- Tragically beautiful (profound love destroying itself through intensity)

**What this teaches:**

**Intensity ≠ health**: The most intense feelings aren\'t always healthiest. Catherine\'s love is more intense than anything Edgar could offer, but that intensity comes from boundary violation rather than deep connection.

**Distance enables relationship**: You need to be separate from someone to be in relationship with them. Complete fusion prevents partnership because partnership requires two distinct people.

**Romantic ideals can be toxic**: Our culture romanticizes identity fusion ("we\'re one," "you complete me," "I can\'t live without you"). Wuthering Heights shows why these romantic ideals, taken literally, prevent actual healthy love.

**Real love requires boundaries**: The deepest love respects boundaries—recognizes other as separate person with own needs, experiences, reactions. Catherine\'s love is real but boundaryless, making it simultaneously profound and impossible.

"I AM Heathcliff" is the novel\'s most powerful line because it\'s both perfectly true (from Catherine\'s experience) and absolutely wrong (as foundation for relationship). Great literature holds both truths simultaneously without resolving the contradiction.`
    },
    {
      id: 'amp-discuss-3',
      title: 'Foliage vs. Eternal Rocks: Can You Love Two People in Two Different Ways?',
      question: 'Catherine distinguishes loving Edgar (changeable, pleasant) from loving Heathcliff (eternal, essential). Can these coexist?',
      aiResponse: `Catherine\'s famous metaphor distinguishes two types of love: Edgar is "foliage in the woods" (pleasant but changeable, seasonal, decorative) while Heathcliff is "eternal rocks beneath" (fundamental, unchanging, structural). This distinction raises crucial question: can you love two people in different ways simultaneously, and can society accommodate such love?

**Catherine\'s exact words:**

"My love for Linton is like the foliage in the woods: time will change it, I\'m well aware, as winter changes the trees. My love for Heathcliff resembles the eternal rocks beneath: a source of little visible delight, but necessary."

**What this metaphor reveals:**

**Two different types of love:**

**Foliage/Edgar**:
- Visible, decorative, pleasant
- Changeable with seasons (will fade over time)
- Above ground, ornamental
- Optional enhancement (nice to have but not necessary)
- Social, performative, external
- Makes life pleasant but not possible

**Rocks/Heathcliff**:
- Hidden, structural, fundamental
- Eternal and unchanging
- Beneath surface, invisible but essential
- Necessary for existence (ground to stand on)
- Internal, existential, authentic
- Makes life possible but not necessarily pleasant

**Catherine\'s argument:**

You can have both foliage AND rocks—they serve different functions. Edgar makes life pleasant (social respectability, comfort, cheerful companionship); Heathcliff makes life possible (existential ground, spiritual identity, authentic self). These don\'t conflict because they operate at different levels: Edgar is surface; Heathcliff is foundation.

**Why this distinction feels logical to Catherine:**

**She experiences them in different domains**: Edgar affects her social self (Mrs. Linton, respectable lady); Heathcliff constitutes her spiritual self (authentic being, "I AM Heathcliff"). Since they operate in different spheres, she believes both can coexist.

**Modern parallel—polyamory**: Contemporary polyamory makes similar distinction: "anchor partner" (practical stability, shared life logistics) vs. "romantic partner" (passionate connection, emotional intensity). You can have stable companionate relationship AND intense romantic relationship with different people meeting different needs.

**The metaphor has precedent**: Historically, arranged marriages for social/economic reasons coexisted with romantic attachments outside marriage (particularly for men). Catherine assumes she can formalize this pattern: marry for position (Edgar) while maintaining spiritual bond (Heathcliff).

**Why this distinction fails:**

**Victorian marriage claimed total identity:**

**Legal doctrine of coverture**: Wife\'s legal identity absorbed into husband\'s. She couldn\'t own property, sign contracts, or maintain separate legal existence. Marriage wasn\'t just social arrangement—it was complete absorption of self.

**"One flesh" theology**: Christian marriage theology claimed husband and wife become "one flesh"—not metaphorically but ontologically. This theological claim prevents the compartmentalization Catherine proposes.

**Social expectations**: Wife expected to be emotionally, physically, socially, economically, and spiritually devoted to husband. No sphere of self allowed to remain separate. Catherine\'s plan requires maintaining secret interior life—which is precisely what marriage prohibited.

**Heathcliff experiences it differently:**

**He\'s not in her head**: Catherine assumes Heathcliff experiences their bond as she does—as spiritual unity that marriage cannot affect. But Heathcliff is separate person (ironically, since she claims "I AM Heathcliff") who will experience her marriage as abandonment.

**Social reality matters to him**: Catherine thinks spiritual bond transcends social arrangements. Heathcliff (having experienced systematic social degradation) knows social reality determines lived experience. Her marriage means he loses her in every practical sense.

**He doesn\'t hear the explanation**: Because he overhears partial confession and flees, Heathcliff never learns Catherine\'s reasoning. He doesn\'t know she distinguishes foliage from rocks—he just knows she\'s marrying Edgar. The metaphor is internal to Catherine; external to everyone else, her marriage looks like betrayal.

**Edgar has his own expectations:**

**He\'s marrying her entirely**: Edgar doesn\'t know he\'s "foliage" while Heathcliff is "rocks." He believes Catherine loves him completely and will be devoted wife. He\'s entering one kind of marriage (total union); she\'s entering another (social arrangement).

**This is deception**: Even if Catherine believes her distinction is valid, Edgar\'s ignorance makes it fraud. He\'s consenting to marriage without knowing the actual terms. She\'s not informing him that her spiritual self belongs to another man.

**Modern perspective—can this work?**

**Ethical non-monogamy says yes, WITH CONSENT:**

**Different relationships meet different needs**: One partner for stability, another for passion; one for intellectual connection, another for domestic partnership. This is valid and increasingly recognized.

**But requires transparency**: All parties must know and consent to the arrangement. Catherine\'s plan requires deception (Edgar doesn\'t know about Heathcliff\'s spiritual claim on her).

**And mutual agreement**: Everyone involved must agree to the structure. Heathcliff doesn\'t agree—he experiences her marriage as betrayal. Edgar doesn\'t agree—he doesn\'t know he\'s sharing her.

**Society must accommodate**: Legal/social structures must recognize different types of relationships. Victorian England categorically didn\'t. Modern society increasingly does—but still privileges monogamous marriage legally.

**The psychological question:**

**Can YOU distinguish these types of love internally?**

Catherine believes she can maintain separate compartments: social wife to Edgar, spiritual self with Heathcliff. Modern psychology suggests this is:

**Possible short-term**: You can maintain different selves in different contexts temporarily (code-switching, compartmentalization). But...

**Exhausting long-term**: Maintaining divided self requires constant energy and vigilance. Over time, typically one identity dominates or person experiences breakdown from the effort.

**Catherine proves this**: She does attempt to maintain both (marries Edgar, remains obsessed with Heathcliff). The psychological strain contributes to her mental breakdown and eventual death. She cannot sustain the division.

**The novel\'s answer:**

Brontë presents Catherine\'s distinction as:
- Psychologically real (she genuinely experiences different types of love)
- Theoretically logical (foliage and rocks can coexist)
- Practically impossible (society won\'t accommodate it)
- Ethically problematic (requires deception of both men)
- Personally destructive (maintaining division destroys her)

**What this teaches:**

**Types of love exist**: We do experience different relationships differently—passionate vs. companionate, spiritual vs. social, temporary vs. eternal. Catherine\'s distinction names real phenomena.

**Society shapes what\'s possible**: Different social structures accommodate different relationship models. Victorian England couldn\'t accommodate Catherine\'s plan; modern polyamory sometimes can. But social possibility matters—internal feelings aren\'t enough.

**Consent is crucial**: Even if you can distinguish different types of love, everyone involved must know and consent. Hidden arrangements hurt people regardless of your internal justifications.

**Integration is healthier than compartmentalization**: Catherine\'s attempt to split herself (social self vs. spiritual self) contributes to her destruction. Health requires integration—finding way to be whole person rather than maintaining divided selves.

**Some choices remain impossible**: Even understanding Catherine\'s distinction doesn\'t make her plan viable. Sometimes you cannot have both, and attempting to forces impossible choice. Recognition that some dilemmas have no good solution—just different forms of loss.

The foliage/rocks metaphor is brilliant precisely because it\'s both right (accurately describes two types of love) and wrong (incorrectly assumes these can coexist in Victorian marriage). Great literature gives us both truths and shows why having the right metaphor isn\'t enough to solve structural impossibility.`
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Teaching tools and cross-curricular connections
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Confession You Wish Someone Had Heard Completely',
      description: 'Write about a time when you tried to express something complex or contradictory—and someone heard only part of what you said, or when you overheard something partial about yourself and made an assumption that proved wrong. Explore: What was the full truth you were trying to express? What partial version did they hear? How did the misunderstanding change what happened next? Or write about an impossible choice you faced where every option required devastating sacrifice—and how you tried to explain that choice to others.',
      purpose: 'Helps students understand how communication failures drive tragedy, and how partial information creates complete misunderstandings. Develops empathy for both speaker and listener—the difficulty of articulating complex truth and the danger of acting on incomplete information.'
    },
    activity: {
      title: 'Mapping the Overhearing: Information and Interpretation',
      description: 'Create a visual timeline showing: (1) What Catherine says (complete confession), (2) What Heathcliff hears (partial overhearing), (3) What each person knows at each moment, (4) When misunderstanding becomes decision, (5) When Catherine realizes what Heathcliff heard. Use different colors for "complete information," "partial information," "misinterpretation," and "irreversible decision." Then discuss: At what point did tragedy become inevitable? Where could intervention have changed the outcome? How do information asymmetries create misunderstanding?',
      materials: 'Large paper, colored markers, chapter text for reference, optional: create parallel timeline for modern parallel (text message misunderstanding, overheard conversation)'
    },
    crossCurricular: {
      title: 'Identity Fusion, Boundaries, and Healthy Relationships',
      description: 'Connect to psychology and health classes. Examine: difference between healthy connection and enmeshment, trauma bonding vs. secure attachment, codependency patterns in relationships, how identity fusion develops and why it\'s concerning, what healthy boundaries look like in intimate relationships. Use Catherine\'s "I AM Heathcliff" as case study: why does this sound romantic but concern psychologists? Discuss modern relationship patterns (social media couple accounts saying "we" for everything, inability to make decisions without partner, etc.) as contemporary versions of identity fusion.',
      subjects: ['Psychology', 'Health', 'Sociology', 'Communications']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // Advanced analytical challenge
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Is Catherine\'s "I AM Heathcliff" Profound Love or Pathological Enmeshment?',
    prompt: 'Catherine\'s famous declaration "I AM Heathcliff" can be read two ways: (1) profound spiritual unity expressing transcendent love beyond social boundaries, or (2) pathological identity fusion revealing inability to maintain healthy boundaries. Your task: Develop an argument for ONE interpretation using textual evidence and psychological/philosophical analysis. Then explain the strongest counterargument—why someone might reasonably interpret it the opposite way. Finally, consider whether both can be true simultaneously.',
    guidingQuestions: [
      'What exactly does Catherine mean by "I AM Heathcliff"? How is this different from saying "I love Heathcliff"? What does the distinction between "love" and "am" reveal about her psychology?',
      'Catherine says Heathcliff is in her mind "not as a pleasure... but as my own being." Why does she emphasize he\'s NOT pleasant? What does it mean to love someone as part of your being rather than as pleasure or happiness?',
      'Consider her claim: "If all else perished, and he remained, I should still continue to be; and if all else remained, and he were annihilated, the universe would turn to a mighty stranger." Is this romantic or concerning? Healthy love or unhealthy dependence?',
      'Modern psychology recognizes "enmeshment" or "codependency"—inability to maintain boundaries, experiencing another person as extension of self rather than separate individual. Does Catherine\'s psychology fit this diagnosis?',
      'But spiritual traditions across cultures describe experiences of unity or non-separation as highest form of love. Buddhist concept of non-self, Christian mysticism\'s union with divine, etc. Could Catherine be describing genuine spiritual experience?',
      'Catherine\'s plan (marry Edgar, remain unified with Heathcliff) fails partly because she assumes Heathcliff experiences the marriage as she does. Does identity fusion ("I AM him") prevent her from recognizing he\'s separate person who will react differently?'
    ],
    thinkingFramework: {
      analyze: 'Examine Catherine\'s specific language about Heathcliff (being not pleasure, eternal rocks, souls made of same substance) and what it reveals about her psychology. Use both textual evidence and concepts from psychology or philosophy.',
      evaluate: 'Assess whether her experience is: (1) profound spiritual unity (positive), (2) pathological boundary violation (negative), or (3) both simultaneously (complex). Consider what criteria we use to distinguish healthy connection from unhealthy enmeshment.',
      synthesize: 'Develop nuanced position acknowledging that intense experiences can be both meaningful and problematic. Perhaps Catherine\'s love is genuinely profound AND structurally unhealthy—these aren\'t contradictory but rather show how the most intense feelings can be both real and destructive.'
    },
    expectedDepth: 'Students should move beyond "Catherine really loves him" or "Catherine is unhealthy" to examine the specific psychology of identity fusion and its implications. This requires: understanding difference between connection and fusion, recognizing that genuine feelings can have problematic structure, considering cultural/historical context (Victorian vs. modern psychology vs. spiritual traditions), and holding complexity (both profound AND concerning). Develops ability to analyze relationships critically while maintaining empathy.',
    classroomApplication: 'Stage debate where students argue opposing interpretations (profound vs. pathological), providing textual evidence and psychological concepts. Then break into groups to discuss: Can both be true? When does intense connection become concerning? Where\'s the line between deep love and unhealthy dependence? Connect to modern relationships: social media couples who say "we" for everything, people who can\'t make decisions without partner, identity fusion in contemporary relationships. Conclude with reflection: How do we balance connection with maintaining healthy boundaries?'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's value
  // ===================================================================
  whyLiteratureMatters: 'Literature amplifies what we mean when words fail,\nshowing truths too complex for simple speech.',
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of the next chapter to maintain engagement
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🌙',
    title: 'Next Time: Three Years Later, Heathcliff Returns',
    preview: 'Catherine marries Edgar and lives comfortably at Thrushcross Grange for three years. The marriage is pleasant but hollow—Catherine has gained social position but lost her authentic self. Then one evening, unexpectedly, Heathcliff returns. He\'s transformed: wealthy, educated, refined—everything the old Heathcliff was denied. But he hasn\'t returned for reconciliation. He\'s returned for revenge. His reappearance will destroy the fragile peace Catherine has constructed. The Catherine who tried to have both worlds (Edgar socially, Heathcliff spiritually) will discover that Heathcliff\'s return forces a choice she thought she\'d avoided. The tragedy moves from misunderstanding into active destruction as Heathcliff begins the systematic revenge that will consume the next generation.',
    hookQuestion: 'What happened to Heathcliff during three years away? How did he acquire wealth and education so quickly—and did the means matter less than the ends? Why does he return if not for Catherine? Can Catherine maintain her carefully constructed dual life when Heathcliff forces the choice she avoided? The next chapter marks the shift from tragedy of misunderstanding to tragedy of revenge.'
  }
}

