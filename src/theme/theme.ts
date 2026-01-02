import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: '"Gothic A1", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Gothic A1", sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Gothic A1", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Gothic A1", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Gothic A1", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Gothic A1", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Gothic A1", sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Gothic A1", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Gothic A1", sans-serif',
    },
    body1: {
      fontFamily: '"Gothic A1", sans-serif',
    },
    body2: {
      fontFamily: '"Gothic A1", sans-serif',
    },
    button: {
      fontFamily: '"Gothic A1", sans-serif',
      fontWeight: 500,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff41", // Neon green
      light: "#66ff66",
      dark: "#00cc33",
    },
    secondary: {
      main: "#ffff00", // Neon yellow
      light: "#ffff66",
      dark: "#cccc00",
    },
    error: {
      main: "#ff6b6b", // Soft red
      light: "#ff9999",
      dark: "#cc5555",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#00ff41",
      secondary: "#ffff00",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0a0a0a",
          borderBottom: "1px solid #00ff41",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0a0a0a",
          borderRight: "1px solid #00ff41",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "rgba(0, 255, 65, 0.1)",
            color: "#00ff41",
          },
          "&.Mui-selected": {
            backgroundColor: "rgba(0, 255, 65, 0.2)",
            color: "#00ff41",
            "&:hover": {
              backgroundColor: "rgba(0, 255, 65, 0.3)",
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          textShadow: "0 0 10px currentColor",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textShadow: "0 0 5px currentColor",
          "&:hover": {
            boxShadow: "0 0 15px currentColor",
          },
        },
      },
    },
  },
});
