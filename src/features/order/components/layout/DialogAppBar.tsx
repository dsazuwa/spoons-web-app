/* eslint-disable @typescript-eslint/ban-types */

import IconButton from '@mui/material/IconButton';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

import * as S from './DialogAppBar.styled';

interface Props {
  text: string;
  scrolledPast: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  iconLabel: string;
  handleClick: () => void;
}

function DialogAppBar(props: Props) {
  const { scrolledPast, text, Icon, iconLabel, handleClick } = props;

  return (
    <S.Div id='dialog-app-bar' scrolledPast={scrolledPast}>
      <IconButton edge='start' aria-label={iconLabel} onClick={handleClick}>
        <Icon />
      </IconButton>

      {scrolledPast && <div className='title .ellipsis-text'>{text}</div>}
    </S.Div>
  );
}

export default DialogAppBar;
