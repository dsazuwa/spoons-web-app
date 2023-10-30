import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';

import * as S from './Option.styled';

interface Props {
  index: number;
  name: string;
  price: number | null;
  isNested: boolean;
  InputComponent: JSX.Element;
}

function Option({ index, name, price, isNested, InputComponent }: Props) {
  return (
    <S.Option>
      <div className='box'>
        <FormControlLabel
          control={InputComponent}
          value={index}
          labelPlacement='end'
          label={<div className='name'>{name}</div>}
          sx={{ width: '100%' }}
        />

        {price !== null && (
          <div className='price'>{`+$${price.toFixed(2)}`}</div>
        )}

        {isNested && <KeyboardArrowRightIcon />}
      </div>

      <Divider />
    </S.Option>
  );
}

export default Option;
