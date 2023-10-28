import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';

import useDialogAppBar from '@order/hooks/useDialogAppBar';
import * as S from './DialogAppBar.styled';

interface Props {
  itemName: string;
  optionName: string;
  handleClick: () => void;
}

function OptionDialogAppBar({ itemName, optionName, handleClick }: Props) {
  const { scrolledPast } = useDialogAppBar();

  return (
    <S.Div id='dialog-app-bar' scrolledPast={scrolledPast}>
      <IconButton edge='start' aria-label='back' onClick={handleClick}>
        <ArrowBackIcon />
      </IconButton>

      <div className='content'>
        <div className='item-name ellipsis-text'>{itemName}</div>

        <div className='option-name ellipsis-text'>{optionName}</div>
      </div>
    </S.Div>
  );
}

export default OptionDialogAppBar;
