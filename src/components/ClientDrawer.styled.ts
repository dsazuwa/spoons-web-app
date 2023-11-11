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
    width: 240,
    height: 'calc(100vh - 56px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  '& .drawer-button': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    textTransform: 'capitalize',
    fontSize: '12px',
    color: palette.grey[700],
    padding: '8px 16px',
    height: '48px',

    svg: {
      marginRight: '24px',
      fontSize: '20px',
    },
  },

  '& .auth-links': {
    borderTop: `1px solid ${palette.grey[200]}`,
  },

  [theme.breakpoints.up('sm')]: {
    '& .drawer-content': {
      width: 280,
    },

    '& .drawer-button': {
      fontSize: '14px',

      svg: {
        fontSize: '22px',
      },
    },
  },
}));

export { Div, Drawer };
