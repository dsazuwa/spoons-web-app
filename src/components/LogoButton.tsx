import LunchDining from '@mui/icons-material/LunchDining';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/system';

import { NextLinkComposed } from './Link';

interface LogoButtonProps {
  home: string;
  sx?: SxProps;
  tSx?: SxProps;
  color?:
    | 'primary'
    | 'disabled'
    | 'action'
    | 'inherit'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
}

function LogoButton({ home, sx, tSx, color }: LogoButtonProps) {
  return (
    <ButtonBase
      component={NextLinkComposed}
      to={{ pathname: home }}
      sx={{ ...sx }}
    >
      <LunchDining color={color} sx={{ mr: 1 }} />
      <Typography
        variant='h6'
        noWrap
        color={color}
        sx={{
          ...tSx,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
        }}
      >
        spoons
      </Typography>
    </ButtonBase>
  );
}

export default LogoButton;
