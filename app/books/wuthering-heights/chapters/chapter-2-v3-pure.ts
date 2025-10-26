/**
 * WUTHERING HEIGHTS - CHAPTER 2 (Pure V3)
 * 
 * Lockwood returns and encounters the mysterious household
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter2: ChapterData = {
  number: 2,
  title: 'The Second Visit',
  
  readingTime: 18,
  pages: 10,
  
  // ===================================================================
  // SUMMARY
  // ===================================================================
  summary: {
    brief: 'Despite Heathcliff\'s obvious wish that he stay away, Lockwood returns to Wuthering Heights and encounters an even stranger household: a young woman who seems neither wife nor servant, a sullen young man, and bizarre domestic dynamics that leave him more confused than enlightened about who these people are.',
    
    full: [
      'Lockwood returns to Wuthering Heights the following afternoon, determined to be sociable despite yesterday\'s hostile reception. He finds the gate locked and must wait in falling snow before a surly young man (later revealed as Hareton Earnshaw) grudgingly admits him. Inside, Lockwood encounters a young woman who appears to be in her late teens—he assumes she must be Heathcliff\'s wife, but she responds with contempt and says Heathcliff is "not my husband." Lockwood then guesses she\'s married to the young man, which provokes even greater scorn: she is Mrs. Heathcliff, widow of Heathcliff\'s son.',
      
      'The household dynamics are bizarre and hostile. The young woman (later we\'ll learn her name is Cathy Linton, now Cathy Heathcliff) treats everyone with cold disdain. The young man Hareton can barely read and is treated as a servant despite appearing to have some claim to the house. Heathcliff shows up and is equally unwelcoming, making no effort to explain the confusing relationships. Joseph, the elderly religious servant, mutters incomprehensibly in thick Yorkshire dialect. Lockwood tries repeatedly to understand who everyone is and how they relate to each other, but each question is met with hostility or mockery.',
      
      'As snow begins falling heavily, Lockwood realizes he should leave but finds Heathcliff and the others indifferent to his predicament. No one will guide him home, lend him a servant, or even give him a lantern. When he tries to take a lantern by force, Joseph sets the dogs on him. The household watches with cold amusement as Lockwood is humiliated and injured. Eventually Zillah, a female servant, takes pity and shows him to a bedroom where he can stay the night, warning him not to make noise that might disturb Heathcliff.',
      
      'The chapter reveals the complete dysfunction and cruelty of the Wuthering Heights household. These aren\'t merely reserved people—they\'re actively hostile, taking pleasure in Lockwood\'s confusion and distress. The relationships remain mysterious: Why does the young widow live at Wuthering Heights with her father-in-law? Why is Hareton treated as a servant if he seems to belong there? What happened to the son Cathy was married to? The household\'s refusal to explain or show basic hospitality creates an atmosphere of deliberate cruelty. Lockwood, still naive, attributes this to rough Yorkshire manners rather than recognizing genuine malice. The storm trapping him at the Heights becomes literal imprisonment in a house whose inhabitants seem barely human in their coldness.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // ===================================================================
  termsToKnow: [
    {
      term: 'Social Confusion as Power',
      definition: 'The deliberate refusal to clarify relationships or explain social situations, used to maintain power over someone by keeping them disoriented and at a disadvantage.',
      context: 'The household refuses to explain who anyone is—Lockwood guesses Cathy is Heathcliff\'s wife, then the young man\'s wife, each time receiving scornful corrections. This keeps him off-balance, confused, and powerless. They deliberately obscure rather than clarify.',
      whyItMatters: 'Withholding social information is a control tactic. In any new situation—jobs, schools, social groups—those who control information control power. People who deliberately keep you confused about social dynamics are asserting dominance through that confusion. Recognizing this helps you understand when disorientation is being weaponized against you.'
    },
    {
      term: 'Dramatic Irony',
      definition: 'When readers know information that characters don\'t, creating tension between what characters think and what\'s actually true.',
      context: 'Readers will soon learn through Nelly\'s narrative what Lockwood doesn\'t know: that Cathy is the daughter of Catherine and Edgar Linton, forced to marry Heathcliff\'s dying son; that Hareton is actually the rightful heir to Wuthering Heights, degraded by Heathcliff; that everyone here is connected through multi-generational revenge. Lockwood stumbles through scenes we\'ll understand later.',
      whyItMatters: 'Dramatic irony creates engagement—we want characters to understand what we know. It also teaches that surface interactions conceal histories and relationships we can\'t see. In real life, we\'re often Lockwood: observing dynamics we don\'t understand, missing the history that explains what\'s happening. Literature trains us to recognize our own ignorance and seek fuller context.'
    },
    {
      term: 'Yorkshire Dialect',
      definition: 'Regional English dialect from Yorkshire with distinctive vocabulary, pronunciation, and grammar—often incomprehensible to outsiders, creating linguistic barriers.',
      context: 'Joseph speaks in thick Yorkshire dialect that Lockwood (and many readers) can barely understand. Brontë transcribes it phonetically: "Aw wonder hagh yah can faishion tuh stand thear i\' idleness un war, when all on \'ems goan aght!" This creates alienation—Lockwood literally cannot understand the language being spoken.',
      whyItMatters: 'Dialect marks class and regional boundaries. Joseph\'s incomprehensible speech signals that Lockwood is an outsider—southern, educated, genteel—encountering working-class northern culture he cannot penetrate. Language becomes barrier, reminding us that communication requires shared codes. When you can\'t understand the language (literal or social), you\'re excluded from belonging.'
    },
    {
      term: 'Gothic Imprisonment',
      definition: 'Being trapped in an isolated, hostile location, unable to escape—a Gothic convention where physical confinement represents psychological or social entrapment.',
      context: 'The snowstorm traps Lockwood at Wuthering Heights with hostile inhabitants who refuse to help him leave. He\'s literally imprisoned by weather and the household\'s indifference to his predicament. The Gothic "castle" becomes prison.',
      whyItMatters: 'Physical imprisonment in Gothic novels often symbolizes larger entrapment: social constraints, psychological trauma, inescapable pasts. Being trapped at Wuthering Heights represents being caught in consequences of histories you don\'t understand, forced to confront realities you\'d rather avoid. Modern readers understand this feeling: trapped in situations—relationships, jobs, family dynamics—where you can\'t simply leave despite wanting to.'
    },
    {
      term: 'Deliberate Inhospitality',
      definition: 'The active refusal of basic hospitality or courtesy, using coldness and neglect as weapons to assert power and signal rejection.',
      context: 'No one will guide Lockwood home through the storm, lend him a servant, or give him a lantern. When he tries to take a lantern, they set dogs on him. This isn\'t mere rudeness—it\'s deliberate cruelty, taking pleasure in his distress. They watch him struggle with cold amusement.',
      whyItMatters: 'Withholding help when someone needs it is power play. Whether it\'s refusing to explain social dynamics (keeping someone confused), refusing physical help (watching someone struggle), or refusing basic courtesy (treating people coldly), deliberate inhospitality asserts dominance. Recognizing when coldness is strategic rather than personality helps you understand power dynamics in any social situation.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // ===================================================================
  characters: [
    {
      name: 'Mr. Lockwood',
      development: 'Lockwood continues to demonstrate cluelessness, but his naiveté is becoming more pathetic than charming. He returns despite clear signals he\'s unwanted, keeps making wrong assumptions about relationships, and attributes genuine cruelty to "rough Yorkshire manners." He guesses Cathy is Heathcliff\'s wife—wrong. Then the young man\'s wife—wrong again. Each error is met with scorn, yet he doesn\'t question his assumptions or recognize the household\'s deliberate evasiveness. When trapped by snow, he expects help and is baffled when none comes. His genteel southern assumptions (that people will be hospitable, explain relationships, offer assistance to guests) crash against Yorkshire Heights reality (they owe him nothing and enjoy his distress). He\'s learning nothing from experience—still seeing himself as sociable, still romanticizing what he should fear.',
      keyTrait: {
        emoji: '🤦',
        text: 'Persistently Clueless'
      }
    },
    {
      name: 'Cathy (Catherine Linton Heathcliff)',
      development: 'A young woman introduced with cold beauty and colder manner. Lockwood sees her as about eighteen, with "an admirable form, and the most exquisite little face" but notes her eyes are "spiritless" and her bearing completely joyless. She treats Lockwood with contempt, answers questions with scorn, and shows no warmth to anyone in the household. When identified as "Mrs. Heathcliff," she\'s revealed as widow to Heathcliff\'s son—a marriage that ended, but we don\'t yet know how. She seems trapped at the Heights, treating everyone with equal coldness, performing tasks like tea preparation with resentful formality. Her youth and beauty contrast sharply with her deadened spirit—something has extinguished whatever life or happiness she might have had. She represents another mystery: Why is a young widow living with her hostile father-in-law in this miserable household?',
      keyTrait: {
        emoji: '❄️',
        text: 'Cold Widow'
      }
    },
    {
      name: 'Hareton Earnshaw',
      development: 'A young man Lockwood takes for a servant—sullen, roughly dressed, barely literate (he struggles to read his own name carved over the door). He does menial work, speaks little, and is treated with casual cruelty by everyone, especially young Cathy who seems to despise him. Yet there are hints he has some claim to the place: his name is carved into the house (dated 1500, marking it as ancestral Earnshaw property), and he shows flashes of pride beneath his degraded state. When mocked, he responds with violence or sullen silence. He appears to be in his early twenties, capable of physical labor but denied education or respect. Something has reduced him to this state—someone with apparent claim to Wuthering Heights living as rough servant, unable to read, subject to contempt. Another mystery: Who is he really, and how did he fall so low?',
      keyTrait: {
        emoji: '🪨',
        text: 'Degraded Heir'
      }
    },
    {
      name: 'Heathcliff',
      development: 'Even less hospitable than Chapter 1. He makes no effort to explain household relationships, shows no concern when Lockwood is trapped by snow, and seems indifferent to whether his tenant lives or dies. When Lockwood tries to take a lantern, Heathcliff doesn\'t intervene as Joseph sets dogs on him—he watches. His complete lack of basic humanity is now undeniable. He\'s created (or allowed to develop) a household where everyone is hostile, no one shows compassion, and cruelty is casual. The young widow lives there in obvious misery; the young man is kept degraded; the servants are either cruel (Joseph) or cowed (Zillah). Heathcliff presides over this dysfunction with cold satisfaction, as if the household\'s collective misery pleases him. He\'s not merely reserved—he\'s created an environment of deliberate cruelty.',
      keyTrait: {
        emoji: '🧊',
        text: 'Architect of Misery'
      }
    },
    {
      name: 'Joseph',
      development: 'The elderly religious servant becomes more prominent and more incomprehensible. His thick Yorkshire dialect is transcribed phonetically, making him nearly unreadable for many readers—this is Brontë\'s point. He represents old Yorkshire: religiously devout but cruel, quoting Bible while showing no Christian charity, loyal to Heathcliff but contemptuous of outsiders. He deliberately siccing dogs on Lockwood while muttering scripture shows his character: religious language masking genuine meanness. His incomprehensibility to Lockwood represents the cultural and class barriers between southern gentility and northern working-class life.',
      keyTrait: {
        emoji: '📖',
        text: 'Pious Cruelty'
      }
    },
    {
      name: 'Zillah',
      development: 'The female servant who finally shows Lockwood mercy by giving him a room for the night. She\'s the only person at Wuthering Heights who performs basic hospitality, though even she warns him not to make noise that might disturb Heathcliff. Her small kindness stands out in this cruel household—but even she operates under Heathcliff\'s shadow, nervous about his reaction. She represents working-class pragmatism: not involved in the family dramas, just trying to do her job without attracting Heathcliff\'s attention. That she\'s the kindest person here says everything about the place.',
      keyTrait: {
        emoji: '🕯️',
        text: 'Wary Mercy'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // ===================================================================
  quotes: [
    {
      text: 'I began to doubt whether he were a servant or not: his dress and speech were both rude, entirely devoid of the superiority observable in Mr. and Mrs. Heathcliff; his thick brown curls were rough and uncultivated, his whiskers encroached bearishly over his cheeks, and his hands were embrowned like those of a common labourer.',
      analysis: 'Lockwood describes Hareton, unable to place him socially. The confusion reveals class anxiety: if Hareton\'s not clearly servant (dress, manner, literacy), what is he? The description emphasizes his degradation—rough, uncultivated, bearish, laborer\'s hands—while noting he lacks the "superiority" of the Heathcliffs. This hints at mystery: someone who should perhaps have status but has been reduced. The inability to categorize him socially creates discomfort for class-conscious Lockwood.'
    },
    {
      text: 'The herd of possessed swine could have had no worse spirits in them than those animals of yours, sir.',
      analysis: 'Lockwood references the Biblical story of demons cast into swine, but the real point is his repetition—he used this line in Chapter 1 too. He\'s learning nothing from experience. Same hostile dogs, same dangerous household, yet he returned anyway. His repetition of grievance without changing behavior shows his fundamental inability to learn. The Gothic household remains dangerous, but he keeps walking into it expecting different results.'
    },
    {
      text: 'Not anxious to come in contact with their fangs, I sat still; but, imagining they would scarcely understand tacit insults, I unfortunately indulged in winking and making faces at the trio.',
      analysis: 'This perfectly captures Lockwood\'s foolishness—he antagonizes vicious dogs because he thinks they won\'t understand his "tacit insults," then is shocked when they attack. It\'s metaphor for his entire approach: he thinks his genteel superiority (the winking, the "tacit" nature) protects him from consequences. He insults what he doesn\'t respect, assuming it won\'t understand or matter. Then reality (the dogs, the household, the storm) proves him wrong.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Social Confusion as Power Play',
        explanation: 'The household deliberately refuses to clarify who anyone is or how they relate. Each time Lockwood guesses, he\'s corrected with contempt. This keeps him off-balance, confused, powerless. They control information and thus control the interaction. The refusal to explain isn\'t rudeness—it\'s strategic. Keeping visitors confused maintains power over them. This theme explores how withholding social clarity (not explaining relationships, job expectations, group dynamics) is weapon used to assert dominance and keep people vulnerable.'
      },
      {
        name: 'The Hostile Household as System',
        explanation: 'Wuthering Heights isn\'t just physically harsh—it\'s a system of cruelty where everyone is hostile and no one shows compassion. This isn\'t individual bad behavior; it\'s collective dysfunction serving Heathcliff\'s purposes. The young widow is miserable, the young man is degraded, the servants are either cruel or cowed. Everyone trapped there operates within system of deliberate inhospitality. The novel explores how toxic environments aren\'t just one person but systems that distribute cruelty across multiple people until everyone participates.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Withholding Information from Reader and Character',
        explanation: 'Brontë withholds crucial information from both Lockwood and readers. We don\'t know who these people are, how they relate, what happened to create this situation. The mystery creates engagement—we want to understand what Lockwood doesn\'t.',
        example: 'Who is Hareton? Why is his name carved on the house if he\'s treated as servant? What happened to Cathy\'s husband? Why does she live with Heathcliff if she\'s his son\'s widow? These questions drive narrative forward. We keep reading to discover what the household refuses to explain. The technique teaches that literature, like life, requires tolerating confusion while seeking understanding.'
      },
      {
        name: 'Dialect as Social Barrier',
        explanation: 'Joseph\'s Yorkshire dialect is rendered phonetically incomprehensible. This isn\'t just color—it\'s alienation technique. Lockwood literally cannot understand language being spoken, marking him as outsider.',
        example: 'Joseph\'s speech: "Aw wonder hagh yah can faishion tuh stand thear i\' idleness un war..." Most readers struggle with this as much as Lockwood does. The incomprehensibility is the point—language creates barriers, dialects mark boundaries, communication requires shared codes. When you can\'t understand what\'s being said, you\'re excluded. This reflects real experiences of linguistic/cultural outsiderness.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION (~200 words)
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine visiting extended family or your partner\'s family for the first time at their isolated home. Everyone knows each other\'s history and relationships, but no one explains anything to you. You try to figure out who people are—you guess wrong about who\'s married to whom, who\'s employed versus family, what happened to create the current tensions. Every guess is met with contempt or mockery. They deliberately keep you confused because your confusion maintains their power—you\'re off-balance, dependent on them for basic information, unable to navigate the social dynamics. Then weather traps you there overnight. You need help (a ride, directions, even basic supplies) but everyone refuses with cold amusement, watching you struggle. The family isn\'t just reserved—they take pleasure in your distress, enjoy your social confusion, find your predicament funny. You realize too late that you\'re trapped in a dysfunctional system where everyone participates in cruelty, where asking for basic help is met with hostility, where your outsider status is weapon used against you. The group dynamics are so toxic that even decent people (if any exist) are cowed into participating in or tolerating the collective inhospitality.',
    
    parallels: [
      '🔹 **Deliberate Social Confusion**: Workplaces, social groups, or families where insiders deliberately don\'t explain dynamics, keep you guessing about relationships/hierarchies, maintain power through your confusion. "You should know" or "figure it out yourself" as power play.',
      '🔹 **Withholding Help**: Situations where people could easily help but choose not to, enjoying watching you struggle. Colleagues who won\'t explain processes, family members who won\'t share information, "friends" who watch you fail without intervening.',
      '🔹 **Hostile Group Dynamics**: Entering groups (new jobs, new schools, partner\'s friend groups) where everyone is hostile and you can\'t figure out why. The group has history you\'re not part of, and they use that shared history to exclude you.',
      '🔹 **Trapped by Circumstances**: Weather, money, social obligation, or logistics trap you in situations you want to leave. Physical inability to escape mirrors psychological feeling of being stuck in toxic environments you can\'t immediately exit.'
    ],
    
    discussionPrompt: 'When you\'ve been the outsider in a group that deliberately keeps you confused and refuses to help—how did it feel? How did you recognize that the confusion was strategic rather than accidental? What did you learn about power dynamics and the difference between reserved people versus deliberately hostile ones?'
  },
  
  // ===================================================================
  // THEMATIC THREADS (Tracking patterns across the novel)
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🌨️',
      name: 'Physical Entrapment Mirrors Emotional',
      explanation: 'The snowstorm trapping Lockwood at the Heights mirrors how all the characters are trapped—Cathy in widowhood with her father-in-law, Hareton in degradation, everyone caught in consequences of past they can\'t escape. Gothic imprisonment (literal) represents psychological imprisonment (figurative).'
    },
    {
      emoji: '❓',
      name: 'Mystery Through Withheld Information',
      explanation: 'Chapter 2 deepens mysteries: Who is Hareton? What happened to Heathcliff\'s son? Why is Cathy trapped here? The household refuses to explain, forcing readers (with Lockwood) to piece together understanding from fragments. Mystery drives the narrative forward.'
    },
    {
      emoji: '🧊',
      name: 'Collective Cruelty',
      explanation: 'Wuthering Heights operates as system of cruelty—everyone hostile, no one compassionate (except minimally Zillah). This isn\'t individuals being mean; it\'s collective dysfunction where everyone participates in inhospitality. The household itself becomes character defined by coldness.'
    },
    {
      emoji: '🎭',
      name: 'Lockwood\'s Unreliability Continues',
      explanation: 'He misreads every relationship, attributes cruelty to rough manners, doesn\'t learn from yesterday\'s hostility. His persistent cluelessness reminds us to question narrator\'s interpretations. What else is he missing or misunderstanding?'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS (Tools that LEAD YOU TO THE ANSWER)
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Strategic Confusion',
      question: 'The household deliberately refuses to clarify who people are or how they relate, keeping Lockwood confused and off-balance. Why is withholding social information a power play? How does keeping someone confused about relationships or dynamics give you control over them? When have you experienced this in real life?'
    },
    {
      title: 'Degraded Heir Mystery',
      question: 'Hareton Earnshaw has his name carved over the door (dated 1500, marking ancestral claim) but is treated as an illiterate servant. What does this suggest about his real status? How could someone with apparent claim to Wuthering Heights end up degraded to servant status? What must have happened to him?'
    },
    {
      title: 'Lockwood Learns Nothing',
      question: 'Despite yesterday\'s hostile reception, Lockwood returns expecting better treatment. Why doesn\'t he learn from experience? What does his persistent misreading reveal about his character and assumptions? How does Brontë use his continued cluelessness to create dramatic irony?'
    },
    {
      title: 'The Widow\'s Misery',
      question: 'Cathy is young, beautiful, recently widowed, living with her hostile father-in-law in obvious misery. Why would a young widow stay at Wuthering Heights with Heathcliff rather than leave? What circumstances could trap her there? What does this suggest about her options or her husband\'s death?'
    },
    {
      title: 'Collective Inhospitality',
      question: 'Everyone at Wuthering Heights is hostile—not just Heathcliff but the young widow, the young man, Joseph, everyone except minimally Zillah. Why would an entire household operate with collective cruelty? How do toxic environments make even decent people participate in or tolerate dysfunction?'
    },
    {
      title: 'Gothic Imprisonment',
      question: 'The snowstorm literally traps Lockwood at the Heights. How does this physical imprisonment represent or foreshadow psychological/emotional imprisonment? Who else in the household seems trapped, and by what? How does Gothic literature use physical confinement to explore larger themes of entrapment?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION (AI COLLABORATIVE TOOLS)
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'withholding-information-power',
      title: 'Withholding Information as Power: Why Confusion is Weapon',
      question: 'Why does the Wuthering Heights household deliberately refuse to explain who people are and how they relate?',
      aiResponse: `**Information Control as Dominance**

When Lockwood tries to understand the household, every question is met with evasion, scorn, or deliberate misdirection. This isn't rudeness—it's strategic power play through information control.

**The Pattern of Strategic Confusion**

Lockwood guesses Cathy is Heathcliff's wife → "He's not my husband" (contemptuous correction)
Lockwood guesses she's married to the young man → Even greater scorn, revelation she's widow to Heathcliff's son
Lockwood tries to place Hareton socially → No one explains; he remains mysterious
Lockwood asks about relationships → Questions ignored or mocked

Each attempt to understand is rebuffed. The household operates with shared knowledge they refuse to share with outsiders. This keeps Lockwood (and readers) off-balance, confused, dependent on them for basic social navigation.

**Why This Works as Power Play**

**1. Confusion Creates Vulnerability**

When you don't understand who people are, how they relate, what the social dynamics are, you can't navigate effectively. You're dependent on those who do know for guidance—which they withhold. This creates power imbalance: they know, you don't, they won't tell you.

Modern example: Starting new job where everyone knows the office dynamics, social hierarchies, which managers hate each other, who to avoid—but no one explains it to you. You stumble through social minefields blind while everyone watches you make mistakes they could have prevented by simply explaining.

**2. Your Ignorance Becomes Entertainment**

The household isn't just withholding information—they're enjoying Lockwood's confusion. His wrong guesses amuse them. His social awkwardness entertains them. His inability to understand provides them satisfaction. Your confusion becomes their entertainment, your vulnerability their power.

Modern example: Mean girl dynamics where insiders deliberately don't explain social rules so the newcomer violates them, then gets mocked for not knowing what they deliberately weren't told. The confusion is the point.

**3. It Maintains Insider/Outsider Boundaries**

By refusing to explain, the household maintains clear boundary: they're insiders who understand, Lockwood's outsider who doesn't. This protects group cohesion (however dysfunctional) by keeping outsiders permanently outside. Even when you're physically present, informational withholding keeps you excluded.

**4. It Signals Contempt**

Refusing to answer basic questions signals: "You're not worth explaining to. You don't deserve clarity. Your confusion is your problem." It's active disrespect through passive refusal. Not attacking directly, but withholding what you need—which can be more demoralizing than overt hostility.

**The Real-World Applications**

This pattern appears everywhere:

**Workplace Hazing**: Not explaining unwritten rules, letting new people fail, watching them violate norms you could have explained. The confusion is weaponized to establish hierarchy.

**Social Exclusion**: Groups with internal jokes, references, history that they deliberately don't explain to newcomers. Keeping you confused maintains boundaries.

**Family Dynamics**: Extended families where everyone knows the drama/history but won't explain it to new members (in-laws, step-family). Your ignorance of "what everyone knows" marks you as outsider.

**Academic/Professional Gatekeeping**: Fields where insiders use jargon, unexplained assumptions, or disciplinary knowledge they refuse to translate for newcomers. Confusion maintains elite status.

**The Defense**

Recognizing when confusion is strategic:
- Ask direct questions; if people evade, deflect, or mock rather than answer, it's probably strategic
- Notice if multiple people refuse to clarify—that's coordinated, not coincidental
- Watch whether your confusion entertains them (that's the tell)
- Understand that "figure it out yourself" can be legitimate or weaponized—context matters

When to persist vs. when to leave:
- If people eventually answer after testing you, stay
- If they permanently refuse and enjoy your confusion, leave if possible
- If you're trapped (job, family, circumstances), find alternative information sources

**The Teaching Moment**

Understanding information withholding as power helps in:
- Recognizing when group dynamics are toxic vs. just reserved
- Seeing difference between "we're private" and "we enjoy your confusion"
- Learning to ask direct questions and evaluate whether evasion is strategic
- Understanding that some environments are hostile by design, not accident

Lockwood thinks they're just rough Yorkshire folk. We see they're deliberately cruel. The gap between his interpretation and reality teaches us to recognize when confusion is weaponized against us.`
    },
    {
      id: 'hareton-degradation',
      title: 'The Mystery of Hareton: Degraded Heir',
      question: 'Who is Hareton Earnshaw, and what does his presence at Wuthering Heights suggest about the household dynamics?',
      aiResponse: `**The Young Man Who Doesn't Fit**

Hareton Earnshaw is one of Chapter 2's central mysteries. He doesn't fit any clear social category, which disturbs class-conscious Lockwood and should intrigue readers.

**What We Observe**

Physical appearance: Young (early 20s), physically capable, rough appearance, laborer's hands, struggles to read his own name

Social position: Treated as servant, does menial work, spoken to with contempt (especially by young Cathy), shows little education or refinement

Yet contradictions: His name is carved over the door dated 1500 (marking Earnshaw ancestral claim to Wuthering Heights), he shows flashes of pride when mocked, he seems to have some undefined claim to the place

**The Puzzle**

If his name marks ancestral ownership of Wuthering Heights, why is he functionally a servant? If he's legitimate heir, how was he reduced to illiteracy and menial labor? Who degraded him and why?

**What This Suggests (Foreshadowing)**

Someone deliberately reduced Hareton from heir to servant. Someone took a child who should have inherited Wuthering Heights and systematically degraded him—denied education, reduced to labor, treated with contempt until he internalized that position.

This is revenge operating through a generation. Hareton didn't wrong whoever wronged him—he was a child. Yet he's been punished anyway by being denied his birthright and reduced to servant status in his own ancestral home.

**The Heathcliff Connection**

Heathcliff now controls Wuthering Heights (he's landlord). The Earnshaw name suggests Hareton should own it. The obvious inference: Heathcliff has somehow taken control and deliberately kept Hareton degraded.

But why? Why not just dispossess him completely? Why keep him there, degraded, in view of what he lost? That's psychologically sophisticated revenge—not just taking what's his but making him live amid reminder of dispossession while lacking knowledge or capacity to reclaim it.

**The Parallel to Heathcliff's Own Story**

Readers will learn (through Nelly's narrative) that young Heathcliff was degraded similarly—brought to the Heights as favored child, then reduced to servant after Mr. Earnshaw died. Hareton's degradation mirrors Heathcliff's own humiliation.

This suggests Heathcliff's revenge operates through repetition: what was done to him, he's doing to the next generation. Hareton is punished for what Hareton's father (Hindley Earnshaw) did to Heathcliff. Multi-generational revenge where the sins of fathers are visited upon children.

**The Modern Parallel: Generational Trauma**

Hareton represents how trauma and revenge cycle through generations. He didn't wrong Heathcliff—his father did. Yet he's been systematically degraded in revenge for his father's actions. He's innocent victim of his father's cruelty to Heathcliff, now experiencing similar degradation.

This appears constantly in family systems: children punished for parents' behavior, grandchildren suffering consequences of grandparents' actions, trauma cycling through generations where each generation damages the next in response to their own damage.

Breaking these cycles requires someone refusing to continue the pattern—choosing not to visit upon children what was done to you. Hareton's story asks: Can he escape degradation? Can the cycle break?

**The Teaching Moment**

Hareton's mysterious degradation teaches:
- Revenge often targets innocents through generations
- Social degradation is systematic (deny education, enforce labor, create shame)
- Cycles of abuse/revenge perpetuate unless someone breaks them
- What's done to children shapes who they become as adults
- Understanding someone's degradation requires understanding who benefited from it and why

That Hareton shows pride despite degradation suggests resilience—something in him resists the identity Heathcliff tried to impose. That resistance will be important to the novel's resolution.`
    },
    {
      id: 'lockwood-persistent-cluelessness',
      title: 'Why Lockwood Learns Nothing: The Function of Obtuse Narration',
      question: 'Despite yesterday\'s hostile reception and dangerous dogs, Lockwood returns to Wuthering Heights expecting better. Why doesn\'t he learn from experience?',
      aiResponse: `**The Narrator Who Refuses to Understand**

Lockwood's persistent cluelessness isn't just character flaw—it's narrative technique. Brontë uses his refusal to learn from experience to create dramatic irony and force readers to interpret more carefully than the narrator does.

**The Pattern of Not Learning**

Day 1: Hostile reception, attacked by dogs, obvious unwelcome
Day 2: Returns anyway, expects better treatment
→ Gets hostile reception, attacked by dogs again, trapped by snow

He even repeats the same complaint ("possessed swine") both days. He's learned nothing. Same situation, same mistakes, same surprise that it goes badly.

**Why He Doesn't Learn**

**1. Class Assumptions Override Experience**

Lockwood is southern English gentleman. His class position teaches him that certain behaviors are universal: people show hospitality to guests, explain social dynamics, offer help when needed. These aren't preferences—they're class-based expectations he takes as natural law.

When Wuthering Heights violates these expectations, he doesn't think "these people are hostile"—he thinks "rough Yorkshire manners" or "amusing reserve." He cannot conceive that his class assumptions might not apply, so he forces his interpretation onto contradictory evidence.

**2. Romanticization Trumps Reality**

Lockwood romanticizes the moors, the isolation, Heathcliff's "misanthropy." He sees Gothic novel where there's real dysfunction, philosophical solitude where there's genuine danger. His romantic interpretation is more satisfying to him than recognizing he's intruding into genuinely hostile environment.

This is common: people romanticize red flags because romantic interpretation feels better than acknowledging danger. "They're just rough" or "they're testing me" or "they're actually lonely" instead of "they're actively hostile and I should leave."

**3. Ego Investment in Being Right**

Lockwood has decided Heathcliff is kindred spirit, the Heights is fascinating, he belongs in this world. Admitting he was wrong—that he misread everything, doesn't belong, should stay away—requires ego death he's not willing to accept.

So he persists despite evidence, reinterpreting failure as challenge rather than learning from it. This is sunk cost fallacy: he's invested in his interpretation, so he doubles down rather than admits error.

**4. Inability to Recognize Genuine Malice**

Lockwood's genteel southern world apparently didn't prepare him for genuine, deliberate cruelty. He can recognize rudeness but not active malice. When household refuses to help him, watches him struggle, siccs dogs on him—he thinks it's misunderstanding or accident, not deliberate.

This is privilege: having no experience with real hostility makes you unable to recognize it. You keep assuming good intentions because in your experience, people mostly have them. Lockwood's obliviousness reflects privilege of never encountering genuine ill-will.

**The Narrative Function**

Brontë uses Lockwood's obtuseness to:

**1. Create Dramatic Irony**: We see what he doesn't. His misinterpretation lets us feel superior, recognize patterns he misses, understand the household better than the narrator does. This engages us actively—we must interpret for ourselves.

**2. Force Critical Reading**: We can't trust Lockwood's interpretations, so we must evaluate his observations independently. When he says "rough manners," we translate "active hostility." We become co-narrators, interpreting the interpreter.

**3. Explore Class and Privilege**: His inability to understand reflects class limitations. Southern gentility hasn't prepared him for Yorkshire working-class culture or genuinely hostile environments. His cluelessness critiques class assumptions about universal behavior.

**4. Build Mystery**: If Lockwood understood too quickly, the mystery would end. His obtuseness lets Brontë withhold information through legitimate narrative means—he doesn't understand, so neither do we (yet).

**Modern Parallel**

We all have "Lockwood moments"—persisting in situations despite evidence we should leave:
- Relationships where red flags pile up but we stay, reinterpreting problems as challenges
- Jobs that show toxicity from day one but we persist, thinking we can change the culture
- Social groups that exclude us but we keep trying, romanticizing their coldness as sophistication
- Situations where we're clearly unwelcome but ego won't let us accept rejection

Lockwood's pattern teaches recognition: when someone shows you who they are (hostile, unwelcoming, dangerous), believe them the first time. Don't romanticize, rationalize, or persist hoping for different outcome.

**The Teaching Moment**

Understanding Lockwood's persistent cluelessness teaches:
- Recognize when romantic interpretation overrides reality
- See how class/privilege can create blind spots to hostility
- Understand that not learning from experience is character flaw worth examining
- Notice when ego investment in being right prevents adaptation
- Learn that persistence despite evidence isn't strength but obtuseness

Lockwood will eventually understand (through Nelly's narrative) what he's been missing. But his slow learning teaches us to be less slow—to recognize hostile environments and leave before getting trapped overnight in snowstorms, metaphorical or literal.`
    },
    {
      id: 'widow-trapped',
      title: 'The Young Widow\'s Mysterious Presence',
      question: 'Why does young, beautiful Cathy live at Wuthering Heights with her hostile father-in-law rather than leaving after her husband\'s death?',
      aiResponse: `**The Widow Who Cannot Leave**

Cathy Heathcliff is young (18ish), beautiful, recently widowed, living in obvious misery with hostile father-in-law who shows her no affection. Why hasn't she left? What traps her there?

**Victorian Reality: Women's Limited Options**

In Victorian England, women's options after widowhood depended on:
- **Money**: Did she inherit from her husband? Does she have independent income?
- **Property**: Does she own anything in her own name, or did everything belong to husband/father-in-law?
- **Family**: Can she return to her birth family? Are they alive? Would they take her back?
- **Reputation**: Is she considered respectable? Any scandal limits options drastically
- **Age**: Young widows could remarry, but needed means to support themselves meanwhile

For Cathy to be trapped at Wuthering Heights suggests:
- She didn't inherit (Heathcliff controls property)
- She has no independent means
- Her birth family isn't available or won't take her
- She cannot simply leave without resources or destination

**The Suggestive Questions**

What happened to her husband (Heathcliff's son)?
→ He died, but when, how, why? Was marriage long enough for her to inherit anything?

Why does Heathcliff keep her there?
→ He clearly doesn't love her. She's functionally prisoner. What benefit does her presence serve him?

Why doesn't she have family to claim her?
→ Her parents are dead or estranged? What's her birth family situation?

What was the marriage like?
→ Happy? Forced? Brief? The novel will eventually reveal she was forced to marry Heathcliff's dying son as part of revenge plot—making her widow at 18 to a man she didn't love, trapped with his hostile father.

**The Emotional Reality**

Beyond practical constraints, Cathy shows emotional deadness—"spiritless" eyes, joyless manner, cold to everyone. She's not just trapped physically but psychologically. Something broke her spirit. Was it:
- Forced marriage to someone she didn't love?
- Quick widowhood after brief, unhappy marriage?
- Heathcliff's treatment after son's death?
- Being cut off from her birth family?
- Some combination creating compounded trauma?

Her coldness reads as depression, rage turned inward, giving up. She's stopped trying to be pleasant or make the best of it. She just exists in this hostile household, performing minimal functions, finding no joy.

**The Power Dynamic**

Heathcliff controls Wuthering Heights and apparently Thrushcross Grange (both properties). Cathy has no property, no income, no independent means. She's completely dependent on hostile father-in-law who owes her nothing legally or emotionally.

This creates absolute power imbalance: he can keep her or turn her out, treat her well or badly, and she has no recourse. Her widowhood gave her legal independence theoretically, but practical dependence totally. She's as trapped as any wife, perhaps more so because father-in-law has no social obligation to support her.

**Modern Parallel: Economic Entrapment**

The situation mirrors any time someone is trapped by economic dependence:
- Leaving abusive relationship but having no income, nowhere to go
- Wanting to leave toxic job but needing health insurance or income
- Adult children trapped in dysfunctional family homes because they can't afford independence
- Anyone dependent on person who has power over them with no alternative

Cathy's situation shows Victorian reality: women without independent means were trapped by economics as effectively as by locked doors. No money = no options = prisoner regardless of legal freedom.

**The Foreshadowing**

That Cathy is trapped at the Heights suggests:
- Heathcliff's revenge involved forcing her marriage to dying son
- Her widowhood leaves her dependent on Heathcliff's "generosity"
- Her birth family is dead/estranged/unable to help
- She has no agency or options
- The Heights is prison, Heathcliff is jailer, her widowhood is just different form of captivity

This sets up the novel's exploration of how women are trapped by legal, economic, and social systems that leave them dependent on men who may be hostile, indifferent, or actively cruel.

**The Teaching Moment**

Understanding Cathy's entrapment teaches:
- Economic dependence creates vulnerability regardless of legal status
- Freedom requires means, not just lack of chains
- Women's historical lack of property rights/independent income made them vulnerable to abuse
- Modern parallels exist wherever someone is trapped by economic dependence
- Why leaving abusive situations isn't simple "choice" when you have no resources or destination

Cathy's dead eyes teach us: you can be legally free but practically imprisoned. That's Victorian women's reality—and still relevant wherever economic dependence creates entrapment. Her story will reveal exactly how she came to be trapped, but Chapter 2 shows us she's as imprisoned as if Heathcliff had locked her in.`
    },
    {
      id: 'collective-hostility',
      title: 'The Hostile Household as System',
      question: 'Why is everyone at Wuthering Heights hostile—not just Heathcliff but the young widow, Hareton, Joseph, everyone?',
      aiResponse: `**Toxic Systems, Not Just Toxic Individuals**

The striking thing about Wuthering Heights isn't just that Heathcliff is hostile—it's that everyone is. The entire household operates with collective cruelty. This isn't individual bad behavior; it's systemic dysfunction.

**The Pattern of Universal Hostility**

Heathcliff: Deliberately unwelcoming, indifferent to guest's suffering
Young Cathy: Cold, contemptuous, takes pleasure in Lockwood's confusion
Hareton: Sullen, rough, does minimum required
Joseph: Actively cruel, siccs dogs on Lockwood
Zillah: Slightly merciful (gives room) but still warns Lockwood to stay quiet
No one: Shows hospitality, explains relationships, offers help

This is coordinated coldness. One person being hostile could be personality. Everyone being hostile is system.

**How Toxic Systems Work**

Toxic environments aren't usually one villain making everyone miserable. They're systems where multiple people participate in dysfunction, either actively (being cruel themselves) or passively (tolerating others' cruelty without intervention).

**1. The Architect Sets the Tone**

Heathcliff created/maintains this environment. His complete lack of compassion, his indifference to others' suffering, his tolerance of cruelty establishes what's acceptable. When leader shows no mercy, the system reflects that.

**2. Participation Becomes Survival**

In toxic environments, participation in dysfunction often becomes survival strategy. Young Cathy is cold because warmth would make her more vulnerable. Hareton is sullen because showing feelings invites attack. Joseph is cruel because cruelty is rewarded (or at least not punished).

People adapt to toxic systems by adopting toxic behaviors—not because they're inherently cruel but because that's what the environment rewards or requires for survival.

**3. Bystanders Become Complicit**

Zillah shows slight mercy (gives Lockwood room) but warns him to be quiet so Heathcliff won't know. She's not cruel herself but enables cruelty by not challenging it. Her small kindness doesn't change the system; it just slightly mitigates it while keeping her safe.

Bystanders who see dysfunction but don't challenge it become complicit—not as guilty as active perpetrators but not innocent either. Their silence allows system to continue.

**4. Victims Can Become Perpetrators**

Young Cathy is victim (trapped, widowed, under Heathcliff's control) but she's also perpetrator (cruel to Hareton, contemptuous to Lockwood). Hareton is victim (degraded, denied education) but also rough and hostile to others.

Cycles of abuse work this way: victims often learn to perpetrate similar abuse on those with less power. Being victimized doesn't make you automatically kind to others; sometimes it makes you cruel because cruelty is what you learned.

**5. The System Resists Change**

When Lockwood expects basic hospitality, the entire household rebuffs him. It's not one person being difficult—everyone maintains the hostile environment. Systems resist change because changing requires everyone adapting differently, which is harder than maintaining status quo.

**Modern Parallels**

Toxic systems appear everywhere:

**Toxic Workplaces**: Not just one bad boss but entire culture of overwork, backstabbing, no work-life balance. Everyone participates (overworking themselves, criticizing those who don't, accepting dysfunction as normal) because that's what advancement requires or survival demands.

**Dysfunctional Families**: Not just one abusive parent but system where everyone has roles (perpetrator, victim, enabler, scapegoat). Everyone participates in maintaining dysfunction, often because they learned no other model.

**Toxic Social Groups**: Mean girl dynamics where entire group participates in exclusion, bullying, or cruelty. One person might lead but others follow, and bystanders who could intervene don't because challenging the system risks becoming its target.

**Institutional Dysfunction**: Schools, churches, organizations where abuse or negligence is systemic. Not one bad actor but system that tolerates/enables bad actors, where whistleblowers are punished, where everyone knows but no one acts.

**Breaking Toxic Systems**

Understanding systemic toxicity helps recognize:
- Individual bad behavior vs. collective dysfunction
- Why "just leave" isn't always simple (systems trap people through multiple mechanisms)
- How good people can participate in bad systems (survival, adaptation, fear)
- Why single interventions rarely fix systemic problems (system adapts to maintain itself)
- That changing toxic systems requires addressing the architecture, not just individual behaviors

**The Wuthering Heights System**

The Heights operates as Heathcliff's revenge machine:
- He sets the tone (cruelty is acceptable)
- Others adapt (become cruel, sullen, or enabling)
- Victims (Cathy, Hareton) are trapped and become perpetrators to others with less power
- The system maintains itself through fear, economic dependence, social isolation
- Even someone compassionate (Zillah) can't change it, only slightly mitigate it

The household is collective expression of Heathcliff's revenge. Everyone trapped there either participates in cruelty or is victimized by it—and often both simultaneously.

**The Teaching Moment**

Recognizing systemic toxicity teaches:
- One toxic person creates problems; toxic systems create cultures
- Escaping requires understanding the architecture, not just avoiding individuals
- Good people can participate in bad systems through adaptation or survival
- Changing systems is harder than changing individual behaviors
- Sometimes the only way to escape toxic system is to leave it entirely

Wuthering Heights in Chapter 2 is toxic system in miniature: everyone hostile, everyone trapped, everyone participating in collective dysfunction that serves Heathcliff's revenge. Understanding it as system (not just collection of mean individuals) reveals how toxicity operates in any context—workplace, family, institution, social group.

The question the novel will explore: Can toxic systems be reformed from within, or must they be abandoned entirely? Can people damaged by toxic systems heal and break the cycle, or do they perpetuate dysfunction to the next generation?

That's what Wuthering Heights as system represents—and what all toxic systems pose as challenge.`
    },
    {
      id: 'gothic-imprisonment-symbolism',
      title: 'Physical Entrapment as Psychological Metaphor',
      question: 'The snowstorm literally traps Lockwood at Wuthering Heights. What does this Gothic imprisonment represent symbolically?',
      aiResponse: `**Literal Prison, Symbolic Cage**

Gothic literature loves imprisonment: heroes trapped in castles, heroines locked in abbeys, characters unable to escape isolated locations. The physical prison always represents something more—and in Wuthering Heights, Lockwood's snowstorm entrapment mirrors everyone's deeper imprisonment.

**The Immediate Situation**

Lockwood visits Wuthering Heights. Snow begins falling. He wants to leave but:
- No one will guide him (despite knowing the moors)
- No one will lend him a servant
- No one will give him a lantern
- When he tries to take one, dogs attack him
- The household watches with amusement
- Finally Zillah shows mercy: he can stay overnight

He's physically trapped—can't leave safely, can't get help, can't navigate home alone in storm. The house becomes prison, the storm the bars, the hostile household the guards.

**The Symbolic Layers**

But everyone at Wuthering Heights is trapped:

**Cathy the Widow:**
Physically: Can't leave without means or destination
Economically: Dependent on Heathcliff's provision
Legally: No property rights, no independent income
Socially: Young widow with no family to return to
Emotionally: Deadened spirit, no joy, just existence

The snowstorm trapping Lockwood mirrors how Cathy is trapped by circumstances she can't escape—economics, law, social position, grief. She's as imprisoned as Lockwood but permanently.

**Hareton the Degraded:**
Physically: Lives at ancestral home but as servant
Educationally: Kept illiterate, denied knowledge
Socially: Reduced to lowest status in his own inheritance
Psychologically: Internalized his degradation

He's trapped by what was done to him as child—systematic degradation he lacks tools to escape. The Heights is his prison, his degradation the bars, his lack of education keeps him confined. Lockwood's temporary entrapment mirrors Hareton's permanent one.

**Heathcliff the Revenger:**
Physically: Controls the Heights, could live anywhere
But trapped by: Obsession with revenge, inability to let go of past, psychological fixation on dead Catherine

The most powerful person at the Heights is still imprisoned—by his own choices, his refusal to heal, his commitment to revenge. He's created his own prison and everyone else's. He's jailer and prisoner simultaneously.

**The Gothic Convention**

Gothic imprisonment works on multiple levels:

**Literal:** Actual physical confinement, locked doors, inescapable locations

**Social:** Class, gender, economic constraints that trap people as effectively as walls

**Psychological:** Trauma, obsession, revenge that mentally imprison people

**Temporal:** Past imprisoning present—unable to move forward because past holds you

Gothic novels use physical imprisonment to make these invisible imprisonments visible. The locked castle door represents all the ways people are trapped by circumstances, systems, histories, and their own minds.

**The Moors as Prison**

The isolated Yorkshire moors function as natural prison: miles from civilization, dangerous to cross, easy to get lost, deadly in bad weather. Physical geography creates isolation as effective as locked doors.

This represents how social/economic geography can trap people: rural poverty with no transportation, urban ghettos with no mobility, communities with no opportunities but no way to leave. Place becomes prison when you lack means to escape it.

**The Modern Translation**

We still experience layered imprisonment:

**Economic Entrapment:** Can't leave job/relationship/situation because you need income, insurance, housing. Physically could leave, but practically trapped by need for resources.

**Social Entrapment:** Trapped by reputation, family expectations, community pressure, social obligations. Not physically constrained but socially unable to make choices that would free you.

**Psychological Entrapment:** Trauma, depression, anxiety, addiction that trap you more effectively than walls. Your own mind becomes prison.

**Temporal Entrapment:** Past mistakes, traumas, choices that limit present options. Can't escape consequences of history—yours or others'.

**The Teaching Moment**

Understanding Gothic imprisonment as multilayered teaches:
- Physical prisons represent multiple constraints working together
- Most real "imprisonment" is combination of circumstances, not single cause
- Escaping requires addressing multiple constraints simultaneously
- Some people are imprisoned by others; some by themselves; most by both
- Power to leave doesn't equal freedom if you have nowhere to go or no means to survive elsewhere

**The Novel's Exploration**

Wuthering Heights will explore:
- How people become trapped by circumstances they didn't create
- Whether revenge traps revenger as much as victim
- If people damaged by imprisonment can ever be free
- Whether second generation (young Cathy, Hareton) can escape imprisonments created by first generation's traumas
- What freedom even means when everyone is trapped by history, economics, psychology, or each other

The snowstorm trapping Lockwood for one night represents how everyone at the Heights is trapped permanently by forces they cannot easily escape. His temporary imprisonment is their permanent condition—and his eventually learning their stories (through Nelly) represents attempt to understand entrapment from outside before inevitably being drawn into it himself.

Gothic imprisonment isn't just plot device—it's central metaphor for all the ways people are trapped by circumstances, systems, histories, and themselves. The novel makes those invisible prisons visible by putting everyone in literal isolated house on literal isolated moors during literal storm.

That's why Gothic literature endures: it makes psychological and social realities visible through physical metaphors we can see and feel. The prison door locked from outside represents all the ways life traps us—and the question of whether escape is even possible.`
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Write from Inside vs. Outside: Perspective Exercise',
      description: 'Write the same scene twice: (1) From insider perspective where everyone knows the relationships, history, and dynamics but refuses to explain to outsider, (2) From outsider perspective where you observe but can\'t understand what you\'re seeing. Scene suggestions: family gathering, workplace meeting, friend group interaction. After writing both, analyze: How does withholding information from character (and reader) create mystery? How does insider knowledge vs. outsider confusion affect what details you include? What\'s revealed through what\'s deliberately obscured? This teaches narrative perspective, information control as technique, and how mystery operates.',
      purpose: 'Students learn: (1) How perspective shapes narrative, (2) That withholding information creates engagement, (3) How dramatic irony works, (4) Writing techniques for mystery and suspense, (5) That all narration is perspective—there\'s no neutral "truth," only views from positions.'
    },
    
    activity: {
      title: 'Mapping the Hostile System: Who Does What to Whom',
      description: 'Create visual map of Wuthering Heights household showing: (1) Power hierarchy (who has power over whom), (2) Who is cruel to whom, (3) Who helps whom (if anyone), (4) Who is trapped and by what, (5) How each person participates in the toxic system (actively cruel, passively enabling, victimized but perpetrating on others, trying to mitigate but unable to change system). Use arrows, color coding, notes explaining each relationship. Discussion: Is this system created by one person or maintained by everyone? Could any individual change it? What would systemic change require? Then connect to modern toxic systems (workplaces, schools, families)—same mapping exercise for situations students know.',
      materials: 'Large poster paper, colored markers, string/yarn for connection lines, printed chapter excerpts for evidence, space for group work'
    },
    
    crossCurricular: {
      title: 'Victorian Women\'s Legal Status: History, Economics, Literature',
      description: 'Collaborate with History and Economics teachers to explore why Cathy the widow is trapped at Wuthering Heights. History: Victorian women\'s property rights (or lack thereof), coverture laws, widows\' legal status, inheritance rules. Economics: women\'s limited economic options, why independent income was rare, what widowhood meant financially. Literature: how Brontë uses Cathy\'s situation to critique legal/economic systems that trapped women. Students research their aspect, then synthesize: How do legal and economic realities explain literary situation? How does literature make abstract legal/economic concepts human and urgent? What changed between Victorian era and now (if anything)?',
      subjects: ['History', 'Economics', 'Women\'s Studies', 'Law', 'Literature', 'Sociology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Analyzing Power Through Information Control',
    prompt: 'Write analytical essay examining how the Wuthering Heights household uses information control as power. Using close textual evidence, identify: (1) Specific moments where the household refuses to clarify relationships or explain dynamics, (2) How Lockwood\'s confusion benefits them/disempowers him, (3) Why keeping visitors confused is strategic rather than accidental, (4) How this pattern reflects larger themes about power, knowledge, and social dynamics. Then extend: Where else (in literature or life) is information control used as power? How do you recognize when confusion is weaponized? What defenses exist against strategic information withholding? Finally, connect to dramatic irony: How does Brontë use information control on readers (we also don\'t know who these people are yet), and how does that affect our reading experience?',
    
    guidingQuestions: [
      'Find 5+ specific moments where household refuses to explain or deliberately confuses Lockwood. Quote and analyze.',
      'What do they gain by keeping him confused? How does his confusion serve their interests?',
      'Compare Lockwood\'s questions (attempts to understand) to their responses (evasions, corrections, mockery). What pattern emerges?',
      'Why does the household enjoy his confusion? What does their amusement at his ignorance reveal about power dynamics?',
      'How is this different from simple reserve or privacy? What makes it strategic/weaponized rather than just personal preference?',
      'Where else in literature or life is information control used as power? (Consider: workplaces, families, institutions, social groups)',
      'How does Brontë\'s withholding of information from readers mirror the household\'s withholding from Lockwood? Are we positioned like him (outside, confused) or like them (knowing but watching him fumble)?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down each interaction where Lockwood tries to understand and is rebuffed. Chart: His question → Their response → His confusion → Their reaction. Identify pattern of strategic evasion.',
      evaluate: 'Judge whether information withholding is justified (privacy, self-protection) or weaponized (power play, deliberate cruelty). Assess how you determine difference between legitimate reserve and strategic confusion.',
      synthesize: 'Build theory of information control as power: How does withholding knowledge create power imbalance? Connect literary example to real-world contexts (workplace dynamics, social exclusion, family systems, institutional power). Develop framework for recognizing and responding to weaponized confusion.'
    },
    
    expectedDepth: 'Strong essays will identify specific textual evidence and analyze pattern. Excellent work will connect Wuthering Heights household dynamics to broader theory of information as power—showing how this literary example illuminates real social dynamics. Best essays will also examine Brontë\'s narrative technique: how she uses dramatic irony (readers eventually know what Lockwood doesn\'t) to teach us about perspective, knowledge, and power.',
    
    classroomApplication: 'Can be individual analytical essay, group presentation on different aspects (information withholding in text, in real life, in narrative technique), or class discussion building collaborative theory. Particularly effective for teaching: power dynamics analysis, close reading for pattern, connecting literature to social reality, understanding narrator limitations vs. authorial knowledge.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(2),
  
  // ===================================================================
  // NEXT TIME TEASER
  // ===================================================================
  nextTimeTeaser: {
    emoji: '👻',
    title: 'Next Time: The Ghost at the Window',
    preview: 'Trapped overnight at Wuthering Heights, Lockwood discovers a small chamber filled with books, including a diary written by a girl named Catherine Earnshaw. As he reads fragments of her story—childhood with a boy named Heathcliff, cruelty from her brother Hindley, the beginnings of passionate connection—a snowstorm rages outside. Then something happens that will either be supernatural visitation or fever dream: a ghostly child at the window, crying "Let me in!" and claiming to have wandered the moors for twenty years. Lockwood\'s terror and Heathcliff\'s reaction will reveal depths of tragedy that his previous confusion only hinted at. The past, which the household refused to explain, will begin forcing itself visible.',
    hookQuestion: 'Is the ghost at the window real, or is Lockwood dreaming? Why does Catherine Earnshaw\'s name appear everywhere in the chamber—scratched into paint, written in margins, echoing through diary entries? And why, when Lockwood tells Heathcliff about the ghost, does this hostile, controlled man break down with anguished longing?'
  }
}

