/**
 * JANE EYRE - CHAPTER 3
 * 
 * After her breakdown in the red-room, Jane wakes to find Mr. Lloyd—
 * the first adult who actually listens to her, offering a glimpse of hope
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter3: ChapterData = {
  number: 3,
  title: 'Mr. Lloyd\'s Visit',
  
  readingTime: 18,
  pages: 10,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Jane wakes from her illness to find Mr. Lloyd, the apothecary, at her bedside—the first adult who treats her with genuine kindness and asks her questions instead of delivering judgments, planting the seed that will lead to her escape from Gateshead.',
    
    full: [
      'Jane regains consciousness after days of fever and "brain fever" following the red-room incident. She wakes to find herself in the nursery, weak and disoriented. Bessie is there, showing uncharacteristic tenderness—offering Jane her favorite foods, letting her look at a picture book, treating her gently. This kindness is overwhelming after years of cruelty. When Mr. Lloyd, the apothecary (a medical professional below a doctor in status, serving middle and working-class patients), arrives to check on Jane, he finds a pale, thin child still recovering from trauma.',
      
      'For the first time in Jane\'s life, an adult asks her questions instead of making accusations. Mr. Lloyd wants to understand: Why is she so unhappy? What happened? Is she being treated well? Jane, unused to anyone caring about her perspective, initially struggles to answer. She\'s been told so often that her feelings don\'t matter that she\'s learned to suppress them. But Mr. Lloyd\'s gentle persistence creates a safe space. Jane begins to open up, carefully at first. She explains that she has no family, that the Reeds are her only relatives, that she has nowhere else to go.',
      
      'Then Mr. Lloyd asks a revolutionary question: "Would you like to go away to school?" The idea stuns Jane. School means leaving Gateshead, escaping Mrs. Reed, finding a different life. Jane says yes—hesitantly, because she knows nothing of schools except what little she\'s read in books. Mr. Lloyd paints a picture of school life: learning, other students, teachers, new experiences. For the first time, Jane glimpses possibility beyond her current prison. Mr. Lloyd, observing the household dynamics and Jane\'s obvious distress, seems to understand that this child needs rescue.',
      
      'After Mr. Lloyd leaves, Jane reflects on the conversation. She realizes that someone has finally acknowledged her suffering—and more importantly, suggested she has agency. The idea of school becomes her secret hope. The chapter ends with Jane beginning to imagine a future different from her past. Mr. Lloyd\'s visit is a turning point: Jane has been seen, heard, and offered a path forward. Though she doesn\'t know it yet, this conversation will lead Mrs. Reed to send Jane to Lowood School, changing the trajectory of her entire life. The chapter shows how a single act of genuine listening can open doorways for someone trapped in systemic oppression.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Apothecary',
      definition: 'A medical professional who prepared and dispensed medicines, similar to a pharmacist but also providing medical care, especially to those who couldn\'t afford a full physician.',
      context: 'Mr. Lloyd is an apothecary, not a doctor. This matters because it reflects the Reeds\' view of Jane\'s worth—she gets the "cheaper" medical care. However, ironically, Mr. Lloyd\'s lower social status means he connects with Jane more genuinely than a higher-status doctor might have.',
      whyItMatters: 'Understanding Victorian medical hierarchy explains both the social dynamics (Mrs. Reed wouldn\'t call a full physician for an orphan) and why Mr. Lloyd might be more sympathetic (he\'s not part of the upper-class world that excludes Jane). His outsider status makes him capable of seeing injustice the Reeds normalize.'
    },
    {
      term: 'Agency',
      definition: 'The capacity to act independently and make free choices; having power over one\'s own life and decisions.',
      context: 'When Mr. Lloyd asks "Would you like to go away to school?" he\'s offering Jane something she\'s never had: agency. He\'s asking what she wants, suggesting she has a say in her future. This is revolutionary for Jane, who has been told her entire life that her desires are irrelevant.',
      whyItMatters: 'Jane\'s journey throughout the novel is about claiming agency—the right to choose her own path despite poverty, gender, and social marginalization. This chapter marks the first moment when an adult acknowledges she might have preferences and rights. The concept of agency becomes central to understanding Jane\'s character and feminist themes.'
    },
    {
      term: 'Class and Medical Access',
      definition: 'The Victorian system where social class determined the quality and type of medical care received, with the poor getting apothecaries and the wealthy getting physicians.',
      context: 'Mrs. Reed calls Mr. Lloyd (apothecary) for Jane but would call a physician for her own children. This class-based medical system reveals how Jane is valued differently. Yet Mr. Lloyd\'s care is arguably better because he actually listens to Jane as a person, not just a patient.',
      whyItMatters: 'Brontë critiques class systems by showing that status doesn\'t equal quality of care or moral worth. The "lesser" medical professional is the better healer because he treats Jane with dignity. This reversal questions Victorian assumptions about class and value.'
    },
    {
      term: 'Bildungsroman Turning Point',
      definition: 'A bildungsroman is a coming-of-age novel that follows a character\'s moral and psychological growth; turning points are moments when the character\'s trajectory fundamentally changes.',
      context: 'Mr. Lloyd\'s visit is a bildungsroman turning point: Jane moves from passive suffering to active hope. The conversation plants the seed that she might have a different future. This single chapter shifts Jane from victim to someone with potential agency—a crucial psychological transformation.',
      whyItMatters: 'Understanding this as a structural turning point helps readers see how Brontë architects Jane\'s development. Not all chapters advance plot equally—some change the protagonist\'s internal landscape. This chapter is more important for what it does to Jane\'s mindset than for external events.'
    },
    {
      term: 'Hope as Survival Strategy',
      definition: 'The psychological concept that having a vision of a better future can sustain people through current suffering, making hope not just emotion but a cognitive tool for survival.',
      context: 'When Jane learns about the possibility of school, she gains something to live for beyond enduring each day. The chapter shows Jane beginning to imagine "elsewhere"—and that imagination becomes a psychological lifeline during her remaining time at Gateshead.',
      whyItMatters: 'Psychologically, this chapter is about giving a traumatized child a reason to persist. Without hope, Jane might internalize the Reeds\' message that she\'s worthless. With hope (school as possibility), she can reframe her current suffering as temporary. This distinction is life-saving.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'In this chapter, Jane is physically weak but beginning psychological recovery. Her initial response to Mr. Lloyd reveals how deeply she\'s internalized her oppression—she struggles to articulate her unhappiness because she\'s been taught her feelings don\'t matter. When asked if she\'s unhappy, she says, "I don\'t know," not because she doesn\'t feel, but because naming her suffering feels dangerous. However, as Mr. Lloyd gently persists, Jane begins to speak her truth: she has no family, she\'s alone, she\'s treated as less-than. The most significant moment is when Mr. Lloyd asks what she wants, and Jane realizes she\'s never been asked this before. The concept of school—learning, escape, elsewhere—captures her imagination. By the end of the chapter, Jane has moved from despair to cautious hope. She\'s discovered that someone sees her suffering, that adults aren\'t all cruel, and that a different future might be possible. This is the birth of Jane\'s agency.',
      keyTrait: {
        emoji: '🌱',
        text: 'Hope Awakening'
      }
    },
    {
      name: 'Mr. Lloyd',
      development: 'Mr. Lloyd is the first truly kind adult Jane encounters. Unlike the Reeds and their servants, he has no stake in maintaining the household\'s power dynamics. His questions are genuine, not rhetorical weapons. He listens to Jane\'s answers and believes her. When he suggests school, he\'s not trying to get rid of a problem child—he\'s trying to help a suffering one. His gentleness and respect are revolutionary in Jane\'s experience. As an apothecary (lower on the social hierarchy than a physician), Mr. Lloyd has likely seen how class and power operate; perhaps this makes him more perceptive to injustice. He recognizes that Jane\'s illness isn\'t just medical—it\'s situational. The cure isn\'t medicine but escape. His willingness to advocate for a child he barely knows, who has no social power or family to repay him, marks him as genuinely moral.',
      keyTrait: {
        emoji: '🩺',
        text: 'Compassionate Healer'
      }
    },
    {
      name: 'Bessie Lee',
      development: 'Bessie shows a different side in this chapter—the kindness she\'s capable of when not under Mrs. Reed\'s direct surveillance. While Jane is ill, Bessie is tender: offering favorite foods, showing the picture book, tucking Jane in gently, even singing to her. This reveals that Bessie\'s previous harshness was partly performative—fulfilling her role in the household hierarchy. With Jane vulnerable and Mrs. Reed absent, Bessie can express the sympathy she probably always felt but couldn\'t show. However, this also highlights Bessie\'s limitations: she can be kind to a sick child but won\'t challenge the system that harms that child when well. Her kindness is real but ultimately insufficient—it treats symptoms, not causes.',
      keyTrait: {
        emoji: '💝',
        text: 'Conditional Kindness'
      }
    },
    {
      name: 'Mrs. Reed (Absent but Present)',
      development: 'Though Mrs. Reed barely appears in this chapter, her presence looms. She called the apothecary (cheaper than a doctor) rather than a physician, revealing Jane\'s place in the hierarchy. She doesn\'t personally care for Jane during illness—delegating to servants. When Mr. Lloyd later speaks to Mrs. Reed about sending Jane to school, her response will be telling: she agrees not because she wants what\'s best for Jane, but because she wants Jane gone. This chapter shows Mrs. Reed\'s neglect through absence—she doesn\'t even bother to check on the child who nearly died under her care.',
      keyTrait: {
        emoji: '👻',
        text: 'Absent Guardian'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'I felt weak and tired. I wished the wind to howl more wildly, the gloom to deepen to darkness, and the confusion to rise to clamour.',
      analysis: 'This opening perfectly captures Jane\'s psychological state: she wants the external world to match her internal chaos. When you\'re suffering internally, calm surroundings feel like mockery—disorder feels more honest. This is a profound insight into trauma psychology. Jane is still in that dissociated state where she can\'t fully feel her own emotions, so she projects them onto the environment. The desire for external chaos to validate internal chaos is a mark of deep psychological distress.'
    },
    {
      text: 'Bessie had been down into the kitchen, and she brought up with her a tart on a certain brightly painted China plate...This precious vessel was now placed on my knee. I was invited to eat...I feasted with delight.',
      analysis: 'The tart and china plate are significant because they represent Bessie showing Jane she matters. In the Reed household, Jane gets the worst of everything—last servings, plain dishes, leftovers. That Bessie brings her a special tart on nice china is an act of dignity-granting. Jane\'s phrase "this precious vessel" applies both to the plate and to what the gesture represents: being treated as worthy of care. Small acts of respect matter deeply to those denied dignity.'
    },
    {
      text: '"Do you want to go away to school?" I could scarcely believe that any one would be so good; but I doubted not that Mr. Lloyd had spoken to Mrs. Reed about it, and perhaps she had hit on the plan as a means of getting rid of me.',
      analysis: 'This quote reveals Jane\'s psychological complexity. She wants desperately to leave but can\'t allow herself hope because hope makes disappointment unbearable. She immediately reframes Mr. Lloyd\'s kindness as Mrs. Reed\'s rejection—protecting herself from believing anyone actually wants to help her. This is trauma logic: it\'s safer to expect cruelty than to risk hoping for kindness. Yet the fact that she even allows herself to imagine school shows that hope is seeping in despite her defenses.'
    },
    {
      text: '"Would you like to go to school?" Again I reflected: I scarcely knew what school was...but I felt that it would be a great relief if I might exchange the dull nursery at Gateshead for another scene. "I should indeed like to go to school," I said.',
      analysis: 'Jane\'s "I reflected" shows her taking time to consider—not reflexively answering based on what adults want to hear. This is significant because Jane is learning to consult her own desires. She doesn\'t know what school is, but she knows it\'s "elsewhere," and elsewhere must be better than here. The phrase "I should indeed like to go" is her first clear expression of desire in the novel. It\'s a moment of agency: Jane claiming what she wants.'
    },
    {
      text: 'But why do I dwell on these thoughts? I must not linger on them. I am a slave of my own imagination, and I must not let it run away with me.',
      analysis: 'Jane policing her own hope is heartbreaking. She\'s afraid that imagining a better future will make current suffering worse. She calls imagination "slavery," suggesting that allowing herself to dream feels dangerous—as if hope itself is a trap. This is the psychology of traumatized people who learn that hoping for better hurts too much when hope is crushed. Yet the fact that she must actively suppress these thoughts shows they\'re already taking root.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'The Radical Power of Being Heard',
        explanation: 'This chapter demonstrates something revolutionary: what happens when someone in power actually listens to the powerless. Mr. Lloyd doesn\'t just hear Jane\'s words—he believes her, validates her suffering, and acts on what she tells him. This is transformative because Jane has spent her life being told her perceptions are wrong. When Mr. Lloyd asks "Are you unhappy?" and accepts her answer, he\'s affirming that her internal experience is real and legitimate. The chapter shows that being heard is not just emotional comfort—it\'s a form of power restoration. For traumatized people, having someone believe them begins the healing process. Brontë understands that oppression works partly by convincing victims their suffering isn\'t real or doesn\'t matter; therefore, being heard and believed is an act of liberation.'
      },
      {
        name: 'Agency and the Right to Choose',
        explanation: 'The central question—"Would you like to go to school?"—is radical because it assumes Jane has preferences that matter. Victorian children, especially orphaned girls, had virtually no agency. Adults made decisions for them, and gratitude was the only acceptable response. Mr. Lloyd asking what Jane wants, rather than telling her what will happen, is a form of respect rarely granted to children, let alone poor orphans. Jane\'s hesitant "yes" is her first act of self-determination. This chapter introduces the theme that will define Jane\'s character: the insistence on being treated as a subject (someone who acts) rather than an object (someone acted upon). Jane will spend the novel fighting for agency—in relationships, education, work, and love.'
      },
      {
        name: 'Hope as Psychological Survival Tool',
        explanation: 'Before this chapter, Jane has been in survival mode—enduring day-to-day without vision of improvement. The possibility of school gives her something powerful: hope. Psychological research shows that hope—concrete vision of a better future—is crucial for resilience. Without hope, trauma victims can develop learned helplessness. With hope, they can reframe current suffering as temporary. Jane\'s imagination of school becomes a cognitive tool: when the Reeds are cruel, she can think "not forever." This doesn\'t remove her suffering but makes it bearable. Brontë shows hope not as naive optimism but as necessary survival strategy for those trapped in oppressive circumstances.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Dialogue as Character Revelation',
        explanation: 'Brontë uses dialogue to reveal character through speech patterns, questions, and listening. Mr. Lloyd asks open-ended questions and waits for answers. Mrs. Reed (in other chapters) delivers pronouncements and demands compliance. Bessie speaks in the language of servant-class pragmatism. Jane\'s own speech is careful, formal, and full of pauses—showing her learned caution. The conversation between Mr. Lloyd and Jane is structured to show power dynamics shifting: he asks, she hesitates, he encourages, she risks truth, he validates. This creates a rhythm of trust-building in real time.',
        example: 'Mr. Lloyd: "Well, who are you? and how do you do?" Jane: "I am very well, sir." He pauses, observes, then asks: "What made you ill yesterday?" This gentle progression from small talk to serious inquiry shows skilled questioning. Compare this to Mrs. Reed\'s speech style: commands, accusations, declarations. The contrast reveals that character isn\'t just what people say but how they speak to those with less power.'
      },
      {
        name: 'Interior Monologue and Self-Awareness',
        explanation: 'Brontë continues using Jane\'s first-person narration to show both child-Jane experiencing events and adult-Jane analyzing them retrospectively. When child-Jane struggles to answer Mr. Lloyd\'s questions, adult-Jane explains why: "I felt it impossible to speak." This double consciousness creates psychological depth. We see Jane\'s trauma-based hesitation while also understanding its causes. The interior monologue also shows Jane\'s developing self-awareness—she notices her own reactions and begins questioning them.',
        example: 'Jane reflects: "A child cannot quarrel with those who are older and wiser, neither can it complain when it is subject to rough treatment." This is clearly the Reed household\'s ideology, but Jane is starting to question it. The fact that she can articulate these "rules" means she\'s beginning to see them as constructed, not natural—the first step toward resistance.'
      },
      {
        name: 'Symbolism of Physical Recovery and Psychological Awakening',
        explanation: 'Jane\'s physical recovery from illness parallels her psychological awakening. As her body heals, her mind begins to imagine possibility. The illness serves as a symbolic death and rebirth: she nearly died in the red-room (both literally and symbolically), and she emerges from fever changed. Brontë uses physical state to mirror psychological state: weakness/strength, darkness/light, confusion/clarity. The chapter\'s progression from Jane lying weak in bed to Jane actively imagining school mirrors her movement from passive victim to active agent.',
        example: 'The chapter opens with Jane weak and disoriented: "I felt weak and tired." It ends with Jane imagining future: "I should indeed like to go to school." The physical recovery enables psychological hope. Brontë makes embodiment matter—you can\'t plan future while your body is collapsing. Survival precedes agency.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a teenager—let\'s call them Jordan—in an unstable home situation. Maybe they\'re bouncing between relatives after a parent\'s death, or stuck in a family where they\'re constantly told they\'re the problem. They\'ve learned to keep their head down, avoid conflict, and suppress any expectations that things could be different. Then one day, a school counselor, social worker, or even a teacher pulls them aside and asks: "Are you okay? What\'s going on at home?" For the first time, someone with authority isn\'t assuming they know Jordan\'s story—they\'re asking. The counselor listens without judgment. Then comes the revolutionary question: "What do you want? What would help?" Jordan, unused to anyone caring about their preferences, struggles to answer. But the question plants a seed. Maybe there\'s a different living situation. Maybe there\'s a program, a school, a path forward. For the first time, Jordan imagines "elsewhere"—and that imagination becomes a lifeline.',
    
    parallels: [
      '🔹 **Mandatory Reporting and Adult Intervention**: Mr. Lloyd recognizes that Jane\'s "illness" is actually situational trauma. Today, teachers, doctors, and counselors are trained to spot signs of abuse or neglect. Like Mr. Lloyd, these professionals can intervene when they see a child suffering—though modern systems are more formalized (CPS, mandatory reporting) than Victorian ad-hoc advocacy.',
      '🔹 **The Power of Asking, Not Telling**: Modern trauma-informed care emphasizes asking people what they need rather than imposing solutions. Mr. Lloyd doesn\'t say "You\'re going to school"; he asks "Would you like to go?" This respects agency. Contemporary social work, therapy, and education increasingly recognize that giving people choices—even small ones—restores dignity and promotes healing.',
      '🔹 **Access and Class in Healthcare**: Jane gets the apothecary (cheaper care) while rich children get physicians. Today, healthcare access still correlates with class, race, and geography. Quality of care often depends on insurance, zip code, and social capital. The parallel reminds us that Victorian class barriers haven\'t disappeared—they\'ve just been restructured.',
      '🔹 **Hope as Intervention**: Trauma therapy often focuses on helping clients imagine positive futures. Without capacity to envision "better," people can get stuck in survival mode. Mr. Lloyd essentially provides Jane with hope therapy: here\'s a concrete possibility (school) that\'s different from your current situation. Modern interventions recognize that helping people imagine alternatives is therapeutic, not just practical.',
      '🔹 **The Importance of One Caring Adult**: Research on resilience shows that having even ONE adult who believes in you can change life trajectory. Jane has no one—until Mr. Lloyd. He becomes what psychologists call a "protective factor." This parallels modern mentorship programs, Big Brothers Big Sisters, teacher advocacy—recognizing that one caring adult can interrupt cycles of neglect or trauma.'
    ],
    
    discussionPrompt: 'Think about a time when someone in authority actually listened to you—not just heard words, but believed your experience and asked what you wanted. How did that feel? Now think about times when adults made decisions about your life without asking. What\'s the difference? When do we have an obligation to advocate for people (especially young people) who are stuck in harmful situations? What would modern Mr. Lloyds look like—and what barriers stop them from intervening?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '👂',
      name: 'Being Seen and Heard',
      explanation: 'Chapter 2 explored Jane not being seen (mirror dissociation). Chapter 3 introduces being truly seen for the first time: Mr. Lloyd looks at Jane and sees a suffering child, not a "problem" or "wicked thing." He hears her answers and believes them. This thread will recur: Helen Burns will "see" Jane\'s worth at Lowood, Rochester will eventually learn to truly see her (not just desire her), St. John will fail to see her (projecting his needs onto her). The novel asks: What does it mean to truly see another person?'
    },
    {
      emoji: '🗝️',
      name: 'Education as Liberation',
      explanation: 'Mr. Lloyd\'s suggestion of school introduces education as a path to freedom. For Jane, school means: escape from Gateshead, learning (which she loves), social mobility (education opens doors), and community (other students). Throughout the novel, Jane\'s education—books, languages, art—gives her skills, income, and psychological resources. Brontë, herself a governess, understood that education was one of the few paths available for poor women to achieve any independence.'
    },
    {
      emoji: '🌱',
      name: 'Hope and Agency',
      explanation: 'This chapter introduces hope as a survival tool—and agency as a right. Jane begins to imagine that she might have some say in her life. This thread will develop: at Lowood, she\'ll choose to excel; with Rochester, she\'ll choose to leave rather than compromise; with St. John, she\'ll choose herself over duty. The novel charts Jane\'s growing capacity to make choices about her own life—what philosophers call "self-determination."'
    },
    {
      emoji: '⚖️',
      name: 'Justice Through Advocacy',
      explanation: 'Mr. Lloyd advocates for Jane—using his position to push for change she can\'t achieve alone. This introduces a thread about allies: those with power helping those without. Later, we\'ll see Miss Temple advocate for Jane at Lowood, Rochester\'s relationship offer (complicated) agency, and eventually Jane\'s inheritance give her economic power to advocate for herself. The novel explores when outside advocacy is necessary and when it\'s patronizing.'
    },
    {
      emoji: '🏥',
      name: 'Healing and Recovery',
      explanation: 'Jane\'s physical recovery from illness parallels psychological healing beginning. This thread connects to larger questions: How do we heal from trauma? What kind of environments enable healing vs. retraumatization? The novel will show multiple healing spaces (and anti-healing spaces): Miss Temple\'s room at Lowood is healing, the red-room is anti-healing, Thornfield is initially healing until secrets emerge, Moor House offers recovery, etc.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'The Power of Questions',
      question: 'Mr. Lloyd asks Jane questions instead of making statements: "Are you unhappy?" "Would you like to go to school?" Why is asking more powerful than telling in this situation? When does asking questions become a form of respect? Can you think of times when being asked rather than told made a difference in your own life?'
    },
    {
      title: 'Class and Medical Care',
      question: 'Mrs. Reed calls an apothecary for Jane but would call a physician for her own children. Yet Mr. Lloyd, the "cheaper" medical professional, provides better care because he listens and advocates. What is Brontë suggesting about the relationship between social status and actual worth or competence? How does this critique Victorian class systems?'
    },
    {
      title: 'Bessie\'s Kindness',
      question: 'Bessie is tender to Jane during her illness—bringing treats, showing picture books, being gentle. But she returns to complicity with Mrs. Reed\'s system once Jane recovers. Is Bessie\'s temporary kindness meaningful, or does it make her complicity worse because it shows she knows better? What prevents Bessie from being consistently kind?'
    },
    {
      title: 'Jane\'s Hesitation About Hope',
      question: 'When Jane imagines school, she immediately tells herself not to hope too much. She\'s afraid that hoping will make disappointment unbearable. Is this wise self-protection or has trauma taught her not to want things? When does protecting yourself from disappointment become another form of imprisonment?'
    },
    {
      title: 'Defining Agency',
      question: 'When Mr. Lloyd asks "Would you like to go to school?" Jane hesitates because she\'s never been asked what she wants. What does it mean to have agency? Is agency just about making choices, or is it about knowing you have the right to make choices? How do systems (families, schools, societies) grant or deny agency to different people?'
    },
    {
      title: 'The Ethics of Intervention',
      question: 'Mr. Lloyd observes that Jane is suffering and advocates for her removal from Gateshead. He\'s not her parent or guardian—what gives him the right to intervene? When do outsiders have an obligation to speak up about how children are treated? What are the risks of intervention vs. the risks of staying silent?'
    },
    {
      title: 'Hope vs. Realism',
      question: 'Jane doesn\'t know what school is really like, yet she wants to go because anywhere seems better than Gateshead. Is her hope naive, or is imagination of "elsewhere" necessary for survival? Can hope be both realistic and idealistic? What role does imagination play in surviving difficult circumstances?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'being-heard-power',
      title: 'The Revolutionary Power of Being Heard',
      question: 'Why is Mr. Lloyd asking Jane about her feelings so transformative? What does it mean to truly listen to someone who has been systematically silenced?',
      aiResponse: `
**Listening as a Form of Power Restoration**

When Mr. Lloyd asks Jane "Are you unhappy?" and waits for her answer, he\'s doing something revolutionary in Jane\'s experience: treating her as someone whose internal experience matters. This is not just kind—it\'s a form of power restoration.

**The Mechanics of Oppression Through Silencing:**

**Jane Has Been Systematically Told:**
- Her perceptions are wrong ("You\'re manipulative, not genuinely distressed")
- Her feelings don\'t matter ("You should be grateful, not unhappy")
- Her voice has no authority ("Children should be seen, not heard")
- Her suffering is deserved ("You\'re wicked, this is punishment")

**Result:**
Jane has learned that speaking her truth is dangerous. She\'s internalized the message that her feelings are either invalid or unimportant. This is psychological oppression at its most effective—when victims police themselves.

**What Mr. Lloyd Does Differently:**

**1. He Asks, Not Tells:**
- Most adults in Jane\'s life make declarations: "You\'re wicked." "You\'re ungrateful." "You\'re a burden."
- Mr. Lloyd asks: "Are you unhappy?" "What made you ill?" "Would you like to go to school?"
- Questions assume the other person has knowledge and authority about their own experience
- Declarations assume the speaker knows better than the person living the experience

**2. He Waits for Real Answers:**
- When Jane struggles to respond, he doesn\'t fill the silence with his assumptions
- He gives her time to find words for experiences she\'s never been allowed to name
- This patience communicates: "Your answer matters. I\'ll wait."

**3. He Believes Her:**
- When Jane explains she has no family and is dependent on the Reeds, he doesn\'t contradict
- He doesn\'t say "But Mrs. Reed is your aunt" or "You should be grateful"
- He accepts her truth: this is unhappy, and she has reason to feel so

**4. He Acts on What She Tells Him:**
- Listening without action can be performative ("That\'s terrible, anyway...")
- Mr. Lloyd takes what Jane says seriously enough to act: he suggests school
- This shows that her words have weight—they can change things

**Why This Is Transformative:**

**Validation:**

When someone believes your experience, they\'re saying: "Your perception of reality is valid." For Jane, who\'s been told repeatedly that she misunderstands her own life, this is profound. Validation doesn\'t mean agreeing with every feeling—it means acknowledging that feelings are real and legitimate.

**Restored Dignity:**

Listening treats the speaker as a person whose thoughts merit attention. For Jane, who\'s been treated as a problem to be managed, not a person to be understood, being listened to restores human dignity.

**Agency Recognition:**

By asking what Jane wants, Mr. Lloyd implies she has the right to want things. This is radical in a world where Jane has been told her only role is to be grateful and compliant. He\'s recognizing her as a subject (someone who acts) rather than an object (something acted upon).

**Psychological Research Backs This Up:**

**Feeling Heard Predicts:**
- Better mental health outcomes
- Stronger sense of self-worth
- Greater capacity to advocate for oneself
- Resilience in facing future challenges

**Not Being Heard Predicts:**
- Self-doubt and identity confusion
- Difficulty recognizing and expressing needs
- Vulnerability to future manipulation
- Internalized oppression

**Why Victims Often Struggle to Speak:**

**Jane\'s Initial Hesitation Reveals:**

"I felt it impossible to speak." Why?

**Fear of Consequences:**
- Speaking truth has brought punishment before
- Why should this time be different?
- Silence is safer (or has been)

**Learned Helplessness:**
- If no one has listened before, why bother speaking?
- "I don\'t know" becomes automatic response
- You stop consulting your own feelings

**Loss of Self-Trust:**
- When told repeatedly your perceptions are wrong, you doubt yourself
- "Am I unhappy, or am I just ungrateful like they say?"
- You lose the ability to name your own experience

**Language Gaps:**
- Experiences need words, and Jane hasn\'t been given vocabulary for her suffering
- How do you explain systematic dehumanization when you\'re 10?
- Mr. Lloyd\'s questions help Jane find language

**The Healing Process:**

**Step 1: Safe Space**
- Mr. Lloyd\'s gentle tone and patience create safety
- Jane tests the waters: small answers first, bigger truths later

**Step 2: Naming Experience**
- "Are you unhappy?" gives Jane permission to name her feeling
- Naming is powerful—unnamed feelings are overwhelming and confusing
- Named feelings can be addressed

**Step 3: Validation**
- "Would you like to go to school?" implies Jane\'s unhappiness is legitimate
- If change is possible, then her suffering isn\'t inevitable or deserved

**Step 4: Agency**
- "Would you like" asks for her preference
- This restores choice—the opposite of victimhood

**Modern Parallels:**

**Trauma-Informed Care:**

Contemporary therapy emphasizes:
- Believing survivors without requiring "proof"
- Asking about experiences instead of assuming
- Centering the person\'s own narrative
- Restoring choice and control

**This is exactly what Mr. Lloyd does in 1847.**

**Advocacy in Action:**

Effective advocates (teachers, counselors, social workers, mentors):
- Ask open-ended questions
- Listen without interrupting or correcting
- Believe what they\'re told unless there\'s clear reason not to
- Act on what they learn

**For Discussion:**

Think about a time when someone really listened to you—not just heard words but believed your experience. How did that change things? What\'s the difference between someone listening to respond (already thinking about what they\'ll say) versus listening to understand (trying to grasp your reality)?

Why is it so hard to listen well? What barriers prevent us from truly hearing people, especially those with less power than us?

**The Takeaway:**

Being heard is not just emotional comfort—it\'s a political act. When we listen to marginalized voices, we\'re acknowledging their authority over their own experiences. When we silence or dismiss them, we\'re maintaining systems of oppression. Mr. Lloyd\'s listening is revolutionary because it treats a powerless child as someone worth hearing—and that recognition changes everything.
      `
    },
    {
      id: 'hope-as-survival',
      title: 'Hope as Cognitive Tool: Why "Elsewhere" Matters',
      question: 'Why is the possibility of school so powerful for Jane, even though she knows nothing about schools? What does hope do psychologically?',
      aiResponse: `
**Hope Is Not Naive—It\'s a Survival Strategy**

When Jane learns she might go to school, she gains something that has kept humans alive through impossible circumstances: the ability to imagine "elsewhere." This isn\'t wishful thinking—it\'s a cognitive tool that makes unbearable situations bearable.

**The Psychology of Hope:**

**What Hope Actually Is:**

Hope isn\'t just feeling optimistic. Psychologically, hope involves:
1. **Goal-directed thinking** (having a vision of future)
2. **Pathways thinking** (imagining routes to that future)
3. **Agency thinking** (believing you can take those routes)

Jane develops all three:
- Goal: Leave Gateshead, go to school
- Pathway: Mr. Lloyd\'s suggestion creates a concrete possibility
- Agency: "I should indeed like to go to school" (her choice matters)

**Why Hope Matters for Trauma Survivors:**

**Without Hope:**
- Suffering feels endless and meaningless
- Each day is about survival, not progress
- Trauma becomes your identity, not an experience you\'re moving through
- Risk of learned helplessness (why try if nothing changes?)

**With Hope:**
- Current suffering becomes temporary ("not forever")
- Each day is one day closer to change
- You\'re someone with a future, not just a past
- Maintains motivation to persist

**Jane\'s Situation Without Hope:**

Before Mr. Lloyd\'s visit, Jane had:
- No family who wanted her
- No place that felt safe
- No visible path to different circumstances
- No reason to believe adulthood would be different

This is recipe for despair. Some trauma survivors in these situations:
- Develop severe depression
- Self-harm as way to externalize internal pain
- Accept abusers\' narrative ("I deserve this")
- Lose will to persist

**The School as "Elsewhere":**

**Why School Specifically Matters:**

**1. Concrete, Not Abstract:**
- Not just "things will get better someday"
- A specific place, with specific purpose
- Jane can imagine: buildings, lessons, other children
- Concrete hope is more sustaining than vague hope

**2. Socially Acceptable:**
- Jane can think about school without feeling she\'s wishing for impossible things
- This isn\'t fantasy (becoming a princess)—it\'s realistic
- Reality makes hope feel achievable

**3. Offers Identity Beyond "Orphan":**
- At school, Jane would be a "student," not "unwanted dependent"
- New identity, new role, new possibilities
- Chance to be valued for something (learning) rather than despised for existence

**4. Contains Multiple Hopes:**
- Learning (Jane loves reading)
- Community (other children—potential friends)
- Escape (physical removal from Gateshead)
- Future (education leads to work, independence, adulthood)

**Jane\'s Internal Conflict About Hope:**

**Jane Both Wants and Fears Hope:**

"I should indeed like to go to school," she says—but immediately:
- Doubts it will happen
- Tells herself Mrs. Reed just wants to be rid of her
- Warns herself not to imagine too much

**Why This Conflict?**

**Hope Hurts When Crushed:**
- If you allow yourself to hope and then hope is destroyed, the pain is severe
- Safer to expect nothing than to hope and be disappointed
- This is self-protective pessimism born from trauma

**But Hope Also Refuses to Die:**
- Despite trying to suppress it, Jane keeps thinking about school
- Imagination is powerful—once planted, hard to uproot
- The seed of possibility has taken hold

**The Science of Hope and Resilience:**

**Research Shows:**

**High-Hope Individuals:**
- Set goals and believe they can achieve them
- Experience less depression and anxiety
- Perform better academically and professionally
- Recover faster from setbacks
- Have better physical health

**Low-Hope Individuals:**
- May struggle with goal-setting (why try?)
- Higher rates of depression and anxiety
- More vulnerable to learned helplessness
- Physical health effects (stress, immune suppression)

**Key Finding: Hope Can Be Learned**

People aren\'t born high-hope or low-hope. Hope develops through:
- Experiences of efficacy (taking action that works)
- Supportive environments (people who believe in you)
- Concrete examples of change (seeing that different futures are possible)

**Mr. Lloyd provides all three.**

**Hope in Trauma Recovery:**

**Modern Trauma Therapy Often Includes:**

**Future-Oriented Interventions:**
- Helping clients imagine positive futures
- Creating concrete goals (not just "feel better" but specific achievements)
- Breaking large goals into small steps
- Celebrating progress

**Why This Works:**
- Trauma traps people in the past (flashbacks, rumination)
- Hope pulls attention toward future
- This doesn\'t erase past but prevents it from colonizing future

**Jane Gets Trauma-Informed Care in 1847:**

Mr. Lloyd essentially provides:
1. Validation (your suffering is real)
2. Concrete alternative (school exists)
3. Agency (you can choose this)
4. Pathway (I\'ll help make it happen)

**The Difference Between Hope and Denial:**

**Denial:** "Everything is fine" (ignoring reality)
**Hope:** "Things are bad now, but they can change" (acknowledging reality while imagining change)

Jane doesn\'t deny her suffering—she hopes for escape from it. This is realistic hope, not naive optimism.

**"Elsewhere" as Psychological Space:**

**The Power of Imagining Elsewhere:**

Even before school becomes real, the possibility helps Jane survive:
- When Mrs. Reed is cruel: "Not forever"
- When cousins bully her: "Someday I\'ll leave"
- When Bessie is harsh: "This is temporary"

The school might not happen, but the **idea of elsewhere** has already changed Jane\'s psychology. She now knows:
- Her current situation is not inevitable
- Change is possible
- Other lives exist beyond this one

**This Knowledge Is Unshakeable:**

Even if school fell through, Jane would now know: "Elsewhere exists. I can get there." This cognitive shift—from "This is all there is" to "There are other possibilities"—is permanent and powerful.

**For Discussion:**

Have you ever been in a situation that felt endless—and then someone showed you a way out, or at least the possibility of a way out? How did that change your experience of the present situation?

When does hope become harmful? Is there such a thing as "false hope," and how do we distinguish it from realistic hope?

**The Takeaway:**

Hope is not naive optimism—it\'s a cognitive tool that helps humans endure suffering by maintaining vision of a different future. For Jane, the possibility of school transforms her from passive victim to someone with a future. This doesn\'t remove her current suffering, but it prevents that suffering from becoming her entire identity. The ability to imagine "elsewhere" is a form of psychological freedom even while physically imprisoned—and sometimes, that mental freedom is what keeps people alive until physical freedom becomes possible.
      `
    },
    {
      id: 'agency-and-asking',
      title: 'Agency Through Asking: Why "Would You Like?" Is Revolutionary',
      question: 'Why is Mr. Lloyd asking "Would you like to go to school?" more powerful than just telling Jane she\'s going? What does it mean to have agency?',
      aiResponse: `
**The Difference Between Being Told and Being Asked**

When Mr. Lloyd asks "Would you like to go to school?" rather than announcing "You\'re going to school," he\'s performing an act of profound respect: treating Jane as someone whose preferences matter. This question is revolutionary because it assumes Jane has agency—and that assumption begins to make it real.

**What Is Agency?**

**Definition:**
Agency is the capacity to act independently and make free choices about one\'s own life. It\'s not just about making decisions—it\'s about having the recognized **right** to make decisions.

**Key Components:**
1. **Autonomy** (independence from controlling influences)
2. **Intentionality** (acting with purpose based on your values/desires)
3. **Self-efficacy** (believing your actions can affect outcomes)
4. **Recognition** (others acknowledging your right to make choices)

**Jane Lacks All Four:**
1. She\'s completely dependent on the Reeds
2. Her desires have been systematically ignored or punished
3. Nothing she does changes how she\'s treated
4. No one recognizes her as having legitimate preferences

**What Denying Agency Looks Like:**

**Jane\'s Life Before Mr. Lloyd:**

Every aspect of Jane\'s existence has been determined by others:
- Where she lives (Gateshead, not chosen)
- How she\'s treated (cruelly, no recourse)
- What she eats (leftovers, last servings)
- Where she goes (red-room, locked in)
- Who she associates with (Reed children who despise her)

**More Insidiously:**
She\'s been told her preferences don\'t matter:
- "You should be grateful" (not "Are you happy?")
- "You\'re wicked" (not "Why did you do that?")
- "You have no right to complain" (not "How do you feel?")

**Result:**
Jane learns that she\'s not the kind of person who gets to want things. Her role is to accept, comply, endure—never to choose.

**Why Asking Restores Agency:**

**The Question "Would You Like?" Assumes:**

1. **You Have Preferences:**
- Some people like some things; others like other things
- Your preferences are valid, even if they differ from mine
- Your "like" or "dislike" is information worth knowing

2. **Your Preferences Matter:**
- I\'m asking because your answer will affect what happens
- I won\'t ignore or override what you tell me
- Your voice has weight in decision-making

3. **You Have the Right to Choose:**
- This isn\'t just gathering information
- I\'m offering you actual choice
- You can say yes or no

4. **I Will Respect Your Answer:**
- I won\'t punish you for "wrong" answer
- There is no "wrong" answer—only your true preference
- I\'m prepared to act on what you tell me

**Contrast with Being Told:**

**"You\'re Going to School":**
- Might be kind (removing Jane from harmful situation)
- Might be best for Jane objectively
- BUT: Still treats Jane as object of action, not subject
- She\'s being acted upon, not acting

**"Would You Like to Go to School?":**
- Gives Jane voice in what happens to her
- Treats her as person with authority over own life
- She becomes participant in decision, not just recipient of others\' decisions

**Why This Distinction Matters:**

Even if Jane would objectively benefit from school, the difference between being sent and choosing to go has profound psychological effects.

**Being Sent:**
- "They wanted me gone"
- "I had no say"
- "Things happen to me"
- Reinforces powerlessness

**Choosing to Go:**
- "I wanted change"
- "I made a choice"
- "I take action"
- Begins to build agency

**Jane\'s Struggle to Answer:**

**Why Jane Hesitates:**

When asked what she wants, Jane "reflected"—paused, struggled. Why?

**1. Unfamiliarity:**
- She\'s never been asked this before
- She doesn\'t have practice consulting her own desires
- The question itself is disorienting

**2. Distrust:**
- Is this a trap?
- Will she be punished for the "wrong" answer?
- Is he testing her?

**3. Loss of Self-Knowledge:**
- When your preferences are consistently ignored, you stop knowing what you want
- You lose the habit of checking in with yourself
- "What do I want?" becomes genuinely confusing

**4. Fear of Hoping:**
- If she says "yes" and then it doesn\'t happen, the disappointment will be crushing
- Safer to not want things
- Desire itself feels dangerous

**The Power of "I Should Indeed Like to Go":**

**Jane\'s Answer Is Significant:**

Not: "Yes, sir" (compliant, no agency)
Not: "If you think it best" (deferring to his judgment)
But: **"I should indeed like to go to school"** (expressing her own desire)

**This Is Jane Claiming Agency:**
- "I" (subject, actor)
- "should...like" (expressing preference)
- "indeed" (emphasis, certainty)
- She\'s consulting her internal experience and reporting it

**This may be the first time Jane has:**
- Checked in with her own feelings
- Stated a preference to an adult
- Expected that preference to be respected

**Developmental Psychology of Agency:**

**How Children Develop Agency:**

**Healthy Development:**
1. **Infancy:** Caregiver responds to needs (baby cries, adult feeds)
2. **Toddlerhood:** Child explores, caregiver provides safe boundaries ("You can choose this or this")
3. **Childhood:** Increasing autonomy with guidance ("What do you think?" "Why did you choose that?")
4. **Adolescence:** Major decisions with support ("Where do you want to apply?" "What matters to you?")
5. **Adulthood:** Full autonomy with interdependence

**At Each Stage:**
Adults asking children about their experiences, preferences, and reasoning builds:
- Self-awareness (knowing what you think/feel)
- Decision-making skills (practice choosing)
- Self-trust (my judgment is valid)
- Self-efficacy (I can affect outcomes)

**Jane\'s Disrupted Development:**

Jane has been denied these developmental experiences:
- Her needs weren\'t responded to (no one cares if she\'s hungry, cold, sad)
- Her preferences weren\'t asked about (eat what you\'re given, go where you\'re told)
- Her reasoning wasn\'t engaged with ("Don\'t answer back")
- Her autonomy wasn\'t encouraged (compliance is only virtue)

**Mr. Lloyd Provides What\'s Been Missing:**

He treats 10-year-old Jane as someone who:
- Has internal experiences worth knowing about
- Can think and make judgments
- Deserves to have preferences respected

**Agency in Adulthood:**

**Jane\'s Journey Through the Novel:**

This chapter is Jane\'s first taste of agency. Throughout the novel, she\'ll fight for more:

**Lowood:** Chooses to excel academically, chooses to become teacher
**Thornfield:** Chooses to stay, chooses to love Rochester, **chooses to leave** when he lies
**Moor House:** Chooses not to marry St. John despite pressure
**Return:** Chooses to return to Rochester on her own terms

**The Novel\'s Central Question:**

Can a poor, orphaned woman in Victorian England have agency? The answer is: she can claim it, but she\'ll have to fight for it every step of the way. The novel is Jane insisting: **I am a subject, not an object. I have the right to choose my life.**

**For Discussion:**

When have you been told what\'s "for your own good" without being asked what you want? Even if the decision was objectively right, how did it feel to not be consulted? What\'s the difference between someone making a good choice for you versus helping you make that choice yourself?

When is it appropriate for adults to override children\'s choices? Where\'s the line between protection and controlling? How do we give young people developmentally appropriate agency?

**The Takeaway:**

Agency isn\'t just about making decisions—it\'s about being recognized as the kind of person who has the right to make decisions. Mr. Lloyd\'s question doesn\'t just gather information; it performs respect. By asking Jane what she wants, he\'s telling her: "You are someone whose desires matter. You have authority over your own life. Your voice counts." This recognition begins to make agency real for Jane—and that psychological shift will carry her through the rest of her life.
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Power of Questions: Writing Dialogue That Reveals Character',
      description: 'Write a 2-3 page dialogue between two characters where one has power and the other doesn\'t (teacher/student, parent/child, boss/employee, doctor/patient, etc.). Show how the powerful character either respects or denies the less powerful character\'s agency through the questions they ask (or don\'t ask). Use only dialogue and minimal action tags—let the conversation itself reveal the power dynamics. Consider: What kinds of questions grant dignity vs. what kinds of questions are actually veiled commands? How do people with less power respond to different types of questions?',
      purpose: 'This exercise teaches students that dialogue is more than exchanging information—it\'s a tool for revealing power dynamics, character values, and relationships. Students practice showing (through speech patterns) rather than telling, and develop sensitivity to how language can either respect or diminish others\' agency.'
    },
    
    activity: {
      title: 'Hope Map: Visualizing Pathways from Present to Future',
      description: 'Have students create "Hope Maps" for Jane or for themselves. Draw a timeline with "Now" on the left and "Future Goal" on the right. What\'s the current situation? What\'s the hoped-for future? Now map the pathway: What specific steps could get from here to there? What resources are needed? Who might help? What obstacles exist? For Jane: Now (Gateshead, unhappy) → Future (School, learning, escape). Pathway: Mr. Lloyd\'s advocacy, Mrs. Reed\'s agreement to send her, actual acceptance to school, transportation, etc. Students identify how hope requires both vision (goal) and pathway (steps). Discuss: What makes some hopes realistic vs. unrealistic? How do we break big goals into achievable steps?',
      materials: 'Large paper, markers, timeline template (optional), prompts about goals and pathways'
    },
    
    crossCurricular: {
      title: 'Victorian Education and Social Mobility',
      description: 'Partner with history and sociology classes to explore education as a path to social mobility—then and now. History class covers: Victorian education systems (charity schools, governesses, class-based access), women\'s limited opportunities, and how education was both liberation and control for poor children. Sociology class examines: Modern education and social mobility, college access and class, student debt and economic outcomes, who gets to pursue education. English class reads Chapter 3 and analyzes: Why school matters so much to Jane, what education represents symbolically, how literacy and learning function in the novel. Students synthesize: How has the relationship between education and opportunity changed? Who still lacks access to education today and why?',
      subjects: ['History', 'Sociology', 'Economics', 'Education Studies']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Comparing Types of Help: Bessie\'s Kindness vs. Mr. Lloyd\'s Advocacy',
    prompt: 'Both Bessie and Mr. Lloyd show kindness to Jane in Chapter 3, but their interventions are fundamentally different. Analyze the distinction between temporary comfort and structural advocacy. Bessie brings Jane treats, shows her picture books, and is gentle during illness—but doesn\'t challenge the system that harms Jane. Mr. Lloyd asks questions, listens, and advocates for Jane\'s removal from Gateshead—attempting to change Jane\'s circumstances, not just make them more bearable. Your task: Develop a framework for understanding different types of help and apply it to evaluate which kind of intervention is more meaningful for people in oppressive situations.',
    
    guidingQuestions: [
      'What\'s the difference between comfort and liberation? Between kindness and justice? Are they opposed, or can they work together?',
      'Bessie has less power than Mr. Lloyd (she\'s a servant, he\'s a professional). Does her lack of power excuse her failure to challenge the system? What could she have done differently, if anything?',
      'Is temporary comfort (Bessie\'s approach) worthless if it doesn\'t address root causes? Or does it have value even if the larger system stays in place? When is comfort enough, and when is it insufficient?',
      'Mr. Lloyd uses his professional status to advocate for Jane. Is this paternalistic (using power to make decisions for others), or is it appropriate use of privilege (using power to amplify others\' voices)? How do we tell the difference?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down what Bessie does vs. what Mr. Lloyd does. List specific actions. Identify what each person has power to change and what they don\'t. Consider: What motivates each person? What risks would they face for doing more? What impact does each intervention have on Jane—short-term and long-term?',
      evaluate: 'Using your framework (which you\'ll need to articulate), assess both interventions. Consider criteria like: immediate impact vs. long-term change, treating symptoms vs. addressing causes, working within systems vs. challenging systems, empowerment vs. dependence. Which approach is "better"? Or is this the wrong question?',
      synthesize: 'Connect this analysis to modern contexts: charity vs. justice work, individual kindness vs. policy change, allyship vs. advocacy. When people want to help others in difficult situations, what kinds of help are most meaningful? How do people with privilege or power use it ethically? What obligations do we have to challenge systems that harm others, even when challenging those systems is costly?'
    },
    
    expectedDepth: 'Strong responses will: (1) Articulate a clear framework for evaluating different types of help/intervention; (2) Apply that framework consistently to both Bessie and Mr. Lloyd, using specific textual evidence; (3) Acknowledge complexity—neither approach is entirely wrong or right, and both have limitations; (4) Address power dynamics explicitly—who can do what based on their position; (5) Connect to contemporary debates about charity vs. justice, allyship, and ethical use of privilege/power; (6) Show awareness that "help" can be complicated—sometimes reinforcing dependency, sometimes truly empowering. This is an ethical analysis using literary characters as case studies.',
    
    classroomApplication: 'This works well as: A structured essay (3-4 pages), A Socratic seminar with prepared opening statements from different positions, A debate (Bessie\'s approach vs. Mr. Lloyd\'s approach), A group project where different groups analyze different characters who "help" Jane throughout the novel (Miss Temple, Helen Burns, Diana and Mary Rivers, etc.) and present findings. Time: 2-3 class periods. Can connect to current events discussions about different approaches to social change.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature\'s importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(3),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🏫',
    title: 'Next Time: Chapter 4 — The Decision to Leave',
    preview: 'Weeks pass after Mr. Lloyd\'s visit. Jane waits, hoping but trying not to hope too much. Then one day, Mrs. Reed makes the announcement: Jane will go to Lowood School. But before Jane can leave Gateshead, she must endure more cruelty—and finally, she does something she\'s never done before. She tells Mrs. Reed exactly what she thinks of her. It\'s an explosion of long-suppressed truth, and it changes Jane forever. Get ready for one of literature\'s most satisfying moments of rebellion.',
    hookQuestion: 'What happens when someone who\'s been silent for years finally speaks their truth? Will Jane\'s honesty bring consequences or liberation? And what awaits her at the mysterious Lowood School?'
  }
}

