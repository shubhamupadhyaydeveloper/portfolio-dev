import { Section } from './Section'
import { profile } from '../content/profile'

export function Education() {
  return (
    <Section
      id="education"
      command="ls education"
      title="Where I learned."
      tone="blue"
      surface
      index="05"
    >
      <ol>
        {profile.education.map((item, i) => {
          const current = /present/i.test(item.period)
          const last = i === profile.education.length - 1
          return (
            <li key={`${item.school}-${i}`} data-reveal className="group flex gap-4 sm:gap-5">
              <div className="flex w-3 flex-none flex-col items-center pt-1.5">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  {current ? (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  ) : null}
                  <span
                    className={`relative inline-flex h-3 w-3 rounded-full border-2 bg-surface transition-colors ${
                      current ? 'border-accent bg-accent' : 'border-rule group-hover:border-accent/60'
                    }`}
                  />
                </span>
                {last ? null : <span aria-hidden className="mt-1 w-px flex-1 bg-rule" />}
              </div>

              <div className={`min-w-0 flex-1 ${last ? '' : 'pb-10'}`}>
                <div className="mb-1.5">
                  <span className="font-mono text-[0.7rem] text-muted2">{item.period}</span>
                </div>
                <h3 className="font-sans text-base font-semibold leading-snug text-ink sm:text-lg">
                  {item.school}
                </h3>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{item.degree}</p>
              </div>
            </li>
          )
        })}
      </ol>

      {profile.certifications.length ? (
        <div data-reveal className="mt-10 px-4">
          <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Certifications
          </h3>
          <ul className="flex flex-wrap gap-2">
            {profile.certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-rule bg-bg px-3 py-1 font-mono text-[0.8rem] text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-ink"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  )
}
