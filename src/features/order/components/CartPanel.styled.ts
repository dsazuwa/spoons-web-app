import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import palette from '@utils/palette';

const DivPlaceholder = styled('div')(({ theme }) => ({
  width: '340px',
  boxSizing: 'border-box',
  display: 'none',

  [theme.breakpoints.up('lg')]: {
    display: 'inline',
  },
}));

const Div = styled('div')(({ theme }) => ({
  width: '340px',
  boxSizing: 'border-box',
  display: 'none',

  position: 'fixed',
  right: 0,
  height: 'calc(100vh - 56px)',

  overflowY: 'scroll',
  borderLeft: `1px solid ${palette.grey[200]}`,

  '& .inset-box': {
    padding: '16px',
  },

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

  [theme.breakpoints.up('lg')]: {
    display: 'inline',
  },
}));

const CheckoutButton = styled(Button)(() => ({
  borderRadius: '24px',
  width: '100%',
  height: '40px',
  fontSize: '.825em',
  justifyContent: 'space-between',
}));

export { Div, DivPlaceholder, CheckoutButton };
