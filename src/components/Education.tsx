import { Section } from './Section'
import { profile } from '../content/profile'

const TONE = '#42648f'

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
      <ol className="space-y-2">
        {profile.education.map((item, i) => (
          <li
            key={`${item.school}-${i}`}
            data-reveal
            className="group grid grid-cols-1 gap-x-8 gap-y-2 rounded-lg px-4 py-6 transition-colors hover:bg-bg sm:grid-cols-[12rem_1fr]"
          >
            <span className="flex items-center gap-2.5 pt-1 font-mono text-xs text-muted">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-150"
                style={{ backgroundColor: TONE }}
              />
              {item.period}
            </span>
            <div>
              <h3 className="font-sans text-base font-semibold leading-snug text-ink sm:text-lg">
                {item.school}
              </h3>
              <p className="mt-1 text-base leading-relaxed text-muted">{item.degree}</p>
            </div>
          </li>
        ))}
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
