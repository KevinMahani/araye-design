import { useEffect } from 'react'
import Head from 'next/head'
import { useLang } from '@/contexts/LanguageContext'
import Header from './Header'
import Footer from './Footer'
import K7Banner from './K7Banner'

interface Props {
  children: React.ReactNode
  title?: string
  description?: string
}

export default function Layout({
  children,
  title = 'ARAYE Studio',
  description = 'Tehran-based interior design studio. Residential and commercial spaces.',
}: Props) {
  const { isRTL } = useLang()

  useEffect(() => {
    if (isRTL) {
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl')
    }
  }, [isRTL])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="flex flex-col min-h-screen has-k7-banner"
        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>

      <K7Banner />
    </>
  )
}
