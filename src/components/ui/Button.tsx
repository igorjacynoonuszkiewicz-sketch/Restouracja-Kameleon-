import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
  className?: string
}

export default function Button({ children, href, onClick, variant = 'primary', type = 'button', className = '' }: ButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 overflow-hidden'

  const styles =
    variant === 'primary'
      ? 'text-ink bg-gradient-to-r from-gold-light via-gold to-copper shadow-[0_8px_30px_-8px_rgba(201,162,90,0.6)] hover:shadow-[0_8px_40px_-4px_rgba(201,162,90,0.85)] hover:-translate-y-0.5'
      : 'text-cream border border-gold/50 hover:border-gold hover:bg-gold/10 hover:-translate-y-0.5'

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  )
}
