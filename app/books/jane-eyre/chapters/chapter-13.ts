/**
 * JANE EYRE - CHAPTER 13
 * 
 * Rochester arrives at Thornfield and summons Jane to the drawing room
 * for their first formal meeting—charged intellectual conversation about
 * her art and unconventional views
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter13: ChapterData = {
  number: 13,
  title: 'The Drawing Room Interview',
  
  readingTime: 25,
  pages: 15,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Rochester returns to Thornfield and summons Jane to the drawing room for their first formal meeting, where they engage in charged intellectual conversation about her art, her views on beauty and talent, and her refusal to flatter or submit—establishing a relationship unlike anything Victorian propriety would recognize.',
    
    full: [
      'Several days pass after Rochester\'s arrival before Jane sees him properly. She catches glimpses—hearing his voice giving orders, seeing him from a distance with Pilot—but the master doesn\'t send for his governess. Mrs. Fairfax explains that Mr. Rochester is a changeable man, sometimes sociable, sometimes withdrawn. Jane returns to her quiet routine with Adèle, half-expecting Rochester to leave again without acknowledgment. Then one evening, Mrs. Fairfax summons Jane: Mr. Rochester wants to see her in the drawing room after Adèle\'s bedtime.',
      
      'Jane enters the drawing room to find Rochester lounging in a chair by the fire with Pilot at his feet. He\'s not conventionally handsome—rough features, dark complexion, a stern brow—but there\'s something compelling about him. He interrogates Jane about her background: How long has she been at Thornfield? Where did she come from? What did she think of Lowood? His questions are direct, almost rude by Victorian standards, with none of the polite small talk expected between master and governess. Jane answers honestly but briefly, refusing to elaborate or perform gratitude. Rochester seems intrigued by her composure. He asks to see her portfolio of artwork—paintings she\'d brought from Lowood.',
      
      'The paintings reveal Jane\'s inner life: dramatic, dreamlike watercolors full of symbolic imagery—a drowned corpse, a colossal head rising from an iceberg, a veiled evening star. Rochester studies them intently and asks penetrating questions about technique, inspiration, and whether Jane is satisfied with them. Jane admits the images in her imagination were more vivid than what she could execute—she\'s dissatisfied with the gap between vision and skill. Rochester comments that this self-awareness is rare. The conversation shifts to broader questions: Is she happy at Thornfield? Does she find it dull? Jane replies that she\'s content with her situation—she has interesting work, kind treatment, comfortable lodgings. When Rochester presses whether she thinks him handsome, Jane blurts "No, sir"—then is shocked at her own bluntness.',
      
      'Rochester laughs at her honesty. He explains he\'s testing whether she\'ll flatter him like most employees would, and he\'s pleased she doesn\'t. He tells her he likes plain speech and expects her to continue being direct with him. He comments on her youth (eighteen), her lack of family, her odd position (educated but poor, ladylike but employed). Jane feels both uncomfortable and exhilarated by this unconventional conversation. Rochester dismisses her abruptly, telling Mrs. Fairfax that Jane is "not at all what I expected." After Jane leaves, Mrs. Fairfax remarks that she believes Mr. Rochester rather likes Jane\'s company—unusual, since he typically avoids governesses. Jane retires to her room feeling that something has shifted. She\'s encountered an intellectual equal who doesn\'t expect her to perform conventional femininity, and she\'s both unsettled and fascinated by him.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Intellectual Equality',
      definition: 'A relationship where both parties engage as mental equals regardless of social or economic disparities; mutual respect for each other\'s thoughts, opinions, and capabilities.',
      context: 'Despite Jane being a poor governess and Rochester being her wealthy employer, they speak as intellectual equals. He asks her opinions on art, beauty, and satisfaction. He challenges her thinking. She speaks honestly rather than deferentially. Neither performs their assigned social roles—he doesn\'t condescend, she doesn\'t grovel. This equality is radical for Victorian England.',
      whyItMatters: 'This chapter establishes the foundation for Jane and Rochester\'s entire relationship: it\'s built on intellectual connection rather than hierarchy. Jane won\'t love Rochester because he\'s wealthy or because he\'s her employer—she\'ll love him because he treats her as an intellectual equal. This is revolutionary for 1847: a poor governess and wealthy gentleman relating as minds first, positions second.'
    },
    {
      term: 'Plain Speech and Radical Honesty',
      definition: 'Speaking truth directly without social pleasantries, flattery, or diplomatic cushioning; refusing to perform expected politeness.',
      context: 'When Rochester asks if Jane finds him handsome, she says "No, sir" before she can stop herself. Most employees would lie or deflect. Rochester is delighted rather than offended, telling Jane: "I see you laugh rarely; but you can laugh very merrily: believe me, you are not naturally austere... I would rather have you than a dozen flattering fools." He explicitly gives her permission—expects her—to speak plainly to him.',
      whyItMatters: 'Victorian society ran on elaborate social codes, especially for women and servants. Jane\'s plain speech is transgressive—she refuses to perform deference or manipulate through flattery. Rochester values this because he\'s tired of people telling him what they think he wants to hear. Their relationship will be defined by this honest communication, even when it\'s uncomfortable.'
    },
    {
      term: 'The Gap Between Vision and Execution',
      definition: 'The frustrating distance between what an artist imagines and what they can actually create; the limitation of skill or medium compared to internal vision.',
      context: 'When Rochester asks if Jane is satisfied with her paintings, she explains: "Far from it. I was tormented by the contrast between my idea and my handiwork: in each case I had imagined something which I was quite powerless to realize." Rochester recognizes this as the mark of a true artist—those without vision think everything they make is wonderful; those with genuine vision see the gap.',
      whyItMatters: 'This moment reveals Jane\'s depth: she has rich inner life, high standards, and sophisticated self-awareness. She\'s not satisfied with mediocrity. This parallels her moral life—she won\'t settle for less than her vision of how things should be, which is why she\'ll eventually leave Rochester rather than compromise her principles. The artistic struggle mirrors her life struggle: aiming for an ideal she can\'t quite reach but refusing to lower her standards.'
    },
    {
      term: 'Testing and Power Dynamics',
      definition: 'When someone with authority deliberately challenges or provokes another to assess character, honesty, or spirit; using questions as psychological investigation.',
      context: 'Rochester\'s questions aren\'t idle conversation—they\'re tests. "Do you think me handsome?" "Are you satisfied with your art?" "Are you happy here?" He\'s probing whether Jane will flatter, whether she has self-awareness, whether she\'ll be honest with him. When she passes these tests (by being blunt, self-critical, and truthful), he\'s pleased. He\'s also establishing that their relationship will operate by different rules than conventional employer-employee dynamics.',
      whyItMatters: 'Understanding that Rochester is testing Jane helps readers see this isn\'t casual conversation—it\'s the negotiation of their relationship\'s terms. Rochester wants to know if Jane is authentic or performing. Jane, often unconsciously, is setting boundaries: she\'ll be honest, but she won\'t be bullied. These early tests establish mutual respect that will become love. It also shows Rochester\'s manipulative tendencies—he stages interactions to extract information—which will become problematic later.'
    },
    {
      term: 'The Byronic Hero',
      definition: 'A literary character type: brooding, mysterious, charismatic but flawed; often with a dark past, troubled conscience, and magnetic personality; named after Lord Byron and his poetic heroes.',
      context: 'Rochester is a classic Byronic hero: not conventionally handsome but compelling; moody and changeable; direct to the point of rudeness; harboring mysterious past "sins"; simultaneously attractive and unsettling. He has the Byronic hero\'s contradictions—capable of gentleness and harshness, honesty and manipulation, vulnerability and domination. Jane is drawn to his complexity rather than repelled by his roughness.',
      whyItMatters: 'Recognizing Rochester as Byronic helps readers understand his appeal and his danger. Byronic heroes are Romantic ideals—dark, troubled, intense—but they\'re also self-centered and often destructive. Jane will be attracted to Rochester\'s complexity and will see beneath his rough exterior to his suffering and capacity for love. But she\'ll also need to resist being overwhelmed by his intensity. The novel both celebrates and critiques the Byronic hero archetype.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'This chapter shows Jane as Rochester first encounters her: poised, self-possessed, and refreshingly honest. She enters the drawing room composed despite the social inequality—she\'s the employee being summoned by her employer. When interrogated about her past, she answers honestly but without oversharing or performing pathos. When shown attention, she doesn\'t simper or seek to please. Most remarkably, when asked if Rochester is handsome, she blurts "No, sir" before social training can censor her—then is mortified. But Rochester delights in this honesty. Jane demonstrates intellectual sophistication when discussing her art, showing self-awareness about the gap between vision and execution. She admits to being content at Thornfield without excessive gratitude—she recognizes she provides value (teaching Adèle) and deserves fair treatment. By chapter\'s end, Jane has established herself as someone who won\'t play conventional games: she\'ll speak truth, maintain dignity, and engage intellectually rather than perform feminine submission. She\'s discovering she can relate to Rochester as an equal, and it\'s exhilarating.',
      keyTrait: {
        emoji: '🗣️',
        text: 'Authentic'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester\'s character comes into full focus this chapter. He\'s not conventionally attractive—"harsh featured," dark, with a "decisive nose" and "grim mouth"—but he\'s magnetic. His manners are unconventional to the point of rudeness: he interrogates rather than converses, commands rather than requests, tests rather than pleasantries. He asks invasive questions (are you happy? are you satisfied?) and demands honest answers. When Jane accidentally tells him he\'s not handsome, he laughs and praises her honesty—revealing he\'s been deliberately testing whether she\'ll flatter him. He scrutinizes Jane\'s artwork with genuine interest, asking sophisticated questions about technique and inspiration. He gives her explicit permission to speak plainly: "I don\'t wish to treat you as inferior... I claim only such superiority as must result from twenty years\' difference in age and a century\'s advance in experience." This is both generous (he wants equality) and condescending (he assumes his experience makes him superior). Rochester is complex: capable of kindness and abruptness, genuine interest and manipulation, egalitarianism and arrogance. He\'s clearly drawn to Jane\'s honesty and spirit—she\'s unlike anyone in his world.',
      keyTrait: {
        emoji: '🌩️',
        text: 'Byronic'
      }
    },
    {
      name: 'Mrs. Fairfax',
      development: 'Mrs. Fairfax serves as conventional Victorian conscience, occasionally uncomfortable with Rochester\'s unconventional treatment of Jane. She explains Rochester\'s moods: "He is very changeable and abrupt... He has a peculiar character—one you\'d better not seek to know too well." She means this as gentle warning—Rochester doesn\'t follow normal rules. After the interview, Mrs. Fairfax remarks that Rochester seems to like Jane, which is unusual since he typically ignores governesses. Her gentle surprise suggests she recognizes something unusual in their dynamic. Mrs. Fairfax represents the normal world watching this abnormal relationship develop.',
      keyTrait: {
        emoji: '👀',
        text: 'Observant Witness'
      }
    },
    {
      name: 'Adèle Varens',
      development: 'Adèle is mentioned but largely absent this chapter—she\'s put to bed before Jane meets Rochester. This is significant: the meeting happens after the child is dismissed, in adult space, during adult hours. Rochester wants to meet Jane separate from her role as Adèle\'s governess—he wants to encounter Jane herself, not Jane-as-employee. Adèle\'s absence allows the charged, unconventional conversation that couldn\'t happen with a child present.',
      keyTrait: {
        emoji: '🎭',
        text: 'Conveniently Absent'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'Mr. Rochester must have been aware of the entrance of Mrs. Fairfax and myself; but it appeared he was not in the mood to notice us, for he never lifted his head as we approached.',
      analysis: 'Rochester\'s deliberate ignoring of Jane and Mrs. Fairfax establishes power dynamics from the start. He has the privilege of inattention—he can notice or not notice as he chooses. Jane observes this coolly, noting "it appeared he was not in the mood" rather than being offended. She\'s learning Rochester operates by his own rules, and she\'s assessing rather than reacting. This sets the tone: their relationship will involve constant negotiation of power, attention, and respect.'
    },
    {
      text: 'I went on with my day\'s business tranquilly; but ever and anon vague suggestions kept wandering across my brain of reasons why I should quit Thornfield; and I kept involuntarily framing advertisements, and pondering conjectures about new situations.',
      analysis: 'Before the interview, Jane is already contemplating leaving Thornfield—Rochester\'s presence disturbs her tranquility. She doesn\'t yet know why, but she senses that his arrival changes everything. The "involuntarily framing advertisements" shows her unconscious resistance to whatever Rochester represents: disruption, intensity, the possibility of feeling too much. Jane\'s instinct for self-protection is strong—when something threatens her equilibrium, she considers escape.'
    },
    {
      text: 'Do you think me handsome? ...I should, if I had deliberated, have replied to this question by something conventionally vague and polite; but the answer somehow slipped from my tongue before I was aware—"No, sir."',
      analysis: 'This is the chapter\'s pivotal moment. Jane\'s unfiltered honesty breaks through Victorian propriety before she can censor it. The phrase "slipped from my tongue before I was aware" shows truth escaping despite social training. Rochester\'s testing her—will she lie to please him? Jane accidentally reveals she won\'t (or can\'t) lie, even to her employer. This establishes honesty as the foundation of their relationship, but it also shows Jane\'s vulnerability: her authenticity makes her unable to protect herself through performance.'
    },
    {
      text: 'I don\'t wish to treat you as inferior... I claim only such superiority as must result from twenty years\' difference in age and a century\'s advance in experience.',
      analysis: 'Rochester attempts to establish intellectual equality while maintaining age/experience superiority. He wants Jane to speak freely (not as inferior employee) but also wants to maintain authority (as older, more experienced man). This contradiction will define their relationship: Rochester wants both equality and dominance. Jane will ultimately insist on true equality, refusing his attempt to have it both ways. The phrase "a century\'s advance in experience" is revealing—he exaggerates his experience (it\'s 15-20 years, not 100) to justify superiority he can\'t claim through intellect alone.'
    },
    {
      text: 'I was tormented by the contrast between my idea and my handiwork: in each case I had imagined something which I was quite powerless to realize.',
      analysis: 'Jane\'s description of artistic frustration reveals her character completely. She has vivid inner vision but limited execution—the gap torments her. This parallels her entire life: she imagines love, belonging, equality, but circumstances constantly fall short of her vision. Rather than lowering expectations, Jane remains "tormented" by the gap. This dissatisfaction drives her forward—she won\'t settle. Rochester recognizes this quality: "You have secured the shadow of your thought; but no more, probably. You had not enough of the artist\'s skill and science to give it full being." He sees both her vision and her limitation, which creates intellectual intimacy.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Intellectual Intimacy vs. Social Hierarchy',
        explanation: 'This chapter dramatizes the conflict between social position and intellectual equality. Jane is Rochester\'s employee—she\'s supposed to be deferential, grateful, invisible. Rochester is her employer—he\'s supposed to be distant, authoritative, formal. But neither follows the script. Rochester addresses Jane as intellectual equal, asking her opinions on art, beauty, satisfaction. Jane responds honestly rather than obsequiously. They create intellectual intimacy that violates social hierarchy. This makes their relationship transgressive and thrilling: they\'re not supposed to relate this way. Victorian propriety required emotional distance between classes; intellectual equality threatened social order. Jane and Rochester discover they\'re more interesting to each other as minds than as positions—but navigating this within class-bound society will create constant tension.'
      },
      {
        name: 'Authenticity vs. Performance',
        explanation: 'The chapter contrasts authentic self-expression with social performance. Rochester explicitly tests whether Jane will flatter him (perform expected deference) or speak truth. Jane accidentally reveals she\'s incapable of sustained performance—"No, sir" escapes before she can deploy conventional politeness. Rochester delights in her authenticity because he\'s surrounded by people performing for him: employees flattering, women flirting, society members playing roles. Jane\'s genuine, even when it\'s socially awkward. She discusses her art honestly (admitting dissatisfaction), answers questions directly (even when it reveals her low status), and can\'t fake emotions she doesn\'t feel. The novel valorizes this authenticity—but also shows its cost. Jane\'s inability to perform femininity will protect her integrity but will also make her vulnerable to manipulation by those (like Rochester) who are skilled performers.'
      },
      {
        name: 'The Seduction of Being Seen',
        explanation: 'This chapter explores what happens when someone truly sees you—and how powerfully seductive that attention can be. For Jane, who has been invisible her whole life (ignored at Gateshead, one of many at Lowood, just a governess at Thornfield), Rochester\'s intense focus is intoxicating. He looks at her artwork carefully, asks sophisticated questions, wants to understand her inner life. He treats her as interesting rather than functional. He sees her. For Jane, this attention is perhaps more dangerously attractive than Rochester himself. The novel warns about the seduction of visibility: when someone makes you feel seen after a lifetime of invisibility, you may confuse that recognition with love. Jane will need to distinguish between: (1) Loving Rochester specifically, vs. (2) Loving being seen, finally, by anyone.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Dialogue as Character Development',
        explanation: 'Brontë uses dialogue to reveal character more efficiently than description ever could. Rochester\'s speech patterns—direct, abrupt, testing, unconventional—show his personality immediately. Jane\'s responses—honest, thoughtful, occasionally blunt—reveal her nature. The conversation moves quickly because both characters speak with minimal social cushioning. This creates intimacy (they\'re dropping conventional barriers) and also shows mutual respect (neither wastes the other\'s time with pleasantries). Brontë contrasts their dialogue with Mrs. Fairfax\'s conventional speech, highlighting how unusual their communication is.',
        example: 'Rochester: "Do you think me handsome?" Jane: "No, sir." Rochester: "Ah! By my word! there is something singular about you... You are a quiet, grave little person; but you can be curiously audacious." This rapid exchange—question, blunt answer, surprised response—establishes their dynamic in seconds. The unconventional question tests boundaries; Jane\'s honest answer crosses them; Rochester\'s response rewards her transgression.'
      },
      {
        name: 'Symbolic Art as Character Revelation',
        explanation: 'Jane\'s paintings function as windows into her psyche. The three watercolors Rochester examines are surreal, symbolic, and melancholic: a drowned corpse crowned with a bracelet; a colossal head rising from an iceberg; a veiled evening star. These aren\'t pretty drawings—they\'re visual representations of Jane\'s inner life. The drowning suggests death and loss (her orphaned state). The head on the iceberg suggests frozen isolation and mysterious depths. The veiled star suggests hidden beauty and unattainable ideals. Rochester recognizes these aren\'t conventional accomplishments but genuine artistic vision. By examining Jane\'s art, he\'s examining Jane\'s soul—and she allows this intimacy.',
        example: 'The first painting depicts "the pinnacle of an iceberg piercing a polar winter sky... rose a pale yet colossal head... dark and wild, the eyes glittering." Jane has painted isolation, wildness, and cold beauty—possibly a self-portrait of her emotional landscape, or a premonition of Rochester himself. The paintings let Jane express what she can\'t say, and Rochester reads them as psychological text.'
      },
      {
        name: 'Power Reversal Through Narrative Voice',
        explanation: 'Although Jane was powerless in the scene (summoned by her employer, interrogated, vulnerable), the narration gives her power retroactively. Adult Jane describing the scene controls how we interpret it. She notes Rochester\'s rudeness ("his voice was harsh"), analyzes his motives ("he was testing me"), and passes judgment ("his manner was such as a gentleman might use to a child"). The first-person narration means we experience events through Jane\'s consciousness—Rochester only exists as Jane perceives him. This reverses the power dynamic: Rochester may control the action, but Jane controls the narrative, which is ultimate power.',
        example: 'When Rochester ignores Jane\'s entrance, she narrates: "Mr. Rochester must have been aware of the entrance of Mrs. Fairfax and myself; but it appeared he was not in the mood to notice us." Jane refuses to internalize his rudeness—she doesn\'t think "I\'m beneath his notice," but rather "he\'s chosen not to notice." By framing it as Rochester\'s choice rather than her insignificance, Jane maintains dignity. Narration is self-protection.'
      },
      {
        name: 'Fairy Tale Subversion',
        explanation: 'Brontë invokes fairy tale tropes (poor governess meets mysterious wealthy master) but subverts them. In fairy tales, the heroine is beautiful, passive, and saved by the hero. Jane is plain, active, and saves Rochester (from the fire in Chapter 15). In fairy tales, the heroine\'s virtue is tested through suffering; here, the hero tests the heroine through interrogation. In fairy tales, love conquers all; in Jane Eyre, love will have to contend with lies, class inequality, madness, and Jane\'s own unwillingness to be rescued at the cost of her integrity. Brontë uses readers\' fairy tale expectations to surprise them with realism.',
        example: 'Rochester asks: "Do you think me handsome?" expecting either: (1) flattery (fairy tale heroine response: "Oh yes!"), or (2) romantic denial (fairy tale heroine response: "Handsomeness doesn\'t matter when virtue shines!"). Jane gives neither: "No, sir." Fairy tale subverted. She\'s honest, not romantic. This establishes that Jane Eyre will be a fairy tale where the heroine doesn\'t perform fairy tale femininity.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a young woman—let\'s call her Jamie—hired as a junior consultant at a prestigious firm. She\'s qualified but aware of her "outsider" status: she went to public university while everyone else went Ivy League, she rents a studio while they own condos, she\'s on scholarship background in an old-money world. For the first few weeks, she does her work well but invisibly. Then the firm\'s charismatic, unconventional senior partner—brilliant but moody, respected but mysterious—starts engaging her differently than other junior staff. He asks her opinion in meetings. He reviews her work personally. One evening, he asks her to stay late to discuss a project, but the conversation quickly becomes personal: What do you think of this company? Are you satisfied with your work? Do you find corporate culture stifling? He shows her his own early work and asks for honest feedback. Jamie gives it—pointing out weaknesses she normally would never mention to a senior partner. Instead of being offended, he\'s energized: "Finally, someone who doesn\'t blow smoke." He tells her he wants honest input from her going forward, not corporate politeness. Jamie leaves the office feeling both exhilarated (someone powerful takes her seriously!) and uneasy (this crosses professional boundaries).',
    
    parallels: [
      '🔹 **Intellectual Recognition in Hierarchical Spaces**: When someone powerful (boss, professor, mentor) treats you as intellectual equal despite hierarchy, it\'s intoxicating. They ask your opinion, debate with you, value your thinking. This recognition can be validating and professionally valuable—or it can be manipulative, used to create emotional obligation or blur boundaries. Like Jane with Rochester, you must distinguish between: genuine mentorship and inappropriate boundary-crossing.',
      '🔹 **The "Cool Boss" Who Breaks Rules**: Rochester positions himself as the unconventional authority who doesn\'t follow rigid social codes. Modern equivalent: the boss who says "call me by my first name," "I\'m not like other executives," "let\'s grab drinks, I hate hierarchy." This can signal genuine egalitarianism—or it can be a power move that creates confusion about boundaries. When authority figures selectively break rules, they maintain ultimate power while appearing approachable.',
      '🔹 **Testing Disguised as Conversation**: Rochester\'s questions aren\'t casual—they\'re tests. Modern parallel: job interviews framed as "just conversations," first dates full of hypothetical scenarios, mentors asking seemingly innocent questions that are actually evaluating your character, politics, or loyalty. People with power often test through seemingly casual interaction, gathering information while you think you\'re just chatting. Recognizing the test doesn\'t mean failing it—but not recognizing it means revealing more than you intended.',
      '🔹 **Permission to "Speak Freely" (Within Limits)**: Rochester tells Jane to speak plainly to him—but he still controls when she speaks, what topics are acceptable, and when to dismiss her. Modern parallel: bosses who say "my door is always open" but punish dissent; partners who say "tell me what you really think" but get angry at honesty; professors who encourage "challenging ideas" but penalize challenges to their authority. "Speak freely" often means "speak freely within parameters I haven\'t specified until you cross them."',
      '🔹 **Class/Status Consciousness in "Progressive" Spaces**: Jane and Rochester pretend to intellectual equality while both remaining aware of class difference. Modern parallel: workplaces that claim "flat hierarchy" while maintaining clear power structures; universities that celebrate "diverse backgrounds" while favoring students with cultural capital; social groups that perform egalitarianism while everyone knows who has money/connections/status. Progressive language doesn\'t erase structural inequality—it just makes it harder to name.',
      '🔹 **The Seduction of Being Seen**: For people used to being invisible (women in male-dominated fields, working-class students at elite institutions, anyone marginalized), attention from powerful people is powerfully attractive. When someone with status treats you as visible, interesting, valuable—it\'s heady. But attention isn\'t love, mentorship isn\'t friendship, and professional interest isn\'t personal investment. Confusing recognition with relationship makes you vulnerable.',
      '🔹 **Authenticity as Professional Risk**: Jane\'s honesty is refreshing to Rochester—but it\'s also risky for her. Modern parallel: being "authentic" at work sounds great until your honesty gets you labeled "difficult," "not a team player," or "lacking professionalism." Authenticity is a privilege. People with job security, social capital, or majority identity can be honest with fewer consequences than those who are precarious, marginal, or vulnerable. Jane\'s authenticity works because Rochester finds it charming—but if he\'d found it insubordinate, she\'d be fired.'
    ],
    
    discussionPrompt: 'Have you ever experienced the intoxication of being intellectually recognized by someone with power over you (teacher, boss, mentor)? How did you navigate that relationship—the gratitude for being seen, the unequal power dynamics, the potential for manipulation or genuine mentorship? When powerful people say they want honesty from you, how do you assess whether that\'s genuine invitation or a test with hidden rules?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '⚖️',
      name: 'Equality vs. Hierarchy',
      explanation: 'This chapter explicitly raises the question that will define Jane and Rochester\'s relationship: Can intellectual equals exist within social hierarchy? Rochester claims to want equality while maintaining superiority. Jane experiences equality in conversation while remaining aware of her vulnerability as employee. Throughout the novel, Jane will insist on true equality—eventually leaving Rochester when inequality makes the relationship untenable, returning only when circumstances make them equals.'
    },
    {
      emoji: '🎭',
      name: 'Authenticity vs. Performance',
      explanation: 'Jane\'s accidental honesty ("No, sir") establishes her as someone incapable of sustained performance—and Rochester values this. But the novel will complicate this binary. Rochester performs constantly (the fortune-teller disguise, the fake engagement to Blanche, the concealment of Bertha). Jane\'s authenticity makes her vulnerable to Rochester\'s performances. The question becomes: Is authenticity always virtue, or is some performance necessary self-protection?'
    },
    {
      emoji: '🔥',
      name: 'Fire and Passion',
      explanation: 'The chapter describes Rochester\'s energy as "kindling" something in Jane, and Jane has a "spark" that Rochester notices. This fire imagery—which will culminate in the literal fire in Chapter 15—represents passion, vitality, and danger. Jane has been dampening her fire to survive; Rochester reignites it. But fire burns: passion will lead to love but also to pain, transgression, and eventually, destruction.'
    },
    {
      emoji: '👁️',
      name: 'Seeing and Being Seen',
      explanation: 'Rochester examines Jane\'s art (seeing her inner life), questions her (seeing her personality), and declares her "curious" (seeing her as individual rather than type). Jane, used to invisibility, experiences the power and danger of visibility. Throughout the novel, being seen by Rochester will be both Jane\'s greatest desire and her greatest vulnerability. When Rochester finally loses literal sight (Chapter 37), the dynamics of seeing/being seen will invert.'
    },
    {
      emoji: '🎨',
      name: 'Art as Self-Expression',
      explanation: 'Jane\'s paintings reveal inner life she can\'t otherwise express: melancholy, imagination, symbolism, intensity. The gap between vision and execution in art parallels her life: she imagines love, belonging, and equality she can\'t yet achieve. Art becomes way for Jane to communicate truth indirectly—this will continue with her description of events (narrative as art), her verbal pictures, and eventually her insistence on naming her own experience.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Intellectual Equality in Hierarchy',
      question: 'Rochester tells Jane he doesn\'t wish to treat her as inferior, but he "claims superiority" from age and experience. Can genuine equality exist within structural hierarchy (employer-employee, older-younger, wealthy-poor)? Or is Rochester\'s "equality" actually a generous form of condescension? What would true equality require?'
    },
    {
      title: 'The Ethics of Testing',
      question: 'Rochester deliberately tests Jane—asking if he\'s handsome to see if she\'ll flatter, questioning her happiness to assess satisfaction. Is this psychological testing ethical? Does his power over her (as employer) make this testing coercive? Or is he genuinely trying to understand her character? When is testing another person legitimate vs. manipulative?'
    },
    {
      title: 'Honesty as Vulnerability',
      question: 'Jane\'s accidental honesty ("No, sir") delights Rochester—but it also reveals her inability to protect herself through performance. Is authenticity always virtue? Are there times when "honest" people are at disadvantage compared to skilled performers? What\'s the difference between: (1) honest self-expression, and (2) strategic self-disclosure?'
    },
    {
      title: 'The Seduction of Recognition',
      question: 'Jane has been invisible her whole life (ignored at Gateshead, one of many at Lowood, just the governess at Thornfield). Rochester\'s intense attention—examining her art, asking her opinions, treating her as interesting—is intoxicating. How can people distinguish between: (1) loving a specific person, vs. (2) loving being seen/recognized by anyone? Why is attention from powerful people particularly seductive?'
    },
    {
      title: 'Permission to Speak Freely',
      question: 'Rochester tells Jane to speak plainly to him—but he controls when she speaks, what she discusses, and when she\'s dismissed. When powerful people (bosses, professors, parents) say "be honest with me," what limits do they actually mean? How do you navigate "speak freely" invitations when the person inviting you still holds power over you?'
    },
    {
      title: 'Art as Psychological Revelation',
      question: 'Rochester examines Jane\'s paintings as windows into her psyche—and Jane allows this intimacy. Is showing someone your creative work more intimate than other forms of self-revelation? What do we reveal through art (writing, painting, music) that we can\'t or don\'t reveal through conversation? Why might artistic expression feel both safe (indirect) and vulnerable (revealing)?'
    },
    {
      title: 'Rochester as Byronic Hero',
      question: 'Rochester fits the "Byronic hero" archetype: brooding, mysterious, charismatic but flawed, with a dark past. Why are readers (and Jane) drawn to this character type? What\'s appealing about troubled, complex men—and what\'s dangerous? How does the novel both celebrate and critique the Byronic hero?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'intellectual-equality-hierarchy',
      title: 'Can Intellectual Equals Exist Within Social Hierarchy?',
      question: 'Rochester claims he wants to treat Jane as an intellectual equal while acknowledging his social superiority. Is this genuine egalitarianism, or is it a contradiction? Can real equality exist within power imbalance?',
      aiResponse: `
**The Paradox of Rochester's "Equality"**

Rochester tells Jane: "I don't wish to treat you as inferior... I claim only such superiority as must result from twenty years' difference in age and a century's advance in experience." This statement reveals the central tension in their relationship: he wants intellectual equality within maintained hierarchy. But is this actually possible?

**What Rochester Offers:**

**Intellectual Engagement:**
- He asks Jane's opinions and debates with her
- He treats her observations as valuable
- He engages her mind, not just her services
- He discusses art, philosophy, happiness—topics "above" her station

**Apparent Respect:**
- He praises her honesty rather than expecting deference
- He gives permission to speak plainly
- He doesn't want flattery or performed submission
- He treats her as interesting rather than functional

**This is more than most Victorian employers offered female employees.**

**What Rochester Retains:**

**Structural Power:**
- He summons; Jane appears
- He questions; Jane answers
- He dismisses her when he's done
- He controls her employment, housing, and livelihood

**Interpretive Authority:**
- He judges whether her honesty is "curious" or insubordinate
- He decides when equality applies and when hierarchy reasserts
- He sets the terms of their unconventional relationship
- His power means he can revoke "equality" at will

**Psychological Control:**
- Testing Jane without her consent
- Extracting information while claiming casual conversation  
- Making Jane feel special (singled out from other governesses)
- Using intellectual intimacy to create emotional obligation

**The Real Question: Can You Have Intellectual Equality Without Structural Equality?**

**Arguments That You Can:**

**1. Minds Can Meet Regardless of Circumstance:**
- Ideas don't care about social class
- Intellectual respect can transcend hierarchy
- Some of history's great partnerships crossed class lines
- Jane clearly has a mind equal (or superior) to Rochester's

**2. Limited Equality Is Better Than None:**
- Rochester's engagement with Jane is radical for 1847
- He's offering more equality than society requires
- Jane benefits from intellectual stimulation
- Their conversations prepare her for eventual full equality

**Arguments That You Cannot:**

**1. Power Context Shapes All Interaction:**
- Jane can't truly speak freely when Rochester can fire her
- Her "honesty" works because he finds it charming—if he didn't, she'd be punished
- The "choice" to engage intellectually isn't really a choice when refusing could cost her livelihood
- True equality requires: equal power to walk away

**2. Rochester Controls the Terms:**
- He decides when equality applies
- He determines which topics are acceptable
- He ends conversations when he wishes
- Jane has intellectual agency only within boundaries Rochester sets

**3. Selective Equality Is Condescension:**
- "I'll treat you as equal when it suits me" isn't equality
- True equals don't need permission from each other to speak
- Rochester's "gift" of equality reveals his power to withhold it
- Generous hierarchies are still hierarchies

**Modern Parallels: "Flat" Hierarchies and "Open Door" Bosses**

**This mirrors contemporary workplace dynamics:**

**The "Cool Boss":**
- "Call me by my first name"
- "My door is always open"
- "I want honest feedback"
- "We're a team, not a hierarchy"

**Reality:**
- The boss still controls your salary, promotion, employment
- "Honest feedback" has invisible limits you discover by crossing them
- Casual relationships make it harder to maintain boundaries
- Performance of equality obscures real power imbalance

**What True Equality Would Require:**

**Economic Independence:**
- Jane would need ability to leave without starving
- No economic coercion in the relationship
- Resources sufficient for genuine choice

**Mutual Vulnerability:**
- Both parties can be hurt by the other
- Neither has unilateral power to punish
- Consequences of disagreement are balanced

**No Interpretive Monopoly:**
- Neither party controls the narrative
- Both can define the relationship's meaning
- No final authority on what interactions "mean"

**Why This Matters for Jane and Rochester:**

**In This Chapter:**
Rochester offers intellectual equality while maintaining structural superiority. Jane accepts this as better than nothing—but she's aware of the contradiction.

**Later in the Novel:**
Jane will insist on full equality. She'll leave Rochester when the power imbalance becomes morally intolerable (she can't be his mistress—that would make her economically dependent AND socially degraded). She'll only return when circumstances have equalized them: she has independent wealth, he's lost his physical power advantages, and they can meet as genuine equals.

**Brontë's Argument:**
Intellectual equality without structural equality is unstable and ultimately unsustainable in intimate relationships. It's better than pure hierarchy—but it's not enough. Real love requires real equality: economic, social, psychological.

**For Discussion:**

Have you been in relationships (romantic, professional, mentor-mentee) with power imbalance but intellectual connection? How did you navigate it? Did the intellectual equality compensate for structural inequality, or did the power imbalance eventually undermine the connection?

When someone with power over you says they want "honest dialogue," how do you assess whether that's genuine or whether there are invisible limits you'll only discover by crossing them?

**The Takeaway:**

Rochester's offer of intellectual equality within maintained hierarchy is generous by Victorian standards—but it's still problematic. True equality can't be granted by the powerful; it must be structurally enabled. Intellectual respect is necessary for intimate relationships but not sufficient. Jane will ultimately insist on full equality—economic, social, and psychological—before she can marry Rochester. This is the novel's radical claim: women deserve not just to be respected but to be equals in every way that matters.
      `
    },
    {
      id: 'authenticity-vs-performance',
      title: 'Authenticity as Vulnerability: When Honesty Is Risk',
      question: 'Jane\'s inability to flatter or perform conventional femininity delights Rochester—but it also makes her vulnerable. Is authenticity always virtue? When is performance necessary self-protection?',
      aiResponse: `
**The Double-Edged Sword of Authenticity**

When Jane blurts "No, sir" to Rochester's question about his handsomeness, she reveals something crucial: she's incapable of sustained performance. Her honest self keeps breaking through social training. Rochester finds this delightful—but this same authenticity could have gotten her fired. Jane's honesty is both her strength and her vulnerability.

**Why Rochester Values Jane's Authenticity:**

**Contrast to His World:**
- Rochester is surrounded by performers:
  - Employees who flatter to keep jobs
  - Society women who feign interest to secure marriages
  - Friends who maintain profitable connections
  - Servants who perform deference

**Result:**
- He never knows what anyone actually thinks
- He's suspicious of all positive feedback
- He's isolated by his inability to trust
- He's bored by predictable social games

**Jane's Honesty Offers:**
- Trustworthy feedback (she won't lie to please him)
- Genuine connection (he knows her responses are real)
- Intellectual stimulation (she'll challenge rather than agree)
- Psychological relief (he can stop wondering what she "really" thinks)

**Why Authenticity Makes Jane Vulnerable:**

**It Only Works If Powerful People Find It Charming:**

If Rochester had responded to "No, sir" with:
- Offense: Jane could be fired
- Mockery: Jane would be humiliated  
- Authority: "How dare you speak so to your employer"
- Dismissal: "You may go"

**Jane would have no recourse. Her authenticity works because Rochester happens to value it.**

**She Can't Code-Switch:**

**Other governesses might:**
- Be authentic with equals (other servants)
- Be deferential with superiors (employers)
- Be guarded with strangers
- Be strategic with those who control resources

**Jane seems unable to:**
- Maintain different personas for different audiences
- Perform femininity she doesn't feel
- Flatter even when it would benefit her
- Hide her true thoughts consistently

**This inflexibility is both integrity and limitation.**

**She Reveals More Than Intended:**

When Jane speaks authentically, she gives information:
- About her feelings (she finds Rochester plain)
- About her values (honesty matters more than safety)
- About her needs (she wants intellectual engagement)
- About her vulnerabilities (she's dissatisfied with her art, her life, herself)

**Information is power. In giving it freely, Jane makes herself vulnerable.**

**When Performance Is Self-Protection:**

**Not All Performance Is Dishonesty:**

**Strategic Self-Presentation:**
- Emphasis different aspects of self in different contexts
- Choose what to reveal and when
- Perform expected social roles when necessary
- Reserve authentic self for safe relationships

**This isn't lying—it's boundary maintenance.**

**Examples of Necessary Performance:**

**Professional Settings:**
- Not telling your boss what you really think of their ideas (when your job depends on their goodwill)
- Performing enthusiasm for projects you find boring (professionalism isn't lying)
- Code-switching between home culture and workplace culture (survival skill for marginalized people)

**Dangerous Relationships:**
- Abusive partners often punish honesty
- Authoritarian parents may retaliate against authenticity
- Controlling institutions (prisons, some schools) require performance for safety

**Marginalized Positions:**
- Women in male-dominated fields may need to perform confidence they don't feel
- Working-class students at elite institutions may perform belonging
- Minorities may need to manage how they're perceived to reduce discrimination

**The Authenticity Trap:**

**Privileged Advice:**
"Just be yourself" is advice that assumes:
- You won't be punished for being yourself
- Your authentic self is socially acceptable
- You can afford the consequences of honesty
- Your position is secure enough to take risks

**This is privilege talking.**

**For Many People:**
- Being authentic gets you fired, harmed, or marginalized
- Your authentic self challenges norms others defend
- Honesty costs more than you can afford
- Performance is survival, not dishonesty

**Why Jane's Authenticity Works (And Its Limits):**

**Why It Works in Chapter 13:**

**Rochester's Specific Values:**
- He's bored by conventional femininity
- He's wealthy enough not to care about propriety
- He values intellectual stimulation over social comfort
- He has power to protect Jane from consequences of her honesty

**But This Is Contingent:**
- Jane's honesty works because Rochester finds it attractive
- If he didn't, same behavior would be "insubordination"
- Jane is lucky his preferences align with her nature
- Luck isn't virtue—it's circumstance

**Where Jane's Authenticity Fails Her:**

**Later in the Novel:**

Rochester performs constantly:
- Disguises himself as fortune-teller to extract Jane's feelings
- Pretends to court Blanche to make Jane jealous
- Hides Bertha's existence
- Manipulates Jane's emotions through theatrical scenarios

**Jane's authenticity makes her vulnerable to his performances.** She trusts that he's as honest as she is—he's not.

**The Novel's Nuanced Position:**

**Brontë Seems to Argue:**

**Authenticity Is Valuable:**
- Jane's integrity protects her from compromising her principles
- Her honesty creates genuine connections when reciprocated
- Her inability to lie saves her from Rochester's plan to make her his mistress
- Her authentic self is worth preserving

**But Authenticity Requires:**
- Enough power to survive consequences
- Ability to distinguish safe from unsafe contexts
- Willingness to accept costs
- Luck in encountering people who value honesty

**Some Performance Is Necessary:**
- Not all relationships deserve full authenticity
- Strategic self-presentation isn't dishonesty
- Protecting yourself through boundaries is wise
- Total transparency with everyone is naive

**Modern Applications:**

**In Professional Life:**
- Being "authentic" at work sounds great until your honesty gets you labeled "not a team player"
- Some performance is professionalism, not dishonesty
- Save authenticity for relationships that can handle it
- Strategic self-presentation is a skill, not a moral failing

**In Personal Life:**
- New relationships can't handle full authenticity immediately—trust must build
- Some family members don't deserve access to your authentic self
- Protecting your authentic self from unsafe people is wise
- But performing constantly with everyone is exhausting and unsustainable

**In Systemic Contexts:**
- Marginalized people often can't afford the same level of authenticity as privileged people
- Code-switching is survival, not selling out
- "Be yourself" advice ignores structural constraints
- But maintaining authentic core self matters for psychological integrity

**For Discussion:**

Have you ever been punished for authenticity? Was there a moment when being honest cost you something (job, relationship, safety)? How do you decide when to be authentic and when to perform?

Is there a difference between: (1) strategically presenting different aspects of yourself in different contexts, vs. (2) lying about who you are? Where's the line between self-protection and dishonesty?

**The Takeaway:**

Jane's authenticity is both strength and vulnerability. It's not purely virtue—it's also inability to do otherwise, and it only works because Rochester happens to value it. The novel both celebrates Jane's integrity and shows its costs. True authenticity requires: power to survive consequences, judgment about when it's safe, and luck in encountering people who won't exploit it. Performance isn't always dishonesty; sometimes it's self-protection. The goal isn't total transparency with everyone but rather: authentic core self maintained while strategically navigating a world that often punishes honesty.
      `
    },
    {
      id: 'seduction-of-recognition',
      title: 'The Seduction of Being Seen: Attention as Intoxication',
      question: 'Jane has been invisible her whole life. Rochester\'s intense attention—examining her art, asking her opinions, treating her as interesting—is intoxicating. How can we distinguish between loving a person and loving being seen by them?',
      aiResponse: `
**When Recognition Feels Like Love**

For Jane, who has been invisible, ignored, and treated as functional rather than interesting her entire life, Rochester's intense attention is powerfully seductive. He looks at her artwork carefully. He asks her opinions. He treats her as intellectually worthy. He sees her. This recognition may be more dangerously attractive than Rochester himself.

**Jane's History of Invisibility:**

**At Gateshead (Chapters 1-4):**
- The Reeds wish she didn't exist
- She's punished for being visible ("Who told you to be seen?")
- Her thoughts, feelings, and needs don't matter
- She's an unwanted inconvenience to be endured

**At Lowood (Chapters 5-10):**
- One of many charity students
- Part of a system, not an individual
- Even Miss Temple's kindness is distributed among many students
- Helen Burns sees her—but Helen dies

**At Thornfield (Chapters 11-12):**
- She's "just the governess"—functional, not interesting
- Mrs. Fairfax is kind but doesn't see Jane's depth
- Adèle needs her services, not her full self
- Jane wanders the third floor feeling invisible to the world

**Result: Jane is starved for recognition.**

**What Rochester Offers:**

**He Sees Jane's Complexity:**

**Her Art:**
Rochester examines Jane's paintings with genuine interest. He asks:
- About technique: "Where did you learn to paint wind?"
- About inspiration: "Were you happy when you painted these?"
- About satisfaction: "Are you pleased with them?"

He's treating her artwork as worthy of serious attention, as psychological revelation, as intellectual achievement.

**Her Mind:**
- He asks her philosophical questions (Are you happy? What is beauty?)
- He debates with her rather than instructing
- He responds to her thoughts with his own thoughts
- He treats her ideas as valuable

**Her Personhood:**
- He doesn't see "the governess"—he sees Jane
- He's curious about her background, her feelings, her perspective
- He addresses her as individual, not category
- He makes her feel seen as a specific person with distinct qualities

**Why This Is Intoxicating:**

**Psychological Power of Recognition:**

**Being Seen Meets Deep Needs:**
- Validates your existence (you matter)
- Confirms your worth (you're interesting)
- Acknowledges your complexity (you're not just a function)
- Creates intimacy (someone understands you)

**For Someone Starved for Attention:**
- Recognition feels like oxygen after suffocation
- First person to truly see you feels special, even if they're not
- Attention itself becomes confused with connection
- Visibility feels like love

**The Danger: Mistaking Recognition for Relationship**

**Recognition Is Not Love—It's One Component:**

**What Recognition Provides:**
- Attention, interest, curiosity, focus

**What Recognition Doesn't Provide:**
- Genuine care for your wellbeing
- Commitment to your flourishing
- Respect for your boundaries
- Trustworthy behavior

**You Can Be Seen Without Being Loved:**
- Therapists see patients deeply but that's not romantic love
- Artists may be seen by audiences who don't know them
- Journalists interview people they don't care about
- Abusers often see victims very clearly (to better manipulate)

**Rochester Sees Jane—But Does He Love Her Yet?**

**What's Happening in Chapter 13:**

**Rochester Is Interested:**
- Jane intrigues him intellectually
- He finds her honesty refreshing
- He enjoys testing her responses
- He's curious about her inner life

**But Also:**
- He's testing her (not fully trusting)
- He's manipulating her (extracting information)
- He's enjoying his power (summons, dismisses)
- He's using her for entertainment (he's bored, she's stimulating)

**This isn't yet love—it's fascination.** And fascination can grow into love or exploitation.

**How to Distinguish Recognition from Love:**

**Questions to Ask:**

**1. Is the attention consistent or conditional?**
- **Recognition**: "I see you when you're interesting/useful/entertaining"
- **Love**: "I see you consistently, even when you're struggling, boring, or inconvenient"

**2. Does it respect boundaries?**
- **Recognition**: "I want to see everything about you right now, on my terms"
- **Love**: "I want to understand you at a pace you're comfortable with"

**3. Is it mutual?**
- **Recognition**: "I'm interested in you; you should be grateful"
- **Love**: "I see you, and you see me; we're both vulnerable"

**4. Does it serve the seer or the seen?**
- **Recognition**: "Understanding you helps me (makes my life more interesting, serves my purposes)"
- **Love**: "Understanding you helps you (I use my understanding to support your flourishing)"

**Modern Parallels:**

**Professional Recognition:**

**The Mentor Who Sees You:**
- Professor who takes interest in your work
- Boss who recognizes your potential
- Coach who sees your abilities

**This can be:**
- **Genuine mentorship**: They invest in your growth
- **Exploitation**: They use your talent to advance their career
- **Grooming**: They create obligation to extract something later

**How to tell the difference:**
- Real mentors respect boundaries
- Real mentors promote your independent success
- Real mentors don't require emotional intimacy for professional support

**Romantic Recognition:**

**The Partner Who "Gets You":**
- First person to appreciate your weirdness
- Someone who finds your quirks charming
- Partner who seems fascinated by your inner world

**This can be:**
- **Genuine love**: They treasure who you are
- **Love bombing**: Intense attention that traps you
- **Idealization**: They love their idea of you, not actual you

**How to tell the difference:**
- Real love persists when you're not perfect
- Real love accepts parts of you that aren't fascinating
- Real love doesn't require constant performance

**Social Media Recognition:**

**Going Viral / Building Following:**
- People pay attention to you
- Strangers find you interesting
- You're seen by thousands/millions

**This can be:**
- **Community**: Genuine connection with like-minded people
- **Addiction**: Dopamine hit of attention without real relationship
- **Exploitation**: Platform using your content without caring about you

**How to tell the difference:**
- Real community persists when you're not posting
- Real community shows up in crises
- Real community is mutual

**What Jane Needs to Learn:**

**In This Chapter:**
Jane experiences recognition as intoxicating. She hasn't yet learned to distinguish:
- Between Rochester being interested and Rochester loving her
- Between fascination and commitment
- Between being seen and being valued

**As the Novel Progresses:**
Jane will need to learn:
- Rochester's attention doesn't equal his trustworthiness
- Being seen by someone doesn't mean they'll treat you well
- Recognition is necessary but not sufficient for love

**By the End:**
Jane will insist on love that includes recognition but also:
- Honesty (no more lies or manipulations)
- Equality (not just intellectual interest from powerful person)
- Commitment (not just fascination but dedication)
- Respect (for her boundaries, autonomy, and dignity)

**For Discussion:**

Have you ever confused recognition with love? Has someone's attention felt so validating that you overlooked red flags? How do you distinguish between: (1) someone genuinely seeing and valuing you, vs. (2) someone finding you temporarily interesting?

When you've been invisible for a long time (new school, new job, marginalized identity), how does first recognition affect you? Does it make you more vulnerable to manipulation? How do you maintain judgment while enjoying finally being seen?

**The Takeaway:**

Rochester's recognition of Jane is intoxicating precisely because she's been invisible her whole life. But recognition isn't love—it's one component. Being seen feels wonderful, but it doesn't guarantee you'll be treated well. The person who sees you most clearly might love you—or might be able to manipulate you most effectively because they understand you. Jane will need to learn: demand recognition AND respect, visibility AND safety, being seen AND being valued. Don't settle for attention alone.
      `
    },
    {
      id: 'testing-ethics',
      title: 'The Ethics of Testing: When Questions Aren\'t Really Questions',
      question: 'Rochester deliberately tests Jane through his questions and interactions. Is this testing ethical? Does his power over her as employer make it coercive? Or is he genuinely trying to understand her character?',
      aiResponse: `
**When Conversation Is Actually Testing**

Rochester's questions in Chapter 13 aren't casual conversation—they're tests. "Do you think me handsome?" isn't asking for aesthetic judgment; it's testing whether Jane will flatter. "Are you satisfied with your art?" isn't art critique; it's assessing Jane's self-awareness. "Are you happy here?" isn't concern for her welfare; it's gauging her honesty. Rochester is conducting psychological investigation disguised as dialogue.

**What Rochester Is Testing For:**

**1. Will Jane Flatter Him?**
- **The Test**: "Do you think me handsome?"
- **What He's Assessing**: Will she lie to please me? Does she prioritize honesty over politeness?
- **What He Learns**: Jane can't/won't flatter—she's authentic or tactless or brave or unable to perform

**2. Does Jane Have Self-Awareness?**
- **The Test**: "Are you satisfied with your paintings?"
- **What He's Assessing**: Can she evaluate herself accurately? Does she have unrealistic confidence or crippling doubt?
- **What He Learns**: Jane has sophisticated self-critique—she sees the gap between vision and execution

**3. Will Jane Challenge Him?**
- **The Test**: His abrupt, sometimes rude manner
- **What He's Assessing**: Will she accept mistreatment? Will she maintain dignity despite hierarchy?
- **What He Learns**: Jane doesn't grovel but also doesn't rebel—she maintains composure

**4. How Honest Can She Be?**
- **The Test**: Multiple questions about her feelings, opinions, satisfaction
- **What He's Assessing**: What will she actually tell me? Where are her boundaries?
- **What He Learns**: Jane will be surprisingly honest—but there are limits (she won't volunteer certain information)

**Arguments That Testing Is Problematic:**

**1. It's Deceptive:**
- Rochester presents questions as conversation when they're evaluation
- Jane doesn't know she's being tested
- This gives Rochester informational advantage
- She reveals more than she might if she knew the purpose

**2. It's Coercive:**
- Rochester has power over Jane (employment, housing, livelihood)
- She can't easily refuse to answer
- Her "choice" to respond honestly isn't fully free
- Consequence of failing tests could be termination

**3. It's Manipulative:**
- Rochester creates false intimacy (we're just talking)
- While actually conducting psychological investigation
- Uses Jane's honesty against her (gathers intel)
- Maintains power while appearing to share vulnerability

**4. It's One-Sided:**
- Rochester tests Jane; Jane doesn't test Rochester
- He gathers information about her; she gains little about him
- He controls the interaction; she responds to his agenda
- This perpetuates power imbalance

**Arguments That Testing Might Be Legitimate:**

**1. He's Assessing Compatibility:**
- Rochester will spend significant time with Jane (she lives in his house)
- He wants to know: Can they communicate honestly?
- Better to discover incompatibility early
- Testing serves relationship assessment, not just power games

**2. He's Been Burned Before:**
- Rochester has been surrounded by flatterers, manipulators, and performers
- He needs to know: Can I trust what this person says?
- Testing is reasonable self-protection
- His wealth and position make him vulnerable to deception

**3. He Gives Jane Chance to Establish Terms:**
- By testing early, Rochester lets Jane show how she wants to be treated
- Her honesty establishes: we'll speak plainly
- Better than assuming conventional employer-employee relationship
- Jane benefits from establishing her preference for direct communication

**4. He Rewards Honesty:**
- When Jane passes tests (by being honest), Rochester is pleased
- He explicitly tells her he values plain speech
- He creates incentive structure where honesty is rewarded
- This makes their relationship more authentic

**The Power Imbalance Problem:**

**Why Rochester's Testing Is Different from Mutual Assessment:**

**In Equal Relationship:**
- Both parties assess compatibility
- Both reveal information gradually
- Both control how much to share
- Both can walk away without severe consequences

**In Rochester/Jane Dynamic:**
- Rochester tests; Jane doesn't know she's being tested
- Rochester controls what gets revealed
- Jane reveals while Rochester conceals (Bertha)
- Jane can't easily walk away (employment = survival)

**This makes "testing" more like "interrogation."**

**Modern Equivalents:**

**Job Interviews Disguised as "Conversations":**
- "We're just chatting" (actually evaluating you)
- Casual questions that assess culture fit
- "Illegal" questions disguised as friendly interest
- You must perform casualness while being judged

**First Dates as Compatibility Tests:**
- Hypothetical scenarios to assess values
- "What would you do if..." questions
- Observing behavior in various contexts (how you treat servers)
- Testing boundaries (physical, emotional, conversational)

**Some testing is normal assessment. It becomes problematic when:**
- Power imbalance makes refusal difficult
- Deception about the evaluation
- One-sided information gathering
- Using information against the person

**What Ethical Testing Would Require:**

**Transparency:**
- "I'd like to understand how you think about X"
- Rather than disguising assessment as casual chat
- Honesty that you're evaluating compatibility

**Mutuality:**
- Both parties assessing each other
- Equal access to information
- Balanced vulnerability
- Reciprocal disclosure

**Respect for Boundaries:**
- Accept refusal to answer
- Don't punish honesty
- Don't use information against the person
- Recognize limits of what you're entitled to know

**Good Faith Purpose:**
- Testing to assess genuine compatibility
- Not to manipulate, control, or gather ammunition
- Information used to build relationship, not exploit weakness

**Rochester Fails Most of These:**

He's not transparent (Jane doesn't know she's being tested), not mutual (he tests her while concealing Bertha), sometimes doesn't respect boundaries (his abruptness borders on rude), and his purpose is mixed (genuine interest AND desire to control information).

**Does Intent Matter?**

**Rochester Might Argue:**
- "I'm testing to see if we can have honest communication"
- "I need to know if you're trustworthy"
- "I'm creating space for authenticity"

**Critics Might Counter:**
- "You could ask directly for honesty rather than testing for it"
- "You're demanding honesty while being dishonest yourself (hiding Bertha)"
- "Your power makes this coercive regardless of intent"

**For Discussion:**

Have you been tested by someone with power over you (interviewer, date, teacher, boss)? How did you recognize the test? Did you resent being tested, or did you see it as reasonable assessment?

When is testing another person ethical? Is there a difference between: (1) naturally observing someone's behavior, (2) deliberately creating situations to assess character, and (3) deceptive testing where the person doesn't know they're being evaluated?

**The Takeaway:**

Rochester's testing of Jane is ethically complex. It serves legitimate purposes (assessing compatibility, protecting himself from flatterers) but uses problematic methods (deception, power imbalance, one-sided information gathering). The novel doesn't fully condemn this—Jane benefits from establishing honest communication—but it also shows the testing as part of Rochester's broader pattern of manipulation. Ethical assessment of other people requires: transparency about what you're doing, mutuality of vulnerability, respect for boundaries, and power balance that makes refusal possible. Rochester provides none of these. His testing works out because Jane happens to pass—but if she'd "failed," she'd have no recourse. Testing becomes ethical when both parties consent to mutual assessment, not when one person unilaterally investigates the other.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Power of First Impressions: Dialogue as Character Revelation',
      description: 'Write a dialogue between two characters meeting for the first time where there\'s a power imbalance (employer-employee, teacher-student, senior-junior, wealthy-poor). Use the conversation to reveal: (1) Each character\'s personality through speech patterns and word choice, (2) The power dynamics between them, (3) Whether the characters will challenge or accept the hierarchy, (4) At least one moment where someone says something that surprises the other (like Jane\'s "No, sir"). Your dialogue should accomplish what Brontë does: establish a complete relationship dynamic in a single conversation. Include brief stage directions showing physical details (who sits, who stands, who controls space). Afterward, write a reflection: What did you learn about writing dialogue that reveals character? How did you show power dynamics without stating them directly?',
      purpose: 'This exercise teaches students how dialogue can efficiently reveal character, establish relationships, and negotiate power dynamics. Students learn that what characters say (and how they say it) matters more than what the narrator tells us about them. They practice "show, don\'t tell" and learn to use subtext—what\'s implied but not stated. Students also learn that power dynamics shape even casual conversation and that dialogue is never just information exchange but also social negotiation.'
    },
    
    activity: {
      title: 'Recognition vs. Love: Analyzing Attention and Connection',
      description: 'Students work in small groups to analyze scenarios where someone receives intense attention/recognition. For each scenario, groups assess: (1) What need does recognition meet? (2) Are there signs this is genuine love/care vs. manipulation? (3) What would happen if the attention stopped? (4) Is there a power imbalance? Scenarios include: teenager whose parent suddenly takes interest in their life after years of neglect; employee whose boss starts mentoring them intensely; student whose teacher praises their unique perspective; romantic partner who "love bombs" with constant attention. Groups present analysis using frameworks from the chapter: recognition vs. commitment, fascination vs. care, being seen vs. being valued. Class discusses: How do we distinguish between healthy attention and manipulative attention? Why is recognition from powerful people particularly intoxicating? What should we demand beyond just being seen?',
      materials: 'Scenario handouts, analysis framework (recognition vs. love checklist), markers/poster board for presentations'
    },
    
    crossCurricular: {
      title: 'The Psychology of Power: Testing, Manipulation, and Consent',
      description: 'Partner with psychology and ethics classes to explore power dynamics in relationships. Psychology class covers: (1) Psychological testing vs. assessment, (2) Information asymmetry and power, (3) Coercion vs. persuasion vs. manipulation, (4) How power affects communication. Ethics class explores: (1) Deception ethics—when is it okay to test someone without their knowledge? (2) Professional boundaries—employer-employee relationships, (3) Consent under power imbalance—can you freely consent to someone who controls your resources? English class reads Chapter 13 and analyzes: Rochester\'s testing of Jane, the power dynamics in their conversation, whether Jane can truly consent to this relationship. Students synthesize: When is testing another person ethical? How do power imbalances affect consent in professional and personal relationships? What frameworks help us navigate these situations?',
      subjects: ['Psychology', 'Ethics', 'Philosophy', 'Sociology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Analyzing Power Dynamics: Can Equals Meet Within Hierarchy?',
    prompt: 'Rochester tells Jane he wants intellectual equality while maintaining social superiority. Your task: Develop a framework for analyzing whether genuine equality is possible within hierarchical relationships, then apply it to Jane and Rochester\'s dynamic. Consider: power imbalance (employer-employee), age/experience difference (38 vs. 18), gender hierarchy (Victorian patriarchy), and economic disparity (wealthy gentleman vs. poor governess). Then evaluate: Is Rochester\'s offer of intellectual equality genuine egalitarianism or sophisticated condescension? Can you have "equality" in one domain (intellectual) while maintaining hierarchy in others (social, economic, power)? Finally, connect to modern contexts: workplace relationships, mentorships, age-gap relationships, and hierarchical structures that claim to value equality.',
    
    guidingQuestions: [
      'What would "equality" require in Jane and Rochester\'s relationship? Just intellectual respect? Or also economic independence, social standing, power to leave, mutual vulnerability? What are the components of genuine equality?',
      'Rochester says he doesn\'t want to treat Jane as inferior but claims superiority from age and experience. Is this a contradiction? Can you partially dismantle hierarchy (intellectual equality) while maintaining it (social superiority)? Or does hierarchy always corrupt even "equal" domains?',
      'Does Jane have genuine choice in this relationship? She needs employment, housing, income—Rochester provides all three. Can you freely consent to personal relationship with someone who controls your material survival? Where\'s the line between: choice made in constrained circumstances vs. coerced choice?',
      'How does gender affect this analysis? Would a male governess relating to a female employer raise the same questions? What about same-sex relationships with power imbalance? How do different forms of hierarchy (class, gender, age, race) intersect and intensify each other?'
    ],
    
    thinkingFramework: {
      analyze: 'Map the power dynamics in Jane and Rochester\'s relationship: (1) Economic—he pays her, controls her housing, can fire her; (2) Social—he\'s gentry, she\'s employee; she needs his recommendation for future employment; (3) Gender—Victorian laws give men legal power over women; (4) Age—he\'s 20 years older with more life experience; (5) Physical—he controls space, summons her, dismisses her. Then analyze what "equality" Rochester offers: (1) Intellectual conversation as peers; (2) Permission to speak plainly; (3) Respect for her honesty; (4) Interest in her opinions. Map what remains hierarchical even in their "equal" moments: Who controls when they meet? Who can end conversation? Who sets the agenda? Who faces consequences if relationship fails?',
      evaluate: 'Using your framework for equality, assess Rochester\'s claim. Is intellectual equality within maintained hierarchy: (1) A meaningful first step toward fuller equality? (2) A contradiction—you can\'t have equality in one domain while hierarchy persists in others? (3) A manipulation—using the language of equality to obscure continued domination? Consider: Does Rochester\'s good faith matter? (Assume he genuinely wants to treat Jane as intellectual equal.) Or does power structure override intent? Are there situations where hierarchical relationships can become equal over time? Or must you have structural equality first before relationship equality is possible?',
      synthesize: 'Connect to contemporary contexts: (1) Workplace relationships where bosses date employees—companies often prohibit this. Why? Is prohibition paternalistic (assuming employees can\'t consent) or protective (recognizing coercion)? (2) Professor-student relationships—most universities ban them while student is enrolled. Is this different after graduation? (3) Age-gap relationships—when is age difference power imbalance vs. just different life stages? (4) Mentor-mentee relationships—how do we get mentorship benefits while preventing exploitation? Develop principles: When can relationships across hierarchy be ethical? What safeguards are necessary? What would make Jane and Rochester\'s relationship more equal?'
    },
    
    expectedDepth: 'Strong responses will: (1) Develop clear framework for analyzing equality—define terms, identify components, articulate criteria; (2) Apply framework consistently to text, using specific evidence from chapter; (3) Acknowledge complexity—this isn\'t simple "Rochester is manipulative" or "Rochester is egalitarian"; it\'s both/and; (4) Distinguish between intent (what Rochester wants) and structure (what hierarchy creates)—you can have good intent within oppressive structure; (5) Consider intersectionality—class, gender, age, and power compound each other; (6) Engage with modern parallels rigorously, not superficially—show how Jane Eyre illuminates contemporary debates about power and consent; (7) Articulate your own position: Can hierarchy and equality coexist? Under what conditions? What safeguards? This requires philosophical rigor and textual grounding.',
    
    classroomApplication: 'Works as: (1) Analytical essay (5-6 pages) with clear thesis about equality/hierarchy; (2) Debate—teams argue whether Rochester\'s offer is genuine equality or sophisticated condescension; (3) Case study analysis—students apply framework to modern scenarios (workplace relationships, mentorships, etc.) then return to Jane Eyre; (4) Small group work developing equality frameworks, then whole-class synthesis. Time: 3-4 class periods. Connect to: organizational psychology, feminist theory, labor relations, ethics of consent, power dynamics. Could bring in contemporary texts: policies on workplace relationships, #MeToo discussions, debates about age-gap relationships.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature\'s importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(13),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🌙',
    title: 'Next Time: Chapter 14 — Evening Conversations Deepen',
    preview: 'Rochester begins calling for Jane regularly in the evenings, and their conversations become more personal and intense. He reveals fragments of his past—mentions of mistakes, sins, and regrets—while testing whether Jane will judge him or offer cheap forgiveness. He philosophizes about redemption and whether a man with a guilty past can be reformed through love of a pure woman. Jane listens, intrigued but cautious, unsure whether Rochester is confessing or manipulating, seeking absolution or setting a trap. The intellectual attraction deepens into something more dangerous: emotional entanglement.',
    hookQuestion: 'What past "sins" is Rochester hinting at? Is he confessing to prepare Jane for revelations—or is he testing whether she\'ll excuse anything as long as he frames it romantically? And can Jane maintain her moral clarity when Rochester\'s pain and complexity make her want to comfort rather than judge?'
  }
}

