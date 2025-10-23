/**
 * THE MAN WHO WAS THURSDAY - DYNAMIC CHAPTER ROUTE
 * 
 * Handles all chapter routes: /books/the-man-who-was-thursday/chapter-X
 */

'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { bookConfig } from '../config'

// Import chapter data files
import { chapter1 } from '../chapters/chapter-1'
import { chapter2 } from '../chapters/chapter-2'
import { chapter3 } from '../chapters/chapter-3'
// Additional chapters will be imported here as they're created
// import { chapter4 } from '../chapters/chapter-4'
// ... etc

// Add all chapters to this array IN ORDER
const chapters: any[] = [
  chapter1,
  chapter2,
  chapter3,
  // chapter4,
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
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: 'var(--primary)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Chapter {chapterNum}
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '0.5rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)',
            fontWeight: '300'
          }}>
            {chapterData.title || `${bookConfig.title} — Chapter ${chapterNum}`}
          </h1>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}>
            {chapterData.summary.brief}
          </p>

          {/* Reading Time */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            padding: '1rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            marginBottom: '3rem'
          }}>
            <div>
              <strong>Reading Time:</strong> {chapterData.readingTime} min
            </div>
            <div>
              <strong>Pages:</strong> ~{chapterData.pages}
            </div>
          </div>

          {/* Chapter Summary */}
          <div style={{
            padding: '2rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderLeft: '4px solid var(--primary)',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: '400'
            }}>
              📖 Chapter Summary
            </h2>
            {chapterData.summary.full.map((paragraph: string, index: number) => (
              <p key={index} style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: index < chapterData.summary.full.length - 1 ? '1rem' : 0
              }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Notice about full chapter implementation */}
          <div style={{
            padding: '2rem',
            background: '#f0f9ff',
            border: '2px solid #0066CC',
            borderLeft: '4px solid #0066CC',
            marginBottom: '2rem'
          }}>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-primary)',
              margin: 0
            }}>
              <strong>📚 Full Chapter Implementation:</strong> The complete Intelligence Amplified analysis for this chapter has been developed, including character analysis, key quotes, philosophical themes, discussion questions, and educator resources. The full interactive chapter display will be implemented in a future update. All content is available in the chapter data file.
            </p>
          </div>

          {/* Quick Reference */}
          <div style={{
            padding: '2rem',
            background: 'white',
            border: '1px solid var(--border-color)',
            marginBottom: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              📋 Quick Reference
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Key Characters:
              </h4>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                {chapterData.characters.map((char: any) => (
                  <li key={char.name} style={{ marginBottom: '0.5rem' }}>
                    <strong>{char.name}</strong> {char.keyTrait.emoji} — {char.keyTrait.text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Major Themes:
              </h4>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                {chapterData.iaAnalysis.themes.map((theme: any) => (
                  <li key={theme.name} style={{ marginBottom: '0.5rem' }}>
                    <strong>{theme.name}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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


