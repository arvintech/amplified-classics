/**
 * WUTHERING HEIGHTS - CHAPTER 1
 * 
 * Mr. Lockwood visits Wuthering Heights and meets Heathcliff
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter1: ChapterData = {
  number: 1,
  title: '', 
  
  readingTime: 12,
  pages: 6,
  
  seriesOpening: {
    title: 'Welcome to Your First Amplified Chapter',
    introduction: 'This is Chapter 1, so we\'ll take a moment to introduce you to how Amplified Classics works. You\'ll see several special sections designed to deepen your reading experience and understanding. Think of this as your guided tour through the anatomy of every chapter.',
    features: [
      {
        icon: '📖',
        name: 'Chapter Summary & Analysis',
        description: 'Get oriented with what happens, who\'s involved, and what quotes matter. These sections help you track the story.'
      },
      {
        icon: '🔍',
        name: 'Notice → Explore → Amplify',
        description: 'This is our core teaching method. We point out something interesting, ask you to think about it, then reveal deeper insights. It\'s progressive discovery, not just answers.'
      },
      {
        icon: '💡',
        name: 'Discussion Questions',
        description: 'Questions to spark conversation in class or guide your own thinking. These don\'t have single "right" answers—they\'re meant to open interpretation.'
      },
      {
        icon: '🧠',
        name: 'Critical Thinking Exercises',
        description: 'One focused exercise per chapter that pushes you beyond comprehension into analysis, evaluation, and synthesis. This is where deeper learning happens.'
      },
      {
        icon: '👩‍🏫',
        name: 'For Teachers',
        description: 'Resources for educators including writing prompts, activities, and teaching notes. Students can use these for independent study too.'
      }
    ],
    callToAction: 'Don\'t worry about understanding everything at once. These sections are here when you need them. Read the novel first, then come back and explore. That\'s how amplification works—you can\'t amplify what you haven\'t experienced yet.'
  },
  
  summary: {
    brief: 'Mr. Lockwood, the new tenant of Thrushcross Grange, visits his landlord Heathcliff at Wuthering Heights and encounters a hostile, mysterious household.',
    
    full: [
      'The novel opens with Mr. Lockwood, a gentleman from the south of England, introducing himself as the new tenant of Thrushcross Grange. He visits his landlord, Mr. Heathcliff, at the remote farmhouse called Wuthering Heights on the Yorkshire moors.',
      
      'Lockwood finds Heathcliff to be a dark, reserved man who shows no warmth or hospitality. The landscape is bleak and windswept, and the house itself seems fortress-like and unwelcoming. Despite the cold reception, Lockwood convinces himself that Heathcliff is simply a fellow misanthrope like himself.',
      
      'The chapter establishes the Gothic atmosphere of the novel through descriptions of the harsh moorland setting and the mysterious, hostile household at Wuthering Heights. We see Lockwood\'s perspective as an outsider trying to understand this strange world.',
      
      'Lockwood decides to return the next day, setting up the narrative framework where he will learn the story of Heathcliff and the two houses from Nelly Dean, the housekeeper.'
    ]
  },
  
  termsToKnow: [
    {
      term: 'Wuthering',
      definition: 'A Yorkshire dialect word meaning stormy, characterized by strong winds and atmospheric tumult.',
      context: 'The novel\'s title itself establishes the harsh, violent natural environment that mirrors the characters\' emotions.',
      whyItMatters: 'This regional word grounds the Gothic story in authentic place and foreshadows the emotional storms to come.'
    },
    {
      term: 'Misanthrope',
      definition: 'A person who dislikes or distrusts humankind; someone who prefers solitude and avoids society.',
      context: 'Lockwood mistakenly believes both he and Heathcliff are misanthropes seeking peaceful isolation.',
      whyItMatters: 'Lockwood\'s misuse of this term reveals his unreliability—he romanticizes antisocial behavior he doesn\'t understand.'
    },
    {
      term: 'Frame Narrative',
      definition: 'A story within a story; an outer narrative that contains and introduces an inner narrative.',
      context: 'Lockwood\'s 1801 account frames the main story (told by Nelly Dean) that begins in 1771.',
      whyItMatters: 'This structure creates distance from intense emotions and allows multiple perspectives, making us question whose truth we\'re hearing.'
    },
    {
      term: 'Gothic Literature',
      definition: 'A genre featuring mysterious, often supernatural elements, remote settings, psychological intensity, and dark atmosphere.',
      context: 'Chapter 1 establishes Gothic conventions: isolated location, mysterious dark hero, foreboding atmosphere.',
      whyItMatters: 'Understanding Gothic genre helps readers recognize Brontë\'s use and subversion of popular conventions of her time.'
    },
    {
      term: 'Pathetic Fallacy',
      definition: 'A literary device where nature reflects or mirrors human emotions; attributing human feelings to inanimate nature.',
      context: 'The stormy, violent weather and landscape mirror the emotional turbulence of the characters, especially Heathcliff.',
      whyItMatters: 'Weather and landscape aren\'t just background—they\'re extensions of psychological states throughout the novel.'
    },
    {
      term: 'In Medias Res',
      definition: 'Latin for "in the middle of things"; a narrative technique that begins in the middle of the action rather than at the chronological beginning.',
      context: 'The novel opens in 1801, near the end of the chronological story, then moves backward to 1771.',
      whyItMatters: 'Beginning with the tragic outcome creates mystery about causes—we want to know how Heathcliff became this destroyed man.'
    }
  ],
  
  characters: [
    {
      name: 'Mr. Lockwood',
      development: 'Introduced as the narrator and new tenant of Thrushcross Grange. He presents himself as a sophisticated gentleman seeking solitude in the countryside, yet he seems somewhat naive and prone to misreading social situations. His decision to visit Heathcliff despite the unfriendly reception reveals both social awkwardness and curiosity. Lockwood serves as the frame narrator—an outsider who will help readers understand this strange world.',
      keyTrait: {
        emoji: '🎭',
        text: 'Unreliable Narrator'
      }
    },
    {
      name: 'Heathcliff',
      development: 'Our first glimpse of the novel\'s central figure. He is described as dark, reserved, and gentleman-like but completely lacking in warmth or hospitality. His responses are curt and his manner hostile. The mystery surrounding him—why is he so unfriendly? what is his story?—immediately intrigues. The contrast between his gentleman\'s appearance and his rough manner hints at complex history.',
      keyTrait: {
        emoji: '🌑',
        text: 'Dark Enigma'
      }
    }
  ],
  
  quotes: [
    {
      text: 'Wuthering Heights is the name of Mr. Heathcliff\'s dwelling. \'Wuthering\' being a significant provincial adjective, descriptive of the atmospheric tumult to which its station is exposed in stormy weather.',
      analysis: 'The opening immediately connects the house\'s name to its harsh environment, establishing the importance of setting and the pathetic fallacy that will run throughout the novel.'
    },
    {
      text: '\'Thrushcross Grange is my own, sir,\' he interrupted, wincing. \'I should not allow any one to inconvenience me, if I could hinder it—walk in!\'',
      analysis: 'Heathcliff\'s defensive claim of ownership and the word "wincing" suggest deep sensitivity about property and belonging—themes that will be central to the novel\'s exploration of inheritance and class.'
    },
    {
      text: 'A perfect misanthropist\'s heaven: and Mr. Heathcliff and I are such a suitable pair to divide the desolation between us.',
      analysis: 'Lockwood\'s self-satisfied misreading of Heathcliff reveals his unreliability as a narrator. He projects his own romantic notions onto a man whose misanthropy has far darker and more complex origins.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'Isolation and Outsider Status',
        explanation: 'The chapter introduces the theme of isolation through both setting and character. Wuthering Heights is geographically isolated on the moors, but more importantly, we see emotional and social isolation. Lockwood arrives as an outsider to this world, and Heathcliff seems isolated even in his own home. The novel will explore how isolation shapes identity, relationships, and revenge.'
      },
      {
        name: 'Nature and Environment',
        explanation: 'The harsh Yorkshire moors and the stormy weather immediately establish nature as a powerful force in this novel. "Wuthering" means stormy, atmospheric tumult—the landscape itself is violent. This sets up the pathetic fallacy that will run throughout, where the wild landscape mirrors the passionate, violent emotions of the characters, particularly Heathcliff and Catherine.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Frame Narrative',
        explanation: 'Brontë uses Lockwood as a frame narrator—an outsider who will record the story told by Nelly Dean. This creates layers of narration and allows readers to question reliability and perspective.',
        example: 'Lockwood presents himself as sophisticated but quickly misreads Heathcliff\'s character, alerting us to be skeptical of his interpretations.'
      },
      {
        name: 'Gothic Atmosphere',
        explanation: 'The chapter establishes classic Gothic elements: a remote, fortress-like house; stormy, threatening weather; a dark, mysterious male figure; a sense of foreboding and secrets. This sets reader expectations for psychological intensity.',
        example: 'The description of Wuthering Heights as exposed to "atmospheric tumult" and Heathcliff\'s dark appearance create immediate Gothic mood.'
      },
      {
        name: 'In Medias Res',
        explanation: 'The novel begins in the middle of the story—1801—rather than at the chronological beginning. We meet characters whose history is already complex and whose relationships are already fractured. This creates mystery and requires the extended flashback structure.',
        example: 'We don\'t yet know why Heathcliff is who he is or what happened at these two houses. The story will move backward to explain the present.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'Imagine you\'re a young professional who just rented a remote Airbnb in rural Montana or the Scottish Highlands—seeking "digital detox" and solitude. You decide to meet your landlord at their isolated property. When you arrive, you find a hostile, clearly traumatized person living completely off-grid, surrounded by an atmosphere of barely-contained grief and anger. They own the property but seem more prisoner than master. You\'ve stumbled into someone else\'s unresolved tragedy.',
    
    parallels: [
      '🏚️ **Romanticizing Isolation**: We still fetishize "off the grid" living (tiny houses, remote cabins, digital nomad retreats) without understanding the psychological cost of true isolation',
      '💻 **Digital Native Meets Analog Reality**: City dwellers misreading rural/working-class culture, assuming everyone wants the solitude they\'re seeking, missing signs of trauma and pain',
      '🔒 **Property = Identity**: Real estate still defines social status; inheritance disputes still tear families apart; who owns what still determines who has power',
      '😶 **Undiagnosed Trauma**: Heathcliff clearly suffers from PTSD, complicated grief, and depression—conditions now treatable but in his era (and even today in isolated communities) left untreated',
      '🎭 **The "Mysterious Brooding Man"**: We still romanticize damaged, hostile men (think: every antihero in prestige TV)—why does emotional unavailability read as attractive instead of alarming?',
      '📱 **Frame Narrative = Social Media POV**: Lockwood is documenting this strange world for an audience (us), just like we document and misinterpret experiences on Instagram or TikTok'
    ],
    
    discussionPrompt: 'We live in an age of curated isolation (pandemic pods, remote work, "main character energy"). How do we distinguish chosen solitude from trauma-driven isolation? When does independence become loneliness? And why do we still romanticize mysterious, emotionally unavailable people instead of recognizing warning signs of pain?'
  },
  
  thematicThreads: [
    {
      emoji: '🌪️',
      name: 'Wild vs Civilized',
      explanation: 'Wuthering Heights represents the wild, harsh, passionate forces, while Thrushcross Grange (which we haven\'t yet seen) will represent civilization and refinement. This binary drives the entire novel.'
    },
    {
      emoji: '🏠',
      name: 'Property and Belonging',
      explanation: 'The opening establishes two houses—Wuthering Heights and Thrushcross Grange. Property, ownership, inheritance, and who belongs where will be central to the tragic plot.'
    },
    {
      emoji: '👻',
      name: 'Past Haunting Present',
      explanation: 'We meet characters in 1801, but clearly something happened before. The past haunts the present literally (we will see ghosts) and metaphorically through memory, trauma, and revenge.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'First Impressions',
      question: 'What is your first impression of Heathcliff? What details shape your view of him?'
    },
    {
      title: 'Narrative Perspective',
      question: 'Why might Brontë choose to have Lockwood narrate instead of beginning with the main story?'
    },
    {
      title: 'Setting as Character',
      question: 'How does the description of Wuthering Heights and the moors function as more than just background?'
    },
    {
      title: 'Gothic Elements',
      question: 'What elements of Gothic literature do you notice in this opening chapter?'
    },
    {
      title: 'Unreliable Narration',
      question: 'What evidence suggests Lockwood might be an unreliable narrator?'
    },
    {
      title: 'Class and Manners',
      question: 'What does Lockwood\'s reaction to Heathcliff\'s behavior reveal about Victorian social expectations?'
    }
  ],
  
  speedLearningNotice: {
    title: '💡 How to Use Amplified Discussion',
    content: 'These expandable sections contain in-depth analysis to help you understand complex aspects of the novel. Here\'s how to use them effectively: (1) Try answering the question yourself first—write down your thoughts. (2) Then expand the section and compare your thinking to the analysis provided. (3) Notice what you got right AND what you missed. This process builds your literary analysis skills. You\'re not just reading answers—you\'re training your mind to think like a literary scholar.'
  },
  
  amplifiedDiscussion: [
    {
      id: 'lockwood-narrator',
      title: 'Why Lockwood?',
      question: 'Why does Emily Brontë choose to have Lockwood narrate instead of starting with the main story?',
      aiResponse: `
**Understanding Frame Narration**

Brontë makes a deliberate choice to filter the passionate, violent story through Lockwood—an outsider who doesn't understand what he's seeing. This creates crucial distance.

**What Lockwood Provides:**

**Distance and Safety**
- The intense emotions would be overwhelming without a buffer
- Victorian readers needed a "civilized" entry point to this wild story
- We can process violence and passion when mediated through a conventional narrator

**Unreliability**
- Lockwood misreads everything (he thinks Heathcliff is like him!)
- This teaches us to question what we're told
- We must read between the lines and interpret for ourselves

**Class Perspective**
- Lockwood represents conventional society judging this world
- His incomprehension shows how society failed to understand or help these characters
- The frame critiques the limited perspective of "respectable" society

**Narrative Tension**
- We know something terrible has happened (present 1801)
- The frame creates mystery: what made Heathcliff this way?
- Moving backward through time builds dramatic irony

**Victorian Context:**

Frame narration was popular in Victorian literature (think Frankenstein, Heart of Darkness). It created:
- "Realistic" authentication (this is a "true" account)
- Moral distance from disturbing content
- Multiple interpretive perspectives

**Modern Comparison:**

Think of movies that start with a frame story (The Princess Bride, Titanic). Why do they do this? What effect does it have on how we receive the main story?

**For Discussion:**

How would the novel be different if it opened with young Catherine and Heathcliff on the moors? What would we lose? What would we gain?
      `
    },
    {
      id: 'wuthering-meaning',
      title: 'The Meaning of "Wuthering"',
      question: 'Why does Brontë open by explaining what "Wuthering" means?',
      aiResponse: `
**The Importance of Names**

Brontë's first paragraph defines "wuthering" as "a significant provincial adjective, descriptive of the atmospheric tumult to which its station is exposed in stormy weather." This is no casual detail.

**What "Wuthering" Tells Us:**

**It's a Real Yorkshire Word**
- Brontë authenticates the local dialect
- She respects and preserves regional language
- This roots the story in a specific place and culture

**It Means Stormy, Turbulent, Violent**
- The house is named for the storms that attack it
- This foreshadows the emotional storms to come
- Setting and emotion will mirror each other throughout

**It Requires Explanation**
- Lockwood (and most readers) don't know this word
- We are outsiders who need translation
- The novel is about crossing cultural and class boundaries

**Pathetic Fallacy Setup:**

By opening with this definition, Brontë establishes that in this novel, environment and emotion are connected. The "atmospheric tumult" outside mirrors psychological tumult inside.

**Gothic Tradition:**

Gothic novels traditionally feature houses with symbolic names:
- Castle of Otranto
- Northanger Abbey  
- Wuthering Heights fits this tradition

But Brontë uses a real regional word, grounding Gothic conventions in authentic place.

**Class and Language:**

That Lockwood needs "wuthering" explained reveals class dynamics:
- Heathcliff knows this word naturally
- Lockwood doesn't—he's an outsider
- Language marks insider/outsider status
- The novel will explore who belongs and who doesn't

**Teaching Moment:**

Have students find the moment they first feel like an outsider because of language they don't understand. How does not knowing the "right" words affect belonging?
      `
    },
    {
      id: 'heathcliff-first-impression',
      title: 'Reading Heathcliff',
      question: 'What should we make of our first impression of Heathcliff?',
      aiResponse: `
**The Introduction of Heathcliff**

Lockwood describes Heathcliff as "a dark-skinned gipsy in aspect, in dress and manners a gentleman." This complex description introduces the novel's central figure.

**What We Learn:**

**Physical Description**
- "Dark-skinned" was loaded in 1847—suggesting foreign origins
- "Gipsy" was a racialized term invoking fear of outsiders
- Yet he's dressed as a "gentleman"—visual contradiction

**Behavioral Contradictions**
- He's educated and well-spoken (gentleman)
- But cold, hostile, lacking social grace (not gentleman)
- He owns property (gentleman's privilege)
- But seems more comfortable with harsh treatment

**Historical Context:**

In Victorian England, "gentleman" meant:
- Land ownership
- Certain education and speech
- Inherited social position
- Code of manners and hospitality

Heathcliff has SOME of these markers but violates others. This would be deeply unsettling to Victorian readers. How did he get here? What is he?

**What Makes Heathcliff Compelling:**

**Mystery**
- Where did he come from?
- How did he acquire property?
- What happened to make him so cold?

**Abjection**
- He doesn't fit categories: not servant, not gentleman
- Not quite English, not quite foreign
- Not quite civilized, not quite savage
- Categorical confusion creates fascination and fear

**Gothic Villain or Victim?**
- He seems cruel (his hostile behavior)
- But we sense he's suffered (his isolation, his pain)
- The novel will complicate these first impressions

**Lockwood's Misreading:**

Lockwood thinks Heathcliff is like him—a fellow misanthrope enjoying solitude. This is laughably wrong. Heathcliff's isolation is NOT chosen—it's the result of trauma, loss, and revenge.

This teaches us immediately: don't trust Lockwood's interpretations. Look deeper.

**Race and Class:**

Brontë's description of Heathcliff as "dark-skinned gipsy" raises questions the novel never fully answers:
- Is Heathcliff Romani?
- Is he from another ethnic background?
- What does his ambiguous racial status mean?

Critics debate this endlessly. What's clear: Heathcliff's outsider status is marked on his body. His darkness signifies difference, and Victorian England was deeply anxious about racial and class boundaries.

**Modern Parallels:**

We still judge people on appearance, making assumptions about class, background, belonging. How do first impressions shape our understanding? When have you been misread based on how you look?
      `
    },
    {
      id: 'gothic-opening',
      title: 'Gothic Conventions',
      question: 'How does this chapter establish Gothic atmosphere and what does that prepare us for?',
      aiResponse: `
**Gothic Literature 101**

Gothic novels emerged in the late 18th century and typically feature:
- Remote, mysterious settings
- Dark, brooding male figures
- Secrets and hidden pasts
- Psychological intensity
- Blurred boundaries (life/death, natural/supernatural)
- Sexual tension and violence

**How Chapter 1 Is Gothic:**

**Setting**
- Isolated location (remote moors)
- Threatening architecture (Wuthering Heights as fortress)
- Harsh, violent nature (stormy winds)
- Distance from civilization

**Character**
- Mysterious, dark male figure (Heathcliff)
- Secrets clearly hidden
- Hostile, potentially dangerous
- Sexually charged ambiguity

**Atmosphere**
- Foreboding and dread
- Something is wrong here
- The past haunts the present
- Normal social rules don't apply

**Why Gothic?**

Gothic fiction explores psychological extremes:
- Obsession
- Transgression
- Passion that violates social norms
- The return of the repressed

**What Gothic Prepares Us For:**

By establishing Gothic conventions in Chapter 1, Brontë signals:
- This will be psychologically intense
- Expect boundary violations
- Reason and civilization will be challenged
- Prepare for violence, both physical and emotional

**Victorian Reception:**

Many Victorian critics were horrified by Wuthering Heights:
- Too violent
- Too sexual  
- Immoral characters
- No clear moral lesson

The Gothic framework partially excused these "problems"—Gothic novels were expected to be transgressive.

**Brontë's Innovation:**

Wuthering Heights uses Gothic conventions but:
- Grounds them in realism (real Yorkshire dialect, real economics)
- Explores social critique (class, gender, property)
- Offers psychological depth beyond Gothic stereotypes

**Why We Still Read Gothic:**

Gothic literature explores what society represses:
- Excessive emotion
- Sexual desire
- Violence and cruelty
- Death and loss

We're drawn to these stories because they let us safely explore what we're not supposed to feel or talk about.

**Teaching Moment:**

What modern genres serve the same function as Gothic literature? (Horror, thriller, dark romance?) What do these genres let us explore that we can't in "realistic" fiction?
      `
    },
    {
      id: 'two-houses',
      title: 'The Two Houses',
      question: 'What is the significance of having two houses—Wuthering Heights and Thrushcross Grange?',
      aiResponse: `
**Binary Opposition as Structure**

The novel is built on the opposition between two houses, two families, and two ways of being.

**Wuthering Heights**
- Exposed to storms ("wuthering")
- Harsh, sparse, fortress-like
- Working farmhouse
- Associated with passion, violence, nature
- Dark, masculine energy
- Earnshaw family

**Thrushcross Grange** (we haven't seen it yet, but it contrasts)
- Sheltered, in the valley
- Refined, elegant, comfortable
- Gentleman's estate
- Associated with civilization, refinement, culture
- Light, feminine energy
- Linton family

**What This Structure Means:**

**Nature vs. Civilization**
- WH = wild, elemental, passionate
- TG = cultivated, refined, restrained
- The novel explores tensions between these forces

**Class Distinction**
- WH = working farm (lower gentry)
- TG = gentleman's estate (higher status)
- Class mobility and property inheritance drive the plot

**Psychological Types**
- WH = id, emotion, instinct
- TG = superego, reason, social constraint
- Characters struggle between these psychological poles

**Gender Coding**
- WH = traditionally masculine (rough, violent)
- TG = traditionally feminine (refined, gentle)
- But the novel will complicate these gender associations

**Why Two Houses Matter:**

**Spatial Organization of Conflict**
- Physical distance mirrors psychological distance
- Characters moving between houses = identity shifts
- The moors between = liminal space where boundaries blur

**Property and Inheritance**
- Who owns which house = who has power
- Marriage moves people between houses
- Heathcliff's revenge involves acquiring both properties

**No Synthesis**
- Unlike many novels that resolve binaries
- Wuthering Heights never fully reconciles these opposites
- The tension remains unresolved

**Symbolic Geography:**

The novel's geography is its psychology:
- Heights (WH) = elevated, exposed, vulnerable to storms
- Grange (TG) = grounded, protected, sheltered
- Moors between = wild, transitional, dangerous

**Victorian Context:**

Victorian culture was obsessed with:
- Civilization vs. primitive
- England vs. colonial "other"
- Reason vs. passion
- Masculine vs. feminine

Wuthering Heights explores these binaries by locating them in two houses, making abstract tensions concrete.

**Modern Relevance:**

We still organize identity through binaries:
- Work self vs. home self
- Public persona vs. private truth
- Logic vs. emotion

What spaces or places represent different parts of your identity? Where do you feel most yourself? Where do you perform a role?
      `
    },
    {
      id: 'frame-chronology',
      title: 'Chronology and Time',
      question: 'Why does the novel begin in 1801 and then move backward in time?',
      aiResponse: `
**Non-Linear Narrative**

The novel opens in 1801 (near the end of the chronological story), then moves backward to 1771 (the beginning), then forward again. Why this complex structure?

**Effect of Beginning at the End:**

**Creates Mystery**
- We see the devastating results before understanding causes
- Questions drive our reading: How did this happen? What made Heathcliff this way?
- We know tragedy occurred but don't know the details

**Establishes Stakes**
- We meet Heathcliff ruined, isolated, clearly suffering
- This makes us invested in understanding his story
- The tragedy has already happened—we're investigating it

**Allows Multiple Perspectives**
- Present-day Lockwood observes
- Past Nelly Dean remembers
- Different narrative distances provide different insights

**Mimics Memory and Trauma**
- Trauma doesn't follow neat chronology
- The past invades the present
- Memory isn't linear—it circles back, returns, haunts

**Victorian Context:**

Frame narratives were popular, but Wuthering Heights is unusual in its complexity:
- Multiple timeframes
- Multiple narrators
- Nested stories within stories

This was seen as overly complicated by some Victorian critics. Modern readers often appreciate the psychological realism of non-linear time.

**The Structure:**

- **1801** (Present): Lockwood arrives, meets Heathcliff, ghost scene
- **1771-1784** (Past 1): Nelly tells childhood story, Catherine and Heathcliff's bond
- **1784-1801** (Past 2): Catherine's marriage, Heathcliff's revenge, next generation
- **1802** (Present): Resolution and Lockwood's return

**Why Move Backward?**

**Explanatory Power**
- The present only makes sense with the past
- Behavior that seems inexplicable gets explained
- We understand causes and effects

**Tragic Inevitability**
- Because we know how it ends, we see characters moving toward tragedy
- Dramatic irony: we see what characters can't
- This creates both suspense and heartbreak

**Past Haunts Present**
- Theme of the novel: you can't escape the past
- Structure embodies theme: past literally invades present narrative
- Memory, ghost, revenge all bring past into present

**Historical Consciousness:**

The novel spans 30 years and two generations:
- First generation: Catherine and Heathcliff's doomed love
- Second generation: Hareton and young Cathy's potential redemption

This structure lets Brontë explore how trauma transmits across generations and whether healing is possible.

**Psychological Realism:**

Modern psychology recognizes that:
- Trauma disrupts linear time sense
- Past experiences shape present behavior
- Healing requires revisiting and processing the past

Wuthering Heights' structure mirrors this psychological reality decades before psychoanalysis existed.

**Teaching Moment:**

Ask students to map the timeline. Creating a chronological chart helps them see how Brontë constructs time and what effects this has on their reading experience.

Then discuss: When do you experience non-linear time? (Remembering trauma, telling family stories, experiencing strong emotion?) How does memory differ from chronological time?
      `
    }
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Rewrite from Heathcliff\'s Perspective',
      description: 'Students rewrite Chapter 1 from Heathcliff\'s first-person perspective. What does he think of Lockwood? What is he remembering? What pain is he hiding?',
      purpose: 'Helps students understand perspective, unreliable narration, and the gap between exterior behavior and interior experience.'
    },
    
    activity: {
      title: 'Mapping the Geography',
      description: 'Students create a map of the novel\'s setting: Wuthering Heights, Thrushcross Grange, the moors between, and the wider Yorkshire landscape. Label with symbolic meanings.',
      materials: 'Large paper, markers, reference maps of Yorkshire moors'
    },
    
    crossCurricular: {
      title: 'Yorkshire History and Industrial Revolution',
      description: 'Connect to history by examining 1840s Yorkshire: industrial changes, class tensions, regional identity. Why might Emily Brontë set this story in an isolated northern location during this period of massive social change?',
      subjects: ['History', 'Geography', 'Economics', 'Sociology']
    }
  },
  
  criticalThinkingExercise: {
    title: 'The Architecture of Narrative Distance',
    prompt: 'Emily Brontë constructs multiple layers between the reader and the central story: we read Lockwood\'s diary, which contains Nelly Dean\'s oral history, which includes other characters\' accounts. Why build such a complex structure? What would be different if the novel simply opened with young Catherine and Heathcliff on the moors in 1771?',
    
    guidingQuestions: [
      'What does each narrative layer add or remove from the story?',
      'How does starting at the "end" (1801) change how we read the beginning (1771)?',
      'Why might Brontë want distance between readers and this passionate, violent story?',
      'What does Lockwood\'s incomprehension teach us about how to read the novel?'
    ],
    
    thinkingFramework: {
      analyze: 'Identify each narrative layer and what perspective it provides',
      evaluate: 'Assess what each layer adds (complexity, reliability, distance) and what it removes (immediacy, intimacy)',
      synthesize: 'Consider how the frame structure itself embodies the novel\'s themes of past haunting present, insider/outsider, and the impossibility of full understanding'
    },
    
    expectedDepth: 'This exercise requires understanding narrative technique, the function of Gothic conventions, Victorian literary context, and thematic interpretation. Students should move beyond "it creates mystery" to examine how formal choices shape meaning and reader experience.',
    
    classroomApplication: 'Can be approached through small group discussion, individual essay, or collaborative diagram mapping narrative layers. Works well combined with the "Mapping Geography" activity—create both a geographic map and a narrative structure map.'
  },
  
  whyLiteratureMatters: getLiteratureMessageByChapter(1),
  
  nextTimeTeaser: {
    emoji: '🌙',
    title: 'Next Time: The Nightmare Visit',
    preview: 'Mr. Lockwood returns to Wuthering Heights during a snowstorm and is forced to stay overnight. What should be simple hospitality becomes a Gothic nightmare as he discovers Catherine\'s diary, experiences a terrifying supernatural encounter, and witnesses Heathcliff\'s obsessive grief. The mystery deepens as we realize Lockwood has stumbled into a house haunted by more than just ghosts.',
    hookQuestion: 'What happened at Wuthering Heights to create such a atmosphere of trauma and loss? And why does Heathcliff seem more interested in communing with the dead than dealing with the living?'
  }
}

