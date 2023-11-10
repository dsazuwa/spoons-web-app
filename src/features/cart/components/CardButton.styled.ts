import MuiDrawer from '@mui/material/Drawer';
import MuiIconButton from '@mui/material/IconButton';
import MuiButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import MuiBadge, { BadgeProps } from '@mui/material/Badge';

import palette from '@utils/palette';

const Badge = styled(MuiBadge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -4,
    bottom: 16,
    padding: '0 4px',
    fontSize: '12px',
  },

  '& svg': {
    color: palette.base.black,
  },
}));

const Drawer = styled(MuiDrawer)(() => ({
  '& .MuiModal-backdrop': {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
}));

const CloseButton = styled(MuiIconButton)(({ theme }) => ({
  padding: '8px 0',
  color: palette.base.black,

  svg: {
    fontSize: '.85rem',
  },

  [theme.breakpoints.up('md')]: { padding: '16px' },
}));

const DrawerContent = styled('div')(({ theme }) => ({
  padding: '16px',

  [theme.breakpoints.up('sm')]: { width: '480px' },

  [theme.breakpoints.up('md')]: { width: '560px' },
}));

const Button = styled(MuiButton)(({ theme }) => ({
  justifyContent: 'space-between',
  borderRadius: '24px',
  minWidth: '80px',

  '& svg': {
    marginRight: '8px',
  },

  '& div': {
    fontSize: '14px',
    fontWeight: 600,
  },

  [theme.breakpoints.up('md')]: { margin: '8px' },
}));

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  margin: 0,

  '& svg': {
    color: palette.grey[500],
  },

  [theme.breakpoints.up('md')]: { margin: '8px' },
}));

export { Badge, Button, IconButton, CloseButton, Drawer, DrawerContent };
