import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import ItemDialogAppBar from './ItemDialogAppBar';
import ItemDialogHeader from './ItemDialogHeader';
import ItemDialogQuantityControl from './ItemDialogQuantityControl';
import ModifierGroup from './ModifierGroup';

interface ItemDialogProps {
  item: MenuItemType;
  modifiers: Modifier[];
  open: boolean;
  handleClose: () => void;
}

function ItemDialog({ item, open, modifiers, handleClose }: ItemDialogProps) {
  const { itemId, name, description, photoUrl } = item;

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const [isScrolledPast, setScrolledPast] = useState(false);
  // const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  // useEffect(() => {
  //   const root = document.querySelector('#item-dialog');
  //   const observedElement = document.querySelector(
  //     '#item-dialog-header-anchor',
  //   );
  //   const rootMargin = isXs ? '-56px' : '-64px';

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       setScrolledPast(!entries[0].isIntersecting);
  //     },
  //     { threshold: 0, root, rootMargin },
  //   );

  //   if (root && observedElement) observer.observe(observedElement);
  // }, []);

  useEffect(() => {
    const appBar = document.querySelector('#item-dialog-app-bar');
    const observedElement = document.querySelector(
      '#item-dialog-header-anchor',
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const appBarRect = (appBar as Element).getBoundingClientRect();
        const observedRect = entries[0].target.getBoundingClientRect();
        setScrolledPast(observedRect.top < appBarRect.bottom);
      },
      { threshold: 0 },
    );

    if (appBar && observedElement) observer.observe(observedElement);
  }, []);

  return (
    <Dialog
      id='item-dialog'
      fullWidth={true}
      fullScreen={isSm}
      maxWidth='sm'
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: { borderRadius: { xs: '0', sm: '2%' } },
      }}
    >
      <ItemDialogAppBar
        name={name}
        isScrolledPast={isScrolledPast}
        handleClose={handleClose}
      />

      <Box sx={{ overflowY: 'auto' }}>
        <ItemDialogHeader name={name} description={description} />

        <Box
          component='img'
          src={`/menu-items/${photoUrl}`}
          alt={name}
          width='100%'
          px='16px'
        />

        {modifiers && (
          <Stack spacing={{ xs: 3, sm: 4 }} sx={{ p: '32px 16px 24px 16px' }}>
            {modifiers.map((modifier) => (
              <ModifierGroup
                key={`${itemId}-modifier-${modifier.groupId}`}
                modifier={modifier}
              />
            ))}
          </Stack>
        )}
      </Box>

      <ItemDialogQuantityControl />
    </Dialog>
  );
}

export default ItemDialog;
