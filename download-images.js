/**
 * Run once: node download-images.js
 * Downloads all ARAYE Studio images from Unsplash into public/images/
 */
const https = require('https')
const fs    = require('fs')
const path  = require('path')

const OUT = path.join(__dirname, 'public', 'images')
fs.mkdirSync(OUT, { recursive: true })

const images = {
  // Hero & general
  'hero.jpg':                   'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
  'about-studio.jpg':           'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',

  // Projects
  'project-elahiyeh.jpg':       'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
  'project-vanak.jpg':          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
  'project-shahrak.jpg':        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=900&q=80',
  'project-parse.jpg':          'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80',
  'project-zafaraniyeh.jpg':    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80',
  'project-negar.jpg':          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',

  // Team
  'team-sara.jpg':              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  'team-dariush.jpg':           'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  'team-mina.jpg':              'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
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
          file.close(); fs.unlinkSync(dest)
          return reject(new Error(`HTTP ${res.statusCode}`))
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
  for (const [name, url] of Object.entries(images)) {
    try { await download(name, url) }
    catch (e) { console.error(`✗  ${name}: ${e.message}`) }
  }
  console.log('\nDone. Run `npm run build` next.')
})()
