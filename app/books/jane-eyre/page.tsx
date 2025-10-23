/**
 * BOOK LANDING PAGE TEMPLATE
 * 
 * This is the main page for your book (/books/YOUR-BOOK-SLUG)
 * It displays book information and links to all chapters.
 * 
 * This template works out of the box once you've configured config.ts.
 * You can customize the layout if needed, but the defaults follow best practices.
 */

import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, BookOpen, Clock, Users, Lightbulb } from 'lucide-react'
import { bookConfig } from './config'

export const metadata: Metadata = {
  title: `${bookConfig.title} by ${bookConfig.author} - Amplified Classics`,
  description: bookConfig.description,
}

export default function BookPage() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      {/* Back Navigation */}
      <div style={{
        padding: '1.5rem 2rem',
        borderBottom: '1px solid var(--border-color)',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: '600',
              transition: 'color 0.2s ease'
            }}
          >
            <ArrowLeft size={18} />
            Back to Library
          </Link>
        </div>
      </div>

      {/* Book Header */}
      <section style={{
        background: 'var(--primary)',
        color: 'white',
        padding: '4rem 2rem',
        borderBottom: '3px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.25rem 0.75rem',
            background: 'rgba(255, 255, 255, 0.2)',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Complete Edition
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '300',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            fontFamily: 'var(--font-heading)'
          }}>
            {bookConfig.title}
          </h1>

          {bookConfig.subtitle && (
            <p style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              opacity: 0.9,
              marginBottom: '0.5rem'
            }}>
              {bookConfig.subtitle}
            </p>
          )}

          <p style={{
            fontSize: '1.25rem',
            opacity: 0.85,
            marginBottom: '2rem'
          }}>
            by {bookConfig.author}
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} />
              <span>{bookConfig.totalChapters} Chapters</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} />
              <span>Published {bookConfig.published}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} />
              <span>{bookConfig.genre}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book */}
      <section style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                About This Novel
              </h2>

              {bookConfig.quote && (
                <blockquote style={{
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  borderLeft: '3px solid var(--primary)',
                  paddingLeft: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  "{bookConfig.quote}"
                </blockquote>
              )}

              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                {bookConfig.description}
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Key Themes
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {bookConfig.themes.map((theme) => (
                  <div key={theme} style={{
                    padding: '0.75rem 1rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    fontSize: '0.9375rem',
                    fontWeight: '600'
                  }}>
                    {theme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              Chapters
            </h2>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'white',
            border: '1px solid var(--border-color)',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)'
          }}>
            <Lightbulb size={16} />
            <span>Intelligence Amplified analysis available for all chapters</span>
          </div>
        </div>

          {/* If parts are defined, show organized by parts */}
          {bookConfig.parts && bookConfig.parts.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {bookConfig.parts.map((part) => (
                <div key={part.part}>
                  {/* Part Header */}
                  <div style={{
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '2px solid var(--primary)'
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
                      marginBottom: '0.75rem'
                    }}>
                      Part {part.part}
                    </div>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: '400',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {part.title}
                      <span style={{
                        fontSize: '1.25rem',
                        fontStyle: 'italic',
                        color: 'var(--text-secondary)',
                        marginLeft: '0.75rem',
                        fontWeight: '300'
                      }}>
                        {part.subtitle}
                      </span>
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                      maxWidth: '900px'
                    }}>
                      {part.description}
                    </p>
                  </div>

                  {/* Chapters in this part */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1rem'
                  }}>
                    {part.chapters.map((chapter: any) => {
                      const chapterNum = typeof chapter === 'number' ? chapter : chapter.number
                      const chapterDesc = typeof chapter === 'object' ? chapter.description : null
                      // Only show links for chapters 1-17 that are completed
                      const isAvailable = chapterNum <= 17
                      
                      return (
                        <Link
                          key={chapterNum}
                          href={isAvailable ? `/books/${bookConfig.slug}/chapter-${chapterNum}` : '#'}
                          style={{
                            display: 'block',
                            padding: '1.5rem',
                            background: isAvailable ? 'white' : 'var(--card-bg)',
                            border: `2px solid ${isAvailable ? 'var(--border-color)' : '#E5E7EB'}`,
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            opacity: isAvailable ? 1 : 0.6,
                            cursor: isAvailable ? 'pointer' : 'not-allowed'
                          }}
                        >
                          <div style={{
                            fontSize: '0.75rem',
                            fontWeight: '700',
                            color: isAvailable ? 'var(--primary)' : 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '0.5rem'
                          }}>
                            Chapter {chapterNum}
                          </div>
                          {chapterDesc && (
                            <div style={{
                              fontSize: '0.875rem',
                              lineHeight: 1.6,
                              color: 'var(--text-secondary)',
                              marginBottom: '0.75rem',
                              minHeight: '3rem'
                            }}>
                              {chapterDesc}
                            </div>
                          )}
                          <div style={{
                            fontSize: '0.875rem',
                            color: isAvailable ? 'var(--primary)' : 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: '600'
                          }}>
                            <BookOpen size={14} />
                            {isAvailable ? 'Read Chapter' : 'Coming Soon'}
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // If no parts, show all chapters in a simple grid
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem'
            }}>
              {Array.from({ length: bookConfig.totalChapters }, (_, i) => i + 1).map((chapterNum) => (
                <Link
                  key={chapterNum}
                  href={`/books/${bookConfig.slug}/chapter-${chapterNum}`}
                  style={{
                    display: 'block',
                    padding: '1.5rem',
                    background: 'white',
                    border: '2px solid var(--border-color)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}>
                    Chapter {chapterNum}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600'
                  }}>
                    <BookOpen size={14} />
                    Read Chapter
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
