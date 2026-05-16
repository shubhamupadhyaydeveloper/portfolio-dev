import { Section } from './Section'
import { profile } from '../content/profile'

// const TONE = '#5e7a5f'

export function About() {
  return (
    <Section id="about" command="ls about" tone="sage">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:gap-12">
        <div className="flex-1 space-y-6 text-lg leading-relaxed text-ink sm:text-xl">
          {profile.about.map((paragraph, i) => (
            <p key={i} data-reveal>
              {paragraph}
            </p>
          ))}
        </div>

        {/* <div
          data-reveal
          aria-hidden
          className="hidden shrink-0 sm:block"
          style={{ color: TONE }}
        >
          <svg
            viewBox="0 0 110 90"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-28 opacity-70"
          >
            <rect x="10" y="10" width="90" height="68" rx="3" />
            <line x1="55" y1="10" x2="55" y2="78" />

            <line x1="18" y1="22" x2="48" y2="22" />
            <line x1="18" y1="32" x2="44" y2="32" />
            <line x1="18" y1="42" x2="48" y2="42" />
            <line x1="18" y1="52" x2="40" y2="52" />
            <line x1="18" y1="62" x2="46" y2="62" />

            <rect x="60" y="19" width="5" height="5" rx="0.8" />
            <path d="M 61.2 21.5 L 62.3 22.6 L 64 20.5" />
            <line x1="68" y1="22" x2="92" y2="22" />

            <rect x="60" y="29" width="5" height="5" rx="0.8" />
            <path d="M 61.2 31.5 L 62.3 32.6 L 64 30.5" />
            <line x1="68" y1="32" x2="88" y2="32" />

            <rect x="60" y="39" width="5" height="5" rx="0.8" />
            <line x1="68" y1="42" x2="90" y2="42" />

            <rect x="60" y="49" width="5" height="5" rx="0.8" />
            <line x1="68" y1="52" x2="85" y2="52" />
          </svg>
        </div> */}
      </div>
    </Section>
  )
}
