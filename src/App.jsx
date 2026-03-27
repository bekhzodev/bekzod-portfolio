import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'
import './media.css'

function LoadingScreen({ accent }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'var(--bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      gap: '24px',
    }}>
      {/* Logo */}
      <div style={{
        width: '56px', height: '56px',
        background: accent,
        borderRadius: '16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'pulse 1.5s ease-in-out infinite',
      }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z"/>
        </svg>
      </div>

      {/* Nom */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>
          Bekzod Soatmuminov
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text3)' }}>
          cybersecurity · developer
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '200px', height: '3px',
        background: 'var(--border)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: accent,
          borderRadius: '10px',
          animation: 'load 2s ease-in-out forwards',
        }}/>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(0.92); opacity: 0.85; }
        }
        @keyframes load {
          0% { width: 0%; }
          60% { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  )
}

function App() {
  const [lang, setLang] = useState('uz')
  const [theme, setTheme] = useState('dark')
  const [accent, setAccent] = useState('#4f8fff')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : ''
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty('--acc', accent)
  }, [accent])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  const props = { lang, setLang, theme, setTheme, accent, setAccent }

  if (loading) return <LoadingScreen accent={accent} />

  return (
    <div>
      <Navbar {...props} />
      <main>
        <Hero {...props} />
        <About {...props} />
        <Skills {...props} />
        <Timeline {...props} />
        <Projects {...props} />
        <Certificates {...props} />
        <Contact {...props} />
      </main>
      <Footer {...props} />
    </div>
  )
}

export default App