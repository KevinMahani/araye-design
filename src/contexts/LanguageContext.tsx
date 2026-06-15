import { createContext, useContext, useState, useEffect } from 'react'

export type Lang = 'en' | 'fa'

interface LanguageContextType {
  lang: Lang
  toggle: () => void
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggle: () => {},
  isRTL: false,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggle = () => setLang(l => (l === 'en' ? 'fa' : 'en'))
  const isRTL = lang === 'fa'

  useEffect(() => {
    document.body.classList.toggle('rtl', isRTL)
  }, [isRTL])

  return (
    <LanguageContext.Provider value={{ lang, toggle, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
