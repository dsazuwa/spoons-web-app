import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';

import useDialog from '../hooks/useDialog';
import useGetChildModifiers from '../hooks/useGetChildModifiers';
import useGetModifiers from '../hooks/useGetModifiers';
import { isItemNode, isOptionNode, useTree } from '../treeState';
import BackdropLoader from './BackdropLoader';
import * as S from './Dialog.styled';
import ItemCard from './ItemCard';
import ItemDialog from './ItemDialog';
import OptionDialog from './OptionDialog';
import PreferencesDialog from './PreferencesDialog';

export type DialogType = 'item' | 'preferences' | null;

function Item({ item }: { item: MenuItemType }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const { trigger, isLoading, isFetching, data } = useGetModifiers();
  const {
    trigger: childTrigger,
    isLoading: isChildLoading,
    isFetching: isChildFetching,
    data: child,
  } = useGetChildModifiers();

  const {
    current,
    addTreeNodes,
    buildTree,
    dropTree,
    selectOption,
    setCurrentNode,
    unselectOption,
  } = useTree();

  const {
    type,
    handleOpen,
    handleOpenPreferences,
    handleClosePreferences,
    handleClose: close,
  } = useDialog();

  const handleClick = () => {
    trigger(item.itemId, true);
    handleOpen();
  };

  const handleClose = () => {
    dropTree();
    close();
  };

  useEffect(() => {
    if (!current && data) buildTree(item, data.modifiers);

    if (isOptionNode(current) && !current.getIsFulfilled()) {
      if (!current.getIsNested()) return;

      childTrigger(current.getId());

      if (child !== undefined) addTreeNodes(child.modifiers, current.getKey());
    }
  }, [current, data, child]);

  return (
    <Box padding={{ xs: '5px', sm: '7.5px', md: '10px' }}>
      <ButtonBase onClick={handleClick} sx={{ width: '100%' }}>
        <ItemCard item={item} />
      </ButtonBase>

      {isLoading || isChildLoading || isFetching || isChildFetching ? (
        <BackdropLoader open={type !== null} handleClose={handleClose} />
      ) : (
        <S.Dialog
          id='item-dialog'
          fullWidth={true}
          fullScreen={isXs}
          open={type !== null}
          onClose={handleClose}
        >
          {type === 'item' && isItemNode(current) && (
            <ItemDialog
              type={type}
              current={current}
              selectOption={selectOption}
              unselectOption={unselectOption}
              setCurrentNode={setCurrentNode}
              handleClose={handleClose}
              handleOpenPreferences={handleOpenPreferences}
            />
          )}

          {type === 'item' && isOptionNode(current) && (
            <OptionDialog
              itemName={item.name}
              current={current}
              selectOption={selectOption}
              unselectOption={unselectOption}
              setCurrentNode={setCurrentNode}
            />
          )}

          {type === 'preferences' && (
            <PreferencesDialog handleBack={handleClosePreferences} />
          )}
        </S.Dialog>
      )}
    </Box>
  );
}

export default Item;
