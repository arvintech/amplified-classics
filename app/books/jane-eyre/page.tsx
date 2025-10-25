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
import { ArrowLeft, BookOpen, Clock, Users, Lightbulb, Feather } from 'lucide-react'
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

      {/* Meet the Author */}
      <section style={{
        padding: '3rem 2rem',
        background: 'var(--primary)',
        borderTop: '1px solid var(--primary)',
        borderBottom: '1px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: 'rgba(255, 255, 255, 0.2)',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Meet the Author
              </div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'white',
                fontFamily: 'var(--font-heading)'
              }}>
                Discover Charlotte Brontë's Story
              </h2>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '1.5rem'
              }}>
                From the windswept moors of Yorkshire to literary immortality—learn about the remarkable woman behind Jane Eyre. Discover her life, her sisters, her struggles, and her triumph.
              </p>
              <Link
                href={`/books/${bookConfig.slug}/about-the-author`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 1.75rem',
                  background: 'white',
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: '2px solid white',
                  transition: 'all 0.2s ease'
                }}
              >
                <Users size={20} />
                Meet Charlotte Brontë
              </Link>
            </div>
            <div style={{
              fontSize: '6rem',
              opacity: 0.3,
              color: 'white'
            }}>
              ✍️
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
                      // All 38 chapters are now complete!
                      const isAvailable = chapterNum <= 38
                      
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

          {/* Prominent Author Teaser at End of Chapters */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, var(--primary) 0%, #2D5A8C 100%)',
            border: '3px solid var(--primary)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Background */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              fontSize: '12rem',
              opacity: 0.1,
              color: 'white',
              pointerEvents: 'none'
            }}>
              ✍️
            </div>
            
            <div style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              color: 'white'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.25rem',
                background: 'rgba(255, 255, 255, 0.2)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.5rem'
              }}>
                <Feather size={14} />
                Don't Miss This
              </div>

              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '300',
                marginBottom: '1rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em',
                lineHeight: 1.2
              }}>
                Meet the Woman Behind Jane Eyre
              </h2>

              <p style={{
                fontSize: '1.25rem',
                lineHeight: 1.7,
                opacity: 0.95,
                marginBottom: '2rem',
                fontWeight: '400'
              }}>
                You've journeyed with Jane from powerless orphan to autonomous woman. Now discover <strong style={{ fontWeight: '600' }}>Charlotte Brontë's</strong> own remarkable story—her life on the Yorkshire moors, her brilliant sisters, her struggles for independence, and the revolutionary vision that gave us Jane's unforgettable voice.
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  padding: '0.75rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '0.9375rem',
                  fontWeight: '500'
                }}>
                  📖 Her Life & Legacy
                </div>
                <div style={{
                  padding: '0.75rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '0.9375rem',
                  fontWeight: '500'
                }}>
                  👭 The Brontë Sisters
                </div>
                <div style={{
                  padding: '0.75rem 1.25rem',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  fontSize: '0.9375rem',
                  fontWeight: '500'
                }}>
                  ✨ Her Revolutionary Vision
                </div>
              </div>

              <Link
                href={`/books/${bookConfig.slug}/about-the-author`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.125rem 2.5rem',
                  background: 'white',
                  color: 'var(--primary)',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '1.125rem',
                  border: '3px solid white',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                }}
              >
                <Users size={22} />
                Discover Charlotte Brontë's Story
              </Link>

              <p style={{
                fontSize: '0.9375rem',
                marginTop: '1.5rem',
                opacity: 0.85,
                fontStyle: 'italic'
              }}>
                "I am no bird; and no net ensnares me; I am a free human being with an independent will."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
