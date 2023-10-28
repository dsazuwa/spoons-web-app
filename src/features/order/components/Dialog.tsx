import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useContext } from 'react';

import DialogContext, {
  DialogContextType,
} from '@order/contexts/DialogContext';
import * as S from './Dialog.styled';
import ItemDialog from './ItemDialog';
import OptionDialog from './OptionDialog';
import PreferencesDialog from './PreferencesDialog';

interface Props {
  item: MenuItemType;
  modifiers: Modifier[];
}

function Dialog({ item, modifiers }: Props) {
  const { type, setType, getCurrentOption, handleClose } = useContext(
    DialogContext,
  ) as DialogContextType;

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <S.Dialog
      id='item-dialog'
      fullWidth={true}
      fullScreen={isSm}
      maxWidth='sm'
      open={type !== null}
      onClose={handleClose}
    >
      {type === 'item' && <ItemDialog item={item} modifiers={modifiers} />}

      {type === 'option' && (
        <OptionDialog itemName={item.name} groupId={getCurrentOption()} />
      )}

      {type === 'preferences' && (
        <PreferencesDialog
          handleClick={() => {
            setType('item');
          }}
        />
      )}
    </S.Dialog>
  );
}

export default Dialog;
