import Link from 'next/link'
import type { Metadata } from 'next'
import { BookOpen, Brain, Users, Target, ArrowRight, GraduationCap, Sparkles } from 'lucide-react'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Amplified Classics - Interactive Digital Literature',
  description: 'Experience classic literature like never before with interactive study guides, Intelligence Amplified analysis, and modern adaptations',
}

const books = [
  {
    id: 'jane-eyre',
    title: 'Jane Eyre',
    subtitle: 'An Autobiography',
    author: 'Charlotte Brontë',
    year: '1847',
    description: 'Follow Jane\'s journey from orphan to independent woman in this Gothic romance that explores love, morality, and social class.',
    themes: ['Independence', 'Social Class', 'Love & Marriage', 'Gender Roles'],
    status: 'Complete',
    chapters: 38,
    quote: '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
    url: '/books/jane-eyre'
  },
  {
    id: 'wuthering-heights',
    title: 'Wuthering Heights',
    subtitle: 'A Novel',
    author: 'Emily Brontë',
    year: '1847',
    description: 'A devastating tale of passion, revenge, and obsession on the Yorkshire moors. Heathcliff and Catherine\'s love destroys everyone around them across two generations.',
    themes: ['Destructive Love', 'Revenge & Violence', 'Social Class', 'Nature vs Civilization'],
    status: 'In Development',
    chapters: 34,
    quote: '"Whatever our souls are made of, his and mine are the same."',
    url: '/books/wuthering-heights'
  },
  {
    id: 'sense-and-sensibility',
    title: 'Sense and Sensibility',
    subtitle: 'A Novel',
    author: 'Jane Austen',
    year: '1811',
    description: 'The Dashwood sisters navigate love, loss, and society as they balance reason with emotion in Austen\'s first published novel.',
    themes: ['Sense vs Sensibility', 'Economic Dependence', 'Sisterhood', 'Love & Betrayal'],
    status: 'In Development',
    chapters: 50,
    quote: '"Know your own happiness. You want nothing but patience—or give it a more fascinating name, call it hope."',
    url: '/books/sense-and-sensibility'
  },
  {
    id: 'evelina',
    title: 'Evelina',
    subtitle: 'or The History of a Young Lady\'s Entrance into the World',
    author: 'Frances Burney',
    year: '1778',
    description: 'Frances Burney\'s groundbreaking epistolary novel follows innocent Evelina\'s entry into London society, exposing the comedy and danger of navigating a world that defines women solely through fathers and husbands. This revolutionary work influenced Jane Austen and established the novel of manners.',
    themes: ['Female Vulnerability', 'Social Manners', 'Epistolary Form', 'Class & Birth', 'Paternal Recognition', 'Marriage Market'],
    status: 'In Development',
    chapters: 84,
    quote: '"I would have given the world to have known what they thought of me."',
    url: '/books/evelina'
  },
  {
    id: 'pride-prejudice',
    title: 'Pride and Prejudice',
    subtitle: null,
    author: 'Jane Austen',
    year: '1813',
    description: 'Elizabeth Bennet navigates love, family, and society in this sharp social commentary about marriage in Regency England.',
    themes: ['Marriage & Society', 'Pride & Prejudice', 'Gender & Class', 'Character Growth'],
    status: 'In Development',
    chapters: 61,
    quote: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
    url: '/books/pride-and-prejudice'
  }
]

export default function HomePage() {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 1.5rem 2rem',
        background: 'var(--background)',
        textAlign: 'center',
        borderBottom: '3px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            background: 'transparent',
            border: '1px solid var(--border-color)',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Interactive Digital Literature
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: '100',
            marginBottom: '1rem',
            color: 'var(--primary)',
            letterSpacing: '-0.08em',
            lineHeight: 0.9,
            fontFamily: 'var(--font-heading)',
            fontStretch: 'ultra-condensed',
            transform: 'scaleX(0.8)'
          }}>
            Amplified Classics
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}>
            Experience timeless literature with modern study guides, Intelligence Amplified analysis, and interactive learning tools designed for students, teachers, and literature enthusiasts
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="#books"
              style={{
                padding: '1rem 2.5rem',
                background: 'var(--primary)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '2px solid var(--primary)'
              }}
            >
              Explore Library <ArrowRight size={20} />
            </Link>

            <Link
              href="#features"
              style={{
                padding: '1rem 2.5rem',
                background: 'white',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                boxShadow: 'var(--shadow)',
                transition: 'all 0.2s ease',
                border: '2px solid var(--primary)'
              }}
            >
              Learn More
            </Link>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            marginTop: '3rem',
            flexWrap: 'wrap'
          }}>
            {[
              { label: 'Books', value: '5' },
              { label: 'Chapters', value: '267' },
              { label: 'Free Forever', value: '100%' }
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'var(--primary)',
                  marginBottom: '0.25rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Celebrating Humanity's Literary Achievement */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--primary)',
        color: 'white',
        borderTop: '3px solid var(--primary)',
        borderBottom: '3px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: '100',
            marginBottom: '2rem',
            letterSpacing: '-0.06em',
            lineHeight: 1.1,
            fontFamily: 'var(--font-heading)',
            fontStretch: 'ultra-condensed',
            transform: 'scaleX(0.85)'
          }}>
            In Awe of Humanity's Greatest Gift
          </h2>

          <p style={{
            fontSize: '1.375rem',
            lineHeight: 1.8,
            marginBottom: '2rem',
            opacity: 0.95,
            fontWeight: '300',
            maxWidth: '850px',
            margin: '0 auto 2rem'
          }}>
            For thousands of years, humanity has created stories—not just to entertain, but to <strong style={{ fontWeight: '600' }}>understand ourselves</strong>, to <strong style={{ fontWeight: '600' }}>question our world</strong>, and to <strong style={{ fontWeight: '600' }}>connect across the barriers</strong> of time, language, and culture.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '0.75rem',
                opacity: 0.9
              }}>
                📖
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em'
              }}>
                Stories That Endure
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                opacity: 0.85,
                margin: 0
              }}>
                These works have survived centuries not by accident, but because they touch something fundamental in the human experience
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '0.75rem',
                opacity: 0.9
              }}>
                💡
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em'
              }}>
                Ideas That Challenge
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                opacity: 0.85,
                margin: 0
              }}>
                From questioning authority to exploring identity, classics push us to think beyond our assumptions and comfort zones
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '0.75rem',
                opacity: 0.9
              }}>
                🌟
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em'
              }}>
                Wisdom That Transforms
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                opacity: 0.85,
                margin: 0
              }}>
                The insights gained from great literature don't just inform—they change how we see ourselves and our place in the world
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              textAlign: 'left'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '0.75rem',
                opacity: 0.9
              }}>
                🌍
              </div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.01em'
              }}>
                Voices That Unite
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                opacity: 0.85,
                margin: 0
              }}>
                Across every language, culture, and era, classic literature reveals our shared humanity and collective dreams
              </p>
            </div>
          </div>

          <div style={{
            padding: '2.5rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            marginTop: '2rem'
          }}>
            <p style={{
              fontSize: '1.25rem',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
              fontStyle: 'italic',
              opacity: 0.95,
              fontWeight: '300'
            }}>
              "What an incredible achievement—that humans across millennia have poured their souls into creating stories, not for profit or power, but to illuminate truth, inspire hope, and remind us of our shared humanity."
            </p>
            <p style={{
              fontSize: '1rem',
              opacity: 0.85,
              margin: 0,
              fontWeight: '600'
            }}>
              This is humanity at its best. This is what we celebrate. This is what we amplify.
            </p>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section id="books" style={{
        padding: '5rem 1.5rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)'
          }}>
            Our Library
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '650px',
            margin: '0 auto 3rem'
          }}>
            Classic novels reimagined for the digital age with comprehensive study tools and Intelligence Amplified insights
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            {books.map((book, idx) => (
              <div key={book.id} className="book-card" style={{
                background: 'white',
                border: '2px solid var(--border-color)',
                padding: '0',
                transition: 'all 0.2s ease',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: idx % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                  gap: '0'
                }}>
                  {/* Book Info Side */}
                  <div style={{
                    padding: '2.5rem',
                    background: 'var(--card-bg)',
                    order: idx % 2 === 0 ? 1 : 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRight: idx % 2 === 0 ? '2px solid var(--border-color)' : 'none',
                    borderLeft: idx % 2 === 0 ? 'none' : '2px solid var(--border-color)'
                  }}>
                    {/* Status Badge */}
                    <div style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      background: book.status === 'Complete' ? 'var(--primary)' : 'var(--text-secondary)',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '1rem',
                      alignSelf: 'flex-start'
                    }}>
                      {book.status}
                    </div>

                    <h3 style={{
                      fontSize: '2.5rem',
                      fontWeight: '300',
                      marginBottom: '0.5rem',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1
                    }}>
                      {book.title}
                    </h3>

                    {book.subtitle && (
                      <p style={{
                        fontSize: '1.25rem',
                        fontStyle: 'italic',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.5rem'
                      }}>
                        {book.subtitle}
                      </p>
                    )}

                    <p style={{
                      fontSize: '1rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      by {book.author}
                    </p>

                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.5rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Published {book.year} • {book.chapters} Chapters
                    </p>

                    {/* Themes */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      {book.themes.map(theme => (
                        <span key={theme} style={{
                          padding: '0.375rem 0.75rem',
                          background: 'white',
                          border: '1px solid var(--border-color)',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          {theme}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={book.url}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.875rem 1.75rem',
                        background: 'var(--primary)',
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '0.9375rem',
                        fontWeight: '700',
                        transition: 'all 0.2s ease',
                        alignSelf: 'flex-start',
                        border: '2px solid var(--primary)'
                      }}
                    >
                      {book.status === 'Complete' ? 'Read Now' : 'Preview'} <ArrowRight size={18} />
                    </Link>
                  </div>

                  {/* Quote & Description Side */}
                  <div style={{
                    padding: '2.5rem',
                    order: idx % 2 === 0 ? 2 : 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <blockquote style={{
                      fontSize: '1.125rem',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      color: 'var(--text-primary)',
                      borderLeft: '3px solid var(--primary)',
                      paddingLeft: '1.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      {book.quote}
                    </blockquote>

                    <p style={{
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)'
                    }}>
                      {book.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '5rem 1.5rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)'
          }}>
            Your Digital Study Companion
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '650px',
            margin: '0 auto 3rem'
          }}>
            Modern learning tools designed to enhance your understanding of classic literature
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                icon: <Brain size={32} />,
                title: 'Intelligence Amplified Analysis',
                description: 'Get instant insights, character analysis, and thematic exploration with our advanced AI study assistant'
              },
              {
                icon: <BookOpen size={32} />,
                title: 'Study Guides',
                description: 'Comprehensive summaries, discussion questions, and modern adaptations for every chapter'
              },
              {
                icon: <Target size={32} />,
                title: 'Critical Thinking',
                description: 'Essay prompts, literary techniques, and activities to deepen your understanding'
              },
              {
                icon: <GraduationCap size={32} />,
                title: 'Teachers Hub',
                description: 'Custom lesson plans, classroom activities, and AI-amplified learning resources'
              }
            ].map((feature, idx) => (
              <div key={idx} style={{
                padding: '1.5rem',
                background: 'white',
                border: '1px solid var(--border-color)',
                transition: 'all 0.2s ease'
              }}>
                <div style={{
                  color: 'var(--primary)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '400',
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Appreciation Section */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)'
          }}>
            Experience & Appreciation
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: 1.7
          }}>
            Different readers, different journeys—Amplified Classics meets you where you are and enhances how you engage with literature
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderTop: '3px solid var(--primary)'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}>
                For Speed Readers
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2
              }}>
                Beyond Comprehension
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Speed through the plot if you must, but <strong>appreciate the artistry</strong>—the turn of phrase that captures a lifetime of longing, the dialogue that reveals character, the language that has endured not because of the story, but because of how it's told.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderTop: '3px solid var(--primary)'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}>
                For Slow Readers
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2
              }}>
                The Joy of Immersion
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                You savor. You linger. This is <em>exactly</em> how great literature is meant to be experienced. <strong>Reading slowly means reading deeply</strong>—experiencing the texture of language, the weight of moral dilemmas. Take your time. The joy is in the journey.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderTop: '3px solid var(--primary)'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}>
                For Educators
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2
              }}>
                The Ease of Flow
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Our method creates <strong>effortless flow</strong> from resistance to engagement. Modern adaptations make historical context click. AI meets students where they are. The text becomes accessible without being diminished. Your students don't just complete the assignment—<strong>they convince themselves.</strong>
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderTop: '3px solid var(--primary)'
            }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1rem'
              }}>
                For Aficionados
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2
              }}>
                Fresh Eyes on Familiar Pages
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                <strong>Every reading reveals something new</strong>. Our Intelligence Amplified analysis offers perspectives you might not have considered. Even beloved classics surprise you when viewed through new lenses. The conversation continues. The discovery never ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vast World of Classic Literature */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)'
          }}>
            The Vast World of Classic Literature
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '750px',
            margin: '0 auto 3rem',
            lineHeight: 1.7
          }}>
            Classic literature is not confined to English-speaking worlds or a single cultural tradition. It is a global conversation spanning centuries, languages, and continents.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              padding: '2rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                English Literature
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                From Shakespeare's psychological depth to Austen's social satire, from the Brontës' Gothic passion to Dickens' social reform—English literature offers centuries of human insight across every genre and theme.
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                margin: 0
              }}>
                Jane Eyre • Pride and Prejudice • Wuthering Heights • Great Expectations • Frankenstein • and hundreds more...
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                French Literature
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                The philosophical depth of Hugo's social conscience, the psychological realism of Flaubert, the existential questioning of Camus—French literature explores the human condition with unmatched intellectual rigor and emotional power.
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                margin: 0
              }}>
                Les Misérables • Madame Bovary • The Count of Monte Cristo • The Stranger • The Little Prince • and countless treasures...
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                Spanish Literature
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                From Cervantes' revolutionary Don Quixote—arguably the first modern novel—to García Márquez's magical realism, Spanish and Latin American literature blends reality and fantasy to illuminate universal human truths.
              </p>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                margin: 0
              }}>
                Don Quixote • One Hundred Years of Solitude • The House of Bernarda Alba • Love in the Time of Cholera • and many more...
              </p>
            </div>
          </div>

          <div style={{
            padding: '2.5rem',
            background: 'white',
            border: '2px solid var(--border-color)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: '400',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)'
            }}>
              And So Much More...
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto 1.5rem'
            }}>
              Russian literature's profound psychological depth (Dostoevsky, Tolstoy). German philosophy and storytelling (Goethe, Kafka). Italian Renaissance and beyond (Dante, Calvino). Japanese elegance and tradition (Murasaki Shikibu, Mishima). Chinese classical wisdom (Cao Xueqin). The classics represent humanity's collective inheritance—stories, ideas, and insights that transcend borders, languages, and centuries.
            </p>
            <p style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--primary)',
              margin: 0
              }}>
              Our mission: Make this vast treasury accessible to everyone, everywhere.
            </p>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            background: 'var(--primary)',
            color: 'white',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              opacity: 0.95
            }}>
              <strong style={{ fontWeight: '600' }}>Starting with English classics,</strong> we're building toward a truly global library. Each work will feature the same Intelligence Amplified tools—study guides, modern adaptations, discussion prompts—available in multiple languages to break down barriers and connect readers worldwide.
            </p>
            <p style={{
              fontSize: '0.875rem',
              opacity: 0.8,
              fontStyle: 'italic',
              margin: 0
            }}>
              Because great literature belongs to all of humanity, not just one language or culture.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--primary)',
        color: 'white',
        textAlign: 'center',
        borderTop: '3px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontWeight: '300',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)'
          }}>
            Ready to Begin?
          </h2>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            opacity: 0.9
          }}>
            Start your journey through classic literature with modern study tools and Intelligence Amplified insights
          </p>

          <Link
            href="/books/jane-eyre"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'white',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '1.125rem',
              fontWeight: '700',
              transition: 'all 0.2s ease',
              border: '2px solid white'
            }}
          >
            Start with Jane Eyre <ArrowRight size={20} />
          </Link>

          <div style={{
            marginTop: '2rem',
            fontSize: '0.875rem',
            opacity: 0.7
          }}>
            Free forever • No signup required • Works on all devices
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}