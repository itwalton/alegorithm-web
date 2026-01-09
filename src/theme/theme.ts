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
      textTransform: 'capitalize',
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
      default: '#050505', // Near-black background
      paper: '#0a0a0a', // Slightly lighter for cards/papers
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
          backgroundColor: '#050505',
          borderBottom: '1px solid #1a1a1a',
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#050505',
          borderRight: '1px solid #1a1a1a',
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
            backgroundColor: '#1a1a1a',
          },
          '&.Mui-selected': {
            backgroundColor: '#0f0f0f',
            borderLeft: '2px solid',
            '&:hover': {
              backgroundColor: '#1a1a1a',
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
        h6: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '20px 16px',
          borderBottom: '1px solid #1a1a1a',
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#0a0a0a',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#0f0f0f',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#050505',
          borderRadius: '4px',
          '& fieldset': {
            borderColor: '#1a1a1a',
          },
          '&:hover fieldset': {
            borderColor: '#2a2a2a',
          },
        },
      },
    },
  },
});
