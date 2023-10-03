import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { useState } from 'react';

import palette from '@utils/palette';
import { AuthPageType } from '.';
import UserMenuItem from './UserMenuItem';

interface UserMenuProps {
  authPages: AuthPageType[];
}

function UserMenu({ authPages }: UserMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={{ color: palette.base.white, marginRight: '10px' }}
        onClick={handleClick}
      >
        <AccountCircle />
      </IconButton>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ marginTop: '9px' }}
      >
        {authPages.map(({ page, handleLogout }) => (
          <UserMenuItem
            key={page.name}
            page={page}
            handleClose={handleClose}
            handleLogout={handleLogout}
          />
        ))}
      </Menu>
    </>
  );
}

export default UserMenu;
