/**
 * JANE EYRE - CHAPTER 21
 * 
 * Jane arrives at Gateshead to find Mrs. Reed dying and bitter, the Reed children
 * grown into unhappy adults. After days of cold reception, Mrs. Reed finally makes
 * her deathbed confession: she hid a letter from Jane's wealthy uncle and lied that
 * Jane was dead—malice that persists even to her last breath
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter21: ChapterData = {
  number: 21,
  title: 'Mrs. Reed\'s Deathbed Confession',
  
  readingTime: 22,
  pages: 14,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Jane arrives at Gateshead to find Mrs. Reed suffering stroke and dying bitter, the Reed children transformed into unhappy adults (Eliza rigid and cold, Georgiana vain and useless, John dead from dissolute living)—then after days of hostile silence, Mrs. Reed makes devastating confession: three years ago Jane\'s wealthy uncle John Eyre wrote from Madeira wanting to adopt her and make her his heir, and Mrs. Reed, still hating Jane, wrote back lying that Jane died of typhus at Lowood, maliciously preventing the connection even as she lies dying without repentance.',
    
    full: [
      'Jane arrives at Gateshead after years away to find the household transformed by time and misfortune. Mrs. Reed has suffered a stroke and lies dying, but there\'s no softening of her character—she\'s bitter, angry, terrified of death but unable or unwilling to seek reconciliation. The Reed children Jane once feared have become exactly what their upbringing predicted: John Reed is dead, having drunk and gambled himself into ruin and suicide at age twenty-three; Georgiana has grown into a beautiful but vapid woman obsessed with her own appearance and social ambitions, utterly useless in crisis; Eliza has become rigid, cold, and mechanical, living by strict schedule devoid of warmth or human connection. The two sisters despise each other. The house that once terrified Jane now feels pathetic—filled with failed lives and wasted potential.',
      
      'For several days Jane tends to her dying aunt, but Mrs. Reed remains hostile. She flinches from Jane\'s touch, refuses kindness, can barely look at her. Jane tries to offer reconciliation—she\'s willing to forgive the childhood cruelty, to make peace before death—but Mrs. Reed cannot accept it. Years of hatred have calcified into her character so deeply that even facing eternity, she can\'t let go of her malice toward the orphaned niece she was supposed to protect. Jane sees clearly: Mrs. Reed\'s inability to love or forgive has poisoned her entire life and now poisons her death. The woman is dying alone in bitterness because she spent her life nursing resentment.',
      
      'Finally, on what will be Mrs. Reed\'s last coherent night, she summons Jane with urgent desperation. She has something she must confess—not from repentance but from inability to die with the secret. Three years ago, a letter arrived from Madeira: Jane\'s uncle John Eyre, her father\'s brother, had been searching for his niece. He\'d made his fortune abroad and wanted to adopt Jane, make her his heir, give her the family and wealth she\'d been denied. Mrs. Reed read that letter and, still hating Jane even then, wrote back a malicious lie: Jane Eyre died of typhus fever at Lowood School six months after arriving. For three years, Jane has had a wealthy uncle looking for her—wanting to give her everything—and Mrs. Reed deliberately prevented the connection. The cruelty is breathtaking: not just the childhood abuse but the calculated destruction of Jane\'s chance at family and fortune.',
      
      'Mrs. Reed hands Jane the letter—kept all this time—and waits not for forgiveness but for Jane to understand the full extent of her hatred. Jane reads her uncle\'s words: affectionate, eager, full of plans to bring her to Madeira and make her comfortable for life. Mrs. Reed stole this from her out of pure spite. Jane asks why—why such hatred for an orphaned child who did nothing wrong? Mrs. Reed\'s answer reveals the poison at the root: she couldn\'t help it. Jane\'s mother was Mr. Reed\'s favorite sister; he loved her more than his own wife. When Jane came to Gateshead after her parents died, Mrs. Reed saw her husband\'s love for the child—his dying wish was that Jane be raised as his own daughter—and she resented Jane for inspiring love she herself never received. Mrs. Reed hated Jane for being loved. Jane offers forgiveness one final time, but Mrs. Reed turns away and dies hours later without reconciliation, bitter to the end. Jane returns to Thornfield shaken: she has family, wealth is possible, but also confirmation that some people will hate you for reasons that have nothing to do with you—their hatred reflects their own emptiness, not your worth.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Hated for Being Loved: The Resentment of Witnesses',
      definition: 'Being hated not for what you did wrong, but for what you received that someone else wanted—you become target of resentment because your presence revealed or received love/attention that the resentful person craved but didn\'t get.',
      context: 'Mrs. Reed finally explains why she always hated Jane: Jane\'s mother was Mr. Reed\'s favorite sister, and when Jane came to Gateshead, Mr. Reed loved the orphaned child intensely. His dying wish was that Jane be raised as his own daughter. Mrs. Reed resented Jane for inspiring love that Mrs. Reed herself never received from her husband. Jane was hated for being loved. This explains the entire childhood abuse: Jane didn\'t do anything wrong—her existence revealed that Mr. Reed was capable of love, just not for his wife. Jane became target of Mrs. Reed\'s resentment about her own loveless marriage.',
      whyItMatters: 'Sometimes people hate you not for your actions but for what you represent: someone loved you, chose you, gave you attention they didn\'t give to the resentful person. This creates irrational, intense hatred that has nothing to do with you. Modern contexts: stepparent resenting stepchild because their partner clearly loves the child (revealing capacity for love the stepparent doesn\'t receive), sibling hating the "favorite" child who gets parental approval they crave, colleague resenting you because boss praises your work (revealing you have value they wish they had). Understanding "hated for being loved" helps recognize: the hatred isn\'t about you or your actions—it\'s about the other person\'s pain at witnessing love they\'re not receiving. You can\'t fix it because the problem isn\'t you.'
    },
    {
      term: 'Deathbed Malice: Confession Without Repentance',
      definition: 'When dying person confesses harmful actions not from genuine remorse or desire for reconciliation, but from need to unburden themselves, desire to hurt one final time, or inability to die with the secret—confession serves their needs, not victim\'s healing.',
      context: 'Mrs. Reed confesses that she hid Jane\'s uncle\'s letter and lied about Jane being dead—but she doesn\'t apologize. She confesses because she can\'t die with the secret, because the guilt is tormenting her, because she wants Jane to know the full extent of her hatred. The confession isn\'t for Jane\'s benefit; it\'s Mrs. Reed\'s final act of malice. She hands over the letter but refuses forgiveness, turns away from reconciliation, dies bitter. This is deathbed malice: confession that serves the confessor, not the victim. Mrs. Reed gets to unburden her guilt without doing the work of repentance.',
      whyItMatters: 'Not all deathbed confessions are reconciliation opportunities. Sometimes dying people confess to ease their own guilt, to have final power over you by making you know what they did, or to hurt you one last time while claiming honesty. Modern contexts: parent confesses affair/favoritism/cruelty on deathbed but won\'t apologize (wants absolution without repentance), dying relative reveals family secrets that hurt living people (unburdening themselves regardless of impact), person confesses harmful actions but frames it as "being honest" rather than seeking forgiveness. Understanding deathbed malice helps protect yourself: confession without repentance isn\'t reconciliation, and you don\'t owe forgiveness just because someone is dying. Their need to unburden doesn\'t create your obligation to absolve.'
    },
    {
      term: 'Predicted Outcomes: When Children Become What Upbringing Suggested',
      definition: 'When people develop into adults whose character, success, and happiness (or lack thereof) were clearly predictable from their childhood upbringing, values, and character formation—the adult becomes what the child was trained to be.',
      context: 'The Reed children have become exactly what their upbringing predicted: John, spoiled and enabled, drank and gambled himself to death by twenty-three. Georgiana, praised only for beauty and taught nothing of substance, is vapid and useless—beautiful but incapable of managing crisis or caring for others. Eliza, neglected and forced to be self-sufficient, became cold and mechanical—efficient but devoid of warmth. All three are miserable. Meanwhile Jane, who received no love but was taught discipline and educated well at Lowood, has become capable, independent, and emotionally intelligent. The children\'s adult lives reflect their childhood formation—for better or worse.',
      whyItMatters: 'How children are raised and what values they internalize often predicts who they become as adults. Children praised only for appearance may struggle when looks fade; children given everything without earning it may lack grit; children forced into premature self-sufficiency may become emotionally closed; children taught resilience and given education may thrive despite hardship. Modern contexts: recognizing patterns in your own life (how did your upbringing shape who you became?), understanding struggling adults (what childhood formation explains their current difficulties?), parenting consciously (what character traits are you forming in children?). The Reed children show: privilege without character formation creates miserable adults; hardship with education can create capable ones. It\'s not about wealth or hardship alone—it\'s about what values, skills, and character traits are developed.'
    },
    {
      term: 'Stolen Future: Malicious Prevention of Opportunities',
      definition: 'When someone deliberately prevents you from knowing about or accessing opportunities that would have significantly improved your life—withholding information, hiding letters, lying about opportunities—not from protective motivations but from malice or self-interest.',
      context: 'Mrs. Reed hid the letter from Jane\'s uncle John Eyre and lied that Jane was dead. For three years, Jane has had a wealthy uncle searching for her, wanting to adopt her, make her his heir, give her family and fortune—and Mrs. Reed maliciously prevented the connection. Jane could have had family, wealth, comfort, belonging. Instead she worked as governess with no family, small salary, no security. Mrs. Reed stole Jane\'s future out of pure spite. The stolen opportunity wasn\'t accident or misunderstanding—it was calculated cruelty.',
      whyItMatters: 'Sometimes people deliberately prevent you from accessing opportunities that would help you—not because the opportunities are bad for you, but because your success threatens them or they simply don\'t want you to have good things. Modern contexts: parent hiding college acceptance letters because they don\'t want child to leave, boss not forwarding information about promotions/opportunities, partner sabotaging job opportunities because they want you dependent, family member hiding information about inheritance. Understanding stolen futures helps recognize: (1) Some barriers to opportunities aren\'t bad luck but deliberate sabotage, (2) People who claim to care about you might actually prevent your success, (3) You may need to seek opportunities independently rather than trusting gatekeepers. Also helps process anger: discovering that opportunities were stolen (not just missed) creates rage and grief—both valid responses to malicious theft of your future.'
    },
    {
      term: 'Unreconciled Death: Dying With Bitterness Intact',
      definition: 'When person dies without reconciling relationships, making amends, or softening their character—they choose to die bitter, resentful, and unforgiving rather than do the internal work required for peace. The bitterness lasts literally to their last breath.',
      context: 'Mrs. Reed dies unreconciled. Jane offers forgiveness multiple times—is willing to make peace, let go of childhood cruelty, part without enmity. But Mrs. Reed refuses. She confesses her malice but won\'t apologize, turns away from offered forgiveness, dies bitter and afraid. She chooses bitterness over peace, dies alone in resentment rather than accept reconciliation. Jane witnesses someone who poisoned their entire life with hatred and now poisons their death with the same bitterness. Mrs. Reed didn\'t have to die this way—she chose it.',
      whyItMatters: 'Not everyone wants reconciliation, even when dying. Some people are so committed to their resentment, so identified with their bitterness, that they choose to die without making peace—even when peace is offered. Modern contexts: family members who die without reconciling despite opportunities, people who refuse to apologize even on deathbed, relatives who choose bitterness over healing. Understanding unreconciled death helps: (1) Recognize you can\'t force reconciliation—even offering forgiveness may be rejected, (2) Witness someone\'s choice to die bitter without taking responsibility for "fixing" them, (3) Process grief and frustration when someone dies without the reconciliation you hoped for. Mrs. Reed\'s death shows: you can offer forgiveness, but you can\'t make someone accept it. Some people choose bitterness to the very end, and that\'s their choice, not your failure.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane returns to Gateshead as adult, now positioned above her childhood tormentors in capability, character, and emotional intelligence. She offers forgiveness to Mrs. Reed—not from weakness but from strength. She can afford to be generous because she\'s no longer the powerless child. When Mrs. Reed reveals the hidden letter, Jane processes the theft without collapsing: she absorbs the shock, feels the rage and grief, but doesn\'t let it destroy her. She learns her uncle exists, that wealth is possible, that Mrs. Reed\'s cruelty extended far beyond childhood abuse. Most importantly, she learns why she was hated: not for anything she did, but for being loved by someone who didn\'t love Mrs. Reed. This gives Jane clarity: some people\'s hatred has nothing to do with you. She leaves Gateshead having offered forgiveness that was refused, carrying knowledge of stolen opportunity, but also with strengthened sense of her own worth.',
      keyTrait: {
        emoji: '💪',
        text: 'Strength to Forgive (Even When Refused)'
      }
    },
    {
      name: 'Mrs. Reed',
      development: 'Mrs. Reed\'s deathbed reveals the full pathology of her hatred for Jane. She explains: she couldn\'t help hating Jane because Mr. Reed loved the child (his sister\'s daughter) more than he loved his wife. Jane represented everything Mrs. Reed didn\'t have—her husband\'s love, affection, genuine care. Mrs. Reed\'s entire marriage was loveless, and Jane\'s presence made it obvious that Mr. Reed was capable of love, just not for his wife. So Mrs. Reed punished the child for being loved. This explains the childhood cruelty and the hidden letter: Mrs. Reed couldn\'t stand for Jane to have good things because Jane already had what Mrs. Reed most wanted (to be loved). She dies unreconciled, refuses forgiveness, chooses bitterness over peace. Her death confirms: a lifetime of nursing resentment poisons everything, and hatred maintained that long becomes who you are.',
      keyTrait: {
        emoji: '☠️',
        text: 'Bitter to the End'
      }
    },
    {
      name: 'Eliza Reed',
      development: 'Eliza has become exactly what her childhood suggested: rigid, cold, mechanical. She lives by strict schedule—rises at six, works methodically through tasks, allows herself no pleasure or warmth. She\'s efficient but joyless, capable but isolated. Her relationship with sister Georgiana is antagonistic—they despise each other. Eliza plans to enter a convent where her love of rules and lack of emotional warmth will fit. She represents one response to loveless upbringing: become hard, structured, closed off. She\'ll survive but never truly live. Jane sees in Eliza a cautionary tale: you can protect yourself from vulnerability by becoming impervious, but you also lose capacity for joy, connection, and love.',
      keyTrait: {
        emoji: '🤖',
        text: 'Mechanical Rigidity'
      }
    },
    {
      name: 'Georgiana Reed',
      development: 'Georgiana has grown into a beautiful but useless woman. She was raised being praised for her looks, taught nothing of substance, given no real education or character formation. Now as adult facing family crisis (brother dead, mother dying), she\'s completely helpless—spends her time talking about herself, reminiscing about London social season, incapable of helping with practical matters. She despises Eliza\'s rigid efficiency as much as Eliza despises her vapid self-absorption. Georgiana plans to make advantageous marriage where her beauty can be traded for security. She represents the consequences of being valued only for appearance: no internal resources when beauty fades or crisis demands capability.',
      keyTrait: {
        emoji: '💅',
        text: 'Useless Beauty'
      }
    },
    {
      name: 'John Reed (deceased)',
      development: 'John Reed appears only through report: he died at twenty-three having drunk and gambled himself into ruin and debt. The spoiled, bullying child became a dissolute, destructive adult. His mother enabled all his vices, paid his debts, made excuses for his cruelty and incompetence. When he finally exhausted the family fortune and his mother\'s patience, he died—likely by suicide. John represents the ultimate consequence of being raised without discipline or accountability: destruction of self and others. The boy who tormented Jane and suffered no consequences became the man who destroyed himself because he never learned limits.',
      keyTrait: {
        emoji: '💀',
        text: 'Predictable Destruction'
      }
    },
    {
      name: 'Uncle John Eyre',
      development: 'Uncle John Eyre appears through his letter—warm, affectionate, eager to bring Jane to Madeira and make her his heir. He\'d been searching for his brother\'s daughter, made fortune abroad, wanted to share it with family. The letter reveals: Jane has had loving relative looking for her all this time. Uncle John Eyre represents what Mrs. Reed stole from Jane: family connection, wealth, belonging. He\'ll become important later (it\'s his inheritance that eventually gives Jane independence and his lawyer who stops the bigamous wedding). But now he\'s the stolen future—the family Jane could have had if not for malicious interference.',
      keyTrait: {
        emoji: '💌',
        text: 'Stolen Family'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'A strong dislike she had always had for me. She could never bear to see me happy, or to hear me praised. She hated my very voice; and she could not bear to look at me.',
      analysis: 'Jane describes Mrs. Reed\'s visceral hatred—not just dislike but physical aversion to Jane\'s existence, happiness, or success. Mrs. Reed hated Jane\'s voice, couldn\'t bear to look at her, was pained by her happiness. This isn\'t rational dislike based on actions; it\'s irrational hatred triggered by Jane\'s existence. Jane recognizes: this level of hatred has nothing to do with anything she did. It\'s something wrong in Mrs. Reed, not something wrong in Jane. This clarity protects Jane from internalizing the hatred as deserved.'
    },
    {
      text: 'I had a letter from my brother three years ago, saying that he wanted to adopt you and make you his heir. I told him you were dead—that you died of typhus at Lowood. I could not forget your conduct to me, Jane—the fury with which you once turned on me.',
      analysis: 'Mrs. Reed\'s confession and justification: she hid the letter and lied about Jane being dead, and she tries to justify it by citing Jane\'s childhood "fury" (when young Jane finally defended herself against abuse). This reveals the twisted logic: Mrs. Reed punishes Jane for fighting back against cruelty by stealing her future. The justification is absurd—adult punishing child for self-defense—but Mrs. Reed genuinely believes Jane\'s resistance justified the malicious destruction of her opportunities. The confession shows: abusers often frame victim\'s resistance as justification for further abuse.'
    },
    {
      text: 'My uncle John had indeed written to you. He was my mother\'s brother. He had left England for Madeira and made his fortune there. Now he wished to adopt me—to make me his heir.',
      analysis: 'Jane processes the revelation: she has family. Not just any family but wealthy uncle who actively wanted her, searched for her, planned to give her everything. For three years this opportunity existed and was hidden from her. Jane names what was stolen: not just money but family, belonging, someone who wanted her. The measured language ("had indeed written," "wished to adopt me") shows Jane maintaining composure while absorbing life-altering information. She feels the weight without collapsing under it.'
    },
    {
      text: 'She could not help it—she felt a deep antipathy to me. My husband loved me when I was a girl, but he loved his sister\'s child better. When Jane came here, he loved her as his own. It was his dying wish that I should treat her as one of my own children.',
      analysis: 'Mrs. Reed finally explains the root of her hatred: Mr. Reed loved Jane, and Mrs. Reed resented that love. She admits "she could not help it"—as if hatred of innocent child for being loved is natural reaction. This reveals the psychological poison: Mrs. Reed was in loveless marriage, knew her husband was capable of love (he showed it to Jane), and punished Jane for receiving what Mrs. Reed wanted. The explanation doesn\'t justify the cruelty, but it explains it: Jane was hated for being loved. Mrs. Reed\'s confession shows how one person\'s emotional emptiness can poison another person\'s entire childhood.'
    },
    {
      text: 'I would have been your friend, but you thrust me back when I would have kissed you and loved you. I forgive you now, and I want to be at peace with you before you die.',
      analysis: 'Jane offers forgiveness and reconciliation—note the phrasing: "would have been your friend," acknowledging what could have been if Mrs. Reed had allowed it. Jane isn\'t claiming past closeness that didn\'t exist; she\'s offering present forgiveness for past cruelty. She wants Mrs. Reed to die at peace. This is extraordinary generosity from someone whose childhood was tormented and whose future was stolen. Jane offers this not because Mrs. Reed deserves it but because Jane herself needs to leave Gateshead without enmity. The forgiveness serves Jane\'s peace as much as Mrs. Reed\'s—but Mrs. Reed refuses it anyway, choosing bitterness over reconciliation.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Hated for Being Loved: Resentment of Witnesses',
        explanation: 'Mrs. Reed hated Jane not for anything Jane did but for being loved by Mr. Reed. Jane\'s presence revealed that Mr. Reed was capable of love—he just didn\'t love his wife. Mrs. Reed was trapped in loveless marriage, and Jane\'s existence made the lovelessness obvious. So Mrs. Reed punished Jane for inspiring affection that Mrs. Reed craved but didn\'t receive. This theme explores: Sometimes people hate you not for your actions but for what you represent—you received love/attention/validation they wanted. Your existence reveals their lack. The hatred is irrational, intense, and unfixable because it\'s not about you.'
      },
      {
        name: 'Deathbed Malice: Confession Without Repentance',
        explanation: 'Mrs. Reed confesses her cruelty (hiding the letter, lying about Jane being dead) but refuses to apologize or reconcile. The confession serves Mrs. Reed\'s need to unburden her guilt, not Jane\'s need for healing. This is deathbed malice: revelation that causes harm while claiming honesty, confession that benefits confessor not victim. Mrs. Reed gets to ease her conscience by revealing the truth while maintaining her bitterness. She dies without reconciliation—not because reconciliation wasn\'t offered (Jane offers forgiveness multiple times) but because she chooses bitterness over peace.'
      },
      {
        name: 'The Predicted Outcomes: What Upbringing Creates',
        explanation: 'The Reed children became exactly what their childhood formation predicted. John, spoiled and enabled, destroyed himself with vice. Georgiana, valued only for beauty and taught nothing substantial, is vapid and useless. Eliza, forced into premature self-sufficiency and given no affection, became rigid and emotionally closed. All are miserable. Meanwhile Jane, despite (or because of?) hardship and discipline, has become capable and emotionally intelligent. The theme suggests: how children are formed—what they\'re taught, what they\'re praised for, what character traits are developed—predicts who they become. Privilege without character formation creates miserable adults.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'The Return to Origin With New Perspective',
        explanation: 'Jane returns to Gateshead—the site of her childhood trauma—but now as adult with education, experience, and self-possession. The house that once terrified her now seems small and pathetic. The relatives who once dominated her are revealed as failures and bullies. This literary technique of returning to origin after character development lets readers measure growth: we see how far Jane has come by contrasting her adult self with the environment that once overwhelmed her. She\'s no longer powerless child; she\'s capable adult who can offer forgiveness from position of strength.',
        example: 'When Jane arrives at Gateshead, she immediately observes the household clearly: Mrs. Reed dying bitter, Eliza rigid and cold, Georgiana useless, John dead. Jane isn\'t intimidated; she\'s analytical. She offers to help despite their past, tends her dying aunt with competence, navigates the sisters\' hostility calmly. The reader sees: the adults who once terrified child-Jane are now beneath adult-Jane in capability and character. The return shows Jane\'s transformation—she\'s grown beyond Gateshead. Leaving at chapter\'s end, she\'s no longer haunted by the place; she\'s free of it.'
      },
      {
        name: 'The Confession Scene: Power Dynamics in Revelation',
        explanation: 'Mrs. Reed\'s confession is masterfully constructed to show power dynamics. She summons Jane (exercise of power even while dying), confesses the hidden letter (revelation that serves her need to unburden), tries to justify her actions (blaming Jane\'s childhood "fury"), refuses forgiveness (maintaining control by rejecting reconciliation). Brontë shows: even deathbed confession can be power move. Mrs. Reed uses revelation strategically—she gets to unload guilt without repenting, hurt Jane one final time by revealing what was stolen, and die maintaining her hatred. The confession isn\'t reconciliation; it\'s final assertion of malice.',
        example: 'The scene builds tension: Mrs. Reed summons Jane urgently, struggles to confess, finally reveals the letter. Jane reads her uncle\'s affectionate words and realizes three years of opportunity were stolen. But when Jane offers forgiveness, Mrs. Reed turns away. She confessed not to reconcile but to ease her own guilt and make sure Jane knows the full extent of what was done to her. The confession scene demonstrates: revelation without repentance creates harm while claiming honesty. Mrs. Reed dies having unburdened herself, leaving Jane with the weight of stolen future. It\'s confession as weapon.'
      },
      {
        name: 'Parallel Fates: Contrasting Character Outcomes',
        explanation: 'Brontë explicitly contrasts the Reed children\'s fates with Jane\'s development, showing how upbringing and character formation create adult outcomes. John (spoiled, enabled) → destruction. Georgiana (praised for beauty alone) → vapid uselessness. Eliza (forced into loveless self-sufficiency) → rigid coldness. All privileged, all miserable. Jane (abused but educated, disciplined but given mentors like Helen and Miss Temple) → capable, resilient, emotionally intelligent. The parallel fates technique demonstrates theme through structure: we see directly that privilege alone doesn\'t create thriving, and hardship alone doesn\'t create misery. Character formation matters more than circumstances.',
        example: 'Jane explicitly observes the Reed children as adults, noting how they became what childhood predicted. Then she reflects on her own journey: Lowood was harsh but gave her education; she had no family wealth but developed capability; she suffered but learned resilience. The contrast is clear: the Reeds had everything (wealth, family name, social position) but are miserable failures because they weren\'t formed into people of character. Jane had nothing but was formed into person of strength. The technique lets Brontë make argument about character vs. privilege through showing not telling—we see the outcomes, draw the conclusions ourselves.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine you\'re called back to visit dying relative who abused or neglected you in childhood. You return as adult—you\'ve built your life, developed your capabilities, you\'re no longer the powerless child. But the family home triggers memories: this is where you were hurt, dismissed, made to feel worthless. The relatives who once dominated you have become exactly what their character suggested: one died young from addiction/recklessness, one is beautiful but incapable and shallow, one is efficient but emotionally frozen. All are miserable despite their initial advantages. You, who had nothing, have become more capable and more emotionally healthy than any of them. You try to help your dying relative, offer forgiveness, extend generosity—but they reject it. Then, just before death, they confess: years ago, someone reached out wanting to help you (wealthy relative, scholarship opportunity, job offer, inheritance), and this dying person deliberately prevented you from knowing about it. They hid the letter, didn\'t pass on the message, actively lied to keep the opportunity from you. For years you could have had family connection or financial security or career boost—and someone maliciously stole that future from you out of spite. When you ask why, they finally admit: they resented you for being loved by someone they cared about, or they hated seeing you happy when they were miserable, or your success made their own failures more obvious. You were hated not for what you did but for what you represented. You offer forgiveness one final time, but they turn away and die bitter, choosing resentment over peace.',
    
    parallels: [
      '🔹 **Hated for Being Loved**: Being resented not for your actions but because someone loved you/gave you attention that the resentful person wanted. Stepparent resenting stepchild because partner clearly loves the child, sibling hating "favorite" who gets parental approval, colleague resenting you because boss praises your work. The hatred isn\'t about you—it\'s about what you represent (proof that love/approval is possible, just not directed at them).',
      '🔹 **Stolen Future**: Someone deliberately prevented you from knowing about opportunities that would have helped you—hiding messages, not forwarding information, lying about opportunities. Parent hiding college acceptance letters, boss not telling you about promotion possibilities, partner sabotaging job opportunities, family member concealing inheritance information. The opportunity was stolen not accidentally but maliciously.',
      '🔹 **Deathbed Confession Without Repentance**: Dying person confesses harmful actions not from genuine remorse but from need to unburden themselves or desire to hurt one final time. They reveal what they did but won\'t apologize. The confession serves their need to ease guilt, not your need for healing. You\'re left processing the revelation without receiving the apology or restitution you deserved.',
      '🔹 **Returning to Origin With New Perspective**: Going back to place/people that once intimidated or harmed you, but now as adult with capabilities and self-possession. The people who seemed powerful are revealed as small, the place that seemed overwhelming now feels manageable. You can see clearly what you couldn\'t see as child: the adults were flawed, the power dynamics were unfair, your childhood suffering wasn\'t your fault.',
      '🔹 **Predicted Outcomes**: Watching people become exactly what their upbringing suggested—those praised only for appearance struggling when looks fade, those given everything without earning it lacking grit, those valued only for achievement becoming workaholic and joyless. Recognizing patterns: character formation in childhood often predicts adult struggles and strengths.',
      '🔹 **Offering Forgiveness That\'s Refused**: Extending genuine forgiveness and desire for reconciliation to someone who harmed you—but they reject it. Not all reconciliation attempts succeed. Some people choose bitterness over peace even when peace is offered. Their refusal isn\'t your failure—it\'s their choice to die/live without reconciliation.',
      '🔹 **Processing Stolen Opportunity**: Learning that opportunities were maliciously hidden creates complex grief—mourning not just what you didn\'t have but what was deliberately stolen. Anger at the theft, grief over lost possibilities, rage that someone\'s malice shaped your life trajectory. Processing this without letting it destroy you.'
    ],
    
    discussionPrompt: 'Have you been hated for what you represented rather than what you did—resented because someone loved you or you received attention someone else wanted? How did you recognize the hatred wasn\'t about your actions? Have you discovered that someone deliberately prevented you from knowing about opportunities—hid information, didn\'t pass on messages, lied to keep you from good things? How did you process that malicious theft of your future? Have you offered forgiveness to someone who refused it? What did you learn from extending reconciliation that was rejected? Have you returned to place/people that once intimidated you and seen them with new adult perspective—recognizing they were smaller/more flawed than they seemed when you were powerless?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '💔',
      name: 'Hatred Unconnected to Actions',
      explanation: 'Mrs. Reed hated Jane not for anything Jane did but for being loved by Mr. Reed. Jane was hated for what she represented—evidence that Mr. Reed could love, just not his wife. This thread explores: some people\'s hatred has nothing to do with you. They hate what you represent (love they\'re not receiving, success that highlights their failure, happiness that contrasts with their misery). You can\'t fix hatred that isn\'t based on your actions. Understanding this protects Jane: the hatred reflects Mrs. Reed\'s emptiness, not Jane\'s worth.'
    },
    {
      emoji: '🎭',
      name: 'Character Formation and Adult Outcomes',
      explanation: 'The Reed children became exactly what their upbringing predicted: John spoiled → destroyed, Georgiana valued for beauty → vapid, Eliza forced into cold self-sufficiency → rigid and joyless. Jane educated and disciplined → capable and resilient. The thread suggests: how children are formed (what they\'re taught, praised for, held accountable for) matters more than privilege or hardship alone. The Reeds had wealth but poor character formation; Jane had hardship but good mentors and education. Adult outcomes reflect childhood formation.'
    },
    {
      emoji: '📜',
      name: 'The Revealed Secret That Changes Everything',
      explanation: 'Mrs. Reed\'s confession—hiding Jane\'s uncle\'s letter and lying that she was dead—reveals Jane has family and wealth possibility. This is major plot point: Uncle John Eyre will later become Jane\'s benefactor (inheritance), his lawyer will stop the bigamous wedding (Mr. Briggs at the altar), the family connection will lead to Rivers cousins. But beyond plot, the revelation demonstrates: information withheld can shape entire life trajectory. What Mrs. Reed hid altered Jane\'s path for years.'
    },
    {
      emoji: '🕊️',
      name: 'Forgiveness Offered, Reconciliation Refused',
      explanation: 'Jane offers genuine forgiveness to Mrs. Reed multiple times—not from weakness but from strength. She wants to part at peace, let go of childhood enmity. But Mrs. Reed refuses reconciliation, chooses bitterness over peace, dies unreconciled. The thread explores: you can offer forgiveness, but you can\'t force someone to accept it. Some people are so identified with their resentment that they choose to die with it intact. Mrs. Reed\'s refusal isn\'t Jane\'s failure—it\'s Mrs. Reed\'s choice. Jane did what she could; that\'s enough.'
    },
    {
      emoji: '🔄',
      name: 'Return and Transformation',
      explanation: 'Jane returns to Gateshead (site of childhood trauma) but now as capable adult. The place that once terrified her now seems small. The people who once dominated her are revealed as failures. The return demonstrates transformation: Jane has grown beyond her origins. She can face her past without being diminished by it. She leaves Gateshead for the last time no longer haunted by it—she\'s free of the place and the people who tried to break her.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Mrs. Reed\'s Explanation for Her Hatred',
      question: 'Mrs. Reed explains she hated Jane because Mr. Reed loved Jane more than he loved his wife. Jane was hated for being loved. Does this explanation make Mrs. Reed\'s cruelty understandable, if not excusable? Can someone\'s emotional pain justify harming an innocent child? How should Jane process this revelation—does understanding the root of hatred change how it feels to have been the target?'
    },
    {
      title: 'Deathbed Confession Without Apology',
      question: 'Mrs. Reed confesses hiding the letter and lying about Jane being dead—but refuses to apologize or seek forgiveness. She unburdened her guilt without repenting. Does this confession help Jane or harm her? Should dying people be allowed to confess harmful actions even if they won\'t apologize? What does Jane owe Mrs. Reed at this moment—continued attempts at reconciliation, or permission to leave without it?'
    },
    {
      title: 'The Stolen Future',
      question: 'For three years Jane has had wealthy uncle searching for her, and Mrs. Reed deliberately prevented the connection. Jane could have had family, wealth, security—and it was maliciously stolen. How should Jane process this? Should she focus on what was stolen (grief, rage) or what still might be possible (uncle is still alive, wealth still available)? How do you recover from discovering opportunities were deliberately hidden from you?'
    },
    {
      title: 'Forgiveness Offered and Refused',
      question: 'Jane offers genuine forgiveness and Mrs. Reed refuses it, choosing to die bitter. What does this refusal mean? Should Jane feel she failed to reconcile? Or is Mrs. Reed\'s refusal her own choice that Jane can\'t control? When you offer forgiveness and it\'s rejected, what do you do with that—keep offering, accept the rejection and move on, or something else?'
    },
    {
      title: 'The Reed Children as Adults',
      question: 'John is dead (self-destruction), Georgiana is vapid (valued only for beauty), Eliza is rigid and cold (forced self-sufficiency without warmth). Their adult failures seem predictable from their childhood formation. To what extent are they victims of bad upbringing vs. responsible for who they became as adults? At what point do adults become accountable for changing patterns established in childhood?'
    },
    {
      title: 'Jane\'s Return to Gateshead',
      question: 'Jane returns to Gateshead as capable adult. The place and people who once terrorized her now seem small and pathetic. What does this return and new perspective teach Jane about her own growth? When have you returned to place/people that once intimidated you and seen them differently? What does that shift in perspective reveal about your own development?'
    },
    {
      title: 'Being Hated for What You Represent',
      question: 'Jane was hated not for her actions but for being loved—she represented what Mrs. Reed didn\'t have. When someone hates you for reasons unconnected to what you did, how do you protect yourself from internalizing that hatred? How do you recognize when hatred reflects the hater\'s emptiness rather than your worth? What helps maintain self-esteem when someone projects their pain onto you?'
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
      title: 'Analyzing Deathbed Confessions: Repentance vs. Self-Serving Revelation',
      description: 'Write a comparative analysis of deathbed confessions, examining when confession serves healing vs. when it serves only the confessor. Part 1: Analyze Mrs. Reed\'s confession in Jane Eyre: she reveals hiding the letter and lying about Jane being dead, but refuses to apologize. Ask: What motivated the confession? (Guilt that tormented her, need to unburden before death, final opportunity to hurt Jane, or complex mix?) Who does the confession benefit? (Mrs. Reed gets to ease her conscience; Jane gets information but no apology or restitution) Is confession without repentance reconciliation or final cruelty? Part 2: Compare with other literary or real examples of deathbed confessions: genuinely remorseful confessions that seek forgiveness, confessions that reveal secrets with mixed motivations, confessions that inflict final harm while claiming honesty. Part 3: Develop framework: When is deathbed confession ethical and healing? (Genuinely seeks forgiveness, provides restitution, benefits victim not just confessor) When is it self-serving or harmful? (Unburdening guilt without apologizing, revealing information that hurts people while claiming "honesty," final exercise of power over victim) Part 4: Personal reflection: If someone confessed harmful action to you on their deathbed but refused to apologize, what would you do? Do dying people have special right to unburden themselves even if it harms living people? What does victim owe confessor?',
      purpose: 'This prompt develops critical thinking about confession, repentance, and reconciliation. Students analyze motivations behind revelation: is confessor seeking genuine repair or just easing their own guilt? Does dying status create obligation for victim to absolve? They grapple with complex ethics: dying people have limited time to make amends, but does that justify confession without repentance? Connects to real scenarios: family secrets revealed on deathbed that hurt living relatives, dying parents confessing failures/favoritism without apologizing, people seeking forgiveness while refusing to do work of restitution. Students develop frameworks for evaluating whether confession serves healing or serves only the confessor.'
    },
    
    activity: {
      title: 'Character Formation Outcomes: Tracing Childhood to Adult Results',
      description: 'Students trace how characters\' childhood formation predicts their adult outcomes, examining what childhood traits, values, and experiences shaped who they became. Activity: Create "Formation Charts" for Jane, John, Eliza, and Georgiana Reed. For each: (1) Childhood Formation: What were they praised for? What were they taught? What character traits were developed or discouraged? (2) Adult Outcome: Who did they become? What capabilities do they have? What\'s their emotional state and life success? (3) Connection: How did childhood formation create adult outcome? (Predictable development or surprising transformation?) Apply to Jane: (A) Gateshead (age 0-10): Abused, told she was worthless, locked in red-room → developed rage, sense of injustice, determination to fight back. (B) Lowood (10-18): Harsh conditions but good education, Helen Burns taught patience/faith, Miss Temple taught dignity → developed resilience, capability, emotional intelligence. (C) Thornfield (18-20): Independence, meaningful work, intellectual companionship → became capable adult who can offer forgiveness from strength. Apply to Reeds: John (spoiled, enabled) → self-destructed; Georgiana (praised for beauty) → vapid; Eliza (forced self-sufficiency without love) → rigid coldness. Discussion: What childhood experiences create thriving adults? (Education, discipline balanced with affection, good role models, accountability) What creates struggling adults? (Spoiling without accountability, valuing appearance over substance, abuse without redeeming relationships) Extension: Students reflect on their own formation—what childhood experiences shaped who they\'re becoming?',
      materials: 'Formation charts, timeline templates for character development, comparative analysis worksheets, reflection prompts'
    },
    
    crossCurricular: {
      title: 'Psychology: The Long-Term Effects of Childhood Trauma and Resilience Factors',
      description: 'Partner with psychology to examine how childhood experiences shape adult outcomes, using Jane Eyre characters as case studies. Psychology class covers: (1) Adverse Childhood Experiences (ACEs) and their long-term effects on mental health, relationships, and life outcomes, (2) Resilience factors that help children thrive despite hardship (education, mentors, sense of agency), (3) Toxic parenting patterns and their outcomes (over-indulgence → lack of grit; conditional love based on appearance → shallow self-worth; abuse → various trauma responses), (4) Attachment theory and how childhood relationships shape adult relationship patterns. English class analyzes characters: Jane experienced severe ACEs (abuse, loss, trauma) but had protective factors (Helen Burns, Miss Temple, education, her own determination) → became resilient adult. Reed children had material privilege but poor character formation → became miserable adults. John: enabled and spoiled → no frustration tolerance or accountability → self-destructed. Georgiana: valued only for appearance → shallow, incapable. Eliza: emotionally neglected → closed off, rigid. Students research: What does psychological research say about character formation? Which childhood factors predict adult thriving vs. struggling? Final project: Apply psychology research to literary analysis. Students write papers examining: (1) Jane\'s trauma and resilience factors, (2) How Lowood, despite harshness, provided protective factors (education, mentors), (3) Reed children as examples of how privilege without character formation creates poor outcomes, (4) Mrs. Reed\'s own childhood/marriage as explanation (not excuse) for her cruelty. Include: contemporary applications (what does this teach about parenting, education, youth development?), reflection (what from your own upbringing shaped who you\'re becoming?).',
      subjects: ['Psychology', 'Child Development', 'Trauma Studies', 'Social Work', 'Education', 'Family Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Evaluating Mrs. Reed\'s Confession: Reconciliation, Self-Serving Revelation, or Final Cruelty?',
    prompt: 'Mrs. Reed confesses on her deathbed that she hid Jane\'s uncle\'s letter and lied that Jane was dead, deliberately preventing Jane from connecting with wealthy family who wanted to adopt her. But Mrs. Reed refuses to apologize or seek forgiveness—she confesses, then turns away and dies bitter. Your task: Analyze this deathbed confession from multiple perspectives to determine: Is this reconciliation attempt (however flawed)? Self-serving revelation that benefits confessor more than victim? Or final act of cruelty disguised as honesty? Consider: (1) Mrs. Reed\'s motivations for confessing, (2) Who benefits from the confession, (3) The ethical obligations of dying people vs. rights of their victims, (4) What Jane should do with this information and refused reconciliation.',
    
    guidingQuestions: [
      'What motivated Mrs. Reed to confess? Consider possibilities: (A) Genuine remorse and desire for forgiveness before death, (B) Guilt that tormented her and she needed to unburden before dying (serves her needs, not Jane\'s), (C) Final opportunity to hurt Jane by revealing the full extent of what was stolen, (D) Complex mix of guilt, malice, and need. Which seems most consistent with Mrs. Reed\'s character and her behavior after confessing?',
      'Who benefits from this confession? List what Mrs. Reed gains: (Relief from guilt, ability to die having "told the truth," final exercise of power over Jane). List what Jane gains: (Information about her uncle, understanding of why opportunities never came, confirmation that cruelty was malicious not accidental). List what Jane loses or suffers: (Knowledge of stolen future, pain of learning how much was deliberately hidden, burden of revelation without apology). On balance, who does this confession serve?',
      'Mrs. Reed confesses but refuses to apologize or seek reconciliation. Is confession without repentance meaningful? Can you have reconciliation if confessor reveals harm but won\'t take responsibility? Compare: "I hid your uncle\'s letter because I hated you, but I was wrong and I\'m sorry" vs. "I hid your uncle\'s letter because you deserved it for defying me, and I don\'t regret it." Which is Mrs. Reed\'s confession? What does refusal to apologize reveal about her motivations?',
      'Jane offers forgiveness multiple times and Mrs. Reed refuses. Should Jane keep trying to reconcile or accept Mrs. Reed\'s choice to die bitter? What does Jane owe a dying person who abused her as child and stole her future? Does dying status create special obligation for Jane to absolve Mrs. Reed? Or does Jane\'s offer of forgiveness fulfill her obligation regardless of whether it\'s accepted?',
      'After Mrs. Reed dies unreconciled, Jane leaves Gateshead knowing about her uncle and the stolen letter. How should she process this? Should she focus on what was stolen (grief and rage) or what might still be possible (uncle may still be alive, wealth may still be available)? Does understanding WHY she was hated (for being loved by Mr. Reed) help or harm Jane\'s processing? What does Jane need to do with this information to keep it from poisoning her?'
    ],
    
    thinkingFramework: {
      analyze: 'Map Mrs. Reed\'s confession carefully: (1) Context: She\'s dying, has been hostile to Jane throughout visit, refuses Jane\'s care and offers of reconciliation. (2) The revelation: "Your uncle wrote three years ago wanting to adopt you and make you his heir. I told him you were dead." (3) The justification: She cites Jane\'s childhood "fury" (when Jane defended herself against abuse) as reason for the malicious lie. (4) The refusal: Jane offers forgiveness; Mrs. Reed turns away. She dies hours later without reconciliation. Analyze motivations: What drove the confession? (A) Genuine remorse would include apology and acceptance of forgiveness—Mrs. Reed does neither. Not likely primary motivation. (B) Guilt that tormented her: Mrs. Reed may have been haunted by this secret, needed to confess to die at peace. This benefits Mrs. Reed (eases her conscience) not Jane. Likely motivation. (C) Final cruelty: By revealing what she stole without apologizing, Mrs. Reed hurts Jane one last time while claiming "honesty." Possibly mixed motivation. (D) Power: Even dying, confession is exercise of control—she summons Jane, makes revelation on her terms, refuses forgiveness. Likely part of motivation. Most likely: complex mix of guilt (needs to unburden), malice (still hates Jane, wants her to know full extent of harm), and power (final control). Genuine remorse is notably absent.',
      evaluate: 'Evaluate who benefits from confession. Mrs. Reed gains: (1) Relief from secret that tormented her—she can die having "told truth", (2) Final exercise of power over Jane—controls the revelation, (3) Vindication of sorts—she confesses but maintains she was justified ("you turned on me with fury"). She gets to unburden guilt without doing work of repentance. Mrs. Reed benefits significantly. Jane gains: (1) Information about her uncle—now knows family exists, (2) Understanding of stolen opportunities—explains why certain chances never came, (3) Confirmation that cruelty was malicious not accidental—Mrs. Reed deliberately sabotaged her future. Jane gets information but at cost. Jane loses/suffers: (1) Peace of ignorance—would she rather not know what was stolen?, (2) The pain of revelation—learning three years of opportunity were deliberately hidden, (3) Burden without restitution—she gets confession but no apology, information but no compensation. On balance: confession serves Mrs. Reed\'s need to unburden more than Jane\'s need for healing. Consider ethical framework: When is deathbed confession appropriate? (1) Genuinely remorseful, seeks forgiveness, (2) Provides restitution if possible (gives Jane the letter so she can contact uncle), (3) Takes responsibility without justifying actions, (4) Accepts whatever response victim gives. Mrs. Reed does only #2 (hands over letter). She doesn\'t seek forgiveness (refuses it when offered), doesn\'t take responsibility (justifies her actions), and doesn\'t respect Jane\'s response (dismisses offered reconciliation). Verdict: This is self-serving confession disguised as reconciliation, possibly with continued malicious intent.',
      synthesize: 'Synthesize into framework for evaluating deathbed confessions. Genuine reconciliation includes: (1) Taking responsibility ("What I did was wrong, and the fault is mine"), (2) Genuine remorse ("I regret causing you harm"), (3) Seeking forgiveness without demanding it ("I hope you can forgive me, but I understand if you can\'t"), (4) Restitution where possible (returning letter, connecting Jane with uncle), (5) Respecting victim\'s response (accepting forgiveness if offered, accepting refusal if not). Self-serving confession includes: (1) Unburdening guilt without taking responsibility ("I need to tell you this before I die" focuses on confessor\'s needs), (2) Justifying actions ("You drove me to it with your behavior"), (3) Refusing to apologize or seek forgiveness, (4) Controlling the revelation (timing, framing), (5) Rejecting victim\'s offer of reconciliation (maintaining power by refusing peace). Apply to Mrs. Reed: She confesses (√), provides letter (√), but justifies her actions (✗), refuses to apologize (✗), rejects offered forgiveness (✗). This is primarily self-serving with elements of final cruelty. What should Jane do? (1) Accept that she offered forgiveness and it was refused—that\'s Mrs. Reed\'s choice, not Jane\'s failure. (2) Acknowledge the harm: opportunity was stolen, and that theft shaped Jane\'s life. Grief and rage are appropriate responses. (3) Focus on what\'s still possible: uncle may still be alive, wealth may still be available, she can pursue connection. (4) Recognize the revelation about WHY she was hated (for being loved) protects her from internalizing it—hatred wasn\'t about her worth. (5) Leave Gateshead without remaining bound to Mrs. Reed\'s bitterness—witness someone choosing to die unreconciled without taking responsibility for "fixing" them. Jane can grieve what was stolen while pursuing what\'s still possible.'
    },
    
    expectedDepth: 'Strong responses will: (1) Distinguish between genuine reconciliation (takes responsibility, seeks forgiveness, accepts victim\'s response) and self-serving confession (unburdening guilt without repenting, controlling revelation, rejecting offered reconciliation); (2) Recognize complexity: Mrs. Reed likely has mixed motivations (guilt, malice, power all entangled) rather than pure single motivation; (3) Evaluate power dynamics even in deathbed context—confession can be power move, "honesty" can be weaponized, dying doesn\'t eliminate ability to harm; (4) Consider victim\'s needs vs. confessor\'s needs: whose pain is centered? Who benefits? What would serve healing vs. what serves unburdening?; (5) Apply to contemporary contexts: dying people confessing affairs/favoritism/cruelty without apologizing, family secrets revealed on deathbed that hurt living people, people seeking absolution without doing work of restitution; (6) Develop nuanced position on forgiveness: Jane can offer it (serves her own peace), but can\'t force Mrs. Reed to accept it—refused forgiveness isn\'t Jane\'s failure; (7) Address what Jane should do with revelation: acknowledge harm (grief/rage are valid), pursue what\'s still possible (contact uncle), protect against internalizing hatred (understanding why she was hated helps).',
    
    classroomApplication: 'Works as: (1) Analytical essay (10-12 pages) examining deathbed confession ethics, psychological motivations, and victim\'s response options; (2) Comparative analysis: Mrs. Reed\'s confession vs. other literary/real examples of deathbed confessions (which serve reconciliation vs. which serve confessor?); (3) Debate: "Do dying people have the right to confess harmful actions even if confession causes pain and they won\'t apologize?" with teams arguing for dying person\'s right to truth-telling vs. victim\'s right to protection from further harm; (4) Case study approach: present scenarios of deathbed confessions with varying motivations, students evaluate whether each serves reconciliation or harms victim; (5) Role play: students act out deathbed confession scenes with different approaches (genuine remorse vs. self-serving revelation vs. final cruelty), then debrief about differences. Time: 6-7 class periods including close reading of confession scene, ethical framework development, psychological analysis, contemporary applications, and victim response strategies. Can connect to: psychology (guilt, repentance, trauma), ethics (obligations of dying people vs. rights of victims), religious studies (concepts of forgiveness and death), family systems (intergenerational trauma, abuse dynamics), end-of-life care (hospice workers\' experiences with deathbed confessions). Consider inviting: hospice chaplain or social worker who\'s witnessed deathbed confessions, therapist specializing in family trauma and forgiveness, ethicist to discuss competing obligations.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(21),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🏰',
    title: 'Next Time: Chapter 22 — Jane Returns to Thornfield',
    preview: 'Jane leaves Gateshead forever, carrying knowledge of her uncle and the stolen letter but also freedom from the place that once defined her suffering. She returns to Thornfield eager to see Rochester, her month away feeling like years. The reunion is charged with emotion both have been suppressing. Rochester reveals the house party is long over, Blanche is gone, and he\'s been miserable without Jane. They walk in the garden talking with unusual intimacy—Rochester admits he thought Jane might not return, that the separation felt unbearable. Jane feels the same but can\'t say so directly. Something has shifted between them: the employer-governess distance is collapsing. They\'re moving toward declaration neither has made but both feel. Rochester seems on the verge of confession or proposal, but he\'s still hiding Bertha. Jane senses secrets remain but is so relieved to be back at Thornfield, so happy to be near Rochester again, that she lets herself hope. The chapter ends with both of them circling around feelings neither dares to fully express—while Bertha remains locked upstairs, the secret that will soon explode everything.',
    hookQuestion: 'What will Rochester confess—his feelings for Jane or the truth about Bertha? How long can he maintain the deception while courting Jane? And what will Jane do when she eventually learns that the man she loves has a wife hidden in the attic?'
  }
}

