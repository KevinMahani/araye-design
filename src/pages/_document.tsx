import { Html, Head, Main, NextScript } from 'next/document'

const siteUrl = 'https://araye-studio.vercel.app'
const title   = 'ARAYE Studio — Architecture & Interior Design'
const desc    = 'Tehran-based architecture and interior design studio crafting refined spaces with purpose.'
const ogImage = `${siteUrl}/og-image.jpg`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon"             href="/favicon.ico" sizes="any" />
        <link rel="icon"             href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Theme */}
        <meta name="theme-color" content="#2D4A3E" />

        {/* Primary meta */}
        <meta name="description" content={desc} />

        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:site_name"   content="ARAYE Studio" />
        <meta property="og:url"         content={siteUrl} />
        <meta property="og:title"       content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image"       content={ogImage} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image"       content={ogImage} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
