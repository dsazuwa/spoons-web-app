import React, { useState } from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import Login from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/icons-material/Menu';
import MenuBook from '@mui/icons-material/MenuBook';
import PersonAddAlt from '@mui/icons-material/PersonAddAlt';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';

import LogoButton from '@components/LogoButton';
import useClientAppBar from '@hooks/useClientAppBar';
import AppBarButton from './AppBarButton';
import DrawerListItem from './DrawerListItem';

/* eslint-disable react/jsx-props-no-spreading */

function ClientAppBar() {
  const { auth, authReady, handleLogout } = useClientAppBar();

  const pages = [
    { name: 'Home', href: '/', icon: <Home /> },
    { name: 'Menu', href: '/menu', icon: <MenuBook /> },
    { name: 'Order', href: '/order', icon: <ReceiptLong /> },
    { name: 'About', href: '/about', icon: <Info /> },
  ];

  const authPages = [
    {
      page: { name: 'Account', href: '/account', icon: <AccountCircle /> },
      handleClick: undefined,
    },
    {
      page: { name: 'Log Out', href: '', icon: <LogoutIcon /> },
      handleClick: handleLogout,
    },
  ];

  const unauthPages = [
    { name: 'Login', href: '/login', icon: <Login /> },
    { name: 'Sign Up', href: '/register', icon: <PersonAddAlt /> },
  ];

  const [leftDrawer, setLeftDrawer] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      )
        return;
      setLeftDrawer(open);
    };

  return (
    <Box>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <LogoButton
              home='/'
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 4, mb: 0.5 }}
            />

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <Menu />
              </IconButton>

              <Drawer
                anchor='left'
                open={leftDrawer}
                onClose={toggleDrawer(false)}
              >
                <Toolbar />
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
                      {auth &&
                        authPages.map(({ page, handleClick }) => (
                          <DrawerListItem
                            key={page.name}
                            {...{ page, handleClick }}
                          />
                        ))}
                      {!auth &&
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
              </Drawer>
            </Box>

            <LogoButton
              home='/'
              sx={{ display: { xs: 'flex', md: 'none' }, mb: 0.1 }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <AppBarButton
                  key={page.name}
                  page={page}
                  handleClick={undefined}
                  sx={{ display: 'block' }}
                />
              ))}
            </Box>

            {authReady && (
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {auth &&
                  authPages.map(({ page, handleClick }) => (
                    <AppBarButton
                      key={page.name}
                      page={page}
                      handleClick={handleClick}
                    />
                  ))}

                {!auth &&
                  unauthPages.map((page) => (
                    <AppBarButton
                      key={page.name}
                      page={page}
                      handleClick={undefined}
                    />
                  ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default ClientAppBar;
