import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export type Tone = 'blue' | 'sage' | 'plum' | 'amber' | 'terracotta'

// A cohesive, slightly muted set — reads as a family rather than a rainbow.
const TONE_COLOR: Record<Tone, string> = {
  blue: '#42648f',
  sage: '#5f7a5d',
  plum: '#825873',
  amber: '#a8772f',
  terracotta: '#bd5a41',
}

type SectionProps = {
  id: string
  command: string
  title?: string
  tone?: Tone
  surface?: boolean
  index?: string
  children: ReactNode
}

export function Section({
  id,
  command,
  title,
  tone = 'blue',
  surface = false,
  index,
  children,
}: SectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  const toneColor = TONE_COLOR[tone]

  useGSAP(
    () => {
      const targets = ref.current?.querySelectorAll<HTMLElement>('[data-reveal]')
      if (!targets || targets.length === 0) return

      gsap.from(targets, {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.07,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
      })
    },
    { scope: ref },
  )

  return (
    <section
      id={id}
      ref={ref}
      className={`relative px-6 py-20 sm:px-10 sm:py-28 ${surface ? 'bg-surface' : ''}`}
      style={{ borderTop: `1px solid ${toneColor}40` }}
    >
      <div className="mx-auto max-w-5xl">
        <div
          data-reveal
          className="mb-8 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em]"
          style={{ color: toneColor }}
        >
          {index ? (
            <span className="font-semibold tabular-nums opacity-70">{index}</span>
          ) : null}
          <span aria-hidden className="font-semibold opacity-80">$</span>
          <span className="opacity-90">{command}</span>
          <span
            className="h-px flex-1"
            aria-hidden
            style={{
              background: `linear-gradient(to right, ${toneColor}55, transparent)`,
            }}
          />
        </div>
        {title ? (
          <h2
            data-reveal
            className="mb-10 max-w-2xl font-sans text-2xl font-semibold leading-[1.15] tracking-tightish text-ink sm:text-3xl"
          >
            {title.replace(/\.$/, '')}
            <span style={{ color: toneColor }} aria-hidden>
              {' '}/
            </span>
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}

export { ScrollTrigger }
