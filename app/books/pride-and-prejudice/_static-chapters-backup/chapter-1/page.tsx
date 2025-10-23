"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles, ChevronDown, ChevronUp, Loader2, ExternalLink, BookOpen, Users, MessageSquare, Brain } from 'lucide-react'
import { Badge } from '@/app/components/ui/Badge'
import { ReadOriginalText } from '@/app/components/ReadOriginalText'

const READING_MOMENTS = [
  {
    id: 'opening-line',
    emoji: '✨',
    title: 'The Most Famous Opening Line',
    notice: 'The novel opens: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." What strikes you about this first sentence?',
    explore: [
      'Look at the words "truth universally acknowledged." What does that phrase suggest?',
      'Now look at what the "truth" actually is—about wealthy men wanting wives. Who do you think REALLY wants this to be true?',
      'Put these together: whose perspective is Austen presenting? And is she being serious or...something else?'
    ],
    amplify: `**You've Discovered: Dramatic Irony**

You just caught Austen doing something brilliant! This isn't a truth at all—it's satire.

**What It Seems to Say:**
"Wealthy single men want wives."

**What It Actually Means:**
"Families with unmarried daughters desperately want wealthy single men."

**Why This Is Revolutionary Writing (1813):**

Austen opens with dramatic irony—saying one thing while meaning the opposite. This immediately:
- Establishes her satirical narrative voice
- Critiques the marriage market of her era
- Invites readers to question "universal truths"
- Reveals that what society calls "truth" is often self-serving fiction

**The Psychological Insight:**

Austen is showing us that people construct "truths" to justify their desires. Mrs. Bennet NEEDS wealthy men to want wives, so she believes this is a universal truth. We all do this—create narratives that serve our interests.

**Literary Context:** Most novels in 1813 opened with elaborate scene-setting. Austen opens with a philosophical statement that's actually social critique. This sophisticated narrative technique influenced generations of writers.

**For Discussion:** What "universal truths" do we accept today that might actually be convenient fictions? How does Austen teach us to question conventional wisdom?`
  },
  {
    id: 'mr-bennet-wit',
    emoji: '📖',
    title: 'Mr. Bennet\'s Sardonic Humor',
    notice: 'Mr. Bennet teases his wife about visiting Mr. Bingley: "I see no occasion for that. You and the girls may go, or you may send them by themselves..." What do you notice about how he talks to his wife?',
    explore: [
      'Mr. Bennet clearly enjoys teasing Mrs. Bennet. Look at his specific words—what makes them teasing?',
      'How does Mrs. Bennet respond? Does she understand his humor?',
      'What does this exchange tell you about their relationship? What kind of marriage is this?'
    ],
    amplify: `**You've Discovered: A Dysfunctional Marriage**

You identified that Mr. Bennet's "wit" is actually cruelty disguised as humor. Sharp observation!

**What's Happening:**

**Mr. Bennet's Behavior:**
- Uses sarcasm and mockery constantly
- Enjoys watching his wife get upset
- Feels intellectually superior to her
- Detached from family responsibilities
- Finds amusement in their chaos

**Mrs. Bennet's Position:**
- Can't understand his irony
- Gets genuinely distressed by his teasing
- Has legitimate concerns about daughters' futures
- Is mocked for caring about what matters to their family

**Why This Matters:**

Austen is showing us an unhappy marriage where intellectual incompatibility created contempt. Mr. Bennet married for beauty, not companionship. Now he's trapped with a woman he doesn't respect, so he amuses himself by mocking her.

**The Social Commentary:**

This is what happens when people marry for wrong reasons:
- Physical attraction without intellectual compatibility
- Social pressure without genuine affection
- Financial considerations without friendship
- Mr. Bennet's daughters are watching this model of marriage

**Feminist Reading:**

Mr. Bennet is often read as the "likeable" parent, but Austen wants us to see his flaws:
- He's charming but irresponsible
- He neglects his duty to educate and control Lydia
- He mocks his wife but doesn't help her
- His passivity causes real harm to his family

**Why Elizabeth Matters:**

Elizabeth inherits her father's wit but (we'll see) learns NOT to use it as a weapon. Her character arc is partly about having her father's intelligence without his cruelty.

**For Discussion:** Is Mr. Bennet's wit charming or mean? Can intellectual humor become a form of bullying? What makes for a good marriage in Austen's view?`
  },
  {
    id: 'mrs-bennet-nerves',
    emoji: '💍',
    title: 'Mrs. Bennet\'s "Poor Nerves"',
    notice: 'Mrs. Bennet complains: "You have no compassion on my poor nerves." And Mr. Bennet replies: "You mistake me, my dear. I have a high respect for your nerves. They are my old friends." What\'s happening here?',
    explore: [
      'Mrs. Bennet talks about her "nerves" a lot. What do you think this word meant in 1813?',
      'She seems genuinely upset. But everyone treats her concerns as ridiculous. Why?',
      'Look deeper: What are her actual concerns? Are they completely unreasonable?'
    ],
    amplify: `**You've Discovered: Anxiety Dismissed as "Hysteria"**

You're seeing how women's legitimate concerns were pathologized in Austen's era. Brilliant noticing!

**Understanding "Nerves":**

In Regency England, "nerves" was code for:
- Women's anxiety (often legitimate)
- Female "hysteria" (medical term for women's problems)
- Emotional fragility (seen as female weakness)
- Something to be mocked, not taken seriously

**Mrs. Bennet's Actual Situation:**

Let's look at what she's actually anxious about:
- Five unmarried daughters
- No sons (estate goes to male heir Mr. Collins)
- When Mr. Bennet dies, they'll be nearly destitute
- Daughters MUST marry to survive
- Time is running out (especially for Jane, the eldest)

**This isn't vanity—this is panic about her family's survival.**

**Why She's Mocked Instead of Helped:**

**Patriarchal Dismissal:**
- Women's concerns labeled as "emotional" rather than practical
- Her lack of education makes her inarticulate
- Her anxiety manifests in ways that seem foolish
- But the anxiety is completely rational given their situation

**Mr. Bennet's Failure:**
- He should have saved money for his daughters
- He should have educated them better
- He should help with their marriage prospects
- Instead, he mocks his wife and hides in his library

**The Tragedy:**

Mrs. Bennet is RIGHT to be anxious. Her family IS in financial danger. But because she's not articulate and sophisticated, everyone dismisses her—including readers of the novel!

**Austen's Complexity:**

The novel makes Mrs. Bennet ridiculous while also revealing:
- Her concerns are legitimate
- The system created her anxiety
- She's a victim of poor education
- Her husband's neglect makes everything worse

**Modern Parallel:**

Think about how we dismiss people's anxiety as "dramatic" or "hysterical"—especially women's. Sometimes the anxiety is completely reasonable, but the person isn't taken seriously because of how they express it.

**For Discussion:** Is Mrs. Bennet foolish or is she failed by everyone around her? How does Austen make us complicit in dismissing a woman whose fears are actually rational?`
  },
  {
    id: 'marriage-market',
    emoji: '💰',
    title: 'Marriage as Economic Necessity',
    notice: 'The entire chapter focuses on getting Mr. Bennet to visit Mr. Bingley so the daughters can meet him. Why is this visit so important to Mrs. Bennet?',
    explore: [
      'What would happen if the Bennet daughters don\'t marry? Think about the inheritance situation.',
      'Look at how everyone discusses Mr. Bingley\'s fortune ("four or five thousand a year"). Why does money matter so much?',
      'Connect the dots: What\'s actually at stake for these women?'
    ],
    amplify: `**You've Discovered: The Economics of Female Survival**

You're seeing why this isn't just about romance—it's about economic survival for women. Essential insight!

**The Harsh Reality:**

**The Entailment:**
- Longbourn estate goes to nearest male relative (Mr. Collins)
- Bennet daughters inherit almost nothing
- When Mr. Bennet dies, Mrs. Bennet and daughters face poverty

**Why Daughters MUST Marry:**

Women in Regency England had essentially two options:
1. **Marry well** → security, social position, home
2. **Don't marry** → poverty, social death, dependence on relatives

**There was no third option.**
- Women couldn't own property
- Women couldn't work (genteel professions)
- Women couldn't earn significant income
- Women depended entirely on men

**What £4,000-5,000 a Year Means:**

This is extraordinary wealth—roughly $400,000-500,000 in today's purchasing power. A gentleman could live very well on £300 a year. Bingley is RICH.

**Why Mrs. Bennet Is Desperate:**

She has FIVE daughters who need to:
- Marry men wealthy enough to support them
- Marry before they're "too old" (late 20s!)
- Marry before cheaper, younger women take the available men
- Marry well enough to help their sisters marry

**This is a literal race against time for their survival.**

**The Marriage Market:**

Austen uses economic language deliberately:
- "In possession of" a fortune
- Daughters are "out" (on the market)
- "Selling" themselves via balls and visits
- Marriage as transaction, not romance

**Feminist Critique:**

Austen is exposing how the system reduced:
- Women to commodities
- Marriage to economic exchange
- Romance to financial negotiation
- Female worth to marriage prospects

**The System Created Mrs. Bennet:**

She wasn't born ridiculous—the system made her desperate. When your daughters' survival depends entirely on their ability to attract men, you become what Mrs. Bennet is: anxious, pushy, obsessed with marriage.

**Why This Matters for the Novel:**

This context makes Elizabeth's refusal of Mr. Collins (later) absolutely RADICAL. She turns down economic security because she demands something more from marriage. This was revolutionary thinking in 1813.

**For Discussion:** What modern economic pressures on women parallel the marriage market? How have things changed, and how have they stayed the same?`
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

  const explorePhase = (momentId: string) => {
    if (!expandedMoments.has(momentId)) {
      const newSet = new Set(expandedMoments)
      newSet.add(momentId)
      setExpandedMoments(newSet)
    }
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
            href="/books/pride-and-prejudice"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: '500',
              transition: 'color 0.2s'
            }}
          >
            <ArrowLeft size={16} />
            Back to Book
          </Link>
          <span style={{
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            fontWeight: '500'
          }}>
            Chapter 1 of 61
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        
        {/* Chapter Opening Context */}
        <div style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.05) 0%, rgba(30, 86, 49, 0.08) 100%)',
          border: '3px solid rgba(30, 86, 49, 0.2)',
          borderRadius: '0.5rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '5px',
            height: '100%',
            background: 'var(--primary)',
            borderRadius: '0.5rem 0 0 0.5rem'
          }} />
          <div style={{ paddingLeft: '1rem' }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.75rem'
            }}>
              📚 Novel Opening
            </div>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: 'var(--text-primary)',
              margin: 0,
              fontStyle: 'italic'
            }}>
              With one of the most famous opening lines in English literature, Austen introduces us to the Bennet family, the marriage market of Regency England, and the ironic narrative voice that will guide us through this comedy of manners.
            </p>
          </div>
        </div>

        {/* Chapter Header */}
        <div style={{
          marginBottom: '3rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              padding: '0.5rem 1rem',
              background: 'var(--primary)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.875rem',
              borderRadius: '0.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Chapter 1
            </div>
            <Badge style={{ background: 'rgba(30, 86, 49, 0.1)', color: 'var(--primary)', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={14} />
              IA Edition
            </Badge>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            lineHeight: 1.2,
            fontFamily: 'var(--font-heading)'
          }}>
            A Truth Universally Acknowledged
          </h1>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            The novel opens with its famous ironic line about wealthy bachelors, as Mrs. Bennet schemes to introduce her daughters to the newly arrived Mr. Bingley, while Mr. Bennet teases his wife about her matchmaking obsessions.
          </p>

          <div style={{
            padding: '1rem 1.5rem',
            background: 'rgba(0, 0, 0, 0.02)',
            border: '1px solid var(--border-color)',
            borderLeft: '3px solid var(--primary)',
            fontSize: '0.9375rem',
            color: 'var(--text-secondary)'
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>Reading Time:</strong> ~4 minutes • 
            <strong style={{ color: 'var(--text-primary)', marginLeft: '1rem' }}>Part:</strong> 1 - Netherfield
          </div>
        </div>

        {/* Read Original Text */}
        <section style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'white',
          border: '2px solid var(--border-color)',
          borderTop: '4px solid var(--primary)'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '1rem'
          }}>
            📖 Read the Original Text
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            Experience Austen's brilliant wit and irony firsthand. We recommend reading the actual chapter before or alongside this guide.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#4CAF50',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '0.25rem',
                fontSize: '0.9375rem',
                transition: 'opacity 0.2s'
              }}
            >
              Read Free on Gutenberg
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/0141439513"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: '#FF9900',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '0.25rem',
                fontSize: '0.9375rem',
                transition: 'opacity 0.2s'
              }}
            >
              Buy on Amazon
              <ExternalLink size={16} />
            </a>
          </div>
        </section>

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
              The novel opens with one of literature's most famous lines: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." This ironic statement sets the tone for Austen's social satire.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Mrs. Bennet is excited about the arrival of Mr. Bingley, a wealthy young man who has rented Netherfield Park. She pressures her husband to visit Mr. Bingley immediately so that he can introduce their five unmarried daughters. Mr. Bennet responds to his wife with sardonic humor, teasing her about her "poor nerves" and pretending he won't visit Bingley.
            </p>

            <p style={{ margin: 0 }}>
              The chapter establishes the Bennet family dynamics: Mrs. Bennet's obsessive focus on marrying off her daughters, Mr. Bennet's detached wit and mockery of his wife, and the economic pressures facing women in Regency England. The entailment of the Bennet estate (it will go to a male relative) means the daughters must marry to secure their futures.
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

          <div style={{
            display: 'grid',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                Mrs. Bennet
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Trait:</strong> Obsessively focused on marrying off her five daughters
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Motivation:</strong> Economic anxiety—her daughters must marry to survive due to the entailment of the estate
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Introduced as foolish and annoying, but Austen invites us to see the legitimate economic terror beneath her behavior. She's a victim of a system that gave women no options beyond marriage, poorly educated, and married to a man who mocks rather than helps her.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                Mr. Bennet
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Key Trait:</strong> Sardonic, witty, detached from family responsibilities
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Flaw:</strong> Uses humor as a weapon; neglects his duties as father and husband
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Initially appears as the sympathetic, intelligent parent, but Austen reveals his failures: he married foolishly (for beauty without compatibility), neglects to save money for his daughters, and amuses himself by mocking his wife instead of helping the family. His passivity will have real consequences.
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

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
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
                "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                One of the most famous opening lines in English literature. Austen uses dramatic irony—it's not wealthy men who want wives, but families with daughters who want wealthy men. This sets up the novel's satirical examination of the marriage market.
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
                "You have no compassion on my poor nerves."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Mrs. Bennet's complaint reveals both her theatrical nature and her genuine anxiety. In Regency England, "nerves" was how women's stress and fear were pathologized and dismissed—often when their concerns were completely legitimate.
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
                "You mistake me, my dear. I have a high respect for your nerves. They are my old friends. I have heard you mention them with consideration these last twenty years at least."
              </blockquote>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Mr. Bennet's sarcastic response shows both his wit and his cruelty. He's been mocking his wife for twenty years instead of addressing the real problems facing their family. This reveals the dysfunction of their marriage.
              </p>
            </div>
          </div>
        </section>

        {/* Intelligence Amplified Analysis */}
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
            <Brain size={24} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Intelligence Amplified Analysis
            </h2>
          </div>

          <div style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)'
          }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--primary)' }}>Ironic Narrative Voice:</strong> Austen opens with one of literature's most sophisticated uses of irony. The "truth universally acknowledged" is actually a satirical observation about how families with unmarried daughters desperately want to believe wealthy men need wives. This ironic distance—saying one thing while meaning another—establishes Austen's narrative technique and invites readers to question social "truths."
            </p>

            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--primary)' }}>The Marriage Market:</strong> The entire chapter revolves around treating marriage as an economic transaction. Mrs. Bennet's behavior, which seems ridiculous, is actually rational panic about her daughters' economic survival. The entailment means when Mr. Bennet dies, the women face poverty. This isn't about romance—it's about women's lack of economic options in Regency England.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--primary)' }}>Dysfunctional Marriage as Social Commentary:</strong> The Bennets' marriage shows what happens when people marry for wrong reasons. Mr. Bennet married for beauty, not intellectual compatibility. Now trapped with a woman he doesn't respect, he retreats into sardonic mockery. Austen uses this to critique both the pressures that create such matches and the consequences of marrying without friendship and equality.
            </p>

            <p style={{ margin: 0 }}>
              <strong style={{ color: 'var(--primary)' }}>Sympathy and Critique:</strong> Austen makes Mrs. Bennet ridiculous while also revealing why she's desperate. This dual perspective—finding her funny while understanding her fear—is typical of Austen's sophisticated social analysis. She critiques individuals while also exposing the systems that created them.
            </p>
          </div>
        </section>

        {/* Notice → Explore → Amplify Section */}
        <section style={{
          marginBottom: '3rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.03) 0%, rgba(30, 86, 49, 0.06) 100%)',
          border: '3px solid rgba(30, 86, 49, 0.2)',
          borderTop: '5px solid var(--primary)',
          position: 'relative'
        }}>
          {/* Badge */}
          <div style={{
            position: 'absolute',
            top: '-12px',
            right: '2rem',
            background: 'white',
            padding: '0.25rem 0.75rem',
            border: '2px solid var(--primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Sparkles size={14} style={{ color: 'var(--primary)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              IA Feature
            </span>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            <Brain size={28} style={{ color: 'var(--primary)' }} />
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: 0
            }}>
              Notice → Explore → Amplify
            </h2>
          </div>

          <p style={{
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '0.75rem',
            maxWidth: '800px'
          }}>
            <strong style={{ color: 'var(--text-primary)' }}>Read like a detective.</strong> What did YOU notice in this chapter? Each moment below invites you to explore together—no right answers yet, just noticing, wondering, and discovering.
          </p>

          <p style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '800px',
            fontStyle: 'italic'
          }}>
            Click any moment to EXPLORE guiding questions, then AMPLIFY to reveal expert literary insight.
          </p>

          {/* Reading Moments */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
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
                    borderRadius: '0.5rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {/* Notice Phase */}
                  <div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.75rem'
                        }}>
                          <span style={{ fontSize: '2rem' }}>{moment.emoji}</span>
                          <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            margin: 0
                          }}>
                            {moment.title}
                          </h3>
                        </div>
                        <div style={{
                          padding: '1rem 1.5rem',
                          background: 'rgba(30, 86, 49, 0.05)',
                          borderLeft: '4px solid var(--primary)',
                          marginBottom: '1rem'
                        }}>
                          <p style={{
                            fontSize: '1rem',
                            lineHeight: 1.7,
                            color: 'var(--text-secondary)',
                            margin: 0
                          }}>
                            {moment.notice}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Explore Button */}
                    {!isExpanded && (
                      <button
                        onClick={() => explorePhase(moment.id)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1.5rem',
                          background: 'var(--primary)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '0.25rem',
                          fontSize: '1rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Explore This Moment
                        <ChevronDown size={18} />
                      </button>
                    )}
                  </div>

                  {/* Explore Phase */}
                  {isExpanded && (
                    <div style={{
                      marginTop: '1.5rem',
                      paddingTop: '1.5rem',
                      borderTop: '1px solid var(--border-color)'
                    }}>
                      <div style={{
                        marginBottom: '1.5rem'
                      }}>
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          background: 'rgba(30, 86, 49, 0.1)',
                          borderRadius: '0.25rem',
                          marginBottom: '1rem'
                        }}>
                          <span style={{ fontSize: '1.25rem' }}>🔍</span>
                          <span style={{
                            fontSize: '0.875rem',
                            fontWeight: '700',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>
                            Explore Phase
                          </span>
                        </div>
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem'
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

                      {/* Amplify Button */}
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

                      {/* Amplify Phase */}
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

                      {/* Collapse Button */}
                      <button
                        onClick={() => toggleMoment(moment.id)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.75rem 1.5rem',
                          background: 'white',
                          color: 'var(--primary)',
                          border: '2px solid var(--primary)',
                          borderRadius: '0.25rem',
                          fontSize: '0.9375rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          marginTop: '1rem',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Collapse
                        <ChevronUp size={18} />
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Next Chapter Teaser */}
        <div style={{
          marginBottom: '2rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, rgba(30, 86, 49, 0.05) 0%, rgba(30, 86, 49, 0.08) 100%)',
          border: '3px solid rgba(30, 86, 49, 0.2)',
          borderRadius: '0.5rem',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: '-12px',
            left: '2rem',
            background: 'var(--primary)',
            color: 'white',
            padding: '0.5rem 1rem',
            fontSize: '0.75rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            📚 Next Chapter
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '4px',
              height: '80px',
              background: 'var(--primary)',
              borderRadius: '2px'
            }} />
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)'
              }}>
                Chapter 2: The Visit to Netherfield
              </h3>
              <p style={{
                fontSize: '1.125rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
                margin: 0,
                fontStyle: 'italic'
              }}>
                Mr. Bennet surprises his family by revealing he has already visited Mr. Bingley. The game is afoot—the matchmaking can begin.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Link
              href="/books/pride-and-prejudice/chapter-2"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.25rem 3rem',
                background: 'var(--primary)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.125rem',
                fontWeight: '700',
                border: '3px solid var(--primary)',
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
            >
              Continue to Chapter 2
              <ArrowRight size={22} />
            </Link>
          </div>
        </div>

        {/* Read the Original Text */}
        <ReadOriginalText />

        {/* Chapter Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <div style={{ width: '120px' }} />
          
          <Link
            href="/books/pride-and-prejudice"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'white',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              fontWeight: '600',
              border: '2px solid var(--border-color)',
              borderRadius: '0.25rem',
              transition: 'all 0.2s ease'
            }}
          >
            View All Chapters
          </Link>

          <Link
            href="/books/pride-and-prejudice/chapter-2"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: 'var(--primary)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '0.25rem',
              fontSize: '0.9375rem',
              transition: 'all 0.2s ease'
            }}
          >
            Next Chapter
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

