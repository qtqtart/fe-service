import { PaletteMode, PaletteOptions } from "@mui/material";
import { deepPurple, grey, purple } from "@mui/material/colors";

export const palette = (themeMode: PaletteMode) => {
  const colors: PaletteOptions = {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
      contrastText: themeMode === "dark" ? purple[400] : purple[600],
    },
    secondary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700],
      contrastText: themeMode === "dark" ? deepPurple[400] : deepPurple[600],
    },
    divider: grey[500],
  };

  const light: PaletteOptions = {
    mode: "light",
    background: {
      default: grey[100],
      paper: grey[300],
    },
    text: {
      primary: grey[900],
      disabled: grey[500],
    },

    ...colors,
  };

  const dark: PaletteOptions = {
    mode: "dark",
    background: {
      default: grey[900],
      paper: grey[700],
    },
    text: {
      primary: grey[100],
      disabled: grey[500],
    },

    ...colors,
  };

  return themeMode === "dark" ? dark : light;
};
