/**
 * WUTHERING HEIGHTS - CHAPTER 2
 * 
 * Lockwood returns during a snowstorm and experiences a terrifying supernatural encounter with Catherine's ghost
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter2: ChapterData = {
  number: 2,
  title: '',
  
  readingTime: 15,
  pages: 8,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'After his unsettling first visit, Lockwood returns to Wuthering Heights during a snowstorm, is forced to stay overnight, and experiences a terrifying encounter with Catherine\'s ghost.',
    
    full: [
      'Despite the hostile reception from Chapter 1, Lockwood returns to Wuthering Heights the next day. He meets more inhabitants: a beautiful but cruel young woman, a rough young man (Hareton) who seems degraded, and Joseph, a cantankerous religious servant. When snow begins falling heavily, no one will help him leave, and he\'s forced to stay overnight.',
      
      'Unable to sleep in a box-bed chamber, Lockwood discovers names scratched in the margin of old books: "Catherine Earnshaw," "Catherine Heathcliff," "Catherine Linton." He reads diary entries scratched alongside printed text—young Catherine describing Sunday punishment, running to the moors with Heathcliff, and rebelling against her brother Hindley\'s cruelty.',
      
      'During the night, Lockwood experiences a supernatural encounter. A ghostly hand grabs him through broken window glass. A voice cries "Let me in!" identifying herself as "Catherine Linton" and claiming to have "been a waif for twenty years." Terrified, Lockwood scrapes the ghost\'s wrist on the glass until blood runs down, then screams.',
      
      'His screams awaken Heathcliff, who becomes desperate when he hears Catherine\'s name mentioned. He orders Lockwood out and throws open the window, standing in the snow sobbing: "Come in! Come in! Cathy, do come. Oh! my heart\'s darling!" At dawn, Lockwood flees back to Thrushcross Grange, disturbed but uncomprehending. The famous ghost scene has established the novel\'s central mystery and tragic love story.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Gothic Supernatural',
      definition: 'In Gothic literature, supernatural elements (ghosts, hauntings, unexplained phenomena) that blur boundaries between rational and irrational, creating horror and psychological terror.',
      context: 'Catherine\'s ghost appearing at the window is the novel\'s central supernatural event—whether "real" or nightmare, it expresses profound psychological truth about obsession, grief, and spiritual homelessness.',
      whyItMatters: 'The ghost scene is famous precisely because it\'s ambiguous—we can never know if it\'s real or dream, which means the meaning is symbolic/psychological rather than literal. This teaches us to read supernatural elements as expressing internal states.'
    },
    {
      term: 'Nested Narrative',
      definition: 'A story embedded within another story, creating layers of narration and multiple time periods within a single text.',
      context: 'Lockwood (present, 1801) reads Catherine\'s childhood diary (past, 1770s) scratched in book margins. Her young voice speaks directly to us across 30 years, creating intimacy with a character who is already dead.',
      whyItMatters: 'This structure lets Brontë collapse time—the past invades the present, ghosts become literal, and we hear Catherine before we understand her tragedy. The form itself expresses the novel\'s theme: the past haunts the present.'
    },
    {
      term: 'Dramatic Irony',
      definition: 'When the audience/reader knows more than the characters, creating tension between what\'s said and what\'s understood.',
      context: 'We understand Catherine and Heathcliff\'s bond, the ghost\'s significance, and the household\'s trauma, but Lockwood dismisses it all as "bad tea and bad temper." His incomprehension highlights how profoundly he misunderstands what he witnesses.',
      whyItMatters: 'Dramatic irony makes us active interpreters. We must read between Lockwood\'s words to discover the truth he can\'t see. This trains critical reading—don\'t trust the narrator, interpret the evidence yourself.'
    },
    {
      term: 'Unreliable Narrator',
      definition: 'A narrator whose credibility is compromised—they misunderstand, misinterpret, or misrepresent events, requiring readers to question and reinterpret their account.',
      context: 'Lockwood constantly misreads situations: thinks Heathcliff is like him, dismisses the ghost as nightmare, doesn\'t recognize the household\'s dynamics. His shallow interpretations contrast with the deep truths we can perceive.',
      whyItMatters: 'Brontë forces us to read skeptically and actively. We can\'t passively accept what Lockwood tells us—we must interpret evidence ourselves. This makes literature training in critical thinking, not just entertainment.'
    },
    {
      term: 'Spiritual Homelessness',
      definition: 'A state of existential dislocation where one cannot return to authentic self, cannot inhabit chosen identity, and remains trapped in a false life.',
      context: 'Catherine\'s ghost identifies as "Catherine Linton" (married name) but tried out "Catherine Earnshaw" (birth) and "Catherine Heathcliff" (desired). She\'s trapped with the wrong identity, wandering for twenty years, unable to find home.',
      whyItMatters: 'This concept goes beyond physical homelessness to existential crisis: What happens when you betray your authentic self for social advancement? Can you ever return? The ghost scene says no—betrayal of self creates permanent exile.'
    },
    {
      term: 'Pathetic Fallacy (continued)',
      definition: 'Nature reflecting human emotion—here, the intensifying snowstorm mirrors escalating psychological tension.',
      context: 'As Lockwood becomes trapped in Wuthering Heights, the snow intensifies. The storm reaches its peak during the ghost encounter. Nature itself becomes hostile, trapping him with psychological horrors.',
      whyItMatters: 'The storm isn\'t just background—it\'s psychological externalization. The house becomes inescapable as the past becomes inescapable. Weather creates the conditions for supernatural encounter. Brontë uses environment as emotional amplifier.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Mr. Lockwood',
      development: 'Building on Chapter 1, Lockwood\'s limitations become more apparent. His terror-driven violence toward the ghost (scraping her wrist on glass) reveals cruelty beneath his cultivated manner. He experiences profound events—diary, ghost, Heathcliff\'s breakdown—but comprehends none of it, dismissing everything as "bad tea." His unreliability deepens: he continuously misidentifies household members and projects his shallow romanticism onto their intense suffering. Yet his incomprehension serves a purpose—he documents what he cannot understand, becoming our access point to a world that would overwhelm without his mediating presence.',
      keyTrait: {
        emoji: '🤡',
        text: 'Willfully Blind'
      }
    },
    {
      name: 'Catherine Earnshaw / Catherine\'s Ghost',
      development: 'Although dead, Catherine makes her first "appearance" as a powerful presence. Through her childhood diary, we hear her authentic voice: rebellious, passionate, deeply bonded with Heathcliff, resenting authority. The marginal writing itself reveals character—she literally writes her story in society\'s margins, foreshadowing her life outside acceptable behavior. As a ghost, she\'s pitiable and terrifying: "I\'ve been a waif for twenty years" expresses spiritual homelessness. She identifies with her married name (Linton) despite writing "Earnshaw" and "Heathcliff" in the books—trapped with the wrong identity even in death. Her desperate "Let me in!" becomes the novel\'s central cry.',
      keyTrait: {
        emoji: '👻',
        text: 'Spiritually Homeless'
      }
    },
    {
      name: 'Heathcliff',
      development: 'Chapter 1 showed Heathcliff\'s cold, hostile exterior. Chapter 2 cracks that facade completely. When he hears about Catherine\'s ghost, his reaction is desperate, broken, tender: "Come in! Come in! Cathy, do come. Oh! my heart\'s darling!" We see the suffering beneath the brutality—he actively seeks haunting because being haunted means Catherine is still present. His careful questioning of Lockwood (demanding every detail) shows his obsession. The pet name "Cathy," the language "heart\'s darling," the sobbing—all reveal consuming grief and obsessive love that has defined his entire adult life. We realize Heathcliff isn\'t the novel\'s monster but its most profound sufferer.',
      keyTrait: {
        emoji: '💔',
        text: 'Devastated Lover'
      }
    },
    {
      name: 'Hareton Earnshaw',
      development: 'Briefly introduced as a rough young man whom Lockwood mistakes for a servant. He can barely speak intelligibly and shows signs of degradation. We later learn he\'s actually the rightful heir to Wuthering Heights but has been systematically brutalized by Heathcliff as revenge. His presence establishes that Heathcliff\'s revenge extends to the next generation—he\'s recreating the cruelty he himself experienced.',
      keyTrait: {
        emoji: '⛓️',
        text: 'Deliberately Degraded'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'Catherine Earnshaw, her book / Catherine Heathcliff / Catherine Linton',
      analysis: 'The three names scratched in the margins reveal Catherine\'s identity crisis and foreshadow the novel\'s central tragedy. Earnshaw (birth name) represents authentic self; Heathcliff (her soul\'s desire) represents the bond she valued above all; Linton (married name) represents the social choice that betrayed her authentic self. She\'s trying out identities through surnames, revealing how women\'s identities were defined by men. This textual detail sets up everything: her spiritual homelessness stems from choosing the wrong name/identity.'
    },
    {
      text: 'Let me in—let me in!... I\'m come home: I\'d lost my way on the moor!',
      analysis: 'The ghost\'s desperate cry is the novel\'s central metaphor. "Let me in" will echo through the book—who belongs? Who\'s locked out? Catherine is physically locked out (dead) but also spiritually—she can\'t return to her authentic self or claim her true place. "Come home" reveals what she seeks: return to origin, to childhood bond with Heathcliff, to authentic identity. "Lost my way" is both literal (wandering ghost) and metaphorical (lost her authentic path when she betrayed Heathcliff for social advancement). This single line contains the novel\'s entire tragedy.'
    },
    {
      text: 'Catherine Linton, or Earnshaw, or however she was called... a waif for twenty years!',
      analysis: 'The ghost can\'t even settle on her own name—"or however she was called" reveals identity confusion persisting beyond death. "Twenty years" is crucial: it\'s not how long she\'s been dead, but how long she\'s been spiritually lost—since her marriage choice, not just since her physical death. "Waif" means homeless wanderer, orphaned child—despite owning Wuthering Heights in life, she belongs nowhere. This quote establishes that the tragedy isn\'t death but wrong choices that create spiritual exile.'
    },
    {
      text: 'Come in! Come in! Cathy, do come. Oh do—once more! Oh! my heart\'s darling! hear me this time, Catherine, at last!',
      analysis: 'Heathcliff\'s desperate plea reveals the consuming love at the novel\'s heart. "Come in" directly answers the ghost\'s "let me in"—where Lockwood wounded and rejected Catherine, Heathcliff welcomes and begs for her presence. "Cathy" is the intimate childhood name, "heart\'s darling" the language of absolute devotion. "This time" and "at last" reveal he\'s been seeking her, calling her, for years. "Once more" shows he wants even one more encounter—being haunted is better than being abandoned. This language—tender, desperate, broken—transforms our understanding of Heathcliff from monster to bereaved lover.'
    },
    {
      text: 'I was too much exhausted to reflect on this omen—I just managed to return to the bed, and fell asleep.',
      analysis: 'Lockwood\'s casual dismissal after the profound ghost scene reveals his complete incomprehension. He interprets supernatural encounter and Heathcliff\'s breakdown as mere "omen," then goes to sleep. This emotional shallowness—his ability to witness intensity and simply doze off—establishes the gap between what Lockwood tells and what we must understand. Brontë uses his inadequacy to critique how "civilized" society dismisses what it can\'t categorize, how privilege creates blindness to suffering.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Love Beyond Death',
        explanation: 'Building on Chapter 1\'s mysterious atmosphere, Chapter 2 reveals the novel\'s central relationship: Catherine and Heathcliff\'s bond transcends death itself. The ghost scene establishes that their connection wasn\'t ended by Catherine\'s death—if anything, death intensified it. Heathcliff\'s desperate welcome of the ghost ("Come in! Cathy!") shows he actively seeks haunting because being haunted means Catherine is still present. This isn\'t healthy love (it\'s obsessive, destructive) but it\'s profound—formed in childhood before social consciousness, it predates and supersedes all social rules. Brontë\'s radical concept: the truest bond may be the most destructive. Victorian readers were scandalized that love could transcend marriage vows, propriety, even death. The novel asks: Is this beautiful (spiritual connection defying mortality) or destructive (obsession ruining lives)? Answer: both.'
      },
      {
        name: 'Spiritual Homelessness / Identity Crisis',
        explanation: 'The three names Catherine wrote—Earnshaw, Heathcliff, Linton—represent a profound identity crisis that extends beyond death. Her authentic self was Catherine Earnshaw, her desired identity was Catherine Heathcliff, but she became Catherine Linton through marriage for social advancement. The ghost identifies with the WRONG name (Linton), revealing she\'s trapped with the false identity she chose. Her "I\'ve been a waif for twenty years" means she\'s been spiritually homeless since her marriage choice, not just since her death. This theme explores what happens when you betray your authentic self for social acceptance: you can never return, never belong anywhere again. The ghost\'s "Let me in!" is both literal (locked out of the house) and existential (locked out of her own authentic identity). Catherine\'s tragedy isn\'t dying—it\'s choosing the wrong life and being unable to undo that choice.'
      },
      {
        name: 'Past Invading Present / Cyclical Time',
        explanation: 'The nested narrative structure—Lockwood (1801) reading Catherine\'s diary (1770s) moments before her ghost appears—collapses linear time. The past isn\'t past; it\'s active, present, haunting. Catherine\'s childhood voice speaks across 30 years as if she\'s still alive, then she appears as a ghost claiming she\'s been wandering for twenty years. Time becomes circular: past trauma creates present suffering creates future repetition. The diary as physical object (Lockwood holds the book Catherine held) creates tangible connection across decades. This theme will structure the entire novel—we\'ll move from present (1801) to past (1771) and back, showing how the first generation\'s tragedy creates the second generation\'s suffering. Haunting becomes literal: the dead don\'t rest, time doesn\'t heal, the past never releases its hold.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Gothic Supernatural with Psychological Ambiguity',
        explanation: 'Brontë uses Gothic conventions (ghost, haunted house, supernatural terror) but makes the ghost deliberately ambiguous—is it real or is it Lockwood\'s nightmare? Evidence supports both readings, which is the point. Whether literally true or psychologically true, the meaning is the same: Catherine haunts this place, Heathcliff is destroyed by grief, the past invades the present. The ambiguity shifts focus from "is it real?" to "what does it mean?"—from external fact to internal truth. This technique teaches that symbolic truth can be more profound than literal truth.',
        example: 'The ghost appears after Lockwood reads Catherine\'s diary (suggesting dream) but Heathcliff\'s response suggests he\'s encountered her before (suggesting reality). Brontë refuses to resolve this because the psychological truth—obsessive grief creating literal or metaphorical haunting—matters more than whether ghosts exist.'
      },
      {
        name: 'Unreliable Narration Creating Dramatic Irony',
        explanation: 'Lockwood\'s consistent misinterpretation creates a gap between what he tells us and what we understand. He dismisses the ghost as "bad tea," can\'t comprehend Heathcliff\'s grief, misidentifies household relationships—but WE perceive the truth through his misunderstandings. This makes us active interpreters who must read between the lines. The technique critiques conventional society (Lockwood represents "civilized" incomprehension of trauma) while teaching critical reading (don\'t trust the narrator, interpret evidence yourself).',
        example: 'Lockwood thinks Heathcliff is a fellow "misanthrope" who enjoys solitude. We see that Heathcliff\'s isolation is devastating loss, not romantic preference. The gap between Lockwood\'s shallow interpretation and our deeper understanding is where the novel lives—we must actively create meaning from evidence.'
      },
      {
        name: 'Nested Narratives / Frame Structure',
        explanation: 'The chapter contains multiple narrative layers: Lockwood\'s present-tense account contains Catherine\'s past diary entries, which are scratched in margins of printed religious texts. This creates three temporal layers and three voices (Joseph\'s religious texts, Catherine\'s rebellious diary, Lockwood\'s present narration). The physical form matters: Catherine literally wrote her story in society\'s margins, foreshadowing her marginal existence. The structure shows how past survives in present—through writing, through objects (the book itself), through haunting (literal or psychological).',
        example: 'Lockwood reads: "Catherine Earnshaw, her book" then Catherine\'s diary: "I wish my father were back again..." then sees the ghost who says "I\'m Catherine Linton!" Three timeframes collapse into one night, showing how past becomes present through memory, text, and haunting.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine you\'re a young tech professional who recently moved cities for work. You rent an apartment from someone who never leaves their home, seems barely functional, is clearly dealing with unprocessed trauma. One night while staying over to fix the WiFi during a blizzard, you find an old phone in a drawer—their dead partner\'s phone, still charged, full of voice memos and texts from years ago. You listen to one. Then you think you hear their voice calling from another room. The landlord hears it too and becomes completely undone, sobbing, begging the voice to come back. You realize you\'ve stumbled into grief so profound it has literally or metaphorically created a haunting.',
    
    parallels: [
      '📱 **Digital Archives as Modern Diaries**: Catherine\'s diary entries scratched in margins parallel old phones, social media accounts, deleted texts—ways the dead remain present through their words, waiting to be discovered and resurrect them.',
      '👻 **Trauma as Literal Haunting**: Whether Lockwood\'s ghost is "real" or not mirrors how we discuss mental health—is grief a brain chemistry issue or a spiritual crisis? Is trauma PTSD or a literal haunting? Brontë refuses the binary: psychological pain IS a form of haunting.',
      '💔 **Obsessive Grief in the Digital Age**: Heathcliff desperately seeking Catherine\'s ghost parallels people who can\'t delete their dead partner\'s contact, who still text their number, who hear their voice—grief so profound it refuses the finality of death.',
      '🏚️ **Isolation Enabling Dysfunction**: Wuthering Heights\' remote location lets trauma fester without intervention. Modern parallel: digital isolation where people withdraw into online spaces, conspiracy theories, or depression without anyone noticing or intervening.',
      '🔄 **Algorithms of Repetition**: Heathcliff recreating his trauma by degrading the next generation parallels how abuse cycles through families, how algorithmic social media keeps feeding us the same content, how we unconsciously recreate our worst experiences.',
      '❄️ **Being "Trapped" with Uncomfortable Truth**: The snowstorm trapping Lockwood with ghosts he can\'t dismiss parallels being stuck somewhere (pandemic lockdown, long flight, family gathering) where you can\'t escape uncomfortable truths about yourself or others.'
    ],
    
    discussionPrompt: 'We curate digital afterlives now—Facebook profiles of the dead, memorial Instagram accounts, archived texts and photos. Does this honor the dead or trap us in the past? Heathcliff WANTS to be haunted because haunting means Catherine\'s still present—are we doing the same thing by maintaining digital shrines? When does memory become haunting? When does honoring the dead become inability to move forward?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '👻',
      name: 'Past Haunting Present',
      explanation: 'Introduced in Chapter 1 as foreboding atmosphere, this thread becomes literal in Chapter 2. The past doesn\'t stay past—Catherine\'s childhood diary speaks across decades, then she appears as a ghost, then Heathcliff reveals he\'s been seeking her for years. The novel asks: Can we ever escape the past? Or does trauma/love/loss remain permanently present, literally or psychologically haunting us? Every character will be shown living in the past, defined by earlier events, unable to move forward.'
    },
    {
      emoji: '🔓',
      name: 'Inside/Outside, Belonging/Exile',
      explanation: 'The ghost\'s "Let me in!" crystallizes this thread. Who belongs? Who\'s locked out? Catherine owned Wuthering Heights but is now locked outside it. Heathcliff was brought inside as a child, then exiled by Hindley, now owns it but is spiritually homeless. Lockwood is physically inside but existentially an outsider. The novel explores literal and spiritual homelessness: what happens when you can\'t belong to your own life? This thread will track who has property rights vs. emotional belonging, who\'s included vs. exiled.'
    },
    {
      emoji: '💔',
      name: 'Love as Destruction',
      explanation: 'Heathcliff\'s response to the ghost reveals love so intense it transcends death—and destroys everything. This isn\'t healthy attachment; it\'s consuming obsession. Yet it\'s also the most authentic bond in the novel. This thread explores the dangerous idea that the truest love might be the most destructive. As the novel progresses, we\'ll see how Catherine and Heathcliff\'s bond creates cascading destruction across two generations. The question: can love that profound ever be compatible with life in society?'
    },
    {
      emoji: '🎭',
      name: 'Identity and Naming',
      explanation: 'Catherine\'s three names—Earnshaw, Heathcliff, Linton—reveal identity as mutable and contested. Her ghost can\'t settle on a name, revealing identity crisis that extends beyond death. This thread will explore how identity is created, constrained, and destroyed by social forces. For women (naming through marriage), for Heathcliff (given one name only, no surname), for children forced into roles. The novel asks: what\'s your "true" identity? The one society gives you, the one you desire, or the one you end up with?'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // 5-7 open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'The Reality of the Ghost',
      question: 'Is Catherine\'s ghost "real" (supernatural) or is it Lockwood\'s nightmare (psychological)? What evidence supports each reading? Does it matter to the novel\'s meaning which interpretation is correct?'
    },
    {
      title: 'Lockwood vs. Heathcliff',
      question: 'Compare Lockwood\'s violent response to the ghost (scraping her wrist on glass) to Heathcliff\'s desperate welcome ("Come in! Cathy!"). What does this contrast reveal about each character? Who is more "civilized"? Who is more monstrous?'
    },
    {
      title: 'Catherine\'s Three Names',
      question: 'Why does Catherine\'s ghost identify herself as "Catherine Linton" rather than Catherine Earnshaw (her birth name) or Catherine Heathcliff (the name she wrote in the books)? What does this reveal about her identity crisis and spiritual state?'
    },
    {
      title: 'The Diary as Narrative Device',
      question: 'What does Brontë gain by having Lockwood read Catherine\'s childhood diary before encountering her ghost? How does hearing her authentic voice change our interpretation of the supernatural encounter?'
    },
    {
      title: 'Unreliable Narration',
      question: 'Lockwood witnesses profound events—the diary, the ghost, Heathcliff\'s breakdown—but dismisses them as "bad tea and bad temper." Why does Brontë choose a narrator who fundamentally misunderstands the story he\'s telling? What does this add to our reading experience?'
    },
    {
      title: 'Gothic Conventions and Meaning',
      question: 'This chapter uses classic Gothic elements: a haunted house, a ghost, a snowstorm, terror in the night. But how does Brontë use these conventions to explore psychological and social realities rather than just creating scary moments?'
    },
    {
      title: 'Love and Obsession',
      question: 'Is Heathcliff\'s desperate longing for Catherine\'s ghost beautiful (eternal love transcending death) or disturbing (obsessive inability to let go)? Can it be both? What does the novel suggest about the relationship between love and destruction?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions (Notice → Explore → Amplify)
  // 4-6 discussions, 300-500 words each
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'ghost-ambiguity',
      title: 'The Deliberately Ambiguous Ghost',
      question: 'Is Catherine\'s ghost real or is it Lockwood\'s nightmare? Why does Brontë refuse to clarify?',
      aiResponse: `
**Understanding Productive Ambiguity**

Brontë gives us evidence for both interpretations—and that\'s the point. The ambiguity isn\'t a flaw; it\'s the technique.

**Evidence the Ghost is Real:**

**Heathcliff\'s Response**
- He doesn\'t question whether the ghost appeared
- He asks desperately for details: "What did she say? Did you see her?"
- His immediate action: throws open window, begs her to come in
- Suggests he\'s encountered her before, knows she haunts this place

**Specific Details**
- Lockwood couldn\'t have known Catherine existed until reading the diary
- But the ghost appears WHILE he\'s asleep, after reading
- The blood on the sheets is physically real (he sees it in morning)
- Gothic genre conventions support literal supernatural

**Evidence It\'s Nightmare:**

**Timing**
- Appears immediately after Lockwood reads Catherine\'s diary
- Dream-logic: experiencing what he just read
- He\'s exhausted, anxious, in a strange place, sleeping in a cramped box-bed

**Lockwood\'s Own Explanation**
- Attributes it to "bad tea and bad temper"
- Admits he was disturbed by the diary
- Earlier in the chapter, had other nightmares

**Psychological Plausibility**
- Anxiety dream about being trapped (reflects his actual situation)
- Reading about Catherine, then "seeing" her = dream incorporation
- The violent response: nightmare logic where we harm what we fear

**Why the Ambiguity Matters:**

**The Meaning Is the Same Either Way**

Whether the ghost is:
- Literally real (supernatural haunting)
- Psychologically real (grief-induced vision)
- Lockwood\'s nightmare (external manifestation of reading/anxiety)

The TRUTH remains: Catherine haunts Wuthering Heights. Whether literally or psychologically, she\'s present. Death hasn\'t ended anything.

**Shifts Focus from Fact to Meaning**

Brontë refuses to resolve "is it real?" because that\'s the wrong question. The right questions:
- What does haunting mean?
- Can love transcend death?
- Do our choices trap us spiritually?
- Is grief a form of madness or a form of faithfulness?

These questions matter whether ghosts physically exist or not.

**Victorian Context:**

**Spiritualism Movement**
- Victorians were obsessed with contacting the dead
- Séances, mediums, ghost photography were mainstream
- High mortality rates created grief culture
- Spiritualism offered comfort: death isn\'t final

**But Also Scientific Rationalism**
- Growing skepticism toward supernatural
- Psychological explanations for visions
- Tension between faith and reason

Brontë engages both: she gives Gothic readers their ghost while giving rational readers their nightmare. She refuses to choose sides because the novel is about psychological truth, not metaphysical fact.

**Modern Comparison:**

Think about how we discuss mental health:
- "Depression is brain chemistry" (material/scientific)
- "Depression is spiritual crisis" (psychological/existential)

Both can be true. The ghost scene works the same way—it\'s BOTH material event (real or dreamed) AND psychological truth (Catherine haunts because her loss is unbearable).

**The Novel\'s Position:**

Brontë doesn\'t care if ghosts exist. She cares that:
- Grief can be so profound it creates visions
- Love can transcend physical death
- The past can invade the present
- Trauma doesn\'t resolve neatly

The ghost is "real" in the only way that matters: it expresses truth about obsessive love, spiritual homelessness, and the impossibility of escaping the past.

**Teaching Moment:**

This ambiguity teaches critical reading: literature isn\'t always about one correct answer. Sometimes the ambiguity IS the meaning. Learning to live with uncertainty, to hold multiple interpretations simultaneously, to focus on significance rather than fact—these are sophisticated reading skills.

The ghost is real because love is real. The ghost is nightmare because grief is madness. Both. Always both.
      `
    },
    {
      id: 'catherine-identity',
      title: 'Catherine\'s Three Names and Lost Identity',
      question: 'Why does Catherine write three different names and identify as "Catherine Linton" as a ghost?',
      aiResponse: `
**Understanding Identity Through Naming**

The three names Catherine wrote—Earnshaw, Heathcliff, Linton—aren\'t just doodling. They\'re trying out identities, revealing her core struggle that will drive the entire novel.

**What Each Name Represents:**

**Catherine Earnshaw (Birth Name)**
- Authentic childhood self
- Before social consciousness or constraint
- Wild, free, bonded with Heathcliff
- Running on the moors, rebelling against authority
- "True" self before society forced choices

**Catherine Heathcliff (Desired Identity)**
- The bond that transcended social rules
- What her heart wanted: union with spiritual soulmate
- But impossible: Heathcliff had no property, no status
- This identity was never viable in her society
- Represents authentic desire vs. social reality

**Catherine Linton (Actual Identity)**
- Married name, chosen for social advancement
- Edgar Linton: refined, wealthy, educated, appropriate
- This identity brought property, status, respectability
- But it required betraying Heathcliff and her authentic self
- Represents social conformity at spiritual cost

**The Tragedy of Wrong Choice:**

**In Life:**
- Catherine chose "Linton" for social reasons
- Later tells Nelly: "I AM Heathcliff" (we\'ll see this)
- Recognized she chose wrong life, but couldn\'t undo it
- Spent marriage longing for different identity
- Died spiritually divided: Linton in name, Heathcliff in heart

**As Ghost:**
- Identifies as "Catherine Linton"—the FALSE identity
- Trapped with the wrong name even in death
- Can\'t return to Earnshaw (authentic child-self is lost)
- Can\'t claim Heathcliff (never married him)
- Stuck with Linton (the betrayal, the wrong choice)

This is spiritual homelessness: she belongs nowhere, claimed by no one, trapped with wrong identity forever.

**Victorian Women and Naming:**

**Legal Identity Through Men**
- Women had no legal existence apart from men
- Birth: Father\'s name (Earnshaw)
- Marriage: Husband\'s name (Linton)
- No independent identity possible

**Catherine\'s Rebellion:**
- Writing "Catherine Heathcliff" is radical
- Claiming identity through love, not law
- But society won\'t recognize this name
- Shows how women\'s identities were constrained by patriarchal naming

**The Margins Matter:**

**Where She Wrote:**
- In margins of Joseph\'s religious books
- Literally writing her story in society\'s margins
- Using imposed texts (religion) for her own purposes
- Physical metaphor: she lived in margins of acceptable behavior

**What It Foreshadows:**
- Her entire life will be lived in margins
- Between authentic desire and social requirement
- Between wild nature and civilized refinement
- Never fully inhabiting any single identity

**The Ghost\'s "Catherine Linton":**

**Why This Name as Ghost:**

**Trapped by Wrong Choice**
- She died as "Mrs. Linton"
- That false identity has claimed her permanently
- Can\'t undo the choice, even in death

**Spiritual Divorce Impossible**
- She married Linton in church, under law
- Even though her soul belonged to Heathcliff
- Legal/social identity overrode authentic identity
- Death didn\'t free her from this

**Permanent Exile**
- Can\'t be Earnshaw (lost innocence)
- Can\'t be Heathcliff (never chosen legally)
- Must be Linton (the betrayal)
- This IS her hell: eternal wrong identity

**The "Waif for Twenty Years":**

Twenty years = not since her death, but since her MARRIAGE. She\'s been homeless since choosing to become "Catherine Linton." The wedding was the spiritual death; physical death just confirmed it.

**Modern Parallel:**

Think about identity questions we still struggle with:
- Your birth name vs. chosen name
- Professional identity vs. authentic self  
- Who you are on social media vs. who you are alone
- The person your family thinks you are vs. who you actually are

What happens when you get trapped in the wrong identity? When society, law, or circumstances force you into a life that isn\'t authentically yours? Can you ever escape? Catherine\'s answer: No. The wrong choice becomes permanent.

**Brontë\'s Radical Critique:**

This isn\'t just personal tragedy—it\'s social critique:
- Victorian marriage law trapped women in legal identities
- Economic reality forced marriage for survival
- Women couldn\'t claim identity apart from men
- "Authentic self" was luxury only men could afford

Catherine\'s three names indict a system that forced women to choose between:
- Economic security (marry for property)
- Authentic desire (love without social approval)
- Never both

She chose security. Her ghost is the price: eternal wrong identity, forever locked out of her own authentic life.

**The Novel\'s Warning:**

What you become matters. Once you claim an identity—through marriage, career, social role—you may never be able to return to authentic self. Choose wrong and you become spiritually homeless, a waif wandering for decades, begging to be let back into the life you traded away.

Catherine Linton is a ghost not because she died, but because she betrayed Catherine Earnshaw\'s bond with Heathcliff. She haunts not Wuthering Heights, but her own wrong choice.
      `
    },
    {
      id: 'lockwood-unreliable',
      title: 'Why Choose an Unreliable Narrator?',
      question: 'Lockwood fundamentally misunderstands everything he witnesses. Why does Brontë choose a narrator who can\'t interpret his own story?',
      aiResponse: `
**The Strategic Use of Incomprehension**

Lockwood is a terrible interpreter—and that\'s exactly why he\'s the perfect narrator. His failures teach us how to read critically.

**What Lockwood Fails to Understand:**

**The Ghost\'s Significance**
- He thinks: "Bad tea and bad temper" caused a nightmare
- We see: Profound supernatural/psychological encounter revealing the novel\'s central tragedy
- His dismissal: Shows how "rational" society rejects what it can\'t categorize

**Heathcliff\'s Grief**
- He thinks: Heathcliff is a fellow misanthrope who enjoys solitude
- We see: Devastated lover destroyed by loss, seeking death to reunite with Catherine
- His projection: He sees his own shallow romanticism, misses the profound suffering

**Household Dynamics**
- He thinks: Rude people with bad manners
- We see: Systematic revenge, imprisonment, degradation—trauma perpetuating itself
- His social blindness: Privilege prevents him recognizing oppression

**Why Brontë Chooses This:**

**Creates Critical Distance**

**The Story Is Too Intense**
- Catherine and Heathcliff\'s passion would overwhelm readers
- Victorian readers needed "civilized" entry point
- We process intensity through mediating narrator
- Like watching horror film through your fingers

**Allows Multiple Interpretations**
- Lockwood presents facts but not meanings
- We must interpret evidence ourselves
- Different readers draw different conclusions
- Active reading, not passive consumption

**Teaches Critical Reading**

**Don\'t Trust the Narrator**
- Lockwood constantly gets it wrong
- We learn to question, to look deeper
- Check narrator\'s claims against evidence
- This is training in critical thinking

**Read Between the Lines**
- Truth is in what Lockwood shows, not what he tells
- He documents without understanding
- We extract meaning from his incomprehension
- Literature as detective work

**Social Critique**

**Lockwood Represents "Civilized" Society**
- Educated, propertied, conventional
- Speaks for "respectable" Victorian values
- Judges working-class Yorkshire culture
- Misses entirely the depth he\'s witnessing

**His Incomprehension Is the Critique**
- "Civilized" society can\'t understand trauma
- Conventional morality has no framework for authentic passion
- Social refinement creates emotional shallowness
- The "educated" are actually ignorant of deepest human truths

**Lockwood\'s Specific Failures:**

**Class Blindness**

**He Can\'t Recognize Oppression**
- Sees Hareton as "servant" not degraded heir
- Doesn\'t notice young Catherine is imprisoned
- Misses entirely the revenge dynamics
- His privilege prevents perceiving suffering

**Why It Matters**
- Victorian readers were like Lockwood: privileged, comfortable
- Brontë critiques her own readers\' blindness
- Makes us complicit in Lockwood\'s failures
- Then shows us what we\'re missing

**Emotional Shallowness**

**He\'s Never Felt Anything Profound**
- His "misanthropy" is affected, romantic
- His feelings are mild, comfortable, performative
- He has no reference point for consuming passion
- Can\'t comprehend love or grief that intense

**Contrasts with Catherine/Heathcliff**
- Their love: pre-social, all-consuming, destructive
- His feelings: social affectation, mild, safe
- The gap: between authentic emotion and social performance

**Cultural Outsider Status**

**He\'s Permanently Outside**
- Southern English in Yorkshire
- Urban in rural setting
- Refined in working household
- Outsider can document but never understand

**This Mirrors the Reader**
- We\'re also outsiders to this world
- We also risk misreading through our own biases
- Lockwood\'s failures warn us about our own
- Don\'t assume you understand—work to interpret

**The Dramatic Irony Creates:**

**Reader Superiority**
- We know more than Lockwood does
- Creates satisfying sense of insight
- We want to correct him, explain what he\'s missing
- This engagement hooks us into the narrative

**Investment in Truth**
- Because Lockwood gets it wrong, we seek the truth
- His failures make us active investigators
- We\'re determined to understand what he can\'t
- Mystery isn\'t plot (what happened) but meaning (what does it mean)

**Victorian Innovation:**

**Frame Narrators Were Common**
- Gothic novels often used frame structure
- *Frankenstein*, *Manuscript Found in Saragossa*, etc.
- Usually frame narrator mediated but didn\'t misunderstand

**Brontë\'s Innovation**
- Making frame narrator actively unreliable
- Not just mediating intensity, but misreading it
- Forces readers to work against narrator\'s interpretations
- More sophisticated, more demanding of readers

**Modern Parallels:**

Think unreliable narrators in:
- *Fight Club*: Narrator doesn\'t know Tyler is himself
- *Gone Girl*: Amy and Nick both lie to us
- *The Usual Suspects*: Verbal\'s entire story is fabrication

Why do we enjoy these? Because:
- Makes us active participants, not passive consumers
- Creates "aha!" moment when truth revealed
- Trains critical thinking: don\'t believe everything you\'re told
- Reflects reality: we\'re always getting partial, biased information

**The Meta-Lesson:**

**Brontë Teaches:**
- Narration is always perspective, never objective truth
- Privilege creates blindness (Lockwood can\'t see what we see)
- Emotional sophistication requires experience (he hasn\'t suffered deeply enough to recognize it)
- Cultural difference creates incomprehension (outsiders can\'t understand insider experience)

These lessons apply beyond literature:
- How do we receive news? (Consider the narrator\'s bias)
- How do we judge others? (Are we Lockwood, missing the depth?)
- How do we understand trauma? (Do we dismiss what we can\'t categorize?)

**By End of Chapter 2:**

**Lockwood Knows:**
- Wuthering Heights is unpleasant
- People there are rude
- He had a bad dream about a ghost
- Heathcliff is mentally unstable
- Time to leave and recover from his cold

**We Know:**
- Catherine and Heathcliff shared profound childhood bond
- Catherine married Edgar Linton, betraying authentic self
- Catherine died but continues to haunt (literally or psychologically)
- Heathcliff has built his entire life around this loss
- The household is traumatized, enacting revenge
- Past invades present through memory and haunting

**The Gap = The Novel:**

That space between Lockwood\'s account and our understanding—that\'s where *Wuthering Heights* lives. Brontë doesn\'t just tell a story; she teaches us how to find meaning in incomplete, biased accounts.

Which is, ultimately, how we have to navigate all information in life.

Lockwood isn\'t a bad narrator. He\'s the perfect narrator for teaching us to be better readers.
      `
    },
    {
      id: 'heathcliff-transformation',
      title: 'Heathcliff\'s Emotional Revelation',
      question: 'How does Chapter 2 transform our understanding of Heathcliff from Chapter 1?',
      aiResponse: `
**From Monster to Bereaved Lover**

Chapter 1 showed Heathcliff as cold, hostile, mysterious—almost monstrous. Chapter 2 cracks that facade completely, revealing the suffering beneath.

**Chapter 1: The Exterior**

**What We Saw:**
- Dark, reserved, unfriendly man
- "Heathcliff" (one name only, no surname—outsider status)
- Cold lack of hospitality
- Hostile responses to Lockwood
- Isolated, seemingly by choice
- Described as "gipsy" in appearance
- Gentleman in dress but rough in manner

**Our Impression:**
- Gothic villain or mysterious dark hero
- Romantic misanthrope (like Lockwood claims)
- Potentially dangerous
- Emotionally closed off

**Chapter 2: The Interior Revealed**

**The Ghost Scene Transformation:**

**When Lockwood Mentions Catherine:**
- Heathcliff becomes "agitated, urgent"
- Demands every detail: "What did she say? Did you see her?"
- His whole demeanor changes—desperation replaces coldness
- The name "Catherine" acts like a key unlocking him

**His Response to the Window:**
- Throws it open immediately
- Stands in snow and storm
- Sobbing—the cold man breaks down
- Tender language we haven\'t heard from him

**The Language of His Plea:**

**"Come in! Come in!"**
- Directly answering the ghost\'s "Let me in!"
- Where Lockwood rejected, Heathcliff welcomes
- He WANTS to be haunted (haunting = presence)

**"Cathy"**
- Intimate childhood nickname
- Not formal "Catherine"
- Reveals depth of their bond
- Pre-social, authentic connection

**"Heart\'s darling"**
- Language of absolute devotion
- Victorian endearment, deeply romantic
- Shows this isn\'t just grief but consuming love

**"Once more"**
- He\'s been calling her for years
- One more encounter would be enough
- Being haunted beats being abandoned

**"This time, at last"**
- He\'s been seeking her, getting no response
- Hope mixed with desperation
- Suggests he\'s done this many times before

**What This Reveals:**

**Heathcliff\'s Isolation Is Loss, Not Choice**

**Chapter 1 Suggested:**
- He enjoys solitude
- Misanthropy as romantic preference
- Chooses to be alone

**Chapter 2 Reveals:**
- His isolation is devastating
- Result of Catherine\'s death
- He\'s alone because she\'s gone
- Not choice but consequence

**His Life Is Structured Around Her Absence**

**Everything He Does:**
- Living in Wuthering Heights (their childhood home)
- Keeping her room untouched (implied)
- Seeking her ghost, calling to her
- Unable to move forward from her death
- His cruelty to others fueled by this grief

**His Cruelty Has Context (Not Justification):**
- Destroying others because he\'s destroyed
- Revenge against those who contributed to losing Catherine
- Trauma creating more trauma
- Hurt people hurt people

**The Love That Transcends Death:**

**Victorian Scandal:**

Victorian culture said:
- Marriage vows are sacred (Catherine married Edgar)
- Death should end earthly attachments (move on)
- Excessive grief is selfish (think of the living)
- Religion should provide comfort (faith, not desperation)

**Heathcliff Violates All This:**
- His bond with Catherine supersedes her marriage
- Death hasn\'t diminished his devotion
- His grief is all-consuming, not moderate
- He seeks Catherine, not God

**Modern Psychology:**

We now recognize:
- Complicated grief (can\'t process loss)
- Childhood attachment disorders
- PTSD from abandonment/loss
- How early trauma shapes all future relationships

Heathcliff shows all these—Brontë anticipated psychology decades before Freud.

**The Contrast Reveals the Critique:**

**Lockwood vs. Heathcliff:**

**Lockwood (Civilized Society):**
- Sees ghost, responds with violence
- Deliberately wounds Catherine
- Dismisses experience as "bad tea"
- Goes back to sleep
- Flees at dawn, returns to comfort
- Completely unaffected by intensity he witnessed

**Heathcliff (Passionate Nature):**
- Hears of ghost, responds with desperate longing
- Begs Catherine to appear
- Takes experience as sacred possibility
- Stands in snow begging for haunting
- Can never return to comfort
- Has been defined by this intensity for decades

**Who Is the Monster?**

Lockwood:
- Wounded a ghost/child begging for help
- Felt no remorse
- Dismissed others\' suffering
- Privilege protects him from consequences
- "Civilized" but cruel

Heathcliff:
- Desperately wants connection with ghost
- Shows tender devotion
- Suffers profoundly
- Trauma has destroyed him
- "Savage" but loving (toward Catherine)

**Brontë\'s Radical Position:**

The "civilized" man (Lockwood) is emotionally shallow and casually cruel. The "savage" man (Heathcliff) is capable of profound love and loyalty—albeit destructive.

She doesn\'t romanticize Heathcliff (he\'s genuinely cruel to others) but she shows his cruelty has origin in devastating loss. Lockwood\'s cruelty has origin in privileged indifference.

**The Novel\'s Central Tragedy Emerges:**

**What Destroyed Heathcliff:**

Not inherent evil, but:
- Childhood bond with Catherine (profound attachment)
- Social forces separating them (class, property)
- Catherine choosing Edgar over him (betrayal)
- Her death before reconciliation (permanent loss)
- Inability to process or move past grief (complicated grief)

He\'s not born a monster. He\'s made one through:
- Early abandonment (orphan)
- Adoption then rejection (Hindley\'s cruelty)
- Loss of Catherine through marriage (betrayal)
- Loss of Catherine through death (finality)
- Decades of unprocessed grief (corrosion)

**Why We Can\'t Simply Condemn Him:**

**He\'s Simultaneously:**
- Victim (of class system, Hindley, Catherine\'s choice)
- Perpetrator (of revenge on next generation)
- Lover (consumed by authentic bond)
- Destroyer (unable to contain grief, spreads suffering)

This complexity is what makes the novel great. Heathcliff isn\'t hero or villain—he\'s human rendered monstrous by loss and social injustice.

**The Ghost Scene\'s Function:**

**Without It:**
- We might see only Heathcliff\'s cruelty
- Might read him as Gothic villain
- Might miss the love story
- Might not understand his motivation

**With It:**
- We understand his cruelty has origin in loss
- We see the profound love at the novel\'s heart
- We recognize grief as the driving force
- We must grapple with sympathizing with someone cruel

**Teaching Complex Morality:**

Literature\'s power:
- Forces us to understand characters we\'d condemn in life
- Creates empathy for people whose actions we can\'t condone
- Shows how victims can become perpetrators
- Complicates our moral categories

Heathcliff remains cruel throughout the novel. But Chapter 2 ensures we can never simply dismiss him as villain. We must hold complexity: he\'s both destroyed and destroyer, both loving and cruel, both victim and perpetrator.

**This Is Adult Moral Thinking:**

Not "good person" or "bad person" but: How do suffering, loss, and social injustice create cruelty? Can we recognize pain while condemning harm? Is there a point where understanding becomes excuse?

The novel doesn\'t answer these questions—it makes us live with them.

And that\'s more valuable than any answer.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Rewrite the Ghost Scene from Heathcliff\'s Perspective',
      description: 'Students rewrite the ghost scene (from when Lockwood screams to dawn) from Heathcliff\'s first-person perspective. What does he hear? What does he feel when Lockwood mentions Catherine\'s name? What goes through his mind as he opens the window and calls to her? What does he remember? Include his internal thoughts about Catherine, his grief, and why he wants to be haunted. Minimum 500 words.',
      purpose: 'This exercise develops empathy and perspective-taking while requiring close reading of the text. Students must infer Heathcliff\'s thoughts from his actions and words, imagine his emotional state, and understand his character motivation. It also teaches narrative perspective: how does the story change when told from different viewpoints? Requires synthesis of textual evidence with creative interpretation.'
    },
    
    activity: {
      title: 'Mapping Identity Through Names',
      description: 'Create a visual representation (poster, diagram, or digital presentation) tracking Catherine\'s three names—Earnshaw, Heathcliff, Linton—and what each represents. Include: timeline showing when each name applied, symbolic meanings (authentic self, desired identity, social choice), why the ghost identifies as "Linton," and modern parallel (how do names define identity today?). Present findings to class explaining why names matter to identity formation.',
      materials: 'Large poster paper or digital tools (Canva, PowerPoint), markers/colored pens, copies of relevant text passages about Catherine\'s names, timeline template'
    },
    
    crossCurricular: {
      title: 'Victorian Spiritualism and Ghost Beliefs',
      description: 'Connect to history and science by examining Victorian spiritualism movement. Research: Why were Victorians obsessed with ghosts and séances? (High mortality rates, industrial change creating anxiety.) How did they try to "scientifically" prove ghosts existed? (Spirit photography, mediums, Society for Psychical Research.) How does this context help us understand Victorian readers\' response to Catherine\'s ghost? Compare Victorian ghost beliefs to modern paranormal investigation. Create presentation explaining how historical context shapes literary interpretation.',
      subjects: ['History', 'Psychology', 'Sociology', 'Media Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // ONE focused, high-level analytical task requiring synthesis
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Analyzing the Function of Ambiguity in the Ghost Scene',
    prompt: 'Brontë deliberately keeps Catherine\'s ghost ambiguous—she provides evidence it\'s real (Heathcliff\'s response, specific details, blood) and evidence it\'s nightmare (Lockwood just read diary, exhausted, anxiety dream). Most authors would clarify whether ghosts exist in their fictional world. Why does Brontë refuse? Analyze how the ambiguity serves the novel\'s themes, characterization, and meaning. What would be lost if she definitively proved the ghost real or definitively explained it as dream? Make an argument about why productive ambiguity can be more powerful than clarity.',
    
    guidingQuestions: [
      'What different truths does each interpretation (real ghost vs. nightmare) reveal? Are these truths compatible or contradictory?',
      'How does the ambiguity affect our understanding of Heathcliff, grief, and love in the novel?',
      'What does the refusal to clarify teach us about how to read literature? About different kinds of "truth"?',
      'Consider modern examples: horror movies that don\'t show the monster, mysteries that don\'t fully explain, love stories with ambiguous endings. Why does ambiguity sometimes work better than clarity?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down the evidence for each interpretation (real vs. dream). Identify what each interpretation emphasizes or reveals. Examine how the ambiguity affects reader response, character understanding, and thematic meaning.',
      evaluate: 'Assess what would be gained and lost with each definitive explanation. Judge whether one interpretation is "better" than the other, or whether the ambiguity itself is superior. Weigh the value of certainty vs. complexity in storytelling.',
      synthesize: 'Create an argument about why Brontë chose ambiguity and what it achieves. Connect to broader ideas about literary interpretation, symbolic vs. literal truth, and how we make meaning from uncertain information. Apply insights to other texts or to how we interpret ambiguous situations in life.'
    },
    
    expectedDepth: 'This exercise requires sophisticated thinking about how literary technique creates meaning. Strong responses will: (1) Acknowledge the evidence for both interpretations without forcing resolution. (2) Articulate what each interpretation reveals about characters, themes, and meaning. (3) Make a case for why ambiguity serves the novel better than clarity would. (4) Connect to larger ideas about interpretation, truth, and meaning-making. (5) Use specific textual evidence to support abstract claims. Students should move beyond "it\'s mysterious" to examine how ambiguity functions strategically.',
    
    classroomApplication: 'Works well as: (1) Individual analytical essay (3-5 pages). (2) Small group discussion followed by individual position paper. (3) Class debate: divide into teams arguing for real ghost vs. nightmare, then come together to discuss why we can\'t resolve it. (4) Comparative analysis: examine ambiguous moments in other texts (*Turn of the Screw*, *Beloved*, *Life of Pi*). Allow 2-3 days for thinking and writing. Encourage students to sit with uncertainty rather than forcing premature conclusions.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS - Closing Section (REQUIRED)
  // Rotating one-liner with gold gradient styling
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(2),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Build anticipation for next chapter
  // ===================================================================
  nextTimeTeaser: {
    emoji: '📚',
    title: 'Next Time: Nelly Dean Begins the Real Story',
    preview: 'Lockwood returns to Thrushcross Grange and falls ill from exposure. While recovering, he asks his housekeeper Nelly Dean to tell him the history of Wuthering Heights. She agrees, and the novel\'s main story begins—traveling back thirty years to when Mr. Earnshaw brought home a mysterious dark child and named him Heathcliff. We\'ll finally understand the origins of the tragedy: how Catherine and Heathcliff\'s childhood bond formed, how social forces destroyed it, and how their impossible love created the haunted present Lockwood has witnessed.',
    hookQuestion: 'Who was Heathcliff before he became this destroyed man? What was Catherine like in life? How did their bond form, and what forces tore them apart? Why does their love story still haunt Wuthering Heights decades later? The backstory will reveal all—and it\'s more devastating than we imagined.'
  }
}
