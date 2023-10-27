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
    padding: '9px 0px',
    marginTop: '0.5rem',
  },

  ['& .preference-option-text']: {
    marginRight: 'auto',
    fontSize: '.75rem',
    fontWeight: 500,
  },

  [theme.breakpoints.up('sm')]: {
    ['& .preference-option-text']: {
      fontSize: '1rem',
    },
  },
}));

function Preferences() {
  return (
    <Div>
      <S.Header selected={true}>
        <div className='box name'>Preferences</div>

        <div className='status-text optional'>(Optional)</div>
      </S.Header>

      <ButtonBase className='preference-option'>
        <Typography className='preference-option-text'>
          Add Special Instructions
        </Typography>

        <KeyboardArrowRightIcon />
      </ButtonBase>
    </Div>
  );
}

export default Preferences;
