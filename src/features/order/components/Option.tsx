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
      <FormControlLabel
        control={InputComponent}
        value={index}
        checked={option.getIsSelected()}
        onClick={handleClick}
        labelPlacement='end'
        label={
          <div className='label-box'>
            <div className='name-box'>
              <div className='name'>{option.getName()}</div>

              {option.getIsSelected() && !option.getIsValid() && (
                <div className='selections'>More Selections Required</div>
              )}
            </div>

            {option.getPrice() > 0 && (
              <div className='price'>{`+$${option
                .getPrice()
                ?.toFixed(2)}`}</div>
            )}

            {option.getIsNested() && <KeyboardArrowRightIcon />}
          </div>
        }
      />

      <Divider />
    </S.Option>
  );
}

export default Option;
