import React from 'react'

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className = '', style: customStyle, ...props }, ref) => {
    const style = {
      height: '1px',
      width: '100%',
      background: 'var(--border-color)',
      margin: '1rem 0',
      ...customStyle
    }

    return (
      <div ref={ref} style={style} className={className} {...props} />
    )
  }
)

Separator.displayName = 'Separator'

