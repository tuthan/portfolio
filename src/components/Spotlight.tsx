import type { CSSProperties } from 'react'
import { ArrowDown, ArrowRight, Check, Sparkles } from 'lucide-react'
import { spotlight } from '../data/portfolio'
import { LinkIcon } from './LinkIcon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Spotlight() {
  return (
    <section id="featured" className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <Reveal>
        <SectionHeading
          eyebrow={spotlight.eyebrow}
          icon={Sparkles}
          title={`${spotlight.name}: ${spotlight.subtitle}`}
          description={spotlight.tagline}
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="card relative overflow-hidden">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-16 size-64 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div className="min-w-0">
              <h3 className="eyebrow text-rose-500 dark:text-rose-400">The problem</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">{spotlight.problem}</p>
              <h3 className="eyebrow mt-8 text-emerald-600 dark:text-emerald-400">The approach</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">{spotlight.solution}</p>

              <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                {spotlight.principles.map(p => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture flow */}
            <div className="flex min-w-0 flex-col justify-center">
              <FlowDiagram />
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {spotlight.pillars.map((pillar, i) => (
          <Reveal key={pillar.name} delay={0.08 + i * 0.06}>
            <article
              style={{ '--accent': pillar.accent } as CSSProperties}
              className="card accent-glow flex h-full flex-col overflow-hidden"
            >
              <div className="accent-bar h-1 w-full" aria-hidden="true" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="accent-icon inline-flex size-10 items-center justify-center rounded-xl">
                      <pillar.icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="eyebrow accent-text text-[10px]!">{pillar.kind}</p>
                      <h3 className="font-mono text-base font-bold text-slate-900 dark:text-white">{pillar.name}</h3>
                    </div>
                  </div>
                  <span className="chip shrink-0">{pillar.version}</span>
                </div>
                <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-400">{pillar.stack}</p>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {pillar.points.map(pt => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      <span className="accent-text mt-2 size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-900/8 pt-4 dark:border-white/8">
                  {pillar.links.map(link => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="link text-sm">
                      <LinkIcon kind={link.kind} />
                      {link.label}
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FlowDiagram() {
  const box = 'rounded-xl border px-3 py-2 text-center font-mono text-xs font-medium leading-snug'
  const neutral = `${box} border-slate-900/10 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200`
  const label = 'mb-1 text-center font-mono text-[10px] uppercase tracking-widest text-slate-500'
  return (
    <figure className="min-w-0 rounded-2xl border border-slate-900/8 bg-paper-3/60 p-4 dark:border-white/8 dark:bg-ink/60 sm:p-5">
      <figcaption className="eyebrow mb-4 text-slate-500 dark:text-slate-400">How it fits together</figcaption>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center sm:gap-2 lg:gap-3">
        <div className="flex min-w-0 flex-col gap-2">
          <p className={label}>Review surfaces</p>
          {spotlight.surfaces.map(s => (
            <div key={s} className={neutral}>{s}</div>
          ))}
        </div>
        <Arrow />
        <div className="flex min-w-0 flex-col items-center gap-2">
          <p className={label}>Engine</p>
          <div className={`${box} w-full border-primary/40 bg-primary/10 py-4 text-primary-deep dark:text-primary`}>
            omasafe-cli
            <span className="mt-1 block text-[10px] font-normal text-slate-500 dark:text-slate-400">Rust · unprivileged</span>
          </div>
          <div className={`${box} w-full border-dashed border-slate-900/15 text-slate-500 dark:border-white/15 dark:text-slate-400`}>
            versioned reports
            <span className="block text-[10px]">identity · evidence · coverage</span>
          </div>
        </div>
        <Arrow />
        <div className="flex min-w-0 flex-col gap-2">
          <p className={label}>Thin clients</p>
          {spotlight.outputs.map(o => (
            <div key={o} className={neutral}>{o}</div>
          ))}
        </div>
      </div>
    </figure>
  )
}

function Arrow() {
  return (
    <span className="flex items-center justify-center text-slate-400 dark:text-slate-500" aria-hidden="true">
      <ArrowDown size={16} className="sm:hidden" />
      <ArrowRight size={16} className="hidden sm:block" />
    </span>
  )
}
