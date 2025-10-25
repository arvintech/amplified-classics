/**
 * JANE EYRE - CHAPTER 20
 * 
 * In the days following Mason's attack, the house party dissolves and Jane processes
 * the disturbing events—then receives urgent summons from Gateshead: Mrs. Reed is
 * dying and has asked to see Jane
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter20: ChapterData = {
  number: 20,
  title: 'Aftermath and Summons',
  
  readingTime: 18,
  pages: 11,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'In the days after Mason\'s mysterious attack and departure, the house party quickly dissolves with Blanche and the guests leaving Thornfield—then Jane receives urgent message that Mrs. Reed at Gateshead is dying and has specifically asked to see the niece she once abused, forcing Jane to temporarily leave Rochester and return to confront her childhood tormentor.',
    
    full: [
      'The atmosphere at Thornfield changes dramatically after Mason\'s night visit. Though Rochester managed to conceal the attack from the houseguests, something has shifted. The guests are unsettled, less comfortable, sensing that Thornfield harbors secrets they don\'t understand. Within days, the party begins to dissolve. Blanche Ingram and her mother depart first, their departure notably cool—no engagement announcement, no promises, just polite farewells that signal the courtship is over. The other guests follow, and soon Thornfield returns to its usual quiet. Jane watches Rochester carefully: he seems relieved the guests are gone, but also anxious, distracted, clearly troubled by whatever Mason\'s visit means for his future plans.',
      
      'Jane spends these days processing what she witnessed: Mason\'s wounds, the strange sounds, Rochester\'s terror and desperation, the compelled silence, the dawn "hypothetical" that she\'s increasingly certain wasn\'t hypothetical at all. She knows Rochester is hiding something major—someone on the third floor attacked Mason violently, and Rochester will do anything to keep it secret. Jane also reflects on her own answer to Rochester\'s question: she told him to obey law regardless of suffering. She meant it as abstract ethical principle, but she\'s beginning to suspect Rochester was asking about something real, something that matters deeply to him. She feels the weight of her answer without fully understanding why it devastated him.',
      
      'Then a letter arrives from Gateshead: Mrs. Reed has suffered a stroke and is dying. In her final days, she has asked specifically for Jane—wants to see her niece before she dies. Jane is stunned by this summons. Mrs. Reed was cruel to her throughout childhood, sent her away to Lowood, never showed her kindness or affection. Why would she ask for Jane now? Is it deathbed repentance? Desire for forgiveness? Or some final cruelty? Jane feels obligated to go despite her complicated feelings: Mrs. Reed is dying, and blood relation creates duty even when there was no love. She asks Rochester for leave to visit Gateshead.',
      
      'Rochester reluctantly agrees to Jane\'s departure but is clearly distressed by it. He needs her at Thornfield—especially now, after Mason\'s visit, when his plans and secrets are precarious. But he can\'t explain why her absence troubles him so much without revealing what he\'s hiding. He extracts promise that Jane will return, that this is temporary leave not permanent departure. Jane promises, though she doesn\'t understand the intensity of his concern. She\'s just visiting dying aunt; why does Rochester act as if he\'s losing her? She leaves Thornfield confused but determined: she\'ll face Mrs. Reed one final time, learn why she\'s been summoned, fulfill her duty—and then return to Thornfield and whatever Rochester is hiding.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Obligation Without Affection: Duty to Those Who Harmed You',
      definition: 'Feeling compelled to fulfill duties (visiting, caring, forgiveness) toward people who treated you badly, based on social role (family, former employer) rather than genuine connection or affection.',
      context: 'Mrs. Reed was cruel to Jane throughout childhood—abused her, blamed her, locked her in the red-room, sent her away to harsh Lowood, never showed love or kindness. Now she\'s dying and asks for Jane. Jane feels obligated to go despite her lack of affection for Mrs. Reed. Why? Because Mrs. Reed is blood relation (aunt), because she\'s dying, because social convention says you visit dying relatives. Jane\'s obligation comes from role, not relationship—she goes out of duty, not love.',
      whyItMatters: 'Many people feel obligated to care for, visit, or forgive family members who harmed them. Society says blood creates obligation regardless of how that family treated you. "But they\'re your parent/sibling/relative" becomes justification for maintaining connection with people who were abusive or cruel. Understanding obligation-without-affection helps recognize: you can honor duty (visit dying relative, be civil) without pretending there was love that never existed. You can show up for someone who harmed you without gaslighting yourself about the relationship. Modern contexts: adult children caring for abusive parents, people attending funerals of relatives who rejected them, family obligations to people who caused harm.'
    },
    {
      term: 'Deathbed Summons: Final Power or Repentance?',
      definition: 'When dying person calls for someone from their past, raising questions: Is this genuine desire for reconciliation and repentance? Final attempt at control or inflicting harm? Or something more complex?',
      context: 'Mrs. Reed, who abused Jane and sent her away, now summons Jane to her deathbed. This could be: (1) Repentance (she regrets her cruelty, wants forgiveness), (2) Restitution (she has information or money to give Jane), (3) Final control (exercising power over Jane one last time by making her come), (4) Unfinished business (she needs something from Jane), or (5) Complex mix (guilt, need, cruelty all entangled). Jane doesn\'t know which, and the uncertainty creates anxiety: What will she face when she arrives?',
      whyItMatters: 'Deathbed summons have power: the dying person holds moral high ground (they\'re dying, you should comply), but their motivations may be mixed. Is this genuine reconciliation opportunity or final manipulation? Modern contexts: estranged parent calls child to deathbed (is this healing chance or last control move?), former partner reaches out while dying (genuine closure or final emotional manipulation?), people who harmed you seek deathbed forgiveness (do you owe them forgiveness just because they\'re dying?). Understanding deathbed summons helps evaluate: What do I want from this encounter? What am I hoping for vs. what\'s realistic? Can I protect myself while honoring the summons?'
    },
    {
      term: 'The Dissolved Social Performance: When Pretense Ends',
      definition: 'When elaborate social performance (house party, courtship, maintained facade) abruptly ends, revealing it was unsustainable—the performance required energy, concealment, or circumstances that can no longer be maintained.',
      context: 'The house party dissolves rapidly after Mason\'s attack. Blanche and the guests leave, no engagement announced, the courtship theater ends. This reveals: the whole performance was unsustainable. Rochester was staging Blanche courtship (possibly to provoke Jane\'s jealousy, possibly considering it as escape from his trapped situation), but Mason\'s arrival proves Rochester can\'t maintain normal social life while hiding Bertha. The guests sensed something wrong, Blanche didn\'t get the proposal she expected, Rochester needed the performance to end so he could focus on crisis. The dissolved party reveals the courtship was performance, not reality.',
      whyItMatters: 'When elaborate social performances suddenly collapse, it reveals they were unsustainable all along. Modern contexts: couple who seemed perfect suddenly divorces (the performance couldn\'t be maintained), person who projected success abruptly retreats (the facade was exhausting), social group that seemed close rapidly disbands (the cohesion was forced). Understanding dissolved performances helps recognize: sometimes what looks like sudden collapse was actually gradual unraveling of unsustainable pretense. The end reveals the performance couldn\'t continue, often because underlying reality finally demands acknowledgment.'
    },
    {
      term: 'Reflective Processing: Making Sense Without Full Information',
      definition: 'Attempting to understand disturbing experiences you witnessed but weren\'t allowed to fully comprehend—processing fragments, recognizing patterns, suspecting connections without having complete picture.',
      context: 'Jane spends these days processing what happened: Mason\'s attack, Rochester\'s terror, the compelled silence, the dawn hypothetical. She doesn\'t have full information (doesn\'t know about Bertha, doesn\'t understand why Mason matters, doesn\'t realize Rochester\'s "hypothetical" was about bigamy), but she\'s piecing together what she can. She knows: something major is hidden at Thornfield, Rochester is desperate to conceal it, her answer to his question mattered more than she realized. This is reflective processing—working with partial information to construct understanding.',
      whyItMatters: 'We often must process experiences without full information: something disturbing happened but no one will explain, we witness concerning behavior but don\'t understand context, we sense something wrong but can\'t identify what. Reflective processing with incomplete information is how we maintain sanity in situations where information is withheld. Modern contexts: processing workplace incidents when management won\'t explain, understanding family dynamics when secrets are maintained, making sense of relationship behavior when partner won\'t communicate. The skill of recognizing patterns and trusting instincts despite incomplete information is survival mechanism when full transparency isn\'t available.'
    },
    {
      term: 'Intensity Asymmetry: When One Person Cares More',
      definition: 'When two people in relationship experience vastly different levels of concern about separation—one is distressed by temporary absence, the other doesn\'t understand why it\'s a big deal—revealing unequal emotional stakes or hidden reasons for the intensity.',
      context: 'Rochester is extremely distressed by Jane\'s departure to Gateshead—extracts promises she\'ll return, acts as if losing her. Jane is confused: she\'s just visiting dying aunt, why is Rochester so upset? She doesn\'t know: Rochester planned to marry her (bigamously), Mason\'s arrival threatened that plan, and Jane\'s absence now means she\'s not under his control during precarious time when his secrets might be exposed. Rochester\'s intensity reveals unequal stakes: her absence matters more to him than she realizes because of what he\'s hiding. The intensity asymmetry signals hidden information.',
      whyItMatters: 'When someone reacts with disproportionate intensity to routine separation, it signals: either they have hidden reasons for wanting you nearby, or emotional stakes are unequal. Modern contexts: partner extremely upset about work trip (control issue? insecurity? secret they need to manage?), boss distressed when employee takes vacation (what are they worried will happen without you?), friend panicking about your temporary absence (what role are you playing in their life that creates this dependency?). Intensity asymmetry often reveals: (1) hidden stakes (they need you nearby for reasons they haven\'t disclosed), (2) control issues (they\'re uncomfortable when you\'re not accessible), or (3) unequal emotional investment (your presence matters more to them than you realized, which may be concerning).'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane is in reflective mode: processing the night attack, trying to make sense of what she witnessed, recognizing Rochester is hiding something major but not understanding what. She\'s developing ability to recognize patterns while acknowledging incomplete information—she knows something is wrong without knowing specifics. When Mrs. Reed\'s summons arrives, Jane feels obligation despite lack of affection: Mrs. Reed was cruel, but she\'s dying and blood relation creates duty. This shows Jane\'s moral framework: duty persists even when relationship was harmful. But Jane is also self-aware enough to acknowledge her complicated feelings—she goes out of obligation, not love, and isn\'t pretending otherwise. She\'s learning to honor duty without gaslighting herself about the relationship.',
      keyTrait: {
        emoji: '🤔',
        text: 'Reflective Processing'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester is anxious and distressed after Mason\'s visit and during Jane\'s planned departure. The house party\'s dissolution seems to relieve him (no more performance required) but also isolates him (fewer distractions from his precarious situation). When Jane says she must leave, Rochester\'s distress is disproportionate—he extracts promises she\'ll return, acts as if losing her. He can\'t explain why her absence troubles him (would require revealing his plans and secrets), but his intensity signals hidden stakes. Rochester needs Jane at Thornfield now that his plans are threatened, but he can\'t say so. He\'s revealed as someone whose emotions are genuine (he truly is distressed) but whose inability to be transparent creates confusion and power imbalance.',
      keyTrait: {
        emoji: '😰',
        text: 'Anxious Need'
      }
    },
    {
      name: 'Blanche Ingram',
      development: 'Blanche departs Thornfield without the engagement she (and society) expected. The courtship ends with polite but cool farewells—no promises, no plans to meet again. This reveals: Blanche was performing courtship expecting it to end in proposal, but Rochester never intended to marry her. Whether she realizes she was used (to provoke Jane\'s jealousy) or simply accepts that Rochester chose not to propose isn\'t clear. Blanche exits the novel having served her narrative function: rival who forced Jane to confront her feelings, social performance that revealed Rochester\'s deception. Her departure marks end of Rochester\'s attempt to maintain normal social facade.',
      keyTrait: {
        emoji: '👋',
        text: 'Departed Without Prize'
      }
    },
    {
      name: 'Mrs. Reed',
      development: 'Mrs. Reed appears only through the summons letter, but her deathbed request for Jane is significant. She was Jane\'s childhood tormentor, showed no love or kindness, sent her away to harsh school. Now dying, she specifically asks for Jane. This could signal: repentance, desire for forgiveness, need to make restitution, final attempt at control, or complex mix of guilt and cruelty. The summons itself is Mrs. Reed\'s final exercise of power over Jane: calling her back, making her come. Jane doesn\'t know what she\'ll face, but the summons compels her.',
      keyTrait: {
        emoji: '☠️',
        text: 'Dying Summons'
      }
    },
    {
      name: 'The Houseguests',
      development: 'The guests depart quickly after Mason\'s visit, clearly unsettled by Thornfield\'s atmosphere. They don\'t know what happened, but they sensed something wrong—the household\'s secrets and tensions became palpable even through Rochester\'s management. Their rapid departure shows: Rochester can\'t sustain normal social life while hiding Bertha. The performance required to maintain facade while concealing violence is exhausting and ultimately unsustainable. The dissolved party marks end of Rochester\'s attempt to be normal social figure who can court appropriate wife.',
      keyTrait: {
        emoji: '🚶',
        text: 'Departed Quickly'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'All was again silent. The house party had dissolved. I was left alone with Mr. Rochester. I knew not what to make of this interval of calm.',
      analysis: 'The performance has ended—guests gone, Blanche departed, social theater dissolved. Jane and Rochester are alone at Thornfield, and Jane senses this "interval of calm" is precarious. The quietness after the house party\'s bustle feels ominous rather than peaceful. Jane knows something significant happened (Mason\'s attack) and something is coming (whatever Rochester is hiding will eventually be revealed). The calm is suspension before crisis—and Jane recognizes it as such even without knowing specifics.'
    },
    {
      text: 'Mrs. Reed had written to me from Gateshead. She was dying: she wished to see me. She asked with great earnestness that I would come to her at once.',
      analysis: 'Mrs. Reed\'s summons is urgent and earnest—"great earnestness," "at once." This woman who showed Jane no affection now desperately needs her presence. The earnestness suggests this isn\'t casual request: Mrs. Reed has something she needs to tell Jane, something that can\'t wait, something important enough to summon the niece she once rejected. The urgent language signals: whatever Mrs. Reed has to say matters, even if Jane doesn\'t yet know what it is.'
    },
    {
      text: 'I had obligations to Mrs. Reed. Tie though it was, I could not break it off. Besides, I had the feeling that in her last moments she would want to unburden herself to me of some sorrow or confession.',
      analysis: 'Jane articulates obligation-without-affection: Mrs. Reed is "tie" she can\'t break, not beloved relation. The obligation is social/moral, not emotional. Jane goes because blood relation and death create duty, not because she wants reconciliation. But Jane also suspects Mrs. Reed wants to "unburden"—confession or restitution. This shows Jane\'s complexity: she fulfills duty while acknowledging lack of love, hopes for meaningful encounter while protecting herself from expecting too much.'
    },
    {
      text: 'Promise me only to stay a week. I cannot bear the thought of your absence longer than that.',
      analysis: 'Rochester\'s distress at Jane\'s departure is disproportionate—he can\'t bear her absence for more than a week? Jane is just visiting dying aunt; his intensity seems excessive. But Rochester knows: his plans are precarious, Mason\'s visit threatened his secret, Jane\'s answer to his "hypothetical" revealed she won\'t accept bigamy. He needs her at Thornfield where he can manage the situation. His intensity signals hidden stakes Jane doesn\'t understand—she\'s more important to his plans than she realizes.'
    },
    {
      text: 'I reflected on the events of the night: how Rochester had been disturbed, how fearful, how his face had grown white. What did Mason know? What terrible secret did Thornfield hide?',
      analysis: 'Jane engages in reflective processing: reviewing what she witnessed, recognizing patterns, forming questions. She doesn\'t have answers but she has evidence: Rochester\'s terror, Mason\'s wounds, the compelled silence, something hidden at Thornfield. Jane is constructing understanding from fragments, developing suspicions without full information. This reflection shows Jane maintains critical awareness despite being denied explanation—she knows something major is concealed even if she doesn\'t know what.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Obligation Without Affection: Duty to Those Who Harmed You',
        explanation: 'Jane feels obligated to visit dying Mrs. Reed despite Mrs. Reed\'s lifetime of cruelty. This obligation comes from social role (blood relation) and death\'s moral weight, not from affection or genuine connection. Jane goes because convention says you visit dying relatives, because last moments create duty, because refusing would violate her moral code—but she doesn\'t pretend Mrs. Reed deserves her love. The theme explores: What do we owe people who harmed us? Does family create obligation regardless of treatment? Can you fulfill duty while acknowledging lack of affection?'
      },
      {
        name: 'The Dissolved Performance: Unsustainable Facades',
        explanation: 'The house party dissolves rapidly after Mason\'s visit—Blanche leaves without engagement, guests depart, social performance ends. This reveals: Rochester couldn\'t sustain normal social life while hiding Bertha. The courtship theater, the fashionable guests, the maintained facade—all required energy and concealment that became unsustainable when Mason arrived threatening exposure. The dissolved party marks end of Rochester\'s attempt to be normal gentleman who can court appropriate wife. He must choose: maintain his secret or have normal social life. He can\'t have both.'
      },
      {
        name: 'Reflective Processing With Incomplete Information',
        explanation: 'Jane spends these days trying to make sense of what she witnessed: Mason\'s attack, Rochester\'s terror, the compelled silence. She doesn\'t have full information but she recognizes patterns, develops suspicions, knows something major is hidden. This is survival skill when transparency isn\'t available: construct understanding from fragments, trust instincts despite gaps in knowledge, maintain awareness that you\'re being kept from full story. Jane models how to stay critically aware while participating in situation you don\'t fully understand.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Interlude Before Crisis: The Calm That\'s Not Calm',
        explanation: 'This chapter is interlude between major events—after Mason\'s attack, before Mrs. Reed\'s deathbed revelation. But it\'s not peaceful transition; it\'s pregnant pause before crisis. Jane senses the "calm" is precarious. Rochester is anxious. The house party\'s dissolution reveals unsustainability. Everything feels suspended, waiting. This creates narrative tension: we know something is coming even during this quieter chapter.',
        example: 'The guests leave, Thornfield empties, but instead of relief there\'s unease. Jane reflects on the night attack without resolution. Rochester can\'t explain his distress about her departure. Mrs. Reed\'s summons arrives creating new urgency. The "calm" is really holding-pattern before revelations to come. Brontë uses the quiet chapter to build anxiety: something will break, we don\'t know when or how, but the tension is mounting.'
      },
      {
        name: 'Parallel Summons: Two Dying Figures',
        explanation: 'Mrs. Reed\'s deathbed summons will parallel Bertha\'s revelation: both involve past that returns to haunt present. Mrs. Reed will reveal she hid information about Jane\'s uncle (concealing Jane\'s potential wealth/family). Rochester hides Bertha (concealing his marriage). Both involve information withheld, relatives concealed, truths that will explode when revealed. The structure parallels Rochester and Mrs. Reed as figures who controlled information to Jane\'s detriment.',
        example: 'Mrs. Reed summons Jane to deathbed where she\'ll confess years of concealment (hiding Uncle John Eyre\'s letter). Soon after Jane returns, Rochester will reveal his concealment (hiding Bertha). Both revelations will shock Jane, both involve family secrets kept from her, both show how powerful people controlled her life by withholding information. The parallel structure shows Jane surrounded by people who concealed truths that affected her profoundly.'
      },
      {
        name: 'Emotional Stakes Revealed Through Intensity',
        explanation: 'Rochester\'s disproportionate distress at Jane\'s departure signals hidden information. He can\'t explain why her absence troubles him, but his intensity tells readers: her presence matters more than Jane realizes, for reasons he can\'t disclose. This technique lets Brontë show Rochester\'s feelings while maintaining mystery about his plans. His emotion is real; his inability to explain it reveals the deception.',
        example: 'When Jane says she must visit Mrs. Reed, Rochester becomes agitated—extracts promises, sets time limits, acts as if losing her. Jane doesn\'t understand: it\'s just temporary visit. Readers increasingly suspect: Rochester needs Jane at Thornfield because his plans involve her, Mason\'s visit threatened those plans, her absence during this precarious time frightens him. The intensity asymmetry signals hidden stakes: she matters to his situation more than she knows.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine you\'re processing disturbing events you witnessed but weren\'t allowed to fully understand: something violent happened involving your boss/partner/household, they asked for your help but forbade you from asking questions, you complied but are now trying to make sense of fragments. You know something major is hidden but don\'t have full picture. Then you receive urgent message: estranged family member (parent, aunt, grandparent who was abusive or neglectful when you were young) is dying and has specifically asked for you. You haven\'t spoken to them in years, they showed you no affection, the relationship was harmful. Now they\'re dying and summon you. You feel obligated despite lack of love—family, death, and social convention create duty. But you don\'t know what you\'ll face: Deathbed repentance? Apology? Final manipulation? Restitution? When you tell your boss/partner you need to leave temporarily to visit dying relative, their reaction is surprisingly intense—they\'re distressed, extract promises you\'ll return quickly, act as if losing you. You\'re confused: it\'s just a few days visiting dying family member, why such intensity? You don\'t realize: they need you nearby for reasons they haven\'t disclosed, your absence during precarious time troubles them, but they can\'t explain without revealing what they\'re hiding.',
    
    parallels: [
      '🔹 **Obligation Without Affection**: Feeling duty to visit/care for family member who harmed you, based on social role (they\'re family) and death\'s moral weight, not genuine connection. You go because convention says you should, because refusing would violate your values—but you don\'t pretend there was love that never existed.',
      '🔹 **Deathbed Summons**: Dying person who rejected you now calls you back. Is this repentance (genuine desire for reconciliation), restitution (they have information/inheritance to give), final control (exercising power one last time), or complex mix? The uncertainty creates anxiety: What will you face?',
      '🔹 **Reflective Processing**: Trying to understand disturbing experiences without full information. You witnessed concerning events, weren\'t allowed to ask questions, now you\'re piecing together patterns, developing suspicions, recognizing something major is hidden—but you don\'t have complete picture.',
      '🔹 **Intensity Asymmetry**: When someone reacts with disproportionate distress to your routine separation. Their intensity signals: either hidden reasons for needing you nearby, control issues, or unequal emotional stakes. Modern contexts: partner extremely upset about work trip, boss distressed when you take vacation, friend panicking about temporary absence—the excessive reaction reveals hidden information.',
      '🔹 **Dissolved Performance**: When elaborate social situation (party, courtship, maintained facade) suddenly ends, revealing it was unsustainable. Modern contexts: couple who seemed perfect suddenly separates, person who projected success abruptly retreats, social group rapidly disbands. The collapse reveals the performance couldn\'t continue.',
      '🔹 **Duty vs. Self-Protection**: Balancing obligation to fulfill duty (visit dying relative) with protecting yourself emotionally (not expecting reconciliation that may not come, not gaslighting yourself about relationship that was harmful). You can show up without pretending there was love; you can honor duty while acknowledging complicated feelings.',
      '🔹 **Processing Fragments**: Making sense of situations where people withhold information but you\'re expected to participate. You don\'t have full story but you notice patterns, recognize red flags, trust instincts. This is survival skill when transparency isn\'t available—maintain awareness you\'re being kept from full picture while navigating situation as best you can.'
    ],
    
    discussionPrompt: 'Have you felt obligated to visit/care for family member who harmed you—showing up out of duty despite lack of affection? How did you balance fulfilling obligation with protecting yourself? Have you received deathbed summons from estranged relative—what did you expect vs. what did you find? Have you experienced someone reacting with excessive intensity to your routine separation—what did their disproportionate response reveal about hidden stakes? How do you process disturbing events when you\'re denied full information—what skills help you make sense of fragments while acknowledging incomplete picture?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '⚖️',
      name: 'Obligation and Duty',
      explanation: 'Jane feels obligated to visit Mrs. Reed despite their harmful history. This isn\'t about affection—it\'s about duty stemming from blood relation and death\'s moral weight. Jane goes because refusing would violate her moral code, but she doesn\'t pretend Mrs. Reed deserves love. This thread explores: What do we owe people who harmed us? Does family create obligation regardless of treatment? Jane models fulfilling duty while acknowledging complicated feelings—showing up without gaslighting herself about the relationship.'
    },
    {
      emoji: '🎭',
      name: 'Dissolved Performances',
      explanation: 'The house party ends abruptly—Blanche leaves without engagement, guests depart, Rochester\'s social performance collapses. This reveals: he couldn\'t sustain normal social life while hiding Bertha. The courtship theater required energy and concealment that became unsustainable after Mason\'s visit. Rochester must choose between maintaining secret and having normal social existence. The dissolved party shows: elaborate deceptions eventually become impossible to maintain—reality demands acknowledgment.'
    },
    {
      emoji: '🤔',
      name: 'Processing Without Full Information',
      explanation: 'Jane reflects on Mason\'s attack, Rochester\'s behavior, the strange events—trying to make sense of what she witnessed without full explanation. She recognizes patterns, develops suspicions, knows something major is hidden. This models how to maintain critical awareness when information is withheld: construct understanding from fragments, trust instincts, acknowledge gaps in knowledge. Jane stays aware she doesn\'t have full picture while navigating situation as best she can.'
    },
    {
      emoji: '💔',
      name: 'Hidden Stakes',
      explanation: 'Rochester\'s intensity about Jane\'s departure signals hidden information: her presence matters more than she realizes because of plans she doesn\'t know about. His disproportionate distress reveals unequal stakes—temporary separation shouldn\'t matter this much unless there are reasons he can\'t disclose. The thread explores: When someone reacts with excessive emotion to routine event, it often signals hidden reasons for needing control or proximity. Intensity asymmetry reveals concealed information.'
    },
    {
      emoji: '☠️',
      name: 'The Past Returns',
      explanation: 'Mrs. Reed\'s deathbed summons brings Jane\'s past forward—she must return to Gateshead, confront childhood tormentor, face old wounds. This parallels Rochester\'s situation: his past (Bertha, Mason) has returned and can\'t be kept at bay. Both Jane and Rochester must reckon with past they tried to leave behind. The thread suggests: past doesn\'t stay buried—it returns demanding acknowledgment, often at most inconvenient times.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Obligation Without Affection',
      question: 'Jane feels obligated to visit dying Mrs. Reed despite Mrs. Reed\'s lifetime of cruelty. She goes out of duty, not love. Is this admirable integrity (honoring obligations regardless of feelings) or enabling harmful people (showing up for someone who showed you nothing)? What do we owe family members who harmed us? Does death create obligation that mistreatment during life should void?'
    },
    {
      title: 'Deathbed Summons Motivations',
      question: 'Mrs. Reed specifically asks for Jane on her deathbed. What might motivate this: genuine repentance? desire for forgiveness? restitution? final control? or complex mix? When estranged relatives summon you to deathbed, how do you evaluate whether to comply—and how do you protect yourself while honoring the summons?'
    },
    {
      title: 'Rochester\'s Intensity About Jane\'s Departure',
      question: 'Rochester is extremely distressed by Jane\'s temporary absence—extracts promises she\'ll return, acts as if losing her. His intensity seems disproportionate to temporary visit. What does this reveal about Rochester\'s hidden situation? Why does her absence during this time trouble him so much? Should Jane be concerned about his excessive reaction?'
    },
    {
      title: 'Blanche\'s Departure',
      question: 'Blanche leaves Thornfield without the engagement she expected. The courtship ends with cool politeness, no promises. Was Blanche used? Does she realize Rochester never intended to marry her? Should Rochester have been more direct rather than staging elaborate courtship performance? What does Blanche\'s quiet departure reveal about her character or situation?'
    },
    {
      title: 'Reflective Processing',
      question: 'Jane spends these days trying to make sense of what she witnessed during Mason\'s attack—without full information, she recognizes patterns and develops suspicions. When you\'re in situation where information is withheld but you\'re expected to participate, how do you maintain critical awareness? What skills help process fragments while acknowledging incomplete picture?'
    },
    {
      title: 'The Dissolved Performance',
      question: 'The house party dissolves rapidly after Mason\'s visit—revealing Rochester couldn\'t sustain normal social life while hiding Bertha. When have you witnessed elaborate performance (relationship, social situation, professional facade) suddenly collapse? What does the collapse reveal about the performance\'s sustainability? How do we distinguish genuine situations from unsustainable facades?'
    },
    {
      title: 'Duty vs. Self-Protection',
      question: 'Jane fulfills duty to visit Mrs. Reed while protecting herself emotionally—she goes without expecting reconciliation, shows up without pretending there was love. How do we balance honoring obligations with protecting ourselves from people who harmed us? Can you fulfill duty while maintaining awareness of complicated feelings?'
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
      title: 'Analyzing Obligation Without Affection: When Duty Conflicts With Feelings',
      description: 'Write a reflective essay examining obligation to people who harmed you. Part 1: Analyze Jane\'s situation: Mrs. Reed was cruel throughout Jane\'s childhood—abused her, locked her in red-room, sent her to harsh school, showed no affection. Now Mrs. Reed is dying and summons Jane. Jane feels obligated despite lack of love. Why? Blood relation, death\'s moral weight, social convention all create duty regardless of treatment. Part 2: Evaluate competing frameworks: (A) "Family is family" (obligation exists regardless of how they treated you), (B) "You don\'t owe abusers anything" (mistreatment voids obligation), (C) Middle position (you can honor duty while protecting yourself, fulfill role-based obligations without pretending there was love). Part 3: Personal reflection: Have you experienced obligation to people who harmed you? How did you navigate duty vs. self-protection? Part 4: Develop guidelines: When should you show up for people who showed you nothing? How do you fulfill obligations while maintaining boundaries? Can you honor duty without gaslighting yourself about the relationship? Use Jane Eyre as case study and contemporary examples.',
      purpose: 'This prompt develops complex thinking about obligation and boundaries—recognizing duty can exist without affection, can fulfill roles without love. Students analyze Jane\'s choice without simplistically condemning (she\'s enabling abuser) or praising (she\'s so forgiving). They grapple with competing values: honoring commitments vs. protecting yourself from harmful people. Connects to real dilemmas: caring for abusive aging parents, attending funerals of relatives who rejected you, maintaining family connections despite harmful history. Students develop frameworks for when to show up, how to protect yourself while honoring obligations, and how to avoid gaslighting yourself about relationships that were harmful.'
    },
    
    activity: {
      title: 'The Intensity Asymmetry Exercise: Recognizing Hidden Stakes',
      description: 'Students learn to recognize when someone\'s reaction is disproportionate to situation—signaling hidden stakes. Activity: Present scenarios where Person A has routine plan and Person B reacts with excessive intensity: (1) Employee tells boss about week-long vacation; boss becomes agitated, tries to discourage it, extracts promises employee will be available; (2) Partner mentions visiting friend for weekend; other partner becomes extremely upset, claims to "need" them home; (3) Adult child tells parent about moving to new city; parent reacts with desperate attempts to prevent it. For each, students identify: What\'s the stated situation? (vacation, visit, move) What\'s Person B\'s reaction? (excessive distress, controlling behavior) What might the disproportionate reaction signal? (hidden stakes, control issues, unequal power). Discussion: When is intense response legitimate (genuine attachment, reasonable concern) vs. when does it signal problems (control, hidden agenda, inappropriate emotional dependency)? Connect to Rochester: His distress about Jane\'s temporary absence signals she matters to his plans more than she realizes—he needs her at Thornfield for reasons he can\'t disclose. Extension: Students identify personal experiences where someone\'s disproportionate reaction revealed hidden information.',
      materials: 'Scenario cards with routine situations, response analysis worksheets, discussion prompts about intensity vs. hidden stakes'
    },
    
    crossCurricular: {
      title: 'Psychology/Social Work: Family Obligation and Boundaries With Harmful Relatives',
      description: 'Partner with psychology/social work to examine obligation to family members who caused harm. Psychology class covers: (1) Toxic family systems (abuse, neglect, emotional harm), (2) Obligation vs. enabling (when does showing up help vs. when does it enable continued harm?), (3) Boundaries with family (how to fulfill roles while protecting yourself), (4) Deathbed dynamics (why dying people sometimes seek reconciliation, what motivates summons of estranged relatives). English class reads Chapter 20 analyzing Jane\'s decision: Mrs. Reed was abusive, Jane feels obligated anyway. Is this healthy boundary-setting or harmful self-sacrifice? Students research: What do therapists recommend for adults dealing with abusive parents/relatives? When should you show up vs. when is it okay to refuse? Final project: Develop guidelines for navigating family obligations when relationship was harmful. Consider: (A) Safety (is it safe to engage?), (B) Expectations (can you protect yourself from hoping for reconciliation that may not come?), (C) Boundaries (can you fulfill limited role without deeper engagement?), (D) Closure (what do YOU need from encounter?). Apply to scenarios: dying parent who was abusive, family events with relatives who harmed you, requests for caregiving from people who showed you no care.',
      subjects: ['Psychology', 'Social Work', 'Family Studies', 'Trauma Studies', 'Ethics']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Evaluating Deathbed Summons: Obligation, Self-Protection, and Mixed Motivations',
    prompt: 'Mrs. Reed summons Jane to her deathbed despite lifetime of abuse and rejection. Jane feels obligated to go. Your task: Analyze whether Jane should comply with this summons, considering competing values and mixed motivations. (1) Map Mrs. Reed\'s possible motivations: repentance? restitution? final control? genuine need? or complex mix of guilt, need, and residual cruelty? (2) Evaluate Jane\'s obligation: Does blood relation + death create duty despite mistreatment? Or does abuse void obligation? (3) Consider power dynamics: Even dying, Mrs. Reed exercises power by summoning Jane—Jane must travel, disrupt her life, face childhood tormentor. Is this final manipulation? (4) Develop framework for when to honor deathbed summons from estranged/abusive relatives. Apply to Jane\'s case and contemporary scenarios.',
    
    guidingQuestions: [
      'What might motivate Mrs. Reed to summon Jane after years of cruelty and separation? List possibilities: (A) Genuine repentance (regrets treatment, wants forgiveness), (B) Restitution (has information or inheritance to give Jane), (C) Final control (exercising power one last time by making Jane come), (D) Complex mix (guilt + need + unresolved feelings). Which seems most likely given Mrs. Reed\'s character?',
      'Does Jane owe Mrs. Reed anything? Arguments for obligation: blood relation, death creates moral weight, Jane\'s own values require honoring family ties, refusing would violate Jane\'s integrity. Arguments against: Mrs. Reed was abusive, showed no love, death doesn\'t erase lifetime of harm, Jane doesn\'t owe abusers anything. Where do you stand?',
      'Consider power dynamics: Mrs. Reed, even dying, exercises power by summoning Jane. Jane must travel, leave Rochester during precarious time, face childhood trauma. The summons itself is exercise of power—Mrs. Reed commands, Jane complies. Is this problematic even if motivations are good?',
      'How should Jane protect herself while honoring summons (if she goes)? Consider: Not expecting reconciliation that may not come, maintaining emotional boundaries, not gaslighting herself about relationship that was harmful, being prepared for disappointment or further harm.',
      'Develop framework for deathbed summons from estranged relatives: When should you go? (Safety, your needs, their likely motivations) How do you protect yourself? (Boundaries, realistic expectations) What do you owe vs. what you choose to give? (Minimum obligation vs. generous reconciliation)'
    ],
    
    thinkingFramework: {
      analyze: 'Map the summons situation: (1) History: Mrs. Reed abused Jane (locked in red-room, blamed for everything, sent to harsh school), showed no affection, rejected her completely. (2) Separation: Years have passed, no contact, Jane built new life. (3) Summons: Mrs. Reed dying, specifically asks for Jane with "great earnestness." (4) Jane\'s response: Feels obligated despite lack of affection. Consider Mrs. Reed\'s possible motivations: (A) Repentance: Genuine regret, wants forgiveness before dying (possible but would require character change), (B) Restitution: Has information/money to give Jane (later revealed: she hid letter from Jane\'s uncle—so this is actual motivation), (C) Final control: Exercising power by making Jane come, one last command Jane must obey (consistent with Mrs. Reed\'s character), (D) Complex mix: Guilt about treatment + need for absolution + residual resentment all entangled (most realistic—people rarely have pure motivations). Evaluate which seems most likely given what we know of Mrs. Reed.',
      evaluate: 'Apply ethical frameworks to Jane\'s decision: (1) Deontological (duty-based): Jane has duty to family regardless of treatment—blood relation creates obligation, death increases moral weight, refusing would violate principle of honoring relatives. This supports going. (2) Consequentialist: Evaluate outcomes. Best case: reconciliation, closure, restitution. Worst case: further harm, reopened wounds, disappointment. Most likely: mixed experience with some resolution and some continued pain. Are likely positive outcomes worth risking negative ones? (3) Virtue ethics: What would virtuous person do? Show compassion despite past hurt (mercy, forgiveness) or protect self from continued harm (self-respect, boundaries)? (4) Care ethics: Consider relationships and context. Mrs. Reed didn\'t care for Jane, but Jane values being caring person. Refusing makes Jane into the rejecting one—which violates her values even if justified. Consider power dynamics: Mrs. Reed exercises power even dying—she commands, Jane complies. The summons itself is power move: "I want you, you must come." Even if motivations include repentance, the structure maintains Mrs. Reed\'s control. Is this problematic? Can you honor summons while recognizing power dynamics?',
      synthesize: 'Develop framework for deathbed summons from harmful relatives: (1) Safety assessment: Is it physically/emotionally safe to comply? If person was violent/severely abusive, safety trumps obligation. (2) Motivation evaluation: What are likely motivations? Genuine repentance? Final manipulation? Restitution? This affects how to protect yourself. (3) Self-knowledge: What do YOU want from encounter? Closure? Reconciliation? Information? Be clear on your needs, not just theirs. (4) Realistic expectations: Don\'t expect transformation. Person who was harmful for decades rarely becomes different person on deathbed. (5) Boundaries: Can you fulfill limited obligation (visit, be civil) without deeper engagement that risks further harm? (6) Support: Have support system ready for processing whatever happens. Apply to scenarios: (A) Parent who was abusive asks to see you before death—go if safe, maintain boundaries, don\'t expect apology that may not come; (B) Relative who rejected you wants deathbed reconciliation—evaluate whether this serves your needs or just theirs; (C) Estranged family member wants to give inheritance/information—this is restitution but doesn\'t erase harm, can accept information without pretending relationship was fine. Guidelines: You can honor duty without love, fulfill role without deep engagement, show up without gaslighting yourself about what the relationship was.'
    },
    
    expectedDepth: 'Strong responses will: (1) Recognize complexity of Mrs. Reed\'s possible motivations—most people aren\'t purely repentant or purely manipulative but mixed; (2) Grapple with competing values: honoring family obligations vs. protecting yourself from continued harm, both are legitimate; (3) Acknowledge power dynamics even in deathbed context—dying doesn\'t automatically remove power imbalances or make summons non-coercive; (4) Develop nuanced framework that accounts for safety, motivations, realistic expectations, and boundaries; (5) Apply to contemporary contexts with specificity—how these guidelines work in real situations with abusive aging parents, estranged relatives, harmful family dynamics; (6) Balance compassion with self-protection—neither simplistic "you don\'t owe them anything" nor "family is family regardless"—but complex middle ground that honors duty while maintaining boundaries; (7) Consider what Jane needs from encounter vs. what Mrs. Reed wants—Jane\'s needs matter too, not just obligation to dying person.',
    
    classroomApplication: 'Works as: (1) Analytical essay (8-10 pages) requiring ethical reasoning, psychological analysis, and application to contemporary family dynamics, (2) Case study approach—students evaluate real and hypothetical deathbed summons scenarios using developed framework, (3) Role play—students act out deathbed encounters with different motivations and responses, then debrief about boundaries and protection, (4) Panel discussion with social workers/therapists discussing family obligation and boundaries. Time: 5-6 class periods including textual analysis, ethical framework development, contemporary applications, and practical guidelines. Can connect to: social work (family systems), psychology (trauma and boundaries), ethics (competing obligations), family studies (toxic family dynamics), gerontology (end-of-life dynamics). Consider inviting: therapists specializing in family trauma, social workers who help adults navigate abusive family situations, hospice workers who\'ve seen deathbed reconciliation attempts.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(20),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '💌',
    title: 'Next Time: Chapter 21 — Mrs. Reed\'s Deathbed Confession',
    preview: 'Jane arrives at Gateshead to find Mrs. Reed suffering from stroke, bitter and unrepentant even while dying. The Reed cousins—Eliza cold and rigid, Georgiana vain and useless, John dead from dissolute living—have become exactly what their upbringing predicted. For days Jane tends Mrs. Reed, who remains hostile, unable or unwilling to soften toward the niece she always hated. Then finally, on what will be her last night, Mrs. Reed summons Jane and makes devastating confession: Three years ago, a letter arrived from Jane\'s uncle John Eyre in Madeira. He\'d been searching for his niece, wanted to adopt her and make her his heir. Mrs. Reed, still hating Jane even then, wrote back saying Jane had died of typhus at Lowood. For three years Jane has had wealthy uncle looking for her—and Mrs. Reed maliciously prevented the connection. Mrs. Reed hands Jane the letter, refuses to apologize, and dies unreconciled. Jane returns to Thornfield knowing: she has family, wealth is possible, Mrs. Reed\'s cruelty extended to the very end—and Rochester is waiting.',
    hookQuestion: 'Why did Mrs. Reed hate Jane so much that even dying, she couldn\'t let go of her malice? Who is Uncle John Eyre, and will Jane connect with him now? And what will Jane find when she returns to Thornfield—what has happened in her absence?'
  }
}

