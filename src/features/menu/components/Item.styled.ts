import { styled } from '@mui/material';

import palette from '@utils/palette';

const Item = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '8px',

  '& .item-mt': { marginTop: '4px' },

  '& .name': {
    color: palette.primary[900],
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: 600,
  },

  '& .description': {
    fontSize: '11px',
    textAlign: 'center',
  },

  [theme.breakpoints.up('sm')]: {
    '& .name': { fontSize: '14px' },
    '& .description': { fontSize: '12px' },
  },

  [theme.breakpoints.up('md')]: {
    '& .item-mt': { marginTop: '6px' },
    '& .name': { fontSize: '15px' },
    '& .description': { fontSize: '13px' },
  },
}));

export { Item };
