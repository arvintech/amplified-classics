import Link from 'next/link'
import { BookOpen } from 'lucide-react'

export default function Header() {
  return (
    <header style={{
      background: 'var(--background)',
      borderBottom: '3px solid var(--primary)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: '300',
          color: 'var(--primary)',
          fontFamily: 'var(--font-heading)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          letterSpacing: '-0.01em'
        }}>
          <BookOpen size={24} strokeWidth={1.5} />
          Amplified Classics
        </Link>
        
        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9375rem',
            transition: 'opacity 0.2s ease'
          }}>
            Library
          </Link>
          
          <Link href="/ia" style={{
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9375rem',
            transition: 'opacity 0.2s ease'
          }}>
            IA Edition
          </Link>
          
          <Link href="/about" style={{
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.9375rem',
            transition: 'opacity 0.2s ease'
          }}>
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}