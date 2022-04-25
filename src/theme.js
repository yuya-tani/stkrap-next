import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#2c3d54",
    },
    secondary: {
      main: "#536dfe",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
