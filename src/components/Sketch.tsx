type SketchProps = {
  className?: string
}

export function Sketch({ className }: SketchProps) {
  return (
    <svg
      viewBox="0 0 220 170"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Line drawing of a laptop and a phone"
      className={className}
    >
      <rect x="22" y="22" width="150" height="92" rx="5" />
      <line x1="36" y1="38" x2="78" y2="38" />
      <line x1="36" y1="50" x2="108" y2="50" />
      <line x1="36" y1="62" x2="62" y2="62" />
      <line x1="36" y1="74" x2="92" y2="74" />
      <line x1="36" y1="86" x2="74" y2="86" />

      <path d="M 8 120 L 186 120 L 196 138 L -2 138 Z" />
      <line x1="86" y1="129" x2="108" y2="129" strokeWidth={2} />

      <rect x="160" y="60" width="46" height="92" rx="7" />
      <line x1="175" y1="69" x2="191" y2="69" />
      <circle cx="183" cy="146" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}
