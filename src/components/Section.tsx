import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export type Tone = 'blue' | 'sage' | 'plum' | 'amber' | 'terracotta'

const TONE_COLOR: Record<Tone, string> = {
  blue: '#3c5f96',
  sage: '#5e7a5f',
  plum: '#7a4a6b',
  amber: '#b07a2c',
  terracotta: '#c8553d',
}

type SectionProps = {
  id: string
  command: string
  title?: string
  tone?: Tone
  children: ReactNode
}

export function Section({ id, command, title, tone = 'blue', children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null)
  const toneColor = TONE_COLOR[tone]

  useGSAP(
    () => {
      const targets = ref.current?.querySelectorAll<HTMLElement>(
        '[data-reveal]',
      )
      if (!targets || targets.length === 0) return

      gsap.from(targets, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
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
      className="relative px-6 py-20 sm:px-10 sm:py-28"
      style={{ borderTop: `2px solid ${toneColor}` }}
    >
      <div className="mx-auto max-w-3xl">
        <div
          data-reveal
          className="mb-8 flex items-baseline gap-3 font-mono text-xs"
          style={{ color: toneColor }}
        >
          <span aria-hidden className="font-semibold">$</span>
          <span>{command}</span>
          <span
            className="h-px flex-1"
            aria-hidden
            style={{ backgroundColor: `${toneColor}55` }}
          />
        </div>
        {title ? (
          <h2
            data-reveal
            className="mb-10 font-mono text-2xl font-medium leading-tight tracking-tightish text-ink sm:text-3xl"
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
