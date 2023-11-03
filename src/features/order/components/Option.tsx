import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';

import { OptionNode } from '../treeState';
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

  return (
    <S.Option>
      <div className='box'>
        <FormControlLabel
          control={InputComponent}
          value={index}
          checked={option.getIsSelected()}
          onClick={handleClick}
          labelPlacement='end'
          label={<div className='name'>{option.getName()}</div>}
          sx={{ width: '100%' }}
        />

        {option.getPrice() > 0 && (
          <div className='price'>{`+$${option.getPrice()?.toFixed(2)}`}</div>
        )}

        {option.getIsNested() && <KeyboardArrowRightIcon />}
      </div>

      <Divider />
    </S.Option>
  );
}

export default Option;
