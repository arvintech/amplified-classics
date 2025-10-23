/**
 * Pride and Prejudice Configuration
 * by Jane Austen (1813)
 */

export interface BookConfig {
  slug: string
  title: string
  subtitle?: string
  author: string
  published: string
  genre: string
  totalChapters: number
  description: string
  quote?: string
  themes: string[]
}

export const bookConfig: BookConfig = {
  slug: 'pride-and-prejudice',
  title: 'Pride and Prejudice',
  subtitle: undefined,
  author: 'Jane Austen',
  published: '1813',
  genre: 'Romance, Social Commentary',
  totalChapters: 61,
  
  description: 'A witty comedy of manners following Elizabeth Bennet as she navigates issues of morality, education, and marriage in the society of the landed gentry of early 19th-century England. Through misunderstandings and misconceptions, Elizabeth and the proud Mr. Darcy must overcome their initial prejudices to discover true love.',
  
  quote: 'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
  
  themes: [
    'Love & Marriage',
    'Pride & Prejudice',
    'Social Class',
    'First Impressions',
    'Family & Reputation',
    'Women & Society'
  ]
}

// Pride and Prejudice organized by thematic sections
export const bookParts = [
  {
    part: 1,
    title: 'Netherfield',
    subtitle: 'First Impressions',
    description: 'Mr. Bingley arrives at Netherfield Park, bringing with him the proud Mr. Darcy. Elizabeth Bennet forms strong first impressions—both favorable toward the charming Mr. Wickham and unfavorable toward the insufferable Mr. Darcy.',
    chapters: [
      { number: 1, description: 'The famous opening: Mr. Bingley, a wealthy bachelor, takes Netherfield Park.' },
      { number: 2, description: 'Mr. Bennet visits Bingley; Mrs. Bennet\'s matchmaking schemes begin.' },
      { number: 3, description: 'The Meryton assembly ball: Bingley is charming, Darcy is proud and rude to Elizabeth.' },
      { number: 4, description: 'Jane and Bingley\'s mutual attraction; Elizabeth and Charlotte discuss pride and marriage.' },
      { number: 5, description: 'The Lucas family discusses the ball; pride and prejudice examined.' },
      { number: 6, description: 'Darcy finds himself attracted to Elizabeth despite himself.' },
      { number: 7, description: 'Jane is invited to Netherfield; caught in rain, she falls ill and must stay.' },
      { number: 8, description: 'Elizabeth walks to Netherfield to nurse Jane; the Bingley sisters mock her appearance.' },
      { number: 9, description: 'Mrs. Bennet and younger sisters visit; their lack of decorum embarrasses Elizabeth.' },
      { number: 10, description: 'Evening at Netherfield: Elizabeth plays piano; witty exchanges with Darcy begin.' },
      { number: 11, description: 'More Netherfield evenings; Caroline Bingley tries to attract Darcy, fails.' },
      { number: 12, description: 'Jane recovers; Elizabeth prepares to leave Netherfield.' },
      { number: 13, description: 'Mr. Collins, the pompous heir to Longbourn, arrives for a visit.' },
      { number: 14, description: 'Mr. Collins reveals his absurd character and patroness Lady Catherine de Bourgh.' },
      { number: 15, description: 'The Bennets meet charming Mr. Wickham, who has history with Darcy.' },
      { number: 16, description: 'Wickham tells Elizabeth his version of being wronged by Darcy.' },
      { number: 17, description: 'The Netherfield ball approaches; Mr. Collins proposes dancing with Elizabeth.' },
      { number: 18, description: 'The ball: Elizabeth dances with Darcy, learns he prevented Jane and Bingley\'s romance.' },
      { number: 19, description: 'Mr. Collins proposes marriage to Elizabeth; she refuses with horror.' },
      { number: 20, description: 'Elizabeth stands firm in her refusal despite her mother\'s fury.' },
      { number: 21, description: 'Bingley leaves Netherfield suddenly; Jane is heartbroken.' },
      { number: 22, description: 'Charlotte Lucas accepts Mr. Collins\'s proposal, shocking Elizabeth.' },
      { number: 23, description: 'Jane learns Bingley won\'t return; the Gardiners visit for Christmas.' }
    ]
  },
  {
    part: 2,
    title: 'Kent',
    subtitle: 'Darcy\'s First Proposal',
    description: 'Elizabeth visits Charlotte at Hunsford Parsonage and encounters Darcy at Rosings Park. Wickham\'s lies unravel, Darcy makes an insulting proposal, and Elizabeth confronts truths about herself and others.',
    chapters: [
      { number: 24, description: 'Jane visits London hoping to see Bingley; Caroline Bingley snubs her.' },
      { number: 25, description: 'Mrs. Gardiner warns Elizabeth against Wickham; Elizabeth defends her judgment.' },
      { number: 26, description: 'The Gardiners invite Jane to travel; Wickham pursues Miss King\'s fortune.' },
      { number: 27, description: 'Elizabeth travels to visit Charlotte; stops at the Gardiners in London.' },
      { number: 28, description: 'Elizabeth arrives at Hunsford; meets Lady Catherine de Bourgh at Rosings.' },
      { number: 29, description: 'Dinner at Rosings: Lady Catherine is imperious, condescending, and absurd.' },
      { number: 30, description: 'Sir William Lucas visits; Elizabeth and Maria enjoy time at the Parsonage.' },
      { number: 31, description: 'Darcy and Colonel Fitzwilliam arrive at Rosings unexpectedly.' },
      { number: 32, description: 'Darcy visits the Parsonage often, confusing Elizabeth with his attention.' },
      { number: 33, description: 'Elizabeth encounters Darcy on walks; Colonel Fitzwilliam flirts with her.' },
      { number: 34, description: 'Darcy proposes marriage insultingly; Elizabeth refuses with passionate anger.' },
      { number: 35, description: 'Darcy gives Elizabeth a letter explaining Wickham and Jane/Bingley.' },
      { number: 36, description: 'Elizabeth reads the letter repeatedly, her understanding transformed.' },
      { number: 37, description: 'Darcy and Colonel Fitzwilliam leave; Lady Catherine continues her dominance.' },
      { number: 38, description: 'Elizabeth prepares to leave Hunsford; reflects on her changed perspective.' },
      { number: 39, description: 'Elizabeth returns home; Lydia invited to Brighton with the militia.' },
      { number: 40, description: 'Elizabeth tries to convince her father not to let Lydia go to Brighton.' },
      { number: 41, description: 'Lydia departs for Brighton; Elizabeth prepares for a northern tour with Gardiners.' }
    ]
  },
  {
    part: 3,
    title: 'Pemberley',
    subtitle: 'Understanding and Attraction',
    description: 'Elizabeth visits Darcy\'s estate and sees him in a new light. Their growing understanding is shattered by Lydia\'s scandalous elopement with Wickham, which threatens the entire family\'s reputation.',
    chapters: [
      { number: 42, description: 'Elizabeth travels north; the tour is shortened to Derbyshire.' },
      { number: 43, description: 'Elizabeth visits Pemberley, Darcy\'s magnificent estate; meets his housekeeper.' },
      { number: 44, description: 'Darcy arrives unexpectedly; he is polite, gentleman-like, transformed.' },
      { number: 45, description: 'Darcy brings Bingley to meet Elizabeth; introduces his sister Georgiana.' },
      { number: 46, description: 'Elizabeth visits Pemberley again; Caroline Bingley tries to remind her of Wickham.' },
      { number: 47, description: 'Elizabeth receives letters: Lydia has eloped with Wickham; family is ruined.' },
      { number: 48, description: 'Elizabeth tells Darcy about Lydia; leaves Pemberley immediately for home.' },
      { number: 49, description: 'At Longbourn: Mr. Bennet searches London; family awaits news in agony.' },
      { number: 50, description: 'Wickham and Lydia are found and married; Mr. Gardiner handled negotiations.' },
      { number: 51, description: 'Lydia returns to Longbourn, shameless; accidentally reveals Darcy\'s involvement.' },
      { number: 52, description: 'Elizabeth learns from Mrs. Gardiner that Darcy found and paid for everything.' }
    ]
  },
  {
    part: 4,
    title: 'Longbourn',
    subtitle: 'Second Chances',
    description: 'Bingley returns to Netherfield, bringing Darcy with him. Jane and Bingley reunite, Lady Catherine interferes spectacularly, and Elizabeth and Darcy finally overcome pride and prejudice.',
    chapters: [
      { number: 53, description: 'Bingley returns to Netherfield; Mrs. Bennet\'s hopes for Jane revive.' },
      { number: 54, description: 'Bingley and Darcy visit Longbourn; Bingley\'s attentions to Jane resume.' },
      { number: 55, description: 'Bingley proposes to Jane; she accepts; the family celebrates.' },
      { number: 56, description: 'Lady Catherine arrives, demanding Elizabeth promise not to marry Darcy.' },
      { number: 57, description: 'Elizabeth refuses Lady Catherine; reports the confrontation to her father.' },
      { number: 58, description: 'Lady Catherine\'s interference gives Darcy hope; he proposes again; Elizabeth accepts.' },
      { number: 59, description: 'Elizabeth tells Jane; Darcy asks Mr. Bennet\'s permission; happiness secured.' },
      { number: 60, description: 'Elizabeth explains her changed feelings to her family; various reactions.' },
      { number: 61, description: 'Marriages, futures, and the happiness of the couples; the novel concludes.' }
    ]
  }
]

