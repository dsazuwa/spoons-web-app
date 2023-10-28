import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useState } from 'react';

import DialogContext, { DialogType } from '../contexts/DialogContext';
import useGetModifiers from '../hooks/useGetModifiers';
import BackdropLoader from './BackdropLoader';
import Dialog from './Dialog';
import ItemCard from './ItemCard';

function Item({ item }: { item: MenuItemType }) {
  const [type, setType] = useState<DialogType>(null);
  const [optionIdStack, setOptionIdStack] = useState<number[]>([]);

  const { trigger, isLoading, isFetching, data } = useGetModifiers();

  const handleClickOpen = () => {
    trigger(item.itemId, true);
    setType('item');
    setOptionIdStack([]);
  };

  const handleClose = () => {
    setType(null);
  };

  const getCurrentOption = () => optionIdStack[optionIdStack.length - 1];

  const openOption = (id: number) => {
    setType('option');
    setOptionIdStack([...optionIdStack, id]);
  };

  const handleBack = () => {
    const updatedStack = [...optionIdStack];
    updatedStack.pop();
    setOptionIdStack(updatedStack);

    if (updatedStack.length === 0) setType('item');
  };

  return (
    <Box padding={{ xs: '5px', sm: '7.5px', md: '10px' }}>
      <ButtonBase onClick={handleClickOpen} sx={{ width: '100%' }}>
        <ItemCard item={item} />
      </ButtonBase>

      <DialogContext.Provider
        value={{
          itemName: item.name,
          type,
          setType,
          getCurrentOption,
          openOption,
          handleBack,
          handleClose,
        }}
      >
        {isLoading || isFetching || data?.modifiers === undefined ? (
          <BackdropLoader open={type !== null} handleClose={handleClose} />
        ) : (
          <Dialog item={item} modifiers={data.modifiers} />
        )}
      </DialogContext.Provider>
    </Box>
  );
}

export default Item;
