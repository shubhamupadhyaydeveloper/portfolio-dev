import { Section } from './Section'
import { profile } from '../content/profile'
import { ProjectThumb } from './ProjectThumb'

export function Projects() {
  return (
    <Section id="projects" command="cat projects" title="Selected work." tone="plum">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {profile.projects.map((project, i) => (
          <li key={`${project.title}-${i}`} data-reveal>
            <a
              href={project.href || '#'}
              target={project.href && project.href !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className="group relative block h-full overflow-hidden rounded-lg border border-rule bg-bg transition-colors hover:border-accent/60"
            >
              <div className="overflow-hidden border-b border-rule bg-bg/40 px-4 pb-1 pt-4 transition-colors duration-300 group-hover:bg-accent/5">
                <ProjectThumb
                  kind={project.kind}
                  className="mx-auto h-24 w-full text-muted/40 transition-all duration-300 group-hover:scale-[1.03] group-hover:text-accent"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono text-lg font-medium leading-tight text-ink">
                    {project.title}
                  </h3>
                  <span
                    aria-hidden
                    className="mt-1 inline-block text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.blurb}
                </p>
                <div className="relative mt-5 h-6 overflow-hidden">
                  <ul className="absolute inset-x-0 top-0 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted transition-transform duration-300 group-hover:-translate-y-7">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className="absolute inset-x-0 top-7 font-mono text-xs text-accent transition-transform duration-300 group-hover:-translate-y-7">
                    $ open project →
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
