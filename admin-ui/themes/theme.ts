'use client';

import '@fontsource/work-sans';
import { teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { baseStyle } from './fonts';
import { fontSize } from './size';

export const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
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
});
