import LunchDining from '@mui/icons-material/LunchDining';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material';

import { NextLinkComposed } from '@components/Link';

const LogoButton = styled(ButtonBase)({
  '& svg': {
    fontSize: '20px',
    marginRight: '8px',
  },

  '& .logo-text': {
    fontFamily: 'monospace',
    fontSize: '16px',
    fontWeight: 900,
    lineHeight: 1.6,
    letterSpacing: '.3rem',
    textDecoration: 'none',
  },
});

function Logo({ className }: { className: string }) {
  return (
    <LogoButton
      className={className}
      component={NextLinkComposed}
      to={{ pathname: '/' }}
    >
      <LunchDining />
      <div className='logo-text'>spoons</div>
    </LogoButton>
  );
}

export default Logo;
