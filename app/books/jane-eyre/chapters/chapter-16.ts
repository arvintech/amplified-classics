/**
 * JANE EYRE - CHAPTER 16
 * 
 * The morning after the fire, Rochester leaves Thornfield abruptly without
 * speaking to Jane, then rumors arrive that he's courting wealthy Blanche
 * Ingram—while Grace Poole remains employed as if nothing happened
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter16: ChapterData = {
  number: 16,
  title: 'The Morning After',
  
  readingTime: 24,
  pages: 14,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'The morning after saving Rochester from the fire, Jane expects him to seek her out—instead he leaves Thornfield abruptly without explanation, and days later news arrives that he\'s attending a house party where he\'ll likely court the beautiful and wealthy Blanche Ingram, leaving Jane devastated and questioning whether she imagined the intimacy they shared.',
    
    full: [
      'Jane wakes the morning after the fire expecting everything to have changed between her and Rochester. Last night they shared intense intimacy—she saved his life, they were alone in his bedroom, he held her hand and spoke of destiny. But when morning comes, Rochester is gone. He left at dawn for the Leas, a neighboring estate, without seeking Jane out or explaining his departure. Mrs. Fairfax mentions the trip casually as if it\'s routine. Jane is stunned. She had expected Rochester to call for her, to continue their connection, to explain about the fire—instead he\'s vanished as if last night never happened.',
      
      'Jane tries to investigate the fire\'s origins by seeking out Grace Poole, the woman Rochester blamed. She finds Grace in the servants\' quarters calmly sewing and drinking beer, utterly unperturbed. Grace shows no sign of guilt, fear, or even awareness that anything unusual happened. When Jane probes carefully, Grace responds normally—she seems genuinely unaware of any fire. This makes Rochester\'s explanation even more implausible: if Grace set the fire, wouldn\'t she be nervous? Wouldn\'t she know Jane knows? But Grace is perfectly calm, which suggests she either didn\'t do it or is an extraordinarily good actress. Jane also notices Grace is well-paid—better than most servants—and wonders why Rochester would pay handsomely a woman who tried to murder him.',
      
      'Days pass with no word from Rochester. Then Mrs. Fairfax receives a letter: Rochester will return in three days and will bring a party of fashionable guests for an extended visit. The house must be prepared. Among the expected guests: the beautiful Blanche Ingram and her mother, the Dowager Lady Ingram. Mrs. Fairfax speaks of Blanche\'s beauty, her accomplishments, her aristocratic family. Servants gossip that Rochester clearly intends to marry Blanche—he\'s paid attention to her for years, and now he\'s finally at the marrying age where he might settle down.',
      
      'Jane is devastated. She realizes she\'s in love with Rochester, which horrifies her—how could she be so foolish? He\'s a wealthy gentleman; she\'s a penniless governess. She imagined his attention meant something, but clearly it didn\'t. He can court Blanche Ingram, who is everything Jane is not: beautiful, wealthy, accomplished, from his own class. Jane conducts a brutal self-audit, listing her own plainness, poverty, and insignificance compared to Blanche\'s advantages. She draws two portraits: one of herself (honest and harsh), one of imagined Blanche (beautiful and superior), to remind herself daily of the impossibility of her feelings. Yet even as Jane tries to reason herself out of love, she can\'t stop wondering: if Rochester felt nothing last night, why did he hold her hand so long? Why speak of destiny? And most confusingly: why is Grace Poole still employed, acting normal, after trying to kill him?'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Romantic Whiplash: Intimacy Followed by Withdrawal',
      definition: 'When someone creates intense intimacy and connection, then abruptly withdraws without explanation—leaving the other person confused, destabilized, and doubting whether the intimacy was real.',
      context: 'Last night Rochester held Jane\'s hand, spoke of destiny, created charged intimacy. This morning he\'s gone without a word. He left early, didn\'t seek her out, didn\'t explain. Jane expected continuation of their connection; instead she gets silence and absence. This creates emotional whiplash: did last night mean something? Was Jane foolish to think it did? The sudden withdrawal makes Jane doubt her own perceptions and feelings.',
      whyItMatters: 'This pattern—intense connection followed by withdrawal—is common in relationships and incredibly destabilizing. It\'s sometimes called "intermittent reinforcement": alternating between closeness and distance keeps the other person off-balance, always trying to regain the intimacy that was briefly offered then removed. Whether Rochester is doing this strategically (manipulation) or genuinely (he\'s conflicted about Bertha and can\'t act on feelings for Jane), the effect is the same: Jane is left confused and emotionally dependent on his attention. Modern dating recognizes this as breadcrumbing or hot-and-cold behavior—keeping someone engaged through occasional intense connection followed by withdrawal.'
    },
    {
      term: 'Class Consciousness and "Impossibility" of Love',
      definition: 'The internalized belief that love across class boundaries is impossible, foolish, or doomed—shaped by social structures that make cross-class relationships practically difficult and socially stigmatized.',
      context: 'Jane recognizes she\'s in love with Rochester and immediately calls herself foolish. Why? Not because Rochester is unworthy, but because he\'s a gentleman and she\'s a governess. The class difference makes the relationship seem impossible to Jane—even though Victorian literature is full of cross-class romances. Jane has internalized the social rule that people marry within their class. She assumes Rochester couldn\'t possibly love her because she\'s poor and plain, while he could marry someone like Blanche who is wealthy and beautiful.',
      whyItMatters: 'Class consciousness shapes what we imagine is possible in relationships. Jane doesn\'t even consider that Rochester might value her intelligence, character, and spiritual connection over Blanche\'s beauty and wealth—she assumes conventional markers (money, beauty, status) determine romantic value. This pattern persists today: people assume relationships are impossible because of income differences, educational gaps, or social background—sometimes these barriers are real (practical incompatibilities) but often they\'re internalized beliefs about who "belongs" with whom. Understanding class consciousness helps us examine which relationship barriers are structural vs. which are self-imposed based on internalized hierarchies.'
    },
    {
      term: 'Triangulation: The Introduction of a Rival',
      definition: 'When a third person is introduced into a two-person dynamic, creating competition, jealousy, and anxiety; often used to heighten desire or test commitment.',
      context: 'Rochester leaves Jane without explanation and immediately the narrative introduces Blanche Ingram—beautiful, wealthy, accomplished, appropriate for Rochester\'s station. Whether Rochester is genuinely courting Blanche or using her to test/provoke Jane\'s feelings is unclear. But the effect is triangulation: Jane must now imagine Rochester with Blanche, compare herself to Blanche, and feel the pain of potential loss. The triangle creates emotional stakes that the Rochester-Jane dyad alone might not.',
      whyItMatters: 'Triangulation is powerful in relationships and fiction. Introducing a rival heightens desire ("I might lose them"), creates comparison ("how do I measure up?"), and tests commitment ("will they choose me?"). Sometimes triangulation is narrative structure (creating dramatic tension), sometimes it\'s deliberate strategy (making someone jealous to secure their attachment), sometimes it\'s unconscious behavior (having a backup option). In modern contexts: someone mentioning other romantic prospects to make you jealous, friends or family positioning themselves between partners to test loyalty, or workplace dynamics where attention is distributed to create competition. Understanding triangulation helps recognize when third parties are introduced strategically vs. genuinely.'
    },
    {
      term: 'Self-Portrait as Self-Punishment',
      definition: 'Deliberate self-criticism or self-degradation as a way to manage painful emotions—by focusing on one\'s own inadequacy rather than the other person\'s behavior.',
      context: 'Jane responds to Rochester\'s departure by creating two portraits: one of herself (harsh and plain) and one of imagined Blanche (beautiful and perfect). She forces herself to look at these daily to "remember" her place. This is self-punishment disguised as realism. Instead of questioning Rochester\'s behavior (why did he leave without explanation? why did he create intimacy then disappear?), Jane turns criticism inward: she\'s foolish for having feelings, she\'s plain, she\'s nobody. The portraits are meant to crush her romantic feelings through constant reminder of her inadequacy.',
      whyItMatters: 'Turning pain inward is common, especially for people socialized to blame themselves rather than question others\' behavior. When someone hurts you, it\'s often psychologically easier to decide you were foolish/inadequate than to confront that they behaved badly. Self-criticism feels like control: if it\'s your fault, you can fix it. But it also protects the other person from accountability. In modern contexts: after rejection or betrayal, people often catalogue their own flaws rather than the other person\'s poor treatment. "I wasn\'t pretty/successful/interesting enough" instead of "they acted cruelly." Understanding this pattern helps recognize when self-criticism is really displaced anger or hurt that should be directed at someone else\'s behavior.'
    },
    {
      term: 'Gaslighting by Absence: Creating Doubt Through Silence',
      definition: 'Making someone doubt their perceptions and feelings not through explicit denial but through acting as if a significant event never happened.',
      context: 'Rochester creates intense intimacy, then disappears and acts as if nothing happened. His absence and silence make Jane question: was last night as significant as she thought? Did she misread his feelings? Was the intimacy real or did she imagine its importance? Meanwhile, Grace Poole goes about her duties normally, which makes Jane doubt Rochester\'s explanation about the fire. The combination—Rochester\'s silence and Grace\'s normalcy—makes Jane doubt her own judgment about what happened and what it meant.',
      whyItMatters: 'Gaslighting through absence is subtle: instead of explicitly telling you "that didn\'t happen" or "you\'re crazy," the person simply acts as if a significant event was inconsequential. This makes you doubt yourself: maybe it wasn\'t important? maybe I overreacted? maybe I imagined the significance? The doubt is more powerful because it comes from within—they don\'t have to convince you nothing happened; their indifference makes you convince yourself. Modern equivalent: someone creates intimate moment then never acknowledges it, leaving you wondering if you imagined the connection. Or: someone behaves badly, then carries on normally, making you doubt whether you have a right to be upset.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane undergoes brutal emotional education in this chapter: she realizes she\'s in love with Rochester and immediately calls herself foolish for it. She\'s internalized class consciousness so deeply that she cannot imagine Rochester reciprocating her feelings—he\'s a gentleman, she\'s a governess, end of story. Jane\'s response to pain is characteristically masochistic: she creates the two portraits (one harsh image of herself, one idealized image of Blanche) to punish herself daily for having inappropriate feelings. This is Jane turning rage and hurt inward rather than outward. She doesn\'t blame Rochester for creating intimacy then vanishing; she blames herself for misreading his attention. Jane also demonstrates investigative instincts: she seeks out Grace Poole to test Rochester\'s explanation. Grace\'s calm demeanor confirms Jane\'s suspicion that Rochester lied, but Jane has no framework for understanding why. She\'s suspended between her instincts (something is deeply wrong) and her desire to trust Rochester. By chapter\'s end, Jane has accepted that Rochester will marry Blanche and that she must watch it happen while maintaining her composure—a devastating position for someone who\'s just realized she\'s in love.',
      keyTrait: {
        emoji: '💔',
        text: 'Self-Punishing'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester appears only through absence in this chapter, but his absence speaks loudly. After creating intense intimacy with Jane—hand-holding, talk of destiny, charged emotional connection—he leaves at dawn without seeking her out or explaining his departure. Then he stays away for days. Then he announces he\'s bringing houseguests including Blanche Ingram, whom society expects him to marry. Whether this is deliberate strategy (using Blanche to test Jane\'s feelings, creating jealousy to heighten attachment) or genuine conflict (he wants Jane but can\'t have her because of Bertha, so he\'s pursuing appropriate match with Blanche) is unclear. What\'s certain: Rochester creates intimacy then withdraws, which is emotionally destabilizing for Jane. He\'s also clearly lying about the fire—Grace Poole\'s calm normalcy proves she wasn\'t the culprit, and Rochester knew this. His lies are accumulating, requiring more management and more complicity from Jane.',
      keyTrait: {
        emoji: '👻',
        text: 'Absent Presence'
      }
    },
    {
      name: 'Grace Poole',
      development: 'Jane seeks out Grace to test Rochester\'s fire explanation and finds her completely calm—sewing, drinking beer, showing no guilt, fear, or awareness of having set a fire. This confirms for Jane that Rochester lied. But who is Grace, really? Is she Bertha\'s keeper (which would explain her high wages and calm demeanor—she knows she didn\'t set the fire because she knows who did)? Or is she covering for someone else? Grace\'s composure under Jane\'s questioning suggests she\'s either innocent or extremely skilled at deception. Jane also notices Grace is paid unusually well for a servant, which adds to the mystery: why would Rochester pay handsomely someone who tried to murder him? Grace remains enigmatic—clearly important but deliberately kept offstage by the narrative.',
      keyTrait: {
        emoji: '🎭',
        text: 'Suspiciously Calm'
      }
    },
    {
      name: 'Blanche Ingram',
      development: 'Blanche doesn\'t appear in person this chapter—she exists only in description and gossip. She\'s presented as Jane\'s opposite: beautiful (Jane is plain), wealthy (Jane is poor), accomplished (Jane is competent but not showy), aristocratic (Jane is nobody). Blanche represents everything society says Rochester should want in a wife. The narrative positions her as Jane\'s rival before Jane (or readers) have met her. This is triangulation: Blanche\'s perfection exists mainly to highlight Jane\'s perceived inadequacy. We don\'t yet know if Blanche is actually worthy of Rochester or if she\'s shallow—all we know is she\'s socially appropriate for him in ways Jane isn\'t.',
      keyTrait: {
        emoji: '👑',
        text: 'Idealized Rival'
      }
    },
    {
      name: 'Mrs. Fairfax',
      development: 'Mrs. Fairfax inadvertently causes Jane pain through her innocent gossip about Blanche Ingram. She speaks of Blanche\'s beauty and accomplishments with admiration, assumes Rochester will marry Blanche (which is what society expects), and doesn\'t notice Jane\'s emotional response. Mrs. Fairfax operates within conventional social expectations: of course Rochester would marry someone like Blanche; why wouldn\'t he? She has no idea Jane loves Rochester or that Rochester might reciprocate. Mrs. Fairfax represents the conventional world that makes Jane and Rochester\'s connection seem impossible—not through malice but through assumptions about how the world works.',
      keyTrait: {
        emoji: '🗨️',
        text: 'Innocent Gossip'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'I expected to see Mr. Rochester. I listened for his voice, and I longed to hear his step. I waited for him to come and speak to me. Instead, I learned he had left Thornfield at dawn.',
      analysis: 'Jane\'s expectations vs. reality reveal the gap between last night\'s intimacy and this morning\'s abandonment. She expected continuation of their connection—he would seek her out, they would talk, something would be acknowledged. Instead: silence and absence. The repetition ("I expected... I listened... I longed... I waited") emphasizes Jane\'s anticipation and makes the disappointment more acute. Rochester\'s dawn departure feels deliberate—he left early specifically to avoid encountering Jane. This is romantic whiplash: intense connection followed by immediate withdrawal.'
    },
    {
      text: 'I hardly know whether I had slept or not after this musing; at any rate, I started wide awake on hearing a vague murmur, peculiar and lugubrious, which sounded, I thought, just above me.',
      analysis: 'This is from Jane\'s restless night, still hearing the "demonic laughter" that preceded the fire. The language is gothic—"vague murmur," "peculiar and lugubrious"—creating ongoing unease. Jane can\'t rest because she knows something is wrong at Thornfield. The sounds continue, which should alarm Rochester, but he\'s left anyway. This suggests whatever is causing these disturbances is less important to Rochester than avoiding Jane after their intimate night.'
    },
    {
      text: 'I wanted to see the library, which Mr. Rochester had shown me the day before,—I wanted to see if the portrait of him hanging there was really like; but I was not allowed.',
      analysis: 'Jane wants to look at Rochester\'s portrait because she can\'t see Rochester himself—he\'s absent. This is poignant: she\'s so desperate for connection that even a painted image would satisfy her. But she\'s "not allowed" access to the library, which metaphorically represents her exclusion from Rochester\'s real life. She can\'t even look at his image freely. This highlights the class barrier: as governess, she doesn\'t have liberty to go where she wants in a house that isn\'t hers.'
    },
    {
      text: 'Mr. Rochester had given me but one week\'s notice—"that was something." He was expected to return "in three days," "with a party of fashionable guests."',
      analysis: 'The quoted phrases show Jane receiving this information from Mrs. Fairfax—words that cause pain but must be received neutrally. Rochester will return "with a party" meaning Jane won\'t have access to him; she\'ll watch from the margins as he socializes with people from his own class. The casual tone of the information (Mrs. Fairfax has no idea it hurts Jane) makes the pain worse—the world carries on, unaware of Jane\'s devastation.'
    },
    {
      text: 'All this was torture to me—refined, lingering torture. It kept up a slow fire of indignation, and a trembling trouble of grief, which harassed and crushed me altogether.',
      analysis: 'Jane names her pain explicitly: "torture... refined, lingering torture." The "slow fire" metaphor connects to the literal fire she put out—she saved Rochester from burning, but now she\'s burning herself with unrequited love. The language of "harassed and crushed" shows how subordinated people experience emotional pain: they can\'t express it openly, so it turns inward, harassing and crushing from within. Jane must maintain composure while dying inside.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Intimacy and Abandonment: The Destabilizing Pattern',
        explanation: 'Rochester creates intense intimacy (holding Jane\'s hand, speaking of destiny, charged connection) then immediately withdraws without explanation. This pattern is deeply destabilizing: it makes Jane doubt whether the intimacy was real, whether she misread his feelings, whether she\'s foolish for having responded emotionally. The withdrawal after intimacy creates dependency—Jane becomes desperate for return of the connection that was briefly offered then removed. Whether Rochester is doing this strategically (manipulation) or unconsciously (conflicted about his feelings because of Bertha), the effect is the same: emotional whiplash that leaves Jane off-balance and increasingly attached despite her better judgment.'
      },
      {
        name: 'Class as Barrier: Internalized Impossibility',
        explanation: 'Jane doesn\'t question whether Rochester is good for her; she questions whether she\'s "good enough" for him. She\'s internalized class consciousness so deeply that cross-class romance seems inherently impossible—not just difficult but ridiculous, foolish, shameful. She creates the two portraits (herself harsh, Blanche idealized) to crush her feelings through daily reminder of class hierarchy. This theme explores how social structures become internal beliefs: Jane polices herself, doesn\'t let herself imagine possibility, accepts "her place" even in matters of the heart. The novel will ultimately challenge this—Jane and Rochester will marry—but first it shows how powerfully class consciousness shapes what we imagine we deserve or can hope for.'
      },
      {
        name: 'Triangulation: Blanche as Rival',
        explanation: 'The introduction of Blanche Ingram creates triangle: Rochester-Jane-Blanche. Blanche exists (so far) mainly as threat to Jane—beautiful, wealthy, appropriate for Rochester\'s class. Whether Rochester genuinely courts Blanche or uses her to test/provoke Jane\'s feelings is ambiguous. But the triangle creates dramatic stakes: Jane must watch Rochester with Blanche, compare herself unfavorably, and feel potential loss. Triangulation heightens desire and tests commitment—it forces Jane to confront her feelings (can\'t stay in denial when there\'s rival) while making those feelings more painful (must watch him with someone else).'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Absence as Presence: Rochester Offstage',
        explanation: 'Rochester doesn\'t appear in this chapter but dominates it. His absence is more powerful than presence would be—it creates confusion, pain, speculation. Jane is consumed with wondering: why did he leave? what does his absence mean? what will happen when he returns? The narrative technique shows how absence can be as emotionally significant as presence. Rochester doesn\'t need to be in the scene to control Jane\'s emotional state.',
        example: 'Jane wakes expecting to see Rochester; learns he\'s gone. She spends the morning listening for him; he doesn\'t come. She wants to see his portrait; she\'s denied access. Every moment is structured around his absence. Brontë makes readers feel the void Rochester creates by leaving—his absence generates more narrative tension than his presence often does.'
      },
      {
        name: 'Portrait as Punishment: Visual Self-Criticism',
        explanation: 'Jane creates two portraits—one of herself (harsh, plain) and one of imagined Blanche (beautiful, perfect)—to punish herself for having feelings. This externalizes her internal self-criticism: she must look at visual representation of her inadequacy daily. The portraits are meant to function like exposure therapy in reverse: by forcing herself to confront her plainness vs. Blanche\'s beauty, Jane hopes to crush her romantic feelings.',
        example: 'Jane draws herself with brutal honesty, emphasizing every plain feature. Then she draws Blanche as beautiful as possible—aristocratic, accomplished, perfect. She keeps both portraits where she must see them daily. This visual technique externalizes Jane\'s inner voice saying "you\'re foolish for having hope." The portraits become physical manifestation of her self-punishment and internalized class consciousness.'
      },
      {
        name: 'Gossip as Torture: Information from Third Parties',
        explanation: 'Jane learns about Rochester\'s courtship of Blanche through Mrs. Fairfax\'s innocent gossip and servant rumors. Receiving painful information from casual third-party sources (rather than from Rochester directly) makes the pain worse—Jane must maintain composure while absorbing devastating news. It also highlights Jane\'s marginal position: she\'s not important enough to be told directly; she learns through gossip like any other servant.',
        example: 'Mrs. Fairfax casually mentions Rochester will bring house guests including "Miss Ingram—you know, she\'s very beautiful." Jane must respond neutrally while dying inside. Later, servants gossip that Rochester will surely marry Blanche. Jane overhears and must pretend indifference. The information comes in drips from peripheral sources, each mention a small torture, each requiring Jane to maintain blank face while her heart breaks.'
      },
      {
        name: 'Inner Monologue: Reason vs. Feeling',
        explanation: 'Much of this chapter is Jane\'s internal dialogue as she tries to reason herself out of loving Rochester. She lists all the logical reasons her feelings are foolish: he\'s rich, she\'s poor; he\'s handsome, she\'s plain; he can marry Blanche, she\'s nobody. Her rational mind constructs airtight argument against hope. But her feelings don\'t respond to logic—she loves him anyway. The technique shows the gap between what we know rationally and what we feel emotionally.',
        example: 'Jane tells herself: "He is not of your order: keep to your caste, and be too self-respecting to lavish the love of the whole heart, soul, and strength, where such a gift is not wanted and would be despised." This is Jane reasoning with herself in second person—literally talking herself down from her feelings. But the rational argument doesn\'t make the love disappear; it just makes Jane feel worse for having it.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine working for someone you\'re attracted to—a boss, professor, mentor—and one night something intense happens: a crisis brings you together in ways that feel significant. Maybe you work late solving emergency, maybe you have deep personal conversation, maybe there\'s physical proximity and emotional intimacy that crosses normal boundaries. The connection feels electric, meaningful, possibly mutual. You go home thinking everything has changed between you. But the next day: nothing. They don\'t seek you out, don\'t acknowledge what happened, act like that intense moment never occurred. Then you hear through workplace gossip that they\'re seeing someone else—someone more appropriate, more impressive, more from their world. Maybe it\'s someone they\'ve dated before, maybe someone colleagues always expected them to end up with. You realize you were foolish to think that one intense moment meant anything. They can have anyone; why would they choose you? You try to reason yourself out of your feelings: they\'re out of your league, you imagined the connection, you need to get over it. You even try to make yourself feel worse—deliberately highlighting your inadequacies compared to this other person\'s perfections—hoping self-criticism will crush the attraction. Meanwhile, you have to keep working in proximity to them, keep seeing them, keep maintaining professional composure while watching them with someone else. And you can\'t even fully process it because you\'re supposed to be professional—you can\'t complain to coworkers ("I thought my boss liked me!") without seeming inappropriate.',
    
    parallels: [
      '🔹 **Romantic Whiplash**: When someone creates intense intimacy then withdraws without explanation, it\'s emotionally destabilizing. You\'re left wondering: did I misread the connection? was I foolish to respond? did they feel nothing while I felt everything? The pattern—hot then cold, intimate then distant—is often called "breadcrumbing" in modern dating: giving just enough attention to keep you engaged, then withdrawing to keep you off-balance.',
      '🔹 **The Introduction of a Rival**: When someone you\'re attracted to suddenly seems to be dating someone else—especially someone who seems "better" than you in conventional ways—it creates triangulation. You compare yourself unfavorably: they\'re prettier, richer, more accomplished, more appropriate. The rival\'s perfection makes your own inadequacy feel more acute. Modern equivalent: ex starts dating someone new and you obsessively check their social media, cataloging ways the new person is superior.',
      '🔹 **"Out of My League" Thinking**: Class consciousness in Jane\'s era appears as "league" thinking today: they\'re too successful/attractive/educated for me. This is internalized hierarchy: you decide the relationship is impossible not because of incompatibility but because of imagined status difference. You don\'t even let yourself hope because hope feels foolish. Modern contexts: not pursuing someone because you make less money, don\'t have graduate degree, aren\'t conventionally attractive—assuming these markers determine romantic value.',
      '🔹 **Self-Punishment as Coping**: When someone hurts you, sometimes it\'s psychologically easier to blame yourself than to hold them accountable. Jane doesn\'t question Rochester\'s behavior (why did he create intimacy then disappear?); instead she punishes herself for having feelings. Modern equivalent: after rejection or ghosting, cataloguing your own flaws ("I wasn\'t interesting/pretty/successful enough") instead of acknowledging the other person behaved badly ("they led me on then disappeared").',
      '🔹 **Information Through Gossip**: Learning about someone\'s romantic life through third parties rather than directly from them is particularly painful—and signals your marginal position in their life. If you mattered, they\'d tell you themselves. Instead you hear through workplace gossip, social media, or mutual friends. Modern equivalent: finding out someone is in relationship through Instagram or hearing through friends—the indirect information delivery itself communicates you\'re not important enough for direct communication.',
      '🔹 **Having to Maintain Composure**: When you have feelings for someone in professional context (boss, coworker, professor, mentor), you can\'t openly process your emotions. You have to maintain professional demeanor while heartbroken. You can\'t vent to coworkers without seeming inappropriate. You have to keep showing up, keep being competent, keep pretending you\'re fine. Modern equivalent: the emotional labor of continuing to work professionally with someone after they\'ve hurt you, or maintaining professional presence while watching them with someone else.',
      '🔹 **Gaslighting by Absence**: When someone creates significant intimate moment then acts as if it never happened, their indifference makes you doubt your own perceptions. Did you imagine the connection? Overestimate its significance? The doubt is worse because it comes from within—they don\'t have to tell you "that meant nothing"; their subsequent absence/indifference makes you tell yourself that.'
    ],
    
    discussionPrompt: 'Have you experienced romantic whiplash—someone creating intense connection then withdrawing without explanation? How did it affect your ability to trust your own perceptions? When have you used "league" thinking to dismiss possibility before even trying? Have you ever punished yourself for having feelings for someone who didn\'t reciprocate—focusing on your own inadequacy rather than questioning their behavior? What does it feel like to maintain professional composure while emotionally devastated?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '💔',
      name: 'Love and Class Consciousness',
      explanation: 'Jane realizes she loves Rochester and immediately decides it\'s impossible because of class difference. She doesn\'t question compatibility—she questions whether she\'s allowed to hope. This thread shows how social structures become internal beliefs: Jane polices herself, accepts "her place," doesn\'t let herself imagine crossing class boundaries. The novel is building toward challenge to this: Jane and Rochester will marry, but only after Jane gains economic independence. Love across class boundaries requires economic equity, not just romantic feeling.'
    },
    {
      emoji: '🎭',
      name: 'Rochester\'s Pattern: Intimacy and Withdrawal',
      explanation: 'This is the first clear instance of Rochester creating intense connection then withdrawing. It won\'t be the last. This pattern—hot and cold, intimate then distant—keeps Jane off-balance and increasingly desperate for return of his attention. Whether this is strategic manipulation or unconscious behavior doesn\'t change its effect: emotional dependency. The thread asks: is this just Rochester\'s personality (conflicted, dramatic), or is it technique for maintaining control?'
    },
    {
      emoji: '👁️',
      name: 'Seeing and Being Seen: Portrait and Self-Image',
      explanation: 'Jane creates portraits to torture herself: one harsh self-image, one idealized Blanche. This continues the theme of seeing/being seen—how we perceive ourselves vs. how others see us vs. how we wish to be seen. Jane sees herself as plain, insignificant; Rochester has suggested he sees her as special, soulful. The portraits are Jane\'s attempt to force herself to see through society\'s eyes (you\'re nobody) rather than through possibility of Rochester\'s eyes (you matter).'
    },
    {
      emoji: '🎪',
      name: 'Triangulation: The Rival',
      explanation: 'Blanche Ingram is introduced as romantic rival before she even appears. Her perfection (beautiful, wealthy, accomplished) exists mainly to highlight Jane\'s perceived inadequacy. Whether Rochester genuinely courts Blanche or uses her to test Jane\'s feelings remains ambiguous. But the triangle creates dramatic stakes and emotional pain—Jane must watch and wait while imagining she\'ll lose Rochester to someone "better."'
    },
    {
      emoji: '🔍',
      name: 'Investigation and Mystery',
      explanation: 'Jane seeks out Grace Poole to test Rochester\'s explanation about the fire. Grace\'s calm normalcy confirms Jane\'s suspicion that Rochester lied. But why? And who did set the fire? Jane is accumulating evidence of deception but has no framework for understanding what\'s being hidden. The mystery deepens: strange sounds continue, Grace is paid well, Rochester is lying—but about what? Jane models maintaining suspicion while outwardly complying.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Rochester\'s Departure',
      question: 'After creating intense intimacy with Jane during the fire, Rochester leaves at dawn without seeking her out or explaining his departure. Why? Is this deliberate strategy (creating emotional whiplash to make Jane more dependent on his attention) or genuine conflict (he wants Jane but can\'t have her because of Bertha, so he\'s avoiding her)? Does motivation matter if the effect is the same—Jane is devastated and confused?'
    },
    {
      title: 'Self-Punishment vs. Self-Preservation',
      question: 'Jane creates two portraits—one harsh self-image, one idealized Blanche—to torture herself daily and crush her romantic feelings. Is this healthy self-preservation (reminding herself of reality to avoid worse pain later) or destructive self-punishment (blaming herself for having feelings instead of questioning Rochester\'s behavior)? When is self-criticism protective vs. when is it just internalized oppression?'
    },
    {
      title: 'Class and "Impossibility"',
      question: 'Jane assumes Rochester can\'t love her because she\'s a governess and he\'s a gentleman. She doesn\'t question compatibility—she questions whether love across class boundaries is allowed. Is Jane being realistic about social barriers or has she internalized class hierarchy so deeply she can\'t imagine crossing it? How do we distinguish between legitimate structural barriers vs. internalized beliefs about who we "deserve"?'
    },
    {
      title: 'Grace Poole\'s Calm',
      question: 'Jane seeks out Grace to test Rochester\'s fire explanation and finds her completely calm—sewing, drinking, showing no guilt or fear. This confirms Rochester lied. But why is Grace so calm? Is she innocent and doesn\'t know she\'s been blamed? Is she Bertha\'s keeper and knows Rochester must lie to conceal Bertha? Is she an extraordinarily good actress? What does her high salary suggest about her role at Thornfield?'
    },
    {
      title: 'Blanche as Rival',
      question: 'Blanche Ingram is introduced before she appears, mainly through description of her beauty, wealth, and social appropriateness. She exists (so far) as Jane\'s opposite—everything Jane is not. Is Blanche a real romantic threat or is she being used to create triangulation (testing Jane\'s feelings, heightening Jane\'s desire through introducing competition)? Does it matter whether Blanche is genuine rival or strategic tool?'
    },
    {
      title: 'Emotional Labor and Composure',
      question: 'Jane must maintain professional composure while heartbroken. She can\'t express her feelings, can\'t complain, must keep working efficiently. She has to prepare Thornfield for Rochester\'s return with house guests including his potential bride. What does this cost Jane emotionally? What does it reveal about the emotional labor required of people in subordinate positions who must hide their feelings to maintain their jobs?'
    },
    {
      title: 'Information Through Gossip',
      question: 'Jane learns about Rochester\'s courtship of Blanche through Mrs. Fairfax\'s casual gossip and servant rumors—not from Rochester directly. Why does receiving painful information through third parties make it worse? What does the method of information delivery reveal about Jane\'s position in Rochester\'s life and at Thornfield generally?'
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
      title: 'Analyzing "Romantic Whiplash": Intimacy and Abandonment Patterns',
      description: 'Write an analytical essay examining Rochester\'s pattern of creating intimacy then withdrawing, and Jane\'s response to this pattern. Part 1: Document what happens: Chapter 15 ends with intense connection (hand-holding, destiny talk, charged intimacy), Chapter 16 begins with Rochester gone without explanation. Part 2: Analyze effect on Jane: How does the intimacy-abandonment pattern affect her emotional state? Her self-perception? Her judgment about Rochester? Part 3: Evaluate Rochester\'s motivation: Is this deliberate manipulation (creating dependency through intermittent reinforcement) or unconscious behavior (genuine conflict about his feelings given his marriage to Bertha)? Part 4: Connect to modern contexts: Where do we see this hot-cold pattern in contemporary relationships? Why is it so destabilizing? Use psychological concepts like intermittent reinforcement, breadcrumbing, or attachment theory. Part 5: Ethical analysis: If Rochester is genuinely conflicted (wants Jane but can\'t have her because of Bertha), does that excuse the pattern? When does explanation become excuse? Cite textual evidence and connect to contemporary relationship dynamics.',
      purpose: 'This prompt develops pattern recognition—students identify a behavior sequence (intimacy → withdrawal) and analyze its effects. They must distinguish between intention (what Rochester means to do) and impact (what it does to Jane), recognize that even unconscious patterns can be harmful. Connects to media literacy and personal experience: recognizing hot-cold patterns in dating, understanding why they\'re destabilizing even when not deliberately manipulative. Students engage with ethics: does explanation (he has valid reasons for withdrawing) excuse impact (Jane is devastated and confused)?'
    },
    
    activity: {
      title: 'Portrait Activity: Self-Image vs. Social Perception',
      description: 'Students create their own version of Jane\'s two-portrait exercise—but with different framing. First portrait: "How I See Myself" (honest self-assessment including perceived flaws). Second portrait: "How I Think Society Judges Me" (emphasizing characteristics society values/devalues). Third portrait (not in original): "How Someone Who Loves Me Sees Me" (including qualities that might not be conventionally valued but are meaningful). Students compare three portraits. Discuss: How much of our self-image is internalized social judgment? What happens when we see ourselves only through society\'s value system (beauty, wealth, status)? Jane creates only two portraits—harsh self and idealized rival—but what if she\'d included Rochester\'s perception (what he values in her: intelligence, strength, soul)? Extension: Students write reflective piece: When do I judge myself by conventional markers (attractiveness, success, status) vs. by qualities that actually matter in relationships (character, kindness, integrity)?',
      materials: 'Drawing supplies or digital tools, three-column worksheet, reflection prompts'
    },
    
    crossCurricular: {
      title: 'Class and Romantic Possibility: Sociology of "League" Thinking',
      description: 'Partner with sociology class to study how social stratification affects relationship formation. Sociology class covers: (1) Homogamy (tendency to marry within own social class/education/background), (2) Social barriers to cross-class relationships (practical: different lifestyle expectations, cultural: stigma and family disapproval), (3) How internalized class consciousness makes people "pre-reject" possibilities they perceive as "out of their league." English class reads Chapter 16 analyzing: How does Jane\'s class consciousness make her decide Rochester is impossible? What assumptions underlie "out of my league" thinking? Students research: Do people still primarily marry within their own socioeconomic bracket? What are actual barriers to cross-class relationships today? How does "assortative mating" work in digital age (dating apps often filter by education/income)? Final project: Interview family members about how class/education/background affected their relationship choices. Did they ever pre-reject someone as "out of their league" or pursue someone specifically because they were "appropriate"? How do cultural expectations about who "belongs" with whom persist even when formal class barriers have diminished?',
      subjects: ['Sociology', 'Economics', 'Psychology', 'Cultural Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Responsibility and Explanation: When Does Context Excuse Behavior?',
    prompt: 'Rochester creates intense intimacy with Jane then disappears without explanation. If we later learn he had legitimate reasons (he wants Jane but is married to Bertha and can\'t act on his feelings), does that excuse the pattern? When does explanation become excuse? Your task: Develop framework for evaluating when context mitigates responsibility for harmful behavior. Consider: (1) Rochester\'s perspective: he has genuine feelings for Jane but is trapped by prior commitment (marriage to Bertha); he can\'t act on feelings or explain situation without revealing Bertha\'s existence. (2) Jane\'s experience: regardless of Rochester\'s reasons, she\'s devastated and confused by his behavior; intention doesn\'t change impact. (3) Power dynamics: Rochester has more power, so his actions affect Jane more than hers would affect him; people with power bear more responsibility for managing dynamics carefully. Apply framework to Rochester and Jane, then extend to modern contexts: workplace dynamics, teaching relationships, mentor-mentee bonds, doctor-patient relationships where one party has feelings but structural barriers or ethical guidelines prevent acting on them.',
    
    guidingQuestions: [
      'Rochester may have legitimate reasons for withdrawing (he\'s married to Bertha and can\'t act on feelings for Jane without revealing her existence). Does legitimate explanation excuse the harm done to Jane? What\'s the difference between explanation (providing context) and excuse (claiming context removes responsibility)?',
      'Jane experiences Rochester\'s behavior as abandonment regardless of his motivations. Should responsibility be judged by intention or impact? Can Rochester be both genuinely conflicted AND responsible for managing the situation better? What would "managing better" look like?',
      'Rochester has more power than Jane (employer, wealthy, older). How does power differential affect responsibility? Do people with more power bear greater responsibility for managing dynamics carefully? What does that mean practically?',
      'Apply to modern contexts: If a boss is attracted to employee but can\'t act on it because it would be inappropriate/against policy, what\'s their responsibility for managing the dynamic? Is it enough to have good reasons for not pursuing relationship, or must they also manage their behavior to avoid creating confusion/hope/harm?'
    ],
    
    thinkingFramework: {
      analyze: 'Map Rochester\'s behavior: (1) Creates intimacy (Chapter 15: hand-holding, destiny talk, charged connection), (2) Disappears without explanation (Chapter 16: leaves at dawn, no contact), (3) Returns with rival (bringing Blanche Ingram to stay). Then identify his possible motivations: (A) He genuinely loves Jane but can\'t have her because married to Bertha, (B) He\'s testing Jane\'s feelings by introducing rival, (C) He\'s genuinely courting Blanche as appropriate match, (D) He\'s manipulating Jane to create dependency. Consider: Can multiple motivations coexist? Can he be genuinely conflicted AND acting manipulatively? Map Jane\'s experience: confusion, self-blame, devastation, doubt about her own perceptions. Note: Jane\'s pain exists regardless of Rochester\'s intentions. Create timeline: intimate moment → abandonment → rival introduction → Jane\'s response (self-punishment, doubt, heartbreak).',
      evaluate: 'Develop framework for when explanation mitigates responsibility: (1) Explanation + Changed Behavior = legitimate mitigation (person has good reason for past behavior and adjusts going forward), (2) Explanation + Continued Pattern = excuse-making (good reasons but harm continues), (3) Explanation Only After Harm = too late (should have communicated constraints before creating intimacy). Apply to Rochester: Even if he has legitimate reasons for withdrawing (can\'t pursue Jane because of Bertha), did he need to create intimacy in Chapter 15? Could he have maintained more distance? Is his explanation (if/when it comes) sufficient to excuse the pattern? Consider power: Rochester is employer, wealthy, older—greater responsibility to manage dynamics carefully. Jane has fewer options (economically dependent, young, female in Victorian era)—less ability to protect herself. When power is unequal, person with more power bears greater responsibility for preventing harm.',
      synthesize: 'Connect to modern contexts: (1) Workplace: Boss attracted to employee but knows relationship would be inappropriate. Obligation: maintain professional boundaries regardless of feelings. Red flag: creating intimacy despite constraints, leaving employee confused. (2) Teaching: Professor has feelings for student but ethics prohibit relationship. Responsibility: don\'t act on feelings AND don\'t create ambiguity that gives student false hope. (3) Medical: Doctor attracted to patient but professional guidelines forbid relationship. Duty: recognize feelings as natural but manage behavior to prevent harm. (4) Mentorship: Mentor and mentee develop feelings but power differential makes relationship problematic. Question: whose responsibility is it to maintain boundaries—the person with more power. Develop guidelines: Having feelings isn\'t wrong, but acting on them (or creating intimacy you can\'t follow through on) becomes problematic when structural barriers exist. People with power bear greater responsibility. Explanation for constraints is better than silence, but explanation doesn\'t excuse harm if you created confusion. Practical application: What does it mean to "manage well" in constrained situations? Clear communication, maintained boundaries, not leveraging power for emotional satisfaction even if you can\'t pursue relationship.'
    },
    
    expectedDepth: 'Strong responses will: (1) Distinguish between explanation and excuse—acknowledge Rochester may have legitimate reasons while maintaining he\'s still responsible for his behavior; (2) Grapple with tension between intention and impact—Rochester\'s motivations don\'t erase Jane\'s pain; (3) Engage seriously with power dynamics—Rochester\'s advantages create greater responsibility to manage situation ethically; (4) Develop nuanced framework that accounts for context without excusing harm; (5) Apply to modern scenarios with specificity—name contemporary equivalents, explain how same dynamics operate across different power relationships; (6) Address what "managing well" looks like practically—what should Rochester have done differently even given his constraints?; (7) Recognize patterns can be both genuine AND harmful—Rochester can be truly conflicted and still responsible for the confusion and pain he causes.',
    
    classroomApplication: 'Works as: (1) Analytical essay (6-8 pages) requiring close reading plus engagement with ethics and power theory, (2) Debate format: "Explanation equals excuse" (teams argue pro/con with specific criteria), (3) Case study analysis—students compare Rochester-Jane dynamic to modern workplace/professional scenarios where feelings exist but structural barriers prevent relationships, (4) Policy development—create guidelines for professionals navigating attraction in constrained contexts (workplace, teaching, medical, mentorship). Time: 4-5 class periods including textual analysis, framework development, contemporary applications, and synthesis. Can connect to: business ethics courses, professional boundaries training, power and responsibility discussions, relationship ethics, organizational psychology. Consider inviting: HR professionals to discuss workplace attraction policies, therapists explaining transference/countertransference in professional relationships, educators discussing teacher-student boundary management.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(16),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '👥',
    title: 'Next Time: Chapter 17 — The House Party Arrives',
    preview: 'Rochester returns to Thornfield with his fashionable guests: the beautiful Blanche Ingram, her aristocratic mother, and a parade of wealthy society people who treat Jane with barely concealed contempt. Jane must serve tea and sit in the drawing room (she\'s governess to Adèle, so she\'s required to be present), which means she has to watch Rochester with Blanche—watch them talk, flirt, laugh, demonstrate their social compatibility. Blanche is everything Jane is not: beautiful, accomplished, dripping with jewels, commanding attention. And Rochester seems to court her, paying attention, engaging in their banter, behaving as society expects of a man courting an appropriate match. But Jane notices something strange: Rochester doesn\'t look happy. And sometimes, when he thinks no one is watching, his eyes find Jane across the room. Meanwhile, Blanche makes cruel comments about governesses (not knowing or caring that Jane can hear), and Lady Ingram treats Jane as barely human—just another piece of furniture in the drawing room. Jane endures this night after night, maintaining her composure while her heart breaks, watching the man she loves seemingly choose someone else while she remains professionally invisible.',
    hookQuestion: 'Is Rochester genuinely courting Blanche, or is this elaborate performance to test Jane\'s feelings? What does it cost Jane to maintain composure while watching Rochester with another woman? And how will Jane survive the house party when she\'s invisible to the guests but painfully visible to her own heartbreak?'
  }
}

