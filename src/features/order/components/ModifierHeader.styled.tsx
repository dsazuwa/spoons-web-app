import { styled } from '@mui/material';

import palette from '@utils/palette';

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',

  '& svg': {
    marginRight: '.25em',
    fontSize: '0.65em',
  },

  '& .box': {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginRight: '4px',
  },

  '& .name': {
    lineHeight: 1,
    fontWeight: 700,
    fontSize: '0.8rem',
  },

  '& .prompt': {
    color: palette.grey[500],
    marginTop: '4px',
    fontSize: '0.7em',
  },

  '& .status-text': {
    fontWeight: 600,
    fontSize: '0.625em',
  },

  '& .required-status': {
    borderRadius: '8%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4px 6px',
  },

  '& .unfulfilled-modifier': {
    backgroundColor: palette.warning[100],
    color: palette.warning[800],

    '& svg': {
      color: palette.warning[700],
    },
  },

  '& .fulfilled-modifier': {
    backgroundColor: palette.success[100],
    color: palette.success[700],

    '& svg': {
      color: palette.success[700],
    },
  },

  '& .optional': {
    color: palette.grey[500],
  },

  [theme.breakpoints.up('sm')]: {
    '& svg': { fontSize: '0.9em' },

    '& .name': { fontSize: '0.9375em' },

    '& .prompt': { fontSize: '0.8125em' },

    '& .status-text': { fontSize: '0.75em' },
  },
}));

export { Header };
