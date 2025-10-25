/**
 * JANE EYRE - CHAPTER 29
 * 
 * Jane recovers at Moor House, learning about the Rivers siblings—St. John, Diana,
 * and Mary. She hides her identity and past, giving a false name, while gradually
 * revealing carefully edited details about her circumstances.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter29: ChapterData = {
  number: 29,
  title: 'Recovering Among Strangers',
  
  readingTime: 22,
  pages: 15,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Jane recovers at Moor House under the care of the Rivers siblings, concealing her true identity while gradually learning about her rescuers: St. John the dedicated clergyman, and his sisters Diana and Mary, the cultivated and compassionate young women who show her unexpected kindness.',
    
    full: [
      'Jane wakes after three days of fevered sleep to find herself in a clean, simple room at Moor House. Hannah, the servant who initially refused her entry, now tends her with efficient if not warm care. Jane is weak from her ordeal, barely able to move, but no longer in danger of dying. As she recovers, she observes the household: it\'s modest but refined, showing cultivation despite limited means. The Rivers family clearly has education and taste but not wealth. Jane recognizes that they occupy an ambiguous social position—genteel but not affluent, respectable but struggling financially.',
      
      'Diana and Mary Rivers are immediately kind to Jane. They bring her food, sit with her during recovery, ask gentle questions without pressing when she\'s reluctant to answer. The sisters are intelligent, well-read, and share Jane\'s intellectual interests—they discuss books, ideas, and observations with a sophistication Jane hasn\'t encountered since leaving Thornfield. They\'re governesses like Jane was, understand the precarity and challenges of women\'s work, sympathize with her obvious distress without demanding explanations. Jane finds in them the female friendship she\'s always wanted: equals in intellect and situation, women who treat her with respect and genuine care.',
      
      'St. John Rivers is different from his sisters—colder, more reserved, intensely focused on duty and religious calling. He\'s a clergyman preparing for missionary work, dedicated to his vocation with almost fanatical commitment. Where Diana and Mary are warm and spontaneous, St. John is controlled and calculating. He interviews Jane about her circumstances with penetrating questions, trying to assess her character and situation. Jane senses that he sees people as potential instruments for his purposes rather than as individuals to be cared for. Yet he was the one who insisted she be admitted when Hannah refused—his compassion is genuine, even if it\'s rooted in duty rather than warmth.',
      
      'Jane conceals her identity, giving the false name "Jane Elliott" and revealing only carefully edited details about her past: she had a position as governess, left suddenly due to circumstances she can\'t explain, became destitute through no moral failing of her own, and has no family or connections to help her. She hides everything about Rochester, Thornfield, and the aborted wedding—too painful to share, too dangerous to reveal (she still fears Rochester might search for her). The Rivers accept her reticence, not pressing for information she\'s unwilling to give. St. John offers to help her find employment, showing practical kindness even while maintaining his cool reserve. As Jane regains strength, she begins to feel the first stirrings of hope: perhaps she can rebuild her life here, find meaningful work, make a fresh start. But she still thinks constantly of Rochester—wondering where he is, whether he\'s suffering, whether she\'ll ever see him again.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Strategic Self-Disclosure',
      definition: 'The careful management of what personal information to reveal and what to conceal when meeting new people, especially when you\'re vulnerable and need help but also need to protect yourself.',
      context: 'Jane gives a false name ("Jane Elliott"), reveals some truths (she was a governess, became destitute through misfortune), conceals crucial information (her real name, Rochester, the wedding, Thornfield), and deflects questions she won\'t answer. She must balance: (1) Revealing enough to seem honest and gain their help, (2) Concealing enough to protect herself from discovery and judgment. This is strategic information management—Jane controls her narrative, sharing what\'s necessary while hiding what\'s dangerous or too painful.',
      whyItMatters: 'Strategic self-disclosure is crucial skill when you\'re vulnerable: you need help from strangers but also need to protect yourself. Understanding this helps: (1) Recognize when to share and when to conceal—not all information is safe or necessary to reveal, especially to people you don\'t yet trust, (2) Balance honesty (revealing enough truth to build trust) with self-protection (concealing information that could be used against you or that you\'re not ready to share), (3) Control your narrative—you get to decide what story you tell about yourself, especially in early interactions. Modern applications: Job interviews where you must present yourself favorably without revealing everything, dating where you share gradually, asking for help when you\'ve left bad situation but can\'t explain fully. This isn\'t lying—it\'s recognizing that you don\'t owe strangers your entire story immediately, especially when you\'re still processing trauma.'
    },
    {
      term: 'Class Ambiguity and Genteel Poverty',
      definition: 'The social position of people who have education, refinement, and genteel manners but lack the wealth typically associated with their class—"respectable" but struggling financially.',
      context: 'The Rivers family is clearly educated and refined: Diana and Mary are governesses with sophisticated literary knowledge, St. John is a clergyman with university education, their home shows taste and cultivation. But they\'re poor: modest house, working for wages, limited means. They occupy ambiguous social space—too educated and refined to be working class, too poor to be comfortably middle class. Jane recognizes this immediately because she occupies the same ambiguous position herself: governess work is "respectable" but poorly paid, she has education and manners but no money or family support.',
      whyItMatters: 'Class ambiguity creates specific vulnerabilities and complications. Understanding genteel poverty helps: (1) Recognize that education/refinement and financial security don\'t necessarily go together—you can be cultured, intelligent, accomplished and still struggle financially, (2) Understand pressures of maintaining respectable appearance while lacking resources (can\'t dress shabbily without losing respectability, but can\'t afford nice things either), (3) See how this affects women particularly—governessing is one of few "respectable" options for educated women without independent means, but it\'s poorly compensated and precarious. Modern parallels: Graduate degree holders with student debt working low-wage adjunct positions, "cultured" people priced out of cities they consider home, educated professionals unable to afford middle-class lifestyle in expensive urban areas. The combination of education without economic security creates particular kind of stress—maintaining class markers (speech, manners, knowledge) while lacking class resources (money, property, security).'
    },
    {
      term: 'Female Intellectual Companionship',
      definition: 'Friendship between women based on shared intellectual interests, mutual respect for each other\'s minds, and equality in conversation and thought—not just social connection but genuine meeting of minds.',
      context: 'Diana and Mary discuss books, ideas, and observations with Jane as intellectual equals. They don\'t talk down to her or assume superiority; they engage with her thoughts, share their own, debate and explore ideas together. This is different from Jane\'s relationships at Thornfield: with Adèle she was teacher, with Mrs. Fairfax she had pleasant but not intellectually stimulating conversation, with Rochester she had intellectual engagement but also huge power imbalance. With Diana and Mary, Jane finally has what she\'s always wanted: women friends who are her intellectual equals, who value ideas and learning, who treat her as peer.',
      whyItMatters: 'Female intellectual companionship matters because: (1) Women have historically been excluded from or dismissed in intellectual circles—finding other women who take ideas seriously and engage substantively creates validation and community, (2) Friendships based on shared intellectual interests are different from social friendships—they provide mental stimulation, challenge your thinking, expand your understanding, (3) Having intellectual peers who are also women creates space where you don\'t have to perform femininity or intellectuality separately—you can be both thoughtful and female without contradiction. Modern relevance: Women in STEM/academia finding community with other women in their fields, book clubs that go beyond social gathering to genuine intellectual engagement, female friendships that center learning and ideas rather than just emotional support (though emotion matters too). Jane has been intellectually lonely—she\'s smart and curious but has had few opportunities for genuine intellectual exchange with women peers. Diana and Mary fill this void.'
    },
    {
      term: 'Duty-Driven vs. Compassion-Driven Morality',
      definition: 'The distinction between doing good because you believe it\'s your obligation (duty ethics—you help because you should) vs. doing good because you feel empathy for suffering (compassion ethics—you help because you care).',
      context: 'St. John insisted Jane be admitted and helps her find employment—but he does this from duty, not warmth. He believes Christian principles obligate him to help those in distress; he acts on this conviction even when it\'s inconvenient. But his help feels cold, calculated, driven by ought rather than by warmth. Diana and Mary help from compassion: they see Jane suffering and respond with immediate empathy and care. Both approaches lead to helping, but the feeling is different—duty-driven help can feel impersonal (you\'re fulfilling obligation, not caring about me specifically), while compassion-driven help feels warm (you care about me as person).',
      whyItMatters: 'Understanding this distinction helps navigate: (1) Why some help feels cold even when it\'s genuine—the helper is motivated by duty/principle rather than personal care, (2) That both motivations can be valid—duty-driven people are reliable even when they don\'t feel warm toward you, compassion-driven people provide emotional validation along with practical help, (3) Recognizing your own motivations—do you help because you should or because you care? Both are okay, but being honest about it matters. Modern contexts: Institutional help (social services, bureaucratic aid) tends to be duty-driven—you get help because you qualify, not because anyone cares about you personally. Personal help (friends, family, volunteers) tends to be compassion-driven—people help because they care about you. St. John represents institutional morality applied individually: he helps on principle, which makes him reliable but not warm. Diana and Mary represent personal morality: they help because they feel empathy.'
    },
    {
      term: 'Rebuilding After Collapse',
      definition: 'The process of reconstructing your life after experiencing complete breakdown—when you\'ve lost everything (job, home, relationships, identity) and must start over from nothing.',
      context: 'Jane is beginning to rebuild: she\'s physically recovering, finding shelter and care, considering employment options, cautiously forming new relationships. She\'s moving from survival mode (desperately seeking food and shelter) to reconstruction mode (thinking about future, making plans, establishing new identity). But rebuilding isn\'t just practical (finding work, securing housing)—it\'s also psychological (processing what happened, deciding who you are now, constructing new narrative about your life). Jane must figure out: Who is "Jane Elliott"? What story will she tell about herself? How will she move forward without revealing her past?',
      whyItMatters: 'Rebuilding after collapse involves: (1) Physical reconstruction—securing basic needs (shelter, food, income, safety), (2) Social reconstruction—forming new relationships, finding community, establishing support network, (3) Narrative reconstruction—creating new story about who you are and what happened (especially when you can\'t or won\'t tell the full truth), (4) Psychological reconstruction—processing trauma, grieving losses, finding meaning in what happened, deciding who you want to be going forward. Modern relevance: Rebuilding after job loss, divorce, illness, addiction recovery, escaping abusive relationship, any situation where your previous life structure collapses and you must create new one. Understanding this process helps: recognize rebuilding takes time and involves multiple dimensions, give yourself permission to reconstruct your narrative (you don\'t owe everyone your full trauma story), value small progress (getting out of bed, having conversation, thinking about future—all are victories when rebuilding from collapse), find community that supports reconstruction without demanding explanations you\'re not ready to give.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane is in recovery mode—physically weak from her ordeal, emotionally raw from leaving Rochester, psychologically fragile as she processes her near-death experience and begins rebuilding. She\'s cautious with the Rivers, concealing her identity and controlling what information she reveals. This shows her intelligence and self-protective instinct: she knows she\'s vulnerable and manages the situation carefully. Yet she\'s also drawn to Diana and Mary, finding in them the intellectual companionship and female friendship she\'s craved. Jane is caught between hope (maybe I can rebuild here) and grief (I still love Rochester, still think of him constantly). She\'s beginning to imagine a future, but it\'s a future defined by what she\'s lost.',
      keyTrait: {
        emoji: '🛡️',
        text: 'Cautiously Rebuilding'
      }
    },
    {
      name: 'Diana Rivers',
      development: 'Diana is warm, intelligent, and immediately compassionate toward Jane. She engages Jane in intellectual conversation, shares books and ideas, treats her as equal despite Jane\'s destitute arrival. Diana is spontaneous and affectionate—she responds to Jane with genuine warmth, not just duty. She represents one model of educated womanhood: cultivated mind combined with warm heart, intelligence without coldness. Diana will become one of Jane\'s closest friends, offering the female companionship Jane has never truly had.',
      keyTrait: {
        emoji: '📚',
        text: 'Warm Intellect'
      }
    },
    {
      name: 'Mary Rivers',
      development: 'Mary shares Diana\'s intelligence and warmth, though she\'s slightly quieter and more reserved. She too engages Jane intellectually, treating her with kindness and respect. Mary and Diana function almost as a unit in this chapter—both are compassionate, both are educated, both offer Jane friendship without judgment. Mary represents the same model as Diana: educated woman with both intellectual capabilities and emotional warmth. Together, they show Jane what female friendship can be.',
      keyTrait: {
        emoji: '💚',
        text: 'Gentle Wisdom'
      }
    },
    {
      name: 'St. John Rivers',
      development: 'St. John is introduced more fully as cold, dutiful, and intensely focused on his religious calling. He interrogates Jane about her circumstances with penetrating questions, assessing her character and situation. He\'s helpful but not warm—he offers practical assistance (finding her employment) from duty rather than affection. St. John sees people through the lens of usefulness for his missionary purposes: he\'s evaluating Jane not just to understand her but to assess whether she might be valuable somehow. He represents duty-driven morality—reliable but cold, principled but lacking warmth.',
      keyTrait: {
        emoji: '⛪',
        text: 'Cold Duty'
      }
    },
    {
      name: 'Hannah',
      development: 'Hannah, who initially refused Jane entry, now cares for her with efficient competence. She\'s not warm—she remains somewhat suspicious and reserved—but she does her duty properly. Hannah represents working-class practicality: she protects the household, does her job well, and gradually warms slightly to Jane as Jane proves herself respectable. Her initial harshness is revealed as caution born from experience and responsibility, not personal cruelty.',
      keyTrait: {
        emoji: '🧹',
        text: 'Practical Caution'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // Analysis of significant lines
  // ===================================================================
  quotes: [
    {
      text: '"What is your name?" "Jane Elliott." I gave a false name without hesitation. I must protect myself. I must control what they know of me.',
      analysis: 'Jane\'s immediate decision to lie about her name shows her awareness of vulnerability and her determination to control her narrative. The false name "Jane Elliott" keeps "Jane" (maintaining some connection to her identity) while discarding "Eyre" (severing connection to her past and preventing Rochester from finding her). This moment establishes Jane\'s cautious approach to the Rivers: she\'ll reveal what serves her purposes and conceal what endangers her. It\'s strategic self-protection, not malicious deception—she\'s a vulnerable woman among strangers and takes reasonable precaution. The lack of hesitation suggests she\'d already decided on this approach, showing Jane\'s capacity for quick thinking even in weakened state.'
    },
    {
      text: '"Diana and Mary speak as I have longed to speak—of books, ideas, the life of the mind. Finally, I have found women who are my intellectual equals, who value learning and thought."',
      analysis: 'This recognition reveals Jane\'s intellectual loneliness throughout the novel. She\'s been surrounded by people who don\'t engage her mind: Mrs. Reed despised her, Lowood offered Helen (brief intellectual companionship) but then loss, Thornfield provided Rochester (intellectually stimulating but with huge power imbalance) but no female peers. Diana and Mary offer what Jane has craved: women who are both intellectually sophisticated and emotionally warm, who treat her as equal in conversation and thought. This is Jane finding her intellectual home among women—a community of minds where being female and being thoughtful aren\'t contradictory.'
    },
    {
      text: '"St. John helps from duty, not from warmth. He does what Christian principle demands, but I feel no personal care from him. He sees me as obligation, not as person."',
      analysis: 'Jane recognizes the distinction between duty-driven and compassion-driven morality. St. John is reliable—he will help because his principles demand it—but his help feels cold because it\'s not motivated by personal care for Jane as an individual. This observation foreshadows St. John\'s eventual proposal: he\'ll want to marry Jane not from love but from duty, because she\'d be useful for his missionary work. Jane is learning to read St. John\'s character, understanding that while he\'s good (principled, dedicated, helpful), he\'s not warm (caring, personally invested, emotionally available). This matters because Jane will have to decide later whether duty-based relationship is enough, or whether she needs warmth and genuine personal care.'
    },
    {
      text: '"I think of Rochester constantly. Where is he? Does he suffer? Will I ever see him again? I have left him, but I cannot stop loving him."',
      analysis: 'Despite finding safety and beginning to rebuild, Jane\'s thoughts return obsessively to Rochester. She hasn\'t stopped loving him—leaving Thornfield was about principle, not about ceasing to care. This establishes the emotional reality that will drive the rest of the novel: Jane can\'t simply move on and forget Rochester. Her love persists even when she knows the relationship was impossible, even when she\'s physically far away, even when she\'s trying to build new life. The questions—Where is he? Does he suffer? Will I see him again?—reveal Jane\'s ongoing emotional connection and her uncertainty about whether separation is permanent or temporary.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS
  // Themes and Literary Techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Identity Management and Self-Protection',
        explanation: 'Jane must manage how she presents herself to the Rivers: revealing enough to gain help and trust, concealing enough to protect herself from discovery and judgment. She gives a false name, shares carefully edited version of her story, deflects questions she won\'t answer. This isn\'t deception for malicious purposes—it\'s strategic self-protection when vulnerable. The theme explores: How do we decide what to reveal and what to conceal? When is strategic information management legitimate self-protection vs. manipulative deception? How do we balance need for help (which requires some honesty) with need for privacy and safety (which requires some concealment)? Jane navigates this carefully, showing intelligence about social dynamics and self-preservation.'
      },
      {
        name: 'Female Intellectual Community',
        explanation: 'Diana and Mary offer Jane what she\'s never had: female friendship based on intellectual equality. They discuss books, ideas, and observations as peers, treating Jane\'s mind with respect and engaging substantively with her thoughts. This represents a model of female community centered on shared intellectual interests, not just emotional support or social connection. The theme challenges the stereotype that women\'s friendships are purely emotional/social while men\'s include intellectual dimensions. Jane finds validation and joy in this intellectual companionship—she\'s not just supported emotionally but stimulated intellectually by women who value ideas and learning as she does.'
      },
      {
        name: 'Genteel Poverty and Class Ambiguity',
        explanation: 'The Rivers family occupies ambiguous social position: educated and refined but financially struggling. They\'re "respectable" but not wealthy, cultured but not comfortable. This class ambiguity creates specific pressures: maintaining genteel appearances without resources, doing wage work (governessing, clergy) while preserving respectability, having education without economic security. Jane recognizes this position because she shares it—governess work is "respectable" but precarious and poorly paid. The theme exposes how Victorian class system created vulnerable position for educated people without wealth, particularly women who had few employment options beyond governessing or teaching.'
      },
      {
        name: 'Rebuilding Identity After Collapse',
        explanation: 'Jane is reconstructing her life after complete breakdown: she\'s lost her home, her love, her employment, her plans for the future. Now she must rebuild from nothing, creating new identity ("Jane Elliott"), new story about herself, new vision for her future. This process is both practical (finding work, securing housing) and psychological (processing trauma, grieving loss, deciding who she is now). The theme explores: How do we rebuild after everything collapses? What parts of old identity do we keep vs. what do we leave behind? How do we construct new narrative when we can\'t or won\'t tell the full truth about what happened? Jane\'s cautious rebuilding shows both her resilience and her ongoing vulnerability.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Strategic Information Asymmetry',
        explanation: 'Brontë creates dramatic irony through information gaps: readers know Jane\'s full story (Rochester, the wedding, Thornfield) while the Rivers family knows only what Jane chooses to reveal. This technique creates tension (Will Jane\'s deception be discovered?) and allows readers to evaluate how Jane manages information strategically. We see her calculating what to share and what to conceal, making real-time decisions about self-disclosure. This positions readers as Jane\'s confidants—we know her secrets and watch how she navigates concealing them from others.',
        example: 'Jane gives false name "Jane Elliott" and edited version of her story (was governess, left due to unspecified circumstances, has no family), while readers know the full truth about Rochester, the bigamy, and why she fled. The gap between what Jane reveals and what we know creates suspense and lets us judge whether her strategic concealment is justified.'
      },
      {
        name: 'Character Foils and Parallel Structures',
        explanation: 'Brontë structures the Rivers family as deliberate contrasts and parallels to Thornfield characters: Diana and Mary are intellectual female companions (unlike anyone at Thornfield), St. John is cold duty-driven male authority figure (contrasting with Rochester\'s passionate warmth), Hannah is practical working-class woman (like Mrs. Fairfax but more suspicious). These parallels allow readers to compare Jane\'s two major household experiences, highlighting what was missing at Thornfield (female intellectual companionship) and what she\'ll miss about it (Rochester\'s passion vs. St. John\'s coldness).',
        example: 'Diana and Mary\'s warm intellectual engagement with Jane highlights that Jane had no female peers at Thornfield—only child (Adèle), elderly housekeeper (Mrs. Fairfax), or Rochester. St. John\'s cold duty-driven help contrasts sharply with Rochester\'s intense emotional investment, showing Jane different models of male behavior and relationship.'
      },
      {
        name: 'Narrative Pacing: Recovery as Gradual Revelation',
        explanation: 'Brontë paces Jane\'s physical recovery parallel to her gradual revelation about the Rivers family. As Jane regains strength, readers learn more about the household: first basic facts (names, roles), then character traits (Diana and Mary warm, St. John cold), then deeper understanding (their financial struggles, intellectual interests, values). This gradual unfolding mirrors Jane\'s own process of observation and assessment—she\'s learning about them as we are, evaluating whether this household is safe for her.',
        example: 'Chapter begins with Jane barely conscious, able only to observe basic details (clean room, simple furnishings). As she recovers, she notices more: books suggesting education, conversation revealing intellectual sophistication, family dynamics showing relationship patterns. By chapter\'s end, she has developed clear sense of each person\'s character and the household\'s nature.'
      },
      {
        name: 'First-Person Intimacy and Withheld Information',
        explanation: 'Jane narrates in first person, creating intimacy with readers—we\'re inside her head, knowing her thoughts and motivations. But she also withholds information from the Rivers family, creating tension between what readers know (full story) and what characters know (Jane\'s edited version). This technique makes readers complicit in Jane\'s deception: we understand why she lies, sympathize with her need for protection, and hope she won\'t be discovered. The first-person narration bonds us to Jane while the information asymmetry creates dramatic irony.',
        example: 'Jane\'s internal narration explains her decision to give false name: "I must protect myself. I must control what they know of me." Readers understand her reasoning and sympathize. But the Rivers family doesn\'t have access to this explanation—they must judge Jane based only on what she reveals, not knowing her full story or motivations.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Contemporary parallels and discussion
  // ===================================================================
  modernAdaptation: {
    setting: 'Modern setting: After fleeing complicated situation, protagonist recovers in shelter/community house run by volunteers, concealing their identity and past while gradually forming relationships with the people who helped them.',
    parallels: [
      '🔹 **Strategic Self-Disclosure After Trauma**: Deciding what to reveal to people helping you when you can\'t or won\'t tell the full story. Modern contexts: Using false name at shelter, giving edited version of why you left abusive relationship, concealing details that could endanger you or that you\'re not ready to share. Balancing need for help (requires some honesty) with need for protection (requires some concealment).',
      '🔹 **Finding Intellectual Community Among Peers**: Discovering people who share your interests and engage your mind, especially after period of isolation or situations where you couldn\'t be yourself. Modern contexts: Finding online communities that discuss topics you care about, connecting with people who share niche interests, discovering friends who "speak your language" intellectually. The relief and joy of not having to dumb down or explain yourself.',
      '🔹 **Duty-Driven vs. Compassion-Driven Help**: Receiving help from people motivated by obligation/principle vs. people motivated by genuine care for you. Modern contexts: Institutional help (social services, bureaucratic aid) where you\'re case number vs. personal help (volunteers, friends) where people know and care about you. Both are valuable but feel different—one is reliable but impersonal, other is warm but potentially inconsistent.',
      '🔹 **Class Ambiguity and Credential-Poverty Gap**: Having education/skills without corresponding economic security. Modern contexts: Graduate degree holders working low-wage jobs, experienced professionals unable to find work in their field, being "overqualified" but still broke. The stress of maintaining professional identity while struggling financially, having cultural capital (knowledge, credentials, networks) without economic capital (money, property, security).',
      '🔹 **Rebuilding Identity After Collapse**: Reconstructing life after everything falls apart—creating new identity, new story about yourself, new vision for future. Modern contexts: Starting over after divorce, building new life after leaving abusive situation, reconstructing identity after job loss or illness, any situation where previous life structure collapses and you must create new one from scratch.'
    ],
    discussionPrompt: 'Have you managed what information to reveal vs. conceal when meeting new people, especially when vulnerable? How did you decide what to share? Have you found intellectual community—people who engage your mind and share your interests—after period without that connection? How did it feel? Have you received help that was duty-driven (efficient but impersonal) vs. compassion-driven (warm but sometimes inconsistent)? Which did you prefer, or did you need both? Have you experienced class ambiguity—having education/credentials without corresponding economic security? How does that feel? Have you rebuilt your life after collapse—what was that process like?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes across chapters
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🎭',
      name: 'Identity Management and Strategic Concealment',
      explanation: 'Jane creates new identity "Jane Elliott" and controls what the Rivers family knows about her. This is self-protection, not malicious deception—she\'s vulnerable and needs help but also needs to protect herself from discovery and judgment.'
    },
    {
      emoji: '👭',
      name: 'Female Intellectual Friendship',
      explanation: 'Diana and Mary provide the female intellectual companionship Jane has craved—women who are her mental equals, who value ideas and learning, who engage substantively with her thoughts. This fills void Jane has felt throughout the novel.'
    },
    {
      emoji: '🏚️',
      name: 'Genteel Poverty and Class Vulnerability',
      explanation: 'The Rivers family shares Jane\'s ambiguous class position: educated and refined but financially struggling. This creates specific pressures and vulnerabilities, especially for women with limited employment options beyond governessing.'
    },
    {
      emoji: '💔',
      name: 'Persistent Love Despite Separation',
      explanation: 'Jane thinks constantly of Rochester despite beginning to rebuild her life. Her love hasn\'t diminished with distance or time—she left him from principle, not from ceasing to care. This ongoing attachment will drive her eventual return.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Questions for classroom or reading group discussion
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Strategic Self-Disclosure',
      question: 'Is Jane justified in giving a false name and concealing her past from the Rivers family? When is strategic information management legitimate self-protection vs. manipulative deception? What determines the ethical difference?'
    },
    {
      title: 'Duty vs. Compassion',
      question: 'Compare St. John\'s duty-driven help (he helps because principle demands it) with Diana and Mary\'s compassion-driven help (they help because they care). Which is more valuable? Can help be genuine if it\'s motivated by obligation rather than affection? What does the difference feel like to the person receiving help?'
    },
    {
      title: 'Female Intellectual Community',
      question: 'What does Jane gain from intellectual companionship with Diana and Mary that she couldn\'t get from her relationship with Rochester? Why does having female intellectual peers matter specifically? What void does this fill for Jane?'
    },
    {
      title: 'Class Ambiguity',
      question: 'The Rivers family is educated and refined but financially struggling—what does Brontë reveal about Victorian class system through this portrayal? How does "genteel poverty" create specific vulnerabilities, especially for women? What modern parallels exist to this class ambiguity?'
    },
    {
      title: 'Rebuilding Process',
      question: 'Jane is reconstructing her identity and life after complete collapse. What does this rebuilding process involve beyond just finding practical necessities like work and housing? How does creating new identity "Jane Elliott" help or hinder her recovery?'
    },
    {
      title: 'Persistent Attachment',
      question: 'Despite finding safety and beginning new life, Jane thinks constantly of Rochester. Why can\'t she simply move on? What does this reveal about the nature of her attachment to him? How will this persistent love shape the rest of the novel?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive questions with AI-powered responses
  // ===================================================================
  amplifiedDiscussion: [],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Teaching activities and cross-curricular connections
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Strategic Self-Disclosure Narrative',
      description: 'Write a first-person narrative from a time when you had to manage what personal information to reveal vs. conceal when meeting new people, especially when you were vulnerable and needed help but also needed to protect yourself. Set up the situation: What were your circumstances? Why were you vulnerable? What did you need from these people? Why couldn\'t you reveal everything? Then narrate the specific interaction: What did you choose to reveal? What did you decide to conceal? How did you make these decisions in the moment? What questions made you uncomfortable? How did you deflect or redirect when asked things you wouldn\'t answer? Finally, reflect: Looking back, were your choices justified? Did strategic concealment help or hurt you? Would you handle it differently now? This isn\'t about lying—it\'s about recognizing that we all manage information strategically, especially when vulnerable, and exploring the ethics and psychology of that process.',
      purpose: 'Develops students\' understanding of strategic self-disclosure as normal part of social interaction, not inherently deceptive. Explores ethical dimensions: when is information management self-protection vs. manipulation? Practices first-person narrative voice, realistic dialogue, and reflective analysis. Connects to Jane\'s situation: she gives false name and edited story not from malice but from legitimate need to protect herself while vulnerable. Helps students: (1) Recognize they don\'t owe everyone their full story, especially when vulnerable, (2) Develop language for talking about privacy, boundaries, and strategic information sharing, (3) Reflect on their own experiences of managing what to reveal/conceal in different contexts.'
    },
    
    activity: {
      title: 'Comparing Models of Help: Duty vs. Compassion Role-Play',
      description: 'Students role-play scenarios comparing duty-driven help (motivated by obligation/principle) vs. compassion-driven help (motivated by empathy/care), exploring how different motivations affect both helper and helped. Divide class into groups of three: Helper A (duty-motivated), Helper B (compassion-motivated), Person Seeking Help. Give scenarios: (1) Homeless person asking for money/food, (2) Friend repeatedly needing to borrow money, (3) Coworker asking for help with project, (4) Family member needing care during illness. Helper A approaches each scenario from duty perspective: "I should help because [it\'s my responsibility / faith requires it / it\'s the right thing to do]." Helper B approaches from compassion perspective: "I want to help because [I care about you / I feel empathy for your situation / your suffering moves me]." Person Seeking Help receives both types of help and reflects: How did each feel? Which did you prefer? Did you trust one more than the other? After role-plays, discuss: Can both motivations be genuine? Is one more valuable than the other? What situations call for which approach?',
      materials: 'Scenario cards, role-play guidelines, reflection worksheets, video recording equipment (optional—for students to watch themselves and analyze), Jane Eyre Chapter 29 excerpts comparing St. John vs. Diana/Mary'
    },
    
    crossCurricular: {
      title: 'Sociology: Class Ambiguity and Credential-Poverty Gap',
      description: 'Research and analyze phenomenon of "genteel poverty" (historical) and modern "credential-poverty gap" (having education/skills without corresponding economic security). Historical research: Explore Victorian governess position—required education and refinement but paid poorly, occupied ambiguous class position (not servant but not family, educated but economically dependent). Modern research: Examine contemporary credential-poverty gap—graduate degree holders working low-wage adjunct positions, experienced professionals unable to find work in field, "overqualified but broke" phenomenon. Analyze: What creates this gap between cultural capital (education, credentials, networks) and economic capital (money, property, security)? What specific stresses does this create? How do people maintain class markers (speech, manners, professional identity) while lacking class resources? Present findings comparing Victorian and modern experiences of class ambiguity.',
      subjects: ['Sociology', 'History', 'Economics', 'Women\'s Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // Deep analysis prompt
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Ethics of Strategic Self-Disclosure: Truth, Privacy, and Self-Protection',
    prompt: 'Jane gives a false name ("Jane Elliott") and shares only carefully edited version of her story with the Rivers family, concealing crucial information about Rochester, Thornfield, and why she fled. Is this justified self-protection or manipulative deception? When is strategic information management legitimate vs. when does it become unethical lying? Where is the line between protecting your privacy (not owing strangers your full story) and deceiving people who are helping you (concealing information they might reasonably expect to know)?',
    guidingQuestions: [
      'Map what Jane reveals vs. what she conceals. Revealed: she was a governess, left her position suddenly due to circumstances she can\'t explain, became destitute through no moral failing, has no family or connections. Concealed: her real surname (Eyre), Rochester\'s existence, the aborted wedding, why she actually left, where she came from (Thornfield). Why does she reveal what she reveals? (Establishes she\'s respectable, explains her situation without details, gives them enough to help her.) Why does she conceal what she conceals? (Protects her from being found by Rochester, avoids judgment about the relationship, prevents having to explain complex painful situation, maintains some privacy while vulnerable.)',
      'Consider Jane\'s vulnerabilities and needs. She\'s: (A) Physically weak from near-death experience, (B) Emotionally traumatized from leaving Rochester, (C) Socially isolated with no connections or resources, (D) Potentially in danger if Rochester searches for her, (E) Worried about being judged harshly if people learn about the relationship. She needs: (A) Immediate help (food, shelter, care), (B) Employment to support herself, (C) Community and human connection, (D) Privacy to process trauma, (E) Protection from discovery. Given these vulnerabilities and needs, what information management is reasonable? Does being vulnerable and needing help obligate you to reveal everything, or does it justify protecting yourself through strategic concealment?',
      'Examine the Rivers family\'s perspective and what they might reasonably expect to know. They\'re helping a stranger who appeared destitute at their door. What do they have right to know? Arguments they deserve to know more: (A) They\'re providing help (housing, food, care, employment assistance), so they have right to know who they\'re helping, (B) Concealing information could be hiding something dangerous or disreputable, putting them at risk, (C) Building relationship on deception (even if by omission) is unfair to people who are being kind. Arguments Jane has right to privacy: (A) Not everyone is entitled to your full story, even people helping you, (B) Jane hasn\'t lied about anything morally relevant—she hasn\'t committed crimes or done anything that threatens them, (C) Revealing everything about Rochester/Thornfield serves no purpose except satisfying curiosity and could harm Jane (if they judge her or if information gets back to Rochester), (D) Privacy is legitimate boundary even when receiving help.',
      'Apply to contemporary contexts: Someone fleeing abusive relationship seeks help at shelter—do they have to explain full details of abuse, or can they just say "I left difficult situation"? Someone who was fired asks friend for job reference—do they have to reveal why they were fired, or can they just say "position didn\'t work out"? Immigrant seeking asylum can\'t reveal certain details of their story without endangering family back home—is it okay to give edited version? Job interview requires explaining gap in resume from time you were struggling with mental health—how much must you reveal? In each case, tension between: (1) being honest enough that people can assess whether to help/trust you, (2) protecting yourself by not revealing everything (for safety, privacy, or because you\'re not ready to share trauma).'
    ],
    thinkingFramework: {
      analyze: 'Break down the ethics of information management. Three key concepts: (1) **Lying** (stating falsehoods) vs. **Concealing** (not revealing truths)—Jane does both (false name is lie; not mentioning Rochester is concealment). Are these morally equivalent? (2) **Privacy** (you have right not to reveal personal information) vs. **Deception** (you have duty not to mislead people helping you). Where\'s the boundary? (3) **Context-dependent ethics**—what you\'re obligated to reveal depends on: relationship (strangers vs. intimates), circumstances (vulnerability, danger, trauma), relevance (does information affect their decision to help?). Apply these frameworks: Jane\'s false name is lie (stated falsehood), but is it ethically problematic given her vulnerability and need for protection? Her concealment of Rochester is omission (not lying), but does accepting help from Rivers create obligation to reveal more?',
      evaluate: 'Judge Jane\'s choices considering: (1) Harm vs. benefit—Does Jane\'s information management harm the Rivers? They\'re not endangered, not materially harmed, not used for purposes they wouldn\'t otherwise accept. She\'s not taking advantage of them—she genuinely needs help and plans to repay through honest work. The main potential harm is: if they knew full story, they might judge her differently or refuse help. But is that harm to them or to her? (2) Proportionality—Are Jane\'s deceptions proportional to her needs? Giving false surname when fleeing potential pursuit seems reasonable. Not explaining complex painful situation about Rochester to strangers seems reasonable. Would revealing everything serve legitimate purpose for Rivers, or would it just expose Jane\'s trauma unnecessarily? (3) Alternative options—What else could Jane do? Reveal everything (risks judgment, exposure, having to relive trauma while vulnerable), reveal nothing (can\'t get help without explaining situation somewhat), reveal middle path (what she actually does). Is there better option than what she chooses?',
      synthesize: 'Consider broader questions about truth, privacy, and trust in relationships. Absolutist position: lying/concealment is always wrong; you must tell truth to people helping you. But this ignores: (A) legitimate privacy rights—you don\'t owe everyone your story, (B) context of vulnerability—demanding full disclosure from traumatized people may be harmful, (C) irrelevance of concealed information—if what you\'re hiding doesn\'t affect them or their decision to help, why must you reveal it? Relativist position: context determines what you must reveal; strategic concealment is fine when protecting yourself. But this ignores: (A) building relationships on deception creates fragile foundations, (B) people helping you have some right to know relevant information, (C) autonomy requires others can make informed decisions. Middle path: Distinguish between (1) information legitimately private (your trauma details, full history, thoughts/feelings), (2) information relevant to helper\'s decision (are you dangerous? have you done something that would make them not want to help?), (3) information that affects relationship (major facts that would change how they see you). You must be honest about (2), should eventually share (3) as relationship develops, can keep (1) private. Does Jane meet this standard?'
    },
    expectedDepth: 'This should produce nuanced ethical reasoning that resists simple "lying is always wrong" or "anything goes when protecting yourself" conclusions. Students should: (1) Distinguish between different types of information management (lying vs. omission vs. deflection vs. privacy), (2) Consider context—Jane\'s vulnerability, the Rivers\' expectations, the relevance of concealed information, (3) Recognize competing legitimate claims—Jane\'s right to privacy and self-protection vs. Rivers\' right to informed decision-making, (4) Apply to real situations where they or others have managed information strategically. Aim for synthesis that acknowledges: Jane\'s choices are defensible given her circumstances but create potential complications (what happens when truth emerges?), absolute honesty isn\'t always possible or desirable when you\'re vulnerable, but building relationships on concealment has costs, privacy is legitimate right but relationships also require trust which comes from openness. The goal is sophisticated understanding that ethical information management depends on context, relationships, and stakes—not simple rules that apply equally in all situations.',
    classroomApplication: 'Use this to explore real dilemmas students face about what to reveal vs. conceal in different contexts. Start with Jane\'s situation: Is she justified? Then move to student examples: What do you owe to reveal in job interview? On first date? When asking friend for help? When explaining why you need extension on assignment? Role-play scenarios: Someone asks "Why did you leave your last job?" (you were fired but that\'s complicated story)—how do you answer? Friend asks "Why were you absent last week?" (you were dealing with mental health crisis you\'re not ready to share)—what do you say? College application asks about gap in education (you had to work to support family but it sounds like you were unfocused)—how do you frame it? After each, discuss: What\'s ethically required disclosure vs. legitimate privacy? How do vulnerability, power dynamics, and relationship type affect what you must reveal? Goal: develop students\' capacity to navigate information management ethically—recognizing both that they have privacy rights AND that relationships require some openness, finding balance between self-protection and honesty.'
  },
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🏫',
    title: 'Jane Finds Work',
    preview: 'St. John secures Jane a position teaching at a village school for poor children—humble work far beneath her qualifications, but honest employment that gives her independence and purpose...',
    hookQuestion: 'Will Jane find satisfaction in teaching poor children, or will she long for the life she left behind at Thornfield?'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating one-liner about literature in STEM age (50 messages, cycled)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(29),
}

