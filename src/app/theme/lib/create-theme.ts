import {
  createTheme as MUICreateTheme,
  PaletteMode,
  ThemeOptions,
} from "@mui/material";

import { breakpoints } from "./breakpoints";
import { palette } from "./palette";

export const createTheme = (themeMode: PaletteMode) => {
  const themeOptions: ThemeOptions = {
    breakpoints,
    palette: palette(themeMode),
  };

  return MUICreateTheme(themeOptions);
};
