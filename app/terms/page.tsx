import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Amplified Classics',
  description: 'Terms of service for Amplified Classics',
}

export default function TermsPage() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh' }}>
      <div style={{
        padding: '1.5rem 2rem',
        borderBottom: '1px solid var(--border-color)',
        background: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link
            href="/"
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
            Back to Home
          </Link>
        </div>
      </div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: '300',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-heading)'
        }}>
          Terms of Service
        </h1>

        <p style={{
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          marginBottom: '3rem'
        }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div style={{
          fontSize: '1.125rem',
          lineHeight: 1.8,
          color: 'var(--text-secondary)'
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Welcome to Amplified Classics
          </h2>
          <p>
            These terms govern your use of Amplified Classics and our educational resources.
          </p>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Public Domain Content
          </h2>
          <p>
            All literary texts (such as Jane Eyre) are in the public domain. Our study guides, analyses, and educational materials are © {new Date().getFullYear()} Amplified Classics.
          </p>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Educational Use
          </h2>
          <p>
            Educators are free to use our resources in their classrooms. Commercial redistribution of our study materials requires written permission.
          </p>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Acceptable Use
          </h2>
          <p>
            You agree to use Amplified Classics for lawful educational purposes. You will not:
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Misrepresent our materials as your own</li>
            <li>Use automated systems to scrape content</li>
            <li>Distribute malware or harmful content</li>
          </ul>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Disclaimer
          </h2>
          <p>
            Our educational materials are provided "as is" for educational purposes. While we strive for accuracy, we make no warranties about completeness or fitness for specific purposes.
          </p>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Contact
          </h2>
          <p>
            Questions about these terms? Contact us at{' '}
            <a href="mailto:hello@amplifiedclassics.org" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              hello@amplifiedclassics.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

