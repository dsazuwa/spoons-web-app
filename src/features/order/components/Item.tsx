import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useState } from 'react';

import ItemCard from './ItemCard';
import ItemDialog from './ItemDialog';

function Item({ item }: { item: MenuItemType }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
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

      <ItemDialog item={item} open={open} handleClose={handleClose} />
    </Box>
  );
}

export default Item;
