/**
 * SENSE AND SENSIBILITY CONFIGURATION
 * 
 * Jane Austen's first published novel, exploring the contrasting temperaments
 * of two sisters and the challenges they face in love and society.
 */

import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  // Basic Information
  slug: 'sense-and-sensibility',
  title: 'Sense and Sensibility',
  subtitle: 'A Novel',
  author: 'Jane Austen',
  published: '1811',
  genre: 'Romance, Social Commentary',
  
  // Structure
  totalChapters: 50,
  
  // Organize chapters into parts
  parts: [
    {
      part: 1,
      title: 'Norland',
      subtitle: 'Loss and Displacement',
      description: 'The Dashwood sisters lose their home and security when their father dies, leaving them dependent on relatives and facing an uncertain future in a society where women\'s fates depend on marriage and inheritance.',
      // @ts-ignore - Using extended chapter format with descriptions like Jane Eyre
      chapters: [
        { number: 1, description: 'The Dashwood family loses their estate when the father dies, leaving Elinor, Marianne, and their mother economically vulnerable and dependent on male relatives.' },
        { number: 2, description: 'Fanny Dashwood manipulates her husband John, convincing him to break his promise to his dying father and reduce support for his stepmother and sisters.' },
        { number: 3, description: 'The Dashwood women face displacement from their home as Fanny takes over. The sisters\' contrasting responses to crisis reveal deeper patterns.' },
        { number: 4, description: 'Elinor meets and forms an attachment to Edward Ferrars, Fanny\'s brother, whose reserved manner conceals genuine feeling.' },
        { number: 5, description: 'The Dashwoods receive an offer from Sir John Middleton to rent a cottage at Barton in Devonshire and decide to leave Norland.' }
      ]
    },
    {
      part: 2,
      title: 'Barton Cottage',
      subtitle: 'New Beginnings',
      description: 'The Dashwood women settle into their new life at Barton Cottage in Devonshire, where they are welcomed by the gregarious Sir John Middleton and his family. New relationships begin to form.',
      // @ts-ignore - Using extended chapter format with descriptions like Jane Eyre
      chapters: [
        { number: 6, description: 'The Dashwoods settle into Barton Cottage and are warmly received by Sir John Middleton, his wife, and her mother Mrs. Jennings.' },
        { number: 7, description: 'Sir John introduces the taciturn Colonel Brandon, who immediately takes an interest in Marianne despite their age difference.' },
        { number: 8, description: 'Marianne sprains her ankle and is rescued by the romantic Willoughby, beginning an intense attachment.' },
        { number: 9, description: 'Willoughby\'s daily visits to Barton Cottage reveal his perfect compatibility with Marianne in taste, temperament, and feeling.' },
        { number: 10, description: 'Colonel Brandon is called away mysteriously just before a planned party, disappointing the group and puzzling Elinor.' }
      ]
    },
    {
      part: 3,
      title: 'Romance and Mystery',
      subtitle: 'Secrets and Revelations',
      description: 'As Marianne\'s romance with Willoughby intensifies, Elinor struggles with her own heartbreak over Edward. Colonel Brandon reveals a tragic past that hints at danger ahead.',
      // @ts-ignore - Using extended chapter format with descriptions like Jane Eyre
      chapters: [
        { number: 11, description: 'Elinor learns that Edward is secretly engaged to Lucy Steele, a revelation that devastates her while she maintains outward composure.' },
        { number: 12, description: 'Marianne and Willoughby\'s romance appears to be approaching an engagement, with everyone expecting an announcement.' },
        { number: 13, description: 'Willoughby suddenly announces he must leave for London, devastating Marianne and raising questions about his intentions.' },
        { number: 14, description: 'Marianne mourns Willoughby\'s departure with unrestrained grief while Elinor privately processes her own heartbreak over Edward.' },
        { number: 15, description: 'Mrs. Jennings invites Elinor and Marianne to spend the winter season in London, and despite concerns, they accept.' }
      ]
    },
    {
      part: 4,
      title: 'London',
      subtitle: 'Heartbreak and Betrayal',
      description: 'In London, Marianne desperately seeks Willoughby while he cruelly ignores her. Elinor navigates her secret knowledge of Edward\'s engagement, and devastating truths come to light.',
      // @ts-ignore - Using extended chapter format with descriptions like Jane Eyre
      chapters: [
        { number: 16, description: 'Arriving in London, Marianne immediately writes to Willoughby but receives no response, causing her increasing distress.' },
        { number: 17, description: 'Marianne encounters Willoughby at a party where he coldly ignores her, treating her as a mere acquaintance.' },
        { number: 18, description: 'Willoughby sends a brutal letter returning Marianne\'s letters and declaring his engagement to the wealthy Miss Grey.' },
        { number: 19, description: 'Colonel Brandon reveals Willoughby\'s history of seduction and betrayal, including abandoning Brandon\'s ward Eliza while she was pregnant.' },
        { number: 20, description: 'Marianne falls into illness from grief and shock, while Elinor must support her sister despite her own secret heartbreak.' }
      ]
    },
    {
      part: 5,
      title: 'Trials and Truth',
      subtitle: 'Endurance and Revelation',
      description: 'As Marianne\'s heartbreak threatens her health, Elinor continues to carry the burden of her secret. Edward\'s engagement becomes public, forcing difficult choices for everyone involved.',
      // @ts-ignore - Using extended chapter format with descriptions like Jane Eyre
      chapters: [
        { number: 21, description: 'Edward visits London and awkwardly encounters both Elinor and Lucy, creating painful scenes Elinor must endure with grace.' },
        { number: 22, description: 'Mrs. Jennings and others gossip about Edward\'s engagement, unaware that Elinor has known the truth for months.' },
        { number: 23, description: 'The Dashwood sisters prepare to leave London, Marianne still heartbroken and Elinor exhausted from supporting everyone while hiding her own pain.' },
        { number: 24, description: 'Traveling home via Cleveland, the Palmers\' estate, the sisters encounter more society and gossip about their situations.' },
        { number: 25, description: 'At Cleveland, Marianne becomes dangerously ill after walking in wet grass, her physical illness reflecting her emotional devastation.' }
      ]
    },
    {
      part: 6,
      title: 'Crisis and Reconciliation',
      subtitle: 'Illness and Understanding',
      description: 'Marianne\'s life-threatening illness brings the family together and forces reckonings with the past. Willoughby appears with excuses, and Marianne begins a painful process of self-examination.',
      // @ts-ignore - Using extended chapter format with descriptions like Jane Eyre
      chapters: [
        { number: 26, description: 'Marianne\'s fever worsens dangerously, terrifying Elinor who sends for their mother and fears for her sister\'s life.' },
        { number: 27, description: 'Willoughby arrives at Cleveland, seeking to explain his conduct and beg forgiveness, confessing he loved Marianne but chose money.' },
        { number: 28, description: 'Marianne begins to recover physically, and Elinor must decide whether and how to tell her about Willoughby\'s visit.' },
        { number: 29, description: 'As Marianne recovers, she reflects on her own behavior and begins to recognize her emotional excess and selfishness.' },
        { number: 30, description: 'Returning to Barton, Marianne practices moderation, showing genuine growth and understanding of her past mistakes.' }
      ]
    },
    {
      part: 7,
      title: 'Resolution',
      subtitle: 'New Beginnings',
      description: 'Edward\'s engagement ends unexpectedly, freeing him to act on his true feelings. The sisters find happiness through understanding themselves and each other, learning that both sense and sensibility have their place.',
      // @ts-ignore - Using extended chapter format with descriptions like Jane Eyre
      chapters: [
        { number: 31, description: 'News arrives that Lucy has married—not Edward, but his brother Robert, freeing Edward from his engagement.' },
        { number: 32, description: 'Edward comes to Barton and, finally free, proposes to Elinor, who accepts with joy.' },
        { number: 33, description: 'Edward explains his engagement to Lucy was a youthful mistake, and his true affection has always been for Elinor.' },
        { number: 34, description: 'Colonel Brandon offers Edward a living, showing his friendship and enabling Edward and Elinor to marry.' },
        { number: 35, description: 'Marianne slowly develops real affection for Colonel Brandon, appreciating his steadfastness and genuine character.' },
        { number: 36, description: 'Marianne accepts Colonel Brandon\'s proposal, finding happiness in a different kind of love than she once imagined.' },
        { number: 37, description: 'The sisters marry their respective partners, both finding happiness through hard-won self-knowledge.' },
        { number: 38, description: 'Edward and Elinor settle at Delaford parsonage, where they live happily with modest means and genuine contentment.' },
        { number: 39, description: 'Marianne and Colonel Brandon marry at Delaford church, and Marianne grows to love him deeply.' },
        { number: 40, description: 'The families settle near each other, maintaining close bonds and supporting one another.' },
        { number: 41, description: 'Mrs. Dashwood rejoices in her daughters\' happiness and the vindication of their characters.' },
        { number: 42, description: 'Willoughby remains unhappily married to Miss Grey, still loving Marianne and regretting his mercenary choice.' },
        { number: 43, description: 'Lucy, now Mrs. Robert Ferrars, is perfectly satisfied with her fashionable life and shows no shame over her betrayal.' },
        { number: 44, description: 'Mrs. Ferrars slowly reconciles with Edward, unable to ignore the respectability of his marriage and position.' },
        { number: 45, description: 'Colonel Brandon\'s generosity and character prove the worth of steady, genuine affection over passionate romance.' },
        { number: 46, description: 'Elinor reflects on her trials and recognizes how her sense of duty sustained her through heartbreak.' },
        { number: 47, description: 'Marianne acknowledges her past errors and shows how growth comes from recognizing the limits of sensibility.' },
        { number: 48, description: 'The novel shows both sisters needed to learn from each other—sense needs heart, sensibility needs wisdom.' },
        { number: 49, description: 'The Delaford community thrives with both couples contributing their talents and caring for their neighbors.' },
        { number: 50, description: 'The novel concludes with both sisters finding happiness not in the extremes of sense or sensibility, but in balance.' }
      ]
    }
  ],
  
  // Content
  description: 'Jane Austen\'s first published novel follows the Dashwood sisters—sensible Elinor and passionate Marianne—as they navigate heartbreak, betrayal, and society\'s expectations while searching for love and security in Regency England.',
  
  // Optional: Famous quote from the book
  quote: 'Know your own happiness. You want nothing but patience—or give it a more fascinating name, call it hope.',
  
  // Themes (4-8 major themes)
  themes: [
    'Sense vs Sensibility',
    'Economic Dependence',
    'Sisterhood',
    'Love & Betrayal',
    'Social Class',
    'Women\'s Rights'
  ],
  
  // Purchase Links (Optional but recommended)
  purchaseLinks: {
    independent: {
      name: "Powell's Books",
      url: 'https://www.powells.com/book/sense-sensibility-9780141439662',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/dp/0141439661',
      description: 'Fast delivery'
    }
  },
  
  // Free Resources (for public domain books)
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/161'
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org/ebooks/jane-austen/sense-and-sensibility'
    }
  ],
  
  // Contributor Information
  contributor: {
    name: 'Amplified Classics Team',
    role: 'Content Author',
    email: 'team@amplifiedclassics.com'
  }
}
