export default function Timeline({ lang, accent }) {
  const items = [
    {
      date: "2025 — hozir",
      date_en: "2025 — present",
      title_uz: "Kiberxavfsizlik talabasi",
      title_en: "Cybersecurity Student",
      place_uz: "O'zbekiston Milliy Universiteti",
      place_en: "National University of Uzbekistan",
      desc_uz: "1-kurs · GRAND daraja · Kiberxavfsizlik yo'nalishi",
      desc_en: "1st year · GRAND grade · Cybersecurity major",
      color: accent,
    },
    {
      date: "2023–2025",
      date_en: "2023–2025",
      title_uz: "DTM va Sertifikat",
      title_en: "DTM & Certificate",
      place_uz: "Davlat Test Markazi",
      place_en: "State Testing Center",
      desc_uz: "Matematika · Fizika · Yuqori natija · A sertifikat",
      desc_en: "Mathematics · Physics · High score · A certificate",
      color: "#00d4aa",
    },
    {
      date: "2025 — hozir",
      date_en: "2025 — present",
      title_uz: "Python, C# va Frontend",
      title_en: "Python, C# & Frontend",
      place_uz: "O'z-o'zini rivojlantirish",
      place_en: "Self development",
      desc_uz: "Python · C# · React · HTML/CSS mustaqil o'rganish",
      desc_en: "Python · C# · React · HTML/CSS self-learning",
      color: "#8b5cf6",
    },
    {
      date: "2025 — hozir",
      date_en: "2025 — present",
      title_uz: "IELTS tayyorgarlik",
      title_en: "IELTS Preparation",
      place_uz: "Ingliz tili kursi",
      place_en: "English language course",
      desc_uz: "A2 darajasidan IELTS ga tayyorlanmoqda",
      desc_en: "Preparing for IELTS from A2 level",
      color: "#f59e0b",
    },
  ]

  return (
    <section id="timeline" style={{ padding: '40px 24px', borderTop: '0.5px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Sarlavha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '36px' }}>
          <span style={{ fontSize: '15px', color: 'var(--text3)', fontFamily: 'monospace' }}>03</span>
          <h2 style={{ fontSize: '25px', fontWeight: 500, color: 'var(--text)' }}>
            {lang === 'uz' ? "Ta'lim tarixi" : 'Education'}
          </h2>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        {/* Ikki ustun */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '48px', alignItems: 'center' }}>

          {/* Chap — Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((item, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '110px 20px 1fr',
                gap: '0 16px',
                alignItems: 'start',
              }}>
                <div style={{ fontSize: '15px', color: 'var(--text3)', textAlign: 'right', paddingTop: '5px' }}>
                  {lang === 'uz' ? item.date : item.date_en}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '16px', height: '16px', borderRadius: '50%',
                    background: item.color, flexShrink: 0, marginTop: '3px',
                  }} />
                  {i < items.length - 1 && (
                    <div style={{ width: '3px', flex: 1, background: 'var(--border)', minHeight: '40px' }} />
                  )}
                </div>
                <div style={{ paddingBottom: '32px' }}>
                  <div style={{ fontSize: '17px', fontWeight: 500, color: 'var(--text)', marginBottom: '5px' }}>
                    {lang === 'uz' ? item.title_uz : item.title_en}
                  </div>
                  <div style={{ fontSize: '15px', color: item.color, marginBottom: '8px' }}>
                    {lang === 'uz' ? item.place_uz : item.place_en}
                  </div>
                  <div style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.7 }}>
                    {lang === 'uz' ? item.desc_uz : item.desc_en}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* O'ng — ikkita rasm yonma-yon */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            {/* Ikkita rasm yonma-yon */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: `1px solid ${accent}35`,
              }}>
                <img
                  src="/cyberpunk.png"
                  alt="Cyberpunk"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #00d4aa35',
              }}>
                <img
                  src="/neodev.png"
                  alt="NeoDev"
                  style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* Pastdagi info karta */}
            <div style={{
              background: 'var(--card)',
              border: `0.5px solid ${accent}30`,
              borderRadius: '10px',
              padding: '14px 16px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontSize: '12px', color: accent, fontWeight: 500 }}>
                  {lang === 'uz' ? "Yo'lim" : 'My Path'}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text3)' }}>2025</div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {['Python', 'C#', 'React', 'CyberSec', 'IELTS'].map((tag, i) => (
                  <span key={i} style={{
                    fontSize: '10px', padding: '3px 8px', borderRadius: '20px',
                    background: accent + '15', color: accent,
                    border: `0.5px solid ${accent}25`
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Ikkinchi karta */}
            <div style={{
              background: 'var(--card)',
              border: '0.5px solid #00d4aa25',
              borderRadius: '10px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: '#00d4aa18', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#00d4aa">
                  <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text)', marginBottom: '2px' }}>
                  {lang === 'uz' ? "Kiberxavfsizlik yo'li" : 'Cybersecurity Path'}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text3)' }}>
                  {lang === 'uz' ? "Har kuni yangi bilim" : 'New knowledge every day'}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}