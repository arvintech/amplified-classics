/**
 * JANE EYRE - CHAPTER 19 & 20 (Combined)
 * 
 * That night, terrible screams wake the household—Mason has been attacked and wounded
 * on the third floor. Rochester enlists Jane's help tending Mason while forbidding them
 * to speak, then at dawn asks Jane a hypothetical that's really about whether she'd
 * accept him as bigamist
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter19: ChapterData = {
  number: 19,
  title: 'The Night Attack',
  
  readingTime: 35,
  pages: 20,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'In the middle of the night, terrible screams wake Thornfield—Mr. Mason has been violently attacked on the third floor with knife and teeth, and Rochester asks Jane to tend his wounds for hours in the dark while forbidding them to speak, then at dawn walks with Jane in the garden asking a "hypothetical" question that\'s really probing whether she would accept him as bigamist if it meant happiness.',
    
    full: [
      'Around two in the morning, Jane wakes to terrifying screams and chaos—someone on the third floor is shrieking for help. The houseguests panic, emerging from their rooms in nightclothes, demanding to know what\'s happening. Rochester, fully dressed (suggesting he was already awake and expecting trouble), calms everyone with remarkable authority: it was just a servant\'s nightmare, nothing to worry about, everyone back to bed. The guests reluctantly comply, though they\'re clearly unsettled. Blanche makes a scene, but Rochester manages the situation, sends everyone back to their rooms. Once the house settles, Rochester comes to Jane\'s room and urgently asks her to come with him—quietly, tell no one. He needs her help.',
      
      'Rochester takes Jane to the third floor, to a room Jane has never entered. There she finds Mr. Mason sitting in a chair, bleeding profusely from his arm and shoulder—he\'s been attacked with a knife, and his wounds also show teeth marks, as if someone bit him savagely. Mason is pale, weak, clearly in shock. Rochester tells Jane: stay here with Mason, tend his wounds as best you can, I\'m going for the surgeon. But critical instruction: "Whatever you do, don\'t speak to him, and he must not speak to you. If he tries to communicate, don\'t respond." Then Rochester leaves—locking Jane in the room with the wounded man. Jane sits with Mason for hours in the flickering candlelight, periodically sponging blood from his wounds, keeping him conscious. She hears sounds from the room next door: pacing, strange muttering, occasional wild laughter—clearly someone is in there, and that someone attacked Mason. Jane doesn\'t know who or why, only that Rochester is desperate to keep it secret.',
      
      'Finally, well after midnight, Rochester returns with the surgeon Mr. Carter. They examine Mason\'s wounds—serious but not fatal. Mason whispers desperately to Rochester: "She said she\'d drain my heart." Rochester shushes him urgently, clearly terrified Mason will reveal too much in front of Jane or the surgeon. They decide Mason must leave immediately, before the houseguests wake—he can\'t be found here wounded, can\'t explain what happened. Rochester and Carter help Mason out through a secret passage. Jane has glimpsed the terror and secrecy: something (someone) on the third floor attacked Mason violently, and Rochester will do anything to prevent the houseguests from learning about it.',
      
      'Dawn is breaking as Rochester walks Jane in the garden. The house is still asleep. Rochester is vulnerable, exhausted, desperate. He asks Jane a hypothetical question: "Imagine a man who made a grave error in youth—a mistake imposed on him partly by circumstances, partly by his own fault. He suffered terribly for it. For years he lived in misery, compromised by this early error. Then he meets someone who offers hope of redemption—someone good, pure, who makes him want to be better. Would he be justified in defying convention, breaking rules, doing whatever necessary to have happiness with this person? Or should he obey law and convention, even if it means lifetime of misery?" Jane, not understanding this is about her and Rochester, answers from her moral principles: obey God\'s law, even if it means suffering. Convention exists for good reason. She wouldn\'t transgress moral law for personal happiness. Rochester looks devastated—he was hoping Jane would say yes, would give him permission to attempt bigamy. But Jane has unwittingly told him: she won\'t be his mistress or bigamous wife, she values law over happiness. Rochester walks back to Thornfield in despair, and Jane doesn\'t understand why her "right answer" has caused him such pain.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Compelled Silence: Witnessing Without Understanding',
      definition: 'Being forced to observe disturbing events while forbidden to ask questions or seek explanation—experiencing crisis without context, which creates psychological torture of witnessing harm you can\'t comprehend or address.',
      context: 'Rochester forbids Jane to speak with Mason: "Whatever you do, don\'t speak to him, and he must not speak to you." Jane must sit with wounded man for hours, tending his injuries, hearing strange sounds next door, witnessing his terror—but she\'s not allowed to ask what happened or why. The compelled silence means Jane witnesses violence without understanding: who attacked him? why? what is Rochester hiding? She experiences the horror but is denied explanation, which makes the experience more disturbing. Mason whispers "she said she\'d drain my heart" and Rochester desperately shushes him—Jane hears but can\'t ask.',
      whyItMatters: 'Compelled silence appears in abusive relationships, institutional cover-ups, and situations where witnesses are prevented from speaking about what they\'ve seen. Being forced to witness harm without explanation or ability to respond creates psychological distress: you know something terrible is happening but can\'t name it, can\'t get help, can\'t protect yourself because you don\'t understand the danger. Modern contexts: employees witnessing workplace misconduct but told "don\'t ask questions," family members seeing abuse but commanded to "mind your own business," people who witness crimes but are intimidated into silence. Understanding compelled silence helps recognize pattern: when someone forbids you from discussing what you\'ve witnessed, they\'re preventing you from understanding the situation well enough to protect yourself or seek help.'
    },
    {
      term: 'Hypothetical as Confession: Disguised Truth-Seeking',
      definition: 'Asking about a "hypothetical" situation that\'s actually about your real circumstances—using fiction or abstract framing to probe for someone\'s response to your actual situation without risking direct revelation or rejection.',
      context: 'Rochester asks Jane a "hypothetical": would a man who made youthful error be justified in breaking convention for happiness with someone good? This isn\'t hypothetical—it\'s Rochester\'s actual situation. He made "grave error" (married Bertha), suffered for it (she went mad, he\'s trapped), met someone offering hope (Jane), wants to know if she\'d accept him breaking rules (bigamy) for happiness. He\'s using hypothetical framing to test Jane\'s response without revealing he\'s actually asking about them. If Jane says "yes, break the rules," he knows she might accept bigamy. If she says "no, obey law," he knows she won\'t. The hypothetical provides deniability: he can claim he was asking philosophically, not about them specifically.',
      whyItMatters: 'Hypothetical-as-confession appears constantly in relationships: "What would you do if your partner cheated?" (they cheated), "Would you ever forgive someone who lied?" (they lied), "How do you feel about open relationships?" (they want one). People use hypotheticals to test responses without risking direct rejection or judgment. If answer is favorable, they can reveal truth. If answer is harsh, they can claim it was just theoretical. Understanding this pattern helps recognize when "hypotheticals" are actually about real situations—and decide whether to answer the hypothetical or ask directly: "Are you asking hypothetically or is this about something real?"'
    },
    {
      term: 'Moral Absolutism vs. Situational Ethics',
      definition: 'The conflict between following universal rules regardless of circumstances (moral absolutism: "lying is always wrong") versus making ethical decisions based on specific context (situational ethics: "lying is sometimes justified to prevent greater harm").',
      context: 'Rochester\'s hypothetical presents situational ethics argument: if you\'ve suffered terribly from youthful mistake, if you\'ve found chance at happiness, wouldn\'t you be justified in breaking rules? Jane responds with moral absolutism: obey God\'s law and convention regardless of personal circumstances or suffering. She values universal principles over individual happiness. This fundamental difference—Rochester\'s "rules can be broken for good reason" vs. Jane\'s "rules must be followed even at cost of happiness"—is philosophical clash that will drive their separation and eventual reunion.',
      whyItMatters: 'This ethical debate is central to moral philosophy and practical life: Are some actions always wrong regardless of circumstances? Or does context matter? Example: Is lying always wrong, or can lies be justified (protecting someone from danger, preventing panic)? Jane\'s moral absolutism says: even if breaking rule would bring happiness and harm no one else directly, you still shouldn\'t do it because law/convention exists for good reason. Rochester\'s situational ethics says: if circumstances are extreme enough (trapped in marriage to madwoman), breaking rules is justified. Understanding this distinction helps navigate ethical dilemmas: when do we follow universal principles vs. when do we make contextual exceptions? Most people hold some mix—but where you draw lines reveals your ethical framework.'
    },
    {
      term: 'Violence Coded as Female Monstrosity',
      definition: 'When women\'s violence, rage, or resistance is presented as unnatural, monstrous, or insane—rather than as comprehensible response to circumstances, women\'s anger is pathologized as madness or inhuman savagery.',
      context: 'Mason was attacked with knife and bitten savagely—later revealed to be by Bertha. The violence is described in monstrous terms: teeth marks, wild laughter, Mason says "she said she\'d drain my heart." Bertha\'s rage is presented as inhuman, vampire-like, insane. But consider: Bertha is imprisoned, her husband plans bigamy, her brother visits and might represent her only hope of freedom or recognition. Is her violence "madness" or desperate resistance? The novel codes Bertha\'s violence as monstrous rather than comprehensible rage—we\'re meant to see her as dangerous creature rather than imprisoned woman fighting back.',
      whyItMatters: 'How we describe and interpret women\'s violence matters: Is it madness/monstrosity or resistance/rage at injustice? When women express anger, especially violently, society often pathologizes it as mental illness or unnatural aggression—rather than recognizing it as response to circumstances. Modern contexts: women who defend themselves characterized as "crazy," mothers who express rage at injustice labeled "unstable," women\'s anger dismissed as "hormonal" or "hysterical." Understanding how violence is coded by gender helps recognize when we pathologize women\'s resistance while normalizing men\'s aggression. Jane Eyre is complicit in this: Bertha is presented as monstrous, but Wide Sargasso Sea (Jean Rhys) later retells story from Bertha\'s perspective—showing her rage as comprehensible response to racism, exploitation, and imprisonment.'
    },
    {
      term: 'Complicity Through Service: Helping Without Understanding',
      definition: 'When you provide assistance or support without knowing what you\'re enabling—your service makes you complicit in actions you might oppose if you understood the full situation.',
      context: 'Jane helps Rochester cover up Mason\'s attack: tends wounds, maintains silence, helps remove Mason before houseguests wake. She does this without understanding what she\'s enabling: Rochester\'s imprisonment of Bertha, his concealment of his marriage, his plan to commit bigamy. Jane acts from loyalty and trust (Rochester asked for help, she promised to stand by him), but her service makes her complicit in maintaining the deception. She helps Rochester hide the evidence of Bertha\'s existence, which enables his plan to marry Jane bigamously.',
      whyItMatters: 'Complicity through service appears when people help without full information: employees who unknowingly enable corporate fraud, family members who help hide abuse, friends who provide alibis without knowing what they\'re covering. The question: Are you responsible for outcomes of your service if you didn\'t know what you were enabling? Jane acts with good intentions (helping someone in crisis), but her help enables Rochester\'s deception. Understanding complicity-through-service helps recognize: when someone asks for help but won\'t explain why, when you\'re told "don\'t ask questions just help," when your service seems designed to conceal rather than address problem—these are signals to pause and require information before providing assistance.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane demonstrates extraordinary composure under extreme circumstances: sits with wounded man for hours in the dark, hearing disturbing sounds next door, not knowing who attacked him or why, forbidden to speak or ask questions. She maintains calm, tends Mason\'s wounds, follows Rochester\'s instructions despite her confusion and fear. This shows Jane\'s capacity for dutiful service even in crisis—but it also shows her complicity: she helps Rochester conceal evidence of violence without understanding what she\'s enabling. When Rochester asks his "hypothetical," Jane answers from her moral principles: obey law and convention even if it means suffering. She doesn\'t realize she\'s telling Rochester she won\'t accept bigamy—she thinks she\'s answering philosophical question. Jane\'s moral absolutism is both her strength (clear principles, unwavering integrity) and limitation (can\'t imagine circumstances where rules might be broken, can\'t grasp that Rochester\'s "hypothetical" is about them).',
      keyTrait: {
        emoji: '🤐',
        text: 'Dutiful Silence'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester is in crisis management mode: calms panicked houseguests, conceals the attack, enlists Jane\'s help, removes Mason before discovery. He\'s skilled at maintaining performance of normalcy while managing disaster backstage. But he\'s also desperate and exhausted: by dawn he\'s vulnerable, asking Jane his "hypothetical" question that\'s really probing whether she\'d accept him as bigamist. When Jane answers that she\'d obey law over seeking happiness, Rochester is devastated—he was hoping for permission to break rules, hoping Jane would value their connection over convention. He realizes Jane won\'t accept bigamy, which means his plan (marry Jane, hide Bertha) is doomed. Rochester is revealed as man trying to have both: keep Bertha hidden AND marry Jane, maintain respectability AND escape his past. He wants Jane to give him ethical permission to commit bigamy, to tell him love justifies breaking law. When she doesn\'t, he despairs.',
      keyTrait: {
        emoji: '💔',
        text: 'Desperate Hope'
      }
    },
    {
      name: 'Mr. Richard Mason',
      development: 'Mason appears as victim: attacked violently, bleeding from knife wounds and bite marks, pale and terrified. He whispers "She said she\'d drain my heart"—revealing his attacker was female and made threats. Mason seems weak, passive—he doesn\'t fight back against his attacker, doesn\'t demand explanation, obediently leaves when Rochester tells him to. This passivity is interesting: Mason is Bertha\'s brother (revealed later), knows about Rochester\'s hidden marriage, could expose the secret—but he doesn\'t. Instead he obeys Rochester, leaves quietly, maintains the deception. Why? Is he afraid of Rochester? Complicit in Bertha\'s imprisonment? Financially dependent on Rochester? Mason\'s weakness and compliance suggest he\'s not hero coming to rescue his sister—he\'s part of the system keeping her imprisoned.',
      keyTrait: {
        emoji: '🩸',
        text: 'Passive Victim'
      }
    },
    {
      name: 'Bertha Mason Rochester',
      development: 'Bertha never appears on-page, but she\'s present through her effects: the attack on Mason, the sounds Jane hears next door (pacing, muttering, wild laughter), Mason\'s terror. She\'s characterized through her violence: knife wounds, bite marks, threats to "drain his heart." The novel presents Bertha as monstrous—inhuman, savage, vampire-like. But consider: her brother visits (possibly her only connection to outside world), she attacks him (rage? attempt to communicate? response to his complicity in her imprisonment?). We don\'t hear Bertha\'s perspective—only see her through others\' horrified descriptions. The chapter builds Bertha as gothic monster, but underlying question: Is she mad and violent, or driven to violence by imprisonment and betrayal?',
      keyTrait: {
        emoji: '👤',
        text: 'Violent Presence'
      }
    },
    {
      name: 'The Houseguests',
      development: 'The guests wake to screams, panic, demand explanation. Rochester manages them with authority, tells them it was servant\'s nightmare, sends them back to bed. They comply but suspicion lingers. Blanche makes dramatic scene, showing she doesn\'t actually care about Rochester personally—just wants the performance of gallantry. After this night, the house party\'s atmosphere changes: the guests are unsettled, less comfortable at Thornfield. Something is wrong here, even if they don\'t know what. The house party will soon dissolve—guests leave, Blanche\'s "courtship" ends. The attack marks beginning of the end for Rochester\'s ability to maintain normal social facade.',
      keyTrait: {
        emoji: '😰',
        text: 'Unsettled'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'All the house was still; for I believe all, except St. John and myself, were now retired to rest. The one candle was dying out: the room was full of moonlight. My heart beat fast and thick: I heard its throb.',
      analysis: 'Jane sits alone with wounded Mason in the dark, and the gothic atmosphere is palpable: dying candle, moonlight, Jane\'s racing heart audible in the silence. She\'s acutely aware of her vulnerability: alone with wounded man, strange sounds next door, locked in room on third floor. The sensory details (dying candle, heartbeat) create claustrophobic tension. Jane is experiencing gothic horror firsthand—no longer observing strange events from safe distance but directly involved in whatever terrible secret Thornfield hides.'
    },
    {
      text: 'She sucked the blood: she said she\'d drain my heart.',
      analysis: 'Mason\'s whispered revelation is coded in vampire language: "sucked blood," "drain my heart." This characterizes Bertha as monstrous, inhuman, vampire-like rather than as woman in distress. The language dehumanizes her—she\'s creature, not person. But notice: Mason doesn\'t say "she attacked me" or "she\'s dangerous"—he frames it as if Bertha has supernatural power, as if she\'s threat beyond human. This coding prepares readers to see Bertha as monster rather than imprisoned woman when she\'s finally revealed.'
    },
    {
      text: 'Tongues that had been well accustomed to speak with uncurbed license must remain still. Those who cannot speak must hear. Those who hear must not question.',
      analysis: 'This describes the compelled silence Rochester imposes: Jane must witness without understanding, Mason must endure without explaining, everyone must maintain the secret. The language reveals the violence of forced silence: "uncurbed license" must be "curbed," those who "cannot speak" must just "hear," those who "hear" must "not question." Rochester is imposing silence on everyone to maintain his secret—and this imposed silence itself is form of violence and control.'
    },
    {
      text: 'Is the wandering and sinful, but now rest-seeking and repentant, man justified in daring the world\'s opinion, in order to attach to him forever this gentle, gracious, genial stranger, thereby securing his own peace of mind and regeneration of life?',
      analysis: 'This is Rochester\'s "hypothetical"—but it\'s clearly about him and Jane. He\'s the "sinful but repentant man," she\'s the "gentle, gracious, genial stranger" who offers "regeneration." He\'s asking: would Jane accept him breaking rules (committing bigamy) to "attach her to him forever" and secure his happiness? The language romanticizes lawbreaking: he\'s "rest-seeking and repentant," just wants "peace of mind." But Jane doesn\'t recognize this is about her—she answers the philosophical question, not realizing Rochester is probing whether she\'d accept being his bigamous wife.'
    },
    {
      text: 'But you cannot, sir. If you have but one feeling left for her, you must not leave her to destruction. All will be crushed under foot, if you make this movement.',
      analysis: 'Jane responds to Rochester\'s hypothetical: even if the "wandering and sinful" man has found hope, he cannot abandon his obligations (the "her" in Jane\'s answer refers to Rochester\'s hypothetical first commitment—though Jane doesn\'t know it\'s actually Bertha). Jane says: you cannot sacrifice another person (or moral principle) for your own happiness. "All will be crushed" if you transgress. This is Jane\'s moral absolutism: duty and law over personal happiness. Rochester is devastated because Jane has unknowingly told him she won\'t accept bigamy—she\'ll choose principle over love.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Compelled Silence and Witnessing Without Understanding',
        explanation: 'Rochester forbids Jane to speak with Mason or ask questions—she must witness violence without comprehension. This creates psychological torture: Jane sees wounded man, hears disturbing sounds, knows something terrible happened, but is denied explanation. The compelled silence prevents Jane from understanding the situation well enough to protect herself or make informed choices. She\'s forced to be complicit in concealing violence she doesn\'t understand. This theme explores how silencing witnesses is form of control: if you can\'t name what you\'ve seen, can\'t discuss it, can\'t seek help, you\'re isolated and vulnerable.'
      },
      {
        name: 'Hypothetical as Probe: Testing Boundaries Without Commitment',
        explanation: 'Rochester asks Jane "hypothetical" that\'s actually about whether she\'d accept him as bigamist. Using hypothetical framing gives him deniability: if she says no, he can claim it was just philosophical question. If she says yes, he can reveal it\'s about them. The hypothetical is strategic—it lets him probe for information without risking direct rejection or revealing his plan. But Jane doesn\'t recognize the question is about her, so she answers from abstract principles rather than personal feelings. The theme explores how people use hypotheticals to test responses without commitment.'
      },
      {
        name: 'Moral Absolutism vs. Situational Ethics: The Central Conflict',
        explanation: 'Rochester presents situational ethics: if you\'ve suffered terribly from mistake, if you\'ve found chance at happiness, aren\'t you justified in breaking rules? Jane responds with moral absolutism: obey law and principle regardless of suffering or circumstances. This isn\'t just philosophical disagreement—it\'s the core conflict that will drive their separation. Rochester wants permission to transgress for happiness; Jane says happiness doesn\'t justify lawbreaking. Their reunion will require Rochester\'s circumstances to change (Bertha\'s death freeing him legally) because Jane won\'t compromise her principles even for love.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Gothic Horror Made Real: From Atmosphere to Violence',
        explanation: 'The novel has built gothic atmosphere for chapters—strange sounds, mysterious third floor, unexplained fires. Now gothic becomes real: actual violence, blood, wounded man, teeth marks. Jane isn\'t just hearing strange sounds—she\'s sitting with victim of whatever creature/person makes those sounds. This escalation from mysterious atmosphere to tangible violence raises stakes: the gothic isn\'t just mood, it\'s danger.',
        example: 'Jane has heard the demonic laughter before, wondered about Grace Poole, noticed strange things. But now she sits with man who\'s been savagely attacked—knife wounds, bite marks, blood everywhere. The gothic mystery becomes physical threat. She\'s no longer observer but participant in whatever terrible thing is happening at Thornfield. This prepares readers for Bertha\'s revelation: the gothic monster will turn out to be human woman, but the violence is real.'
      },
      {
        name: 'Dramatic Irony: Jane Doesn\'t Know She\'s the Subject',
        explanation: 'Rochester asks Jane about "hypothetical" man who wants to break rules for happiness with "gentle stranger." Readers increasingly suspect this is about Rochester and Jane. But Jane doesn\'t recognize herself as the subject—she answers philosophically, not personally. This creates dramatic irony: we know Rochester is asking about them; Jane doesn\'t. Her unknowing condemnation of rule-breaking is her unknowing rejection of Rochester\'s plan.',
        example: 'When Jane says the man cannot abandon his obligations, that "all will be crushed" if he transgresses, readers realize: she\'s telling Rochester she won\'t accept bigamy. But Jane thinks she\'s answering abstract ethical question. The gap between Jane\'s abstract answer and its actual meaning for her future creates tension: she\'s sealing her own fate without knowing it. Rochester\'s devastation at her answer tells readers: he was hoping for different response, and her moral absolutism dooms his plan.'
      },
      {
        name: 'Violence Coded as Female Monstrosity',
        explanation: 'Bertha\'s attack on Mason is described in inhuman terms: vampire-like (sucking blood), savage (bite marks), monstrous (wild laughter). The language dehumanizes her before readers meet her. When Bertha is finally revealed, we\'ve been primed to see her as creature rather than person. This coding serves Rochester\'s narrative: if Bertha is monster, Rochester is victim trapped by circumstance. If Bertha is woman, Rochester is man imprisoning his wife.',
        example: 'Mason says "she\'d drain my heart"—vampire language. The sounds next door are described as inhuman. Rochester\'s terror positions Bertha as threat rather than imprisoned victim. Brontë is complicit in this: the novel wants readers to sympathize with Rochester and Jane, which requires making Bertha seem monstrous rather than sympathetic. Wide Sargasso Sea later challenges this by retelling from Bertha\'s perspective—showing how Rochester\'s narrative dehumanized her.'
      },
      {
        name: 'Dawn as Symbolic Transition',
        explanation: 'Rochester walks Jane in garden at dawn—transitional time between night and day, darkness and light. They\'ve come through dark night of violence and concealment. Now in dawn light, Rochester asks his question: will Jane accept him breaking rules? The dawn symbolizes both hope (new day, new possibility) and exposure (light reveals truth). Rochester\'s question at dawn is last hope: if Jane says yes, he can proceed with bigamy. If she says no, darkness returns.',
        example: 'The garden walk at dawn contrasts with night of violence inside Thornfield. Outside in natural world, as light increases, Rochester tries one more time to find permission for his plan. But Jane\'s answer brings him back to darkness: she won\'t transgress. The dawn that should bring hope instead brings despair. Later, after failed wedding and Jane\'s departure, Rochester will be plunged into literal darkness (fire, blindness). The false dawn of this morning prefigures that coming darkness.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine late at night you hear screaming in your workplace, friend\'s house, or building where you\'re staying. Someone has been hurt—violently. The person in charge (boss, host, building manager) handles the crisis, calms everyone down, tells them it\'s nothing serious. Then they come to you privately: "I need your help. Someone is injured. Come with me but don\'t tell anyone." You follow them to find someone wounded—seriously hurt, bleeding, clearly attacked. The person in charge gives you strange instructions: "Stay here with them while I get help. But don\'t speak to them, don\'t ask what happened, and they cannot tell you anything. Just wait here." Then they leave you alone with the wounded person for hours. You hear strange sounds elsewhere (movement, voices, evidence someone else is nearby), but you\'re told not to investigate. Eventually help arrives and the wounded person is quietly removed—before anyone else can know. You\'ve been made complicit in covering up violence you don\'t understand. Later, the person who asked for your help comes to you vulnerable and desperate: "Can I ask you a hypothetical? If someone made a terrible mistake years ago, suffered for it, but now found chance at real happiness—would they be justified in breaking rules to have that happiness? Even if it meant lying or hiding things?" You answer honestly based on your principles: "No, I don\'t think you can break important rules just for personal happiness." They look devastated by your answer, and you don\'t understand why—you thought you were discussing philosophy, but they were actually asking if you\'d accept them despite something they\'re hiding.',
    
    parallels: [
      '🔹 **Compelled Silence About Violence**: Being made to witness harm while forbidden to ask questions or seek explanation. Modern contexts: employees told "don\'t ask questions" about workplace incidents, family members commanded to ignore visible abuse, people who witness concerning behavior but are pressured to "mind your business." The silence prevents understanding and seeking help.',
      '🔹 **Complicity Through Service**: Helping someone cover up or manage crisis without understanding what you\'re enabling. You act from loyalty (they asked for help, you want to support them), but your service makes you participant in something you might oppose if you knew full story. Modern equivalent: helping friend with alibi without knowing what it\'s covering, assisting boss with task that turns out to enable fraud, providing support that maintains someone\'s harmful behavior.',
      '🔹 **"Hypothetical" That\'s Actually Real**: When someone asks "what would you do if..." and it\'s actually about their situation. "Would you ever forgive cheating?" (they cheated), "How do you feel about open relationships?" (they want one), "Could you be with someone who...?" (they are that thing). The hypothetical provides deniability while probing your response to their actual situation.',
      '🔹 **Answering Abstract When Asked Personal**: Responding to what you think is philosophical question without realizing you\'re giving answer about your actual relationship/situation. You speak from principles, but the asker hears it as judgment of them specifically. The disconnect between what you meant (abstract ethics) and how it\'s received (personal rejection) creates confusion and hurt.',
      '🔹 **Violence Coded as Madness**: When someone\'s rage or resistance is characterized as insanity/instability rather than comprehensible response to circumstances. Especially for women: anger described as "crazy," resistance called "unstable," self-defense labeled "psychotic." This coding delegitimizes the person\'s perspective and justifies controlling them "for their own good."',
      '🔹 **Moral Absolutism vs. Situational Ethics**: The debate: Are rules universal (never lie, never cheat, never break laws) or contextual (sometimes lying prevents greater harm, sometimes rules should bend for extreme circumstances)? When someone presents "extreme circumstances" as justification for rule-breaking, how do you evaluate: legitimate exception or self-serving rationalization?',
      '🔹 **Dawn Confessions**: When someone opens up in vulnerable moment (late at night, after crisis, during exhaustion), they\'re lowering defenses and revealing more. Dawn walks, late-night talks, post-crisis debriefs—these liminal times create space for truth-telling. But also: vulnerability can be strategic, extracting admissions or commitments when your guard is down.'
    ],
    
    discussionPrompt: 'Have you been asked to help in crisis without being told what you\'re helping with—made complicit in something you didn\'t fully understand? How did you feel when you later learned the full story? Have you experienced someone asking "hypothetical" question that was actually about real situation—how did you recognize it? When you answered, did you respond to the hypothetical or to the real situation underneath? Have you held different positions on moral absolutism vs. situational ethics—are there rules you think should never be broken, or do you believe context always matters? When has someone\'s anger or resistance been characterized as "madness" rather than comprehensible response to circumstances?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🤐',
      name: 'Compelled Silence and Complicity',
      explanation: 'Rochester forbids Jane to speak with Mason or ask questions—she must witness without understanding. This forced silence makes Jane complicit in concealing violence and maintaining Rochester\'s secret. She helps remove Mason before the houseguests wake, helps Rochester avoid explaining the attack. Jane\'s service, given in ignorance, enables Rochester\'s larger deception (hiding Bertha, planning bigamy). The thread asks: When you help without full information, are you responsible for what your help enables?'
    },
    {
      emoji: '⚖️',
      name: 'Moral Absolutism vs. Situational Ethics',
      explanation: 'Rochester asks if extreme suffering justifies breaking rules for happiness. Jane says no: obey law regardless of circumstances. This is the philosophical divide that will drive their separation: Rochester believes his suffering (trapped marriage to madwoman) justifies transgression (bigamy), while Jane believes no circumstances justify breaking moral law. Their reunion requires Rochester\'s situation to change legally (Bertha\'s death) because Jane won\'t compromise principles even for love.'
    },
    {
      emoji: '🩸',
      name: 'Gothic Violence Made Real',
      explanation: 'The mysterious sounds and strange events become tangible violence: Mason is attacked, bleeding, bitten. Gothic atmosphere becomes actual danger. Jane isn\'t just hearing strange sounds—she\'s tending victim of whatever makes those sounds. The escalation from mood to violence raises stakes: Thornfield isn\'t just mysterious, it\'s dangerous. This prepares readers for Bertha\'s revelation: the gothic monster is real, the violence isn\'t metaphorical.'
    },
    {
      emoji: '👤',
      name: 'Bertha as Monster or Victim',
      explanation: 'Bertha is characterized through her violence: knife attack, bite marks, wild laughter, vampire-like threats. She\'s presented as monstrous, inhuman, dangerous. But underlying question: Is she mad violent creature, or imprisoned woman fighting back? Attacking her brother (who may be complicit in her imprisonment), making vampire threats—is this insanity or desperate resistance? The novel codes Bertha as monster, but reader must question: whose narrative is this, and what would Bertha\'s version be?'
    },
    {
      emoji: '💔',
      name: 'Rochester\'s Desperate Hope',
      explanation: 'Rochester asks his "hypothetical" hoping Jane will give permission to break rules, will say happiness justifies transgression, will accept him despite his deception. When Jane answers that law must be obeyed, Rochester\'s hope dies. This moment is tragedy: Rochester thought if Jane loved him enough, she\'d overlook bigamy. Jane\'s moral principles are stronger than her love (or at least than her willingness to enable wrongdoing for love). Rochester\'s plan—marry Jane, hide Bertha, have happiness—is revealed as impossible because Jane won\'t transgress.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Compelled Silence as Control',
      question: 'Rochester forbids Jane to speak with Mason: "Whatever you do, don\'t speak to him, and he must not speak to you." Why does Rochester impose this silence? What does he fear might be revealed if they spoke? How does preventing witnesses from communicating with each other function as form of control? When is silence about violence protective vs. when is it coercive?'
    },
    {
      title: 'Complicity Through Service',
      question: 'Jane helps Rochester conceal Mason\'s attack—tends wounds, maintains silence, helps remove Mason before houseguests wake. She acts from loyalty, but her service makes her complicit in hiding evidence of violence. Is Jane responsible for what her help enables? When you provide assistance without full information, does that absolve you of responsibility for the outcomes?'
    },
    {
      title: 'Hypothetical as Probe',
      question: 'Rochester asks Jane "hypothetical" about whether suffering justifies breaking rules—but he\'s really asking if she\'d accept bigamy. Jane doesn\'t recognize the question is about her, so she answers from abstract principles. Should Rochester have asked directly instead of using hypothetical? Does hypothetical framing give people permission to probe for information without risking rejection? When is it strategic vs. when is it cowardly?'
    },
    {
      title: 'Jane\'s Moral Absolutism',
      question: 'Jane tells Rochester that even terrible suffering doesn\'t justify breaking moral law—happiness doesn\'t excuse transgression. Is this admirable integrity or rigid inflexibility? Are there circumstances where rules should be broken? How do we distinguish between legitimate exceptions and self-serving rationalizations? Where do you fall on absolutism vs. situational ethics?'
    },
    {
      title: 'Rochester\'s Situational Ethics',
      question: 'Rochester argues his situation (trapped in marriage to madwoman) justifies transgression (bigamy). Is his suffering extreme enough to warrant breaking law? Does the fact that he was (possibly) deceived into the marriage create legitimate exception? Or is he rationalizing his desire for Jane by framing it as justified rule-breaking?'
    },
    {
      title: 'Bertha as Monster or Victim',
      question: 'Bertha attacks Mason violently—knife wounds, bite marks, threats. The novel codes this as monstrous, inhuman, insane. But Mason is her brother (revealed later), possibly complicit in her imprisonment. Is Bertha\'s violence madness or resistance? How does characterizing women\'s rage as monstrosity serve Rochester\'s narrative? What would Bertha\'s version of this night be?'
    },
    {
      title: 'Mason\'s Passivity',
      question: 'Mason is attacked, obeys Rochester\'s orders to leave quietly, doesn\'t expose the secret or demand explanation. Why is Mason so passive? He could reveal Rochester\'s hidden marriage, could seek justice for the attack—but he doesn\'t. What does his compliance suggest about his character and his relationship to Bertha and Rochester?'
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
      title: 'Moral Absolutism vs. Situational Ethics: Developing Your Framework',
      description: 'Write a philosophical essay examining the debate between moral absolutism (rules apply universally regardless of circumstances) and situational ethics (context determines whether rules should be followed). Part 1: Define both positions: Moral absolutism says some actions are always wrong (lying, breaking promises, violating laws) regardless of circumstances or outcomes. Situational ethics says ethical decisions depend on context—sometimes lying prevents greater harm, sometimes breaking rules is justified. Part 2: Analyze Rochester\'s argument: He was deceived into marriage with woman who went mad, suffered terribly, found hope with Jane. Does this extreme suffering justify bigamy? Part 3: Analyze Jane\'s response: She says obey law regardless of suffering. Is this admirable integrity or rigid inflexibility? Part 4: Develop your own framework: Are there some rules that should never be broken (absolute principles)? Are there circumstances where any rule can be broken (pure situational ethics)? Or do you hold position in between? Part 5: Apply to scenarios: (A) Lying to save someone\'s life, (B) Breaking promise to prevent harm, (C) Violating law for greater good, (D) Bigamy when trapped in impossible marriage. For each, explain: Would you follow the rule or make contextual exception? Why? Use textual evidence from Jane Eyre and contemporary examples.',
      purpose: 'This prompt develops sophisticated ethical reasoning—students must articulate principles, recognize complexity, and apply framework consistently. They analyze Rochester and Jane\'s positions without simplistically endorsing one. They develop their own framework, then test it against scenarios to see if it holds. Connects to real-life ethical dilemmas: When do we follow universal rules vs. make contextual exceptions? How do we distinguish legitimate exceptions from self-serving rationalizations? Students engage with philosophy (Kant vs. consequentialism), law (when civil disobedience is justified), and personal ethics (their own moral framework).'
    },
    
    activity: {
      title: 'The Compelled Silence Exercise: Witnessing Without Understanding',
      description: 'Students experience what it feels like to witness without being allowed to understand. Activity: Students are divided into groups of three: Witness, Victim, Perpetrator. (1) Witness is given brief scenario: "Someone in your group was harmed. You must help them for the next 10 minutes. But you cannot ask what happened, and they cannot tell you. You can only address their immediate needs." (2) Victim has scenario explaining they were wronged but are forbidden to explain. (3) Perpetrator observes but remains silent. Witness must help Victim (comfort, bandage simulated wound, provide water) without being allowed to understand context. After 10 minutes: Debrief how Witness felt: Frustrating? Disorienting? Did not understanding make you less able to help? How did Victim feel being unable to explain? Discussion: (A) How does preventing explanation isolate witnesses and victims? (B) Why might perpetrators or those covering up harm forbid communication between witnesses? (C) In what contexts are people told "don\'t ask questions just help"—and why should that be red flag? (D) Connect to Jane helping Mason: How did compelled silence make Jane complicit in hiding violence she didn\'t understand? Extension: Students analyze other scenarios where witnesses are silenced—workplace incidents, family abuse, institutional cover-ups.',
      materials: 'Role cards with scenarios, props for simulated crisis (bandages, water), debrief prompts, discussion questions about witnessing and silence'
    },
    
    crossCurricular: {
      title: 'Philosophy/Ethics: When Does Suffering Justify Transgression?',
      description: 'Partner with philosophy class to examine Rochester\'s ethical argument: extreme suffering justifies breaking rules for happiness. Philosophy class covers: (1) Deontological ethics (Kant: some actions are always wrong regardless of circumstances), (2) Consequentialism (ends can justify means if outcome is better), (3) Virtue ethics (what would virtuous person do?), (4) Social contract theory (when are we bound by laws/conventions?). English class reads Chapters 19-20 analyzing Rochester\'s argument: He suffered terribly from youthful mistake, Bertha went mad (not his fault), he\'s found genuine love with Jane. Does this justify bigamy? Students debate: Team Rochester argues situational ethics—his suffering is extreme enough to warrant exception. Team Jane argues moral absolutism—no circumstances justify breaking moral law. Then students apply philosophical frameworks: (A) Kantian analysis: Can Rochester\'s maxim ("When trapped in impossible marriage, commit bigamy") be universalized? (B) Consequentialist: Would Rochester marrying Jane bigamously create more happiness than harm? (C) Virtue ethics: Is Rochester showing courage (pursuing happiness despite obstacles) or vice (selfishness, deception)? Final project: Students develop their own ethical framework for when rules can be broken, test it against scenarios, defend it philosophically. Connect to contemporary: When is civil disobedience justified? When can promises be broken? When does personal happiness warrant rule-breaking?',
      subjects: ['Philosophy', 'Ethics', 'Law', 'Political Science', 'Theology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Analyzing Rochester\'s Ethical Argument: When Does Suffering Justify Transgression?',
    prompt: 'Rochester presents an ethical argument: Someone who made "grave error in youth," suffered terribly for it, then found hope of redemption with good person—is justified in "daring the world\'s opinion" (breaking rules) to secure happiness. Your task: Analyze Rochester\'s argument rigorously. (1) Identify his premises and conclusion. (2) Evaluate whether his reasoning is valid. (3) Apply different ethical frameworks (Kantian, consequentialist, virtue ethics). (4) Consider what he\'s hiding (it\'s not "error" but marriage to woman who went mad, and he plans bigamy not just "daring opinion"). (5) Determine: Is this legitimate ethical exception or self-serving rationalization? Then examine Jane\'s response: She rejects his argument based on moral absolutism. Is she right? Finally, develop your own position: Are there circumstances where extreme suffering justifies breaking moral law? How do we distinguish legitimate exceptions from convenient excuses?',
    
    guidingQuestions: [
      'Map Rochester\'s argument: What are his premises? (1) He made error in youth, (2) He suffered terribly, (3) He\'s found hope with someone good. What\'s his conclusion? He\'s justified in breaking rules to secure happiness. Is this logically valid? Does suffering + finding love = justified rule-breaking?',
      'What is Rochester hiding in his framing? He says "error" (suggests mistake), but it\'s actually marriage (suggests commitment). He says "daring opinion" (suggests social convention), but he plans bigamy (actual crime). How does his language minimize what he\'s actually proposing?',
      'Apply Kantian ethics: Kant says act only according to maxims you could will as universal law. Can Rochester\'s principle ("When marriage becomes unbearable, commit bigamy") be universalized? What if everyone acted on this principle?',
      'Apply consequentialism: Would Rochester marrying Jane bigamously create more total happiness than harm? Consider: Rochester and Jane happy, but Bertha still imprisoned, Mason distressed, Jane complicit in illegal act, children of bigamous marriage illegitimate, eventual discovery would devastate Jane.',
      'Evaluate Jane\'s response: She says obey law regardless of suffering. Is this admirable integrity or rigid inflexibility? Are there NO circumstances where rules should be broken? What if following law causes greater harm than breaking it would?',
      'Distinguish legitimate exceptions from rationalizations: What makes some rule-breaking justified (civil disobedience against unjust laws, lying to save life) vs. self-serving (I want this so circumstances justify breaking rules)? Where does Rochester fall on this spectrum?'
    ],
    
    thinkingFramework: {
      analyze: 'Map Rochester\'s argument structure: (1) Premise: I made grave error in youth (actually: was deceived into marriage with woman who went mad—he frames this as his error rather than misfortune), (2) Premise: I suffered terribly (lived with mad wife, felt trapped, had no legitimate escape—this is true), (3) Premise: I found someone good who offers redemption (Jane makes him want to be better—this seems genuine), (4) Implied premise: Happiness with this person would undo/compensate for past suffering, (5) Conclusion: Therefore I\'m justified in breaking rules (committing bigamy) to have this happiness. Identify hidden assumptions: (A) Suffering creates exemption from moral law, (B) Personal happiness justifies harming others (Bertha further imprisoned, Jane deceived), (C) Rules exist for normal situations but don\'t apply to extreme cases, (D) Consequences (happiness) justify means (deception, bigamy). Examine what\'s minimized: Rochester calls it "error" not "marriage," says "daring opinion" not "committing bigamy," refers to Bertha only as past mistake not as current wife he\'s actively deceiving.',
      evaluate: 'Apply three ethical frameworks: (1) Kantian/Deontological: Some actions are wrong regardless of circumstances. Can Rochester universalize his maxim? "When trapped in unbearable marriage, commit bigamy." If everyone did this, marriage institution collapses. Kant would say: No, you cannot will this as universal law. Suffering doesn\'t exempt you from moral duty. (2) Consequentialist/Utilitarian: Evaluate outcomes. Rochester + Jane happy vs. harms: Bertha still imprisoned (possibly worse off as Rochester even more desperate to hide her), Jane deceived (her integrity compromised), eventual discovery would devastate Jane, any children illegitimate, others harmed by precedent. Does happiness of two outweigh these harms? Probably not—especially since Jane would be devastated to learn she\'d been bigamous wife. (3) Virtue Ethics: What would virtuous person do? Rochester shows some virtues (honesty in suffering, genuine love for Jane) but also vices (deception, self-serving rationalization, willing to harm Jane by tricking her into bigamy). Virtuous person would find legitimate solution (annulment? honest conversation with Jane about situation?) rather than deception. Evaluate Jane\'s moral absolutism: Strength—maintains integrity, recognizes some principles shouldn\'t be compromised. Limitation—doesn\'t allow for any contextual exception, even when circumstances are genuinely extreme. Question: Are there NO situations where rules should be broken, or is Jane too rigid?',
      synthesize: 'Develop framework for legitimate exceptions: (1) Criterion: Harm prevention (breaking rule prevents significantly greater harm than it causes), (2) Criterion: Transparency (those affected have relevant information and can consent), (3) Criterion: Last resort (no legitimate alternatives available), (4) Criterion: Proportionality (rule-breaking is proportionate to problem being addressed). Apply to Rochester: (A) Harm prevention? No—bigamy doesn\'t prevent harm, it creates it (Jane deceived, eventually devastated). Rochester\'s suffering is real but bigamy doesn\'t actually address it—just hides Bertha more desperately. (B) Transparency? No—Jane doesn\'t know she\'d be bigamous wife. Rochester plans to deceive her. (C) Last resort? Questionable—Rochester hasn\'t pursued annulment, divorce (difficult but possible), or honest conversation with Jane about situation. He jumps to deception. (D) Proportionality? No—his happiness doesn\'t warrant bigamy and deceiving Jane. Verdict: Rochester\'s argument is rationalization, not legitimate exception. He frames his suffering as justifying transgression, but he\'s really saying "I want this, so circumstances excuse my getting it dishonestly." Connect to modern contexts: When people claim suffering justifies rule-breaking, examine: Are they preventing greater harm, or pursuing personal advantage? Are they transparent or deceptive? Have they exhausted legitimate alternatives? Is the rule-breaking proportionate to problem? Most self-serving rationalizations fail these tests—they\'re about getting what you want, dressed up as ethical necessity.'
    },
    
    expectedDepth: 'Strong responses will: (1) Recognize Rochester\'s argument as sophisticated rationalization—it sounds ethical but serves his desires; (2) Identify how his language minimizes what he\'s proposing ("error" not "marriage," "daring opinion" not "bigamy"); (3) Apply multiple ethical frameworks rigorously, showing how each evaluates his argument; (4) Acknowledge Rochester\'s genuine suffering while recognizing it doesn\'t justify his proposed solution; (5) Grapple with Jane\'s moral absolutism—both respecting her integrity and questioning if she\'s too rigid; (6) Develop nuanced framework for legitimate exceptions that distinguishes justified rule-breaking from rationalization; (7) Apply to contemporary contexts with specific examples, showing how framework helps evaluate real ethical dilemmas; (8) Address the tragedy: Rochester\'s suffering is real, his love for Jane is genuine, but his proposed solution is wrong—and Jane\'s principles prevent her from accepting it even if she wanted to.',
    
    classroomApplication: 'Works as: (1) Analytical essay (10-12 pages) requiring close reading, ethical reasoning, and application of philosophical frameworks, (2) Socratic seminar—students debate whether Rochester\'s suffering justifies bigamy, must defend positions using ethical theory, (3) Mock trial—prosecute or defend Rochester for attempted bigamy, using ethical and legal arguments, (4) Comparative analysis—examine other literary/historical figures who claimed suffering justified transgression (ends justify means arguments). Time: 6-7 class periods including textual analysis, philosophical framework introduction, application to Rochester\'s case, development of student frameworks, and contemporary applications. Can connect to: philosophy courses, law/legal studies (when laws should be broken), theology (suffering and moral obligation), political science (civil disobedience), psychology (rationalization and motivated reasoning). Consider inviting: ethicists, lawyers, philosophers, theologians to discuss when suffering creates legitimate exceptions to rules.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(19),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '💔',
    title: 'Next Time: Chapter 21 — Mrs. Reed\'s Summons',
    preview: 'Jane receives urgent message: Mrs. Reed at Gateshead is dying and has asked for Jane. Jane must leave Thornfield temporarily to visit the aunt who abused her as a child. At Gateshead, Jane finds Mrs. Reed suffering from stroke, bitter and unrepentant. On her deathbed, Mrs. Reed finally reveals a devastating secret she\'s kept for three years: Jane has a wealthy uncle, John Eyre, who wrote from Madeira asking about his niece—offering to adopt her and make her his heir. Mrs. Reed, still hating Jane even in death, maliciously replied that Jane had died at Lowood. For three years, Jane has had wealthy relative searching for her, and Mrs. Reed deliberately prevented the connection. Mrs. Reed refuses to apologize, dies unreconciled. Jane returns to Thornfield to find the house party dissolved, Blanche gone—and Rochester waiting for her with desperate relief, as if her absence proved something about his feelings.',
    hookQuestion: 'Why did Mrs. Reed hate Jane so much that even dying, she couldn\'t let go of her malice? Who is Uncle John Eyre, and will Jane ever connect with him? And what will Rochester do now that Blanche is gone and Jane has returned?'
  }
}

