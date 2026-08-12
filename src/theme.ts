import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C9A84C',
      light: '#E2C97E',
      dark: '#9A7A2E',
      contrastText: '#0D0D0D',
    },
    secondary: {
      main: '#8B1A1A',
      light: '#B22222',
      dark: '#5A0E0E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0D0D0D',
      paper: '#1A1208',
    },
    text: {
      primary: '#F5ECD7',
      secondary: '#C9B99A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '0.04em',
    },
    h3: {
      fontWeight: 400,
      letterSpacing: '0.03em',
    },
    h4: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.1em',
    },
    overline: {
      letterSpacing: '0.2em',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 1,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          fontWeight: 500,
          padding: '12px 32px',
        },
        contained: {
          boxShadow: '0 4px 20px rgba(201, 168, 76, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 30px rgba(201, 168, 76, 0.5)',
          },
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(201, 168, 76, 0.3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1A1208',
          border: '1px solid rgba(201, 168, 76, 0.15)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
