'use client'

import { createTheme } from '@app/theme'
import { CssBaseline, ThemeProvider as MUIThemeProvider, PaletteMode, StyledEngineProvider } from '@mui/material'
import { LOCAL_STORAGE_KEYS } from '@shared/config'
import { useLocalStorage } from '@shared/hooks/use-local-storage'
import { usePrefersColorScheme } from '@shared/hooks/use-prefers-color-scheme'
import { FC, PropsWithChildren, useMemo } from 'react'

import { ThemeModeContext } from '../lib/theme-mode-context'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { prefersColorScheme } = usePrefersColorScheme()

  const [themeMode, setThemeMode] = useLocalStorage<PaletteMode>(LOCAL_STORAGE_KEYS.THEME_MODE, prefersColorScheme)

  const toggleThemeMode = () => setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const theme = useMemo(() => createTheme(themeMode), [themeMode])

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />

        <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>{children}</ThemeModeContext.Provider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
