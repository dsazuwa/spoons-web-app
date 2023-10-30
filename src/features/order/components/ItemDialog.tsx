import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useDialogContext } from '@order/contexts/DialogContext';
import * as S from './Dialog.styled';
import DialogAppBar from './DialogAppBar';
import ModifierGroup from './ModifierGroup';
import Preferences from './Preferences';
import QuantityControl from './QuantityControl';

interface Props {
  item: MenuItemType;
  modifiers: Modifier[];
}

function ItemDialog({ item, modifiers }: Props) {
  const { type, handleClose } = useDialogContext();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const { name, description, photoUrl } = item;

  return (
    <S.Dialog
      id='item-dialog'
      fullWidth={true}
      fullScreen={isSm}
      maxWidth='sm'
      open={type === 'item'}
      onClose={handleClose}
    >
      <DialogAppBar
        text={name}
        Icon={CloseIcon}
        iconLabel='close'
        handleClick={handleClose}
      />

      <Stack spacing={{ xs: 2, sm: 3 }} className='dialog-content'>
        <div id='dialog-app-bar-anchor' className='dialog-name'>
          {name}
        </div>

        {description && <div className='dialog-description'>{description}</div>}

        <Box component='img' src={`/menu-items/${photoUrl}`} alt={name} />

        {modifiers &&
          modifiers.map((modifier) => (
            <ModifierGroup
              key={`modifier-${modifier.groupId}`}
              modifier={modifier}
            />
          ))}

        <Preferences />
      </Stack>

      <QuantityControl />
    </S.Dialog>
  );
}

export default ItemDialog;
