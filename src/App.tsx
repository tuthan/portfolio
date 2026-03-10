import { useState, useEffect } from 'react'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen grid-bg relative transition-colors duration-300">
      {/* Top Navigation Bar from Hero */}
      <nav className="sticky top-0 z-50 glass border-b border-slate-200/10 px-4 py-3 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full border-2 border-primary overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              alt="Hung Vo" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZA0x2Yv_TQACws65s5kFdqHOkoXdKXJZrozTtLbJYxpaQmlP_wcwC4iq3FAwsOFcyUzcUSbPhmDHOOg40YUsPOuG-Z9lKwpLwllPH4s6rPjScr5leNWgk0X-Wcu5gg3ApAw7PLMNfQ09Lq-i1S4xqwhB3sYqOeWrxeTdEjdToN5g3GrErhzAldEStIU0ds4mDfnyKKhD6VE-217KiVR9_-eOryOi4x7MP0hc_f3Vphq1vOephhPp6TGoLsJBnnOisM1AUVgpkZZQ"
            />
          </div>
          <span className="font-bold text-lg tracking-tight">Hung Vo</span>
        </div>
        <button className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800/50 text-primary" onClick={toggleTheme}>
          <span className="material-symbols-outlined">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
        </button>
      </nav>

      <main className="relative pb-24 md:max-w-4xl md:mx-auto">
        {/* Hero Section */}
        <section className="px-4 pt-12 pb-8">
          <div className="glass rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 size-48 bg-primary/20 blur-[80px] rounded-full"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              AVAILABLE FOR PROJECTS
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight mb-4 text-slate-900 dark:text-white">
              Hung Vo <span className="text-primary block mt-2">DevSecOps &amp; AI Engineer</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
              Architecting secure, autonomous, and scalable ecosystems through Agentic AI and Cloud Security.
            </p>
            <div className="flex flex-col sm:flex-row w-full gap-3 sm:justify-center">
              <button className="bg-primary hover:bg-primary/90 text-background-light dark:text-background-dark font-bold py-4 sm:px-8 rounded-xl transition-all">
                View Projects
              </button>
              <button className="glass text-slate-900 dark:text-slate-100 font-bold py-4 sm:px-8 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About Me</h2>
            <div className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-800 ml-4"></div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass rounded-xl p-6 glow-border transition-all border border-slate-200 dark:border-white/5">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-3xl">shield_lock</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud & Security</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Expertise in building hardened infrastructure with AWS/Azure and automated DevSecOps pipelines that integrate security into the heart of the SDLC.
              </p>
            </div>
            <div className="glass rounded-xl p-6 glow-border transition-all border border-slate-200 dark:border-white/5">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Agentic AI</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Developing autonomous agents that leverage LLMs to automate complex workflows, enhancing operational efficiency and intelligent decision-making.
              </p>
            </div>
            <div className="glass rounded-xl p-6 glow-border transition-all border border-slate-200 dark:border-white/5">
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Microservices</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Designing distributed systems with Kubernetes and Service Meshes to ensure high availability, resilience, and horizontal scalability.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section className="px-4 py-8 mt-6">
          <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight mb-6">Experience Timeline</h2>
          <div className="space-y-0 relative">
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-300 dark:bg-slate-700"></div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-1 size-10 flex items-center justify-center bg-primary rounded-full z-10 glow-cyan">
                <span className="material-symbols-outlined text-background-light dark:text-background-dark font-bold">smart_toy</span>
              </div>
              <div className="glass-card rounded-xl p-5 border-l-4 border-primary shadow-xl opacity-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Freelance AI & DevOps</h3>
                    <p className="text-primary text-sm font-semibold">2023 - Present</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Current</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  Architecting agentic AI systems and secure cloud infrastructure using MCPs and automated CI/CD pipelines.
                </p>
                <button className="w-full py-2 bg-primary hover:bg-primary/90 text-background-light dark:text-background-dark font-bold rounded-lg text-sm transition-transform active:scale-95">
                  View Active Projects
                </button>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">Lead DevSecOps Engineer</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">2022 - 2025</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">Discovermarket: Focus on Azure CI/CD, FinOps, SOC 2 / ISO 27001 compliance.</p>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">Security Manager & SecOps</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">2021 - 2022</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">HexTrust & UnifiedPost Group: Wazuh SIEM, Threat Detection.</p>
              </div>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">System / DevOps Engineer</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">2015 - 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Arsenal Section */}
        <section className="px-4 mt-12 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">Technical Arsenal</h2>
            <span className="material-symbols-outlined text-primary">shield</span>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Agentic AI & LLMs
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card p-4 rounded-lg border-t-2 border-primary/50 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2">neurology</span>
                <span className="text-sm font-semibold">Agentic Dev</span>
              </div>
              <div className="glass-card p-4 rounded-lg border-t-2 border-primary/50 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2">hub</span>
                <span className="text-sm font-semibold">MCPs</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-green mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
              Cyber Security
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-card p-4 rounded-lg border-t-2 border-accent-green/50 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-accent-green mb-2">policy</span>
                <span className="text-sm font-semibold">ISO 27001 / SOC 2</span>
              </div>
              <div className="glass-card p-4 rounded-lg border-t-2 border-accent-green/50 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-accent-green mb-2">radar</span>
                <span className="text-sm font-semibold">Threat Detection</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              Cloud Infrastructure
            </h3>
            <div className="grid grid-cols-3 gap-2 text-slate-700 dark:text-slate-300">
              <div className="glass-card py-3 px-1 rounded-lg border border-slate-300 dark:border-slate-700 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold">KUBERNETES</span>
              </div>
              <div className="glass-card py-3 px-1 rounded-lg border border-slate-300 dark:border-slate-700 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold">TERRAFORM</span>
              </div>
              <div className="glass-card py-3 px-1 rounded-lg border border-slate-300 dark:border-slate-700 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold">AWS/AZURE</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="flex gap-2 border-t border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg px-4 pb-6 pt-3">
          <a className="flex flex-1 flex-col items-center justify-center gap-1 text-primary" href="#">
            <span className="material-symbols-outlined">home</span>
            <p className="text-[10px] font-medium uppercase tracking-wider">Home</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400" href="#">
            <span className="material-symbols-outlined">work</span>
            <p className="text-[10px] font-medium uppercase tracking-wider">Work</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400" href="#">
            <span className="material-symbols-outlined">shield</span>
            <p className="text-[10px] font-medium uppercase tracking-wider">Arsenal</p>
          </a>
          <a className="flex flex-1 flex-col items-center justify-center gap-1 text-slate-500 dark:text-slate-400" href="#">
            <span className="material-symbols-outlined">mail</span>
            <p className="text-[10px] font-medium uppercase tracking-wider">Contact</p>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default App
