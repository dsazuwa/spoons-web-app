import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Dispatch, SetStateAction, useState } from 'react';

import { useDialogContext } from '../contexts/DialogContext';
import Option from './Option';

interface OptionsProps {
  groupId: number;
  name: string;
  options: (ModifierOption | NestedOption)[];
  setSelectedOption: Dispatch<SetStateAction<number>>;
}

function RadioOptions({
  groupId,
  name,
  options,
  setSelectedOption,
}: OptionsProps) {
  const { openOption } = useDialogContext();
  const [value, setValue] = useState(-1);

  const isNested = (i: number) => 'groupId' in options[i];

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const i = Number(event.target.value);
    setValue(i);
    setSelectedOption(i);

    if (isNested(i)) openOption((options[i] as NestedOption).groupId);
  };

  return (
    <RadioGroup
      aria-labelledby={`${name}-options`}
      name={`${name}-options-radio-group`}
      defaultValue={-1}
      value={value}
      onChange={handleRadioChange}
    >
      {options?.map((option, index) => (
        <Option
          key={`modifier-${groupId}-option-${index}`}
          index={index}
          name={option.name}
          price={option.price}
          isNested={isNested(index)}
          InputComponent={<Radio />}
        />
      ))}
    </RadioGroup>
  );
}

function CheckboxOptions({ groupId, name, options }: OptionsProps) {
  const isNested = (i: number) => 'groupId' in options[i];
  
  return (
    <FormGroup aria-label={`${name}-options`}>
      {options?.map((option, index) => (
        <Option
          key={`modifier-${groupId}-option-${index}`}
          index={index}
          name={option.name}
          price={option.price}
          isNested={isNested(index)}
          InputComponent={<Checkbox />}
        />
      ))}
    </FormGroup>
  );
}

export { CheckboxOptions, RadioOptions };
