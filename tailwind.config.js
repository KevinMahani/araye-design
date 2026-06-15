/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'ary-bg':      '#F8F7F4',
        'ary-text':    '#1A1A18',
        'ary-accent':  '#2D4A3E',
        'ary-surface': '#EDECEA',
        'ary-muted':   '#8A8A85',
        'ary-border':  '#D8D6D2',
        'ary-dark':    '#0E1510',
      },
      fontFamily: {
        sans:    ['DM Sans', 'Inter', 'Arial', 'sans-serif'],
        body:    ['Inter', 'Arial', 'sans-serif'],
        persian: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
      maxWidth: { site: '1280px' },
      letterSpacing: { tight: '-0.02em', tighter: '-0.03em' },
    },
  },
  plugins: [],
}
