/**
 * WUTHERING HEIGHTS CONFIGURATION
 * 
 * Emily Brontë's passionate tale of love, revenge, and the destructive
 * power of obsession set on the Yorkshire moors.
 */

import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  // Basic Information
  slug: 'wuthering-heights',
  title: 'Wuthering Heights',
  subtitle: 'A Novel',
  author: 'Emily Brontë',
  published: '1847',
  genre: 'Gothic Romance, Tragedy',
  
  // Visual
  coverImage: 'https://m.media-amazon.com/images/I/81T34Sem-tL._SL1500_.jpg', // Penguin Classics cover
  
  // Structure
  totalChapters: 34,
  
  // Organize chapters into volumes (as originally published)
  parts: [
    {
      part: 1,
      title: 'Volume I',
      subtitle: 'The First Generation',
      description: 'Mr. Lockwood arrives at Thrushcross Grange and encounters the mysterious inhabitants of Wuthering Heights. Nelly Dean begins the tale of Catherine Earnshaw and Heathcliff—their childhood bond, Catherine\'s marriage to Edgar Linton, and Heathcliff\'s bitter departure.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 1, description: 'Mr. Lockwood visits his landlord Heathcliff at Wuthering Heights and encounters a hostile reception and strange household.' },
        { number: 2, description: 'Lockwood returns to Wuthering Heights and is forced to stay overnight during a snowstorm, discovering Catherine\'s diary.' },
        { number: 3, description: 'Lockwood experiences a terrifying nightmare of Catherine\'s ghost trying to enter through the window.' },
        { number: 4, description: 'Nelly Dean begins her narrative: the Earnshaw family and the arrival of the orphan Heathcliff from Liverpool.' },
        { number: 5, description: 'Hindley returns with his wife Frances and degrades Heathcliff, while Catherine and Heathcliff remain inseparable.' },
        { number: 6, description: 'Catherine and Heathcliff spy on Thrushcross Grange; Catherine is injured and stays with the Lintons, beginning her transformation.' },
        { number: 7, description: 'Catherine returns from the Lintons as a refined lady, creating tension with the unchanged Heathcliff.' },
        { number: 8, description: 'Frances dies giving birth to Hareton; Hindley descends into alcoholism and abuse of Heathcliff.' },
        { number: 9, description: 'Catherine confesses to Nelly that Edgar Linton has proposed and she will accept, devastating the eavesdropping Heathcliff who flees.' },
        { number: 10, description: 'Catherine falls ill searching for Heathcliff; she marries Edgar. Three years later, Heathcliff returns, mysteriously wealthy and transformed.' },
        { number: 11, description: 'Heathcliff\'s return creates tension at both houses. He begins courting Isabella Linton to enrage Edgar and Catherine.' },
        { number: 12, description: 'Catherine becomes hysterical from the conflict between Edgar and Heathcliff, suffering a mental and physical breakdown.' },
        { number: 13, description: 'Isabella elopes with Heathcliff despite warnings. Catherine\'s illness worsens as she becomes delirious.' },
        { number: 14, description: 'Nelly visits Isabella at Wuthering Heights, finding her trapped in a nightmare marriage with a vengeful Heathcliff.' }
      ]
    },
    {
      part: 2,
      title: 'Volume II',
      subtitle: 'The Second Generation',
      description: 'Catherine dies giving birth to young Cathy. Heathcliff\'s revenge extends to the next generation as he systematically destroys the Earnshaw and Linton families. The cycles of love, hatred, and revenge play out through the children, until love finally breaks the curse.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 15, description: 'Heathcliff forces his way into Thrushcross Grange for a final meeting with the dying Catherine, their passion undiminished.' },
        { number: 16, description: 'Catherine dies after giving birth to Cathy. Heathcliff begs her ghost to haunt him, unable to bear separation.' },
        { number: 17, description: 'Isabella escapes from Heathcliff and Wuthering Heights, fleeing to London where she gives birth to Linton Heathcliff.' },
        { number: 18, description: 'Twelve years pass. Young Cathy grows up at Thrushcross Grange, sheltered by Edgar, unaware of Wuthering Heights.' },
        { number: 19, description: 'Cathy encounters Hareton on the moors and learns of Wuthering Heights; Isabella dies, and Heathcliff claims his son Linton.' },
        { number: 20, description: 'Cathy secretly visits Wuthering Heights and meets Linton, beginning a forbidden correspondence arranged by Heathcliff.' },
        { number: 21, description: 'Edgar discovers the letters and ends the correspondence, but Heathcliff\'s manipulation continues.' },
        { number: 22, description: 'Cathy and Nelly encounter Heathcliff on the moors; he insists Cathy visit the dying Linton.' },
        { number: 23, description: 'Cathy visits Linton regularly, pitying him, while Heathcliff manipulates their relationship toward marriage.' },
        { number: 24, description: 'Linton, bullied by Heathcliff, convinces Cathy to visit him; Edgar\'s health deteriorates.' },
        { number: 25, description: 'Cathy discovers Linton is seriously ill and begins secret visits, torn between father and cousin.' },
        { number: 26, description: 'Heathcliff traps Cathy and Nelly at Wuthering Heights, forcing Cathy to marry Linton before Edgar dies.' },
        { number: 27, description: 'Cathy is imprisoned at Wuthering Heights. Nelly escapes; Edgar dies without seeing his daughter one last time.' },
        { number: 28, description: 'Cathy escapes briefly to see her dying father, then is returned to captivity. Linton dies, making Heathcliff heir to both estates.' },
        { number: 29, description: 'Lockwood leaves for London. Months later, he returns to find Nelly at Wuthering Heights and learns of dramatic changes.' },
        { number: 30, description: 'Nelly continues: After Linton\'s death, Heathcliff brought Cathy to Wuthering Heights, where she and Hareton gradually formed a bond.' },
        { number: 31, description: 'Cathy begins teaching Hareton to read, bridging the divide between them despite their history.' },
        { number: 32, description: 'Heathcliff becomes increasingly obsessed with Catherine\'s ghost, neglecting his revenge as he longs for death and reunion.' },
        { number: 33, description: 'Heathcliff dies, finally finding peace. Cathy and Hareton plan to marry, healing the breach between the families.' },
        { number: 34, description: 'Lockwood visits the graves of Catherine, Edgar, and Heathcliff. The moors are quiet, but locals claim to see ghosts walking.' }
      ]
    }
  ],
  
  // Content
  description: 'Emily Brontë\'s only novel tells the devastating story of Heathcliff and Catherine Earnshaw—a love so intense it destroys everyone around them. Set on the windswept Yorkshire moors, this Gothic masterpiece explores obsession, revenge, and the possibility of redemption across two generations.',
  
  // Famous quote from the book
  quote: 'Whatever our souls are made of, his and mine are the same.',
  
  // Themes (4-8 major themes)
  themes: [
    'Destructive Love',
    'Revenge & Cycles of Violence',
    'Social Class',
    'Nature vs Civilization',
    'Identity & Belonging',
    'The Gothic & Supernatural'
  ],
  
  // Purchase Links
  purchaseLinks: {
    independent: {
      name: "Powell's Books",
      url: 'https://www.powells.com/book/wuthering-heights-9780141439556',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/dp/0141439556',
      description: 'Fast delivery'
    }
  },
  
  // Free Resources (public domain)
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/768'
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org/ebooks/emily-bronte/wuthering-heights'
    }
  ],
  
  // Contributor Information
  contributor: {
    name: 'Amplified Classics Team',
    role: 'Content Author',
    email: 'team@amplifiedclassics.com'
  }
}
