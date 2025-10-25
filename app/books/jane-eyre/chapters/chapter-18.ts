/**
 * JANE EYRE - CHAPTER 18
 * 
 * A mysterious fortune-teller arrives and questions Jane about her feelings,
 * then reveals himself as Rochester in disguise—but before Jane can process
 * this deception, Mr. Mason from Jamaica arrives, and Rochester's terror reveals
 * his hidden past is catching up with him
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter18: ChapterData = {
  number: 18,
  title: 'The Fortune-Teller\'s Deception',
  
  readingTime: 30,
  pages: 17,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'A mysterious old woman claiming to be a fortune-teller arrives at Thornfield and tells fortunes to the guests, but when she specifically requests Jane and questions her penetratingly about Rochester and her feelings, Jane realizes this is Rochester himself in disguise—a deceptive intimacy that\'s interrupted when Mr. Mason arrives from Jamaica, and Rochester\'s visible terror reveals the past he\'s been hiding is finally catching up.',
    
    full: [
      'An old gypsy woman arrives at Thornfield\'s back door claiming to be a fortune-teller, insisting on reading the ladies\' palms. The servants are wary but the houseguests are intrigued—fortune-telling is fashionable entertainment. The old woman tells fortunes to Blanche and the other ladies in the library, one by one. Blanche emerges from her session looking disturbed and angry, though she tries to hide it. The other ladies report the fortune-teller was strange, asked odd questions, seemed to know too much. Then the fortune-teller makes a specific request: she wants to see Miss Eyre. Jane, curious and somewhat skeptical about fortune-telling, agrees to go to the library alone with this mysterious woman.',
      
      'In the library, the encounter becomes increasingly strange. The "old woman" sits in shadows, face obscured by bonnet and shawl, voice disguised as old and cracked. But instead of reading Jane\'s palm or predicting her future, she asks penetrating questions: What does Jane think of Rochester? What does she think of his courtship of Blanche? What does Jane want? The questions probe Jane\'s feelings with uncomfortable accuracy. The fortune-teller seems to know far too much—about Thornfield, about Rochester\'s behavior, about Jane\'s observations. Jane responds carefully, maintaining composure, not revealing her true feelings but also not lying outright. The fortune-teller pushes, teases, provokes—trying to get Jane to admit she loves Rochester, trying to extract confession of jealousy about Blanche. Jane maintains remarkable control: she acknowledges she\'s observed Rochester\'s courtship but claims no personal stake in it.',
      
      'Then the fortune-teller drops hints that make Jane suspicious: references that only someone at Thornfield would know, details about Rochester\'s behavior, a voice that occasionally slips out of character. Jane begins to suspect this isn\'t an old gypsy woman at all. She challenges the fortune-teller directly, and finally Rochester throws off his disguise—ripping away the bonnet, shawl, and makeup to reveal himself laughing at her surprise. He\'d disguised himself to question Jane about her feelings, to see if she loved him, to test whether she was jealous of Blanche. It\'s playful but also violating: he deceived her, extracted information under false pretenses, invaded her privacy through trickery. Jane is angry but also strangely thrilled—the deception created intimacy (they were alone, he was focused entirely on her, he clearly cares what she feels) even as it violated trust.',
      
      'But before Jane can fully process this encounter, she tells Rochester that another visitor has arrived: Mr. Mason from Jamaica. Rochester\'s reaction is instant and terrifying. His face goes white, he staggers, nearly collapses, grabs a chair for support. He looks at Jane with such fear and desperation that she\'s alarmed—this controlled, sardonic man is suddenly vulnerable, almost broken. He asks Jane if she\'ll help him through what\'s coming, if she\'ll stand by him. Jane promises she will, though she doesn\'t understand what she\'s promising or what Rochester fears. Rochester composes himself and goes to greet Mason, but Jane has seen: whatever Rochester has been hiding, whatever secrets he\'s maintained, Mr. Mason from Jamaica knows them—and his arrival means those secrets are about to be exposed. The fortune-teller\'s playful deception is suddenly overshadowed by real terror: Rochester\'s past has arrived, and it\'s going to destroy everything.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Deceptive Intimacy: Trust Violation as Connection',
      definition: 'Creating closeness through deception—using disguise, false pretenses, or trickery to extract information or create intimacy that wouldn\'t exist if the person knew your true identity, resulting in connection that feels both thrilling and violating.',
      context: 'Rochester disguises himself as fortune-teller to question Jane about her feelings. He uses false identity to extract information she wouldn\'t willingly give him if she knew who he was. This creates intimacy (they\'re alone, he\'s focused on her, clearly cares what she feels) but through violation (he deceived her, invaded her privacy, extracted information under false pretenses). When he reveals himself, Jane is both angry (he tricked her) and thrilled (he cares enough to go to these lengths). The deception creates connection but at cost of trust.',
      whyItMatters: 'Deceptive intimacy appears in relationships and fiction: catfishing (creating false online identity to connect with someone), "testing" partners through deception (pretending to be someone else to see if they\'re faithful), extracting confessions through trickery. It raises questions: Is intimacy created through deception real? Can you trust connection built on lies? Does the fact that person cares enough to deceive (wants to know your feelings badly enough to trick you) excuse the violation? Understanding deceptive intimacy helps recognize when connection comes at cost of consent—you revealed things you wouldn\'t have if you\'d known the truth. In modern contexts: elaborate social media deceptions, romance scams, or relationship "tests" where one partner deceives to extract honesty.'
    },
    {
      term: 'The Fortune-Teller Trope: Truth Through Performance',
      definition: 'Using fortune-telling, prophecy, or supernatural framing to speak truths that would be socially inappropriate or emotionally risky to state directly—the performance creates permission to say what normally couldn\'t be said.',
      context: 'As fortune-teller, Rochester can ask Jane directly: "Do you love Rochester? Are you jealous of Blanche?" These questions would be wildly inappropriate from employer to employee, but fortune-teller persona creates license for boundary-crossing questions. The disguise lets Rochester probe Jane\'s feelings without risking direct rejection or workplace impropriety. If Jane admits love to "fortune-teller," Rochester learns what he wants to know. If she denies it, he can later claim he wasn\'t really asking. The performance provides deniability while extracting truth.',
      whyItMatters: 'Fortune-teller trope appears throughout literature and life: people use alcohol ("drunken confession"), games ("truth or dare"), hypotheticals ("what would you do if..."), or indirect questions to extract truths that would be risky to pursue directly. The framing provides plausible deniability: if rejected, can claim "I was just playing around" or "it was just a hypothetical." Understanding this pattern helps recognize when people use performance or games to probe for truth while maintaining escape route if the answer isn\'t what they hope. Modern equivalent: "asking for a friend," hypothetical questions about feelings, or using party games to extract confessions.'
    },
    {
      term: 'Visible Vulnerability: When the Mask Drops',
      definition: 'Moment when someone who maintains control suddenly shows genuine fear, desperation, or vulnerability—the contrast between their usual persona and their unguarded reaction reveals the stakes involved.',
      context: 'When Jane mentions Mr. Mason, Rochester\'s reaction is immediate and visceral: face goes white, staggers, nearly collapses, looks at Jane with terror and desperation. This is shocking because Rochester typically maintains sardonic control. His mask drops completely—Jane sees raw fear. The vulnerability is powerful: it makes Rochester human, makes his secrets feel life-or-death rather than mere embarrassments, and creates empathy. Jane promises to help him even though she doesn\'t know what she\'s promising, because his fear is so genuine and so desperate.',
      whyItMatters: 'Visible vulnerability can create powerful connection or reveal manipulation. When does genuine fear/desperation create legitimate empathy vs. when is vulnerability performed to secure loyalty? Rochester\'s terror seems authentic—his loss of control appears involuntary. But it also functions strategically: seeing him vulnerable makes Jane promise support before she knows what she\'s supporting. Understanding visible vulnerability helps distinguish: (1) Authentic breakdown (person can\'t maintain mask, vulnerability is involuntary), (2) Strategic vulnerability (person shows weakness to secure sympathy/loyalty), (3) Manipulative vulnerability (person performs distress to avoid accountability). In relationships: is partner\'s breakdown authentic crisis or pattern used to avoid consequences?'
    },
    {
      term: 'Colonial Past Returning: Geography and Secrets',
      definition: 'When someone or something from a character\'s colonial past (Jamaica, India, Africa, etc.) arrives and threatens to expose secrets—the colonial location signals hidden history involving exploitation, violence, or moral compromise that couldn\'t be sustained in "civilized" England.',
      context: 'Mr. Mason comes from Jamaica—not Paris, not London, but Jamaica, a British colony built on slavery and sugar plantations. Rochester\'s terror at Mason\'s arrival isn\'t about a casual acquaintance showing up; it\'s about someone from his colonial past arriving with knowledge that could destroy him. The Jamaica connection signals: Rochester has history there involving moral compromises, possibly exploitation, definitely secrets he\'s desperate to keep hidden. The gothic atmosphere (mysterious third floor, strange sounds, fires) is connected to this colonial past—Bertha is Jamaican, imprisoned at Thornfield, hidden from English society.',
      whyItMatters: 'Colonial past returning is common in Victorian literature: Wide Sargasso Sea (Bertha\'s backstory), Heart of Darkness (Kurtz\'s African past), Passage to India (colonial violence returning). It signals: what happens in colonies (exploitation, violence, moral compromises) can\'t stay buried—it returns to haunt the colonizer. This matters because Victorian novels often coded moral transgression geographically: "over there" in colonies, English people did things they couldn\'t do "here." Understanding this pattern helps readers recognize when colonial settings in literature signal hidden violence or exploitation. In Jane Eyre: Rochester\'s Jamaican past involves Bertha, marriage under false pretenses, possibly racial/class exploitation—and now that past is literally arriving to expose him.'
    },
    {
      term: 'Promises Made in Ignorance: Consent Without Information',
      definition: 'Agreeing to support someone or commit to action before knowing what you\'re agreeing to—giving consent without adequate information, which can create obligation to participate in things you wouldn\'t have chosen if you\'d known the full story.',
      context: 'Rochester, vulnerable and desperate, asks Jane: "Will you help me? Will you stand by me?" Jane, moved by his visible terror, promises she will—but she doesn\'t know what she\'s promising. She doesn\'t know about Bertha, doesn\'t know what Mason\'s arrival means, doesn\'t know what Rochester will need from her. She gives her word in ignorance, which creates ethical trap: later, when she learns the full story (Rochester is married, he planned bigamy), she\'s already promised support. Can she break that promise now that she has information? Or is she bound by commitment made without adequate disclosure?',
      whyItMatters: 'Promises extracted without full information create ethical dilemmas: Are you obligated to honor commitment made in ignorance? Or does lack of disclosure void the promise? This appears in relationships (promising support before knowing what\'s needed), business (signing contracts without full information), family (committing to help before knowing the scope). Rochester secures Jane\'s promise before she can learn what it entails—whether this is desperate need (he genuinely needs her support) or strategic manipulation (securing her complicity before she can object) is ambiguous. Understanding promises-in-ignorance helps recognize when someone asks for commitment before disclosure: "Will you support me no matter what?" "Promise you won\'t be angry?" "You\'ll understand when I explain?" These requests for blind commitment should trigger questions: What am I promising? What don\'t I know?'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane demonstrates remarkable composure during the fortune-teller encounter: even when questioned penetratingly about her feelings for Rochester, she maintains control, doesn\'t reveal her love but also doesn\'t lie. She\'s developing skill at protective opacity—being honest without full disclosure. When she realizes the fortune-teller is Rochester, she\'s both angry (he deceived her, violated her privacy) and thrilled (he cares enough about her feelings to go to these lengths). This ambivalence—recognition that deception is violation AND evidence of care—shows Jane\'s growing complexity in navigating Rochester\'s behavior. When Rochester collapses at Mason\'s name, Jane immediately promises support without knowing what she\'s promising. This reveals Jane\'s deep loyalty: seeing Rochester vulnerable, she commits to helping him despite her anger about the fortune-teller deception, despite not understanding what\'s at stake. Jane is learning to hold contradictions: angry at Rochester AND committed to him, suspicious of his behavior AND willing to trust him, aware she\'s being manipulated AND choosing to participate anyway.',
      keyTrait: {
        emoji: '🎭',
        text: 'Protective Opacity'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester reveals himself as playwright and performer: the fortune-teller disguise is elaborate, sustained, convincing. He enjoys the deception—laughs when Jane figures it out, clearly pleased with himself for fooling her and the guests. But the disguise is strategic: it lets him question Jane about her feelings without risking direct rejection or workplace impropriety. He uses performance to extract truth while maintaining deniability. This shows Rochester as someone comfortable with deception when it serves his purposes—he doesn\'t see trickery as violation but as creative problem-solving. However, when Mason arrives, Rochester\'s mask drops completely: he goes white, staggers, nearly collapses, shows genuine terror. This vulnerability is shocking contrast to his usual control. He begs Jane for help, extracts her promise of support—whether this is authentic desperation or strategic extraction of commitment is ambiguous. Rochester is revealed as man of extremes: playful deception and genuine terror, controlled performance and complete breakdown, strategic manipulation and authentic vulnerability.',
      keyTrait: {
        emoji: '🎭',
        text: 'Performer-Deceiver'
      }
    },
    {
      name: 'Blanche Ingram',
      development: 'Blanche emerges from her fortune-teller session looking disturbed and angry, though she tries to hide it. Whatever the "fortune-teller" said to her clearly wasn\'t flattering—possibly Rochester (disguised) told Blanche he knew she only cared about his money, or that he wouldn\'t marry her. Blanche\'s disturbance suggests the fortune-teller pierced her social armor, said something that made her question whether Rochester will actually propose. After this chapter, Blanche becomes less confident, less certain of her position—the fortune-teller encounter seems to have shaken her faith in Rochester\'s courtship. This may be deliberate: Rochester using his disguise to signal to Blanche (without directly rejecting her) that their courtship won\'t end in marriage.',
      keyTrait: {
        emoji: '😟',
        text: 'Shaken Confidence'
      }
    },
    {
      name: 'Mr. Richard Mason',
      development: 'Mason appears only as arriving visitor, but his effect on Rochester is dramatic: instant terror, near-collapse, desperate fear. Mason is from Jamaica—geographic location that signals colonial past and hidden history. Mason clearly knows Rochester\'s secrets (later revealed: he\'s Bertha\'s brother, knows about the secret marriage). His arrival means Rochester\'s carefully managed deception is threatened. Mason is characterized through Rochester\'s reaction to him: he\'s threat, he\'s danger, he has power to destroy Rochester. We don\'t yet know what Mason knows or what he\'ll do, but Rochester\'s terror establishes him as existential threat to Rochester\'s plans.',
      keyTrait: {
        emoji: '⚠️',
        text: 'Threatening Past'
      }
    },
    {
      name: 'Bertha Mason Rochester',
      development: 'Bertha doesn\'t appear in this chapter, but she\'s present in Rochester\'s terror at Mason\'s arrival. Mason is Bertha\'s brother—his presence means Bertha\'s existence will soon be revealed. Rochester\'s reaction (near-collapse, desperate fear) shows he knows Mason\'s arrival threatens his ability to keep Bertha hidden and marry Jane. The chapter builds toward Bertha\'s revelation through Rochester\'s visible terror: whatever he\'s hiding, whoever is on the third floor, Mason knows about it and could expose it. Bertha is about to move from hidden gothic threat to revealed human woman—and Rochester\'s fear shows he knows this will destroy his plans.',
      keyTrait: {
        emoji: '👤',
        text: 'Approaching Revelation'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'The old woman was an old woman no longer; the cloak and bonnet and bandage were gone. A man stood before me—Edward Fairfax Rochester.',
      analysis: 'The revelation is dramatic—Rochester throws off his disguise and stands revealed. Jane uses his full formal name (Edward Fairfax Rochester) which creates distance: this isn\'t familiar "Rochester" but someone who\'s just violated her trust through deception. The naming signals Jane\'s complex feelings: recognition of intimacy (he did this because he cares about her feelings) and sense of violation (he deceived her, extracted information under false pretenses). The fortune-teller\'s removal of disguise is also symbolic: Rochester has been performing throughout (courting Blanche while wanting Jane), and this literal unmasking prefigures emotional revelations to come.'
    },
    {
      text: 'You are cold, because you are alone: no contact strikes the fire from you that is in you. You much become habitually cold.',
      analysis: 'This is "fortune-teller" (Rochester) speaking to Jane, and it\'s remarkably perceptive. Rochester recognizes Jane has passionate nature ("fire... in you") but that isolation and lack of connection are making her cold, withdrawn, protected. He\'s identifying what Jane needs: contact, connection, someone to "strike the fire" from her. This is Rochester making his case: I see your true nature, I recognize your passion, I can bring out what\'s dormant in you. It\'s seductive but also accurate—Jane has been protecting herself through emotional withdrawal, and Rochester sees this as defense mechanism rather than true nature.'
    },
    {
      text: 'This is she, sir. Mr. Mason from the West Indies.',
      analysis: 'Jane announces Mason\'s arrival innocently, not knowing the effect her words will have. The phrase "West Indies" (which includes Jamaica) is significant: it signals colonial geography, plantation economy, slavery, exploitation—everything that happened "over there" that English society prefers to ignore. Rochester\'s terror at this geographic identification shows: his past isn\'t just personal but colonial, involving moral compromises tied to empire. Jane doesn\'t understand why these words strike terror, but readers should note: someone from colonial past arriving in England typically means hidden violence or exploitation is about to be exposed.'
    },
    {
      text: 'Help will come—does come—let me see: what will suffice for me? Tell the ladies not to be alarmed. Be quiet, Jane. I have a blow—I have had a blow, Jane.',
      analysis: 'Rochester, vulnerable and broken by Mason\'s arrival, speaks in fragments—his usual controlled eloquence shattered. The repetition of Jane\'s name shows his desperate need for her support. He calls Mason\'s arrival "a blow"—not "bad news" or "problem" but physical violence term. This reveals the threat feels bodily, immediate, potentially fatal to his plans. Rochester is asking Jane to help him maintain appearances (tell ladies not to be alarmed, be quiet) while he processes this disaster—he needs her complicity in continuing the performance of normalcy while his world crumbles.'
    },
    {
      text: 'Jane, if aid is wanted, I\'ll seek it at your hands; I promise you that... You give me your word of honour to stand by me, Jane?',
      analysis: 'Rochester extracts Jane\'s promise before she knows what she\'s promising. The language is significant: "word of honour"—he\'s calling on her integrity, making it about her character rather than about what he needs. This is strategic: by framing it as honor issue, he makes it harder for Jane to later withdraw support when she learns the full story. Jane is being bound by commitment made in ignorance. Rochester may be genuinely desperate (he needs her support) but he\'s also securing her complicity before disclosure—which is either survival instinct or manipulation, or both.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Deceptive Intimacy and Trust Violation',
        explanation: 'Rochester creates intimacy through deception: disguises himself to extract Jane\'s feelings, violates her privacy through trickery, uses false pretenses to ask questions that would be inappropriate from employer. The deception is both violation (he tricked her, invaded privacy) and evidence of care (he went to elaborate lengths to learn her feelings). This raises questions: Can intimacy built on deception be real? Does the fact that he cares enough to deceive excuse the violation? Jane is both angry and thrilled—she recognizes deception is wrong but also reads it as proof Rochester cares about her specifically (he could have asked anyone, but he questioned her). The novel explores how deception can create connection while simultaneously undermining trust.'
      },
      {
        name: 'Colonial Past Returning to Haunt',
        explanation: 'Mr. Mason arrives from Jamaica (not Paris, not London, but colonial Jamaica), and Rochester\'s terror reveals: his past in the colonies involves secrets he desperately needs to keep hidden. Victorian literature often coded moral transgression geographically: what English people did "over there" in colonies (exploitation, violence, racial dynamics) couldn\'t be acknowledged "here" in England. Mason\'s arrival means colonial past is literally coming home—secrets maintained through geographic distance are about to be exposed. Bertha is Jamaican, imprisoned at Thornfield, hidden from English society. Rochester\'s terror shows: what happened in Jamaica (his marriage to Bertha, possibly exploitation or deception) will destroy his English respectability when revealed.'
      },
      {
        name: 'Performance, Disguise, and Truth',
        explanation: 'Rochester performs throughout the novel: courts Blanche while wanting Jane, maintains sardonic control while hiding desperation, disguises himself as fortune-teller to extract truth. The fortune-teller disguise lets him ask questions that would be inappropriate from employer to employee—the performance creates license for boundary-crossing. But when Mason arrives, Rochester\'s performance collapses: he can\'t maintain his mask, his terror is involuntary and genuine. The novel explores: When is performance strategic deception (Rochester hiding his feelings, staging Blanche courtship) vs. when is performance necessity (maintaining social facades) vs. when does the mask drop to reveal authentic vulnerability?'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Disguise and Revelation: The Fortune-Teller Scene',
        explanation: 'Brontë uses fortune-teller disguise as dramatic device: lets Rochester probe Jane\'s feelings while maintaining deniability, creates theatrical revelation when he unmasks, builds tension through Jane\'s growing suspicion. The scene operates on multiple levels: entertainment (dramatic disguise and reveal), psychological probe (Rochester extracting Jane\'s feelings), power play (employer deceiving employee), and foreshadowing (if Rochester can deceive this thoroughly, what else is he hiding?).',
        example: 'The fortune-teller scene mirrors Rochester\'s larger deception: he\'s performing entire courtship of Blanche while actually wanting Jane. The literal unmasking (throwing off bonnet and shawl) prefigures emotional unmasking (revelation of Bertha). Jane\'s reaction—both angry and thrilled—mirrors readers\' complex response to Rochester: we recognize his behavior is problematic but are also drawn to his intensity and focus on Jane.'
      },
      {
        name: 'Visible Vulnerability as Plot Device',
        explanation: 'When Rochester hears Mason\'s name, his mask drops completely: goes white, staggers, shows terror. This vulnerability creates several effects: (1) Makes Rochester human and sympathetic (we see his fear), (2) Establishes stakes (whatever he\'s hiding feels life-or-death), (3) Extracts Jane\'s commitment (seeing him vulnerable, she promises support), (4) Foreshadows disaster (his fear tells us something terrible is coming).',
        example: 'Rochester\'s collapse is shocking because he usually maintains sardonic control. The contrast between his fortune-teller performance (playful, controlled, clever) and his breakdown (white-faced, staggering, begging for help) shows the terror is real. This vulnerability secures Jane\'s loyalty: she promises to help before knowing what she\'s promising. Whether this is authentic desperation or strategic extraction of commitment remains ambiguous—but it works.'
      },
      {
        name: 'Colonial Geography as Foreshadowing',
        explanation: 'Mason comes from "the West Indies"—Jamaica specifically—and this geographic detail is significant. Victorian novels used colonial locations to signal hidden violence, exploitation, or moral compromise. Readers familiar with colonial literature would understand: Jamaica = plantation economy, slavery, racial dynamics, moral ambiguity. Rochester\'s terror at "West Indies" tells informed readers: his past involves colonial exploitation or violence he\'s hidden from English society.',
        example: 'When Jane says "Mr. Mason from the West Indies," Rochester\'s immediate terror connects colonial geography to gothic secret. The third floor strange sounds, fires, attacks are all connected to Jamaica—to Bertha, Rochester\'s Jamaican wife imprisoned at Thornfield. The novel uses colonial past as source of gothic horror: what happened "over there" returns to haunt English domestic space. This connects to wider Victorian anxiety: empire\'s violence and exploitation can\'t be contained geographically—it comes home.'
      },
      {
        name: 'Promises Extracted in Ignorance',
        explanation: 'Rochester asks Jane: "Will you help me? Will you stand by me?" before she knows what she\'s promising. This creates narrative tension: Jane\'s commitment now will complicate her choices later when she learns about Bertha. It also raises ethical questions: Is she obligated to honor promise made without full information? Rochester uses Jane\'s integrity against her: calls it "word of honour," making it about her character rather than his behavior.',
        example: 'Later, when Jane learns Rochester planned bigamy, she\'ll remember this promise. Can she break her word when she didn\'t know what she was promising? Rochester has secured her commitment before disclosure—whether this is desperate need or strategic manipulation is ambiguous, but it binds Jane emotionally even as she later chooses to leave. The promise-in-ignorance becomes moral trap: honoring commitment vs. refusing to enable deception.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine someone you have feelings for creates elaborate ruse to extract information about your feelings—maybe they have a friend text you "anonymously" asking what you think of them, maybe they create fake social media account to interact with you and see how you respond, maybe they get mutual friend to probe your feelings while pretending it\'s casual curiosity. You answer honestly to "stranger" or "friend," not knowing your crush is behind the questions. When they reveal the deception ("That was me all along! I wanted to know how you felt!"), your reaction is complicated: angry they tricked you (violated privacy, extracted information under false pretenses), but also thrilled they cared enough to go to these lengths (they wanted to know your feelings badly enough to deceive you). Before you can fully process this, something happens that makes them panic: an ex shows up, or someone from their past arrives, or some secret they\'ve been hiding is about to be exposed. They turn to you, vulnerable and desperate, begging for help: "Please support me through this. I need you. Will you promise to stand by me?" You promise, moved by their fear—but you don\'t know what you\'re promising. You don\'t know what secret they\'re hiding, what they\'ll need from you, what "standing by them" will mean. You give your word before you have full information, which creates ethical trap: later, when you learn the full story (maybe they lied to you, maybe they\'re married, maybe they did something seriously wrong), you\'re already committed. Can you break your promise now that you know the truth? Or are you bound by commitment made in ignorance?',
    
    parallels: [
      '🔹 **Deceptive Intimacy**: Using fake identity, disguise, or deception to extract information or create connection that wouldn\'t exist if person knew the truth. Modern contexts: catfishing (fake online identity to connect with someone), having friend probe someone\'s feelings while pretending it\'s casual, creating fake social media to interact with someone, "testing" partner through deception. The question: Is connection created through deception real? Does caring enough to deceive excuse the violation?',
      '🔹 **Information Extraction Through Performance**: Using games, hypotheticals, or indirect questions to probe for truth while maintaining deniability. The fortune-teller persona lets Rochester ask questions that would be inappropriate directly. Modern equivalent: "asking for a friend," using party games (truth or dare), alcohol ("drunken confessions"), or hypothetical questions ("what would you do if...") to extract information that would be risky to pursue directly.',
      '🔹 **Promises in Ignorance**: Someone asks for your commitment before telling you what you\'re committing to. "Will you support me no matter what?" "Promise you won\'t be angry?" "Can I trust you with something?" These requests for blind commitment should trigger questions: What am I promising? What don\'t I know? Modern contexts: relationship partners asking for commitment before disclosure, business deals where you\'re asked to commit before seeing full terms, family members asking for support before explaining what happened.',
      '🔹 **Visible Vulnerability as Extraction**: When someone who usually maintains control suddenly shows genuine fear/desperation, it can create powerful obligation. You promise to help before knowing what you\'re helping with because their vulnerability is so compelling. The question: Is vulnerability authentic (genuine crisis, involuntary breakdown) or strategic (performed to secure loyalty before disclosure of problematic behavior)?',
      '🔹 **Colonial/Geographic Past**: Someone from person\'s past (different city, different life stage, different context) shows up and threatens to expose secrets. The geographic/temporal distance has allowed them to hide who they were "back then." Modern equivalent: ex from hometown shows up when you\'ve created new life elsewhere, someone from past job arrives at new workplace, old friend appears when you\'ve reinvented yourself. The past you\'ve hidden through distance is suddenly present.',
      '🔹 **Anger-and-Thrill Ambivalence**: Recognizing behavior is violation (they deceived you, invaded privacy) while also reading it as evidence of care (they went to great lengths, clearly your feelings matter to them). This ambivalence is common in relationships: "I\'m angry they did this, but at least they care?" The behavior is both wrong AND proof of investment—which makes it confusing to navigate.',
      '🔹 **Honor-Binding Language**: When someone frames request in terms of your character or integrity—"I need someone I can trust," "You\'re the only one who\'d understand," "Can I count on your loyalty?"—they\'re making it about who you are rather than what they need. This makes it harder to refuse (saying no feels like failing integrity test) and harder to later withdraw support (you gave your word, it\'s about your honor). This is strategic or desperate, or both.'
    ],
    
    discussionPrompt: 'Have you experienced deceptive intimacy—someone using disguise, fake identity, or false pretenses to connect with you or extract information? How did you feel when the deception was revealed: violated, thrilled, both? Have you been asked to make promises before having full information about what you\'re promising? How do you navigate requests for blind commitment ("support me no matter what")? When someone shows vulnerable breakdown, how do you distinguish authentic crisis from strategic vulnerability performed to secure loyalty? Have you had someone from your geographic/temporal past show up and threaten to expose who you were "back then"?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🎭',
      name: 'Performance and Deception',
      explanation: 'Rochester\'s fortune-teller disguise is literal performance: costume, voice, entire persona. It mirrors his larger performance: courting Blanche while wanting Jane, maintaining control while hiding desperation. The fortune-teller\'s unmasking prefigures larger revelation: Rochester has been performing throughout, and his true situation (married to Bertha, planning bigamy) will soon be exposed. The novel asks: When is performance playful intimacy vs. when is it manipulation? When does disguise create connection vs. when does it violate trust?'
    },
    {
      emoji: '⚠️',
      name: 'Colonial Past Returning',
      explanation: 'Mason arrives from Jamaica, and Rochester\'s terror reveals: his colonial past is catching up. What happened "over there" (marriage to Bertha, possibly exploitation or deception) can\'t stay buried—it\'s literally coming home. Victorian novels used colonial geography to signal moral transgression: empire\'s violence and exploitation return to haunt domestic England. Rochester\'s Jamaican wife imprisoned on third floor represents colonial violence imported into English domestic space—and Mason\'s arrival means that violence is about to be exposed.'
    },
    {
      emoji: '💔',
      name: 'Intimacy Through Violation',
      explanation: 'Rochester creates closeness through boundary-crossing: the fortune-teller deception extracts Jane\'s feelings through trickery, but it also proves he cares intensely about her. His vulnerability after Mason arrives extracts her promise before she knows what she\'s promising—but his need for her is genuine. The novel explores how violation and intimacy can coexist: Rochester\'s behavior is problematic AND creates connection. Jane is learning to hold this contradiction: angry at his deceptions AND drawn to his intensity and focus on her.'
    },
    {
      emoji: '🤝',
      name: 'Promises and Obligation',
      explanation: 'Jane promises to stand by Rochester before knowing what she\'s promising. This commitment made in ignorance will later complicate her choices when she learns about Bertha and the planned bigamy. The novel asks: Are we obligated to honor promises made without full information? Does Rochester\'s extraction of Jane\'s word through vulnerability (she promises because he\'s desperate) create genuine obligation? Or does lack of disclosure void the commitment? This thread explores consent, commitment, and whether promises made in ignorance are binding.'
    },
    {
      emoji: '👤',
      name: 'Secrets About to Explode',
      explanation: 'Rochester\'s terror at Mason\'s arrival signals: the secrets maintained for chapters are about to be revealed. Bertha will move from hidden gothic threat to revealed human woman. Rochester\'s carefully managed deception (hiding his marriage, planning bigamy) is threatened. The strange sounds, fires, attacks—all unexplained so far—will soon have explanation. Mason\'s arrival is narrative hinge: from mysterious gothic atmosphere to exposed terrible truth. The novel moves from "something is wrong but we don\'t know what" to "oh god, this is what he\'s been hiding."'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Is Deceptive Intimacy Justified?',
      question: 'Rochester disguises himself to question Jane about her feelings—he uses deception to extract information she wouldn\'t willingly give if she knew who he was. Is this playful romantic intrigue or violation of trust? Does the fact that he cares enough about her feelings to go to these lengths excuse the deception? Can intimacy created through trickery be real, or does the foundation of lies undermine the connection?'
    },
    {
      title: 'The Fortune-Teller as License',
      question: 'As fortune-teller, Rochester can ask Jane questions that would be wildly inappropriate from employer: "Do you love Rochester? Are you jealous?" The disguise creates license for boundary-crossing. How does performance (games, hypotheticals, altered personas) give people permission to say/ask things they couldn\'t directly? Is this playful creativity or manipulation through false pretenses?'
    },
    {
      title: 'Promises Made in Ignorance',
      question: 'Rochester extracts Jane\'s promise to "stand by him" before she knows what she\'s promising—before she knows about Bertha, the planned bigamy, what "standing by him" will mean. Is Jane obligated to honor this promise when she later learns the full story? Does lack of disclosure void the commitment? What does it mean to give your word when you don\'t know what you\'re agreeing to?'
    },
    {
      title: 'Visible Vulnerability: Authentic or Strategic?',
      question: 'When Rochester hears Mason\'s name, he collapses—goes white, staggers, shows genuine terror. This vulnerability extracts Jane\'s promise of support. Is Rochester\'s breakdown authentic (genuine fear, involuntary loss of control) or strategic (performed vulnerability to secure Jane\'s loyalty before she can learn what he\'s hiding)? Can it be both? How do we distinguish genuine crisis from manipulative vulnerability?'
    },
    {
      title: 'Colonial Geography and Hidden Past',
      question: 'Mason arrives from Jamaica (not Paris, not London, but colonial Jamaica), and Rochester\'s terror connects colonial geography to gothic secret. What does Jamaica signal in Victorian literature? Why does someone from colonial past arriving in England typically mean hidden violence or exploitation? What does this reveal about how Victorian novels coded moral transgression geographically?'
    },
    {
      title: 'Jane\'s Anger-and-Thrill',
      question: 'When Jane discovers the fortune-teller is Rochester, she\'s both angry (he deceived her, violated privacy) and thrilled (he cares about her feelings, went to elaborate lengths). This ambivalence is common in relationships: behavior is both wrong AND evidence of care. How do we navigate situations where violation and intimacy coexist? When does caring enough to deceive excuse the deception vs. when is it just manipulation with feelings?'
    },
    {
      title: 'Blanche\'s Disturbed Reaction',
      question: 'Blanche emerges from her fortune-teller session looking shaken and angry. What might Rochester (disguised) have told her? Why would it disturb her? Does Rochester use the disguise to signal to Blanche that he won\'t marry her—ending the courtship indirectly rather than through direct rejection? What does this reveal about Rochester\'s comfort with deception and indirect communication?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Analyzing Deceptive Intimacy: When Trickery Creates Connection',
      description: 'Write an analytical essay examining Rochester\'s fortune-teller disguise as case study in deceptive intimacy—connection created through trickery. Part 1: Document the deception: Rochester disguises himself to question Jane about her feelings, extracts information she wouldn\'t willingly give if she knew who he was, creates intimacy through violation of trust. Part 2: Analyze Jane\'s response: She\'s both angry (he tricked her, invaded privacy) and thrilled (he cares about her feelings, went to elaborate lengths). This ambivalence—behavior is both wrong AND evidence of care—is common in relationships. Part 3: Evaluate justifications: Does Rochester\'s motivation (he genuinely wants to know her feelings) excuse the method (deception, false pretenses)? Does caring enough about someone to deceive them make the deception more acceptable or more troubling? Part 4: Connect to modern contexts: Catfishing, fake social media accounts to interact with someone, having friends probe feelings while pretending it\'s casual, "testing" partners through deception. Analyze: When is deception in service of connection playful/romantic vs. when is it violation/manipulation? Part 5: Ethical framework: Develop criteria for evaluating when trickery creates real intimacy vs. when it just creates appearance of intimacy built on lies. Use textual evidence and contemporary examples.',
      purpose: 'This prompt develops complex thinking about deception and intimacy—recognizing behavior can be both problematic AND create connection. Students analyze Rochester\'s deception without simplistically condemning or excusing it. They explore how caring about someone deeply can lead to boundary-crossing behavior, and whether good intentions mitigate bad methods. Connects to media literacy and relationship dynamics: recognizing patterns of deceptive intimacy (catfishing, social media deception, relationship "tests") and developing frameworks for evaluating when deception violates vs. when it creates playful intimacy. Students engage with ambivalence: Jane\'s simultaneous anger and thrill mirrors complex responses many have to boundary-crossing behavior from people they care about.'
    },
    
    activity: {
      title: 'Promises in Ignorance: The Consent-Without-Information Exercise',
      description: 'Students experience what it feels like to commit without full information. Activity: Partner A asks Partner B: "Will you support me no matter what I tell you next? Do you promise?" Partner B must decide: commit blindly or refuse without knowing what they\'re being asked to support. If B commits, A reveals progressively serious scenarios: (1) "I lied to you about something small," (2) "I did something that hurt someone else," (3) "I need you to keep a secret that affects other people," (4) "I need you to participate in something ethically questionable." After each revelation, B reflects: Do I still feel bound by my promise? At what point does my commitment become uncomfortable? Can I withdraw support now that I know more, or am I honor-bound to my word? Discussion: (A) Why is extracting commitment before disclosure problematic? (B) Are we obligated to honor promises made without adequate information? (C) When someone asks "Do you promise?" before telling you what you\'re promising, what should you do? (D) How does this connect to Rochester asking Jane to "stand by him" before she knows about Bertha? Extension: Students analyze other examples where people are asked to commit before having full information: relationship partners, business contracts, family situations, social pressure.',
      materials: 'Partner worksheets, progressive revelation scenarios (mild to serious), reflection prompts, discussion guidelines for navigating discomfort'
    },
    
    crossCurricular: {
      title: 'Colonial Studies: Geography, Violence, and the "Return of the Repressed"',
      description: 'Partner with history/postcolonial studies to examine how Victorian novels used colonial geography to code moral transgression. History class covers: (1) British colonial system (Jamaica: sugar plantations, slavery, racial hierarchies), (2) How Victorian literature handled colonial violence (coded geographically: what happened "over there" couldn\'t be acknowledged "here"), (3) Pattern of "colonial past returning"—Wide Sargasso Sea (Bertha\'s backstory), Heart of Darkness (Kurtz\'s African past), Kim (Indian past). English class reads Chapter 18 analyzing: Why does Mason coming from Jamaica terrify Rochester? What does colonial geography signal about hidden violence or exploitation? How is Bertha (Jamaican woman imprisoned in English manor) symbol of colonial violence imported into domestic England? Students research: How did Victorian literature handle empire\'s violence? Why code moral transgression geographically? Final project: Analyze modern narratives where someone\'s past (different city, different life stage, different context) returns to haunt them. Does geography/time still function to hide transgression? Connect to contemporary: How do we handle aspects of past (social media history, previous relationships, things done in different contexts) that we\'ve hidden through distance but could be exposed? Is there ethical difference between past mistakes we\'ve learned from vs. ongoing patterns we\'re hiding?',
      subjects: ['History', 'Postcolonial Studies', 'Geography', 'Literature', 'Ethics', 'Media Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Consent and Information: Ethical Analysis of Promises Made in Ignorance',
    prompt: 'Rochester asks Jane: "Will you help me? Will you stand by me?" Jane, moved by his visible fear, promises—but she doesn\'t know what she\'s promising. She doesn\'t know about Bertha, the planned bigamy, what "standing by him" will mean. Later, when she learns the full story, she\'ll face dilemma: Is she obligated to honor promise made without adequate information? Your task: Develop ethical framework for evaluating promises made in ignorance, apply it to Jane-Rochester, then extend to modern contexts where people extract commitments before disclosure. Consider: (1) Does lack of information void a promise? (2) Is person who extracts promise before disclosure acting unethically? (3) What obligations exist to honor our word when we learn the full story contradicts our values? (4) How do we balance integrity (keeping promises) with self-protection (not enabling harmful behavior)? Use Jane Eyre as case study but engage with broader questions about consent, commitment, and information in relationships, contracts, and ethical decision-making.',
    
    guidingQuestions: [
      'Rochester frames his request in terms of Jane\'s character: "You give me your word of honour to stand by me, Jane?" By making it about her integrity rather than about what he needs, he makes it harder for her to refuse or later withdraw. How does framing request as honor-test affect the ethics of extracting commitment before disclosure?',
      'Jane promises while Rochester is visibly vulnerable (collapsed, desperate, afraid). Does extracting commitment during emotional crisis constitute coercion? Or is it just human need—he genuinely needs her support and asks for it? Can requests made during crisis be both authentic and manipulative?',
      'Later, when Jane learns Rochester planned bigamy, she\'ll remember this promise. Should she feel obligated to honor it? Does the fact that she promised "in good faith" (she meant it when she said it) create obligation even though she didn\'t know what she was promising? Or does Rochester\'s failure to disclose void her commitment?',
      'Apply to modern contexts: relationship partners who ask "Will you support me no matter what?" before revealing they cheated/lied; business deals where you\'re asked to commit before seeing full terms; family members who extract promises before explaining what happened. What protections should exist against being bound by commitments made without adequate information?'
    ],
    
    thinkingFramework: {
      analyze: 'Map the promise-extraction: (1) Context: Rochester is collapsed, terrified, vulnerable after hearing Mason\'s name. Jane sees him desperate and afraid. (2) Request: "Will you help me? Will you stand by me? You give me your word of honour?" He frames it as honor-test, asks for blind commitment. (3) Jane\'s response: She promises, moved by his fear, not knowing what she\'s promising. (4) Information withheld: Rochester doesn\'t tell Jane about Bertha, the planned bigamy, what Mason\'s arrival means. (5) Later consequences: When Jane learns the truth, she must decide if she\'s bound by promise made in ignorance. Create timeline: promise extracted → Jane learns truth → Jane must choose whether to honor commitment. Identify what Jane didn\'t know when she promised: (A) Rochester is married, (B) He planned bigamy, (C) Mason is Bertha\'s brother, (D) "Standing by him" means complicity in deception.',
      evaluate: 'Develop framework for promises made in ignorance: (1) Valid promise requires: adequate information, freedom from coercion, understanding of what\'s being agreed to. If these don\'t exist, is commitment binding? (2) Distinguish between: (A) Natural ignorance (neither party knows full situation), (B) Strategic withholding (one party deliberately conceals information), (C) Impossible disclosure (person can\'t reveal information yet due to circumstances). (3) Evaluate Rochester\'s extraction of promise: Is it strategic (securing her loyalty before she can learn the truth and object) or desperate (genuine need for support, plans to explain later)? (4) Consider power dynamics: Rochester is employer, older, more socially powerful—does this affect whether Jane can freely refuse or later withdraw? (5) Balance integrity concerns: honoring your word (Jane values her honor) vs. refusing complicity in harmful behavior (enabling bigamy).',
      synthesize: 'Connect to modern contexts across domains: (1) Relationships: Partner asks "Will you support me no matter what?" before revealing infidelity, addiction, legal trouble. Are you obligated to honor blind commitment when you learn what you\'re supporting? (2) Business: Asked to commit to deal before seeing full terms, sign NDA before being told what you\'re protecting. What protections exist against being bound without adequate information? (3) Family: Parent/sibling asks for promise of support before explaining crisis. How do you balance family loyalty with self-protection? (4) Legal/Medical: Informed consent doctrine requires adequate information before commitment. Apply to personal relationships: should same principle apply? Develop guidelines: (A) Red flag: Anyone asking for commitment before disclosure—"Promise you won\'t be angry," "Will you support me no matter what?" (B) Protection: Refusing blind commitment isn\'t lack of trust, it\'s requiring information before decision. (C) Evaluation: If you discover commitment was extracted without disclosure, you have grounds to reassess. Being lied to or manipulated voids obligation. (D) Balance: Sometimes genuine emergencies require trust before full explanation, but pattern of extracting blind commitments is manipulation. Create decision tree: When asked to promise before knowing what you\'re promising, how do you evaluate whether to commit or require information first?'
    },
    
    expectedDepth: 'Strong responses will: (1) Distinguish between different types of ignorance (natural, strategic withholding, impossible disclosure)—recognizing Rochester may be unable to explain about Bertha immediately but is also securing Jane\'s commitment before she can object; (2) Grapple with Rochester\'s vulnerability—is his fear genuine (authentic crisis) or strategic (performed to extract loyalty)? Can it be both?; (3) Engage seriously with power dynamics—Rochester is employer, Jane is economically dependent, she can\'t easily refuse when he\'s desperate; (4) Balance competing values: Jane\'s integrity (she gave her word) vs. refusal to enable harmful behavior (bigamy); (5) Develop nuanced framework that accounts for gradations: Some promises-in-ignorance are more problematic than others depending on context, power, information available; (6) Apply to modern scenarios with specificity—name contemporary equivalents, explain how framework helps navigate real-life situations; (7) Address both personal ethics (what should Jane do?) and structural questions (what protections should exist against coercive extraction of commitment?).',
    
    classroomApplication: 'Works as: (1) Analytical essay (8-10 pages) requiring close reading plus engagement with consent theory, contract law, relationship ethics, (2) Case study analysis—students evaluate real and hypothetical scenarios where commitments were extracted without full information, applying developed framework, (3) Debate: "Promises made without adequate information are not binding" (teams argue pro/con using examples from literature, law, relationships), (4) Policy project—students develop guidelines for when commitments should be considered void due to lack of disclosure. Time: 5-6 class periods including textual analysis, ethical framework development, contemporary applications, and synthesis. Can connect to: business ethics (informed consent in contracts), medical ethics (informed consent in treatment), relationship studies (consent and commitment), philosophy (ethics of promises), law (contract validity). Consider inviting: contract lawyers to discuss when agreements are void due to lack of disclosure, therapists to explain coerced commitments in relationships, ethicists to discuss obligation and information.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(18),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🔪',
    title: 'Next Time: Chapter 19 & 20 — The Night Attack',
    preview: 'That night, terrible screams wake the household. Rochester rushes to Jane, urgently asking for her help without explanation. He takes her to the third floor where she finds Mr. Mason bleeding profusely from knife and bite wounds—attacked by someone upstairs. Rochester asks Jane to tend Mason\'s wounds while he fetches a surgeon, warning her: "Whatever you do, don\'t speak to him, and he must not speak to you." Jane sits alone with the wounded Mason for hours in the dark, hearing strange sounds from the room next door, not knowing who attacked him or why. When the surgeon arrives and Mason is secretly removed from Thornfield before the houseguests wake, Rochester walks Jane in the garden at dawn. He tells her a hypothetical: "If you had made a mistake in youth, suffered for it, found hope with someone new—would you be justified in breaking convention to have happiness?" Jane answers that she\'d obey God\'s law, not transgress for happiness. Rochester seems devastated by her answer, and Jane doesn\'t understand: this "hypothetical" is Rochester asking if Jane would accept him as bigamist.',
    hookQuestion: 'Who attacked Mason? Why did Rochester need to hide it? What is the "mistake in youth" Rochester is hinting at? And why does Jane\'s answer about obeying law over seeking happiness devastate him so completely?'
  }
}

