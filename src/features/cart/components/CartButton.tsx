import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import CartContent from '@features/cart/components/CartContent';
import { RootState } from '@store';
import * as S from './CardButton.styled';

function CartButton() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const numItems = useSelector((state: RootState) => state.cartState.numItems);

  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!isLg) setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isLg) setOpen(false);
  }, [isLg]);

  return (
    <>
      {isLg && (
        <div style={{ marginRight: '40px' }}>
          <S.Button variant='contained' onClick={onClick}>
            <ShoppingCartIcon />

            <div>{numItems}</div>
          </S.Button>
        </div>
      )}

      {!isLg && (
        <S.IconButton aria-label='cart' onClick={onClick}>
          <S.Badge badgeContent={numItems} max={100} color='primary'>
            <ShoppingCartIcon />
          </S.Badge>
        </S.IconButton>
      )}

      <S.Drawer open={open} anchor='right' onClose={closeDrawer}>
        <S.DrawerContent>
          <S.CloseButton aria-label='close cart' onClick={closeDrawer}>
            <CloseIcon />
          </S.CloseButton>

          <CartContent />
        </S.DrawerContent>
      </S.Drawer>
    </>
  );
}

export default CartButton;
