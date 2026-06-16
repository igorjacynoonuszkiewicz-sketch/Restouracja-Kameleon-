interface SmokeWispsProps {
  count?: number
  className?: string
}

export default function SmokeWisps({ count = 6, className = '' }: SmokeWispsProps) {
  const wisps = Array.from({ length: count }).map((_, i) => {
    const size = 30 + ((i * 17) % 40)
    const left = 30 + ((i * 11) % 40)
    const delay = i * 1.1
    const drift = (i % 2 === 0 ? 1 : -1) * (20 + i * 6)
    return { size, left, delay, drift, key: i }
  })

  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden>
      {wisps.map((w) => (
        <span
          key={w.key}
          className="smoke-wisp"
          style={{
            width: w.size,
            height: w.size,
            left: `${w.left}%`,
            bottom: 0,
            animationDelay: `${w.delay}s`,
            ['--smoke-drift' as string]: `${w.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
