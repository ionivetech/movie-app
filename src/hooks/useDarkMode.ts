import { useState, useEffect } from 'react'

export default function useDarkMode() {
  const isDarkmode: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState<string>(localStorage.theme || isDarkmode ? 'dark' : 'light')

  useEffect(() => {
    const root = window.document.documentElement
    root.setAttribute('class', '')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return { theme, setTheme }
}
