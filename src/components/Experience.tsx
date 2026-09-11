import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Career"
          icon={Briefcase}
          title="Fourteen years from the server room to the agent runtime"
          description="Systems administration, then DevOps, then security leadership. Each step added a layer the next one depends on."
        />
      </Reveal>

      <ol className="relative">
        <div className="timeline-line absolute left-[15px] top-2 bottom-2 w-px sm:left-[19px]" aria-hidden="true" />
        {experience.map((item, i) => (
          <li key={`${item.company}-${item.period}`} className="relative pl-12 pb-9 last:pb-0 sm:pl-16">
            <Reveal delay={Math.min(i * 0.04, 0.2)}>
              <span
                className={`absolute left-0 top-1 flex items-center justify-center rounded-full ${
                  item.current
                    ? 'size-8 bg-primary text-ink shadow-[0_0_0_6px_rgb(37_192_244/0.18)] sm:size-10'
                    : 'left-[9px] top-2 size-3.5 border-[3px] border-paper bg-slate-400 dark:border-ink dark:bg-slate-500 sm:left-[13px]'
                }`}
                aria-hidden="true"
              >
                {item.current && <Briefcase size={16} />}
              </span>

              {item.current ? (
                <div className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{item.company}</span> · {item.period}
                      </p>
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Current
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.summary}</p>
                  {item.highlights && (
                    <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                      {item.highlights.map(h => (
                        <li key={h} className="flex gap-2 rounded-xl bg-slate-900/[0.035] p-3 text-xs leading-relaxed text-slate-700 dark:bg-white/[0.04] dark:text-slate-300">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <div className="group">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.role}</h3>
                    <p className="font-mono text-xs text-slate-500 dark:text-slate-400">{item.period}</p>
                  </div>
                  <p className="text-sm font-semibold text-primary-deep dark:text-primary">{item.company}</p>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.summary}</p>
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
