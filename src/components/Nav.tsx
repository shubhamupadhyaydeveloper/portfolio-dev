import { Wordmark } from './Wordmark'

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#work', label: 'work' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md">
      <div className="border-b border-rule/70 bg-bg/80">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-10">
          <Wordmark />
          <ul className="hidden gap-6 text-sm text-muted sm:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
