import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import palette from '@utils/palette';

const Drawer = styled(MuiDrawer)(() => ({
  '& .MuiModal-backdrop': {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: '8px 0',
  color: palette.base.black,

  svg: { fontSize: '.85rem' },

  [theme.breakpoints.up('md')]: { padding: '16px' },
}));

const DrawerContent = styled('div')(({ theme }) => ({
  padding: '16px',

  [theme.breakpoints.up('sm')]: { width: '480px' },

  [theme.breakpoints.up('md')]: { width: '560px' },
}));

const Button = styled(IconButton)(({ theme }) => ({
  color: palette.base.white,
  margin: 0,

  [theme.breakpoints.up('md')]: { margin: '8px' },
}));

export { Button, CloseButton, Drawer, DrawerContent };
