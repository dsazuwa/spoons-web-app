import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import OptionsList from './OptionsList';

interface OptionsProps {
  groupId: number;
  name: string;
  options: (ModifierOption | NestedOption)[];
  handleClick: MouseEventHandler<HTMLDivElement>;
  setSelectedOption: Dispatch<SetStateAction<number>>;
}

function RadioOptions({
  groupId,
  name,
  options,
  // handleClick,
  setSelectedOption,
}: OptionsProps) {
  const [value, setValue] = useState(-1);

  useEffect(
    () => {
      for (let i = 0; i < options.length; i++) {
        if (!('groupId' in options[i])) {
          setValue(i);
          setSelectedOption(i);
        }
        break;
      }
    },
    [
      /* _ */
    ],
  );

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
    setSelectedOption(Number(event.target.value));
  };

  return (
    <RadioGroup
      aria-labelledby={`${name}-options`}
      name={`${name}-options-radio-group`}
      defaultValue={-1}
      value={value}
      onChange={handleRadioChange}
    >
      <OptionsList isRadio={true} groupId={groupId} options={options} />
    </RadioGroup>
  );
}

function CheckboxOptions({
  groupId,
  name,
  options,
  handleClick,
}: OptionsProps) {
  return (
    <FormGroup aria-label={`${name}-options`} onClick={handleClick}>
      <OptionsList isRadio={false} groupId={groupId} options={options} />
    </FormGroup>
  );
}

export { CheckboxOptions, RadioOptions };
