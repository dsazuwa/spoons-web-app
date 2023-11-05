import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import CartContent from '@features/order/components/CartContent';
import palette from '@utils/palette';

const DrawerContent = styled('div')(({ theme }) => ({
  width: '100vw',
  padding: '16px',

  [theme.breakpoints.up('sm')]: { width: '480px' },

  [theme.breakpoints.up('md')]: { width: '560px' },
}));

const Button = styled(IconButton)(({ theme }) => ({
  color: palette.base.white,
  margin: 0,

  [theme.breakpoints.up('md')]: { margin: '8px' },
}));

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
      <Button onClick={onClick}>
        <ShoppingCartIcon />
      </Button>

      <Drawer open={open} anchor='right' hideBackdrop={true}>
        <DrawerContent>
          <IconButton aria-label='close cart' onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>

          <CartContent />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartButton;
