import { styled } from '@mui/material';
import MuiIconButton from '@mui/material/IconButton';
import MuiTextField from '@mui/material/TextField';

import palette from '@utils/palette';

const IconButton = styled(MuiIconButton)(({ disabled, theme }) => ({
  margin: '0 16px',

  ['& svg']: {
    color: disabled ? palette.grey[400] : palette.grey[700],
    fontSize: '24px',
  },

  [theme.breakpoints.up('sm')]: {
    ['& svg']: {
      fontSize: '32px',
    },
  },
}));

const TextField = styled(MuiTextField)(({ theme }) => ({
  width: '75px',

  '& input': {
    color: palette.grey[800],
    padding: '16px 12px',
    fontSize: '.75rem',
    fontWeight: '400',
    textAlign: 'center',
  },

  '& .MuiOutlinedInput-root': {
    background: palette.grey[100],
    borderRadius: '8px',

    '& fieldset': {
      borderColor: palette.grey[100],
    },

    '&:hover fieldset': {
      borderColor: palette.grey[100],
    },

    '&.Mui-focused fieldset': {
      borderWidth: '2px',
      borderColor: palette.base.black,
    },
  },

  '& svg': {
    fontSize: '24px',
  },

  [theme.breakpoints.up('sm')]: {
    width: '100px',

    '& input': {
      padding: '20px 12px',
      fontSize: '1rem',
    },
  },
}));

export { IconButton, TextField };
