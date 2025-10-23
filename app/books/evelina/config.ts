/**
 * EVELINA, OR THE HISTORY OF A YOUNG LADY'S ENTRANCE INTO THE WORLD
 * 
 * Frances Burney's groundbreaking epistolary novel (1778) that influenced
 * Jane Austen and established the novel of manners. Written entirely in letters,
 * it follows young Evelina Anville's navigation of London society, revealing
 * the dangers and delights awaiting women in 18th-century England.
 */

import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  // Basic Information
  slug: 'evelina',
  title: 'Evelina',
  subtitle: 'or The History of a Young Lady\'s Entrance into the World',
  author: 'Frances Burney',
  published: '1778',
  genre: 'Epistolary Novel, Novel of Manners, Social Comedy',
  
  // Structure - 84 letters across 3 volumes
  totalChapters: 84,
  
  // Organize letters into volumes and narrative sections
  parts: [
    {
      part: 1,
      title: 'Volume I: Innocence Meets Society',
      subtitle: 'Letters I-XXIII',
      description: 'Seventeen-year-old Evelina leaves her rural guardian for London, where her innocence and beauty attract admirers and expose the absurdities of high society. She encounters the noble Lord Orville, the presumptuous Sir Clement Willoughby, and her vulgar grandmother Madame Duval, while navigating balls, operas, and garden parties without knowledge of social codes.',
      // @ts-ignore
      chapters: [
        { number: 1, description: 'Rev. Villars writes to Lady Howard, expressing anxiety about Evelina\'s proposed visit to London and her unknown parentage.' },
        { number: 2, description: 'Evelina writes her first letter from London, describing her wonder at the city and her guardian\'s protective concerns.' },
        { number: 3, description: 'Evelina attends her first assembly, commits social blunders refusing dances, and catches the attention of Lord Orville.' },
        { number: 4, description: 'After mistakenly rejecting Lord Orville, Evelina is mortified and begins learning society\'s complex dance etiquette.' },
        { number: 5, description: 'At the opera, Evelina encounters the fashionable but shallow Willoughby sisters and observes London\'s performative culture.' },
        { number: 6, description: 'Sir Clement Willoughby begins his persistent, unwelcome pursuit of Evelina despite her clear disinterest.' },
        { number: 7, description: 'Evelina\'s vulgar grandmother Madame Duval arrives, threatening her peaceful existence with embarrassing relatives.' },
        { number: 8, description: 'The Branghton family—Evelina\'s city cousins—reveal themselves as coarse, money-obsessed social climbers.' },
        { number: 9, description: 'At Marylebone Gardens, Evelina is separated from her party and finds herself in a dangerous situation with prostitutes.' },
        { number: 10, description: 'Lord Orville rescues Evelina from the garden, but she fears he now thinks her disreputable company reflects her character.' },
        { number: 11, description: 'Evelina\'s mortification grows as Madame Duval insists on claiming her as family in public settings.' },
        { number: 12, description: 'At the Hampstead ball, the Branghtons embarrass Evelina with their vulgar behavior and ignorance of proper conduct.' },
        { number: 13, description: 'Captain Mirvan devises cruel pranks against Madame Duval, revealing the casual violence underlying polite society.' },
        { number: 14, description: 'Madame Duval is thrown in a ditch by "highwaymen" (actually Captain Mirvan\'s servants) in a humiliating prank.' },
        { number: 15, description: 'Evelina witnesses Madame Duval\'s rage but cannot condone Mirvan\'s cruelty, seeing violence in both "refinement" and vulgarity.' },
        { number: 16, description: 'Lord Orville continues showing Evelina attention, but she fears her family connections make her unworthy.' },
        { number: 17, description: 'At Vauxhall, Evelina loses her party and is accosted by drunken men before Lord Orville rescues her again.' },
        { number: 18, description: 'Evelina receives a shockingly crude letter supposedly from Lord Orville, devastating her faith in his character.' },
        { number: 19, description: 'Heartbroken by the letter, Evelina prepares to leave London, believing all men are deceivers.' },
        { number: 20, description: 'Evelina returns to Berry Hill, confiding her confusion and hurt to her guardian Mr. Villars.' },
        { number: 21, description: 'Mr. Villars responds with philosophical comfort, warning about the dangers of society for unprotected women.' },
        { number: 22, description: 'Back in the country, Evelina reflects on her London experiences and struggles to understand Lord Orville\'s transformation.' },
        { number: 23, description: 'Mrs. Selwyn invites Evelina to Bristol Hotwells, offering new society and a chance to recover from heartbreak.' }
      ]
    },
    {
      part: 2,
      title: 'Volume II: Bristol and Betrayal',
      subtitle: 'Letters XXIV-XLVII',
      description: 'At Bristol Hotwells spa, Evelina is pursued by multiple suitors including the foolish Mr. Smith and the dangerous Sir Clement Willoughby. She encounters Lord Orville again, discovering the crude letter was a forgery by his rakish friend. Meanwhile, her claim to her father Sir John Belmont\'s name becomes urgent as imposters and relatives compete for recognition and inheritance.',
      // @ts-ignore
      chapters: [
        { number: 24, description: 'Evelina arrives at Bristol Hotwells with the witty, satirical Mrs. Selwyn as her new companion.' },
        { number: 25, description: 'At the spa, Evelina meets Lord Merton and Mr. Coverley, witnessing the idle cruelty of bored aristocrats.' },
        { number: 26, description: 'The foppish Mr. Lovel insults Evelina for her lack of fashion knowledge, revealing society\'s obsession with superficial refinement.' },
        { number: 27, description: 'Evelina encounters Lord Orville again and realizes he is still the gentleman she believed—the crude letter was not from him.' },
        { number: 28, description: 'Sir Clement Willoughby appears at Bristol, renewing his predatory pursuit with increasing aggression.' },
        { number: 29, description: 'Lord Orville explains his friend Lord Merton forged the crude letter as a "joke," exposing masculine callousness.' },
        { number: 30, description: 'Evelina struggles with forgiving Orville and understanding how gentlemanly conduct can coexist with tolerating such "friends."' },
        { number: 31, description: 'Mrs. Selwyn\'s sharp wit protects Evelina but also embarrasses Lord Orville, creating complex social dynamics.' },
        { number: 32, description: 'A race is proposed to settle debts—two old women will race for aristocratic amusement, shocking Evelina.' },
        { number: 33, description: 'Evelina witnesses the degrading race, seeing clearly how wealth uses poverty for entertainment.' },
        { number: 34, description: 'Lord Orville refuses to bet on the race, showing moral principles that distinguish him from his peers.' },
        { number: 35, description: 'Madame Duval arrives at Bristol demanding Evelina help pursue Sir John Belmont for recognition and inheritance.' },
        { number: 36, description: 'Sir John Belmont, Evelina\'s father, refuses to acknowledge her, claiming another woman is his daughter.' },
        { number: 37, description: 'The mystery of Evelina\'s birth deepens—who is the imposter claiming to be Sir John\'s daughter?' },
        { number: 38, description: 'Mrs. Selwyn investigates the imposture, using her sharp intellect to pursue justice for Evelina.' },
        { number: 39, description: 'Lord Orville observes Evelina\'s distress about her parentage but tactfully avoids prying into private matters.' },
        { number: 40, description: 'Sir Clement becomes dangerously aggressive, cornering Evelina and declaring his dishonorable intentions.' },
        { number: 41, description: 'Evelina rejects Sir Clement definitively, but without male protection, her "no" carries little weight.' },
        { number: 42, description: 'The Branghtons arrive at Bristol, bringing new waves of embarrassment with their commercial vulgarity.' },
        { number: 43, description: 'Tom Branghton pursues Evelina romantically, unable to comprehend why his wealth doesn\'t make him desirable.' },
        { number: 44, description: 'Lord Orville witnesses the Branghtons\' behavior but shows no contempt, increasing Evelina\'s regard for him.' },
        { number: 45, description: 'Evelina confides in Mrs. Selwyn about her feelings for Lord Orville, fearing the impossibility of such a match.' },
        { number: 46, description: 'A climactic ball sees all of Evelina\'s worlds colliding—vulgar family, noble suitors, and her uncertain identity.' },
        { number: 47, description: 'Lord Orville partners with Evelina despite her family\'s presence, suggesting his feelings transcend social prejudice.' }
      ]
    },
    {
      part: 3,
      title: 'Volume III: Recognition and Resolution',
      subtitle: 'Letters XLVIII-LXXXIV',
      description: 'The mystery of Evelina\'s parentage reaches its crisis as Sir John Belmont finally acknowledges his true daughter. Lord Orville declares his love, but Evelina must navigate the complex negotiations of class, inheritance, and female agency. The novel concludes with hard-won recognition—both social and paternal—though not without revealing the costs of a society that defines women\'s worth through fathers and husbands.',
      // @ts-ignore
      chapters: [
        { number: 48, description: 'Evelina learns Lord Orville has left Bristol abruptly, causing her anxiety about his feelings and intentions.' },
        { number: 49, description: 'Mrs. Selwyn continues investigating Sir John Belmont, uncovering evidence of the imposter\'s true identity.' },
        { number: 50, description: 'Sir John agrees to meet Evelina, opening the possibility of recognition but also potential rejection.' },
        { number: 51, description: 'Evelina prepares for the meeting with her father, struggling with complex emotions about a man who abandoned her.' },
        { number: 52, description: 'The imposter daughter is revealed to be the child of a nurse who switched infants, creating the deception.' },
        { number: 53, description: 'Sir John Belmont meets Evelina and immediately recognizes his late wife in her features, confirming her identity.' },
        { number: 54, description: 'Sir John weeps over his dead wife\'s portrait and living daughter, performing repentance but unable to restore lost years.' },
        { number: 55, description: 'Evelina is acknowledged as Miss Belmont, gaining name, fortune, and social position in an instant.' },
        { number: 56, description: 'With her new status, Evelina reflects on how society\'s treatment changes based on a father\'s acknowledgment.' },
        { number: 57, description: 'Lord Orville returns, and Evelina fears her new wealth makes her a target for fortune hunters.' },
        { number: 58, description: 'Mrs. Selwyn teases Evelina about Lord Orville, suggesting his feelings are deeper than friendship.' },
        { number: 59, description: 'Lord Orville requests private conversation with Evelina, creating anticipation and anxiety.' },
        { number: 60, description: 'Lord Orville declares his love, asking for Evelina\'s hand despite her previously uncertain status.' },
        { number: 61, description: 'Evelina accepts Lord Orville, overwhelmed by happiness but aware marriage means surrendering newly-gained independence.' },
        { number: 62, description: 'Mr. Villars must give consent for the marriage, struggling with losing his beloved ward.' },
        { number: 63, description: 'Lord Orville writes to Mr. Villars, demonstrating respect for Evelina\'s guardian and promising her happiness.' },
        { number: 64, description: 'Mr. Villars consents, blessing the union while mourning the end of Evelina\'s childhood innocence.' },
        { number: 65, description: 'Sir Clement Willoughby learns of the engagement and makes a final, desperate appeal to Evelina.' },
        { number: 66, description: 'Evelina definitively rejects Sir Clement, who responds with bitter accusations about female inconstancy.' },
        { number: 67, description: 'Madame Duval celebrates Evelina\'s match as social triumph, revealing her materialistic values.' },
        { number: 68, description: 'The Branghtons react with envy and calculation, trying to leverage connection to future Lady Orville.' },
        { number: 69, description: 'Evelina navigates her family\'s expectations, trying to maintain kindness while establishing boundaries.' },
        { number: 70, description: 'Wedding preparations begin, revealing how marriage transforms a woman from legal and social nonentity to wife.' },
        { number: 71, description: 'Mr. Villars travels to London for the wedding, bringing Evelina\'s rural innocence full circle.' },
        { number: 72, description: 'Sir John Belmont and Mr. Villars meet, reconciling over their shared love for Evelina despite past wrongs.' },
        { number: 73, description: 'The false daughter is provided for, showing mercy but also how women\'s fates depend entirely on male beneficence.' },
        { number: 74, description: 'Lord Orville\'s family accepts Evelina despite her complicated history, valuing her character and Sir John\'s wealth.' },
        { number: 75, description: 'Mrs. Selwyn offers sardonic commentary on marriage\'s economic and legal realities beneath romantic veneer.' },
        { number: 76, description: 'Evelina reflects on her journey from nameless obscurity to recognized gentlewoman through others\' acknowledgment.' },
        { number: 77, description: 'Captain Mirvan makes crude jokes about marriage, revealing male cynicism Evelina must now navigate as wife.' },
        { number: 78, description: 'The wedding approaches, and Evelina experiences complex emotions about losing independence gained so recently.' },
        { number: 79, description: 'Evelina marries Lord Orville in a ceremony that legally makes her subordinate while socially elevating her.' },
        { number: 80, description: 'Lord Orville proves an affectionate, respectful husband, offering the best possible outcome within limiting structures.' },
        { number: 81, description: 'Evelina writes to Mr. Villars from her new home, assuring him of her happiness yet revealing nostalgia.' },
        { number: 82, description: 'Sir John attempts to build relationship with his daughter, but paternal love cannot erase abandonment.' },
        { number: 83, description: 'Evelina settles into marriage, finding contentment but also awareness of how contingent women\'s happiness remains.' },
        { number: 84, description: 'The novel concludes with Evelina\'s final letter to Mr. Villars, completing her "entrance into the world" through marriage.' }
      ]
    }
  ],
  
  // Content
  description: 'Frances Burney\'s revolutionary 1778 epistolary novel follows innocent Evelina Anville\'s entry into London society, where her beauty, grace, and mysterious parentage create chaos, comedy, and romance. Written entirely in letters, this groundbreaking work influenced Jane Austen and established the novel of manners, exposing how women navigated a world that defined them solely through fathers and husbands.',
  
  // Famous quote from the book
  quote: 'I would have given the world to have known what they thought of me.',
  
  // Major themes
  themes: [
    'Social Manners & Comedy',
    'Female Vulnerability',
    'Class & Birth',
    'Epistolary Form',
    'Innocence vs Experience',
    'Paternal Recognition',
    'Marriage Market',
    'Reputation & Honor'
  ],
  
  // Purchase Links
  purchaseLinks: {
    independent: {
      name: "Powell's Books",
      url: 'https://www.powells.com/book/evelina-9780199536856',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/dp/0199536856',
      description: 'Fast delivery'
    }
  },
  
  // Free Resources
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/6053'
    },
    {
      name: 'Internet Archive',
      url: 'https://archive.org/details/evelinaorhis00burn'
    }
  ],
  
  // Contributor Information
  contributor: {
    name: 'Amplified Classics Team',
    role: 'Content Author',
    email: 'team@amplifiedclassics.com'
  }
}
