import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import CartContent from '@features/order/components/CartContent';
import * as S from './CardButton.styled';

function CartButton() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));

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
      <S.Button onClick={onClick}>
        <ShoppingCartIcon />
      </S.Button>

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
