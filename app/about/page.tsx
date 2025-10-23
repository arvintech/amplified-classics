import Link from 'next/link'
import type { Metadata } from 'next'
import { BookOpen, Brain, Users, Target, Heart, Sparkles, ArrowRight, GraduationCap, Zap, Globe } from 'lucide-react'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'About - Amplified Classics',
  description: 'Learn about Amplified Classics - bringing classic literature to life with modern study tools and Intelligence Amplified insights',
}

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--background)' }}>
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 1.5rem 3rem',
        background: 'var(--background)',
        textAlign: 'center',
        borderBottom: '3px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '800px' }}>
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
            About Us
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '100',
            marginBottom: '1.5rem',
            color: 'var(--primary)',
            letterSpacing: '-0.08em',
            lineHeight: 0.9,
            fontFamily: 'var(--font-heading)',
            fontStretch: 'ultra-condensed',
            transform: 'scaleX(0.8)'
          }}>
            Classic Literature, Amplified
          </h1>

          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            We believe that timeless stories deserve modern tools. Amplified Classics transforms how students, teachers, and literature enthusiasts experience the world's greatest novels.
          </p>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--primary)',
        color: 'white',
        borderTop: '3px solid var(--primary)',
        borderBottom: '3px solid var(--primary)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            fontWeight: '100',
            marginBottom: '1.5rem',
            letterSpacing: '-0.08em',
            lineHeight: 1,
            fontFamily: 'var(--font-heading)',
            fontStretch: 'ultra-condensed',
            transform: 'scaleX(0.8)'
          }}>
            Amplify Your Mind
          </h2>
          
          <p style={{
            fontSize: '1.375rem',
            lineHeight: 1.7,
            marginBottom: '2rem',
            opacity: 0.95,
            fontWeight: '300'
          }}>
            In a world of instant answers and AI-generated content, the ability to think deeply, question assumptions, and understand complex human experiences is more valuable than ever.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            textAlign: 'left'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.75rem',
                opacity: 0.9
              }}>
                🧠
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)'
              }}>
                Think Critically
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                opacity: 0.85,
                margin: 0
              }}>
                Develop analytical skills that help you evaluate information, question narratives, and form independent judgments
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.75rem',
                opacity: 0.9
              }}>
                ❤️
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)'
              }}>
                Feel Deeply
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                opacity: 0.85,
                margin: 0
              }}>
                Build empathy and emotional intelligence by experiencing life through diverse perspectives across time and culture
              </p>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '0.75rem',
                opacity: 0.9
              }}>
                ✨
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '400',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-heading)'
              }}>
                Grow Continuously
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                opacity: 0.85,
                margin: 0
              }}>
                Engage with ideas that have challenged and inspired readers for generations, expanding your worldview with every chapter
              </p>
            </div>
          </div>

          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '0'
          }}>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              margin: 0,
              fontStyle: 'italic',
              opacity: 0.9
            }}>
              "Classic literature doesn't just teach you about the past—it equips you for the future. In an age where AI can generate answers, the real power lies in asking the right questions, understanding nuance, and connecting deeply with human experience."
            </p>
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--background)',
        borderTop: '1px solid var(--border-color)'
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
              background: 'white',
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
                fontSize: '1.5rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.2
              }}>
                Beyond Comprehension: The Art of Appreciation
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '1rem'
              }}>
                You're efficient. You consume information quickly. But classic literature isn't just about <em>what</em> happens—it's about <em>how</em> it's crafted.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Our tools help you pause at the moments that matter: the turn of phrase that captures a lifetime of longing, the dialogue that reveals character through silence, the symbol that threads through chapters. Speed through the plot if you must, but <strong>appreciate the artistry</strong>—the literary techniques, the social commentary, the language that has endured for centuries not because of the story, but because of how it's told.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'white',
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
                fontSize: '1.5rem',
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
                marginBottom: '1rem'
              }}>
                You savor. You linger. You let yourself live in the world the author creates. This isn't a weakness—it's <em>exactly</em> how great literature is meant to be experienced.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Our resources enhance your journey without rushing it. Pause to explore a character's motivation. Dive deep into historical context when curiosity strikes. Let our AI companion answer questions as they arise. <strong>Reading slowly means reading deeply</strong>—experiencing the texture of language, the weight of moral dilemmas, the gradual unfolding of character. Take your time. The joy is in the journey, not the destination.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'white',
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
                fontSize: '1.5rem',
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
                marginBottom: '1rem'
              }}>
                You know the transformation that happens when students <em>get it</em>—when they stop seeing literature as an obstacle and start seeing it as a mirror, a window, a conversation across time.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Our method creates <strong>effortless flow</strong> from resistance to engagement. Pre-built discussion questions spark debate. Modern adaptations make historical context click. Intelligence Amplified analysis meets students where they are, answering their questions in real-time. The text becomes accessible without being diminished. Your students don't just complete the assignment—they discover why these works matter. <strong>They convince themselves.</strong>
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'white',
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
                fontSize: '1.5rem',
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
                marginBottom: '1rem'
              }}>
                You've read these novels before. Perhaps many times. You know the plots, the characters, the famous passages by heart.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Yet <strong>every reading reveals something new</strong>. Our Intelligence Amplified analysis offers perspectives you might not have considered. Modern adaptations illuminate connections to contemporary culture. Discussion prompts invite you to question your own interpretations. Even beloved classics can surprise you when viewed through new lenses. The conversation continues. The discovery never ends. The text, unchanged for centuries, somehow speaks differently each time—especially when amplified by tools that respect both the work and your expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)'
          }}>
            Our Mission
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Globe size={32} strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                Universal Access
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Free forever, no subscriptions, no paywalls. We believe great literature should be accessible to everyone, everywhere.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                Modern Learning
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Intelligence Amplified insights meet traditional scholarship for an innovative learning experience.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Heart size={32} strokeWidth={1.5} />
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: '400',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)'
              }}>
                Passion for Literature
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                Built by literature enthusiasts to foster a lifelong love of reading and critical thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'white',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: '3rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)'
          }}>
            Why Classic Literature Matters in the Age of AI
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}>
            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
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
                Human Experience Cannot Be Automated
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                While AI can process information and generate text, it cannot replicate the depth of human emotion, moral complexity, and lived experience that classic literature captures. Jane Austen's sharp observations about society, Charlotte Brontë's exploration of independence and identity—these works offer insights into what it means to be human that no algorithm can replace.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
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
                Critical Thinking in an AI-Generated World
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                As AI-generated content floods our digital landscape, the ability to analyze, interpret, and think critically becomes more vital than ever. Classic literature trains us to question, evaluate evidence, understand context, and form independent judgments—skills essential for navigating a world where distinguishing human insight from machine output is increasingly important.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
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
                Timeless Themes, Modern Relevance
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                The struggles with social class, gender inequality, moral choices, and personal identity that dominate classic novels remain strikingly relevant today. These works provide historical perspective on contemporary issues, showing us that human challenges are often timeless—and that wisdom from the past can illuminate the present, even as technology transforms our lives.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
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
                AI as a Bridge, Not a Replacement
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                We use AI not to replace the reading experience, but to enhance it. Our AI tools help make classic literature more accessible—explaining historical context, clarifying difficult passages, and sparking discussions. Technology serves the timeless wisdom of great literature, helping new generations discover works that have shaped human thought for centuries.
              </p>
            </div>

            <div style={{
              padding: '2rem',
              background: 'var(--card-bg)',
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
                Building Emotional Intelligence
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                margin: 0
              }}>
                In an age of rapid technological change, emotional intelligence and empathy become increasingly valuable. Classic literature invites us into the minds and hearts of characters from different times and places, building our capacity for understanding, compassion, and nuanced thinking—qualities that define our humanity and cannot be replicated by machines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{
        padding: '5rem 1.5rem',
        background: 'var(--card-bg)',
        borderTop: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontWeight: '300',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-primary)'
          }}>
            What We Offer
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}>
            Complete digital texts with Intelligence Amplified study guides, chapter summaries, discussion questions, modern adaptations, and classroom resources—all completely free.
          </p>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'var(--primary)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.125rem',
              fontWeight: '700',
              transition: 'all 0.2s ease',
              border: '2px solid var(--primary)'
            }}
          >
            Explore Our Library <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
