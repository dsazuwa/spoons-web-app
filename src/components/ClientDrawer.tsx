import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import { NextLinkComposed } from '@components/Link';
import { AuthPageType, PageType } from '@hooks/useClientAppBar';
import * as S from './ClientDrawer.styled';

interface DrawerButtonProps {
  page: PageType;
  handleClick: (() => void) | undefined;
}

function DrawerButton({ page, handleClick }: DrawerButtonProps) {
  const { name, href, icon: Icon } = page;

  const props =
    handleClick === undefined
      ? { component: NextLinkComposed, to: { pathname: href } }
      : { onClick: handleClick };

  return (
    <Button key={name} className='drawer-button' {...props}>
      <Icon />
      <div>{name}</div>
    </Button>
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
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

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
              <DrawerButton
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
                  <DrawerButton
                    key={page.name}
                    page={page}
                    handleClick={handleLogout}
                  />
                ))}

              {!isAuthenticated &&
                unauthPages.map((page) => (
                  <DrawerButton
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
