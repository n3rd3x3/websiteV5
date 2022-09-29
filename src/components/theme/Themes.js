import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import Settings from '../../settings/settings.json';

export const primary = `${Settings.colors.primary}`;
export const secondary = `${Settings.colors.secondary}`;
export const black = `${Settings.colors.black}`;
export const white = `${Settings.colors.white}`;

export const LightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: white,
      },
      foreground: {
        default: black,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body1: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: black,
            backgroundColor: white,
          },
        },
      },
      MuiIconButton: {
        root: {
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: black,
          backgroundColor: 'transparent',
          '&:hover': {
            color: black,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease !important',
        },
      },
      MuiSpeedDialAction: {
        fab: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
          margin: '0px',
          marginBottom: '16px',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontFamily: 'Roboto Mono, monospace',
          backgroundColor: primary,
          color: black,
          fontSize: 11,
        },
      },
    },
  })
);

export const DarkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
      background: {
        default: black,
      },
      foreground: {
        default: white,
      },
    },
    typography: {
      fontSize: 16,
      htmlFontSize: 16,
      h2: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
      body1: {
        fontWeight: 500,
        fontFamily: 'Roboto Mono, monospace',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: white,
            backgroundColor: black,
          },
        },
      },
      MuiIconButton: {
        root: {
          transition: 'all 0.5s ease',
        },
      },
      MuiFab: {
        root: {
          width: '2.5rem',
          height: '2.5rem',
          fontSize: '1.25rem',
        },
        primary: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease !important',
        },
      },
      MuiSpeedDialAction: {
        fab: {
          color: white,
          backgroundColor: 'transparent',
          '&:hover': {
            color: white,
            backgroundColor: primary,
          },
          transition: 'all 0.5s ease',
          margin: '0px',
          marginBottom: '16px',
        },
      },
      MuiTooltip: {
        tooltip: {
          fontFamily: 'Roboto Mono, monospace',
          backgroundColor: primary,
          color: white,
          fontSize: 11,
        },
      },
    },
  })
);
