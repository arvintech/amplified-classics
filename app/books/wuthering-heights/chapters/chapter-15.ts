/**
 * WUTHERING HEIGHTS - CHAPTER 15
 * 
 * Heathcliff's final meeting with dying Catherine: passion undiminished despite approaching death
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getThenVsNowMessage } from '@/app/lib/literature-matters-messages'

export const chapter15: ChapterData = {
  number: 15,
  title: '',
  
  readingTime: 16,
  pages: 9,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Heathcliff forces his way into Thrushcross Grange for one final meeting with dying Catherine, and their reunion—violent, passionate, accusatory—reveals that death cannot diminish the intensity of their connection, only make its impossibility more unbearable.',
    
    full: [
      'While Edgar is at church, Heathcliff arrives at Thrushcross Grange. Nelly tries to prevent him entering, but Catherine hears his voice and demands to see him—she will die without this meeting. Nelly lets him in. Catherine, wasted and dying, rises to meet him. What follows is one of the most intense scenes in English literature: they embrace desperately, accuse each other bitterly, express love passionately, and reveal that neither has moved past the other at all. Three years apart, both married to others, Catherine literally dying—none of it matters. Their bond remains absolute.',
      
      'Their conversation is simultaneously loving and vicious. Catherine accuses Heathcliff of killing her: "You have killed me—and thriven on it." Heathcliff accuses her of killing herself through her choice to marry Edgar: "Why did you betray your own heart, Cathy?" Neither will accept responsibility; both blame the other. Yet through the accusations, their physical connection is desperate—they hold each other in death grip, neither willing to let go. Catherine says "I shall not be at peace" after death. Heathcliff responds with the novel\'s most famous declaration: he begs her ghost to haunt him rather than leave him behind: "Be with me always—take any form—drive me mad! Only do not leave me in this abyss where I cannot find you!"',
      
      'Edgar returns from church just as their meeting reaches its climax. Catherine goes into convulsions in Heathcliff\'s arms—the intensity too much for her weakened state. Heathcliff holds her, refusing to release her even as she loses consciousness. Nelly must physically intervene. Heathcliff finally lays Catherine on the couch and leaves, but not before one final look at her unconscious form. The scene reveals that their relationship exists outside normal emotional registers—it\'s not romantic love or familial affection but something more primal and less controllable.',
      
      'The chapter makes clear: Catherine will die, probably within hours. But it also reveals that death will not end their connection—it will only change its form from physical presence to haunting. Heathcliff\'s prayer for Catherine to haunt him is wish that will be horribly granted. The scene establishes the supernatural dimension that will dominate Volume II: Catherine\'s ghost, Heathcliff\'s obsession with the dead over the living, the question of whether love can transcend death or whether it\'s just delusion born of grief.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Mutual Blame / Codependent Accusation',
      definition: 'Pattern where two people in dysfunctional relationship each blame the other for mutual destruction—both refusing responsibility while simultaneously acknowledging they\'ve destroyed each other. Neither is wrong; both are right; the cycle is the problem.',
      context: 'Catherine: "You have killed me—and thriven on it." Heathcliff: "Why did you betray your own heart?" Each accuses the other of causing this tragedy. Both accusations are valid. Catherine\'s choice to marry Edgar set events in motion. Heathcliff\'s vengeful marriage to Isabella escalated the disaster. Neither will accept blame; both assign it.',
      whyItMatters: 'This shows how dysfunctional relationships operate without clear villain—both parties contribute to mutual destruction while feeling victimized by the other. Understanding this prevents simplistic "who\'s at fault" questions and recognizes how codependent relationships create mutual damage where assigning blame is impossible because causation runs in circles. Also shows how people in intense relationships can simultaneously destroy each other AND be unable to live without each other—destruction doesn\'t prevent attachment; sometimes it intensifies it.'
    },
    {
      term: 'Love as Ontological Identity vs. Romantic Feeling',
      definition: 'Distinction between love as emotion (can be felt and unfelt) vs. love as fundamental fact of existence (unchangeable as your own being). Catherine and Heathcliff\'s connection isn\'t feeling; it\'s metaphysical reality of their existence.',
      context: 'Catherine (earlier): "I am Heathcliff." Now dying, nothing has changed—they remain extensions of each other. This isn\'t romantic love (emotion); it\'s ontological identity (being). Their connection exists at level of existence itself, not sentiment. Death will separate their bodies but cannot separate what they ARE to each other.',
      whyItMatters: 'Brontë challenges romantic love conventions by showing relationship that transcends emotion into identity. Most love stories ask "do they love each other?"—Wuthering Heights asks "are they separable entities?" Understanding this distinction prevents reading novel as failed romance (why don\'t they just be together?) and recognizes it as exploration of whether human beings can be so fundamentally intertwined that separation becomes metaphysical impossibility. Modern relevance: twin studies showing biological entanglement; neuroscience on mirror neurons and shared identity; philosophy of personal identity and where "I" ends and "you" begins.'
    },
    {
      term: 'The Unforgivable / Mutual Unforgiveness',
      definition: 'State where both parties have committed acts the other cannot forgive, yet neither can release the relationship. Forgiveness is impossible but separation is impossible—creating permanent state of accusatory attachment.',
      context: 'Catherine cannot forgive Heathcliff for marrying Isabella (deliberate cruelty to hurt her). Heathcliff cannot forgive Catherine for marrying Edgar (ultimate betrayal). Neither can forgive; neither can separate. They remain locked in mutual unforgiveness until death and beyond.',
      whyItMatters: 'Shows how intense relationships can survive beyond forgiveness—lack of forgiveness doesn\'t end connection, just makes it tormented. Many relationships end when forgiveness fails, but some continue without forgiveness, creating permanent state of wound. Understanding this explains long-term family estrangements where people remain emotionally entangled despite unforgiven wrongs, or divorced couples who cannot stop thinking about each other despite mutual betrayal. Unforgiveness doesn\'t always mean disconnection; sometimes it means permanent painful connection.'
    },
    {
      term: 'Death as Transition Not Ending',
      definition: 'Gothic idea that death doesn\'t end relationships but transforms them—the dead haunt the living, maintaining connection through supernatural means when physical presence becomes impossible.',
      context: 'Heathcliff: "Be with me always—take any form—drive me mad! Only do not leave me in this abyss where I cannot find you!" He\'s not accepting her death; he\'s requesting haunting. Catherine: "I shall not be at peace." Both understand death won\'t end their connection—it will make it supernatural.',
      whyItMatters: 'Gothic literature often uses ghosts to explore how the dead remain psychologically present to the living. Heathcliff\'s prayer for haunting represents wish for continued connection regardless of form—better madness and haunting than absence. This challenges "healthy grief" narratives where goal is "letting go." Sometimes people don\'t want to let go; they prefer tormented connection to peaceful separation. Modern psychology recognizes "continuing bonds" with the dead as legitimate alternative to detachment—some people maintain relationships with deceased through memory, ritual, even belief in ongoing presence. Gothic literalizes this as actual haunting, but emotional reality is same: death doesn\'t always end relationships.'
    },
    {
      term: 'Passionate Death Scene / Liebestod',
      definition: 'Literary convention where lovers unite in death or at death\'s threshold, suggesting love can only be fulfilled through death because life\'s circumstances make consummation impossible. German "Liebestod" = love-death.',
      context: 'Catherine and Heathcliff\'s reunion happens as she\'s dying—they can only fully express connection when death is imminent. Their embrace is both loving and violent, their words both tender and accusatory. The intensity literally kills her (convulsions from emotional overload). Their love finds expression only in death.',
      whyItMatters: 'Liebestod appears throughout Romantic literature (Romeo and Juliet, Tristan and Isolde) suggesting some loves are "too big" for life\'s constraints and can only be fulfilled through death. This is simultaneously beautiful (transcendent love beyond mortality) and troubling (why must love equal death?). Understanding this trope helps us see Brontë engaging with and critiquing Romantic conventions—she shows the reality of deathbed reunion as messy, violent, accusatory, not peaceful romantic apotheosis. Modern critique: narratives that equate true love with death can romanticize suicide and domestic violence. Brontë shows the horror beneath the romantic convention.'
    },
    {
      term: 'Sublime vs. Beautiful / Burkean Aesthetics',
      definition: 'Edmund Burke\'s distinction: Beautiful = pleasing, harmonious, gentle. Sublime = overwhelming, terrifying, beyond human scale. Beauty attracts; sublime overwhelms and frightens even as it awes. Catherine and Heathcliff are sublime, not beautiful.',
      context: 'Catherine-Heathcliff\'s reunion isn\'t beautiful—it\'s sublime. It\'s too intense, too violent, too overwhelming. Edgar offers beautiful love: gentle, civilized, harmonious. Heathcliff offers sublime love: terrifying, consuming, beyond normal human registers. Catherine chose beautiful but IS sublime, creating her tragedy.',
      whyItMatters: 'Understanding sublime vs. beautiful explains what kind of love story this is—not romantic comedy (beautiful) but Gothic tragedy (sublime). The sublime in literature creates awe and terror simultaneously—encountering forces beyond human control or comprehension. Mountains, storms, God—all sublime. Catherine and Heathcliff\'s love is sublime: overwhelming, inhuman in its intensity, beautiful and terrifying simultaneously. Modern application: recognizing some relationships operate at intensity levels that preclude happiness while creating undeniable meaning. Not all significant relationships are pleasant; some are sublime—overwhelming, unchosen, inescapable.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Catherine Earnshaw Linton',
      development: 'In her final hours, Catherine reveals that nothing in three years has changed—she remains fundamentally Heathcliff\'s Catherine despite marriage to Edgar, motherhood (she\'s pregnant), impending death. She accuses Heathcliff of killing her, refuses responsibility for her own choices, yet simultaneously acknowledges she cannot exist without him. Her physical weakness contrasts with emotional intensity—dying body, but passion undiminished. She knows she will not rest peacefully in death; she will haunt. This isn\'t threat; it\'s prediction born of knowing separation is metaphysically impossible. She dies not reconciled to death but resentful of it—it will separate her from Heathcliff when life already separated them through her choice.',
      keyTrait: {
        emoji: '🌊',
        text: 'Undiminished Storm'
      }
    },
    {
      name: 'Heathcliff',
      development: 'His reaction to dying Catherine reveals the core of his character: he blames her absolutely ("Why did you betray your own heart?") yet loves her completely. He holds her in death grip, refusing to release even as she convulses. His final prayer—"Be with me always... drive me mad!"—reveals he prefers tormented connection to peaceful separation. This will define his remaining years: choosing haunting over healing, obsession over peace, continued bond with the dead over relationships with the living. The scene shows why he cannot move on—not because he\'s unusually devoted but because separation is ontologically impossible for him. He\'s not choosing unhealthy attachment; he\'s recognizing his fundamental reality.',
      keyTrait: {
        emoji: '⚓',
        text: 'Anchored to the Dead'
      }
    },
    {
      name: 'Nelly Dean',
      development: 'Forced to facilitate this meeting despite knowing it will likely kill Catherine. She tries to maintain decorum, protect Edgar, preserve social norms—all futile in face of Catherine-Heathcliff\'s sublime intensity. She must physically intervene to separate them, must witness intimacy beyond her comprehension. Her practical morality (people should behave properly, make sensible choices, control themselves) cannot address relationships operating outside normal emotional registers. She represents society\'s attempt to impose order on forces that transcend social control—well-meaning but ultimately helpless before passions beyond conventional morality.',
      keyTrait: {
        emoji: '🚪',
        text: 'Helpless Gatekeeper'
      }
    },
    {
      name: 'Edgar Linton',
      development: 'Absent during the reunion (at church—symbolic of his civilized values), but his return interrupts the scene. He represents everything Catherine chose over Heathcliff: civilization, gentleness, social position, beauty rather than sublime. The fact that she\'s dying while married to him proves the choice failed—you cannot betray your ontological identity without destroying yourself. Edgar offers real love, but wrong kind for Catherine. His tragedy is being good man who cannot compete with sublime bond he doesn\'t understand. He will lose wife who never fully belonged to him to man who never married her.',
      keyTrait: {
        emoji: '⛪',
        text: 'Civilized & Inadequate'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // Significant passages with analysis
  // ===================================================================
  quotes: [
    {
      text: "You have killed me—and thriven on it, I think. How strong you are! How many years do you mean to live after I am gone?",
      analysis: 'Catherine\'s accusation captures the core dynamic: she believes her suffering and death are Heathcliff\'s fault, yet she also resents that he will survive her. It\'s simultaneously accusation and clinging—"you killed me" but also "you\'ll outlive me which means you\'ll leave me." The logic is emotionally accurate even if causally confused: his marriage to Isabella contributed to her breakdown, but she\'s dying because her own choices (marrying Edgar) created impossible internal conflict. Blame flows in circles, as it always does in codependent destruction.'
    },
    {
      text: "Why did you betray your own heart, Cathy? I have not one word of comfort. You deserve this. You loved me—then what right had you to leave me?",
      analysis: 'Heathcliff\'s refusal to comfort dying woman seems monstrous until we realize: she betrayed not him but herself, and he witnessed that self-betrayal destroy her. His accusation is actually more accurate than Catherine\'s—she DID betray her own heart by choosing social advantage over ontological identity. Heathcliff offers no forgiveness because the wound is too deep. Yet he holds her desperately even while accusing her. Words say "you deserve this." Arms say "I cannot let you go." This contradiction defines their entire relationship.'
    },
    {
      text: "Be with me always—take any form—drive me mad! Only do not leave me in this abyss, where I cannot find you!",
      analysis: 'One of literature\'s great declarations: Heathcliff prefers madness with Catherine to sanity without her, prefers haunting to absence, prefers torment to peace. "Take any form" acknowledges she\'ll be ghost but insists that\'s acceptable—any form of presence better than absence. "This abyss where I cannot find you" reveals his metaphysical understanding: separation creates void worse than any suffering. He\'s not being melodramatic; he\'s describing his actual experience of existence without her as abyss—nothingness, void, unbearable absence. This prayer will be granted; he will be haunted and will prefer it to peace.'
    },
    {
      text: "I shall not be at peace.",
      analysis: 'Catherine\'s prediction of her own restless afterlife. She won\'t "rest in peace" because peace requires acceptance of separation from Heathcliff, which is impossible. Christian theology promises peaceful rest for the dead; Gothic literature shows the dead cannot rest when they have unfinished business with the living. Catherine\'s unfinished business is ontological: she cannot exist separately from Heathcliff, therefore death creates impossible situation. She must haunt because separation is metaphysical impossibility. Victorian readers would understand this as damnation; Gothic reading understands it as inevitable consequence of their bond\'s nature.'
    }
  ],
  
  // ===================================================================
  // INTELLIGENCE AMPLIFIED ANALYSIS
  // Themes and literary techniques with expert explanation
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'Love Beyond Morality',
        explanation: 'This scene challenges every conventional moral judgment about love. By ethical standards, both Catherine and Heathcliff are wrong: she betrayed her husband in her heart, he married Isabella purely for revenge, both prioritize their connection over everyone else\'s wellbeing. Yet the intensity of their bond transcends moral evaluation—it exists at level prior to choice, therefore beyond moral judgment. Brontë asks: Can relationships exist outside morality? Can bonds be simultaneously immoral and inevitable? The scene doesn\'t excuse their choices but recognizes their connection operates at level where concepts like "should" become meaningless. They cannot choose not to be bonded; choice enters only in how they respond to unchosen bond. This has profound implications for understanding human relationships: some bonds (parent-child, siblings, apparently Catherine-Heathcliff) exist prior to will, making moral evaluation complex. We\'re responsible for our actions toward inevitable bonds, but not responsible for bonds themselves.'
      },
      {
        name: 'Death as Inadequate Separation',
        explanation: 'The chapter reveals death\'s limitation: it can separate bodies but cannot separate ontologically entangled identities. Heathcliff prays for haunting because he recognizes death won\'t end their bond—physical separation inadequate for metaphysical connection. This challenges common assumption that death is absolute boundary. Gothic literature consistently shows the dead remaining present to the living through haunting, memory, psychological presence. Modern psychology recognizes this: bereaved people maintain "continuing bonds" with deceased, talking to them, sensing their presence, making decisions based on what deceased would want. Death doesn\'t end relationships; it changes their form. Catherine haunting Heathcliff will literalize the psychological reality that the dead never fully leave the living—we carry them with us always.'
      },
      {
        name: 'The Failure of Civilization',
        explanation: 'Edgar represents civilization: rationality, morality, gentleness, social order. Heathcliff represents forces beyond civilization: passion, violence, sublime intensity. Catherine chose civilization (marrying Edgar) but IS the sublime (ontologically bonded to Heathcliff). The result is death—you cannot civilize the sublime. Brontë critiques Enlightenment faith that civilization can tame all human passions. Some forces exist beyond social control, and attempting to domesticate them destroys rather than reforms. This is simultaneously Romantic celebration of passion over civilization AND Gothic warning about forces beyond human control. Modern relevance: recognition that some aspects of human existence resist rationalization—trauma, obsession, addiction, certain loves—and treating them as merely behavioral problems misunderstands their nature as forces beyond simple will.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Narrative Frame\'s Inadequacy',
        explanation: 'This scene is reported by Nelly to Lockwood to us—triple narrative distance. Yet intensity breaks through every frame. Nelly doesn\'t fully understand what she\'s witnessing (beyond her emotional register), Lockwood certainly doesn\'t (he\'s conventional outsider), yet we readers feel the sublime intensity despite narrative mediation. This technique shows: some experiences transcend narrative containment. Even disapproving, uncomprehending narrator cannot diminish the scene\'s power. Brontë demonstrates that sublime love exists independent of interpretation—it overwhelms even those who witness and report it. The frames usually provide control, judgment, interpretation; here they fail, forcing readers to encounter Catherine-Heathcliff directly despite narrative barriers.'
      },
      {
        name: 'Gothic Sublime Aesthetics',
        explanation: 'The scene is Gothic sublime: terrible, beautiful, overwhelming, beyond human scale. It occurs at death\'s threshold (liminal space), involves physical violence (holding that leaves bruises), invokes supernatural (prayer for haunting), creates terror and awe simultaneously. It\'s not romanticized—there\'s nothing pretty about dying woman convulsing in desperate man\'s arms. Yet it\'s undeniably powerful, moving, meaningful. Gothic sublime involves encountering forces beyond control—storms, wilderness, death, passions beyond reason. Catherine-Heathcliff\'s reunion is Gothic sublime encounter: it terrifies (their destructiveness) and awes (their intensity) simultaneously. Brontë uses Gothic aesthetics to represent love that transcends beauty into sublime.'
      },
      {
        name: 'Simultaneity of Opposites',
        explanation: 'The scene holds opposites in tension without resolving them: love and accusation, embrace and violence, life and death, presence and separation. They simultaneously blame each other and cling to each other. Neither contradiction cancels out—both exist fully at once. This technique reveals emotional reality: we can feel opposed things simultaneously. Catherine both killed herself (chose Edgar) and was killed (driven mad by circumstances). Heathcliff both loves Catherine (cannot release her) and hates her (accuses her unforgivingly). Holding these opposites without false resolution creates the scene\'s intensity—no neat emotional categorization possible, only overwhelming complexity.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Connect classic text to contemporary life
  // ===================================================================
  modernAdaptation: {
    setting: 'Imagine being at hospital bedside of someone you deeply loved but couldn\'t be with—ex-partner, person who chose someone else, impossible relationship that couldn\'t work. They\'re dying. Family (who disapproves of you) is at church. You have maybe 30 minutes. You go to say goodbye. What happens? Not peaceful closure—explosion. All the accusations: "You abandoned me." "You chose them over me." "You destroyed my life." "You destroyed YOUR life by your choices." Neither accepting responsibility. Both clinging desperately despite the anger. Knowing this intensity is probably killing them but unable to stop. Begging them to haunt you rather than leave completely. This isn\'t romantic movie goodbye—it\'s raw, messy, unresolved, simultaneously loving and vicious. Death doesn\'t resolve anything; it just makes the impossibility permanent.',
    
    parallels: [
      '💔 **"You have killed me"**: Catherine blames Heathcliff for her death. Modern parallel: in breakups, people blame ex for their suffering—"you destroyed me," "you ruined my life." Sometimes accusation is accurate (abusive relationships), sometimes it\'s avoiding responsibility (own choices contributed). Often both are true: relationship was mutually destructive.',
      '⚖️ **Mutual blame with no resolution**: They each have valid grievances but neither accepts responsibility. Parallel: relationships ending with mutual recrimination where both parties are simultaneously victim and perpetrator. Couples therapy often reveals: both hurt each other, both contributed to destruction, assigning blame is futile because causation is circular.',
      '🪦 **"Be with me always—take any form—drive me mad"**: Heathcliff prefers haunted half-life to peaceful separation. Parallel: people who cannot move on after loss, maintain shrines to deceased, talk to them daily, prefer tormented connection to healthy grief. "Continuing bonds" with deceased can be healthy (remembering lovingly) or unhealthy (refusing to engage with life because you\'re living in relationship with ghost).',
      '🔄 **Deathbed reunion triggering crisis**: Their meeting literally kills Catherine—emotional intensity her body can\'t handle. Parallel: when people with unresolved intense relationships reunite, it can trigger relapse (addiction), crisis (mental health), or literally physical collapse (heart attack, stroke in high-emotion confrontations). Some relationships are so intense that any contact is dangerous.',
      '🚫 **Unforgiveness until death**: Neither forgives the other; both die with mutual unforgiveness. Parallel: family estrangements where people die without reconciliation. Sometimes forgiveness isn\'t possible (wrongs too great), sometimes pride prevents it, sometimes both parties are waiting for other to apologize first. Death makes unforgiveness permanent—no more chances.',
      '💀 **Love transcending/trapped by death**: Their connection won\'t end with death—she\'ll haunt, he\'ll be haunted. Parallel: psychological reality that dead remain present to living through memory, grief, unresolved issues. You can\'t "just move on" from some losses; the dead occupy psychological space in the living, shaping decisions, relationships, identity. Not supernatural but psychological haunting.'
    ],
    
    discussionPrompt: 'We idealize "closure"—saying proper goodbyes, resolving conflicts before death, achieving forgiveness and peace. But what about relationships that are too intense, too broken, too mutually destructive for closure? Catherine and Heathcliff show: some relationships cannot be resolved, only ended (by death, separation, choice). Is it better to seek impossible closure (risking final destructive encounter) or accept that some things cannot be resolved and must be carried unfinished? When someone is dying, do we owe them forgiveness even if they don\'t deserve it? Or is forced forgiveness invalidating our legitimate pain? How do we hold both: someone can matter deeply to us AND have harmed us irreparably?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // Ongoing themes that recur throughout the novel
  // ===================================================================
  thematicThreads: [
    {
      emoji: '💀',
      name: 'Love Beyond Death / Haunting',
      explanation: 'Heathcliff\'s prayer for Catherine to haunt him establishes supernatural dimension that will dominate Volume II. Their love won\'t end with death—it will transform into haunting. This thread questions: Is haunting curse (torment) or blessing (continued connection)? Can love transcend death, or is it delusion? Is Heathcliff\'s desire for haunting romantic devotion or pathological inability to let go?'
    },
    {
      emoji: '⚡',
      name: 'Sublime Love (Overwhelming, Destructive)',
      explanation: 'Their reunion is sublime—terrifying and awe-inspiring simultaneously. Too intense for life to contain, can only be expressed at death\'s threshold. This thread explores love as overwhelming force beyond moral evaluation: not good or bad but elemental, like storm or earthquake. Such love destroys but also reveals something transcendent. Is this ideal or warning?'
    },
    {
      emoji: '🔄',
      name: 'Mutual Destruction Without Villain',
      explanation: 'Both Catherine and Heathcliff destroy each other; neither is pure victim or villain. This thread shows how intense relationships can create mutual damage where assigning blame is impossible because both contribute to shared destruction. It complicates romance narratives that need clear good/bad characters and shows dysfunction as systemic, not individual.'
    },
    {
      emoji: '⚰️',
      name: 'Death as Inadequate Separation',
      explanation: 'Death will separate their bodies but cannot separate their ontologically entangled identities. This thread questions assumption that death is absolute boundary and shows how the dead remain present to living—through haunting (supernatural), memory (psychological), or unresolved connection (relational). Volume II will explore whether death creates freedom or just new form of bondage.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // 5-7 open-ended questions for classroom or personal reflection
  // ===================================================================
  discussionQuestions: [
    {
      title: 'Mutual Blame and Responsibility',
      question: 'Catherine accuses Heathcliff: "You have killed me." Heathcliff accuses Catherine: "Why did you betray your own heart?" Both accusations have validity. In mutually destructive relationships, is it possible to assign responsibility, or does blame become meaningless when both parties have hurt each other? How do we hold people accountable for harm while recognizing their own victimization?'
    },
    {
      title: 'Love vs. Obsession',
      question: 'Heathcliff begs Catherine\'s ghost to haunt him: "Be with me always—take any form—drive me mad!" Is this profound love (devotion beyond death) or pathological obsession (inability to let go)? Where is the line between continuing bonds with deceased (healthy grief) and haunting (unhealthy refusal to move on)? Can the same behavior be healthy for some people and unhealthy for others?'
    },
    {
      title: 'Deathbed Reconciliation Ethics',
      question: 'Their reunion likely hastens Catherine\'s death—the emotional intensity her body can\'t handle. Was allowing this meeting: (1) right (she needed to see him before death, regardless of consequences), (2) wrong (Nelly enabled destructive encounter), or (3) inevitable (neither could have prevented it)? Do dying people have right to see anyone they request, even if that person is harmful?'
    },
    {
      title: 'Forgiveness and Unforgiveness',
      question: 'Neither Catherine nor Heathcliff forgives the other—both die with mutual unforgiveness. Is forgiveness necessary for love, or can love coexist with unforgiveness? Should Catherine forgive Heathcliff for marrying Isabella (revenge cruelty)? Should Heathcliff forgive Catherine for marrying Edgar (betrayal of their bond)? Or are some betrayals unforgivable while connection remains?'
    },
    {
      title: 'Romantic Idealization vs. Reality',
      question: 'This scene is simultaneously romantic (passionate devotion beyond death) and horrific (violent accusations, convulsions, death). How does Brontë critique romantic idealization of passionate love? Is their connection beautiful despite its destructiveness, or is the destructiveness inherent to its intensity? Can we admire it without endorsing it?'
    },
    {
      title: 'Ontological Connection vs. Healthy Boundaries',
      question: 'Catherine said "I am Heathcliff"—they experience themselves as single entity, not separate people. This creates absolute connection but prevents healthy boundaries. Is this level of fusion: (1) romantic ideal (perfect unity), (2) psychological dysfunction (enmeshment), or (3) rare but genuine phenomenon some people experience? How do we distinguish transcendent connection from codependent fusion?'
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // For teachers: writing prompts, activities, cross-curricular connections
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Unresolved Goodbye: Writing Deathbed Confrontation',
      description: 'Write a 3-4 page scene where two people with intense, complicated relationship meet for final time as one is dying. Requirements: (1) Both characters have legitimate grievances against the other. (2) Neither fully accepts responsibility for their role in relationship\'s destruction. (3) Love and anger coexist—they cling to each other while accusing each other. (4) No neat resolution—some things remain unforgivable, unforgotten, unresolved. (5) Focus on showing emotion through action and dialogue, not exposition. Challenge: Make readers simultaneously understand why they cannot be together AND why they cannot be apart.',
      purpose: 'This exercise teaches: (1) Complex characterization where people are simultaneously victim and perpetrator. (2) Emotional contradiction—holding opposed feelings simultaneously. (3) Showing vs. telling emotional intensity. (4) Tragedy where no one is pure villain but disaster is inevitable. (5) Resisting easy resolution—some scenes end without closure because life doesn\'t always provide closure. Students learn that powerful writing doesn\'t require happy endings or clear moral lessons; it requires emotional truth.'
    },
    
    activity: {
      title: 'Staging the Scene: Blocking Emotional Intensity',
      description: 'Divide class into small groups. Each group stages the Catherine-Heathcliff reunion scene, focusing on: (1) Physical blocking—how close/far? Who moves toward/away? What physical contact? (2) Vocal choices—volume, pace, tone shifts between tender and accusatory. (3) Emotional beats—identifying moments where feelings shift. Groups perform for class, then discuss: What choices made the scene more/less effective? How does physical staging affect emotional impact? After performances, discuss: Could this scene be staged differently? What if Catherine or Heathcliff showed more/less vulnerability? What if they never touched? Never stopped touching?',
      materials: 'Scene excerpt, staging space, optional: simple props (chair for Catherine, suggesting her weakness)'
    },
    
    crossCurricular: {
      title: 'Psychology & Philosophy: Attachment, Identity, and Death',
      description: 'Pair this scene with: (1) Psychology: Attachment theory (anxious-avoidant dynamics), codependency vs. healthy interdependence, complicated grief, continuing bonds with deceased. (2) Philosophy: Personal identity (are we fundamentally separate or interconnected?), phenomenology of grief, ethics of deathbed wishes. (3) Hospice/Death Studies: What makes "good death"? Right to die with dignity vs. right to final connections regardless of consequences. Have students explore: Is Catherine-Heathcliff\'s connection psychological dysfunction or genuine phenomenon beyond clinical categories? Can we honor their experience without romanticizing dynamics that would be considered unhealthy in clinical setting?',
      subjects: ['Psychology', 'Philosophy', 'Thanatology', 'Ethics']
    }
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating one-liner with gold gradient styling
  // ===================================================================
  whyLiteratureMatters: getThenVsNowMessage(15),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Build anticipation for next chapter
  // ===================================================================
  nextTimeTeaser: {
    emoji: '💀',
    title: 'Death at Midnight: Catherine\'s Final Hours',
    preview: 'The reunion was devastating—but what comes next is worse. Catherine dies at midnight, just hours after seeing Heathcliff, giving birth two months premature to a daughter who will inherit all her mother\'s beauty but none of her fire. Edgar cradles both his dead wife and newborn daughter, trying to reconcile impossible loss with fragile new life. But Heathcliff? His grief transcends anything human. He doesn\'t cry—he howls like wounded animal, smashes his head bloody against trees, curses Catherine for dying peacefully without him. Then his rage transforms into the novel\'s most famous prayer: "I cannot live without my soul!" He begs Catherine\'s ghost to haunt him forever—preferring tormented connection to peaceful separation. Death won\'t end their bond; it will only transform it into something more terrible.',
    hookQuestion: 'Can grief be so profound that death cannot sever the connection? Is Heathcliff\'s prayer for haunting romantic devotion or pathological refusal to let go? When someone loses the person they experienced as extension of their own soul, can they ever truly live again—or are they condemned to existing as living ghost, waiting for death to reunite them? Catherine dies, but her story is far from over. Next: the haunting begins.'
  }
}

