import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';

import { OptionNode } from '../treeState';
import * as S from './Option.styled';

interface Props {
  index: number;
  option: OptionNode;
  InputComponent: JSX.Element;
}

function Option({ index, option, InputComponent }: Props) {
  return (
    <S.Option>
      <div className='box'>
        <FormControlLabel
          control={InputComponent}
          value={index}
          checked={option.getIsSelected()}
          labelPlacement='end'
          label={<div className='name'>{option.getName()}</div>}
          sx={{ width: '100%' }}
        />

        {option.getPrice() && (
          <div className='price'>{`+$${option.getPrice()?.toFixed(2)}`}</div>
        )}

        {option.getIsNested() && <KeyboardArrowRightIcon />}
      </div>

      <Divider />
    </S.Option>
  );
}

export default Option;
