import { PaletteMode, PaletteOptions } from '@mui/material'
import { deepPurple, grey, purple } from '@mui/material/colors'

export const palette = (themeMode: PaletteMode) => {
  const colors: PaletteOptions = {
    divider: grey[500],
    primary: {
      contrastText: themeMode === 'dark' ? grey[900] : grey[100],
      dark: purple[700],
      light: purple[300],
      main: purple[500],
    },
    secondary: {
      contrastText: themeMode === 'dark' ? grey[900] : grey[100],
      dark: deepPurple[700],
      light: deepPurple[300],
      main: deepPurple[500],
    },
  }

  const light: PaletteOptions = {
    background: {
      default: grey[100],
      paper: grey[300],
    },
    mode: 'light',
    text: {
      disabled: grey[500],
      primary: grey[900],
    },

    ...colors,
  }

  const dark: PaletteOptions = {
    background: {
      default: grey[900],
      paper: grey[700],
    },
    mode: 'dark',
    text: {
      disabled: grey[500],
      primary: grey[100],
    },

    ...colors,
  }

  return themeMode === 'dark' ? dark : light
}
