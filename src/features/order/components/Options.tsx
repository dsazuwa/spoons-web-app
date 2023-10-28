import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import { Dispatch, SetStateAction, useContext, useState } from 'react';

import DialogContext, { DialogContextType } from '../contexts/DialogContext';
import OptionsList from './OptionsList';

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
  const { openOption } = useContext(DialogContext) as DialogContextType;

  const [value, setValue] = useState(-1);

  const isNested = (i: number) => 'groupId' in options[i];

  // useEffect(
  //   () => {
  //     for (let i = 0; i < options.length; i++) {
  //       if (!isNested(i)) {
  //         setValue(i);
  //         setSelectedOption(i);
  //       }
  //       break;
  //     }
  //   },
  //   [
  //     /* _ */
  //   ],
  // );

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
      <OptionsList isRadio={true} groupId={groupId} options={options} />
    </RadioGroup>
  );
}

function CheckboxOptions({ groupId, name, options }: OptionsProps) {
  return (
    <FormGroup aria-label={`${name}-options`}>
      <OptionsList isRadio={false} groupId={groupId} options={options} />
    </FormGroup>
  );
}

export { CheckboxOptions, RadioOptions };
