import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { NextLinkComposed } from '@components/Link';
import { AuthPageType, PageType } from '@hooks/useClientAppBar';
import * as S from './ClientDrawer.styled';

interface DrawerListItemProps {
  page: PageType;
  handleClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function DrawerListItem({ page, handleClick }: DrawerListItemProps) {
  const { name, href, icon: IconElement } = page;

  const prop =
    handleClick === undefined
      ? { component: NextLinkComposed, to: { pathname: href } }
      : { onClick: handleClick };

  return (
    <ListItem disablePadding>
      <ListItemButton {...prop}>
        <ListItemIcon>
          <IconElement />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}

interface DrawerProps {
  authReady: boolean;
  isAuthenticated: boolean;
  pages: PageType[];
  authPages: AuthPageType[];
  unauthPages: PageType[];
}

function Drawer({
  authReady,
  isAuthenticated,
  pages,
  authPages,
  unauthPages,
}: DrawerProps) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isMd) setOpen(false);
  }, [isMd]);

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
    <S.Div>
      <IconButton
        className='menu-icon-btn'
        aria-label='menu'
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      <S.Drawer anchor='left' open={open} onClose={toggleDrawer(false)}>
        <div className='drawer-toolbar' />

        <div
          className='drawer-content'
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

          {authReady && (
            <List className='auth-links'>
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
        </div>
      </S.Drawer>
    </S.Div>
  );
}

export default Drawer;

// <NextLinkComposed to='/order' className='drawer-button'>
//   <MenuIcon />
//   <div>Order</div>
// </NextLinkComposed>
