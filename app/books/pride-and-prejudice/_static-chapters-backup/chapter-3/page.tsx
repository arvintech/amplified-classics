"use client"

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Badge } from '@/app/components/ui/Badge'

export default function Chapter3Page() {
  return (
    <div style={{ background: 'var(--background)', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Badge style={{ marginBottom: '1rem' }}>Chapter 3 - Coming Soon</Badge>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Meryton Assembly Ball</h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The fateful first meeting: Mr. Bingley is everything charming, while Mr. Darcy insults Elizabeth by saying she's "not handsome enough to tempt" him. First impressions are formed.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/books/pride-and-prejudice/chapter-2" style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', textDecoration: 'none', borderRadius: '0.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={16} /> Previous
          </Link>
          <Link href="/books/pride-and-prejudice" style={{ padding: '0.75rem 1.5rem', border: '2px solid var(--border-color)', textDecoration: 'none', borderRadius: '0.25rem' }}>
            All Chapters
          </Link>
          <Link href="/books/pride-and-prejudice/chapter-4" style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', textDecoration: 'none', borderRadius: '0.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Next <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

