import { useId } from 'react'
import type { IllustrationKind } from '../../data/gallery'

interface Props {
  kind: IllustrationKind
  className?: string
}

export default function GalleryIllustration({ kind, className = '' }: Props) {
  const uid = useId().replace(/:/g, '')

  const broth = `broth-${uid}`
  const spicyBroth = `spicy-${uid}`
  const glow = `glow-${uid}`
  const gold = `gold-${uid}`
  const bambooG = `bamboo-${uid}`
  const skinG = `skin-${uid}`
  const lanternG = `lantern-${uid}`
  const bg = `bg-${uid}`

  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-hidden>
      <defs>
        <radialGradient id={bg} cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#241712" />
          <stop offset="60%" stopColor="#150f0c" />
          <stop offset="100%" stopColor="#0a0807" />
        </radialGradient>
        <radialGradient id={glow} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#d6293f" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#d6293f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={gold} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e3c989" />
          <stop offset="100%" stopColor="#a85a32" />
        </linearGradient>
        <linearGradient id={broth} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c97f3a" />
          <stop offset="100%" stopColor="#5e2f10" />
        </linearGradient>
        <linearGradient id={spicyBroth} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c4283d" />
          <stop offset="100%" stopColor="#4a0e18" />
        </linearGradient>
        <linearGradient id={bambooG} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#caa15f" />
          <stop offset="100%" stopColor="#7a5a30" />
        </linearGradient>
        <radialGradient id={skinG} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f3e9d8" />
          <stop offset="100%" stopColor="#cdb98f" />
        </radialGradient>
        <radialGradient id={lanternG} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e3536b" />
          <stop offset="100%" stopColor="#7a1424" />
        </radialGradient>
      </defs>

      <rect width="400" height="400" fill={`url(#${bg})`} />
      <circle cx="200" cy="170" r="180" fill={`url(#${glow})`} />

      {kind === 'shoyu' && (
        <g>
          <ellipse cx="200" cy="255" rx="150" ry="40" fill="#0d0a08" />
          <path d="M55 250 a145 75 0 0 0 290 0 l-14 60 a135 70 0 0 1 -262 0 z" fill="#1c1411" stroke={`url(#${gold})`} strokeWidth="2" />
          <ellipse cx="200" cy="245" rx="128" ry="34" fill={`url(#${broth})`} />
          <path d="M105 245 q24 -18 48 0 q24 -18 48 0 q24 -18 48 0 q24 -18 48 0" fill="none" stroke="#f3e9d8" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
          <ellipse cx="155" cy="232" rx="20" ry="9" fill={`url(#${skinG})`} />
          <ellipse cx="195" cy="236" rx="18" ry="8" fill="#6b3a1c" opacity="0.9" />
          <rect x="225" y="222" width="34" height="16" rx="2" fill="#1a1714" opacity="0.85" />
          <circle cx="252" cy="222" r="3" fill="#7ea35a" />
          <circle cx="262" cy="226" r="3" fill="#7ea35a" />
          <path d="M150 190 q6 -24 -4 -42" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M200 180 q6 -28 -6 -48" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          <path d="M245 190 q6 -24 -4 -42" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>
      )}

      {kind === 'tantanmen' && (
        <g>
          <ellipse cx="200" cy="255" rx="150" ry="40" fill="#0d0a08" />
          <path d="M55 250 a145 75 0 0 0 290 0 l-14 60 a135 70 0 0 1 -262 0 z" fill="#1c1411" stroke={`url(#${gold})`} strokeWidth="2" />
          <ellipse cx="200" cy="245" rx="128" ry="34" fill={`url(#${spicyBroth})`} />
          <path d="M170 245 m0 0 a16 10 0 1 1 0.1 0" fill="none" stroke="#e3536b" strokeWidth="2.5" opacity="0.8" />
          <path d="M230 240 m0 0 a14 9 0 1 1 0.1 0" fill="none" stroke="#e3536b" strokeWidth="2.5" opacity="0.8" />
          <circle cx="160" cy="225" r="3" fill="#e3c989" />
          <circle cx="178" cy="232" r="2.4" fill="#e3c989" />
          <circle cx="220" cy="222" r="2.6" fill="#e3c989" />
          <ellipse cx="245" cy="228" rx="16" ry="8" fill={`url(#${skinG})`} />
          <rect x="120" y="220" width="14" height="22" rx="3" fill="#9c1c2e" opacity="0.9" />
          <path d="M150 188 q6 -24 -4 -42" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M205 178 q6 -28 -6 -48" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
          <path d="M250 188 q6 -24 -4 -42" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </g>
      )}

      {kind === 'dimsum' && (
        <g>
          <ellipse cx="200" cy="290" rx="110" ry="20" fill={`url(#${bambooG})`} opacity="0.5" />
          <ellipse cx="200" cy="270" rx="120" ry="22" fill="none" stroke={`url(#${bambooG})`} strokeWidth="6" />
          <ellipse cx="200" cy="240" rx="120" ry="22" fill="none" stroke={`url(#${bambooG})`} strokeWidth="6" />
          <ellipse cx="200" cy="210" rx="120" ry="22" fill="#241712" stroke={`url(#${bambooG})`} strokeWidth="6" />
          {[-70, -25, 20, 65].map((dx, i) => (
            <g key={i} transform={`translate(${200 + dx}, ${204 + (i % 2 === 0 ? 0 : 6)})`}>
              <ellipse cx="0" cy="6" rx="26" ry="14" fill={`url(#${skinG})`} />
              <path d="M-22 0 q22 -16 44 0" fill="none" stroke="#a8916b" strokeWidth="2" />
              <path d="M-10 -8 q10 -8 20 0" fill="none" stroke="#a8916b" strokeWidth="2" />
            </g>
          ))}
          <path d="M160 165 q8 -22 -2 -38" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
          <path d="M240 165 q8 -22 -2 -38" fill="none" stroke="#e9ded0" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
        </g>
      )}

      {kind === 'interior' && (
        <g>
          <rect x="20" y="230" width="360" height="10" fill={`url(#${gold})`} opacity="0.5" />
          <rect x="40" y="100" width="320" height="130" fill="#1a1310" opacity="0.7" />
          {[80, 160, 240, 320].map((x, i) => (
            <rect key={i} x={x} y="60" width="6" height="180" fill="#100b09" />
          ))}
          {[120, 200, 280].map((x, i) => (
            <g key={i} transform={`translate(${x}, 70)`}>
              <line x1="0" y1="0" x2="0" y2="22" stroke="#3a2a1d" strokeWidth="2" />
              <ellipse cx="0" cy="40" rx="16" ry="20" fill={`url(#${lanternG})`} />
              <ellipse cx="0" cy="40" rx="16" ry="20" fill="none" stroke={`url(#${gold})`} strokeWidth="1.5" opacity="0.7" />
            </g>
          ))}
          <rect x="40" y="230" width="320" height="14" fill="#241712" />
          <ellipse cx="200" cy="150" rx="180" ry="90" fill={`url(#${glow})`} opacity="0.5" />
        </g>
      )}

      {kind === 'folding' && (
        <g>
          <ellipse cx="200" cy="250" rx="90" ry="60" fill="#1c1411" opacity="0.7" />
          <ellipse cx="200" cy="230" rx="34" ry="18" fill={`url(#${skinG})`} />
          <path d="M168 225 q32 -22 64 0" fill="none" stroke="#a8916b" strokeWidth="2.5" />
          <path d="M180 215 q20 -12 40 0" fill="none" stroke="#a8916b" strokeWidth="2" />
          <path d="M110 260 q40 10 70 -10 q10 -20 20 -8" fill="none" stroke={`url(#${skinG})`} strokeWidth="16" strokeLinecap="round" opacity="0.9" />
          <path d="M290 260 q-40 10 -70 -10 q-10 -20 -20 -8" fill="none" stroke={`url(#${skinG})`} strokeWidth="16" strokeLinecap="round" opacity="0.9" />
          {[ [140, 290], [170, 300], [230, 300], [260, 290] ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2.4" fill="#e3e0d6" opacity="0.6" />
          ))}
        </g>
      )}

      {kind === 'lanterns' && (
        <g>
          {[-90, 0, 90].map((dx, i) => (
            <g key={i} transform={`translate(${200 + dx}, ${i === 1 ? 80 : 110})`}>
              <line x1="0" y1="0" x2="0" y2="26" stroke="#a85a32" strokeWidth="2" />
              <ellipse cx="0" cy="70" rx="32" ry="46" fill={`url(#${lanternG})`} />
              {[-20, 0, 20].map((lx, j) => (
                <line key={j} x1={lx} y1="26" x2={lx} y2="114" stroke="#7a1424" strokeWidth="1" opacity="0.5" />
              ))}
              <ellipse cx="0" cy="70" rx="32" ry="46" fill="none" stroke={`url(#${gold})`} strokeWidth="2" />
              <line x1="0" y1="114" x2="0" y2="134" stroke="#a85a32" strokeWidth="2" />
              <text x="0" y="78" textAnchor="middle" fontSize="26" fill="#e3c989" opacity="0.85" fontFamily="serif">
                麺
              </text>
            </g>
          ))}
        </g>
      )}

      {kind === 'steam' && (
        <g>
          <path d="M70 300 a130 60 0 0 1 260 0 z" fill="#1c1411" stroke={`url(#${gold})`} strokeWidth="2" />
          <ellipse cx="200" cy="298" rx="118" ry="20" fill={`url(#${broth})`} opacity="0.5" />
          <path d="M130 260 q-14 -50 10 -80 q-10 40 14 60 q4 -36 26 -50 q-14 36 4 64 q10 -30 30 -38 q-16 30 4 56" fill="none" stroke="#e9ded0" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
          <ellipse cx="200" cy="160" rx="150" ry="100" fill={`url(#${glow})`} opacity="0.6" />
        </g>
      )}

      {kind === 'ingredients' && (
        <g>
          <circle cx="140" cy="160" r="26" fill="#c4283d" />
          <path d="M140 134 q10 -16 0 -28" fill="none" stroke="#5a8a3f" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="240" cy="150" rx="14" ry="34" fill="#7ea35a" />
          <ellipse cx="262" cy="160" rx="13" ry="30" fill="#9bc174" />
          <circle cx="190" cy="230" r="30" fill={`url(#${skinG})`} />
          <circle cx="190" cy="232" r="13" fill="#d98a2b" />
          <g transform="translate(265, 235)">
            <path d="M0 -16 a16 16 0 1 1 -0.1 0" fill="#e9e2cf" />
            <path d="M0 -16 v32 M-14 -8 v16 M14 -8 v16" stroke="#cdb98f" strokeWidth="1.5" />
          </g>
          <circle cx="120" cy="250" r="6" fill="#e3c989" />
          <circle cx="140" cy="260" r="5" fill="#e3c989" />
          <circle cx="105" cy="265" r="4" fill="#e3c989" />
        </g>
      )}

      <rect x="0.5" y="0.5" width="399" height="399" fill="none" stroke={`url(#${gold})`} strokeOpacity="0.25" />
    </svg>
  )
}
