import { styled } from '@mui/material';

import palette from '@utils/palette';

const Option = styled('div')(({ theme }) => ({
  ['& .label-box']: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  ['& .name']: {
    display: 'flex',
    flexGrow: 1,
    color: palette.grey[800],
    fontWeight: 500,
    fontSize: '.75rem',
  },

  ['& .price']: {
    fontSize: '.75rem',
    color: palette.grey[500],
  },

  ['& .MuiFormControlLabel-root']: {
    width: '100%',
    marginRight: 0,
    marginLeft: 0,
  },

  ['& .MuiFormControlLabel-label']: {
    width: '100%',
  },

  ['& .MuiButtonBase-root']: {
    paddingRight: 8,
    paddingLeft: 0,
  },

  [theme.breakpoints.up('sm')]: {
    ['& .name']: {
      fontSize: '.875rem',
    },

    ['& .price']: {
      fontSize: '.875rem',
    },
  },
}));

export { Option };
