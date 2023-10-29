import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Dispatch, SetStateAction } from 'react';

import * as S from './ModifierHeader.styled';

interface ModifierpHeaderProps {
  modifier: Modifier;
  selectedOption: number;
  setSelectedOption: Dispatch<SetStateAction<number>>;
}

function ModifierpHeader({ modifier, selectedOption }: ModifierpHeaderProps) {
  const { name, isRequired, maxSelection } = modifier;

  const selectionPrompt =
    maxSelection === 1 ? 'Select 1' : `Select up to ${maxSelection}`;

  const selected = selectedOption > -1;

  return (
    <S.Header selected={selected}>
      <div className='box'>
        <div className='name'>{name}</div>
        <div className='prompt'>{selectionPrompt}</div>
      </div>

      {isRequired && (
        <div className='required-status'>
          {selected && <CheckIcon />}

          {!selected && <WarningAmberIcon />}

          <div className='status-text required'>Required</div>
        </div>
      )}

      {!isRequired && <div className='status-text optional'>(Optional)</div>}
    </S.Header>
  );
}

export default ModifierpHeader;
