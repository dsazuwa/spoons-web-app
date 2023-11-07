import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import DialogAppBar from './DialogAppBar';
import ModifierGroup from './ModifierGroup';
import Preferences from './Preferences';
import QuantityControl from './QuantityControl';

interface ItemDialogProps {
  current: ItemNode;
  handleClose: () => void;
  handleOpenPreferences: () => void;
}

function ItemDialog({
  current,
  handleClose,
  handleOpenPreferences,
}: ItemDialogProps) {
  const { name, description, photoUrl, children } = current;

  return (
    <>
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

        {children.map((key) => (
          <ModifierGroup key={key} modifier={key} />
        ))}

        <Preferences open={handleOpenPreferences} />
      </Stack>

      <QuantityControl current={current} handleClose={handleClose} />
    </>
  );
}

export default ItemDialog;
