import { useState, useEffect } from 'react'

export default function Footer({ lang, accent }) {
  const [showTop, setShowTop] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer style={{
        padding: '24px 32px',
        borderTop: '0.5px solid var(--border)',
        background: 'var(--bg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px'
      }}>

        {/* Chap — logo va nom */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px',
            background: accent,
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.3s'
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>
              Bekzod Soatmuminov
            </div>
            <div style={{ fontSize: '10px', color: 'var(--text3)' }}>
              © {year} · {lang === 'uz' ? 'Barcha huquqlar himoyalangan' : 'All rights reserved'}
            </div>
          </div>
        </div>

        {/* O'rta — linklar */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { uz: 'Haqida', en: 'About', id: 'about' },
            { uz: "Ko'nikmalar", en: 'Skills', id: 'skills' },
            { uz: 'Loyihalar', en: 'Projects', id: 'projects' },
            { uz: 'Kontakt', en: 'Contact', id: 'contact' },
          ].map((link, i) => (
            <button
              key={i}
              onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                fontSize: '11px', color: 'var(--text3)',
                background: 'transparent', border: 'none',
                cursor: 'pointer', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = accent}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
            >
              {lang === 'uz' ? link.uz : link.en}
            </button>
          ))}
        </div>

        {/* O'ng — ijtimoiy tarmoqlar */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {[
            {
              href: 'https://github.com/bekhzodev',
              color: '#00d4aa',
              icon: <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            },
            {
              href: 'https://t.me/bekzod_soatmuminov17',
              color: '#8b5cf6',
              icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.57-.46.71-.93.44l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.52.26l.18-2.63 4.74-4.28c.21-.18-.04-.28-.32-.1L7.9 14.49l-2.53-.79c-.55-.17-.56-.55.12-.82l9.89-3.81c.46-.17.86.11.26.73z"/>
            },
            {
              href: 'mailto:bekzodsoatmuminov@gmail.com',
              color: accent,
              icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '32px', height: '32px',
                borderRadius: '8px',
                background: 'var(--card)',
                border: '0.5px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color, transition: 'border 0.2s, transform 0.2s',
                textDecoration: 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.color
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                {s.icon}
              </svg>
            </a>
          ))}

          <div style={{
            fontSize: '11px', color: 'var(--text3)',
            marginLeft: '8px'
          }}>
            {lang === 'uz' ? 'React + Vite bilan yaratildi' : 'Built with React + Vite'}
          </div>
        </div>
      </footer>

      {/* Back to Top tugmasi */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '40px',
          height: '40px',
          background: accent,
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: showTop ? 1 : 0,
          transform: showTop ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.3s, transform 0.3s, background 0.3s',
          pointerEvents: showTop ? 'all' : 'none',
          zIndex: 200,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <path d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </>
  )
}