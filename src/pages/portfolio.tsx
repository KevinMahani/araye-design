import { useState } from 'react'
import Layout from '@/components/Layout'
import Lightbox from '@/components/Lightbox'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/contexts/LanguageContext'
import { projects, Project } from '@/data/content'

const ALL = 'all'

export default function Portfolio() {
  const { lang, isRTL } = useLang()
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState(ALL)

  const categories = {
    all:         { en: 'All',         fa: 'همه'    },
    Residential: { en: 'Residential', fa: 'مسکونی' },
    Commercial:  { en: 'Commercial',  fa: 'تجاری'  },
  }

  const filtered = filter === ALL ? projects : projects.filter(p => p.category.en === filter)

  return (
    <Layout title="Portfolio — ARAYE Studio">
      {/* Header */}
      <section style={{ paddingTop: 120, paddingBottom: 60, paddingLeft: 32, paddingRight: 32, backgroundColor: '#F8F7F4', direction: isRTL ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 16 }}>{lang === 'en' ? 'Our Work' : 'کارهای ما'}</p>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 32 }}>
              {lang === 'en' ? 'Portfolio' : 'پورتفولیو'}
            </h1>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal delay={100}>
            <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 18px', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s', backgroundColor: filter === key ? '#2D4A3E' : '#EDECEA', color: filter === key ? '#F8F7F4' : '#8A8A85' }}
                >
                  {label[lang]}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '2px 0 80px', backgroundColor: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 2 }}>
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={Math.min(i % 3, 2) * 80}>
                <button
                  onClick={() => setActiveProject(project)}
                  style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', width: '100%', aspectRatio: '3/4', overflow: 'hidden', display: 'block' }}
                  className="portfolio-card"
                >
                  <img
                    src={project.img}
                    alt={project.name[lang]}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    className="portfolio-img"
                  />
                  {/* Hover overlay (desktop) */}
                  <div
                    className="portfolio-overlay"
                    style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14,21,16,0)', transition: 'background-color 0.3s ease', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24, direction: isRTL ? 'rtl' : 'ltr' }}
                  >
                    <div className="portfolio-info" style={{ opacity: 0, transform: 'translateY(8px)', transition: 'all 0.3s ease' }}>
                      <p style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6A8A7E', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>{project.category[lang]} · {project.year}</p>
                      <p style={{ fontSize: 18, fontWeight: 400, color: '#F8F7F4', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', letterSpacing: '-0.02em', marginBottom: 4 }}>{project.name[lang]}</p>
                      <p style={{ fontSize: 12, color: '#8A8A85', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>{project.location[lang]}</p>
                    </div>
                  </div>
                  {/* Always-visible on mobile */}
                  <div className="portfolio-mobile-label" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '60px 20px 20px', background: 'linear-gradient(to top, rgba(14,21,16,0.75), transparent)', direction: isRTL ? 'rtl' : 'ltr' }}>
                    <p style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6A8A7E', fontFamily: 'DM Sans, sans-serif', marginBottom: 2 }}>{project.category[lang]}</p>
                    <p style={{ fontSize: 15, color: '#F8F7F4', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif' }}>{project.name[lang]}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />
    </Layout>
  )
}
