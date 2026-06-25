import SmokeWisps from './SmokeWisps'

// Industrialna hala w jednym punkcie zbiegu — spojrzenie w głąb hali montażu,
// stalowe ramy uciekające do ciepłego światła nad barem. Lekka (SVG), ostra na
// mobile, z miejscem na realne zdjęcie wnętrza Montowni.

const VP = { x: 560, y: 360 } // punkt zbiegu
const N = 8
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

const frames = Array.from({ length: N }).map((_, i) => {
  const t = i / (N - 1)
  const e = t * t // ramy zagęszczają się przy punkcie zbiegu
  const s = 1 - e * 0.92
  const halfW = 380 * s
  const halfH = 320 * s
  const cx = lerp(360, VP.x, e)
  const cy = lerp(430, VP.y, e)
  return { x: cx - halfW, y: cy - halfH, w: halfW * 2, h: halfH * 2, t }
})

const outer = frames[0]
const corners = [
  [outer.x, outer.y],
  [outer.x + outer.w, outer.y],
  [outer.x, outer.y + outer.h],
  [outer.x + outer.w, outer.y + outer.h],
]

export default function HallScene({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <radialGradient id="hallGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e3984a" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#b66f2a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#b66f2a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="floorGlow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#0a121b" stopOpacity="0" />
            <stop offset="100%" stopColor="#0a121b" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Poświata światła na końcu hali (lampa / 12-metrowy bar) */}
        <circle cx={VP.x} cy={VP.y + 70} r="200" fill="url(#hallGlow)" />

        {/* Linie perspektywy — narożniki uciekające do punktu zbiegu */}
        {corners.map(([cx, cy], i) => (
          <line key={`p${i}`} x1={cx} y1={cy} x2={VP.x} y2={VP.y} stroke="#36505f" strokeOpacity="0.4" strokeWidth="1" />
        ))}

        {/* Linie podłogi — deski / tory suwnicy */}
        {[0.18, 0.5, 0.82].map((p, i) => {
          const x = lerp(outer.x, outer.x + outer.w, p)
          return (
            <line key={`f${i}`} x1={x} y1={outer.y + outer.h} x2={VP.x} y2={VP.y} stroke="#21333f" strokeOpacity="0.6" strokeWidth="1" />
          )
        })}

        {/* Stalowe ramy hali — portalowe dźwigary */}
        {frames.map((f, i) => {
          const near = 1 - f.t
          return (
            <g key={`r${i}`}>
              <rect
                x={f.x}
                y={f.y}
                width={f.w}
                height={f.h}
                fill="none"
                stroke={i === 0 ? '#4a6678' : '#36505f'}
                strokeOpacity={0.25 + near * 0.5}
                strokeWidth={i === 0 ? 1.5 : 1}
              />
              {/* Kratownica dachu — trójkąt w górnej belce */}
              <path
                d={`M ${f.x} ${f.y} L ${f.x + f.w / 2} ${f.y - f.h * 0.12} L ${f.x + f.w} ${f.y}`}
                fill="none"
                stroke="#36505f"
                strokeOpacity={0.18 + near * 0.32}
                strokeWidth="1"
              />
            </g>
          )
        })}

        {/* Ciepła linia baru przy punkcie zbiegu */}
        <line x1={VP.x - 70} y1={VP.y + 92} x2={VP.x + 70} y2={VP.y + 92} stroke="#e3984a" strokeOpacity="0.8" strokeWidth="2" />
      </svg>

      {/* Cegła u dołu — subtelny ślad muru hali */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent 0 13px, rgba(120,80,55,0.5) 13px 14px), repeating-linear-gradient(90deg, transparent 0 30px, rgba(120,80,55,0.5) 30px 31px)',
          maskImage: 'linear-gradient(to top, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />

      {/* Para z bulionu w głębi hali */}
      <SmokeWisps className="inset-x-[35%] bottom-[34%] h-1/3" count={6} />
    </div>
  )
}
