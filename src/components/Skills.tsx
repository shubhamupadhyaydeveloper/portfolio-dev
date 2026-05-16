import { Fragment } from 'react'
import { Section } from './Section'
import { profile } from '../content/profile'

const HIGHLIGHT = '#b07a2c'

export function Skills() {
  return (
    <Section id="skills" command="ls stack" title="Tools I reach for." tone="amber">
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
        {profile.skills.map((category) => (
          <div key={category.name} data-reveal>
            <h3 className="mb-3 font-mono text-sm font-semibold text-ink">
              {category.name}
            </h3>
            <p className="font-mono text-sm leading-relaxed text-muted">
              {category.items.map((item, i) => (
                <Fragment key={item.name}>
                  <span
                    style={
                      item.highlighted
                        ? { color: HIGHLIGHT, fontWeight: 500 }
                        : undefined
                    }
                  >
                    {item.name}
                  </span>
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
