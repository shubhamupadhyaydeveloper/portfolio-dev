import { Section } from './Section'
import { profile } from '../content/profile'

const TONE = '#42648f'

export function Work() {
  return (
    <Section id="work" command="ls work" title="A short history." tone="blue" index="02">
      <ol className="space-y-2">
        {profile.work.map((job, i) => (
          <li
            key={`${job.company}-${i}`}
            data-reveal
            className="group relative grid grid-cols-1 gap-x-8 gap-y-2 rounded-lg px-4 py-6 transition-colors hover:bg-surface sm:grid-cols-[12rem_1fr]"
          >
            <span
              aria-hidden
              className="absolute left-0 top-3 bottom-3 w-[2px] origin-top scale-y-0 rounded-full transition-transform duration-300 group-hover:scale-y-100"
              style={{ backgroundColor: TONE }}
            />
            <span className="flex items-center gap-2.5 pt-1 font-mono text-xs text-muted">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-150"
                style={{ backgroundColor: TONE }}
              />
              {job.period}
            </span>
            <div>
              <h3 className="font-sans text-base font-semibold leading-snug text-ink sm:text-lg">
                {job.role} <span className="font-normal text-muted">— {job.company}</span>
              </h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                {job.blurb}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
