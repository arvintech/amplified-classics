import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', style: customStyle, ...props }, ref) => {
    const style = {
      background: 'white',
      border: '1px solid var(--border-color)',
      padding: '0',
      transition: 'all 0.2s ease',
      ...customStyle
    }

    return (
      <div ref={ref} style={style} className={className} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', style: customStyle, ...props }, ref) => {
    const style = {
      padding: '1.5rem',
      borderBottom: '1px solid var(--border-color)',
      ...customStyle
    }

    return (
      <div ref={ref} style={style} className={className} {...props}>
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className = '', style: customStyle, ...props }, ref) => {
    const style = {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: 'var(--text-primary)',
      margin: 0,
      ...customStyle
    }

    return (
      <h3 ref={ref} style={style} className={className} {...props}>
        {children}
      </h3>
    )
  }
)

CardTitle.displayName = 'CardTitle'

export const CardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', style: customStyle, ...props }, ref) => {
    const style = {
      padding: '1.5rem',
      ...customStyle
    }

    return (
      <div ref={ref} style={style} className={className} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

