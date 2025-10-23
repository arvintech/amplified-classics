/**
 * JANE EYRE - CHAPTER 2
 * 
 * Locked in the red-room where her uncle died, Jane experiences 
 * psychological terror that will haunt her throughout the novel
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter2: ChapterData = {
  number: 2,
  title: 'The Red-Room',
  
  readingTime: 15,
  pages: 8,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Following her fight with John Reed, Jane is dragged to the red-room—the death chamber where her uncle died—and locked in as punishment, leading to a psychological breakdown that will shape the rest of her life.',
    
    full: [
      'After striking back at John Reed in Chapter 1, Jane is forcibly removed from the nursery by servants Bessie and Miss Abbott. They drag her upstairs to the red-room, a large, rarely used spare chamber where Mr. Reed (Jane\'s late uncle and only protector) died nine years earlier. The room is oppressively decorated in crimson and scarlet, with white accents that suggest death shrouds and corpses. Everything about the space is designed to intimidate—and it does.',
      
      'Locked inside, Jane\'s emotions shift from defiance to terror. She examines her surroundings: the massive bed with blood-red curtains, the crimson carpet, the white pillows "piled up like a tabernacle." She looks at herself in the mirror and experiences dissociation—she doesn\'t recognize her own reflection, seeing instead a "strange little figure" with glittering eyes, "half fairy, half imp." She reflects on the injustice of her situation: she\'s an orphan, dependent on relatives who despise her, punished for defending herself against real violence.',
      
      'As evening falls and darkness gathers, Jane becomes increasingly afraid. She remembers that her uncle died in this very room, and Bessie has told her that ghosts might return to punish wicked children. When she sees a light moving across the wall—possibly moonlight, possibly a lantern, possibly nothing—her terror overwhelms her. Believing it might be her uncle\'s spirit, Jane screams in genuine panic. She experiences what appears to be a panic attack or seizure: racing heart, hot head, rushing sounds, suffocation, desperate attempt to escape.',
      
      'No servant comes immediately to help. When Miss Abbott and Bessie finally arrive, followed by Mrs. Reed, Jane is in complete hysterics. But Mrs. Reed shows no compassion whatsoever. She accuses Jane of performing "tricks" to escape punishment and, despite Jane\'s obvious medical distress, orders her locked back in the room. Jane loses consciousness. The chapter ends with Jane drifting in and out of awareness, experiencing fever and what Victorians called "brain fever"—a psychosomatic illness caused by extreme psychological trauma. This single night will haunt Jane for the rest of her life and becomes the catalyst for her eventual departure from Gateshead.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Color Symbolism',
      definition: 'The use of specific colors to represent ideas, emotions, or psychological states beyond their literal appearance.',
      context: 'The red-room is dominated by crimson, scarlet, and red furnishings—"crimson cloth," "scarlet curtain," "deep red damask," "cushions of the same hue." Red appears repeatedly, creating an oppressive atmosphere that reflects blood, violence, anger, passion, and death.',
      whyItMatters: 'Brontë makes the room itself a character that psychologically attacks Jane. Red symbolizes the violence done to Jane (blood from John\'s attack), the anger surrounding her, the passion she must suppress, and death (the room as tomb). The color becomes environmental trauma.'
    },
    {
      term: 'Gothic Fiction',
      definition: 'A literary genre featuring dark, mysterious settings, psychological terror, supernatural elements (real or imagined), and exploration of fear, isolation, and the uncanny.',
      context: 'The red-room scene is classic Gothic: a death chamber, possible ghost, darkness gathering, an innocent victim trapped, psychological horror that might be supernatural or might be madness. The ambiguity between real ghost and hallucination is quintessentially Gothic.',
      whyItMatters: 'Brontë uses Gothic conventions not just for atmosphere but to externalize Jane\'s internal psychological state. The "ghost" represents trauma made visible. This chapter established Jane Eyre as both Gothic novel and psychological realism—a revolutionary combination.'
    },
    {
      term: 'Dissociation',
      definition: 'A psychological defense mechanism where a person feels disconnected from their own body, thoughts, or identity, often in response to trauma.',
      context: 'When Jane looks in the mirror, she doesn\'t recognize herself: "All looked colder and darker in that visionary hollow than in reality: and the strange little figure there gazing at me...had the effect of a real spirit." She sees herself as "other," not human.',
      whyItMatters: 'This is one of literature\'s earliest and most accurate depictions of dissociation. Jane\'s abuse has been so severe that she can\'t see herself clearly. She\'s internalized society\'s message that orphans are somehow less than human. This identity crisis will drive her search for selfhood.'
    },
    {
      term: 'Somatization',
      definition: 'The manifestation of psychological distress as physical symptoms—when mental trauma causes real bodily illness.',
      context: 'Jane\'s terror causes physical collapse: "My heart beat thick, my head grew hot...something seemed near me; I was oppressed, suffocated." She experiences "a species of fit," loses consciousness, develops fever, and suffers days of illness with "a weight on my chest."',
      whyItMatters: 'Brontë shows that psychological trauma causes real physical damage. Jane\'s body proves her suffering is genuine, not manipulative. This medical accuracy was extraordinary for 1847—and validates that Jane\'s trauma is serious enough to require intervention (eventually leading to Mr. Lloyd\'s visit).'
    },
    {
      term: 'Institutional Betrayal',
      definition: 'Trauma that occurs within an institution or system that should provide care and protection, made worse because those who should help are the ones who harm.',
      context: 'Jane screams in genuine terror and possible medical emergency. The servants hear but don\'t come immediately. When Mrs. Reed arrives, she accuses Jane of deceit, boxes her ears (hits her), and locks her back in despite obvious distress. The entire household fails Jane.',
      whyItMatters: 'This is not just one bad adult—it\'s a systemic failure where every person in authority (Mrs. Reed, servants, the social structure) protects the powerful and harms the vulnerable. Jane learns that institutions will not save her, planting the seeds of her fierce independence.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Jane Eyre',
      development: 'This chapter reveals the psychological depth of Jane\'s trauma and the beginnings of her complex character. We see her progression from defiant anger (she still believes she was right to fight back) to reflection (analyzing her situation rationally) to terror (childhood fears overwhelming her) to complete psychological breakdown (panic attack, dissociation, physical collapse). The mirror scene is particularly significant—Jane doesn\'t recognize herself, seeing instead a ghostly "strange little figure" that appears "half fairy, half imp." This dissociation shows how deeply abuse has damaged her self-image; she literally cannot see herself as fully human. Her physical illness (fever, unconsciousness, days of recovery) demonstrates that her suffering is not performance but genuine trauma. Paradoxically, this breaking point will become her turning point: the severity of her illness forces outside intervention (Mr. Lloyd, the apothecary) and ultimately leads to her escape from Gateshead. This chapter plants the seed of Jane\'s independence—she learns that no one will save her, so she must save herself.',
      keyTrait: {
        emoji: '🔥',
        text: 'Traumatized but Unbroken'
      }
    },
    {
      name: 'Mrs. Reed',
      development: 'Mrs. Reed\'s cruelty reaches its most dangerous form in this chapter. When Jane screams in obvious terror—experiencing what appears to be a panic attack or seizure—Mrs. Reed shows not an ounce of compassion. She accuses Jane of performing "tricks" to escape punishment: "She has screamed out on purpose...It is only a trick." This reveals Mrs. Reed\'s fundamental inability (or refusal) to see Jane as a suffering child. Even faced with medical emergency (Jane loses consciousness, develops fever), Mrs. Reed\'s first instinct is punishment, not care. She boxes Jane\'s ears (hits her head after a panic attack) and orders her locked back in the trauma space. This is not just unkindness—it\'s willful harm. Mrs. Reed genuinely believes Jane is manipulative and deceitful, revealing a worldview where orphans are inherently untrustworthy. This chapter transforms Mrs. Reed from merely unkind guardian to active abuser whose actions could have killed Jane.',
      keyTrait: {
        emoji: '❄️',
        text: 'Willfully Cruel'
      }
    },
    {
      name: 'Bessie Lee',
      development: 'Bessie occupies an uncomfortable middle ground in this chapter—she shows glimpses of sympathy but ultimately enables Mrs. Reed\'s abuse. She physically drags Jane to the red-room and helps lock her in, but her face shows "sorrowful dismay" (unlike Miss Abbott\'s stern judgment). When Jane is in distress, Bessie hesitates but doesn\'t intervene. After Mrs. Reed leaves, Bessie delivers "a homily of an hour\'s length" proving Jane is "the most wicked and abandoned child," but this might be performative—fulfilling her duty while perhaps doubting it. Bessie represents institutional complicity: she\'s not cruel by nature, but the power structure requires her to obey Mrs. Reed\'s orders even when they harm a child. Her inability to advocate for Jane, despite evident discomfort, shows how systems of power silence even those with some sympathy.',
      keyTrait: {
        emoji: '😟',
        text: 'Conflicted Bystander'
      }
    },
    {
      name: 'Miss Abbott',
      development: 'Miss Abbott is more rigid and judgmental than Bessie, fully buying into the Victorian narrative that orphans are morally suspect and should be grateful for any care. She lectures Jane: "You ought to be aware, miss, that you are under obligations to Mrs. Reed" and calls her "naughty" and "ungrateful." Unlike Bessie, Abbott shows no sympathy—she genuinely believes Jane deserves punishment. She represents the social and religious ideologies that justified cruelty to dependent children: orphans should be humble, grateful, and accept whatever treatment they receive. Her moral certainty makes her complicit in a way that\'s perhaps more insidious than Mrs. Reed\'s obvious cruelty—Abbott thinks she\'s being righteous.',
      keyTrait: {
        emoji: '⚖️',
        text: 'Righteous Judgment'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotations with analysis
  // ===================================================================
  quotes: [
    {
      text: 'Mr. Reed had been dead nine years: it was in this chamber he breathed his last; here he lay in state; hence his coffin was borne by the undertaker\'s men; and, since that day, a sense of dreary consecration had guarded it from frequent intrusion.',
      analysis: 'Brontë establishes that the red-room is not merely a room but a death chamber, a tomb, a space marked by mortality. The phrase "dreary consecration" is brilliant—it\'s holy (consecrated) but in a way that brings despair, not comfort. This space has been "guarded from frequent intrusion" precisely because it represents death. Locking a child in a tomb as punishment is psychological torture, and Brontë makes sure we understand the Gothic horror of this choice.'
    },
    {
      text: 'I was a discord in Gateshead Hall: I was like nobody there...If they did not love me, in fact, as little did I love them.',
      analysis: 'This quote reveals Jane\'s painful self-awareness. She understands she doesn\'t belong ("discord"), doesn\'t resemble anyone ("like nobody there"), and has given up hoping for love. The final clause—"as little did I love them"—shows Jane reclaiming some dignity through mutual rejection. If she can\'t be loved, she won\'t love in return. This defensive mechanism protects her psychologically but also demonstrates how abuse destroys the possibility of family bonds. It\'s heartbreaking and defiant simultaneously.'
    },
    {
      text: 'All looked colder and darker in that visionary hollow than in reality: and the strange little figure there gazing at me, with a white face and arms specking the gloom, and glittering eyes of fear moving where all else was still, had the effect of a real spirit.',
      analysis: 'This is one of English literature\'s most powerful depictions of dissociation and identity crisis. Jane looks in the mirror and doesn\'t recognize herself—she sees a "strange little figure," ghostly, not quite human. The mirror doesn\'t reflect reality accurately ("colder and darker...than in reality"), suggesting her perception is distorted by trauma. She\'s internalized society\'s view that she\'s "other," somehow less than human. The "glittering eyes of fear" belong to her, but she sees them as belonging to a spirit. This is psychological breakdown made visible—trauma so severe that self-recognition fails.'
    },
    {
      text: 'My heart beat thick, my head grew hot; a sound filled my ears, which I deemed the rushing of wings; something seemed near me; I was oppressed, suffocated: endurance broke down; I rushed to the door and shook the lock in desperate effort.',
      analysis: 'Brontë describes a panic attack with clinical accuracy: tachycardia (racing heart), hyperthermia sensation (hot head), auditory hallucination (rushing sound), sense of presence, feeling of being crushed (oppressed), inability to breathe (suffocated), and desperate attempt to escape. This medical precision—in 1847, before "panic attack" was a diagnostic term—demonstrates Brontë\'s remarkable understanding of trauma physiology. Jane\'s body is responding to overwhelming psychological threat. The phrase "endurance broke down" is perfect—she\'s been enduring abuse for years, and this moment breaks her completely.'
    },
    {
      text: 'She boxed both my ears, and then left me without a word. Bessie supplied the hiatus by a homily of an hour\'s length, in which she proved beyond a doubt that I was the most wicked and abandoned child ever reared under a roof.',
      analysis: 'The gap between Jane\'s needs and the adults\' responses couldn\'t be wider. Jane has just experienced a medical emergency—panic attack, possible seizure, loss of consciousness—and the response is violence (boxing her ears, hitting her head) and a moral lecture about her wickedness. "Boxed both my ears" is physical abuse following psychological trauma. The sermon about her being "most wicked and abandoned" is emotional abuse. The dry tone ("supplied the hiatus") shows Jane\'s developing psychological defense: dark humor as survival mechanism. This quote captures institutional failure perfectly—systems that exist to protect children instead harm them.'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS (Intelligence Amplifier Analysis)
  // Deep dive into themes and literary techniques
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'The Body Keeps the Score: Trauma and Somatization',
        explanation: 'This chapter is a masterclass in how psychological trauma manifests physically. Jane\'s terror causes immediate physiological responses: "My heart beat thick, my head grew hot; a sound filled my ears...I was oppressed, suffocated." She experiences what Victorian medicine called "a species of fit"—likely a panic attack with possible seizure. She loses consciousness. She develops fever and illness lasting days, with "a heavy weight on my chest" (classic anxiety symptom). Brontë understood something that wouldn\'t be clinically named until the 20th century: trauma lives in the body. Jane\'s physical collapse proves her suffering is real, not performed—her body testifies when adults refuse to listen. This physiological accuracy makes the chapter remarkable: Brontë wrote in 1847 what trauma therapists now teach about the somatic effects of psychological terror.'
      },
      {
        name: 'Gothic Horror as Externalized Psychology',
        explanation: 'The "ghost" Jane sees—the light moving on the wall, possibly her uncle\'s spirit—operates on two levels simultaneously. On the Gothic level, it might be real; Victorian readers would have believed in ghosts. On the psychological level, it\'s a hallucination born from terror, darkness, sensory deprivation, and trauma. Brontë keeps this ambiguous intentionally. The genius is that both interpretations work: the ghost is Jane\'s psychological state made visible. Her external environment (the death chamber) reflects her internal state (feeling like she\'s dying). The red room itself becomes a Gothic antagonist—the space attacks her psychologically. Brontë pioneered the use of Gothic tropes not just for atmospheric horror but as metaphors for psychological truth. The horror is both supernatural and internal, both Victorian Gothic and modern psychology.'
      },
      {
        name: 'Institutional Betrayal and Systemic Cruelty',
        explanation: 'Jane\'s trauma is compounded because those who should protect her are the ones who harm her—and everyone else enables it. Mrs. Reed orders the imprisonment, Bessie and Abbott carry it out, servants hear her scream but don\'t respond quickly, and when they do, the response is more punishment. This is institutional betrayal: trauma within systems meant to provide care. Mrs. Reed runs the household; her worldview shapes everyone\'s behavior. She genuinely believes Jane is manipulative, so Jane\'s terror must be "tricks." The servants might privately doubt this, but they don\'t intervene. The system protects those with power (Mrs. Reed) and harms the vulnerable (Jane). This chapter shows how institutions—families, households, social hierarchies—can systematically abuse while appearing to uphold moral order. Everyone has a role, everyone contributes, and the victim has no recourse.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Unreliable Narration and Psychological Realism',
        explanation: 'Jane narrates this chapter from two perspectives simultaneously: Jane the child experiencing terror, and Jane the adult remembering it. The adult Jane uses sophisticated vocabulary ("dreary consecration," "visionary hollow") while the child Jane experiences primal fear. This dual perspective creates tension: we trust adult Jane\'s analysis, but we also feel child Jane\'s terror bleeding through the controlled prose. When Jane sees the ghost, we\'re in her mind completely—we can\'t tell if it\'s real or hallucination because she can\'t tell. This unreliable narration (unreliable not because Jane lies but because trauma distorts perception) creates psychological realism. We experience what modern readers would call dissociation: reality fragmenting under psychological pressure.',
        example: 'Compare Jane\'s analytical reflection ("I was a discord in Gateshead Hall") with her panicked perception ("My heart beat thick...a sound filled my ears...something seemed near me"). The same narrator, but trauma causes the prose itself to fragment and become breathless, mimicking the panic attack she\'s experiencing.'
      },
      {
        name: 'Symbolic Settings and Environmental Storytelling',
        explanation: 'Brontë makes the red-room do narrative work that most authors accomplish with dialogue or action. Every detail of the space tells story: the crimson/scarlet/red furnishings symbolize blood, violence, passion, and death. The white accents ("white pillows piled up like a tabernacle") suggest death shrouds and corpses. The massive bed with its curtains becomes a tomb. The mirror becomes a site of dissociation. The locked door represents Jane\'s complete powerlessness. Even the temperature and light levels (cold, growing dark) increase psychological pressure. The space itself is an antagonist—it actively harms Jane by triggering sensory and psychological responses. This environmental storytelling was innovative: Brontë makes setting inseparable from theme and character psychology.',
        example: 'The color red dominates: "crimson cloth," "scarlet curtain," "deep red damask," "table covered with a crimson cloth," "cushions of the same hue." Brontë doesn\'t just mention red once—she overwhelms us with it, making readers feel surrounded and oppressed by the color, just as Jane is. The repetition creates claustrophobia through language.'
      },
      {
        name: 'The Mirror as Psychological Device',
        explanation: 'Victorian literature used mirrors to reveal truth, but Brontë subverts this: Jane\'s mirror shows distorted truth because trauma has distorted her self-perception. She doesn\'t recognize herself—sees "a strange little figure...half fairy, half imp." Mirrors should reflect reality, but Jane\'s reality has been so warped by abuse that she can\'t see herself clearly. The mirror becomes a site of identity crisis. This technique externalizes internal psychology: we literally see Jane failing to recognize herself, which shows dissociation without Brontë needing to explain modern psychological concepts. The mirror scene has become iconic precisely because it visualizes trauma\'s effect on selfhood.',
        example: 'Jane describes what she sees: "All looked colder and darker in that visionary hollow than in reality." The mirror isn\'t lying—Jane\'s perception is altered. "Visionary hollow" suggests the mirror is both physical object and psychological space where visions occur. The reflection becomes almost supernatural, not because the mirror is magical but because Jane\'s mind is fragmenting.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect the classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine a foster kid—let\'s call them Alex—living with a family who took them in "out of duty" after their parent died. The family\'s biological kids get the big bedrooms, the new clothes, the benefit of the doubt. Alex gets hand-me-downs, the basement room, and blame when anything goes wrong. One day, the oldest bio-kid physically attacks Alex—shoves them into a wall, leaves a mark. Alex pushes back in self-defense. Immediately, Alex is the problem. The foster mother doesn\'t ask what happened; she confines Alex to the basement storage room for "time out"—but it\'s really punishment. The door locks from the outside. The lights don\'t work. It\'s cold. Hours pass. Night falls. Alex panics, screams, pounds on the door. When someone finally opens it, instead of comfort, there\'s anger: "You\'re being manipulative. Stop the dramatics." The door locks again. This isn\'t just punishment—it\'s psychological torture.',
    
    parallels: [
      '🔹 **Foster Care and Systemic Neglect**: Jane is dependent on relatives who don\'t want her, just as many kids navigate systems that provide shelter but not love. The trauma isn\'t just individual bad actors—it\'s institutional failure where no one advocates for the vulnerable child.',
      '🔹 **Punishment vs. Trauma Response**: Mrs. Reed interprets Jane\'s terror as manipulation, just as adults today often punish kids who are actually having trauma responses (panic attacks, meltdowns). What looks like "bad behavior" might be a neurological crisis. The red-room scene illustrates how authority figures can pathologize victims.',
      '🔹 **Isolation as Punishment**: Locking a child in a room to "teach them a lesson" still happens—"time outs" in dark spaces, solitary confinement in youth detention, sending kids to their rooms for hours. Modern psychology recognizes this as potentially traumatic, especially if the space is frightening or if the child has abandonment history. The red-room shows extreme consequences.',
      '🔹 **"Entitled" Victim Narrative**: Miss Abbott lectures Jane about being "under obligations" and ungrateful—exactly how society often frames people receiving care (foster kids, scholarship students, social service recipients). The idea that you should endure mistreatment because someone is "helping" you is alive and well. Jane\'s situation exposes how "gratitude" can be weaponized to excuse abuse.',
      '🔹 **Nobody Believes the Kid**: When Jane screams in genuine terror, adults assume she\'s lying. This pattern—adults disbelieving children, especially marginalized children—remains pervasive. Whether it\'s abuse reports, accounts of discrimination, or descriptions of mental health crises, kids are often dismissed as dramatic or manipulative. The red-room is an extreme example of what happens when adults refuse to listen.'
    ],
    
    discussionPrompt: 'Think about how we treat people who are dependent on systems of care—foster kids, scholarship students, refugees, people receiving aid. What parallels do you see to how Jane is treated? When do obligations (like "you should be grateful for help") become tools to silence people who are being mistreated? How do we tell the difference between a child acting out and a child in genuine crisis?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🔥',
      name: 'Fire and Ice',
      explanation: 'The red-room is dominated by crimson (fire colors) but feels cold and deathly. This chapter deepens the fire/ice dichotomy that defines Jane\'s character: she has passion and rage (fire) but is treated with coldness and forced into frozen compliance (ice). Jane\'s internal fire—her sense of justice, her anger at unfairness—clashes with the icy cruelty of the Reed household. Throughout the novel, Jane will navigate between being consumed by passion and being frozen by propriety.'
    },
    {
      emoji: '🪞',
      name: 'Seeing and Being Seen',
      explanation: 'The mirror scene in the red-room—Jane not recognizing herself, seeing a "strange little figure"—begins the novel\'s exploration of how we perceive ourselves versus how we\'re seen by others. Jane has been told she\'s wicked, ugly, inferior, and she\'s internalized this. The novel will follow Jane\'s journey to see herself clearly, independent of others\' judgments. This theme connects to identity, self-worth, and the male gaze (later with Rochester).'
    },
    {
      emoji: '🚪',
      name: 'Imprisonment and Freedom',
      explanation: 'The red-room is a literal prison—locked door, no escape, confinement as punishment. This is the first of many imprisonments Jane will experience (Lowood, Thornfield, Moor House). Each time, she\'ll seek escape and autonomy. The novel asks: What does freedom mean? Physical freedom from locked rooms? Economic freedom? Emotional freedom? Psychological freedom from trauma? The red-room establishes that Jane\'s entire journey is about escaping various forms of captivity.'
    },
    {
      emoji: '⚖️',
      name: 'Justice and Injustice',
      explanation: 'In the red-room, Jane reflects on the injustice of her punishment: she was attacked but is being punished for self-defense. This sense of injustice—good people suffering while cruel people prosper—will drive much of the plot. Jane has a strong moral compass but exists in a world where justice is scarce. She spends the novel seeking fairness in systems (families, schools, romance, social structures) that rarely provide it.'
    },
    {
      emoji: '👻',
      name: 'The Supernatural and the Psychological',
      explanation: 'Is there a ghost in the red-room, or is Jane hallucinating from trauma? Brontë keeps this ambiguous throughout the novel—supernatural events might be real or might be psychological projections. The red-room establishes that the line between external reality and internal experience is blurry, especially under duress. This Gothic ambiguity will recur with dreams, visions, and Rochester\'s disembodied voice across miles.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // Open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Institutional Complicity',
      question: 'Bessie and Miss Abbott follow Mrs. Reed\'s orders even though they can see Jane is terrified. Are the servants complicit in Jane\'s abuse? What would it have cost them to intervene? When do we have a moral obligation to disobey unjust orders from authority figures?'
    },
    {
      title: 'The Ghost Question',
      question: 'Do you think there\'s actually a ghost in the red-room, or is Jane hallucinating from trauma and fear? What evidence supports each interpretation? Does it matter which is "true"? How does Brontë use this ambiguity to explore Jane\'s psychological state?'
    },
    {
      title: 'Punishment and Trauma',
      question: 'Mrs. Reed believes Jane is performing "tricks" to escape punishment. Why can\'t Mrs. Reed see that Jane\'s terror is genuine? What does this reveal about how authority figures sometimes interpret trauma responses as manipulation? Have you seen modern examples of this pattern?'
    },
    {
      title: 'The Mirror and Self-Perception',
      question: 'When Jane looks in the mirror, she doesn\'t recognize herself—she sees a "strange little figure," "half fairy, half imp." What does this reveal about how abuse affects self-image? How does Jane see herself versus how she actually is? What would it take for Jane to see herself clearly?'
    },
    {
      title: 'Color Symbolism',
      question: 'Why does Brontë make everything in the room red—crimson, scarlet, deep red? What does the color red make you think of? How does the overwhelming redness affect the mood and meaning of this scene? Would the scene work the same way if the room were blue or green?'
    },
    {
      title: 'Independence Through Trauma',
      question: 'The red-room experience teaches Jane that no one will save her—she must save herself. This lesson leads to her famous independence. But is independence that comes from trauma the same as independence that comes from empowerment? Is Jane\'s self-reliance a strength, a wound, or both?'
    },
    {
      title: 'Justified Rebellion',
      question: 'Jane is punished for defending herself against John\'s violence. Looking at the full context (Chapter 1 and Chapter 2), was Jane wrong to fight back? When is it acceptable to resist or fight back against oppression? What does the novel suggest about rebellion versus compliance?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // Deep-dive answers to complex questions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'red-room-color-symbolism',
      title: 'Why Red? The Psychology of Color in the Red-Room',
      question: 'What does the overwhelming redness of the room symbolize, and why is color symbolism so powerful in this scene?',
      aiResponse: `
**The Red-Room is More Than Setting—It's Psychological Warfare**

Brontë doesn't just describe the room as red; she overwhelms us with crimson: "crimson cloth," "scarlet curtain," "deep red damask," "cushions of the same hue," "table covered with a crimson cloth." The repetition is intentional—she wants readers to feel surrounded, oppressed by the color itself.

**What Red Symbolizes in This Scene:**

**Blood and Violence:**
- Jane's forehead is still bleeding from John Reed's attack
- The room becomes a physical manifestation of that violence
- Victorian readers immediately connected red = bloodshed
- The room feels like a wound that Jane is trapped inside

**Death and Trauma:**
- Mr. Reed died in this room nine years earlier
- Red was associated with corpses in Victorian medicine (the body turns red in early stages of decay)
- The white pillows "piled up like a tabernacle" suggest a death shrine
- The room is literally a tomb, marked by death, and Jane is imprisoned there

**Anger and Passion:**
- Red symbolizes the Reed family's anger toward Jane—the rage that surrounds her
- It also represents Jane's own suppressed rage (she's just fought back against John)
- Victorian society associated red with dangerous passion, particularly in women and children
- Jane is being punished for her passion/rage, and the room embodies that very quality

**Hell and Damnation:**
- Religious imagery: red associated with hell, fire, damnation
- Miss Abbott tells Jane she might "die and go somewhere terrible" if she's wicked
- The red room becomes a kind of purgatory where Jane confronts mortality and sin
- Victorian Christian symbolism would have made this connection explicit

**The Power of Color Psychology:**

Modern color psychology confirms what Brontë intuitively understood:
- Red increases heart rate and blood pressure (physiological response)
- Red is associated with danger, alertness, alarm (evolutionary response)
- Red in enclosed spaces creates feelings of aggression, agitation, or fear
- Red overwhelms other sensory input—it dominates perception

**Brontë's Genius:**

She makes the room into a character that attacks Jane psychologically. The environment isn't passive—it's hostile. By saturating the space with red, Brontë creates external pressure that mirrors Jane's internal terror. The room embodies everything Jane is experiencing: violence, death, anger, punishment, damnation.

**Contrast with Other Spaces:**

Later, when Jane describes Lowood or Thornfield, she'll use different color palettes that reflect those spaces' psychological qualities. The red-room's color scheme is unique and memorable because it's designed to traumatize.

**For Discussion:**

Would this scene work if the room were blue (calm, sad) or green (natural, growing) or grey (neutral, boring)? The choice of red is perfect because it amplifies horror, violence, and psychological pressure. Color here isn't decoration—it's narrative technique.
      `
    },
    {
      id: 'trauma-somatization',
      title: 'The Body Keeps the Score: How Trauma Becomes Physical',
      question: 'Why does Jane get physically ill after the red-room experience? What is Brontë showing us about the relationship between psychological and physical health?',
      aiResponse: `
**Brontë Understood Trauma Before We Had a Name For It**

In 1847, Charlotte Brontë wrote a medically accurate description of how psychological trauma manifests in the body—something that wouldn't be clinically understood until the 20th century. Jane's physical collapse after the red-room scene isn't melodrama; it's realistic trauma response.

**Jane's Physical Symptoms (Step by Step):**

**During the Panic Attack:**
1. "My heart beat thick" (tachycardia—racing heart)
2. "My head grew hot" (sensation of fever/heat from stress hormones)
3. "A sound filled my ears" (auditory hallucination or tinnitus from panic)
4. "Something seemed near me" (sense of presence, hypervigilance)
5. "I was oppressed, suffocated" (chest compression, difficulty breathing)
6. Desperate attempt to escape (fight-or-flight response)

**Immediate Aftermath:**
1. "A species of fit" (Victorian term for seizure/convulsion—could be panic attack or actual seizure triggered by extreme stress)
2. Loss of consciousness (dissociation or actual fainting)
3. Complete hysterics when revived (inability to self-regulate)

**Days After:**
1. Fever (psychosomatic but real—stress hormones can cause temperature elevation)
2. "Heavy weight on my chest" (classic anxiety symptom, described perfectly)
3. Drifting in and out of consciousness (trauma-induced exhaustion)
4. Days of illness (what Victorians called "brain fever")

**What Modern Psychology Says:**

This is textbook **Acute Stress Response** (acute trauma reaction):

**Neurological Reality:**
- Extreme fear triggers the amygdala (brain's alarm system)
- Floods body with cortisol and adrenaline (stress hormones)
- These hormones cause the physical symptoms Jane experiences
- Prolonged exposure can cause actual fever, immune suppression, exhaustion

**Dissociation and Collapse:**
- When threat is inescapable, the nervous system can shut down completely
- This is called "tonic immobility"—playing dead as last resort
- Jane's loss of consciousness might be this response
- Her body protects her by removing consciousness from the traumatic experience

**Somatization:**
- Psychological pain that the mind can't process gets "stored" in the body
- The fever, chest weight, and days of illness are Jane's body expressing what her mind can't
- The physical illness makes the suffering visible and undeniable
- Victorian readers might dismiss emotional distress, but they had to acknowledge fever

**Why Brontë Shows This:**

**Validates Jane's Experience:**
- Jane's suffering is REAL, provable by her body
- Mrs. Reed can dismiss "theatrics" but can't dismiss fever
- The physical illness forces outside intervention (Mr. Lloyd, the apothecary)
- Without the body's rebellion, Jane would have no advocate

**Medical Accuracy = Artistic Integrity:**
- Brontë researched or intuited trauma responses with remarkable precision
- She's not exaggerating for drama—she's documenting what actually happens
- This accuracy makes readers trust the psychological portrait

**Foreshadows Future Trauma:**
- The red-room becomes Jane's touchstone trauma—she references it throughout her life
- Future stressors (Rochester's betrayal, near-death on the moors) will echo this physical-psychological breakdown pattern
- Brontë shows that childhood trauma shapes adult response to stress

**Victorian Context:**

In Victorian medicine, "brain fever" was a real diagnosis:
- Considered extremely serious—people died from it
- Recognized as psychological distress manifesting physically
- Often affected sensitive, intelligent people (which Victoria medicine saw as both gift and vulnerability)
- Jane's illness would have signaled to readers that her trauma was life-threatening

**Modern Therapeutic Insight:**

Trauma therapist Bessel van der Kolk wrote *The Body Keeps the Score* (2014) about exactly what Brontë depicted in 1847: trauma lives in the body. Psychological wounds create physical symptoms. Healing requires addressing both mind and body.

**The "Weight on Her Chest":**

This specific detail is extraordinary. Modern anxiety sufferers describe this exact sensation—a physical weight, difficulty breathing, pressure. Brontë captured a universal trauma symptom with perfect accuracy.

**For Discussion:**

What does it mean that Jane's body has to "prove" her suffering is real? Why aren't her words enough? What does this say about whose pain society validates and whose it dismisses? How might this relate to modern discussions about believing victims?
      `
    },
    {
      id: 'institutional-betrayal',
      title: 'Why No One Saved Jane: Understanding Institutional Betrayal',
      question: 'Jane screams in genuine terror, possibly having a medical emergency. Why doesn\'t anyone help her? What is Brontë showing us about how systems fail vulnerable people?',
      aiResponse: `
**The Red-Room Isn't Just One Bad Adult—It's Systemic Failure**

What makes the red-room scene so devastating isn't just that Mrs. Reed is cruel. It's that *everyone* fails Jane. The entire household—servants, children, social structures—enables the abuse. This is what psychologists call **institutional betrayal**: trauma that occurs within systems meant to provide care.

**The Sequence of Abandonment:**

**1. Initial Imprisonment:**
- Bessie and Miss Abbott physically drag Jane upstairs
- They lock her in despite her protests
- They follow Mrs. Reed's orders without question

**2. Jane Screams:**
- She's in genuine terror—possibly hallucinating, definitely panicking
- This is a medical emergency (panic attack, possible seizure)
- Servants would have heard—Gateshead isn't huge

**3. No Immediate Response:**
- No one comes right away
- Jane is left in crisis, alone, in the dark
- The delay amplifies her terror

**4. When They Finally Come:**
- Miss Abbott and Bessie arrive, but their first response isn't comfort
- They're annoyed—treating this as Jane being difficult
- Mrs. Reed arrives in judgment mode, not care mode

**5. Mrs. Reed's "Intervention":**
- Accuses Jane of performing "tricks" to escape punishment
- Shows no recognition that Jane might be genuinely in distress
- Physically harms Jane (boxes her ears—hits her head after a panic attack)
- Orders her locked back in the trauma space

**6. Aftermath:**
- Bessie delivers an hour-long lecture about Jane's wickedness
- No apology, no comfort, no acknowledgment of suffering
- The message: Jane's pain doesn't matter; her obedience does

**Why Everyone Failed:**

**Mrs. Reed (The Authority):**
- Genuinely believes Jane is manipulative and deceitful
- Cannot conceive that an orphan child might have legitimate grievances
- Her worldview requires Jane to be the problem (justifies her resentment)
- Interprets all of Jane's behavior through lens of suspicion

**Bessie & Miss Abbott (The Enforcers):**
- Servants in the household—economically dependent on Mrs. Reed
- Intervening would risk their positions, income, references
- The power structure requires them to obey, even when orders are cruel
- Bessie might have private doubts, but she can't act on them

**The Other Servants (The Bystanders):**
- Heard Jane scream but didn't respond immediately
- Following implicit social rules: Mrs. Reed's authority is absolute
- Might disapprove privately but won't risk consequences
- Complicit through inaction

**Mr. Reed (The Absent Protector):**
- Dead, but his memory haunts the scene
- He made Mrs. Reed promise to care for Jane
- His death removed Jane's only protector
- The household's moral structure collapsed when he died

**What This Reveals About Systems:**

**Power Protects Itself:**
- Mrs. Reed's authority is never questioned because she controls resources
- Everyone depends on her (servants for work, children for inheritance, Jane for survival)
- The system is designed to protect those at the top, not those at the bottom
- Abuse can be sustained when challenging authority is too costly

**Witnesses Enable Abuse:**
- Bessie and Abbott see what's happening but participate
- Other servants hear but don't intervene
- "Just following orders" is complicity
- The victim is isolated not just physically but socially—no allies

**Victims Are Blamed:**
- Jane is accused of manipulation when she's actually traumatized
- Her terror is reframed as moral failing ("wickedness," "deceit")
- This inversion protects the abuser and silences the victim
- If Jane is the problem, the system doesn't need to change

**Victorian Social Structure:**
- Orphans had almost no legal protections
- Children had almost no rights in general
- Guardians had nearly absolute authority
- Social services, child welfare laws, mandatory reporting—none of this existed
- Jane has literally no recourse

**Modern Parallels:**

This pattern—institutional betrayal where systems harm the people they should protect—still occurs:

**Foster Care Failures:**
- Kids moved between homes, no stable advocates
- Systems prioritize "family preservation" even when families are harmful
- Caseworkers overwhelmed, can't provide real oversight

**School Discipline:**
- Zero-tolerance policies punish trauma responses as "bad behavior"
- Kids in crisis treated as discipline problems
- Adults interpret panic, meltdowns, or resistance as manipulation

**Workplace Harassment:**
- HR protects the company, not the victim
- Speaking up risks retaliation, job loss
- Bystanders stay silent to protect their positions

**Reporting Abuse:**
- Victims often not believed ("Are you sure?" "Why didn't you report sooner?")
- Systems can revictimize through investigation processes
- Abusers often hold more social power, making accusations "costly"

**Brontë's Critique:**

The red-room scene is a devastating critique of power:
- Families aren't automatically safe
- Guardianship doesn't guarantee care
- Social hierarchies often harm the vulnerable
- "Good people" can participate in evil through compliance

**Why This Matters for Jane's Development:**

This experience teaches Jane:
- ✅ You're on your own (no one will save you)
- ✅ Authority is often unjust (power ≠ morality)
- ✅ Your truth doesn't matter if no one believes you (hence: become self-reliant)
- ✅ You must save yourself (seed of independence)

Jane's famous independence isn't just her personality—it's a survival strategy born from institutional betrayal.

**For Discussion:**

When have you seen systems fail the people they're meant to protect? What makes it so hard to intervene when we see injustice happening in institutions we're part of? What would it have taken for someone to save Jane—and why didn't that happen?
      `
    },
    {
      id: 'mirror-dissociation',
      title: 'The Mirror Scene: When Trauma Destroys Self-Recognition',
      question: 'Why doesn\'t Jane recognize herself in the mirror? What is Brontë showing us about trauma and identity?',
      aiResponse: `
**The Mirror Shows Truth—But Jane's Truth Has Been Destroyed**

When Jane looks in the mirror and sees "a strange little figure...half fairy, half imp" instead of recognizing herself, Brontë is depicting something psychology wouldn't name until the 20th century: **dissociation** and **depersonalization**—trauma responses where you feel disconnected from your own body and identity.

**What Jane Sees:**

Let's look closely at her description:

"All looked colder and darker in that visionary hollow than in reality: and the strange little figure there gazing at me, with a white face and arms specking the gloom, and glittering eyes of fear moving where all else was still, had the effect of a real spirit."

**Breaking This Down:**

**"Visionary hollow":**
- Not just a mirror—a space where visions appear
- Suggests unreality, distortion, something between worlds
- The mirror becomes a liminal space (threshold between real/unreal)

**"Strange little figure...gazing at me":**
- Jane doesn't say "I saw myself"
- She describes the reflection as separate, other
- "Gazing at me" suggests the reflection is looking at Jane, not that Jane is seeing herself
- She's experiencing herself as object, not subject

**"Half fairy, half imp":**
- Not human—something mythological, supernatural
- Fairies and imps are liminal creatures (between human/magic, good/evil)
- Jane sees herself as not-quite-human
- This is internalized dehumanization

**"Glittering eyes of fear":**
- She can see terror in the reflection but doesn't claim it as her own
- Fear is visible but externalized
- Emotional truth acknowledged but not integrated

**"Effect of a real spirit":**
- Ghost, specter, something dead but present
- Jane looks at herself and sees death
- Self-perception has collapsed into seeing oneself as already gone

**What's Happening Psychologically:**

**Dissociation:**

This is a trauma response where consciousness separates from immediate experience:
- Feeling like you're watching yourself from outside
- Sense that your body isn't "you"
- Reality feeling dreamlike or unreal
- Time distortion, memory gaps

Jane is having this experience in real-time. The mirror—which should anchor her to physical reality—instead becomes a site where reality fragments.

**Depersonalization:**

Specific type of dissociation involving disconnection from one's own body/self:
- Not recognizing your reflection
- Feeling like your thoughts/feelings aren't your own
- Sense of being a stranger to yourself
- Often occurs during/after severe trauma

Jane's inability to recognize herself is clinical depersonalization. Brontë wrote this before the term existed.

**Internalized Oppression:**

Jane has been told her entire life:
- You're wicked, deceitful, inferior (moral worthlessness)
- You're plain, disagreeable (physical inadequacy)
- You're dependent, obligated, burdensome (social unworthiness)
- You don't belong here (existential erasure)

She's internalized these messages. When she looks in the mirror, she *believes* she's other, strange, not-quite-human. The abuse has destroyed her ability to see herself with clarity or compassion.

**Why the Mirror Scene Matters:**

**Victorian Literary Tradition:**

Mirrors in Victorian literature revealed truth:
- Vanity mirrors showed moral corruption
- Magic mirrors showed hidden reality
- Looking glasses were portals to other worlds (later: Alice in Wonderland)

Brontë uses this tradition but subverts it: Jane's mirror shows truth (she's been so traumatized she can't recognize herself), but it's a devastating truth about what abuse does to identity.

**Visual/Physical Manifestation of Internal State:**

Brontë can't just say "Jane felt disconnected from herself" (too abstract, too modern). Instead, she shows us: Jane literally doesn't recognize her own face. This makes the internal external—we *see* dissociation happening.

**Foreshadowing Jane's Journey:**

The entire novel is about Jane learning to see herself clearly:
- Not through others' eyes (Mrs. Reed's contempt, Rochester's desire, St. John's projection)
- But through her own clear vision
- The mirror scene establishes that Jane's self-perception is damaged
- The story is her journey to self-recognition and self-worth

**The Gothic Element:**

Jane sees herself as a "real spirit"—possibly a ghost. In Gothic literature, ghosts are:
- The past refusing to stay buried
- Trauma made visible
- Evidence of injustice
- Liminal beings (not alive, not fully dead)

Jane *is* all of these things:
- Haunted by her past (red-room, abuse, abandonment)
- Trauma incarnate
- Living proof of injustice
- Socially liminal (not quite family, not quite servant; not quite child, not quite adult)

Seeing herself as ghostly is accurate, not distorted—she's been made ghostly by others' refusal to see her as fully human.

**Modern Understanding:**

**Complex Trauma:**

Jane's experience fits what therapists call **Complex PTSD** (C-PTSD):
- Repeated trauma (not one incident but ongoing abuse)
- Trauma within relationships that should be protective
- Damage to self-concept and identity
- Dissociation as coping mechanism

The mirror scene is Jane's C-PTSD made visible.

**For Survivors:**

Many trauma survivors describe exactly this experience—looking in the mirror and not recognizing the person there, or feeling like they're watching a stranger. Brontë's depiction is accurate enough that modern survivors recognize it immediately.

**For Discussion:**

How do we develop self-perception? How much of how we see ourselves comes from how others see us? If everyone tells you you're worthless, can you maintain a sense of self-worth? What would it take for Jane to look in a mirror and recognize herself with compassion? 

What does it mean that the first person in the novel to see Jane clearly is Helen Burns (Chapter 5-6)—another outcast?
      `
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Practical classroom tools
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'Environmental Psychology: Write Your Own "Red-Room"',
      description: 'Write a 1-2 page scene where the physical environment reflects and amplifies a character\'s emotional state. Choose an emotion (fear, anxiety, joy, grief, anger) and a setting (a room, a landscape, a building). Use color, temperature, light, objects, and spatial details to externalize what the character is feeling internally. Don\'t name the emotion directly—show it through environmental description. Like Brontë, make the space do narrative work.',
      purpose: 'This exercise teaches symbolic setting, "show don\'t tell," and how physical details can carry psychological meaning. Students learn that setting isn\'t just backdrop—it\'s a narrative tool that reveals character and theme. They practice precise sensory description and metaphorical thinking.'
    },
    
    activity: {
      title: 'Color Theory and Emotional Response',
      description: 'Bring in paint samples or printed color swatches representing different colors (red, blue, green, yellow, purple, grey, black, white). Have students work in small groups. Each group gets one color. Their task: brainstorm everything that color makes them think of, feel, or associate with (emotions, objects, concepts, memories). Then, read the red-room description aloud. Discuss: Why is the red-room red specifically? Each group presents their color\'s associations. Finally, as a class, redesign the red-room with a different color palette. How does the scene\'s meaning change?',
      materials: 'Paint samples or color swatches, chart paper, markers, printed text excerpt of the red-room description'
    },
    
    crossCurricular: {
      title: 'The Science and History of Trauma',
      description: 'Partner with science and history teachers for an interdisciplinary unit on trauma. Science class covers the neurobiology of stress responses: amygdala, cortisol, fight-flight-freeze, somatization. History class covers Victorian medical understanding ("brain fever," "hysteria"), treatment of orphans, legal status of children, and lack of child welfare systems. English class reads the red-room chapter and analyzes Brontë\'s medical accuracy. Students synthesize: How did Brontë understand trauma before modern neuroscience? How did historical context shape Jane\'s experiences? How do we understand trauma today?',
      subjects: ['Biology/Neuroscience', 'History/Social Studies', 'Psychology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // One focused, high-level analytical task
  // ===================================================================
  criticalThinkingExercise: {
    title: 'The Ethics of Intervention: When Do Bystanders Become Complicit?',
    prompt: 'Analyze the red-room scene through the lens of moral responsibility and systemic complicity. Multiple adults either directly harm Jane (Mrs. Reed) or enable that harm through inaction (Bessie, Miss Abbott, other servants). None intervene to protect her. Your task: Construct an ethical framework for understanding when bystanders become morally complicit in injustice. Then apply that framework to evaluate each adult\'s responsibility in Jane\'s trauma.',
    
    guidingQuestions: [
      'What is the difference between actively causing harm and passively allowing harm? Are they equally wrong, or is there a moral distinction?',
      'Bessie and Miss Abbott are servants—economically dependent on Mrs. Reed. Does their vulnerable position reduce their moral responsibility to intervene? At what point does self-preservation become an insufficient justification for complicity?',
      'Mrs. Reed genuinely believes Jane is manipulative. Does sincere belief in your own righteousness excuse harmful actions? How do we judge people who do wrong while believing they\'re doing right?',
      'If someone witnesses injustice but intervening would cost them significantly (job, safety, social standing), what is their ethical obligation? Is silence ever justified?'
    ],
    
    thinkingFramework: {
      analyze: 'Break down each adult\'s role: What did they do or not do? What was their power position? What would intervention have cost them? What knowledge did they have of Jane\'s suffering? What motivations drove their choices? Map the power dynamics in the household.',
      evaluate: 'Using your ethical framework (which you\'ll need to articulate), assess each person\'s moral responsibility. Consider: intent vs. impact, action vs. inaction, power vs. vulnerability, knowledge vs. ignorance, individual vs. systemic responsibility. Rank the adults from most to least morally culpable, and defend your ranking.',
      synthesize: 'Connect this analysis to contemporary situations where bystanders witness injustice in institutional settings (workplace harassment, bullying, discrimination, abuse). What patterns do you see? What principles can we extract about ethical responsibility? When is "I was just following orders" a valid defense, and when is it an excuse for complicity?'
    },
    
    expectedDepth: 'Strong responses will: (1) Articulate a clear ethical framework with defined criteria for assessing complicity; (2) Apply that framework consistently to each character; (3) Acknowledge complexity—there may not be simple "villains," but rather a system that enables harm; (4) Use specific textual evidence; (5) Connect the historical situation (Victorian England, limited child protections) to modern parallels; (6) Demonstrate awareness that ethical questions rarely have one "correct" answer but require reasoned argumentation. This is a philosophical analysis using literature as case study.',
    
    classroomApplication: 'This can work as: Individual analytical essay (3-4 pages), Socratic seminar with structured debate, Group project where different groups defend different characters\' choices, Mock trial where characters are "prosecuted" for complicity (students argue both sides). Time required: 2-3 class periods (one for initial analysis, one for discussion/debate, one for writing/synthesis). Works well as capstone assessment for themes of justice, responsibility, and systemic oppression in Jane Eyre.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's importance (auto-rotated by chapter number)
  // ===================================================================
  whyLiteratureMatters: getLiteratureMessageByChapter(2),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of next chapter to build anticipation
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🩺',
    title: 'Next Time: Chapter 3 — Mr. Lloyd\'s Visit',
    preview: 'After her breakdown in the red-room, Jane wakes to find Mr. Lloyd, the apothecary, at her bedside. For the first time in her life, an adult actually listens to her. He asks questions. He wants to understand. And in one pivotal conversation, he offers Jane something she\'s never had before: a choice about her own future. This chapter introduces the first adult who treats Jane like a human being worthy of care and agency—and sets in motion the events that will take her to Lowood School.',
    hookQuestion: 'What happens when someone in power actually listens to the powerless? Can one conversation change a life? And what choice will Mr. Lloyd offer Jane that might finally lead her out of Gateshead?'
  }
}

