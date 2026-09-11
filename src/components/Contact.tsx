import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-28 pt-14 sm:px-8 md:pb-14 lg:pt-20">
      <Reveal>
        <div className="card relative overflow-hidden p-8 text-center sm:p-12">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-16 size-72 rounded-full bg-emerald-400/15 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow mb-3 flex items-center justify-center gap-2 text-primary-deep dark:text-primary">
              <MessageSquare size={14} aria-hidden="true" />
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Let&apos;s build something that holds up under audit.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Open to DevSecOps and platform roles, security reviews of agentic systems, and collaboration on open-source trust tooling.
              The fastest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-900/8 pt-8 text-sm text-slate-500 sm:flex-row dark:border-white/8 dark:text-slate-400">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind CSS.</p>
        <div className="flex items-center gap-5">
          <a href={profile.lab.url} target="_blank" rel="noopener noreferrer" className="link text-sm">
            {profile.lab.name}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.source} target="_blank" rel="noopener noreferrer" className="link text-sm">
            Source
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </section>
  )
}
