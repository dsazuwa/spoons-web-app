import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import palette from '@utils/palette';

const Div = styled('div')(({ theme }) => ({
  padding: '16px',

  '& .mb-16': {
    marginBottom: '16px',
  },

  '& .caption': {
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '18px',
    color: palette.grey[400],
  },

  '& .restaurant-name': {
    fontSize: '18px',
    fontWeight: 700,
    letterSpacing: '-0.04ch',
    lineHeight: '24px',
  },

  [theme.breakpoints.down('md')]: {
    padding: '16px 0',
  },
}));

const CheckoutButton = styled(Button)(({ theme }) => ({
  borderRadius: '24px',
  width: '100%',
  height: '40px',
  fontSize: '14px',
  justifyContent: 'space-between',

  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

export { Div, CheckoutButton };
