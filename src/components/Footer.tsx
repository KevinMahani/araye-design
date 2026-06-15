import { useLang } from '@/contexts/LanguageContext'
import { footer, contactPage } from '@/data/content'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer style={{ backgroundColor: '#0E1510', color: '#F8F7F4', borderTop: '1px solid #1E2A1E', marginTop: 'auto', direction: 'ltr' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 32px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40 }}>

          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 20, fontWeight: 500, letterSpacing: '-0.03em', marginBottom: 12 }}>
              ARAYE
            </div>
            <p style={{ fontSize: 13, color: '#4A6A5A', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
              {footer.tagline[lang]}
            </p>
            <p style={{ fontSize: 12, color: '#2D4A3E', marginTop: 8, fontFamily: 'Inter, sans-serif' }}>
              {contactPage.info.address[lang]}
            </p>
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className="label-caps" style={{ color: '#2D4A3E', marginBottom: 4 }}>
              {lang === 'en' ? 'Contact' : 'تماس'}
            </p>
            <a href={`mailto:${contactPage.info.email}`} style={{ fontSize: 13, color: '#8A8A85', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
              {contactPage.info.email}
            </a>
            <a href="#" style={{ fontSize: 13, color: '#8A8A85', textDecoration: 'none', fontFamily: 'Inter, sans-serif', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              {contactPage.info.instagram}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #1E2A1E', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <p style={{ fontSize: 11, color: '#2D4A3E', fontFamily: 'Inter, sans-serif' }}>{footer.copy[lang]}</p>
          <p style={{ fontSize: 11, color: '#2D4A3E', fontFamily: 'Inter, sans-serif' }}>
            Designed &amp; built by{' '}
            <a href="https://k7studio.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: '#4A6A5A', textDecoration: 'none' }}>
              K7 Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
