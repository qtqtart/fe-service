"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useThemeMode } from "@shared/hooks/use-theme-mode";
import { NextPage } from "next";

const RootPage: NextPage = () => {
  const { themeMode, toggleThemeMode } = useThemeMode();

  return (
    <Stack>
      <Typography>this it root page</Typography>

      <IconButton onClick={toggleThemeMode}>
        {themeMode === "dark" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Stack>
  );
};

export default RootPage;
