import { SquareTerminal } from 'lucide-react'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { Skills } from './components/Skills'
import { Spotlight } from './components/Spotlight'
import { useTheme } from './hooks/useTheme'
import TerminalAbout from './TerminalAbout'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="mesh min-h-screen">
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Spotlight />
        <Projects />

        <section id="terminal" className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Interactive"
              icon={SquareTerminal}
              title="Prefer a shell? Ask the terminal."
              description="Everything above, queryable. Try projects, experience, or open blindpass."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <TerminalAbout />
          </Reveal>
        </section>

        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
