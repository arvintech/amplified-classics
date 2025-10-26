/**
 * SENSE AND SENSIBILITY - CHAPTER 18
 * 
 * The sisters learn of Willoughby's engagement to another woman,
 * crushing Marianne's romantic hopes and revealing his true character.
 */

import { ChapterData } from '@/app/lib/types/book.types'
import { getLiteratureMessageByChapter } from '@/app/lib/literature-matters-messages'

export const chapter18: ChapterData = {
  number: 18,
  title: 'The Engagement Revealed',
  
  readingTime: 12,
  pages: 5,
  
  summary: {
    brief: 'News arrives that Willoughby is engaged to a wealthy woman, confirming Marianne\'s worst fears and revealing that his sudden departure was to pursue financial advantage rather than resolve complications preventing commitment to her.',
    
    full: [
      'Chapter 18 delivers devastating confirmation of Marianne\'s fears. News reaches Barton that Willoughby is engaged to Miss Grey, a woman of considerable fortune. This revelation transforms his sudden departure from mysterious abandonment into clear betrayal—he left not because of unavoidable complications but to pursue a wealthier match. His vague explanations about "urgent business" are revealed as deliberate deception, and his romantic behavior toward Marianne is exposed as either cynical manipulation or self-indulgent romance pursued despite knowing he would ultimately marry for money.',
      
      'The news devastates Marianne completely. Her romantic certainty—her absolute conviction that their shared taste, passionate connection, and behavioral intimacy meant genuine love and certain future together—is shattered. She must confront that everything she interpreted as evidence of his love (daily visits, intimate conversations, meeting her family, romantic gestures) either meant something different to him or was performed despite his intention to marry someone else. The gap between her interpretation of their relationship and the reality of his intentions creates catastrophic disillusionment.',
      
      'Elinor observes Marianne\'s suffering with painful recognition of both similarities and differences to her own situation. Like Marianne, Elinor loves a man who is engaged to someone else. However, Edward\'s engagement preceded his relationship with Elinor and represents duty to prior commitment rather than mercenary calculation. Willoughby\'s engagement reveals active choice to pursue wealth over love, making his behavior toward Marianne either cruelly misleading or selfishly irresponsible. The distinction matters—Edward\'s situation involves tragic conflict between duty and desire; Willoughby\'s reveals character willing to sacrifice love for financial advantage.',
      
      'The chapter explores how hope transforms into confirmed loss. While Willoughby\'s departure created agonizing uncertainty, Marianne could maintain hope that complications would resolve and he would return. His engagement eliminates that hope definitively. The chapter shows how confirmation of feared outcome, while ending uncertainty\'s torture, creates different suffering—the pain of knowing definitively that relationship is lost and that person you loved chose someone else. Marianne must grieve not just lost future but also betrayed past, reinterpreting entire relationship through lens of his ultimate choice to marry for money rather than love.'
    ]
  },
  
  termsToKnow: [
    {
      term: 'Marrying for Money',
      definition: 'Choosing a spouse primarily for financial advantage rather than love, compatibility, or genuine attachment.',
      context: 'Willoughby\'s engagement to Miss Grey—a woman of considerable fortune—reveals he prioritized financial security over romantic attachment to Marianne. His behavior suggests he either courted Marianne cynically while always intending to marry wealth, or indulged in genuine romantic connection he knew couldn\'t culminate in marriage given his financial needs. Either interpretation reveals character willing to sacrifice love for money, treating marriage as primarily economic transaction rather than romantic partnership.',
      whyItMatters: 'Willoughby\'s behavior is condemned because he courted Marianne intensely while knowing he\'d ultimately marry for money, creating suffering through deception. Modern parallels include dating for love while planning to "marry up" financially, or leaving relationships for wealthier prospects. Understanding this helps distinguish legitimate financial considerations from manipulating people emotionally while planning to leave for money.'
    },
    {
      term: 'Retroactive Betrayal',
      definition: 'The painful realization that past relationship moments, previously interpreted as genuine, were actually performed under false pretenses or with hidden agendas.',
      context: 'Learning of Willoughby\'s engagement forces Marianne to retroactively reinterpret their entire relationship. Every intimate conversation, romantic gesture, and moment of apparent mutual understanding must now be understood as occurring while he either intended to marry someone else or was undecided between love and money. This transforms cherished memories into painful evidence of betrayal—not because moments weren\'t enjoyable when experienced but because they were built on false foundation of assumed mutual commitment and honest intentions.',
      whyItMatters: 'This damages not just present and future but also past—you lose both the relationship and your positive memories of it. Modern examples: discovering partner was cheating during your relationship\'s best period, or learning someone pursued you strategically while committed elsewhere. Your feelings were genuine even if partner\'s weren\'t, and joy you felt was valid even if founded on incomplete information.'
    },
    {
      term: 'Hope vs. Certainty in Grief',
      definition: 'The transition from uncertain loss (hoping situation might improve) to confirmed loss (knowing definitively that relationship is over).',
      context: 'Willoughby\'s departure created agonizing uncertainty—Marianne could hope complications would resolve and he would return. His engagement eliminates that hope definitively. This transition from uncertain to certain loss involves distinct grief stages: uncertainty creates anxiety and suspended processing; certainty enables grief but also brings relief from hoping. Marianne must stop waiting and start accepting that relationship is definitively over, beginning actual grief process rather than remaining in limbo of hope.',
      whyItMatters: 'Confirmed loss, while painful, often enables better processing than ongoing uncertainty—you cannot fully grieve while hoping situation might change. Modern examples: waiting for an ex to return versus learning they\'re in a new relationship, or hoping for a job offer versus receiving definite rejection. Sometimes painful closure serves better than sustained ambiguity.'
    },
    {
      term: 'Mercenary Romance',
      definition: 'Romantic behavior motivated primarily by self-interest (financial gain, social advancement, personal benefit) rather than genuine attachment.',
      context: 'Willoughby\'s romance with Marianne appears to be mercenary in retrospect—either he cynically courted her while always intending to marry wealth, or he indulged romantic attraction despite knowing financial needs would prevent marriage to someone without fortune. Either way, his romantic behavior served his interests (emotional/physical intimacy, pleasant companionship) without genuine intention to commit, making his courtship fundamentally dishonest and exploitative regardless of whether his feelings were genuine at the time.',
      whyItMatters: 'This uses romantic behavior to serve self-interest while concealing true intentions—dating for financial support, ego boost, or benefits while planning to leave when better opportunity arises. Red flags include behavior changing when learning your financial status, or showing more interest in what you provide than who you are. Genuine love considers both parties\' wellbeing rather than serving primarily one person\'s interests.'
    },
    {
      term: 'The Wealthy Rival',
      definition: 'A romantic competitor whose primary advantage is financial resources rather than personal qualities or compatibility.',
      context: 'Miss Grey, Willoughby\'s fiancée, is characterized primarily by her fortune rather than her personal qualities. She wins not because she\'s better matched to Willoughby in temperament, values, or interests, but because she has money he needs. This creates particular pain for Marianne—she\'s not losing to someone who offers what she couldn\'t (better compatibility, deeper connection) but to someone who simply has more money. The rejection isn\'t personal inadequacy but financial limitation she cannot remedy.',
      whyItMatters: 'This creates unique pain because you\'re losing not due to personal inadequacy but to financial limitations you cannot remedy. Modern examples: partner leaving for someone wealthier, or being passed over for better-resourced competitors. Being left for money reflects your partner\'s priorities and limitations, not your inadequacy—it reveals incompatibility in values regardless of finances.'
    },
    {
      term: 'Sensibility\'s Devastation',
      definition: 'The particular vulnerability created when romantic philosophy emphasizing intense feeling and instinctive judgment encounters betrayal or disillusionment.',
      context: 'Marianne\'s sensibility makes Willoughby\'s betrayal more devastating than it might be for someone with more reserved temperament. Her romantic philosophy encouraged total emotional investment based on passionate feeling and shared taste rather than careful character evaluation or explicit commitment. She assumed intense mutual attraction and compatible aesthetic preferences meant genuine love and certain future, investing completely without requiring explicit promises or evaluating his character critically. When betrayal comes, she has no emotional reserves—she\'s completely vulnerable because sensibility rejected protective skepticism as inauthentic.',
      whyItMatters: 'Sensibility creates beautiful experiences when feelings prove reliable but catastrophic vulnerability when they mislead—people who "love with their whole heart" face complete devastation when relationships fail. The solution isn\'t rejecting deep feeling but developing balance: maintaining capacity for intense emotion while building evaluation skills and resilience. Pure sensibility creates unsustainable vulnerability; pure sense creates emotionally impoverished life—the ideal integrates both.'
    }
  ],
  
  characters: [
    {
      name: 'Marianne Dashwood',
      development: 'Marianne experiences complete devastation as her worst fears are confirmed. Learning of Willoughby\'s engagement forces her to confront that her romantic certainty was completely unfounded—their connection meant something different to him than to her, or meant less, or was pursued despite his intention to ultimately marry for money. She must retroactively reinterpret entire relationship: were his feelings ever genuine? Did he always plan to marry wealth? Was she merely pleasant diversion? This retroactive betrayal is more painful than simple rejection because it damages her past as well as her future. Her sensibility makes devastation more complete—having invested totally without reservation or skepticism, she has no emotional reserves when betrayal comes. The chapter reveals both sensibility\'s beauty (capacity for complete devotion) and its danger (catastrophic vulnerability when devotion is misplaced). Her suffering is profound and legitimate, but her approach to love—assuming intensity of feeling indicates genuine mutual commitment without requiring explicit promises or careful character evaluation—has left her defensively vulnerable.',
      keyTrait: {
        emoji: '💔',
        text: 'Shattered Certainty'
      }
    },
    {
      name: 'John Willoughby',
      development: 'Willoughby\'s engagement reveals his true character. He chose wealth over love, financial security over romantic attachment, mercenary calculation over authentic connection. His behavior toward Marianne is exposed as either cynical manipulation (courting her while always planning to marry money) or selfish irresponsibility (indulging genuine attraction despite knowing financial needs would prevent marriage). Either interpretation condemns his character: he either deliberately deceived Marianne about his intentions, or he prioritized his own romantic pleasure over her emotional wellbeing by pursuing relationship he knew couldn\'t have future. His sudden departure without explanation now makes sense—he left to secure wealthy marriage while avoiding difficult conversation about why he courted Marianne intensely but won\'t marry her. His character is revealed as fundamentally mercenary: whatever his feelings, financial considerations ultimately determined his choices, and he was willing to sacrifice both Marianne\'s happiness and his own potential romantic fulfillment to secure economic advantage.',
      keyTrait: {
        emoji: '💰',
        text: 'Mercenary Choice'
      }
    },
    {
      name: 'Elinor Dashwood',
      development: 'Elinor observes Marianne\'s devastation with painful recognition of similarities and crucial differences to her own situation. Both sisters love men engaged to other women. However, Edward\'s engagement preceded his relationship with Elinor and represents duty to prior commitment, while Willoughby\'s engagement reveals active choice to pursue wealth over love. This distinction matters morally: Edward faces tragic conflict between competing obligations; Willoughby made mercenary calculation prioritizing money. Elinor cannot comfort Marianne by revealing her own parallel pain without exposing Edward\'s secret, creating additional burden of watching Marianne suffer alone while experiencing similar anguish privately. Her emotional labor continues: managing own heartbreak, supporting devastated sister, maintaining household stability, and preserving Edward\'s secret despite how sharing would ease her isolation. The chapter deepens her characterization as someone bearing compound burdens privately while supporting others publicly.',
      keyTrait: {
        emoji: '🤐',
        text: 'Silent Parallel'
      }
    },
    {
      name: 'Mrs. Dashwood',
      development: 'Mrs. Dashwood\'s optimistic assumptions are proven wrong. She encouraged Marianne to trust Willoughby\'s explanations and maintain hope for his return, dismissing Elinor\'s skepticism as pessimistic negativity. His engagement reveals that Elinor\'s caution was warranted and her own optimism was naïve. However, rather than acknowledging this or adjusting her approach, she validates Marianne\'s complete emotional collapse as appropriate response to betrayal. Her sensibility makes her sympathize with Marianne\'s devastation but prevents her from helping Marianne develop resilience or perspective. She treats Willoughby\'s betrayal as justification for Marianne\'s romantic philosophy rather than evidence of its dangers, missing opportunity to help Marianne learn from experience. This maternal enabling perpetuates rather than corrects sensibility\'s vulnerabilities, suggesting Mrs. Dashwood\'s love for her daughters, while genuine, doesn\'t always serve their development or wellbeing.',
      keyTrait: {
        emoji: '🌸',
        text: 'Validated Devastation'
      }
    }
  ],
  
  quotes: [
    {
      text: 'His own enjoyment, or his own ease, was, in every particular, his ruling principle.',
      speaker: 'Narrator',
      context: 'Describing Willoughby\'s character and motivations',
      analysis: 'This damning assessment reveals Willoughby\'s fundamental selfishness. His "ruling principle" isn\'t love, honor, duty, or consideration for others—it\'s his own enjoyment and ease. He courted Marianne because it was enjoyable; he left when continuing became difficult; he\'s marrying for money to ensure his future ease. This ruling principle makes him fundamentally unreliable as romantic partner because his behavior will always prioritize his interests over others\'. Modern application: recognizing when someone\'s consistent pattern involves choosing personal enjoyment/ease over responsibility to others. People whose ruling principle is self-interest will reliably abandon commitments, betray trust, and sacrifice relationships when maintaining them becomes inconvenient or less advantageous. Protection requires: observing whether someone\'s difficult choices reveal consistent prioritization of self-interest; recognizing that people reveal character through hard decisions (anyone can be generous when easy; character shows when generosity costs something); understanding that ruling principle predicts behavior more reliably than temporary performances.'
    },
    {
      text: 'Marianne Dashwood was born to an extraordinary fate. She was born to discover the falsehood of her own opinions, and to counteract, by her conduct, her most favourite maxims.',
      speaker: 'Narrator',
      context: 'Foreshadowing Marianne\'s romantic disillusionment',
      analysis: 'This narratorial comment reveals that Marianne\'s romantic philosophy will be tested and found wanting. Her "own opinions" about love (that intense feeling indicates genuine attachment, that shared taste ensures compatibility, that passionate devotion is sufficient) will be revealed as false or incomplete. She will discover through painful experience that her "most favourite maxims" (prioritizing feeling over judgment, trusting instinct over evaluation, valuing passion over prudence) don\'t protect from betrayal or ensure happiness. The phrase "extraordinary fate" suggests this disillusionment, while painful, serves important purpose: teaching through experience what she wouldn\'t learn through advice. Modern relevance: sometimes people must experience consequences of their beliefs to learn their limitations. Telling Marianne that sensibility creates vulnerability wouldn\'t convince her; experiencing betrayal that sensibility\'s approach enabled might. This doesn\'t mean painful experiences are good, but suggests that disillusionment can serve growth when it prompts reconsidering beliefs that created vulnerability.'
    },
    {
      text: 'She felt the loss of Willoughby\'s character yet more heavily than she had felt the loss of his heart.',
      speaker: 'Narrator',
      context: 'Describing Marianne learning Willoughby\'s true character',
      analysis: 'This profound statement distinguishes between two types of romantic loss: losing someone\'s love versus discovering their character wasn\'t what you believed. Losing his heart means he doesn\'t reciprocate feelings—painful but doesn\'t invalidate your judgment or experience. Losing his character means discovering the person you loved doesn\'t actually exist—he never possessed the qualities you attributed to him. This is more devastating because it means not just that relationship failed but that relationship you experienced was based on illusion. Marianne grieves not just losing Willoughby but learning that the Willoughby she loved (honorable, passionate, devoted) never existed—real Willoughby is mercenary, selfish, and irresponsible. Modern application: the particular devastation of discovering someone isn\'t who you thought. Learning partner cheated hurts; learning they systematically lied about who they are is more devastating because it requires reconstructing entire understanding of relationship. You lose both person and your sense of reality about what you shared. This grief is more complex: grieving lost relationship, grieving lost understanding of past, and grieving lost trust in own judgment that led you to believe in false character.'
    },
    {
      text: 'Against the interest of her own individual comfort, Mrs. Dashwood had determined that it would be better for Marianne to be any where, at that time, than at Barton.',
      speaker: 'Narrator',
      context: 'Mrs. Dashwood considering sending Marianne away',
      analysis: 'This sentence reveals Mrs. Dashwood\'s genuine love for Marianne—she\'s willing to sacrifice "her own individual comfort" (having Marianne nearby) for what she believes serves Marianne\'s wellbeing (leaving site of painful memories). This demonstrates authentic maternal love that prioritizes child\'s needs over own preferences. However, it also reveals limitation: Mrs. Dashwood believes changing location will help Marianne heal, suggesting somewhat superficial understanding of grief. Marianne\'s pain isn\'t primarily about being at Barton but about betrayal of trust and shattering of romantic philosophy—she\'ll carry that anywhere. Modern relevance: well-meaning people often suggest external changes (new location, new relationship, new activities) for internal suffering that requires different work (processing betrayal, reconsidering beliefs, developing resilience). This doesn\'t mean environment is irrelevant—sometimes change of scenery helps—but suggests that genuine healing requires internal work that location change alone cannot provide. For supporting grieving people: offer practical comfort while recognizing that deeper healing happens internally and requires time, processing, and often reconsideration of beliefs that created vulnerability.'
    },
    {
      text: 'Marianne\'s abilities were, in many respects, quite equal to Elinor\'s. She was sensible and clever; but eager in everything: her sorrows, her joys, could have no moderation.',
      speaker: 'Narrator',
      context: 'Comparing the sisters\' temperaments',
      analysis: 'This comparison reveals that Marianne\'s vulnerability doesn\'t stem from lesser intelligence or capability—she\'s "quite equal" to Elinor in ability. The difference lies in emotional regulation: Marianne\'s "eagerness in everything" means both her joys and sorrows are intense and unmoderated. This creates double-edged existence: her capacity for joy exceeds Elinor\'s reserved experience, but her capacity for sorrow does too. She lives at emotional extremes while Elinor maintains more measured experience. Neither approach is clearly superior: Elinor\'s moderation protects from catastrophic lows but may limit heights of joy; Marianne\'s lack of moderation enables profound experiences but creates devastating vulnerability. Modern application: recognizing that emotional intensity is temperamental characteristic rather than weakness. Some people feel intensely by nature—their joys are ecstatic, their sorrows are devastating, their experiences are always at extremes. This isn\'t immaturity or lack of control but genuine difference in emotional experience. What matters is developing appropriate coping mechanisms: intense feelers need strategies for managing both euphoric highs and devastating lows; moderate feelers need recognition that their measured response doesn\'t indicate lesser caring. For communities: support people in developing skills appropriate to their temperament rather than demanding everyone conform to single "correct" emotional intensity.'
    }
  ],
  
  iaAnalysis: {
    themes: [
      {
        name: 'Marrying for Money vs. Marrying for Love',
        explanation: 'Willoughby\'s choice to marry wealth over love reveals the conflict between economic security and romantic attachment. The chapter explores when financial considerations in marriage are legitimate practical concerns versus when they constitute mercenary betrayal of genuine connection.'
      },
      {
        name: 'Retroactive Betrayal',
        explanation: 'Learning Willoughby\'s true intentions forces painful reinterpretation of entire relationship. The chapter examines how discovering betrayal damages not just present and future but also past, requiring grief for both what was lost and what never actually existed as believed.'
      }
    ],
    
    literaryTechniques: [
      {
        name: 'Confirmation of Feared Outcome',
        explanation: 'Austen structures Marianne\'s romantic arc to move from hope (before departure) through uncertainty (Chapter 17) to confirmed loss (Chapter 18), showing how each stage creates different suffering.',
        example: 'The progression reveals that confirmation of loss, while painful, enables clearer grief than ongoing uncertainty\'s torture.'
      }
    ]
  },
  
  modernAdaptation: {
    setting: 'Modern person discovers that romantic partner who suddenly "needed space" is now engaged to someone wealthier. Previous intimate relationship—daily communication, meeting families, planning futures—is revealed as occurring while partner either intended to pursue financial security or was undecided between love and money. Must process both loss of relationship and retroactive reinterpretation of entire shared history.',
    
    parallels: [
      '💰 **Marrying for Money**: Willoughby choosing wealthy Miss Grey over Marianne = modern partners leaving relationships for wealthier prospects; people pursuing genuine connections while maintaining different relationships for financial benefit; individuals who date for love but "marry up" for security; partners who leave when learning about financial limitations',
      
      '💔 **Retroactive Betrayal**: Reinterpreting relationship through lens of his ultimate choice = modern discovering partner was cheating during period you thought relationship was at its best; learning someone pursued you strategically while committed elsewhere; finding that person was maintaining you as backup while prioritizing other relationship; realizing romantic gestures were performed while partner knew relationship wouldn\'t last',
      
      '📰 **Social Media Reveal**: Learning of Willoughby\'s engagement through news/gossip = modern discovering ex\'s new relationship through social media; finding engagement announcement when you thought you might reconcile; seeing partner you thought was "working on themselves" immediately with someone else; learning through public posts rather than private communication',
      
      '💸 **The Wealthier Rival**: Losing to Miss Grey who has fortune = modern partner leaving for someone with more money/status; being passed over for competitor with financial advantages; discovering you were left not for better compatibility but for better economic prospects; losing relationship because you couldn\'t provide financial benefits partner wanted',
      
      '❓ **From Hope to Certainty**: Transition from uncertain loss to confirmed loss = modern finally getting clear answer after ambiguous breakup; learning ex is definitely in new relationship after period of hoping for reconciliation; receiving confirmation that relationship is over after prolonged uncertainty; moving from "maybe" to "definitely not"',
      
      '🎭 **Mercenary Romance**: Willoughby\'s courtship serving his interests = modern people who date seriously while seeking financial support; partners pursuing romantic connections for benefits (housing, status, companionship) while planning to leave for better opportunity; individuals maintaining relationships for what they provide rather than who you are; using romantic behavior to serve self-interest',
      
      '😢 **Sensibility\'s Vulnerability**: Marianne\'s total investment creating complete devastation = modern "loving with whole heart" creating catastrophic pain when relationships fail; people whose romantic philosophy rejects caution experiencing betrayal without protection; those who invest completely based on feelings discovering judgments were wrong; vulnerability of trusting intense emotions over careful evaluation',
      
      '🔄 **Parallel Private Suffering**: Elinor\'s similar but hidden pain = modern people experiencing same heartbreak as friends but unable to share because of different circumstances; watching others process publicly what you\'re managing privately; having parallel painful experience you can\'t reveal without exposing secrets; supporting friends through suffering that mirrors your own',
      
      '🌸 **Enabling vs. Supporting**: Mrs. Dashwood validating Marianne\'s collapse = modern well-meaning support that perpetuates rather than addresses problems; family/friends who validate without helping develop resilience; supporters whose sympathy enables continued dysfunction rather than encouraging growth; difference between comfort that enables healing versus comfort that enables avoidance',
      
      '💭 **Character Loss vs. Love Loss**: Losing Willoughby\'s character more painful than losing his heart = modern discovering person you loved isn\'t who you thought; learning partner systematically lied about values/intentions; finding that relationship you experienced was based on false foundation; grief for both lost relationship and lost understanding of who partner actually was'
    ],
    
    discussionPrompt: 'How do you process discovery that someone you loved chose financial security over genuine connection with you? What\'s the difference between legitimate financial considerations in relationships versus mercenary calculation? How do you handle retroactive betrayal—learning that relationship you valued was occurring while partner had different intentions? When does hope for reconciliation serve versus when does it prevent necessary grieving? How do you distinguish between supporting someone\'s grief versus enabling continued dysfunction? What\'s worse: losing someone\'s love or discovering their character isn\'t what you believed? How do you recover when betrayal damages not just future but also cherished memories of past? When should financial compatibility factor into romantic decisions, and when does prioritizing money over connection reveal problematic values?'
  },
  
  thematicThreads: [
    {
      emoji: '💰',
      name: 'Love vs. Money in Marriage',
      explanation: 'Willoughby\'s choice to marry wealth reveals the perpetual tension between romantic attachment and economic security. In Regency England, marriage was economic arrangement as much as romantic partnership—women had limited earning capacity, men needed wealth to maintain status. However, even within that context, Willoughby\'s behavior is condemned because he pursued Marianne\'s affections intensely while knowing he\'d ultimately marry money. This thread explores when financial considerations are legitimate versus when they constitute betrayal. Watch how different characters navigate this tension and what Austen suggests about balancing practical needs with genuine connection.'
    },
    {
      emoji: '💔',
      name: 'Retroactive Betrayal: When Past Becomes Painful',
      explanation: 'Learning Willoughby\'s true intentions transforms Marianne\'s cherished memories into evidence of betrayal. This thread examines how discovering hidden agendas or false pretenses damages not just present and future but also past. Every moment must be reinterpreted: were his feelings genuine? Did he always plan to marry wealth? Was she merely diversion? This retroactive reinterpretation is particularly painful grief work. Watch how Marianne processes this compound loss—grieving both relationship and her understanding of what relationship actually was.'
    },
    {
      emoji: '⚖️',
      name: 'Hope vs. Certainty in Grief',
      explanation: 'Willoughby\'s departure created uncertainty (maybe he\'ll return); his engagement provides certainty (definitely won\'t). This thread explores how confirmed loss, while painful, often enables better processing than prolonged uncertainty. During uncertainty, you cannot fully grieve because situation might change; with certainty, grief is clear and unambiguous. Watch whether certainty ultimately serves Marianne\'s recovery better than uncertain hope did, despite the pain of confirmation. The novel examines when closure, even painful closure, serves better than sustained ambiguity.'
    },
    {
      emoji: '🎭',
      name: 'Mercenary Romance vs. Genuine Connection',
      explanation: 'Willoughby\'s engagement reveals his romance with Marianne as fundamentally mercenary—either cynical manipulation or selfish indulgence pursued despite knowing financial needs would prevent marriage. This thread examines how to distinguish genuine romantic interest from mercenary behavior serving self-interest. Watch for warning signs: Does partner\'s behavior align with stated intentions? Do they consider your wellbeing or primarily their own? Does relationship benefit them disproportionately? The novel explores how mercenary romance uses genuine-seeming behavior to serve hidden agendas.'
    },
    {
      emoji: '😢',
      name: 'Sensibility\'s Beautiful Vulnerability',
      explanation: 'Marianne\'s complete devastation reveals both sensibility\'s beauty and its danger. Her capacity for total devotion enables profound connection but creates catastrophic vulnerability when devotion is misplaced. This thread questions whether sensibility\'s approach to love—assuming intensity of feeling indicates genuine mutual commitment without requiring explicit promises or careful evaluation—is sustainable or whether some integration of sense is necessary for protection. Watch whether Marianne learns from this experience or whether her sensibility persists unchanged. The novel explores whether painful disillusionment prompts growth or merely creates suffering.'
    }
  ],
  
  discussionQuestions: [
    {
      title: 'Marrying for Money: Practical or Mercenary?',
      question: 'Willoughby chooses to marry Miss Grey for her fortune rather than Marianne for love. Is this practical decision given economic realities of his time, or does his prior courtship of Marianne make it mercenary betrayal? Consider: financial security is legitimate concern in marriage, but he courted Marianne intensely while knowing he\'d ultimately need to marry wealth. Modern application: when are financial considerations in relationships legitimate practical concerns versus when do they constitute using people? Is it ethical to pursue romantic connection you know cannot lead to commitment because of financial incompatibility?'
    },
    {
      title: 'Retroactive Betrayal: Grieving What Never Was',
      question: 'Learning Willoughby\'s true intentions forces Marianne to reinterpret their entire relationship. How does discovering hidden agendas or false pretenses damage past as well as future? Consider the difference between: losing someone who genuinely loved you but relationship didn\'t work out, versus discovering person you loved wasn\'t who you thought they were. Which is more painful and why? How do you recover when betrayal requires grieving both lost relationship and lost understanding of what relationship actually was?'
    },
    {
      title: 'Hope vs. Certainty: Which Hurts More?',
      question: 'Willoughby\'s departure created agonizing uncertainty; his engagement provides painful certainty. Which is worse: hoping indefinitely that someone might return, or knowing definitively they won\'t? Consider that uncertainty prevents full grieving (situation might change) but certainty enables clear processing (can accept reality and move forward). Modern application: when should you maintain hope versus when should you seek closure even if closure is painful? How long is reasonable to hope before needing definite answer?'
    },
    {
      title: 'Character Loss vs. Love Loss',
      question: 'Marianne feels "loss of Willoughby\'s character yet more heavily than she had felt the loss of his heart." Why is discovering someone isn\'t who you thought more painful than discovering they don\'t love you? Consider: losing love means relationship failed; losing character means relationship you experienced was based on illusion. Modern parallels: discovering partner cheated versus discovering they systematically lied about who they are. How does character loss require different grief work than simple relationship loss?'
    },
    {
      title: 'Sensibility\'s Vulnerability',
      question: 'Marianne\'s romantic philosophy—trusting intense feelings, assuming shared taste indicates compatibility, investing totally without skepticism—left her vulnerable to betrayal. Does this mean sensibility is wrong, or does it suggest need for balance between passion and prudence? Consider sensibility\'s beauty (capacity for profound connection) versus its danger (catastrophic vulnerability). How do you maintain capacity for deep feeling while developing protection against betrayal? Is there way to love intensely without creating complete vulnerability?'
    },
    {
      title: 'Enabling vs. Supporting Grief',
      question: 'Mrs. Dashwood validates Marianne\'s complete emotional collapse as appropriate response to betrayal. Is this supportive comfort or enabling dysfunction? Consider difference between: acknowledging pain and helping process it healthily, versus validating approaches that perpetuate suffering without promoting healing. How do you support grieving people without enabling continued dysfunction? When does sympathy serve healing versus when does it prevent necessary growth?'
    },
    {
      title: 'The Wealthier Rival',
      question: 'Marianne loses not to someone better matched to Willoughby but to someone with more money. How does losing to wealthy rival create different pain than losing to better-matched competitor? Consider that financial loss suggests your personal qualities were insufficient to overcome economic considerations. Modern application: partner leaving for wealthier prospect; being passed over professionally for better-resourced candidate. How do you process rejection based on financial limitations rather than personal inadequacy? What does choosing wealth over genuine connection reveal about person\'s values and priorities?'
    }
  ],
  
  amplifiedDiscussion: [
    {
      id: 'marrying-for-money',
      title: 'Marrying for Money: When Financial Considerations Become Mercenary Betrayal',
      question: 'Was Willoughby\'s decision to marry for money a practical necessity or a betrayal of genuine connection? When do financial considerations in relationships serve legitimate needs versus constitute using people?',
      aiResponse: `Willoughby\'s engagement to Miss Grey for her fortune rather than marrying Marianne for love raises complex questions about the role of money in romantic relationships. In Regency England, marriage was simultaneously romantic partnership and economic arrangement—women had extremely limited earning capacity and depended on marriage for financial security; men needed wealth to maintain social position and lifestyle. Within this context, financial considerations weren\'t merely mercenary but practical necessities for both parties.

**The Practical Reality:**

Willoughby apparently has expensive tastes and limited means. His need for wealth isn\'t frivolous luxury but maintenance of social position and lifestyle he\'s accustomed to. Without fortune, he faces social demotion and financial difficulty. Marriage to wealthy woman solves these problems practically. In his era, this wasn\'t unusual or automatically condemned—many marriages were openly understood as economic arrangements where affection, if it developed at all, came after rather than before marriage.

Miss Grey\'s family presumably accepts this arrangement: she gains socially desirable husband (Willoughby has good family, attractive personality, social skills); he gains her fortune. If both parties understand and accept these terms, one could argue the arrangement is honest economic partnership rather than exploitation.

**What Makes It Betrayal:**

However, Austen clearly condemns Willoughby despite these practical considerations. What transforms understandable financial calculation into betrayal isn\'t the decision to marry for money per se but his prior intensive courtship of Marianne. He spent weeks in daily intimate contact with her, behaving in ways that clearly suggested serious romantic intentions in social context where such behavior indicated courtship leading to marriage.

This behavior becomes betrayal because: First, if he always knew he needed to marry wealth, courting Marianne intensely while knowing relationship couldn\'t culminate in marriage was cruel deception. Second, if he pursued genuine romantic attachment but ultimately chose money over love, he prioritized his financial comfort over her emotional wellbeing, using her for enjoyable companionship while planning to leave for economic advantage. Third, he never disclosed his financial situation or need to marry wealth, allowing her to invest emotionally based on false assumptions about prospects.

**The Modern Parallel:**

Contemporary relationships involve similar tensions. Financial compatibility is legitimate concern—relationships face real stress when partners have incompatible financial values, habits, or resources. Being practical about financial aspects of partnership isn\'t mercenary; it\'s responsible adult decision-making.

However, modern mercenary romance involves: dating someone seriously while actually seeking financial support; pursuing genuine connection while maintaining different relationship for economic benefit; building intimate relationship while knowing you\'ll ultimately leave if wealthier prospect appears; or treating partner\'s financial status as primary consideration while performing romantic attachment.

Red flags include: partner whose behavior changes dramatically upon learning about your financial situation; relationship that progresses differently than partner\'s stated long-term plans; person who shows more interest in what you provide (housing, lifestyle, financial security) than who you are; or someone who maintains relationship primarily for benefits while pursuing other interests.

**The Ethical Framework:**

Distinguishing legitimate financial consideration from mercenary betrayal requires examining several factors:

**Honest Communication:** Are financial needs, constraints, and expectations discussed openly? Willoughby never disclosed that he needed to marry wealth, allowing Marianne to assume romance could lead to marriage regardless of finances.

**Mutual Understanding:** Do both parties understand what relationship is and isn\'t? If someone knows they need to marry for money but pursues romance with someone without fortune while concealing this, they\'re operating dishonestly.

**Timing of Disclosure:** Are financial limitations revealed early (allowing informed decision about investment) or concealed until after emotional attachment forms (creating pressure and preventing informed choice)?

**Behavioral Alignment:** Does behavior match stated intentions? If someone says they\'re not looking for serious relationship but behaves as if building toward marriage, or says money doesn\'t matter but consistently prioritizes wealthier prospects, their actions reveal true priorities.

**Consideration of Impact:** Does person consider how their financial decisions affect partner\'s wellbeing? Willoughby prioritized his comfort over Marianne\'s emotional suffering, revealing selfish ruling principle.

**Protection and Response:**

Protecting yourself from mercenary romance requires: First, early conversations about financial values, expectations, and deal-breakers. If someone needs partner with certain financial capacity, this should be disclosed before emotional investment deepens. Second, observing whether partner\'s actions align with words. If they claim money doesn\'t matter but behavior suggests otherwise, trust actions. Third, noting whether relationship benefits both parties or primarily serves one person\'s interests. Fourth, recognizing that unwillingness to discuss finances directly often indicates problem—either person knows their financial expectations would be deal-breaker, or they\'re uncomfortable with mercenary aspect of their own priorities.

When experiencing Marianne\'s situation: First, recognize that being left for money reflects partner\'s priorities and limitations, not your inadequacy. Someone choosing wealth over genuine connection reveals they value financial security more than qualities you offer. Second, understand this means you were incompatible in values regardless of finances—you prioritize connection; they prioritize money. This incompatibility would create problems even if you had wealth. Third, accept that someone willing to sacrifice genuine love for money lacks depth of character that makes partnership meaningful. You\'ve lost someone incapable of genuine devotion, which is ultimately fortunate even though painful.

**The Deeper Wisdom:**

Willoughby\'s situation teaches that financial considerations in relationships are legitimate but require honest communication and ethical treatment of partners. Practical about finances: responsible. Pursuing intimate connections while concealing that financial needs will prevent commitment: betrayal. The issue isn\'t whether money matters in relationships—it does, sometimes necessarily—but whether you treat people honestly about how financial factors affect your decisions and whether you prioritize your financial comfort over others\' emotional wellbeing. Ethical approach acknowledges financial needs while treating partners\' feelings with respect; mercenary approach uses romantic behavior to serve self-interest while concealing true intentions, creating suffering through deception regardless of whether underlying financial needs are legitimate.`
    },
    {
      id: 'retroactive-betrayal',
      title: 'When the Past Becomes Painful: Understanding Retroactive Betrayal and Character Loss',
      question: 'Why is discovering Willoughby\'s character more painful than losing his love? How does betrayal damage past memories as well as future hopes?',
      aiResponse: `The narrator observes that Marianne "felt the loss of Willoughby\'s character yet more heavily than she had felt the loss of his heart." This distinction captures an important truth about romantic betrayal: discovering someone isn\'t who you thought they were is more devastating than discovering they don\'t love you. This is retroactive betrayal—learning that relationship you valued was occurring under false pretenses or with hidden agendas, requiring painful reinterpretation of entire shared history.

**Two Types of Loss:**

**Losing Someone\'s Heart:** This is straightforward romantic rejection. Person genuinely cared about you but feelings changed, or feelings were never as deep as yours, or circumstances made relationship unworkable despite mutual affection. This hurts because you\'re losing future you hoped for and person you care about. However, your experience of relationship remains valid: the happy moments were real, the connection was genuine even if insufficient, and your judgment that this person had lovable qualities was accurate even though love didn\'t succeed.

**Losing Someone\'s Character:** This is discovering the person you loved never actually possessed the qualities you attributed to them. Marianne must confront that Willoughby isn\'t honorable romantic figure she believed but rather mercenary calculator prioritizing money over genuine connection. This is more devastating because it means: the relationship you experienced was based on false foundation; the person you loved didn\'t actually exist—real person has fundamentally different character; your judgment was wrong in important ways; and your cherished memories are now tainted by knowledge of hidden agendas or false pretenses.

**The Work of Retroactive Reinterpretation:**

Learning Willoughby\'s true character forces Marianne to review every interaction through new lens:

Were his romantic gestures genuine expressions of feeling or strategic performances securing her attachment while he considered options? When he spoke of their shared taste and future happiness, was he being authentic or self-indulgently enjoying connection he knew couldn\'t last? His sudden departure now makes sense—he left to secure wealthy marriage while avoiding difficult conversation. His vague explanations were deliberate deception, not mysterious complications.

This mental work is exhausting and painful. Every cherished memory must be reexamined: that moment when he said he loved her aesthetic preferences—was that genuine admiration or manipulation? The day he met her family—was that commitment signal or him enjoying pleasant experience without serious intentions? The intimate conversations—was he being emotionally authentic or indulging in enjoyable companionship he knew was temporary?

**Modern Manifestations:**

Contemporary relationships involve similar retroactive betrayals:

**Discovering Infidelity:** Learning partner cheated during period you thought relationship was strongest. Must reinterpret entire timeframe: Were their affectionate gestures genuine or guilt-driven? When they said "I love you," were they lying or compartmentalizing? That romantic weekend you cherish—were they thinking about other person?

**Uncovering Hidden Agendas:** Finding partner pursued you strategically for financial support, social access, or other benefits while performing romantic attachment. Your relationship experience was genuine to you but transactional to them. Every moment you interpreted as emotional connection was actually calculated strategy.

**Learning of Secret Relationships:** Discovering partner was married/engaged to someone else while building relationship with you. Everything you experienced together occurred while they were committed elsewhere, making your entire relationship different than you understood it to be.

**Finding Systematic Deception:** Learning partner lied comprehensively about identity, values, intentions, or circumstances. The person you knew literally doesn\'t exist—they were performing character while real person remained hidden.

**Why Character Loss Hurts More:**

Several factors make character loss more painful than simple love loss:

**Damages Multiple Timelines:** Love loss damages future (you won\'t be together) but preserves past (you had genuine connection). Character loss damages future, present, AND past (connection you thought you had never actually existed as experienced).

**Requires Grief Work Compounded:** Must grieve lost relationship, lost understanding of past, lost trust in own judgment, and lost belief in person\'s character. Each layer requires separate processing.

**Creates Reality Confusion:** When your experience of relationship fundamentally differed from what was actually occurring, it creates disorienting sense that you cannot trust your perception of reality. If you were so wrong about something you experienced intimately, what else might you be wrong about?

**Invalidates Experience:** Love loss acknowledges your experience was real even though outcome wasn\'t what you hoped. Character loss suggests your experience itself was partially illusory—you were responding to performance or projection rather than reality.

**Isolates You:** Can share "they don\'t love me anymore" without shame. Harder to share "I completely misjudged their character and invested deeply in relationship with someone who doesn\'t actually possess the qualities I attributed to them." Implies your judgment was poor, creating embarrassment that compounds pain.

**Protection and Recovery:**

Protecting from retroactive betrayal is difficult because requires trusting people to reveal true character honestly. However, some strategies help:

**Observe Actions Over Time:** Character reveals through patterns, not individual incidents. Does person\'s behavior align with stated values? Do they treat others ethically? Are their difficult choices consistent with claimed principles?

**Notice Behavior Under Stress:** Easy to perform character when circumstances are favorable. Real character shows when maintaining integrity costs something. How does person handle conflicts, mistakes, or situations where honesty isn\'t in their immediate interest?

**Trust Your Instincts About Inconsistencies:** If behavior doesn\'t align with stated intentions, or if you feel something is "off" even without specific evidence, don\'t dismiss those instincts as paranoia. Often intuition recognizes patterns before conscious mind can articulate them.

**Require Behavioral Proof:** Don\'t accept stated character at face value—require demonstrated character through actions over time. Someone claiming to be honest should demonstrate honesty in small matters; someone claiming to prioritize relationship should demonstrate that through choices.

**When Experiencing Retroactive Betrayal:**

**First, Separate Your Experience from Their Intentions:** Your feelings were genuine even if theirs weren\'t. Joy you felt in moments was real even if based on incomplete information. Your experience has validity independent of their hidden agendas.

**Second, Recognize This Reveals Their Limitations, Not Your Inadequacy:** Being deceived doesn\'t mean you\'re naive or foolish. It means you encountered someone willing to deceive. That reflects their character deficiency, not your judgment failure. Operating with good faith and trust is strength, not weakness—problem is people who exploit that trust.

**Third, Allow Yourself Compound Grief:** You\'re not just grieving lost relationship but also lost understanding of past and lost trust in judgment. All these losses deserve acknowledgment and processing.

**Fourth, Rebuild Trust in Judgment Carefully:** This doesn\'t mean becoming cynical or suspicious of everyone. It means: learning what red flags you missed, understanding what made you vulnerable to deception, and developing better skills for evaluating character without losing capacity for genuine connection.

**The Deeper Understanding:**

Retroactive betrayal teaches that relationship\'s value isn\'t just determined by outcome but also by authenticity of process. Failed relationship between genuine people leaves painful but uncomplicated grief. "Successful" relationship built on deception leaves complex trauma requiring more extensive healing. This is why discovering someone\'s character hurts more than losing their heart: you lose not just person and future but also past and sense of reality about what you shared, requiring grief work that addresses multiple layers of loss simultaneously.`
    },
    {
      id: 'sensibility-vulnerability',
      title: 'Sensibility\'s Beautiful Vulnerability: When Romantic Idealism Creates Catastrophic Pain',
      question: 'Does Marianne\'s devastating response to Willoughby\'s betrayal reveal that her romantic philosophy is fundamentally flawed, or does it demonstrate the inevitable cost of loving deeply?',
      aiResponse: `Marianne\'s complete devastation upon learning of Willoughby\'s engagement reveals both the beauty and danger of sensibility as romantic philosophy. Her approach to love—trusting intense feelings, assuming shared taste indicates compatibility, investing totally without skepticism or explicit commitment—enables profound connection but creates catastrophic vulnerability when those feelings mislead or when connection is betrayed. This raises fundamental questions about how to approach love: Should we protect ourselves through caution and skepticism, or embrace vulnerability despite risks?

**Sensibility\'s Romantic Philosophy:**

Marianne\'s approach involves several connected beliefs:

**Feeling as Primary Guide:** Intense emotional response indicates genuine connection worth pursuing. If feelings are powerful and mutual, relationship is right regardless of practical considerations or others\' cautions.

**Shared Taste as Compatibility:** Sharing aesthetic preferences and values about art, literature, music indicates deep compatibility. If you love same things, you\'re fundamentally matched.

**Skepticism as Inauthentic:** Questioning feelings or evaluating character critically violates authenticity of genuine emotion. Love should be intuitive, spontaneous, and unguarded rather than calculated and cautious.

**Total Investment as Honest:** If you love someone, you should invest completely without reservation. Holding back emotionally indicates insufficient attachment and damages relationship\'s authenticity.

**Explicit Commitment as Unnecessary:** When connection is genuine and mutual, formal promises are superfluous. Behavior demonstrating attachment is more meaningful than words requiring it.

**The Beautiful Part:**

This philosophy enables experiences Elinor\'s reserved approach cannot. Marianne experiences love as consuming passion, profound connection, ecstatic joy in shared moments. Her capacity for total devotion creates intensity of experience that more cautious people never achieve. When she\'s with Willoughby, she\'s completely present, fully invested, experiencing relationship at emotional heights.

This authenticity has real value. She\'s not performing measured interest while privately calculating; she\'s genuinely, completely, passionately engaged. This creates beautiful moments of profound connection and enables depths of intimacy that require vulnerability to access.

**The Devastating Danger:**

However, sensibility also creates catastrophic vulnerability. By rejecting careful evaluation, explicit commitment requirements, and protective skepticism, Marianne invests totally in relationship without verifying it can support that investment. When Willoughby betrays her, she has no emotional reserves—she\'s completely vulnerable because sensibility rejected building any protection as inauthentic.

Specifically, sensibility created these vulnerabilities:

**No Character Evaluation:** She assumed intense feelings indicated good character, never carefully evaluating whether Willoughby possessed qualities making him reliable partner.

**No Explicit Commitment:** She assumed behavioral intimacy meant commitment without requiring him to explicitly promise or commit, leaving her assuming future he never agreed to.

**No Emotional Reserve:** She invested totally from start, creating complete dependency on relationship\'s success without maintaining any independent emotional stability.

**No Protective Skepticism:** She dismissed warnings from Elinor and Brandon as unromantic cynicism rather than considering they might perceive real concerns her passion prevented her from seeing.

**Complete Identification:** She made relationship so central to identity that its loss threatens her entire sense of self and future possibility.

**The Balance Question:**

This raises difficult question: Is sensibility fundamentally flawed, requiring correction through sense? Or is this simply inevitable cost of loving deeply, and we must accept that profound connection requires vulnerability that creates risk of profound pain?

**Case Against Pure Sensibility:** Marianne\'s devastation suggests sensibility without any sense creates unsustainable vulnerability. Even if her feelings for Willoughby were appropriate, her approach gave her no tools for managing when relationship failed. She can\'t function, can\'t maintain perspective, can\'t find any resilience because sensibility rejected developing these capacities as inauthentic. This suggests pure sensibility is not sustainable—at some point, difficult experiences require management skills sensibility hasn\'t developed.

**Case For Sensibility\'s Value:** However, Elinor\'s approach also has costs. She maintains functionality but experiences love as more measured, managed, and controlled. She protects herself from catastrophic devastation but may never experience heights Marianne reaches. If love requires vulnerability to achieve depths of connection, some element of sensibility is necessary even if it creates risk.

**Modern Application:**

Contemporary relationships involve similar tensions:

Some people approach love as Marianne does: trusting feelings intensely, investing completely, dismissing caution as cynical, and experiencing relationships at emotional extremes. When relationships succeed, their joy is profound. When relationships fail, their devastation is complete.

Others approach love as Elinor does: evaluating carefully, managing emotions, maintaining independence, and protecting through reserve. When relationships succeed, their satisfaction is steady. When relationships fail, they recover functionality more quickly.

Neither is clearly superior. What matters is fit between approach and individual\'s temperament and circumstances:

**Sensibility Works When:** You have support system to help manage when vulnerability creates problems; your life circumstances allow extended recovery time if relationship fails; you value experiential intensity over emotional stability; and you\'re willing to accept pain as cost of passion.

**Sense Works When:** Your circumstances require maintained functionality; you have limited support for managing dramatic emotional experiences; you value stability over intensity; or you\'ve learned through experience that your initial feelings are unreliable guides to others\' character or relationship compatibility.

**The Integrated Approach:**

Austen seems to suggest ideal integrates both: sensibility\'s capacity for deep feeling with sense\'s evaluative skills and emotional management. This means:

**Maintain Capacity for Deep Feeling:** Don\'t become so cautious that you cannot experience profound connection. Vulnerability is necessary for depth.

**But Develop Evaluation Skills:** Use feeling as initial guide but verify through observation of character, explicit conversations about commitment, and attention to behavioral consistency.

**Invest Deeply:** Allow yourself complete emotional engagement when relationship deserves it.

**But Maintain Some Reserve Initially:** Verify person\'s character and commitment before investing so totally that loss would be catastrophic.

**Trust Intense Feelings:** They often perceive connection accurately.

**But Verify Through Time:** Character and commitment reveal through sustained behavior, not just intense moments.

**The Wisdom:**

Marianne\'s devastation teaches that pure sensibility creates unsustainable vulnerability—without any evaluative skills or emotional management, you\'re defenseless when feelings mislead or when betrayal comes. However, pure sense would eliminate capacity for profound connection that makes life meaningful. The goal isn\'t choosing sensibility OR sense but developing both: maintaining capacity for deep feeling while building skills for managing when feelings mislead; enabling profound vulnerability with worthy partners while protecting from exploitation; experiencing love intensely while maintaining enough independent stability that loss, while painful, doesn\'t destroy you completely.

The question isn\'t whether to love deeply—that creates life\'s most meaningful experiences. The question is how to love deeply while developing resilience that enables survival when love fails, integration that allows profound feeling with wise judgment, and balance that permits intensity without creating complete vulnerability to circumstances beyond your control.`
    }
  ],
  
  educatorResources: {
    writingPrompt: {
      title: 'Retroactive Reinterpretation Scene',
      description: 'Write a scene where a character learns information that forces them to reinterpret past events through a new lens. Show the mental work of reviewing memories and recognizing that behaviors they interpreted one way actually meant something different. Explore the emotional impact of discovering that cherished experiences were occurring under false pretenses.',
      purpose: 'Teaches students to explore complex grief, psychological impact of betrayal, and how new information can transform understanding of past experiences. Develops skills in showing internal processing and emotional complexity.'
    },
    
    activity: {
      title: 'Love vs. Money Debate',
      description: 'Structured debate where students argue different positions: Was Willoughby\'s choice to marry for money practical or mercenary? When are financial considerations in relationships legitimate? Teams research historical context (marriage as economic arrangement in Regency England) and modern parallels (financial compatibility in relationships). Class develops framework for distinguishing practical financial considerations from mercenary betrayal.',
      materials: 'Historical context materials, modern relationship advice discussing financial compatibility, debate structure guidelines'
    },
    
    crossCurricular: {
      title: 'Economics and Social History of Marriage',
      description: 'Partner with history and economics teachers to explore how economic factors affected marriage decisions historically and continue to influence relationship choices today. Examine: women\'s limited economic options in Regency England; how financial considerations legitimately factor into partner selection; and when economic priorities become exploitative. Connect to contemporary discussions about financial compatibility in relationships.',
      subjects: ['History', 'Economics', 'Sociology']
    }
  },
  
  criticalThinkingExercise: {
    title: 'Character Loss vs. Love Loss: Understanding Complex Betrayal',
    prompt: 'Analyze why Marianne feels "loss of Willoughby\'s character yet more heavily than she had felt the loss of his heart." What makes discovering someone isn\'t who you thought more painful than discovering they don\'t love you? Compare different types of romantic loss: simple rejection versus betrayal; losing future prospects versus having to reinterpret past; and straightforward grief versus compound trauma. Develop framework for understanding and processing different types of relationship endings.',
    guidingQuestions: [
      'What\'s the difference between losing someone\'s love and losing someone\'s character?',
      'How does retroactive betrayal damage past, present, and future simultaneously?',
      'Why does discovering hidden agendas require more complex grief work than simple rejection?',
      'What makes betrayal of character more isolating than loss of love?',
      'How can someone recover from discovering relationship was fundamentally different than they believed?'
    ],
    thinkingFramework: {
      analyze: 'Examine different types of romantic loss and their distinct impacts on past understanding, present wellbeing, and future prospects.',
      evaluate: 'Assess why character loss creates more complex grief than love loss and what makes retroactive reinterpretation particularly painful.',
      synthesize: 'Develop framework for understanding compound grief that addresses multiple layers of loss: relationship, understanding of past, trust in judgment, and sense of reality about shared experience.'
    },
    expectedDepth: 'Strong responses distinguish between different types of loss, explain why retroactive betrayal affects multiple timelines, acknowledge complexity of grieving what never existed as believed, and recognize that character loss requires different healing work than simple rejection. Should demonstrate understanding that discovering someone isn\'t who you thought challenges sense of reality itself.',
    classroomApplication: 'Essay or guided discussion. Can connect to psychology materials about trauma, grief stages, and recovery from betrayal. 2-3 class periods for analysis, discussion, and written reflection.'
  },
  
  whyLiteratureMatters: getLiteratureMessageByChapter(18),
  
  nextTimeTeaser: {
    emoji: '🏙️',
    title: 'Next: Journey to London',
    preview: 'The sisters travel to London with Mrs. Jennings, hoping to find clarity about their romantic situations and escape painful memories at Barton.',
    hookQuestion: 'Will London bring resolution or deeper heartbreak? What further revelations await in the city?'
  }
}

