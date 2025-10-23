/**
 * TEMPLATE BOOK CONFIGURATION
 * 
 * Copy this entire _template-book directory and rename it to your book's slug.
 * Then fill in all the configuration below.
 * 
 * Instructions:
 * 1. Replace all "YOUR_BOOK_*" placeholders with your book's information
 * 2. Update the parts array with your book's structure
 * 3. Add purchase links and free resources
 * 4. Update contributor information
 */

import { BookConfig } from '@/app/lib/types/book.types'

export const bookConfig: BookConfig = {
  // Basic Information
  slug: 'YOUR_BOOK_SLUG', // e.g., 'pride-and-prejudice' (kebab-case)
  title: 'YOUR_BOOK_TITLE', // e.g., 'Pride and Prejudice'
  subtitle: 'YOUR_BOOK_SUBTITLE', // Optional, e.g., 'A Novel'
  author: 'YOUR_AUTHOR_NAME', // e.g., 'Jane Austen'
  published: 'YEAR', // e.g., '1813'
  genre: 'YOUR_GENRE', // e.g., 'Romance, Social Commentary'
  
  // Structure
  totalChapters: 0, // Total number of chapters in the book
  
  // Optional: Organize chapters into parts
  parts: [
    {
      part: 1,
      title: 'PART_1_TITLE',
      subtitle: 'PART_1_SUBTITLE',
      description: 'PART_1_DESCRIPTION (2-3 sentences about this section)',
      chapters: [1, 2, 3, 4] // Array of chapter numbers in this part
    },
    {
      part: 2,
      title: 'PART_2_TITLE',
      subtitle: 'PART_2_SUBTITLE',
      description: 'PART_2_DESCRIPTION',
      chapters: [5, 6, 7, 8]
    },
    // Add more parts as needed
  ],
  
  // Content
  description: 'YOUR_BOOK_DESCRIPTION (2-3 sentences about the book for the landing page)',
  
  // Optional: Famous quote from the book
  quote: 'YOUR_FAMOUS_QUOTE (if applicable)',
  
  // Themes (4-8 major themes)
  themes: [
    'THEME_1',
    'THEME_2',
    'THEME_3',
    'THEME_4',
    'THEME_5',
    'THEME_6'
  ],
  
  // Purchase Links (Optional but recommended)
  purchaseLinks: {
    independent: {
      name: "Powell's Books",
      url: 'https://www.powells.com/book/YOUR_BOOK_ISBN',
      description: 'Support independent bookstores'
    },
    amazon: {
      name: 'Amazon',
      url: 'https://www.amazon.com/dp/YOUR_ASIN',
      description: 'Fast delivery'
    }
  },
  
  // Free Resources (for public domain books)
  freeResources: [
    {
      name: 'Project Gutenberg',
      url: 'https://www.gutenberg.org/ebooks/YOUR_BOOK_ID'
    },
    {
      name: 'Standard Ebooks',
      url: 'https://standardebooks.org/ebooks/YOUR_BOOK_PATH'
    }
  ],
  
  // Contributor Information
  contributor: {
    name: 'YOUR_NAME',
    role: 'Content Author',
    email: 'your.email@example.com' // Optional
  }
}

