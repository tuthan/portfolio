import { Terminal as TerminalIcon } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from 'react'
import { experience, profile, projects, skillGroups, stats } from './data/portfolio'

interface Entry {
  command: string
  output: ReactNode
}

const PROMPT_USER = 'guest'
const PROMPT_HOST = 'atas.tech'

const commands: Record<string, string> = {
  help: 'List available commands',
  whoami: 'Short profile',
  projects: 'Featured projects and links',
  skills: 'Capabilities by area',
  experience: 'Career timeline',
  contact: 'How to reach me',
  open: 'open <project-id>  Open a project in a new tab',
  clear: 'Clear the screen',
}

function Whoami() {
  return (
    <div className="space-y-2 text-slate-300">
      <p>
        <span className="font-bold text-white">{profile.name}</span> · {profile.role}
      </p>
      <p className="max-w-prose leading-relaxed opacity-90">{profile.summary}</p>
      <dl className="grid max-w-md grid-cols-2 gap-x-6 gap-y-1 pt-1">
        {stats.map(s => (
          <div key={s.label} className="contents">
            <dt className="text-slate-500">{s.label}</dt>
            <dd className="text-primary">{s.value}</dd>
          </div>
        ))}
      </dl>
      <p className="text-slate-500">
        Type <span className="text-primary">help</span> to see available commands.
      </p>
    </div>
  )
}

function Help() {
  return (
    <div className="grid max-w-lg grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-slate-400">
      {Object.entries(commands).map(([name, desc]) => (
        <div key={name} className="contents">
          <span className="font-bold text-primary">{name}</span>
          <span>{desc}</span>
        </div>
      ))}
    </div>
  )
}

function ProjectList() {
  return (
    <ul className="space-y-1.5 text-slate-300">
      {projects.map(p => (
        <li key={p.id} className="grid grid-cols-[minmax(0,10rem)_1fr] gap-x-4 sm:grid-cols-[10rem_1fr]">
          <span className="truncate text-emerald-400">{p.id}</span>
          <span>
            {p.name}
            {p.version && <span className="text-slate-500"> {p.version}</span>}
            <span className="text-slate-500"> — </span>
            {p.tagline}
          </span>
        </li>
      ))}
      <li className="pt-1 text-slate-500">
        Run <span className="text-primary">open &lt;project-id&gt;</span> to visit one.
      </li>
    </ul>
  )
}

function SkillList() {
  return (
    <div className="space-y-2 text-slate-300">
      {skillGroups.map(g => (
        <div key={g.title}>
          <p className="font-bold text-white">{g.title}</p>
          <p className="text-slate-400">{g.items.join(' · ')}</p>
        </div>
      ))}
    </div>
  )
}

function ExperienceList() {
  return (
    <ul className="space-y-1 text-slate-300">
      {experience.map(e => (
        <li key={`${e.company}-${e.period}`} className="grid gap-x-4 sm:grid-cols-[11rem_1fr]">
          <span className="text-slate-500">{e.period}</span>
          <span>
            <span className="font-semibold text-white">{e.role}</span>
            <span className="text-slate-500"> @ </span>
            <span className={e.current ? 'text-emerald-400' : ''}>{e.company}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

function ContactInfo() {
  return (
    <div className="space-y-1 text-slate-300">
      <div>
        email: <a href={`mailto:${profile.email}`} className="text-primary hover:underline">{profile.email}</a>
      </div>
      <div>
        linkedin: <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">/in/{profile.linkedinHandle}</a>
      </div>
      <div>
        github: <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@{profile.githubHandle}</a>
      </div>
    </div>
  )
}

export default function TerminalAbout() {
  const [history, setHistory] = useState<Entry[]>([{ command: 'whoami', output: <Whoami /> }])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [cursor, setCursor] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [history])

  const run = (raw: string) => {
    const [name, ...args] = raw.trim().split(/\s+/)
    const cmd = name.toLowerCase()
    let output: ReactNode

    switch (cmd) {
      case 'help':
        output = <Help />
        break
      case 'whoami':
        output = <Whoami />
        break
      case 'projects':
      case 'ls':
        output = <ProjectList />
        break
      case 'skills':
        output = <SkillList />
        break
      case 'experience':
      case 'career':
        output = <ExperienceList />
        break
      case 'contact':
        output = <ContactInfo />
        break
      case 'open': {
        const target = projects.find(p => p.id === args[0]?.toLowerCase())
        const href = target?.links[0]?.href
        if (!target) {
          output = <span className="text-red-400">open: unknown project &quot;{args[0] ?? ''}&quot;. Try &quot;projects&quot;.</span>
        } else if (!href) {
          output = <span className="text-amber-400">{target.name} is client work with no public link.</span>
        } else {
          window.open(href, '_blank', 'noopener,noreferrer')
          output = (
            <span className="text-slate-300">
              Opening <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{href}</a>
            </span>
          )
        }
        break
      }
      case 'clear':
        setHistory([])
        return
      default:
        output = (
          <span className="text-red-400">
            command not found: {cmd}. Type <span className="text-primary">help</span> for options.
          </span>
        )
    }
    setHistory(prev => [...prev, { command: raw.trim(), output }])
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const value = input.trim()
    if (!value) return
    setCmdHistory(prev => [value, ...prev].slice(0, 50))
    setCursor(-1)
    setInput('')
    run(value)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(cursor + 1, cmdHistory.length - 1)
      if (next >= 0) {
        setCursor(next)
        setInput(cmdHistory[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = cursor - 1
      setCursor(next)
      setInput(next >= 0 ? cmdHistory[next] : '')
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const match = Object.keys(commands).find(c => c.startsWith(input.toLowerCase()) && input.length > 0)
      if (match) setInput(match)
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1418] shadow-[0_30px_80px_-40px_rgb(0_0_0/0.8)]">
      <div className="flex items-center gap-3 border-b border-white/8 bg-white/[0.03] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <TerminalIcon size={13} aria-hidden="true" />
          {PROMPT_USER}@{PROMPT_HOST}: ~
        </div>
        <span className="ml-auto hidden font-mono text-[10px] text-slate-500 sm:inline">Tab to complete · ↑↓ history</span>
      </div>

      <div
        ref={scrollRef}
        className="scroll-thin h-[340px] overflow-y-auto p-5 font-mono text-[13px] leading-relaxed sm:h-[380px]"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex flex-wrap gap-x-2 text-slate-300">
              <Prompt />
              <span>{item.command}</span>
            </div>
            <div className="mt-1.5 ml-1 border-l border-white/10 pl-3">{item.output}</div>
          </div>
        ))}

        <form onSubmit={onSubmit} className="flex flex-wrap items-center gap-x-2 text-slate-300">
          <Prompt />
          <label htmlFor="term-input" className="sr-only">Terminal command</label>
          <input
            ref={inputRef}
            id="term-input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="min-w-[8rem] flex-1 bg-transparent text-slate-100 caret-primary outline-none placeholder:text-slate-600"
            placeholder="type a command…"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  )
}

function Prompt() {
  return (
    <span className="shrink-0">
      <span className="text-emerald-400">{PROMPT_USER}@{PROMPT_HOST}</span>
      <span className="text-slate-500"> ~ </span>
      <span className="text-primary">❯</span>
    </span>
  )
}
