import FormControl from '@mui/material/FormControl';
import { MouseEventHandler, useState } from 'react';

import ModifierHeader from './ModifierHeader';
import { CheckboxOptions, RadioOptions } from './Options';

interface ModifierGroupProps {
  modifier: Modifier;
}

function ModifierGroup({ modifier }: ModifierGroupProps) {
  const {
    groupId,
    name,
    options,
    // isRequired,
    allowMultipleSelections,
    // minSelection,
    maxSelection,
  } = modifier;

  const [selectedOption, setSelectedOption] = useState(-1);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    // e.preventDefault();
    console.log(e);
  };

  return (
    options && (
      <div>
        <ModifierHeader
          modifier={modifier}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <FormControl
          component='fieldset'
          sx={{ width: '100%', position: 'relative' }}
        >
          {maxSelection === 1 || allowMultipleSelections === false ? (
            <RadioOptions
              groupId={groupId}
              name={name}
              options={options}
              handleClick={handleClick}
              setSelectedOption={setSelectedOption}
            />
          ) : (
            <CheckboxOptions
              groupId={groupId}
              name={name}
              options={options}
              handleClick={handleClick}
              setSelectedOption={setSelectedOption}
            />
          )}
        </FormControl>
      </div>
    )
  );
}

export default ModifierGroup;
