import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', style: customStyle, ...props }, ref) => {
    const style = {
      width: '100%',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      border: '2px solid var(--border-color)',
      background: 'white',
      color: 'var(--text-primary)',
      transition: 'all 0.2s ease',
      outline: 'none',
      ...customStyle
    }

    const focusStyle = {
      borderColor: 'var(--primary)'
    }

    return (
      <input
        ref={ref}
        style={style}
        className={className}
        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
        onBlur={(e) => Object.assign(e.target.style, { borderColor: 'var(--border-color)' })}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

