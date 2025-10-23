"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles, ChevronDown, ChevronUp, Loader2, BookOpen, Users, MessageSquare, Brain, Lightbulb, TrendingUp } from 'lucide-react'
import { Badge } from '@/app/components/ui/Badge'

const READING_MOMENTS = [
  {
    id: 'opening-loss',
    emoji: '💔',
    title: 'The Opening Loss',
    notice: 'The novel opens with death and displacement: "The family of Dashwood had long been settled in Sussex...but the late owner of this estate was a single man who lived to a very advanced age." What catches your attention?',
    explore: [
      'What happens when the owner dies? Who inherits the estate?',
      'Notice who is left out: the Dashwood women have no claim to the property they\'ve lived in.',
      'How does this opening establish the economic vulnerability of women?'
    ],
    amplify: `**You've Discovered: Women's Economic Dependence**

You identified the central crisis! The Dashwood women lose everything because they cannot inherit.

**The Legal Reality:**

In Regency England:
- Property passed through male heirs only (primogeniture)
- Women had no legal right to inherit
- Death of a male protector = instant vulnerability
- Marriage was economic survival, not choice

**Why This Matters:**

Austen isn't just telling a story—she's exposing systemic injustice. The Dashwood sisters' entire lives will be determined by:
- Who will support them
- Who will marry them
- How much money they can secure

**Modern Parallel:** Think about economic systems where women still can't own property, inherit equally, or control their finances. This was the reality for educated, middle-class women in 1811.

**This opening establishes the stakes: without male protection or marriage, women face poverty.**`
  },
  {
    id: 'elinor-sense',
    emoji: '🧠',
    title: 'Elinor\'s Sense',
    notice: 'We meet Elinor: "She had an excellent heart; her disposition was affectionate, and her feelings were strong; but she knew how to govern them." What\'s significant here?',
    explore: [
      'Notice the contrast: strong feelings BUT governed/controlled',
      'Why might controlling emotions be important in Elinor\'s situation?',
      'Is "sense" (reason) a strength or a limitation?'
    ],
    amplify: `**You've Discovered: The Theme of "Sense"**

Elinor represents "sense"—reason, self-control, social propriety. But Austen is asking: at what cost?

**Elinor's Dilemma:**

**Strengths:**
- Emotional intelligence (understands others)
- Self-discipline (protects family)
- Social awareness (navigates difficult situations)
- Practical wisdom (manages resources)

**Costs:**
- Suppresses her own desires
- Carries emotional burden alone
- Cannot express genuine feelings
- Sacrifices happiness for duty

**Historical Context:** Women were taught that emotional control was essential. "Sensibility" (emotion) was seen as weakness. Elinor embodies this training.

**Austen's Question:** Is suppressing feelings strength or damage? Can you be too rational? Where's the balance?

**This establishes the novel's central debate about emotion vs. reason.**`
  },
  {
    id: 'marianne-sensibility',
    emoji: '💫',
    title: 'Marianne\'s Sensibility',
    notice: 'Then Marianne: "She was sensible and clever; but eager in everything: her sorrows, her joys, could have no moderation." What\'s the contrast?',
    explore: [
      'Compare Marianne to Elinor: one controls feelings, one expresses them freely',
      'Which sister does society prefer? Which do YOU prefer?',
      'What might be the dangers and strengths of each approach?'
    ],
    amplify: `**You've Discovered: The Theme of "Sensibility"**

Marianne represents "sensibility"—passion, emotion, authenticity, artistic temperament. But is this sustainable?

**Marianne's Dilemma:**

**Strengths:**
- Authentic self-expression
- Deep capacity for joy and beauty
- Honest about feelings
- Romantic idealism
- Artistic sensibility

**Dangers:**
- Vulnerability to manipulation
- Cannot hide feelings (social disadvantage)
- Extreme emotions (no moderation)
- Idealistic expectations (setting up disappointment)
- Rejection of practicality

**Historical Context:** "Sensibility" was a cultural movement celebrating emotion and nature. But it was also criticized as self-indulgent and dangerous, especially for women.

**Austen's Complexity:** The novel neither endorses Elinor's suppression NOR Marianne's excess. It's asking: how do we balance authenticity with protection? Feeling with survival?

**This isn't about choosing sides—it's about integration.**`
  }
]

export default function Chapter1Page() {
  const [expandedMoments, setExpandedMoments] = useState<Set<string>>(new Set())
  const [amplifiedMoments, setAmplifiedMoments] = useState<Set<string>>(new Set())
  const [loadingMoments, setLoadingMoments] = useState<Set<string>>(new Set())

  const toggleMoment = (id: string) => {
    const newExpanded = new Set(expandedMoments)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedMoments(newExpanded)
  }

  const amplifyMoment = async (momentId: string) => {
    setLoadingMoments(prev => {
      const newSet = new Set(prev)
      newSet.add(momentId)
      return newSet
    })
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setAmplifiedMoments(prev => {
        const newSet = new Set(prev)
        newSet.add(momentId)
        return newSet
      })
    } catch (error) {
      console.error('Error amplifying moment:', error)
    } finally {
      setLoadingMoments(prev => {
        const newLoading = new Set(prev)
        newLoading.delete(momentId)
        return newLoading
      })
    }
  }

  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      {/* Navigation Bar */}
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
            href="/books/sense-and-sensibility"
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

          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            fontWeight: '600'
          }}>
            Chapter 1 of 3
          </span>

          <Link
            href="/books/sense-and-sensibility/chapter-2"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'var(--primary)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '700',
              transition: 'background 0.2s ease'
            }}
          >
            Next Chapter
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        {/* Chapter Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 0.75rem',
            background: 'var(--primary)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Chapter 1
          </div>

          <Badge style={{ background: 'rgba(30, 86, 49, 0.1)', color: 'var(--primary)', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <Sparkles size={14} />
            IA Edition
          </Badge>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '300',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-heading)'
          }}>
            Sense and Sensibility — Chapter 1
          </h1>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            The Dashwood family loses their estate when the father dies, leaving Elinor, Marianne, and their mother economically vulnerable and dependent on male relatives.
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            padding: '1rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={18} style={{ color: 'var(--primary)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>15 min read</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} style={{ color: 'var(--primary)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>3 characters</span>
            </div>
          </div>
        </div>

        {/* Chapter Summary */}
        <section style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'var(--card-bg)',
          border: '2px solid var(--border-color)',
          borderLeft: '4px solid var(--primary)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <BookOpen size={24} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Chapter Summary
            </h2>
          </div>

          <div style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              The novel opens with the death of Henry Dashwood, whose estate passes to his son John from a first marriage. The inheritance laws leave Henry's second wife and three daughters—Elinor, Marianne, and Margaret—with almost nothing.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              On his deathbed, Henry extracts a promise from John to care for his stepmother and half-sisters. John intends to be generous, but his wife Fanny quickly convinces him to do as little as possible, rationalizing away any meaningful support.
            </p>

            <p style={{ margin: 0 }}>
              The chapter introduces the Dashwood sisters: sensible, self-controlled Elinor and passionate, romantic Marianne. Their contrasting temperaments will drive the novel's exploration of "sense" versus "sensibility"—reason versus emotion.
            </p>
          </div>
        </section>

        {/* Character Development */}
        <section style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'white',
          border: '2px solid var(--border-color)',
          borderTop: '4px solid var(--primary)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <Users size={24} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Character Development
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                Elinor Dashwood
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Traits:</strong> Sensible, self-controlled, strong feelings but governed by reason, excellent judgment, affectionate heart, protective of family
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Elinor embodies "sense"—the rational, prudent approach to life. She has deep feelings but controls their expression, acting as the family's emotional anchor and practical advisor during crisis.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                Marianne Dashwood
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Traits:</strong> Passionate, romantic, eager in all feelings, no emotional moderation, generous, honest, artistic temperament
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Marianne represents "sensibility"—the emotional, romantic approach. She feels everything intensely and believes in following the heart. Her authenticity is both her strength and potential vulnerability.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                John & Fanny Dashwood
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Traits:</strong> Weak-willed (John), greedy and manipulative (Fanny), rationalizing selfishness as prudence
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                The couple represents moral failure. John's inability to resist Fanny's manipulation shows how greed disguises itself as reason. Their famous conversation rationalizing away charity is Austen's satirical masterpiece.
              </p>
            </div>
          </div>
        </section>

        {/* Key Moments Section */}
        <section style={{
          marginBottom: '3rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.03) 0%, rgba(30, 86, 49, 0.08) 100%)',
          border: '2px solid var(--primary)',
          borderRadius: '0.5rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.25rem 0.75rem',
            background: 'var(--primary)',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            IA Feature
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <Brain size={28} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Amplified Reading Moments
            </h2>
          </div>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '2rem'
          }}>
            These are the moments students notice when reading carefully. Let's explore what makes them significant.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {READING_MOMENTS.map((moment) => {
              const isExpanded = expandedMoments.has(moment.id)
              const isAmplified = amplifiedMoments.has(moment.id)
              const isLoading = loadingMoments.has(moment.id)

              return (
                <div
                  key={moment.id}
                  style={{
                    padding: '2rem',
                    background: 'white',
                    border: '2px solid var(--border-color)',
                    borderRadius: '0.5rem'
                  }}
                >
                  <button
                    onClick={() => toggleMoment(moment.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '2rem' }}>{moment.emoji}</span>
                      <div>
                        <h3 style={{
                          fontSize: '1.25rem',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                          marginBottom: '0.5rem'
                        }}>
                          {moment.title}
                        </h3>
                        <p style={{
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          color: 'var(--text-secondary)',
                          margin: 0
                        }}>
                          {moment.notice}
                        </p>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>

                  {isExpanded && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <div style={{
                        padding: '1.5rem',
                        background: 'var(--card-bg)',
                        borderRadius: '0.25rem',
                        marginBottom: '1.5rem'
                      }}>
                        <h4 style={{
                          fontSize: '1rem',
                          fontWeight: '700',
                          color: 'var(--primary)',
                          marginBottom: '1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}>
                          Explore
                        </h4>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.75rem'
                        }}>
                          {moment.explore.map((question, qIndex) => (
                            <div
                              key={qIndex}
                              style={{
                                padding: '1rem 1.5rem',
                                background: 'rgba(30, 86, 49, 0.03)',
                                borderLeft: '3px solid var(--primary)',
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                color: 'var(--text-primary)'
                              }}
                            >
                              {question}
                            </div>
                          ))}
                        </div>
                      </div>

                      {!isAmplified && (
                        <button
                          onClick={() => amplifyMoment(moment.id)}
                          disabled={isLoading}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem 2rem',
                            background: isLoading ? '#ccc' : 'linear-gradient(135deg, var(--primary) 0%, #164d2a 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '0.25rem',
                            fontSize: '1.125rem',
                            fontWeight: '700',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: isLoading ? 'none' : '0 4px 6px rgba(0,0,0,0.1)'
                          }}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} />
                              Amplifying...
                            </>
                          ) : (
                            <>
                              <Sparkles size={20} />
                              Amplify This Moment
                            </>
                          )}
                        </button>
                      )}

                      {isAmplified && (
                        <div style={{
                          marginTop: '1.5rem',
                          padding: '2rem',
                          background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.08) 0%, rgba(30, 86, 49, 0.12) 100%)',
                          borderRadius: '0.5rem',
                          border: '2px solid var(--primary)'
                        }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '1.5rem'
                          }}>
                            <Sparkles size={24} style={{ color: 'var(--primary)' }} />
                            <span style={{
                              fontSize: '1rem',
                              fontWeight: '700',
                              color: 'var(--primary)',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em'
                            }}>
                              Amplified
                            </span>
                          </div>
                          <div
                            style={{
                              fontSize: '1rem',
                              lineHeight: 1.8,
                              color: 'var(--text-primary)'
                            }}
                            dangerouslySetInnerHTML={{ __html: moment.amplify.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Key Quotes */}
        <section style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'white',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <MessageSquare size={24} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Key Quotes
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <blockquote style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '1.5rem',
                margin: 0,
                marginBottom: '1rem'
              }}>
                "The family of Dashwood had long been settled in Sussex."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Austen's opening establishes stability before disruption—the family has been "settled" for generations, making the coming displacement even more traumatic. "Had been" signals the end of an era.
              </p>
            </div>

            <div>
              <blockquote style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '1.5rem',
                margin: 0,
                marginBottom: '1rem'
              }}>
                "By a former marriage, Mr. Henry Dashwood had one son: by his present lady, three daughters."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                The structure of this sentence mirrors the inequality: the son (singular, definite article "the") versus the daughters (plural, generic "three"). Grammar reflects power structures.
              </p>
            </div>

            <div>
              <blockquote style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '1.5rem',
                margin: 0,
                marginBottom: '1rem'
              }}>
                "He had an excellent heart; her disposition was affectionate, and her feelings were strong; but she knew how to govern them."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Elinor's defining trait: strong feelings BUT governed. The semicolon separates heart from control—Austen won't let us forget both exist. "Knew how to govern" signals effortful control, not natural coldness.
              </p>
            </div>

            <div>
              <blockquote style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '1.5rem',
                margin: 0,
                marginBottom: '1rem'
              }}>
                "She was sensible and clever; but eager in everything: her sorrows, her joys, could have no moderation."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Marianne's defining trait: "BUT eager in everything." The "but" signals that her passion conflicts with being "sensible and clever." "Could have no moderation" isn't a judgment—it's a fact about her nature.
              </p>
            </div>

            <div>
              <blockquote style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                borderLeft: '3px solid var(--primary)',
                paddingLeft: '1.5rem',
                margin: 0,
                marginBottom: '1rem'
              }}>
                "The old gentleman died: his will was read, and like almost every other will, gave as much disappointment as pleasure."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Austen's dry irony: "like almost every other will" normalizes injustice. Death redistributes wealth unfairly, disappointing those who need it, pleasing those who don't. This is presented as unremarkable—which is the tragedy.
              </p>
            </div>
          </div>
        </section>

        {/* Thematic Threads */}
        <section style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'white',
          border: '2px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <TrendingUp size={24} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Thematic Threads to Follow
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '2px solid var(--border-color)',
              borderTop: '4px solid var(--primary)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💔</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Women's Economic Dependence
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                This opening establishes the central crisis: women cannot inherit, cannot control their fates. The Dashwood sisters' entire story flows from this legal reality. Track how economic vulnerability shapes every choice.
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '2px solid var(--border-color)',
              borderTop: '4px solid var(--primary)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🧠💫</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Sense vs. Sensibility
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Elinor's controlled reason versus Marianne's passionate emotion. The novel will test both approaches. Watch: which serves them better? Which costs more? Can either extreme be sustainable?
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '2px solid var(--border-color)',
              borderTop: '4px solid var(--primary)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>👭</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Sisterhood
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Despite opposite temperaments, the sisters face crisis together. Their bond will be tested by romantic rivals, secrets, and misunderstandings. Track how they support—and sometimes fail—each other.
              </p>
            </div>
          </div>
        </section>

        {/* Discussion Questions */}
        <section style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'var(--card-bg)',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <Lightbulb size={24} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Discussion Questions
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)'
          }}>
            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>1. The Opening Crisis:</strong> How does Austen establish the economic vulnerability of women in the opening paragraphs? What specific legal realities create the sisters' predicament?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>2. Defining the Sisters:</strong> Compare Elinor's and Marianne's character descriptions. How does Austen use language structure (the "but" in each description) to define them?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>3. Modern Parallels:</strong> What modern systems still make women economically dependent on men or marriages? How has this changed or remained the same since 1811?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>4. Inheritance Law:</strong> Why did primogeniture (male-only inheritance) exist? Who did this system benefit? Who did it harm? Can law be "legal" but still unjust?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>5. First Impressions:</strong> Based on this chapter, which sister do you think will be more successful navigating their world? Which approach—sense or sensibility—seems more practical?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>6. Austen's Tone:</strong> How does Austen present injustice in this opening? Is she angry? Ironic? Resigned? How does her tone affect your reading?
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div style={{
          padding: '2rem',
          background: 'white',
          border: '2px solid var(--border-color)',
          marginBottom: '2rem'
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            Next: Chapter 2 — The Rationalization of Greed
          </h3>
          <Link
            href="/books/sense-and-sensibility/chapter-2"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '700'
            }}
          >
            Continue to Chapter 2
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Footer */}
        <div style={{
          padding: '1.5rem 0',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)'
        }}>
          <Link href="/books/sense-and-sensibility" style={{ color: 'var(--primary)' }}>
            View all chapters
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--primary)',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </div>
  )
}

