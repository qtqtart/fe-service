import { PaletteMode } from "@mui/material";
import { useEffect, useState } from "react";

export const usePrefersColorScheme = () => {
  const [prefersColorScheme, setPrefersColorScheme] = useState<PaletteMode>(
    () => {
      if (typeof window === "undefined") return "light";

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    },
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) =>
      setPrefersColorScheme(event.matches ? "dark" : "light");

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return {
    prefersColorScheme,
  };
};
