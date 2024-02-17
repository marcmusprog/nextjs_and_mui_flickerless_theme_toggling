"use client";

import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { getInitColorSchemeScript } from "@mui/material";
import theme from "@/styles/theme";
import ThemeToggler from "../components/ThemeToggler";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider theme={theme}>
        {children}
        <ThemeToggler />
      </CssVarsProvider>
    </>
  );
}
