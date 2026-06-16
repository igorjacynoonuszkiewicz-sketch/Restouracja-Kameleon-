interface StarsProps {
  rating: number
  className?: string
}

export default function Stars({ rating, className = '' }: StarsProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-cream-dim/25'}`}
          fill="currentColor"
        >
          <path d="M12 2.5l2.95 6.46 7.05.78-5.27 4.76 1.45 6.92L12 17.9l-6.18 3.52 1.45-6.92L2 9.74l7.05-.78z" />
        </svg>
      ))}
    </div>
  )
}
