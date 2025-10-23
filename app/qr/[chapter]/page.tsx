import Link from 'next/link'
import { BookOpen, Printer, Sparkles, ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from '@/app/components/ui/Button'

export default function QRLandingPage({ params }: { params: { chapter: string } }) {
  const chapterNum = params.chapter
  
  return (
    <div style={{ 
      background: 'var(--background)', 
      minHeight: '100vh',
      padding: '2rem'
    }}>
      {/* Welcome Banner */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 3rem',
        textAlign: 'center',
        padding: '3rem 2rem',
        background: 'white',
        border: '3px solid var(--primary)',
        borderRadius: '0.5rem'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
          fontFamily: 'var(--font-heading)'
        }}>
          Welcome from the Book!
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '0'
        }}>
          You've scanned the QR code from <strong>Chapter {chapterNum}</strong> of the <em>Amplified Classics: Jane Eyre Teacher's Guide</em>
        </p>
      </div>

      {/* What You Get */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 3rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          🚀 Interactive Features Available
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {/* Full Chapter */}
          <div style={{
            padding: '2rem',
            background: 'white',
            border: '2px solid var(--border-color)',
            borderRadius: '0.5rem'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--primary)',
              marginBottom: '0.75rem'
            }}>
              Full Interactive Chapter
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Click "Explore This Moment" to reveal discussion questions. Click "Amplify This Moment" for expert literary analysis.
            </p>
            <Link
              href={`/books/jane-eyre/chapter-${chapterNum}`}
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
                fontSize: '0.9375rem'
              }}
            >
              Open Chapter {chapterNum}
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Printable Worksheet */}
          <div style={{
            padding: '2rem',
            background: 'white',
            border: '2px solid var(--border-color)',
            borderRadius: '0.5rem'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📄</div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--primary)',
              marginBottom: '0.75rem'
            }}>
              Classroom Worksheet (PDF)
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Print-ready PDF with Notice prompts, Explore questions, and space for student responses. Perfect for in-class work.
            </p>
            <Link
              href={`/qr/${chapterNum}/worksheet`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '0.25rem',
                fontSize: '0.9375rem',
                border: '2px solid var(--primary)'
              }}
            >
              <Printer size={16} />
              Get Worksheet
            </Link>
          </div>

          {/* Discussion Guide */}
          <div style={{
            padding: '2rem',
            background: 'white',
            border: '2px solid var(--border-color)',
            borderRadius: '0.5rem'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💬</div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: '600',
              color: 'var(--primary)',
              marginBottom: '0.75rem'
            }}>
              Teacher Discussion Guide
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              Facilitation tips, expected student responses, and how to guide discovery without giving answers.
            </p>
            <Link
              href={`/qr/${chapterNum}/guide`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: 'var(--primary)',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '0.25rem',
                fontSize: '0.9375rem',
                border: '2px solid var(--primary)'
              }}
            >
              Open Guide
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* How to Use in Class */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto 3rem',
        padding: '2rem',
        background: 'rgba(30, 86, 49, 0.05)',
        border: '2px solid var(--primary)',
        borderLeft: '5px solid var(--primary)',
        borderRadius: '0.5rem'
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'var(--primary)',
          marginBottom: '1rem'
        }}>
          🎓 Suggested Classroom Flow (30-40 minutes)
        </h2>
        <ol style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          paddingLeft: '1.5rem',
          margin: 0
        }}>
          <li><strong>Read Together (10 min):</strong> Students read the chapter (it's short—about 10 minutes)</li>
          <li><strong>Notice Phase (5 min):</strong> "What did YOU notice?" Collect observations on board</li>
          <li><strong>Explore Phase (15 min):</strong> Use worksheet or web platform to guide collaborative questioning</li>
          <li><strong>Amplify Phase (10 min):</strong> Reveal expert insights when students are ready</li>
          <li><strong>Reflection (optional 5-10 min homework):</strong> "What did you appreciate about Brontë's craft?"</li>
        </ol>
      </div>

      {/* Book Owner Benefits */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        background: 'white',
        border: '2px solid var(--border-color)',
        borderRadius: '0.5rem',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '0.9375rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '1rem'
        }}>
          <strong>📖 Book Owner Bonus:</strong> All resources on this platform are free for owners of the <em>Amplified Classics: Jane Eyre Teacher's Guide</em>
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a
            href="https://www.amazon.com/..."
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
              fontSize: '0.9375rem'
            }}
          >
            Buy on Amazon
            <ExternalLink size={16} />
          </a>
          <a
            href="https://www.powells.com/..."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              background: '#8B4513',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '0.25rem',
              fontSize: '0.9375rem'
            }}
          >
            Buy at Powell's
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

