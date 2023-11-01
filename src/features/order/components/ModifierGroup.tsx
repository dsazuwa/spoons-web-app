import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ChangeEvent } from 'react';

import { ModifierNode } from '../treeState/ModifierNode';
import ModifierHeader from './ModifierHeader';
import Option from './Option';

interface ModifierGroupProps {
  modifier: ModifierNode;
  className?: string;
  selectOption: (key: string) => void;
  unselectOption: (key: string) => void;
  setCurrentNode: (key: string) => void;
}

function ModifierGroup({
  modifier,
  className,
  selectOption,
  unselectOption,
  setCurrentNode,
}: ModifierGroupProps) {
  const handleSingleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const option = modifier.getChildren()[Number.parseInt(e.target.value, 10)];

    selectOption(option.getKey());

    if (option.getIsNested()) setCurrentNode(option.getKey());
  };

  const handleMultiSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const option = modifier.getChildren()[Number.parseInt(e.target.value, 10)];

    if (option.getIsSelected()) {
      unselectOption(option.getKey());
      return;
    }

    selectOption(option.getKey());
  };

  return (
    <div className={className}>
      <ModifierHeader
        name={modifier.getName()}
        isRequired={modifier.getIsRequired()}
        maxSelection={modifier.getMaxSelection()}
        isSelected={modifier.getIsValid()}
      />

      <FormControl
        component='fieldset'
        sx={{ width: '100%', position: 'relative' }}
      >
        {modifier.getMaxSelection() === 1 ? (
          <RadioGroup
            aria-labelledby={`${name}-options`}
            name={`${name}-options-radio-group`}
            onChange={handleSingleSelect}
          >
            {modifier
              .getChildren()
              ?.map((option, index) => (
                <Option
                  key={option.getKey()}
                  index={index}
                  name={option.getName()}
                  price={option.getPrice()}
                  isNested={option.getIsNested()}
                  InputComponent={<Radio />}
                />
              ))}
          </RadioGroup>
        ) : (
          <FormGroup
            aria-label={`${name}-options`}
            onChange={handleMultiSelect}
          >
            {modifier
              .getChildren()
              ?.map((option, index) => (
                <Option
                  key={option.getKey()}
                  index={index}
                  name={option.getName()}
                  price={option.getPrice()}
                  isNested={option.getIsNested()}
                  InputComponent={<Checkbox />}
                />
              ))}
          </FormGroup>
        )}
      </FormControl>
    </div>
  );
}

export default ModifierGroup;
