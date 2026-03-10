import { useState, useEffect } from 'react'
import { Moon, Sun, Github, Linkedin, Mail, ChevronDown, Shield, Cpu, Cloud, Terminal, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from './lib/utils'

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

  const experiences = [
    {
      period: "05/2025 - Present",
      role: "Freelance AI & DevOps Engineer",
      company: "Self-Employed",
      description: "Leading DevOps migration projects and pioneering research in Agentic AI and Agentic Development.",
      highlight: true
    },
    {
      period: "11/2022 - 04/2025",
      role: "Lead DevSecOps Engineer",
      company: "Discovermarket",
      description: "Architected multi-region CI/CD utilizing Azure, Kubernetes, Terraform. Cut cloud expenses by 50% via FinOps. Led SOC 2 / ISO 27001 compliance.",
      highlight: false
    },
    {
      period: "12/2021 - 06/2022",
      role: "Security Manager",
      company: "HexTrust",
      description: "Spearheaded security initiatives achieving SOC 2 compliance. Deployed Wazuh SIEM and strengthened K8s security posture.",
      highlight: false
    },
    {
      period: "03/2021 - 12/2021",
      role: "SecOps Engineer",
      company: "UnifiedPost Group",
      description: "Established Vietnam SecOps team for global payment platform. Improved threat detection by 40% with Wazuh/Suricata.",
      highlight: false
    },
    {
      period: "11/2015 - 02/2021",
      role: "System / DevOps Engineer",
      company: "Zyllem Pte Ltd",
      description: "Managed hybrid cloud (AWS/Azure). Designed automated CI/CD pipelines reducing deployment time by 50%. Led K8s migration.",
      highlight: false
    }
  ]

  const skills = [
    { category: "AI & Automation", icon: <Cpu className="text-[var(--neon-accent)]"/>, items: ["Agentic AI", "Agentic Development", "Model Context Protocol (MCP)", "Automation Architecture"], highlight: true },
    { category: "Cyber Security", icon: <Shield className="text-[var(--neon-accent)]"/>, items: ["Cyber Security", "SecOps", "ISO 27001", "SOC 2", "Threat Detection", "Wazuh / Suricata"], highlight: true },
    { category: "DevOps & Hosting", icon: <Terminal className="text-[var(--neon-accent)]"/>, items: ["Kubernetes", "Terraform", "ArgoCD", "Helm", "Jenkins"], highlight: false },
    { category: "Cloud & Network", icon: <Cloud className="text-[var(--neon-accent)]"/>, items: ["AWS", "Azure", "GCP", "Cisco Meraki", "Hybrid Cloud"], highlight: false }
  ]

  return (
    <div className="min-h-screen font-sans transition-colors duration-500 overflow-x-hidden relative">
      <div className="fixed inset-0 z-[-1] opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-400 dark:bg-cyan-900 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-1/2 -right-1/4 w-1/2 h-1/2 bg-green-400 dark:bg-green-900 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <nav className="fixed w-full z-50 glass border-b border-black/5 dark:border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">HUNG.VO</div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium opacity-70">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
            <a href="#skills" className="hover:opacity-100 transition-opacity">Skills</a>
          </div>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-5xl mx-auto pb-32">
        {/* HERO SECTION */}
        <section className="min-h-[85vh] flex flex-col justify-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full glass text-sm font-medium w-fit shadow-sm border border-[var(--neon-accent)] text-[var(--neon-accent)]">
              DevSecOps & AI Engineer based in HCM City
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.1]">
              Architecting <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 dark:from-cyan-300 dark:via-blue-400 dark:to-green-300">
                Secure Futures.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-70 max-w-2xl mb-12 leading-relaxed">
              Passionate about multi-cloud infrastructures, optimizing CI/CD, and pioneering Agentic AI solutions with ironclad security.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="mailto:hung@atas.tech" className="px-6 py-3 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20">
                Contact Me <Mail size={18} />
              </a>
              <div className="flex gap-2">
                <a href="https://github.com" className="p-3 rounded-full glass hover:border-[var(--neon-accent)] hover:text-[var(--neon-accent)] transition-all">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="p-3 rounded-full glass hover:border-[var(--neon-accent)] hover:text-[var(--neon-accent)] transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50"
          >
            <a href="#about"><ChevronDown size={32} /></a>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 space-y-8 border-t border-black/5 dark:border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">About Me</h2>
              <p className="opacity-80 leading-relaxed mb-6 text-lg">
                I am a results-driven professional dedicated to continuous learning and staying ahead of evolving technologies. With extensive experience in AWS, Azure, and GCP, I focus on bridging the gap between rapid deployment and robust security.
              </p>
              <p className="opacity-80 leading-relaxed text-lg">
                Recently, I've been diving deep into <strong className="text-[var(--neon-accent)] font-semibold">Agentic AI</strong> and development through tools like the Model Context Protocol (MCP), finding new ways to automate and intelligently manage cloud environments.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="glass p-6 rounded-2xl hover:neon-border transition-colors">
                 <div className="text-[var(--neon-accent)] text-4xl font-black mb-2">9+</div>
                 <div className="font-medium opacity-80">Years Experience</div>
               </div>
               <div className="glass p-6 rounded-2xl hover:neon-border transition-colors">
                 <div className="text-[var(--neon-accent)] text-4xl font-black mb-2">3</div>
                 <div className="font-medium opacity-80">Cloud Providers</div>
               </div>
               <div className="glass p-6 rounded-2xl hover:neon-border transition-colors">
                 <div className="text-[var(--neon-accent)] text-4xl font-black mb-2">100%</div>
                 <div className="font-medium opacity-80">Automation Focus</div>
               </div>
               <div className="glass p-6 rounded-2xl hover:neon-border transition-colors">
                 <div className="text-[var(--neon-accent)] text-4xl font-black mb-2">SOC 2</div>
                 <div className="font-medium opacity-80">Compliance Expert</div>
               </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="py-24 border-t border-black/5 dark:border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Career Journey</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "glass p-8 rounded-3xl relative overflow-hidden transition-all",
                  exp.highlight ? "border-[var(--neon-accent)] shadow-[0_0_30px_rgba(37,192,244,0.1)]" : "hover:border-black/20 dark:hover:border-white/20"
                )}
              >
                {exp.highlight && (
                  <div className="absolute top-0 right-0 p-4 bg-[var(--neon-accent)]/10 text-[var(--neon-accent)] text-xs font-bold rounded-bl-3xl">
                    CURRENT FOCUS
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <span className="opacity-60 text-sm font-mono">{exp.period}</span>
                </div>
                <div className="text-[var(--neon-accent)] font-semibold mb-4">{exp.company}</div>
                <p className="opacity-80 leading-relaxed max-w-3xl">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECHNICAL ARSENAL */}
        <section id="skills" className="py-24 border-t border-black/5 dark:border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Technical Arsenal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "glass p-8 rounded-3xl",
                  skillGroup.highlight && "neon-border"
                )}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, id) => (
                    <span key={id} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 text-sm font-medium">
                      <CheckCircle2 size={14} className="opacity-50" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center opacity-50 border-t border-black/5 dark:border-white/5 text-sm">
        <p>© {new Date().getFullYear()} Hung Vo. Architected securely.</p>
      </footer>
    </div>
  )
}

export default App
