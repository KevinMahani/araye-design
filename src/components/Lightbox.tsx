import { useEffect } from 'react'
import { Project } from '@/data/content'
import { useLang } from '@/contexts/LanguageContext'

interface Props {
  project: Project | null
  onClose: () => void
}

export default function Lightbox({ project, onClose }: Props) {
  const { lang, isRTL } = useLang()

  useEffect(() => {
    if (!project) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="lightbox-panel relative w-full max-w-5xl mx-auto my-8 flex flex-col md:flex-row rounded-sm overflow-hidden"
        style={{ background: '#141612', maxHeight: '90vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
          aria-label="Close"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 22, lineHeight: 1 }}
        >
          ×
        </button>

        {/* Image */}
        <div className="w-full md:w-3/5 flex-shrink-0" style={{ minHeight: 300 }}>
          <img
            src={project.imgDetail}
            alt={project.name[lang]}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Info */}
        <div
          className="flex-1 p-8 md:p-10 flex flex-col justify-between overflow-y-auto"
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          <div>
            <p className="label-caps mb-4" style={{ color: '#6A8A7E' }}>
              {project.category[lang]}
            </p>
            <h2
              className="text-white mb-1"
              style={{
                fontSize: 24,
                fontFamily: isRTL ? 'Shabnam, sans-serif' : 'DM Sans, sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              {project.name[lang]}
            </h2>
            <p style={{ fontSize: 13, color: '#6A8A7E', marginBottom: 24 }}>
              {project.location[lang]} · {project.year}
            </p>

            <div className="accent-line" />

            <p
              style={{
                color: '#B8B8B4',
                fontSize: 14,
                lineHeight: 1.8,
                marginTop: 20,
                fontFamily: isRTL ? 'Shabnam, sans-serif' : 'Inter, sans-serif',
              }}
            >
              {project.description[lang]}
            </p>
          </div>

          <p
            style={{
              fontSize: 13,
              color: '#4A4A46',
              marginTop: 32,
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            {project.scope[lang]}
          </p>
        </div>
      </div>
    </div>
  )
}
