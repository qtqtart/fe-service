import { createTheme as MUICreateTheme, PaletteMode, ThemeOptions } from '@mui/material'

import { breakpoints } from './breakpoints'
import { palette } from './palette'
import { shadows } from './shadows'

export const createTheme = (themeMode: PaletteMode) => {
  const themeOptions: ThemeOptions = {
    breakpoints,
    palette: palette(themeMode),
    shadows,
    shape: {
      borderRadius: 9,
    },
  }

  return MUICreateTheme(themeOptions)
}
