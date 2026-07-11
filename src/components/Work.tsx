import { Section } from './Section'
import { profile } from '../content/profile'

export function Work() {
  return (
    <Section id="work" command="ls work" title="A short history." tone="blue" index="02">
      <ol>
        {profile.work.map((job, i) => {
          const current = /present/i.test(job.period)
          const last = i === profile.work.length - 1
          return (
            <li key={`${job.company}-${i}`} data-reveal className="group flex gap-4 sm:gap-5">
              <div className="flex w-3 flex-none flex-col items-center pt-1.5">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {current ? (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  ) : null}
                  <span
                    className={`relative inline-flex h-3 w-3 rounded-full border-2 bg-bg transition-colors ${
                      current ? 'border-accent bg-accent' : 'border-rule group-hover:border-accent/60'
                    }`}
                  />
                </span>
                {last ? null : <span aria-hidden className="mt-1 w-px flex-1 bg-rule" />}
              </div>

              <div className={`min-w-0 flex-1 ${last ? '' : 'pb-10'}`}>
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  {current ? (
                    <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/[0.08] px-2.5 py-0.5 font-mono text-[0.7rem] text-accent">
                      now
                    </span>
                  ) : null}
                  <span className="font-mono text-[0.7rem] text-muted2">{job.period}</span>
                </div>

                <h3 className="font-sans text-base font-semibold leading-snug text-ink sm:text-lg">
                  {job.role}{' '}
                  <span className="font-normal text-muted">— {job.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                  {job.blurb}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
