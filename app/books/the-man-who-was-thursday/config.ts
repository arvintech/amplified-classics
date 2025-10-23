/**
 * THE MAN WHO WAS THURSDAY CONFIGURATION
 * 
 * G.K. Chesterton's philosophical thriller exploring anarchism, order, and the
 * nature of good and evil through a surreal nightmare of conspiracy and revelation.
 */

import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  // Basic Information
  slug: 'the-man-who-was-thursday',
  title: 'The Man Who Was Thursday',
  subtitle: 'A Nightmare',
  author: 'G.K. Chesterton',
  published: '1908',
  genre: 'Philosophical Thriller, Metaphysical Mystery',
  
  // Structure
  totalChapters: 15,
  
  // Organize chapters into thematic parts
  parts: [
    {
      part: 1,
      title: 'The Poet and the Policeman',
      subtitle: 'A Debate on Chaos',
      description: 'Gabriel Syme, a poet turned detective, encounters Lucian Gregory, an anarchist poet. Their philosophical debate leads Syme into the heart of a conspiracy that will test his understanding of reality itself.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 1, description: 'Two poets debate in bohemian Saffron Park: Syme defends order and tradition, while Gregory champions anarchism and chaos, leading to an unexpected invitation into genuine conspiracy.' },
        { number: 2, description: 'Syme reveals his secret identity as a philosophical detective recruited to combat anarchist ideas. He follows Gregory into the underground anarchist meeting.' },
        { number: 3, description: 'In a stunning rhetorical victory, Syme defeats Gregory and is himself elected "Thursday" to the Central Anarchist Council. He glimpses the terrifying figure of Sunday.' },
        { number: 4, description: 'Syme attends his first council meeting and meets the other days of the week, each more bizarre than the last, while Sunday\'s overwhelming presence dominates.' }
      ]
    },
    {
      part: 2,
      title: 'The Council of Days',
      subtitle: 'Seven Anarchists',
      description: 'Syme infiltrates the Central Anarchist Council, meeting six bizarre figures named after days of the week, presided over by the enigmatic and terrifying Sunday. Each council member represents a different face of chaos and rebellion.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 5, description: 'The council assigns Syme his first mission: to assassinate the Czar of Russia. Syme struggles with maintaining his cover while preventing the atrocity.' },
        { number: 6, description: 'Syme travels to meet Monday and discovers shocking information that begins to unravel his certainty about who the real anarchists are.' },
        { number: 7, description: 'A bizarre duel is arranged, revealing that nothing in the council is as it seems. The first major revelation about a council member\'s true identity.' },
        { number: 8, description: 'More council members prove to be something other than anarchists, creating paranoia and confusion about who is real and who is performing.' }
      ]
    },
    {
      part: 3,
      title: 'The Great Chase',
      subtitle: 'Pursuit and Revelation',
      description: 'What begins as a hunt for anarchist conspirators transforms into a surreal chase across Europe. One by one, shocking truths emerge about the true identity of the council members, turning everything Syme believed upside down.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 9, description: 'The detectives realize they must pursue Sunday, beginning a surreal chase through London that becomes increasingly dreamlike and symbolic.' },
        { number: 10, description: 'The pursuit continues across the English countryside in increasingly bizarre vehicles, as reality becomes more fluid and nightmare logic takes over.' },
        { number: 11, description: 'The chase reaches France, and the detectives discover they are being pursued by a dark crowd, creating confusion about who is hunting whom.' },
        { number: 12, description: 'The final council members reveal their true identities, and the pattern becomes clear: everyone is a detective. But who recruited them all?' }
      ]
    },
    {
      part: 4,
      title: 'The Face of Sunday',
      subtitle: 'Cosmic Mystery',
      description: 'The final confrontation with Sunday reveals the deepest mystery: the relationship between order and chaos, suffering and joy, the problem of evil and the nature of God. The nightmare concludes with philosophical revelation.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 13, description: 'The detectives finally confront Sunday in his garden, demanding to know his true identity and purpose. His responses deepen rather than resolve the mystery.' },
        { number: 14, description: 'Sunday reveals himself through paradox and parable, showing how apparent chaos served hidden order, and how the nightmare was necessary for revelation.' },
        { number: 15, description: 'The philosophical conclusion: Sunday represents both creator and creation, order and chaos, terror and joy. The detectives awaken to a transformed understanding of existence itself.' }
      ]
    }
  ],
  
  // Content
  description: 'G.K. Chesterton\'s masterpiece of philosophical thriller follows Gabriel Syme, a Scotland Yard detective posing as an anarchist poet, as he infiltrates a conspiracy that turns out to be far stranger than he imagined. This surreal "nightmare" explores profound questions about the nature of order, chaos, evil, and divine mystery through a wildly imaginative adventure story.',
  
  // Famous opening quote
  quote: 'The man who called himself Thursday was walking hither and thither in an unmeaning sort of way, with his chin up in the air and his blue eyes fixed on the heavens, suggesting a mild lunacy in his pale blue eyes.',
  
  // Major Themes (philosophical rather than emotional)
  themes: [
    'Order vs. Chaos',
    'Identity & Performance',
    'The Problem of Evil',
    'Faith vs. Nihilism',
    'Reality & Illusion',
    'Divine Mystery'
  ],
  
  // Purchase Links
  purchaseLinks: {
    independent: {
      name: "Powell's Books",
      url: 'https://www.powells.com/book/the-man-who-was-thursday-9780141191447',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/dp/0141191449',
      description: 'Fast delivery'
    }
  },
  
  // Free Resources (public domain book from 1908)
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/1695'
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org/ebooks/g-k-chesterton/the-man-who-was-thursday'
    }
  ],
  
  // Contributor Information
  contributor: {
    name: 'Amplified Classics Team',
    role: 'Content Author',
    email: 'team@amplifiedclassics.com'
  }
}


