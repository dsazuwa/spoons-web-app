import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import { selectOption, setCurrentNode, unselectOption } from '@store/slices';
import { getModifier, getOption } from '../tree';
import ModifierHeader from './ModifierHeader';
import Option from './Option';

interface ModifierGroupProps {
  modifier: string;
  className?: string;
}

function ModifierGroup({ modifier, className }: ModifierGroupProps) {
  const dispatch = useDispatch();
  const { map } = useSelector((state: RootState) => state.treeState);

  const { name, maxSelection, children, isRequired, isValid } = getModifier(
    map,
    modifier,
  );

  const handleSingleSelect = (index: number) => {
    const key = children[index];
    const option = getOption(map, key);

    dispatch(selectOption(key));
    if (option.isNested) dispatch(setCurrentNode(key));
  };

  const handleMultiSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const key = children[Number.parseInt(e.target.value, 10)];
    const option = getOption(map, key);

    if (option.isSelected) {
      dispatch(unselectOption(option.key));
      return;
    }

    const parent = getModifier(map, option.parent);

    const selectedCount = parent.children.filter(
      (key) => getOption(map, key).isSelected,
    ).length;

    if (selectedCount < parent.maxSelection) dispatch(selectOption(option.key));
  };

  return (
    <div className={className}>
      <ModifierHeader
        name={name}
        isRequired={isRequired}
        maxSelection={maxSelection}
        isSelected={isValid}
      />

      <FormControl
        component='fieldset'
        sx={{ width: '100%', position: 'relative' }}
      >
        {maxSelection === 1 ? (
          <RadioGroup
            aria-labelledby={`${name}-options`}
            name={`${name}-options-radio-group`}
          >
            {children.map((key, index) => (
              <Option
                key={key}
                index={index}
                option={getOption(map, key)}
                InputComponent={<Radio />}
                handleChange={handleSingleSelect}
              />
            ))}
          </RadioGroup>
        ) : (
          <FormGroup
            aria-label={`${name}-options`}
            onChange={handleMultiSelect}
          >
            {children.map((key, index) => (
              <Option
                key={key}
                index={index}
                option={getOption(map, key)}
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
