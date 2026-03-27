import { useState } from 'react'

export default function Certificates({ lang, accent }) {
  const [selected, setSelected] = useState(null)

  const certs = [
    {
      title_uz: "Akademik daraja",
      title_en: "Academic Grade",
      org: "O'zbekiston Milliy Universiteti",
      org_en: "National University of Uzbekistan",
      score: "GRAND",
      desc_uz: "Kiberxavfsizlik yo'nalishi · 1-kurs · 2025",
      desc_en: "Cybersecurity major · 1st year · 2025",
      color: accent,
      image: "/cert-grand.jpg",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      title_uz: "DTM Natija",
      title_en: "DTM Result",
      org: "Davlat Test Markazi",
      org_en: "State Testing Center",
      score: "Yuqori",
      desc_uz: "Matematika · Fizika · 2024–2025",
      desc_en: "Mathematics · Physics · 2024–2025",
      color: "#00d4aa",
      image: "/cert-dtm.png",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      )
    },
    {
      title_uz: "Yuqori Sertifikat",
      title_en: "High Certificate",
      org: "Matematika sohasida",
      org_en: "In Mathematics",
      score: "A",
      desc_uz: "Matematik fan bo'yicha yuqori daraja · 2024–2025",
      desc_en: "High level in Mathematics · 2024–2025",
      color: "#8b5cf6",
      image: "/cert-matn.png",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
        </svg>
      )
    },
  ]

  return (
    <section id="certificates" style={{ padding: '40px 24px', borderTop: '0.5px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Sarlavha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text3)', fontFamily: 'monospace' }}>05</span>
          <h2 style={{ fontSize: '22px', fontWeight: 500, color: 'var(--text)' }}>
            {lang === 'uz' ? 'Sertifikatlar va natijalar' : 'Certificates & Results'}
          </h2>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        {/* Kartalar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {certs.map((cert, i) => (
            <div
              key={i}
              onClick={() => setSelected(cert)}
              style={{
                background: 'var(--card)',
                border: '0.5px solid var(--border)',
                borderRadius: '14px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'border 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cert.color
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: cert.color + '18',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: cert.color, flexShrink: 0
                }}>
                  {cert.icon}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>
                    {lang === 'uz' ? cert.title_uz : cert.title_en}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text3)' }}>
                    {lang === 'uz' ? cert.org : cert.org_en}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 500, color: cert.color, marginBottom: '6px' }}>
                {cert.score}
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text2)', marginBottom: '12px' }}>
                {lang === 'uz' ? cert.desc_uz : cert.desc_en}
              </div>
              <div style={{
                fontSize: '11px', color: cert.color,
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z M8 2v16 M16 6v16"/>
                </svg>
                {lang === 'uz' ? "Ko'rish uchun bosing" : 'Click to view'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', top: 0, left: 0,
            width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.85)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: '24px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--card)',
              border: `1px solid ${selected.color}40`,
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '600px',
              width: '100%',
              position: 'relative',
            }}
          >
            {/* Yopish tugmasi */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute', top: '14px', right: '14px',
                width: '28px', height: '28px', borderRadius: '8px',
                border: '0.5px solid var(--border2)',
                background: 'var(--bg3)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text2)', fontSize: '16px'
              }}
            >
              ×
            </button>

            {/* Modal sarlavha */}
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>
                {lang === 'uz' ? selected.title_uz : selected.title_en}
              </div>
              <div style={{ fontSize: '12px', color: selected.color }}>
                {lang === 'uz' ? selected.org : selected.org_en}
              </div>
            </div>

            {/* Rasm */}
            <div style={{
              borderRadius: '10px', overflow: 'hidden',
              border: `0.5px solid ${selected.color}30`,
              marginBottom: '16px'
            }}>
              <img
                src={selected.image}
                alt={selected.title_uz}
                style={{ width: '100%', display: 'block', maxHeight: '400px', objectFit: 'contain' }}
              />
            </div>

            {/* Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '12px', color: 'var(--text2)' }}>
                {lang === 'uz' ? selected.desc_uz : selected.desc_en}
              </div>
              <div style={{ fontSize: '24px', fontWeight: 500, color: selected.color }}>
                {selected.score}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}