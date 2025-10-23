/**
 * JANE EYRE - CHAPTER 1
 * 
 * Jane Eyre's first day of resistance at Gateshead Hall
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter1: ChapterData = {
  // ==========================================
  // BASIC INFO
  // ==========================================
  number: 1,
  title: '', // Jane Eyre chapters don't have titles
  
  readingTime: 15,
  pages: 8,
  
  // ==========================================
  // SERIES OPENING (Chapter 1 Only)
  // ==========================================
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
  
  // ==========================================
  // CHAPTER SUMMARY
  // ==========================================
  summary: {
    brief: 'Ten-year-old orphan Jane Eyre, living as an unwanted dependent with her cruel aunt Mrs. Reed at Gateshead Hall, retreats into literature to escape her isolation—until her bullying cousin John Reed violently attacks her, provoking Jane to fight back for the first time and face punishment for her resistance.',
    
    full: [
      'Chapter 1 opens on a bleak November day at Gateshead Hall, where ten-year-old Jane Eyre lives as an unwanted dependent with her wealthy aunt Mrs. Reed and her three cousins: Eliza, Georgiana, and the tyrannical John. Mrs. Reed has deliberately excluded Jane from the family gathering, delivering an elaborate speech about Jane\'s inadequate "disposition" that disguises cruelty as moral concern. Jane retreats to a window seat behind a curtain, seeking refuge in Bewick\'s History of British Birds, losing herself in haunting images of Arctic desolation that mirror her own psychological isolation.',
      
      'Her sanctuary is shattered when fourteen-year-old John Reed discovers her hiding place. John, spoiled and cruel, embodies the corruption of unchecked privilege—he bullies Jane "not two or three times in the week, nor once or twice in the day, but continually." He reminds Jane she is "a dependent" with no right to the family\'s books, food, or home, then hurls the heavy volume at her head, causing her to fall and cut herself. The physical assault is compounded by psychological cruelty: John knows the servants won\'t protect Jane, that his mother indulges him, and that as heir, everything belongs to him.',
      
      'For the first time, Jane fights back—both physically and verbally. She calls John "wicked and cruel" and compares him to "a murderer," "a slave-driver," and "the Roman emperors," referencing Nero and Caligula from Goldsmith\'s History of Rome. This moment reveals Jane\'s sophisticated literacy and her ability to contextualize her experience through historical parallels to tyranny. Her resistance, however, is immediately punished: the servants Bessie and Abbot rush in with Mrs. Reed, but instead of addressing John\'s violence, they condemn Jane for her "fury." Jane is dragged away to be locked in the terrifying red-room as punishment.',
      
      'This opening chapter masterfully establishes Jane\'s position as an outsider in every sense—economically dependent, emotionally isolated, physically abused—while simultaneously revealing her fierce spirit, vivid imagination, moral consciousness, and emerging sense of justice. Brontë introduces the novel\'s central themes: the intersection of social class and power, the psychological effects of childhood trauma, the role of literature as escape and education, and the dangerous but necessary act of resistance against injustice. The chapter establishes Jane as both vulnerable child and emerging heroine: traumatized but resilient, isolated but intellectually independent, dependent but morally autonomous.'
    ]
  },
  
  // ==========================================
  // TERMS TO KNOW
  // ==========================================
  termsToKnow: [
    {
      term: 'Dependent',
      definition: 'A person who relies on another for financial support and housing, especially a child or relative without independent means.',
      context: 'John Reed tells Jane: "you are a dependent, mama says; you have no money; your father left you none; you ought to beg." Jane\'s dependent status makes her vulnerable to every form of abuse.',
      whyItMatters: 'Understanding Jane\'s legal and social position as a "dependent" is crucial—she has no rights, no inheritance, no choices. In Victorian England, this meant complete powerlessness. The word appears repeatedly, marking Jane\'s awareness of her precarious position.'
    },
    {
      term: 'Bildungsroman',
      definition: 'A coming-of-age novel that follows a protagonist\'s psychological and moral growth from youth to adulthood.',
      context: 'Jane Eyre is a classic Bildungsroman—we watch Jane develop from age 10 to adulthood, facing moral tests and forming her identity.',
      whyItMatters: 'Knowing this genre helps readers recognize that Chapter 1\'s injustices are formative experiences that will shape adult Jane\'s values of independence, justice, and self-respect.'
    },
    {
      term: 'Gothic Literature',
      definition: 'A genre featuring mysterious settings, psychological intensity, dark atmosphere, often supernatural elements, and exploration of fear and powerlessness.',
      context: 'Chapter 1 establishes Gothic conventions: the oppressive house, hostile family, isolated heroine, threatening male figure, winter bleakness, and the looming punishment (red-room).',
      whyItMatters: 'Brontë uses Gothic genre to externalize Jane\'s internal terror and powerlessness. The Gothic elements aren\'t just atmosphere—they\'re psychological reality made visible.'
    },
    {
      term: 'Pathetic Fallacy',
      definition: 'A literary device where nature reflects or mirrors human emotions; attributing human feelings to the natural world.',
      context: 'The chapter opens with bleak November weather: "cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question." The weather mirrors Jane\'s emotional state.',
      whyItMatters: 'Throughout the novel, Brontë uses weather and landscape to reflect psychological states—the environment becomes an extension of character emotions.'
    },
    {
      term: 'First-Person Retrospective Narration',
      definition: 'A narrative technique where the adult narrator looks back on their younger self, combining the child\'s experience with adult understanding.',
      context: 'Adult Jane narrates: "I was glad of it: I never liked long walks..." We hear both child Jane\'s feelings and adult Jane\'s analysis of them.',
      whyItMatters: 'This dual perspective creates sympathy (we experience child Jane\'s suffering) and understanding (adult Jane explains context). It also raises questions about memory and interpretation.'
    },
    {
      term: 'Caviller',
      definition: 'Someone who makes petty objections; someone who finds fault unnecessarily or raises trivial questions.',
      context: 'When Jane asks "What does Bessie say I have done?" Mrs. Reed responds: "Jane, I don\'t like cavillers or questioners."',
      whyItMatters: 'Mrs. Reed labels Jane\'s legitimate question as "cavilling" to avoid accountability. This is a classic abuse tactic—calling truth-seeking "difficult behavior." It also shows Victorian prejudice against children questioning adults.'
    }
  ],
  
  // ==========================================
  // CHARACTER DEVELOPMENT
  // ==========================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'The novel\'s protagonist and narrator, a ten-year-old orphan of remarkable intelligence, imagination, and emotional depth. Despite her powerless position, Jane demonstrates sophisticated literacy (reading Bewick\'s ornithology book), vivid inner life (her response to Arctic imagery), and emerging moral consciousness. She describes herself as conscious of her "physical inferiority" to the Reed children and her social inferiority as a dependent, yet possesses a fierce sense of justice that makes her unable to accept mistreatment passively. When pushed beyond endurance by John\'s assault, she fights back both physically and verbally, comparing him to murderers, slave-drivers, and Roman emperors—showing her education and ability to contextualize her experience historically. Her retreat behind the curtain with a book establishes literature as her refuge, education, and means of understanding the world. Brontë presents Jane as both vulnerable child and emerging heroine: traumatized but resilient, isolated but intellectually independent, dependent but morally autonomous.',
      keyTrait: {
        emoji: '📚',
        text: 'Literate Resistance'
      }
    },
    {
      name: 'John Reed',
      development: 'Jane\'s fourteen-year-old first cousin, the only son and heir of Gateshead Hall. Large, unhealthy, and cruel, John embodies the corruption that comes from unchecked privilege. He "gorged himself habitually at table, which made him bilious" and should be at school but was brought home due to his mother\'s overprotectiveness about his "delicate health." John bullies Jane relentlessly—"not two or three times in the week, nor once or twice in the day, but continually." His abuse is both physical (striking her, throwing books) and psychological (calling her "rat," reminding her she\'s dependent and owns nothing). He represents the intersection of class privilege, male privilege, and family position: he knows servants won\'t protect Jane, that his mother indulges him, and that as heir, everything belongs to him. His entitlement is captured when he says Jane has "no business to take our books; you are a dependent...you ought to beg." He serves as Jane\'s first tyrant and an early example of how power corrupts.',
      keyTrait: {
        emoji: '👑',
        text: 'Entitled Tyrant'
      }
    },
    {
      name: 'Mrs. Reed',
      development: 'Jane\'s aunt by marriage, widow of Jane\'s uncle, and mother of John, Eliza, and Georgiana. She openly dislikes Jane and fulfills her late husband\'s deathbed promise to raise his orphaned niece with resentment rather than love. Mrs. Reed excludes Jane from family gatherings and dispenses elaborate, cutting speeches about Jane\'s inadequate "disposition" and "manner"—implying Jane\'s character defects justify her exclusion. She allows John to abuse Jane with impunity; the text notes she "was blind and deaf on the subject: she never saw him strike or heard him abuse me, though he did both now and then in her very presence." When servants bring Jane and John separated after their fight, Mrs. Reed automatically blames Jane without asking what provoked it. Her willful blindness to her son\'s cruelty and her psychological cruelty to Jane (disguised as moral concern) make her a complex villain—she represents how "respectable" people perpetuate injustice through passive complicity, favoritism, and the power to define truth.',
      keyTrait: {
        emoji: '🎭',
        text: 'Genteel Cruelty'
      }
    },
    {
      name: 'Bessie',
      development: 'The nurse/nursemaid at Gateshead who occupies a complicated position between servant and caregiver. She scolds Jane and sometimes shows the hardness of servants who must enforce their employers\' cruelty to keep their positions. Yet the text hints at her capacity for kindness: she "sometimes narrated" stories to the children "when she chanced to be in good humour," feeding their "eager attention with passages of love and adventure" from fairy tales and novels like Pamela. Jane fears "the chidings of Bessie" after walks, suggesting regular criticism. But Bessie will later show Jane more sympathy, indicating she may be trapped by her role rather than naturally cruel. She represents the servant class caught between their own conscience and the need to serve the powerful—and how institutional roles force ordinary people to participate in abuse.',
      keyTrait: {
        emoji: '⚖️',
        text: 'Complicit Kindness'
      }
    }
  ],
  
  // ==========================================
  // KEY QUOTES
  // ==========================================
  quotes: [
    {
      text: 'There was no possibility of taking a walk that day.',
      analysis: 'The novel\'s famous opening line immediately establishes constraint and impossibility—what Jane cannot do. This opening strategy (beginning with negation) sets the tone for Jane\'s limited options and restricted life. The simple declarative sentence contrasts with the complex psychological world we\'re about to enter. Grammatically, it\'s passive—things happen to Jane; she\'s not the agent. This opening mirrors other Victorian novels that begin with weather or setting, but Brontë\'s focus on impossibility is distinctly hers. The line also establishes the retrospective narration—adult Jane remembering this particular day when everything changed.'
    },
    {
      text: 'I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.',
      analysis: 'This sentence reveals layers of Jane\'s suffering. On the surface, she\'s glad to stay inside—but only because outdoor walks mean returning to "chidings" and the painful awareness of her "physical inferiority" to her cousins. Notice "heart saddened" and "humbled"—emotional and psychological wounds, not just physical cold. The long, winding sentence structure mirrors Jane\'s complex internal life. She\'s constantly aware of her inferior position, always comparing herself to the Reeds. This is the psychology of an abused child—hyper-vigilant, self-conscious, seeking to avoid punishment. Yet there\'s also Jane\'s intelligence in her self-analysis—she understands her own emotions with sophisticated vocabulary.'
    },
    {
      text: 'You are a dependent, mama says; you have no money; your father left you none; you ought to beg, and not to live here with gentlemen\'s children like us, and eat the same meals we do, and wear clothes at our mama\'s expense.',
      analysis: 'John Reed\'s speech crystallizes the economic and social violence of Jane\'s position. He invokes his mother\'s authority ("mama says"), uses the stigmatizing word "dependent," reminds Jane she has "no money," suggests she should "beg," and emphasizes she doesn\'t belong "with gentlemen\'s children like us." This isn\'t just childhood cruelty—it\'s Victorian class ideology spoken through a child. John has internalized the economic logic that defines Jane as undeserving charity case. The speech makes explicit what polite society normally keeps implicit. Notice also "our mama\'s expense"—possession and cost. John reduces Jane to an economic burden. This quote is essential for understanding how class operates in the novel—it\'s not just about wealth, but about who counts as human and who doesn\'t.'
    },
    {
      text: 'Wicked and cruel boy! I said. You are like a murderer—you are like a slave-driver—you are like the Roman emperors!',
      analysis: 'Jane\'s first act of verbal resistance is remarkably sophisticated. She doesn\'t just call John "wicked"—she makes three historical/political comparisons: murderer, slave-driver, Roman emperors. The text immediately clarifies: "I had read Goldsmith\'s History of Rome, and had formed my opinion of Nero, Caligula, &c." Jane\'s literacy gives her the language to name tyranny. Her education allows her to see John not as isolated bully but as part of historical patterns of oppression. The progression is significant: murderer (criminal), slave-driver (institutionalized oppression), Roman emperors (absolute power corrupting absolutely). This ten-year-old is thinking politically. The use of "like" shows she\'s making analogies, not just name-calling—she\'s analyzing. This moment establishes that Jane will use intellectual tools to understand and resist injustice throughout her life.'
    }
  ],
  
  // ==========================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // ==========================================
  iaAnalysis: {
    themes: [
      {
        name: 'Social Class and Economic Dependence',
        explanation: 'Chapter 1 meticulously establishes how class and money determine every aspect of Jane\'s life. As an orphan with no inheritance, Jane is "dependent"—a word used repeatedly to mark her inferior legal and social status. John Reed can cite his future inheritance as proof of ownership ("all the house belongs to me, or will do in a few years"), while Jane is reminded she should "beg" rather than expect equal treatment. Mrs. Reed\'s obligation to house Jane comes from her dead husband\'s promise, not love—making Jane\'s presence resented. The servants won\'t protect Jane because John is "their young master." Victorian readers would understand this immediately: without independent income, women and children had no choices, no power, no recourse. Brontë exposes how economic systems create and maintain human suffering, how class determines whose story is believed, whose pain matters, whose development counts. This theme will follow Jane throughout the novel—every relationship involves questions of money, power, and independence.'
      },
      {
        name: 'Literature as Refuge and Resistance',
        explanation: 'Jane\'s retreat behind the curtain with Bewick\'s History of British Birds establishes reading as both escape and education. The book\'s "death-white realms" and "solitary rocks and promontories" mirror Jane\'s psychological isolation—she finds herself in these Arctic landscapes. But reading also gives Jane vocabulary and frameworks: her knowledge of Roman history allows her to compare John to Nero and Caligula. Literature provides what her environment doesn\'t: beauty, complexity, the language to understand tyranny. Brontë herself was defending the novel form against Victorian critics who called fiction frivolous or immoral—she shows reading as moral and intellectual survival. Throughout the novel, Jane\'s literacy makes her employable (as governess), connects her to Rochester (through conversation), and preserves her moral compass (through reflection). This chapter establishes that for powerless people, imagination and education aren\'t luxuries—they\'re necessities.'
      },
      {
        name: 'The Costs of Resistance',
        explanation: 'When Jane finally fights back after years of abuse, she\'s immediately punished more severely than her abuser. John\'s assault (throwing a book, making Jane bleed) is excused; Jane\'s self-defense is called "fury" and "passion" requiring punishment. The servants automatically blame Jane—"Dear! dear! What a fury to fly at Master John!" Mrs. Reed orders her locked in the red-room. This establishes a central tension: Jane morally must resist injustice, but resistance brings punishment. Throughout the novel, Jane will face this dilemma repeatedly. Should she submit to preserve safety? Or resist and face consequences? Brontë presents this as a genuine moral problem—there are costs to both options. Jane\'s resistance is portrayed as necessary for her soul and dignity, but Brontë doesn\'t romanticize the price. This theme speaks to any marginalized person\'s reality: speaking truth to power has consequences, but silence has costs too.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'First-Person Retrospective Narration',
        explanation: 'The novel is narrated by adult Jane looking back on her younger self. This creates a dual perspective: we experience ten-year-old Jane\'s emotions directly while also getting adult Jane\'s analysis and interpretation. Brontë can show child Jane\'s limited understanding while adult Jane provides context Victorian readers needed.',
        example: 'When Jane describes Mrs. Reed\'s speech, we get both the child\'s hurt ("she had dispensed from joining the group") and adult analysis of its manipulative language. The narration creates sympathy (we feel child Jane\'s pain) and understanding (we see the system clearly through adult eyes). This technique also raises questions: How reliable is memory? How does adult Jane\'s knowledge color her retelling of childhood?'
      },
      {
        name: 'Pathetic Fallacy and Gothic Atmosphere',
        explanation: 'Brontë uses weather and setting to externalize Jane\'s emotional state. The opening\'s "cold winter wind," "clouds so sombre," and "rain so penetrating" mirror Jane\'s isolation and suffering. This is pathetic fallacy—nature reflecting human emotion—combined with Gothic atmosphere: the oppressive house, hostile family, threatening spaces.',
        example: 'The entire first chapter moves from outdoor bleakness to indoor claustrophobia. Jane retreats to the window seat—"Folds of scarlet drapery shut in my view to the right hand; to the left were the clear panes of glass" creating both protection and imprisonment. The "drear November day" outside reflects the emotional climate inside. This technique makes Jane\'s psychological reality visible and prepares readers for the Gothic horror of the red-room in Chapter 2.'
      },
      {
        name: 'Symbolism: The Book as Weapon and Refuge',
        explanation: 'Bewick\'s History of British Birds functions symbolically on multiple levels: it\'s Jane\'s refuge (escape into imagination), her mirror (Arctic desolation reflects her isolation), her education (she learns observation and language), and ultimately a weapon (John throws it at her, making her bleed).',
        example: 'Jane reads about "the solitary rocks and promontories" and "death-white realms"—landscapes that mirror her emotional isolation. When John asks "What were you doing behind the curtain?" Jane answers simply: "I was reading." This reading is then literally weaponized—the heavy book becomes an instrument of violence when John hurls it at Jane\'s head. The same object that provides refuge becomes the tool of assault. This symbolizes how even Jane\'s small spaces of freedom are violated and turned against her. Yet Jane will reclaim books throughout her life as tools of advancement and understanding.'
      },
      {
        name: 'Opening with Negation',
        explanation: 'The novel begins with what cannot happen—"There was no possibility of taking a walk that day"—establishing Jane\'s life through constraints rather than possibilities. This rhetorical strategy immediately positions Jane as someone whose life is defined by limitations, prohibitions, and impossibilities.',
        example: 'Instead of "It was raining" or "We stayed inside," Brontë writes "There was no possibility." The double negative structure emphasizes foreclosed options. This sets the tone for a character who must create agency within severe constraints. Throughout the novel, Brontë often describes Jane\'s situation through what she cannot do or have before showing what she will do despite limitations. This opening strategy mirrors the psychological reality of powerlessness—you define your world by its walls before you find the doors.'
      }
    ]
  },
  
  // ==========================================
  // MODERN ADAPTATION
  // ==========================================
  modernAdaptation: {
    setting: 'Imagine Jane as a scholarship student living with her wealthy aunt\'s family after her parents died—perhaps they\'re paying for her private school, housing her, but making sure she knows she\'s different. Or picture her as a foster child placed with a family that took her in for the stipend or status but actively resents her presence. In today\'s terms, Jane would be the girl excluded from family photos, not invited to cousins\' birthday parties, given the smallest room or hand-me-downs while her cousins get new clothes from Nordstrom. Mrs. Reed\'s elaborate speech about Jane\'s inadequate "disposition" translates perfectly to passive-aggressive relatives who couch cruelty in concern: "We\'d love to include you in the vacation photos, but your attitude..." Modern John Reed\'s bullying could be constant group texts mocking Jane (on a chat she isn\'t included in but hears about), destroying her possessions, physical intimidation that adults conveniently never witness. His weaponization of his inheritance ("all the house belongs to me") echoes how trust-fund kids and heirs wield future wealth as present power.',
    
    parallels: [
      '📱 **Digital Exclusion**: Jane\'s exclusion from the family gathering = being left out of group chats, not tagged in family photos, watching cousins\' Instagram stories of family events she wasn\'t invited to',
      '📚 **Literature as Refuge**: Jane reading Bewick behind a curtain = scrolling alone, listening to music with headphones, escaping into online communities where she can belong, losing herself in fanfiction or creative worlds',
      '💰 **Economic Dependency**: "You are a dependent" = foster children reminded to be "grateful," scholarship students made aware they don\'t "really belong," relatives who hold financial support over your head',
      '👊 **Violence & Victim-Blaming**: John\'s assault going unpunished while Jane\'s self-defense is called "fury" = abusers protected while victims who finally react are labeled "crazy," "angry," or "difficult"',
      '🏠 **Hostile Home**: Gateshead Hall as oppressive space = homes where certain children have rooms and privileges while others sleep on couches, share rooms, or are given clear messages they don\'t belong',
      '📖 **Books as Weapons**: The heavy book John throws = any tool of education or advancement (scholarships, opportunities, knowledge) weaponized to keep marginalized people in their place',
      '🗣️ **Questioning as Defiance**: Mrs. Reed saying "I don\'t like cavillers or questioners" = authority figures who label legitimate questions as "attitude problems" or "disrespect"',
      '⚖️ **Complicit Adults**: Servants who won\'t protect Jane = teachers, social workers, relatives who see abuse but don\'t intervene because confronting powerful families is uncomfortable or risky'
    ],
    
    discussionPrompt: 'The core dynamics remain unchanged across 180 years: a powerless child dependent on adults who don\'t love her, witnessing systemic injustice where class and family position determine who is believed, using imagination and literacy as survival mechanisms, and facing the impossible choice between silent suffering and resistance that brings punishment. What does it say about our society that Jane\'s situation is still immediately recognizable in foster care systems, blended families, scholarship programs, and economic inequality today? What has changed? What hasn\'t?'
  },
  
  // ==========================================
  // THEMATIC THREADS
  // ==========================================
  thematicThreads: [
    {
      emoji: '🔥',
      name: 'Fire and Passion',
      explanation: 'Jane is called a "fury" for defending herself—her passion and fire are threatening to those who want her submissive. Watch how fire imagery recurs: literal fires, emotional "burning," red imagery. Fire represents both Jane\'s life force and the danger of female passion in Victorian society. It will literally and metaphorically consume people throughout the novel.'
    },
    {
      emoji: '🏛️',
      name: 'Houses and Spaces',
      explanation: 'Jane\'s psychological state is reflected in her physical spaces. At Gateshead, she\'s excluded, isolated, confined. She creates temporary refuges (behind curtains, in window seats) that are always violated. Watch how houses (Gateshead, Lowood, Thornfield, Moor House, Ferndean) reflect Jane\'s internal journey and the power dynamics of each space.'
    },
    {
      emoji: '📚',
      name: 'Reading and Narrative Authority',
      explanation: 'Who gets to tell the story? Jane reads histories and uses them to understand power. She\'ll later tell her own story (this novel is her autobiography). Books, stories, and the power to narrate your own life recur constantly. Watch who controls narrative and whose stories are believed.'
    },
    {
      emoji: '⚖️',
      name: 'Justice vs. Mercy',
      explanation: 'Jane has a fierce sense of justice—she wants John punished, Mrs. Reed accountable. But others will advocate Christian mercy and forgiveness. This tension between demanding justice and offering mercy will recur at key moments. Which does Jane owe to those who hurt her? What does she owe herself?'
    }
  ],
  
  // ==========================================
  // DISCUSSION QUESTIONS
  // ==========================================
  discussionQuestions: [
    {
      title: 'Opening Sentence',
      question: 'Why does Brontë begin with "There was no possibility of taking a walk that day"—what cannot happen—rather than describing what does happen? How does this opening strategy establish Jane\'s character and situation?'
    },
    {
      title: 'Narrative Voice',
      question: 'This chapter is narrated by adult Jane looking back on ten-year-old Jane. Where can you detect the adult narrator\'s voice versus the child\'s perspective? How does this dual narration create sympathy and understanding? What are the advantages of this narrative technique?'
    },
    {
      title: 'Language of Exclusion',
      question: 'Analyze Mrs. Reed\'s speech excluding Jane from the family group. How does her language disguise cruelty as concern? What does she actually mean when she says Jane needs "a more sociable and childlike disposition"? How do families and institutions today use similar language to justify exclusion?'
    },
    {
      title: 'Literature as Survival',
      question: 'Jane retreats behind a curtain with Bewick\'s History of British Birds. What do the Arctic landscapes ("solitary rocks," "death-white realms") represent to Jane? How does reading provide psychological survival in hostile environments? What\'s the equivalent escape for young people today?'
    },
    {
      title: 'The Meaning of Dependent',
      question: 'The word "dependent" is used repeatedly. What does this word mean legally, economically, socially, and psychologically in 1840s England? How does Jane\'s dependent status leave her vulnerable? Do modern dependencies (economic, familial, institutional) create similar vulnerabilities?'
    },
    {
      title: 'Class and Violence',
      question: 'John Reed\'s assault on Jane (throwing the book, making her bleed) goes unpunished while Jane\'s self-defense is called "fury" requiring punishment. How does class privilege determine who is believed and who is blamed when violence occurs? What modern parallels exist?'
    },
    {
      title: 'Historical Literacy',
      question: 'When provoked, Jane calls John "like a murderer," "like a slave-driver," "like the Roman emperors" (Nero, Caligula). What does Jane\'s historical literacy tell us about her education and her ability to understand her own oppression? How does knowledge empower resistance?'
    },
    {
      title: 'Questioning Authority',
      question: 'Mrs. Reed says "I don\'t like cavillers or questioners." What is threatening about Jane asking questions? Why do authorities demand silent obedience rather than inquiry? How does education either enforce or challenge existing power structures?'
    }
  ],
  
  // ==========================================
  // SPEED LEARNING NOTICE (Chapter 1 Only)
  // ==========================================
  speedLearningNotice: {
    title: '💡 How to Use Amplified Discussion',
    content: 'Below you\'ll find expandable "Amplified Discussion" sections that explore complex questions about this chapter. Here\'s how to use them effectively for maximum learning: **(1) Try answering the question yourself first**—think it through, form your own interpretation. **(2) Then expand the section and compare**—what did you get right? What did you miss? **(3) Notice the process**—how does expert analysis differ from your initial thinking? Over time, you\'ll internalize these analytical moves. This is teaching you HOW to read literature, not just WHAT to think about this chapter.'
  },
  
  // ==========================================
  // AMPLIFIED DISCUSSION
  // ==========================================
  amplifiedDiscussion: [
    {
      id: 'why-first-person',
      title: 'Why Tell This Story in First Person?',
      question: 'Jane Eyre is narrated in first person by adult Jane looking back on her childhood. Why did Charlotte Brontë choose this narrative strategy rather than third person? What does it allow her to do? What might it limit?',
      aiResponse: `**The Power of Retrospective First-Person**

Charlotte Brontë's choice to have adult Jane narrate her own childhood creates several powerful effects:

**1. Immediate Emotional Connection**
- First person creates intimacy—we're inside Jane's consciousness, experiencing her feelings directly
- We don't just observe Jane's suffering; we feel it through her words
- This makes the abuse and isolation viscerally real rather than observed from outside

**2. Dual Perspective**
- Adult Jane has wisdom child Jane lacked—she can explain context, analyze motivations, name patterns
- Child Jane has raw emotion and immediacy—we experience the trauma as it happens
- The gap between what child Jane understood and what adult Jane now knows creates dramatic irony
- Example: When Mrs. Reed gives her elaborate speech about Jane's "disposition," child Jane is hurt and confused; adult Jane can now name this as psychological manipulation

**3. Authority and Sympathy**
- Jane controls her own narrative—no one else gets to define her or tell her story
- This is radical in 1847: women's stories were usually told by men or through third-person "proper" distance
- Jane names her own experience as abuse, calls it unjust, refuses to accept the Reeds' version
- The subtitle is "An Autobiography"—Jane claims authority over her own life story

**4. Unreliable Narrator Possibilities**
- First person raises questions: Is memory accurate? Is Jane's adult interpretation reliable?
- Brontë can use this to create ambiguity at key moments (Rochester's deception, St. John Rivers' proposal)
- Readers must actively interpret—is Jane being fair to Mrs. Reed? Is adult Jane revising childhood emotions?

**5. Victorian Propriety**
- First person allows Brontë to express Jane's "unfeminine" anger and passion within the frame of mature reflection
- Adult Jane can admit child Jane's "fury" while contextualizing it as justified
- The respectable adult narrator makes the rebellious child's emotions acceptable to Victorian readers

**What It Limits:**
- We never see inside other characters' minds—only Jane's interpretation of their motives
- We don't know what happened to characters when Jane wasn't present (unless she hears about it)
- The narrative is constrained by Jane's knowledge and perspective at any given moment
- Other characters can feel less developed because we only see them through Jane's eyes

**Why This Matters:**
This narrative choice makes *Jane Eyre* proto-feminist: Jane tells her own story, refuses others' interpretations, and claims the authority to name her own experience. In a Victorian context where women's stories were controlled by fathers, husbands, and male authors, Jane's voice is revolutionary.`
    },
    {
      id: 'bewick-symbolism',
      title: 'The Symbolism of Bewick\'s Book',
      question: 'Jane reads Bewick\'s History of British Birds, focusing on images of Arctic desolation, shipwrecks, and isolated rocks. What does this book symbolize? Why these specific images?',
      aiResponse: `**Multiple Layers of Symbolism**

Bewick's *History of British Birds* (1797-1804) was a real Victorian natural history book famous for its detailed woodcut illustrations. Brontë's choice of this specific book is deeply meaningful:

**1. Psychological Mirror**
- The Arctic landscapes Jane fixates on mirror her emotional state: "death-white realms," "solitary rocks and promontories," "forlorn regions of dreary space"
- The "broken boat stranded on a desolate coast" represents Jane herself—shipwrecked, abandoned, stranded
- The "rock standing up alone in a sea of billow and spray" is Jane: isolated, surrounded by hostile forces, but standing
- Jane finds herself in these images—her unconscious chooses imagery that reflects her reality

**2. Escape and Imagination**
- Reading provides escape from an unbearable present
- Jane doesn't just read the text—she creates "an idea of my own" from the images, showing active imagination
- The book transports her to "the haunts of sea-fowl," away from the Reeds
- Literature becomes a survival mechanism—when physical escape is impossible, imagination provides psychological refuge

**3. Education and Class**
- Jane has access to books and can read them with sophisticated comprehension
- Her literacy distinguishes her from servants and will eventually be her path to employment
- But John can weaponize this same book—throwing it at her—showing how tools of advancement can be turned against the vulnerable
- The book represents both opportunity and danger

**4. The Violence of Knowledge**
- When John discovers Jane reading, he hurls the book at her head, causing her to bleed
- The very object that brings Jane refuge becomes a weapon
- This symbolizes how education and knowledge—Jane's few advantages—will be persistently attacked throughout her life
- Those in power fear the literacy and imagination of the powerless

**5. Natural History and Social Order**
- Victorian natural history books classified and ordered nature—imposing human systems on the natural world
- Similarly, Victorian society classified and ordered humans (by class, gender, family status)
- But Jane finds freedom in wild, unordered spaces—the Arctic, the sea, the moors
- The natural history book paradoxically contains images of nature that resists human control

**6. Death Imagery**
- "Death-white realms," "the cold and ghastly moon glancing through bars of cloud at a wreck just sinking"
- These are death images chosen by a traumatized ten-year-old
- They reveal Jane's psychological state—she's drawn to images of desolation and death because that's her inner landscape
- Yet she's fascinated, not repelled—suggesting she's looking for language for her experience

**7. Solitude as Ambiguous**
- The "solitary rocks" and isolation in these images can be read two ways:
- Negative: Jane's forced isolation and abandonment
- Positive: The self-sufficiency and independence Jane will need to survive
- Solitude will be both Jane's curse and her salvation throughout the novel

**The Book as Weapon:**
The heaviest symbolic weight comes when John physically assaults Jane with this book. The same object that provided refuge, imagination, and education becomes a literal weapon. This captures Jane's entire situation: even her small spaces of freedom and agency are invaded, violated, and turned against her. Yet she will reclaim books and education throughout her life as tools of advancement.

**Historical Context:**
Victorian readers would recognize Bewick's book immediately—it was famous and widespread. Middle-class families owned it. Brontë showing Jane reading Bewick establishes her education and taste while the Arctic imagery establishes her Gothic sensibility. It's a clever characterization move: Jane is both "civilized" enough to read natural history and Gothic-romantic enough to be transported by desolation imagery.`
    },
    {
      id: 'john-reed-privilege',
      title: 'Understanding John Reed\'s Privilege',
      question: 'John Reed is only 14 years old, yet he has enormous power over Jane. How does his privilege work? What allows him to abuse Jane with impunity?',
      aiResponse: `**The Anatomy of John Reed's Privilege**

John Reed is a fascinating case study in how privilege operates—he's a terrible person, yes, but more importantly, he's a product of intersecting privileges that Victorian readers would immediately recognize:

**1. Class Privilege (Economic Power)**
- John is the heir to Gateshead Hall—"all the house belongs to me, or will do in a few years"
- He knows Jane is a dependent with "no money" whose "father left you none"
- He explicitly states: "you ought to beg, and not to live here with gentlemen's children like us"
- His future wealth gives him present power—everyone treats him according to what he will own, not who he is
- The servants fear "their young master"—they're economically dependent on his family's favor

**2. Gender Privilege (Male Power)**
- As the only son, John has privileges his sisters Eliza and Georgiana don't have
- He inherits; they don't (Victorian primogeniture—eldest son gets everything)
- He can be physically violent in ways girls couldn't
- His mother's overprotectiveness of him as "her only son" gives him immunity
- Male violence is more tolerated/expected than female resistance

**3. Family Position (Legitimate vs. Dependent)**
- John is Mrs. Reed's biological child; Jane is her dead husband's niece
- John belongs; Jane is an obligation
- Blood relation plus inheritance creates a hierarchy among children in the household
- Victorian law and custom prioritized biological children's rights over dependents

**4. Age Privilege (Over Jane)**
- At 14, John has four years' seniority over 10-year-old Jane
- This age gap means physical strength advantage
- Adults defer to "young master" in ways they'd never defer to a 10-year-old girl
- His approaching adulthood makes his future power even more imminent

**5. Maternal Protection**
- Mrs. Reed is "blind and deaf" to John's abuse—"she never saw him strike or heard him abuse me"
- Her willful blindness is active protection of her son
- She brought him home from school claiming "delicate health" (the text notes he'd be healthier with fewer sweets)
- She reinterprets all events in his favor—when Jane bleeds from his assault, Mrs. Reed blames Jane's "fury"

**6. Systemic Complicity**
- The servants won't protect Jane because they "did not like to offend their young master"
- Even servants who might sympathize with Jane must enforce family hierarchy to keep their jobs
- Bessie and Abbot restrain Jane, not John
- The entire household structure supports John's power

**7. The Power to Define Reality**
- When John abuses Jane, adults arrive and immediately ask "What a fury to fly at Master John!"
- No one asks what John did—they assume Jane is the aggressor
- John has "narrative privilege"—his version of events is believed by default
- Jane has no appeal "whatever against either his menaces or his inflictions"

**The Corruption of Privilege:**
Brontë emphasizes that John's privilege has corrupted him: he "gorged himself habitually at table," is "bilious," has "dim and bleared eye and flabby cheeks." His mother's overindulgence has made him literally sick. His cruelty isn't just personal character flaw—it's the predictable result of unchecked power. He's learned that he can do whatever he wants without consequences.

**Why This Matters:**
John Reed is Brontë's critique of how privilege—especially unearned privilege of birth and class—corrupts. At 14, John is already a tyrant because systems of class, gender, and family have taught him he's entitled to power over others. The novel asks: What kind of adults do systems of privilege create?

This analysis of John Reed has modern resonance: we still see how combinations of race, class, gender, family position, and institutional protection allow people to abuse power with impunity. The mechanisms are recognizable across centuries.

**Foreshadowing:**
John Reed's fate (later revealed in the novel) shows what happens when this kind of unchecked privilege meets the real world—he cannot adapt, cannot earn anything, and self-destructs. His privilege simultaneously empowers and destroys him. This is Brontë's commentary on the Victorian class system.`
    },
    {
      id: 'janes-resistance',
      title: 'Jane\'s First Act of Resistance',
      question: 'When Jane finally fights back against John, she compares him to "a murderer," "a slave-driver," and "the Roman emperors." Why are these specific comparisons significant?',
      aiResponse: `**The Politics of Jane's Resistance**

Jane's verbal counterattack is extraordinary for multiple reasons:

**1. Historical/Political Literacy**
- Jane doesn't just call John names—she makes three precise historical comparisons
- The text immediately explains: "I had read Goldsmith's History of Rome, and had formed my opinion of Nero, Caligula, &c."
- At age 10, Jane has sufficient education to contextualize her abuse through historical examples of tyranny
- This shows both her literacy and her capacity for political analysis

**2. The Three Comparisons Are Progressive:**

**"Murderer"** — Individual Crime
- John's violence could literally kill her (the blow to her head causes bleeding)
- This names his cruelty as criminal, not just "boyish" behavior
- It breaks the family's narrative that this is normal sibling conflict

**"Slave-driver"** — Systemic Oppression
- This moves from individual crime to institutional cruelty
- Slave-drivers didn't just commit violence—they operated within a system of oppression
- Jane is identifying the system, not just the person
- In 1847, this reference was politically loaded—abolition debates were fresh in Victorian consciousness
- Jane positions herself as the enslaved, John as the oppressor—radically inverting their social positions (he's "master," she's supposed to be "grateful dependent")

**"Roman emperors" (Nero, Caligula)** — Absolute Power Corrupting Absolutely
- This is the most sophisticated comparison—political philosophy about tyranny
- Nero and Caligula were infamous for corruption, cruelty, and madness stemming from unchecked power
- Jane is analyzing how power corrupts: John isn't cruel despite his privilege, but because of it
- This shows Jane understands structural injustice, not just personal meanness

**3. The Progression Shows Escalating Analysis:**
- From individual violence → systemic oppression → philosophical understanding of tyranny
- Jane isn't just reacting emotionally (though she is angry)
- She's analyzing the nature and sources of oppression
- This ten-year-old is thinking politically

**4. Language as Resistance**
- Jane's education gives her the vocabulary to name what's happening to her
- Many abuse victims lack language for their experience—they're told it's "normal" or "for their own good"
- Jane's historical knowledge gives her frameworks to understand that what's happening is tyranny, not love
- Language is power—Jane uses literacy as a weapon of resistance

**5. The "Like" Construction**
- Jane says "you are LIKE a murderer"—she's making analogies, not metaphors
- This shows rhetorical sophistication—she's comparing, analyzing, finding patterns
- She's not out of control; she's making precise intellectual connections even in the heat of fury

**6. Dangerous Knowledge**
- Jane's comparison to slave-drivers is especially dangerous
- It names the economic and power relationships accurately
- John does treat Jane like property he owns—he can assault her, deny her resources, remind her she should "beg"
- This is the language of slavery applied to domestic life
- Victorian readers would recognize this as radical—women's rights advocates were using slavery analogies to describe women's legal status

**7. "I Had Formed My Opinion"**
- The text emphasizes Jane has "formed my opinion" of these emperors
- She's not just parroting what she read—she's developed analysis
- A ten-year-old has opinions about Nero and Caligula based on reading history
- This is exactly what Victorian education claimed to develop—moral judgment through historical study
- Jane has learned the lessons, but she's applying them in ways that threaten power (using them against "her betters," not to defend them)

**The Response to Her Resistance:**
Immediately after this sophisticated political analysis, Jane is called a "fury" displaying "passion" and dragged off for punishment. The adults don't engage with her argument—they dismiss it as emotion, not reason. Her accurate naming of tyranny is reframed as childish rage. This is how power always responds to those who name it accurately: deny, dismiss, punish.

**Why This Matters:**
Brontë is showing that education and literacy are dangerous to oppressive systems. Jane's reading has given her tools to understand and name her oppression. This is why authoritarian systems restrict education—literate people can recognize tyranny. The novel itself is doing what Jane does: using literary and historical knowledge to analyze systems of power.

**Modern Resonance:**
Jane's resistance mirrors how marginalized people today use historical analogies to name contemporary injustice: comparing immigration detention to concentration camps, comparing voter suppression to Jim Crow, comparing economic exploitation to various historical oppressions. Those in power always respond the same way: "You can't compare those things! You're being hysterical/emotional/unreasonable!" But accurate historical comparison is a powerful tool of resistance—it says "This pattern has happened before, we know where it leads, and we're naming it now."`
    },
    {
      id: 'mrs-reed-cruelty',
      title: 'Mrs. Reed\'s "Genteel" Cruelty',
      question: 'Mrs. Reed isn\'t physically violent like John. How does her cruelty work? Why might it be more damaging than John\'s obvious abuse?',
      aiResponse: `**The Psychology of "Respectable" Cruelty**

Mrs. Reed is actually a more sophisticated villain than John. Her cruelty is harder to identify, defend against, or prove—making it in some ways more damaging:

**1. The Language of Concern**
- Mrs. Reed excludes Jane from the family group while speaking in elaborate, formal language about Jane's "disposition"
- She says she "regretted to be under the necessity of keeping me at a distance"
- She must wait until Jane develops "a more sociable and childlike disposition, a more attractive and sprightly manner"
- This disguises cruelty as concern—she's "helping" Jane become better
- Abuse victims often internalize this: "Maybe I am defective. Maybe I do need to change."

**2. Blaming the Victim**
- Jane is excluded because of her own failures—her inadequate personality, her lack of "attractive and sprightly manner"
- Mrs. Reed implies that inclusion is conditional on Jane's behavior: fix yourself, and maybe you'll be accepted
- This makes Jane responsible for her own mistreatment
- The real cause (Mrs. Reed's resentment, Jane's poverty, class prejudice) is hidden behind personality criticism

**3. Gaslighting**
- Mrs. Reed claims to want what's best for Jane while systematically neglecting and excluding her
- She "regrets" the "necessity"—implying she has no choice when she's chosen this treatment
- She redefines cruelty as discipline, exclusion as pedagogy, abuse as concern
- Jane knows something is wrong but the language makes it hard to name

**4. Passive vs. Active Cruelty**
- Mrs. Reed doesn't hit Jane—she withdraws love, inclusion, and protection
- She doesn't have to do anything—she just fails to protect Jane from John
- The text says she's "blind and deaf" to John's abuse—willful ignorance is active choice disguised as innocent oversight
- Passive cruelty is harder to call out: "But she didn't DO anything wrong" (exactly—she did nothing)

**5. Social/Psychological vs. Physical Violence**
- John's violence is visible—Jane bleeds
- Mrs. Reed's violence is invisible—Jane's spirit is crushed, but there are no marks
- Exclusion, emotional neglect, and psychological manipulation don't leave physical evidence
- Victorian (and modern) society takes physical abuse more seriously than emotional abuse
- But psychological damage can be deeper and longer-lasting

**6. The Power of "Respectability"**
- Mrs. Reed is a "respectable" widow of good family
- She maintains all social proprieties—she fulfills her legal obligation to house and feed Jane
- By Victorian standards, she's doing her duty to her late husband's niece
- Her cruelty operates within socially acceptable forms
- Who would believe Jane if she complained? Mrs. Reed looks like she's doing the right thing

**7. The Poisonous Speech Pattern**
- Notice how Mrs. Reed speaks: long, formal, elaborate sentences
- "until she heard from Bessie, and could discover by her own observation, that I was endeavouring in good earnest to acquire a more sociable and childlike disposition..."
- This baroque syntax obscures meaning while sounding proper and thoughtful
- It's the language of gentility used as a weapon
- Jane is forced to parse these elaborate sentences while being rejected
- The formal language makes the cruelty seem civilized

**8. Rewriting Reality**
- When Jane and John fight, Mrs. Reed arrives and immediately decides Jane is the aggressor
- She doesn't ask what happened—she interprets based on preexisting narrative ("Jane is the problem")
- Later (Chapter 4), Mrs. Reed will tell Mr. Brocklehurst that Jane is a liar—poisoning Jane's reputation before Jane even arrives at school
- Mrs. Reed controls the narrative, and her version is believed because of her social position

**9. Fulfilling the Letter, Violating the Spirit**
- Mrs. Reed promised her dying husband she'd care for Jane
- She provides food, shelter, clothing—the legal minimums
- But she withholds love, protection, and fairness—the moral obligations
- This is following rules while violating their purpose
- It's how systems of oppression operate legally while being profoundly unjust

**Why This Is More Damaging:**
- Physical abuse is terrible but identifiable—victim knows it's wrong
- Psychological abuse makes victims question their own perception
- Jane might internalize: "Maybe I am unlovable. Maybe my disposition is bad. Maybe I deserve exclusion."
- It's harder to resist abuse when it's disguised as help
- This kind of cruelty damages self-concept, not just body

**Class Dimensions:**
- Mrs. Reed's cruelty is distinctly upper-class—formal, verbal, psychologically sophisticated
- Working-class characters (like John) use physical violence
- Upper-class characters use language, social exclusion, reputation management
- Brontë is showing how cruelty operates differently across class but is cruelty nonetheless

**Modern Resonance:**
- Passive-aggressive relatives who undermine while claiming concern
- Institutions that fulfill legal requirements while violating human dignity
- "Concern trolling"—fake worry used as a vehicle for cruelty
- Systems that blame victims for structural problems
- "We'd love to promote you, but your communication style..." (translation: stay in your place)

Mrs. Reed represents how power operates through respectability, how cruelty can be genteel, how the most damaging abuse often comes wrapped in the language of care and concern. She's the "proper" Victorian lady—and absolutely monstrous. Brontë is saying: respectability doesn't equal morality. Actually, it often hides the opposite.`
    }
  ],
  
  // ==========================================
  // EDUCATOR RESOURCES
  // ==========================================
  educatorResources: {
    writingPrompt: {
      title: 'Narrative Perspective Experiment',
      description: 'Have students rewrite the scene where John Reed attacks Jane from three different perspectives: (1) John Reed\'s perspective—how might he justify his behavior? What does he think Jane deserves? (2) Mrs. Reed\'s perspective—why does she automatically blame Jane? What does she see when she enters the room? (3) Bessie\'s perspective—what does she see but cannot say? What are her internal conflicts between conscience and duty? After writing, discuss: How does changing narrator change our understanding of events? Whose perspective do we automatically trust? Why?',
      purpose: 'This exercise teaches: (1) how narrative perspective shapes interpretation, (2) how the same events can be understood differently, (3) empathy through perspective-taking (even with unsympathetic characters), (4) critical reading of narrative voice. It helps students understand that Jane\'s first-person narration is a choice with implications—we trust her version, but other characters have their own (however unjust) interpretations.'
    },
    
    activity: {
      title: 'Power Mapping Gateshead Hall',
      description: 'Create a visual diagram mapping power relationships at Gateshead. Draw arrows showing: economic power (who owns what), social power (whose reputation matters), physical power (who can use force), narrative power (who is believed). Label each character with their power sources. Then identify: What kind of power does Jane have, if any? How do characters maintain or resist power? Compare to modern institutions (schools, workplaces, families). Duration: 30-40 minutes. Can be done individually or in groups of 3-4.',
      materials: 'Large paper or whiteboard, markers in different colors (each color = different type of power), printed character list'
    },
    
    crossCurricular: {
      title: 'Victorian Child Welfare and Legal Rights',
      description: 'Connect *Jane Eyre* to history, sociology, and civics. Research: (1) What happened to orphans in 1840s England? (2) What legal rights did dependent children have? (3) How common was child abuse, and how was it handled? (4) What were the major reforms in children\'s rights from 1847 to today? Students create timeline presentations showing evolution of children\'s rights, comparing Jane\'s situation to historical norms and modern systems. This connects literature to social history and helps students understand how novels can be primary sources for understanding social conditions.',
      subjects: ['History', 'Sociology', 'Legal Studies', 'Social Justice']
    }
  },
  
  // ==========================================
  // CRITICAL THINKING EXERCISE
  // ==========================================
  criticalThinkingExercise: {
    title: 'The Ethics of Resistance: When Is Fighting Back Justified?',
    
    prompt: 'Jane Eyre faces a moral dilemma that resonates across centuries: Should she endure John Reed\'s abuse silently (preserving her safety but damaging her spirit), or resist and face punishment? After years of "continual" bullying, Jane physically fights back and verbally names John\'s tyranny—and is immediately punished more severely than her abuser. Analyze the ethics of Jane\'s resistance. Was her response justified? Should she have acted differently? What obligations does someone in Jane\'s position have to resist injustice, even when resistance brings consequences?',
    
    guidingQuestions: [
      'Define "justified resistance." What makes fighting back morally acceptable? Are there situations where it\'s not just acceptable but obligatory?',
      'Consider power imbalances: Does Jane\'s powerlessness make her resistance more or less justifiable? Do the powerful and powerless have different ethical obligations?',
      'Analyze consequences: Should Jane calculate consequences before resisting, or is resistance valuable regardless of outcome? What happens to someone who never resists?',
      'Examine alternatives: What other options did Jane have? Were any of them viable given her complete powerlessness?',
      'Connect to real-world cases: Research historical examples of resistance against oppression (abolition, suffrage, civil rights, labor movements, anti-colonial struggles). What did resisters risk? What did they gain?',
      'Apply to today: When is resistance against authority (parents, teachers, employers, police, government) justified? How do we evaluate the ethics of resistance movements today?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down Jane\'s situation into component parts: the abuse (physical, psychological, systemic), Jane\'s options (submit, escape, resist), the power dynamics (age, class, gender, family position), and the values at stake (dignity, safety, justice, autonomy). Identify exactly what Jane is resisting and what she risks by resisting.',
      
      evaluate: 'Judge Jane\'s resistance using multiple ethical frameworks: (1) Consequentialist ethics: Did resisting produce better outcomes? (2) Deontological ethics: Is resistance a moral duty regardless of outcome? (3) Virtue ethics: Does resistance express essential human virtues (courage, dignity, self-respect)? (4) Feminist ethics: How do power imbalances affect moral obligations? Consider both principled arguments and practical realities.',
      
      synthesize: 'Develop your own ethical position on resistance against injustice. Under what conditions is resistance obligatory? Acceptable? Inadvisable? Create principles that could apply across contexts—from interpersonal abuse to institutional injustice to political oppression. Defend your position using evidence from Jane Eyre, historical examples, and ethical philosophy. Consider counter-arguments: What would someone who disagrees say? How would you respond?'
    },
    
    expectedDepth: 'A strong response will: (1) Demonstrate understanding of competing ethical frameworks, (2) Use specific textual evidence from Chapter 1, (3) Connect to broader historical patterns of resistance, (4) Acknowledge complexity and trade-offs rather than simplifying, (5) Apply analysis to contemporary issues, (6) Defend a clear position while recognizing valid objections. This exercise should produce 3-4 pages of written analysis or a 10-minute oral presentation with Q&A.',
    
    classroomApplication: 'This exercise works well as: (1) Socratic seminar with half the class defending resistance and half defending caution, then switching sides, (2) Written essay with peer review focused on ethical reasoning, (3) Connection to current events—analyze recent examples of resistance (protests, whistleblowing, civil disobedience) using the same framework. For advanced classes, introduce philosophical texts (Thoreau "Civil Disobedience," King "Letter from Birmingham Jail," Arendt on resistance) for comparison. For younger students, focus on personal scenarios: standing up to bullies, questioning unfair rules, supporting friends facing injustice.'
  },
  
  // ==========================================
  // WHY LITERATURE MATTERS (Rotating Message)
  // ==========================================
  whyLiteratureMatters: getLiteratureMessageByChapter(1),
  
  // ==========================================
  // NEXT TIME TEASER
  // ==========================================
  nextTimeTeaser: {
    emoji: '🚪',
    title: 'Next: The Red-Room',
    preview: 'Jane is dragged away to be locked in the red-room—the chamber where her Uncle Reed died. Alone in the cold, darkening room, Jane will confront not just the ghost of her uncle but the full reality of her powerlessness. As her terror escalates, she will scream for release—and Mrs. Reed will refuse. What happens when a child\'s panic is dismissed as manipulation? What psychological damage occurs when no one comes to save you?',
    hookQuestion: 'Can Jane survive the red-room with her spirit intact? Or will this punishment finally break her?'
  }
}

