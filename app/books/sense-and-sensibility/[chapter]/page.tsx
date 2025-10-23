/**
 * DYNAMIC CHAPTER ROUTE TEMPLATE
 * 
 * This page handles all chapter routes: /books/YOUR-BOOK-SLUG/chapter-X
 * 
 * Instructions:
 * 1. Import all your chapter data files
 * 2. Add them to the `chapters` array in order
 * 3. For now, copy the full chapter structure from jane-eyre/chapter-1/page.tsx
 *    OR wait for the shared ChapterTemplate component to be created
 * 
 * The dynamic routing and chapter selection logic is already handled below.
 */

'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { bookConfig } from '../config'

// Import your chapter data files
// import { chapter1 } from '../chapters/chapter-1'
// import { chapter2 } from '../chapters/chapter-2'
// import { chapter3 } from '../chapters/chapter-3'
// ... import all chapters you've created

// Add all chapters to this array IN ORDER
const chapters: any[] = [
  // chapter1,
  // chapter2,
  // chapter3,
  // ... add all imported chapters
]

export default function ChapterPage({ params }: { params: { chapter: string } }) {
  // Parse chapter number from URL
  const chapterNum = parseInt(params.chapter.replace('chapter-', ''))
  
  // Validate chapter number
  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > bookConfig.totalChapters) {
    notFound()
  }
  
  // Get chapter data (chapters array is 0-indexed)
  const chapterData = chapters[chapterNum - 1]
  
  // If chapter data doesn't exist yet, show "coming soon"
  if (!chapterData) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '100vh', background: 'var(--background)' }}>
        <Link
          href={`/books/${bookConfig.slug}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            marginBottom: '3rem'
          }}
        >
          <ArrowLeft size={18} />
          Back to {bookConfig.title}
        </Link>
        
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '3rem',
          background: 'white',
          border: '2px solid var(--border-color)'
        }}>
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)'
          }}>
            Chapter {chapterNum} Coming Soon
          </h1>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)'
          }}>
            This chapter is currently being developed. Check back soon for the complete Intelligence Amplified analysis!
          </p>
        </div>
      </div>
    )
  }
  
  // Calculate navigation
  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null
  const nextChapter = chapterNum < bookConfig.totalChapters ? chapterNum + 1 : null
  
  /**
   * TODO: Implement full chapter rendering
   * 
   * For now, you have two options:
   * 
   * Option 1: Copy the complete chapter structure from:
   *   /app/books/jane-eyre/chapter-1/page.tsx
   * 
   * Option 2: Wait for the shared ChapterTemplate component:
   *   <ChapterTemplate bookConfig={bookConfig} chapterData={chapterData} />
   * 
   * The structure should include all 14 required sections:
   * 1. Navigation Bar
   * 2. Chapter Header
   * 3. Chapter Summary
   * 4. Character Development
   * 5. Key Quotes
   * 6. IA Analysis
   * 7. Modern Adaptation
   * 8. Thematic Threads
   * 9. Discussion Questions
   * 10. Amplified Discussion
   * 11. For Educators
   * 12. Get Your Copy
   * 13. Chapter Navigation (Bottom)
   * 14. Footer Links
   * 
   * See CHAPTER_TEMPLATE_STRUCTURE.md for complete details.
   */
  
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      {/* Navigation Bar (Sticky) */}
      <div style={{
        padding: '1rem 2rem',
        borderBottom: '2px solid var(--border-color)',
        background: 'white',
        position: 'sticky',
        top: '80px',
        zIndex: 50
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link
            href={`/books/${bookConfig.slug}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: '600'
            }}
          >
            <ArrowLeft size={18} />
            Back to All Chapters
          </Link>

          <div style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            fontWeight: '500'
          }}>
            Chapter {chapterNum} of {bookConfig.totalChapters}
          </div>

          {nextChapter && (
            <Link
              href={`/books/${bookConfig.slug}/chapter-${nextChapter}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'var(--primary)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                transition: 'opacity 0.2s'
              }}
            >
              Next Chapter
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{
          background: 'white',
          padding: '3rem',
          border: '2px solid var(--border-color)'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)'
          }}>
            {bookConfig.title} — Chapter {chapterNum}
          </h1>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}>
            {chapterData.summary.brief}
          </p>

          <div style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)', margin: 0 }}>
              <strong>TODO:</strong> Copy the full chapter structure from <code>/app/books/jane-eyre/chapter-1/page.tsx</code> to render all 14 required sections.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginTop: '1rem', marginBottom: 0 }}>
              See <code>CHAPTER_TEMPLATE_STRUCTURE.md</code> for complete implementation details.
            </p>
          </div>

          {/* Chapter data is available in the chapterData variable */}
          {/* Access it like: chapterData.summary.full, chapterData.characters, etc. */}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto 3rem',
        padding: '0 2rem'
      }}>
        <div style={{
          padding: '2rem',
          background: 'white',
          border: '2px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {prevChapter ? (
            <Link
              href={`/books/${bookConfig.slug}/chapter-${prevChapter}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9375rem'
              }}
            >
              <ArrowLeft size={16} />
              Previous Chapter
            </Link>
          ) : <div />}

          {nextChapter && (
            <Link
              href={`/books/${bookConfig.slug}/chapter-${nextChapter}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'var(--primary)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: '600'
              }}
            >
              Continue to Chapter {nextChapter}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

