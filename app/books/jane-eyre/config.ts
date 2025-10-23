import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  slug: 'jane-eyre',
  title: 'Jane Eyre',
  subtitle: 'An Autobiography',
  author: 'Charlotte Brontë',
  published: 'October 1847',
  genre: 'Gothic Romance / Bildungsroman',
  
  totalChapters: 38,
  
  // Organize Jane's journey into five distinct phases
  parts: [
    {
      part: 1,
      title: 'Gateshead',
      subtitle: 'The Orphan Rebel',
      description: 'Ten-year-old Jane Eyre lives as an unwanted dependent with her cruel aunt Mrs. Reed and bullying cousins. When she finally fights back against abuse, she\'s punished with the red-room terror. But her rebellion catches the attention of Mr. Lloyd, who suggests escape to school.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 1, description: 'Jane fights back against her bully cousin and faces the wrath of her aunt for daring to defend herself.' },
        { number: 2, description: 'Locked in the red-room where her uncle died, Jane experiences terror that triggers a psychological breakdown.' },
        { number: 3, description: 'Mr. Lloyd becomes the first adult to listen to Jane and suggests school as her escape from Gateshead.' },
        { number: 4, description: 'Mr. Brocklehurst interrogates Jane about hell and damnation, while Jane finally confronts Mrs. Reed\'s cruelty.' }
      ]
    },
    {
      part: 2,
      title: 'Lowood School',
      subtitle: 'Education and Loss',
      description: 'At harsh Lowood Institution, Jane endures cold, hunger, and Brocklehurst\'s religious tyranny. Helen Burns teaches her patience and faith before dying of consumption. Miss Temple becomes Jane\'s mentor. Eight years pass—Jane transforms from abused child to educated woman ready to claim her independence.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 5, description: 'Jane arrives at the harsh Lowood School and meets Helen Burns, a girl who will change her life.' },
        { number: 6, description: 'Jane watches Helen endure cruel punishment with impossible patience, challenging everything Jane believes about justice.' },
        { number: 7, description: 'Brocklehurst publicly brands Jane a liar, but Helen\'s solidarity and Miss Temple\'s kindness begin her redemption.' },
        { number: 8, description: 'Miss Temple listens to Jane\'s story, clears her name, and creates a sanctuary of warmth and learning.' },
        { number: 9, description: 'Typhus sweeps through Lowood while spring blooms outside, and Helen Burns dies peacefully in Jane\'s arms.' },
        { number: 10, description: 'Eight years pass at Lowood; Jane becomes a teacher, then boldly advertises for a new position as governess.' }
      ]
    },
    {
      part: 3,
      title: 'Thornfield Hall',
      subtitle: 'Love and Secrets',
      description: 'Jane arrives at mysterious Thornfield as governess to French ward Adèle. She meets the sardonic Mr. Rochester, and intellectual attraction becomes love. But Thornfield hides a terrible secret on the third floor. On their wedding day, the truth explodes: Rochester has a wife, mad Bertha Mason, locked in the attic. Jane flees despite her love, choosing dignity over desire.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 11, description: 'Jane arrives at mysterious Thornfield Hall, meets her spirited French pupil, and hears an unsettling laugh from the third floor.' },
        { number: 12, description: 'Jane settles into Thornfield\'s routine but feels restless, then has an unexpected meeting with Mr. Rochester when his horse slips on ice.' },
        { number: 13, description: 'Rochester arrives at Thornfield and summons Jane to the drawing room for their first formal meeting—charged intellectual conversation about her art and unconventional views.' },
        { number: 14, description: 'Evening conversations deepen as Rochester reveals his cynical philosophy and past "sins" without details, testing whether Jane will excuse his self-serving rationalizations.' },
        { number: 15, description: 'Rochester tells Jane about his ex-mistress Céline Varens, then that night Jane saves him from a fire—creating charged intimacy before he blames Grace Poole with an implausible story.' },
        { number: 16, description: 'After the fire, Rochester leaves abruptly without explanation, then returns with a house party including Blanche Ingram—forcing Jane to watch the man she loves seemingly court another woman while she remains professionally invisible.' },
        { number: 17, description: 'The house party continues with charades and social games that emphasize Jane\'s lower status, while Rochester\'s attention to Blanche seems calculated to provoke Jane\'s jealousy.' },
        { number: 18, description: 'A mysterious fortune-teller arrives and requests Jane—revealing himself as Rochester in disguise who used deception to extract her feelings. Then Mr. Mason from Jamaica arrives, and Rochester\'s visible terror suggests the past he\'s been hiding is catching up.' },
        { number: 19, description: 'Rochester, still disguised as the fortune-teller, questions Jane about her feelings and her view of his relationship with Blanche Ingram. When he reveals himself, Mason\'s arrival shatters his relief.' },
        { number: 20, description: 'That night, terrible screams wake the house. Rochester enlists Jane\'s help tending the wounded Mason, who was attacked by someone upstairs, maintaining the deception that nothing is seriously wrong.' },
        { number: 21, description: 'Jane is summoned to Gateshead where Mrs. Reed is dying and finally reveals that Jane\'s uncle John Eyre wrote three years ago asking for her—and Mrs. Reed maliciously replied that Jane died at Lowood.' },
        { number: 22, description: 'Jane returns to Thornfield to find the house party gone. Rochester\'s relief at her return is palpable, and their emotional connection intensifies.' },
        { number: 23, description: 'In the orchard at midsummer, Rochester finally proposes to Jane—she accepts, but lightning strikes the chestnut tree, an ominous sign.' },
        { number: 24, description: 'During wedding preparations, Jane resists Rochester\'s attempts to dress her like a doll and insists on maintaining her independence. She writes to her uncle John Eyre in Madeira.' },
        { number: 25, description: 'The night before the wedding, a terrifying figure enters Jane\'s room and tears her wedding veil. Rochester dismisses it as a nightmare or Grace Poole\'s doing.' },
        { number: 26, description: 'At the altar, a lawyer interrupts the wedding with shocking news: Rochester is already married. In the attic, Jane meets Bertha Mason, Rochester\'s mad wife.' },
        { number: 27, description: 'Rochester explains his disastrous marriage to Bertha and begs Jane to live with him in France as his mistress, but Jane refuses and flees Thornfield at dawn, choosing morality over love.' }
      ]
    },
    {
      part: 4,
      title: 'Moor House & Morton',
      subtitle: 'Finding Family',
      description: 'Penniless and starving, Jane collapses on the moors and is rescued by St. John Rivers and his sisters Diana and Mary. She discovers they are her cousins and inherits £20,000 from uncle John Eyre. St. John proposes marriage—not for love, but as missionary partnership in India. Jane nearly accepts duty over desire, until a supernatural cry from Rochester calls her back.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 28, description: 'Jane flees Thornfield with only a few shillings. After days of wandering the moors, starving and desperate, she collapses at a cottage door.' },
        { number: 29, description: 'The Rivers siblings—St. John, Diana, and Mary—rescue Jane and nurse her back to health at Moor House.' },
        { number: 30, description: 'Jane recovers and grows close to Diana and Mary, finding the sisterhood she\'s always craved. St. John finds her a position teaching at the Morton village school.' },
        { number: 31, description: 'Jane begins teaching poor village girls. Though the work is humble, she finds satisfaction in independence and usefulness.' },
        { number: 32, description: 'Rosamond Oliver, the beautiful heiress, visits Jane\'s school and is clearly in love with St. John, but he resists, focused on his missionary ambitions.' },
        { number: 33, description: 'St. John discovers Jane\'s true identity as Jane Eyre. A letter reveals that Jane has inherited £20,000 from her uncle John Eyre—and that the Rivers are her cousins. Jane divides the inheritance equally with her newfound family.' },
        { number: 34, description: 'St. John Rivers proposes marriage, not from love but duty—he needs a missionary wife for India. Jane nearly accepts self-sacrifice over passion.' },
        { number: 35, description: 'Jane struggles with St. John\'s cold proposal and is nearly broken by his psychological pressure. On the verge of capitulation, she hears Rochester\'s voice crying "Jane! Jane! Jane!" across the distance.' }
      ]
    },
    {
      part: 5,
      title: 'Ferndean',
      subtitle: 'Equals at Last',
      description: 'Heeding the mysterious call, Jane returns to Thornfield to find it burned—Bertha set the fire and died, and Rochester was blinded and maimed saving the servants. Jane finds him at isolated Ferndean Manor. Now equals through suffering, they marry at last. Rochester partially regains his sight in time to see their first child. Jane has claimed both love and autonomy.',
      // @ts-ignore - Using extended chapter format with descriptions
      chapters: [
        { number: 36, description: 'Jane rushes back to Thornfield to find it a blackened ruin. An innkeeper tells her Bertha set the fire and died; Rochester was blinded and maimed trying to save her. He now lives in isolation at Ferndean.' },
        { number: 37, description: 'Jane finds Rochester at Ferndean, blind and broken. Their reunion is tentative—he believes himself unworthy, but Jane insists they are now equals. They declare their love freely.' },
        { number: 38, description: 'Jane and Rochester marry. Ten years later, Jane narrates their happiness: Rochester has partially regained sight, they have a son, and Jane has achieved the perfect balance of love and independence. She ends by reporting on all characters—even St. John Rivers, still serving in India, awaiting his heavenly reward.' }
      ]
    }
  ],
  
  description: 'Charlotte Brontë\'s revolutionary 1847 novel follows Jane Eyre from abused orphan to independent woman, challenging Victorian conventions about class, gender, and marriage. Jane\'s fierce spirit, moral integrity, and refusal to compromise her dignity make this one of literature\'s most powerful feminist texts.',
  
  quote: '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
  
  themes: [
    'Independence and Self-Respect',
    'Social Class and Inequality',
    'Gender and Victorian Femininity',
    'Love and Autonomy',
    'Religion and Morality',
    'The Gothic and Psychological Terror'
  ],
  
  purchaseLinks: {
    independent: {
      name: 'Bookshop.org',
      url: 'https://bookshop.org/books/jane-eyre-9780141441146',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/Jane-Eyre-Charlotte-Bronte/dp/0141441143',
      description: 'Penguin Classics Edition'
    }
  },
  
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/1260'
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org/ebooks/charlotte-bronte/jane-eyre'
    }
  ],
  
  contributor: {
    name: 'Amplified Classics',
    role: 'Educational Content Development',
    email: 'hello@amplifiedclassics.com'
  }
}

