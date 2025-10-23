import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  asChild?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', asChild, children, className = '', ...props }, ref) => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2.5rem',
      fontSize: '1rem',
      fontWeight: '700',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      border: '2px solid var(--primary)',
      textDecoration: 'none'
    }

    const variantStyles = {
      primary: {
        background: 'var(--primary)',
        color: 'white'
      },
      outline: {
        background: 'white',
        color: 'var(--primary)'
      }
    }

    const style = { ...baseStyles, ...variantStyles[variant] }

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        style: { ...style, ...(children.props.style || {}) },
        className: `${className} ${children.props.className || ''}`.trim()
      })
    }

    return (
      <button ref={ref} style={style} className={className} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

