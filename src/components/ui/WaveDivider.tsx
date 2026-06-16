interface WaveDividerProps {
  flip?: boolean
  className?: string
}

export default function WaveDivider({ flip = false, className = '' }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={`relative h-10 md:h-14 w-full bg-seigaiha ${flip ? 'scale-y-[-1]' : ''} ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, black, transparent)',
      }}
    />
  )
}
