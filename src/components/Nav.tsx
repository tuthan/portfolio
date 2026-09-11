import { Briefcase, FolderKanban, Home, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

const sectionIds = ['home', ...navLinks.map(l => l.id)]

interface NavProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const active = useActiveSection(sectionIds, 'home')
  const [open, setOpen] = useState(false)

  const themeButton = (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 text-slate-700 transition hover:border-primary/50 hover:text-primary-deep dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-primary"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <header className="glass sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="relative size-9 overflow-hidden rounded-full ring-2 ring-primary/70">
              <img src="/profile.jpg" alt="" width={36} height={36} className="size-full object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold tracking-tight text-slate-900 dark:text-white">{profile.name}</span>
              <span className="block font-mono text-[11px] text-slate-500 dark:text-slate-400">{profile.role}</span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navLinks.map(link => {
              const isActive = active === link.id
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-primary/10 text-primary-deep dark:text-primary'
                      : 'text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`mailto:${profile.email}`} className="btn btn-primary hidden py-2! px-4! text-sm md:inline-flex">
              <Mail size={16} aria-hidden="true" />
              Hire me
            </a>
            {themeButton}
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 text-slate-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-900/10 px-5 pb-4 pt-2 md:hidden dark:border-white/10">
            <ul className="flex flex-col">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile bottom tab bar */}
      <nav aria-label="Sections" className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="glass flex items-stretch justify-around border-t border-slate-900/10 px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 dark:border-white/10">
          {[
            { id: 'home', label: 'Home', icon: Home },
            { id: 'projects', label: 'Projects', icon: FolderKanban },
            { id: 'experience', label: 'Career', icon: Briefcase },
            { id: 'contact', label: 'Contact', icon: Mail },
          ].map(({ id, label, icon: Icon }) => {
            const isActive = active === id || (id === 'projects' && active === 'featured') || (id === 'experience' && active === 'skills')
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-semibold uppercase tracking-wider transition ${
                  isActive ? 'text-primary-deep dark:text-primary' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Icon size={20} aria-hidden="true" />
                {label}
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}
