import Box from '@mui/material/Box';
import { useState } from 'react';

import ItemButton from './ItemButton';
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
      <ItemButton item={item} handleClick={handleClickOpen} />

      <ItemDialog item={item} open={open} handleClose={handleClose} />
    </Box>
  );
}

export default Item;
