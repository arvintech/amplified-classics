"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles, ChevronDown, ChevronUp, Loader2, BookOpen, Users, MessageSquare, Brain, Lightbulb, TrendingUp, BookMarked } from 'lucide-react'
import { Badge } from '@/app/components/ui/Badge'

const READING_MOMENTS = [
  {
    id: 'mrs-dashwood-romantictemperament',
    emoji: '💫',
    title: 'Mrs. Dashwood\'s Romantic Temperament',
    notice: 'We learn that Mrs. Dashwood is more like Marianne than Elinor: "Mrs. Dashwood was of a romantic and ardent disposition, but in common with her eldest daughter, she had good sense." What\'s significant about the mother\'s temperament?',
    explore: [
      'Who does the mother resemble emotionally—Elinor or Marianne?',
      'If the mother shares Marianne\'s temperament, who must provide stability and practical guidance?',
      'What does this reveal about Elinor\'s burden in this family?'
    ],
    amplify: `**You've Discovered: Elinor's Impossible Position**

You noticed that Elinor is the ONLY one providing rational stability! This is profound.

**The Family Dynamic:**

**Mrs. Dashwood:**
- Romantic and ardent (like Marianne)
- Impulsive in decisions
- Emotional in reactions
- Needs guidance herself

**Marianne:**
- Passionate and uncontrolled
- Refuses to moderate emotions
- Young and idealistic
- Following her nature

**Elinor:**
- Must be rational for EVERYONE
- Cannot indulge her own feelings
- Makes all practical decisions
- Manages everyone's emotions

**Margaret:**
- Young, still forming character
- Also passionate like Marianne
- Another person Elinor must guide

**The Burden:**

Imagine being 19 years old and being the ONLY rational person in your family during crisis:
- Your father just died
- You're losing your home
- Your mother is as emotional as your younger sister
- Everyone depends on YOU for practical decisions
- But you're grieving too—you just can't show it

**Why This Matters:**

Austen isn't just showing different temperaments. She's exposing:
- Emotional labor falls on the "sensible" one
- Someone must suppress feelings for family survival
- Women's emotional control is WORK, not natural
- Elinor's strength comes at enormous personal cost

**The Injustice:**

- Mrs. Dashwood SHOULD be providing stability
- But she's temperamentally incapable
- So it falls to her teenage daughter
- Elinor must parent her own mother

**Historical Context:**

In crisis, families needed:
- Practical financial planning
- Social navigation
- Emotional management
- Decision-making

Usually the patriarch provided this. With him gone and Mrs. Dashwood romantic, it falls to Elinor—without any actual power or authority.

**Modern Parallel:**

The "parentified child"—when kids must be adults because parents can't. Elinor at 19 is managing a family crisis that should be her mother's responsibility.

**Austen's Complexity:**

She doesn't blame Mrs. Dashwood. But she shows the COST when someone like Elinor must hold everything together alone.

**The Central Question:** Is Elinor's strength admirable—or is it damage? Can you be TOO responsible?`
  },
  {
    id: 'fanny-takeover',
    emoji: '👑',
    title: 'Fanny\'s Swift Takeover',
    notice: 'Notice how quickly Fanny establishes dominance: "No sooner was her answer dispatched than Mrs. Dashwood indulged herself in the pleasure of announcing...that she was going to leave Norland immediately." What\'s happening here?',
    explore: [
      'How quickly does Fanny move to take over the house?',
      'What small details show Fanny asserting ownership? (servants, furniture, decisions)',
      'How does this make the Dashwood women feel in what was THEIR home?'
    ],
    amplify: `**You've Discovered: The Violence of Displacement**

You're watching psychological warfare disguised as hospitality. This is brilliant social critique.

**Fanny's Takeover Tactics:**

**Immediate Possession**
- Arrives and starts redecorating
- Changes household management
- Gives orders to servants
- Acts like owner immediately

**Subtle Humiliation**
- "Allows" them to stay
- Treats them as guests in their home
- Makes them feel like imposters
- Every interaction reinforces hierarchy

**Social Weaponization**
- Brings her mother (Mrs. Ferrars)
- Surrounds herself with HER people
- Dashwoods become outsiders
- Home is now enemy territory

**Legal Reality:**

Technically:
- Fanny HAS every right
- The house IS legally hers/John's
- Dashwood women ARE dependents
- She's not breaking any laws

**But Morally:**

This is their HOME:
- They've lived here their whole lives
- Their father just died here
- They're grieving
- They have nowhere to go

Fanny could allow time, dignity, transition. Instead she asserts dominance immediately.

**The Psychological Impact:**

Imagine:
- Your father dies
- You're grief-stricken
- A relative you barely know moves in
- Starts changing everything
- Treats you like an intruder
- In your own home

This is trauma on top of trauma.

**What Austen Shows Us:**

This isn't just about Fanny's rudeness. It's about:
- How property law enables cruelty
- How legal rights don't equal moral rights
- How the powerful humiliate the vulnerable
- How women are displaced with no recourse

**The Servants:**

Watch the servants:
- They now obey Fanny, not Mrs. Dashwood
- Power has shifted
- Everyone knows it
- The Dashwoods' authority evaporated instantly

**Why Mrs. Dashwood Must Leave:**

It's not just pride. It's psychological survival. You cannot grieve, cannot heal, cannot exist with dignity when someone is asserting dominance over you in your own home.

**Historical Pattern:**

This happened constantly:
- Women lose male protector
- New heir takes over
- Widows/daughters displaced
- No legal recourse
- "Generosity" of relatives determines fate

**Modern Parallels:**

Any time:
- People lose homes to "legal" processes
- Gentrification displaces communities
- Systems prioritize property over people
- Power asserts itself over vulnerability
- Legal doesn't equal moral

**Austen's Brilliance:** She shows us that violence doesn't require weapons. Sometimes it's just someone redecorating your childhood home while your father's body is barely cold.`
  },
  {
    id: 'contrasting-grief',
    emoji: '😢',
    title: 'Contrasting Grief: Elinor vs. Marianne',
    notice: 'The sisters grieve differently: "Marianne would have thought herself very inexcusable had she been able to sleep at all the first night. But Elinor...had an equal claim to respect." How do they each handle grief?',
    explore: [
      'How does Marianne express her grief? Is it authentic?',
      'How does Elinor express hers? Is she really feeling less?',
      'Which response is "better"? Or are both valid?'
    ],
    amplify: `**You've Discovered: The Politics of Emotion**

You're seeing Austen question something radical: who decides how people "should" grieve?

**Marianne's Grief:**

**Expression:**
- Open weeping
- Unable to sleep
- Dramatic displays
- Refuses to be comforted
- Embraces her pain
- Makes grief visible

**Her Philosophy:**
"To feel deeply is to be fully human"
"Controlling emotion is dishonest"
"Real feeling cannot be moderated"
"Grief should be expressed, not suppressed"

**Strengths:**
- Authentic self-expression
- Doesn't suppress real feelings
- Honest about emotional state
- Processing pain actively

**Dangers:**
- No emotional regulation
- Can become self-indulgent
- Makes others uncomfortable
- May not be sustainable

**Elinor's Grief:**

**Expression:**
- Private tears
- Maintains composure
- Functions through pain
- Comforts others while grieving
- Hides depth of feeling
- Makes grief invisible

**Her Philosophy:**
"Duty requires control"
"Others depend on my strength"
"Showing pain doesn't help"
"Function now, feel later"

**Strengths:**
- Can still function
- Provides stability for others
- Manages practical necessities
- Doesn't burden others

**Costs:**
- Suppresses real feelings
- Carries burden alone
- Nobody knows her pain
- May damage long-term health

**Austen's Question:**

Which is "right"? The novel asks:
- Is Marianne too much?
- Is Elinor too little?
- Why must there be only one "correct" way?
- What if both are valid responses?

**Gender Politics:**

Women were expected to:
- Feel deeply (feminine nature)
- But control expression (feminine propriety)
- Be emotional but not too emotional
- An impossible standard

**Marianne's Accusation:**

She essentially says: Elinor doesn't feel enough.
She mistakes control for absence of feeling.
She thinks restraint equals coldness.

**But Austen Shows Us:**

Elinor feels just as deeply. She just:
- Cannot afford to show it
- Has family responsibilities
- Carries her pain privately
- Suffers in silence

**The Tragedy:**

Both sisters are in pain:
- Marianne's pain is visible but dismissed as "excessive"
- Elinor's pain is invisible and therefore unacknowledged
- Neither gets what she needs

**Modern Relevance:**

Think about:
- "Why isn't she crying?" vs. "She's being too dramatic"
- Judgment of others' emotional expression
- Assuming visible emotion = real emotion
- Assuming control = no emotion
- Gendered expectations about feelings

**The Central Insight:**

People grieve differently. Neither way is "wrong." But:
- Society judges both
- Marianne is "too much"
- Elinor is "too cold"
- Women can't win

**What Austen Suggests:**

Maybe the real question isn't "Which is right?" but "Why must we judge how others grieve at all?"

**The Novel's Arc:**

Watch how this plays out. Both approaches have consequences. Austen isn't saying one is right—she's exploring what each costs.`
  },
  {
    id: 'elinor-responsibility',
    emoji: '💪',
    title: 'Elinor Takes Charge',
    notice: 'While Marianne grieves dramatically and Mrs. Dashwood acts impulsively, "Elinor, too, was deeply afflicted; but still she could struggle, she could exert herself." What does this reveal?',
    explore: [
      'What is Elinor doing while everyone else falls apart?',
      'Notice the word "struggle"—what is she struggling with?',
      'Is her strength admirable or is it unfair that she must provide it?'
    ],
    amplify: `**You've Discovered: The Cost of Being Strong**

You're seeing that strength isn't free—it comes at enormous personal cost.

**What Elinor Actually Does:**

**Practical Management:**
- Handles correspondence about new home
- Makes financial calculations
- Plans the move
- Manages household during transition
- Deals with servants
- Negotiates with relatives

**Emotional Management:**
- Comforts Marianne
- Moderates mother's impulses
- Stays calm in crisis
- Provides stability for everyone
- Cannot show her own pain

**Social Management:**
- Maintains propriety
- Handles Fanny diplomatically
- Protects family dignity
- Navigates awkward situations

**The Word "Struggle":**

Austen uses this deliberately. Elinor doesn't find it easy:
- She IS grieving
- She IS overwhelmed
- She IS suffering
- She just can't show it

"Could struggle" = actively fighting her own feelings
"Could exert herself" = forcing herself to function

This is WORK. Constant, exhausting, painful work.

**What Everyone Assumes:**

- "Elinor is fine"
- "Elinor is naturally calm"
- "Elinor doesn't need support"
- "Elinor is just less emotional"

**The Reality:**

- Elinor is NOT fine
- Control is effortful, not natural
- She desperately needs support but can't ask
- She feels just as deeply—she just can't show it

**The Unfairness:**

Someone has to hold things together. But why Elinor?
- She's 19
- Her father just died
- She's losing her home
- She has no actual authority
- Nobody asked if she could handle this

**The Gender Trap:**

If Elinor broke down:
- Who would manage?
- Mother can't
- Marianne won't
- Margaret is too young

So Elinor has no choice. She must be strong or everything collapses.

**The Isolation:**

Because Elinor doesn't show her pain:
- Nobody comforts her
- Nobody asks how she's doing
- Nobody sees her suffering
- Everyone takes her strength for granted

The strong person in a crisis becomes invisible.

**What This Costs:**

Watch the novel. Elinor will:
- Suppress her own romantic feelings
- Carry secrets that torture her
- Provide constant emotional support
- Never receive equivalent support
- Sacrifice repeatedly for others

**Modern Parallels:**

The "strong friend":
- Always has it together
- Everyone leans on them
- Nobody asks how THEY are
- Burns out but can't show it
- Expected to be infinitely resilient

**Austen's Question:**

Is strength always good? Or can being strong damage you?

Should Elinor have to be this strong? Is it:
- Admirable character?
- Unfair burden?
- Both?

**The Complexity:**

Elinor's strength IS admirable. She's capable, intelligent, selfless.

But it's ALSO unfair. Nobody should have to carry this alone at 19 during crisis.

**What You're Watching:**

The origin story of someone who will spend the entire novel:
- Managing everyone else's emotions
- Hiding her own feelings
- Sacrificing her own needs
- Never being seen fully

**The Novel Will Ask:**

What happens when the strong person finally breaks? (Because everyone has a limit.)

**For Educators:**

Students often admire Elinor's strength. Push them to see the cost. Ask:
- What is this strength costing her?
- Is it fair that she must provide it?
- What happens to people who can never show weakness?
- Who takes care of the caretakers?

**The Tragedy:**

Elinor is strong because she has to be. But having to be strong doesn't mean it doesn't hurt.`
  }
]

export default function Chapter3Page() {
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
            Chapter 3 of 3
          </span>

          <Link
            href="/books/sense-and-sensibility"
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
            Back to Book
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
            Chapter 3
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
            Sense and Sensibility — Chapter 3
          </h1>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            The Dashwood women face displacement from their home as Fanny takes over. The sisters' contrasting responses to crisis reveal deeper patterns that will shape the entire novel.
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
              <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>14 min read</span>
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
              Mrs. John Dashwood and her mother Mrs. Ferrars arrive at Norland and immediately begin asserting ownership. They redecorate, give orders to servants, and treat the Dashwood women as unwelcome guests in what was their home. The psychological violence of this displacement—legal but morally cruel—makes staying impossible.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              The chapter reveals crucial character dynamics. Mrs. Dashwood shares Marianne's romantic, impulsive temperament rather than Elinor's prudence. This means Elinor, at only 19, must provide all practical wisdom and emotional stability for her entire family during crisis. She grieves privately while managing everyone else's needs.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Marianne and Elinor respond to loss in starkly different ways. Marianne grieves openly and dramatically, refusing to moderate her feelings. She believes authentic emotion cannot and should not be controlled. Elinor grieves privately while maintaining composure—not because she feels less, but because someone must function and everyone depends on her strength.
            </p>

            <p style={{ margin: 0 }}>
              A distant cousin, Sir John Middleton, offers them a cottage on his estate in Devonshire. Mrs. Dashwood impetuously accepts without investigating the property. The chapter ends with preparations to leave Norland forever—Marianne mourning their loss dramatically, Elinor managing practical details while hiding her own heartbreak.
            </p>
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
            This chapter deepens the contrast between sense and sensibility while exploring the cost of emotional strength.
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                      <span style={{ fontSize: '2rem', flexShrink: 0 }}>{moment.emoji}</span>
                      <div style={{ flex: 1 }}>
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
                    {isExpanded ? <ChevronUp size={24} style={{ flexShrink: 0 }} /> : <ChevronDown size={24} style={{ flexShrink: 0 }} />}
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
                Elinor Dashwood - The Cost of Strength
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Development:</strong> Elinor emerges as the family's anchor—providing practical wisdom, emotional stability, and constant support while grieving privately. She "struggles" and "exerts herself," revealing that strength isn't natural but effortful. She becomes the adult her mother should be.
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                This chapter establishes a pattern that will define the novel: Elinor carries impossible burdens with grace while her own pain remains invisible. Austen asks us to see the cost of this strength—the isolation, suppression, and unfairness of being the person everyone depends on.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                Marianne Dashwood - Authentic Feeling
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Development:</strong> Marianne grieves with total authenticity, refusing to moderate her feelings. She weeps openly, cannot sleep, and embraces her pain as proof of genuine feeling. She judges those who show less emotion as feeling less deeply.
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Marianne's emotional honesty is both admirable and problematic. She won't suppress feelings to make others comfortable, which is brave. But she also mistakes control for coldness, expression for depth. The novel will test whether her philosophy is sustainable.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--primary)',
                marginBottom: '0.75rem'
              }}>
                Mrs. Dashwood - Impulsive Romanticism
              </h3>
              <div style={{
                padding: '1rem',
                background: 'var(--card-bg)',
                borderLeft: '3px solid var(--primary)',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  <p style={{ margin: 0 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Development:</strong> The matriarch shares Marianne's romantic temperament rather than Elinor's prudence. She makes impulsive decisions, acts on emotion, and needs guidance rather than providing it. Her good sense is noted but rarely exercised.
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Mrs. Dashwood's temperamental similarities to Marianne place an unfair burden on Elinor. The mother should provide stability during crisis, but instead she amplifies it. This family structure—where the teenage daughter must parent her mother—creates Elinor's impossible position.
              </p>
            </div>
          </div>
        </section>

        {/* Thematic Threads */}
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
              background: 'white',
              border: '2px solid var(--border-color)',
              borderTop: '4px solid var(--primary)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>💪</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                The Cost of Strength
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Elinor's strength comes at enormous personal cost. Watch throughout the novel: what happens to someone who must always be strong? Who takes care of the caretakers? What does suppression cost long-term?
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'white',
              border: '2px solid var(--border-color)',
              borderTop: '4px solid var(--primary)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>😢</div>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}>
                Grief & Expression
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                How should people grieve? Is Marianne's open emotion healthier than Elinor's private pain? Or does each approach have its own costs? Austen refuses simple answers—watch how both sisters' methods play out.
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'white',
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
                Despite opposite temperaments, the sisters face displacement together. Their bond will be tested by romantic rivals, misunderstandings, and social pressures. Can sisterhood survive when sisters are fundamentally different?
              </p>
            </div>
          </div>
        </section>

        {/* Discussion Questions */}
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
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>1. The Burden of Strength:</strong> Is it fair that Elinor must be strong for everyone? What happens to people who can never show weakness? Who takes care of the caretakers?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>2. Contrasting Grief:</strong> Compare Marianne's and Elinor's responses to loss. Which is "healthier"? Or are both valid? How does society judge different styles of grieving?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>3. Displacement:</strong> Analyze Fanny's takeover of Norland. Is she legally right but morally wrong? What's the difference between legal rights and ethical behavior?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>4. Mrs. Dashwood's Role:</strong> Should the mother provide more stability? Is it fair to judge her romantic temperament when that's who she naturally is?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>5. Sense vs. Sensibility:</strong> These opening chapters establish the contrast. Which approach seems better so far? Or does Austen suggest both have strengths and costs?
            </div>

            <div style={{
              padding: '1.25rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              borderLeft: '3px solid var(--primary)'
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>6. Looking Forward:</strong> What challenges will the sisters face? How might their different temperaments help or hurt them as they search for security and love?
            </div>
          </div>
        </section>

        {/* Continue Reading */}
        <section style={{
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, var(--primary) 0%, #164d2a 100%)',
          color: 'white',
          borderRadius: '0.5rem',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(255,255,255,0.2)',
            fontSize: '0.875rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={16} />
            Continue the Journey
          </div>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '600',
            marginBottom: '1rem'
          }}>
            Keep Reading Sense and Sensibility
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
            opacity: 0.95,
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            You've completed the opening chapters! Continue reading to discover how Elinor and Marianne navigate love, loss, and betrayal in a world that offers them little power but demands everything.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://www.gutenberg.org/ebooks/161"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                borderRadius: '0.25rem'
              }}
            >
              📖 Read Free on Project Gutenberg
            </a>
            <a
              href="https://www.amazon.com/dp/0141439661"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                borderRadius: '0.25rem',
                border: '2px solid white'
              }}
            >
              📚 Get Physical Copy
            </a>
          </div>
        </section>

        {/* Explore More */}
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
            Explore More Amplified Classics
          </h3>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            Discover more classic literature with Intelligence Amplified analysis.
          </p>
          <Link
            href="/"
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
            📚 Back to Library
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
