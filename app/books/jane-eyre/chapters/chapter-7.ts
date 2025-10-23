/**
 * JANE EYRE - CHAPTER 7
 * 
 * Mr. Brocklehurst arrives at Lowood for inspection, and Jane faces
 * the public humiliation she has dreaded since his first visit
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter7: ChapterData = {
  number: 7,
  title: 'Public Humiliation',
  
  readingTime: 24,
  pages: 15,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Mr. Brocklehurst conducts a harsh inspection of Lowood, criticizing the girls\' appearance and imposing cruel rules, then publicly brands Jane as a liar in front of the entire school—but Helen\'s quiet act of solidarity offers unexpected comfort.',
    
    full: [
      'Weeks pass at Lowood with Jane settling into the routine. The chapter opens with Mr. Brocklehurst arriving for an inspection. He towers over the students, a grim figure in black, examining everything with critical eyes. He interrogates teachers about expenses and examines the girls\' appearances. When he notices that some girls have naturally curly hair, he orders it all cut off, declaring that vanity must be stamped out. He preaches about humility and self-denial while his own wife and daughters enter wearing fine clothes, expensive jewelry, and elaborate hairstyles—a hypocrisy so blatant it shocks even the students.',

      'Then comes the moment Jane has dreaded. While Mr. Brocklehurst speaks to the assembled school, Jane accidentally drops her slate, and it breaks with a loud crash. Everyone turns to look. Mr. Brocklehurst recognizes her as the girl Mrs. Reed warned him about. He orders Jane to stand on a stool in front of the entire school and announces to everyone that she is a liar, that she is deceitful, that no one should befriend her or speak to her. He warns the teachers and students to guard themselves against her wicked nature. For half an hour, Jane stands on the stool while Mr. Brocklehurst delivers his condemnation, then he leaves her there as a warning to others.',

      'Jane is devastated. Everything she feared has come true—she\'s been publicly shamed, her reputation destroyed before she could make any friends, branded as someone dangerous and dishonest. She\'s certain her life at Lowood is ruined. But then she notices Helen Burns. Helen has positioned herself where Jane can see her, and she keeps her eyes fixed on Jane with a look of compassion and solidarity. That look sustains Jane through the ordeal.',

      'After everyone leaves, Helen comes to Jane and offers comfort, reminding Jane that those who know her won\'t believe Mr. Brocklehurst\'s accusations. Miss Temple, the superintendent, also appears and invites both girls to her room. There, Miss Temple listens to Jane\'s side of the story, treats her with kindness, and promises to investigate the truth. This kindness from Miss Temple and the loyalty from Helen begin to restore Jane\'s hope. The chapter shows the devastating power of public shaming but also the healing power of being believed and supported by even one person who cares.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Public Shaming',
      definition: 'The act of humiliating someone in front of a community, designed to damage reputation, enforce conformity, and deter others from similar behavior through fear.',
      context: 'Mr. Brocklehurst forces Jane to stand on a stool in front of the entire school while he brands her a liar. This isn\'t private correction—it\'s theatrical humiliation designed as much for the audience (deterring others) as for Jane (punishing her).',
      whyItMatters: 'Public shaming is a control tactic used throughout history and persists today (social media call-outs, public firings, viral shaming). Understanding its mechanics helps readers see it as a power tool, not a justice mechanism. The chapter explores both its devastating effects and how to survive it.'
    },
    {
      term: 'Hypocrisy',
      definition: 'Claiming to hold moral standards or beliefs that one\'s own actions contradict; preaching values one doesn\'t practice.',
      context: 'Mr. Brocklehurst preaches that vanity and luxury are sinful, orders girls\' natural curls cut off, demands extreme self-denial—while his own family wears expensive clothes, elaborate hairstyles, and fine jewelry. He imposes poverty he doesn\'t share.',
      whyItMatters: 'Brontë uses visual contrast to expose moral hypocrisy: Brocklehurst\'s sermon about simplicity juxtaposed with his daughters\' ostrich feathers and velvet dresses. This reveals how those with power often exempt themselves from rules they enforce on the powerless. The pattern persists in modern institutions.'
    },
    {
      term: 'Reputation and Social Death',
      definition: 'The concept that in tightly controlled communities, having one\'s reputation destroyed can be as devastating as physical harm, effectively ending social existence.',
      context: 'When Mr. Brocklehurst labels Jane a liar and warns everyone to avoid her, he\'s attempting to create social death—Jane will exist physically at Lowood but be socially erased. No friends, no trust, no belonging.',
      whyItMatters: 'For people in closed systems (schools, prisons, small communities, online groups), reputation can be everything. Once damaged, especially by authority figures, it\'s extraordinarily difficult to repair. Understanding "social death" helps readers grasp why Jane is so devastated—this isn\'t just embarrassment; it\'s existential threat.'
    },
    {
      term: 'Bearing Witness',
      definition: 'The act of observing and acknowledging someone\'s suffering, providing presence and recognition even when you cannot change circumstances.',
      context: 'Helen positions herself where Jane can see her and maintains eye contact throughout the humiliation. Helen can\'t stop Mr. Brocklehurst, but she can offer presence, solidarity, and the message "you\'re not alone." This is bearing witness.',
      whyItMatters: 'Sometimes people can\'t fix injustice but can refuse to look away. Helen\'s witnessing is powerful precisely because it can\'t change anything material but changes everything psychological. This concept is crucial for understanding solidarity, support, and how to help when you can\'t solve.'
    },
    {
      term: 'Authority and Belief',
      definition: 'The tendency to believe accusations from authority figures without evidence, based solely on the authority\'s status and power.',
      context: 'Mr. Brocklehurst has no evidence Jane is a liar—only Mrs. Reed\'s word. But his position as founder and inspector gives his pronouncement weight. Students and teachers might believe him simply because he\'s in charge, not because the accusation is true.',
      whyItMatters: 'This reveals how authority manufactures truth: powerful people\'s claims are treated as fact regardless of evidence. Understanding this dynamic helps readers recognize it in various contexts—how institutions, bosses, or influential people can damage reputations through assertion alone. Miss Temple\'s decision to investigate rather than simply believe shows an alternative.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane experiences her worst fear realized: public humiliation that destroys her reputation before she\'s had a chance to make friends or prove herself. Her response reveals her resilience but also her vulnerability. She\'s devastated—certain her life at Lowood is over, that no one will ever believe she\'s honest. But she doesn\'t completely break. Helen\'s witnessing and Miss Temple\'s kindness remind Jane that some people see beyond authority\'s pronouncements. Jane is learning a painful lesson: reputation can be damaged by others but isn\'t entirely in their control. If even one person believes you, you\'re not alone. This experience will shape Jane\'s fierce commitment to truth-telling and her refusal to be defined by others\' false narratives.',
      keyTrait: {
        emoji: '💔',
        text: 'Wounded but Unbroken'
      }
    },
    {
      name: 'Mr. Brocklehurst',
      development: 'This chapter reveals Brocklehurst at his worst: cruel, hypocritical, and wielding power without mercy. He inspects Lowood not with care for students\' wellbeing but with obsession over minor details that reflect his ideology (girls\' hair, expenses). His condemnation of Jane is disproportionate and theatrical—he doesn\'t just tell teachers privately; he stages a public spectacle. Most damningly, his family\'s appearance exposes his hypocrisy: he preaches poverty and simplicity while his wife and daughters wear luxury he denies to orphans. He represents religious hypocrisy and institutional cruelty at its most visible.',
      keyTrait: {
        emoji: '⛓️',
        text: 'Hypocritical Tyrant'
      }
    },
    {
      name: 'Helen Burns',
      development: 'Helen demonstrates what active compassion looks like within constraints. She can\'t stop Mr. Brocklehurst or publicly defend Jane without risking punishment herself. But she can bear witness—positioning herself where Jane can see her, maintaining eye contact, offering silent solidarity. After, she seeks Jane out and provides comfort through both presence and philosophy: reminding Jane that truth isn\'t determined by authority, that those who know Jane won\'t believe the accusations. Helen shows that friendship doesn\'t require grand gestures—sometimes presence and loyalty are revolutionary acts.',
      keyTrait: {
        emoji: '🤝',
        text: 'Quiet Solidarity'
      }
    },
    {
      name: 'Miss Temple',
      development: 'Miss Temple emerges as the chapter\'s moral center and Jane\'s first experience of just authority. Unlike Mr. Brocklehurst, who pronounces judgment without investigation, Miss Temple listens. She invites Jane to her room, asks for her side of the story, promises to verify it, and treats Jane with dignity despite Brocklehurst\'s condemnation. Her response models what good authority looks like: investigation before judgment, listening to the accused, maintaining human dignity, questioning rather than automatically believing powerful people. She becomes the first truly trustworthy adult Jane has known.',
      keyTrait: {
        emoji: '👑',
        text: 'Just Authority'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'My dear children, it becomes my duty to warn you, that this girl, who might be one of God\'s own lambs, is a little castaway: not a member of the true flock, but evidently an interloper and an alien.',
      analysis: 'Mr. Brocklehurst uses religious language to dehumanize Jane—she\'s not a "lamb" (innocent child) but a "castaway," "interloper," "alien." This rhetoric creates an us/them dynamic: legitimate students vs. Jane the outsider. The religious framing makes his cruelty seem like moral duty. This is how authority justifies harm: by redefining victims as threats deserving punishment.'
    },
    {
      text: 'I saw her first day arrive here a stool; this is the pedestal of infamy on which I now place her, and she shall not come off until I have told you all the story.',
      analysis: 'The "pedestal of infamy" inverts typical meaning—pedestals usually elevate people honorably, but this elevates Jane for shame. Mr. Brocklehurst stages theater: Jane elevated for visibility, audience assembled, narrative controlled by him. This isn\'t correction; it\'s spectacle. The ritual nature makes the humiliation more devastating—this is orchestrated, intentional social destruction.'
    },
    {
      text: 'My first view on rising showed me my wretchedness was exposed to the view of the whole school: was it not rather dreadful? Then there was no relief from the silence; I felt that half an hour had passed already.',
      analysis: 'Jane\'s interiority during public shaming shows time distortion (minutes feel eternal) and hyperawareness of being watched. The phrase "my wretchedness was exposed" captures how public shaming works—it forces you to see yourself through hostile eyes. Jane isn\'t just experiencing humiliation; she\'s forced to witness others witnessing her humiliation. This doubling makes it unbearable.'
    },
    {
      text: 'I read in Miss Scatcherd\'s face a species of displeasure and disgust; but, in Miss Temple\'s, a sorrow that was not offensive.',
      analysis: 'Jane learns to read adult responses: Miss Scatcherd sees a confirmed problem student (disgust), but Miss Temple sees a suffering child (sorrow). The distinction between "disgust" and "sorrow" is crucial—one dehumanizes, one recognizes humanity. Jane is developing discernment about which adults can be trusted based not on their words but their emotional responses to her pain.'
    },
    {
      text: 'I felt their eyes directed like burning-glasses against my scorched skin.',
      analysis: 'The burning-glass metaphor perfectly captures how public attention feels during shaming—each gaze is like focused sunlight, intensifying and painful. Jane\'s "scorched skin" suggests permanent marking, scarring. This isn\'t just metaphorical—shame researchers confirm that public humiliation creates lasting psychological wounds. Brontë\'s imagery makes the invisible pain visible.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Public Shaming as Social Control',
        explanation: 'Mr. Brocklehurst\'s humiliation of Jane isn\'t primarily about Jane—it\'s about controlling everyone else. By making an example of Jane, he sends a message to all students: "This could be you if you step out of line." Public punishment creates an atmosphere of fear that maintains institutional control. The theatrical staging (Jane elevated on a stool, everyone assembled, prolonged duration) maximizes the deterrent effect. This chapter reveals how institutions use individual humiliation for collective control—a pattern that persists from medieval public punishments to modern social media pile-ons. Brontë exposes the cruelty and ineffectiveness of this approach: Jane is traumatized but not reformed, and the school community learns to fear authority rather than respect it.'
      },
      {
        name: 'Hypocrisy and Class Ideology',
        explanation: 'The visual contrast between Mr. Brocklehurst preaching simplicity while his family wears luxury exposes class-based hypocrisy. He imposes deprivation on poor orphans (cutting their hair, restricting food, denying comfort) while exempting his own family from any such sacrifices. This isn\'t about religious principle—it\'s about class control. Victorian charity ideology held that poor children needed to be "hardened" and shouldn\'t expect comfort, while wealthy children deserved refinement and grace. Brocklehurst embodies this ideology: orphans get burnt porridge and shorn heads; his daughters get velvet and ostrich feathers. Brontë uses vivid visual irony to expose how moral rhetoric ("humility," "self-denial") masks class oppression.'
      },
      {
        name: 'The Power of Witnessing and Solidarity',
        explanation: 'Helen\'s response to Jane\'s humiliation demonstrates that sometimes presence is power. Helen can\'t stop Mr. Brocklehurst or clear Jane\'s name, but she can refuse to abandon Jane. By positioning herself where Jane can see her and maintaining eye contact, Helen offers what trauma psychologists call "witnessing"—acknowledgment of suffering that says "you\'re not alone; what\'s happening to you is real; I see you." This simple act of solidarity sustains Jane through the ordeal. The chapter shows that when you can\'t fix injustice, bearing witness still matters profoundly. Helen\'s presence and Miss Temple\'s later kindness prevent Jane\'s complete isolation—and isolation is what makes shame unendurable.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Visual Irony and Juxtaposition',
        explanation: 'Brontë creates devastating irony by placing Brocklehurst\'s sermon about humility immediately next to his family\'s ostentatious display. He tells students to reject vanity while his daughters wear "velvet, silk, and furs" and elaborate "French-curled" hairstyles. The visual juxtaposition exposes hypocrisy more powerfully than direct author commentary could. Readers see the contradiction and draw their own conclusions about Brocklehurst\'s character and the ideology he represents.',
        example: 'After ordering girls\' natural curls cut off as "vanity," Brocklehurst\'s own daughters enter with elaborate artificial curls. The contrast is so blatant it borders on satire. Brontë trusts readers to recognize the hypocrisy without needing to state "this is hypocritical." The visual does the work.'
      },
      {
        name: 'Time Distortion and Subjective Experience',
        explanation: 'Brontë slows narrative time during Jane\'s humiliation, making readers experience the ordeal\'s duration. "I felt that half an hour had passed already" makes us feel the excruciating slowness. This technique creates empathy—we don\'t just know Jane suffers; we feel time stretching as she does. Conversely, Helen\'s comfort scene moves quickly, reflecting Jane\'s relief. Brontë uses narrative pacing to mirror emotional experience.',
        example: 'The humiliation scene is detailed, prolonged, minute-by-minute. The comfort scene afterward is brief, almost rushed. This isn\'t poor pacing—it\'s psychological realism. Suffering feels eternal; relief feels fleeting. Brontë makes narrative structure reflect experience.'
      },
      {
        name: 'Silent Communication and Non-Verbal Support',
        explanation: 'Helen\'s support is entirely non-verbal: she positions herself, makes eye contact, conveys solidarity through presence. Brontë shows that words aren\'t always necessary for meaningful communication. In fact, in situations where speaking up is dangerous, silent solidarity can be the most available form of resistance. This technique also demonstrates Helen\'s character—her support is quiet, steady, risking nothing dramatic but offering everything possible within her constraints.',
        example: 'Helen says nothing during the humiliation but "her look sustained me." Brontë trusts readers to understand the power of that look without explaining it. The restraint makes it more powerful—sometimes silence speaks louder than speech, especially in contexts where speech is controlled.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a student at a school assembly. The principal calls them up to the stage in front of the entire school. The principal announces that this student has been caught cheating, lying, or stealing (based on a report from a previous school). The student is told to stand there while the principal explains why everyone should avoid them, why they\'re untrustworthy, why teachers should watch them closely. The student stands on stage for what feels like forever while hundreds of peers watch. Some record it on phones. It will be on social media within hours. After, the student is certain their reputation is destroyed—no one will want to be their friend, everyone will assume the worst. But then one student approaches them afterward: "I don\'t care what they said. I know you\'re not like that." That one act of solidarity makes survival possible.',
    
    parallels: [
      '🔹 **Social Media Public Shaming**: Mr. Brocklehurst\'s theatrical humiliation mirrors modern social media call-outs and viral shaming. Both involve: making someone\'s alleged wrongdoing public, encouraging collective condemnation, damaging reputation through exposure, and creating lasting digital/social records. The psychology is identical—public humiliation as deterrent and punishment.',
      '🔹 **School Discipline and Public Consequences**: Some schools still use public disciplinary measures: calling students out in assemblies, posting names of rule-breakers, public detention lists. Like Lowood, these institutions claim it\'s about deterrence, but research shows public shaming rarely reforms behavior and often traumatizes, creating resentment rather than improvement.',
      '🔹 **Authority and Presumed Guilt**: Mr. Brocklehurst assumes Jane is guilty based solely on Mrs. Reed\'s word—he has no evidence. Today, when authority figures (police, bosses, administrators) receive accusations, they often presume guilt without investigation. Miss Temple models the alternative: listening to the accused, investigating claims, withholding judgment until evidence is gathered.',
      '🔹 **Hypocrisy of Leadership**: Brocklehurst imposes rules he doesn\'t follow—preaching poverty while living in luxury. Modern examples abound: CEOs preaching belt-tightening while taking bonuses, politicians preaching family values while having affairs, influencers preaching authenticity while using filters. The pattern persists: those with power often exempt themselves from rules they enforce on others.',
      '🔹 **The Power of One Ally**: Helen\'s solidarity mirrors research on resilience: having even ONE person who believes in you can prevent complete psychological breakdown. In bullying, trauma, or shaming situations, one supportive friend can be the difference between survival and collapse. This is why witness solidarity and speaking up for those being targeted matters enormously.'
    ],
    
    discussionPrompt: 'Have you witnessed or experienced public shaming (in person or online)? What was the purpose—correction or humiliation? Did it achieve its goal? When you see someone being publicly called out or shamed, what\'s your role as a witness? When does exposure serve justice, and when does it just harm?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '📢',
      name: 'Reputation and Truth',
      explanation: 'Jane has now experienced reputation destruction twice: Mrs. Reed slandering her to Mr. Brocklehurst, and Mr. Brocklehurst broadcasting that slander to Lowood. The novel explores: How do you prove you\'re trustworthy when authority figures have branded you a liar? Who decides reputation—authority or lived experience? Jane will spend the novel fighting for control of her own narrative, refusing to let others define her.'
    },
    {
      emoji: '👁️',
      name: 'Being Seen—Surveillance vs. Recognition',
      explanation: 'The novel repeatedly explores different modes of being seen. Mr. Brocklehurst\'s surveillance is punitive—watching to catch and condemn. Helen\'s witnessing is compassionate—seeing to support and validate. Miss Temple\'s observation is investigative—seeing to understand truth. Different modes of attention have radically different effects. Jane craves being truly seen (recognized for who she is) while fearing being watched (judged and found wanting).'
    },
    {
      emoji: '🤝',
      name: 'Friendship as Survival',
      explanation: 'Helen\'s loyalty during Jane\'s humiliation cements their friendship as essential to survival. Jane learns that one true friend can sustain you through institutional cruelty. This thread continues: later friendships (Miss Temple, Diana and Mary Rivers) will provide similar survival resources—not just emotional comfort but practical help and validation of reality against gaslighting systems.'
    },
    {
      emoji: '⚖️',
      name: 'Authority: Just vs. Unjust',
      explanation: 'This chapter juxtaposes two forms of authority: Mr. Brocklehurst (unjust—judges without investigation, wields power cruelly, operates hypocritically) and Miss Temple (just—listens before judging, treats people with dignity, investigates rather than assumes). Jane is learning to distinguish between legitimate and illegitimate authority—and that having authority doesn\'t make you right.'
    },
    {
      emoji: '🎭',
      name: 'Performance and Authenticity',
      explanation: 'Mr. Brocklehurst stages a performance—Jane on display, himself as moral authority, the audience as witnesses to her shame. But his performance is exposed as fraudulent by his family\'s appearance, which reveals his authentic values (wealth, status) beneath his performed values (humility, sacrifice). The novel asks repeatedly: Who is performing and who is authentic? What must you perform to survive vs. what can you express genuinely?'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Public Shaming: Punishment or Cruelty?',
      question: 'Mr. Brocklehurst publicly humiliates Jane to "warn" others and "correct" her behavior. Do public consequences ever serve legitimate purposes, or is public shaming inherently abusive? When (if ever) is making someone\'s mistakes public appropriate? What\'s the difference between accountability and humiliation?'
    },
    {
      title: 'Hypocrisy and Moral Authority',
      question: 'Mr. Brocklehurst preaches self-denial while his family wears luxury. Does his hypocrisy invalidate his authority? Can hypocritical people still make valid moral arguments? How do we evaluate whether someone\'s actions match their stated values? Should leaders be held to higher standards?'
    },
    {
      title: 'The Power of Witnessing',
      question: 'Helen can\'t stop Jane\'s humiliation but offers silent solidarity. How much does witnessing matter when you can\'t actually fix the situation? What\'s the difference between witnessing and being a passive bystander? What are your obligations when you see someone being harmed but can\'t stop it?'
    },
    {
      title: 'Authority and Presumed Guilt',
      question: 'Mr. Brocklehurst believes Mrs. Reed\'s accusation without investigating. Miss Temple promises to verify it before judging. Why do institutions often believe accusations from authority figures without requiring evidence? How should we balance believing accusers with investigating claims? What\'s due process, and who deserves it?'
    },
    {
      title: 'Reputation and Recovery',
      question: 'Jane believes her reputation at Lowood is permanently destroyed. Can damaged reputations be repaired? What does it take to rebuild trust after public accusation? Should Jane have to "prove" she\'s honest, or should others withhold judgment until they know her? Who bears the burden—the accused to prove innocence or the community to investigate fairly?'
    },
    {
      title: 'One Ally Changes Everything',
      question: 'Research shows that having even one supportive person can prevent breakdown during trauma. Why is Helen\'s friendship so powerful for Jane? What makes someone a good ally during shaming or bullying? When you see someone being targeted, what can you do even if you can\'t stop the harm?'
    },
    {
      title: 'Class and Different Rules',
      question: 'Brocklehurst\'s daughters wear luxury while orphan students are punished for vanity. Are there modern examples of different rules for different social classes? How do institutions justify treating poor or marginalized people differently than wealthy or powerful people? Is this ever legitimate, or always hypocritical?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'public-shaming-power',
      title: 'The Mechanics of Public Shaming: Why It\'s So Devastating',
      question: 'Why is public humiliation so much worse than private correction? What makes Mr. Brocklehurst\'s treatment of Jane particularly harmful?',
      aiResponse: `
**Public Shaming Is Designed to Destroy—And It Works**

When Mr. Brocklehurst forces Jane to stand on a stool while he broadcasts her alleged dishonesty to the entire school, he\'s not engaging in correction or education. He\'s performing social destruction. Understanding why public shaming is so devastating helps us recognize it—and resist it—in modern contexts.

**What Makes Public Shaming Different from Private Correction:**

**Private Correction:**
- One-on-one or small group
- Focus on behavior and improvement
- Preserves dignity and privacy
- Allows for explanation and dialogue
- Relationship remains intact
- Social standing unaffected

**Public Shaming:**
- Performed before audience
- Focus on character assassination and deterrence
- Destroys dignity through exposure
- No genuine dialogue (theatrical, not conversational)
- Relationship damaged or severed
- Social standing destroyed

**The Psychology of Public Humiliation:**

**Why It\'s So Traumatic:**

**1. Forced Perspective-Taking:**
You must see yourself through hostile eyes. Jane describes feeling "my wretchedness was exposed to the view of the whole school." She\'s not just experiencing humiliation—she\'s forced to witness others witnessing her humiliation. This doubling is psychologically devastating.

**2. Loss of Control:**
You can\'t leave, explain, defend yourself, or control the narrative. You\'re trapped in someone else\'s performance where you\'re the prop. Jane stands on the stool for half an hour with no agency—she can only endure.

**3. Social Death:**
Your reputation—your social existence—is being destroyed in real-time before witnesses. After public condemnation, especially by authority, you may become socially invisible or marked as untouchable. Jane believes no one will befriend her now.

**4. Permanent Record:**
Unlike private mistakes, public shaming creates lasting social memory. Everyone present will remember. At Lowood, Jane\'s first impression is now "liar" rather than anything she might have actually been. First impressions compound—hard to overcome.

**5. Time Distortion:**
Public humiliation feels endless. Jane notes "half an hour had passed already" as if astonished time moves so slowly. Research confirms: during acute shame, people experience profound time distortion. Minutes feel like hours.

**What Mr. Brocklehurst Does Specifically:**

**Theatrical Staging:**
- Stool elevates Jane (maximum visibility)
- Assembly ensures large audience
- Prolonged duration (half hour) maximizes suffering
- His position standing, moving, powerful vs. her frozen, exposed, powerless
- Theatrical performance, not conversation

**Language of Dehumanization:**
- "Interloper," "alien," "castaway"
- Not part of "true flock"—implies Jane is Other, not human like the rest
- Religious rhetoric makes condemnation seem righteous
- Labels Jane by alleged character flaw, not behavior

**No Due Process:**
- No investigation
- Jane can\'t defend herself
- Evidence is Mrs. Reed\'s word alone
- Judgment already rendered—this is sentencing, not trial

**Collective Targeting:**
- Warns entire school against Jane
- Encourages social exclusion
- Makes Jane everyone\'s problem/threat
- Isolates her before she can form any relationships

**Why This Works as Social Control:**

**The Goal Isn\'t Actually Jane:**

Public punishment is theater designed for the audience, not the punished individual:

**Message to Students:**
- "This could be you if you step out of line"
- Creates atmosphere of fear
- Encourages compliance through terror
- Teaches: authority is arbitrary and absolute

**Message to Teachers:**
- "This is how we handle problems"
- Demonstrates Brocklehurst\'s power
- Sets expectations for institutional culture
- Shows no mercy will be given

**Function for Institution:**
- Maintains control through fear
- Displaces collective anxiety onto one target
- Appears to "solve" problems through spectacle
- Reinforces hierarchy (Brocklehurst powerful, students powerless)

**Modern Parallels:**

**This Exact Pattern Persists:**

**Social Media Call-Outs:**
- Public exposure of alleged wrongdoing
- Audience participation (retweets, comments)
- Permanent digital record
- No due process or right of reply
- Viral nature creates massive audience
- Can destroy careers, relationships, mental health

**School Discipline:**
- Public consequences (names posted, assembly call-outs)
- Justified as "deterrent" (same excuse as Brocklehurst)
- Creates fear-based compliance
- Research shows it doesn\'t work and harms those shamed

**Workplace:**
- Public firings or call-outs in meetings
- Email blasts about someone\'s mistakes
- Using one person as "example"
- Creates toxic culture of fear

**What Research Shows:**

**Public Shaming Doesn\'t Work:**

**Intended Goals (claimed):**
- Reform the individual
- Deter others
- Maintain community standards

**Actual Effects:**
- Individual: trauma, resentment, not reform
- Others: fear, not respect
- Community: toxic culture, not healthy norms

**Better Alternatives:**

**What Actually Works:**

**Restorative Justice:**
- Private conversations
- Focus on harm and repair
- Involve affected parties
- Preserve dignity while ensuring accountability

**Due Process:**
- Investigation before judgment
- Right to respond to accusations
- Evidence-based decisions
- Proportional consequences

**Miss Temple\'s Approach (shown later in chapter):**
- Listens to Jane\'s side
- Promises to investigate
- Treats Jane with dignity regardless of alleged crime
- Reserves judgment until evidence gathered

**For Survivors of Public Shaming:**

**What Helps:**

**One Ally (Helen\'s Role):**
- Even one person who believes you sustains hope
- Witnessing says "you\'re not alone"
- Validates that shame was unjust

**Separation of Self from Accusation:**
- What was said about you ≠ who you are
- Authority\'s words don\'t define reality
- Those who know you will judge by experience, not proclamation

**Time and Action:**
- Living honestly eventually contradicts false narrative
- Behavior over time matters more than single accusations
- Reputation can be rebuilt through consistency

**For Witnesses:**

**What To Do:**

**Bear Witness:**
- Don\'t look away or participate
- Make eye contact if safe
- Presence matters

**Offer Private Support:**
- Reach out afterward
- Believe their experience
- Offer friendship

**Question the Narrative:**
- Don\'t automatically believe accusations
- Judge people by how you experience them
- Remember context and power dynamics

**For Discussion:**

Have you seen public shaming (in person or online)? What was the stated purpose vs. the actual effect? When you\'ve been called out publicly, how did it feel different from private correction? What helped you recover?

**The Takeaway:**

Public shaming is a power tool, not a justice tool. It\'s designed to destroy social standing, enforce conformity through fear, and demonstrate authority\'s power—not to correct behavior or promote growth. Mr. Brocklehurst\'s humiliation of Jane reveals these mechanics clearly: the theatrical staging, prolonged duration, dehumanizing language, and lack of due process all work together to create maximum psychological harm. Understanding how public shaming functions helps us recognize it in modern forms—and refuse to participate in it ourselves, instead offering the kind of solidarity Helen demonstrates.
      `
    },
    {
      id: 'helen-solidarity',
      title: 'Helen\'s Radical Act: Solidarity in the Face of Authority',
      question: 'Helen defies the collective shaming by approaching Jane afterward. Why is her solidarity so powerful? What makes standing with the condemned person such a radical act?',
      aiResponse: `
**The Power of Standing With: Why Helen\'s Act Matters**

After Mr. Brocklehurst\'s public humiliation, Jane believes she\'s been socially destroyed—no one will befriend her now. Then Helen approaches with a smile, offering bread and coffee. This simple act is revolutionary. Understanding why helps us recognize solidarity\'s power.

**What Helen Does:**
- Approaches Jane publicly (visible to all)
- Smiles (signals approval, not condemnation)
- Offers practical care (food and drink)
- Stays with Jane (companionship, not quick gesture)
- Speaks kindly (verbal affirmation)

**Why This Is Radical:**

**1. Defies Authority:**
Mr. Brocklehurst commanded social exclusion. Helen disobeys. This is rebellion—quiet but clear.

**2. Accepts Social Risk:**
Associating with condemned person could mark Helen as suspicious too. She chooses Jane over her own safety.

**3. Breaks Collective Compliance:**
Everyone else watched silently or avoided Jane. Helen breaks the group\'s tacit agreement to participate in shaming.

**4. Validates Jane\'s Worth:**
Helen\'s approach says: "You\'re still worthy of friendship, respect, care." This counters Brocklehurst\'s message of unworthiness.

**What Solidarity Provides:**

**To the Shamed Person:**
- Proof they\'re not alone
- Someone sees them as human
- Social existence restored
- Hope that connection survives judgment

**To Observers:**
- Models courage and resistance
- Shows alternative response is possible
- Challenges collective participation
- Demonstrates cost of solidarity is bearable

**Modern Applications:**

When someone is publicly condemned (online, at work, in community), standing with them is radical act requiring courage. Helen shows us what solidarity looks like.

**For Discussion:**

When have you stood with someone being condemned? What stopped you when you didn\'t? What does real solidarity require beyond words?

**The Takeaway:**

Helen\'s approach to Jane is quiet revolution. While everyone else participates in Jane\'s social death through silence or avoidance, Helen chooses presence. This teaches: solidarity in the face of authority is powerful because it breaks the isolation that gives shaming its force.
      `
    },
    {
      id: 'miss-temple-intervention',
      title: 'Miss Temple\'s Different Authority: When Power Chooses Justice',
      question: 'Miss Temple investigates Jane\'s case and publicly clears her name. How does her use of authority differ from Brocklehurst\'s? What does this teach about ethical leadership?',
      aiResponse: `
**Authority Can Heal or Harm: Miss Temple vs. Mr. Brocklehurst**

Miss Temple does what Mr. Brocklehurst did not: investigate before judging. She listens to Jane, contacts witnesses, and when she determines Jane is truthful, she publicly vindicates her. This contrast teaches us about ethical uses of power.

**What Miss Temple Does Differently:**

**Due Process:**
- Invites Jane to tell her side
- Investigates claims independently
- Contacts Mr. Lloyd for verification
- Weighs evidence before concluding

**Private-Then-Public:**
- Investigates privately (protecting Jane during uncertainty)
- Vindicates publicly (repairing public damage publicly)
- Matching scale: public harm requires public healing

**Restorative Justice:**
- Focuses on truth and repair
- Restores Jane\'s reputation
- Doesn\'t humiliate Brocklehurst in revenge
- Aims to heal, not dominate

**What This Teaches About Leadership:**

**Ethical Authority:**
- Investigates before judging
- Listens to less powerful
- Uses power to protect, not dominate
- Takes responsibility for using power justly

**Restorative vs. Punitive:**
Brocklehurst uses authority to punish and control. Temple uses authority to investigate and restore. Both have power—they choose different purposes.

**For Discussion:**

Have you experienced authority figures who used power to investigate fairly vs. those who judged quickly? What made the difference in how you experienced their authority?

**The Takeaway:**

Miss Temple demonstrates that authority can be used ethically: investigate fairly, listen to all sides, repair harm caused by false accusations, and use power to protect rather than dominate. Her intervention shows Jane—and readers—that not all authority is corrupt.
      `
    },
    {
      id: 'reputation-repair',
      title: 'Clearing Your Name: The Long Process of Reputation Repair',
      question: 'It takes weeks for Miss Temple to investigate and clear Jane\'s name. Why does reputation repair take so much longer than reputation damage?',
      aiResponse: `
**The Asymmetry of Reputation: Easy to Destroy, Hard to Rebuild**

Mr. Brocklehurst destroys Jane\'s reputation in 30 minutes. Miss Temple takes weeks to restore it. This asymmetry is universal: reputation damage is quick; reputation repair is slow. Understanding why helps us appreciate the stakes.

**Why Damage Is Fast:**

**1. Accusations Are Simple:**
One person says: "She\'s a liar." Done. No evidence needed if speaker has authority.

**2. Negativity Bias:**
Humans remember bad information more than good. One accusation outweighs multiple positive experiences.

**3. Social Spread:**
Bad news travels fast. Everyone tells stories of misconduct; few tell stories of vindication.

**4. First Impressions Stick:**
Once labeled, the label becomes identity. Everything gets interpreted through that lens.

**Why Repair Is Slow:**

**1. Requires Investigation:**
Truth-finding takes time: gathering evidence, contacting witnesses, verifying claims. Temple must write to Mr. Lloyd and wait for response.

**2. Needs Public Correction:**
Must reach everyone who heard accusation. Some may never hear vindication if they weren\'t present.

**3. Fights Cognitive Bias:**
People resist changing minds. Once they believed accusation, vindication feels like admitting they were wrong.

**4. Demands Consistent Behavior:**
Jane must prove truthfulness over time. One slip could seem to confirm original accusation.

**The Unfair Math:**
- Damage: 1 accusation by 1 person = social death
- Repair: Multiple people, multiple occasions, sustained time = partial recovery

**Modern Parallels:**

Cancel culture, false accusations, mugshot publishing, criminal records—all show this asymmetry. Damage is instant; repair requires sustained effort and may never be complete.

**For Discussion:**

If you were falsely accused, what would you need to clear your name? What makes some false accusations almost impossible to overcome?

**The Takeaway:**

Jane learns painful lesson: defending yourself takes far more effort than attacking you takes. Miss Temple\'s investigation shows that while reputation repair is possible, it requires allies with authority, time for investigation, and public vindication that matches public accusation. This asymmetry is why false accusations are so devastating—and why we should be cautious about believing accusations without evidence.
      `
    },
    {
      id: 'institutional-hypocrisy',
      title: 'Brocklehurst\'s Daughters: When Rules Only Apply to the Powerless',
      question: 'Mr. Brocklehurst preaches deprivation for Lowood girls but his own daughters wear expensive clothes and fancy hairstyles. What does this hypocrisy reveal about power and institutional systems?',
      aiResponse: `
**"Rules for Thee, Not for Me": How Power Operates Through Double Standards**

When Mr. Brocklehurst arrives at Lowood with his wife and daughters dressed in expensive furs, silks, and elaborate hairstyles, the contradiction is stark: he preaches harsh deprivation for poor girls while his family lives in luxury. This isn\'t personal hypocrisy—it\'s how power systems work.

**The Hypocrisy on Display:**

**For Lowood Girls:**
- "Vanity must be suppressed"
- Plain clothes, minimal adornment
- Cut naturally curly hair (too "worldly")
- Food deprivation "mortifies the flesh"
- Suffering builds "Christian character"

**For Brocklehurst\'s Daughters:**
- Elaborate curls and false hairpieces
- Expensive fabrics and jewelry
- Fine food and comfort
- No suffering required
- Luxury = their right

**What This Reveals:**

**1. Class-Based Morality:**
Different rules for different classes. Humility and deprivation are virtues for poor people; luxury is natural right for wealthy people.

**2. Control, Not Principle:**
Brocklehurst doesn\'t believe deprivation is inherently good. He believes it\'s good for controlling poor people. His family\'s comfort proves this.

**3. Systemic, Not Personal:**
This isn\'t one hypocritical man. It\'s how institutions maintain hierarchies: different rules for different people, justified through ideology.

**4. Moral Cover for Economic Exploitation:**
"Christian charity" language disguises economic exploitation. Spending minimal money on poor children while living luxuriously is theft disguised as virtue.

**How This Works in Systems:**

**The Pattern:**
- Authority figures create rules
- Rules apply to those below
- Rules don\'t apply to authority
- Ideology justifies this ("they need discipline," "we need to set example")

**Modern Examples:**
- CEOs cutting employee benefits while taking bonuses
- Politicians exempting themselves from laws they pass
- School administrators with different standards for their children
- Any "do as I say, not as I do" hierarchy

**For Discussion:**

Where have you seen double standards where powerful people exempt themselves from rules they enforce on others? What justifications do they offer?

**The Takeaway:**

Brocklehurst\'s hypocrisy isn\'t personal flaw—it\'s systemic feature. Power maintains itself through double standards: harsh rules control powerless, exceptions benefit powerful. The ideology (Christian charity, character-building) provides moral cover for economic and social exploitation. Jane recognizes this injustice even if she can\'t articulate it fully yet. Seeing this pattern helps us recognize it in modern institutions.
      `
    },
    {
      id: 'shame-vs-guilt',
      title: 'Shame vs. Guilt: Understanding Different Types of Self-Condemnation',
      question: 'Jane feels shame (I am bad) after Brocklehurst\'s attack, not just guilt (I did something bad). What\'s the difference, and why does it matter?',
      aiResponse: `
**Shame vs. Guilt: Two Different Experiences of Wrongdoing**

After the public humiliation, Jane doesn\'t just feel she made a mistake—she feels she IS a mistake. This is the difference between guilt and shame, and understanding it helps us process these experiences differently.

**Guilt: "I did something bad"**
- Focuses on behavior/action
- "I made a mistake"
- "I hurt someone"
- "I broke a rule"
- Can be addressed by: apology, restitution, changed behavior

**Shame: "I am bad"**
- Focuses on self/identity
- "I\'m defective"
- "I\'m unworthy"
- "I\'m fundamentally flawed"
- Harder to address: feels unchangeable

**Why Shame Is More Toxic:**

**Guilt Can Be Productive:**
- Motivates repair and change
- "I did wrong, I\'ll do better"
- Maintains sense of self as good person who made mistake
- Focuses on specific actions

**Shame Is Often Paralyzing:**
- No clear path to repair
- "If I\'m fundamentally bad, why try?"
- Damages core sense of self
- Generalizes beyond specific actions

**What Brocklehurst Creates:**

**His Language Targets Identity:**
- "Interloper" (you don\'t belong)
- "Alien" (you\'re not one of us)
- "Castaway" (you\'re fundamentally different/bad)
- Not: "You lied" but "You ARE a liar"

**Result:** Jane feels shame, not guilt. She believes she IS bad, not that she did something bad (especially since she didn\'t even do what she\'s accused of).

**The Path to Healing:**

**What Jane Needs:**

**From Shame:**
- Someone who sees her as fundamentally good
- Affirmation of her worth as person
- Separation of identity from accusation

**This Is What Helen and Miss Temple Provide:**

**Helen:** "You\'re good. Brocklehurst is wrong about who you are."

**Miss Temple:** Investigates and proves Jane truthful, restoring her identity as honest person.

**Modern Understanding:**

**Research Shows:**

**Guilt:**
- Correlates with making amends
- Motivates positive change
- Maintains relationships
- Associated with better outcomes

**Shame:**
- Correlates with: depression, anxiety, addiction, aggression
- Leads to hiding, not change
- Damages relationships
- Associated with worse outcomes

**Shame-Based Systems:**
Institutions that use shame (public humiliation, identity attacks, character assassination) don\'t produce better behavior—they produce damaged people.

**Guilt-Based Systems:**
Institutions that focus on behavior ("You made a mistake, here\'s how to do better") promote growth and change.

**For Discussion:**

Think about times you felt guilt vs. shame. How did each affect your ability to change or repair? When have you accidentally shamed someone when you meant to correct a behavior?

**The Takeaway:**

Mr. Brocklehurst\'s attack creates shame, not guilt, by targeting Jane\'s identity rather than specific behaviors. Shame says "you ARE bad" and is psychologically devastating because it offers no path to redemption. Guilt says "you DID something bad" and can motivate change. Understanding this difference helps us: (1) Recognize when we\'re being shamed vs. experiencing appropriate guilt; (2) Help others by affirming their worth while addressing behaviors; (3) Create systems focused on growth, not condemnation. Helen and Miss Temple heal Jane\'s shame by affirming her fundamental goodness—this is the only cure for shame.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Perspective Flip: Rewriting from the Audience\'s View',
      description: 'Rewrite Jane\'s humiliation scene from the perspective of another student watching in the audience. Show: their initial reaction, their evolving feelings as the punishment continues, their thoughts about Mr. Brocklehurst\'s speech, their observation of Helen\'s response, and their decision about whether to approach Jane afterward. Use this exercise to explore: What does witnessing injustice feel like? What prevents people from intervening? What does it take to be an ally? Your narrator should feel psychologically real—not just heroic or cowardly, but genuinely conflicted.',
      purpose: 'This exercise develops perspective-taking, empathy, and understanding of bystander dynamics. Students explore why witnessing is complicated: fear of becoming a target yourself, uncertainty about what\'s true, social pressure, and moral conflict. They practice showing internal struggle and moral reasoning through character perspective.'
    },
    
    activity: {
      title: 'Public vs. Private Consequences: Analyzing School Discipline',
      description: 'Present students with scenarios of rule-breaking (mild: dress code violation, moderate: cheating, serious: bullying). For each, have students design two consequence systems: (1) Public (announced, visible to peers, collective awareness) and (2) Private (confidential, between student/teachers/parents). Analyze each approach: What\'s the stated goal? Who benefits? What are likely psychological effects? What does research say? Then examine your own school\'s discipline policies: Which consequences are public? Which private? Why? Have students propose evidence-based policies that balance accountability with dignity.',
      materials: 'Scenario cards, research summaries on shame vs. guilt, school policy handbook, chart comparing public/private consequences'
    },
    
    crossCurricular: {
      title: 'Psychology of Shame and Social Psychology',
      description: 'Partner with psychology and sociology classes for unit on shame, guilt, and social control. Psychology class covers: difference between shame (I am bad) and guilt (I did bad), effects of public humiliation on mental health, trauma responses to social rejection, resilience factors. Sociology examines: social control mechanisms, how institutions use shame, public punishment throughout history, modern cancel culture. English class reads Chapter 7 and analyzes Brocklehurst\'s tactics and effects. Students synthesize: Why do institutions use public shaming despite evidence it harms? What alternatives exist? How do we balance accountability with human dignity?',
      subjects: ['Psychology', 'Sociology', 'Criminology', 'Ethics']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Accountability vs. Humiliation: Designing Just Consequences',
    prompt: 'Mr. Brocklehurst claims he\'s warning the school about Jane for their protection and correcting Jane\'s dishonesty. Your task: Develop an ethical framework for distinguishing between legitimate accountability (addressing harmful behavior, protecting community, promoting growth) and unjust humiliation (causing harm beyond the offense, violating dignity, serving power rather than justice). Then apply your framework to evaluate Brocklehurst\'s approach and design an alternative response that would actually serve justice.',
    
    guidingQuestions: [
      'What legitimate concerns might Brocklehurst have if he genuinely believed Jane was dishonest? How should schools/institutions handle students with concerning histories? What obligations exist to both the individual and the community?',
      'What distinguishes correction from humiliation? Consider: duration, audience, language used, opportunity for defense, proportionality to offense, stated goal vs. actual effect. Develop specific criteria.',
      'Mr. Brocklehurst uses public shaming. What are alternatives? Private conversation, investigation, restorative justice, due process? For each alternative, what are benefits, limitations, and contexts where appropriate?',
      'Who benefits from public shaming? Who is harmed? Map all stakeholders (Jane, other students, teachers, Brocklehurst, institution) and assess how each is affected by Brocklehurst\'s choice versus alternatives.'
    ],
    
    thinkingFramework: {
      analyze: 'Break down Brocklehurst\'s approach: What does he do specifically (theatrical staging, language, duration, audience, lack of investigation)? What does he claim his goals are (protection, correction)? What are the actual effects (Jane\'s trauma, school\'s fear, reputation destruction)? Compare stated goals to actual outcomes.',
      evaluate: 'Using your framework (which must have clear criteria for just vs. unjust consequences), assess Brocklehurst\'s approach. Is it proportional? Does it preserve dignity? Does it allow for defense? Does it serve justice or power? Does it reform or just harm? Be specific about which criteria he violates and why each matters.',
      synthesize: 'Design an alternative response to Mrs. Reed\'s accusation that would balance: (1) Taking concerns seriously (accusation deserves attention), (2) Due process (Jane\'s right to defense), (3) Community safety (if concern is real), (4) Individual dignity (Jane remains human regardless), (5) Effectiveness (actually addresses behavior). Then generalize: What principles should guide institutional responses to accusations? Apply to modern contexts (school discipline, workplace HR, social media call-outs).'
    },
    
    expectedDepth: 'Strong responses will: (1) Articulate clear ethical framework with specific criteria; (2) Apply framework consistently and thoroughly to Brocklehurst\'s approach; (3) Acknowledge complexity—legitimate concerns exist about how to handle concerning histories while preserving dignity; (4) Design alternative that actually addresses those concerns without humiliation; (5) Show awareness of stakeholder impacts and unintended consequences; (6) Connect to modern institutional practices and research on effective vs. harmful consequences; (7) Recognize tension between individual rights and community safety—and show how both can be honored. This is applied ethics using literature as case study.',
    
    classroomApplication: 'Works as: Policy design project (groups create discipline policies), Debate (defend Brocklehurst\'s approach vs. alternatives), Case study analysis (compare to real school discipline cases), Essay (analyze and propose alternatives). Time: 3-4 class periods. Can connect to civics (due process), criminology (punishment vs. rehabilitation), or education (restorative justice in schools). Particularly timely given current debates about cancel culture, public callouts, and accountability mechanisms.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature\'s importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(7),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🫖',
    title: 'Next Time: Chapter 8 — Miss Temple\'s Room',
    preview: 'In Miss Temple\'s private room, Jane finally has the chance to tell her side of the story. Miss Temple listens carefully, promises to investigate, and treats both Jane and Helen with unexpected kindness—offering them tea and cake in a space that feels like sanctuary from Lowood\'s harshness. Jane learns what it means to be believed, and discovers that authority figures can be just. But this chapter also deepens Jane\'s friendship with Helen, as they share an evening of conversation that will shape Jane\'s understanding of forgiveness, faith, and what it means to be good.',
    hookQuestion: 'Will Miss Temple believe Jane? Can reputation be restored after public destruction? And what will Jane learn from Helen about facing the world with grace?'
  }
}

