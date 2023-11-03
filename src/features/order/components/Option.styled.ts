import { styled } from '@mui/material';

import palette from '@utils/palette';

const Option = styled('div')(({ theme }) => ({
  '& .label-box': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 0',
  },

  '& .name-box': {
    flexGrow: 1,
  },

  '& .name': {
    color: palette.grey[800],
    fontWeight: 500,
    fontSize: '.75rem',
  },

  '& .selections': {
    display: 'inline-block',
    marginTop: '4px',
    padding: '2px 6px',
    fontWeight: 500,
    fontSize: '.60rem',
    backgroundColor: palette.warning[100],
    color: palette.warning[800],
  },

  '& .price': {
    fontSize: '.75rem',
    color: palette.grey[500],
  },

  '& .MuiFormControlLabel-root': {
    width: '100%',
    marginRight: 0,
    marginLeft: 0,
  },

  '& .MuiFormControlLabel-label': {
    width: '100%',
  },

  '& .MuiButtonBase-root': {
    paddingRight: 8,
    paddingLeft: 0,
  },

  [theme.breakpoints.up('sm')]: {
    '& .label-box': {
      padding: '8px 0',
    },

    '& .name': {
      fontSize: '.875rem',
    },

    '& .selections': {
      fontSize: '.625rem',
    },

    '& .price': {
      fontSize: '.875rem',
    },
  },
}));

export { Option };
