import { styled } from '@mui/material';

import palette from '@utils/palette';

const Div = styled('div')(({ theme }) => ({
  position: 'fixed',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'row',
  height: '56px',
  width: '100%',
  borderBottom: `1px solid ${palette.grey[200]}`,
  backgroundColor: palette.base.white,

  '& .appbar-container': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1536px',
    padding: '0px 16px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '& .appbar-logo': {
    color: palette.primary[700],

    '& svg': {
      fontSize: '20px',
      marginRight: '8px',
    },

    '& .logo-text': {
      fontFamily: 'monospace',
      fontSize: '16px',
      fontWeight: 900,
      lineHeight: 1.6,
      letterSpacing: '.3rem',
      textDecoration: 'none',
    },
  },

  '& .xs-logo': {
    display: 'flex',
    flexGrow: 1,
    marginBottom: '2px',
  },

  '& .md-logo': {
    display: 'none',
    marginRight: '32px',
    marginBottom: '4px',
  },

  '& .appbar-button': {
    fontWeight: 700,
    color: palette.primary[950],
    textTransform: 'capitalize',
  },

  [theme.breakpoints.up('md')]: {
    '& .appbar-container': {
      padding: '0px 32px',
    },

    '& .appbar-logo': {
      '& svg': { fontSize: '24px' },
      '& .logo-text': { fontSize: '20px' },
    },

    '& .xs-logo': { display: 'none' },

    '& .md-logo': { display: 'flex' },
  },
}));

export { Div };
