import { useEffect, useState } from 'react'

const words = {
  uz: ['Kiberxavfsizlik Talabasi', 'React Developer', 'Python O\'rganuvchi', 'C# Dasturchi', 'IELTS Tayyorgarligida'],
  en: ['Cybersecurity Student', 'React Developer', 'Python Learner', 'C# Programmer', 'IELTS Candidate']
}

export default function Hero({ lang, accent }) {
  const [typed, setTyped] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const arr = words[lang]
    const word = arr[wordIndex % arr.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(word.slice(0, charIndex + 1))
        if (charIndex + 1 === word.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setTyped(word.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setWordIndex(w => w + 1)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, deleting ? 55 : 85)
    return () => clearTimeout(timeout)
  }, [typed, deleting, lang])

  return (
    <section style={{
      position: 'relative',
      padding: '64px 24px 48px',
      background: 'var(--bg2)',
      minHeight: '360px',
      display: 'flex',
      alignItems: 'center',
      borderTop: 'none'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 340px',
        gap: '40px',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>

        {/* Chap tomon */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            fontSize: '11px', padding: '4px 12px', borderRadius: '20px',
            marginBottom: '16px',
            background: accent + '18', color: accent,
            border: `0.5px solid ${accent}30`
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill={accent}>
              <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z"/>
            </svg>
            {lang === 'uz' ? "O'zbekiston Milliy Universiteti · 1-kurs · 2025" : "National University of Uzbekistan · 1st Year · 2025"}
          </div>

          <h1 style={{ fontSize: '36px', fontWeight: 500, color: 'var(--text)', lineHeight: 1.1, marginBottom: '8px' }}>
            Bekzod<br />Soatmuminov
          </h1>

          <div style={{ fontSize: '15px', fontWeight: 500, color: accent, marginBottom: '14px', minHeight: '24px' }}>
            {typed}
            <span style={{
              display: 'inline-block', width: '2px', height: '15px',
              background: accent, marginLeft: '2px',
              animation: 'blink 1s infinite', verticalAlign: 'middle'
            }}/>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '24px', maxWidth: '480px' }}>
            {lang === 'uz'
              ? "Surxondaryo viloyatida tug'ilgan, Toshkentda tahsil olayotgan yosh mutaxassis. Kiberxavfsizlik, matematika va web texnologiyalarini birlashtirib, zamonaviy raqamli yechimlar yarataman."
              : "Born in Surkhandarya, currently studying in Tashkent. Combining cybersecurity, mathematics and web technologies to build modern digital solutions."}
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: accent, color: '#fff', border: 'none',
                padding: '10px 20px', borderRadius: '8px',
                fontSize: '12px', cursor: 'pointer', fontWeight: 500
              }}>
              {lang === 'uz' ? "Loyihalarni ko'rish" : "View Projects"}
            </button>
            <button style={{
              background: 'transparent', color: accent,
              border: `1px solid ${accent}`,
              padding: '10px 20px', borderRadius: '8px',
              fontSize: '12px', cursor: 'pointer'
            }}>
              GitHub
            </button>
            <button style={{
              background: 'transparent', color: '#00d4aa',
              border: '1px solid #00d4aa',
              padding: '10px 20px', borderRadius: '8px',
              fontSize: '12px', cursor: 'pointer'
            }}>
              {lang === 'uz' ? 'CV yuklash' : 'Download CV'}
            </button>
          </div>
        </div>

        {/* O'ng tomon — stat kartalar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { top: lang === 'uz' ? 'Akademik daraja' : 'Academic grade', num: 'GRAND', lbl: "O'zMU · 1-kurs" },
              { top: lang === 'uz' ? 'DTM natija' : 'DTM result', num: 'Yuqori', lbl: 'Mat · Fizika' },
              { top: lang === 'uz' ? 'Loyihalar' : 'Projects', num: '2+', lbl: 'React · Python · C#' },
              { top: lang === 'uz' ? "Yo'nalish" : 'Major', num: 'CySec', lbl: 'Kiberxavfsizlik' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'var(--card)', border: '0.5px solid var(--border2)',
                borderRadius: '10px', padding: '12px'
              }}>
                <div style={{ fontSize: '10px', color: 'var(--text3)', marginBottom: '3px' }}>{s.top}</div>
                <div style={{ fontSize: '17px', fontWeight: 500, color: accent }}>{s.num}</div>
                <div style={{ fontSize: '10px', color: 'var(--text2)' }}>{s.lbl}</div>
              </div>
            ))}
          </div>
          <div style={{
            background: 'var(--card)', border: '0.5px solid var(--border2)',
            borderRadius: '10px', padding: '12px',
            display: 'flex', justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontSize: '10px', color: 'var(--text2)' }}>{lang === 'uz' ? "Tug'ilgan sana" : 'Date of birth'}</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: '#00d4aa' }}>2006 · Surxondaryo</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '10px', color: 'var(--text2)' }}>{lang === 'uz' ? 'Ingliz tili' : 'English'}</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: '#00d4aa' }}>A2 · IELTS {lang === 'uz' ? "yo'lida" : 'in progress'}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}