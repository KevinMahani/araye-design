import { useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/contexts/LanguageContext'
import { services } from '@/data/content'

export default function Services() {
  const { lang, isRTL } = useLang()
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <Layout title="Services — ARAYE Studio">
      {/* Hero */}
      <ScrollReveal>
        <section style={{ paddingTop: 140, paddingBottom: 72, paddingLeft: 32, paddingRight: 32, backgroundColor: '#F8F7F4', direction: isRTL ? 'rtl' : 'ltr', borderBottom: '1px solid #D8D6D2' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 16 }}>{lang === 'en' ? 'What We Do' : 'چه کاری می‌کنیم'}</p>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', maxWidth: 560 }}>
              {lang === 'en' ? 'Services' : 'خدمات'}
            </h1>
          </div>
        </section>
      </ScrollReveal>

      {/* Services image */}
      <div style={{ width: '100%', height: 'clamp(200px, 35vw, 420px)', overflow: 'hidden' }}>
        <img
          src="/images/project-elahiyeh.jpg"
          alt="ARAYE Studio — interior project"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
      </div>

      {/* Services list */}
      <section style={{ padding: '0 32px 100px', backgroundColor: '#F8F7F4' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', borderTop: '2px solid #B8B5B0' }}>
          {services.map((service, idx) => {
            const isOpen = expanded === service.id
            return (
              <ScrollReveal key={service.id} delay={idx * 60}>
                <div
                  className="service-card"
                  style={{ borderBottom: '2px solid #B8B5B0', cursor: 'pointer', padding: '0 16px', margin: '0 -16px', borderRadius: 2, transition: 'background-color 0.2s' }}
                  onClick={() => setExpanded(isOpen ? null : service.id)}
                >
                  {/* Row */}
                  <div style={{ padding: '36px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: isRTL ? 'rtl' : 'ltr' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                      <span className="service-number" style={{ fontSize: isRTL ? 12 : 11, color: '#8A8A85', fontFamily: 'DM Sans, sans-serif', minWidth: 24, transition: 'color 0.2s' }}>
                        0{idx + 1}
                      </span>
                      <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 300, letterSpacing: '-0.02em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif' }}>
                        {service.name[lang]}
                      </h2>
                    </div>

                    {/* Details button */}
                    <span
                      style={{
                        fontSize: isRTL ? 12 : 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: isOpen ? '#F8F7F4' : '#2D4A3E',
                        backgroundColor: isOpen ? '#2D4A3E' : 'transparent',
                        border: '1px solid #2D4A3E',
                        padding: '6px 14px',
                        fontFamily: 'DM Sans, sans-serif',
                        borderRadius: 2,
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        userSelect: 'none',
                      }}
                    >
                      {isOpen ? (lang === 'en' ? 'Close' : 'بستن') : (lang === 'en' ? 'Details' : 'جزئیات')}
                    </span>
                  </div>

                  {/* Accordion body */}
                  {isOpen && (
                    <div
                      style={{ paddingBottom: 48, paddingLeft: isRTL ? 0 : 44, paddingRight: isRTL ? 44 : 0, direction: isRTL ? 'rtl' : 'ltr' }}
                      onClick={e => e.stopPropagation()}
                    >
                      <div className="two-col" style={{ flexWrap: 'wrap' }}>
                        <div>
                          <p style={{ fontSize: 15, color: '#8A8A85', lineHeight: 1.75, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif', marginBottom: 32 }}>
                            {service.description[lang]}
                          </p>
                          <p style={{ fontSize: 13, letterSpacing: '0.04em', color: '#1A1A18', fontFamily: 'DM Sans, sans-serif', marginBottom: 24 }}>
                            {lang === 'en' ? 'Starting from' : 'از'}{' '}<strong>{service.price[lang]}</strong>
                          </p>
                          <Link
                            href="/contact"
                            style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F8F7F4', backgroundColor: '#2D4A3E', padding: '12px 24px', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', display: 'inline-block' }}
                          >
                            {lang === 'en' ? 'Enquire' : 'درخواست'}
                          </Link>
                        </div>
                        <div>
                          <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 20 }}>{lang === 'en' ? 'How it works' : 'روند کار'}</p>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {service.steps.map((step, si) => (
                              <div key={si} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                                <span style={{ fontSize: isRTL ? 12 : 11, color: '#6A8A7E', fontFamily: 'DM Sans, sans-serif', minWidth: 18, paddingTop: 2 }}>{si + 1}</span>
                                <p style={{ fontSize: 13, color: '#8A8A85', lineHeight: 1.7, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>{step[lang]}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* CTA banner */}
      <ScrollReveal>
        <section style={{ backgroundColor: '#0E1510', padding: '72px 32px', direction: isRTL ? 'rtl' : 'ltr' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#F8F7F4', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 8 }}>
                {lang === 'en' ? 'Not sure where to start?' : 'نمی‌دونی از کجا شروع کنی؟'}
              </h2>
              <p style={{ fontSize: 14, color: '#8A8A85', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>
                {lang === 'en' ? 'A consultation session will give you clarity.' : 'یه جلسه مشاوره بهت وضوح می‌ده.'}
              </p>
            </div>
            <Link
              href="/contact"
              style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F8F7F4', border: '1px solid rgba(248,247,244,0.3)', padding: '14px 32px', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }}
            >
              {lang === 'en' ? 'Book a Consultation' : 'رزرو مشاوره'}
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  )
}
