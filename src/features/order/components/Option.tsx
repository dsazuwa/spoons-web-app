import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';

import formatPrice from '@utils/formatPrice';
import * as S from './Option.styled';

interface Props {
  index: number;
  option: OptionNode;
  InputComponent: JSX.Element;
  handleChange?: (index: number) => void;
}

function Option({ index, option, InputComponent, handleChange }: Props) {
  const handleClick = () => {
    if (handleChange) handleChange(index);
  };

  const label = (
    <div className='label-box'>
      <div className='name-box'>
        <div className='name'>{option.name}</div>

        {option.isSelected && !option.isValid && (
          <div className='selections'>More Selections Required</div>
        )}
      </div>

      {option.price > 0 && (
        <div className='price'>{`+${formatPrice(option.price)}`}</div>
      )}

      {option.isNested && <KeyboardArrowRightIcon />}
    </div>
  );

  return (
    <S.Option>
      <FormControlLabel
        name={option.name}
        control={InputComponent}
        value={index}
        checked={option.isSelected}
        onClick={handleClick}
        labelPlacement='end'
        label={label}
      />

      <Divider />
    </S.Option>
  );
}

export default Option;
