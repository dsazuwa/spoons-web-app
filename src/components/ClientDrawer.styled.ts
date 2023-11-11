import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

import palette from '@utils/palette';

const Div = styled('div')(({ theme }) => ({
  display: 'flex',

  '& .menu-icon-btn': {
    padding: '8px',

    '& svg': {
      color: 'rgb(73, 73, 73)',
    },
  },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& .drawer-toolbar': {
    height: '56px',
    borderBottom: `1px solid ${palette.grey[200]}`,
  },

  '& .drawer-content': {
    width: 320,
    height: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  '& .drawer-button': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    textDecoration: 'none',
    color: palette.grey[800],
    padding: '8px 16px',
    height: '48px',

    svg: {
      marginRight: '16px',
    },

    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },

  '& .auth-links': {
    borderTop: `1px solid ${palette.grey[200]}`,
  },
}));

export { Div, Drawer };
