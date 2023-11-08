import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import { returnToParent } from '@store/slices';
import formatPrice from '@utils/formatPrice';
import { getOptionSelectionPrice } from '../tree';
import ModifierGroup from './ModifierGroup';
import OptionDialogAppBar from './OptionDialogAppBar';

interface OptionDialogProps {
  itemName: string;
  current: OptionNode;
}

function OptionDialog({ itemName, current }: OptionDialogProps) {
  const dispatch = useDispatch();
  const map = useSelector((state: RootState) => state.treeState.map);

  const selectionPrice = getOptionSelectionPrice(map, current);

  const handleBack = () => {
    dispatch(returnToParent(current.key));
  };

  const handleSave = () => {
    if (current.isValid) handleBack();
  };

  return (
    <>
      <OptionDialogAppBar
        itemName={itemName}
        optionName={current.name}
        handleClick={handleBack}
      />

      <div className='dialog-content'>
        <div id='dialog-app-bar-anchor' />

        {current.children.map((key) => (
          <ModifierGroup key={key} className='stack-item' modifier={key} />
        ))}
      </div>

      <div className='dialog-footer'>
        <Button
          variant='contained'
          className='dialog-footer-button options-dialog-button'
          onClick={handleSave}
        >
          {selectionPrice === 0 ? (
            'Save'
          ) : (
            <div className='save-options-button'>
              <div>Save Options</div>
              <div>+{formatPrice(selectionPrice)}</div>
            </div>
          )}
        </Button>
      </div>
    </>
  );
}

export default OptionDialog;
