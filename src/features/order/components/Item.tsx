import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useState } from 'react';

import useGetModifiers from '../hooks/useGetModifiers';
import BackdropLoader from './BackdropLoader';
import ItemCard from './ItemCard';
import ItemDialog from './ItemDialog';

function Item({ item }: { item: MenuItemType }) {
  const [open, setOpen] = useState(false);
  const { trigger, isLoading, isFetching, data } = useGetModifiers();

  const handleClickOpen = () => {
    trigger(item.itemId, true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box padding={{ xs: '5px', sm: '7.5px', md: '10px' }}>
      <ButtonBase onClick={handleClickOpen} sx={{ width: '100%' }}>
        <ItemCard item={item} />
      </ButtonBase>

      {isLoading || isFetching || data?.modifiers === undefined ? (
        <BackdropLoader open={open} handleClose={handleClose} />
      ) : (
        <ItemDialog
          item={item}
          modifiers={data.modifiers}
          open={open}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
}

export default Item;
