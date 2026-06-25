import Reveal from './Reveal'

interface SectionHeadingProps {
  index: string // np. „02"
  kicker: string
  title: string
  meta?: string // metadane po prawej (monospace)
}

export default function SectionHeading({ index, kicker, title, meta }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <div className="flex items-baseline justify-between gap-4 mb-6">
        <span className="t-meta text-bone-dim">
          <span className="tag-num">{index}</span>
          <span className="mx-3 text-line-2">/</span>
          {kicker}
        </span>
        {meta && <span className="t-meta text-bone-dim hidden sm:block">{meta}</span>}
      </div>
      <div className="rule mb-6" />
      <h2 className="t-h1 text-bone max-w-4xl text-balance">{title}</h2>
    </Reveal>
  )
}
