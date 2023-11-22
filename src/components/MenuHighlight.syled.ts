import { styled } from '@mui/material';

import palette from '@utils/palette';

const Div = styled('div')(({ theme }) => ({
  '& .box': {
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '64px 16px',
  },

  '& .content': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '1200px',
  },

  '& .header': {
    fontSize: '24px',
    fontWeight: 700,
    textAlign: 'center',
    width: '100%',
    color: palette.primary[900],
    marginBottom: '16px',
  },

  '& .menu-btn': {
    fontSize: '10px',
    marginTop: '16px',
    borderRadius: '24px',
    textTransform: 'capitalize',
  },

  [theme.breakpoints.up('md')]: {
    '& .box': { padding: '64px 32px' },
    '& .header': { marginBottom: '24px', fontSize: '32px' },
    '& .menu-btn': { fontSize: '14px' },
  },
}));

export { Div };
