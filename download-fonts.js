/**
 * Run once: node download-fonts.js
 * Downloads Shabnam Persian font files into public/fonts/
 * Source: github.com/rastikerdar/shabnam-font (v5.0.1)
 */
const https = require('https')
const fs    = require('fs')
const path  = require('path')

const OUT = path.join(__dirname, 'public', 'fonts')
fs.mkdirSync(OUT, { recursive: true })

const BASE = 'https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font@v5.0.1/dist/'
const fonts = {
  'Shabnam-Light.woff2':  BASE + 'Shabnam-Light.woff2',
  'Shabnam.woff2':        BASE + 'Shabnam.woff2',
  'Shabnam-Medium.woff2': BASE + 'Shabnam-Medium.woff2',
  'Shabnam-Bold.woff2':   BASE + 'Shabnam-Bold.woff2',
}

function download(filename, url) {
  return new Promise((resolve, reject) => {
    const dest = path.join(OUT, filename)
    const file = fs.createWriteStream(dest)
    const get = (u) => {
      https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close(); return get(res.headers.location)
        }
        if (res.statusCode !== 200) {
          file.close(); try { fs.unlinkSync(dest) } catch {}
          return reject(new Error(`HTTP ${res.statusCode} for ${u}`))
        }
        res.pipe(file)
        file.on('finish', () => {
          file.close()
          const kb = Math.round(fs.statSync(dest).size / 1024)
          console.log(`✓  ${filename} (${kb} KB)`)
          resolve()
        })
      }).on('error', err => { file.close(); reject(err) })
    }
    get(url)
  })
}

;(async () => {
  console.log(`Saving to: ${OUT}\n`)
  for (const [name, url] of Object.entries(fonts)) {
    try { await download(name, url) }
    catch (e) { console.error(`✗  ${name}: ${e.message}`) }
  }
  console.log('\nDone. Restart the dev server.')
})()
