/**
 * JANE EYRE - CHAPTER 14
 * 
 * Evening conversations deepen as Rochester reveals his cynical philosophy
 * and past "sins" without details, testing whether Jane will excuse his
 * self-serving rationalizations
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter14: ChapterData = {
  number: 14,
  title: 'Testing Moral Boundaries',
  
  readingTime: 22,
  pages: 13,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Rochester begins summoning Jane regularly for evening conversations, during which he reveals fragments of his past—vague mentions of mistakes, sins, and regrets—while philosophizing about redemption and testing whether Jane will judge him harshly or offer the cheap absolution he seems to be seeking.',
    
    full: [
      'Rochester establishes a pattern of calling for Jane in the evenings after Adèle goes to bed. These aren\'t casual conversations—they\'re intense, personal exchanges where Rochester dominates while simultaneously seeming to need Jane\'s attention. He sits by the fire with Jane positioned where he can study her face, and he talks: about his travels, his cynicism, his dissatisfaction with life, his belief that he\'s been more sinned against than sinning. He drops hints about past mistakes without giving specifics, watching Jane\'s reactions carefully.',
      
      'The conversation turns philosophical and uncomfortable. Rochester presents a hypothetical: suppose a man made grave errors in youth—not criminal acts, but moral failures that nevertheless poisoned his life. Years later, he\'s hardened, cynical, no longer innocent. Then he encounters someone pure and good. Can association with this pure person redeem him? Or will he corrupt them instead? Is reformation even possible for someone stained by past sins? Rochester presents this as abstract philosophy, but Jane senses he\'s talking about himself. He\'s testing her: will she say past sins can be excused? Will she offer easy forgiveness? Will she agree that a good woman can save a bad man through love?',
      
      'Jane refuses to play along. She tells Rochester that reformation is possible—but only through self-discipline and genuine repentance, not through using another person\'s goodness as spiritual laundering. She challenges his self-pitying narrative: you say you\'re a victim of circumstances, but you made choices. You can\'t blame fate or other people for your moral state. True redemption requires taking responsibility, not finding someone innocent to absolve you. Rochester seems both frustrated and impressed by her refusal to offer cheap grace. He calls her his "good angel" but Jane rejects the role: she\'s not his salvation, and he shouldn\'t expect her to be.',
      
      'The chapter ends with Rochester pressing the conversation into dangerous territory—making Jane feel both flattered by his confidences and uneasy about their intimacy. He treats her sometimes as intellectual equal, sometimes as moral authority, sometimes as audience for his performance. Jane recognizes the conversations are seductive—his attention, his vulnerability, his apparent need for her opinion. But she also senses manipulation: he\'s constructing a narrative where he\'s the romantic tormented hero and she\'s the pure maiden who redeems him. Jane resists this script even as she\'s drawn to him. She\'s learning that Rochester\'s honesty may itself be a form of dishonesty—revealing just enough to seem vulnerable while concealing what actually matters.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Moral Testing and Manipulation',
      definition: 'Using hypothetical scenarios, philosophical questions, or confessions to assess another person\'s values, boundaries, and willingness to excuse transgression; often a way to secure approval in advance.',
      context: 'Rochester presents Jane with hypotheticals about sinful men seeking redemption through pure women. He\'s not asking for abstract philosophy—he\'s testing whether Jane will excuse his past (which he hasn\'t fully revealed) and whether she\'ll accept the role of redeemer. This is manipulation disguised as seeking moral guidance.',
      whyItMatters: 'This pattern—confessing vaguely to "sins" without specifics, asking if they\'re forgivable—is common in manipulative relationships. The confessor gets to feel absolved without actually disclosing or changing behavior. Jane\'s refusal to offer easy forgiveness is crucial: she won\'t let Rochester use her goodness to excuse his choices. Recognizing moral testing helps readers identify when someone is seeking permission rather than guidance.'
    },
    {
      term: 'The Redemption Narrative',
      definition: 'A story framework where a "fallen" or morally compromised person is saved/redeemed through the love or goodness of a pure person, often a woman; commonly used to justify problematic relationships.',
      context: 'Rochester is constructing a redemption narrative: I was corrupted by circumstances and bad people, but now I\'ve met someone good (Jane), and perhaps her purity can save me. This narrative makes Jane responsible for his moral state—if she loves him, she redeems him; if she judges him, she\'s heartless. Jane recognizes and rejects this framework.',
      whyItMatters: 'The redemption narrative is seductive but dangerous. It positions women as moral saviors responsible for men\'s behavior, while allowing men to avoid accountability ("I couldn\'t help what I became until I met you"). Jane\'s resistance—"you\'re responsible for your own reformation"—is radical. She refuses to be Rochester\'s salvation project. Understanding this narrative helps readers identify when love is being confused with rescue or moral responsibility.'
    },
    {
      term: 'Selective Vulnerability',
      definition: 'Revealing enough pain, struggle, or past hurt to create intimacy and sympathy, while strategically withholding information that would change how the disclosure is received; vulnerability as strategy rather than authenticity.',
      context: 'Rochester shares that he\'s suffered, made mistakes, feels regret—but he never specifies what he\'s done or to whom. He offers vulnerability (I\'m in pain) without accountability (here\'s specifically what I did wrong). This creates sympathy without consequences. Jane is moved by his apparent pain but recognizes something is being hidden.',
      whyItMatters: 'Selective vulnerability is common in manipulative relationships. Sharing just enough to create emotional connection while withholding what would enable informed judgment. Rochester tells Jane he\'s sinned without saying how (hiding Bertha, manipulating Blanche, possibly other relationships). True vulnerability includes accountability. Readers learn to distinguish between genuine openness and strategic disclosure designed to control perception.'
    },
    {
      term: 'Cheap Grace',
      definition: 'Forgiveness or absolution offered without repentance, restitution, or changed behavior; the idea that being forgiven should be easy and require nothing of the person who caused harm.',
      context: 'Rochester wants what theologian Dietrich Bonhoeffer called "cheap grace": forgiveness without transformation. He wants Jane to say "your past doesn\'t matter" without him having to disclose it, address it, or make amends. Jane refuses, insisting that true reformation requires "resisting temptation" and "conquering" one\'s worse nature—actual work, not just finding someone willing to overlook wrongdoing.',
      whyItMatters: 'Cheap grace is psychologically and morally problematic. It lets people feel absolved without changing, and it makes those who withhold easy forgiveness seem judgmental. Jane\'s insistence on genuine repentance rather than cheap grace is ethically sophisticated: she honors Rochester enough to expect actual moral accountability rather than just emotional absolution. This matters for anyone navigating relationships with people seeking forgiveness without transformation.'
    },
    {
      term: 'The "Good Angel" Trap',
      definition: 'Positioning someone as your moral guide, savior, or source of goodness, which flatters them while burdening them with responsibility for your behavior and making it harder for them to criticize you.',
      context: 'Rochester calls Jane his "good angel" and suggests her influence might reform him. This is flattering—Jane matters, she\'s important, she has power to effect change. But it\'s also a trap: if she\'s his angel, she can\'t judge him (angels forgive), she\'s responsible for his improvement (if he doesn\'t reform, she failed), and she must stay (abandoning him would be cruel). Jane recognizes and rejects this role.',
      whyItMatters: 'The "good angel" dynamic appears in many relationships where one person positions the other as their salvation. It seems like a compliment but it\'s a burden. It makes leaving feel like moral failure (you abandoned me when I needed you) and makes criticism feel cruel (I trusted you to believe in me). Jane\'s refusal—"I am not an angel... I am only a plain governess"—maintains boundaries. She\'ll engage intellectually but won\'t accept responsibility for Rochester\'s soul.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'This chapter showcases Jane\'s moral sophistication and her refusal to be manipulated by Rochester\'s seductive vulnerability. When Rochester presents hypotheticals about sinful men seeking redemption through pure women, Jane doesn\'t take the bait. She tells him that reformation is possible—but only through self-discipline and genuine repentance, not through using someone else\'s goodness as absolution. She refuses to offer cheap grace. When Rochester calls her his "good angel," Jane explicitly rejects the role: "I am not an angel... and I will not be till I die: I am a presently mortal and fallible creature." She won\'t be positioned as his savior or made responsible for his moral state. Jane is drawn to Rochester—his attention is intoxicating, his vulnerability seems intimate—but she maintains critical distance. She recognizes that his confessions may be performances designed to secure her sympathy without actually disclosing or changing. Jane is learning to navigate emotional manipulation while remaining compassionate. She doesn\'t become cold or judgmental; she stays engaged but refuses to sacrifice her moral clarity for emotional intimacy.',
      keyTrait: {
        emoji: '⚖️',
        text: 'Morally Clear'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester reveals himself more fully this chapter—and what\'s revealed is concerning. He presents as cynical and world-weary, someone who\'s been "sinned against" as much as sinning. He talks vaguely about past mistakes that "stained" him, about being corrupted by circumstances and bad influences. But he never gives specifics—just enough to seem vulnerable without enabling judgment. He philosophizes about whether a good person can redeem a bad one, clearly positioning Jane as potential redeemer. He oscillates between seeming to genuinely seek moral guidance and testing whether Jane will excuse anything he reveals. He calls her his "good angel" and suggests her influence might reform him—flattering but also burdening her with responsibility for his behavior. Rochester is revealed as someone who wants absolution without accountability, sympathy without disclosure, forgiveness without transformation. He\'s sophisticated enough to present this as philosophical inquiry rather than manipulation, but Jane sees through it. By chapter\'s end, readers should be concerned: Rochester is constructing a narrative where his past (whatever it is) should be excusable because he\'s suffered and because he\'s found Jane. This is romantic but ethically suspect.',
      keyTrait: {
        emoji: '🎭',
        text: 'Self-Justifying'
      }
    },
    {
      name: 'Adèle Varens',
      development: 'Adèle is again conveniently dismissed before the serious adult conversation. Her absence enables the intimate, morally complex exchange between Jane and Rochester that couldn\'t happen with a child present. This pattern—Adèle removed whenever emotional intensity rises—reinforces that Rochester wants Jane separate from her professional role. He\'s not interested in Jane-as-governess but Jane-as-person, specifically Jane-as-potential-confessor/redeemer.',
      keyTrait: {
        emoji: '💤',
        text: 'Narratively Removed'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'I am not an angel... and I will not be till I die: I am a presently mortal and fallible creature, and I require forgiveness for my faults just as much as you do for yours.',
      analysis: 'Jane explicitly rejects Rochester\'s attempt to position her as "good angel"—his moral superior and potential savior. By insisting she\'s "mortal and fallible" and also requires forgiveness, Jane refuses the dynamic Rochester is constructing. She won\'t be his redeemer because she\'s not morally pure enough to redeem anyone. This is brilliant psychological boundary-setting: Jane makes herself unfit for the role Rochester wants her to play, which protects her from being burdened with his moral rehabilitation.'
    },
    {
      text: 'Repentance is said to be its cure: and could you reform? Could you ever be good? ...I have faith in you, sir; but I believe that if you had sought reformation through different means—sought it earlier, and with less dubious aid—you might by this time have been farther on the way towards it.',
      analysis: 'Jane challenges Rochester\'s redemption narrative. He wants to believe that Jane\'s love/goodness can reform him effortlessly. Jane says: reformation requires work, not just finding the right woman. The phrase "dubious aid" is cutting—she\'s suggesting that using another person as your moral fix is itself ethically suspect. Jane refuses to let Rochester position his past sins as something she can absolve. She insists he\'s responsible for his own moral state.'
    },
    {
      text: 'If a man cannot reform himself, he is in a bad way—no woman can reform him. If he cannot learn self-discipline, he cannot learn it from association with another, however pure.',
      analysis: 'This is Jane\'s philosophical rejection of the "good woman saves bad man" narrative. She\'s arguing that moral transformation must be internal, chosen, disciplined—not something that happens automatically through proximity to virtue. This challenges the Romantic idea that love redeems. Jane is saying: you can\'t outsource your moral work to someone else. If Rochester wants redemption, he must do it himself. Jane can\'t—and won\'t—save him.'
    },
    {
      text: 'People\'s good opinion, once lost, is lost forever. ...The world may not be very just; but people are not always good judges either.',
      analysis: 'Rochester argues that society is too harsh, that once you\'ve made mistakes you\'re permanently judged. He\'s setting up: the world condemns me, but you, Jane, are different—you\'ll understand and forgive. This is manipulation: positioning Jane as more compassionate than "the world," which makes refusing forgiveness seem cold. But notice Rochester never says what he did or why society judged him. He wants sympathy for being judged without revealing why the judgment occurred.'
    },
    {
      text: 'You are my sympathy—my better self—my good angel. I am bound to you with a strong attachment. I think you good, gifted, lovely: a fervent, a solemn passion is conceived in my heart; it leans to you.',
      analysis: 'Rochester explicitly articulates the "you\'re my salvation" narrative. By calling Jane his "better self" and "good angel," he makes her responsible for his moral state. The language is seductive—who doesn\'t want to be someone\'s "better self"? But it\'s also burdening: if Jane is his better self, then she\'s responsible if he acts badly. This dynamic makes Jane accountable for Rochester\'s behavior while absolving him. The "solemn passion" language is also concerning—he\'s making moral dependency sound romantic.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Moral Accountability vs. Cheap Forgiveness',
        explanation: 'The chapter explores what genuine moral accountability requires. Rochester wants Jane to forgive vaguely-referenced past sins without disclosing them, changing behavior, or making amends. This is "cheap grace"—absolution without transformation. Jane refuses. She insists that reformation requires actual work: self-discipline, resisting temptation, conquering one\'s worse nature. She won\'t offer forgiveness when she doesn\'t know what she\'s forgiving or whether Rochester has actually changed. Brontë is arguing that true morality requires accountability, not just finding someone willing to excuse you. Cheap forgiveness may feel compassionate but it enables continued harm. Jane\'s "tough love" approach—I believe you can reform but you must do it yourself—is more genuinely moral than easy absolution would be.'
      },
      {
        name: 'The Danger of Redemption Narratives',
        explanation: 'Rochester is constructing a redemption narrative: I was corrupted by circumstances, but now I\'ve met you (pure Jane), and perhaps loving you can save me. This narrative is seductive and dangerous. It makes Jane responsible for Rochester\'s moral state—if she loves him, he\'s redeemed; if she judges him, she\'s cruel. It positions his past sins (whatever they are) as forgivable because he\'s suffered and found the "right" woman. Brontë critiques this narrative through Jane\'s resistance. Jane refuses to be Rochester\'s redeemer: "If a man cannot reform himself, no woman can reform him." She insists on moral agency—Rochester must choose transformation; Jane can\'t do it for him. The novel warns against the romantic idea that love conquers character flaws without work.'
      },
      {
        name: 'Vulnerability as Strategy',
        explanation: 'Rochester shares vulnerability—he\'s suffered, he\'s made mistakes, he\'s lonely—but it\'s selective vulnerability designed to create sympathy without accountability. He confesses to "sins" without specifying them. He admits to being "stained" without explaining how. He reveals pain without disclosing what he\'s done to others. This creates emotional intimacy (I\'m trusting you with my hurt) while avoiding moral judgment (you don\'t know enough to critique me). Jane is moved but also suspicious. She recognizes that Rochester\'s openness may be performance—revealing just enough to seem honest while concealing what matters. The chapter explores how vulnerability can be weaponized: sharing pain to manipulate sympathy without offering actual accountability.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Hypothetical as Confession',
        explanation: 'Rochester presents his situation as hypothetical philosophy: "Suppose a man made errors in youth that stained him..." But it\'s clearly not hypothetical—he\'s talking about himself while maintaining deniability. This technique allows Rochester to confess without confessing. If Jane responds sympathetically, he\'s secured forgiveness in advance. If she\'s judgmental, he can claim "it was just a hypothetical." The hypothetical confession is manipulation: testing the waters without risking full disclosure.',
        example: 'Rochester: "Is the wanderer penitent and reclaimed now? ...is he justified in daring the world\'s opinion, in order to attach to him forever this gentle, gracious, genial stranger?" He\'s asking if Jane will excuse whatever he\'ve done—but he\'s not saying what he\'ve done. The hypothetical format lets him gauge her response while maintaining deniability.'
      },
      {
        name: 'Dialogue as Moral Debate',
        explanation: 'Brontë uses the Rochester-Jane conversation as philosophical debate about redemption, accountability, and moral transformation. Each character articulates a position: Rochester argues for forgiveness based on suffering and good intentions; Jane argues for accountability and self-directed reformation. The dialogue isn\'t just character development—it\'s Brontë working through ethical questions. Readers are invited to judge: whose moral philosophy is more sound? This makes the conversation intellectually engaging beyond just romantic tension.',
        example: 'The exchange about whether a pure person can reform a corrupted one isn\'t just about Rochester and Jane—it\'s about whether love redeems character, whether proximity to goodness transforms, whether we\'re responsible for others\' moral states. Brontë gives both positions articulate expression, forcing readers to think rather than just feel.'
      },
      {
        name: 'Narrative Unreliability and Perspective',
        explanation: 'Everything we know about Rochester comes filtered through either Rochester\'s self-presentation or Jane\'s perception. Rochester presents himself as victim-turned-cynic who might be redeemable. But readers should be suspicious: he controls what he reveals, and he\'s testing Jane\'s responses before deciding what to disclose. Jane is drawn to him but also doubts him. Adult Jane narrating shows awareness that younger Jane may have been manipulated. The unreliability reminds readers: we\'re not getting objective truth, just performances and perceptions.',
        example: 'When Rochester talks about being "sinned against" and corrupted by others, we have only his word. When he claims Jane might reform him, we don\'t know if he\'s sincere or manipulative. The narrative forces readers to judge character with incomplete information—much like real relationships, where we must assess trustworthiness without knowing everything.'
      },
      {
        name: 'The Seduction of the Reader',
        explanation: 'Brontë doesn\'t just show Rochester trying to seduce Jane—she seduces readers too. Rochester\'s vulnerability, his attention to Jane, his apparent need for her, his romantic language—all of this is attractive to readers who want Jane to find love. We want to excuse Rochester\'s vagueness, believe his redemption is possible, hope Jane will soften. But Brontë plants clues that something is wrong: he won\'t specify his sins, he wants forgiveness without disclosure, he makes Jane responsible for his morality. The novel tests readers: will you, like Jane initially, be drawn in? Or will you maintain critical distance?',
        example: 'When Rochester calls Jane his "good angel" and speaks of "solemn passion," it\'s romantic and readers may swoon. But Brontë also shows Jane resisting: "I am not an angel." The novel rewards readers who notice the manipulation, not just the romance. This is sophisticated narrative technique: making readers complicit in Jane\'s seduction so they experience her dilemma viscerally.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine someone—let\'s call them Alex—working closely with an older, charismatic colleague, Sam, who starts seeking them out for late-night work conversations that become increasingly personal. Sam shares that they\'ve made mistakes in past relationships, been hurt by people who took advantage of their kindness, become cynical and closed-off. Sam hints at past actions they regret but never gives details—just says things like "I\'ve done things I\'m not proud of" or "if you knew my history, you might not want to be around me." Sam talks philosophically: can damaged people be healed by loving the right person? Does a painful past excuse present behavior? Sam starts calling Alex their "only real friend," their "moral compass," suggesting that Alex\'s presence makes them want to be better. Alex feels flattered by the trust, moved by Sam\'s apparent vulnerability, valued as someone who matters to this complex person. But Alex also feels uneasy: Why won\'t Sam specify what they\'re sorry for? Why does every confession come with a request for preemptive forgiveness? Why does Sam seem to be testing whether Alex will excuse anything as long as it\'s framed as past suffering? Alex starts to suspect: Is Sam genuinely seeking guidance, or securing absolution in advance for behavior they haven\'t disclosed—or stopped?',
    
    parallels: [
      '🔹 **Vague Confessions**: When someone confesses to "mistakes" or "being difficult" in past relationships without specifics, they get sympathy without accountability. You feel trusted with their vulnerability, but you actually don\'t know what you\'re forgiving. This is common in early dating: "I\'ve been hurt before," "my ex said I was controlling," "I have trust issues." These confessions create intimacy without enabling judgment.',
      '🔹 **The "You Make Me Want to Be Better" Line**: Telling someone they inspire you to improve sounds romantic but it makes them responsible for your behavior. If they love you, you\'ll be good; if they leave, your backsliding is their fault. It positions your moral transformation as dependent on their presence, which traps them. Healthy change is self-motivated, not contingent on a relationship.',
      '🔹 **Testing Forgiveness in Advance**: Rochester asks Jane hypothetically if past sins are forgivable before revealing what the sins are. Modern equivalent: "If I told you I\'d done something really bad, would you still care about me?" This tests whether you\'ll offer blanket forgiveness, which secures absolution before disclosure. It\'s manipulation disguised as vulnerability.',
      '🔹 **Strategic Vulnerability**: Sharing enough pain to create sympathy (I\'ve been hurt, I\'ve suffered, I have regrets) while withholding information that would enable judgment (what did you do specifically, to whom, have you made amends?) creates emotional connection without accountability. Modern therapy culture has normalized "vulnerability," but there\'s a difference between genuine openness and strategic disclosure designed to manipulate perception.',
      '🔹 **The Redemption Narrative in Romance**: The idea that love redeems character without work is everywhere: bad boys reformed by good girls, players who "just needed to meet the right person," cynics who become believers because of one special relationship. This narrative is seductive but harmful. It makes partners responsible for each other\'s moral behavior and suggests character change happens through relationship rather than self-work.',
      '🔹 **Positioning Someone as Your "Good Angel"**: Calling your partner your "better half," "moral compass," or "angel" seems romantic but it burdens them with responsibility for your behavior. It makes criticism feel cruel (I thought you believed in me) and leaving feel like abandonment (you gave up on me). Healthy relationships have equals, not saviors and saved.',
      '🔹 **"I Was Shaped by Circumstances"**: Rochester presents himself as victim of circumstances—bad influences, unfortunate situations, being sinned against. Many people frame their character flaws this way: my childhood, my past relationships, my trauma made me like this. While circumstances matter, adult moral agency requires acknowledging: you make choices now. Refusing to take responsibility by blaming formative experiences is self-infantilizing.'
    ],
    
    discussionPrompt: 'Have you encountered someone who confessed vaguely to past "mistakes" without specifics? How did you respond—with sympathy, or with questions about what actually happened? When someone tells you that you make them "want to be better," does that feel like a compliment or a burden? How do you distinguish between genuine vulnerability (I\'m sharing this painful truth) and strategic vulnerability (I\'m sharing just enough to manipulate your sympathy)? When is it appropriate to withhold forgiveness until you have enough information to make informed judgment?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🎭',
      name: 'Performance and Authenticity',
      explanation: 'Rochester performs vulnerability and confession, but is it genuine or strategic? He reveals enough to seem honest while concealing what matters (Bertha, his deceptions). Jane is learning to distinguish between authentic openness and performed intimacy. This thread will culminate at the wedding when Rochester\'s performance is exposed—he\'s been confessing to vague "sins" while hiding the specific sin (bigamy) that would change everything.'
    },
    {
      emoji: '🪢',
      name: 'Moral Responsibility',
      explanation: 'Jane refuses to let Rochester outsource his moral responsibility to her. She won\'t be his redeemer because that would make her accountable for his behavior. Throughout the novel, Jane insists on moral agency—for herself (she won\'t be Rochester\'s mistress even when it would be easier) and for others (Rochester must reform himself). This thread asks: are we responsible for others\' moral states, or must each person do their own ethical work?'
    },
    {
      emoji: '🕵️',
      name: 'Incomplete Information',
      explanation: 'Rochester confesses to "sins" without specifying them, and Jane must judge his character with incomplete information. This thread runs throughout: What is Grace Poole doing? Why does Rochester leave abruptly? Who laughs on the third floor? Readers and Jane navigate a mystery where crucial information is withheld. The novel asks: how do we assess character and make commitments when we don\'t know everything?'
    },
    {
      emoji: '⚖️',
      name: 'Cheap Grace vs. True Accountability',
      explanation: 'Rochester wants forgiveness without transformation, sympathy without disclosure, absolution without amends—"cheap grace." Jane insists on accountability: reformation requires work, not just finding someone willing to excuse you. This philosophical divide will matter when Rochester\'s deception is revealed: will Jane offer cheap grace (he suffered, so his lies are forgivable) or demand accountability (he chose deception, he must face consequences)?'
    },
    {
      emoji: '🔮',
      name: 'Testing and Manipulation',
      explanation: 'Rochester constantly tests Jane—her honesty (do you think me handsome?), her values (would you excuse a sinful man?), her affections (he pretends to court Blanche). This chapter reveals testing as manipulation: securing favorable responses before disclosure. Jane resists being tested, but Rochester continues. Eventually, Jane will test Rochester in return: leaving him to see if he\'ll change. The power dynamic of testing and who has authority to test whom runs throughout.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Cheap Grace',
      question: 'Rochester wants Jane to forgive unspecified past sins—essentially asking for absolution before accountability. Jane refuses, insisting reformation requires genuine work, not just finding someone willing to excuse you. Is Jane being harsh, or is her "tough love" actually more moral than cheap forgiveness? When should forgiveness be conditional on knowing what you\'re forgiving?'
    },
    {
      title: 'The Redemption Narrative',
      question: 'Rochester suggests that loving Jane might reform him—that a good woman\'s influence can save a morally compromised man. Jane rejects this: "If a man cannot reform himself, no woman can reform him." Is the idea that love redeems character romantic or dangerous? Why might Brontë critique the "good woman saves bad man" narrative even in a love story?'
    },
    {
      title: 'Vulnerability as Strategy',
      question: 'Rochester shares vulnerability (I\'ve suffered, I have regrets) while withholding specifics (what did I do, to whom, why?). Is this genuine openness or strategic manipulation? How can you tell the difference between someone being genuinely vulnerable and someone using vulnerability to manipulate sympathy without enabling judgment?'
    },
    {
      title: 'The "Good Angel" Dynamic',
      question: 'Rochester calls Jane his "good angel" and "better self," making her responsible for his moral state. Jane explicitly rejects this role. Why is being someone\'s "good angel" problematic even though it sounds flattering? What happens when one person in a relationship is positioned as moral savior for the other?'
    },
    {
      title: 'Moral Accountability',
      question: 'Rochester frames his character as shaped by circumstances—he was corrupted by bad influences and unfortunate situations. How much does context excuse behavior? At what point does explaining your flaws by reference to past harm become avoiding responsibility for present choices? Where\'s the line between compassion for someone\'s history and enabling their refusal to change?'
    },
    {
      title: 'Testing in Relationships',
      question: 'Rochester tests whether Jane will excuse his vaguely-referenced sins before revealing what they are. Why is this testing problematic? Is it ever legitimate to test a partner\'s values or boundaries? What\'s the difference between: (1) seeing how someone responds naturally in various situations, vs. (2) deliberately creating scenarios to extract specific responses?'
    },
    {
      title: 'Reader Seduction',
      question: 'Brontë makes Rochester\'s vulnerability attractive to readers—we want Jane to forgive him, believe in his redemption, offer the compassion he seeks. But she also plants warning signs. How does the novel seduce readers into sympathy while simultaneously warning us to maintain critical distance? What does this teach about how we assess people we\'re attracted to?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'cheap-grace-accountability',
      title: 'Cheap Grace vs. Moral Accountability: The Ethics of Forgiveness',
      question: 'Rochester wants Jane to forgive unspecified sins before he reveals what they are. Is Jane right to refuse, or is she being unforgiving? What does genuine accountability require?',
      aiResponse: `
**The Problem with Cheap Grace**

Rochester presents Jane with a seductive offer: forgive me for vague "sins" I won\'t specify, and believe that your goodness can reform me. This is what theologian Dietrich Bonhoeffer called "cheap grace"—forgiveness without repentance, absolution without transformation, mercy without accountability.

**What Rochester Wants:**

**Forgiveness Without Disclosure:**
- He confesses to having "sinned" without saying how
- He admits to being "stained" without explaining what stained him
- He reveals regret without specifying what he regrets
- He wants sympathy for having done wrong without enabling judgment about what the wrong was

**Absolution Without Amends:**
- No apology to people he\'s harmed
- No restitution for damage done
- No attempt to repair broken trust
- Just: please forgive me anyway because I suffered too

**Reformation Through Relationship:**
- He suggests Jane\'s love might fix him
- Implies proximity to her goodness will transform him
- Makes his moral improvement contingent on her acceptance
- Positions her as responsible for his character

**Why Jane Refuses:**

**She Insists on Informed Judgment:**

Jane essentially says: I can\'t forgive what I don\'t know about. Meaningful forgiveness requires understanding:
- What harm was done
- To whom
- Whether there\'s genuine repentance (not just regret at being caught/judged)
- Whether behavior has changed

Without this information, "forgiveness" is just:
- Agreeing not to judge before you know what you\'d be judging
- Preemptive absolution that enables continued harm
- Emotional support without moral accountability

**She Refuses to Be His Moral Savior:**

"If a man cannot reform himself, no woman can reform him."

Jane rejects the dynamic where:
- Rochester\'s moral transformation depends on her love
- She\'s responsible for his character development
- His failures become her failures (she didn\'t love/help him enough)
- Leaving him would be abandoning him morally

**She Demands Self-Directed Change:**

Jane tells Rochester reformation requires:
- **Resisting temptation**: Active choice to behave differently
- **Conquering worse nature**: Self-discipline and moral effort  
- **Repentance**: Genuine acknowledgment of wrongdoing
- **Changed behavior**: Not just feeling bad, but acting better

None of this can be outsourced to another person. Jane insists Rochester do his own moral work.

**Is Jane Being Harsh?**

**Arguments That She Is:**

**1. Compassion Requires Grace:**
- Everyone makes mistakes
- Demanding full disclosure before forgiveness seems unloving
- Shouldn\'t love mean accepting people despite their flaws?
- Her refusal to forgive seems cold

**2. He\'s Clearly in Pain:**
- Rochester has suffered
- He shows genuine regret
- He\'s reaching out for help
- Withholding forgiveness adds to his suffering

**3. People Need Support to Change:**
- Moral transformation often requires loving relationships
- Believing in someone\'s capacity to improve helps them improve
- Jane\'s conditional acceptance might prevent his growth

**Arguments That She\'s Not Harsh:**

**1. Cheap Grace Enables Harm:**
- Forgiving without knowing what you\'re forgiving means you can\'t assess:
  - Whether there\'s genuine change
  - Whether reconciliation is safe
  - Whether trust should be rebuilt
- Blanket forgiveness before disclosure enables continued problematic behavior

**2. True Compassion Requires Accountability:**
- Excusing someone\'s behavior without requiring change doesn\'t help them—it infantilizes them
- Saying "your past doesn\'t matter" when you don\'t know the past is false compassion
- Real love says: I believe you can do better, so I won\'t pretend your behavior is acceptable

**3. Jane Can\'t Absolve What She Doesn\'t Know:**
- Rochester might have harmed others Jane knows nothing about
- She has no standing to forgive on behalf of people he\'s hurt
- Only the harmed party can offer meaningful forgiveness

**4. Rochester Hasn\'t Actually Changed:**
- He wants forgiveness now, before transformation
- He\'s not asking "I did X, I\'ve tried to make amends, can you forgive me?"
- He\'s asking "Will you forgive X even though I won\'t tell you what X is?"
- This is seeking permission, not forgiveness

**What Genuine Accountability Requires:**

**Full Disclosure:**
- Specific description of harm done
- To whom, when, why
- No minimizing, no euphemizing
- Complete honesty about actions and their impact

**Genuine Repentance:**
- Not just regret (I feel bad)
- Not just remorse (I wish I hadn\'t been caught)
- But repentance: I was wrong, I hurt people, I take responsibility

**Amends Where Possible:**
- Apology to those harmed
- Restitution if feasible
- Acknowledgment that some harm can\'t be undone
- Commitment to not repeating the behavior

**Changed Behavior:**
- Not just promising to be better
- Actually being better
- Demonstrating through actions, not just words
- Sustained change over time

**Respect for Consequences:**
- Understanding that forgiveness doesn\'t erase consequences
- Some trust, once broken, can\'t be fully rebuilt
- Some relationships, once damaged, can\'t be restored
- Accepting this without resentment

**Modern Applications:**

**In Relationships:**

**Cheap Grace Sounds Like:**
- "I\'ve done things I\'m not proud of, but that\'s the past"
- "If you loved me, you\'d accept me as I am"
- "You\'re the only one who understands me"
- "I can\'t change without your support"

**Real Accountability Sounds Like:**
- "Here\'s specifically what I did wrong: [details]"
- "Here\'s the impact on people I harmed: [acknowledgment]"
- "Here\'s what I\'m doing to change: [concrete actions]"
- "I understand if you need space/boundaries while I work on this"

**In Public Discourse:**

**Cheap Grace:**
- Celebrity apologies that are vague ("mistakes were made")
- Non-apologies ("I\'m sorry if anyone was offended")
- Framing accountability as "cancel culture"
- Demanding immediate forgiveness without changed behavior

**Real Accountability:**
- Specific acknowledgment of harm
- Apology to those actually harmed (not to "anyone offended")
- Concrete steps toward repair and change
- Acceptance that some consequences are permanent

**Why This Matters:**

**For Jane and Rochester:**

Jane\'s refusal to offer cheap grace is ethically sophisticated. She\'s saying:
- I won\'t absolve you without knowing what I\'m absolving
- I won\'t take responsibility for your moral transformation
- I believe you can change, but you must do it yourself
- If you want forgiveness, you must offer full disclosure and genuine change

This protects Jane from being manipulated and protects Rochester from avoiding accountability.

**Later in the novel**, when Rochester\'s deception is revealed (Bertha, the fake engagement to Blanche, trying to make Jane his mistress), Jane\'s refusal of cheap grace will matter enormously. He\'ll want her to excuse everything because he loves her. She\'ll refuse: love doesn\'t erase wrongdoing.

**For Readers:**

This chapter teaches:
- Forgiveness should be informed, not blind
- Compassion doesn\'t require accepting harmful behavior
- You can believe in someone\'s capacity to improve while still requiring they do the work
- "Tough love" that demands accountability is more genuinely loving than cheap grace that enables harm

**For Discussion:**

Have you encountered someone who wanted forgiveness before disclosure—who asked if you\'d still accept them "even if" without saying what the "if" was? How did you respond?

When is withholding forgiveness the more compassionate act? How do you balance accountability with grace?

**The Takeaway:**

Jane\'s refusal to offer cheap grace isn\'t harsh—it\'s ethical. Genuine accountability requires disclosure, repentance, amends, and changed behavior. Forgiving without these isn\'t compassion; it\'s enabling. Jane respects Rochester enough to demand his actual moral growth rather than accepting performative regret. This is what real love requires: holding people accountable while believing in their capacity to do better. Cheap grace may feel kinder in the moment, but it ultimately harms both the person seeking forgiveness (by letting them avoid growth) and the person offering it (by making them complicit in continued harm).
      `
    },
    {
      id: 'redemption-narrative-danger',
      title: 'The Redemption Narrative: Why "Love Saves Bad Man" Is Dangerous',
      question: 'Rochester suggests that Jane\'s love might reform him. Why does Jane—and Brontë—resist this romantic narrative? What\'s wrong with the idea that a good woman can save a morally compromised man?',
      aiResponse: `
**The Seductive Redemption Narrative**

Rochester is constructing a story: I was corrupted by circumstances and bad people, but now I\'ve found you (pure, good Jane), and perhaps loving you can redeem me. This narrative appears in countless stories: Beauty tames the Beast, good girl reforms bad boy, love conquers character flaws. It\'s romantic, flattering to the "redeemer," and deeply problematic.

**How the Narrative Works:**

**The Setup:**
- Man has troubled past (vague "sins," suffering, cynicism)
- Man was shaped by circumstances beyond his control
- Man is therefore more victim than perpetrator
- Man just needs the right person to heal him

**The Savior Arrives:**
- Woman is good, pure, understanding
- Woman sees beneath his hard exterior to his wounded interior
- Woman believes in him when no one else does
- Woman\'s love/presence will transform him

**The Promised Outcome:**
- His love for her makes him want to be better
- Her belief in him enables his transformation
- Together they overcome his past
- Love conquers all

**Why This Narrative Is Dangerous:**

**1. It Makes Women Responsible for Men\'s Behavior**

**The Logic:**
- If her love redeems him → his improvement is her achievement
- If her love fails to redeem him → his continued bad behavior is her failure
- Either way, his character is her responsibility

**Result:**
- Woman must stay (leaving would abandon him to his worse nature)
- Woman must accept bad behavior (he\'s trying, your job is to believe in him)
- Woman must work harder when he fails (you haven\'t loved him enough)
- Woman bears moral responsibility for another adult\'s choices

**This is burden, not romance.**

**2. It Removes Accountability from Men**

**The Excuse:**
- "I can\'t help how I am—it\'s my past/trauma/circumstances"
- "I\'ll be better if you stay/love me/believe in me"
- "You\'re the only one who can save me"
- "If I fail, it\'s because you gave up on me"

**Result:**
- Man\'s behavior is always explained, never accountable
- Woman who leaves becomes villain (you abandoned me)
- Woman who stays accepts bad behavior (he\'s trying his best)
- Man never has to do actual moral work—just find right woman

**3. It Confuses Love with Moral Responsibility**

**The Confusion:**
- Love becomes: taking responsibility for someone else\'s character
- Commitment becomes: staying regardless of behavior
- Support becomes: excusing harmful actions
- Leaving becomes: moral failure

**Healthy Love Actually Requires:**
- Each person responsible for their own behavior
- Commitment to mutual growth, not unilateral rescue
- Support that includes accountability
- Recognition that leaving abuse/toxicity isn\'t abandonment

**4. It Makes Redemption Contingent Rather Than Chosen**

**The Narrative Says:**
- "I\'ll be good if you love me"
- "Your presence makes me want to improve"  
- "I can\'t change without you"

**This Means:**
- Transformation depends on relationship continuing
- If relationship ends, so does improvement
- Man\'s moral state is reactive, not chosen
- Woman must stay to maintain his good behavior

**Real Moral Growth Requires:**
- Change motivated internally, not contingent on relationship
- Improvement that persists regardless of who\'s watching
- Taking responsibility for your own character
- Not using relationship as motivation/excuse

**Jane\'s Resistance:**

**"If a man cannot reform himself, no woman can reform him."**

Jane is rejecting the entire framework. She\'s saying:

**Moral transformation must be self-directed:**
- Rochester must choose to change
- Not because Jane loves him
- Not because Jane will leave if he doesn\'t
- But because he decides his current character is insufficient

**She won\'t be his redeemer because:**
- She\'s not responsible for his moral state
- She can\'t do his ethical work for him
- Making her his "better self" burdens her unfairly
- Real redemption comes from within, not from without

**She can support but not save:**
- She can believe in his capacity to improve
- She can recognize his efforts
- She can offer companionship
- But she can\'t—and won\'t—be the source of his moral transformation

**Why Brontë Critiques This Narrative:**

**In a Novel About Love:**

It\'s striking that Brontë, writing a love story, explicitly rejects the "love redeems" narrative. This suggests:

**Real Love Requires Equals:**
- Not savior and saved
- Not redeemer and redeemed
- Not moral superior and moral project
- But two people, each responsible for their own character, choosing each other

**Love Doesn\'t Erase Character:**
- Rochester\'s flaws won\'t disappear because he loves Jane
- Jane\'s goodness won\'t automatically fix Rochester
- Lasting relationship requires Rochester actually changing
- Love is necessary but not sufficient

**Redemption Through Self-Work:**
- Later, after the fire, Rochester has been humbled
- He\'s lost power, position, physical ability
- Only then, after suffering and reflection, is he reformed
- His transformation comes through pain and self-examination, not through Jane\'s love

**Modern Manifestations:**

**In Romantic Relationships:**

"I know he\'s troubled, but I can fix him" thinking leads to:
- Staying in harmful relationships (he needs me)
- Excusing bad behavior (he had a hard childhood)
- Feeling responsible for partner\'s choices (if I just loved him better)
- Burning out trying to save someone who won\'t save themselves

**In Popular Culture:**

- Bad boy reformed by good girl (Twilight, 50 Shades)
- Player who "just needed to meet the right person"
- Damaged man healed by patient woman\'s love
- Woman as man\'s "better half" or "redemption"

**These narratives teach:**
- Women should seek wounded men to fix
- Men\'s bad behavior is forgivable if they\'re hurt underneath  
- Love equals taking responsibility for another\'s character
- Leaving problematic partner means you gave up/didn\'t try hard enough

**When the Narrative Becomes Abusive:**

**Abuse often uses redemption narrative:**
- "You\'re the only one who understands me"
- "I only act like this because of my trauma"
- "If you loved me you\'d forgive/understand/stay"
- "I can only get better if you\'re here"

**This Traps Victims:**
- They feel responsible for abuser\'s behavior
- Leaving feels like abandoning someone who needs them
- Abuser frames their abuse as something victim should help fix
- Victim believes if they just love better, abuser will change

**What Healthy Relationships Look Like Instead:**

**Mutual Responsibility:**
- Each person works on their own character
- Each person chooses to improve for their own reasons
- Neither is responsible for the other\'s moral state
- Growth is parallel, not contingent

**Support Without Rescue:**
- "I believe you can do this" (not "I\'ll do it for you")
- "I\'m here while you work on yourself" (not "I\'ll fix you")
- "Your growth is inspiring" (not "your growth depends on me")

**Clear Boundaries:**
- "I support your improvement but I won\'t tolerate harmful behavior"
- "Change needs to be real and sustained, not just promised"
- "I have to protect myself while you work on yourself"
- "My love for you doesn\'t mean accepting abuse"

**Jane\'s Model:**

**What Jane Offers Rochester:**
- Intellectual companionship
- Honest feedback (including criticism)
- Belief in his capacity to improve
- Refusal to excuse bad behavior

**What Jane Won\'t Offer:**
- Responsibility for his moral transformation
- Forgiveness without accountability
- Acceptance regardless of behavior
- Role of redemptive savior

**This is healthier.**

**For Discussion:**

Have you encountered the redemption narrative in relationships? Have you or someone you know tried to "save" or "fix" a partner? What happened?

Why is the redemption narrative so seductive despite being unhealthy? What makes it feel romantic rather than problematic?

**The Takeaway:**

The "good woman saves bad man" narrative is dangerous because it makes women responsible for men\'s character, removes accountability from men, confuses love with moral responsibility, and makes transformation contingent rather than chosen. Jane\'s rejection of this framework is radical: she insists on Rochester\'s moral agency even while loving him. Real love requires two people each taking responsibility for their own character, supporting but not saving each other. Brontë\'s critique of the redemption narrative in a romance novel teaches us: love doesn\'t redeem character; character change happens through self-work, suffering, and choice. You can love someone without being responsible for who they become.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Ethics of Forgiveness: When Should Absolution Be Conditional?',
      description: 'Write an argumentative essay taking a position on Jane\'s refusal to offer Rochester forgiveness before full disclosure. Structure your essay around a clear thesis: Is Jane being appropriately cautious (demanding accountability before absolution) or inappropriately harsh (withholding compassion when someone is vulnerable)? Use evidence from the chapter, but also engage philosophically: What does genuine forgiveness require? Is it compassionate to forgive without knowing what you\'re forgiving? Does demanding disclosure before forgiveness mean you don\'t really trust or love the person? Consider counterarguments: if you argue Jane is right, address why someone might see her as cold; if you argue she\'s wrong, address why preemptive forgiveness might enable harm. Connect to modern contexts: when public figures apologize vaguely for "mistakes," when partners say "I\'ve messed up in past relationships" without details, when friends confess to unspecified wrongdoing. Your essay should engage seriously with the ethics, not just summarize the chapter.',
      purpose: 'This prompt requires students to grapple with complex ethical questions about forgiveness, accountability, and trust. They must articulate and defend a position while engaging counterarguments. It pushes beyond literary analysis into moral philosophy, asking students to develop frameworks for ethical judgment. The prompt also connects Victorian novel to contemporary situations, requiring application of principles across contexts. Students practice argumentative writing, ethical reasoning, and textual evidence integration simultaneously.'
    },
    
    activity: {
      title: 'Red Flags vs. Romantic Gestures: Analyzing Rochester\'s Behavior',
      description: 'Create two columns on the board: "Romantic" and "Red Flag." Present students with Rochester\'s behaviors from this chapter one at a time: (1) Calling Jane his "good angel," (2) Confessing to past sins without specifics, (3) Suggesting Jane\'s love might reform him, (4) Presenting hypotheticals about forgiveness, (5) Saying Jane makes him want to be better, (6) Claiming he was shaped by circumstances. For each behavior, students vote: Romantic gesture or Red flag? Then discuss: Why might this seem romantic? What makes it potentially problematic? Students should notice that many "romantic" tropes (you complete me, you make me better, you\'re my salvation) are also manipulative tactics. Follow up: How do we distinguish between genuine vulnerability and strategic manipulation? What behaviors feel romantic in fiction but would be concerning in real life? Extension: Students bring examples from contemporary media (songs, movies, books) of "romantic" behaviors that might actually be red flags, and class analyzes them using frameworks from the chapter.',
      materials: 'Whiteboard/projector for two-column chart, prepared scenario cards, optional: clips from romantic media showing similar dynamics'
    },
    
    crossCurricular: {
      title: 'The Psychology and Philosophy of Redemption',
      description: 'Partner with psychology and philosophy classes for interdisciplinary study. Psychology class covers: (1) Moral development theory (Kohlberg, Gilligan), (2) Psychology of forgiveness and accountability, (3) Codependency and responsibility confusion, (4) Therapeutic vs. toxic vulnerability. Philosophy class explores: (1) Ethics of forgiveness (when is it required, optional, or wrong to forgive?), (2) Moral responsibility and free will vs. determinism, (3) "Cheap grace" (Bonhoeffer) vs. genuine repentance, (4) Can people truly change? English class reads Chapter 14 and analyzes: Rochester\'s moral testing, Jane\'s ethical framework, the redemption narrative critique. Students synthesize: What does genuine moral transformation require? When is forgiveness appropriate? Are we responsible for others\' moral states? Apply frameworks to case studies: politicians asking for forgiveness after scandals, celebrities cancelled then seeking comeback, friends/partners asking for second chances. Final project: Students develop ethical framework for accountability and redemption in personal, professional, or public contexts.',
      subjects: ['Psychology', 'Philosophy', 'Ethics', 'Religious Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Analyzing the Redemption Narrative: Literature, Ethics, and Relationship Dynamics',
    prompt: 'Rochester is constructing what Brontë critiques as a "redemption narrative": I was corrupted by circumstances, but your love can save me. This narrative appears throughout literature and popular culture (Beauty and the Beast, bad boy reformed by good girl, "she makes me want to be better," etc.). Your task: Develop a critical framework for analyzing redemption narratives in relationships, apply it to Rochester and Jane, then extend it to evaluate contemporary examples. Consider: What makes redemption narratives seductive? What makes them dangerous? When (if ever) can love genuinely facilitate moral transformation? What\'s the difference between supporting someone\'s growth and being responsible for their character? How do redemption narratives function differently in fiction vs. real relationships? Use textual evidence from Jane Eyre, but also engage philosophically and psychologically: draw on ethics, psychology of codependency, feminist critiques of gendered rescue narratives, and real-world examples.',
    
    guidingQuestions: [
      'Why is the redemption narrative ("your love can save me") so prevalent in romance? What psychological and cultural factors make it appealing? Consider: the desire to be needed, the fantasy of being special enough to change someone, the romance of overcoming obstacles together, the flattery of being someone\'s "salvation."',
      'What are the concrete harms of redemption narratives? Think about: who bears responsibility for whose behavior, what happens when transformation doesn\'t occur, how it affects power dynamics, whether it enables abuse, how it confuses love with moral obligation, what it teaches about relationship roles.',
      'Jane tells Rochester: "If a man cannot reform himself, no woman can reform him." Is she right? Can association with a good person facilitate someone\'s moral improvement? Or must transformation be entirely self-directed? Where\'s the line between: (1) supportive partner who believes in you, vs. (2) savior responsible for your character?',
      'How does gender affect redemption narratives? Why are these stories typically about men being redeemed by women rather than the reverse? What does this reveal about cultural expectations: that women should fix men, that men\'s bad behavior is forgivable if explained by trauma, that women\'s moral labor includes reforming partners?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down Rochester\'s redemption narrative: (1) How does he frame his past? (as victim of circumstances or agent of choices?), (2) What role does he assign Jane? (savior, moral authority, source of redemption), (3) What does he avoid? (specifics of wrongdoing, accountability for choices, commitment to actual change), (4) How does Jane resist? (what does she refuse to do/accept/excuse?). Then analyze the narrative structure: identify how redemption narratives typically work (fallen man + pure woman + love = transformation) and how Brontë deconstructs this formula through Jane\'s resistance.',
      evaluate: 'Using ethical frameworks, assess redemption narratives: (1) Utilitarian lens: Do they produce good outcomes or harm? (2) Deontological lens: Do they respect moral obligations and dignity? (3) Virtue ethics lens: Do they promote or corrupt character? (4) Care ethics lens: Do they honor relationships or exploit them? (5) Feminist lens: How do they position women\'s labor and responsibility? Be specific about your criteria for evaluation: What makes a relationship dynamic healthy vs. toxic? When is supporting someone\'s growth appropriate vs. taking inappropriate responsibility for their character?',
      synthesize: 'Connect literary analysis to contemporary contexts: (1) Identify redemption narratives in current media (movies, books, songs, TV shows), (2) Analyze real-world manifestations (relationships where one person tries to "fix" the other, public figures seeking redemption after scandal, abuse justified by past trauma), (3) Develop principles: When can love facilitate transformation? What safeguards are necessary? How do we support without rescuing? Apply your framework to create guidelines: for fiction writers (how to write romance without toxic dynamics), for readers/viewers (how to critically analyze relationship narratives), for people in relationships (how to distinguish support from codependency).'
    },
    
    expectedDepth: 'Strong responses will: (1) Articulate clear framework for analyzing redemption narratives with specific criteria drawn from ethics, psychology, and feminist theory; (2) Apply framework rigorously to Rochester/Jane, using substantial textual evidence; (3) Engage complexity—acknowledge what makes these narratives appealing while critiquing their harms; not simple "this is bad" but nuanced "here\'s when/why/how this becomes problematic"; (4) Connect Victorian text to contemporary examples with specificity—name media examples, describe parallel relationship dynamics, show continuity of narrative across time; (5) Address gender explicitly—why these narratives are typically gendered male redemption/female redeemer, what this reveals about cultural expectations; (6) Distinguish between fictional and real-world manifestations—acknowledge that narratives work differently in stories vs. relationships; (7) Develop practical applications—what does this analysis teach us about evaluating relationships, media, and our own expectations about love and moral transformation? This requires synthesizing literary analysis, ethical philosophy, psychological concepts, and cultural criticism.',
    
    classroomApplication: 'Works as: (1) Major analytical essay (6-8 pages) with research component—students incorporate ethics readings, psychology of relationships, feminist theory; (2) Multimedia presentation—students present redemption narratives in various media, analyze using framework, lead class discussion; (3) Debate—teams argue: Can love ever genuinely facilitate moral transformation, or is this always a dangerous narrative? (4) Creative project—students rewrite a traditional redemption narrative (Beauty and the Beast, etc.) subverting the problematic dynamics using Jane\'s model. Time: 4-5 class periods including text analysis, framework development, contemporary examples, and synthesis. Can connect to: psychology of codependency, feminist relationship theory, ethics of care, media literacy, abuse prevention education. Consider bringing in: relationship counselors to discuss healthy vs. unhealthy dynamics, examples from students\' own media consumption, case studies of public figures seeking redemption.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature\'s importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(14),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🔥',
    title: 'Next Time: Chapter 15 — The Fire in the Night',
    preview: 'Rochester shares the story of his past relationship with Céline Varens, Adèle\'s mother—a manipulative mistress who betrayed him. He uses this confession to justify his cynicism and test Jane\'s reactions. Then, that very night, Jane wakes to find Rochester\'s bed curtains on fire. Someone has tried to murder him. Jane saves his life, putting out the flames while he sleeps. In the aftermath, alone in Rochester\'s bedroom at night with him in his nightshirt and Jane in hers, the intimacy is charged and dangerous. Rochester leaves her with cryptic warnings about Grace Poole, but Jane suspects he\'s lying about who set the fire. The night creates a bond between them—she saved his life—but it also raises urgent questions about what dangers lurk at Thornfield.',
    hookQuestion: 'Who tried to kill Rochester and why? Is Grace Poole really responsible, or is Rochester hiding something more dangerous? And how will the intimacy of this night—Jane saving Rochester\'s life, the two of them alone in his bedroom—change their relationship?'
  }
}

