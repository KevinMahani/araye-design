import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import Lightbox from '@/components/Lightbox'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/contexts/LanguageContext'
import { hero, serviceTeaser, projects, Project } from '@/data/content'

// ── SVG icons for each service ──────────────────────────────────────────
const ServiceIcons = [
  // Residential — house outline
  <svg key="res" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D4A3E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14L16 4l12 10v14H20v-8h-8v8H4V14z"/>
  </svg>,
  // Commercial — building
  <svg key="com" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D4A3E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="6" width="24" height="22" rx="0.5"/>
    <path d="M4 12h24M4 18h24M12 12v16M20 12v16"/>
  </svg>,
  // Consultation — compass
  <svg key="con" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D4A3E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="16" r="12"/>
    <path d="M16 4v2M16 26v2M4 16h2M26 16h2"/>
    <circle cx="16" cy="16" r="3"/>
    <path d="M21 11l-3 5M11 21l3-5"/>
  </svg>,
]

export default function Home() {
  const { lang, isRTL } = useLang()
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const featuredProjects = projects.slice(0, 4)

  return (
    <Layout>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', backgroundColor: '#0E1510' }}>
        <img src={hero.img} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,21,16,0.85) 0%, rgba(14,21,16,0.2) 60%, transparent 100%)' }} />
        <div
          className="hero-fade"
          style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 32px 100px', width: '100%', direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <p className="label-caps hero-fade" style={{ color: '#6A8A7E', marginBottom: 24 }}>{hero.eyebrow[lang]}</p>
          <h1
            className="hero-fade hero-fade-delay-1"
            style={{ fontSize: 'clamp(52px, 8vw, 96px)', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.0, color: '#F8F7F4', marginBottom: 32 }}
          >
            {hero.line1[lang]}<br />{hero.line2[lang]}
          </h1>
          <p
            className="hero-fade hero-fade-delay-2"
            style={{ fontSize: 16, color: '#A8A8A4', maxWidth: 480, lineHeight: 1.7, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif', marginBottom: 40 }}
          >
            {hero.tagline[lang]}
          </p>
          <div className="hero-fade hero-fade-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/portfolio" className="hero-cta-primary" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F8F7F4', backgroundColor: '#2D4A3E', padding: '14px 28px', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
              {hero.cta1[lang]}
            </Link>
            <Link href="/contact" className="hero-cta-secondary" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F8F7F4', border: '1px solid rgba(248,247,244,0.3)', padding: '14px 28px', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>
              {hero.cta2[lang]}
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section style={{ backgroundColor: '#EDECEA', padding: '72px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', direction: isRTL ? 'rtl' : 'ltr' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, backgroundColor: '#D8D6D2' }}>
            {serviceTeaser.map((s, i) => (
              <ScrollReveal key={s.title.en} delay={i * 80} style={{ backgroundColor: '#EDECEA', padding: '40px 32px' }}>
                <div style={{ marginBottom: 20 }}>{ServiceIcons[i]}</div>
                <h3 style={{ fontSize: 17, fontWeight: 400, letterSpacing: '-0.01em', color: '#1A1A18', marginBottom: 10, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif' }}>
                  {s.title[lang]}
                </h3>
                <p style={{ fontSize: 13, color: '#8A8A85', lineHeight: 1.6, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>
                  {s.desc[lang]}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal style={{ marginTop: 32, textAlign: isRTL ? 'right' : 'left' }}>
            <Link href="/services" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D4A3E', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #2D4A3E', paddingBottom: 2 }}>
              {lang === 'en' ? 'All Services' : 'همه خدمات'}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ padding: '88px 32px', backgroundColor: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', direction: isRTL ? 'rtl' : 'ltr' }}>
          <ScrollReveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 12 }}>{lang === 'en' ? 'Selected Work' : 'نمونه کارها'}</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif' }}>
                {lang === 'en' ? 'Recent Projects' : 'پروژه‌های اخیر'}
              </h2>
            </div>
            <Link href="/portfolio" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A8A85', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #D8D6D2', paddingBottom: 2, whiteSpace: 'nowrap' }}>
              {lang === 'en' ? 'View All' : 'همه پروژه‌ها'}
            </Link>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 60} style={{ gridColumn: i === 0 ? 'span 2' : undefined }}>
                <button
                  onClick={() => setActiveProject(project)}
                  style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', width: '100%', aspectRatio: i === 0 ? '4/3' : '1/1', overflow: 'hidden', display: 'block' }}
                  className="portfolio-card"
                >
                  <img src={project.img} alt={project.name[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} className="portfolio-img" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,21,16,0.7) 0%, transparent 50%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24, direction: isRTL ? 'rtl' : 'ltr' }}>
                    <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6A8A7E', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>{project.category[lang]} · {project.year}</p>
                    <p style={{ fontSize: i === 0 ? 22 : 16, fontWeight: 400, color: '#F8F7F4', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', letterSpacing: '-0.02em' }}>{project.name[lang]}</p>
                    <p style={{ fontSize: 12, color: '#8A8A85', marginTop: 4, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>{project.location[lang]}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ backgroundColor: '#0E1510', padding: '88px 32px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', alignItems: 'center', direction: isRTL ? 'rtl' : 'ltr' }}>
          <ScrollReveal>
            <p className="label-caps" style={{ color: '#2D4A3E', marginBottom: 20 }}>{lang === 'en' ? 'The Studio' : 'استودیو'}</p>
            <div className="accent-line" style={{ marginBottom: 24 }} />
            <p style={{ fontSize: 20, fontWeight: 300, color: '#D8D6D2', lineHeight: 1.65, letterSpacing: '-0.01em', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 32 }}>
              {lang === 'en' ? 'ARAYE is a small Tehran-based studio. We design spaces that respond to how people actually live — not how designers think they should.' : 'آرایه یه استودیوی کوچیکه در تهران. فضاهایی طراحی می‌کنیم که با زندگی واقعی آدم‌ها پاسخ می‌دن — نه با اونچه طراحان فکر می‌کنن باید باشه.'}
            </p>
            <Link href="/about" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6A8A7E', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', borderBottom: '1px solid #2D4A3E', paddingBottom: 2 }}>
              {lang === 'en' ? 'About the Studio' : 'درباره استودیو'}
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={120} className="mob-img-below" style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
            <img src="/images/about-studio.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ScrollReveal>
        </div>
      </section>

      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />

      <style jsx>{`
        .hero-cta-primary:hover { opacity: 0.82; }
        .hero-cta-secondary:hover { border-color: rgba(248,247,244,0.7) !important; }
        @media (max-width: 767px) {
          section > div > div[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  )
}
