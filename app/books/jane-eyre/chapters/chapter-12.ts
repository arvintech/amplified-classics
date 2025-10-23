/**
 * Jane Eyre - CHAPTER 12
 * 
 * Jane settles into Thornfield's routine but feels restless, then meets Mr. Rochester
 * for the first time on a winter evening when his horse slips on ice.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter12: ChapterData = {
  number: 12,
  title: '',
  
  readingTime: 20,
  pages: 16,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Jane settles into Thornfield\'s comfortable routine but feels increasingly restless, then has an unexpected first meeting with Mr. Rochester when his horse slips on ice during her evening walk.',
    
    full: [
      'Three months pass at Thornfield in pleasant routine. Jane teaches Adèle, who proves tractable despite her initial superficiality. Mrs. Fairfax is unfailingly kind. The work is light, the house comfortable, life peaceful. Yet Jane feels the same restlessness that plagued her at Lowood. She needs more than domestic comfort—she needs challenge, variety, experience. She takes to walking to the third floor and pacing the corridor while Adèle plays with Sophie, looking out at the distant hills and longing for broader life. This is where she hears Grace Poole\'s strange laugh most often, though Mrs. Fairfax continues to dismiss it as nothing unusual.',
      
      'On a cold January afternoon, Jane walks to Hay to post a letter for Mrs. Fairfax. It\'s nearly sunset, and the lane is frozen. She sits on a stile, enjoying the solitude and the beauty of the winter landscape—the pale moon rising, the darkening sky, the frozen path. The peace is broken by the sound of hooves. A horse appears around the bend with a large dog running alongside. As horse and rider approach, the horse slips on ice and both horse and rider fall. Jane rushes to help.',
      
      'The rider is a dark, stern-looking man—not young, not handsome, with rough features and a commanding manner. He\'s injured his ankle but refuses to show weakness. He questions Jane brusquely: Who is she? Where does she live? Why is she out alone? Jane answers honestly and directly, matching his abruptness with her own plainness. She helps him remount despite his protests, and he rides off toward Thornfield without thanks. Only later does Jane realize the mysterious rider must have been Mr. Rochester—her employer, finally returned home. The dog she saw, Pilot, confirms it when she returns to find him at Thornfield.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Unconventional First Meeting',
      definition: 'A narrative technique where characters meet in unexpected circumstances that subvert social conventions and establish the terms of their relationship.',
      context: 'Jane and Rochester meet not in his drawing room where social hierarchy would be clear (master-governess, employer-employee), but on a dark lane where both are simply humans—one needing help, one offering it. Rochester doesn\'t know Jane is his employee; Jane doesn\'t know he is her employer. They meet as equals in an emergency.',
      whyItMatters: 'This unconventional meeting establishes the foundation of their relationship: they will always relate as equals in spirit even though social convention demands hierarchy. By having them meet outside the house, outside social roles, Brontë creates a relationship based on personal connection rather than social position. The meeting also reveals character: Jane is brave and competent; Rochester is proud and difficult but not ultimately imperious. The fall from the horse symbolizes Rochester\'s need for help and Jane\'s ability to provide it—inverting expected power dynamics.'
    },
    {
      term: 'Fairy Tale and Folklore Elements',
      definition: 'The incorporation of magical, supernatural, or folkloric imagery that creates symbolic meaning beyond literal events.',
      context: 'Jane sits on a stile in the gathering dusk thinking about the "Gytrash"—a folklore creature that takes the form of horse, mule, or large dog and haunts lonely ways. When she hears hoofbeats and sees a large dog followed by a horseman, she half-expects something supernatural. The Gothic atmosphere, the liminal time (twilight), the liminal space (crossroads), all evoke fairy tale.',
      whyItMatters: 'Brontë uses fairy tale elements to add symbolic depth to naturalistic events. The Gytrash story suggests that Rochester is something uncanny—not an ordinary man but something potentially dangerous and magical. The fact that he appears precisely when Jane is thinking about supernatural beings suggests he is fated or enchanted in some way. Throughout the novel, Brontë will blend realism with fairy tale and Gothic elements, creating a narrative that operates on both literal and symbolic levels simultaneously.'
    },
    {
      term: 'The Restless Woman: Feminist Consciousness',
      definition: 'The articulation of women\'s intellectual and emotional frustration with limited social roles, recognizing personal discontent as political issue.',
      context: 'Jane explicitly states: "Women are supposed to be very calm generally: but women feel just as men feel...It is thoughtless to condemn them, or laugh at them, if they seek to do more or learn more than custom has pronounced necessary for their sex." She recognizes that her restlessness is not personal failing but shared condition—"millions are in silent revolt."',
      whyItMatters: 'This is one of Victorian literature\'s most direct feminist statements. Jane connects her personal experience to political analysis: women\'s constrained lives are unjust, women\'s desires for broader experience are legitimate, and society\'s denial of these needs is oppressive. The fact that Jane articulates this while pacing the third floor—confined within domestic space but refusing to be satisfied by it—makes the statement both abstract theory and embodied experience. This feminist consciousness will drive Jane\'s insistence on equality with Rochester.'
    },
    {
      term: 'Direct Address and Plain Speaking',
      definition: 'A communication style characterized by honesty, clarity, and refusal of social pleasantries or evasion.',
      context: 'When Rochester asks if Jane is afraid of him, she says simply, "No, sir." When he asks where she lives, she tells him directly. She doesn\'t flatter, doesn\'t defer unnecessarily, doesn\'t perform conventional femininity. Rochester responds well to this—he seems to appreciate her directness.',
      whyItMatters: 'Plain speaking becomes the foundation of Jane and Rochester\'s relationship. Both reject social pleasantries and conventional romance rhetoric in favor of direct, sometimes harsh, honesty. This communication style is both empowering (Jane doesn\'t have to perform submissive femininity) and dangerous (it violates social expectations for governess-employer relations). Jane\'s refusal to modify her honest speech for social propriety is feminist act—she insists on being treated as rational equal rather than performing female deference.'
    },
    {
      term: 'Social Invisibility of Governesses',
      definition: 'The paradoxical social position where governesses were expected to be present but unnoticed, educated but not equal, part of household but not family.',
      context: 'Rochester doesn\'t recognize Jane as his governess even though she tells him she lives at Thornfield. He assumes she\'s a village girl or servant, not considering she might be the genteel governess Mrs. Fairfax mentioned. Later, when he realizes who she is, he seems surprised—he hadn\'t really "seen" her as individual.',
      whyItMatters: 'Governesses occupied liminal social space: too educated to be servants, too poor to be ladies. They were meant to be invisible—present to serve but not to be noticed as persons. Rochester\'s failure to recognize Jane illustrates this social invisibility. However, their meeting outside social context means he encounters her as person first, employee second. This will make their later relationship possible—he has seen her as individual before seeing her as governess, so he cannot fully reduce her to social role.'
    },
    {
      term: 'Ice and Instability: Symbolic Landscape',
      definition: 'The use of natural settings to represent psychological or thematic states, where external environment mirrors internal conditions.',
      context: 'The meeting occurs on frozen ground in twilight—liminal time, unstable surface. The horse slips on ice, throwing Rochester. The landscape is beautiful but treacherous: what looks solid is actually slippery and dangerous.',
      whyItMatters: 'The frozen, unstable ground symbolizes the relationship Jane and Rochester are beginning: beautiful, treacherous, easy to fall. The ice represents the danger of their eventual romance—what seems solid (social hierarchy, Rochester\'s authority, conventional morality) will prove unstable. The twilight timing reinforces liminality—they meet in in-between time, in-between space, in-between social roles. This Gothic landscape technique uses external setting to foreshadow internal psychological realities.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'Jane has settled into Thornfield but remains restless. Despite comfort and kindness, she needs more than domestic routine—she explicitly articulates feminist critique of women\'s limited lives. When she encounters Rochester on the lane, she rises to the occasion: calm, competent, direct. She doesn\'t perform deference or conventional femininity. She helps him matter-of-factly, speaks honestly when questioned, and doesn\'t seek thanks or approval. The encounter reveals Jane\'s core qualities: bravery, capability, directness, and refusal to be diminished by social hierarchy. She meets Rochester as equal in emergency, establishing the dynamic that will characterize their relationship. Her ability to speak plainly—without flattery or false modesty—will prove crucial to their connection.',
      keyTrait: {
        emoji: '🎯',
        text: 'Direct Competence'
      }
    },
    {
      name: 'Edward Rochester',
      development: 'Rochester makes his first appearance—not as the master receiving his governess in his drawing room, but as a fallen rider accepting help from a stranger on a dark lane. We see him immediately as proud (refusing to show weakness despite injury), commanding (questioning Jane brusquely), and unconventional (appreciating Jane\'s directness rather than demanding deference). He\'s described as "not handsome" but powerful—dark, stern, rough-featured, with energy and intelligence in his manner. His fall from the horse symbolizes his vulnerability and his need for help he doesn\'t want to acknowledge. His failure to recognize Jane as his governess reveals both his social blindness (governesses are invisible) and establishes their relationship outside conventional hierarchy. This first encounter foreshadows everything: he will need Jane\'s help, she will provide it directly without performance, and their relationship will always have this quality of emergency intimacy.',
      keyTrait: {
        emoji: '⚡',
        text: 'Proud Intensity'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // Most significant passages with analysis
  // ===================================================================
  quotes: [
    {
      text: 'It is in vain to say human beings ought to be satisfied with tranquillity: they must have action; and they will make it if they cannot find it.',
      analysis: 'Jane\'s meditation continues from Chapter 11, but here she moves from describing her own restlessness to making universal claim about human nature. The phrase "it is in vain to say" directly challenges ideology—she\'s refuting the claim that people (especially women) should be content with peace and safety. The statement "they will make it if they cannot find it" suggests humans are driven to create action, challenge, experience—we cannot simply accept passive existence. This sets up Jane\'s character arc: she will not settle for safety and comfort at the cost of passion and meaning. It also foreshadows the dramatic action of the novel—Jane will "make" action by engaging with Rochester, by leaving when necessary, by insisting on her terms. This is radical psychology for 1847: asserting that humans need challenge and risk, not just security and routine.'
    },
    {
      text: 'I was quite alone, and the only sound near me was the crackling of a juniper fire in the grate.',
      analysis: 'This deceptively simple sentence establishes Jane\'s solitude at Thornfield before Rochester\'s arrival. The "crackling" fire is the only company—natural, impersonal sound rather than human connection. The isolation is both peaceful and oppressive. Jane is safe, warm, alone—and unfulfilled. This moment of quiet domesticity will be shattered by Rochester\'s arrival, which brings noise, conflict, passion, and danger. The contrast between the peaceful fire and the coming storm of relationship shows Jane\'s dilemma: she could have tranquility without meaning, or passion with risk. She consistently chooses the latter.'
    },
    {
      text: 'I heard a horse coming; the windings of the lane yet hid it, but it approached. I was just leaving the stile; yet, as the path was narrow, I sat still to let it go by. In those days I was young, and all sorts of fancies bright and dark tenanted my mind.',
      analysis: 'This passage builds suspense through sensory detail and psychological depth. Jane hears before seeing—creating anticipation. The lane\'s "windings" hide the approaching rider, making the encounter feel fated or mysterious. Jane\'s decision to "sit still" is both practical (narrow path) and symbolic (she\'s waiting for something to happen in her life). The acknowledgment "In those days I was young" is adult Jane narrating, looking back with knowledge of what came next—creating dramatic irony. The phrase "all sorts of fancies bright and dark tenanted my mind" suggests Jane\'s imagination was active, ready for romance or danger. The use of "tenanted" (inhabited, occupied) suggests these fancies were not fleeting but dwelling in her consciousness. This is a liminal moment: Jane is literally on a threshold (stile), at twilight, between her known life and unknown future, ready for transformation.'
    },
    {
      text: 'The man, the human being, broke the spell at once. Nothing ever rode the Gytrash: it was always alone; and goblins, to my notions, though they might tenant the dumb carcasses of beasts, could scarce covet shelter in the commonplace human form.',
      analysis: 'Jane\'s disappointment that the supernatural Gytrash is merely human is ironically funny and psychologically revealing. She wanted magic, mystery, fairy tale—and got ordinary reality. The phrase "the man, the human being, broke the spell" suggests Jane experienced moment of enchantment that rationality dissolved. However, this is dramatically ironic: Rochester will prove to be anything but "commonplace." The encounter will have exactly the quality of magic and fate Jane half-expected. Brontë is playing with Gothic and fairy tale conventions—the scene has folkloric atmosphere, but the participants are ostensibly realistic humans. Yet the relationship that begins here will have qualities of both realism and enchantment. Jane learns that "ordinary" human form can indeed contain extraordinary experience. The Gytrash imagery also foreshadows Rochester\'s secrets—he does have something monstrous or uncanny about him, just not in the way Jane initially imagined.'
    }
  ],
  
  // ===================================================================
  // MODERN ADAPTATION
  // ===================================================================
  modernAdaptation: {
    setting: 'Picture Jane as a young woman in her twenties working as a nanny or private tutor for an affluent family—comfortable job, nice house, kind employer (Mrs. Fairfax), but she feels trapped by routine. She spends evenings scrolling through social media seeing everyone else living exciting lives while she\'s isolated in the suburbs teaching a spoiled kid. She posts on Reddit or TikTok about feeling restless despite having everything she should want. Then one evening she\'s out on a walk (getting steps, listening to a podcast) when a cyclist or someone on an e-scooter wipes out on ice right in front of her. She helps them up—and it\'s her employer, the tech CEO or entrepreneur or lawyer she\'s never met because he\'s always traveling. He\'s brusque, doesn\'t thank her properly, asks sharp questions. She answers directly without the usual deference service workers give wealthy employers. He\'s intrigued by someone who doesn\'t perform for him. Later when she gets back to the house, she realizes who he is.',
    
    parallels: [
      '📱 **Restlessness Despite Comfort**: Jane pacing the third floor feeling trapped = scrolling through social media at night, seeing others living exciting lives, feeling your comfortable job/relationship is a comfortable prison',
      '🚶‍♀️ **The Solo Walk**: Jane walking alone to post a letter = needing to get out of the house, taking long walks with podcast/music, the only solo time you get in an overwhelming life',
      '🐕 **The Dog**: Pilot appearing before Rochester = seeing someone\'s pet and realizing it belongs to someone you know, the dog as introduction to a person',
      '🚴 **The Fall**: Horse slipping on ice = cyclist/scooter crash, car sliding on ice, anyone suddenly vulnerable and needing help in an emergency',
      '👤 **Meeting Outside Roles**: Not knowing each other\'s social positions = meeting someone at a bar, concert, or random encounter before finding out they\'re your new boss, landlord, or other authority figure',
      '💬 **Plain Speaking**: Jane\'s direct answers without flattery = not performing customer service voice, speaking honestly without code-switching, refusing to be deferential just because someone has power',
      '🌅 **Twilight Timing**: Meeting at dusk, in-between time = late-night encounters when social guard is down, conversations in liminal spaces (airports, bars, late night diners) where normal rules suspend',
      '🔮 **Expecting Magic**: Jane thinking about the Gytrash = checking your horoscope, feeling like something significant is about to happen, that sense before major life change when reality feels magical'
    ],
    
    discussionPrompt: 'The core dynamic remains: a woman who has everything society tells her she should want (safety, respect, comfortable work) but feels profoundly unfulfilled, meets someone powerful in circumstances that subvert normal hierarchy, and begins a relationship based on direct communication rather than social performance. What does it say about modern life that Jane\'s restlessness—having security but not meaning, comfort but not passion—is so relatable? How do class and power still shape romantic relationships, and what does it mean to meet someone as an equal before social roles complicate connection?'
  },
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Meeting as Equals: Subverting Social Hierarchy',
        explanation: 'Jane and Rochester\'s first meeting occurs outside social structures that would define their relationship as master-servant, employer-employee. On the dark lane, they are simply two humans—one fallen, one helping. This unconventional beginning establishes the foundation of their relationship: they relate as equals despite social inequality. Rochester doesn\'t know Jane is his governess; Jane doesn\'t know he\'s her employer. They meet without the masks social position requires. This allows them to see each other as individuals first. When they later interact at Thornfield within social hierarchy, they retain the memory of equality established on the lane. The meeting demonstrates how social roles constrain authentic human connection, and how stepping outside those roles (literally—they meet outside the house) enables real intimacy.'
      },
      {
        name: 'Restlessness and the Domestic Trap',
        explanation: 'Despite comfort at Thornfield, Jane feels trapped by domestic routine. She has everything society tells women they should want: safety, kindness, respectable work, comfort. Yet she\'s profoundly unsatisfied. She needs challenge, variety, intellectual stimulation, emotional intensity. Her pacing of the third floor corridor becomes metaphor: she walks back and forth within defined limits, unable to leave but refusing to be content. This theme connects to Victorian "woman question": What do educated women do with intellectual and emotional energy when society confines them to domestic sphere? Jane explicitly articulates feminist critique, connecting her personal restlessness to political issue. Rochester\'s arrival offers escape from this trap—but will create new forms of confinement Jane must navigate.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Gothic and Fairy Tale Atmosphere',
        explanation: 'Brontë blends realistic narrative with Gothic and fairy tale elements. Jane thinks of the Gytrash (folkloric creature) as she sits in gathering twilight. The setting is liminal: dusk, crossroads, frozen ground. When hoofbeats approach, the scene has quality of enchantment and fate. Yet the rider is ostensibly ordinary man. This technique operates on two levels: realistic (traveler on icy road) and symbolic (fated encounter between souls). The Gothic atmosphere suggests this meeting has significance beyond practical help—it\'s beginning of transformation. The fairy tale quality (maiden helping fallen knight) elevates the encounter to archetypal level while keeping it psychologically realistic.',
        example: 'The Gytrash imagery is especially effective because Jane explicitly thinks about folklore, half-expects supernatural encounter, is disappointed when rider is merely human—but then discovers he is extraordinary anyway. Brontë has it both ways: realism and enchantment simultaneously.'
      },
      {
        name: 'Dramatic Irony and Narrative Perspective',
        explanation: 'Adult Jane narrates her younger self\'s experience, creating dramatic irony. When young Jane doesn\'t recognize Rochester, adult Jane (and readers) know who he is. When Jane helps the stranger, we know this is her future husband—she doesn\'t. The phrase "In those days I was young" signals adult narrator looking back with knowledge of what came next. This technique creates poignancy: we watch Jane at the beginning of relationship that will transform her life, while she experiences it as simple encounter with stranger. The dramatic irony also creates suspense: we know this matters, we anticipate consequences, we watch Jane unknowingly enter her fate.',
        example: 'When Rochester rides toward Thornfield without thanks, Jane watches him go without knowing she\'ll see him again at dinner. The dramatic irony makes this moment both casual (one encounter among many) and momentous (the beginning of everything).'
      }
    ]
  },
  
  // ===================================================================
  // AMPLIFIED DISCUSSION WITH AI
  // Interactive deep-dive questions with AI-powered responses
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'unconventional-meeting',
      title: 'The Unconventional First Meeting: Why It Matters',
      question: 'Jane and Rochester meet on a dark lane when his horse slips—not in his drawing room as employer and governess. Why does Brontë stage their first meeting this way? What does it establish?',
      aiResponse: `**Meeting Outside Social Scripts**

The circumstances of Jane and Rochester's first meeting are crucial to understanding their entire relationship. Brontë very deliberately stages this encounter outside the social structures that would normally define their interaction.

**What Would Conventional Meeting Look Like:**

If they met according to social convention:
- Rochester would summon Jane to his study or drawing room
- He would be seated; she would stand or sit when invited
- He would evaluate her: her appearance, manner, qualifications
- She would perform deference: "Yes, sir," "No, sir," eyes downcast
- Power dynamic would be crystal clear: master-servant

**This would establish:**
- His authority, her subordination
- His right to judge, her duty to please
- His power to dismiss her, her dependence on his approval
- Professional distance and social hierarchy

**What Actually Happens:**

Instead, they meet as:
- Strangers on a dark lane
- Person needing help and person offering it
- Fallen man and competent woman
- Two humans in emergency situation

**This establishes:**
- Equality in extremity
- His vulnerability, her capability
- Mutual dependence (he needs help, she provides it)
- Personal connection before social roles

**The Power Reversal:**

In the moment of meeting:
- He is fallen (literally and figuratively)
- She is standing, capable, in control
- He must accept help he doesn't want
- She has power to assist or refuse

**This inverts expected power dynamic.**

In traditional romance, man is rescuer and woman is rescued. Here, Jane rescues Rochester. This foreshadows their relationship: he will need her (emotionally, morally, spiritually) as much as she needs him (economically, socially).

**Meeting as Individuals First:**

Because neither knows the other's social identity:
- Rochester doesn't perform "master"
- Jane doesn't perform "governess"
- Both are simply themselves

Rochester sees:
- A small, plain, brave woman
- Who speaks directly without flattery
- Who helps competently without seeking approval
- Who meets his brusqueness with calm directness

Jane sees:
- A dark, stern, difficult man
- Who is proud despite vulnerability
- Who questions her sharply
- Who doesn't thank her but seems to appreciate competence

**They see each other's essential character before social roles complicate perception.**

**Why This Matters for Their Relationship:**

Once they return to Thornfield and resume social roles:
- He is master, she is governess
- He has authority, she has duty
- Social convention demands hierarchy

**But they retain memory of equality on the lane.**

They can never fully reduce each other to social roles because they've met outside those roles. Rochester has seen Jane as capable equal; Jane has seen Rochester as vulnerable human needing help.

This memory makes possible:
- Their conversations as intellectual equals
- Rochester's eventual proposal (crossing class boundaries)
- Jane's refusal to be his mistress (insisting on equality)
- Their final marriage as true partners

**The Symbolic Weight:**

The meeting occurs at:
- **Twilight:** Liminal time between day and night
- **Crossroads:** Literally at intersection of paths
- **Frozen ground:** Beautiful but treacherous
- **Outside domestic space:** Neither in house (female sphere) nor in town (male sphere)

All of these are threshold spaces—in-between places where transformations happen, where normal rules don't apply, where new possibilities emerge.

**The fall from the horse** symbolizes:
- Rochester's need for help (moral, emotional, spiritual—not just physical)
- The collapse of his pride and self-sufficiency
- The possibility of being caught (Jane catches him)
- The danger of falling (in love, into passion, into risk)

**The ice** symbolizes:
- The treacherous ground of their future relationship
- What seems solid (social hierarchy, moral certainty) is unstable
- The danger of slipping (into inappropriate passion)
- The cold that warmth (love) will have to overcome

**Modern Parallels:**

Contemporary examples of unconventional meetings establishing equality:

**1. Professional Contexts:**
Meeting colleague as equal before learning they're your boss—creates different dynamic than if you knew hierarchy from start.

**2. Online Interactions:**
Connecting with someone via shared interest before knowing demographics—can create equality that in-person meeting would complicate with visual markers of status.

**3. Emergency Situations:**
When people help each other in crisis (natural disaster, accident, emergency) before knowing social position—creates bond based on shared humanity.

**4. Travel Encounters:**
Meeting someone while both are far from home, outside normal social contexts—can enable authentic connection without usual role-playing.

**The Pattern:**
When people meet outside structures that usually define their interaction, they can relate more authentically and equally. Once they return to those structures, the memory of equality persists and complicates hierarchy.

**For Discussion:**

Could Jane and Rochester have developed their relationship if they'd met conventionally? Would the power imbalance have been too great?

Does the unconventional meeting excuse their later boundary violations? Or does it simply explain how they became possible?

If you met your employer, teacher, or other authority figure outside that context first, how would it change your relationship?

**The Takeaway:**

Brontë stages Jane and Rochester's first meeting on a dark lane outside social structures to establish the foundation of their relationship: equality in spirit despite social inequality. By having them meet as individuals in emergency before meeting as employer-employee in social context, Brontë creates relationship based on personal recognition rather than social position. Rochester sees Jane's capability, directness, and bravery; Jane sees Rochester's vulnerability, intensity, and appreciation for honesty. This mutual recognition as individuals makes possible their later intimate conversations, Rochester's proposal across class boundaries, and Jane's insistence on equality even when economic dependence suggests subordination. The unconventional meeting—with its symbolic elements of twilight, crossroads, frozen ground, and fall from horse—operates both realistically (traveler helping fallen rider) and symbolically (souls recognizing each other across social difference). It establishes the terms of their relationship: they will always relate as equals in emergency, even when social convention demands hierarchy.`
    },
    {
      id: 'gytrash-fairy-tale',
      title: 'The Gytrash: When Reality and Fairy Tale Collide',
      question: 'Jane thinks about the Gytrash (a folkloric creature) just before Rochester appears. Why does Brontë blend fairy tale elements with realistic narrative? What does it suggest about their relationship?',
      aiResponse: `**Gothic Romance: Where Realism Meets Enchantment**

Jane's Gytrash meditation is crucial for understanding how Brontë blends realistic Victorian novel with Gothic romance and fairy tale elements. This blending isn't just decorative—it operates on the story's deepest levels.

**What Is the Gytrash:**

Folklore creature from Northern England:
- Takes form of large dog, horse, or mule
- Haunts lonely roads at twilight
- Can be omen (good or bad)
- Represents uncanny, supernatural, liminal

**Jane's Expectation:**

Sitting in gathering dusk at crossroads, Jane half-expects something supernatural. When she hears hoofbeats and sees large dog followed by horseman, the scene has folkloric quality.

**The "Disappointment":**

"The man, the human being, broke the spell at once."

Jane is disappointed that the supernatural Gytrash is merely ordinary man. She wanted magic—got reality.

**The Irony:**

Rochester will prove to be anything but "commonplace." The encounter will have exactly the quality of magic and fate Jane expected. Brontë gives us both:
- Realistic level: traveler on icy road
- Symbolic level: fated encounter between souls

**Why Blend Realism and Fairy Tale:**

**1. Psychological Realism:**

Fairy tale elements represent Jane's psychological state:
- Her longing for transformation
- Her readiness for extraordinary experience
- Her romantic imagination
- Her sense that something significant is about to happen

**The Gytrash isn't "real"—but Jane's feelings are real.**

**2. Fated Connection:**

Fairy tale elements suggest:
- This meeting was meant to happen
- Rochester and Jane are drawn together by forces beyond choice
- Their connection has quality of enchantment
- Love operates at level deeper than rational decision

**3. Danger and Uncanny:**

Gothic/fairy tale warnings:
- Beautiful settings can be treacherous (ice)
- Attractive men can be dangerous (Rochester's secrets)
- What appears solid may be unstable
- Enchantment and entrapment are related

**4. Women's Reality:**

For Victorian women, everyday life could have Gothic quality:
- Entering unknown households (employment)
- Depending on male employers (economic vulnerability)
- Sexual danger from men with power
- Social isolation and powerlessness

**Gothic elements make visible the actual dangers women faced.**

**Modern Parallels:**

**Contemporary Romance:**
- Dating apps: meeting strangers, hoping for magic
- "Love at first sight" narratives
- Feeling like relationship is "fated"
- Romance described as "fairy tale"

**The Pattern:**
We use fairy tale language for intense personal experiences because realistic language feels insufficient. Love, transformation, danger all feel "magical" even when they're psychologically explainable.

**The Takeaway:**

Brontë blends realism and fairy tale to show how extraordinary experiences feel magical even when they're psychologically and socially grounded. Jane's Gytrash meditation reveals her readiness for transformation and romance. The fact that Rochester appears precisely when Jane is thinking about supernatural beings suggests their meeting is fated—while remaining realistic in its details. This technique allows Brontë to write both psychological realism and Gothic romance simultaneously.`
    },
    {
      id: 'restless-woman',
      title: 'The Restless Woman: Why Comfort Isn\'t Enough',
      question: 'Jane has everything she wanted—safety, kindness, respectable work—yet she feels trapped and restless. What does this reveal about women\'s constrained lives?',
      aiResponse: `**"Women Feel Just as Men Feel": The Insufficiency of Safety**

Jane's restlessness at Thornfield is paradoxical and profoundly important. She has achieved what Victorian society told women they should want—yet she's deeply unsatisfied. Understanding why reveals Brontë's feminist critique.

**What Jane Has at Thornfield:**

Material comfort:
- Warm, beautiful house
- Good food
- Pleasant room
- Economic security

Social respectability:
- Position as governess (respectable for educated woman)
- Kind employer (Mrs. Fairfax)
- No abuse or cruelty
- Protected environment

Meaningful work:
- Teaching Adèle
- Intellectual stimulation
- Using her education
- Contributing value

**By Victorian standards, Jane should be grateful and content.**

**What Jane Lacks:**

Challenge and variety:
- Routine is predictable
- No intellectual equals
- Limited conversation
- No new experiences

Emotional intensity:
- Life is pleasant but flat
- No passion or excitement
- Safe but not thrilling
- Comfortable but not alive

Connection to broader world:
- Isolated in countryside
- Cut off from events, ideas, movements
- Narrow social circle
- Limited horizons

**The Feminist Critique:**

Victorian ideology claimed women needed:
- Protection and security
- Domestic comfort
- Respectability
- To serve others (teach children, care for household)

**Brontë argues women also need:**
- Challenge and growth
- Intellectual stimulation
- Emotional intensity
- Connection to wider world
- Action and agency
- Meaning and purpose beyond service

**"Women are supposed to be very calm generally: but women feel just as men feel."**

This is revolutionary statement: women have same needs, desires, and rights as men. Women's restlessness with limited roles is not personal failing but rational response to unjust constraint.

**The Third-Floor Corridor:**

Jane paces the corridor while Adèle plays with Sophie:
- Elevated above domestic spaces
- Still within house walls
- Walking back and forth
- No destination, just movement

**Perfect metaphor:** Women could move but only within defined limits. They could think but not act. They could imagine freedom but not achieve it.

**Why Safety Isn't Enough:**

Humans need:
- Growth and challenge
- Risk and uncertainty
- Meaning and purpose
- Connection and passion

**Safety alone—without these—is comfortable prison.**

Jane would rather risk danger (Rochester, passion, uncertain future) than accept safe, limited domestic life.

**Modern Parallels:**

**Contemporary Women:**
- "Having it all" but feeling unfulfilled
- Secure jobs/relationships that feel limiting
- Comfort that doesn't satisfy
- Safe choices that feel like slow death

**The Pattern:**
When society offers women safety in exchange for limitation, many choose risk and possibility instead. Security without freedom isn't liberation.

**The Takeaway:**

Jane's restlessness despite Thornfield's comfort reveals that women need more than safety and domesticity. They need challenge, growth, intellectual stimulation, emotional intensity, and connection to broader world. Victorian ideology that claimed women should be content with domestic roles ignored women's full humanity. Jane's explicit feminist critique—"women feel just as men feel"—connects her personal restlessness to political issue. This prepares readers for Jane's later choices: she will consistently choose risk and possibility over safety and limitation.`
    },
    {
      id: 'governess-invisibility',
      title: 'Social Invisibility: Why Rochester Doesn\'t "See" Jane',
      question: 'Rochester doesn\'t recognize Jane as his governess even after she tells him she lives at Thornfield. What does this reveal about governesses\' social position?',
      aiResponse: `**"In Service?" "No, Sir. I Am the Governess." The Invisible Woman**

Rochester's failure to recognize Jane as his governess—even after she says she lives at Thornfield—reveals the paradoxical and painful social invisibility of governesses in Victorian England.

**The Exchange:**

**Rochester:** "Do you live thereabouts?"
**Jane:** "I live at Thornfield."
**Rochester:** "In service?"
**Jane:** "No, sir. I am the governess."

Rochester doesn't connect "lives at Thornfield" with "the governess Mrs. Fairfax hired." Why?

**Because Governesses Were Socially Invisible:**

**The Governess's Impossible Position:**

Governesses were:
- Too educated to be servants
- Too poor to be ladies
- Part of household but not family
- Present but not supposed to be noticed

They occupied liminal social space:
- Not "in service" (not servants)
- But not equals (employees, dependents)
- Neither upstairs nor downstairs
- Everywhere and nowhere

**The Social Rule:**

Governesses should be:
- Present when needed
- Invisible when not
- Available but unnoticed
- There but not there

**Seen as role, not as person.**

**Why Rochester Doesn't "See" Her:**

**He assumes she's:**
- Village girl
- Tenant's daughter
- Servant from another household

**He doesn't consider:**
- The genteel governess Mrs. Fairfax mentioned
- An educated woman who might walk alone
- Someone he should recognize as part of his household

**This reveals:** Governesses weren't "seen" by employers—they were functionaries, not individuals.

**The Fortunate Accident:**

Because Rochester doesn't recognize Jane's social identity:
- He sees her as person first
- They interact outside hierarchy
- He can't reduce her to role

**This makes their later relationship possible.**

Once he's seen her as individual, capable, direct woman—he can't fully unsee it. Even when they return to master-governess hierarchy, he retains memory of equality.

**The Pain of Invisibility:**

For Jane and other governesses:
- Your education makes you unsuitable for service
- Your poverty makes you unsuitable for genteel society
- You belong nowhere
- You're seen as role, not person

**This creates:**
- Isolation and loneliness
- Identity confusion (who am I if I'm neither servant nor lady?)
- Vulnerability (no social protections)
- Erasure (your personhood doesn't matter)

**Modern Parallels:**

**Contemporary Invisible Workers:**

**1. Domestic Workers:**
Nannies, housekeepers, caregivers—in homes but not noticed as individuals with full personhood.

**2. Service Workers:**
People serving (waiters, cleaners, drivers) often treated as roles rather than persons—customers look through them.

**3. Contingent Academics:**
Adjuncts, postdocs—educated but precarious, doing intellectual work without recognition or security.

**4. Professional Women:**
Still sometimes invisible in male-dominated spaces—talked over, ignored, credited less.

**The Pattern:**
People in ambiguous or precarious positions, especially women, often experience social invisibility—present but not seen as full persons.

**The Takeaway:**

Rochester's failure to recognize Jane as his governess reveals governesses' painful social invisibility—they were meant to be present but unnoticed, seen as roles not persons. This liminal position created isolation and erasure. However, Rochester's accidental encounter with Jane outside her role lets him see her as individual first—making their later relationship possible. The scene critiques Victorian class system that created category of educated women who belonged nowhere. Modern parallels include domestic workers, service workers, and others in ambiguous or precarious positions who experience social invisibility despite being essential.`
    },
    {
      id: 'twilight-crossroads',
      title: 'Twilight at the Crossroads: The Power of Liminal Spaces',
      question: 'The meeting occurs at twilight, at a crossroads, on frozen ground. Why does Brontë set it in this particular place and time? What do these liminal spaces represent?',
      aiResponse: `**In-Between Places: Where Transformation Happens**

Every detail of Jane and Rochester's meeting is carefully chosen: the time (twilight), the place (crossroads), the conditions (frozen ground). These liminal spaces have deep symbolic meaning.

**Twilight: Between Day and Night**

**Literal:**
Neither full light nor full darkness—in-between time

**Symbolic:**
- Between known (day) and unknown (night)
- Between reason (light) and mystery (dark)
- Between safety (visibility) and danger (darkness)
- Threshold time when normal rules suspend

**In folklore:** Twilight is when supernatural appears, when boundaries thin, when magic is possible.

**For Jane and Rochester:**
- Between their old lives and new relationship
- Between reason and passion
- Between safety and risk
- Beginning of transformation

**Crossroads: Between Paths**

**Literal:**
Intersection where multiple paths meet—must choose direction

**Symbolic:**
- Decision point
- Moment of choice
- Multiple possible futures
- Meeting of different journeys

**In folklore:** Crossroads are magical spaces where deals are made, fates are sealed, supernatural forces gather.

**For Jane and Rochester:**
- Their individual paths intersect
- Both face choices about future direction
- Multiple possibilities emerge from this moment
- Their separate journeys will now intertwine

**Frozen Ground: Beautiful but Treacherous**

**Literal:**
Ice-covered path—looks solid, actually slippery and dangerous

**Symbolic:**
- What appears stable is unstable
- Beauty conceals danger
- Easy to fall
- Cold that needs warmth to thaw

**For the relationship:**
- Will be beautiful but treacherous
- What seems solid (social hierarchy, moral certainty) will prove unstable
- Both will "fall" (in love, into danger)
- The cold isolation both feel will need love's warmth

**Why Liminal Spaces Matter:**

**1. Normal Rules Don't Apply:**

In threshold spaces:
- Social hierarchies can be suspended
- Transformations can occur
- New possibilities emerge
- Identity can shift

**Jane and Rochester meet outside normal social context, allowing equality impossible inside structure.**

**2. Between States:**

Liminal spaces represent being between:
- Old identity and new
- Known and unknown
- Past and future
- One world and another

**Both Jane and Rochester are in transition—Jane from isolated governess to woman in love; Rochester from isolated master to man who needs help.**

**3. Dangerous and Magical:**

Liminal spaces are:
- Sites of transformation
- Moments of vulnerability
- Times of possibility
- Places of risk

**The relationship beginning here will be all of these.**

**The Fall from the Horse:**

Rochester's fall reinforces liminality:
- He's literally between standing and fallen
- Between pride and need for help
- Between self-sufficiency and dependence
- Between his old self and who he'll become with Jane

**The fall is threshold moment—his pride collapses, he must accept help, vulnerability is revealed.**

**Why "Outside" Matters:**

The meeting occurs **outside:**
- The house (domestic space)
- The village (social space)
- Any defined structure

**In the wild, in twilight, at crossroads—completely liminal.**

This represents:
- Stepping outside social roles
- Escaping domestic confinement
- Freedom from normal constraints
- Space for transformation

**Modern Parallels:**

**Contemporary Liminal Experiences:**

**1. Airports and Train Stations:**
Between departure and arrival, between places, suspended in transition—where you might meet someone or experience transformation.

**2. Late-Night Conversations:**
Between day and sleep, when normal social guard drops, when deeper truths emerge.

**3. Travel:**
Between home and away, between familiar and foreign, where identity can shift and transformation can occur.

**4. Life Transitions:**
Between jobs, relationships, homes, identities—liminal periods when new possibilities emerge.

**The Pattern:**
Transformative encounters often happen in liminal spaces and times—when normal rules are suspended, when people are between states, when possibility opens.

**The Takeaway:**

Brontë sets Jane and Rochester's meeting at twilight (between day and night), at crossroads (between paths), on frozen ground (beautiful but treacherous) because these liminal spaces represent transformation, possibility, and danger. In threshold spaces, normal social rules can be suspended—allowing Jane and Rochester to meet as equals outside hierarchy. The liminal setting foreshadows their relationship: it will occur in spaces between (between classes, between propriety and passion, between safety and risk), it will be transformative and dangerous, and it will require stepping outside normal social structures. The fall from the horse reinforces liminality—Rochester is literally between standing and fallen, between pride and need, between old self and new. These symbolic spaces show Brontë operating on multiple levels simultaneously: realistic narrative of chance meeting and symbolic exploration of how transformation occurs at thresholds between known and unknown.`
    },
    {
      id: 'competent-heroine',
      title: 'Jane as Rescuer: Inverting Romance Conventions',
      question: 'Jane helps Rochester after his fall—she rescues him, not the other way around. How does this invert typical romance roles? What does it establish for their relationship?',
      aiResponse: `**The Woman Who Rescues: Inverting the Damsel in Distress**

In traditional romance, the hero rescues the heroine—she is in danger, he saves her, she is grateful, romance ensues. Jane Eyre deliberately inverts this: Jane rescues Rochester. This reversal is crucial to their relationship's dynamics.

**Traditional Romance Pattern:**

**Conventional roles:**
- Man: strong, capable, rescuer, protector
- Woman: weak, vulnerable, rescued, grateful
- She needs him (for safety)
- He doesn't need her (except emotionally later)
- Romance built on his strength and her weakness

**What Actually Happens:**

**Rochester:**
- Falls from horse
- Injures ankle
- Cannot remount without help
- Must accept assistance

**Jane:**
- Stays calm
- Assesses situation
- Offers help practically
- Helps him remount despite his protests

**She rescues him.**

**The Power Dynamics:**

**In the moment:**
- He is vulnerable (fallen, injured)
- She is capable (standing, competent)
- He needs her help
- She has power to assist or refuse

**This inverts expected gender dynamics.**

**What It Establishes:**

**1. Mutual Need:**

Traditional romance:
- She needs him (protection, resources, status)
- He wants her (beauty, companionship)
- Asymmetrical relationship

**Jane and Rochester:**
- She needs him (employment, financial security)
- **He needs her (emotional, moral, spiritual support)**
- More symmetrical relationship

**The physical rescue foreshadows emotional rescue:**
- She will "save" him morally
- She will provide what he lacks
- He will depend on her as much as she depends on him

**2. Her Capability:**

Jane demonstrates:
- Calm in emergency
- Practical competence
- Physical strength (helps him mount)
- Emotional steadiness

**She's not helpless maiden—she's capable woman.**

This will characterize their relationship:
- She can handle difficulty
- She won't need constant protection
- She can be partner, not dependent
- She has strength he can rely on

**3. His Vulnerability:**

Rochester must:
- Accept he needs help
- Rely on woman's assistance
- Acknowledge he's not invincible
- Submit to being helped

**This humbles his pride and shows his humanity.**

Their relationship will require:
- Him accepting he needs her
- Him being vulnerable with her
- Him relying on her judgment
- Him not just protecting but being helped

**4. Role Flexibility:**

The rescue shows:
- Gender roles can reverse
- Strength and weakness aren't fixed
- Help flows both directions
- Power is situational, not absolute

**Their marriage will reflect this:**
- Sometimes she helps him
- Sometimes he helps her
- Both strong and weak at different times
- True partnership, not hierarchy

**The Resistance:**

Rochester resists help:
- He's proud
- He doesn't want to show weakness
- He tries to mount alone despite injury

**But he must accept Jane's assistance.**

This foreshadows pattern:
- He will need her help (especially morally)
- He will resist it (pride, shame)
- He will eventually accept it
- This acceptance will save him

**Modern Parallels:**

**Contemporary Examples:**

**1. "Strong Female Character":**
Women in media increasingly rescue themselves or others—but often have to choose between strength and romance. Jane gets both.

**2. Caregiving Roles:**
When women care for male partners (illness, depression, crisis)—traditionally feminine role but can be empowering when recognized as real strength.

**3. Emotional Labor:**
Women often "rescue" men emotionally—providing support, insight, moral guidance—but this work is often invisible or devalued.

**4. Mutual Vulnerability:**
Modern relationships increasingly recognize both partners need support at different times—moving beyond "strong protector / weak protected" model.

**The Pattern:**
Healthiest relationships involve mutual support where both partners are strong and vulnerable at different times. One-directional rescue creates dependence; bidirectional support creates partnership.

**For Discussion:**

Does Jane's initial rescue of Rochester balance out his economic power over her as employer? Or do these power imbalances remain throughout their relationship?

In the end, after the fire, Jane literally helps blind Rochester—does this second rescue complete a pattern?

Can romance based on mutual need be as satisfying as romance based on one person rescuing the other?

**The Takeaway:**

Brontë inverts traditional romance by having Jane rescue Rochester physically in their first meeting. This establishes their relationship as based on mutual need rather than asymmetrical protection. Jane demonstrates capability, calm, and strength—she's partner, not dependent. Rochester must accept vulnerability and help—he needs her as much as she needs him. The physical rescue foreshadows emotional and moral rescue: Jane will provide what Rochester lacks morally and spiritually, ultimately saving him from himself. This inversion of gender roles establishes foundation for their eventual marriage as partnership between equals rather than hierarchy between protector and protected. The scene shows that strength and vulnerability aren't fixed gender traits—both people can be strong and weak at different times, and real love involves supporting each other through both.`
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Significance of First Meetings: Analyzing Unconventional Introductions',
      description: 'Write a 3-4 page essay analyzing how Brontë uses the unconventional first meeting between Jane and Rochester to establish the terms of their relationship. Consider: How does meeting outside social structures enable equality? What symbolic elements (twilight, crossroads, frozen ground, fall from horse) add layers of meaning? How does this scene invert traditional romance conventions (woman rescues man)? Compare with how these characters might have related if they\'d met conventionally in his drawing room. Research Victorian social customs around employer-governess interactions and discuss how Brontë subverts these expectations. Use close reading of the text to support your analysis, paying attention to dialogue, description, and Jane\'s adult narrator\'s reflections.',
      purpose: 'This assignment develops close reading skills, understanding of social context, and ability to analyze how narrative choices create meaning. Students learn to see how seemingly small details (time of day, weather, who helps whom) carry thematic weight. They practice comparing actual narrative with hypothetical alternatives to understand authorial choices. The assignment also introduces concepts of power dynamics, social performance, and how physical spaces relate to psychological states.'
    },
    
    activity: {
      title: 'Adapting the First Meeting: Modern Scenarios',
      description: 'In groups, create a modern adaptation of Jane and Rochester\'s first meeting that preserves the essential dynamics: (1) two people meet outside normal social context, (2) one needs help, the other provides it, (3) neither knows the other\'s social identity/role, (4) they communicate directly without social performance, (5) they meet as equals despite actual power imbalance. Write the scene (1-2 pages of dialogue and action), then present it to the class. After presentations, discuss: What stayed the same across all adaptations? What had to change? What does this reveal about which elements are timeless vs. which are Victorian-specific? Which power dynamics persist in modern relationships?',
      materials: 'Scene excerpt from Chapter 12; examples of modern meet-cutes from film/TV for comparison; discussion guide about power, class, and gender in relationships'
    },
    
    crossCurricular: {
      title: 'Folklore, Fairy Tale, and Realism: Genre Blending',
      description: 'Explore how Brontë blends realistic Victorian novel with Gothic romance and fairy tale elements. Part 1: Research folklore (Gytrash legend, crossroads in folklore, twilight as liminal time). Part 2: Analyze how these elements function in the text—are they "real" supernatural events or psychological states? Part 3: Compare with other texts that blend realism and fantasy (magical realism, contemporary Gothic romance, psychological horror). Part 4: Creative writing—write a scene that operates on both realistic and symbolic levels simultaneously. How do you make ordinary events feel magical without losing psychological realism?',
      subjects: ['Literature', 'Folklore Studies', 'Creative Writing', 'Psychology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Power Dynamics and Consent: Examining Employer-Employee Romance',
    prompt: 'Jane and Rochester meet as equals on the lane, but she is actually his employee, economically dependent on him, with no power to refuse his advances or demands. He is her employer with absolute power to dismiss her, ruin her reputation, or exploit her vulnerability. Analyze the ethics of their relationship considering: Does their initial meeting as equals outside hierarchy change the fundamental power imbalance? Can there be true consent in a relationship where one person controls the other\'s livelihood and security? Does the fact that we\'re meant to root for their romance affect how we evaluate the ethics? How should we think about beloved literary romances that involve significant power imbalances? Write a 3-4 page analysis that takes seriously both the romance and the ethical concerns, using examples from the text and contemporary understandings of consent, coercion, and power.',
    
    guidingQuestions: [
      'What specific powers does Rochester have over Jane as her employer? What can he do to her professionally and economically?',
      'Does Jane\'s ability to eventually leave (as she does after the interrupted wedding) prove she has genuine agency? Or does the fact that leaving is so costly and dangerous reveal her constrained options?',
      'How does their initial meeting as equals affect the power dynamics of their later relationship at Thornfield? Does it change the fundamental imbalance or just mask it?',
      'Compare Jane and Rochester\'s relationship with contemporary workplace romance policies. Why do many companies prohibit relationships between supervisors and subordinates?',
      'Can we enjoy problematic romances while acknowledging their problematic elements? Or does enjoying them mean endorsing harmful dynamics?',
      'How do we balance historical context (Victorian limitations on women\'s choices) with ethical evaluation? Does "it was different then" excuse power imbalances?',
      'What would a genuinely equal romance between Jane and Rochester look like? What would have to change about their circumstances?'
    ],
    
    thinkingFramework: {
      analyze: 'Map the specific power imbalances: economic (he pays her salary), social (master-servant hierarchy), legal (she has few rights), physical (he can dismiss or exploit her). Identify moments where these power imbalances affect their interactions—even seemingly romantic moments may involve coercion if we look closely. Distinguish between Jane\'s subjective experience (she feels equal, she makes choices) and objective situation (she is vulnerable and dependent). Consider whether Brontë is aware of these issues or blind to them.',
      evaluate: 'Apply different ethical frameworks: consent-based (can there be genuine consent with power imbalance?), consequentialist (do they end up happy, so does the means matter?), virtue ethics (do they treat each other with respect despite circumstances?), feminist (how does patriarchy shape their relationship?). Consider both contemporary standards and Victorian context—but be careful not to excuse harmful dynamics just because they were common. Evaluate Brontë\'s handling: does she critique the power imbalance, romanticize it, or complicate it?',
      synthesize: 'Develop a nuanced position that acknowledges both the romance and the ethical problems. You might argue: (1) The relationship is problematic and we should critique it even while appreciating the novel, (2) Brontë is aware of and commenting on power imbalances through Jane\'s insistence on equality, (3) The relationship becomes more ethical over time as circumstances change (Rochester loses power, Jane gains independence), or (4) We can enjoy fiction without endorsing everything it portrays. Whatever position you take, support it with textual evidence and ethical reasoning. Consider how this analysis applies to contemporary romances with power imbalances (boss-employee, teacher-student, therapist-client, etc.).'
    },
    
    expectedDepth: 'A strong response will recognize the genuine romance and emotional connection between Jane and Rochester while also seriously engaging with the ethical problems of employer-employee romance. It will use specific textual examples to show how power operates in their relationship—not just abstract claims but concrete instances. It will consider Brontë\'s perspective: does she see these issues? How does Jane\'s feminist consciousness relate to her romance with her employer? The response should grapple with genuinely difficult questions without easy answers: Can love overcome power imbalance? Should it have to? What makes a relationship ethical when circumstances are unequal? It should also connect to contemporary issues—workplace romance, age gaps, wealth differences, other power imbalances in relationships. The goal is not to "cancel" Jane Eyre but to think critically about power, consent, and romance in both literature and life.',
    
    classroomApplication: 'This works as: (1) Major essay with research into consent, coercion, workplace ethics, and feminist theory (3-4 weeks), (2) Socratic seminar where students defend different positions (90 minutes with preparation), (3) Debate format with teams arguing pro/con the ethics of Jane and Rochester\'s relationship (2-3 class periods). For advanced students, pair with readings on consent theory, workplace ethics, feminist critiques of romance, and contemporary discussions of power dynamics in relationships. Encourage students to examine their own assumptions: Do we excuse behavior in fiction we\'d critique in life? Do we romanticize what we should interrogate? How do we balance aesthetic appreciation with ethical evaluation? This exercise teaches critical thinking about media, relationships, and the sometimes uncomfortable truths in texts we love.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(12),
  
  // ===================================================================
  // NEXT TIME TEASER
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🏰',
    title: 'Next Time: Thornfield Comes Alive',
    preview: 'Rochester\'s arrival transforms Thornfield. The house that felt like a comfortable prison suddenly crackles with energy, tension, and possibility. Jane discovers that her mysterious employer is as unconventional as their first meeting suggested—he demands honest conversation, challenges her views, treats her as intellectual equal while remaining her social superior. They begin the charged, complex dance that will define their relationship: mutual attraction, intellectual sparring, direct communication that violates social convention, and underlying power dynamics neither fully acknowledges. But those strange laughs from the third floor grow louder and more frequent. Grace Poole lurks in the background. And Jane begins to sense that Rochester is hiding something—something that casts a shadow over their growing intimacy.',
    hookQuestion: 'Can Jane maintain her independence and integrity while falling in love with a man who has absolute power over her livelihood? What secrets does Rochester conceal? And who—or what—laughs in the night on Thornfield\'s third floor?'
  },
  
  // ===================================================================
  // CONNECTIONS
  // ===================================================================
  connections: {
    lookBack: 'Fulfills the promise of Chapter 11\'s ending—Jane wished for action and experience beyond domestic routine, and Rochester\'s arrival brings exactly that. The mysterious laugh from the third floor continues, reminding us of Gothic secrets hidden in Thornfield. Jane\'s feminist restlessness (needing challenge, not just comfort) finds partial answer in Rochester\'s intellectual stimulation.',
    lookForward: 'This unconventional first meeting establishes the foundation for their relationship: they will always relate as equals in spirit despite social inequality. Jane\'s rescue of Rochester foreshadows her later moral and spiritual rescue of him. Rochester\'s vulnerability (needing help, fallen) foreshadows his later literal dependence on Jane. Their direct communication style will enable intimate conversations but also devastating revelations.',
    thematicEcho: 'The meeting on ice at crossroads in twilight symbolizes their entire relationship: beautiful but treacherous, occurring in liminal spaces outside normal social structures, requiring both to take risks, and ultimately transformative for both. Jane\'s refusal to perform femininity establishes the pattern: she will insist on honest communication and equality even when it violates social expectations and endangers her position.'
  }
}

