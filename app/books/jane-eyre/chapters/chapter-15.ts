/**
 * JANE EYRE - CHAPTER 15
 * 
 * Rochester tells Jane about his ex-mistress Céline Varens, then that night
 * Jane saves him from a fire—creating charged intimacy before he blames
 * Grace Poole with an implausible story
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter15: ChapterData = {
  number: 15,
  title: 'Fire in the Night',
  
  readingTime: 28,
  pages: 16,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Rochester tells Jane the story of his past relationship with Céline Varens (Adèle\'s mother), a French opera dancer who betrayed him, using this confession to justify his cynicism—then that very night, Jane wakes to find Rochester\'s bed on fire and saves his life, creating dangerous intimacy before Rochester blames Grace Poole with an implausible explanation that leaves Jane deeply suspicious.',
    
    full: [
      'The evening begins with Rochester in a confessional mood. He tells Jane the story of Céline Varens, Adèle\'s mother. Years ago, when Rochester was young and in Paris, he became infatuated with Céline, a beautiful French opera dancer. He set her up in an apartment, gave her money and jewels, believed himself in love. Then one night, arriving unannounced, he discovered Céline with another man—a vicomte, someone from Rochester\'s own class. Rochester heard them laughing at him: the vicomte mocked Rochester\'s appearance (calling him ugly), and Céline joined in the mockery. Rochester realized she\'d never loved him—she\'d used him for money while mocking him behind his back. He broke with her immediately. Later, Céline claimed Adèle was Rochester\'s child, though he doesn\'t believe it. Still, he brought Adèle to England and provides for her education—not from paternal feeling, but from a sense of obligation since he may be responsible. Rochester presents this story as explanation for his cynicism about women and love: he was betrayed, used, humiliated. He watches Jane\'s reaction carefully.',
      
      'That night, Jane retires to her room exhausted from the emotional intensity of the evening. She falls asleep but wakes to strange sounds—demonic laughter, eerie and unsettling, echoing in the corridor. Then she smells smoke. She opens her door to investigate and sees smoke pouring from Rochester\'s chamber. She rushes in to find his bed curtains ablaze and Rochester unconscious in the bed, about to be consumed by flames. Jane doesn\'t hesitate: she douses him with water from the washstand, then tears down the burning curtains and extinguishes them. Rochester wakes, drenched and confused. When he realizes Jane has saved his life, his gratitude is intense and personal.',
      
      'The scene that follows is charged with intimacy. It\'s the middle of the night. They\'re alone in Rochester\'s bedroom. He\'s in his nightshirt, soaking wet. Jane is in her nightgown and wrapper. They\'ve shared danger and rescue. Rochester grips Jane\'s hand and won\'t release it. He asks her to stay while he investigates, making her promise not to call for help or make noise. He disappears upstairs to the third floor for what feels like an eternity. When he returns, he tells Jane it was Grace Poole who set the fire—he\'s handled it, she shouldn\'t worry, she must tell no one. Then he thanks her for saving his life, holding her hand intensely, looking at her with such feeling that Jane feels something shift between them.',
      
      'But Jane is deeply suspicious. Rochester\'s explanation makes no sense. Why would Grace Poole try to murder him? If Grace is dangerous, why does she still work at Thornfield? Why did Rochester go to the third floor alone without calling for help? Why must Jane keep silent about the fire? Most tellingly: when Jane heard that demonic laughter before discovering the fire, it was the same laugh she\'d heard months ago (Chapter 11) and attributed to Grace Poole—but now that attribution seems less certain. Rochester is clearly lying, but about what? And why? Jane returns to her room with her nightgown still damp from extinguishing the fire, her heart racing not just from danger but from the intensity of Rochester\'s gratitude and touch. Something has fundamentally changed between them, and Jane knows it—even as she also knows Rochester is concealing something crucial.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'The Byronic Past: Romantic Betrayal as Justification',
      definition: 'Using a story of past romantic betrayal to justify present cynicism, emotional unavailability, or problematic behavior; presenting oneself as victim of love to explain why one can\'t trust or love properly now.',
      context: 'Rochester tells Jane about Céline Varens—how she betrayed him, used him for money, mocked him with her lover. He presents this as explanation for his cynicism about women and love. The story positions Rochester as victim (he loved genuinely, she deceived cruelly) and justifies his emotional guardedness. It also tests Jane: will she feel sympathy for his pain? Will she want to be different from Céline? Will she work to prove not all women are false?',
      whyItMatters: 'This narrative pattern—"I was hurt before, so I\'m damaged now"—appears constantly in relationships and fiction. It\'s meant to evoke sympathy and lower expectations: don\'t expect me to be emotionally available/trusting/vulnerable because I was hurt. It also creates a dynamic where the new partner tries to heal old wounds by being different from the ex. But notice: Rochester presents only his version of events. We never hear Céline\'s perspective. Was she really so calculating, or did Rochester misread the relationship? Understanding this pattern helps readers recognize when past hurt is being weaponized to avoid accountability in present behavior.'
    },
    {
      term: 'Life-Debt and Obligation',
      definition: 'The emotional and moral obligation created when someone saves your life; the bond formed through rescue that can create intense intimacy and sense of indebtedness.',
      context: 'Jane saves Rochester\'s life by putting out the fire. This creates a "life-debt"—Rochester explicitly thanks her, holds her hand intensely, looks at her with unmistakable feeling. The rescue has bound them together. Jane has acted to preserve Rochester\'s existence, which creates intimacy more profound than words. Rochester seems to feel he owes Jane something beyond just gratitude—perhaps that fate has connected them, that she was meant to save him, that this creates a claim between them.',
      whyItMatters: 'Life-debt is powerful in literature and psychology. Saving someone\'s life creates a bond that feels destiny-like, as if you were meant to be together. But it can also create problematic dynamics: does the saved person owe the saver? Does rescue create obligation? In Jane Eyre, this moment deepens their connection but also complicates Jane\'s ability to judge Rochester objectively—can she maintain critical distance from someone whose life she\'s saved? Understanding life-debt helps readers recognize when emotional bonds formed through crisis may cloud judgment about whether the relationship is actually healthy.'
    },
    {
      term: 'Gaslighting and Implausible Explanations',
      definition: 'Offering explanations for events that don\'t make sense, requiring the listener to accept obvious lies or contradictions, thereby making them doubt their own judgment and perceptions.',
      context: 'Rochester\'s explanation for the fire doesn\'t hold up to even basic scrutiny: Grace Poole set the fire, he\'s handled it, Jane must tell no one, Grace will continue working at Thornfield. None of this makes sense. If Grace tried to murder Rochester, why isn\'t she arrested or dismissed? Why did Rochester go to the third floor alone? Why the secrecy? Rochester is asking Jane to accept an implausible story without questioning it—to trust him despite the obvious holes in his account. Jane notices the contradictions but has no framework for understanding why Rochester would lie.',
      whyItMatters: 'This is a form of gaslighting: Rochester makes Jane doubt her own reasonable assessment (this explanation doesn\'t make sense) by asserting his authority (I\'ve handled it, don\'t question me). He\'s testing whether Jane will accept obvious lies if he presents them with enough confidence. Modern readers should recognize this pattern: when someone offers explanations that require you to ignore obvious contradictions, they\'re asking you to prioritize their word over your own judgment. This is how gaslighting begins—with "minor" lies that train you to doubt yourself.'
    },
    {
      term: 'Physical Intimacy and Boundary Violation',
      definition: 'Sharing physical space or touch in ways that cross conventional boundaries, creating charged intimacy that may be thrilling but also potentially inappropriate given power dynamics or relational context.',
      context: 'After the fire, Jane and Rochester are alone in his bedroom in the middle of the night, both in nightclothes, one soaking wet. This is shocking by Victorian standards—unmarried people, especially employer and employee, in a bedroom together, in undress. Rochester holds Jane\'s hand and won\'t release it. The physical proximity and touch create intimacy that feels both thrilling (Jane is clearly affected) and potentially inappropriate (he\'s her employer, they\'re not engaged, they\'re in states of undress). Rochester doesn\'t apologize for the boundary crossing—he seems to assume the crisis justifies the intimacy.',
      whyItMatters: 'Crisis and rescue can create physical intimacy that bypasses normal boundaries. The question is: does the emergency justify the boundary crossing, or is Rochester using the fire as excuse to create intimacy he couldn\'t otherwise? Jane is drawn to the physical closeness but also recognizes it\'s improper. Understanding how emergencies can be leveraged to create intimacy helps readers recognize when crisis is used to fast-track physical/emotional connection that should develop more gradually. This is relevant in modern contexts: when intense situations (shared trauma, dramatic events) create instant intimacy that might not be sustainable or healthy outside that heightened state.'
    },
    {
      term: 'Gothic Mystery and Withheld Information',
      definition: 'A narrative technique where crucial information is deliberately concealed, creating suspense and unease; readers and protagonist know something is wrong but can\'t identify what, creating psychological tension.',
      context: 'Jane knows Rochester is lying about the fire, but she doesn\'t know why or what he\'s concealing. The demonic laughter, the mysterious third floor, Grace Poole\'s continued employment, Rochester\'s strange behavior—all suggest a dark secret. But what? The gothic atmosphere creates dread without revelation. Jane (and readers) must navigate increasing evidence that something is deeply wrong at Thornfield while Rochester actively prevents discovery.',
      whyItMatters: 'Gothic mystery works through withheld information: you know you\'re not being told the truth, but you don\'t know enough to act on your suspicions. This mirrors abusive or deceptive relationships: you sense something is wrong (inconsistencies, strange behavior, implausible explanations) but can\'t pinpoint it, leaving you suspended in uncertainty. The gothic teaches us to trust our instincts: if something feels wrong, it probably is—even if you can\'t prove it yet. Jane\'s growing suspicion despite Rochester\'s assurances models healthy skepticism when evidence and explanation don\'t align.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane demonstrates her capacity for decisive action under crisis: she doesn\'t panic when she discovers the fire, doesn\'t waste time seeking help, but immediately douses the flames and saves Rochester\'s life. This shows Jane\'s practical courage—she acts rather than reacts. But Jane also demonstrates critical thinking: she notices that Rochester\'s explanation about Grace Poole doesn\'t make sense. She doesn\'t voice her suspicions to Rochester, but she doesn\'t suppress them internally either. Jane is learning to maintain two levels of awareness: outward compliance (she agrees not to speak of the fire) while inwardly questioning (she knows something is being concealed). This split consciousness—appearing to accept what you\'re told while privately maintaining critical distance—is a survival skill for people in subordinate positions. Jane is also deeply affected by the intimacy with Rochester: the hand-holding, the intensity of his gratitude, the physical proximity in nightclothes. She\'s drawn to him but also aware that propriety has been violated. By chapter\'s end, Jane is emotionally entangled but intellectually suspicious—a dangerous combination.',
      keyTrait: {
        emoji: '🔥',
        text: 'Decisive'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'This chapter reveals Rochester as active deceiver, not just witholder of information. He deliberately lies about Grace Poole, constructs an implausible story, and asks Jane to maintain secrecy. He\'s not passively concealing Bertha—he\'s actively managing the secret, creating false explanations, controlling who knows what. The Céline story also reveals Rochester\'s capacity for self-pity: he presents himself as victim of female betrayal to justify his cynicism. But was Céline really so calculating, or did Rochester misread a transactional relationship as romantic love? Rochester\'s version is the only one we hear. After the fire, Rochester\'s gratitude toward Jane is intense and physical: he holds her hand, looks at her with feeling, creates charged intimacy. But he also uses the moment to extract her promise of secrecy. Rochester is revealed as someone who can feel genuine emotion (gratitude, attraction) while simultaneously manipulating (lying about the fire, using crisis to create inappropriate intimacy, securing Jane\'s complicity through obligation). This combination—authentic feeling plus strategic deception—makes him both compelling and dangerous.',
      keyTrait: {
        emoji: '🎭',
        text: 'Deceiver'
      }
    },
    {
      name: 'Céline Varens',
      development: 'Céline appears only in Rochester\'s narrative, not in person, but she\'s important. Rochester describes her as beautiful, manipulative, mercenary—a woman who used him for money while mocking him with her lover. But readers should be skeptical of Rochester\'s framing. Was Céline a kept woman (mistress) who understood the relationship as transactional? Did Rochester delude himself that she loved him when it was always a financial arrangement? Did she mock him, or did he misinterpret a conversation he overheard? We don\'t know—we only have Rochester\'s embittered version years later. Céline functions as cautionary tale: this is what happens when Rochester trusts women. This positions Jane to "prove" she\'s different, which creates pressure on her to be forgiving and uncritical. Céline is the absent woman whose story is told by the man who feels wronged—a pattern that should make readers suspicious.',
      keyTrait: {
        emoji: '👻',
        text: 'Absent Narrative'
      }
    },
    {
      name: 'Grace Poole',
      development: 'Grace becomes Rochester\'s scapegoat for the fire. He blames her explicitly, though his explanation makes no sense (why would she try to murder him? why does she still work here?). Grace doesn\'t appear in the chapter—she\'s present only as Rochester\'s false explanation. This makes her sinister by association: if Rochester says Grace set the fire, she must be dangerous. But astute readers will notice: Grace is being set up as convenient villain for events she likely didn\'t cause. Rochester is using Grace as cover story for Bertha\'s actions. Grace will continue to serve this function: mysterious, blamed, but never actually appearing to defend herself or explain.',
      keyTrait: {
        emoji: '🎯',
        text: 'Scapegoat'
      }
    },
    {
      name: 'Bertha Mason Rochester',
      development: 'Bertha doesn\'t appear named in this chapter, but she\'s present as the "demonic laughter" Jane hears and as the actual fire-setter. Bertha is characterized through Jane\'s perception as supernatural threat: the laughter is "tragic" and "preternatural," more demon than human. Bertha is being constructed as gothic horror—the monster on the third floor—before Jane (or readers) know she\'s a human woman, Rochester\'s wife, imprisoned. This narrative strategy makes Bertha seem inhuman before we learn the truth, which will complicate our sympathy when her identity is revealed. The fire-setting shows Bertha as dangerous but also, from her perspective, perhaps attempting escape or revenge against her captor.',
      keyTrait: {
        emoji: '👤',
        text: 'Hidden Threat'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'I would not ascribe vice to her which she did not possess. She was not a woman of principle, but she had a very moderate degree of principle. I do not think she could have been capable of great crimes.',
      analysis: 'Rochester\'s description of Céline is revealing in what it doesn\'t say. He admits she "was not a woman of principle" but then qualifies: only "moderate" lack of principle, not capable of "great crimes." This is damning with faint non-praise. He\'s describing a kept woman in a transactional relationship while framing it as romantic betrayal. Céline may have understood their relationship as business; Rochester may have deluded himself about her feelings. His need to assert she wasn\'t evil (just unprincipled) suggests he wants Jane to know he wasn\'t completely foolish—even as the story makes him look foolish.'
    },
    {
      text: 'Tongues of flame darted round the bed: the curtains were on fire. In the midst of blaze and vapour, Mr. Rochester lay stretched motionless, in deep sleep.',
      analysis: 'The fire is described in gothic, dramatic terms: tongues of flame, blaze, vapor—and Rochester unconscious, about to be consumed. This creates visceral danger: Jane must act immediately or Rochester dies. The scene\'s intensity justifies the intimacy that follows (they\'re both in nightclothes, alone in his bedroom, he\'s soaking wet). But it\'s worth noting: someone tried to murder Rochester by burning him alive. This isn\'t minor mischief; it\'s attempted murder. Yet Rochester will minimize it, blame an implausible culprit, and carry on as if nothing serious happened.'
    },
    {
      text: 'I will fetch a candle... and make my own observations. Wait here till I return; I must go up to the third storey. Don\'t move, remember, or call anyone.',
      analysis: 'Rochester\'s instructions reveal he knows the fire didn\'t originate in his room and wasn\'t set by Grace Poole (as he\'ll later claim). He knows he needs to go to the third floor—where Bertha is imprisoned. He makes Jane promise not to call for help or make noise, which makes no sense if the danger is truly past. He\'s managing the secret, not responding to an emergency. Jane obeys but notices the strangeness. Rochester\'s authority (he\'s her employer) makes Jane comply despite her suspicions—a dynamic that enables his continued deception.'
    },
    {
      text: 'I knew, said he, you would do me good in some way, at some time;—I saw it in your eyes when I first beheld you: their expression and smile did not... strike delight to my very inmost heart for nothing.',
      analysis: 'Rochester frames Jane\'s rescue as destiny: he knew she would "do him good," he saw it in her eyes from their first meeting. This is romantic but also manipulative—it suggests they\'re fated to be together, that Jane was meant to save him, that this creates a bond beyond ordinary connection. It positions the rescue as confirmation of their special relationship rather than as Jane responding appropriately to emergency. Rochester is using the life-debt to create obligation and intimacy. Notice he doesn\'t just say thank you—he makes it about their cosmic connection.'
    },
    {
      text: 'Strange energy was in his voice, strange fire in his look... I felt for the moment superstitious—as if I were near some strange, preternatural influence.',
      analysis: 'Jane perceives Rochester as almost supernatural—"strange energy," "strange fire," "preternatural influence." This language mirrors how she described the demonic laughter that preceded the fire. Jane is picking up on Rochester\'s intensity, which is genuine but also unsettling. He\'s not just grateful; he\'s charged with something Jane can\'t name—perhaps the relief of near-death, perhaps awareness of the intimacy they\'re sharing, perhaps guilt about the lies he\'s telling. The "preternatural" description suggests Jane senses something beyond normal human interaction—though she doesn\'t yet know what.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Crisis as Catalyst for Intimacy',
        explanation: 'The fire creates intimacy that couldn\'t exist otherwise: Jane and Rochester alone in his bedroom at night, both in nightclothes, sharing danger and rescue. Crisis strips away social conventions (propriety would never allow this scenario) and creates accelerated bonding (life-debt, intense gratitude, physical touch). But the novel questions whether crisis-intimacy is genuine or problematic. Does the emergency justify the boundary-crossing? Or is Rochester using the fire (or at minimum, not managing its aftermath appropriately) to create intimacy his employee-status makes otherwise impossible? Crisis can reveal authentic connection—or can be leveraged to fast-track intimacy that should develop more gradually.'
      },
      {
        name: 'Lying and Gaslighting',
        explanation: 'Rochester\'s explanation about Grace Poole is obviously false, yet he expects Jane to accept it. This is gaslighting: making someone doubt their reasonable judgment by asserting an implausible story with confidence. Jane knows it doesn\'t make sense but has no framework for understanding why Rochester would lie or what he\'s concealing. She\'s left suspended between her instincts (something is wrong) and her trust (Rochester wouldn\'t lie to me). This dynamic—knowing you\'re being deceived without being able to prove it or understand why—is psychologically destabilizing. The novel explores how lying works: not through perfect deception but through authority that makes you question your own perception.'
      },
      {
        name: 'The Byronic Past as Justification',
        explanation: 'Rochester presents his relationship with Céline as explanation for his cynicism: I was betrayed, so I can\'t trust women, so I\'m emotionally guarded. This narrative creates sympathy (he was hurt) while lowering expectations (don\'t expect emotional availability). It also positions Jane to "prove" she\'s different from Céline—creating pressure to be uncritical and forgiving. But Brontë invites skepticism: Is Rochester\'s version accurate? Was Céline the villain he describes, or did Rochester misunderstand a transactional relationship? Does past hurt justify present problematic behavior? The novel suggests: past trauma may explain present character, but it doesn\'t excuse it. Rochester is responsible for who he chooses to be now, regardless of what Céline did.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Gothic Atmosphere: Mystery Through Withheld Information',
        explanation: 'Brontë creates suspense not through action but through gaps in explanation. Jane (and readers) accumulate evidence: demonic laughter, mysterious third floor, fire, Rochester\'s strange behavior, implausible explanations. We know something is wrong but can\'t identify what. This sustained uncertainty creates gothic unease more effectively than revealing the secret would. The technique mirrors how deception feels in life: you sense something is off but can\'t prove it, leaving you suspended in doubt.',
        example: 'When Rochester returns from the third floor after an extended absence and tells Jane it was Grace Poole without elaboration, readers are left with questions that heighten mystery: Why did it take so long? What was he doing up there? If Grace is dangerous, why isn\'t she arrested? Why the secrecy? The gaps in explanation become more significant than what\'s explained.'
      },
      {
        name: 'Physical Intimacy as Plot Development',
        explanation: 'Brontë uses physical proximity and touch to advance emotional relationship. The bedroom scene—both in nightclothes, Rochester soaking wet, hand-holding, intense gazes—creates intimacy that dialogue alone couldn\'t. Victorian readers would understand this as shocking: unmarried people, employer-employee, in bedroom, in undress. The physical violation of propriety mirrors the emotional boundary-crossing happening between Jane and Rochester. Their relationship advances through bodies as much as words.',
        example: 'Rochester holds Jane\'s hand and won\'t release it. This prolonged touch creates intimacy and obligation—Jane can\'t easily extract herself physically or emotionally. The hand-holding is both genuinely intimate (connection after shared crisis) and potentially coercive (he\'s her employer holding her in his bedroom at night). Brontë makes readers feel the charged ambiguity.'
      },
      {
        name: 'Unreliable Embedded Narrative',
        explanation: 'The Céline story is Rochester\'s narrative within Jane\'s narrative. It\'s doubly unreliable: Rochester tells a self-serving version, and we receive it filtered through Jane who may not recognize its biases. This technique lets Brontë present information while signaling readers should be skeptical. Rochester is the only source for Céline\'s character—we never hear her defend herself. The embedded narrative structure reminds us: all stories are told by someone with an agenda.',
        example: 'Rochester describes overhearing Céline and her lover mock him: "My English Rothschild, I suppose." But is this exactly what was said? Did Rochester mishear? Misinterpret? We have no way to know—we only have his embittered recollection years later. The narrative structure keeps readers alert to the possibility that Rochester\'s version isn\'t objective truth.'
      },
      {
        name: 'Dramatic Irony and Reader Knowledge',
        explanation: 'Readers increasingly know more than Jane does. We suspect Rochester is lying about Grace Poole; we guess someone else set the fire; we\'re watching Rochester deceive Jane while she trusts him. This creates dramatic irony: we see the manipulation Jane can\'t. But it also creates anxiety: we can\'t warn Jane. We\'re forced to watch her become more entangled while increasingly aware she\'s being deceived. This makes readers complicit in Jane\'s situation—we know but can\'t act.',
        example: 'When Rochester tells Jane it was Grace Poole, readers know this is false. When he makes Jane promise secrecy, we see him securing her complicity. When he holds her hand and speaks of destiny, we recognize romantic manipulation. But Jane doesn\'t. The gap between Jane\'s trust and our suspicion creates unbearable tension—we want to shake her awake but can only watch.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine working for a charismatic boss who shares a personal story about being badly hurt in a previous relationship—they were betrayed, used, mocked by an ex who only wanted their money and status. The boss presents this as explanation for why they\'re guarded, why they have trust issues, why they sometimes seem cynical about love. You feel sympathy and secretly hope to prove not everyone is like the ex. Then one night, there\'s an emergency at the workplace—a crisis that requires you to help save the boss from danger. Maybe it\'s physical danger (fire, intruder, medical emergency) or professional danger (you discover and prevent a major mistake that would have destroyed the boss\'s career). In the aftermath, alone with your boss during what should be off-hours, boundaries blur: intense gratitude, physical proximity, charged emotional intimacy, prolonged eye contact and touch. Your boss thanks you intensely, calls you irreplaceable, says they knew you were special from the moment you met. Then your boss asks you to keep quiet about what happened—don\'t tell HR about the emergency, don\'t mention the boundary-crossing intimacy, trust me to handle it. You agree, feeling both honored by the trust and uncomfortable about the secrecy. Later, details don\'t add up: your boss\'s explanation for what caused the crisis has obvious holes. But when you try to ask questions, your boss deflects: "I\'ve handled it, don\'t worry about it, you don\'t understand the full situation."',
    
    parallels: [
      '🔹 **Past Relationship as Justification**: When someone shares painful past betrayal to explain present emotional unavailability or problematic behavior, they\'re setting up: "I have trust issues, so don\'t expect me to be vulnerable/honest/available." It creates sympathy while lowering expectations. It also positions you to "prove" you\'re different from the ex, creating pressure to be uncritical. Modern dating has normalized "I have baggage" as sufficient explanation for red flags.',
      '🔹 **Crisis-Accelerated Intimacy**: Emergencies create fast-track bonding that bypasses normal relationship development. Shared trauma, rescue scenarios, intense situations—all create intimacy that feels deep because it was forged under pressure. But crisis intimacy isn\'t the same as earned intimacy built through daily trust over time. Modern equivalent: "trauma bonding" in intense situations (boot camps, disaster response, high-pressure projects) where people feel deeply connected because they survived something together—but the connection may not translate to normal circumstances.',
      '🔹 **Life-Debt Dynamics**: When you help someone through a major crisis, it creates obligation and gratitude that can feel like destiny. "You saved me" becomes "we\'re meant to be together." But rescue doesn\'t equal compatibility. Modern contexts: people who stay in relationships with addicts/troubled people because "they need me" or because helping them through crisis created a bond. The question: is this love, or obligation disguised as love?',
      '🔹 **Boundary-Crossing Justified by Emergency**: Crisis can be leveraged to cross boundaries that would normally be inappropriate: boss-employee alone after hours, physical touch justified by emergency, emotional intimacy explained by shared danger. While some boundary crossing may be legitimately necessary during crisis, it can also be exploited: using emergency as excuse to create intimacy that shouldn\'t exist. Modern workplace equivalent: boss who uses late-night work emergencies to be alone with employee, creating intimacy under cover of professional necessity.',
      '🔹 **"Trust Me, Don\'t Ask Questions"**: When someone asks you to accept their explanation despite obvious holes in the story, they\'re asking you to prioritize their word over your judgment. "I\'ve handled it, don\'t worry, you wouldn\'t understand" trains you to stop questioning. Modern equivalent: partners who deflect when you ask about inconsistencies ("Why don\'t you trust me?"), managers who classify information as "need-to-know" to avoid transparency, people who frame legitimate questions as attacks on their integrity.',
      '🔹 **Complicity Through Secrecy**: Asking you to keep quiet about something that seems significant (workplace emergency, boundary violation, strange behavior) makes you complicit. If you agree to secrecy, you\'re invested in the lie—you can\'t later raise concerns without admitting you knew and said nothing. Modern contexts: "Don\'t tell HR about this" after workplace incident, "Keep this between us" about relationship boundary-crossing, "They wouldn\'t understand" about financial or personal decisions. Secrecy requirements should trigger questions about what\'s being hidden and why.',
      '🔹 **Gaslighting Through Authority**: When someone with power over you offers an explanation that doesn\'t make sense, their authority makes you doubt your judgment. "The boss says it\'s fine, so it must be fine—even though it seems wrong." This is how gaslighting works: not through perfect lies but through authority that makes you suppress your own instincts. Modern equivalent: being told your legitimate concerns are "overreactions," that your reasonable questions show you "don\'t understand the full picture," that your perceptions of weirdness are wrong because someone with more authority/experience says so.'
    ],
    
    discussionPrompt: 'Have you experienced crisis-accelerated intimacy—where shared intense situation created fast connection? Did that intimacy translate to sustainable relationship, or did it fade when the crisis passed? When someone in authority (boss, teacher, mentor, partner) asks you to keep quiet about something that seems significant, how do you decide whether the secrecy is legitimate or suspicious? Have you noticed yourself suppressing instincts that something is wrong because someone with authority assured you it\'s fine?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🔥',
      name: 'Fire as Passion and Danger',
      explanation: 'This is the first literal fire in the novel, but fire imagery has tracked Jane throughout: her passionate nature, Rochester calling her "fiery," the "fire and passion" that terrifies conventional people. Now fire becomes real and dangerous—it nearly kills Rochester. Fire represents passion (Jane and Rochester\'s growing attraction) but also destruction (Bertha\'s rage, Jane\'s potential to be consumed). The novel asks: is passion worth the danger? Can you have one without the other?'
    },
    {
      emoji: '🎭',
      name: 'Lies and Strategic Deception',
      explanation: 'Rochester moves from withholding information to active lying. His Grace Poole story is deliberate deception designed to prevent Jane from discovering Bertha. He constructs false explanations and secures Jane\'s complicity through her promise of secrecy. This thread shows: deception escalates. First Rochester conceals (doesn\'t mention Bertha), then he deflects (changes subject when Jane asks questions), now he lies (creates false narrative about Grace). By the wedding, he\'ll attempt bigamy—each lie building on previous ones.'
    },
    {
      emoji: '🤝',
      name: 'Life-Debt and Obligation',
      explanation: 'Jane saves Rochester\'s life, creating a bond beyond ordinary employment or even friendship. Life-debt appears in many cultures and stories: saving someone\'s life creates obligation, destiny, a tie that can\'t be easily broken. Rochester will reference Jane\'s rescue multiple times, using it as evidence they\'re meant to be together. But the novel will question: does rescue equal compatibility? Does life-debt justify overlooking deception? Can obligation be confused with love?'
    },
    {
      emoji: '👻',
      name: 'The Hidden Woman',
      explanation: 'Bertha continues to be present-but-hidden, characterized only through her effects (laughter, fire) and Rochester\'s false explanations. The "madwoman in the attic" is being constructed as gothic monster before we learn she\'s a human woman, a wife, imprisoned. This narrative strategy builds horror while raising ethical questions: Who is this woman? Why is she here? What gives Rochester the right to imprison her? The hidden woman thread asks: who gets to tell whose story?'
    },
    {
      emoji: '🔍',
      name: 'Suspicion and Trust',
      explanation: 'Jane is increasingly torn between instinct (something is wrong) and trust (Rochester wouldn\'t deceive me). She notices contradictions but lacks framework for understanding them. This thread explores: How do we know when to trust our suspicions vs. when we\'re being paranoid? What do we do when someone we\'re drawn to is clearly lying but we don\'t know why? Jane models maintaining inner skepticism while outwardly complying—a survival skill for those in subordinate positions.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'The Céline Narrative',
      question: 'Rochester tells Jane about Céline Varens to explain his cynicism about women. But we only hear his version—Céline never appears to defend herself. Should we trust Rochester\'s framing? Was Céline a calculating betrayer, or was Rochester deluded about the nature of their relationship? What does it mean that Rochester presents this story to Jane specifically—what work is it doing in their developing relationship?'
    },
    {
      title: 'Crisis and Intimacy',
      question: 'The fire creates intimacy between Jane and Rochester that wouldn\'t otherwise be possible: alone in his bedroom at night, both in nightclothes, intense physical and emotional connection. Does the crisis justify the boundary-crossing? Or is Rochester using (or at minimum not properly managing) the emergency to create inappropriate intimacy? How do we distinguish between legitimate crisis response and leveraging crisis for relationship purposes?'
    },
    {
      title: 'Gaslighting and Authority',
      question: 'Rochester\'s explanation about Grace Poole obviously doesn\'t make sense, yet Jane accepts it (while privately remaining suspicious). Why does Rochester\'s authority make Jane doubt her own reasonable judgment? How does gaslighting work through authority rather than through perfect lies? When should we trust authority figures\' explanations vs. our own assessment that something doesn\'t add up?'
    },
    {
      title: 'Life-Debt',
      question: 'Jane saves Rochester\'s life, which creates intense gratitude and sense of destiny ("I knew you would do me good"). Does rescue create special obligation or bond? Should Jane feel differently about Rochester now that she\'s saved his life? Can life-debt be confused with love—and if so, how do we distinguish between feeling connected because of shared crisis vs. genuine compatible connection?'
    },
    {
      title: 'Secrecy and Complicity',
      question: 'Rochester asks Jane to keep quiet about the fire and accept his explanation without questioning. By agreeing, Jane becomes complicit in maintaining whatever Rochester is hiding. When is it appropriate to keep someone\'s confidence vs. when does secrecy make you complicit in wrongdoing? How do you know the difference, especially when you don\'t fully understand what\'s being concealed?'
    },
    {
      title: 'Bertha as Gothic Horror',
      question: 'The fire-setter (later revealed to be Bertha) is described through Jane\'s perception as "demonic," "preternatural," almost supernatural. How does Brontë construct Bertha as gothic monster before readers learn she\'s Rochester\'s imprisoned wife? What effect does this have on readers\' sympathies when the truth is revealed? Is it fair to characterize someone as monstrous when we don\'t know their story or circumstances?'
    },
    {
      title: 'Reader Dramatic Irony',
      question: 'Readers increasingly suspect Rochester is lying while Jane still trusts him. How does this dramatic irony create tension? What does it feel like to watch Jane become more entangled while we suspect she\'s being deceived but can\'t warn her? Does this mirror real-life experiences of watching friends in problematic relationships—seeing red flags they can\'t or won\'t see?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'crisis-intimacy',
      title: 'Crisis-Accelerated Intimacy: When Emergency Becomes Relationship',
      question: 'The fire creates intimacy between Jane and Rochester that couldn\'t exist otherwise—alone in his bedroom at night, both in nightclothes, intense connection. Is this genuine intimacy or is crisis being leveraged to cross boundaries?',
      aiResponse: `
**When Crisis Creates Fast-Track Bonding**

After Jane saves Rochester from the fire, they share a moment of intense intimacy: it\'s the middle of the night, they\'re alone in his bedroom, both in nightclothes (he soaking wet), he\'s holding her hand and won\'t let go, they\'re locked in intense eye contact. This scene would be shocking to Victorian readers and should give modern readers pause: crisis has created intimacy that bypasses all normal boundaries.

**Why Crisis Creates Intense Connection:**

**Psychological Factors:**

**Shared Danger:**
- Facing death together creates profound bond
- "We survived this" becomes "we\'re connected"
- Adrenaline and fear heighten emotion and memory
- Shared intense experience feels destiny-like

**Rescue Dynamics:**
- Saved person feels gratitude that can morph into attachment
- Rescuer feels protective investment in saved person
- "I kept you alive" creates sense of responsibility/connection
- Both parties feel the relationship is special, fated, significant

**Vulnerability:**
- Crisis strips away social masks and performances
- See each other in extreme circumstances
- Authenticity of crisis response (Jane acts without hesitation, Rochester shows genuine fear/gratitude) feels more real than everyday interaction
- "This is who we really are" feeling

**Heightened Emotional State:**
- Fear, relief, gratitude, awareness of mortality
- All emotions are amplified
- Normal cautious relationship development bypassed
- Feel more in minutes than might normally feel in months

**Why This Is Potentially Problematic:**

**1. Boundary-Crossing Justified by Emergency**

**What Happens:**
- Rochester and Jane are alone in bedroom in nightclothes
- He\'s touching her (holding hand), won\'t let go
- Prolonged intense physical proximity
- All of this is wildly inappropriate by Victorian standards

**The Question:**
- Is this legitimate crisis response? (they needed privacy to discuss what happened)
- Or is Rochester using the crisis as excuse for intimacy that shouldn\'t exist? (employer-employee, alone in bedroom at night)

**Modern Parallel:**
Boss and employee work late night emergency, leading to:
- Inappropriate time together (after hours, alone)
- Physical proximity justified by crisis (leaning over same desk, physical closeness while problem-solving)
- Emotional intimacy excused by shared stress (confiding about personal life because "we\'re in this together")
- Boundary violations rationalized as "necessary given circumstances"

**2. Intensity Confused with Compatibility**

**Crisis Intimacy Feels Deeper Because:**
- Circumstances are dramatic
- Emotions are heightened  
- Mortality awareness makes connection seem profound
- Adrenaline makes everything more intense

**But:**
- Compatibility is about daily life, not crisis response
- Can you navigate boring Tuesday together?
- Do you share values, goals, communication styles?
- Crisis bonding doesn\'t answer these questions

**Modern Application:**
- "Trauma bonding" in intense work environments
- Relationships that start during life upheavals (divorce, death, job loss)
- Bonds formed in high-stress situations (disaster response, military, medical emergencies)

Connection feels deep because circumstances were intense, but intensity ≠ sustainability

**3. Life-Debt Creates Obligation**

**The Dynamic:**
Rochester frames Jane\'s rescue as evidence of destiny:
- "I knew you would do me good"
- "I saw it in your eyes from the first"
- Rescue proves they\'re meant to be together

**This Creates:**
- Jane feels special (only I could save him)
- Rochester feels obligated (she saved my life, I owe her)
- Both feel tied by something beyond choice
- Leaving would feel like abandoning someone who needs you

**The Problem:**
- Obligation isn\'t the same as love
- Gratitude isn\'t the same as compatibility
- Feeling needed isn\'t the same as being truly seen
- Rescue doesn\'t mean you\'re right for each other long-term

**4. Secrecy Compounds Intimacy**

**Rochester Asks Jane:**
- Don\'t tell anyone about the fire
- Don\'t ask questions about what happened
- Trust me to handle it
- This is between us

**Secrecy Creates:**
- "Us against the world" feeling
- Special knowledge that binds them
- Complicity that makes Jane invested
- Isolation that intensifies their connection

**But Secrecy Also:**
- Prevents Jane from getting outside perspective
- Isolates her from people who might raise concerns
- Makes her complicit in whatever Rochester is hiding
- Uses intimacy as tool to secure silence

**Is Rochester Manipulating or Responding Authentically?**

**Arguments He\'s Manipulating:**

**1. He Could Have Managed Differently:**
- Could have handled the aftermath more appropriately (not held her hand, dismissed her quickly)
- Could have explained without creating extended intimate scene
- Could have respected boundaries even in crisis

**2. He Uses the Moment:**
- Speaks of destiny and fate
- Creates sense of special connection
- Leverages her gratitude/concern
- Secures her promise not to tell

**3. He\'s Done This Before:**
- The Céline story shows he creates narratives about relationships
- He\'s skilled at romantic framing
- He knows how to use vulnerability strategically

**Arguments He\'s Authentic:**

**1. His Gratitude Is Genuine:**
- Jane did save his life
- His appreciation is reasonable
- The intensity matches the circumstance (near-death)

**2. Humans Bond Through Crisis:**
- This is normal psychological response
- Not all intense connection is manipulation
- Sometimes crisis reveals authentic feeling

**3. He Can Be Both:**
- Genuinely grateful AND strategically leveraging
- Authentically feeling connection AND inappropriately expressing it
- Real emotions don\'t preclude manipulative behavior

**What Healthy Crisis Response Looks Like:**

**Appropriate:**
- Gratitude expressed clearly and briefly
- Boundaries maintained even in aftermath
- Follow-up that respects normal relationship structure
- Acknowledging intimacy of crisis without exploiting it

**Inappropriate:**
- Extended physical contact beyond what\'s necessary
- Framing crisis as evidence of destiny/fate
- Using crisis to fast-track relationship progression
- Securing secrecy that isolates the other person

**For Jane and Rochester:**

**What\'s Concerning:**
- The prolonged hand-holding in his bedroom
- The language of destiny and fate
- The demand for secrecy
- The boundary crossing justified by emergency

**What Jane Should Watch For:**
- Does Rochester continue to reference the rescue as evidence they\'re meant to be together?
- Does he use life-debt to create obligation?
- Does the intimacy of this night become precedent for future boundary-crossing?
- Does he respect her need for appropriate distance despite the crisis?

**Modern Applications:**

**When to Be Cautious of Crisis Intimacy:**

**Red Flags:**
- Someone uses emergency as excuse to violate boundaries repeatedly
- Crisis becomes pattern (there\'s always some urgent situation requiring intimate time together)
- Person references shared crisis as evidence you\'re meant to be together
- You\'re asked to keep the crisis/response secret
- Intensity of crisis bonding makes you overlook other incompatibilities

**Green Flags:**
- Crisis creates connection but boundaries are restored after
- Person acknowledges the intensity was circumstantial, not necessarily indicative of long-term compatibility
- Transparency about what happened (no secrecy requirements)
- Time is taken after crisis to assess whether connection translates to non-crisis circumstances

**For Discussion:**

Have you experienced crisis-accelerated intimacy? Did it translate to sustainable relationship? Looking back, could you distinguish between genuine compatibility vs. intensity of circumstances?

When is crisis bonding legitimate vs. when is it being leveraged to create premature intimacy?

**The Takeaway:**

Crisis creates intense connection that feels profound but may not be sustainable. Shared danger, rescue dynamics, and heightened emotion can bypass normal relationship development and create intimacy that wouldn\'t otherwise exist. While some crisis bonding is authentic, it can also be leveraged—using emergency as excuse to cross boundaries, create obligation through life-debt, and secure secrecy that isolates. Jane and Rochester\'s fire scene creates genuine connection but also troubling dynamics: inappropriate boundary-crossing, destiny framing, and secrecy demands. The question isn\'t whether their connection is real (it is) but whether crisis intimacy is sufficient foundation for relationship—and whether Rochester is managing the aftermath appropriately or exploiting it for relationship purposes. In life: crisis can reveal authentic connection, but intensity isn\'t the same as compatibility. Don\'t confuse adrenaline-fueled bonding with the earned intimacy built through daily trust over time.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Analyzing Narrative Reliability: The Céline Varens Story',
      description: 'Write an analytical essay examining Rochester\'s account of his relationship with Céline Varens. Your task: identify signs of potential narrative bias or unreliability in Rochester\'s telling. Consider: (1) What details does Rochester emphasize vs. minimize? (2) What language does he use to characterize himself vs. Céline? (3) What might Céline\'s version of events be? (4) Is Rochester the victim he presents himself as, or did he misunderstand the nature of their relationship? (5) Why does he tell this specific story to Jane at this specific time—what work is it doing? Then analyze: How does Brontë signal to readers that Rochester\'s narrative should be questioned? Use textual evidence but also consider narrative structure: this is Rochester\'s story embedded in Jane\'s narrative, making it doubly filtered. Finally, connect to broader questions about storytelling: Who gets to narrate their own story vs. appear only in others\' narratives? How do power and authority affect whose version of events becomes "the truth"? Cite examples from the text and from modern contexts where contested narratives matter (breakups, workplace conflicts, public scandals).',
      purpose: 'This prompt develops critical reading skills—recognizing that first-person narratives aren\'t objective truth but one person\'s perspective. Students learn to read for bias, identify strategic framing, and consider absent perspectives. It connects to media literacy: how do we evaluate competing narratives when we can\'t access all parties? The prompt also engages with power dynamics in storytelling: Rochester controls the Céline narrative because he\'s the one telling it; Céline never appears to defend herself. This matters for understanding whose stories get told, believed, and centered—relevant to contemporary discussions about whose voices are heard and whose are silenced.'
    },
    
    activity: {
      title: 'Red Flags in the Fire Scene: Identifying Problematic Dynamics',
      description: 'Present students with the fire scene stripped of romantic framing—just facts: Employee discovers boss\'s room on fire and saves boss\'s life. In aftermath, boss and employee are alone in bedroom at night, both in nightclothes. Boss holds employee\'s hand for extended period, speaks of destiny and fate, asks employee to keep quiet about the incident, provides explanation that doesn\'t make sense, dismisses employee\'s reasonable questions. Students mark this scenario: Appropriate crisis response or Concerning boundary violations? Then reveal: this is Jane and Rochester. Discuss: Why does romantic framing make us excuse behavior that would be red flags in workplace context? What changes when we know Rochester is Jane\'s employer? What if genders were reversed? Students identify which specific elements are concerning regardless of romantic context: (1) Extended physical contact, (2) Destiny language creating obligation, (3) Secrecy requirements, (4) Lies/implausible explanations, (5) Dismissal of legitimate questions. Extension: Students find other "romantic" scenes in literature/media and analyze them stripped of romantic framing. Do they still seem acceptable?',
      materials: 'Scenario handouts (facts without romantic framing), markers for flagging concerns, comparison chart (romantic narrative vs. power dynamics analysis)'
    },
    
    crossCurricular: {
      title: 'Crisis Psychology: Trauma Bonding and Intensity vs. Intimacy',
      description: 'Partner with psychology class to study crisis psychology and relationship formation. Psychology class covers: (1) Adrenaline and attraction (how fear/excitement physiologically mimic romantic feelings), (2) Trauma bonding vs. healthy connection, (3) Life-debt and obligation psychology, (4) How crisis creates fast-track bonding that bypasses normal development. English class reads Chapter 15 analyzing: How does the fire create intimacy between Jane and Rochester? What boundaries are crossed? What obligations are created? Why does crisis feel like destiny? Students synthesize: Create framework for distinguishing crisis bonding vs. sustainable compatibility. Apply to case studies: relationships that start during personal crisis, work bonds formed in high-stress environments, rescue dynamics in romantic contexts. Final project: Analyze media representations of crisis-formed relationships (romantic movies where couple bonds through danger). Do these relationships realistically translate to non-crisis circumstances? What does media teach us about when/how crisis bonding becomes love?',
      subjects: ['Psychology', 'Neuroscience', 'Relationship Studies', 'Media Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'The Ethics of Crisis Intimacy: Analyzing Boundary-Crossing in Emergency Contexts',
    prompt: 'The fire creates a scenario where Jane and Rochester are alone in his bedroom at night, both in nightclothes, sharing physical intimacy (hand-holding, intense gazes) that would otherwise be completely inappropriate. Rochester is Jane\'s employer; they\'re not engaged; this violates every Victorian propriety. But it happened because of genuine emergency. Your task: Develop an ethical framework for evaluating boundary-crossing in crisis contexts, apply it to Jane and Rochester, then extend it to modern scenarios. Consider: Does emergency justify intimacy that wouldn\'t otherwise be appropriate? What\'s the difference between necessary crisis response and leveraging crisis for relationship purposes? Where\'s the line between authentic intensity and manipulated obligation? How do power dynamics (employer-employee, age gap, economic disparity) affect ethical assessment? Use Rochester and Jane as case study but also engage with contemporary applications: workplace emergencies leading to boundary violations, crisis bonding in professional contexts, trauma bonding in personal relationships.',
    
    guidingQuestions: [
      'What boundaries are crossed in the aftermath of the fire? Consider: time (middle of night), place (his bedroom), dress (both in nightclothes), physical contact (extended hand-holding), power (employer-employee alone in intimate setting). Which of these, if any, are justified by the emergency? Which seem to go beyond necessary crisis response?',
      'Rochester could have managed the aftermath differently—he could have thanked Jane briefly and dismissed her, handled the investigation without her, maintained physical distance, not spoken of destiny. Why does he do none of these things? Is he overwhelmed by genuine emotion, or is he using the crisis as opportunity to create intimacy? Can it be both?',
      'Life-debt creates psychological obligation: Jane saved Rochester\'s life, which makes their relationship feel special, fated, obligatory. Is this a legitimate bond or a problematic dynamic? Should rescue create special connection, or is that confusing gratitude with compatibility? How do we distinguish between authentic connection revealed by crisis vs. obligation created by crisis?',
      'How do power dynamics affect ethical evaluation? Would we assess this scene differently if Jane were male and Rochester female? If they were peers rather than employer-employee? If Jane weren\'t economically dependent on Rochester? What does this reveal about how power affects consent and boundary-crossing?'
    ],
    
    thinkingFramework: {
      analyze: 'Map the fire scene systematically: (1) What boundaries are crossed? (time, place, dress, physical contact, emotional intimacy), (2) Which are necessitated by crisis? (Jane needed to act immediately to save him, some discussion afterward is reasonable), (3) Which go beyond crisis response? (extended hand-holding, destiny language, secrecy demands), (4) What power dynamics operate? (employer-employee, age gap, economic dependence), (5) How does Rochester frame the experience? (as evidence of fate, special connection, obligation). Create timeline: fire → rescue → immediate aftermath (appropriate) → extended intimacy (questionable) → destiny framing (manipulative?) → secrecy requirement (concerning).',
      evaluate: 'Develop ethical framework for crisis boundary-crossing with specific criteria: (1) Necessity: Was the boundary-crossing required by emergency? (2) Proportionality: Was the intimacy proportional to the crisis? (3) Restoration: Were boundaries restored after crisis passed? (4) Power-awareness: Did the person with more power take responsibility for maintaining appropriate distance despite crisis? (5) Transparency: Was secrecy demanded, or could others know what happened? Apply framework to Rochester\'s behavior. Be specific about which aspects pass ethical scrutiny vs. which don\'t. Consider: authentic emotion doesn\'t preclude ethical responsibility. Rochester can be genuinely grateful and still responsible for managing the aftermath appropriately.',
      synthesize: 'Connect to modern contexts: (1) Workplace scenarios where crisis creates intimacy (late-night emergencies, business travel, high-stress projects), (2) Professional relationships where trauma bonds form (first responders, medical settings, disaster response), (3) Personal relationships where crisis creates fast-track bonding (relationships starting during divorces, deaths, major life upheavals). Analyze whether crisis intimacy typically translates to sustainable relationships. Develop guidelines: When is crisis bonding authentic vs. when is it being leveraged? What safeguards should exist to prevent manipulation? How should authority figures (bosses, teachers, therapists, mentors) manage crisis bonding to prevent exploitation? Apply to policy: Should workplaces have protocols for managing aftermath of shared intense experiences? What boundaries should professionals maintain even during emergencies?'
    },
    
    expectedDepth: 'Strong responses will: (1) Develop nuanced framework that acknowledges both legitimate crisis response AND potential for manipulation—not simplistic "Rochester is predatory" or "it\'s all fine because emergency," but complex assessment recognizing humans can feel genuine emotion while also behaving problematically; (2) Engage seriously with power dynamics—employer-employee relationship, economic dependence, age gap all affect consent and boundary-crossing in ways that require explicit analysis; (3) Distinguish between different types of intimacy in the scene (some necessary/appropriate, some questionable, some concerning) with specific textual evidence for each; (4) Connect Victorian context to modern applications with specificity—name contemporary equivalents, show how same dynamics operate across time; (5) Address gender explicitly—how would this scene read differently if Jane were male governess and Rochester female employer? What does that reveal about gendered expectations and power?; (6) Grapple with the complexity that Rochester may be both authentically moved AND manipulative—these aren\'t mutually exclusive; (7) Develop practical applications—what does this analysis teach us about evaluating crisis bonding in our own lives, workplaces, and relationships?',
    
    classroomApplication: 'Works as: (1) Analytical essay (6-8 pages) requiring close textual reading plus engagement with ethics/power theory, (2) Case study presentation—students analyze fire scene using ethical framework, then present modern parallel scenario, (3) Debate: "Crisis justifies boundary-crossing" (teams argue pro/con with specific criteria), (4) Policy project—students develop workplace/professional guidelines for managing crisis bonding ethically. Time: 4-5 class periods including textual analysis, framework development, contemporary examples, and synthesis. Can connect to: ethics courses, organizational psychology, professional boundaries training, relationship dynamics, power and consent discussions, workplace harassment prevention. Consider bringing in: HR professionals discussing crisis management, therapists explaining trauma bonding, first responders describing healthy vs. unhealthy crisis bonds in high-stress professions.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature\'s importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(15),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '💔',
    title: 'Next Time: Chapter 16 — Rochester Leaves',
    preview: 'The morning after the fire, Jane expects Rochester to seek her out—to continue their intense connection, to explain what happened, to acknowledge the intimacy they shared. Instead, Rochester leaves Thornfield abruptly without speaking to her. Days pass with no word. Then news arrives: Rochester has gone to a house party at the Leas, home of the beautiful and wealthy Blanche Ingram. Rumors fly that Rochester intends to marry Blanche. Jane is devastated. She tells herself she was foolish to imagine Rochester cared for her—he\'s a gentleman, she\'s a governess, what did she expect? She tries to reason herself out of her feelings while simultaneously recognizing she\'s in love with him. Meanwhile, strange details pile up: Why did Rochester leave so suddenly? Why didn\'t he explain about the fire? What really happened that night? And most disturbingly: why is Grace Poole still employed at Thornfield, casually going about her duties as if she hadn\'t tried to murder her employer?',
    hookQuestion: 'Why did Rochester leave without speaking to Jane after their intense night together? Is his courtship of Blanche Ingram real, or is he testing Jane\'s feelings? And how will Jane survive watching the man she loves pursue another woman while she remains professionally invisible?'
  }
}

