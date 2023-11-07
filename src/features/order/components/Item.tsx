import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useState } from 'react';

import Dialog from './Dialog';
import ItemCard from './ItemCard';

export type DialogType = 'item' | 'preferences' | null;

function Item({ item }: { item: MenuItemType }) {
  const [type, setType] = useState<DialogType>(null);

  const handleOpen = () => {
    setType('item');
  };

  const handleOpenPreferences = () => {
    setType('preferences');
  };

  const handleClosePreferences = () => {
    setType('item');
  };

  const handleClose = () => {
    setType(null);
  };

  return (
    <Box padding={{ xs: '5px', sm: '7.5px', md: '10px' }}>
      <ButtonBase onClick={handleOpen} sx={{ width: '100%' }}>
        <ItemCard item={item} />
      </ButtonBase>

      {type === null ? (
        <></>
      ) : (
        <Dialog
          item={item}
          type={type}
          handleOpenPreferences={handleOpenPreferences}
          handleClosePreferences={handleClosePreferences}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
}

export default Item;
