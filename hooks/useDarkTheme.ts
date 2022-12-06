import { useState, useMemo, useEffect, useCallback } from 'react'

// https://tailwindcss.com/docs/dark-mode
const hasDarkTheme = () => {
  if (typeof window === 'undefined') return false
  return (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}

const activateDarkTheme = (isDarkTheme: boolean) => {
  if (isDarkTheme) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('color-theme', 'light')
  }
}

const useDarkTheme = (): [boolean, () => void] => {
  const [isDarkTheme, setDarkTheme] = useState(hasDarkTheme())

  useEffect(() => {
    activateDarkTheme(isDarkTheme)
  }, [isDarkTheme])

  const toggle = useCallback(() => {
    setDarkTheme(!isDarkTheme)
  }, [setDarkTheme, isDarkTheme])

  return useMemo(() => [isDarkTheme, toggle], [isDarkTheme, toggle])
}

export default useDarkTheme
