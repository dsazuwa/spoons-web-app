import Button from '@mui/material/Button';

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
          className='dialog-footer-button'
          sx={{ width: '100%' }}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </>
  );
}

export default OptionDialog;
