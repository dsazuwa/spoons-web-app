import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import * as S from './ModifierHeader.styled';

const Div = styled('div')(({ theme }) => ({
  '& svg': {
    fontSize: '1.5em',
  },

  ['& .option']: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '9px 0px',
    marginTop: '0.5rem',
  },

  ['& .option-text']: {
    marginRight: 'auto',
    fontSize: '.75rem',
  },

  [theme.breakpoints.up('sm')]: {
    ['& .option-text']: {
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

      <ButtonBase className='option'>
        <Typography className='option-text'>
          Add Special Instructions
        </Typography>

        <KeyboardArrowRightIcon />
      </ButtonBase>
    </Div>
  );
}

export default Preferences;
