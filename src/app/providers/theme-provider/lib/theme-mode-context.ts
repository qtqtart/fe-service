import { PaletteMode } from '@mui/material'
import { createContext } from 'react'

type Props = {
  themeMode: PaletteMode
  toggleThemeMode: () => void
}

export const ThemeModeContext = createContext<null | Props>(null)
