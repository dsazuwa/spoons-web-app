import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ItemNode, OptionNode, isItemNode, isOptionNode } from '../treeState';
import * as S from './Dialog.styled';
import ItemDialog from './ItemDialog';
import OptionDialog from './OptionDialog';
import PreferencesDialog from './PreferencesDialog';

export type DialogType = 'item' | 'preferences' | null;

interface Props {
  type: DialogType;
  item: MenuItemType;

  current: ItemNode | OptionNode | undefined;
  selectOption: (key: string) => void;
  unselectOption: (key: string) => void;
  setCurrentNode: (key: string) => void;

  handleClose: () => void;
  handleOpenPreferences: () => void;
  handleClosePreferences: () => void;

  setQuantity: (key: string, amount: number) => void;
  incrementQuantity: (key: string) => void;
  decrementQuantity: (key: string) => void;
}

function Dialog({
  type,
  item,

  current,
  selectOption,
  unselectOption,
  setCurrentNode,

  handleClose,
  handleOpenPreferences,
  handleClosePreferences,

  setQuantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
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
          selectOption={selectOption}
          unselectOption={unselectOption}
          setCurrentNode={setCurrentNode}
          handleClose={handleClose}
          handleOpenPreferences={handleOpenPreferences}
          setQuantity={setQuantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
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
  );
}

export default Dialog;
