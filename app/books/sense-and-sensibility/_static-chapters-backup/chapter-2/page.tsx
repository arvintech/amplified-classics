"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles, ChevronDown, ChevronUp, Loader2, BookOpen, Users, MessageSquare, Brain, Lightbulb, TrendingUp, BookMarked } from 'lucide-react'
import { Badge } from '@/app/components/ui/Badge'

const READING_MOMENTS = [
  {
    id: 'promise-erosion',
    emoji: '💰',
    title: 'The Promise Erodes',
    notice: 'John Dashwood starts with good intentions: "He really thought himself equal to it. The prospect of four thousand pounds...was very noble." But watch what happens next.',
    explore: [
      'John initially plans to give each sister £1,000. Track how this number changes throughout the conversation.',
      'Notice Fanny\'s technique: she doesn\'t say "give them nothing." How does she chip away at his resolve?',
      'What does Austen reveal about how people rationalize selfishness?'
    ],
    amplify: `**You've Discovered: The Psychology of Rationalization**

You witnessed one of literature's most brilliant exposures of how greed disguises itself as prudence!

**The Erosion Pattern:**

**Stage 1:** £3,000 total (£1,000 each)
- "That would be a noble sum to give them!"

**Stage 2:** £1,500 total (£500 each)
- "Half as much would be quite enough"

**Stage 3:** An annuity of £100/year
- "An annuity is a very serious business"

**Stage 4:** Occasional gifts
- "A present of fifty pounds now and then"

**Stage 5:** Nothing substantial
- "They will be much more able to give you something"

**Fanny's Technique:**

She never says "be selfish." Instead she:
- Appeals to duty to THEIR son ("Think of dear little Harry")
- Questions the sisters' actual needs ("They will marry")
- Invokes fairness logic ("Equal to his sisters!")
- Uses fear tactics ("You'll bankrupt your son")
- Makes generosity seem foolish ("throwing away money")

**Why This Is Psychologically Brilliant:**

Austen shows us that people don't think "I'm greedy." They think:
- "I'm being responsible"
- "I'm protecting my family"
- "I'm being realistic"
- "Others don't really need it"
- "This is actually fair"

**Modern Parallels:**

Think about:
- Opposing living wages ("But it will hurt business!")
- Cutting social programs ("We can't afford it!")
- Tax cuts for the wealthy ("It helps everyone!")
- Any time structural greed wears the mask of fiscal responsibility

**Austen's Genius:** She lets us see the entire process of rationalization in real-time. By the end, John believes he's being generous by doing almost nothing.`
  },
  {
    id: 'fanny-manipulation',
    emoji: '🎭',
    title: 'Fanny\'s Masterclass in Manipulation',
    notice: 'Fanny systematically dismantles John\'s good intentions. Notice her argument structure: "To be sure it is. Nobody can think well of you for it. The liberality is not expected."',
    explore: [
      'Count Fanny\'s arguments. How many different reasons does she give?',
      'Notice: she never appeals to emotion or kindness. What does she appeal to instead?',
      'Why is John so easily convinced? What makes him vulnerable to her arguments?'
    ],
    amplify: `**You've Discovered: Systematic Manipulation**

Fanny is a masterclass in how to manipulate weak-willed people. Let's break down her technique!

**Fanny's Argument Arsenal:**

**1. Fear of Judgment**
- "Nobody can think well of you for it"
- Makes generosity seem foolish
- John fears looking weak

**2. Inverted Fairness**
- "It was my father's last wish...but he did not know what he was talking of"
- Dismisses dying man's request as incompetent
- Reframes greed as rational thought

**3. Financial Catastrophe**
- "If you give each £1,000, you'll have almost nothing left!"
- Exaggerates consequences
- Creates panic about security

**4. Victimhood Reversal**
- "They may marry wealthy men; YOU only have this"
- Makes the wealthy victim, poor women privileged
- Complete inversion of reality

**5. Child Weaponization**
- "Think of poor little Harry!"
- Uses their son as excuse
- Appeals to parental duty over human decency

**6. Social Status Anxiety**
- "They'll expect more! They'll never stop asking!"
- Preys on class anxieties
- Makes relatives seem like threats

**Why John Falls for It:**

John is:
- **Weak-willed:** Can't stand up to his wife
- **Conflicted:** Wants to be good but also wants money
- **Status-anxious:** Fears judgment
- **Intellectually lazy:** Accepts easy rationalizations
- **Emotionally distant:** Doesn't really care about his sisters

**The Result:** John ends up believing HE'S being generous by doing essentially nothing.

**Austen's Social Critique:**

This isn't just about two people. It's about:
- How the wealthy justify inequality
- How gender dynamics enable cruelty (John has power, Fanny manipulates it)
- How inheritance laws create these situations
- How "family duty" is selective and self-serving

**Modern Recognition:**

You see this pattern when:
- Someone talks themselves out of helping
- "Reasonable" arguments mask selfishness
- System protects privilege under guise of fairness
- The powerful call generosity "unrealistic"

**The Tragedy:** A dying man's wish meant nothing against his son's weakness and daughter-in-law's greed.`
  },
  {
    id: 'sisters-forgotten',
    emoji: '😔',
    title: 'The Sisters as Absent Subjects',
    notice: 'Throughout this entire conversation, notice who isn\'t there: the Dashwood sisters themselves. They\'re talked ABOUT but never asked, consulted, or considered as real people.',
    explore: [
      'Fanny and John decide the sisters\' fates. Do they ask what the sisters actually need?',
      'Notice how the sisters are described: "They\'ll marry," "They don\'t need much." Are these facts or assumptions?',
      'What does this reveal about women\'s agency in this society?'
    ],
    amplify: `**You've Discovered: The Erasure of Women's Voices**

You noticed something profound: the sisters' futures are decided without them. This is systemic powerlessness.

**The Sisters Are:**

**Discussed** (but not consulted)
- "What will they need?"
- Decided by others, never asked

**Categorized** (but not individualized)  
- "They'll marry"
- Reduced to their marriage prospects

**Theorized** (but not heard)
- "They won't need much"
- Needs assumed, not determined

**Judged** (but not present)
- "They're lucky to get anything"
- No chance to defend themselves

**Forgotten** (but affected)
- By chapter's end, they're not mentioned
- Their lives fundamentally changed by conversation they weren't part of

**The Power Dynamic:**

**John has:**
- Legal control of estate
- Power to give or withhold
- Social authority
- Final say

**Fanny has:**
- No legal power over estate
- BUT complete emotional control over John
- Gender manipulation (woman controlling man who controls women)

**Sisters have:**
- No legal rights
- No voice in decisions
- No control over futures
- No recourse

**Historical Reality:**

In 1811:
- Women couldn't inherit property (primogeniture)
- Unmarried women had no legal standing
- Fathers/brothers controlled women's finances
- Marriage was economic survival, not choice
- No social services, safety nets, or employment options

**What Austen Is Showing:**

This conversation happens in drawing rooms across England. Women's lives are decided:
- By men they depend on
- By women who control those men
- Without their input
- Based on others' financial self-interest
- With no legal recourse

**The Tragedy Layers:**

1. **Immediate:** Sisters lose security
2. **Systemic:** Law enables this
3. **Social:** This is normal and accepted
4. **Perpetual:** Women trapped in this system
5. **Ironic:** Fanny (a woman) helps perpetuate it

**Modern Parallels:**

Any time:
- Decisions about people made without their input
- Powerful define what powerless "need"
- Systems decide fates without consultation
- Assumptions replace actual conversation
- Those affected have no voice in outcomes

**Austen's Brilliance:** She shows us HOW systemic oppression works. It's not just laws—it's drawing-room conversations where lives are casually destroyed over tea.

**The Sisters Don't Know:** As this conversation happens, Elinor and Marianne have no idea their futures just crumbled.`
  }
]

export default function Chapter2Page() {
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
            Chapter 2 of 3
          </span>

          <Link
            href="/books/sense-and-sensibility/chapter-3"
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
            Chapter 2
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
            Sense and Sensibility — Chapter 2
          </h1>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            In one of literature's most brilliant satirical scenes, Fanny Dashwood systematically convinces her husband John to break his deathbed promise to his father—rationalizing greed as prudence.
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
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>12 min read</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} style={{ color: 'var(--primary)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>2 characters</span>
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
              John Dashwood arrives at Norland with his wife Fanny, full of good intentions to fulfill his father's dying wish. He plans to give each of his half-sisters £1,000—a generous sum that would provide real security.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              But Fanny immediately begins to undermine his resolve. Through a devastating display of manipulation, she systematically reduces his planned generosity. She argues it would be unfair to their son, that the sisters don't really need it, that they'll likely marry wealthy men, and that occasional small gifts would be more appropriate than substantial support.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              By the conversation's end, John has convinced himself that doing almost nothing is actually the responsible, even generous choice. What began as £3,000 total (£1,000 for each sister) is rationalized down to occasional presents of "fifty pounds, or less" when convenient.
            </p>

            <p style={{ margin: 0 }}>
              This chapter is one of Austen's most brilliant pieces of social satire—showing exactly how greed disguises itself as prudence, how the wealthy justify withholding from those in need, and how easily good intentions crumble under pressure from self-interest.
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
                John Dashwood
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Traits:</strong> Weak-willed, easily manipulated, wants to appear generous without being generous, values money over family duty, intellectually lazy, emotionally distant from his sisters
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                John starts with genuine good intentions but lacks the moral backbone to maintain them. His fatal flaw isn't cruelty—it's weakness. He wants to be good, but he wants to keep his money more. Austen shows how moral cowardice enables systemic cruelty.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                Fanny Dashwood
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Traits:</strong> Manipulative, greedy, strategically intelligent, morally bankrupt, uses logic as weapon, protects wealth at all costs, expert at rationalization
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Fanny is Austen's portrait of greed with brains. She never says "be selfish"—instead she builds elaborate logical structures that make selfishness seem responsible. She's the voice of systemic inequality: convincing the powerful that keeping power is actually fair. Her manipulation is systematic, calculated, and devastatingly effective.
              </p>
            </div>
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
                "He really thought himself equal to it. The prospect of four thousand pounds...was very noble."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                John's good intentions are genuine—making what follows even more damning. Austen shows how easily good intentions crumble when challenged.
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
                "To take three thousand pounds from the fortune of their dear little boy, would be impoverishing him to the most dreadful degree."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Fanny weaponizes their son. The wealthy are "impoverished" by helping others—classic rationalization of greed.
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
                "Altogether, they will have five hundred a-year amongst them, and what on earth can four women want for more than that?"
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                The wealthy decide what the poor "need." Fanny's question is rhetorical—she's not actually asking what they need.
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
                "He thought of it all day long, and for many days successively, and he did not repent."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                The devastating ending. John has fully internalized the rationalization. He believes he's been generous. Austen's irony is surgical.
              </p>
            </div>
          </div>
        </section>

        {/* Reading Moments */}
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
            This chapter is a masterclass in social satire. Let's explore how Austen exposes the psychology of greed.
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
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💰</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Economic Dependence
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                The sisters' futures are decided by John and Fanny. This chapter shows exactly how women's economic powerlessness played out in daily life. Watch how this theme evolves as the sisters search for security.
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '2px solid var(--border-color)',
              borderTop: '4px solid var(--primary)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎭</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Rationalization
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Watch how characters throughout the novel rationalize their selfish choices. Fanny and John aren't unique—they're representative. Austen will show us many ways people justify cruelty.
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--card-bg)',
              border: '2px solid var(--border-color)',
              borderTop: '4px solid var(--primary)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⚖️</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Moral Weakness
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                John's fatal flaw isn't cruelty—it's weakness. Compare his moral cowardice to Elinor's strength and Marianne's passionate conviction. Austen asks: what makes someone strong?
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
              <strong style={{ color: 'var(--text-primary)' }}>1. The Erosion of Good Intentions:</strong> Track how John's promise evolves from £3,000 to almost nothing. What does this reveal about how easily people abandon principles?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>2. Fanny's Technique:</strong> Analyze Fanny's manipulation strategy. How does she make greed seem reasonable? What modern examples share this pattern?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>3. Systemic Injustice:</strong> The sisters aren't consulted about their own futures. What does this reveal about women's position in this society?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>4. Austen's Satire:</strong> How does Austen use irony in this chapter? What is she criticizing about her society?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>5. Modern Parallels:</strong> Where do you see similar rationalization of inequality in modern society? How do the powerful justify keeping power?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>6. Character Judgment:</strong> Is John evil, or just weak? Which is worse? Can good intentions matter if they don't result in good actions?
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
            Next: Chapter 3 — Leaving Norland
          </h3>
          <Link
            href="/books/sense-and-sensibility/chapter-3"
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
            Continue to Chapter 3
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
