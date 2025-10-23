"use client"

import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Users, MessageSquare, Brain } from 'lucide-react'
import { Badge } from '@/app/components/ui/Badge'
import { ReadOriginalText } from '@/app/components/ReadOriginalText'

export default function Chapter2Page() {
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
            Chapter 2 of 61
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        
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
              Chapter 2
            </div>
            <Badge style={{ background: 'rgba(30, 86, 49, 0.1)', color: 'var(--primary)', fontSize: '0.875rem' }}>
              Coming Soon
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
            Mr. Bennet's Surprise
          </h1>

          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            Mr. Bennet reveals he has already visited Mr. Bingley, delighting Mrs. Bennet and proving that beneath his sardonic exterior, he does care about his daughters' prospects.
          </p>

          <div style={{
            padding: '2rem',
            background: 'rgba(30, 86, 49, 0.05)',
            border: '2px solid rgba(30, 86, 49, 0.2)',
            borderRadius: '0.5rem',
            marginTop: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: 'var(--primary)',
              marginBottom: '1rem'
            }}>
              📝 Chapter Content Coming Soon
            </h3>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              margin: 0
            }}>
              This chapter is currently being developed with full Intelligence Amplified analysis, character insights, and interactive study features. Check back soon!
            </p>
          </div>
        </div>

        {/* Quick Summary */}
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
              Quick Summary
            </h2>
          </div>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            margin: 0
          }}>
            After teasing his wife extensively in Chapter 1, Mr. Bennet reveals that he has already visited Mr. Bingley at Netherfield. Mrs. Bennet is overjoyed, and the family can now formally be introduced to the wealthy newcomer. This chapter shows that despite his mockery, Mr. Bennet does fulfill his familial duties.
          </p>
        </section>

        {/* Read Original Text */}
        <ReadOriginalText />

        {/* Chapter Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <Link
            href="/books/pride-and-prejudice/chapter-1"
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
            <ArrowLeft size={16} />
            Previous Chapter
          </Link>
          
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
            href="/books/pride-and-prejudice/chapter-3"
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

