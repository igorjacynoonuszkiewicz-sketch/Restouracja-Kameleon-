import Reveal from './Reveal'

interface SectionHeadingProps {
  kicker: string
  kanji?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ kicker, kanji, title, subtitle, align = 'center' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col ${alignClass} gap-4 mb-14 md:mb-20`}>
      <div className="flex items-center gap-3">
        {kanji && <span className="font-jp text-2xl text-gold/70">{kanji}</span>}
        <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold">{kicker}</span>
      </div>
      <h2 className="text-4xl md:text-6xl text-cream font-medium leading-[1.1]">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {subtitle && (
        <p className="max-w-xl text-cream-dim text-base md:text-lg font-light leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  )
}
