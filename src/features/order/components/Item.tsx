import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import useDialog from '../hooks/useDialog';
import BackdropLoader from './BackdropLoader';
import Dialog from './Dialog';
import ItemCard from './ItemCard';

function Item({ item }: { item: MenuItemType }) {
  const {
    type,
    current,
    isModifierLoading,
    isChildLoading,
    isModifierFetching,
    isChildFetching,
    handleOpen,
    handleOpenPreferences,
    handleClosePreferences,
    handleClose,
    selectOption,
    setCurrentNode,
    unselectOption,
    setQuantity,
    incrementQuantity,
    decrementQuantity,
  } = useDialog(item);

  return (
    <Box padding={{ xs: '5px', sm: '7.5px', md: '10px' }}>
      <ButtonBase onClick={handleOpen} sx={{ width: '100%' }}>
        <ItemCard item={item} />
      </ButtonBase>

      {isModifierLoading ||
      isChildLoading ||
      isModifierFetching ||
      isChildFetching ? (
        <BackdropLoader open={type !== null} handleClose={handleClose} />
      ) : (
        <Dialog
          type={type}
          item={item}
          current={current}
          selectOption={selectOption}
          unselectOption={unselectOption}
          setCurrentNode={setCurrentNode}
          handleClose={handleClose}
          handleOpenPreferences={handleOpenPreferences}
          handleClosePreferences={handleClosePreferences}
          setQuantity={setQuantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      )}
    </Box>
  );
}

export default Item;
