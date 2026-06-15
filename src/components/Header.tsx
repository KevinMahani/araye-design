import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLang } from '@/contexts/LanguageContext'
import { nav } from '@/data/content'

export default function Header() {
  const { lang, toggle, isRTL } = useLang()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // On non-hero pages, start scrolled so text is always dark
  const isHeroPage = router.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    // initialise on mount
    setScrolled(window.scrollY > 40)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [router.pathname])

  const links = [
    { href: '/',          label: nav.home      },
    { href: '/services',  label: nav.services  },
    { href: '/portfolio', label: nav.portfolio },
    { href: '/about',     label: nav.about     },
    { href: '/contact',   label: nav.contact   },
  ]

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href)

  // Colour logic: transparent header over dark hero → white text; scrolled → dark text
  const transparent = isHeroPage && !scrolled
  const textColor    = transparent ? '#F8F7F4'             : '#1A1A18'
  const mutedColor   = transparent ? 'rgba(248,247,244,0.7)' : '#8A8A85'
  const activeColor  = transparent ? '#A8C4B8'             : '#2D4A3E'
  const barColor     = transparent ? 'rgba(248,247,244,0.6)' : '#1A1A18'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(248,247,244,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid #D8D6D2' : 'none',
          direction: 'ltr',
        }}
      >
        <div
          className="max-w-site mx-auto px-5 md:px-8 h-16 flex items-center justify-between"
          style={{ maxWidth: 1200 }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 500,
              fontSize: 18,
              letterSpacing: '-0.03em',
              color: textColor,
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
          >
            ARAYE
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: 13,
                  letterSpacing: '0.01em',
                  color: isActive(href) ? activeColor : textColor,
                  textDecoration: 'none',
                  fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif',
                  fontWeight: isActive(href) ? 500 : 400,
                  transition: 'color 0.3s, opacity 0.2s',
                }}
                className="nav-link"
              >
                {label[lang]}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Lang toggle — bigger, visible */}
            <button
              onClick={toggle}
              style={{
                fontSize: 12,
                letterSpacing: '0.1em',
                color: textColor,
                background: transparent ? 'rgba(255,255,255,0.12)' : 'rgba(45,74,62,0.08)',
                border: `1px solid ${transparent ? 'rgba(248,247,244,0.35)' : 'rgba(45,74,62,0.25)'}`,
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                textTransform: 'uppercase',
                padding: '6px 12px',
                borderRadius: 2,
                transition: 'all 0.2s',
                fontWeight: 500,
                minWidth: 48,
              }}
              className="lang-btn"
            >
              {lang === 'en' ? 'فا' : 'EN'}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-block cta-btn"
              style={{
                fontSize: 12,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: transparent ? '#0E1510' : '#F8F7F4',
                backgroundColor: transparent ? 'rgba(248,247,244,0.9)' : '#2D4A3E',
                padding: '8px 18px',
                textDecoration: 'none',
                fontFamily: 'DM Sans, sans-serif',
                transition: 'background-color 0.2s, color 0.2s',
                fontWeight: 500,
              }}
            >
              {lang === 'en' ? 'Start a Project' : 'شروع پروژه'}
            </Link>

            {/* Mobile burger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            >
              <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
                <span style={{ display: 'block', height: 1, background: barColor, transition: 'all 0.3s', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }} />
                <span style={{ display: 'block', height: 1, background: barColor, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
                <span style={{ display: 'block', height: 1, background: barColor, transition: 'all 0.3s', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 pt-16"
          style={{ backgroundColor: '#F8F7F4', direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <nav className="flex flex-col px-6 pt-8 gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: 22,
                  color: isActive(href) ? '#2D4A3E' : '#1A1A18',
                  textDecoration: 'none',
                  fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                }}
              >
                {label[lang]}
              </Link>
            ))}
            <Link
              href="/contact"
              style={{
                marginTop: 16,
                fontSize: 13,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#F8F7F4',
                backgroundColor: '#2D4A3E',
                padding: '12px 24px',
                textDecoration: 'none',
                fontFamily: 'DM Sans, sans-serif',
                display: 'inline-block',
                alignSelf: 'flex-start',
              }}
            >
              {lang === 'en' ? 'Start a Project' : 'شروع پروژه'}
            </Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        .nav-link:hover { opacity: 0.65; }
        .lang-btn:hover { opacity: 0.8; }
        .cta-btn:hover { opacity: 0.85; }
      `}</style>
    </>
  )
}
