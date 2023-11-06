import Button from '@mui/material/Button';

import formatPrice from '@utils/formatPrice';
import { OptionNode } from '../treeState/OptionNode';
import ModifierGroup from './ModifierGroup';
import OptionDialogAppBar from './OptionDialogAppBar';

interface OptionDialogProps {
  itemName: string;
  current: OptionNode;
  selectOption: (key: string) => void;
  unselectOption: (key: string) => void;
  setCurrentNode: (key: string) => void;
}

function OptionDialog({
  itemName,
  current,
  selectOption,
  unselectOption,
  setCurrentNode,
}: OptionDialogProps) {
  const handleBack = () => {
    const grandparentNode = current.getParent()?.getParent();

    if (grandparentNode) setCurrentNode(grandparentNode.getKey());
  };

  const handleSave = () => {
    const grandparentNode = current.getParent()?.getParent();

    if (grandparentNode && current.getIsValid())
      setCurrentNode(grandparentNode.getKey());
  };

  return (
    <>
      <OptionDialogAppBar
        itemName={itemName}
        optionName={current.getName()}
        handleClick={handleBack}
      />

      <div className='dialog-content'>
        <div id='dialog-app-bar-anchor' />

        {current.getChildren().map((child) => (
          <ModifierGroup
            key={child.getKey()}
            className='stack-item'
            modifier={child}
            selectOption={selectOption}
            unselectOption={unselectOption}
            setCurrentNode={setCurrentNode}
          />
        ))}
      </div>

      <div className='dialog-footer'>
        <Button
          variant='contained'
          className='dialog-footer-button options-dialog-button'
          onClick={handleSave}
        >
          {current.getSelectionPrice() === 0 ? (
            'Save'
          ) : (
            <div className='save-options-button'>
              <div>Save Options</div>
              <div>+{formatPrice(current.getSelectionPrice())}</div>
            </div>
          )}
        </Button>
      </div>
    </>
  );
}

export default OptionDialog;
