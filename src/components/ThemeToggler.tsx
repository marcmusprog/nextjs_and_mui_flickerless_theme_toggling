"use client";

import { Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Pending as PendingIcon,
} from "@mui/icons-material";

export default function ThemeToggler() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let renderedButton = (
    <Button variant="contained" className="w-20 mx-auto">
      <PendingIcon />
    </Button>
  );
  if (mounted) {
    renderedButton = (
      <Button
        variant="contained"
        className="w-20 mx-auto"
        onClick={() => {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        }}
      >
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </Button>
    );
  }

  return renderedButton;
}
