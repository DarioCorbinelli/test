'use client'

import { themesConfig } from '@/config/themes'
import { getSystemColorMode } from '@/helpers/themes'
import { At, PersistedTheme, ResolvedTheme, ThemePath } from '@/types/themes/context'
import { set } from 'lodash'
import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

// THEME CONTEXT ----------------------------------------------------------------
interface ThemeContext {
  resolvedTheme: ResolvedTheme | null
  theme: PersistedTheme | null
  setTheme: <K extends ThemePath>(path: K, value: At<PersistedTheme, K>) => void
}

const ThemeContext = createContext<ThemeContext | null>(null)


// THEME PROVIDER ---------------------------------------------------------------
interface ThemeProviderProps extends PropsWithChildren { }

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [persistedTheme, setPersistedTheme] = useState<PersistedTheme | null>(null)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme | null>(null)

  function setTheme<K extends ThemePath>(path: K, value: At<PersistedTheme, K>) {
    setPersistedTheme((prev) => {
      if (!prev) return prev
      let updatedTheme = { ...prev }
      const pathParts = path.split('.') as Array<keyof PersistedTheme>
      let currentPart: any = updatedTheme
      for (let i = 0; i < pathParts.length - 1; i++) {
        currentPart = currentPart[pathParts[i]]
      }
      currentPart[pathParts[pathParts.length - 1]] = value
      return updatedTheme
    })
  }

  const initializeTheme = `(function() {
    const colorSet_dataAttr = 'data-${themesConfig.colors.sets.dataAttribute}'
    const colorMode_dataAttr = 'data-${themesConfig.colors.modes.dataAttribute}'
    const borderRadius_dataAttr = 'data-${themesConfig.borderRadius.dataAttribute}'

    const defaultColorSet = '${themesConfig.colors.sets.default}'
    const defaultColorMode = '${themesConfig.colors.modes.default}'
    const defaultBorderRadius = '${themesConfig.borderRadius.default}'

    function getSystemColorMode() {
      const systemColorMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : defaultColorMode
      return systemColorMode
    }

    const theme_json = localStorage.getItem('theme')
    const theme = JSON.parse(theme_json)

    if (!theme) {
      document.documentElement.setAttribute(colorSet_dataAttr, defaultColorSet)
      document.documentElement.setAttribute(colorMode_dataAttr, getSystemColorMode())
      document.documentElement.setAttribute(borderRadius_dataAttr, defaultBorderRadius)

      localStorage.setItem('theme', JSON.stringify({colors: {mode: 'system', set: defaultColorSet}, borderRadius: defaultBorderRadius}))
    }

    document.documentElement.setAttribute(colorSet_dataAttr, theme.colors.set)
    document.documentElement.setAttribute(colorMode_dataAttr, theme.colors.mode === 'system' ? getSystemColorMode() : theme.colors.mode)
    document.documentElement.setAttribute(borderRadius_dataAttr, theme.borderRadius)
  })()`

  // get theme from localStorage
  useEffect(() => {
    const persistedTheme_json = localStorage.getItem('theme')
    if (!persistedTheme_json) return

    const persistedTheme = JSON.parse(persistedTheme_json) as PersistedTheme
    setPersistedTheme(persistedTheme)
  }, [])

  // resolve theme
  useEffect(() => {
    if (!persistedTheme) return

    setResolvedTheme({
      ...persistedTheme,
      colors: {
        ...persistedTheme.colors,
        mode: persistedTheme.colors.mode === 'system' ? getSystemColorMode() : persistedTheme.colors.mode,
      },
    })

    localStorage.setItem('theme', JSON.stringify(persistedTheme))
  }, [persistedTheme])

  // update data attributes
  useEffect(() => {
    if (!resolvedTheme) return

    document.documentElement.setAttribute(`data-${themesConfig.colors.sets.dataAttribute}`, resolvedTheme.colors.set)
    document.documentElement.setAttribute(`data-${themesConfig.colors.modes.dataAttribute}`, resolvedTheme.colors.mode)
    document.documentElement.setAttribute(`data-${themesConfig.borderRadius.dataAttribute}`, resolvedTheme.borderRadius)
  }, [resolvedTheme])

  return (
    <ThemeContext.Provider value={{ theme: persistedTheme, resolvedTheme, setTheme }}>
      <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider


// THEME CONSUMER ---------------------------------------------------------------
export function useTheme() {
  const theme = useContext(ThemeContext)

  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return theme
}