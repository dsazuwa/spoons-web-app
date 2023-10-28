import Button from '@mui/material/Button';
import { useContext } from 'react';

import DialogContext, {
  DialogContextType,
} from '@order/contexts/DialogContext';
import { useGetChildModifierQuery } from '@store/api';
import BackdropLoader from './BackdropLoader';
import ModifierGroup from './ModifierGroup';
import OptionDialogAppBar from './OptionDialogAppBar';

interface Props {
  itemName: string;
  groupId: number;
}

function OptionDialog({ itemName, groupId }: Props) {
  const { handleBack, handleClose } = useContext(
    DialogContext,
  ) as DialogContextType;

  const { data, isLoading, isFetching } = useGetChildModifierQuery(groupId);

  return isLoading || isFetching || data === undefined ? (
    <BackdropLoader open={true} handleClose={handleClose} />
  ) : (
    <>
      <OptionDialogAppBar
        itemName={itemName}
        optionName={data.name}
        handleClick={handleBack}
      />

      <div className='dialog-content'>
        <div id='dialog-app-bar-anchor' />

        {data &&
          data.modifiers.map((modifier) => (
            <ModifierGroup
              key={`modifier-${modifier.groupId}`}
              className='stack-item'
              modifier={modifier}
            />
          ))}
      </div>

      <div className='dialog-footer'>
        <Button
          variant='contained'
          className='dialog-footer-button'
          sx={{ width: '100%' }}
        >
          Save
        </Button>
      </div>
    </>
  );
}

export default OptionDialog;
