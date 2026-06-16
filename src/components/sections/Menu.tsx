import { useState } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import MenuCard from './MenuCard'
import { menuCategories, menuNote } from '../../data/menu'

export default function Menu() {
  const [openId, setOpenId] = useState<string>(menuCategories[0].id)

  return (
    <section id="menu" className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-seigaiha-full opacity-[0.05]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="Karta"
          kanji="料理"
          title="Menu"
          subtitle="Rameny warzone godzinami i pierożki lepione ręcznie — kategorię rozwiniesz jednym kliknięciem."
        />

        <div className="space-y-5">
          {menuCategories.map((category) => {
            const isOpen = openId === category.id
            return (
              <Reveal key={category.id}>
                <div className="rounded-2xl glass-panel overflow-hidden">
                  <button
                    onClick={() => setOpenId(isOpen ? '' : category.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-jp text-2xl text-gold/70">{category.subtitleJp}</span>
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl text-cream">{category.title}</h3>
                        <p className="text-sm text-cream-dim font-light mt-1 hidden sm:block">{category.intro}</p>
                      </div>
                    </div>
                    <span
                      className={`flex-shrink-0 w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold transition-transform duration-400 ${
                        isOpen ? 'rotate-45 bg-gold/10' : ''
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 grid sm:grid-cols-2 gap-5">
                        {category.items.map((item) => (
                          <MenuCard key={item.name} item={item} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <p className="text-center text-xs text-cream-dim/70 font-light mt-10 max-w-2xl mx-auto">{menuNote}</p>
      </div>
    </section>
  )
}
