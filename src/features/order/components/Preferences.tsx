import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';

import * as S from './ModifierHeader.styled';
import DialogContext, { DialogContextType } from '../contexts/DialogContext';

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
  const { setType } = useContext(DialogContext) as DialogContextType;

  return (
    <Div>
      <S.Header selected={true}>
        <div className='box name'>Preferences</div>

        <div className='status-text optional'>(Optional)</div>
      </S.Header>

      <ButtonBase
        className='preference-option'
        onClick={() => setType('preferences')}
      >
        <Typography className='preference-option-text'>
          Add Special Instructions
        </Typography>

        <KeyboardArrowRightIcon />
      </ButtonBase>
    </Div>
  );
}

export default Preferences;
