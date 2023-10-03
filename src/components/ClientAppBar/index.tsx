import AccountCircle from '@mui/icons-material/AccountCircle';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import Login from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBook from '@mui/icons-material/MenuBook';
import PersonAddAlt from '@mui/icons-material/PersonAddAlt';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { SvgIconTypeMap } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Toolbar from '@mui/material/Toolbar';

import LogoButton from '@components/LogoButton';
import useAuthentication from '@hooks/useAuthentication';
import useLogout from '@hooks/useLogout';
import palette from '@utils/palette';
import AppBarButton from './AppBarButton';
import Drawer from './Drawer';
import UserMenu from './UserMenu';

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
    <Box>
      <AppBar id='client-app-bar' sx={{ height: '56px' }}>
        <Container maxWidth='xl'>
          <Toolbar
            variant='dense'
            disableGutters
            sx={{ minHeight: '56px', height: '56px' }}
          >
            <LogoButton
              home='/'
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 4, mb: 0.5 }}
            />

            <Drawer
              sx={{ display: { xs: 'flex', md: 'none' } }}
              authReady={authReady}
              isAuthenticated={isAuthenticated}
              pages={pages}
              authPages={authPages}
              unauthPages={unauthPages}
            />

            <LogoButton
              home='/'
              sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, mb: 0.1 }}
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
                {!isAuthenticated &&
                  unauthPages.map((page) => (
                    <AppBarButton
                      key={page.name}
                      page={page}
                      handleClick={undefined}
                      sx={{ display: 'block' }}
                    />
                  ))}

                {isAuthenticated && <UserMenu authPages={authPages} />}
              </Box>
            )}

            <IconButton sx={{ color: palette.base.white, marginRight: '8px' }}>
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default ClientAppBar;
