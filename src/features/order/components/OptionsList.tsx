import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';

import OptionsListItem from './OptionsListItem';

interface OptionsListProps {
  isRadio: boolean;
  groupId: number;
  options: (ModifierOption | NestedOption)[] | null;
}

function OptionsList(props: OptionsListProps) {
  const { isRadio, groupId, options } = props;

  const InputComponent = isRadio ? <Radio /> : <Checkbox />;

  return (
    <div>
      {options?.map((option, index) => (
        <OptionsListItem
          key={`modifier-${groupId}-option-${index}`}
          option={option}
          value={index}
          InputComponent={InputComponent}
        />
      ))}
    </div>
  );
}

export default OptionsList;
