import { styled } from '@mui/material';

import palette from '@utils/palette';

const Option = styled('div')(({ theme }) => ({
  ['& .box']: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  ['& .name']: {
    display: 'flex',
    flexGrow: 1,
    color: palette.grey[800],
    fontWeight: 500,
    fontSize: '.75rem',
  },

  ['& .price']: {
    fontSize: '.75rem',
    color: palette.grey[500],
  },

  [theme.breakpoints.up('sm')]: {
    ['& .name']: {
      fontSize: '.875rem',
    },

    ['& .price']: {
      fontSize: '.875rem',
    },
  },
}));

export { Option };
