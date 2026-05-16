import { Section } from './Section'
import { profile } from '../content/profile'

export function Contact() {
  const links: Array<{ label: string; href: string }> = [
    { label: 'email', href: `mailto:${profile.contact.email}` },
    { label: 'github', href: profile.contact.github },
    { label: 'linkedin', href: profile.contact.linkedin },
  ]
  if (profile.contact.twitter) {
    links.push({ label: 'twitter', href: profile.contact.twitter })
  }

  return (
    <Section id="contact" command="contact" title="Say hi." tone="terracotta">
      <p data-reveal className="max-w-xl text-lg leading-relaxed text-muted">
        I'm slow on most platforms but quick on email. If you're building
        something interesting — or just want to talk shop — drop a line.
      </p>
      <p data-reveal className="mt-3 font-mono text-sm text-ink">
        <span className="text-muted">$ mail </span>
        <a
          href={`mailto:${profile.contact.email}`}
          className="underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent hover:text-accent"
        >
          {profile.contact.email}
        </a>
      </p>
      <ul data-reveal className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-base">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 text-ink underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
            >
              {link.label}
              <span
                aria-hidden
                className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p data-reveal className="mt-16 font-mono text-xs text-muted">
        // © {new Date().getFullYear()} {profile.name.toLowerCase()} · built with care
      </p>
    </Section>
  )
}
