import { useState, useRef, useEffect } from 'react'
import { Terminal as TerminalIcon } from 'lucide-react'

export default function TerminalAbout() {
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    {
      command: 'whoami',
      output: (
        <div className="text-slate-300">
          <p className="mb-2">Hung Vo - DevSecOps & AI Engineer</p>
          <p className="opacity-80 leading-relaxed mb-4">
            Bridging the gap between rapid deployment, robust security, and intelligent automation. 
            Passionate about multi-cloud infrastructures, optimizing CI/CD, and pioneering Agentic 
            AI solutions using the Model Context Protocol (MCP).
          </p>
          <p className="text-primary">Type 'help' to see available commands.</p>
        </div>
      )
    }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    let output: React.ReactNode = null

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-slate-400 grid grid-cols-2 gap-2 max-w-sm">
            <span className="text-primary font-bold">whoami</span> <span>Display profile</span>
            <span className="text-primary font-bold">skills</span> <span>Show core metrics</span>
            <span className="text-primary font-bold">contact</span> <span>Get email</span>
            <span className="text-primary font-bold">clear</span> <span>Clear terminal</span>
          </div>
        )
        break
      case 'whoami':
        output = (
          <div className="text-slate-300">
            <p>Hung Vo - Architecting Secure Futures.</p>
          </div>
        )
        break
      case 'skills':
        output = (
          <div className="text-slate-300 grid grid-cols-2 gap-4 mt-2 mb-2">
            <div><span className="text-[var(--neon-accent)] font-bold">9+</span> Years Exp</div>
            <div><span className="text-[var(--neon-accent)] font-bold">3</span> Clouds</div>
            <div><span className="text-[var(--neon-accent)] font-bold">SOC 2</span> Expert</div>
            <div><span className="text-[var(--neon-accent)] font-bold">100%</span> Automation</div>
          </div>
        )
        break
      case 'contact':
        output = <div className="text-slate-300">Email: <a href="mailto:hung@atas.tech" className="text-primary hover:underline">hung@atas.tech</a></div>
        break
      case 'clear':
        setHistory([])
        setInput('')
        return
      default:
        output = <div className="text-red-400">Command not found: {cmd}. Type 'help' for options.</div>
    }

    setHistory(prev => [...prev, { command: cmd, output }])
    setInput('')
  }

  return (
    <div className="glass rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl transition-all">
      <div className="bg-slate-900/80 border-b border-slate-700/50 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <TerminalIcon size={14} /> hung-vo@portfolio: ~
        </div>
      </div>
      
      <div className="p-6 font-mono text-sm h-[300px] overflow-y-auto bg-slate-950/80" onClick={() => document.getElementById('term-input')?.focus()}>
        {history.map((item, idx) => (
          <div key={idx} className="mb-4">
            <div className="flex gap-2 text-slate-300 mb-1">
              <span className="text-green-400">guest@atas.tech</span>
              <span className="text-slate-500">~</span>
              <span className="text-slate-300">$ {item.command}</span>
            </div>
            <div className="pl-2 border-l border-slate-700/50 ml-1">
              {item.output}
            </div>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex gap-2 text-slate-300">
          <span className="text-green-400 shrink-0">guest@atas.tech</span>
          <span className="text-slate-500 shrink-0">~</span>
          <span className="shrink-0">$</span>
          <input 
            id="term-input"
            type="text" 
            value={input}
            onChange={e => setInput(e.target.value)}
            className="bg-transparent outline-none flex-1 text-slate-300 w-full"
            autoComplete="off"
            autoFocus
          />
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
