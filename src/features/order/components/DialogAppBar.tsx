/* eslint-disable @typescript-eslint/ban-types */

import IconButton from '@mui/material/IconButton';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

import * as S from './DialogAppBar.styled';
import useDialogAppBar from '@order/hooks/useDialogAppBar';

interface Props {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  iconLabel: string;
  handleClick: () => void;
}

function DialogAppBar({ text, Icon, iconLabel, handleClick }: Props) {
  const { scrolledPast } = useDialogAppBar();

  return (
    <S.Div id='dialog-app-bar' scrolledPast={scrolledPast}>
      <IconButton
        className='action-button'
        aria-label={iconLabel}
        onClick={handleClick}
      >
        <Icon />
      </IconButton>

      {scrolledPast && <div className='title ellipsis-text'>{text}</div>}
    </S.Div>
  );
}

export default DialogAppBar;
