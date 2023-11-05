import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import NextLink from 'next/link';

import { PageType } from '@hooks/useClientAppBar';

interface UserMenuItemProps {
  page: PageType;
  handleClose: () => void;
  handleLogout?: () => void;
}

function UserMenuItem({ page, handleClose, handleLogout }: UserMenuItemProps) {
  const { name, href, icon: IconComponent } = page;

  const props =
    handleLogout === undefined
      ? { href, component: NextLink, onClick: handleClose }
      : {
          onClick: () => {
            handleClose();
            handleLogout();
          },
        };

  return (
    <MenuItem {...props} sx={{ width: '180px', padding: '10px' }}>
      <ListItemIcon>
        <IconComponent fontSize='small' />
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </MenuItem>
  );
}

export default UserMenuItem;
