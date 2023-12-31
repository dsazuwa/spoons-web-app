import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import * as S from './ModifierHeader.styled';

const Div = styled('div')(({ theme }) => ({
  '& svg': {
    fontSize: '1.5em',
  },

  ['& .preference-option']: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px 0px',
  },

  ['& .preference-option-text']: {
    marginRight: 'auto',
    fontWeight: 500,
    fontSize: '.75rem',
  },

  [theme.breakpoints.up('sm')]: {
    ['& .preference-option-text']: {
      fontSize: '.875rem',
    },
  },
}));

function Preferences({ open }: { open: () => void }) {
  return (
    <Div>
      <S.Header>
        <div className='box name'>Preferences</div>

        <div className='status-text optional'>(Optional)</div>
      </S.Header>

      <ButtonBase className='preference-option' onClick={open}>
        <Typography className='preference-option-text'>
          Add Special Instructions
        </Typography>

        <KeyboardArrowRightIcon />
      </ButtonBase>
    </Div>
  );
}

export default Preferences;
