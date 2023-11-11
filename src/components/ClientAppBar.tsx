import AccountCircle from '@mui/icons-material/AccountCircle';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import Login from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBook from '@mui/icons-material/MenuBook';
import PersonAddAlt from '@mui/icons-material/PersonAddAlt';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import { SvgIconTypeMap } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { NextLinkComposed } from '@components/Link';
import { CartButton } from '@features/cart';
import useAuthentication from '@hooks/useAuthentication';
import useLogout from '@hooks/useLogout';
import * as S from './ClientAppBar.styled';
import Drawer from './ClientDrawer';
import Logo from './Logo';

/* eslint-disable @typescript-eslint/ban-types */
export type PageType = {
  name: string;
  href: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
};
/* eslint-enable @typescript-eslint/ban-types */

export type AuthPageType = {
  page: PageType;
  handleLogout?: () => void;
};

function ClientAppBar() {
  const { authReady, isAuthenticated } = useAuthentication();
  const { handleLogout } = useLogout(false);

  const pages: PageType[] = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Menu', href: '/menu', icon: MenuBook },
    { name: 'Order', href: '/order', icon: ReceiptLong },
    { name: 'About', href: '/about', icon: Info },
  ];

  const authPages: AuthPageType[] = [
    {
      page: { name: 'Account', href: '/account', icon: AccountCircle },
      handleLogout: undefined,
    },
    {
      page: { name: 'Log Out', href: '', icon: LogoutIcon },
      handleLogout,
    },
  ];

  const unauthPages: PageType[] = [
    { name: 'Log In', href: '/login', icon: Login },
    { name: 'Sign Up', href: '/register', icon: PersonAddAlt },
  ];

  return (
    <S.Div id='client-app-bar'>
      <div className='appbar-container'>
        <Logo className='appbar-logo md-logo' />

        <Drawer
          authReady={authReady}
          isAuthenticated={isAuthenticated}
          pages={pages}
          authPages={authPages}
          unauthPages={unauthPages}
        />

        <Logo className='appbar-logo xs-logo' />

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ name, href }) => (
            <Button
              key={name}
              className='appbar-button'
              component={NextLinkComposed}
              to={{ pathname: href }}
            >
              {name}
            </Button>
          ))}
        </Box>

        {authReady && (
          <>
            <CartButton />

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                minWidth: '156px',
                justifyContent: 'center',
              }}
            >
              {!isAuthenticated &&
                unauthPages.map(({ name, href }) => (
                  <Button
                    key={name}
                    className='appbar-button'
                    component={NextLinkComposed}
                    to={{ pathname: href }}
                  >
                    {name}
                  </Button>
                ))}

              {isAuthenticated &&
                authPages.map(({ page, handleLogout }) => (
                  <Button
                    key={page.name}
                    className='appbar-button'
                    component={NextLinkComposed}
                    to={{ pathname: page.href }}
                    onClick={handleLogout}
                  >
                    {page.name}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
    </S.Div>
  );
}

export default ClientAppBar;
