/**
 * Sense and Sensibility Configuration
 * by Jane Austen (1811)
 */

import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  slug: 'sense-and-sensibility',
  title: 'Sense and Sensibility',
  subtitle: undefined,
  author: 'Jane Austen',
  published: '1811',
  genre: 'Romance, Social Commentary',
  totalChapters: 50,
  
  description: 'Jane Austen\'s first published novel follows the Dashwood sisters—Elinor and Marianne—as they navigate heartbreak, betrayal, and society\'s expectations while searching for love and security in Regency England. Through contrasting temperaments and emotional journeys, the sisters explore the balance between reason and emotion.',
  
  quote: 'Know your own happiness. You want nothing but patience—or give it a more fascinating name, call it hope.',
  
  themes: [
    'Sense vs. Sensibility',
    'Love & Heartbreak',
    'Economic Dependence',
    'Sisterhood',
    'Social Class',
    'Women\'s Rights'
  ],
  
  contributor: {
    name: 'Amplified Classics Team',
    role: 'Content Creator'
  }
}

// Sense and Sensibility organized by thematic sections
export const bookParts = [
  {
    part: 1,
    title: 'Norland',
    subtitle: 'Loss and Displacement',
    description: 'The Dashwood sisters lose their home and security when their father dies, leaving them dependent on relatives and facing an uncertain future in a society where women\'s fates depend on marriage and inheritance.',
    chapters: [
      { number: 1, description: 'The Dashwood family faces economic crisis when their father dies, leaving his estate to his son John and his daughters with only a small inheritance.' },
      { number: 2, description: 'Fanny Dashwood manipulates her husband John, convincing him to break his promise to his dying father and reduce support for his stepmother and sisters.' },
      { number: 3, description: 'The Dashwood women face displacement from their home as Fanny takes over. The sisters\' contrasting responses to crisis reveal deeper patterns.' },
      { number: 4, description: 'Elinor meets and forms an attachment to Edward Ferrars, Fanny\'s brother, whose reserved manner conceals genuine feeling.' },
      { number: 5, description: 'The family prepares to leave Norland. Mrs. Dashwood and her daughters discuss their futures and romantic prospects.' },
      { number: 6, description: 'Sir John Middleton invites the Dashwoods to Barton Cottage in Devonshire, offering them a new home and social connections.' },
      { number: 7, description: 'The family arrives at Barton Cottage and meets their neighbors, including the Dashwood relations and Colonel Brandon.' },
      { number: 8, description: 'Marianne encounters Willoughby during a dramatic incident, and romantic attraction develops between them.' },
      { number: 9, description: 'Elinor develops feelings for Edward Ferrars but observes his reserved behavior with growing concern.' },
      { number: 10, description: 'Social gatherings reveal character differences between Elinor and Marianne in their approaches to love and relationships.' }
    ]
  },
  {
    part: 2,
    title: 'Barton',
    subtitle: 'Romance and Disappointment',
    description: 'The sisters settle into Barton Cottage and navigate relationships with Willoughby, Edward, and Colonel Brandon, experiencing both romantic hope and painful disillusionment.',
    chapters: [
      { number: 11, description: 'Marianne\'s relationship with Sidney develops while Elinor observes Edward\'s peculiar behavior with growing suspicion.' },
      { number: 12, description: 'Colonel Brandon confides in Elinor about his tragic past love affair and its connection to Sidney.' },
      { number: 13, description: 'Marianne and Sidney\'s romance deepens despite warnings from Elinor and Colonel Brandon.' },
      { number: 14, description: 'Fanny and Edward Dashwood visit, creating tension over Edward\'s mysterious behavior and family expectations.' },
      { number: 15, description: 'Edward\'s secret engagement to Lucy Steele is revealed, devastating Elinor.' },
      { number: 16, description: 'Elinor must conceal her heartbreak while supporting Marianne through emotional turmoil.' },
      { number: 17, description: 'Sidney suddenly leaves Barton without explanation, leaving Marianne distraught.' },
      { number: 18, description: 'The sisters learn of Sidney\'s engagement to another woman, crushing Marianne\'s romantic hopes.' },
      { number: 19, description: 'Elinor and Marianne travel to London with Mrs. Jennings, hoping to clarify their romantic situations.' },
      { number: 20, description: 'In London, Marianne searches desperately for Sidney while Elinor discovers more about Edward\'s engagement.' }
    ]
  },
  {
    part: 3,
    title: 'London',
    subtitle: 'Revelation and Recovery',
    description: 'The sisters endure heartbreak and social humiliation in London, learning harsh truths about love, class, and society while struggling to maintain dignity.',
    chapters: [
      { number: 21, description: 'Marianne confronts Sidney at a party, experiencing public humiliation when he treats her coldly.' },
      { number: 22, description: 'Elinor encounters Lucy Steele frequently and learns more details about Edward\'s engagement.' },
      { number: 23, description: 'The Steele sisters arrive in London, creating social complications and revealing more about their characters.' },
      { number: 24, description: 'Marianne falls ill after a desperate visit to Sidney\'s London residence.' },
      { number: 25, description: 'Elinor cares for Marianne while hiding her own emotional distress about Edward.' },
      { number: 26, description: 'Colonel Brandon offers Edward a living to help resolve his financial difficulties.' },
      { number: 27, description: 'The Dashwood sisters prepare to leave London, disappointed but wiser about love and society.' },
      { number: 28, description: 'On the journey home, Marianne reflects on her mistakes and begins to understand Elinor\'s wisdom.' },
      { number: 29, description: 'Back at Barton, the sisters settle into quiet life, Marianne nursing her heartbreak.' },
      { number: 30, description: 'News arrives that Edward has married Lucy Steele, confirming Elinor\'s worst fears.' }
    ]
  },
  {
    part: 4,
    title: 'Delaford',
    subtitle: 'Second Chances',
    description: 'Revelations about Edward\'s situation, Sidney\'s character, and Marianne\'s growing maturity lead to resolutions and unexpected happiness for both sisters.',
    chapters: [
      { number: 31, description: 'It is revealed that Edward never married Lucy; she eloped with his brother Robert instead.' },
      { number: 32, description: 'Edward visits Barton to explain himself and seek Elinor\'s forgiveness.' },
      { number: 33, description: 'Edward proposes to Elinor, and she accepts, finally finding happiness after her long suffering.' },
      { number: 34, description: 'Marianne learns the full truth about Sidney\'s character and realizes her romantic folly.' },
      { number: 35, description: 'Colonel Brandon continues to show devotion to Marianne, though she remains unaware of his feelings.' },
      { number: 36, description: 'Elinor prepares for her wedding while Marianne reflects on her emotional journey.' },
      { number: 37, description: 'Marianne begins to appreciate Colonel Brandon\'s virtues and steady character.' },
      { number: 38, description: 'The sisters discuss love, maturity, and the balance between sense and sensibility.' },
      { number: 39, description: 'Marianne accepts Colonel Brandon\'s proposal, finding happiness through sense rather than pure sensibility.' },
      { number: 40, description: 'The novel concludes with both sisters married and happy, having learned to balance sense and sensibility.' }
    ]
  }
]

