import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, BookOpen, Clock, Users, Lightbulb } from 'lucide-react'
import { bookConfig, bookParts } from './config'

export const metadata: Metadata = {
  title: 'Pride and Prejudice by Jane Austen - Amplified Classics',
  description: 'Read Pride and Prejudice with interactive study guides, chapter summaries, and Intelligence Amplified analysis',
}

export default function PrideAndPrejudicePage() {
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
            Pride and Prejudice
          </h1>

          <p style={{
            fontSize: '1.25rem',
            opacity: '0.85',
            marginBottom: '2rem'
          }}>
            by Jane Austen
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
              <span>61 Chapters</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} />
              <span>Published 1813</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} />
              <span>Romance, Social Commentary</span>
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

              <blockquote style={{
                fontSize: '1.25rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '1.5rem',
                marginBottom: '2rem'
              }}>
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
              </blockquote>

              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                <em>Pride and Prejudice</em> is Jane Austen's most beloved novel, following the witty and independent Elizabeth Bennet as she navigates the complex social world of Regency England, confronting questions of morality, education, marriage, and the consequences of quick judgments.
              </p>

              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem'
              }}>
                Through the evolving relationship between Elizabeth and the proud Mr. Darcy, Austen creates a sophisticated comedy of manners that critiques the rigid class structures and marriage market of her time while exploring the universal themes of self-knowledge, personal growth, and the journey from first impressions to true understanding.
              </p>

              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)'
              }}>
                With brilliant dialogue, ironic narration, and unforgettable characters, Austen crafts a story that is both a sharp social commentary and a deeply romantic tale of two people learning to see past their own pride and prejudice.
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

      {/* Chapters by Parts */}
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

          {/* Parts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {bookParts.map((part) => (
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

                {/* Chapters Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1rem'
                }}>
                  {part.chapters.map((chapter) => (
                    <Link
                      key={chapter.number}
                      href={`/books/pride-and-prejudice/chapter-${chapter.number}`}
                      style={{
                        display: 'block',
                        padding: '1.5rem',
                        background: 'white',
                        border: '2px solid var(--border-color)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        position: 'relative'
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
                        Chapter {chapter.number}
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                        color: 'var(--text-secondary)',
                        marginBottom: '0.75rem'
                      }}>
                        {chapter.description}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Features */}
      <section style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)'
          }}>
            Enhanced with Study Tools
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderTop: '3px solid var(--primary)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Chapter Summaries
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Concise summaries of each chapter to help you track the complex social dynamics and romantic developments throughout the novel.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderTop: '3px solid var(--primary)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Character Analysis
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Deep dives into Elizabeth, Darcy, and the rich cast of characters—their wit, flaws, growth, and relationships.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderTop: '3px solid var(--primary)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Discussion Questions
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Thought-provoking questions to explore themes of pride, prejudice, class, marriage, and the art of reading people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

