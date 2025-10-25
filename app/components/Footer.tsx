import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'white',
      padding: '4rem 2rem 2rem',
      borderTop: '3px solid var(--primary)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Top Section - Brand Identity */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '300',
            marginBottom: '0.75rem',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.01em'
          }}>
            Amplified Classics
          </h3>
          <p style={{
            fontSize: '1rem',
            marginBottom: '1.5rem',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '0 auto 1.5rem'
          }}>
            Experience classic literature with Intelligence Amplified analysis
          </p>
          <div style={{
            fontSize: '0.875rem',
            opacity: 0.8
          }}>
            Free forever • No signup required • Works on all devices
          </div>
        </div>

        {/* Middle Section - Project Attribution */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <p style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            opacity: 0.95
          }}>
            A project of <strong style={{ fontWeight: '600' }}>Intelligence Amplifier™</strong>
          </p>
          <a 
            href="https://intelligenceamplifier.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '0.9375rem',
              opacity: 0.9,
              borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
              paddingBottom: '2px',
              transition: 'opacity 0.2s ease'
            }}
          >
            intelligenceamplifier.ai
          </a>
        </div>

        {/* Bottom Section - Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          fontSize: '0.875rem'
        }}>
          <Link 
            href="/about" 
            style={{
              color: 'white',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s ease'
            }}
          >
            About
          </Link>
          <Link 
            href="/ia" 
            style={{
              color: 'white',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s ease'
            }}
          >
            Intelligence Amplified
          </Link>
          <Link 
            href="/privacy" 
            style={{
              color: 'white',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s ease'
            }}
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            style={{
              color: 'white',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s ease'
            }}
          >
            Terms of Service
          </Link>
        </div>

        {/* Legal - Copyright & Trademark */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          opacity: 0.75,
          lineHeight: 1.7,
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          marginBottom: '1.5rem'
        }}>
          <p style={{ marginBottom: '0.75rem' }}>
            © 2025 Arvin Lioanag. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.8125rem',
            opacity: 0.9
          }}>
            <svg 
              style={{ width: '16px', height: '16px', flexShrink: 0 }} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M9 12L11 14L15 10" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <p style={{ margin: 0 }}>
              <strong style={{ fontWeight: '600' }}>Intelligence Amplifier™</strong> is a trademark of Arvin Lioanag, pending registration with the USPTO.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          fontSize: '0.6875rem',
          opacity: 0.6,
          lineHeight: 1.6,
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '0.75rem' }}>
            The information provided on this website is for general informational and educational purposes only and does not constitute professional, legal, financial, or technical advice. While we strive to ensure the accuracy and relevance of the content, we make no warranties or representations regarding completeness, reliability, or suitability. Any reliance you place on such information is strictly at your own risk.
          </p>
          <p style={{ marginBottom: '0.75rem', opacity: 0.8 }}>
            We are not liable for any losses or damages arising from the use of this site or its content.
          </p>
          <p style={{ margin: 0, opacity: 0.9, fontWeight: '500', paddingTop: '0.5rem' }}>
            By using this site, you agree to these terms.
          </p>
        </div>
      </div>
    </footer>
  )
}
