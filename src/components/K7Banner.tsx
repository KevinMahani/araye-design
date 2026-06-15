export default function K7Banner() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 h-11 flex items-center justify-between px-5 md:px-8"
      style={{ backgroundColor: '#2D4A3E', direction: 'ltr' }}
    >
      <span className="text-xs text-white/70 font-sans tracking-wide">
        Built by <span className="text-white font-medium">K7 Studio</span>
      </span>
      <a
        href="/packages.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-white/80 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-1.5"
        style={{ fontFamily: 'DM Sans, Inter, sans-serif' }}
      >
        View Packages
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  )
}
