import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

import * as S from './DialogAppBar.styled';

interface Props {
  scrolledPast: boolean;
  itemName: string;
  optionName: string;
  handleClick: () => void;
}

function OptionDialogAppBar(props: Props) {
  const { scrolledPast, itemName, optionName, handleClick } = props;

  return (
    <S.Div id='dialog-app-bar' scrolledPast={scrolledPast}>
      <IconButton edge='start' aria-label='back' onClick={handleClick}>
        <ArrowBackIcon />
      </IconButton>

      {scrolledPast && (
        <div className='content'>
          <div className='item-name ellipsis-text'>{itemName}</div>

          <div className='option-name ellipsis-text'>{optionName}</div>
        </div>
      )}
    </S.Div>
  );
}

export default OptionDialogAppBar;
