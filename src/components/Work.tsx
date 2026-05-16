import { Section } from './Section'
import { profile } from '../content/profile'

const TONE = '#3c5f96'

export function Work() {
  return (
    <Section id="work" command="ls work" title="A short history." tone="blue">
      <ol className="divide-y divide-rule">
        {profile.work.map((job, i) => (
          <li
            key={`${job.company}-${i}`}
            data-reveal
            className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 py-6 sm:grid-cols-[11rem_1fr]"
          >
            <span className="flex items-center gap-2 pt-1 font-mono text-xs text-muted">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: TONE }}
              />
              {job.period}
            </span>
            <div>
              <h3 className="font-mono text-base font-medium leading-snug text-ink sm:text-lg">
                {job.role}{' '}
                <span className="text-muted">— {job.company}</span>
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {job.blurb}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
