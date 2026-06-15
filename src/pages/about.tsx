import Layout from '@/components/Layout'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { useLang } from '@/contexts/LanguageContext'
import { aboutPage, team } from '@/data/content'

export default function About() {
  const { lang, isRTL } = useLang()

  return (
    <Layout title="About — ARAYE Studio">
      {/* Story section */}
      <section style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: 32, paddingRight: 32, backgroundColor: '#F8F7F4', direction: isRTL ? 'rtl' : 'ltr' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 40 }}>
              {aboutPage.title[lang]}
            </h1>
            <div className="accent-line" style={{ marginBottom: 32 }} />
            {aboutPage.story.map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: '#8A8A85', lineHeight: 1.8, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif', marginBottom: 20 }}>
                {para[lang]}
              </p>
            ))}
            <div style={{ marginTop: 40 }}>
              <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 20 }}>{lang === 'en' ? 'Principles' : 'اصول'}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {aboutPage.values.map((v, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#2D4A3E', flexShrink: 0 }} />
                    <p style={{ fontSize: 14, color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif' }}>{v[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140} className="mob-img-first" style={{ aspectRatio: '3/4', overflow: 'hidden', marginTop: 8 }}>
            <img src={aboutPage.studioImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '88px 32px', backgroundColor: '#EDECEA', direction: isRTL ? 'rtl' : 'ltr' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <p className="label-caps" style={{ color: '#8A8A85', marginBottom: 16 }}>{lang === 'en' ? 'The Team' : 'تیم'}</p>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 56 }}>
              {lang === 'en' ? 'People' : 'افراد'}
            </h2>
          </ScrollReveal>

          <div className="three-col" style={{ gap: 2 }}>
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', backgroundColor: '#D8D6D2' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px 0 8px', backgroundColor: '#EDECEA' }}>
                  <p style={{ fontSize: 16, fontWeight: 400, color: '#1A1A18', letterSpacing: '-0.01em', fontFamily: 'DM Sans, sans-serif', marginBottom: 4 }}>{member.name}</p>
                  <p style={{ fontSize: 12, color: '#6A8A7E', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 12 }}>{member.role[lang]}</p>
                  <p style={{ fontSize: 13, color: '#8A8A85', lineHeight: 1.7, fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>{member.bio[lang]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ScrollReveal>
        <section style={{ padding: '72px 32px', backgroundColor: '#F8F7F4', direction: isRTL ? 'rtl' : 'ltr' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A18', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif', marginBottom: 8 }}>
                {lang === 'en' ? 'Ready to start a project?' : 'آماده شروع یه پروژه‌ای؟'}
              </h2>
              <p style={{ fontSize: 14, color: '#8A8A85', fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif' }}>
                {lang === 'en' ? 'We respond to all inquiries within two business days.' : 'به همه درخواست‌ها ظرف دو روز کاری پاسخ می‌دیم.'}
              </p>
            </div>
            <Link href="/contact" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#F8F7F4', backgroundColor: '#2D4A3E', padding: '14px 32px', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }}>
              {lang === 'en' ? 'Start a Project' : 'شروع پروژه'}
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  )
}
