import { styled } from '@mui/material';

import CartContent from './CartContent';
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

  [theme.breakpoints.up('lg')]: {
    display: 'inline',
  },
}));

function CartPanel() {
  return (
    <>
      <DivPlaceholder />

      <Div>
        <CartContent />
      </Div>
    </>
  );
}

export default CartPanel;
