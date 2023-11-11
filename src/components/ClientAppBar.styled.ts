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
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1536px',
    padding: '0px 16px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '& .appbar-logo': {
    color: palette.primary[700],
  },

  '& .xs-logo': {
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
