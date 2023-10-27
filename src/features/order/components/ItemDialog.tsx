import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

import * as S from './ItemDialog.styled';
import ItemDialogAppBar from './ItemDialogAppBar';
import ItemDialogQuantityControl from './ItemDialogQuantityControl';
import Modifiers from './Modifiers';
import Preferences from './Preferences';

interface ItemDialogProps {
  item: MenuItemType;
  modifiers: Modifier[];
  open: boolean;
  handleClose: () => void;
}

function ItemDialog({ item, open, modifiers, handleClose }: ItemDialogProps) {
  const { name, description, photoUrl } = item;

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
    <S.Dialog
      id='item-dialog'
      fullWidth={true}
      fullScreen={isSm}
      maxWidth='sm'
      open={open}
      onClose={handleClose}
    >
      <ItemDialogAppBar
        name={name}
        isScrolledPast={isScrolledPast}
        handleClose={handleClose}
      />

      <Stack spacing={{ xs: 2, sm: 3 }} className='dialog-stack'>
        <div className='dialog-name'>{name}</div>

        {description && <div className='dialog-description'>{description}</div>}

        <img src={`/menu-items/${photoUrl}`} alt={name} />

        {modifiers && <Modifiers modifiers={modifiers} />}

        <Preferences />
      </Stack>

      <ItemDialogQuantityControl />
    </S.Dialog>
  );
}

export default ItemDialog;
