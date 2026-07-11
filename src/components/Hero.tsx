import { lazy, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '../lib/gsap'
import { profile } from '../content/profile'

const Model = lazy(() => import("./HeroModel"))

// Code-split three.js into its own chunk so the rest of the site loads fast.


export function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const { hero } = profile

  useGSAP(
    () => {
      const reveal = ref.current?.querySelectorAll<HTMLElement>('[data-hero]')
      if (reveal && reveal.length) {
        gsap.from(reveal, {
          y: 18,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
        })
      }
    },
    { scope: ref },
  )

  const social: Array<{ label: string; href: string }> = [
    { label: 'github', href: profile.contact.github },
    { label: 'linkedin', href: profile.contact.linkedin },
    { label: 'email', href: `mailto:${profile.contact.email}` },
  ]

  return (
    <section
      id="top"
      ref={ref}
      className="relative px-6 pb-20 pt-24 sm:px-10 sm:pb-28 sm:pt-32"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
        {/* Left — the statement */}
        <div className="w-full min-w-0 lg:flex-1">
          <p
            data-hero
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-rule bg-surface/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted"
          >
            {/* <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span> */}
            <span>{profile.location.toLowerCase()}</span>
          </p>

          <h1 className="font-sans text-[clamp(2.75rem,6.5vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-ink">
            <span data-hero className="block">{hero.lead}</span>
            <span data-hero className="block">
              {hero.tail}
              <span className="text-accent"> / {hero.accent}</span>
            </span>
          </h1>

          <p data-hero className="mt-6 max-w-md font-mono text-sm text-muted">
            {hero.credentials}
          </p>

          <ul data-hero className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-sm">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="link-underline text-ink transition-colors hover:text-accent"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <p data-hero className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.intro}
          </p>

          <a
            data-hero
            href="#projects"
            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-rule bg-surface/60 px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            $ cat projects{' '}
            <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center items-center">
          {/* <ScrollReveal> */}
          <Model />
          {/* </ScrollReveal> */}
        </div>

        {/* Right — interactive 3D model */}
        {/* <div data-hero className="order-first sm:order-none">
          <Suspense
            fallback={
              <div className="flex h-72 w-full items-center justify-center sm:h-[28rem]">
                <span className="font-mono text-xs text-muted2">loading model…</span>
              </div>
            }
          >
            <HeroModel />
          </Suspense>
        </div> */}
      </div>
    </section>
  )
}
