import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontSize: 16,
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
    mode: 'dark',
    primary: {
      main: '#00ff41', // Neon green
      light: '#66ff66',
      dark: '#00cc33',
    },
    secondary: {
      main: '#ffff00', // Neon yellow
      light: '#ffff66',
      dark: '#cccc00',
    },
    error: {
      main: '#ff6b6b', // Soft red
      light: '#ff9999',
      dark: '#cc5555',
    },
    info: {
      main: '#64b5f6', // Soft blue
      light: '#90caf9',
      dark: '#42a5f5',
    },
    background: {
      default: '#0d0d0d', // Darker background like Linear
      paper: '#181818', // Slightly lighter for cards/papers
    },
    text: {
      primary: '#f5f5f5', // Off-white for readability
      secondary: '#a8a8a8', // Subtle gray for secondary text
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d0d0d',
          borderBottom: '1px solid #262626',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0d0d0d',
          borderRight: '1px solid #262626',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: '#f5f5f5',
          borderRadius: '6px',
          margin: '2px 8px',
          '&:hover': {
            backgroundColor: '#262626',
          },
          '&.Mui-selected': {
            backgroundColor: '#1a1a1a',
            borderLeft: '2px solid',
            '&:hover': {
              backgroundColor: '#262626',
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          textShadow: '0 0 10px currentColor',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textShadow: '0 0 5px currentColor',
          '&:hover': {
            boxShadow: '0 0 15px currentColor',
          },
        },
      },
    },
  },
});
