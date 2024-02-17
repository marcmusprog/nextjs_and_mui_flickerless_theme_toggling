import { experimental_extendTheme as extendTheme } from "@mui/material";
import { amber, grey, deepOrange } from "@mui/material/colors";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      },
    },
    dark: {
      palette: {
        primary: deepOrange,
        divider: deepOrange[700],
        background: {
          default: deepOrange[900],
          paper: deepOrange[900],
        },
        text: {
          primary: "#fff",
          secondary: grey[500],
        },
      },
    },
  },
});

export default theme;
