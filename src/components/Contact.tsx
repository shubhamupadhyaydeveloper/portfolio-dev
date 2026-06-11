import { Section } from './Section'
import { profile } from '../content/profile'

export function Contact() {
  const links: Array<{ label: string; href: string }> = [
    { label: 'github', href: profile.contact.github },
    { label: 'linkedin', href: profile.contact.linkedin },
  ]
  if (profile.contact.twitter) {
    links.push({ label: 'twitter', href: profile.contact.twitter })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.contact.email)
      window.dispatchEvent(new CustomEvent('copytoast', { detail: 'email' }))
    } catch {
      window.location.href = `mailto:${profile.contact.email}`
    }
  }

  return (
    <Section id="contact" command="contact" title="Say hi." tone="terracotta" index="06">
      <p data-reveal className="max-w-xl font-sans text-lg leading-relaxed text-muted sm:text-xl">
        I'm slow on most platforms but quick on email. If you're building
        something interesting — or just want to talk shop — drop a line.
      </p>
      <p data-reveal className="mt-6 font-mono text-sm text-ink">
        <span className="text-muted">$ mail </span>
        <button
          type="button"
          onClick={copyEmail}
          title="Click to copy"
          className="link-underline cursor-pointer text-ink transition-colors hover:text-accent"
        >
          {profile.contact.email}
        </button>
        <span className="ml-2 text-muted2">(click to copy)</span>
      </p>
      <ul data-reveal className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-base">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="link-underline group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
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
