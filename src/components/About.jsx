


export default function About({ lang, accent }) {
  const info = [
    { uz: "To'liq ism", en: "Full name", val: "Soatmuminov Bekzod Tulqin o'g'li" },
    { uz: "Tug'ilgan yil", en: "Birth year", val: "2006" },
    { uz: "Viloyat", en: "Region", val: "Surxondaryo viloyati" },
    { uz: "Hozirgi joyi", en: "Current city", val: "Toshkent" },
    { uz: "Universitet", en: "University", val: "O'zbekiston Milliy Universiteti" },
    { uz: "Yo'nalish", en: "Major", val: "Kiberxavfsizlik" },
    { uz: "Kirgan yil", en: "Enrolled", val: "2025" },
    { uz: "Ingliz tili", en: "English", val: "A2 · IELTS yo'lida" },
  ]

  const badges = [
    { label: "Kiberxavfsizlik", color: accent },
    { label: "React", color: "#00d4aa" },
    { label: "Python", color: "#8b5cf6" },
    { label: "C#", color: "#f59e0b" },
    { label: "Matematika A", color: accent },
    { label: "A2 · IELTS", color: "#00d4aa" },
  ]

  return (
    <section id="about" style={{ padding: '40px 24px', borderTop: '0.5px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Sarlavha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '36px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: 'monospace' }}>01</span>
          <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text)' }}>
            {lang === 'uz' ? 'Men haqimda' : 'About me'}
          </h2>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }}/>
        </div>

        {/* Kontent */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

          {/* Chap — info jadval */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {info.map((item, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '8px 12px',
                background: 'var(--card)',
                border: '0.5px solid var(--border)',
                borderRadius: '8px'
              }}>
                <span style={{ fontSize: '12px', color: 'var(--text3)' }}>
                  {lang === 'uz' ? item.uz : item.en}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>
                  {item.val}
                </span>
              </div>
            ))}
          </div>

          {/* O'ng — matn va badges */}
          <div>
            <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: 1.9, marginBottom: '30px' }}>
              {lang === 'uz'
                ? "Men — O'zbekiston Milliy Universitetining kiberxavfsizlik yo'nalishi 1-kurs talabasi (2025). Matematika va fizikadan DTM darajasida bilim orttirgan, GRAND sohibiga aylanganman."
                : "I'm a 1st year Cybersecurity student at the National University of Uzbekistan (2025). I achieved top scores in Mathematics and Physics at the DTM, earning a GRAND academic grade."}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.9, marginBottom: '50px' }}>
              {lang === 'uz'
                ? "Python, C#, React va web texnologiyalarini mustaqil o'rganmoqdaman. Tarmoq xavfsizligi va zaifliklarni aniqlashga qiziqqan. IELTS sertifikatiga tayyorlanmoqdaman."
                : "Currently self-learning Python, C#, React and web technologies. Interested in network security and vulnerability detection. Preparing for IELTS certification."}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {badges.map((b, i) => (
                <span key={i} style={{
                  fontSize: '14px', padding: '10px 18px', borderRadius: '20px',
                  background: b.color + '18', color: b.color,
                  border: `0.5px solid ${b.color}30`
                }}>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}