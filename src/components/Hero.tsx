import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import { profile } from '../content/profile'
import { Sketch } from './Sketch'

export function Hero() {
  const ref = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const greeting = ref.current?.querySelector<HTMLElement>('[data-hero-greeting]')
      const words = ref.current?.querySelectorAll<HTMLElement>('[data-hero-word]')
      const meta = ref.current?.querySelectorAll<HTMLElement>('[data-hero-meta]')
      const stats = ref.current?.querySelectorAll<HTMLElement>('[data-hero-stat]')
      const sketch = ref.current?.querySelector<HTMLElement>('[data-hero-sketch]')

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      if (greeting) {
        tl.from(greeting, { y: 12, opacity: 0, duration: 0.6 })
      }
      if (words && words.length) {
        tl.from(
          words,
          { y: 14, opacity: 0, duration: 0.7, stagger: 0.04 },
          '-=0.3',
        )
      }
      if (sketch) {
        tl.from(
          sketch,
          { opacity: 0, y: 12, scale: 0.97, duration: 0.7 },
          '-=0.45',
        )
      }
      if (meta && meta.length) {
        tl.from(meta, { y: 10, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
      }
      if (stats && stats.length) {
        tl.from(
          stats,
          { y: 8, opacity: 0, duration: 0.45, stagger: 0.06 },
          '-=0.3',
        )
      }
    },
    { scope: ref },
  )

  const taglineWords = profile.tagline.split(' ')

  return (
    <section
      id="top"
      ref={ref}
      className="px-6 pb-16 pt-24 sm:px-10 sm:pb-24 sm:pt-32"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
          <div className="flex-1 min-w-0">
            <p
              data-hero-greeting
              className="mb-6 font-mono text-xs text-muted"
            >
              <span className="text-accent">●</span>{' '}
              <span>
                {profile.role.toLowerCase()} · based in {profile.location.toLowerCase()} · open to chat
              </span>
            </p>
            <h1 className="font-mono text-[clamp(1.25rem,2.6vw,1.875rem)] font-medium leading-[1.3] tracking-tightish text-ink">
              {taglineWords.map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  data-hero-word
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          <div
            data-hero-sketch
            className="text-accent self-end sm:shrink-0 sm:self-auto"
          >
            <Sketch className="w-44 sm:w-56" />
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
          {profile.stats.map((stat, i) => (
            <li
              key={stat}
              data-hero-stat
              className="flex items-center gap-x-3"
            >
              {i > 0 ? <span aria-hidden className="text-rule">·</span> : null}
              <span>{stat}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
          <span data-hero-meta className="font-mono">
            <span className="text-ink">{profile.name.toLowerCase()}</span>
          </span>
          <span data-hero-meta className="hidden h-3 w-px bg-rule sm:inline-block" />
          <a
            data-hero-meta
            href="#projects"
            className="font-mono underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-accent"
          >
            $ cat projects ↓
          </a>
        </div>
      </div>
    </section>
  )
}
