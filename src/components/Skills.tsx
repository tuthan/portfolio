import type { CSSProperties } from 'react'
import { Cpu } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          icon={Cpu}
          title="What I bring to a team"
          description="Grouped by where they show up in the work. Everything listed has shipped in production or in a public release."
        />
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div style={{ '--accent': group.accent } as CSSProperties} className="card accent-glow h-full p-6">
              <div className="flex items-center gap-3">
                <span className="accent-icon inline-flex size-10 items-center justify-center rounded-xl">
                  <group.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map(item => (
                  <li key={item} className="chip text-[13px]! py-1.5! px-3!">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
