export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'white',
      padding: '3rem 2rem',
      borderTop: '3px solid var(--primary)',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: '300',
          marginBottom: '1rem',
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
          Experience classic literature with modern study guides, Intelligence Amplified analysis, and interactive learning tools
        </p>
        <div style={{
          fontSize: '0.875rem',
          opacity: 0.7
        }}>
          Free forever • No signup required • Works on all devices
        </div>
      </div>
    </footer>
  )
}
