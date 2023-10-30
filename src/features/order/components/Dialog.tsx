import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useDialogContext } from '@order/contexts/DialogContext';
import * as S from './Dialog.styled';
import ItemDialog from './ItemDialog';
import OptionDialog from './OptionDialog';
import PreferencesDialog from './PreferencesDialog';

interface Props {
  item: MenuItemType;
  modifiers: Modifier[];
}

function Dialog({ item, modifiers }: Props) {
  const { type, setType, getCurrentOption, handleClose } = useDialogContext();

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
