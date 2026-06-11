import { Fragment, type ReactNode } from 'react'
import { Section } from './Section'
import { profile } from '../content/profile'

// Words worth anchoring the eye on as it reads the bio.
const KEYWORDS = [
  'React Native',
  'React',
  'IIT Patna',
  'mProfit',
  'FlokkApp',
  'Heliverse',
  'AI',
  'shipping',
  'mobile',
]

function highlight(text: string): ReactNode {
  const pattern = new RegExp(`(${KEYWORDS.join('|')})`, 'g')
  const parts = text.split(pattern)
  return parts.map((part, i) =>
    KEYWORDS.includes(part) ? (
      <span key={i} className="kw">
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

export function About() {
  return (
    <Section id="about" command="ls about" title="A little about me." tone="sage" surface index="01">
      <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink sm:text-xl">
        {profile.about.map((paragraph, i) => (
          <p key={i} data-reveal>
            {highlight(paragraph)}
          </p>
        ))}
      </div>
    </Section>
  )
}
