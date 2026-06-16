import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

const timeSlots = (() => {
  const slots: string[] = []
  for (let h = 12; h <= 21; h++) {
    slots.push(`${String(h).padStart(2, '0')}:00`)
    if (h !== 21) slots.push(`${String(h).padStart(2, '0')}:30`)
  }
  return slots
})()

const guestOptions = ['1 osoba', '2 osoby', '3 osoby', '4 osoby', '5 osób', '6+ osób']

interface FormState {
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: string
  notes: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: guestOptions[1],
  notes: '',
}

export default function Reservation() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle')

  const todayISO = useMemo(() => new Date().toISOString().split('T')[0], [])

  const update = (key: keyof FormState, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    window.setTimeout(() => setStatus('done'), 1100)
  }

  const reset = () => {
    setForm(initialState)
    setStatus('idle')
  }

  return (
    <section id="rezerwacje" className="relative py-28 md:py-36 bg-ink-2 overflow-hidden">
      <div className="absolute inset-0 bg-seigaiha-full opacity-[0.05]" />
      <span aria-hidden className="kanji-watermark absolute -top-10 right-0 text-[16rem] select-none">
        予約
      </span>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
        <SectionHeading
          kicker="Zarezerwuj stolik"
          kanji="予約"
          title="Rezerwacje"
          subtitle="Zarezerwuj stolik w naszej kameralnej izakaya w Montowni — odpowiemy i potwierdzimy najszybciej, jak możemy."
        />

        <Reveal>
          <div className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden">
            {status !== 'done' ? (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <Field label="Imię i nazwisko" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jan Kowalski"
                    className="w-full rounded-lg px-4 py-3 text-sm"
                  />
                </Field>

                <Field label="Telefon" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+48 600 000 000"
                    className="w-full rounded-lg px-4 py-3 text-sm"
                  />
                </Field>

                <Field label="Email" required className="sm:col-span-2">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jan@przyklad.pl"
                    className="w-full rounded-lg px-4 py-3 text-sm"
                  />
                </Field>

                <Field label="Data" required>
                  <input
                    type="date"
                    required
                    min={todayISO}
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-sm"
                  />
                </Field>

                <Field label="Godzina" required>
                  <select
                    required
                    value={form.time}
                    onChange={(e) => update('time', e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-sm"
                  >
                    <option value="" disabled>
                      Wybierz godzinę
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Liczba osób" required>
                  <select
                    value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-sm"
                  >
                    {guestOptions.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Uwagi (opcjonalnie)" className="sm:col-span-2">
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => update('notes', e.target.value)}
                    placeholder="Alergie, okazja specjalna, preferencje co do stolika..."
                    className="w-full rounded-lg px-4 py-3 text-sm resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-[0.18em] font-medium text-ink bg-gradient-to-r from-gold-light via-gold to-copper hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:translate-y-0"
                >
                  {status === 'submitting' ? 'Wysyłanie...' : 'Zarezerwuj stolik'}
                </button>
                <p className="sm:col-span-2 text-xs text-cream-dim/70 text-center -mt-1">
                  Rezerwacja zostanie potwierdzona telefonicznie lub mailowo.
                </p>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-10">
                <div className="ring-pop w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center mb-6">
                  <svg viewBox="0 0 24 24" className="w-9 h-9 text-gold">
                    <path
                      className="check-path"
                      d="M5 13l4 4L19 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-cream mb-3">Dziękujemy, {form.name.split(' ')[0] || 'gościu'}!</h3>
                <p className="text-cream-dim font-light max-w-sm mb-2">
                  Twoja rezerwacja na <span className="text-gold-light">{form.guests}</span> w dniu{' '}
                  <span className="text-gold-light">{form.date}</span> o <span className="text-gold-light">{form.time}</span> została
                  przyjęta.
                </p>
                <p className="text-cream-dim/70 text-sm font-light max-w-sm mb-8">
                  Potwierdzimy ją telefonicznie lub mailowo. Do zobaczenia w Montowni!
                </p>
                <button
                  onClick={reset}
                  className="inline-flex items-center px-6 py-3 rounded-full text-sm uppercase tracking-[0.18em] text-cream border border-gold/50 hover:border-gold hover:bg-gold/10 transition-all"
                >
                  Nowa rezerwacja
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
  required,
  className = '',
}: {
  label: string
  children: React.ReactNode
  required?: boolean
  className?: string
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-xs uppercase tracking-[0.15em] text-cream-dim">
        {label} {required && <span className="text-crimson-light">*</span>}
      </span>
      {children}
    </label>
  )
}
