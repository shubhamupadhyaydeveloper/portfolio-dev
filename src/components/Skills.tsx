import { Fragment } from 'react'
import { Section } from './Section'
import { profile } from '../content/profile'

export function Skills() {
  return (
    <Section id="skills" command="ls stack" title="Tools I reach for." tone="amber" surface index="03">
      <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
        {profile.skills.map((category) => (
          <div key={category.name} data-reveal>
            <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {category.name}
            </h3>
            <p className="font-mono text-sm leading-[2] text-muted">
              {category.items.map((item, i) => (
                <Fragment key={item.name}>
                  {item.highlighted ? (
                    <span className="marker text-ink">{item.name}</span>
                  ) : (
                    <span>{item.name}</span>
                  )}
                  {i < category.items.length - 1 ? ', ' : ''}
                </Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
