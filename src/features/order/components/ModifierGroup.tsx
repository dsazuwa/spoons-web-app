import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

import ModifierHeader from './ModifierHeader';
import { CheckboxOptions, RadioOptions } from './Options';

interface ModifierGroupProps {
  modifier: Modifier;
  className?: string;
}

function ModifierGroup({ modifier, className }: ModifierGroupProps) {
  const { groupId, name, options, maxSelection } = modifier;

  const [selectedOption, setSelectedOption] = useState(-1);

  return (
    options && (
      <div className={className}>
        <ModifierHeader
          modifier={modifier}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />

        <FormControl
          component='fieldset'
          sx={{ width: '100%', position: 'relative' }}
        >
          {maxSelection === 1 ? (
            <RadioOptions
              groupId={groupId}
              name={name}
              options={options}
              setSelectedOption={setSelectedOption}
            />
          ) : (
            <CheckboxOptions
              groupId={groupId}
              name={name}
              options={options}
              setSelectedOption={setSelectedOption}
            />
          )}
        </FormControl>
      </div>
    )
  );
}

export default ModifierGroup;
