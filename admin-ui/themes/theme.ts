'use client';

import '@fontsource/work-sans';
import { teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { baseStyle } from './fonts';
import { fontSize } from './size';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[300],
    },
  },
  typography: {
    subtitle1: {
      fontSize: fontSize.extraSmall,
      textDecoration: `${baseStyle.textDecoration.none}`,
      fontFamily: 'Work Sans',
    },
    subtitle2: {
      fontSize: fontSize.extraSmall,
      fontWeight: 700,
      color: '#1e293b',
      marginTop: '0.6rem',
      fontFamily: 'Work Sans',
    },
    h6: {
      fontWeight: 700,
      fontSize: '0.9rem',
      fontFamily: 'Work Sans',
    },
    h5: {
      padding: '0.5rem 1rem 0.8rem',
      fontSize: '0.8rem',
      fontFamily: 'Work Sans',
    },
    body1: {
      fontWeight: 500,
      fontSize: '0.9rem',
      fontFamily: 'Work Sans',
    },
    body2: {
      fontSize: '0.75rem',
      marginTop: '0.7rem',
      fontFamily: 'Work Sans',
    },
    button: {
      textTransform: 'capitalize',
      fontFamily: 'Work Sans',
    },
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'white',
            color: 'green',
            borderRadius: 7,
            '& .MuiListItemIcon-root': {
              // backgroundColor: 'orange',
              color:'black',
            },
          },
          '&.Mui-selected': {
            backgroundColor: 'white',
            borderRadius: 7,
            // marginTop:2,
            '&.Mui-focusVisible': { background: 'orange' },
          },
        },
      },
    },
  },
});
