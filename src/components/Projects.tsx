import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Copy, Eye, FolderKanban, Heart, Star, type LucideIcon } from 'lucide-react'
import { useMemo, useState, type CSSProperties } from 'react'
import { categories, projects, type Category, type Project } from '../data/portfolio'
import { pluginStats, pluginStatsUpdatedAt } from '../data/pluginStats'
import { LinkIcon } from './LinkIcon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Filter = 'All' | Category

const EASE = [0.22, 1, 0.36, 1] as const
const SPRING = { type: 'spring', stiffness: 320, damping: 34, mass: 0.8 } as const

const counts = new Map<Filter, number>(
  categories.map(c => [c, c === 'All' ? projects.length : projects.filter(p => p.categories.includes(c as Category)).length]),
)

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All')
  const reduce = useReducedMotion()
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter(p => p.categories.includes(filter))),
    [filter],
  )

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Selected projects"
          icon={FolderKanban}
          title="Open source and client work"
          description="Security tooling for AI agents, plugins for the Omarchy Linux desktop, and the platform work that came before it."
          aside={
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <div
                role="group"
                aria-label="Filter projects"
                className="flex flex-wrap gap-1 rounded-full border border-slate-900/10 bg-white/60 p-1 backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                {categories.map(c => {
                  const selected = c === filter
                  return (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setFilter(c)}
                      className={`relative rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold transition-colors duration-200 ${
                        selected
                          ? 'text-primary-deep dark:text-primary'
                          : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                      }`}
                    >
                      {selected &&
                        (reduce ? (
                          <span className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/40" aria-hidden="true" />
                        ) : (
                          <motion.span
                            layoutId="project-filter-pill"
                            className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/40"
                            transition={SPRING}
                            aria-hidden="true"
                          />
                        ))}
                      <span className="relative flex items-center gap-1.5">
                        {c}
                        <span className={selected ? 'opacity-70' : 'opacity-45'}>{counts.get(c)}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
              <p aria-live="polite" className="px-1 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                {visible.length} of {projects.length} shown
              </p>
            </div>
          }
        />
      </Reveal>

      <motion.ul layout={!reduce} transition={SPRING} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.ul>

      {visible.some(p => p.marketplaceId) && (
        <p className="mt-6 font-mono text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          Marketplace figures from{' '}
          <a href="https://plugins.omarchy.org/" target="_blank" rel="noopener noreferrer" className="link text-[11px]">
            plugins.omarchy.org
          </a>
          , as of {formatSnapshotDate(pluginStatsUpdatedAt)}.
        </p>
      )}
    </section>
  )
}

function formatSnapshotDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`)
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
}

function MarketplaceStats({ id }: { id: string }) {
  const s = pluginStats[id]
  if (!s) return null
  return (
    <div className="mt-4 flex items-center gap-x-4 gap-y-1 rounded-xl bg-slate-900/4 px-3 py-2 dark:bg-white/5">
      <Metric icon={Eye} value={s.views} one="marketplace view" many="marketplace views" />
      <Metric icon={Copy} value={s.copies} one="install command copied" many="install commands copied" />
      <Metric icon={Heart} value={s.hearts} one="heart" many="hearts" tone="text-rose-400 fill-rose-400" />
      <span className="ml-auto font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
        Marketplace
      </span>
    </div>
  )
}

function Metric({
  icon: Icon,
  value,
  one,
  many,
  tone,
}: {
  icon: LucideIcon
  value: number
  one: string
  many: string
  tone?: string
}) {
  const formatted = value.toLocaleString('en-US')
  const label = value === 1 ? one : many
  return (
    <span className="flex items-center gap-1.5 font-mono text-xs text-slate-600 dark:text-slate-300" title={`${formatted} ${label}`}>
      <Icon size={13} className={tone ?? 'text-slate-400 dark:text-slate-500'} aria-hidden="true" />
      {formatted}
      <span className="sr-only">{label}</span>
    </span>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion()
  const Icon = project.icon
  return (
    <motion.li
      layout={!reduce}
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.97 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: Math.min(index * 0.055, 0.35) },
      }}
      exit={reduce ? undefined : { opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.22, ease: 'easeIn' } }}
      transition={{ layout: SPRING }}
      style={{ '--accent': project.accent } as CSSProperties}
      className="card accent-glow flex h-full flex-col overflow-hidden"
    >
      <div className="accent-bar h-1 w-full" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="accent-icon inline-flex size-11 shrink-0 items-center justify-center rounded-xl">
            <Icon size={22} aria-hidden="true" />
          </span>
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            {project.stars !== undefined && (
              <span className="chip gap-1!">
                <Star size={11} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                {project.stars}
              </span>
            )}
            {project.version && <span className="chip">{project.version}</span>}
            <span className="chip">{project.year}</span>
          </div>
        </div>

        <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900 dark:text-white">{project.name}</h3>
        <p className="accent-text mt-0.5 text-sm font-semibold">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map(tag => (
            <li key={tag} className="chip">{tag}</li>
          ))}
        </ul>

        {project.marketplaceId && <MarketplaceStats id={project.marketplaceId} />}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-900/8 pt-4 dark:border-white/8">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map(c => (
              <span key={c} className="accent-soft rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider">
                {c}
              </span>
            ))}
          </div>
          {project.links.length > 0 ? (
            <div className="flex shrink-0 gap-3">
              {project.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-sm"
                  aria-label={`${project.name} on ${link.label}`}
                >
                  <LinkIcon kind={link.kind} />
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            project.note && <span className="min-w-0 text-right font-mono text-[11px] leading-snug text-slate-500 dark:text-slate-400">{project.note}</span>
          )}
        </div>
      </div>
    </motion.li>
  )
}
