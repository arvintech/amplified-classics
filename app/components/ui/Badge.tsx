import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className = '', style: customStyle, ...props }, ref) => {
    const style = {
      display: 'inline-block',
      padding: '0.25rem 0.75rem',
      fontSize: '0.75rem',
      fontWeight: '700',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em',
      background: 'var(--primary)',
      color: 'white',
      ...customStyle
    }

    return (
      <span ref={ref} style={style} className={className} {...props}>
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

