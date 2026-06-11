import { Section } from './Section'
import { profile, type Project } from '../content/profile'

const KIND_LABEL: Record<string, string> = {
  mobile: 'mobile app',
  web: 'web app',
  cli: 'cli / service',
}

export function Projects() {
  return (
    <Section id="projects" command="cat projects" title="Selected work." tone="plum" index="04">
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {profile.projects.map((project: Project, i) => (
          <li key={`${project.title}-${i}`} data-reveal>
            <a
              href={project.href || '#'}
              target={project.href && project.href !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-rule bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)]"
            >
              {/* 16:9 image area — real screenshot when available, tasteful placeholder otherwise */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-rule bg-bg">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-full w-full items-center justify-center transition-colors duration-300 group-hover:bg-accent/[0.04]"
                    style={{
                      backgroundImage:
                        'radial-gradient(rgb(var(--accent) / 0.10) 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                    }}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted2">
                      {KIND_LABEL[project.kind] ?? 'project'}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-sans text-lg font-semibold leading-snug text-ink">
                    {project.title}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-0.5 inline-block text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-rule px-2.5 py-0.5 font-mono text-[0.7rem] text-muted transition-colors group-hover:border-accent/30"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
