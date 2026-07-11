import { profile } from '../content/profile'

export function Wordmark() {
  return (
    <a
      href="#top"
      className="group inline-flex items-baseline gap-[3px] font-mono text-base text-ink"
    >
      <span>{profile.wordmark}</span>
      <span aria-hidden className="mb-[1px] block h-[6px] w-[6px] rounded-full bg-accent" />
    </a>
  )
}
