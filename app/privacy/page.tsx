import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Amplified Classics',
  description: 'Privacy policy for Amplified Classics',
}

export default function PrivacyPage() {
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
          Privacy Policy
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
            Our Commitment
          </h2>
          <p>
            Amplified Classics is committed to protecting your privacy. We believe in transparency and building trust through clear communication about how we handle your data.
          </p>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Information We Collect
          </h2>
          <p>
            When you subscribe to our educator newsletter or apply to our pilot program, we collect:
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Email address</li>
            <li>Name (optional)</li>
            <li>School or organization name (optional)</li>
          </ul>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            How We Use Your Information
          </h2>
          <p>
            We use your information solely to:
          </p>
          <ul style={{ paddingLeft: '2rem', marginBottom: '1.5rem' }}>
            <li>Send you the educator sampler and pilot information</li>
            <li>Communicate updates about Amplified Classics</li>
            <li>Improve our educational resources</li>
          </ul>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Student Privacy
          </h2>
          <p>
            No student accounts are required for core features. We do not collect personal information from students using our reading platform.
          </p>

          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            marginTop: '2rem',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Contact Us
          </h2>
          <p>
            For questions about this privacy policy, please contact us at{' '}
            <a href="mailto:hello@amplifiedclassics.org" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              hello@amplifiedclassics.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

