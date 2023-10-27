import { styled } from '@mui/material';

import palette from '@utils/palette';

const Header = styled('div')<{ selected: boolean }>(({ theme, selected }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',

  ['& svg']: {
    marginRight: '.25em',
    fontSize: '0.65em',
    stroke: 'currentColor',
    color: selected ? palette.success[700] : palette.warning[700],
  },

  ['& .box']: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    marginRight: '4px',
  },

  ['& .name']: { lineHeight: 1, fontWeight: 700, fontSize: '0.8rem' },

  ['& .prompt']: {
    color: palette.grey[500],
    marginTop: '4px',
    fontSize: '0.7em',
  },

  ['& .required-status']: {
    borderRadius: '8%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4px 6px',

    backgroundColor: selected ? palette.success[100] : palette.warning[100],
    color: selected ? palette.success[700] : palette.warning[800],
  },

  ['& .status-text']: {
    letterSpacing: '.05em',
    fontWeight: 700,
    fontSize: '0.6em',
  },

  ['& .required']: {
    color: selected ? palette.success[700] : palette.warning[800],
  },

  ['& .optional']: {
    color: palette.grey[500],
  },

  [theme.breakpoints.up('sm')]: {
    '& svg': { fontSize: '0.9em' },

    ['& .name']: { fontSize: '1em' },

    ['& .prompt']: { fontSize: '0.9em' },

    ['& .status-text']: { fontSize: '0.8em' },
  },
}));

export { Header };
