/**
 * WUTHERING HEIGHTS - CHAPTER 6
 * 
 * Catherine and Heathcliff spy on Thrushcross Grange; Catherine is injured and stays with the Lintons, beginning her transformation
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getThenVsNowMessage } from '@/app/lib/literature-matters-messages'

export const chapter6: ChapterData = {
  number: 6,
  title: '',
  
  readingTime: 14,
  pages: 7,
  
  // ===================================================================
  // SUMMARY
  // Two-level summary: brief (one sentence) and full (3-4 paragraphs)
  // ===================================================================
  summary: {
    brief: 'Catherine and Heathcliff escape to spy on Thrushcross Grange, where Catherine is bitten by the Lintons\' dog and forced to stay for five weeks—beginning her transformation from wild child to refined lady.',
    
    full: [
      'After Hindley forbids them from being with the family, Catherine and Heathcliff run away to the moors. They decide to spy on the Linton children at Thrushcross Grange—the civilized counterpoint to Wuthering Heights. Peering through the window, they see Edgar and Isabella Linton quarreling over a pet dog in an absurdly petty dispute. The wild children mock these pampered indoor creatures, but their laughter attracts attention.',
      
      'When they try to flee, the Lintons\' bulldog Skulker catches Catherine by the ankle and won\'t let go. The servants discover the "intruders," and the Lintons are horrified to find two rough children from Wuthering Heights—especially when they recognize Catherine as Mr. Earnshaw\'s daughter. They take her inside for medical care, but Heathcliff, dismissed as a "wicked boy" and potential thief, is thrown out and sent home alone.',
      
      'Catherine remains at Thrushcross Grange for five weeks recovering. During this time, the Lintons "reform" her—teaching her manners, dressing her in fine clothes, treating her like a young lady. When she returns to Wuthering Heights at Christmas, she\'s physically transformed: elegant dress, styled hair, proper speech. But the transformation is more than physical—she\'s tasted civilization and can\'t fully return to wilderness.',
      
      'Heathcliff, meanwhile, has remained unchanged—still rough, still dirty, still an outsider. The contrast between them is now visible and painful. Catherine tries to maintain her old closeness with Heathcliff while also maintaining her new refinement, but the chapter makes clear this is impossible. The class divide has entered their relationship like a physical barrier. The Lintons have accomplished what Hindley\'s cruelty could not: they\'ve separated Catherine from Heathcliff by making her "better" than him.'
    ]
  },
  
  // ===================================================================
  // TERMS TO KNOW
  // Literary devices, vocabulary words, and concepts crucial to understanding
  // ===================================================================
  termsToKnow: [
    {
      term: 'Turning Point (Plot Structure)',
      definition: 'The moment in a narrative when the direction of the plot fundamentally changes, often through an event that makes the tragic outcome inevitable.',
      context: 'This chapter is the novel\'s turning point: Catherine\'s injury and stay at Thrushcross Grange initiates the transformation that will separate her from Heathcliff and lead to tragedy. Before this moment, reconciliation was possible; after it, the path toward destruction is set.',
      whyItMatters: 'Recognizing turning points helps us understand how tragedy works—it\'s not sudden disaster but rather small moments that close off possibilities. Catherine\'s five weeks with the Lintons seem minor but prove irreversible. This teaches us that identity changes through accumulation of small choices and experiences.'
    },
    {
      term: 'Foil Characters',
      definition: 'Characters whose contrasting traits highlight specific qualities in the protagonist—used to emphasize differences through comparison.',
      context: 'The Linton children (Edgar and Isabella) are perfect foils to Catherine and Heathcliff. The Lintons quarrel over trivial possessions indoors while Catherine and Heathcliff roam free; the Lintons embody civilization, refinement, weakness, while Catherine and Heathcliff embody nature, wildness, strength.',
      whyItMatters: 'Brontë uses foil characters to make visible the class and cultural differences that will tear Catherine and Heathcliff apart. The quarreling Lintons seem absurd, but their "civilization" proves more powerful than Catherine and Heathcliff\'s "natural" bond. This shows how social forces override individual passion.'
    },
    {
      term: 'Symbolism (The Dog Bite)',
      definition: 'When an object, character, or event represents abstract ideas beyond its literal meaning—the dog bite symbolizes civilization\'s violence.',
      context: 'Skulker the bulldog biting Catherine isn\'t just a physical injury—it\'s the moment civilization literally sinks its teeth into her, won\'t let go, and draws her away from Heathcliff. The "civilized" Lintons keep a vicious guard dog while calling Heathcliff "wicked"—revealing civilization\'s hidden violence.',
      whyItMatters: 'Great literature uses concrete physical events to represent abstract forces. The dog bite = civilization capturing and transforming Catherine against her will. Once you see this pattern, you realize Brontë shows (through symbol) rather than tells (through explanation) the violence of social "improvement."'
    },
    {
      term: 'Social Mobility (and its Impossibility)',
      definition: 'The ability (or inability) to move between social classes—a central concern of Victorian literature and a source of tragedy in this novel.',
      context: 'Catherine can be "elevated" from wildness to ladyhood because she was born an Earnshaw. Heathcliff cannot, despite identical behavior, because his origins are unknown and he\'s racialized as "other." The same actions (spying on the Lintons) lead to Catherine\'s transformation and Heathcliff\'s expulsion.',
      whyItMatters: 'This chapter reveals the Victorian class system\'s central cruelty: social mobility depends on birth, not merit. Catherine and Heathcliff are equally "wild," but only she can be reformed. This structural inequality—not personal failing—drives the tragedy. Understanding this prevents victim-blaming in literature and life.'
    },
    {
      term: 'Nature vs. Civilization (Central Theme)',
      definition: 'The tension between "natural" wildness/freedom and "civilized" refinement/constraint—a key thematic opposition in the novel.',
      context: 'This chapter literalizes the nature/civilization divide. Thrushcross Grange = warmth, light, refinement, books, pretty quarrels, but also confinement and pettiness. The moors = cold, darkness, freedom, passion, but also roughness. Catherine must choose between two worlds that cannot be reconciled.',
      whyItMatters: 'Brontë doesn\'t present civilization as simply "good" or nature as simply "free"—both have attractions and dangers. The tragedy is that Catherine cannot inhabit both worlds. This complexity makes Wuthering Heights great: no easy answers, only impossible choices that feel real.'
    },
    {
      term: 'Peripeteia (Reversal of Fortune)',
      definition: 'A sudden reversal of circumstances or fortune, especially in tragedy—from Greek drama, meaning the turning point where fortune changes.',
      context: 'Catherine goes to the moors as Heathcliff\'s equal and returns from Thrushcross Grange as his superior. This reversal—achieved through five weeks of "reform"—changes everything. She\'s now caught between two identities, two social positions, two possible futures.',
      whyItMatters: 'Aristotle identified peripeteia as essential to tragedy: the moment when everything changes and cannot be unchanged. Understanding this concept helps us recognize tragic structure: we\'re watching the mechanism by which small changes produce catastrophic outcomes. Catherine\'s transformation is both her elevation and her doom.'
    }
  ],
  
  // ===================================================================
  // CHARACTERS
  // Character development for this chapter
  // ===================================================================
  characters: [
    {
      name: 'Catherine Earnshaw',
      development: 'This chapter marks Catherine\'s fundamental transformation from wild child to divided self. The five weeks at Thrushcross Grange don\'t just change her appearance (though the physical transformation is dramatic)—they give her a new identity as "lady" that conflicts with her authentic self as Heathcliff\'s soulmate. She returns trying to be both people simultaneously, laughing with Heathcliff while maintaining her fine dress and manners. But the chapter makes clear this double identity is unsustainable. She\'s discovered she can be admired, elevated, treated as special—and this knowledge, once gained, can\'t be unlearned. The Catherine who returns from the Lintons is no longer the Catherine who ran to the moors.',
      keyTrait: {
        emoji: '🎭',
        text: 'Divided Self'
      }
    },
    {
      name: 'Heathcliff',
      development: 'While Catherine transforms, Heathcliff remains utterly unchanged—and this unchangeability, once their greatest bond, now becomes alienation. He\'s thrown out of Thrushcross Grange like an animal while Catherine is taken in. During her five-week absence, he experiences for the first time what separation from Catherine means. When she returns "transformed," his confusion and hurt are visible beneath his defensive anger. He tries to dismiss the Lintons as weak and silly, but even he can see that civilization has given Catherine something he cannot provide: social status, refinement, admiration. His first real powerlessness begins here.',
      keyTrait: {
        emoji: '🚫',
        text: 'Excluded'
      }
    },
    {
      name: 'Edgar Linton',
      development: 'We see Edgar first through Catherine and Heathcliff\'s mocking eyes: a pampered boy crying over a dog, quarreling with his sister over possessions, embodying everything weak and petty about civilization. But the chapter also reveals his power: he lives in warmth and light, he has books and education, he represents the world of refinement Catherine has been denied. His very weakness is a form of privilege—he can afford to be gentle because he\'s protected by wealth and status. He\'ll eventually offer Catherine what Heathcliff cannot: social legitimacy, respectability, security.',
      keyTrait: {
        emoji: '🏛️',
        text: 'Civilized Weakness'
      }
    },
    {
      name: 'Isabella Linton',
      development: 'Isabella appears as Edgar\'s spoiled sister, fighting over a pet dog in a tantrum that Catherine and Heathcliff find absurd. She\'s everything Catherine is not: delicate, sheltered, raised in luxury, prone to tears and hysteria over trivialities. But she represents the life available to young ladies of her class—a life Catherine, despite her wildness, is also entitled to by birth. Isabella\'s pettiness highlights both the absurdity of civilized life and its undeniable attractions.',
      keyTrait: {
        emoji: '👑',
        text: 'Pampered'
      }
    },
    {
      name: 'Hindley Earnshaw',
      development: 'Hindley\'s role in this chapter is catalytic: by forbidding Catherine and Heathcliff from family activities, he drives them to the moors and eventually to Thrushcross Grange. His cruelty inadvertently exposes Catherine to the Linton world and initiates her transformation. He wants to degrade Heathcliff but ends up losing Catherine to a different social sphere entirely. His abuse backfires—he makes the moors an escape that leads Catherine to discover a "better" world than Wuthering Heights.',
      keyTrait: {
        emoji: '⚡',
        text: 'Unintended Consequences'
      }
    }
  ],
  
  // ===================================================================
  // KEY QUOTES
  // 3-5 significant quotes with analysis
  // ===================================================================
  quotes: [
    {
      text: 'The Lintons heard us, and with one accord they shot like arrows to the door; there was silence, and then a cry, "Oh, mamma, mamma! Oh, papa! Oh, mamma, come here. Oh, papa, oh!" They really did howl out something in that way.',
      analysis: 'Heathcliff\'s mocking narration reveals his contempt for the Lintons\' pampered helplessness—their first response to "intruders" is to cry for their parents. But his mockery also reveals his outsider status: he can\'t understand that being protected is a privilege, that crying for help means having someone who will help. The Lintons\' "weakness" is actually power—they have the security to be vulnerable. Heathcliff and Catherine have neither protection nor innocence; their toughness is necessity, not strength.'
    },
    {
      text: 'Look, Edgar, look! See, Miss Isabella, look at your fat dog— how splendid he looks! He has torn one of his ears. He shall be taken away! Is he hurt, grandpapa?',
      analysis: 'This quote captures the Lintons\' horrified reaction to the dog injuring Catherine—their concern for the dog ("Is he hurt?") before full recognition of Catherine\'s injury reveals their distance from physical reality. They live in a world where violence against a rough "intruder" by their guard dog is natural, but they\'re shocked when forced to see the actual injury. The moment exposes civilization\'s hidden violence—they keep vicious dogs while considering themselves gentle.'
    },
    {
      text: 'The contrast resembled what you see in exchanging a bleak, hilly, coal country for a beautiful fertile valley; and his voice and greeting were as opposite as his aspect.',
      analysis: 'Nelly compares Thrushcross Grange to Wuthering Heights using landscape metaphor: fertile valley vs. bleak coal country. The metaphor reveals geographic determinism—environments shape inhabitants. But it also reveals bias: Nelly assumes "fertile valley" = better, but the novel will question this. Bleak moors produce Catherine and Heathcliff\'s passionate bond; the "beautiful valley" produces the Lintons\' petty quarrels and Edgar\'s weakness. Which environment is actually superior? The novel leaves this unresolved.'
    },
    {
      text: 'I could not wring from my little lady how she had spent the day... but I discerned that she had been taught to behave properly in refined society. Catherine, I am ashamed to say, was all but a savage still.',
      analysis: 'After five weeks, Catherine returns "reformed" in manners but not in nature—she\'s learned to perform refinement while remaining "savage" underneath. The phrase "I am ashamed to say" reveals Nelly\'s internalized class values: she considers Catherine\'s wildness shameful, refinement superior. But the novel itself doesn\'t share this judgment—Catherine\'s "savage" nature is her authenticity. The tragedy is that she must choose between authentic self and social acceptance; Victorian society permits no compromise.'
    },
    {
      text: 'Well, well, Miss Catherine... I can still find a use for my pocket-handkerchief. However, the mire should be cleaned off the cheeks before they come near me; and as for you, Heathcliff, you may come forward.',
      analysis: 'Catherine tries to kiss Hindley in greeting (her natural affection), but he recoils from her dirty face—"the mire should be cleaned off" before affection can be permitted. Physical dirt becomes metaphor for social contamination. Hindley will tolerate Heathcliff\'s presence but not physical contact or equality. This moment shows how cleanliness, manners, and refinement create literal barriers to intimacy. The body itself becomes a site of class warfare—who is clean enough to touch?'
    }
  ],
  
  // ===================================================================
  // IA ANALYSIS
  // Intelligence Amplified deep analysis
  // ===================================================================
  iaAnalysis: {
    themes: [
      {
        name: 'The Violence of Civilization',
        explanation: 'This chapter reveals that "civilization" isn\'t opposed to violence—it simply disguises and legitimizes it. The Lintons keep vicious guard dogs to attack intruders, then express shock at the resulting injury. They call Heathcliff "wicked" while their own dog literally tears into a child. The chapter shows how civilized society protects itself through violence (guard dogs, locked doors, property rights) while calling itself gentle and refined. This hypocrisy—violence in service of "civility"—recurs throughout the novel. The dog bite is both literal injury and symbolic representation: civilization\'s refinement depends on violent exclusion of the "uncivilized."'
      },
      {
        name: 'Identity as Performance vs. Authenticity',
        explanation: 'Catherine learns at Thrushcross Grange that identity is performative—she can "become" a lady by wearing certain clothes, speaking certain ways, adopting certain manners. But the novel asks: if you perform an identity successfully, does your "authentic" self matter? Catherine tries to maintain both identities (wild with Heathcliff, refined with the Lintons), but discovers identity requires consistency. The tragedy is that her authentic self (bonded to Heathcliff) cannot coexist with her performed self (refined lady). Victorian society demands total commitment to a social role, permitting no divided self. Modern readers recognize this as profoundly oppressive, but it was the reality of rigid class structure.'
      },
      {
        name: 'Class and Racialization',
        explanation: 'This chapter makes explicit that Heathcliff\'s exclusion isn\'t just about behavior or manners—it\'s about his racialized identity. Catherine and Heathcliff are equally "wild," but she can be reformed while he cannot because his dark skin and unknown origins mark him as permanently other. The Lintons recognize Catherine as "Miss Earnshaw," someone who can be elevated; they see Heathcliff as a "wicked boy" and potential thief. Same actions, different treatment based on birth and appearance. This is structural racism and classism working together: Heathcliff is excluded not for what he does but for who he is.'
      }
    ],
    literaryTechniques: [
      {
        name: 'Contrasting Settings (Pathetic Fallacy Extended)',
        explanation: 'Brontë uses contrasting physical spaces to represent opposing value systems. Thrushcross Grange = interior warmth, light, books, fine furnishings, but also confinement, pettiness, and artificiality. The moors = exterior cold, darkness, freedom, passion, but also harshness and exposure. Characters must choose between environments that represent incompatible ways of being. Catherine\'s tragedy is geographic and social—she cannot physically or metaphorically inhabit both spaces simultaneously.',
        example: 'Catherine standing in Wuthering Heights in her fine dress from the Lintons, trying to embrace Heathcliff while keeping her clothes clean—the physical impossibility mirrors the social impossibility of maintaining both identities.'
      },
      {
        name: 'Perspective and Sympathy Control',
        explanation: 'We see Thrushcross Grange first through Catherine and Heathcliff\'s mocking eyes—the Lintons seem ridiculous, pampered, weak. Brontë makes us share the wild children\'s contempt before revealing the Lintons\' power. This narrative technique (show weakness before power) creates complex sympathy: we despise the Lintons\' pettiness but must acknowledge their social dominance. Edgar is simultaneously contemptible and powerful, weak and privileged. This prevents simple hero/villain dynamics and creates moral complexity.',
        example: 'Edgar crying over a pet dog seems pathetic until we realize he\'ll eventually win Catherine\'s hand through the very "weakness" that makes him contemptible—his refined gentleness is a form of courtship that rough Heathcliff cannot match.'
      },
      {
        name: 'The Window as Barrier and Portal',
        explanation: 'Windows recur throughout Wuthering Heights as symbolic barriers between inside/outside, civilized/wild, belonging/exclusion. In this chapter, Catherine and Heathcliff look through the window at the Lintons\' world—it\'s tantalizingly visible but physically separate. The window (like the dog) keeps them out. Later, Catherine will be inside looking out; in Chapter 3, the ghost Catherine tries to break through the window to return inside. Windows represent the barrier between incompatible worlds.',
        example: 'Heathcliff will later stand outside Catherine\'s window at Thrushcross Grange, literally and symbolically excluded from her new life—able to see her but not reach her, present but outside.'
      }
    ]
  },
  
  // ===================================================================
  // MODERN ADAPTATION
  // Contemporary reimagining of chapter events
  // ===================================================================
  modernAdaptation: {
    setting: 'Two working-class kids from a rough neighborhood sneak into an exclusive gated community to see how the wealthy live. When they\'re caught by private security, the girl—who has lighter skin and "passes" as middle-class—is taken inside for medical treatment while the darker-skinned boy is arrested and driven back to his neighborhood. She spends weeks in foster care with a wealthy family, learning their manners and gaining access to their world, while he waits alone.',
    parallels: [
      '**The geographic divide**: Gated communities with private security = Thrushcross Grange with guard dogs. Both physically separate classes while claiming to promote "safety" and "refinement." Both use violence (security, dogs) to maintain boundaries while presenting themselves as civilized.',
      '**Differential treatment based on appearance**: Catherine can be "reformed" because she\'s recognized as Miss Earnshaw; Heathcliff is expelled as threatening. Modern parallel = racial profiling and "respectability politics." Same behavior produces different outcomes based on skin color, perceived class, and cultural markers.',
      '**Cultural assimilation vs. authentic identity**: Catherine learning manners/refinement = code-switching, assimilation pressure on minority or working-class students in elite spaces. The pressure to "fit in" by abandoning authentic self, accent, cultural practices. The choice between advancement and authenticity.',
      '**Foster care/mentorship programs**: The Lintons "adopting" Catherine for five weeks = modern programs that place underprivileged youth in wealthy homes or elite schools. Well-intentioned but often damaging: creates divided identity, separates youth from their community, implies "improvement" means abandoning their culture.'
    ],
    discussionPrompt: 'Have you ever felt pressure to "code-switch" or change your behavior, speech, or appearance to fit into a different social environment? What\'s the emotional cost of maintaining multiple identities across different spaces? When does adaptation become betrayal of self?'
  },
  
  // ===================================================================
  // THEMATIC THREADS
  // 4-6 key themes with emoji and explanation
  // ===================================================================
  thematicThreads: [
    {
      emoji: '🐕',
      name: 'The Civilized Guard Dog',
      explanation: 'Skulker the bulldog represents civilization\'s hidden violence—the Lintons keep a vicious animal to protect their refinement, then express shock when it actually harms someone. This symbolizes how "civilized" society uses violence to maintain boundaries while denying its own aggression.'
    },
    {
      emoji: '🪟',
      name: 'Windows Between Worlds',
      explanation: 'Catherine and Heathcliff look through the window at a life they cannot enter—windows represent the visible but impassable barrier between social classes. You can see the other world but glass separates you from it. This barrier will recur throughout the novel.'
    },
    {
      emoji: '👗',
      name: 'Costume as Identity',
      explanation: 'Catherine\'s transformation through clothing and manners raises the question: is identity performance or essence? If you dress and act like a lady, are you a lady? Victorian society said yes; Catherine\'s internal struggle says it\'s not that simple.'
    },
    {
      emoji: '⚖️',
      name: 'Unequal Treatment, Equal Behavior',
      explanation: 'Catherine and Heathcliff do exactly the same thing (spy on the Lintons), but she\'s reformed while he\'s expelled. This reveals systemic inequality—outcomes depend not on actions but on identity markers (birth, race, class) beyond individual control.'
    },
    {
      emoji: '🌓',
      name: 'Before and After',
      explanation: 'This chapter divides the novel into before Catherine\'s transformation (equality with Heathcliff possible) and after (inequality permanent). Five weeks change everything irreversibly—showing how identity is shaped by environment and how small exposures produce massive changes.'
    },
    {
      emoji: '🎭',
      name: 'The Double Self',
      explanation: 'Catherine tries to be both wild and refined, natural and civilized, Heathcliff\'s equal and Edgar\'s superior. But Victorian society permits no divided self—you must choose one identity fully. Her attempt to maintain both will lead to psychological collapse and death.'
    }
  ],
  
  // ===================================================================
  // DISCUSSION QUESTIONS
  // 5-7 thought-provoking questions
  // ===================================================================
  discussionQuestions: [
    {
      title: 'The Ethics of "Improvement"',
      question: 'The Lintons "improve" Catherine by teaching her manners, refinement, and civilized behavior. But is this improvement or violence? Does Catherine consent to this transformation, or is it done to her while she\'s vulnerable? What\'s the difference between education and cultural erasure?'
    },
    {
      title: 'Sympathy and Social Position',
      question: 'We first see the Lintons through mocking eyes—they seem ridiculous, weak, petty. But they ultimately have more power than the "strong" Catherine and Heathcliff. How does Brontë manipulate our sympathies? Can we simultaneously despise someone and acknowledge their power? How does this complexity reflect real social dynamics?'
    },
    {
      title: 'The Window Scene as Class Barrier',
      question: 'Catherine and Heathcliff look through the window at the Lintons\' world—they can see it but not enter it. What does the window symbolize? How does physical barrier represent social barrier? Why does Brontë make this moment visual rather than abstract?'
    },
    {
      title: 'Is Heathcliff\'s Exclusion About Behavior or Identity?',
      question: 'Heathcliff and Catherine behave identically (running wild, spying on the Lintons), but she\'s reformed while he\'s expelled. Is this about manners or race/class? Could Heathcliff ever be "reformed" like Catherine, or is his exclusion permanent regardless of behavior? What does this tell us about Victorian class and race?'
    },
    {
      title: 'Divided Identity as Tragedy',
      question: 'Catherine tries to maintain two identities—wild with Heathcliff, refined with the Lintons. Modern readers might see this as "code-switching" or navigating multiple worlds. Why can\'t Catherine maintain both? Is her divided self a personal failing or a structural impossibility? Could any person successfully inhabit incompatible social positions?'
    },
    {
      title: 'Nature vs. Civilization: Which is "Better"?',
      question: 'The Lintons seem petty and weak, but they live in warmth and comfort. Catherine and Heathcliff seem strong and passionate, but they endure cold and abuse. Does Brontë present either nature or civilization as superior? Or does she show both as having attractions and costs? What\'s lost and gained in each world?'
    },
    {
      title: 'The Dog Bite as Turning Point',
      question: 'Why does Brontë make this chapter\'s turning point a dog bite rather than a conscious choice? What\'s the effect of making Catherine\'s transformation begin with injury rather than decision? How does this change our understanding of her later choices?'
    }
  ],
  
  // ===================================================================
  // AMPLIFIED DISCUSSION
  // 3-4 expandable deep-dive discussions
  // ===================================================================
  amplifiedDiscussion: [
    {
      id: 'amp-discuss-1',
      title: 'The Window as Metaphor Throughout the Novel',
      question: 'Why does Brontë repeatedly use windows as barriers between inside/outside, belonging/exclusion?',
      aiResponse: `The window is Wuthering Heights' most potent recurring symbol—a transparent barrier that allows vision but prevents contact. In this chapter, Catherine and Heathcliff press against the window looking in at the Lintons' world. Later, Heathcliff will stand outside windows looking in at Catherine's new life with Edgar. In Chapter 3, the ghost Catherine tries desperately to break through a window to get inside. At the novel's end, Heathcliff opens windows obsessively, hoping Catherine will enter.

**What the window represents:**

**Visible but impassable barriers**: You can see the other world (class, lifestyle, relationship) but cannot enter it. The transparency makes exclusion more painful—you're not blind to what you're missing, you see it constantly but remain outside.

**The threshold between incompatible states**: Inside = civilization, warmth, belonging, refinement. Outside = nature, cold, exclusion, wildness. The window marks the border between worlds that cannot overlap.

**The fragility of separation**: Glass is solid but breakable. Catherine could break through (and in Chapter 3's nightmare, tries to), but breaking through means destroying the boundary itself—you can't gently cross a window, you must shatter it.

**Why this metaphor is brilliant**: Brontë could describe class barriers abstractly, but the window makes them physical and visual. We can picture Heathcliff's face pressed against glass, watching Catherine in warmth while he stands in cold. The image conveys exclusion more powerfully than exposition could.

**The tragic irony**: In death, Catherine finally achieves what she couldn't in life—the ability to pass through barriers, appearing inside and outside simultaneously. But this "freedom" is only possible as a ghost, not a living person. Victorian society's rigid boundaries can only be transcended through death.`
    },
    {
      id: 'amp-discuss-2',
      title: 'Code-Switching, Assimilation, and the Cost of "Advancement"',
      question: 'Catherine learns to "code-switch" between her wild self with Heathcliff and her refined self with the Lintons. Why can\'t she maintain both?',
      aiResponse: `Catherine's divided identity is recognizable to anyone who has navigated between different cultural or class spaces—the experience of speaking/acting one way at home and another way at school/work, feeling authentic in neither space, fearing discovery in both.

**What Catherine gains from the Lintons:**
- Social legitimacy ("Miss Earnshaw" rather than "wild child")
- Education in manners, refinement, cultural codes
- Access to comfort, beauty, admiration
- The possibility of respectable marriage (Edgar)
- Escape from Hindley's household and abuse

**What Catherine loses:**
- Authentic connection with Heathcliff (equality, understanding)
- Her natural wildness and freedom
- Unity of self (she becomes divided, performing roles)
- Acceptance by either world fully (too wild for Lintons, too refined for Heathcliff)

**Why she can't maintain both:**

Victorian society demanded total commitment to a social role. You couldn't be half-lady, half-wild. Middle-class identity required consistent performance of refinement—any lapse revealed you as "not really" civilized. Catherine tries to be both but finds that Heathcliff resents her refinement and the Lintons would be horrified by her wildness.

**Modern parallel**: First-generation college students, immigrants, or working-class people entering elite spaces often describe feeling "not enough" for either world. Too educated/assimilated for their community of origin, too marked by class/accent/culture for their new environment. This double consciousness—seeing yourself through two incompatible sets of values—is psychologically exhausting.

**The tragic question**: Should Catherine have refused the Lintons' "improvement" and stayed wild with Heathcliff? But that would mean accepting poverty, abuse by Hindley, and social invisibility. Should she have fully embraced refinement and abandoned Heathcliff? But that would mean betraying her authentic self. The tragedy is that there's no good choice—both options require devastating sacrifice.

**Why this matters today**: We often frame education and social mobility as purely positive, but Catherine's story reveals the cost. Moving between classes means divided identity, loss of original community, and psychological burden of maintaining multiple selves. Acknowledging this cost doesn't mean rejecting opportunity, but it does mean recognizing that "advancement" isn't painless or simple.`
    },
    {
      id: 'amp-discuss-3',
      title: 'The Violence of Civility: Guard Dogs and Respectability',
      question: 'How does this chapter reveal that civilization isn\'t opposed to violence—it just disguises it?',
      aiResponse: `The Lintons present themselves as gentle, refined, and civilized—they read books, wear fine clothes, speak softly. But they also keep a vicious guard dog trained to attack intruders. When Skulker tears into Catherine's ankle, they're shocked, not by the violence itself but by having to see its consequences. This hypocrisy—using violence while calling yourself peaceful—is central to Brontë's critique of "civilization."

**Forms of civilized violence in this chapter:**

**The guard dog**: Literally trained to bite intruders (i.e., working-class children from nearby), protecting property and class boundaries through violence, but named "Skulker" as if it's natural behavior rather than trained aggression.

**Heathcliff's expulsion**: Immediately labeled "wicked boy" and "little lascar" (racial slur), assumed to be a thief, thrown out without consideration. The Lintons' instinctive racism and classism is violence—it marks Heathcliff as permanently unworthy based on appearance, not action.

**Catherine's "reform"**: Presented as kindness (medical care, fine clothes, education in manners), but it's also violence against her authentic self. They erase her wildness, teach her to despise her own nature, separate her from Heathcliff. Cultural erasure framed as improvement.

**The locked doors and windows**: Physical barriers that require guard dogs, servants watching for intruders, constant vigilance. The Lintons' comfort depends on violent exclusion of the "uncivilized."

**The broader critique:**

Brontë shows that "civilization" doesn't eliminate violence—it legitimizes and disguises it. The Lintons would never personally attack a child, but they keep dogs to do it for them. They would never explicitly say "we exclude the poor and nonwhite," but their space is designed to enforce that exclusion automatically.

**Modern parallels:**
- Gated communities with private security ("protection" that's really class exclusion)
- "Zero tolerance" school policies that disproportionately punish minority students
- Immigration enforcement ("border security" as state violence)
- Gentrification ("neighborhood improvement" as displacement of poor residents)
- Respectability politics (requiring marginalized people to act "civilized" for basic rights)

All these systems claim to be neutral, reasonable, or protective, but they use violence to maintain inequality. Brontë's insight: the civilized classes are not less violent than the wild—they're just better at hiding, justifying, and outsourcing their violence.

**The dog bite as perfect symbol**: It's literal (real injury) and metaphorical (civilization sinking its teeth into Catherine). It's accidental (no one intended Catherine specifically to be hurt) and systemic (the dog was trained to attack intruders). It initiates Catherine's "improvement" (she stays with the Lintons because of the injury) through violence (the very bite that traps her). This layered symbolism shows Brontë's genius—she uses a single concrete image to reveal complex social dynamics.`
    },
    {
      id: 'amp-discuss-4',
      title: 'Structural Inequality: Same Actions, Different Outcomes',
      question: 'Catherine and Heathcliff do exactly the same thing (run wild, spy on the Lintons), so why is she reformed while he\'s expelled?',
      aiResponse: `This is Wuthering Heights' most brutal insight into structural inequality: outcomes depend not on actions but on identity markers—birth, race, class, gender—that individuals cannot control. Catherine and Heathcliff are equally "wild," equally "uncivilized," perform identical behaviors. But she can be elevated and he cannot, purely because of who they are, not what they do.

**Why Catherine can be reformed:**
- Recognized as "Miss Earnshaw"—daughter of a gentleman farmer, someone of their class
- Light-skinned, European features—conforms to Victorian beauty standards
- Female—can be molded into "young lady," a recognized social role
- Her wildness is temporary aberration that can be corrected

**Why Heathcliff cannot:**
- Unknown origins, suspected to be Romani or mixed-race—racialized as permanently "other"
- Dark skin, dark features—marked as non-European, therefore uncivilized by nature
- Male "savage"—seen as dangerous rather than reformable
- His wildness is assumed to be inherent, unchangeable nature

**The cruel mechanism of structural inequality:**

Individual merit or behavior doesn't determine outcomes. The Lintons don't evaluate Catherine vs. Heathcliff based on actions or potential—they immediately categorize based on appearance and birth. Catherine gets opportunity; Heathcliff gets expulsion. Same behavior → different treatment → different life trajectories.

**Modern parallels:**

**Criminal justice**: Identical crimes produce different sentences based on race and class—white defendants more likely to receive lenient sentences, Black defendants harsher punishment for same offense.

**Education**: Teachers unconsciously give more attention, patience, and benefit-of-doubt to students who match their own race/class background. Two students with identical behavior receive different treatment based on teacher's perception.

**Hiring**: Identical resumes with "ethnic" vs. "white" names receive different callback rates—behavior (qualifications) matters less than identity markers.

**Social services**: Middle-class parents receive "help" and "support" for problems (addiction, abuse) that get poor parents labeled "unfit" and lose custody of children. Same behaviors, different outcomes based on class.

**Why this is so important to understand:**

If we believe outcomes reflect individual choices, we blame Heathcliff for his future villainry and credit Catherine for her elevation. But Brontë shows the outcomes were determined by structural forces beyond their control. Heathcliff doesn't fail because he lacks merit—he fails because the system denies him the opportunities given to Catherine for identical behavior.

**This prevents victim-blaming in literature and life**: When we see inequality of outcome, we must ask: was this caused by individual failing or systemic barriers? Wuthering Heights teaches us to see structural forces that produce inequality regardless of individual merit.

**The chapter's devastating question**: If identity determines outcome regardless of behavior, what hope exists for justice? Can individual virtue overcome structural oppression? Brontë doesn't offer easy answers—she just forces us to see the problem clearly.`
    }
  ],
  
  // ===================================================================
  // EDUCATOR RESOURCES
  // Teaching tools and cross-curricular connections
  // ===================================================================
  educatorResources: {
    writingPrompt: {
      title: 'The Moment Everything Changed',
      description: 'Write about a moment when a seemingly small event changed your life trajectory—when you gained access to a new world, learned to code-switch between environments, or felt divided between incompatible identities. How did the change feel at the time vs. looking back? What was gained and what was lost? Explore the complexity of "advancement" or "improvement" that comes with costs.',
      purpose: 'Helps students connect Catherine\'s turning point to their own experiences of identity, belonging, and navigating multiple social worlds. Develops personal narrative skills and self-reflection.'
    },
    activity: {
      title: 'Mapping Social Spaces: Inside and Outside',
      description: 'Create a visual map of Wuthering Heights vs. Thrushcross Grange, noting physical details (warmth/cold, light/dark, open/enclosed) and associating them with character traits and values. Then create a parallel map of two contrasting spaces in your own community (wealthy vs. working-class neighborhoods, public vs. private schools, etc.). What physical barriers separate these spaces? What assumptions or values are associated with each? Who has access to which spaces?',
      materials: 'Large paper, markers, novel text for reference, optional photos of contrasting spaces in your community'
    },
    crossCurricular: {
      title: 'Victorian Class System and Social Mobility',
      description: 'Connect to history units on Victorian England, Industrial Revolution, and class structure. Examine: primogeniture and inheritance laws, domestic servants and social hierarchy, education access by class, marriage as economic transaction. Compare Victorian social mobility (nearly impossible) to modern social mobility (theoretically possible but increasingly difficult). Use economic data to examine class barriers today.',
      subjects: ['History', 'Economics', 'Sociology']
    }
  },
  
  // ===================================================================
  // CRITICAL THINKING EXERCISE
  // Advanced analytical challenge
  // ===================================================================
  criticalThinkingExercise: {
    title: 'Analyzing "Improvement" as Violence or Liberation',
    prompt: 'The Lintons "improve" Catherine by teaching her manners, refinement, and civilized behavior. But is this liberation (giving her access to a better life) or violence (erasing her authentic self)? This question has no simple answer—it requires examining both what Catherine gains and what she loses, considering her agency (did she choose this?) and its consequences (psychological division, separation from Heathcliff). Your task is to build an argument defending EITHER position, using textual evidence, then explain the strongest counterargument to your own position.',
    guidingQuestions: [
      'What does Catherine gain from her five weeks with the Lintons? Consider both material benefits (comfort, medical care, fine clothes) and social benefits (access to refinement, possibility of respectable marriage, escape from Hindley).',
      'What does Catherine lose? Consider identity (her wild nature), relationships (equality with Heathcliff), and psychological unity (she becomes divided between incompatible selves).',
      'Does Catherine consent to this transformation, or is it done to her while she\'s vulnerable (injured, young, separated from Heathcliff)? How does consent change our judgment of whether this is liberation or violence?',
      'If Catherine had refused the Lintons\' "improvement" and remained wild, what would her life look like? Would that have been better or worse? For her? For Heathcliff?',
      'Can education or cultural assimilation be both violent (erasing authentic identity) AND liberating (providing opportunities) simultaneously? Or must we choose one interpretation?'
    ],
    thinkingFramework: {
      analyze: 'Examine both what Catherine gains (opportunities, refinement, social access) and loses (wildness, connection with Heathcliff, unity of self). Use specific textual evidence for each side.',
      evaluate: 'Assess whether the benefits outweigh the costs, or whether this cost-benefit framing itself is inadequate. Consider who decides what constitutes "improvement" and whose values are privileged.',
      synthesize: 'Develop a nuanced position that acknowledges complexity—perhaps "improvement" is neither purely liberation nor purely violence but a traumatic transformation with both gains and losses that cannot be easily weighed against each other.'
    },
    expectedDepth: 'Students should move beyond simple "good or bad" judgments to grapple with genuinely difficult questions: Can something be simultaneously beneficial and harmful? What role does consent play in determining whether change is liberation or violence? How do we evaluate transformations that provide opportunities while destroying authenticity? This exercise develops tolerance for ambiguity and complexity.',
    classroomApplication: 'After individual analysis, conduct a structured debate where students argue opposing positions, then break into small groups to develop nuanced positions that acknowledge both sides. Conclude by connecting to modern questions: cultural assimilation vs. multiculturalism, code-switching in professional spaces, the costs and benefits of social mobility.'
  },
  
  // ===================================================================
  // WHY LITERATURE MATTERS
  // Rotating message about literature's value
  // ===================================================================
  whyLiteratureMatters: getThenVsNowMessage(6),
  
  // ===================================================================
  // NEXT TIME TEASER
  // Preview of the next chapter to maintain engagement
  // ===================================================================
  nextTimeTeaser: {
    emoji: '🎄',
    title: 'Next Time: The Christmas Revelation',
    preview: 'Catherine returns to Wuthering Heights at Christmas, transformed into a lady. The contrast between her refinement and Heathcliff\'s unchanged wildness becomes painfully visible. Hindley forces Catherine to choose between maintaining her new ladylike status and her old intimacy with Heathcliff. Edgar Linton visits and further highlights the impossibility of Catherine maintaining both worlds. The chapter crystallizes the social and emotional barriers that now separate Catherine from Heathcliff—barriers created not by changed feelings but by changed social position. We\'ll witness the first open conflict between Catherine\'s two selves, and watch Heathcliff realize that something has been taken from him that he may never recover.',
    hookQuestion: 'Can Catherine maintain her connection with Heathcliff while also inhabiting her new identity as refined lady? Or has the five-week transformation changed her so fundamentally that return to equality is impossible? When Heathcliff sees her refined and laughing with Edgar, what will he do with the pain of recognizing he\'s been left behind? The next chapter forces the characters—and readers—to face what "improvement" actually costs.'
  }
}

