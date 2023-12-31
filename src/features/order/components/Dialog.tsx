import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import { useGetItemModifiersQuery } from '@store/api';
import { addTreeNodes, buildTree } from '@store/slices';
import useGetChildModifiers from '../hooks/useGetChildModifiers';
import { isItemNode, isOptionNode } from '../state';
import BackdropLoader from './BackdropLoader';
import * as S from './Dialog.styled';
import { DialogType } from './Item';
import ItemDialog from './ItemDialog';
import OptionDialog from './OptionDialog';
import PreferencesDialog from './PreferencesDialog';

interface DialogProps {
  item: MenuItemType;
  type: DialogType;
  handleOpenPreferences: () => void;
  handleClosePreferences: () => void;
  handleClose: () => void;
}

function Dialog({
  item,
  type,
  handleOpenPreferences,
  handleClosePreferences,
  handleClose,
}: DialogProps) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const dispatch = useDispatch();
  const current = useSelector((state: RootState) => state.orderState.current);

  const {
    isLoading: isModifierLoading,
    isFetching: isModifierFetching,
    data: modifierData,
  } = useGetItemModifiersQuery(item.itemId);

  const {
    trigger: getChildModifiers,
    isLoading: isChildLoading,
    isFetching: isChildFetching,
    data: childData,
  } = useGetChildModifiers();

  const [isBuilding, setIsBuilding] = useState(true);

  useEffect(() => {
    if (isBuilding && modifierData) {
      dispatch(buildTree({ item, modifiers: modifierData?.modifiers }));
      setIsBuilding(false);
    }
  }, [item, isBuilding, modifierData, dispatch]);

  useEffect(() => {
    if (isOptionNode(current) && !current.isFulfilled) {
      if (!current.isNested) return;

      getChildModifiers(current.id);
    }
  }, [current?.key, getChildModifiers]);

  useEffect(() => {
    if (isOptionNode(current) && !current.isFulfilled) {
      if (!current.isNested) return;

      if (childData !== undefined)
        dispatch(
          addTreeNodes({
            modifiers: childData.modifiers,
            parentKey: current.key,
          }),
        );
    }
  }, [childData, dispatch]);

  const isLoading =
    isModifierLoading ||
    isChildLoading ||
    isModifierFetching ||
    isChildFetching ||
    isBuilding;

  return isLoading ? (
    <BackdropLoader open={true} handleClose={handleClose} />
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
          current={current}
          handleClose={handleClose}
          handleOpenPreferences={handleOpenPreferences}
        />
      )}

      {type === 'item' &&
        isOptionNode(current) &&
        current.children.length > 0 && (
          <OptionDialog itemName={item.name} current={current} />
        )}

      {type === 'preferences' && (
        <PreferencesDialog handleBack={handleClosePreferences} />
      )}
    </S.Dialog>
  );
}

export default Dialog;
