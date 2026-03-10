import { useState, useEffect } from 'react'
import TerminalAbout from './TerminalAbout'

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
            <div className="flex flex-col sm:flex-row w-full gap-3 sm:justify-center mt-2">
              <a 
                href="https://github.com/tuthan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-background-light dark:text-background-dark font-bold py-4 sm:px-8 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                GitHub Profile
              </a>
              <a 
                href="https://www.linkedin.com/in/hungvotrung/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass text-slate-900 dark:text-slate-100 font-bold py-4 sm:px-8 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:hung@atas.tech" 
                className="glass text-slate-900 dark:text-slate-100 font-bold py-4 sm:px-8 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>

        {/* Interactive About Terminal */}
        <section className="px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Interactive Profile</h2>
            <div className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-800 ml-4"></div>
          </div>
          <TerminalAbout />
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
                    <p className="text-primary text-sm font-semibold">05/2025 - Present</p>
                  </div>
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Current</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  Leading DevOps migration projects and pioneering research in Agentic AI and Agentic Development.
                </p>
                <a 
                  href="https://github.com/tuthan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 bg-primary hover:bg-primary/90 text-background-light dark:text-background-dark font-bold rounded-lg text-sm transition-transform active:scale-95"
                >
                  View Active Projects
                </a>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">Lead DevSecOps Engineer</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">11/2022 - 04/2025</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">Discovermarket: Architected multi-region CI/CD, FinOps, SOC 2 / ISO 27001 compliance.</p>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">Security Manager</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">12/2021 - 06/2022</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">HexTrust: Wazuh SIEM, achieving SOC 2 compliance, and Cloud Security Audits.</p>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">SecOps Engineer</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">03/2021 - 12/2021</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">UnifiedPost Group: Established SecOps team, Threat Detection, Wazuh & Suricata.</p>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">System / DevOps Engineer</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">11/2015 - 02/2021</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">Zyllem Pte Ltd: Hybrid cloud management, CI/CD automation, Kubernetes migration.</p>
              </div>
            </div>

            <div className="relative pl-12 pb-8">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">System Administrator</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">11/2012 - 11/2015</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">TPF – The Promotions Factory: Global IT Operations, AWS Cloud Migration.</p>
              </div>
            </div>

            <div className="relative pl-12">
              <div className="absolute left-[10px] top-2 size-5 flex items-center justify-center bg-slate-400 dark:bg-slate-600 rounded-full z-10 border-4 border-background-light dark:border-background-dark"></div>
              <div>
                <h3 className="text-slate-800 dark:text-slate-200 text-base font-bold">IT Technician</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">03/2012 - 11/2012</p>
                <p className="text-slate-600 dark:text-slate-500 text-xs mt-1 italic leading-snug">Digital Work Network Co., Ltd: Network Deployment, Technical Support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="px-4 py-8 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">Featured Architecture</h2>
            <span className="material-symbols-outlined text-primary">architecture</span>
          </div>
          
          <div className="space-y-6">
            {/* Agentic AI Project */}
            <div className="glass-card rounded-2xl overflow-hidden border border-primary/30 hover:glow-cyan transition-all duration-300">
              <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">neurology</span>
                    Agent-Kryptos
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">AGENTIC AI</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  Zero-knowledge secret provisioning for AI agents. HPKE end-to-end encryption ensuring no plaintext secrets ever touch the wire or the agent itself.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">HPKE</span>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">Zero-Trust</span>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">Cryptography</span>
                </div>
                <div className="border-t border-slate-200 dark:border-white/10 pt-4 flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white block text-sm">11</span> Security Layers
                  </div>
                  <a href="https://kryptos.atas.tech/" target="_blank" rel="noreferrer" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                    View Project <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            {/* DevOps Project */}
            <div className="glass-card rounded-2xl overflow-hidden border border-blue-400/30 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300">
              <div className="h-2 w-full bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500">all_inclusive</span>
                    Multi-Region CI/CD Pipeline
                  </h3>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">DEVOPS</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  Highly scalable, GitOps-driven pipeline utilizing Terraform and ArgoCD to orchestrate Kubernetes clusters across AWS and Azure, reducing deployment times drastically.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">Kubernetes</span>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">Terraform</span>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">ArgoCD</span>
                </div>
                <div className="border-t border-slate-200 dark:border-white/10 pt-4 flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white block text-sm">50%</span> Time Saved
                  </div>
                </div>
              </div>
            </div>

            {/* Cyber Security Project */}
            <div className="glass-card rounded-2xl overflow-hidden border border-accent-green/30 hover:glow-green transition-all duration-300">
              <div className="h-2 w-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-green">security</span>
                    Zero-Trust SIEM Integration
                  </h3>
                  <span className="px-3 py-1 bg-accent-green/10 text-emerald-600 dark:text-accent-green text-xs font-bold rounded-full border border-accent-green/20">CYBER SECURITY</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  Comprehensive Wazuh and Suricata implementation ensuring SOC 2 compliance. Automated threat hunting and real-time vulnerability scanning for containerized workloads.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">Wazuh</span>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">Suricata</span>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300">SOC 2</span>
                </div>
                <div className="border-t border-slate-200 dark:border-white/10 pt-4 flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white block text-sm">40%</span> Threat Detect.
                  </div>
                </div>
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
        {/* Latest Insights Section */}
        <section className="px-4 py-8 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">Latest Insights</h2>
            <span className="material-symbols-outlined text-primary">article</span>
          </div>
          <div className="glass rounded-xl overflow-hidden relative border border-slate-200 dark:border-white/10">
            <div className="h-32 bg-slate-800 relative z-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/80 to-blue-900/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
            </div>
            <div className="p-6 -mt-10 relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-lg bg-background-light dark:bg-background-dark border border-primary/30 flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-primary font-bold">lock_open</span>
                </div>
                <div>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">Case Study</p>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Zero-Knowledge Secret Provisioning</h4>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                How agent-Kryptos uses HPKE (RFC 9180) and strict privilege boundaries to deliver secrets to AI workflows without exposing them to the agents themselves.
              </p>
              <a href="https://kryptos.atas.tech/" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-bold flex items-center gap-1 hover:underline w-fit">
                Read the Docs <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
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
