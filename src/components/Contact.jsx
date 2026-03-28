import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_ba7teza'
const TEMPLATE_ID = 'template_3f8hlp9'
const PUBLIC_KEY = '3BOc8l0M7F4Zr4b1Y'

export default function Contact({ lang, accent }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const formRef = useRef()

  const contacts = [
    {
      type: "Email",
      value: "bekzodsoatmuminov@gmail.com",
      color: accent,
      href: "mailto:bekzodsoatmuminov@gmail.com",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      type: "GitHub",
      value: "github.com/bekhzodev",
      color: "#00d4aa",
      href: "https://github.com/bekhzodev",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )
    },
    {
      type: "Telegram",
      value: "@bekzod_soatmuminov17",
      color: "#8b5cf6",
      href: "https://t.me/bekzod_soatmuminov17",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.57-.46.71-.93.44l-2.58-1.9-1.24 1.2c-.14.14-.26.26-.52.26l.18-2.63 4.74-4.28c.21-.18-.04-.28-.32-.1L7.9 14.49l-2.53-.79c-.55-.17-.56-.55.12-.82l9.89-3.81c.46-.17.86.11.26.73z"/>
        </svg>
      )
    },
    {
      type: lang === 'uz' ? "Joylashuv" : "Location",
      value: "O'zMU, Toshkent",
      color: "#f59e0b",
      href: "https://www.google.com/maps/search/O'zbekiston+Milliy+Universiteti,+Toshkent",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
  ]

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    setError(false)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      setError(true)
      setTimeout(() => setError(false), 4000)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" style={{ padding: '40px 24px', borderTop: '0.5px solid var(--border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Sarlavha */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text3)', fontFamily: 'monospace' }}>06</span>
          <h2 style={{ fontSize: '22px', fontWeight: 500, color: 'var(--text)' }}>
            {lang === 'uz' ? "Bog'lanish" : 'Contact'}
          </h2>
          <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

          {/* Chap */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: 1.8, marginBottom: '8px' }}>
              {lang === 'uz'
                ? "Hamkorlik, savol yoki takliflar bo'lsa — xabar yuboring! Imkon qadar tez javob beraman."
                : "For collaboration, questions or suggestions — send a message! I'll reply as soon as possible."}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'var(--card)',
                    border: '0.5px solid var(--border)',
                    borderRadius: '10px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'border 0.2s, transform 0.2s',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = c.color
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: c.color + '18',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.color
                  }}>
                    {c.icon}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text3)' }}>{c.type}</div>
                  <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text)', textAlign: 'center' }}>
                    {c.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Google Maps */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '0.5px solid var(--border)' }}>
              <iframe
                title="OzMU joylashuv"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.2837!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7cdb437c8f%3A0x8b9c8d7f1f2e3a4b!2sNational%20University%20of%20Uzbekistan!5e0!3m2!1sen!2suz!4v1234567890"
                width="100%"
                height="180"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Visitor counter */}
            <div style={{
              background: 'var(--card)', border: '0.5px solid var(--border)',
              borderRadius: '10px', padding: '12px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#00d4aa">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
                <span style={{ fontSize: '12px', color: 'var(--text2)' }}>
                  {lang === 'uz' ? "Saytni ko'rganlar" : 'Total visitors'}
                </span>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 500, color: accent }}>916</span>
            </div>
          </div>

          {/* O'ng — forma */}
          <div style={{
            background: 'var(--card)', border: '0.5px solid var(--border)',
            borderRadius: '14px', padding: '24px',
          }}>
            <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '20px' }}>
              {lang === 'uz' ? 'Xabar yuborish' : 'Send a message'}
            </div>

            <label style={{ fontSize: '11px', color: 'var(--text3)', display: 'block', marginBottom: '5px' }}>
              {lang === 'uz' ? 'Ismingiz' : 'Your name'}
            </label>
            <input
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder={lang === 'uz' ? 'Ism Familiya' : 'Full Name'}
              style={{
                width: '100%', padding: '9px 12px', marginBottom: '14px',
                background: 'var(--bg3)', border: '0.5px solid var(--border2)',
                borderRadius: '8px', color: 'var(--text)', fontSize: '12px', outline: 'none',
              }}
            />

            <label style={{ fontSize: '11px', color: 'var(--text3)', display: 'block', marginBottom: '5px' }}>
              Email
            </label>
            <input
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              placeholder="email@example.com"
              style={{
                width: '100%', padding: '9px 12px', marginBottom: '14px',
                background: 'var(--bg3)', border: '0.5px solid var(--border2)',
                borderRadius: '8px', color: 'var(--text)', fontSize: '12px', outline: 'none',
              }}
            />

            <label style={{ fontSize: '11px', color: 'var(--text3)', display: 'block', marginBottom: '5px' }}>
              {lang === 'uz' ? 'Xabar' : 'Message'}
            </label>
            <textarea
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              placeholder={lang === 'uz' ? 'Xabaringizni yozing...' : 'Write your message...'}
              style={{
                width: '100%', padding: '9px 12px', marginBottom: '16px',
                background: 'var(--bg3)', border: '0.5px solid var(--border2)',
                borderRadius: '8px', color: 'var(--text)', fontSize: '12px',
                height: '100px', resize: 'none', outline: 'none',
              }}
            />

            {/* Xato xabari */}
            {error && (
              <div style={{
                fontSize: '11px', color: '#e24b4a',
                background: '#e24b4a18', border: '0.5px solid #e24b4a30',
                borderRadius: '7px', padding: '8px 12px', marginBottom: '12px'
              }}>
                {lang === 'uz' ? 'Xatolik yuz berdi. Qayta urinib ko\'ring!' : 'Something went wrong. Please try again!'}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={sending}
              style={{
                width: '100%', padding: '10px',
                background: sent ? '#00d4aa' : error ? '#e24b4a' : accent,
                border: 'none', borderRadius: '8px',
                color: '#fff', fontSize: '12px',
                fontWeight: 500, cursor: sending ? 'not-allowed' : 'pointer',
                transition: 'background 0.3s',
                opacity: sending ? 0.8 : 1,
              }}
            >
              {sending
                ? (lang === 'uz' ? 'Yuborilmoqda...' : 'Sending...')
                : sent
                  ? (lang === 'uz' ? '✓ Yuborildi!' : '✓ Sent!')
                  : (lang === 'uz' ? 'Yuborish' : 'Send')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}