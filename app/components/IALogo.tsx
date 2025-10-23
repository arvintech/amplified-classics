import Image from 'next/image'

interface IALogoProps {
  size?: 'small' | 'medium' | 'large' | 'full'
  className?: string
  style?: React.CSSProperties
}

export default function IALogo({ size = 'medium', className = '', style }: IALogoProps) {
  const dimensions = {
    small: { width: 80, height: 80 },
    medium: { width: 150, height: 150 },
    large: { width: 250, height: 250 },
    full: { width: 500, height: 500 }
  }

  const { width, height } = dimensions[size]

  return (
    <div style={{ ...style }} className={className}>
      <Image
        src="/ia-logo.svg"
        alt="Intelligence Amplifier - Powered by IA"
        width={width}
        height={height}
        priority
        style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
      />
    </div>
  )
}

export function IABadge({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.25rem 0.75rem',
      background: 'rgba(30, 86, 49, 0.1)',
      border: '1px solid rgba(30, 86, 49, 0.3)',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#1e5631',
      ...style
    }} className={className}>
      <Image
        src="/ia-logo.svg"
        alt="IA"
        width={16}
        height={16}
        style={{ width: '16px', height: '16px' }}
      />
      <span>IA Edition</span>
    </div>
  )
}

