import { ThemeProvider } from './hooks/useTheme'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { CopyToast } from './components/CopyToast'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-ink">
        <ScrollProgress />
        <div className="hero-bg relative">
          <Nav />
          <Hero />
        </div>
        <main>
          <About />
          <Work />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <CopyToast />
      </div>
    </ThemeProvider>
  )
}
