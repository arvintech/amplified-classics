/**
 * WUTHERING HEIGHTS - CHAPTER 22
 * 
 * Lockwood and Cathy accidentally walk to Wuthering Heights; Cathy reunites with Linton but reality doesn't match her romantic fantasy
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getThenVsNowMessage } from '@/app/lib/literature-matters-messages'

export const chapter22: ChapterData = {
  number: 22,
  title: '',
  
  readingTime: 17,
  pages: 9,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Lockwood, recovering and bored, walks on the moors with Cathy; they wander to Wuthering Heights where Cathy is reunited with Linton, but the reality of his querulous, sickly nature clashes sharply with her romantic epistolary fantasy, though her sympathy is still triggered by his visible suffering.',
    
    full: [
      'Lockwood, bored during convalescence at Thrushcross Grange, decides to take a walk. He encounters Cathy, who is also walking while her father is occupied. Nelly tries to steer them away from Wuthering Heights, but Lockwood (naive about the danger and intrigued by the mysterious place) insists on walking that direction. Cathy, drawn by curiosity and secret desire to see Linton again, eagerly joins. Nelly is trapped: she cannot explain the full danger to Lockwood without revealing family secrets Edgar wants hidden, and she cannot physically prevent two adults from walking where they choose. They arrive at Wuthering Heights, where Heathcliff greets them with calculated courtesy—barely concealing his satisfaction at having Cathy on his territory again.',
      
      'Inside, Cathy is reunited with Linton for the first time since their correspondence ended months ago. But the reunion is jarring disappointment rather than romantic fulfillment. The Linton of letters—witty, sensitive, refined—is revealed as reality-Linton: peevish, querulous, self-absorbed, physically deteriorating. He complains constantly about his health, whines about his father\'s treatment, demands sympathy but gives none in return. He\'s simultaneously pathetic (genuinely suffering) and irritating (makes no effort to be pleasant). Cathy tries to maintain romantic fantasy—she came expecting sensitive cousin who needs her—but reality keeps intruding. He\'s not grateful for her visit; he\'s resentful she stayed away so long. He\'s not interested in her experiences; he only wants to talk about his own suffering.',
      
      'The clash between epistolary fantasy and embodied reality creates cognitive dissonance for Cathy. In letters, Linton\'s suffering seemed noble, his sensitivity seemed appealing, his need for her seemed romantic. In person, his suffering is tedious, his sensitivity is whining, his need is demanding. But her kindness won\'t let her abandon him—seeing his physical deterioration triggers sympathy even as his personality repels her. This is Heathcliff\'s trap working perfectly: Cathy\'s compassion will override her disappointment. She cannot admit (to herself or others) that the person she\'s been emotionally invested in for months is actually unpleasant, because admitting that would mean her feelings were based on fantasy rather than real connection.',
      
      'Heathcliff observes with satisfaction. He doesn\'t need Cathy to love Linton—he needs her to feel obligated to him. Pity, guilt, and sense of duty will serve his purposes as well as love, maybe better (harder to walk away from obligation than from disappointing romance). The visit ends with Cathy confused: she came expecting romantic reunion, experienced disappointing reality, but cannot admit disappointment without invalidating months of emotional investment. Heathcliff has successfully created situation where Cathy must continue relationship to justify investment already made (sunk cost fallacy). The trap is working—not through romance as Cathy expected, but through obligation, pity, and inability to admit she was wrong about Linton.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Epistolary Fantasy vs. Embodied Reality',
      definition: 'Disconnect between romanticized version of person known primarily through writing vs. actual experience of their physical presence, personality, and behavior in sustained contact.',
      context: 'Cathy\'s months of letters with Linton created fantasy: sensitive, suffering, romantic figure who needs her. Reality: peevish, whining, self-absorbed invalid who demands sympathy but gives none. Letters allowed him to control presentation; in-person contact reveals unfiltered personality.',
      whyItMatters: 'People can curate written presentation but cannot sustain performance in embodied interaction. Modern parallel: online dating where profile creates fantasy shattered by first date, or long-distance relationships where texting intimacy doesn\'t survive cohabitation. Understanding this prevents: (1) Confusing mediated connection with knowledge of whole person, (2) Making commitments based on controlled presentation rather than reality, (3) Feeling betrayed when person doesn\'t match curated image. Cathy\'s inability to admit disappointment shows how investment creates pressure to maintain fantasy despite evidence. Literature teaches: test relationships in reality before committing based on fantasy.'
    },
    {
      term: 'Sunk Cost Fallacy (Emotional Investment)',
      definition: 'Continuing investment (time, emotion, resources) in something that isn\'t working because of past investment, unable to "waste" what\'s already been spent even though continuing wastes more.',
      context: 'Cathy has invested months of emotional energy in Linton through letters—hopes, fantasies, feelings. When reality disappoints, she cannot easily admit mistake and walk away because that would mean all that feeling was "wasted." Her investment creates pressure to continue even though he\'s unpleasant.',
      whyItMatters: 'Sunk cost fallacy keeps people in bad situations longer than rational: "I\'ve already put in 5 years, I can\'t quit now," even when staying wastes more time. Rational response: ignore past investment, decide based on future costs/benefits. But emotions aren\'t rational—past investment feels meaningful, "wasting" it feels like failure. Understanding this helps recognize: (1) Past investment cannot be recovered by continuing, (2) Refusing to cut losses often means bigger future losses, (3) Admitting mistake isn\'t failure but wisdom. Modern applications: staying in wrong major/job/relationship because of time invested. Cathy illustrates: cannot admit Linton disappoints because that would invalidate months of feelings. Heathcliff exploits this: her investment traps her.'
    },
    {
      term: 'Pity as Manipulation / Weaponized Suffering',
      definition: 'Using one\'s own genuine suffering as tool to obligate others—making people feel cruel for not helping, guilty for having boundaries, responsible for one\'s wellbeing.',
      context: 'Linton\'s visible physical deterioration triggers Cathy\'s sympathy even when his personality repels her. He doesn\'t have to be pleasant or appealing—his suffering alone creates obligation. Cathy cannot withdraw compassion from obviously suffering person without feeling cruel, regardless of how he treats her.',
      whyItMatters: 'Key insight: someone can genuinely suffer AND use that suffering to control others. Signs weaponized pity: (1) Their suffering always trumps your boundaries, (2) You feel cruel for having limits, (3) They expect you to manage their pain through self-sacrifice, (4) They guilt you into compliance. Distinguishing genuine vs. weaponized: Do they respect your boundaries while asking for help? Take responsibility for their wellbeing or make it yours? Linton\'s suffering is real but he uses it to demand Cathy\'s presence without reciprocity. Modern application: people using mental illness/trauma as excuse for bad behavior that others must tolerate. Understanding this teaches: acknowledge suffering while maintaining boundaries; compassion doesn\'t require self-sacrifice.'
    },
    {
      term: 'Cognitive Dissonance (Conflicting Evidence vs. Belief)',
      definition: 'Psychological discomfort when reality contradicts beliefs/expectations, creating pressure to either change belief or dismiss/rationalize contradictory evidence.',
      context: 'Cathy believed Linton was sensitive, romantic, suffering hero. Reality shows him as querulous, self-absorbed, unpleasant. This creates dissonance: her belief conflicts with evidence. Rather than admit she was wrong (painful), she rationalizes: "He\'s just having bad day," "His illness makes him irritable," "He\'ll be better when he\'s healthier."',
      whyItMatters: 'Explains why people maintain beliefs despite contradictory evidence: changing belief is painful (admits we were wrong), so we rationalize instead. In relationships: "They\'re not usually like this," "They\'ll change," "I can fix them." These maintain belief despite evidence because admitting truth requires painful action. Understanding this helps recognize: (1) First instinct is to dismiss reality, not change belief, (2) Rationalization serves emotional need to avoid painful truth, (3) More investment = more evidence required to change belief. Cathy rationalizes Linton\'s unpleasantness rather than admit months of feelings were misplaced. This teaches: beware rationalizing red flags when invested—the more invested, the more likely to dismiss warning signs.'
    },
    {
      term: 'Romantic Idealization Collapse',
      definition: 'When romanticized fantasy of person built through distance/imagination crashes against reality of their actual personality, creating disappointment and disillusionment.',
      context: 'Cathy idealized Linton through letters: sensitive soul, romantic connection, mutual understanding. Reality: he\'s unpleasant, self-absorbed, demanding. The romantic fantasy collapses when tested against embodied reality. But her emotional investment makes her unable to fully acknowledge collapse.',
      whyItMatters: 'Healthy relationships require idealization to mature into realistic acceptance: "You\'re not perfect but I love actual you." Collapse happens when distance prevented reality-testing or investment was in fantasy not person. Danger signs: "Once we\'re together things will be different," "They\'re not themselves right now"—resisting acceptance of real person. Healthy response: acknowledge disappointment, adjust expectations, decide if real person is acceptable. Unhealthy (Cathy\'s approach): maintain fantasy despite evidence, rationalize unpleasant reality, pressure self to feel what\'s "supposed to." Modern parallel: online/long-distance relationships where connection doesn\'t survive sustained in-person contact. Literature teaches: test fantasies against reality before major commitment.'
    },
    {
      term: 'Strategic Hospitality / Calculated Courtesy',
      definition: 'Performing politeness and welcome specifically to lower target\'s guard, encourage trust, and facilitate future manipulation—hospitality as trap rather than genuine welcome.',
      context: 'Heathcliff greets Lockwood and Cathy with courtesy, offers hospitality, performs civilized host. But this is strategic: he wants Cathy comfortable at Heights, wants Lockwood to think him respectable, wants to normalize visits so Cathy returns. His courtesy is performance serving revenge plot.',
      whyItMatters: 'Strategic hospitality makes targets feel welcome so they lower defenses. Used by abusers (love-bombing), manipulators (excessive generosity before ask), predators (grooming). Key insight: genuine and strategic hospitality look identical—distinguishing requires understanding context/motives. Red flags: (1) Excessive hospitality inconsistent with relationship stage, (2) Generosity creating obligation, (3) Welcome contingent on compliance, (4) Courtesy disappearing once they have what they want. Heathcliff performs perfect host but context reveals strategy: revenge motive, Cathy as target. Understanding this teaches: evaluate behavior against context, beware excessive hospitality, recognize courtesy can be weapon. Modern: online predators, manipulative partners, cult recruitment. Literature shows: danger sometimes comes dressed in courtesy.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Catherine "Cathy" Linton',
      development: 'Experiences jarring cognitive dissonance between letter-Linton (romantic fantasy) and actual-Linton (querulous reality). Her months of emotional investment make her unable to simply walk away from disappointment—admitting Linton is unpleasant would mean admitting her feelings were based on fantasy. She begins rationalizing: "he\'s just nervous," "illness makes him irritable," trying to preserve fantasy despite evidence. Her kindness becomes vulnerability: she cannot withdraw compassion from visibly suffering person even when he treats her poorly. Shows how good people can be trapped not by attraction but by inability to abandon someone they feel obligated to help.',
      keyTrait: {
        emoji: '💔',
        text: 'Fantasy Crumbling'
      }
    },
    {
      name: 'Linton Heathcliff',
      development: 'Reality revealed: not romantic suffering hero but peevish, self-absorbed invalid. He\'s genuinely ill (not faking suffering) but uses suffering as weapon—demands sympathy, gives none in return, complains constantly, resents Cathy for staying away while making no effort to be pleasant now she\'s here. Simultaneously pathetic (clearly dying, genuinely suffering) and repellent (unpleasant personality, weaponized pity). Perfect tool for Heathcliff because his genuine suffering creates obligation even though his personality prevents love. Cathy cannot leave without feeling cruel, but cannot enjoy being with him either—exactly the trap Heathcliff needs.',
      keyTrait: {
        emoji: '😫',
        text: 'Weaponized Suffering'
      }
    },
    {
      name: 'Heathcliff',
      development: 'Performs courteous host—greets Lockwood warmly, welcomes Cathy, offers hospitality, shows no overt hostility. Strategic courtesy designed to: (1) Make Lockwood think him respectable (so he\'ll report positively to Edgar), (2) Make Cathy comfortable at Heights (so she\'ll return), (3) Normalize visits (break down boundary Edgar established). His satisfaction is barely concealed—plan working perfectly. He doesn\'t need Cathy to love Linton; obligation, pity, guilt will serve just as well. Observes reunion with strategic interest: Linton\'s unpleasantness doesn\'t matter if Cathy\'s sympathy keeps her connected.',
      keyTrait: {
        emoji: '🎭',
        text: 'Courteous Predator'
      }
    },
    {
      name: 'Nelly Dean',
      development: 'Trapped by circumstance: cannot explain danger to Lockwood without revealing family secrets Edgar wants hidden, cannot physically prevent two adults from walking where they choose, cannot protect Cathy without authority to override her choices. Represents adults who see danger but lack power to prevent it. Her helplessness shows how warning without authority is ineffective—she knows Heathcliff is dangerous, knows Cathy is walking into trap, but cannot intervene effectively. Must watch disaster unfold, powerless.',
      keyTrait: {
        emoji: '😰',
        text: 'Powerless Observer'
      }
    },
    {
      name: 'Mr. Lockwood',
      development: 'Naive catalyst—his curiosity about Heights and ignorance of danger enable the visit. He doesn\'t understand why Nelly wants to avoid Heights, finds Heathcliff\'s courtesy reassuring, sees nothing sinister in reunion. His naive perspective contrasts with Nelly\'s knowledge-based anxiety, showing how ignorance can facilitate danger. He functions as Heathcliff\'s unwitting accomplice: his presence makes visit seem innocent social call rather than dangerous transgression.',
      keyTrait: {
        emoji: '🚶',
        text: 'Naive Enabler'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // Significant passages with analysis
  // ===================================================================
  quotes: [
    {
      text: "Linton appeared a different person from the picture Cathy had created in her mind from his letters. He was peevish and querulous, complaining of his health and demanding sympathy.",
      analysis: 'Stark contrast between epistolary fantasy ("picture Cathy had created") and embodied reality ("different person"). Letter-Linton could control presentation—choosing what to share, editing thoughts, performing idealized self. Actual-Linton reveals unfiltered personality: peevish (irritable), querulous (complaining), demanding without giving. The word "picture" emphasizes her fantasy was construction—imagination based on limited, controlled information. This teaches universal lesson about mediated relationships: distance allows curation, and investment in fantasy doesn\'t prepare for reality. Cathy\'s disappointment is normal when fantasy meets reality; her difficulty admitting it (because of investment) is what creates trap.'
    },
    {
      text: "I came as soon as I could, said Cathy, trying to excuse herself. But Linton only replied: You should have come sooner. You don\'t care about me.",
      analysis: 'Shows Linton weaponizing suffering: Cathy offers excuse (reasonable—she was forbidden), he responds with guilt and accusation. "You don\'t care about me" is emotional coercion—making her responsible for his feelings, framing her boundaries as cruelty, demanding she prove care through compliance. Healthy response would be: "I\'m glad you\'re here now." Manipulative response (what he does): "You should have..." creates obligation, "You don\'t care..." guilts her for having limits. This pattern—effort never enough, boundaries framed as betrayal—is classic emotional manipulation. Understanding this helps recognize: genuine need expresses gratitude for help received; weaponized suffering focuses on help not received and uses guilt to extract more.'
    },
    {
      text: "Heathcliff welcomed them with unusual courtesy, showing them every civility.",
      analysis: 'Strategic hospitality perfectly performed: "unusual courtesy" and "every civility" show Heathcliff deliberately playing gracious host. Word "unusual" signals this is performance, not genuine character—he\'s known for hostility, so courtesy stands out. His strategy: make Lockwood see him as respectable (so Lockwood won\'t warn Edgar), make Cathy comfortable (so she\'ll return), normalize visits (break down protective boundary). Performance is convincing because genuinely courteous behavior and strategically courteous behavior are behaviorally identical—only motive distinguishes them. This teaches: evaluate behavior in context (what does this person gain from being nice?), and beware when someone\'s courtesy serves their strategic interest rather than reflecting genuine warmth.'
    },
    {
      text: "Cathy tried to be cheerful and kind, but Linton's constant complaints wore upon her spirits.",
      analysis: 'Shows Cathy\'s internal conflict: she\'s trying to maintain fantasy (be cheerful, be kind, perform role of devoted visitor) but reality intrudes (his complaints wear on her). The phrase "tried to be" shows effort—this isn\'t natural, she\'s working to feel/act how she thinks she should. "Wore upon her spirits" reveals toll: being with him is depleting, not fulfilling. This is cognitive dissonance in action: belief (I care about Linton, visiting him is good) conflicts with experience (being with him is exhausting, he\'s unpleasant). She\'s not yet ready to admit dissonance, so she doubles down on effort—trying harder to feel what she\'s "supposed to" feel. This pattern—relationship feeling like work, trying to force feelings—is red flag that something isn\'t right.'
    }
  ],
  
  // ===================================================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // Themes and literary techniques with expert explanation
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Epistolary Fantasy vs. Embodied Reality',
        explanation: 'Chapter dramatizes universal experience: person known primarily through writing (letters, texts, online) doesn\'t match reality of sustained in-person contact. Cathy built romantic fantasy from Linton\'s letters—controlled presentations that emphasized sensitivity, suffering, need for her. Reality reveals unfiltered personality: peevish, demanding, unpleasant. Fantasy collapses when tested against embodied reality. This explores how mediated communication allows idealization impossible to sustain in physical presence. Letters let Linton show best self; sustained contact reveals whole self. Cathy\'s investment in fantasy makes her resistant to acknowledging reality—cognitive dissonance where belief conflicts with evidence. Rather than admit mistake (painful—invalidates months of feelings), she rationalizes: "he\'s nervous," "illness affects him," "it\'ll get better." Modern relevance profound: online relationships, long-distance relationships, text-based connections all create epistolary fantasy vulnerable to reality-test. Understanding this teaches: (1) Test fantasy against sustained reality before major commitment, (2) Mediated intimacy isn\'t knowledge of whole person, (3) Investment in fantasy creates resistance to acknowledging reality, (4) Healthy relationships require moving from idealization to realistic acceptance. Brontë shows: distance enables dangerous fantasy, and investment makes us defend fantasy even when evidence contradicts.'
      },
      {
        name: 'Sunk Cost Fallacy in Emotional Investment',
        explanation: 'Cathy cannot easily walk away from disappointing Linton because she\'s invested months of emotional energy—hopes, feelings, fantasies. Admitting disappointment would mean admitting investment was "wasted." This demonstrates sunk cost fallacy in emotional realm: continuing investment because of past investment, unable to "waste" what\'s already spent even though continuing wastes more. Rational response to sunk costs: ignore them, decide based on future costs/benefits. But emotions aren\'t rational: past investment feels meaningful, "wasting" it feels like failure. Heathcliff exploits this brilliantly: once Cathy invested in Linton through letters, her investment itself becomes trap. Even when reality disappoints, she cannot easily admit mistake because that invalidates months of feelings. Each visit becomes another investment making it harder to leave: "I\'ve come this far, I can\'t give up now." Modern applications everywhere: staying in wrong career because years invested, staying in bad relationship because of past investment, continuing failed business because of money spent. Psychology research confirms: sunk costs irrationally influence decisions—we\'re loss-averse, hate "wasting" investment, feel committed by past choices even when those choices no longer serve us. Understanding this helps recognize: past investment cannot be recovered by continuing; refusing to cut losses often means bigger losses; admitting mistake isn\'t failure but wisdom. Cathy illustrates trap: emotional investment creates obligation to continue despite disappointment.'
      },
      {
        name: 'Pity as Manipulation / Obligation through Suffering',
        explanation: 'Linton\'s genuine suffering functions as manipulation regardless of intent: his visible deterioration triggers Cathy\'s sympathy even when his personality repels her. She cannot withdraw compassion from obviously suffering person without feeling cruel. Heathcliff understands this perfectly: doesn\'t need Cathy to love Linton—obligation, pity, guilt serve revenge purposes better (harder to walk away from duty than from disappointing romance). Theme explores how suffering can be weaponized even when real. Linton genuinely suffers but uses suffering to obligate Cathy: demands sympathy without reciprocity, resents her absence while offering nothing pleasant in her presence, makes his suffering her responsibility. Key insight: someone can be victim (genuinely suffering) and manipulator (using suffering to control) simultaneously. Recognizing weaponized suffering doesn\'t mean dismissing pain; means understanding suffering doesn\'t obligate unlimited accommodation. Modern applications: toxic people using mental illness as excuse for bad behavior; abusive partners using suicide threats to prevent leaving; manipulative people making their suffering others\' responsibility. Understanding this teaches: (1) Compassion doesn\'t require accepting mistreatment, (2) Suffering doesn\'t excuse weaponizing it, (3) Helping doesn\'t mean having no boundaries, (4) Someone\'s pain isn\'t your responsibility to fix. Brontë shows: kindness can be exploited, and good people can be trapped through compassion rather than attraction.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Dramatic Irony (Reader Knowledge vs. Character Ignorance)',
        explanation: 'Readers know Heathcliff is dangerous, know his courtesy is strategic, know Linton is tool in revenge plot. But Lockwood doesn\'t—he finds Heathcliff\'s hospitality reassuring. This creates tension: we watch innocent walk into trap, powerless to warn. Classic Gothic technique: dramatic irony generates suspense through knowledge gap between audience and character. Technique emphasizes Lockwood\'s vulnerability (ignorance creates danger) and Heathcliff\'s calculation (performs courtesy convincingly enough to fool naive observer). Also emphasizes Cathy\'s partial awareness: she knows Heathcliff is connected to her mother\'s tragedy (vague knowledge) but doesn\'t understand his specific revenge plan (crucial ignorance). Dramatic irony creates sympathy rather than contempt: characters aren\'t stupid for walking into trap—they\'re uninformed, which is different. Technique teaches: danger often succeeds through information asymmetry. Predators know they\'re dangerous; targets don\'t. Understanding this prevents victim-blaming (why didn\'t she see it coming?) and recognizes vulnerability comes from information gap, not character flaw.'
      },
      {
        name: 'Contrast and Juxtaposition (Fantasy vs. Reality)',
        explanation: 'Chapter structurally contrasts Cathy\'s epistolary fantasy with embodied reality through juxtaposition: Letter-Linton (sensitive, romantic, suffering hero) placed against Actual-Linton (peevish, demanding, querulous invalid). Brontë doesn\'t tell us fantasy collapsed—she shows it through contrast. By placing expectation beside reality, technique makes dissonance visible. Juxtaposition serves thematic purpose: demonstrates how distance enables idealization, how mediated communication allows fantasy, how investment resists reality-testing. Technique also generates pathos: Cathy\'s disappointment is palpable through contrast between what she hoped for (romantic reunion) and what she gets (unpleasant reality). Structural contrast teaches readers: beware investment in fantasy, test fantasies against reality, and recognize disappointment when expectation meets reality. Modern parallel: online dating profile (curated fantasy) vs. first date (unfiltered reality). Understanding this technique helps recognize: when literature juxtaposes expectation and reality, it\'s teaching about gap between fantasy and truth.'
      },
      {
        name: 'Strategic Courtesy as Dramatic Mask',
        explanation: 'Heathcliff\'s unusual courtesy functions as dramatic mask—performance hiding true intent. Gothic literature frequently uses courtesy/civility as mask concealing danger: villain performing gentleman, predator performing friend, hostile intent hiding behind polite behavior. Technique works because courtesy and hostility are incompatible in audience mind—we expect dangerous people to act dangerous. When villain performs courtesy convincingly, it creates cognitive dissonance: behavior (polite) conflicts with what we know about character (dangerous). This generates tension: when will mask slip? What does courteous behavior conceal? Technique also teaches readers: dangerous people don\'t always look dangerous. Real predators often perform normalcy, friendliness, respectability convincingly—that\'s how they access victims. Understanding this technique prevents naive assumption that dangerous people will signal danger obviously, and teaches: evaluate behavior in context of motive, not just surface presentation. Heathcliff\'s courtesy fools Lockwood but not readers—we know context makes courtesy strategic rather than genuine. Literature teaches: sometimes danger wears civilized mask, and courtesy can be weapon rather than warmth.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine you\'ve been messaging someone for months through dating app/social media. The conversations are amazing—deep connection, shared interests, they seem perfect. You finally meet in person and... they\'re completely different. Not deceptive (pictures were accurate, facts were true), but personality doesn\'t match vibe of messages. Text-them was witty, thoughtful, engaged; real-them is awkward, self-absorbed, complaining constantly. You have immediate disappointment: this isn\'t who you fell for. But you\'ve invested months of emotional energy, told friends about them, built fantasies of future together. Walking away means admitting you fell for fantasy, wasted months on someone who doesn\'t exist in reality. So you rationalize: "They\'re just nervous," "They\'ll be better when comfortable," "The real them is in there somewhere." You keep seeing them despite disappointment, hoping real-them will match text-them.',

    parallels: [
      '💬 **Epistolary fantasy vs. reality**: Cathy\'s letter-Linton parallel modern text/online-Person. Both allow curation: choose what to share, edit presentation, show best self. Reality reveals unfiltered whole person. Same disappointment when fantasy crashes against reality.',
      '📱 **Online dating disconnect**: Linton in letters (romantic, sensitive) vs. Linton in person (whiny, demanding) parallels profile-person vs. real-person gap. Modern: amazing conversations before meeting, disappointing reality at first date. Same cognitive dissonance.',
      '💔 **Sunk cost in relationships**: Cathy\'s months of investment makes walking away painful. Modern parallel: "I\'ve put 6 months into this, I can\'t quit now" even though person is wrong for you. Past investment traps you in bad present.',
      '😢 **Weaponized suffering/mental health**: Linton uses genuine illness to obligate Cathy. Modern: partner uses depression/anxiety as excuse for bad behavior, makes you feel cruel for having boundaries, frames their suffering as your responsibility.',
      '🎭 **Love-bombing/strategic niceness**: Heathcliff\'s excessive courtesy parallels manipulators being unusually generous/nice to lower guard before exploitation. Modern: predators grooming through special treatment, abusers being extra romantic before abuse cycle.',
      '🚩 **Rationalizing red flags**: Cathy explains away Linton\'s unpleasantness ("just nervous," "illness affects him"). Modern: "They\'re not usually like this," "They\'ve had hard life," "They\'ll change." Same cognitive dissonance rationalizing warning signs.'
    ],

    discussionPrompt: 'How do we distinguish genuine connection from fantasy based on limited information? Cathy\'s mistake wasn\'t lack of intelligence—it was investing in controlled presentation (letters) without reality-testing through sustained contact. Modern equivalent: building emotional investment through texts/messages/video calls before significant in-person time. Red flags: (1) Conversations are deep but actual shared experiences are minimal, (2) You "know" them intimately but haven\'t seen them handle stress, conflict, daily life, (3) They\'re perfect in messages but dates are disappointing, (4) You\'re rationalizing differences between text-them and real-them. Wisdom: test fantasies against reality BEFORE major emotional/practical investment. Don\'t move in with text-boyfriend; don\'t commit to long-distance relationship based on video calls; don\'t assume online connection will translate to compatibility. And recognize: if you\'re rationalizing ("they\'re just nervous"), you\'re likely defending fantasy against reality.'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '💌',
      name: 'Mediated vs. Face-to-Face Connection',
      explanation: 'Letter relationship created intimacy that doesn\'t survive embodied reality. Distance enabled idealization; proximity reveals unfiltered personality. Thread explores how different communication modes create different relationships—and how investment in mediated fantasy makes reality harder to accept.'
    },
    {
      emoji: '🕸️',
      name: 'Heathcliff\'s Revenge Through Manipulation',
      explanation: 'Doesn\'t need Cathy to love Linton—obligation serves better. Pity, guilt, duty keep people connected when attraction fails. Heathcliff understands: good people can be trapped through compassion. Uses Linton\'s genuine suffering as weapon, makes Cathy\'s kindness her vulnerability.'
    },
    {
      emoji: '🎭',
      name: 'Performance and Reality (Masks)',
      explanation: 'Heathcliff performs courteous host; Linton performed romantic correspondent; Cathy tries to perform devoted visitor. All performing roles serving different agendas. Thread questions: when is behavior genuine vs. strategic? How do we distinguish authentic from performance?'
    },
    {
      emoji: '⚖️',
      name: 'Kindness as Vulnerability',
      explanation: 'Cathy\'s compassion makes her unable to abandon suffering person even when he\'s unpleasant. Her goodness is real and valuable, but also creates vulnerability to manipulation. Thread explores double-edge of empathy: essential virtue that can be exploited.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // 5-7 open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Epistolary Fantasy and Reality-Testing',
      question: 'Cathy\'s mistake was investing emotionally in Linton based on letters without adequate in-person reality-testing. Should letter relationship have prepared her better? Or is disappointment inevitable when fantasy meets reality? Modern application: How much in-person time is needed before we can say we "know" someone? Can text/online connection ever be sufficient basis for major commitment, or must virtual intimacy be tested against sustained physical presence?'
    },
    {
      title: 'Sunk Cost and Walking Away',
      question: 'Cathy has invested months of feelings in Linton. When reality disappoints, should she: (1) Walk away immediately (cutting losses despite past investment), (2) Give relationship time to develop in person (testing if reality can match fantasy), or (3) Acknowledge disappointment but continue from obligation (honor investment)? What determines when past investment should vs. shouldn\'t influence present choice? How do we distinguish "too soon to judge" from "rationalizing red flags"?'
    },
    {
      title: 'Weaponized Suffering and Boundaries',
      question: 'Linton genuinely suffers but uses suffering to obligate Cathy—demanding sympathy, guilting her for absence, making his pain her responsibility. How do we help suffering people while maintaining boundaries? Where is line between compassionate support and enabling weaponized pity? Can we acknowledge someone\'s suffering while still refusing to tolerate mistreatment? Is it cruel to withdraw from relationship with genuinely suffering person if they treat you poorly?'
    },
    {
      title: 'Lockwood as Naive Enabler',
      question: 'Lockwood\'s ignorance facilitates danger: his curiosity leads them to Heights, his presence makes visit seem innocent, his naive trust in Heathcliff\'s courtesy validates the connection. Is he culpable for enabling danger he doesn\'t understand? How responsible are naive people for consequences of their ignorance? Should Nelly have violated Edgar\'s confidence and explained danger to Lockwood to prevent visit? When does keeping secrets cause more harm than revealing them?'
    },
    {
      title: 'Rationalizing Red Flags',
      question: 'Cathy rationalizes Linton\'s unpleasant behavior: "he\'s nervous," "illness makes him irritable," "he\'ll be better when healthier." How do we distinguish legitimate context (this behavior is situational) from rationalization (defending fantasy against reality)? What are signs we\'re rationalizing vs. reasonably giving someone grace? How many disappointing interactions should occur before we admit person isn\'t who we hoped?'
    },
    {
      title: 'Strategic Courtesy and Trusting Behavior',
      question: 'Heathcliff performs courtesy convincingly enough to fool Lockwood. Since genuine courtesy and strategic courtesy look identical, how do we distinguish? Should we evaluate behavior by action (he was polite) or by context/motive (but he has revenge agenda)? Is it paranoid to distrust courteous behavior when context suggests strategy? How do we protect ourselves from manipulation without becoming cynical about genuine kindness?'
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // For teachers: writing prompts, activities, cross-curricular connections
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The First Meeting: Online Fantasy vs. In-Person Reality',
      description: 'Write scene where two people who connected deeply online/through messages meet in person for first time, and reality disappoints expectations. Requirements: (1) Show both perspectives—both had fantasies that don\'t match reality. (2) Include contrast between text communication (where connection was amazing) and in-person interaction (awkward, disappointing). (3) Show cognitive dissonance—each character notices red flags but rationalizes them ("they\'re just nervous," "it\'ll be better next time"). (4) Demonstrate sunk cost dilemma: months of investment make walking away difficult even though connection doesn\'t work in person. (5) Optional: include aftermath—do they admit disappointment and end it, or continue hoping reality will eventually match fantasy?',
      purpose: 'This exercise teaches: (1) Difference between mediated and face-to-face communication, (2) How fantasy based on limited information clashes with reality, (3) Cognitive dissonance and rationalization of red flags, (4) Sunk cost fallacy in emotional investment, (5) Writing contrasting scenes to show gap between expectation and reality. Students learn: online connection doesn\'t guarantee in-person compatibility, investment creates pressure to maintain fantasy, and rationalizing red flags is first step toward staying in wrong relationship. Develops understanding of modern dating dynamics and psychological processes that keep people in disappointing relationships.'
    },

    activity: {
      title: 'Red Flags vs. Context: When to Trust Your Gut vs. Give Grace',
      description: 'Present students with scenarios where person shows concerning behavior that could be: (1) legitimate red flag, or (2) reasonable given context. Example: First date, they complain constantly. Red flag (entitled, negative personality) or context (just had terrible day, nervous)? Small groups discuss each scenario: How do you distinguish? How many concerning incidents before pattern emerges? When does giving grace become rationalizing red flags? Class compiles criteria: What distinguishes legitimate context vs. rationalization? How do we balance not judging too quickly vs. not ignoring warning signs? What role does emotional investment play (do we rationalize more when we\'re invested)?',
      materials: 'Scenario cards, decision criteria worksheets, research on early warning signs in relationships, discussion about cognitive biases that make us rationalize when invested'
    },

    crossCurricular: {
      title: 'Psychology: Cognitive Dissonance, Sunk Costs, and Relationship Investment',
      description: 'Pair chapter with: (1) Psychology: Cognitive dissonance theory (Festinger), sunk cost fallacy in decision-making, online disinhibition effect, idealization vs. realistic acceptance in relationships, confirmation bias when invested. (2) Communication Studies: Computer-mediated communication vs. face-to-face, how different modes create different relationships, self-presentation in online contexts, cues filtered out theories. (3) Behavioral Economics: Sunk cost fallacy in economic decisions, loss aversion, why past investment irrationally influences future choices. Explore: Why do we resist acknowledging mistakes when invested? How does communication medium shape relationship? What makes us defend fantasy against evidence?',
      subjects: ['Psychology', 'Communication Studies', 'Behavioral Economics', 'Decision Science']
    }
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating one-liner with gold gradient styling
  // ===================================================================
  whyLiteratureMatters: getThenVsNowMessage(22),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Build anticipation for next chapter
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🚪',
    title: 'The Return Visits Begin: Cathy Drawn Back Despite Disappointment',
    preview: 'Despite disappointing reality of Linton\'s personality, Cathy cannot abandon him. Heathcliff\'s trap is working: her kindness, combined with Linton\'s visible suffering and her emotional investment, creates obligation stronger than attraction ever could. She begins returning to Wuthering Heights for visits, telling herself she\'s helping sick cousin but really caught in web of pity, guilt, and sunk costs. Each visit reveals more of Linton\'s unpleasant nature—he\'s demanding, ungrateful, manipulative—but also shows his deteriorating health, which triggers her compassion anew. Edgar senses something is wrong: Cathy seems distracted, makes excuses to walk alone, returns from walks in strange moods. He questions her but she\'s not quite lying (doesn\'t explicitly deny visiting Heights) while not telling truth either. Nelly watches helplessly: she warned, she told Edgar about dangers, but cannot physically prevent Cathy\'s choices. Meanwhile, Heathcliff tightens grip: increases pressure on Linton to be more demanding, makes Cathy\'s visits seem increasingly necessary (Linton "gets worse" when she\'s away), positions himself as reasonable adult supervising young people\'s innocent friendship.',
    hookQuestion: 'Will Cathy recognize trap before it\'s too late, or will obligation, pity, and sunk costs keep her connected to Linton until Heathcliff springs final phase of revenge? Can Edgar\'s protective boundaries hold, or has transgression already breached them irreparably? And how much worse can Linton get before Cathy\'s compassion reaches its limits—or will guilt and duty keep her bound regardless of how he treats her? Next: the trap tightens, visits become routine, and Cathy walks deeper into danger she still doesn\'t fully recognize.'
  }
}

