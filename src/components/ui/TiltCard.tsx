import { useRef } from 'react'
import type { ReactNode } from 'react'
import { gsap } from '../../lib/gsap'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  glow?: boolean
  onClick?: () => void
}

export default function TiltCard({ children, className = '', maxTilt = 10, glow = true, onClick }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotX = (y / rect.height - 0.5) * -maxTilt
    const rotY = (x / rect.width - 0.5) * maxTilt

    gsap.to(card, { rotateX: rotX, rotateY: rotY, transformPerspective: 800, duration: 0.4, ease: 'power2.out' })
    if (glow && glowRef.current) {
      gsap.to(glowRef.current, { opacity: 1, x: x - 100, y: y - 100, duration: 0.3 })
    }
  }

  const handleLeave = () => {
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.6, ease: 'power3.out' })
    if (glow && glowRef.current) gsap.to(glowRef.current, { opacity: 0, duration: 0.4 })
  }

  const handleEnter = () => {
    gsap.to(cardRef.current, { scale: 1.02, duration: 0.4, ease: 'power2.out' })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={`relative [transform-style:preserve-3d] will-change-transform ${className}`}
    >
      {glow && <div ref={glowRef} className="pointer-events-none absolute w-52 h-52 rounded-full bg-gold/20 blur-3xl opacity-0 z-0" />}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
