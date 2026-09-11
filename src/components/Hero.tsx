import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ShieldCheck, Star, Terminal } from 'lucide-react'
import { profile, stats } from '../data/portfolio'

export function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
  })

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="dots pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-24">
        <div className="relative z-10">
          <motion.div {...fade(0)} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary-deep dark:text-primary">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
            {profile.availability}
          </motion.div>

          <motion.h1 {...fade(0.05)} className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {profile.name}
            <span className="mt-3 block text-2xl font-semibold text-slate-600 dark:text-slate-300 sm:text-3xl lg:text-4xl">
              <span className="text-gradient">{profile.role}</span>
            </span>
          </motion.h1>

          <motion.p {...fade(0.1)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {profile.headline}
          </motion.p>
          <motion.p {...fade(0.15)} className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.summary}
          </motion.p>

          <motion.div {...fade(0.2)} className="mt-8 flex flex-wrap gap-3">
            <a href="#featured" className="btn btn-primary">
              See featured work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
          </motion.div>
        </div>

        {/* Portrait card */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-emerald-400/20 blur-2xl" aria-hidden="true" />
          <div className="card relative overflow-hidden rounded-[1.75rem]! p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <img
                src="/profile.jpg"
                alt={`Portrait of ${profile.name}`}
                width={1000}
                height={1000}
                fetchPriority="high"
                className="size-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 text-white">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">Based at</p>
                  <a href={profile.lab.url} target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline">
                    {profile.lab.name}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[11px] backdrop-blur">
                  <ShieldCheck size={12} aria-hidden="true" />
                  DevSecOps
                </div>
              </div>
            </div>
          </div>

          {/* Floating signal chips */}
          <div className="pointer-events-none absolute -left-4 top-10 hidden select-none sm:block lg:-left-10">
            <div className="card flex items-center gap-2 rounded-xl! px-3 py-2 font-mono text-xs">
              <Terminal size={14} className="text-amber-500" aria-hidden="true" />
              <span className="text-slate-700 dark:text-slate-200">OmaSafe CLI</span>
              <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">v0.3.1</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-3 bottom-24 hidden select-none sm:block lg:-right-8">
            <div className="card flex items-center gap-2 rounded-xl! px-3 py-2 font-mono text-xs">
              <Star size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
              <span className="text-slate-700 dark:text-slate-200">Dropdown Terminal</span>
              <span className="text-slate-500 dark:text-slate-400">10 stars</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <motion.dl
          {...fade(0.3)}
          className="card grid grid-cols-2 divide-y divide-slate-900/8 lg:grid-cols-4 lg:divide-x lg:divide-y-0 dark:divide-white/8"
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col px-6 py-5 ${i % 2 === 1 ? 'border-l border-slate-900/8 lg:border-l-0 dark:border-white/8' : ''}`}>
              <dt className="order-2 mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">{s.label}</dt>
              <dd className={`order-1 font-bold tracking-tight text-slate-900 dark:text-white ${s.value.length > 6 ? 'text-lg sm:text-xl lg:text-2xl' : 'text-2xl sm:text-3xl'}`}>{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
