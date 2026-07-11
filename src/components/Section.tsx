import { type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

// Kept for call-site compatibility — color now comes from the single accent.
export type Tone = 'blue' | 'sage' | 'plum' | 'amber' | 'terracotta'

type SectionProps = {
  id: string
  command: string
  title?: string
  tone?: Tone
  surface?: boolean
  index?: string
  className?: string
  children: ReactNode
}

export function Section({
  id,
  command,
  title,
  surface = false,
  index,
  className = '',
  children,
}: SectionProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`relative border-t border-rule px-6 py-24 sm:px-10 sm:py-32 ${
        surface ? 'bg-surface' : ''
      } ${className}`}
    >
      <div className="mx-auto max-w-5xl">
        <div
          data-reveal
          className="mb-10 flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted"
        >
          {index ? (
            <span className="tabular-nums text-muted2">{index}</span>
          ) : null}
          <span aria-hidden className="text-accent">$</span>
          <span>{command}</span>
          <span aria-hidden className="h-px flex-1 bg-rule" />
        </div>
        {title ? (
          <h2
            data-reveal
            className="mb-12 max-w-2xl font-sans text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-4xl"
          >
            {title.replace(/\.$/, '')}
            <span className="text-accent" aria-hidden>
              {' '}/
            </span>
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  )
}
