



import { useEffect, useRef } from 'react'

const skillsData = {
  uz: {
    group1: "Dasturlash va texnologiyalar",
    group2: "Maxsus soha",
  },
  en: {
    group1: "Programming & Technologies",
    group2: "Specialized field",
  }
}

const left = [
  { name: "Matematika", val_uz: "GRAND", val_en: "GRAND", width: 90, color: 'acc' },
  { name: "Fizika", val_uz: "DTM", val_en: "DTM", width: 82, color: 'acc' },
  { name: "HTML / CSS", val_uz: "O'rta", val_en: "Intermediate", width: 62, color: 'acc' },
  { name: "JavaScript", val_uz: "Boshlang'ich", val_en: "Beginner", width: 40, color: 'acc' },
  { name: "React", val_uz: "O'rganmoqda", val_en: "Learning", width: 35, color: 'acc' },
  { name: "Python", val_uz: "O'rganmoqda", val_en: "Learning", width: 38, color: 'acc' },
  { name: "C#", val_uz: "Boshlang'ich", val_en: "Beginner", width: 30, color: 'acc' },
]

const right = [
  { name: "Kiberxavfsizlik", val_uz: "Boshlang'ich", val_en: "Beginner", width: 45 },
  { name: "Tarmoq xavfsizligi", val_uz: "Nazariy", val_en: "Theoretical", width: 40 },
  { name: "Linux", val_uz: "O'rganmoqda", val_en: "Learning", width: 30 },
  { name: "Git / GitHub", val_uz: "Boshlang'ich", val_en: "Beginner", width: 42 },
  { name: "Ingliz tili", val_uz: "A2", val_en: "A2", width: 38 },
]

export default function Skills({ lang, accent }) {
  const barsRef = useRef([])
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          barsRef.current.forEach((bar, i) => {
            if (bar) {
              setTimeout(() => {
                bar.style.width = bar.dataset.width + '%'
              }, i * 80)
            }
          })
        }
      })
    }, { threshold: 0.3 })

    const section = document.getElementById('skills')
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const SkillBar = ({ skill, index, color }) => (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{ fontSize: '12px', color: 'var(--text)' }}>{skill.name}</span>
        <span style={{ fontSize: '11px', color: 'var(--text3)' }}>
          {lang === 'uz' ? skill.val_uz : skill.val_en}
        </span>
      </div>
      <div style={{ height: '4px', background: 'var(--bg3)', borderRadius: '20px', overflow: 'hidden' }}>
        <div
          ref={el => barsRef.current[index] = el}
          data-width={skill.width}
          style={{
            height: '100%',
            borderRadius: '20px',
            background: color === 'acc' ? accent : '#00d4aa',
            width: '0%',
            transition: 'width 1.2s cubic-bezier(.4,0,.2,1)'
          }}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" style={{ padding: '40px 24px', borderTop: '0.5px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Sarlavha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text3)', fontFamily: 'monospace' }}>02</span>
          <h2 style={{ fontSize: '18px', fontWeight: 500, color: 'var(--text)' }}>
            {lang === 'uz' ? "Ko'nikmalar" : 'Skills'}
          </h2>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

          {/* Chap */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: '16px', fontWeight: 500 }}>
              {skillsData[lang].group1}
            </div>
            {left.map((skill, i) => (
              <SkillBar key={i} skill={skill} index={i} color="acc" />
            ))}
          </div>

          {/* O'ng */}
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: '16px', fontWeight: 500 }}>
              {skillsData[lang].group2}
            </div>
            {right.map((skill, i) => (
              <SkillBar key={i} skill={skill} index={left.length + i} color="teal" />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}