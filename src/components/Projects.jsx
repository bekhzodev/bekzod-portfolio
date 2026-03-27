export default function Projects({ lang, accent }) {
  const projects = [
    {
      title: "Users Dashboard",
      desc_uz: "JSONPlaceholder API dan foydalanuvchilar ma'lumotlarini olib, jadvalda ko'rsatuvchi React ilovasi. Har bir foydalanuvchining postlari va to-do larini ko'rish imkoni mavjud.",
      desc_en: "A React app that fetches user data from JSONPlaceholder API and displays it in a table. Users can view each person's posts and todos.",
      tags: ["React", "JavaScript", "REST API", "CSS"],
      status_uz: "Tayyor",
      status_en: "Complete",
      statusColor: "#00d4aa",
      iconColor: accent,
      github: "#",
      demo: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      )
    },
    {
      title: "Farobiy O'quv Markazi",
      desc_uz: "O'quv markazi uchun to'liq web sayt — kurslar, o'qituvchilar, jadval va ro'yxatdan o'tish bo'limlari bilan. React asosida qurilmoqda.",
      desc_en: "A full website for an educational center — with courses, teachers, schedule and registration sections. Built with React.",
      tags: ["React", "JavaScript", "CSS", "Formspree"],
      status_uz: "Jarayonda",
      status_en: "In Progress",
      statusColor: "#f59e0b",
      iconColor: "#8b5cf6",
      github: "#",
      demo: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      )
    },
    {
      title: "Portfolio Sayt",
      desc_uz: "Shaxsiy portfolio veb-sayt — Dark/Light tema, rang almashtirgich, til almashtirgich, animatsiyalar va barcha bo'limlar bilan.",
      desc_en: "Personal portfolio website — with Dark/Light theme, color switcher, language switcher, animations and all sections.",
      tags: ["React", "Vite", "CSS", "JavaScript"],
      status_uz: "Jarayonda",
      status_en: "In Progress",
      statusColor: "#f59e0b",
      iconColor: "#00d4aa",
      github: "#",
      demo: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      )
    },
  ]

  return (
    <section id="projects" style={{ padding: '40px 24px', borderTop: '0.5px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Sarlavha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <span style={{ fontSize: '15px', color: 'var(--text3)', fontFamily: 'monospace' }}>04</span>
          <h2 style={{ fontSize: '25px', fontWeight: 600, color: 'var(--text)' }}>
            {lang === 'uz' ? 'Loyihalar' : 'Projects'}
          </h2>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        {/* Kartalar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {projects.map((proj, i) => (
            <div
              key={i}
              style={{
                background: 'var(--card)',
                border: '0.5px solid var(--border)',
                borderRadius: '14px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'border 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = accent
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Yuqori qism */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <div style={{
                  width: '45px', height: '45px', borderRadius: '10px',
                  background: proj.iconColor + '18',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: proj.iconColor
                }}>
                  {proj.icon}
                </div>
                <span style={{
                  fontSize: '12px', padding: '5px 15px', borderRadius: '20px',
                  background: proj.statusColor + '18', color: proj.statusColor,
                  border: `0.5px solid ${proj.statusColor}30`
                }}>
                  {lang === 'uz' ? proj.status_uz : proj.status_en}
                </span>
              </div>

              {/* Nomi */}
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginBottom: '10px' }}>
                {proj.title}
              </div>

              {/* Tavsif */}
              <div style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '16px' }}>
                {lang === 'uz' ? proj.desc_uz : proj.desc_en}
              </div>

              {/* Teglar */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                {proj.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontSize: '12px', padding: '4px 10px', borderRadius: '20px',
                    background: 'var(--bg3)', color: 'var(--text2)',
                    border: '0.5px solid var(--border)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Linklar */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href={proj.github} style={{
                  fontSize: '15px', color: accent,
                  border: '0.5px solid var(--border2)',
                  padding: '5px 15px', borderRadius: '6px',
                  textDecoration: 'none'
                }}>
                  GitHub
                </a>
                <a href={proj.demo} style={{
                  fontSize: '15px',
                  color: proj.statusColor,
                  border: `0.5px solid ${proj.statusColor}30`,
                  padding: '4px 12px', borderRadius: '6px',
                  textDecoration: 'none'
                }}>
                  {lang === 'uz' ? "Ko'rish" : 'View'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}