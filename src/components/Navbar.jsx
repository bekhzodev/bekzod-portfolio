import { useState } from 'react'

const links = [
  { label_uz: "Haqida", label_en: "About", id: "about" },
  { label_uz: "Ko'nikmalar", label_en: "Skills", id: "skills" },
  { label_uz: "Tajriba", label_en: "Timeline", id: "timeline" },
  { label_uz: "Loyihalar", label_en: "Projects", id: "projects" },
  { label_uz: "Sertifikatlar", label_en: "Certificates", id: "certificates" },
  { label_uz: "Kontakt", label_en: "Contact", id: "contact" },
]

const colors = [
  { name: 'blue',   hex: '#4f8fff' },
  { name: 'purple', hex: '#8b5cf6' },
  { name: 'teal',   hex: '#00d4aa' },
  { name: 'amber',  hex: '#f59e0b' },
  { name: 'red',    hex: '#e24b4a' },
]

export default function Navbar({ lang, setLang, theme, setTheme, accent, setAccent }) {
  const [ddOpen, setDdOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleColor = (hex) => {
    setAccent(hex)
    document.documentElement.style.setProperty('--acc', hex)
    setDdOpen(false)
  }

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        height: '56px',
        background: 'var(--bg)',
        borderBottom: '0.5px solid var(--border2)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '30px', height: '30px',
            background: accent,
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s'
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>
              Bekzod Soatmuminov
            </div>
            <div style={{ fontSize: '9px', color: 'var(--text3)' }}>
              cybersecurity · developer
            </div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="nav-links" style={{ display: 'flex', gap: '2px' }}>
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                fontSize: '11px',
                color: 'var(--text2)',
                padding: '5px 10px',
                borderRadius: '6px',
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
              }}
            >
              {lang === 'uz' ? link.label_uz : link.label_en}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>

          {/* Status badge — desktop only */}
          <div className="status-badge" style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            fontSize: '10px', color: '#00d4aa',
            background: '#00d4aa12', padding: '4px 10px',
            borderRadius: '7px', border: '0.5px solid #00d4aa25',
            whiteSpace: 'nowrap'
          }}>
            <div style={{ width: '5px', height: '5px', background: '#00d4aa', borderRadius: '50%' }}/>
            {lang === 'uz' ? 'Ochiq ish uchun' : 'Open to work'}
          </div>

          {/* Lang switch */}
          <div style={{
            display: 'flex', background: 'var(--card)',
            border: '0.5px solid var(--border)', borderRadius: '7px', overflow: 'hidden'
          }}>
            {['uz', 'en'].map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: '0 9px', height: '28px', border: 'none',
                  borderRight: l === 'uz' ? '0.5px solid var(--border)' : 'none',
                  background: lang === l ? accent : 'transparent',
                  color: lang === l ? '#fff' : 'var(--text3)',
                  cursor: 'pointer', fontSize: '10px', fontWeight: 500,
                  transition: 'background 0.15s'
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Color dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDdOpen(!ddOpen)}
              style={{
                width: '28px', height: '28px', borderRadius: '7px',
                border: '0.5px solid var(--border)', background: 'var(--card)',
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '2px'
              }}
            >
              {colors.slice(0, 3).map(c => (
                <div key={c.name} style={{ width: '5px', height: '5px', borderRadius: '50%', background: c.hex }}/>
              ))}
            </button>

            {ddOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: 'var(--card)', border: '0.5px solid var(--border)',
                borderRadius: '10px', padding: '8px',
                display: 'flex', flexDirection: 'column', gap: '6px',
                zIndex: 999, alignItems: 'center'
              }}>
                {colors.map(c => (
                  <div
                    key={c.name}
                    onClick={() => handleColor(c.hex)}
                    style={{
                      width: '20px', height: '20px', borderRadius: '6px',
                      background: c.hex, cursor: 'pointer',
                      boxShadow: accent === c.hex ? '0 0 0 2px white' : 'none',
                      transition: 'transform 0.15s'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <div style={{
            display: 'flex', background: 'var(--card)',
            border: '0.5px solid var(--border)', borderRadius: '7px', overflow: 'hidden'
          }}>
            {[
              { mode: 'dark', icon: <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/> },
              { mode: 'light', icon: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/><line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/><line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/></> },
            ].map(({ mode, icon }) => (
              <button
                key={mode}
                onClick={() => setTheme(mode)}
                style={{
                  width: '30px', height: '28px', border: 'none',
                  borderRight: mode === 'dark' ? '0.5px solid var(--border)' : 'none',
                  background: theme === mode ? accent : 'transparent',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill={theme === mode ? 'white' : 'var(--text3)'}>
                  {icon}
                </svg>
              </button>
            ))}
          </div>

          {/* Hamburger tugma — faqat mobileda */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              width: '36px', height: '36px',
              background: 'var(--card)',
              border: '0.5px solid var(--border)',
              borderRadius: '8px',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '5px',
              padding: '8px',
            }}
          >
            <span style={{
              display: 'block', width: '100%', height: '1.5px',
              background: menuOpen ? accent : 'var(--text2)',
              borderRadius: '2px',
              transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              transition: 'all 0.25s',
            }}/>
            <span style={{
              display: 'block', width: '100%', height: '1.5px',
              background: menuOpen ? accent : 'var(--text2)',
              borderRadius: '2px',
              opacity: menuOpen ? 0 : 1,
              transition: 'all 0.25s',
            }}/>
            <span style={{
              display: 'block', width: '100%', height: '1.5px',
              background: menuOpen ? accent : 'var(--text2)',
              borderRadius: '2px',
              transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              transition: 'all 0.25s',
            }}/>
          </button>

        </div>
      </nav>

      {/* Mobile menu — pastdan tushadi */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '56px',
          left: 0,
          right: 0,
          background: 'var(--bg)',
          borderBottom: '0.5px solid var(--border2)',
          zIndex: 99,
          padding: '12px 16px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                fontSize: '14px',
                color: 'var(--text2)',
                padding: '12px 16px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
                textAlign: 'left',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = accent + '18'
                e.currentTarget.style.color = accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text2)'
              }}
            >
              {lang === 'uz' ? link.label_uz : link.label_en}
            </button>
          ))}

          {/* Mobile status badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '11px', color: '#00d4aa',
            background: '#00d4aa10', padding: '10px 16px',
            borderRadius: '10px', border: '0.5px solid #00d4aa20',
            marginTop: '8px'
          }}>
            <div style={{ width: '6px', height: '6px', background: '#00d4aa', borderRadius: '50%' }}/>
            {lang === 'uz' ? 'Ochiq ish uchun' : 'Open to work'}
          </div>
        </div>
      )}

      {/* Overlay — tashqariga bosganda menu yopiladi */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 98,
            background: 'rgba(0,0,0,0.4)',
          }}
        />
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .status-badge { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}