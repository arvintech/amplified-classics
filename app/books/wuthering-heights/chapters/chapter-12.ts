/**
 * WUTHERING HEIGHTS - CHAPTER 12
 * 
 * Catherine suffers a complete mental and physical breakdown from the unbearable strain
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter12: ChapterData = {
  number: 12,
  title: '',
  
  readingTime: 20,
  pages: 12,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Unable to endure the impossible choice between Edgar and Heathcliff, Catherine suffers a complete mental and physical breakdown—locking herself in her room, refusing food, and descending into delirium that reveals her deepest psychological truths.',
    
    full: [
      'After Edgar\'s ultimatum demanding she choose between him and Heathcliff, Catherine retreats to her room and locks herself in. She refuses food for three days, and Nelly—believing Catherine is performing melodrama to manipulate Edgar—deliberately doesn\'t inform Edgar of the severity of Catherine\'s condition. This is Nelly\'s crucial failure: she judges Catherine as manipulative rather than recognizing genuine crisis, allowing the situation to escalate dangerously.',
      
      'When Nelly finally checks on Catherine, she finds her in a terrifying state: fevered, emaciated, pulling feathers from her pillow and arranging them obsessively. Catherine is delirious, experiencing time collapse—she thinks she\'s a child again, back at Wuthering Heights, confused about why she\'s at Thrushcross Grange, unable to recognize her own reflection in the mirror. She speaks to Heathcliff as if he\'s present, relives their childhood on the moors, and expresses desperate longing to return to the time before social consciousness divided them. Her breakdown reveals the truth: she\'s never been able to integrate her authentic self (wild Catherine with Heathcliff) with her social self (respectable Mrs. Linton).',
      
      'Catherine\'s delirium includes one of the novel\'s most haunting passages: she describes a dream of heaven where she was miserable, and the angels threw her out, and she woke sobbing with joy to be back on the heath. She says if she were in heaven and Heathcliff were still in the earth, she would be utterly wretched—revealing that her spiritual home is with Heathcliff in nature, not in any civilized afterlife. She also makes explicit her longing for death as return to childhood: "I wish I were a girl again, half-savage and hardy, and free!"',
      
      'Edgar finally realizes the severity of Catherine\'s illness and is devastated—his ultimatum has nearly killed his wife. He\'s full of self-recrimination but also genuine love and fear. Meanwhile, Nelly must confront her own responsibility: her judgmental dismissal of Catherine\'s distress allowed it to become life-threatening. The chapter ends with Catherine seriously ill, pregnant (we learn for the first time), and unlikely to survive childbirth given her fragile condition. The household understands she\'s dying—the only question is whether she\'ll live long enough to see Heathcliff one more time, and whether that encounter will finish killing her.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Hysteria (Victorian Medical Concept)',
      definition: 'A controversial Victorian medical diagnosis applied almost exclusively to women, attributed to "wandering womb" and treated as mental illness. Used to pathologize women\'s emotional expression and rebellion against social constraints.',
      context: 'Catherine\'s breakdown would have been diagnosed as "hysteria" by Victorian medicine—but Brontë shows it as rational response to impossible social constraints, not irrational female madness.',
      whyItMatters: 'Understanding how Victorian medicine pathologized women\'s suffering helps us see Brontë\'s critique: Catherine isn\'t sick because she\'s female; she\'s sick because society won\'t accommodate her authentic needs. Modern readers must resist Victorian framework that blamed women\'s bodies/minds for suffering caused by social structures. This parallels ongoing debates about whether mental illness is individual pathology or response to oppressive conditions.'
    },
    {
      term: 'Psychological Realism',
      definition: 'Literary technique depicting characters\' internal mental states with accuracy and complexity, showing how thought, memory, and emotion actually function rather than simplified versions.',
      context: 'Catherine\'s delirium—time collapse, confusion, obsessive behaviors, regression to childhood—represents sophisticated psychological realism. Brontë shows how consciousness fragments under extreme stress decades before psychology formally described these phenomena.',
      whyItMatters: 'Wuthering Heights is groundbreaking for its psychological accuracy. Catherine\'s breakdown shows dissociation, regression, and identity fragmentation that modern psychology recognizes as trauma responses. Brontë anticipated psychological concepts long before Freud, showing she understood human consciousness profoundly. This makes the novel feel modern despite 1847 publication.'
    },
    {
      term: 'Divided Self / Double Consciousness',
      definition: 'Psychological state where one person inhabits incompatible identities simultaneously, creating internal conflict that can lead to breakdown when integration becomes impossible.',
      context: 'Catherine has lived as two people: wild Catherine with Heathcliff (authentic self) and Mrs. Linton (social self). Her breakdown occurs when she can no longer maintain both simultaneously. The divided self collapses.',
      whyItMatters: 'This concept explains Catherine\'s illness as structural, not individual. She\'s not weak or mad—she\'s torn apart by incompatible social demands. Anyone forced to inhabit fundamentally opposed identities will experience similar strain. This validates the suffering of people who must code-switch, perform social selves, or hide authentic identities for survival.'
    },
    {
      term: 'Unreliable Narrator (Nelly\'s Culpability)',
      definition: 'When narrator\'s perspective, judgments, or actions affect outcomes, making their account both biased and consequential.',
      context: 'Nelly judges Catherine as "performing" and deliberately doesn\'t tell Edgar about her condition. This judgment directly contributes to Catherine\'s decline—if Nelly had recognized genuine crisis, intervention might have prevented worst outcomes. Her unreliability isn\'t just interpretive but causal.',
      whyItMatters: 'This chapter reveals Nelly as not just biased observer but active participant whose judgments have material consequences. We must evaluate her narrative critically: when she dismisses others\' suffering as manipulation, real harm results. This teaches critical reading: narrators aren\'t neutral—their judgments and omissions shape events they claim to merely witness.'
    },
    {
      term: 'Somatization',
      definition: 'When psychological distress manifests as physical illness—the body expressing what the mind cannot process or the social world won\'t accommodate.',
      context: 'Catherine\'s psychological impossibility (divided self, forced choice) becomes physical illness (fever, emaciation, brain fever). Her body breaks down because her social situation is literally unbearable.',
      whyItMatters: 'Somatization explains how social oppression produces medical symptoms. Catherine isn\'t "faking" and it\'s not "just" psychological—the stress is materially affecting her body. This challenges mind/body dualism: psychological suffering IS physical suffering. Understanding this prevents dismissing mental health as "less real" than physical health and recognizes how oppressive structures literally sicken people.'
    },
    {
      term: 'Regression / Temporal Collapse',
      definition: 'During psychological crisis, experiencing past as present—time loses linear structure, and trauma/childhood memories invade current consciousness as if happening now.',
      context: 'Catherine\'s delirium collapses thirty years: she experiences herself as child at Wuthering Heights, confused about why she\'s at Thrushcross Grange, speaking to Heathcliff as if he\'s present. Past and present merge.',
      whyItMatters: 'Brontë shows how trauma disrupts time sense—a psychological reality modern therapy recognizes. When overwhelmed, we regress to earlier states, experience flashbacks, lose sense of present. Catherine\'s temporal confusion isn\'t random madness but accurate representation of how consciousness fragments under unbearable stress. This makes her a psychologically realistic character, not a Gothic stereotype.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Catherine Earnshaw Linton',
      development: 'Catherine\'s breakdown strips away all social performance, revealing her authentic self and deepest truths. In delirium, she regresses to childhood, speaks to absent Heathcliff, pulls feathers obsessively, cannot recognize her reflection. Her fragmented speech reveals: (1) She never integrated her two selves (wild Catherine vs. Mrs. Linton); (2) She experiences the marriage as betrayal of authentic self; (3) She longs for death as return to childhood freedom; (4) Her spiritual home is with Heathcliff in nature, not heaven with Edgar in civilization. The social Catherine was always performance—under it, the wild child remained trapped and suffering.',
      keyTrait: {
        emoji: '🪶',
        text: 'Fragmenting Self'
      }
    },
    {
      name: 'Nelly Dean',
      development: 'Nelly\'s judgmental dismissal of Catherine\'s distress proves catastrophic. She believes Catherine is "performing" manipulation, so she deliberately doesn\'t inform Edgar for three days. This reveals Nelly\'s class resentment and moral rigidity: she disapproves of Catherine\'s passion, judges her as spoiled and manipulative, and punishes her through tactical neglect. When forced to confront that Catherine is genuinely dying, Nelly experiences guilt but also self-justification. This chapter exposes Nelly as not neutral observer but active participant whose prejudices have material consequences.',
      keyTrait: {
        emoji: '⚖️',
        text: 'Judgmental & Culpable'
      }
    },
    {
      name: 'Edgar Linton',
      development: 'Edgar transitions from righteous husband enforcing reasonable boundaries to devastated man realizing his ultimatum is killing his wife. His self-recrimination is genuine—he loves Catherine and never wanted to harm her. But he also can\'t accept her bond with Heathcliff, even understanding it\'s killing her to break it. He\'s trapped between legitimate needs (marital primacy) and the reality that meeting those needs destroys the woman he loves. His tender care during her illness shows genuine love, but it\'s insufficient to save her.',
      keyTrait: {
        emoji: '😢',
        text: 'Loving but Insufficient'
      }
    },
    {
      name: 'Heathcliff (absent but present)',
      development: 'Though Heathcliff doesn\'t appear in this chapter, he dominates it. Catherine\'s delirium is filled with him—she speaks to him, remembers their childhood, expresses that heaven without him would be hell. His absence is the wound she cannot survive. The chapter makes clear: Edgar is her husband, but Heathcliff is her soulmate. The conflict between these bonds is what\'s literally killing her.',
      keyTrait: {
        emoji: '👻',
        text: 'Absent but Omnipresent'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'Oh, I\'m burning! I wish I were out of doors! I wish I were a girl again, half-savage and hardy, and free; and laughing at injuries, not maddening under them! Why am I so changed? Why does my blood rush into a hell of tumult at a few words?',
      analysis: 'This cry reveals Catherine\'s core tragedy: she recognizes her authentic self (wild, free child) has been destroyed by social transformation. "Why am I so changed?" is the novel\'s central question—civilization has made her vulnerable ("maddening under" injuries) where she was once resilient ("laughing at injuries"). She understands that becoming Mrs. Linton meant losing Catherine Earnshaw. The "burning" and "blood rush" describe literal fever but also metaphorical impossibility of living as divided self. This passage indicts civilization as making people fragile through domestication.'
    },
    {
      text: 'That\'s a turkey\'s... and this is a wild duck\'s; and this is a pigeon\'s. Ah, they put pigeons\' feathers in the pillows—no wonder I couldn\'t die! Let me take care to throw it on the floor when I lie down. And here is a moor-cock\'s; and this—I should know it among a thousand—it\'s a lapwing\'s. Bonny bird; wheeling over our heads in the middle of the moor.',
      analysis: 'Catherine\'s obsessive sorting of feathers shows psychological fragmentation but also represents her attempt to reconnect with nature and childhood. She identifies moorland birds—lapwing, moor-cock—species from the wild landscape of her childhood with Heathcliff. The feathers are domestic (pillow) but she recognizes their wild origins. This symbolizes her life: wild nature (authentic self) trapped inside domestic civilization (marriage to Edgar). The lapwing wheeling over the moors evokes freedom, and her recognition "among a thousand" shows how deeply imprinted nature is in her consciousness. She\'s trying to gather fragments of her lost authentic self.'
    },
    {
      text: 'I\'m sure I should be myself were I once among the heather on those hills... Open the window again wide: fasten it open! Quick, why don\'t you move?... I want to feel it—it comes straight down the moor—do let me have one breath!',
      analysis: 'Catherine believes return to the moors would restore her authentic self: "I should be myself." This reveals the novel\'s geography of identity—Catherine is herself on the moors with Heathcliff, false at Thrushcross Grange as Mrs. Linton. The wind from the moors is breath of authentic life; she\'s suffocating in civilized enclosure. The desperate "why don\'t you move?" directed at Nelly shows Catherine\'s complete dependency on others to grant her access to nature—she\'s trapped by walls, doors, society. This moment crystallizes how civilization imprisons authentic self, making literal what was psychological: the windows/doors represent social barriers preventing return to authentic identity.'
    },
    {
      text: 'If I were in heaven, Nelly, I should be extremely miserable... I dreamt once that I was there... heaven did not seem to be my home; and I broke my heart with weeping to come back to earth; and the angels were so angry that they flung me out into the middle of the heath on the top of Wuthering Heights; and I woke sobbing for joy.',
      analysis: 'This famous passage reveals Catherine\'s spiritual values oppose Christian civilization entirely. Heaven (Christian afterlife, refinement, angels) would make her "extremely miserable." Her true home is earth—specifically the heath, specifically Wuthering Heights. Being "flung out" of heaven by angry angels is reward, not punishment; she "sobs for joy" at return to moors. This inverts Victorian religious values completely: Brontë has Catherine reject heaven itself in favor of earthly, natural, wild existence. It\'s radical spiritual statement: civilization\'s heaven is Catherine\'s hell; nature\'s "hell" (wild, harsh moors) is her heaven. This prefigures her later statement that seven years in heaven without Heathcliff would be hell.'
    },
    {
      text: 'Nelly, I\'ll tell you what I thought, and what has kept recurring and recurring till I feared for my reason. I thought as I lay there, with my head against that table leg, and my eyes dimly discerning the grey square of the window, that I was enclosed in the oak-panelled bed at home; and my heart ached with some great grief which, just waking, I could not recollect.',
      analysis: 'Catherine\'s temporal confusion—thinking she\'s at Wuthering Heights while actually at Thrushcross Grange—shows how her consciousness has never left childhood. She\'s been performing Mrs. Linton while her authentic consciousness remained at Wuthering Heights with Heathcliff. The "great grief which... I could not recollect" is her marriage, her choice of Edgar, her betrayal of Heathcliff—trauma so profound she dissociates from it. But it "keeps recurring"—we can\'t escape what we repress; it returns as symptom, grief, "fear for my reason." This passage demonstrates sophisticated understanding of repression and trauma: what we can\'t consciously acknowledge emerges as psychological distress and physical illness.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Social Constraints as Illness',
        explanation: 'Catherine\'s breakdown isn\'t individual pathology but rational response to impossible social demands. Victorian society insisted women be one unified self (respectable wife) while denying expression of authentic desires. Catherine cannot be both wild and civilized, both Edgar\'s wife and Heathcliff\'s soulmate. The forced choice makes her literally sick. Brontë suggests civilization itself is pathological—creating conditions under which authentic feeling cannot be expressed without causing breakdown. This critiques Victorian tendency to blame women\'s "hysteria" on female weakness rather than recognizing structural oppression as cause of suffering.'
      },
      {
        name: 'Childhood as Lost Paradise',
        explanation: 'In delirium, Catherine returns to childhood—before social consciousness, before class mattered, before she knew she couldn\'t be with Heathcliff. Childhood becomes mythic space of authenticity and freedom that civilization destroys through socialization. The tragedy isn\'t losing childhood (everyone does) but that for Catherine, childhood was only time she could be authentic self. Brontë explores whether we can ever integrate childhood wildness with adult social demands, or if growing up means permanent loss of authentic self. Catherine\'s death becomes literalized refusal to accept that loss—she\'d rather die than live without authentic self.'
      },
      {
        name: 'Nature vs. Civilization (Literal Opposition)',
        explanation: 'The window Catherine desperately wants opened symbolizes barrier between civilization (Thrushcross Grange, enclosed spaces, social roles) and nature (moors, wind, freedom, authentic self). She believes wind from the moors would heal her—and she\'s partly right. Her illness comes from civilized enclosure; nature represents psychic health. This isn\'t romanticization but structural observation: Catherine literally cannot survive in civilization. Some humans, Brontë suggests, are fundamentally incompatible with domestication. The novel asks: what do we do with people who cannot be civilized without destroying them? Current answer: force them to conform or let them sicken/die.'
      },
      {
        name: 'The Impossibility of Integration',
        explanation: 'Catherine tried to have everything: Edgar\'s social position and Heathcliff\'s spiritual connection, civilization\'s safety and nature\'s freedom. Her breakdown reveals this was always impossible—not because she\'s weak but because the positions genuinely oppose each other. You cannot be both authentically wild and socially refined; they\'re not complementary aspects but mutually exclusive states. Her attempt to integrate them creates the divided self that now fragments completely. The question: is this integration impossible inherently (opposed human states) or socially (Victorian society makes them opposed)? Brontë leaves this unresolved—but either way, Catherine cannot survive the attempt.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Stream of Consciousness / Interior Monologue',
        explanation: 'Catherine\'s delirious speech represents early stream of consciousness technique—showing how thought actually flows, non-linear, associative, fragmentary. She jumps between time periods, speaks to absent people, mistakes past for present. This technique makes readers experience her psychological state directly rather than having it described externally.',
        example: 'Catherine speaks to young Heathcliff, then recognizes she\'s at Thrushcross Grange, then sorts feathers, then describes heaven-dream—no linear logic, just consciousness flowing across memory, sensation, delirium. Brontë pioneered this technique decades before Joyce/Woolf were credited with inventing it.'
      },
      {
        name: 'Symbolic Objects',
        explanation: 'The feathers Catherine obsessively sorts represent fragmented identity—wild birds (lapwing, moor-cock) domesticated into pillow, just as wild Catherine was domesticated into Mrs. Linton. Her attempt to sort them is attempt to separate authentic self from social performance, but they\'re too mixed together. The window she wants opened symbolizes barrier between civilization and nature, enclosed self and free self.',
        example: 'The oak-paneled bed at Wuthering Heights where she thinks she is = childhood, freedom, authenticity. The bed at Thrushcross Grange where she actually is = adulthood, marriage, false self. She cannot distinguish between them anymore—the symbolic geography reveals psychological collapse.'
      },
      {
        name: 'Dramatic Irony (Nelly\'s Misjudgment)',
        explanation: 'Readers recognize Catherine is genuinely ill while Nelly judges her as manipulative performer. This creates tension: we want to intervene, to tell Edgar, to stop Nelly\'s cruel neglect. We see consequences of misjudging mental illness as manipulation—a lesson about believing people\'s suffering rather than suspecting performance.',
        example: 'Nelly thinks: "There was no use making more speeches." Readers think: "Tell Edgar immediately!" We watch preventable tragedy unfold because the narrator makes wrong judgment. This makes Nelly partially responsible for Catherine\'s death.'
      },
      {
        name: 'Foreshadowing Through Prophecy',
        explanation: 'Catherine\'s delirious statements predict her death and its aftermath: she describes heaven-rejection (will haunt as ghost), earth as home (won\'t rest in grave), Heathcliff as permanent soulmate (their bond transcends death). These feel like fever-dreams but turn out to be literal prophecies of novel\'s supernatural conclusion.',
        example: 'Catherine: "If Heathcliff were in the earth and I in heaven, I should be extremely miserable." This prefigures her ghost refusing to rest, haunting Heathcliff, and their eventual reunion in death outside civilization\'s boundaries. Delirious Catherine speaks truth about the novel\'s metaphysics.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine someone trying to be perfect at everything: career success, respectable marriage, maintaining wild authentic friendships from before they "made it," staying true to their roots while fitting into elite circles. They\'re code-switching constantly—refined professional at work, wild authentic self with old friends, respectable spouse at home. The strain of performing all these incompatible selves creates massive anxiety, then depression, then breakdown. They stop eating, stop sleeping, dissociate from present reality, experience flashbacks to childhood when life felt authentic before all these social performances became mandatory. Friends and spouse are confused: "Just choose priorities! Just be one thing!" But the person can\'t—every self feels real, abandoning any feels like death. So instead of choosing, they start breaking.',
    
    parallels: [
      '🎭 **Performing incompatible identities**: Code-switching between worlds (work self, authentic self, professional self, ethnic/racial identity, queer/straight presentation) until the strain causes breakdown',
      '💊 **Somatization of social stress**: Depression, anxiety, eating disorders, chronic pain emerging from impossible social demands—body expressing what social world won\'t accommodate',
      '🪟 **"Open the window!" desperate need to escape**: Feeling suffocated by respectability, professional image, marriage expectations—desperate longing for escape back to authentic self',
      '👶 **Regression to childhood when you were "real"**: During crisis, returning to memories of before you learned to perform, before you knew who you "should" be, before social consciousness divided you',
      '🏥 **Others judging mental health crisis as manipulation**: Catherine\'s suffering dismissed as attention-seeking parallels how mental illness is often viewed as weakness, performance, or bid for sympathy rather than genuine medical crisis',
      '💔 **Divided self becoming fragmented self**: Living as multiple people (professional, authentic, family role, online persona) until you can\'t remember which is "real" anymore—dissociation from prolonged performance'
    ],
    
    discussionPrompt: 'How many selves do you perform? Professional/casual, online/offline, family/friends, authentic/acceptable? At what point does healthy adaptation (reading the room, being appropriate) cross into unsustainable performance that fragments identity? Catherine couldn\'t integrate wild child and respectable lady—can we integrate our multiple selves, or does living in diverse contexts inherently create divided consciousness? When does "self-care" mean "stop performing" vs. "that\'s just adulting"? Where\'s the line between necessary social adaptation and pathological fragmentation?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🪶',
      name: 'Fragmentation of Self',
      explanation: 'Catherine\'s divided self (authentic vs. social) collapses into fragmented self (delirium, confusion, temporal collapse). This thread traces how trying to inhabit incompatible identities doesn\'t create integration but destruction. The metaphor of feathers pulled from pillow = self pulled apart piece by piece. Once fragmentation begins, can the self ever be whole again?'
    },
    {
      emoji: '👻',
      name: 'Death as Freedom',
      explanation: 'Catherine begins seeing death as solution—return to childhood, escape from social constraints, reunion with authentic self and Heathcliff. Death isn\'t punishment but liberation from impossible social demands. This thread continues through her actual death and haunting: she\'ll refuse rest in grave, becoming literal ghost, existing outside civilization\'s boundaries where she couldn\'t exist within them.'
    },
    {
      emoji: '⚖️',
      name: 'Nelly\'s Complicity',
      explanation: 'Nelly\'s judgmental dismissal of Catherine\'s suffering allows it to become fatal. This thread exposes how "neutral observer" narrators are actually active participants whose moral judgments have material consequences. Nelly\'s respectability politics (dismissing Catherine as manipulative) make her partially responsible for Catherine\'s death. Can we trust someone who let this happen through judgmental neglect?'
    },
    {
      emoji: '🌡️',
      name: 'Social Illness',
      explanation: 'Victorian culture blamed women\'s "hysteria" on female weakness. Brontë shows it\'s rational response to irrational social demands. Catherine is sick because society is sick—forcing women into impossible constraints then pathologizing their suffering as individual failing. This thread critiques medicalization of social oppression: problem isn\'t Catherine\'s weakness but civilization\'s cruelty.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // 5-7 open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Genuine Crisis or Manipulation?',
      question: 'Nelly judges Catherine as "performing" to manipulate Edgar. But Catherine is genuinely ill—her suffering is real. How do we distinguish between genuine mental health crisis and manipulative performance? What are the consequences of getting this judgment wrong?'
    },
    {
      title: 'Nelly\'s Responsibility',
      question: 'Nelly deliberately doesn\'t tell Edgar about Catherine\'s condition for three days. Is she partially responsible for Catherine\'s decline? What does this reveal about Nelly as narrator—can we trust someone who allowed preventable harm through judgmental neglect?'
    },
    {
      title: 'Edgar\'s Dilemma',
      question: 'Edgar\'s ultimatum triggered Catherine\'s breakdown—but his need for primacy in his marriage was reasonable. Is he responsible for her illness? Could he have acted differently? Or was this tragedy inevitable given Victorian marriage expectations?'
    },
    {
      title: 'Psychological Accuracy',
      question: 'Catherine\'s symptoms—dissociation, regression, temporal collapse, obsessive behaviors—match modern descriptions of severe psychological crisis. How does Brontë achieve such psychological realism decades before psychology described these phenomena? What does this reveal about her insight into human consciousness?'
    },
    {
      title: 'Nature as Medicine',
      question: 'Catherine believes wind from the moors would heal her—and there\'s truth to this. Her illness comes from civilized enclosure; nature represents psychic health. Is Brontë suggesting some people are fundamentally incompatible with civilization? What do we do with those who cannot be domesticated without destroying them?'
    },
    {
      title: 'The Divided Self',
      question: 'Catherine tried to be both wild Catherine and respectable Mrs. Linton simultaneously. Was this integration ever possible, or were these genuinely incompatible states? Can anyone successfully inhabit fundamentally opposed identities? When does healthy adaptation to different contexts become pathological fragmentation?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions (Notice → Explore → Amplify)
  // 4-6 discussions, 300-500 words each
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'nelly-culpability-breakdown',
      title: 'Nelly\'s Culpability: When Judgment Becomes Harm',
      question: 'How does Nelly\'s judgmental dismissal of Catherine\'s suffering contribute to the tragedy, and what does this reveal about the dangers of assuming mental health crises are manipulative performance?',
      aiResponse: `**Nelly's Fatal Misjudgment**

For three days after Edgar's ultimatum, Catherine locks herself in her room, refuses food, and descends into dangerous illness. Nelly knows this—and deliberately doesn't tell Edgar. Why?

**Nelly's Reasoning:**

**She Judges Catherine as Manipulative:**
"I thought it proper... to inform Mr. Linton she was probably in serious danger of losing her life. I did not say I thought her illness was serious—I said, 'Maybe she will survive, but it's doubtful, considering her weakly state.'"

Wait—this is what Nelly says AFTER three days. Before that, she says nothing because:
- She believes Catherine is "performing" to manipulate Edgar
- She disapproves of Catherine's demands (wanting both Edgar and Heathcliff)
- She thinks Catherine is spoiled and needs to learn consequences
- She judges mental distress as character weakness, not medical crisis

**The Class/Moral Judgment:**

**Nelly's perspective:**
Catherine is wealthy, privileged, has loving husband—what does she have to be genuinely distressed about? Her suffering must be exaggerated, performed, manipulative bid for attention. Real suffering comes from poverty, hardship, loss—not from having "too many" people love you.

This is classic dismissal of privileged people's mental health: "You have everything, how dare you be depressed?" It assumes material comfort prevents psychological suffering—ignoring how internal conflict, impossible social demands, and divided consciousness create genuine illness regardless of external circumstances.

**The Consequences:**

**What Nelly's Silence Allows:**
- Catherine's condition deteriorates from controllable to life-threatening
- Edgar remains unaware, unable to intervene
- Catherine's fever and delirium become severe
- Pregnancy (just discovered) becomes endangered
- Three-day delay transforms crisis into fatal illness

**Nelly's Justification (After):**
When forced to confront severity, Nelly shifts blame:
- "I believed she intended dying" (implies it's Catherine's choice)
- "It was no concern of mine" (denies responsibility)
- "She was not my friend" (class barrier justifies neglect)

But this is self-serving rewriting. Nelly didn't believe Catherine was dying—she believed Catherine was "acting." Her misjudgment had material consequences.

**Why This Matters:**

**The Danger of Dismissing Mental Health as Performance:**

**Common Misjudgments:**
- "They're just seeking attention" (dismissing cry for help)
- "They're being manipulative" (pathologizing distress)
- "They'll get over it" (minimizing severity)
- "They're just dramatic" (gendered dismissal)

**Consequences When We're Wrong:**
If we judge genuine crisis as performance:
- People don't get help they need
- Conditions worsen preventably
- Suicidal gestures become completed suicides
- Controllable situations become tragedies

Better to take all distress seriously (risk "rewarding manipulation") than dismiss genuine crisis (risk death).

**The Class Element:**

**Nelly's Resentment:**
As working-class servant, Nelly judges Catherine's suffering as privileged melodrama. Catherine has wealth, education, loving husband—her problems seem trivial compared to Nelly's own hardships. This class resentment makes Nelly less sympathetic, more judgmental.

**Modern Parallel:**
People still dismiss privileged people's mental health:
- Celebrities' depression ("what do they have to be sad about?")
- Wealthy people's anxiety ("money solves problems")
- Educated people's breakdowns ("they should know better")

But mental illness doesn't respect class—privilege can't prevent psychological suffering. Internal conflict, social demands, trauma operate regardless of bank balance.

**The Gender Element:**

**Victorian "Hysteria":**
Victorian medicine pathologized women's emotional expression as "hysteria"—dismissing genuine suffering as female weakness or manipulation. Nelly participates in this: she views Catherine's breakdown through gendered lens:
- Women are dramatic (can't trust emotional displays)
- Wives manipulate husbands (Catherine's performing)
- "Real" suffering looks different (stoic, not expressive)

**Modern Persistence:**
Women's pain still dismissed more than men's:
- "She's being dramatic" (minimizing)
- "Time of month?" (biologizing)
- "Emotional" or "hysterical" (gendered slurs)
- Medical dismissal leads to delayed diagnoses, undertreated conditions

**Nelly as Cautionary Tale:**

**What She Teaches:**

**Believe People's Suffering:**
Even if you suspect manipulation, take distress seriously. Risk of false alarm is less than risk of missed crisis.

**Your Judgments Have Consequences:**
Nelly thought she was just observing. But her decision not to inform Edgar was intervention—inaction that allowed preventable decline. Neutrality isn't neutral; silence has effects.

**Check Your Biases:**
Nelly's class resentment, moral judgment, and gender biases made her dismiss genuine crisis. What are YOUR biases that might cause you to misjudge someone's suffering?

**Narrator ≠ Authority:**
Just because Nelly tells the story doesn't mean her interpretations are correct. We must read critically, questioning whose perspective is privileged and whose suffering is dismissed.

**Modern Application:**

**When Someone's in Crisis:**

**Don't judge:**
- "Are they really suffering or just performing?"
- Instead ask: "What if I'm wrong? What if it's genuine?"

**Don't wait for proof:**
- Three days can be fatal
- Err on side of taking seriously

**Check your resentments:**
- Does their privilege make you less sympathetic?
- Does their emotional expression seem "too much"?
- Are you judging them against your own suffering?

**Act:**
Even if you're wrong, connecting someone to help rarely harms.
If you're wrong about it being performance, worst case: they get unnecessary support.
If you're wrong about it being genuine, worst case: they die.

**Discussion Question:**

Have you ever dismissed someone's distress as "dramatic" or "manipulative" only to later realize it was genuine crisis? What prevented you from recognizing severity? How did your judgment affect outcome?

Nelly teaches: The cost of believing manipulation is low; the cost of dismissing genuine crisis is death. Choose accordingly.`
    },
    {
      id: 'catherine-psychological-realism',
      title: 'Catherine\'s Breakdown: Psychological Realism in 1847',
      question: 'How does Brontë achieve such accurate portrayal of severe psychological crisis decades before psychology formally described these phenomena?',
      aiResponse: `**Brontë's Psychological Genius**

Catherine's breakdown shows symptoms modern psychology recognizes as dissociation, regression, and trauma response. Yet Brontë wrote this in 1847—before Freud, before psychoanalysis, before formal psychology even existed. How did she know?

**The Symptoms Brontë Describes:**

**Dissociation:**
Catherine can't recognize her reflection: "Is that Catherine Linton? She doesn't look like me—I shall not look at it. It seems so unreal."

This is depersonalization/derealization—feeling disconnected from self or reality, common in severe psychological crisis. Brontë shows consciousness fragmenting: Catherine sees her reflection but can't integrate it as "herself." The Mrs. Linton reflected isn't her authentic self, so she denies recognition.

**Temporal Collapse:**
Catherine experiences multiple time periods simultaneously:
- Thinks she's child at Wuthering Heights
- Confused why she's at Thrushcross Grange
- Can't track seven years of marriage
- Past invades present as if happening now

Modern psychology: severe stress disrupts time sense and memory consolidation. Past traumas or meaningful periods invade present consciousness. Brontë shows this exactly—Catherine's consciousness has literally never left childhood with Heathcliff; Mrs. Linton was always dissociated performance.

**Regression:**
Catherine speaks to childhood Heathcliff, uses child's language and perspectives, wants to return to girl-self: "I wish I were a girl again, half-savage and hardy, and free!"

Regression = returning to earlier developmental stage under stress. Brontë shows Catherine psychologically regressing to pre-trauma childhood (before social consciousness, before she chose Edgar, before she betrayed authentic self).

**Obsessive Behaviors:**
Feather-sorting, arranging, identifying: "This is a turkey's... this is a wild duck's... this is a lapwing's."

Under severe stress, people develop obsessive/repetitive behaviors—attempts to control small things when everything else is chaos. The feather-sorting is meaningless task but gives Catherine sense of control and connects her to nature/childhood (moorland birds).

**Somatization:**
Psychological distress manifests as physical illness: fever, emaciation, brain inflammation. The body expresses what the mind cannot process.

Modern medicine: stress literally affects physical health—cortisol, inflammation, immune suppression, cardiovascular effects. Extreme psychological distress creates genuine physical illness. Brontë shows this before we had scientific language for mind-body connection.

**How Did Brontë Know This?**

**Three Sources:**

**1. Observation:**
Brontë was incredibly observant of human behavior and psychology. She watched people carefully, noticed patterns, understood consciousness deeply through attention rather than formal training.

**2. Personal Experience:**
The Brontë family experienced:
- Death of mother and siblings
- Isolation in Yorkshire parsonage
- Mental illness (Branwell's addiction/breakdown)
- Constrained women's roles
- Passionate internal lives

Emily Brontë likely drew on personal experience of divided consciousness (passionate inner life vs. respectable clergyman's daughter), observation of mental illness (Branwell), and understanding of how social constraints create suffering.

**3. Literary/Philosophical Tradition:**
Romantic poets (Byron, Wordsworth) explored consciousness, emotion, nature vs. civilization. Gothic novels examined psychological extremes. Shakespeare showed madness (Ophelia, Lady Macbeth). Brontë inherited literary tradition of representing internal states—then pushed it to unprecedented psychological accuracy.

**What Makes It Modern:**

**Brontë's Innovation:**

**Shows Rather Than Tells:**
She doesn't explain "Catherine has dissociation." She shows Catherine's fragmented consciousness directly:
"Where am I?... Are we still at Wuthering Heights? I thought I was in my chamber at home... I cannot recollect..."

This stream-of-consciousness technique prefigures modernist literature (Joyce, Woolf) by decades.

**Non-Linear Time:**
Memory invades present, past and present collapse, time loses structure. This represents trauma's actual effects on consciousness—which modernist lit and psychology both recognized much later.

**Mind-Body Connection:**
She shows psychological suffering producing physical illness without separating them into distinct categories. Modern psychosomatic medicine confirms this, but Brontë understood it intuitively.

**Divided Self:**
Catherine's authentic self (wild child) vs. social self (Mrs. Linton) never integrated. Modern psychology: identity consolidation requires integrating multiple aspects of self. When incompatible demands prevent integration, pathology results. Brontë shows this mechanism precisely.

**The Victorian Context:**

**What Victorians Believed:**

**"Hysteria":**
Female suffering attributed to:
- Biological weakness (wandering womb)
- Moral failing (insufficient self-control)
- Manipulative nature (women perform distress)

**Brontë's Critique:**

Rather than accepting diagnosis of female weakness, she shows:
- Catherine's suffering has social cause (impossible constraints)
- It's rational response to irrational demands
- Victorian society creates the conditions for women's "hysteria"

This is radical feminist argument: women aren't hysterical by nature; they're made hysterical by social oppression.

**Why This Matters Today:**

**Brontë Validates:**

**Psychological Suffering is Real:**
Not performance, not weakness, not "just" mental—it's legitimate medical crisis with physical manifestations. This remains important as mental health stigma persists.

**Social Structures Create Illness:**
When society demands incompatible things (be authentic and perform, be wild and civilized, be passionate and respectable), people break. The problem isn't individual pathology but structural oppression.

**Listen to Women:**
Victorian medicine dismissed women's suffering. Brontë insists: believe women, take their distress seriously, recognize social causes of psychological pain.

**Divided Self is Modern Condition:**
We still experience this—code-switching between contexts, performing multiple identities, feeling fragmented by incompatible demands. Catherine's breakdown remains relevant because social fragmentation persists.

**Literary Achievement:**

**Brontë Pioneered:**
- Stream of consciousness (before Joyce)
- Psychological realism (before Freud)
- Feminist critique of medicalization (before feminist theory)
- Representation of trauma (before psychology described it)
- Mind-body integration (before psychosomatic medicine)

She intuited what science would later confirm: consciousness fragments under impossible strain, social oppression manifests as illness, divided selves cannot be sustained indefinitely.

**Teaching Moment:**

Compare Catherine's breakdown to modern descriptions of:
- Dissociative disorders (DSM-5)
- Complex PTSD
- Identity fragmentation
- Somatization disorders

Discuss: How did Brontë know? What does it mean that literature understood psychology before science did? Can observation and empathy reveal truths that formal study later confirms?

Catherine's breakdown is testament to Brontë's genius: she represented consciousness so accurately that 175 years later, with all of psychology's advances, we recognize her portrait as clinically precise.`
    },
    {
      id: 'social-constraints-illness',
      title: 'When Society Makes You Sick: Social Constraints as Pathology',
      question: 'Is Catherine\'s illness individual pathology (she\'s weak/unstable) or rational response to pathological social demands? What does this distinction matter?',
      aiResponse: `**Two Competing Frameworks:**

**Framework 1: Individual Pathology**
Catherine is mentally ill because:
- She can't handle normal adult responsibilities
- She's emotionally unstable/immature
- She refuses to accept reality
- She won't make necessary choices
- Her breakdown is personal weakness

**Framework 2: Social Pathology**
Catherine is sick because:
- Victorian society demanded impossible things
- Gender roles forced incompatible performances
- She had to choose between authentic self and social survival
- No healthy way to express her needs existed
- Society is sick; she's responding rationally to sick situation

**Which Framework Does Brontë Endorse?**

**Evidence for Social Pathology Framework:**

**Catherine's Needs Aren't Unreasonable:**
- Deep emotional connection (with Heathcliff)
- Economic security (with Edgar)
- Authentic self-expression (on the moors)
- Passionate feeling (nature of her personality)

None of these are pathological. The problem: Victorian society made them mutually exclusive. She could have security OR passion, respectable marriage OR authentic love, civilization OR nature. NOT both.

**The Forced Choice Is Unjust:**
Why should Catherine have to choose between:
- Economic survival (marriage to Edgar provides this)
- Spiritual authenticity (connection with Heathcliff provides this)

Men weren't forced to this choice—they could have respectable marriages AND outside emotional connections (clubs, male friendship, mistresses socially tolerated if discreet). Only women faced binary: authentic feeling OR social survival.

**Her Breakdown Is Logical:**
If you're forced to inhabit incompatible identities:
- Authentic wild self (Catherine with Heathcliff)
- Respectable social self (Mrs. Linton)

And society insists BOTH are mandatory:
- Be passionate (feminine duty to husband)
- Be controlled (feminine propriety)
- Be authentic (or be condemned as fake)
- Perform social role (or be condemned as improper)

The only rational response is breakdown. You can't be opposed things simultaneously.

**The Novel Shows Social Structures as Crazy-Making:**

**Examples:**

**Gender Constraints:**
- Women's entire identity defined by men (father, husband)
- No independent legal existence
- Expected to be passionate in marriage but never outside it
- Must be authentic self while performing social role

**Class Constraints:**
- Heathcliff degraded for origins he can't control
- Catherine must maintain class position even if it destroys her
- Social mobility impossible without inherited property
- Love across class = social death

**Marriage Law:**
- Wives become husband's property
- Can't leave even if miserable
- Husband controls money, children, relationships
- Till death do us part = permanent trap if wrong choice

**These Structures ARE Pathological:**
They demand impossible things, deny human needs, create no-win situations, punish people for biological/emotional realities they can't control. If structures are sick, people's responses to them (Catherine's breakdown) are healthy symptoms revealing structural disease.

**The Medicalization Critique:**

**What Victorian Medicine Did:**
When women suffered under oppressive conditions, medicine:
- Blamed women's bodies (hysteria = wandering womb)
- Prescribed "rest cure" (isolate them further)
- Called it mental illness (individual pathology)
- Ignored social causes (kept oppressive structures intact)

**Brontë's Response:**
By showing Catherine's breakdown as direct result of impossible social demands, Brontë argues:
- Problem isn't women's weakness
- Problem is social structure that creates unbearable conditions
- Medicalizing this as individual pathology preserves oppressive system
- Real cure would be social change, not individual treatment

**Modern Parallel:**

**We Still Do This:**

**Contemporary Examples:**

**Medicalizing Oppression:**
- Treating depression without addressing poverty/inequality
- Diagnosing anxiety without examining systemic racism
- Prescribing medication without changing abusive work conditions
- Calling LGBTQ+ youth "mentally ill" rather than addressing homophobia

**The Pattern:**
1. Social structure creates unbearable conditions
2. People suffer predictable psychological consequences
3. Medicine diagnoses individual pathology
4. Treatment focuses on individual (medication, therapy)
5. Social structure remains unchanged
6. Suffering continues

**Alternative Framework:**
What if:
- Depression is rational response to oppressive conditions?
- Anxiety is reasonable given systemic precarity?
- Trauma symptoms are healthy reactions to sick situations?

This doesn't mean no biological component—but recognizes that social conditions contribute substantially to what gets diagnosed as individual mental illness.

**The Distinction Matters:**

**If Individual Pathology:**
- Solution: Fix the individual (therapy, medication, learn coping)
- Society unchanged
- Other people continue suffering same way
- Problem framed as personal weakness

**If Social Pathology:**
- Solution: Change social structures
- Collective action required
- Address root causes, not just symptoms
- Problem framed as injustice requiring social change

**Does Catherine Need Therapy or Revolution?**

**Victorian Would Say: Therapy (or rest cure)**
- Catherine should accept her role
- Learn to manage emotions better
- Stop being so difficult/dramatic
- Adjust expectations to social reality

**Brontë Suggests: Revolution**
- Society needs to change
- Gender roles are unjust
- Marriage law is oppressive
- Women shouldn't have to choose between authenticity and survival

**Synthesis: Both/And**

**Catherine Is:**
- **Genuinely ill** (her suffering is real, medical, serious)
- **Responding rationally** (to impossible social demands)
- **Personally struggling** (with her own choices, personality)
- **Structurally oppressed** (by gender, class, marriage law)

All these are simultaneously true. The novel doesn't force either/or but shows how:
- Individual psychology
- Personal choices
- Social structures
- Historical context

All interact to produce her breakdown.

**The Radical Question:**

**What Would Healthy Look Like?**

If Catherine is sick from civilization, would she be healthy:
- On the moors? (but survival is difficult)
- With different social structures? (but they don't exist)
- Having made different choices? (but all choices caused suffering)

Brontë suggests: In an unjust society, there may be NO healthy option. Some people fundamentally cannot fit oppressive structures—and forcing them to try creates inevitable breakdown.

**This Means:**
Social structures that destroy people to maintain themselves are illegitimate. If the cost of civilization is Catherine's death, maybe civilization needs to change, not Catherine.

**Discussion Questions:**

1. When does individual suffering reflect personal pathology vs. social oppression?
2. How do we distinguish between "you need therapy" and "society needs to change"?
3. Can both be true simultaneously?
4. What are modern equivalents of Catherine's impossible choice?
5. Do we still medicalize social oppression to avoid addressing structural problems?

**Modern Application:**

Next time you hear about rising mental illness rates, ask:
- Are individuals getting sicker?
- Or are social conditions getting more unbearable?
- Is the problem personal weakness?
- Or structural oppression producing predictable suffering?

Catherine teaches: Sometimes breakdown isn't failure but accurate response to intolerable situation. The question isn't "what's wrong with Catherine?" but "what's wrong with a society that makes people like Catherine sick?"

And that question remains urgently relevant.`
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Self You Can\'t Sustain',
      description: 'Write about a time when you tried to be multiple incompatible things simultaneously—balancing expectations from family, friends, school, work, or different social groups. Describe the strain of code-switching, performing different selves, or hiding parts of yourself in different contexts. When did you feel most authentic? When did you feel most false? Did you ever experience psychological or physical symptoms from this strain? Reflect on whether integration was possible or if certain identities genuinely couldn\'t coexist.',
      purpose: 'Helps students connect to Catherine\'s divided self through their own experiences of social performance and code-switching. Develops self-awareness about mental health impacts of sustained social performance. Validates students\' experiences of fragmentation, especially students navigating multiple cultures, class backgrounds, or identity expressions.'
    },
    
    activity: {
      title: 'Mapping the Breakdown: Visual Timeline',
      description: 'Create a visual timeline of Catherine\'s psychological decline from Edgar\'s ultimatum through this chapter. Use colors, symbols, or images to show: (1) external events (ultimatum, locks herself in, refuses food, etc.), (2) physical symptoms (fever, emaciation, weakness), (3) psychological symptoms (confusion, temporal collapse, delusions), (4) what Nelly observes vs. what she tells Edgar, (5) turning points where intervention could have changed outcomes. This helps students see the progression and Nelly\'s role in allowing escalation.',
      materials: 'Large timeline paper, colored markers, sticky notes for different categories of symptoms/events, reference text for specific details'
    },
    
    crossCurricular: {
      title: 'Mental Health Crisis Recognition and Response',
      description: 'Connect to health/wellness curriculum on mental health awareness and suicide prevention. Use this chapter to teach: (1) Recognizing genuine mental health crisis vs. dismissing as "dramatic", (2) Consequences of misjudgment (Nelly\'s three-day delay), (3) How to respond when someone\'s in crisis (take seriously, connect to help, don\'t wait for proof), (4) Understanding somatization (how psychological stress manifests physically), (5) Reducing stigma (mental illness is medical, not character weakness). IMPORTANT: Provide resources for students who may be struggling; have crisis hotline numbers available; coordinate with school counselor.',
      subjects: ['Health', 'Psychology', 'Social Work', 'Wellness']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // ONE focused, high-level analytical task requiring synthesis
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Social Illness vs. Individual Pathology: Analyzing Causes of Mental Health Crisis',
    prompt: 'Catherine\'s breakdown can be interpreted two ways: (1) Individual pathology—she\'s mentally unstable, can\'t handle adult responsibilities, making poor choices that harm herself and others. (2) Social pathology—Victorian gender/class constraints demanded impossible things, making her rationally ill from irrational social demands. Build an argument for which framework better explains Catherine\'s illness, OR argue that both operate simultaneously. Use textual evidence about Victorian social structures, Catherine\'s specific situation, and modern understanding of how social oppression creates psychological suffering.',
    
    guidingQuestions: [
      'What specifically about Victorian society demanded incompatible things from Catherine? Identify the structural constraints (gender roles, marriage law, class system) that created her impossible choice.',
      'What about Catherine\'s personality or choices contributed to her situation? Where did she have agency, and how did she use or misuse it? Can we hold her responsible while recognizing structural constraints?',
      'How does Brontë use Catherine\'s illness to critique Victorian medicine\'s "hysteria" diagnosis? What\'s the political significance of showing social causes for women\'s mental health crises?',
      'Modern parallels: How do we still medicalize social oppression? When does therapy address symptoms without changing root causes? What would change if we viewed more mental illness as rational response to sick social conditions?',
      'Can both frameworks be true? Can Catherine be both victim of oppressive structures AND person making choices that harm herself and others? How do we hold complexity without collapsing into either/or thinking?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down Catherine\'s situation into: (1) Social structures constraining her (Victorian marriage law, gender roles, class system), (2) Personal factors (her choices, personality, relationships), (3) Interactions between individual and structural (how social forces shaped her choices, how her choices worked within/against structures). Examine textual evidence for each level of causation.',
      evaluate: 'Weigh competing explanations: Does individual or structural explanation better fit the evidence? What does each framework explain well? What does each ignore or minimize? Consider consequences of each framework—if we blame Catherine (individual), we preserve oppressive structures; if we blame structures only (social), we risk denying her agency. Which framework does Brontë seem to endorse through her narrative choices?',
      synthesize: 'Build sophisticated argument recognizing multi-level causation: Catherine\'s breakdown results from interaction of personality, choices, relationships, AND structural constraints. Show how individual and social levels reinforce each other. Apply insights to contemporary questions: When is mental illness individual pathology vs. social pathology? How do we address both levels simultaneously? What would truly help people like Catherine—therapy or revolution?'
    },
    
    expectedDepth: 'Strong responses will: (1) Demonstrate understanding of Victorian social structures through textual evidence. (2) Analyze Catherine\'s agency and choices without victim-blaming. (3) Explain Brontë\'s critique of Victorian medicine\'s individualization of socially-caused suffering. (4) Apply insights to modern debates about mental health, systemic oppression, and the medicalization of social problems. (5) Achieve sophisticated both/and thinking rather than forcing either/or conclusions. (6) Recognize that this literary question has real-world implications for how we understand and address mental health today. Expect 5-7 pages for formal essay or extended Socratic seminar (60+ minutes).',
    
    classroomApplication: 'This works as: (1) Formal analytical essay with research component (add scholarly articles on Victorian medicine, modern social determinants of mental health). (2) Structured debate: Teams argue individual vs. social pathology, then synthesize. (3) Socratic seminar moving from text-specific to contemporary applications. (4) Interdisciplinary unit with psychology/health classes examining same questions. IMPORTANT: Content warning about mental health; some students may relate personally. Coordinate with counseling services, provide mental health resources, allow alternative assignments if needed. Use this as opportunity to reduce mental health stigma and validate students who struggle—Catherine\'s suffering matters, and so does theirs.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS - Closing Section (REQUIRED)
  // Rotating one-liner with gold gradient styling
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(12),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Build anticipation for next chapter
  // ===================================================================
  nextTimeTeaser: {
    emoji: '💍',
    title: 'Next Time: Isabella\'s Fatal Choice',
    preview: 'While Catherine lies dangerously ill, Isabella makes the catastrophic decision to elope with Heathcliff—despite every warning, despite seeing Catherine\'s suffering, despite knowing Heathcliff feels nothing for her. She romanticizes his cruelty as passion, interprets his manipulation as love, and believes she\'ll be the exception to his revenge. The night of her elopement, Catherine\'s condition worsens dramatically. We\'ll see two women destroyed by the same man for different reasons: Catherine because Heathcliff loves her too much, Isabella because he doesn\'t love her at all. And Heathcliff will accomplish his revenge through marriage—using the same institution that separated him from Catherine to destroy Edgar\'s family.',
    hookQuestion: 'Why does Isabella elope despite explicit, detailed warnings about Heathcliff\'s cruelty? What cultural narratives teach women to romanticize danger as passion? Can Heathcliff be both Catherine\'s soulmate and Isabella\'s abuser—or does his cruelty toward Isabella reveal the truth about his nature? Watch innocence encounter evil disguised as romantic intensity, and see how the same act (marriage) means salvation for some and prison for others.'
  }
}

