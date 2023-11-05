import CheckIcon from '@mui/icons-material/Check';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import * as S from './ModifierHeader.styled';

interface ModifierpHeaderProps {
  name: string;
  isRequired: boolean;
  isSelected: boolean;
  maxSelection: number;
}

function ModifierpHeader({
  name,
  isRequired,
  maxSelection,
  isSelected,
}: ModifierpHeaderProps) {
  const prompt =
    maxSelection === 1 ? 'Select 1' : `Select up to ${maxSelection}`;

  return (
    <S.Header>
      <div className='box'>
        <div className='name'>{name}</div>
        <div className='prompt'>{prompt}</div>
      </div>

      {isRequired && (
        <div
          className={`required-status ${
            isSelected ? 'fulfilled-modifier' : 'unfulfilled-modifier'
          }`}
        >
          {isSelected ? <CheckIcon /> : <WarningAmberIcon />}

          <div className='status-text'>Required</div>
        </div>
      )}

      {!isRequired && <div className='status-text optional'>(Optional)</div>}
    </S.Header>
  );
}

export default ModifierpHeader;
