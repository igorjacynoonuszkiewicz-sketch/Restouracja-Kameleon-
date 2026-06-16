import type { MenuItem } from '../../data/menu'
import TiltCard from '../ui/TiltCard'

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <TiltCard maxTilt={8} className="glass-panel rounded-2xl p-6 overflow-hidden group">
      <div className="flex justify-between items-start gap-4 mb-2">
        <h4 className="font-display text-xl text-cream group-hover:text-gold transition-colors">{item.name}</h4>
        <span className="font-display text-lg text-gold-light whitespace-nowrap">{item.price}</span>
      </div>
      {item.tags && (
        <div className="flex gap-2 mb-3">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-gold/40 text-gold-light"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-cream-dim font-light leading-relaxed">{item.description}</p>
    </TiltCard>
  )
}
