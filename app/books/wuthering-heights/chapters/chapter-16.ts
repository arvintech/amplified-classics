/**
 * WUTHERING HEIGHTS - CHAPTER 16
 * 
 * Catherine dies giving birth to her daughter; Heathcliff's grief transforms into prayer for eternal haunting
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getThenVsNowMessage } from '@/app/lib/literature-matters-messages'

export const chapter16: ChapterData = {
  number: 16,
  title: '',
  
  readingTime: 14,
  pages: 8,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Catherine dies at midnight giving birth to premature daughter, and Heathcliff\'s grief—rage at her for choosing peace without him, prayer for her ghost to haunt him forever, curse on her for leaving—reveals that death will not end their bond but only transform it into something more terrible.',
    
    full: [
      'Catherine dies at midnight, two hours after giving birth to premature daughter (Catherine Linton—Cathy). The birth comes early, triggered by emotional intensity of meeting with Heathcliff. The baby is tiny, fragile, two months premature—she will be sickly child, inheriting mother\'s delicacy without her spirit. Edgar is devastated, holding his dead wife and living daughter, unable to reconcile loss and continuity. He named daughter after mother, ensuring Catherine\'s name will continue even as Catherine herself is gone. The living baby seems inadequate replacement for the passionate, complex, impossible woman who died creating her.',
      
      'Nelly goes to tell Heathcliff of Catherine\'s death. She finds him in the garden at dawn, leaning against an ash tree, waiting for news. When she tells him Catherine died "quietly as a lamb," Heathcliff\'s response is volcanic: he curses Catherine for leaving him, calls her a liar for promising to haunt him and then dying peacefully, smashes his head against the tree until blood flows. His grief contains no acceptance, no peace—only rage at abandonment. He cannot believe she found peace in death—it would mean she chose to leave him, which is metaphysically impossible. He insists she must be suffering as he is: "May she wake in torment!"',
      
      'But then Heathcliff\'s curse transforms into prayer: the most famous passage of the novel. He begs Catherine\'s ghost not to rest, not to find peace, but to haunt him forever. "I cannot live without my life! I cannot live without my soul!" He prays for eighteen years of haunting (until his death can reunite them). This isn\'t madness; it\'s metaphysical accuracy. He understands: Catherine is his soul, his life. Without her, he exists but doesn\'t live. Haunting is the only form their connection can now take—he\'ll accept supernatural torment over separation. His prayer will be granted. Catherine will haunt him, and he will prefer her ghost to any living presence.',
      
      'The chapter ends with Catherine\'s burial arrangements: Edgar wants her buried in family vault, Linton side of churchyard. Heathcliff (illegally, at night) will later arrange for grave to be dug half in churchyard, half outside—she belongs neither to Lintons nor to consecrated ground. He also bribes sexton to remove side of Catherine\'s coffin and his own when he dies, so their bodies can mingle in death. Death will be their consummation. The chapter establishes Volume II\'s supernatural dimension: ghost, haunting, obsession with the dead, graves more important than the living. Catherine\'s death doesn\'t end Volume I\'s love story—it transforms it into Gothic nightmare that will consume Heathcliff for eighteen years.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Ambiguous Grief / Grieving What Never Was',
      definition: 'Grief for relationship that never achieved its potential—mourning not just person lost but unlived possibilities. Complicated by fact that relationship was always impossible, so grieving both reality and fantasy.',
      context: 'Heathcliff grieves Catherine but their relationship never had fulfillment—they were children together, separated, she married another, died. He grieves not marriage or life together (never happened) but ontological bond that existed but could never be lived. He\'s grieving both her death AND the life they never had because she chose Edgar.',
      whyItMatters: 'Ambiguous grief is particularly difficult because you\'re mourning potential rather than memory. With fulfilled relationships, you have shared history to sustain you; with unfulfilled relationships, you mourn what might have been if circumstances differed. This explains why Heathcliff cannot "move on"—he\'s not mourning ended relationship but relationship that never began despite being metaphysically real. Modern applications: people grieving estranged family members where relationship was always troubled; people mourning relationships that ended before reaching potential; grief for "what might have been" often more consuming than grief for "what was" because imagination creates idealized version that reality can never match.'
    },
    {
      term: 'Grief as Rage / Kübler-Ross\'s Anger Stage',
      definition: 'Psychological understanding that grief often manifests as anger—at deceased for dying, at self for failing to prevent death, at universe for allowing loss. Anger is stage of grief, not opposite of grief.',
      context: 'Heathcliff\'s initial response to Catherine\'s death is rage: he curses her, calls her traitor, smashes his head against tree. He\'s furious at her for dying peacefully (abandoning him), for leaving him alone, for breaking her promise to haunt him. His anger IS his grief—they\'re not separate.',
      whyItMatters: 'Understanding grief includes anger prevents judging grieving people who seem "inappropriately" angry. Anger at the dead is extremely common—"how dare you leave me"—and doesn\'t indicate lack of love but overwhelming sense of abandonment. Kübler-Ross identified anger as one of five grief stages (denial, anger, bargaining, depression, acceptance). Heathcliff displays primarily anger and bargaining (prayer for haunting), never reaching acceptance. Modern grief therapy recognizes anger as valid grief expression requiring acknowledgment, not suppression. Cultural expectation of "peaceful" grief shames people whose grief is rage, complicating their mourning process.'
    },
    {
      term: 'Soul as External / The Doppelgänger Concept',
      definition: 'Idea that your soul/essence exists partially outside yourself, in another person, place, or object. Losing this external soul-carrier means losing part of your own existence. Germanic concept of "doppelgänger" (double-walker) captures this—another being who is somehow you.',
      context: 'Heathcliff: "I cannot live without my soul!" Catherine IS his soul—not metaphor, literal truth from his perspective. She\'s external location of his own essence. Her death means his soul is now dead/separated from him. He continues existing but is soulless, which is living death.',
      whyItMatters: 'This concept appears in many cultures: shamanic traditions where soul can leave body; Greek idea that lovers\' souls merge; Jungian psychology on projection of self onto others. Extreme codependency literalizes this: people who genuinely cannot function without specific other person because they\'ve located their sense of self in that person. Understanding "external soul" explains why some bereavements are more devastating than others—not just losing person but losing part of your own existence. Modern attachment theory recognizes that identity forms relationally—we ARE partially constructed through our connections, so losing connection means losing part of self. Healthy development maintains separate identity; codependent development creates merged identity where separation equals self-destruction.'
    },
    {
      term: 'Prayer for Haunting / Inverted Christianity',
      definition: 'Christian prayer structure (invocation, petition, duration) applied to un-Christian content: begging ghost to haunt rather than rest in peace. Uses religious form for Gothic content, showing how intensely felt experiences create their own rituals outside orthodox religion.',
      context: 'Heathcliff\'s prayer uses traditional structure: "Oh, God! It is unutterable!" (invocation), "Be with me always—take any form—drive me mad!" (petition), "haunt me... until I am with you" (duration). But content inverts Christianity: don\'t rest in peace, don\'t go to heaven, don\'t leave me for God—stay on earth and torment me.',
      whyItMatters: 'Gothic literature consistently inverts Christian symbolism to show how passionate experiences create their own religious systems outside orthodoxy. Heathcliff\'s prayer is genuinely religious in structure and fervor—he\'s not mocking religion but applying religious intensity to relationship that transcends conventional morality. This reveals how human need for transcendence, ritual, meaning-making persists even when official religion cannot contain the experience. Modern parallel: people creating personal rituals for grief, continuing bonds with deceased through practices outside religious tradition—talking to the dead, keeping belongings, sensing presence. These aren\'t "instead of" religion; they\'re alternative rituals for experiences religion doesn\'t adequately address. Secular societies still create rituals because human need for meaning-making rituals persists beyond religious institutions.'
    },
    {
      term: 'Liminal Space / Threshold Burial',
      definition: 'Liminal = threshold, neither one state nor another, between categories. Catherine\'s grave half in churchyard (consecrated) half outside (unconsecrated) places her in permanent threshold state, belonging to neither category.',
      context: 'Edgar wants Catherine buried in Linton family vault (claiming her for his family, Christian burial). Heathcliff arranges grave half in churchyard, half out—she\'s neither fully Linton nor fully damned, neither wholly saved nor wholly lost. Threshold placement reflects her threshold existence: neither fully civilized (Edgar) nor fully natural (Heathcliff), neither living nor dead (will haunt).',
      whyItMatters: 'Anthropologist Victor Turner identified liminality as crucial human experience: puberty rites, initiations, transitions between social states. Liminal spaces/times are dangerous, powerful, creative—existing between categories makes transformation possible but also vulnerable. Gothic literature uses physical liminality (thresholds, twilight, half-states) to represent psychological liminality. Catherine lived in threshold state (married to Edgar, bonded to Heathcliff) and dies into threshold state (grave straddling boundary). Her ghost will also be liminal: neither alive nor fully dead, neither presence nor absence. Modern understanding: many people exist in liminal states—immigrants between cultures, transgender people between traditional gender categories, mixed-race people between racial categories. Liminality can be source of creativity and richness but also profound discomfort because human minds like categories, and liminal existence resists categorization.'
    },
    {
      term: 'Premature Birth / Inherited Trauma',
      definition: 'Baby Catherine born two months early, triggered by mother\'s emotional crisis and death. Birth is traumatic, and baby inherits consequences of parents\' dysfunction—physically weak, motherless, born into grief and conflict.',
      context: 'Cathy born premature because of her mother\'s meeting with Heathcliff—the intensity triggers early labor and maternal death. Baby inherits parents\' tragedy from moment of birth: weak constitution, dead mother, father grieving, will grow up in shadow of mother she never knew but everyone compares her to.',
      whyItMatters: 'Intergenerational trauma transmits from parents to children through multiple pathways: genetic (maternal stress affects fetal development), environmental (growing up with grieving/traumatized parent), psychological (family narratives about who you are/should be). Cathy\'s premature birth literalizes trauma transmission: her mother\'s emotional crisis physically affects her development. Modern research confirms: maternal stress, trauma, even parental PTSD affects children\'s development, sometimes across multiple generations. Recognizing trauma transmission isn\'t deterministic (children can heal/break cycles) but acknowledges that children don\'t start with blank slate—they inherit parents\' unresolved issues physiologically and psychologically. Understanding this creates compassion for people whose struggles stem from inheritances beyond their control.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Heathcliff',
      development: 'His response to Catherine\'s death defines the rest of his life. Initial rage—cursing her, smashing his head bloody—reveals grief as fury at abandonment. Then transformation: curse becomes prayer for eternal haunting. He recognizes his remaining existence will be living death without her soul/presence, so he chooses haunted half-life over peaceful separation. This choice will define next eighteen years: he\'ll live but not LIVE, exist but not BE, maintaining connection to Catherine\'s ghost while indifferent to all living people. His statement "I cannot live without my soul" is literal truth—he\'ll continue physical existence but all that made him alive (connection to Catherine) is now dead. He becomes Gothic figure: the living dead, animated corpse, person who should have died but continues mechanically waiting for real death to reunite him with his soul.',
      keyTrait: {
        emoji: '💀',
        text: 'Living Dead'
      }
    },
    {
      name: 'Catherine Earnshaw Linton',
      development: 'Dead, but her death is transformation not ending. She "died quietly as a lamb" according to Nelly—found peace Edgar prayed for, release from impossible position between two men, two identities. BUT Heathcliff refuses to believe she rests—he insists she suffers as he does, that her peace is lie. And his prayer for haunting will bring her back as ghost. Death doesn\'t end her character; it transforms her from living woman to supernatural presence. Volume II Catherine will be ghost, memory, comparison point for daughter, obsession. Her dead presence will be more powerful than many living people\'s active presence. Gothic insight: sometimes the dead are more alive than the living.',
      keyTrait: {
        emoji: '👻',
        text: 'More Present Dead'
      }
    },
    {
      name: 'Edgar Linton',
      development: 'Demonstrates healthy grief: he holds his dead wife and living daughter, acknowledging loss while embracing continuity. He names daughter Catherine, ensuring wife\'s name continues. He wants proper Christian burial, believing wife\'s soul rests with God. His grief contains hope of heavenly reunion and comfort of child who resembles mother. He represents conventional mourning: accept death, trust in God, invest in living, remember but release. This is psychologically healthier than Heathcliff\'s path—but it\'s also less true to the Catherine-Heathcliff bond\'s nature. Edgar\'s healthy grief works because his relationship with Catherine was conventional; Heathcliff\'s pathological mourning reflects unconventional relationship. You cannot grieve codependent fusion the same way you grieve healthy attachment.',
      keyTrait: {
        emoji: '🕊️',
        text: 'Healthy Grief'
      }
    },
    {
      name: 'Catherine Linton (baby Cathy)',
      development: 'Enters world in tragedy: premature, tiny, weak, motherless. Her first experience is death—mother dies creating her. She\'ll grow up with ghost-mother everyone talks about but she never knew, father who loves but grieves her, name that\'s inheritance and burden. She\'s blank slate (baby) but already positioned in tragedy\'s next generation. She represents hope (new life) and doom (inherits parents\' unresolved issues). Will she escape the cycle or relive it? Her premature weakness suggests inheritance of trauma—she begins life already damaged by parents\' dysfunction. Volume II will show whether children can transcend parents\' tragedy or whether trauma inevitably reproduces across generations.',
      keyTrait: {
        emoji: '🌱',
        text: 'Inherited Trauma'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // Significant passages with analysis
  // ===================================================================
  quotes: [
    {
      text: "May she wake in torment! Why, she's a liar to the end! Where is she? Not there—not in heaven—not perished—where?",
      analysis: 'Heathcliff cannot accept that Catherine died peacefully. Her peace would mean she chose to leave him, which contradicts his understanding of their bond as metaphysically inseparable. He insists she must be suffering as he is—her peace would be betrayal worse than marrying Edgar. His questioning "where is she?" reflects genuine metaphysical confusion: if she\'s his soul, and his soul is still here (in him), how can she be elsewhere? The logic is deranged but internally consistent: separation is impossible, therefore she cannot really be "gone," she must be somewhere he can still be connected to her—which means haunting, not heaven.'
    },
    {
      text: "I cannot live without my life! I cannot live without my soul!",
      analysis: 'Most famous line in the novel. Captures the Catherine-Heathcliff bond\'s nature: not romantic preference but ontological necessity. "Cannot LIVE without my LIFE"—tautological, paradoxical, accurate. He\'ll continue biological existence but everything that makes existence LIFE (consciousness, meaning, feeling) is located in Catherine. "Cannot live without my soul"—Catherine IS his soul, externalized. With her dead, he\'s soulless animate corpse. This line influenced countless Gothic/Romantic works exploring love as metaphysical identity rather than emotional attachment. It\'s simultaneously beautiful (profound connection) and horrifying (codependent fusion that makes separate existence impossible).'
    },
    {
      text: "She died quietly as a lamb... her life closed in a gentle dream.",
      analysis: 'Nelly\'s Christian interpretation of Catherine\'s death: peaceful, gentle, lamb-like (Christ symbolism), gentle dream. This is conventional good death narrative—acceptance, release, spiritual peace. But novel questions this interpretation. Was Catherine\'s death really peaceful, or does Nelly impose peaceful narrative because that\'s what proper death should be? Heathcliff rejects this narrative completely—he knows Catherine couldn\'t be at peace. Brontë gives us competing narratives of same event: Nelly\'s orthodox Christian interpretation vs. Heathcliff\'s Gothic reading. Readers must decide: did Catherine truly find peace, or is Nelly\'s account wishful thinking imposed on ambiguous death?'
    },
    {
      text: "Do not leave me in this abyss, where I cannot find you!",
      analysis: 'Heathcliff experiences Catherine\'s absence as abyss—void, nothingness, place where nothing exists. Not sadness or pain (which are feelings) but absence of feeling itself—complete emptiness. Abyss imagery appears throughout existential literature (Nietzsche, Sartre, Camus) representing meaninglessness, void where meaning should be. For Heathcliff, Catherine was the source of meaning; without her, reality becomes abyss. His prayer "do not leave me in this abyss" begs her to prevent nihilistic void by maintaining presence through haunting. Better to be haunted (some connection) than to face abyss (no connection). Gothic horror often uses abyss imagery; here it\'s applied to bereavement—losing your soul-connection opens void beneath existence itself.'
    }
  ],
  
  // ===================================================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // Themes and literary techniques with expert explanation
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Healthy vs. Pathological Grief',
        explanation: 'The chapter contrasts Edgar\'s healthy grief (accepting death, investing in daughter, trusting God, remembering but releasing) with Heathcliff\'s pathological grief (refusing acceptance, cursing the dead, praying for haunting, remaining bonded to corpse). But the contrast isn\'t simple judgment. Edgar\'s healthy grief works because his relationship with Catherine was conventional attachment; you can healthily grieve what you had. Heathcliff\'s pathological grief responds to unconventional bond; you cannot "healthily" grieve metaphysical fusion because conventional grief assumes separate identities that death separates—but Catherine-Heathcliff\'s bond exists at level prior to separation. The novel doesn\'t say pathological grief is good, but suggests it\'s inevitable response to certain kinds of bonds. This challenges psychology\'s assumption that there\'s one right way to grieve: maybe relationship\'s nature determines grief\'s appropriate form.'
      },
      {
        name: 'Death as Transformation Not Ending',
        explanation: 'Victorian death culture emphasized "good death"—acceptance, family present, Christian faith, peaceful release, belief in heavenly reunion. But Gothic literature challenges this: death doesn\'t end relationships, it transforms them into haunting. Catherine\'s death is simultaneously Victorian good death (peaceful, baby survives, husband present) AND Gothic transformation (becomes ghost, haunts Heathcliff, presence continues through supernatural means). Brontë shows both interpretations are true: Nelly and Edgar experience Victorian good death; Heathcliff experiences Gothic transformation. This reflects reality: death\'s meaning depends on relationship. Some deaths are release; some are transformation; some are catastrophe. There\'s no universal experience of death, only particular relationships ending or continuing in new form.'
      },
      {
        name: 'Intergenerational Transmission Begins',
        explanation: 'Baby Cathy\'s birth establishes Volume II\'s structure: next generation inherits first generation\'s unresolved issues. She\'s premature (physically weakened by mother\'s trauma), motherless (will be raised in ghost\'s shadow), named after mother (will be compared constantly to woman she never knew), born into household of grief. She doesn\'t choose this inheritance; it\'s imposed from conception. The novel asks: can children escape parents\' tragedy? Cathy is both hope (new generation = possibility of different outcome) and doom (trauma transmits automatically unless consciously interrupted). Her story will test whether intergenerational cycles can be broken or whether trauma inevitably reproduces across generations. Modern understanding: trauma transmission is real but not deterministic—children inherit parents\' issues but can heal with intervention, awareness, different choices.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Parallel but Opposite Grief Narratives',
        explanation: 'Brontë gives us two simultaneous narratives of Catherine\'s death: Nelly\'s (peaceful, Christian, good death) and Heathcliff\'s (tormented, Gothic, non-death). Same event, opposite meanings. Nelly: "She died quietly as a lamb." Heathcliff: "May she wake in torment!" Both claim truth. The novel doesn\'t resolve which is accurate—Nelly truly observed peaceful death, but Heathcliff truly knows Catherine couldn\'t be at peace. This technique reveals that reality contains multiple truths depending on perspective. Victorian readers would trust Nelly\'s Christian interpretation; Gothic readers would trust Heathcliff\'s supernatural intuition. Modern readers recognize both are true: Catherine\'s body died peacefully, but her ontological bond with Heathcliff cannot rest. Physical and metaphysical realities operate by different rules.'
      },
      {
        name: 'From Curse to Prayer (Genre Transformation)',
        explanation: 'Heathcliff\'s speech transforms mid-utterance from curse ("May she wake in torment!") to prayer ("Be with me always"). Curse damns, prayer supplicates; curse is attack, prayer is plea. The transformation shows his grief moving from rage at abandonment to desperate need for continued connection. Formally, curse and prayer use similar rhetoric (invocation, imperative, divine/supernatural address) but opposite intentions. Brontë shows how thin the line is between cursing and praying—both address powers beyond human control, both express overwhelming need. Genre transforms without break: revenge tragedy becomes Gothic romance becomes religious supplication. This mirrors Heathcliff\'s psychology: rage IS his love, curse IS his prayer, damning Catherine IS begging her to return.'
      },
      {
        name: 'Body vs. Soul Dualism',
        explanation: 'Chapter establishes dualist framework: Catherine\'s body is dead/buried, but her soul continues as ghost. Edgar believes soul ascends to heaven (Christian dualism: body dies, soul lives with God). Heathcliff believes soul remains on earth as ghost (Gothic dualism: body dies, soul haunts). Both are dualist—body and soul separate at death—but disagree about soul\'s destination. This philosophical framework enables the novel\'s supernatural elements: if souls exist independently of bodies, ghosts are metaphysically possible. Brontë doesn\'t require readers to literally believe in ghosts; she requires us to recognize that if you believe humans have souls that survive death, then haunting is coherent possibility. Victorian readers overwhelmingly believed in soul\'s immortality; Gothic literature just questions whether souls always go to heaven or sometimes remain earthbound due to unfinished business.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine losing the one person who defined your existence—not spouse, not parent, but the person you experienced as extension of your own self. Your twin, your best friend since childhood, the person who knew you before you knew yourself. They die. You weren\'t married to them, maybe weren\'t even in contact for years, but they were YOUR PERSON. Everyone else can move on—had other relationships, normal grief. But you? You walk around like functioning corpse. Work, eat, sleep—but not LIVE. You talk to them constantly. Keep their belongings as shrine. Some days you swear you feel them near. People say "you need to move on," "they\'d want you to be happy," "time heals." But you don\'t want to move on. You prefer this painful connection to peaceful separation. You\'d rather sense their ghost than accept their absence. This isn\'t healthy—therapist would diagnose complicated grief. But it\'s also your truth: they were your soul, and you can\'t live without your soul.',
    
    parallels: [
      '💔 **"I cannot live without my life! I cannot live without my soul!"**: Heathcliff experiences Catherine as essential part of his existence. Modern parallel: people who lose twins, lifelong friends, soulmates and describe feeling only half-alive afterward. Not metaphor—actual experience of losing part of self when certain connections sever. Psychology recognizes: identity forms relationally; losing keystone relationship can create existential crisis.',
      '⚰️ **Praying for haunting, not heaven**: Heathcliff wants Catherine as ghost, not at peace in heaven. Parallel: bereaved people who maintain active relationships with deceased—talk to them, sense presence, make decisions asking "what would they want?" "Continuing bonds" with dead is now recognized as valid grief form, not just denial. Some people need ongoing connection, not closure.',
      '😤 **Grief as rage**: Heathcliff\'s initial response is fury—cursing Catherine, smashing his head bloody. Parallel: Kübler-Ross\'s anger stage of grief. Many bereaved people feel intense rage at deceased for dying ("how dare you leave me"), at God, at universe. Anger-as-grief is normal but often shamed because culture expects "peaceful" mourning. Understanding rage as legitimate grief response prevents judging people who mourn "badly."',
      '💀 **Living death**: Heathcliff will exist physically for 18 more years but experience it as living death—animated corpse waiting for real death to reunite with soul. Parallel: people in profound grief who continue functioning (work, parenting, daily tasks) but describe feeling dead inside—going through motions without truly living. Prolonged complicated grief recognized as condition requiring intervention, not just "time."',
      '👶 **Baby as inadequate replacement**: Edgar holds newborn daughter while mourning wife—baby named Catherine but isn\'t Catherine. Parallel: "replacement babies" born after sibling dies, or new relationships after devastating loss. The new person can\'t replace the lost one; they\'re different relationship. Bereaved often feel guilty that new connection doesn\'t fill the void, as if that means they don\'t value new person—but it just means losses aren\'t interchangeable.',
      '⛪ **Competing grief narratives**: Nelly describes "good death" (peaceful, Christian). Heathcliff experiences agonized loss. Parallel: bereaved people receiving conflicting messages—"they\'re at peace" (comforting to some, enraging to others), "God needed another angel" (meaningless platitude), "they\'re in a better place" (doesn\'t help those left behind). Different people need different grief narratives; imposing single "correct" story invalidates people whose experience differs.'
    ],
    
    discussionPrompt: 'We expect grief to follow predictable stages culminating in "acceptance" and "moving on." But what about losses too profound for acceptance? People who lose children, twins, soulmates sometimes never "move on"—they build life around permanent wound, maintain ongoing connection to deceased, choose haunted half-life over peaceful separation. Is this pathological (requiring intervention) or valid alternative to conventional grief? When does refusal to "let go" become problem, and when is it honoring a bond so deep that detachment would mean self-betrayal? Can we hold both: some grief is complicated and needs treatment AND some losses are so catastrophic that "moving on" is neither possible nor desirable?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '👻',
      name: 'Ghost-Life: The Living Dead',
      explanation: 'Heathcliff transitions from living man to living ghost—he\'ll exist another 18 years but experience it as death. This thread explores: What does it mean to be biologically alive but existentially dead? Can you lose your soul and continue? Volume II will show Heathcliff as animated corpse, mechanically completing revenge while his actual life is lived in relationship with Catherine\'s ghost. Is this tragic devotion or pathological refusal to engage with life?'
    },
    {
      emoji: '⚰️',
      name: 'Two Deaths, Two Griefs',
      explanation: 'Edgar grieves conventionally (Christian, accepting, investing in living daughter). Heathcliff grieves unconventionally (Gothic, refusing, maintaining bond with dead). This thread questions: Is there "right" way to grieve, or does relationship type determine grief type? Edgar can grieve healthily because his relationship with Catherine was conventional; Heathcliff cannot because his bond with Catherine was unconventional. Maybe unconventional bonds require unconventional grief.'
    },
    {
      emoji: '🔄',
      name: 'Next Generation Positioned',
      explanation: 'Catherine dies giving birth—one generation ends as next begins. Baby Cathy enters world already shadowed by mother\'s death and father\'s grief. This thread tracks how trauma transmits: Cathy will grow up motherless, compared constantly to ghost-mother she never knew, raised by grieving father. She inherits parents\' unresolved tragedy before having any choices of her own. Can she escape inheritance or must she relive it?'
    },
    {
      emoji: '💀',
      name: 'Death as Door to Supernatural',
      explanation: 'Catherine\'s death opens novel\'s supernatural dimension—she won\'t rest, Heathcliff prays for haunting, grave becomes site of supernatural activity. Volume I was realistic (psychological intensity without supernatural); Volume II will be Gothic (actual ghost, haunting, uncanny). Death is transition not just for Catherine but for novel itself—from realism to Gothic fantasy, from psychology to metaphysics.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // 5-7 open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Healthy vs. Pathological Grief',
      question: 'Edgar accepts Catherine\'s death and invests in their daughter. Heathcliff refuses acceptance and maintains connection with Catherine\'s ghost. Which grief is "better"? Or is this wrong question—maybe relationship type determines appropriate grief type? Can unconventional bonds require unconventional grief? How do we distinguish between complicated grief needing intervention vs. valid alternative grief that Western psychology doesn\'t adequately recognize?'
    },
    {
      title: 'The "I Cannot Live Without My Soul" Claim',
      question: 'Heathcliff says "I cannot live without my soul"—experiencing Catherine as essential part of his own existence. Is this: (1) beautiful recognition of profound connection, (2) evidence of unhealthy codependent fusion, or (3) literal truth about how human identity works (we ARE partially constructed through our connections)? Can separate people truly share identity, or is this always pathological enmeshment?'
    },
    {
      title: 'Praying for Haunting',
      question: 'Heathcliff prays for Catherine to haunt him—preferring tormented connection to peaceful separation. Is this: (1) romantic devotion beyond death, (2) selfish demand that she not rest so he can maintain connection, or (3) recognition that certain bonds genuinely cannot be severed by death? Do the dead have obligation to "rest in peace" for benefit of living, or is it acceptable for living to request ongoing connection?'
    },
    {
      title: 'Grief as Rage',
      question: 'Heathcliff\'s grief manifests as rage—cursing Catherine, smashing his head bloody. This seems inappropriate (shouldn\'t grief be sad?), yet it\'s psychologically accurate (anger is stage of grief). Why does culture expect "peaceful" mourning? What happens when we shame people whose grief is angry? How do we hold space for violent grief without endorsing violence toward others?'
    },
    {
      title: 'Baby as Replacement?',
      question: 'Edgar holds newborn daughter named Catherine while mourning wife Catherine. The baby represents continuity (mother\'s name lives on) but also inadequate replacement (she\'s not her mother). How do bereaved parents negotiate "replacement baby" feelings? Is it possible to fully love new child while grieving lost relationship, or does grief always shadow new connection? When does continuation become burden for next generation?'
    },
    {
      title: 'Two Interpretations of Same Death',
      question: 'Nelly describes Catherine\'s death as peaceful ("died quietly as lamb"), but Heathcliff insists she cannot be at peace. They observed same death but construct opposite narratives. Which is true? Can death have multiple simultaneous truths depending on observer\'s relationship to deceased? What does this reveal about how meaning is constructed, not inherent?'
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // For teachers: writing prompts, activities, cross-curricular connections
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Writing Profound Grief: The Unacceptable Loss',
      description: 'Write a 3-4 page narrative or personal essay about a loss so profound that conventional grief narratives (stages, acceptance, moving on) feel inadequate or offensive. This could be fiction (imagined loss) or creative nonfiction (real experience). Requirements: (1) Show, don\'t tell, the relationship\'s significance—make readers understand why this loss cannot be processed conventionally. (2) Include well-meaning but useless advice from others ("they\'re in better place," "time heals"). (3) Explore anger as grief—not sadness but rage. (4) Resist neat resolution—end without acceptance if that\'s truthful. Challenge: Make readers understand unconventional grief without either romanticizing it or dismissing it as pathology.',
      purpose: 'This exercise teaches: (1) Grief has no universal correct form—relationship determines grief. (2) Sometimes "healthy" grief narratives are inadequate for catastrophic losses. (3) Writing can hold complexity—grief that is simultaneously understandable and problematic, valid and unhealthy. (4) Resistance to closure is sometimes truthful, not just poor craft. Students learn that honest writing doesn\'t impose false resolution and that powerful grief writing validates difficult emotions rather than prescribing "correct" feelings.'
    },
    
    activity: {
      title: 'Analyzing Grief Narratives: Cultural Scripts for Mourning',
      description: 'Divide class into groups. Assign each group a grief narrative type: (1) Christian/Religious (death as transition, reunion in heaven, "God\'s plan"). (2) Psychological/Therapeutic (stages of grief, acceptance as goal, moving on). (3) Romantic/Gothic (eternal devotion, continued bonds, refusal to release). (4) Cultural variations (Irish wake, Day of the Dead, etc.). Groups research their assigned narrative, then present: What does it promise mourners? Who does it comfort vs. alienate? After presentations, compare: Which narrative does Edgar embody? Which does Heathcliff? Discuss: Why might some people need conventional narratives while others need alternatives? When do grief narratives help vs. constrain?',
      materials: 'Research resources on grief cultures, presentation tools'
    },
    
    crossCurricular: {
      title: 'Psychology, Thanatology, & Anthropology: The Many Forms of Grief',
      description: 'Pair chapter with: (1) Psychology: Kübler-Ross stages (and critiques of stage theory), complicated/prolonged grief disorder, continuing bonds theory, attachment theory and loss. (2) Thanatology: Cultural variations in death rituals, "good death" concepts across cultures, ghost beliefs and their psychological functions. (3) Anthropology: Cross-cultural mourning practices, ancestor veneration, how different cultures maintain relationships with deceased. Key question: Is Heathcliff\'s grief pathological or culturally specific? Western psychology pathologizes continued bonds; other cultures normalize them. Have students explore: How do cultural assumptions shape what we consider "healthy" vs. "unhealthy" grief? Can we recognize complicated grief needing intervention while also validating grief forms that resist Western psychological norms?',
      subjects: ['Psychology', 'Thanatology', 'Anthropology', 'Comparative Religion']
    }
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating one-liner with gold gradient styling
  // ===================================================================
  whyLiteratureMatters: getThenVsNowMessage(16),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Build anticipation for next chapter
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🏃‍♀️',
    title: 'Escape from Hell: Isabella\'s Flight to Freedom',
    preview: 'Catherine is dead, but the tragedy isn\'t over—it\'s just beginning for those left behind. Isabella has been trapped at Wuthering Heights for months, married to a man who despises her, watching Heathcliff descend into grief-fueled madness. The night of Catherine\'s death, everything explodes: Heathcliff returns from Catherine\'s deathbed covered in blood, more monster than man. Hindley attempts murder with a knife. Violence erupts—and in the chaos, Heathcliff throws the knife at Isabella, barely missing. Crystal clarity: stay and die, or run and survive. Isabella flees across the moors in darkness, arriving at Thrushcross Grange at dawn. She tells Nelly everything—the complete horror of her marriage, Heathcliff\'s systematic degradation of Hareton, the nightmare she\'s been living. Then she escapes to London, pregnant with Heathcliff\'s child, never to return.',
    hookQuestion: 'Is Isabella\'s escape triumph (she survived!) or tragedy (she\'ll live in exile, social death, never recovering from trauma)? How do you flee a marriage when Victorian law makes divorce impossible and wives have no legal rights? What does it cost to choose survival over respectability? And what about the child she\'s carrying—will Heathcliff\'s son inherit his father\'s cruelty or his mother\'s suffering? Volume I ends in complete destruction: Catherine dead, Isabella exiled, Hindley dying, Edgar bereft, Heathcliff living dead. Can anything be salvaged? Next: Volume II begins—twelve years later, the children inherit their parents\' tragedy.'
  }
}

