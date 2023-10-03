import MenuIcon from '@mui/icons-material/Menu';
import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';

import { AuthPageType, PageType } from '.';
import DrawerListItem from './DrawerListItem';

interface DrawerProps {
  authReady: boolean;
  isAuthenticated: boolean;
  pages: PageType[];
  authPages: AuthPageType[];
  unauthPages: PageType[];
  sx?: SxProps;
}

function Drawer({
  authReady,
  isAuthenticated,
  pages,
  authPages,
  unauthPages,
  sx,
}: DrawerProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      )
        return;
      setOpen(open);
    };

  return (
    <Box sx={sx}>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <MuiDrawer anchor='left' open={open} onClose={toggleDrawer(false)}>
        <Toolbar
          variant='dense'
          disableGutters
          sx={{ minHeight: '56px', height: '56px' }}
        />
        <Divider />
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {pages.map((page) => (
              <DrawerListItem
                key={page.name}
                page={page}
                handleClick={undefined}
              />
            ))}
          </List>

          <Divider />

          {authReady && (
            <List>
              {isAuthenticated &&
                authPages.map(({ page, handleLogout }) => (
                  <DrawerListItem
                    key={page.name}
                    page={page}
                    handleClick={handleLogout}
                  />
                ))}

              {!isAuthenticated &&
                unauthPages.map((page) => (
                  <DrawerListItem
                    key={page.name}
                    page={page}
                    handleClick={undefined}
                  />
                ))}
            </List>
          )}
        </Box>
      </MuiDrawer>
    </Box>
  );
}

export default Drawer;
