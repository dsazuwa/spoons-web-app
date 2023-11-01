import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ItemNode } from '../treeState/ItemNode';
import * as S from './Dialog.styled';
import DialogAppBar from './DialogAppBar';
import { DialogType } from './Item';
import ModifierGroup from './ModifierGroup';
import Preferences from './Preferences';
import QuantityControl from './QuantityControl';

interface ItemDialogProps {
  type: DialogType;
  current: ItemNode;
  handleClose: () => void;
  handleOpenPreferences: () => void;
  selectOption: (key: string) => void;
  unselectOption: (key: string) => void;
  setCurrentNode: (key: string) => void;
}

function ItemDialog({
  type,
  current,
  handleClose,
  handleOpenPreferences,
  selectOption,
  unselectOption,
  setCurrentNode,
}: ItemDialogProps) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

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
        text={current.getName()}
        Icon={CloseIcon}
        iconLabel='close'
        handleClick={handleClose}
      />

      <Stack spacing={{ xs: 2, sm: 3 }} className='dialog-content'>
        <div id='dialog-app-bar-anchor' className='dialog-name'>
          {current.getName()}
        </div>

        {current.getDescription() && (
          <div className='dialog-description'>{current.getDescription()}</div>
        )}

        <Box
          component='img'
          src={`/menu-items/${current.getPhotoUrl()}`}
          alt={current.getName()}
        />

        {current.getChildren().map((child) => (
          <ModifierGroup
            key={child.getKey()}
            modifier={child}
            selectOption={selectOption}
            unselectOption={unselectOption}
            setCurrentNode={setCurrentNode}
          />
        ))}

        <Preferences open={handleOpenPreferences} />
      </Stack>

      <QuantityControl />
    </S.Dialog>
  );
}

export default ItemDialog;
