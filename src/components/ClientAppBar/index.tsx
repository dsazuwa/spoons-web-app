import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import LogoButton from '@components/LogoButton';
import useClientAppBar from '@hooks/useClientAppBar';
import AppBarButton from './AppBarButton';
import CartButton from '../../features/order/components/CartButton';
import Drawer from './Drawer';
import UserMenu from './UserMenu';

function ClientAppBar() {
  const { authReady, isAuthenticated, pages, authPages, unauthPages } =
    useClientAppBar();

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

            <CartButton />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default ClientAppBar;
