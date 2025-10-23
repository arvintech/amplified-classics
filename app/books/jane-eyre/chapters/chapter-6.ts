/**
 * JANE EYRE - CHAPTER 6
 * 
 * Jane witnesses Helen Burns endure harsh punishment with impossible patience,
 * and begins to understand different ways of surviving institutional oppression
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter6: ChapterData = {
  number: 6,
  title: 'Helen\'s Patience',
  
  readingTime: 20,
  pages: 13,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Jane observes Helen Burns being publicly humiliated and physically punished by teachers, yet Helen responds with serene acceptance, introducing Jane to a philosophy of endurance that both puzzles and challenges her instinct to fight injustice.',
    
    full: [
      'Jane settles into Lowood\'s harsh routine: cold mornings, inadequate food, long hours of study, constant surveillance. She observes the other girls adapting in different ways—some rebel quietly, some complain, some accept. But Helen Burns stands out. Helen is constantly in trouble with Miss Scatcherd, a particular teacher who seems to target her. The infractions are trivial: Helen\'s drawer is untidy, her fingernails aren\'t perfectly clean, she turns her head during study. Yet Miss Scatcherd punishes these minor failures harshly: verbal humiliation in front of the class, being sent to stand in the middle of the room, physical discipline.',

      'Jane is outraged watching this. Helen is clearly intelligent, thoughtful, and kind—not deserving of such treatment. When Miss Scatcherd orders Helen to fetch a bundle of twigs and then uses them to strike Helen\'s neck repeatedly while Helen stands calmly, Jane is horrified. After class, Jane finds Helen and demands to know why she endures such treatment without protest. Helen explains her philosophy: she believes Miss Scatcherd\'s criticisms are often deserved (Helen admits she is untidy and forgetful), that suffering patiently is a virtue, that this life is short and eternity is long, so temporary injustice doesn\'t matter much. She believes in turning the other cheek, in not resenting those who harm you.',

      'Jane argues with Helen. How can Helen not feel anger? How can she say she deserves such cruelty for small mistakes? Doesn\'t she have a right to defend herself? But Helen is unmoved. She reads Marcus Aurelius and practices Christian resignation. She focuses on her internal spiritual life rather than external circumstances. When Jane asks if Helen would run away if she could, Helen says no—running from suffering doesn\'t build character. Jane is both impressed by Helen\'s serenity and frustrated by what seems like passive acceptance of abuse.',

      'The chapter introduces a fundamental tension: Jane\'s instinct toward justice and resistance versus Helen\'s philosophy of endurance and spiritual transcendence. Neither approach is presented as entirely right or wrong. Helen has inner peace but might be enabling her own mistreatment. Jane has moral clarity but her anger could become consuming. Through their conversations, Jane begins to understand that there are multiple ways to survive oppression—but she also starts to question which approach serves the oppressed and which serves the oppressors. This philosophical tension will shape Jane\'s development throughout the novel.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Scapegoating',
      definition: 'The practice of singling out one person for blame, criticism, or punishment, often unfairly, to deflect attention from systemic problems or to satisfy the need for a target.',
      context: 'Miss Scatcherd clearly targets Helen Burns specifically, constantly finding fault with her while ignoring similar behavior in other students. Helen becomes the scapegoat—the one who can never do right, whose minor infractions justify disproportionate punishment.',
      whyItMatters: 'Scapegoating is a common abuse tactic in institutions and families. Understanding it helps readers see that Miss Scatcherd\'s treatment of Helen isn\'t about Helen\'s actual behavior—it\'s about Miss Scatcherd\'s need for a target. This pattern persists in modern bullying, workplace harassment, and institutional abuse.'
    },
    {
      term: 'Stoic Philosophy',
      definition: 'An ancient philosophy teaching that virtue, reason, and acceptance of fate lead to tranquility; emphasizes controlling your response to events rather than trying to control events themselves.',
      context: 'Helen embodies stoic principles: she accepts what she cannot change (Miss Scatcherd\'s cruelty), focuses on what she can control (her own response), and maintains inner peace despite external suffering. She reads Marcus Aurelius, a famous Stoic philosopher.',
      whyItMatters: 'Stoicism offers a coherent philosophy for surviving oppression, but it also raises questions: Does accepting injustice enable it? Can internal peace coexist with external resistance? The novel explores these tensions through Helen\'s character and her influence on Jane.'
    },
    {
      term: 'Christian Resignation',
      definition: 'A religious philosophy emphasizing patient acceptance of suffering as God\'s will, turning the other cheek, forgiving enemies, and focusing on heavenly reward rather than earthly justice.',
      context: 'Helen combines stoicism with Christian resignation. She believes suffering builds spiritual character, that forgiveness is a virtue, that this life is temporary so earthly injustice matters less than eternal salvation. She quotes the Bible about loving enemies and enduring persecution.',
      whyItMatters: 'This philosophy was often taught to oppressed groups—enslaved people, women, the poor—as justification for accepting mistreatment. Brontë explores both the genuine spiritual peace it can offer and how it can be weaponized to maintain power structures. The novel asks: Is this wisdom or manipulation?'
    },
    {
      term: 'Enabling vs. Surviving',
      definition: 'The complex distinction between adapting to survive harmful situations (surviving) and inadvertently perpetuating those situations by not resisting (enabling).',
      context: 'Helen\'s acceptance of Miss Scatcherd\'s abuse could be seen as survival strategy (maintaining peace, avoiding escalation) or as enabling (not holding Miss Scatcherd accountable, making abuse seem acceptable). This distinction is morally complex.',
      whyItMatters: 'Understanding this complexity helps readers avoid simplistic judgments about how oppressed people respond to oppression. Survival strategies that look like passivity might be the only safe option. But there\'s genuine tension between surviving and inadvertently enabling. The novel doesn\'t resolve this—it explores it honestly.'
    },
    {
      term: 'Public Humiliation as Control',
      definition: 'The institutional practice of punishing individuals publicly to enforce conformity and create an atmosphere of fear among observers.',
      context: 'Miss Scatcherd doesn\'t just punish Helen privately—she humiliates her in front of the class, makes her stand in the center of the room, strikes her where others can see. The punishment is theatrical, designed as much for the audience (other students) as for Helen.',
      whyItMatters: 'Public humiliation is a control tactic: it punishes the individual while warning others "this could be you." Modern schools still use this (calling students out in front of class, public discipline). Understanding the tactic helps readers recognize it in various contexts and question its ethics and effectiveness.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane\'s sense of justice is tested as she watches Helen\'s mistreatment. Her instinct is outrage—Helen is being scapegoated for trivial matters, punished disproportionately, and treated unjustly. Jane wants to intervene, to protest, to defend Helen. But Helen\'s serene acceptance puzzles Jane profoundly. How can someone so intelligent not see the injustice? Or does Helen see it but choose not to resist? Jane begins to question her own assumptions: Is fighting back always the right response? Could there be wisdom in endurance? She doesn\'t adopt Helen\'s philosophy, but she\'s forced to acknowledge it as a coherent worldview, not mere passivity. This chapter shows Jane encountering a perspective fundamentally different from her own—and being mature enough to wrestle with it rather than simply dismiss it.',
      keyTrait: {
        emoji: '⚖️',
        text: 'Justice-Seeker'
      }
    },
    {
      name: 'Helen Burns',
      development: 'Helen reveals the depth of her philosophical and spiritual resources. When physically struck with twigs by Miss Scatcherd, she remains calm, almost transcendent. She explains to Jane that she sees her flaws clearly (she is untidy, forgetful) and believes correction—even harsh correction—is deserved. She practices Christianity\'s most challenging teachings: love your enemies, turn the other cheek, forgive those who persecute you. She reads Marcus Aurelius for stoic wisdom about controlling what you can (your response) and accepting what you cannot (others\' actions). Helen has achieved genuine inner peace—but at what cost? She seems to have internalized her abusers\' criticisms, believing she deserves punishment for minor infractions. Her philosophy offers her serenity but might also prevent her from recognizing abuse as abuse.',
      keyTrait: {
        emoji: '🕊️',
        text: 'Serene Martyr'
      }
    },
    {
      name: 'Miss Scatcherd',
      development: 'Miss Scatcherd emerges as a petty tyrant who has found a safe target in Helen Burns. She constantly finds fault—Helen\'s drawer is messy, her nails aren\'t clean enough, she fidgets. These infractions are trivial, often subjective, and disproportionately punished. Miss Scatcherd uses Helen as an example, publicly humiliating her to maintain control over the class. She represents institutional cruelty at its most insidious: she\'s not overtly monstrous like Mr. Brocklehurst will be, but her daily targeting of one vulnerable student creates sustained psychological harm. She may believe she\'s "correcting" Helen, but her behavior suggests she simply needs someone to dominate.',
      keyTrait: {
        emoji: '👹',
        text: 'Petty Tyrant'
      }
    },
    {
      name: 'Miss Temple (Brief Introduction)',
      development: 'Miss Temple appears briefly but significantly. Unlike Miss Scatcherd, she treats students with dignity and kindness. She\'s the superintendent—holding more authority than individual teachers—and her presence offers a counterpoint to the cruelty Jane has experienced. Miss Temple will become increasingly important, representing the possibility of authority exercised with compassion rather than cruelty. Her existence proves that not all adults in power are abusive—some genuinely care about the children in their charge.',
      keyTrait: {
        emoji: '👑',
        text: 'Benevolent Authority'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'Burns was standing in the middle of the room on a pedestal...in her hand she held a small bundle of twigs tied together. Scatcherd...said suddenly: "Burns, you poke your chin most unpleasantly; draw it in." Burns made some attempt to obey; but I saw that her head fell forward and her chin still protruded: the effort to hold it in seemed to produce a spasmodic contraction of her muscles.',
      analysis: 'This scene is devastating because Helen is trying to obey—but she physically cannot hold an unnatural position indefinitely. Miss Scatcherd is setting Helen up to fail, then punishing the failure. The detail about spasmodic muscle contraction shows Helen\'s body rebelling against an impossible demand. This is abuse disguised as correction: demanding the impossible, then punishing imperfection.'
    },
    {
      text: 'Yet it would be your duty to bear it, if you could not avoid it: it is weak and silly to say you cannot bear what it is your fate to be required to bear.',
      analysis: 'Helen\'s philosophy in a nutshell: if you cannot change circumstances, enduring them patiently is duty, not choice. This sounds like wisdom—but it also sounds like the logic used to keep oppressed people from resisting. The tension is real: When is endurance virtue? When is it resignation? Helen believes the former; Jane suspects the latter.'
    },
    {
      text: 'If people were always kind and obedient to those who are cruel and unjust, the wicked people would have it all their own way...When we are struck at without a reason, we should strike back again very hard.',
      analysis: 'Jane\'s counter-philosophy: resistance is necessary to prevent total domination by the cruel. If victims never fight back, abusers face no consequences. This is a coherent ethics of resistance—but Helen will challenge its cost: constant anger, bitterness, focus on injustice rather than inner peace. Both philosophies have merit and limitations.'
    },
    {
      text: 'I don\'t think you have anything to fear; I am sure I could not bear to have my head beaten; but I could avoid it. By avoiding it, I could also avoid a great deal of sorrow.',
      analysis: 'Helen\'s pragmatic calculation: she can avoid physical punishment by perfect compliance (though we\'ve seen this is nearly impossible with Miss Scatcherd), but avoiding some sorrows means accepting others (psychological cost of constant vigilance, loss of self-expression). Her statement reveals the impossible calculus oppressed people make: which suffering is more bearable?'
    },
    {
      text: 'Life appears to me too short to be spent in nursing animosity or registering wrongs.',
      analysis: 'Helen\'s most famous statement. She\'s choosing to focus on love, learning, and spiritual growth rather than cataloging injustices. This is genuinely beautiful—and also potentially problematic. If we don\'t "register wrongs," how do we hold wrongdoers accountable? How do we identify patterns of abuse? Helen\'s philosophy offers personal peace but might enable systemic injustice. The novel presents this tension without easy resolution.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Competing Philosophies of Surviving Oppression',
        explanation: 'This chapter dramatizes fundamentally different responses to injustice through Jane and Helen. Jane believes in resistance: calling out abuse, defending yourself, refusing to normalize mistreatment. Helen believes in endurance: accepting suffering, maintaining inner peace, focusing on eternity rather than temporary earthly pain. Neither philosophy is presented as entirely wrong. Jane\'s approach maintains moral clarity and dignity but risks consuming anger and constant conflict. Helen\'s approach offers genuine serenity and spiritual transcendence but might enable abusers and internalize their judgments. Brontë explores both approaches with nuance, suggesting wisdom might lie in knowing when to employ which strategy—but also showing how circumstances often don\'t allow that choice.'
      },
      {
        name: 'Scapegoating and Institutional Abuse',
        explanation: 'Miss Scatcherd\'s targeting of Helen reveals how institutions create scapegoats: individuals singled out for disproportionate punishment, who absorb communal anxiety and maintain control through fear. Helen\'s infractions (untidy drawer, fidgeting) are trivial, often identical to other students\' behavior, but only Helen is punished. This isn\'t about Helen\'s actual behavior—it\'s about Miss Scatcherd\'s need for a target and the institution\'s need for an example. Scapegoating serves multiple functions: it deflects attention from systemic problems (the real issue is Lowood\'s deprivation, not Helen\'s nails), it maintains control through fear (other students think "better her than me"), and it gives the scapegoater a sense of power. Understanding scapegoating helps readers recognize this pattern in various contexts.'
      },
      {
        name: 'Religion as Comfort vs. Religion as Control',
        explanation: 'Helen finds genuine comfort in Christian teachings about forgiveness, patience, and eternal life. Her faith gives her peace that external circumstances cannot touch—this is religion at its best, offering transcendence and meaning. However, the same teachings that comfort Helen can be weaponized: teaching oppressed people to "turn the other cheek" keeps them from resisting; promising heavenly reward for earthly suffering justifies present injustice. Brontë shows both aspects: Helen\'s faith is real and valuable to her personally, but it also serves institutional interests by producing compliant victims. This tension runs throughout the novel: when does religion liberate, and when does it control?'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Philosophical Dialogue and Socratic Method',
        explanation: 'Brontë uses extended conversations between Jane and Helen to explore competing philosophies not through abstract essays but through dramatic dialogue. Jane questions, Helen explains, Jane challenges, Helen responds. This Socratic method allows readers to hear both sides fully articulated, testing each philosophy through debate. The technique makes philosophical exploration engaging and accessible—we learn through watching characters think together rather than through author pronouncements.',
        example: 'When Jane argues "When we are struck at without a reason, we should strike back," Helen counters with "Yet it would be your duty to bear it." This isn\'t one character lecturing; it\'s genuine philosophical exchange where both positions are given full voice. Readers must decide which argument is more convincing—or if both have merit in different circumstances.'
      },
      {
        name: 'Physical Description Revealing Power Dynamics',
        explanation: 'Brontë uses body language and physical positioning to show power relationships. Helen standing on a pedestal in the center of the room—elevated but exposed, visible to all, unable to hide—shows her powerlessness despite literal elevation. Miss Scatcherd standing, moving, towering shows her control of space. The twigs in Helen\'s hand that will be used against her show how victims are forced to participate in their own punishment. Physical description does narrative work—revealing psychological and social dynamics.',
        example: 'The detail that Helen\'s "chin still protruded" despite her effort to pull it in shows impossible demands and inevitable failure. Her body can\'t maintain the unnatural position, but Miss Scatcherd treats this physical limitation as willful disobedience. The body becomes evidence of the absurdity of the demand.'
      },
      {
        name: 'Juxtaposition of Inner Peace and External Suffering',
        explanation: 'Brontë creates tension by showing Helen\'s serene inner state during physical suffering. While being struck, Helen remains calm. While being humiliated, she doesn\'t seem distressed. This juxtaposition forces readers to question: Is this admirable strength or troubling dissociation? Does Helen\'s inner peace come from genuine spiritual transcendence or from having accepted her abusers\' narrative that she deserves punishment? The technique creates productive uncertainty—we\'re moved by Helen\'s serenity but troubled by its cost.',
        example: 'Helen "stood tranquil" while being struck with twigs. The word "tranquil" typically connotes positive peace, but in this context it\'s unsettling. Should a child be tranquil while being beaten? Helen\'s tranquility is both impressive (such self-control) and disturbing (such acceptance of abuse). The juxtaposition makes readers uncomfortable—intentionally.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a student—let\'s call them Alex—at a strict school or program. There\'s one teacher, Coach, or staff member who constantly targets Alex: their locker isn\'t organized enough, they\'re two minutes late, their uniform isn\'t perfect, they don\'t make eye contact correctly. Other students do the same things, but only Alex gets called out, publicly corrected, given extra consequences. Alex has a friend, Riley, who watches this happen daily. Riley is furious: "Why don\'t you report them? Why don\'t you push back? This is harassment!" But Alex stays calm: "It\'s not worth the fight. I just need to get through this year. Fighting back would make it worse. I can handle it." Riley doesn\'t understand: How can Alex just accept this? But Alex has found inner strategies—meditation, journaling, reminding themselves this is temporary—that help them survive. They\'ve made peace with the situation. Riley hasn\'t—and the two friends argue about the right response.',
    
    parallels: [
      '🔹 **Scapegoating in Schools and Workplaces**: Some teachers, bosses, or authority figures consistently target one person while treating others differently for the same behavior. This isn\'t about that person\'s actual performance—it\'s about the authority figure\'s need for a target. Modern anti-bullying frameworks increasingly recognize this pattern, but it persists.',
      '🔹 **Different Trauma Responses**: Helen\'s acceptance might be what psychologists call "fawn response"—appeasing the abuser, trying to be perfect, internalizing blame. Riley\'s anger is "fight response"—resisting, speaking up, refusing to normalize. Both are valid trauma responses. Neither is "better"—they\'re different survival strategies. Modern trauma therapy recognizes this without judgment.',
      '🔹 **"Forgive and Forget" as Problematic Advice**: Helen\'s Christian resignation mirrors modern advice like "let it go" or "don\'t hold grudges." While forgiveness can be healing, pressuring victims to forgive abusers before they\'re ready—or suggesting that not forgiving makes you the problem—can be harmful. Healthy boundaries sometimes require remembering wrongs and limiting contact with harmful people.',
      '🔹 **The Cost of Constant Vigilance**: Helen notes she could avoid punishment through perfect compliance—but at what cost? Modern research on "minority stress" shows that constantly monitoring your behavior, code-switching, and maintaining hypervigilance is psychologically exhausting. Sometimes acceptance conserves energy better than constant vigilance—but both have costs.',
      '🔹 **When Does Acceptance Enable Abuse?**: If everyone accepts mistreatment quietly, abusers never face consequences. But if individuals resist and get retaliated against, are they obligated to be martyrs for change? This tension persists: Should victims report harassment knowing it might make things worse? Should marginalized people educate their oppressors? There\'s no universal right answer—it depends on safety, resources, and individual capacity.'
    ],
    
    discussionPrompt: 'Have you known someone who responded to mistreatment very differently than you would? Did their response seem passive, or was it a different kind of strength? When is "letting it go" healthy self-care, and when is it enabling abuse? How do you balance standing up for yourself with protecting your peace?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '⚔️',
      name: 'Resistance vs. Endurance',
      explanation: 'This chapter deepens the central tension introduced in Chapter 5: Should you fight injustice or endure it? Jane embodies resistance—speaking back, refusing to normalize abuse, maintaining anger. Helen embodies endurance—accepting suffering, maintaining inner peace, focusing on transcendence. The novel doesn\'t resolve this tension but explores it throughout. At different points, Jane will employ both strategies, learning from Helen while maintaining her own fierce sense of justice.'
    },
    {
      emoji: '🎭',
      name: 'Performance and Authenticity',
      explanation: 'Helen performs perfect compliance externally while maintaining rich internal life. Is this authentic (staying true to yourself inside) or performative (hiding true feelings)? The novel explores how oppressed people often must perform—seeming compliant, grateful, content—while harboring private resistance or simply private selfhood. This performance is survival strategy but also has psychological costs.'
    },
    {
      emoji: '📖',
      name: 'Reading and Internal Resources',
      explanation: 'Helen reads Marcus Aurelius, finding philosophical resources to survive institutional oppression. Books offer escape, wisdom, alternative perspectives that institutional life denies. Throughout the novel, Jane\'s reading will provide her with internal resources, language for her experiences, and visions of life beyond her current circumstances. Literature becomes survival tool.'
    },
    {
      emoji: '⚖️',
      name: 'Justice and Mercy',
      explanation: 'Jane wants justice—accountability for wrongdoing, recognition of injustice. Helen practices mercy—forgiveness, letting go, accepting. The novel explores when each virtue is appropriate. Sometimes justice requires mercy (understanding context, allowing for human imperfection). Sometimes mercy without justice enables abuse (forgiving without accountability). The balance is difficult.'
    },
    {
      emoji: '👥',
      name: 'Friendship as Philosophical Testing Ground',
      explanation: 'Helen becomes Jane\'s first real friend—but friendship doesn\'t mean agreement. Their philosophical differences create productive tension. Helen challenges Jane to consider perspectives beyond her own. Jane challenges Helen to recognize abuse as abuse. This models healthy friendship: people who care about each other but don\'t require identical worldviews. Friends who push each other to think, not just affirm.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Whose Philosophy Is Wiser?',
      question: 'Jane believes in fighting back against injustice; Helen believes in enduring it with patience. Which approach is wiser? Or does the answer depend on circumstances? What factors might determine when to resist and when to endure?'
    },
    {
      title: 'Is Helen Enabling Her Own Abuse?',
      question: 'Helen accepts Miss Scatcherd\'s punishment calmly, even agreeing that some criticism is deserved. Is this wise self-awareness and spiritual strength, or has Helen internalized her abuser\'s perspective? Can someone genuinely be at peace with mistreatment, or is that acceptance a form of psychological harm?'
    },
    {
      title: 'Scapegoating Dynamics',
      question: 'Miss Scatcherd targets Helen specifically, even though other students exhibit similar behavior. Why do institutions and individuals create scapegoats? What function does scapegoating serve? Have you observed this pattern in schools, families, or other groups?'
    },
    {
      title: 'Religion as Comfort or Control',
      question: 'Helen finds genuine peace in Christian teachings about forgiveness and endurance. But these same teachings have been used to keep oppressed people from resisting. Is Helen\'s faith liberating or controlling? Can religion be both simultaneously? How do we distinguish healthy spirituality from religious manipulation?'
    },
    {
      title: 'The Cost of Perfect Compliance',
      question: 'Helen says she could avoid punishment through perfect compliance—but perfect compliance requires constant vigilance, suppressing natural behavior, and exhausting self-monitoring. Is avoiding external punishment worth the internal cost? What does "survival" mean if you must erase yourself to achieve it?'
    },
    {
      title: 'Public Humiliation as Discipline',
      question: 'Miss Scatcherd punishes Helen publicly, in front of the class. What\'s the purpose of public punishment versus private correction? Is there ever a legitimate use of public humiliation in education, or is it always abusive? How do public consequences affect both the punished individual and the watching audience?'
    },
    {
      title: 'Jane as Witness',
      question: 'Jane watches Helen being abused and wants to intervene but doesn\'t. What are a witness\'s obligations? Should Jane have spoken up? What would the consequences have been? When do we have a duty to intervene in others\' mistreatment, and when is non-intervention the wiser choice?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'resistance-vs-endurance',
      title: 'The Eternal Question: Resist or Endure?',
      question: 'Jane wants to fight back against injustice; Helen believes in patient endurance. Which philosophy is right? Or does it depend on context?',
      aiResponse: `
**There Is No Universal Answer—And That's The Point**

The debate between Jane\'s philosophy of resistance and Helen\'s philosophy of endurance is one of the oldest questions humanity faces: How should we respond to suffering we didn\'t cause and can\'t immediately stop?

**Jane's Philosophy: Fight Back**

**Core Beliefs:**
- Injustice should be named and resisted
- Abusers should face consequences
- Accepting abuse normalizes it
- Your dignity requires self-defense
- Silence enables oppressors

**Practical Strategy:**
- Speak truth to power
- Refuse to pretend mistreatment is acceptable
- Call out abuse when you see it
- Maintain anger as moral clarity
- Don't let abusers get away with it

**Benefits:**
- Maintains moral clarity (wrong is wrong)
- Preserves dignity and self-respect
- Sometimes actually stops abuse
- Models resistance for others
- Refuses to participate in own oppression

**Costs:**
- Constant conflict and stress
- Risk of retaliation and escalation
- Emotional exhaustion from sustained anger
- May be labeled "difficult" or "troublemaker"
- Might make bad situations worse

**Helen's Philosophy: Patient Endurance**

**Core Beliefs:**
- This life is temporary; eternity is what matters
- Suffering builds spiritual character
- You can't control others, only yourself
- Inner peace is more valuable than external justice
- Forgiveness is virtue; resentment is burden

**Practical Strategy:**
- Accept what you cannot change
- Focus on internal spiritual/intellectual life
- Respond to cruelty with calm
- Use suffering as growth opportunity
- Let go of anger and grievance

**Benefits:**
- Genuine inner peace and serenity
- Energy conserved (not spent fighting)
- Reduced stress from acceptance
- Avoids escalation and retaliation
- Transcends circumstances spiritually

**Costs:**
- Might enable abusers
- Others may see compliance and increase abuse
- Risk of internalizing abusers\' judgments
- May normalize the unacceptable
- Personal suffering continues

**Why Both Philosophies Have Merit:**

**Neither is universally right.**

**Situations Where Resistance Works:**
- When you have some power/leverage
- When witnesses or allies exist
- When systems have accountability mechanisms
- When resistance might actually stop abuse
- When the cause is bigger than personal cost

**Situations Where Endurance Works:**
- When resistance would bring severe retaliation
- When survival requires conservation of energy
- When temporary situation isn\'t worth the fight
- When inner peace is the accessible victory
- When resistance has been tried and failed

**The Wisdom Might Be Situational:**

**Knowing when to employ which strategy requires:**
1. Accurate assessment of power dynamics
2. Understanding likely consequences
3. Clarity about personal capacity/resources
4. Ability to distinguish between battles
5. Wisdom to know what you can change

**But Oppressed People Rarely Get That Choice:**

**Here\'s the painful truth:** Philosophical debates about "the right response" often assume more freedom than oppressed people actually have.

**Jane, as a child, has limited power:**
- Speaking up brought red-room trauma
- Fighting back brought punishment
- Resistance led to being sent away
- Her "choices" are constrained by power

**Helen, as orphan at charity school, has even less:**
- Perfect compliance still brings punishment
- Resistance would bring worse consequences
- Endurance isn\'t really chosen—it\'s forced
- Her "acceptance" might be survival strategy

**Modern Parallels:**

**The debate continues:**

**Activism vs. Self-Care:**
- Should marginalized people educate oppressors or protect their peace?
- Is withdrawing self-care or abandoning the fight?
- How do you balance advocacy with sustainability?

**Reporting vs. Moving On:**
- Should victims report abuse knowing systems often fail them?
- Is silence self-protection or enabling?
- What do you do when "doing the right thing" harms you?

**Forgiveness Debates:**
- Must victims forgive to heal?
- Can you refuse forgiveness and still find peace?
- Who benefits when victims are pressured to forgive?

**What Psychology Says:**

**Both strategies are valid trauma responses:**

**Fight Response (Jane):**
- Resist, confront, defend
- Maintains sense of agency
- Can lead to change or to exhaustion

**Fawn Response (Helen):**
- Appease, comply, minimize
- Reduces immediate danger
- Can lead to peace or to self-loss

**Neither is "better"—they\'re different coping mechanisms.**

**Healthy people can use both strategically:**
- Fight battles worth fighting
- Endure what isn\'t worth energy
- Know the difference

**But traumatized people often get stuck in one mode:**
- Always fighting (exhausting)
- Always enduring (erasing)
- Losing flexibility

**The Novel's Insight:**

**Brontë doesn\'t resolve this debate—she explores it.**

Jane will learn from Helen:
- Not every injustice requires confrontation
- Inner peace has value
- Some suffering is temporary
- Spiritual resources matter

Helen will influence Jane toward:
- More measured responses
- Less consuming anger
- Strategic rather than reflexive resistance

**But Jane will never fully adopt Helen\'s philosophy:**
- She remains alert to injustice
- She speaks truth when it matters
- She ultimately insists on external justice, not just internal peace

**The synthesis:**
- Recognize injustice (Jane's clarity)
- Respond strategically, not reflexively (Helen's wisdom)
- Fight battles that matter (Jane's courage)
- Maintain inner peace regardless of outcome (Helen's serenity)

**For Discussion:**

When have you had to choose between speaking up and letting something go? What factors influenced your decision? Have you seen situations where resistance made things better? Worse? How do you know when to fight and when to conserve your energy?

**The Takeaway:**

There is no universal right answer to "resist or endure?" The answer depends on context, power dynamics, personal capacity, and what's at stake. Wisdom lies not in always doing one or the other, but in developing the judgment to know which strategy serves you in which situation—and the self-awareness to recognize when you\'re stuck in one mode out of habit rather than choice. Jane and Helen represent two legitimate philosophical approaches to suffering. The goal isn't to choose one forever, but to learn from both and develop the flexibility to employ either as circumstances require.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Philosophical Dialogue: Two Characters, Two Worldviews',
      description: 'Write a 2-3 page dialogue between two characters with fundamentally different philosophies about a significant issue (justice vs. mercy, individual vs. community, tradition vs. change, faith vs. doubt, etc.). Like Brontë with Jane and Helen, give both characters compelling arguments. Neither should be a strawman—both should articulate their philosophy persuasively. Use the dialogue format to explore the tension without resolving it. End with both characters still holding their positions but having genuinely considered the other perspective.',
      purpose: 'This exercise teaches students that good writing explores complexity rather than providing easy answers. It develops skills in perspective-taking, constructing logical arguments, and using dialogue to convey ideas. Students learn that characters can disagree philosophically while remaining in relationship—modeling intellectual humility and productive disagreement.'
    },
    
    activity: {
      title: 'Scapegoating Patterns: Identifying Unfair Targeting',
      description: 'Present students with scenarios (anonymous, hypothetical, or from literature/film) where one person is consistently targeted for behavior others exhibit: one student always gets called out for talking, one employee always blamed when projects fail, one sibling always punished more harshly. Have students analyze: (1) Is the person actually behaving worse than others? (2) What function might scapegoating serve? (3) Who benefits from having a scapegoat? (4) What would it take to interrupt the pattern? Discuss: How do you recognize scapegoating? How do you respond if you\'re the target? What if you\'re a witness?',
      materials: 'Scenario cards, analysis framework handout, examples from literature or current events, chart paper for patterns'
    },
    
    crossCurricular: {
      title: 'Philosophy and Religion: Stoicism and Christian Ethics',
      description: 'Partner with philosophy and religious studies for unit on ethical responses to suffering. Philosophy class covers: Stoicism (Marcus Aurelius, Epictetus), distinguishing what we control vs. don\'t control, Stoic practices for maintaining tranquility. Religious studies examines: Christian ethics of forgiveness, "turn the other cheek," historical use of religion to counsel obedience, liberation theology as alternative. English class reads Chapter 6 and analyzes Helen\'s synthesis of both traditions. Students synthesize: When do these philosophies offer genuine wisdom? When can they be weaponized? How do oppressed people navigate religious/philosophical teachings that seem to require acceptance of oppression?',
      subjects: ['Philosophy', 'Religious Studies', 'Ethics', 'History']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Analyzing Power Dynamics in Helen\'s "Acceptance"',
    prompt: 'Helen Burns appears to accept Miss Scatcherd\'s abuse with genuine serenity and even agrees that some criticism is deserved. Your task: Analyze whether Helen\'s acceptance represents (a) genuine spiritual transcendence and inner strength, (b) internalized oppression where she\'s adopted her abuser\'s perspective, (c) strategic survival where acceptance is the safest option, or (d) some combination. Develop criteria for distinguishing between healthy acceptance and harmful resignation, then apply those criteria to Helen\'s situation.',
    
    guidingQuestions: [
      'Helen says she deserves correction for being untidy and forgetful. Are these genuine flaws warranting harsh public punishment, or has Helen internalized unreasonable standards? How do we distinguish between legitimate self-awareness and internalized criticism?',
      'Helen maintains inner peace despite external suffering. Is this admirable spiritual strength, or is it concerning dissociation? When does "not letting circumstances affect you" cross into suppressing legitimate emotional responses?',
      'Consider power dynamics: Helen is an orphan child, Miss Scatcherd is an adult authority figure in an institution. Does Helen actually have the power to resist? Is her "acceptance" really a choice, or is it the only safe option? How does lack of power affect whether acceptance is healthy or forced?',
      'Helen reads Stoic philosophy and practices Christianity. Are these philosophical/spiritual resources empowering her to transcend suffering, or are they being used to justify enduring abuse that should be stopped? Can we distinguish between the two?'
    ],
    
    thinkingFramework: {
      analyze: 'Map the evidence: What does Helen say about her situation? How does she behave? What does her body language suggest (if anything)? What do her choices reveal? List arguments for each interpretation: spiritual strength, internalized oppression, strategic survival. Consider: What is Helen getting out of this approach? Peace? Safety? A sense of control? What is she losing? Justice? Self-expression? Recognition of harm?',
      evaluate: 'Using criteria you develop (emotional wellbeing, self-awareness, agency, safety, long-term consequences), assess Helen\'s acceptance. Consider multiple frameworks: Psychological health (is this adaptive?), Philosophical coherence (is her philosophy consistent?), Moral evaluation (is this virtuous?), Power analysis (does she have real choice?). Which interpretation fits the evidence best? Is the answer singular, or is Helen\'s situation complex enough to hold multiple truths?',
      synthesize: 'Connect to broader questions: How do we distinguish between healthy acceptance (serenity prayer: accept what can\'t be changed) and unhealthy resignation (learned helplessness)? Who gets to decide if someone\'s acceptance is "healthy"—outside observers or the person themselves? Apply to modern contexts: When is forgiveness healing vs. when is it pressured? When is "letting it go" self-care vs. avoidance? How do we support people in oppressive situations without imposing our interpretation of what they should do?'
    },
    
    expectedDepth: 'Strong responses will: (1) Acknowledge genuine complexity—resist simple answers; (2) Consider power dynamics explicitly—recognize how lack of power constrains choice; (3) Use textual evidence to support interpretations; (4) Distinguish between what Helen says (her conscious philosophy) and what her situation reveals (power realities); (5) Grapple with the possibility that multiple interpretations are simultaneously true; (6) Connect to psychological, philosophical, and sociological frameworks; (7) Show awareness that judging other people\'s responses to oppression is ethically fraught. This is complex analysis requiring nuance, empathy, and intellectual humility.',
    
    classroomApplication: 'Works as: Analytical essay (3-4 pages with clear argument), Small group deliberation where groups defend different interpretations then discuss, Case study analysis using psychological frameworks, Debate followed by reflection on complexity. Time: 2-3 class periods. Connect to psychology curriculum on trauma responses, philosophy curriculum on ethics of suffering, or social justice curriculum on survival strategies for oppressed people.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature\'s importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(6),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🔥',
    title: 'Next Time: Chapter 7 — Mr. Brocklehurst\'s Visit',
    preview: 'Mr. Brocklehurst arrives at Lowood for an inspection, and Jane experiences the consequences of Mrs. Reed\'s slander. In front of the entire school, Mr. Brocklehurst publicly brands Jane as a liar and warns everyone to avoid her. Jane is humiliated, devastated, and certain her chance at acceptance is destroyed. But then Helen does something that will change everything—and Jane will learn what true friendship means.',
    hookQuestion: 'How will Jane survive public humiliation? Will anyone believe her side of the story? And can reputation, once damaged, ever be repaired?'
  }
}

