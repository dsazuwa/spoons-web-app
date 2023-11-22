import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';

import palette from '@utils/palette';

const Category = styled(Stack)(({ theme }) => ({
  alignItems: 'center',

  '& .category-name': {
    color: palette.primary[900],
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 3,
    fontWeight: 1000,
    fontSize: '20px',
  },

  '& .category-notes': {
    textAlign: 'center',
    maxWidth: '500px',
    fontSize: '12px',
  },

  '& .category-section': {
    color: palette.primary[900],
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 700,
    fontSize: '15px',
  },

  [theme.breakpoints.up('sm')]: {
    '& .category-name': { fontSize: '25px' },

    '& .category-notes': {
      maxWidth: '650px',
      fontSize: '14px',
    },

    '& .category-section': { fontSize: '20px' },
  },

  [theme.breakpoints.up('md')]: {
    '& .category-name': { fontSize: '30px' },

    '& .category-notes': {
      maxWidth: '750px',
      fontSize: '14px',
    },

    '& .category-section': { fontSize: '25px' },
  },
}));

export { Category };
