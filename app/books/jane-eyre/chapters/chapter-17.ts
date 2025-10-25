/**
 * JANE EYRE - CHAPTER 17
 * 
 * Rochester returns with fashionable houseguests including beautiful Blanche Ingram,
 * and Jane must sit in the drawing room watching them socialize—enduring their contempt
 * while her heart breaks as Rochester seems to court Blanche
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter17: ChapterData = {
  number: 17,
  title: 'The House Party',
  
  readingTime: 32,
  pages: 18,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Rochester arrives with his fashionable houseguests—including the dazzling Blanche Ingram and her contemptuous aristocratic mother—and Jane must sit in the drawing room enduring their cruel comments about governesses while watching Rochester apparently court Blanche with attentive gallantry that may be genuine or calculated to provoke Jane\'s jealousy.',
    
    full: [
      'Rochester returns to Thornfield with a party of wealthy, fashionable guests: the beautiful Blanche Ingram and her haughty mother Lady Ingram, along with other aristocrats who treat Thornfield like their playground. Jane, as Adèle\'s governess, must be present in the drawing room during evening entertainments—a torturous position where she\'s simultaneously visible (the servants notice her) and invisible (the guests ignore her as if she\'s furniture). Jane positions herself in a window seat behind a curtain, trying to observe while remaining unnoticed. From this vantage point, she watches the social theater unfold: the guests are shallow, cruel, and obsessed with status. They gossip viciously, mock people not present, and demonstrate the casual cruelty of those who\'ve never questioned their own privilege.',
      
      'Blanche Ingram is everything Jane feared: strikingly beautiful, accomplished (she plays piano and sings with technical perfection), confident, and from Rochester\'s own class. She and her mother make vicious comments about governesses—speaking loudly enough for Jane to hear—calling them "detestable," "ridiculous," and sharing stories of governesses they\'ve tormented or dismissed. Jane must sit silently while they mock her entire profession, describing governesses as necessary evils to be endured. Lady Ingram particularly emphasizes that governesses should be invisible, should never speak unless spoken to, should know their place. The cruelty is deliberate: they know Jane is there, and they\'re establishing the social hierarchy—you are nobody, and we are everything.',
      
      'Rochester pays elaborate attention to Blanche. He sits beside her at the piano while she performs, brings her refreshments, engages in witty banter that demonstrates their social compatibility. He seems to be courting her exactly as society expects—the wealthy gentleman choosing an appropriate bride from his own class. But Jane notices something strange: Rochester doesn\'t look happy. When Blanche performs, he looks bored. When she speaks, he seems distracted. And several times, Jane catches Rochester looking at her—not at Blanche, not at the other guests, but across the room at Jane sitting silently in her window seat. The looks are brief but intense, as if he\'s checking to see if she\'s still there, or how she\'s responding to this spectacle.',
      
      'By evening\'s end, Jane is devastated but also suspicious. Is Rochester genuinely courting Blanche? The attention he pays her suggests yes—society certainly assumes it. But something doesn\'t fit. Blanche is beautiful but shallow, accomplished but not intelligent, confident but mean-spirited. She\'s everything Rochester has claimed to despise: she values money above all else (she speaks openly of Rochester\'s wealth), she\'s socially conventional, she has no depth. Meanwhile, Rochester keeps glancing at Jane. Is this genuine courtship, or is Rochester staging an elaborate performance to test Jane\'s feelings—using Blanche to make Jane jealous, to force her to confront her own love for him? Jane doesn\'t know, and the ambiguity tortures her. She must return night after night to the drawing room, watching this tableau while maintaining her composure, wondering if Rochester will marry Blanche while secretly hoping the attention to Blanche is strategic rather than sincere.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Performative Courtship: Audience-Directed Romance',
      definition: 'When romantic attention is displayed publicly with apparent awareness of observers—raising the question of whether the performance is genuine feeling or strategic theater designed to provoke specific responses from particular watchers.',
      context: 'Rochester pays elaborate attention to Blanche in the drawing room: sitting beside her at piano, bringing refreshments, engaging in witty banter. But he does this with an audience watching—including Jane. And he keeps glancing at Jane to see her response. This raises questions: Is Rochester genuinely courting Blanche, or is he performing courtship to make Jane jealous? The attention is real (Blanche receives it) but may be directed at Jane (to provoke her feelings). The ambiguity is torture for Jane—she can\'t tell if this is sincere or strategic.',
      whyItMatters: 'Performative romance appears constantly in relationships and media: someone flirting with others in front of the person they actually want (making them jealous), posting couple photos on social media to provoke ex\'s response, or staging elaborate romantic gestures with awareness of who\'s watching. Understanding performative courtship helps recognize when romantic attention is genuine vs. when it\'s theater designed to manipulate observers\' feelings. Key question: who is the real audience? In Jane Eyre: Is Rochester courting Blanche for Blanche, or performing courtship of Blanche for Jane\'s benefit?'
    },
    {
      term: 'Social Invisibility: Present but Not Acknowledged',
      definition: 'Being physically present in a space but socially erased—treated as if you don\'t exist, your perspective doesn\'t matter, your feelings don\'t count. Others speak about you (your profession, your class) as if you can\'t hear them.',
      context: 'Jane must sit in the drawing room while the guests socialize. She\'s visible (everyone can see her there) but socially invisible (they ignore her, speak as if she can\'t hear). Lady Ingram and Blanche make vicious comments about governesses while Jane sits in the room—they know she\'s there but treat her as furniture. This is different from Jane hiding behind the curtain by choice; she\'s being socially erased by others who refuse to acknowledge her humanity. They speak about her profession with contempt, not caring that she hears because in their view, her feelings don\'t matter.',
      whyItMatters: 'Social invisibility is experienced by people in service roles, low-status positions, or marginalized identities—you\'re present but not acknowledged as fully human. Modern contexts: service workers (waiters, cleaners, drivers) who are treated as invisible by customers, people in low-status jobs whose perspectives are dismissed, or anyone in social situations where others speak about them as if they\'re not there. Understanding social invisibility helps recognize the violence of being present but erased—it\'s not just being ignored but being actively dehumanized. The person is visible enough to be used (Jane must be there to supervise Adèle) but invisible enough to be insulted to her face.'
    },
    {
      term: 'Deliberate Cruelty: Knowing You\'re Being Heard',
      definition: 'Speaking loudly about someone\'s inferiority, profession, or characteristics while knowing they can hear you—inflicting pain while maintaining plausible deniability ("I wasn\'t talking to you").',
      context: 'Lady Ingram and Blanche speak loudly about how much they despise governesses, how they\'ve tormented and dismissed them, how governesses should be invisible and know their place. Jane is sitting in the room listening. They know she can hear them—that\'s the point. They\'re establishing hierarchy: you are inferior, we are superior, and we can insult you to your face because you can\'t respond without being "inappropriate." The cruelty has plausible deniability (they weren\'t speaking to Jane, just about governesses generally), but the violence is deliberate.',
      whyItMatters: 'This pattern—insulting someone while pretending you\'re not—appears constantly in bullying, workplace harassment, and social exclusion. Modern equivalent: people making cruel comments about "those people" when someone from that group is present, or discussing someone\'s appearance/intelligence/background knowing they can overhear but not respond. The perpetrator can claim innocence ("I wasn\'t talking to you!") while the victim knows the attack was intentional. Understanding this helps recognize covert aggression: when cruelty is designed to wound while maintaining deniability. It also shows how social rules protect perpetrators: Jane can\'t call out Lady Ingram without being "insubordinate" or "oversensitive."'
    },
    {
      term: 'Beauty as Accomplishment vs. Beauty as Essence',
      definition: 'The difference between technical skill (musical performance, artistic ability, social graces) and authentic depth (intelligence, emotional capacity, moral character)—and the tendency to conflate external polish with internal worth.',
      context: 'Blanche Ingram is presented as accomplished: she plays piano well, sings beautifully, speaks French, knows social graces. But Jane observes that Blanche\'s accomplishments are all performance—technical but not soulful. Her piano playing is perfect but mechanical, her singing skilled but without feeling, her conversation clever but shallow. Blanche has been trained in the arts appropriate to her class, but there\'s no depth beneath the performance. She\'s accomplished in the same way a trained performer is accomplished—impressive to observe but not emotionally moving. Meanwhile, Jane has actual artistic vision (her drawings show imagination), intellectual curiosity, and moral depth. The novel contrasts Blanche\'s surface accomplishments with Jane\'s genuine substance.',
      whyItMatters: 'This distinction matters in how we evaluate people and relationships: Do we value surface accomplishments (beauty, social skills, impressive credentials) or authentic qualities (character, integrity, emotional depth)? Blanche represents the Victorian marriage market: women trained to perform accomplishments that signal class status and marriageability, but the performance is empty. Modern equivalent: Instagram-perfect lives that lack substance, impressive resumes without character, people who look good on paper but lack depth. The novel suggests Rochester should value Jane\'s authenticity over Blanche\'s performance—but society says otherwise. Understanding this helps recognize when we\'re valuing surface polish over genuine substance in our own assessments of people and relationships.'
    },
    {
      term: 'Triangulation Intensified: Forced Spectatorship',
      definition: 'Not just introducing a rival, but forcing the person to watch the courtship—making them serve as audience to their own romantic displacement, amplifying the pain through compelled observation.',
      context: 'Jane doesn\'t just hear about Rochester courting Blanche—she must sit in the drawing room watching it happen night after night. As Adèle\'s governess, she\'s required to be present during evening entertainments. She can\'t leave, can\'t look away without being obviously affected, must maintain neutral expression while her heart breaks. This is triangulation intensified: not just rival\'s existence but forced witnessing of the courtship. Rochester knows Jane is there—he glances at her repeatedly. Whether this is cruelty (making her watch) or strategy (provoking her jealousy to force her to acknowledge her feelings) is ambiguous. Either way, Jane\'s pain is amplified by compelled spectatorship.',
      whyItMatters: 'Forced witnessing amplifies triangulation\'s pain: you must watch the person you love with someone else, can\'t leave without revealing your feelings, must maintain composure while devastated. Modern contexts: having to attend ex\'s wedding, working with ex who\'s dating coworker (must see them together daily), friend groups where you must watch crush pursue someone else. The inability to escape intensifies the torture. Understanding forced spectatorship helps recognize when situations are structured to maximize pain—and whether that structure is coincidence, cruelty, or strategy. In Jane\'s case: Is Rochester making her watch to hurt her, or to force her to confront her feelings?'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane demonstrates remarkable composure under torture: she must sit in the drawing room night after night, maintaining neutral expression while listening to cruel comments about governesses and watching Rochester apparently court Blanche. Jane uses her window-seat position strategically—visible enough to fulfill her duties but hidden enough to observe without being fully scrutinized. She\'s developing the split consciousness required of subordinated people: appearing calm while dying inside, observing critically while seeming not to judge, maintaining professional demeanor while emotionally devastated. Jane also demonstrates sharp analytical skills: she notices that Rochester seems bored with Blanche despite his attentions, that he keeps glancing at Jane, that something doesn\'t fit. But Jane can\'t fully trust her own observations—maybe she\'s seeing what she wants to see? Maybe Rochester\'s boredom is her imagination? This uncertainty—trusting her perceptions vs. doubting them because they contradict surface reality—creates internal torture as painful as the external scene.',
      keyTrait: {
        emoji: '🎭',
        text: 'Composed Suffering'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester performs elaborate courtship of Blanche: sits beside her at piano, brings refreshments, engages in witty banter, behaves as gentleman courting appropriate bride. But there are tells that something is off: he looks bored during Blanche\'s performances, distracted during her conversation, and he repeatedly glances at Jane across the room as if checking her response. Is Rochester genuinely courting Blanche (she\'s appropriate match, he needs to marry, Jane was passing fancy)? Or is he staging performance to provoke Jane\'s jealousy (using Blanche to force Jane to acknowledge her feelings)? The ambiguity is likely deliberate—Rochester isn\'t transparent about his motivations. What\'s certain: he knows Jane is watching, knows she\'s suffering, and continues the performance. Whether this is cruelty, strategy, or genuine conflict remains unclear.',
      keyTrait: {
        emoji: '🎪',
        text: 'Performer'
      }
    },
    {
      name: 'Blanche Ingram',
      development: 'Blanche appears in person for the first time, and she\'s exactly what Jane feared: strikingly beautiful, accomplished, confident, from Rochester\'s class. She plays piano with technical perfection, sings beautifully, speaks French, commands attention. But Jane (and readers) notice she\'s also shallow, mercenary, and cruel. Blanche speaks openly about Rochester\'s wealth (she clearly cares about his money), makes vicious comments about governesses while Jane sits in the room, and demonstrates casual cruelty toward anyone she considers inferior. Her accomplishments are all performance—technically skilled but emotionally empty. She and Rochester banter cleverly, but there\'s no genuine connection. She represents Victorian marriage market: woman trained to attract wealthy husband through accomplishments that signal class status, with no requirement for depth, integrity, or authentic feeling.',
      keyTrait: {
        emoji: '👑',
        text: 'Beautiful Cruelty'
      }
    },
    {
      name: 'Lady Ingram',
      development: 'Blanche\'s mother, the Dowager Lady Ingram, is aristocratic, imperious, and vicious. She speaks loudly about how much she despises governesses, shares stories of governesses she\'s tormented, and explicitly states governesses should be invisible and know their place—all while Jane sits in the room. This is deliberate cruelty with plausible deniability: she\'s not speaking to Jane, just about governesses generally. Lady Ingram represents the worst of aristocracy: someone who\'s never questioned her privilege and sees cruelty to social inferiors as her right. She also pushes Blanche toward Rochester, clearly hoping for advantageous marriage. She evaluates Rochester purely on his wealth and property—when someone mentions his estate is worth so many thousands per year, her interest visibly sharpens.',
      keyTrait: {
        emoji: '❄️',
        text: 'Aristocratic Cruelty'
      }
    },
    {
      name: 'The Fashionable Guests',
      development: 'The other houseguests—various aristocratic ladies and gentlemen—are shallow, cruel, and obsessed with status. They gossip viciously about people not present, mock anyone unfashionable or poor, and demonstrate casual cruelty toward servants and social inferiors. They treat Thornfield as their playground, expecting everything to be arranged for their pleasure. None of them notice Jane except to ignore her—she\'s beneath their attention. These characters represent society at large: the people who set social rules, determine who matters and who doesn\'t, and enforce class hierarchies through casual cruelty presented as social norms. They show why Jane and Rochester\'s cross-class romance seems impossible: this is the world Rochester belongs to, and in this world, Jane is nobody.',
      keyTrait: {
        emoji: '🎪',
        text: 'Shallow Aristocrats'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'I sat in my usual nook, and looked at the party of ladies and gentlemen congregated round the table. Externally, they were all well-dressed and seemed to be enjoying themselves; but I had observed enough to conclude that their happiness was neither deep, calm, nor genuine.',
      analysis: 'Jane observes the aristocrats and recognizes their shallowness—they look happy but aren\'t genuinely so. This shows Jane\'s analytical capacity: she can see beneath surface performance to authentic (or inauthentic) feeling. But Jane is making this observation from her "usual nook"—the window seat where she hides, marginalized and watching. The paragraph establishes Jane as observer/critic of the society that excludes her. It also suggests Jane values authentic feeling over surface polish, which becomes important: Rochester may be performing happiness with Blanche, but Jane notices the performance is hollow.'
    },
    {
      text: '"I suppose she is accomplished?" said Mr. Rochester. "She is tolerably so," replied Lady Ingram. "We have sent her to the best masters. Miss Wilson can give you better particulars than I can."',
      analysis: 'Lady Ingram discusses Blanche\'s accomplishments in transactional terms—she\'s been sent to masters, trained like a product. The language reveals the Victorian marriage market: women are investments, educated in accomplishments that increase marriageability. Lady Ingram discusses her daughter as if she\'s property being appraised for sale. Rochester asks the question (is she accomplished?) as if checking merchandise specifications. This exposes how marriage among the wealthy is economic transaction, not romantic connection—and why Blanche has been trained in performance rather than substance.'
    },
    {
      text: '"My dearest, don\'t mention governesses; the word makes me nervous. I have suffered a martyrdom from their incompetence and caprice."',
      analysis: 'Lady Ingram speaks loudly about despising governesses while Jane sits in the room. The claim of "martyrdom" from governesses is particularly galling—Lady Ingram presents herself as victim of the women she employed and held power over. This is oppressor claiming victimhood: she "suffered" from governesses (who were economically dependent on her, socially inferior, couldn\'t defend themselves). The statement is directed at Jane even while pretending not to be—it\'s cruelty with plausible deniability. Lady Ingram can later claim she wasn\'t insulting Jane specifically, just discussing governesses generally.'
    },
    {
      text: 'The collective appearance of the guests was brilliant; but I saw nothing to please me, and was not pleased. Miss Ingram was, in my opinion, the only one who looked supremely happy and satisfied.',
      analysis: 'Jane acknowledges Blanche looks happy and satisfied—she\'s in her element, receiving attention from Rochester, performing for admiring audience. But Jane notes she herself was "not pleased" by the brilliant scene. This is understated devastation: Jane is watching the man she loves court another woman and reports only that she "was not pleased." The restraint is characteristic of Jane\'s narrative voice—she doesn\'t wail or collapse, just notes she wasn\'t pleased. But readers understand the pain beneath the calm reporting.'
    },
    {
      text: 'He would have said, "Miss Ingram, I have been so unfortunate as to place myself at the mercy of governesses; they have attempted my life." But no, he said nothing of the kind.',
      analysis: 'Jane imagines Rochester might join the anti-governess mockery, might reveal to his aristocratic guests that his governess (Jane) saved him from the fire. She anticipates betrayal—that Rochester will expose and mock her to fit in with his guests. But he doesn\'t. He says nothing about the fire, nothing about Jane, nothing to join the governess-mocking. This is significant: Rochester doesn\'t betray Jane\'s service to him, doesn\'t expose their private history, doesn\'t join his class in mocking her profession. It\'s a small kindness (or strategic restraint) that Jane notices and holds onto as possible evidence he doesn\'t fully belong to this shallow world.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Performative Courtship and Ambiguity',
        explanation: 'Rochester performs elaborate courtship of Blanche with Jane as audience. Is this genuine (he\'ll marry Blanche, Jane was passing fancy) or strategic (using Blanche to provoke Jane\'s jealousy)? The ambiguity is torture for Jane—and likely deliberate. Rochester knows Jane is watching; he glances at her repeatedly. He seems bored with Blanche despite his attentions. But he continues the performance night after night. Whether this is cruelty (making Jane watch him court another) or strategy (forcing Jane to confront her feelings) or genuine conflict (he wants Jane but she\'s inappropriate, so he\'s pursuing appropriate match) remains unclear. The novel sustains this ambiguity for chapters—readers and Jane must watch without knowing if the courtship is real.'
      },
      {
        name: 'Social Invisibility and Dehumanization',
        explanation: 'Jane must sit in the drawing room while aristocrats socialize—she\'s physically present but socially erased. The guests speak about governesses with contempt while Jane listens, treating her as furniture. This is different from not noticing her; they know she\'s there but refuse to acknowledge her humanity. Lady Ingram and Blanche make cruel comments about governesses loud enough for Jane to hear—they\'re establishing hierarchy: you are inferior, we are superior, and we can insult you to your face because you can\'t respond. The violence is double: Jane must hear herself degraded AND must maintain composure without defending herself, because responding would be "inappropriate." Social invisibility is weaponized dehumanization.'
      },
      {
        name: 'Accomplishment vs. Authenticity',
        explanation: 'Blanche is accomplished—plays piano, sings, speaks French, knows social graces. But Jane observes that Blanche\'s skills are all performance without depth: piano playing technically perfect but mechanical, singing beautiful but soulless, conversation clever but shallow. Blanche has been trained in accomplishments that signal marriageability, not developed as authentic person with inner life. The novel contrasts Blanche\'s hollow performance with Jane\'s genuine substance: Jane\'s art shows imagination, her intelligence is real, her moral character has depth. The question: what does Rochester value? Society says he should choose Blanche\'s surface accomplishments. But his boredom with her performances suggests he recognizes emptiness beneath the polish.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Observer Position: Jane as Narrator-Voyeur',
        explanation: 'Jane narrates this scene from her window-seat position—physically present but socially marginal. This gives her (and readers) observer perspective: we watch the aristocrats without being part of their world. Jane\'s marginalization becomes narrative advantage: she can analyze these people with clarity unavailable to participants. She sees their shallowness, cruelty, hollowness because she\'s outside their social bubble. The technique positions readers to share Jane\'s critical perspective: we judge the aristocrats through her eyes.',
        example: 'Jane hides behind curtain in window seat, watching the drawing room theater. She notes who speaks to whom, who performs for whom, what Rochester\'s expressions reveal. Her physical marginalization (tucked away, trying not to be seen) creates narrative omniscience (she sees everything). Readers occupy her voyeuristic position—watching a world that excludes us, judging people who would dismiss us, sharing Jane\'s outsider critique of insider hollowness.'
      },
      {
        name: 'Dramatic Irony Through Class Consciousness',
        explanation: 'Readers know Jane is morally and intellectually superior to the aristocrats who despise her. We\'ve spent chapters in Jane\'s consciousness—we know her integrity, intelligence, emotional depth. Now we watch shallow aristocrats treat her as inferior. This creates dramatic irony: they think they\'re superior, but we know Jane is better than them in every way that matters. The technique makes readers side with Jane against her tormentors.',
        example: 'Lady Ingram speaks of "suffering martyrdom" from incompetent governesses. Readers know: (1) Jane is highly competent, (2) Lady Ingram is morally bankrupt, (3) The "suffering" is imaginary—Lady Ingram held all power. We recognize the statement as cruel nonsense. This dramatic irony positions readers to reject aristocratic worldview: their claims of superiority are hollow. We know Jane is worth ten of them, even as they treat her as nobody.'
      },
      {
        name: 'Sustained Ambiguity: Is Rochester Sincere?',
        explanation: 'Brontë keeps readers and Jane suspended in uncertainty: Is Rochester genuinely courting Blanche? His behavior suggests yes (elaborate attention, society expectations, appropriate match). But details suggest no (bored expression, repeated glances at Jane, Blanche\'s shallowness). The ambiguity is maintained for chapters. Readers don\'t get resolution until Rochester\'s later confession. This technique creates anxiety: we don\'t know if we should hope or despair.',
        example: 'Rochester sits beside Blanche at piano (suggests courtship). But he looks bored during her performance (suggests disinterest). He brings her refreshments (suggests courtship). But he glances at Jane across the room (suggests Jane is real target). Each action has counter-evidence. Brontë doesn\'t let readers settle: maybe he loves Blanche? maybe he\'s testing Jane? maybe he\'s conflicted? The sustained uncertainty creates emotional torture for Jane and anxiety for readers.'
      },
      {
        name: 'Free Indirect Discourse: Blurred Narrative Voice',
        explanation: 'Jane narrates but sometimes slips into voices of others—we hear aristocrats\' thoughts in Jane\'s narration, creating effect of ventriloquism. When describing guests, Jane adopts their casual cruelty, then steps back to judge it. This technique lets Brontë show aristocratic worldview while simultaneously critiquing it.',
        example: 'Jane reports the guests\' conversation and social dynamics, sometimes adopting their language ("Miss Ingram was elegantly dressed... she displayed much animation"). But then Jane steps outside to analyze: their happiness "was neither deep, calm, nor genuine." The narrative voice moves between insider reporting (how they see themselves) and outsider critique (what they actually are). This double vision lets readers experience aristocratic world while maintaining critical distance from it.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine you work for someone you have feelings for—a boss, professor, mentor—and they invite you to social event where they\'ll be with people from their world: wealthy, accomplished, from their class or professional circle. You\'re there in professional capacity (assistant, researcher, teaching fellow) so you must attend but you\'re clearly not part of their social group. Your boss pays elaborate attention to someone from their world—someone impressive, appropriate, from their background. They laugh together, have witty exchanges, demonstrate social compatibility. You must watch while maintaining professional composure. Worse: the social group makes dismissive comments about people in your profession ("assistants are so incompetent," "I don\'t know why we even need teaching fellows"). They speak loudly enough for you to hear but not directly to you—cruel with plausible deniability. You can\'t leave without seeming affected, can\'t respond without being "inappropriate," must sit there absorbing the humiliation. Meanwhile, your boss occasionally glances at you as if checking your reaction. Are they genuinely interested in the other person, or is this performance designed to make you jealous? You can\'t tell, and the ambiguity is torture. You notice your boss seems bored during the other person\'s impressive displays, distracted during their conversation—but maybe you\'re seeing what you want to see? Maybe you\'re deluding yourself that the attention to this other person isn\'t real? Night after night this continues: you must attend these social events in your professional capacity, watching this unfold, maintaining composure while your heart breaks.',
    
    parallels: [
      '🔹 **Performative Romance**: When someone displays romantic attention with obvious awareness of observer—raising question: is the attention genuine or is it performance to provoke watcher\'s response? Modern contexts: ex posting couple photos on social media to make you jealous, someone flirting with others in front of person they actually want, workplace dynamics where someone courts one person but keeps checking another person\'s reaction.',
      '🔹 **Professional Invisibility**: Being present in professional capacity at social event where you\'re simultaneously visible (everyone sees you there) and invisible (they act as if you don\'t exist socially). Modern equivalent: assistants at executive events, staff at wealthy gatherings, students at faculty parties—you\'re there serving a function but not acknowledged as fully human participant. People speak about (or past) you as if you can\'t hear.',
      '🔹 **Cruelty With Deniability**: Making insulting comments loud enough for target to hear while maintaining you weren\'t speaking to them. "I hate working with [your profession/background/type]" said while you\'re in the room, then claiming innocence: "I wasn\'t talking about you specifically!" Modern equivalent: racist/sexist/classist comments made "generally" while person from that group is present, workplace comments about "those people" when someone from that group can overhear, or discussing someone\'s appearance/intelligence knowing they can hear.',
      '🔹 **Forced Spectatorship**: Not just knowing your crush is with someone else, but being required to watch. You can\'t leave without making your feelings obvious, must maintain composure while devastated. Modern contexts: having to attend ex\'s wedding, working with ex who dates coworker (must see them together daily), friend groups where you watch crush pursue someone else at gatherings you can\'t skip without explaining why.',
      '🔹 **"Am I Seeing What I Want to See?"**: When someone seems interested in another person but occasionally signals to you—you notice they look bored, they glance at you, something seems off. But you can\'t trust your own perceptions: maybe you\'re imagining signals because you want them to be real? This self-doubt is torture—you see counter-evidence to the apparent courtship but can\'t be sure if it\'s real or wishful thinking.',
      '🔹 **Accomplishment vs. Authenticity**: Someone impressive on paper—beautiful, successful, accomplished, appropriate—but shallow underneath. You have genuine depth but don\'t perform as well. The question: does the other person value surface polish or authentic substance? Modern equivalent: competing with someone who looks perfect on social media, interviews well, has impressive credentials—while you have actual character, integrity, depth. Will surface performance or genuine substance win?',
      '🔹 **Class/Status Divide**: The feeling that someone is "out of your league" because they belong to world you don\'t—they have money, education, connections you lack. Their social group treats you as inferior, making the divide feel insurmountable. You watch them with someone "appropriate" from their world and think: of course they\'d choose someone from their background, why did I imagine they\'d cross that divide for me?'
    ],
    
    discussionPrompt: 'Have you experienced forced spectatorship—required to watch someone you care about with someone else while maintaining composure? Have you endured "professional invisibility" where you\'re present at social event but treated as if you don\'t exist as a person? When have you experienced "cruelty with deniability"—insults aimed at you but delivered indirectly so perpetrator can claim innocence? Have you doubted your own perceptions when someone seems to send mixed signals—apparent interest in another person but occasional signals to you, leaving you uncertain if counter-evidence is real or wishful thinking?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🎭',
      name: 'Performance vs. Reality',
      explanation: 'Rochester performs courtship of Blanche, but performance has tells: bored expressions, glances at Jane, disconnect between actions and affect. Is he genuinely courting her or performing for Jane\'s benefit? Blanche performs accomplishments (piano, singing, social graces) but performances are hollow. The drawing room is theater where everyone performs social roles while hiding authentic feelings. Jane must perform professional composure while devastated. The novel explores: when is performance genuine vs. strategic? How do we distinguish authentic feeling from theatrical display?'
    },
    {
      emoji: '👑',
      name: 'Class and Social Hierarchy',
      explanation: 'This chapter immerses readers in aristocratic world that excludes Jane. The guests are shallow, cruel, obsessed with status—but they hold social power. They determine who matters (Blanche) and who doesn\'t (Jane). Their cruelty to Jane is casual, their contempt for governesses thoughtless—they\'ve never questioned their privilege. The chapter shows why Jane-Rochester romance seems impossible: he belongs to this world, and in this world, Jane is nobody. Class isn\'t just economic; it\'s entire social system that sorts humans into superior and inferior.'
    },
    {
      emoji: '💔',
      name: 'Triangulation Intensified',
      explanation: 'Blanche isn\'t just rival—Jane must watch Rochester court her night after night. Triangulation moves from Jane learning about rival (Chapter 16) to Jane watching the courtship (Chapter 17). Forced spectatorship amplifies pain: Jane can\'t escape, can\'t look away, must maintain composure while her heart breaks. Rochester knows Jane is watching—he glances at her repeatedly. Whether this is cruelty or strategy remains ambiguous. The thread asks: how much pain can Jane endure before breaking?'
    },
    {
      emoji: '🔍',
      name: 'Observer Consciousness',
      explanation: 'Jane\'s marginalization gives her analytical clarity. Tucked in window seat, she observes aristocrats with critical eye: they\'re shallow, cruel, hollow. She recognizes Blanche\'s accomplishments are performance without depth. She notices Rochester seems bored despite his attentions. Her outsider position creates insight—she sees what insiders can\'t or won\'t see. This thread celebrates marginalized consciousness: being excluded from power creates capacity to critique power. Jane judges world that excludes her—and her judgment is more accurate than insiders\' self-perception.'
    },
    {
      emoji: '🎯',
      name: 'Ambiguity as Torture',
      explanation: 'Is Rochester genuinely courting Blanche or using her to test Jane? The novel doesn\'t resolve this quickly. Ambiguity is maintained for chapters, forcing Jane (and readers) to watch without knowing if hope or despair is appropriate. This uncertainty is more painful than clarity would be: if Rochester clearly loved Blanche, Jane could grieve and move on. But ambiguous signals (bored looks, glances at Jane, disconnect between actions and affect) keep her suspended between hope and despair. The novel explores how uncertainty can be more torturous than bad news.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Is Rochester\'s Courtship Real?',
      question: 'Rochester pays elaborate attention to Blanche but seems bored during her performances and keeps glancing at Jane. Is he genuinely courting Blanche (appropriate match, Jane was passing fancy), or is he performing courtship to make Jane jealous (using Blanche strategically to force Jane to acknowledge her feelings)? What evidence supports each interpretation? Does Rochester\'s motivation matter if the effect—Jane\'s pain—is the same?'
    },
    {
      title: 'Social Invisibility and Dehumanization',
      question: 'Lady Ingram and Blanche make cruel comments about governesses while Jane sits in the room. They know she can hear—that\'s the point. How is this different from simply ignoring Jane? What makes it dehumanizing rather than just dismissive? How does this pattern operate in modern contexts where people speak about (or past) service workers, staff, or anyone they consider socially inferior?'
    },
    {
      title: 'Forced Spectatorship',
      question: 'Jane must watch Rochester court Blanche night after night—she can\'t leave without revealing her feelings, can\'t escape her professional duty to be present. How does forced witnessing amplify triangulation\'s pain? Is Rochester making Jane watch deliberately (cruelty or strategy), or is this coincidental consequence of his courtship and her professional role?'
    },
    {
      title: 'Accomplishment vs. Authenticity',
      question: 'Blanche is accomplished (plays piano, sings, speaks French, knows social graces) but Jane observes her performances are hollow—technically skilled but emotionally empty. Meanwhile, Jane has genuine depth but doesn\'t perform as impressively. What should Rochester value? What does society say he should value? How do we navigate this tension in modern relationships—choosing between someone impressive on surface vs. someone with genuine substance?'
    },
    {
      title: 'Cruelty With Plausible Deniability',
      question: 'Lady Ingram can claim she wasn\'t insulting Jane specifically, just discussing governesses generally. How does this plausible deniability work? Why is it more insidious than direct insult? How does this pattern operate in modern contexts—racist/sexist/classist comments made "generally" while person from that group is present, workplace dynamics where people are insulted indirectly?'
    },
    {
      title: 'Self-Doubt and Mixed Signals',
      question: 'Jane notices Rochester seems bored with Blanche despite his attentions, that he keeps glancing at Jane—but she doubts her own perceptions. Is she seeing what she wants to see? This uncertainty is torture: she has counter-evidence to the courtship but can\'t trust whether it\'s real or wishful thinking. How do we navigate situations where we receive mixed signals—someone seems interested in another person but occasionally signals to us?'
    },
    {
      title: 'Jane\'s Analytical Clarity',
      question: 'Jane\'s marginalization gives her observer perspective—she sees aristocrats\' shallowness, recognizes Blanche\'s hollowness, notices Rochester\'s boredom. Her exclusion creates analytical clarity. How does marginalization sometimes provide insight unavailable to insiders? When does outsider perspective reveal truths that insiders can\'t or won\'t see? What are the costs and benefits of observer consciousness?'
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
      title: 'Analyzing Social Invisibility: When Being Present Means Being Erased',
      description: 'Write an analytical essay examining social invisibility in Chapter 17—how Jane is physically present but socially erased. Part 1: Document the pattern: Jane must sit in drawing room during entertainments, but aristocrats ignore her while making cruel comments about governesses loud enough for her to hear. They know she\'s there but treat her as furniture. Part 2: Analyze the violence: This is different from not noticing her—they actively refuse to acknowledge her humanity. Why is this dehumanizing? How does treating someone as invisible-but-present constitute violence? Part 3: Connect to power dynamics: Lady Ingram and Blanche can insult Jane to her face because social rules prevent Jane from responding—defending herself would be "inappropriate." How do power structures enable this pattern? Part 4: Apply to modern contexts: Where does social invisibility operate today? Service workers (waiters, cleaners, drivers), staff at wealthy gatherings, anyone in low-status positions who is present but not acknowledged. Part 5: Ethical analysis: What obligations exist toward people in service roles or subordinate positions? How should we acknowledge humanity of everyone in shared spaces? Use textual evidence and contemporary examples.',
      purpose: 'This prompt develops awareness of social invisibility—how marginalization operates not just through exclusion but through forced presence without acknowledgment. Students analyze power dynamics: who gets to be seen vs. who must remain invisible, whose feelings matter vs. whose don\'t. Connects to contemporary issues: service workers, staff, anyone treated as functionally present but socially erased. Students consider ethical obligations: how should we treat people in subordinate positions? The exercise builds empathy and structural awareness—recognizing patterns of dehumanization that often go unnoticed by those with privilege.'
    },
    
    activity: {
      title: 'Performance Analysis: Distinguishing Authentic Feeling from Strategic Display',
      description: 'Students analyze scenes where romantic attention is performed with awareness of observers—is it genuine or strategic? Show clip from movie/TV where character A displays attention to character B while character C watches (or use Chapter 17: Rochester courting Blanche while Jane watches). Students identify: (1) What behaviors signal romantic interest? (sitting close, eye contact, touch, conversation), (2) Who is the apparent target? (person receiving attention), (3) Who is the actual audience? (person watching), (4) What tells suggest performance vs. authenticity? (performer checks watcher\'s reaction, seems bored with target, disconnect between actions and affect). Students debate: Is character A genuinely interested in B, or performing for C\'s benefit? What evidence supports each interpretation? Extension: Students find examples from social media or personal experience where romantic display seems directed at someone other than ostensible target. Analyze: How do we distinguish genuine courtship from performative romance designed to provoke observer\'s response?',
      materials: 'Video clips showing performative romance, analysis worksheet (who is target vs. audience?), social media examples, discussion prompts'
    },
    
    crossCurricular: {
      title: 'Sociology of Service: Social Invisibility and Labor',
      description: 'Partner with sociology class to study social invisibility experienced by people in service roles. Sociology class covers: (1) Emotional labor (service workers must manage feelings while being treated as invisible), (2) Status characteristics theory (how visible status markers affect treatment), (3) "Seeing like a state" (how institutions create categories of people who matter vs. don\'t). English class reads Chapter 17 analyzing: How does Jane experience social invisibility? Why is being present-but-erased dehumanizing? Students conduct ethnographic observation: Watch interactions between customers and service workers (coffee shops, stores, restaurants)—do customers acknowledge workers\' humanity or treat them as functional automatons? Interview service workers: What\'s it like to be present but not acknowledged? How do you maintain dignity when treated as invisible? Final project: Create guidelines for acknowledging humanity in service interactions. What small acts (eye contact, thank you, treating as person not function) make difference? How can institutions structure interactions to recognize workers\' humanity? Connect to broader questions: Who is visible vs. invisible in society? Whose feelings matter vs. whose don\'t?',
      subjects: ['Sociology', 'Labor Studies', 'Service Economy', 'Ethics', 'Organizational Behavior']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Ambiguity as Narrative Strategy: When and Why Authors Withhold Resolution',
    prompt: 'Rochester\'s courtship of Blanche is ambiguous: he pays her attention but seems bored, banters with her but glances at Jane, behaves as if courting but without genuine affect. Brontë maintains this ambiguity for multiple chapters—readers don\'t get clarity about Rochester\'s true intentions until much later. Your task: Analyze ambiguity as deliberate narrative strategy. Why does Brontë sustain uncertainty rather than resolving it quickly? What effects does prolonged ambiguity create for Jane and for readers? Compare to modern narratives: when do stories use sustained ambiguity effectively vs. when does it feel manipulative or frustrating? Develop framework for evaluating when withholding resolution serves the story vs. when it just creates artificial tension. Consider: Does Rochester\'s motivation (is courtship real or strategic?) need to be clear immediately, or does the ambiguity itself create valuable narrative effects—suspense, emotional complexity, mirroring Jane\'s uncertainty?',
    
    guidingQuestions: [
      'What evidence suggests Rochester\'s courtship of Blanche is genuine? What evidence suggests it\'s performance? Brontë gives both—why? What effects does this dual-evidence create for readers and for Jane?',
      'Jane (and readers) must watch this tableau for multiple chapters without knowing if Rochester truly intends to marry Blanche. How does sustained uncertainty affect our emotional experience? Is it more painful than clarity would be? What does the ambiguity force Jane (and us) to confront?',
      'Rochester\'s true intentions are eventually revealed, but not for many chapters. Looking back: was the extended ambiguity necessary for the story? What would be lost if Brontë had clarified Rochester\'s plan earlier? What is gained by forcing Jane and readers to endure uncertainty?',
      'Compare to modern narratives: When does sustained ambiguity work (creating suspense, emotional complexity, meaningful uncertainty) vs. when does it feel manipulative (withholding resolution artificially just to prolong tension)? What distinguishes purposeful ambiguity from cheap narrative tricks?'
    ],
    
    thinkingFramework: {
      analyze: 'Map the ambiguous courtship: (1) Behaviors suggesting genuine interest: Rochester sits with Blanche, brings refreshments, engages in banter, society expects marriage, he tells Jane nothing to contradict this; (2) Counter-evidence: Rochester looks bored during Blanche\'s performances, distracted during conversation, glances at Jane repeatedly, Blanche is shallow (opposite of what Rochester claims to value); (3) Jane\'s response: confusion, self-doubt (am I seeing what I want to see?), suspended between hope and despair, unable to settle into either acceptance or resistance; (4) Reader experience: parallel to Jane—we notice same counter-evidence, wonder if we\'re being signaled truth or deluding ourselves, can\'t be sure if hope or despair is appropriate. Create timeline: How many chapters does ambiguity last? What events finally resolve it?',
      evaluate: 'Develop criteria for productive vs. manipulative ambiguity: (1) Productive ambiguity: creates meaningful emotional experience (suspense that mirrors character\'s uncertainty, complexity that reflects real-life\'s mixed signals), forces confrontation with important questions (what do I actually want? will I fight for it or accept defeat?), serves thematic purpose (ambiguity itself is the point—life doesn\'t come with clear answers); (2) Manipulative ambiguity: withholds resolution arbitrarily (no good reason to sustain mystery except prolonging story), frustrates without purpose (readers feel jerked around), resolves in way that makes the ambiguity feel pointless in retrospect ("this could have been clear chapters ago"). Apply criteria to Rochester-Blanche courtship: Does sustained uncertainty serve purposes beyond artificially prolonging tension? What work does it do emotionally and thematically?',
      synthesize: 'Connect to modern narratives across media: (1) Romantic ambiguity: "Will they/won\'t they" tension in TV shows—when does it create engaging suspense vs. when does it feel like writers are stalling?; (2) Mystery novels: What clues and when revealed—how long should readers be uncertain about whodunit?; (3) Unreliable narrators: Stories that sustain uncertainty about what\'s real—when does ambiguity create rich interpretive possibility vs. when does it feel like confusion for confusion\'s sake?; (4) Plot twists: Are they earned by ambiguous setup or do they come from nowhere? Examples: Game of Thrones (prolonged mysteries some viewers loved, some found frustrating), Lost (ambiguity that for some viewers never paid off), psychological thrillers (where uncertainty is genre expectation). Develop guidelines: What makes ambiguity work? Consider: (A) Character experience mirrors reader experience (Jane doesn\'t know, so we don\'t know—ambiguity reflects her epistemic position), (B) Ambiguity forces meaningful questions (Jane must decide whether to hope or resign—uncertainty itself creates character development), (C) Resolution justifies the wait (when we learn Rochester\'s true intention, it recontextualizes everything—ambiguity wasn\'t arbitrary stalling but preparation for revelation).'
    },
    
    expectedDepth: 'Strong responses will: (1) Recognize ambiguity as deliberate narrative choice—Brontë could have clarified Rochester\'s intentions immediately but chose sustained uncertainty; (2) Identify multiple effects of prolonged ambiguity: emotional (suspense, pain of uncertainty), psychological (forces Jane to confront what she wants, whether she\'ll fight for it), thematic (mirrors real life where motivations are often unclear, signals rarely definitive); (3) Distinguish between Jane\'s epistemic position (she doesn\'t know Rochester\'s plan, so her uncertainty is realistic) and narrator\'s choice (Brontë could give readers information Jane lacks, but doesn\'t—keeping us equally uncertain); (4) Evaluate whether the ambiguity pays off—does eventual revelation justify the prolonged uncertainty? What would be different if we\'d known earlier?; (5) Apply framework to modern narratives with specific examples—identify stories where ambiguity works vs. feels manipulative, explain why using developed criteria; (6) Grapple with reader experience: some people love sustained ambiguity (creates suspense and emotional complexity), others find it frustrating (feel manipulated by withheld information)—acknowledge both responses and explain what makes ambiguity work for some but not others.',
    
    classroomApplication: 'Works as: (1) Analytical essay (8-10 pages) requiring close reading of multiple chapters plus engagement with narrative theory, (2) Comparative analysis—students examine ambiguous narratives across media (novels, TV, film) using developed framework, (3) Creative project—students write two versions of a scene: one with immediate clarity, one with sustained ambiguity, then analyze which is more effective and why, (4) Debate: "Ambiguity enhances stories" (teams argue for/against using examples from literature, film, TV). Time: 5-6 class periods including textual analysis, framework development, media comparison, and synthesis. Can connect to: narrative theory courses, creative writing (when to reveal vs. withhold), media studies (analyzing TV show tension), reader-response theory (why same ambiguity affects readers differently). Consider inviting: creative writers to discuss crafting suspense, TV writers to explain managing season-long mysteries, editors to discuss when ambiguity needs resolution.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(17),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🔮',
    title: 'Next Time: Chapter 18 — The Fortune-Teller',
    preview: 'A mysterious old woman arrives at Thornfield claiming to be a fortune-teller, insisting on reading the palms of all the ladies. She tells fortunes to Blanche and the other guests, but then specifically requests Jane. In the library, alone with this strange fortune-teller, Jane finds herself being questioned more than having her fortune told—the woman asks penetrating questions about Rochester, about Jane\'s feelings, about what Jane wants. The fortune-teller seems to know far too much, speaks in ways that are too familiar, and Jane begins to suspect... When the fortune-teller finally removes her disguise, Jane discovers it\'s Rochester himself—he\'s been in costume the entire time, using deception to extract Jane\'s true feelings. But before Jane can fully process this violation/intimacy, terrible news arrives: Mr. Mason has come from Jamaica. Rochester\'s visible terror when he hears Mason\'s name reveals that the past he\'s been hiding is finally catching up with him. The secrets are about to explode.',
    hookQuestion: 'Why did Rochester disguise himself as a fortune-teller to question Jane about her feelings—why not just ask directly? What does this deception reveal about his character: is it playful intimacy or manipulative violation? And who is Mr. Mason, and why does his arrival from Jamaica strike such terror into Rochester\'s heart?'
  }
}

