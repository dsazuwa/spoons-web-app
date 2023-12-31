import { createTheme } from '@mui/material';
import { Montserrat } from 'next/font/google';

import palette from './palette';

export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      light: palette.primary[500],
      main: palette.primary[700],
      dark: palette.primary[950],
      contrastText: palette.grey[25],
    },
    secondary: {
      light: palette.cyan[100],
      main: palette.cyan[200],
      dark: palette.cyan[300],
      contrastText: palette.base.black,
    },
  },

  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export default theme;
