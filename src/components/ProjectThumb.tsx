import type { ProjectKind } from '../content/profile'

type Props = {
  kind: ProjectKind
  className?: string
}

const SVG_PROPS = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ProjectThumb({ kind, className }: Props) {
  if (kind === 'mobile') {
    return (
      <svg viewBox="0 0 220 120" {...SVG_PROPS} className={className}>
        <rect x="84" y="6" width="52" height="108" rx="8" />
        <rect x="101" y="11" width="18" height="3.5" rx="1.75" fill="currentColor" stroke="none" />

        <line x1="90" y1="22" x2="97" y2="22" strokeWidth={0.8} />
        <line x1="123" y1="22" x2="129" y2="22" strokeWidth={0.8} />

        <line x1="90" y1="32" x2="112" y2="32" strokeWidth={1.8} />
        <circle cx="126" cy="32" r="2.5" />

        <rect x="90" y="40" width="40" height="6" rx="3" />

        <rect x="90" y="51" width="40" height="13" rx="2" />
        <line x1="93" y1="56" x2="105" y2="56" strokeWidth={0.7} />
        <line x1="93" y1="60" x2="118" y2="60" strokeWidth={0.7} />

        <rect x="90" y="67" width="40" height="13" rx="2" />
        <line x1="93" y1="72" x2="100" y2="72" strokeWidth={0.7} />
        <line x1="93" y1="76" x2="115" y2="76" strokeWidth={0.7} />

        <rect x="90" y="83" width="40" height="13" rx="2" />
        <line x1="93" y1="88" x2="108" y2="88" strokeWidth={0.7} />
        <line x1="93" y1="92" x2="120" y2="92" strokeWidth={0.7} />

        <line x1="89" y1="101" x2="131" y2="101" strokeWidth={0.5} />
        <circle cx="98" cy="106" r="1.6" />
        <circle cx="108" cy="106" r="1.6" />
        <circle cx="118" cy="106" r="1.6" />
        <circle cx="128" cy="106" r="1.6" />

        <line x1="103" y1="111" x2="117" y2="111" strokeWidth={1.5} />
      </svg>
    )
  }

  if (kind === 'cli') {
    return (
      <svg viewBox="0 0 220 120" {...SVG_PROPS} className={className}>
        <rect x="20" y="12" width="180" height="100" rx="4" />
        <circle cx="29" cy="22" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="36" cy="22" r="1.6" fill="currentColor" stroke="none" />
        <circle cx="43" cy="22" r="1.6" fill="currentColor" stroke="none" />
        <line x1="20" y1="32" x2="200" y2="32" />
        <line x1="32" y1="46" x2="36" y2="46" />
        <line x1="40" y1="46" x2="100" y2="46" />
        <line x1="32" y1="58" x2="150" y2="58" />
        <line x1="32" y1="70" x2="120" y2="70" />
        <line x1="32" y1="84" x2="36" y2="84" />
        <line x1="40" y1="84" x2="80" y2="84" />
        <line x1="32" y1="96" x2="140" y2="96" />
        <rect x="32" y="103" width="4" height="6" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 220 120" {...SVG_PROPS} className={className}>
      <rect x="20" y="12" width="180" height="100" rx="4" />
      <circle cx="29" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="36" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="43" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <rect x="60" y="18" width="120" height="8" rx="2" />
      <line x1="20" y1="32" x2="200" y2="32" />
      <line x1="32" y1="46" x2="80" y2="46" />
      <line x1="32" y1="56" x2="130" y2="56" />
      <line x1="32" y1="66" x2="100" y2="66" />
      <rect x="32" y="76" width="58" height="28" rx="3" />
      <rect x="98" y="76" width="58" height="28" rx="3" />
      <rect x="164" y="76" width="22" height="28" rx="3" />
    </svg>
  )
}
