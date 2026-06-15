import { useState } from 'react'
import Layout from '@/components/Layout'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/contexts/LanguageContext'
import { contactPage } from '@/data/content'

export default function Contact() {
  const { lang, isRTL } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })

  const cf = contactPage.form
  const types = contactPage.projectTypes[lang === 'en' ? 'en' : 'fa']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout title="Contact — ARAYE Studio">
      <section style={{ paddingTop: 120, paddingBottom: 100, paddingLeft: 32, paddingRight: 32, minHeight: '90vh', backgroundColor: '#F8F7F4', direction: isRTL ? 'rtl' : 'ltr' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Left: info */}
          <ScrollReveal style={{ paddingTop: 20 }}>
            <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 20 }}>{lang === 'en' ? 'Get in Touch' : 'در تماس باشید'}</p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 24 }}>
              {contactPage.title[lang]}
            </h1>
            <div className="accent-line" style={{ marginBottom: 28 }} />
            <p style={{ fontSize: 15, color: '#8A8A85', lineHeight: 1.75, marginBottom: 48, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>
              {contactPage.intro[lang]}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 6 }}>{lang === 'en' ? 'Studio' : 'استودیو'}</p>
                <p style={{ fontSize: 14, color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif', lineHeight: 1.6 }}>{contactPage.info.address[lang]}</p>
              </div>
              <div>
                <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 6 }}>{lang === 'en' ? 'Email' : 'ایمیل'}</p>
                <a href={`mailto:${contactPage.info.email}`} style={{ fontSize: 14, color: '#2D4A3E', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>{contactPage.info.email}</a>
              </div>
              <div>
                <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 6 }}>Instagram</p>
                <a href="#" style={{ fontSize: 14, color: '#2D4A3E', fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>{contactPage.info.instagram}</a>
              </div>
              <p style={{ fontSize: 13, color: '#8A8A85', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>{contactPage.info.response[lang]}</p>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={120}>
            {submitted ? (
              <div style={{ padding: '56px 48px', backgroundColor: '#EDECEA', display: 'flex', flexDirection: 'column', alignItems: isRTL ? 'flex-end' : 'flex-start', minHeight: 420 }}>
                <div style={{ width: 32, height: 32, border: '1px solid #2D4A3E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7L6 11L12 3" stroke="#2D4A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 style={{ fontSize: 24, fontWeight: 300, letterSpacing: '-0.02em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 16 }}>
                  {contactPage.success.title[lang]}
                </h2>
                <p style={{ fontSize: 14, color: '#8A8A85', lineHeight: 1.75, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif', maxWidth: 360 }}>
                  {contactPage.success.message[lang]}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={labelStyle()}>{cf.name[lang]}</label>
                  <input type="text" required placeholder={cf.placeholder.name[lang]} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle(isRTL)} />
                </div>
                <div>
                  <label style={labelStyle()}>{cf.email[lang]}</label>
                  <input type="email" required placeholder={cf.placeholder.email[lang]} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ ...inputStyle(isRTL), direction: 'ltr' }} />
                </div>
                <div>
                  <label style={labelStyle()}>{cf.projectType[lang]}</label>
                  <select required value={form.projectType} onChange={e => setForm({ ...form, projectType: e.target.value })} style={inputStyle(isRTL)}>
                    <option value="">{cf.selectDefault[lang]}</option>
                    {types.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle()}>{cf.message[lang]}</label>
                  <textarea required rows={5} placeholder={cf.placeholder.message[lang]} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle(isRTL), resize: 'vertical' }} />
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  style={{ backgroundColor: '#2D4A3E', color: '#F8F7F4', border: 'none', cursor: 'pointer', padding: '14px 28px', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', alignSelf: isRTL ? 'flex-end' : 'flex-start' }}
                >
                  {cf.submit[lang]}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
      <style jsx>{`
        .submit-btn:hover { opacity: 0.82; }
        input:focus, select:focus, textarea:focus { outline: none; border-color: #2D4A3E !important; }
      `}</style>
    </Layout>
  )
}

function labelStyle(): React.CSSProperties {
  return { display: 'block', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A8A85', fontFamily: 'DM Sans, sans-serif', marginBottom: 8 }
}

function inputStyle(isRTL: boolean): React.CSSProperties {
  return { width: '100%', padding: '12px 16px', backgroundColor: '#EDECEA', border: '1px solid transparent', borderBottom: '1px solid #D8D6D2', fontSize: 14, color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif', outline: 'none', direction: isRTL ? 'rtl' : 'ltr', transition: 'border-color 0.2s' }
}
