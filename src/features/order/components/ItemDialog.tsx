import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

import useDialogAppBar from '../hooks/useDialogAppBar';
import * as S from './ItemDialog.styled';
import ItemDialogQuantityControl from './ItemDialogQuantityControl';
import Modifiers from './Modifiers';
import Preferences from './Preferences';
import DialogAppBar from './layout/DialogAppBar';

interface ItemDialogProps {
  item: MenuItemType;
  modifiers: Modifier[];
  open: boolean;
  handleClose: () => void;
}

function ItemDialog({ item, open, modifiers, handleClose }: ItemDialogProps) {
  const { name, description, photoUrl } = item;

  const { scrolledPast } = useDialogAppBar();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <S.Dialog
      id='item-dialog'
      fullWidth={true}
      fullScreen={isSm}
      maxWidth='sm'
      open={open}
      onClose={handleClose}
    >
      <DialogAppBar
        text={name}
        scrolledPast={scrolledPast}
        handleClick={handleClose}
        Icon={CloseIcon}
        iconLabel='close'
      />

      <Stack spacing={{ xs: 2, sm: 3 }} className='dialog-stack'>
        <div id='dialog-app-bar-anchor' className='dialog-name'>
          {name}
        </div>

        {description && <div className='dialog-description'>{description}</div>}

        <img src={`/menu-items/${photoUrl}`} alt={name} />

        {modifiers && <Modifiers modifiers={modifiers} />}

        <Preferences />
      </Stack>

      <ItemDialogQuantityControl />
    </S.Dialog>
  );
}

export default ItemDialog;
