import LunchDining from '@mui/icons-material/LunchDining';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import { NextLinkComposed } from '@components/Link';
import { CartButton } from '@features/cart';
import useClientAppBar from '@hooks/useClientAppBar';
import { styled } from '@mui/material';
import palette from '@utils/palette';
import AppBarButton from './AppBarButton';
import Drawer from './Drawer';
import UserMenu from './UserMenu';

const Div = styled('div')(({ theme }) => ({
  position: 'fixed',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'row',
  height: '56px',
  width: '100%',
  borderBottom: `1px solid ${palette.grey[200]}`,
  backgroundColor: palette.base.white,

  '& .appbar-container': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1536px',
    padding: '0px 16px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '& .appbar-logo': {
    color: palette.primary[700],

    '& svg': {
      marginRight: '8px',
    },

    '& .logo-text': {
      fontFamily: 'monospace',
      fontSize: '20px',
      fontWeight: 900,
      lineHeight: 1.6,
      letterSpacing: '.3rem',
      textDecoration: 'none',
    },
  },

  '& .xs-logo': {
    display: 'flex',
    flexGrow: 1,
    marginBottom: '2px',
  },

  '& .md-logo': {
    display: 'none',
    marginRight: '32px',
    marginBottom: '4px',
  },

  [theme.breakpoints.up('md')]: {
    '& .appbar-container': {
      padding: '0px 32px',
    },

    '& .xs-logo': { display: 'none' },

    '& .md-logo': { display: 'flex' },
  },
}));

function ClientAppBar() {
  const { authReady, isAuthenticated, pages, authPages, unauthPages } =
    useClientAppBar();

  return (
    <Div id='client-app-bar'>
      <div className='appbar-container'>
        <ButtonBase
          className='appbar-logo md-logo'
          component={NextLinkComposed}
          to={{ pathname: '/' }}
        >
          <LunchDining />

          <div className='logo-text'>spoons</div>
        </ButtonBase>

        <Drawer
          sx={{ display: { xs: 'flex', md: 'none' } }}
          authReady={authReady}
          isAuthenticated={isAuthenticated}
          pages={pages}
          authPages={authPages}
          unauthPages={unauthPages}
        />

        <ButtonBase
          className='appbar-logo xs-logo'
          component={NextLinkComposed}
          to={{ pathname: '/' }}
        >
          <LunchDining />

          <div className='logo-text'>spoons</div>
        </ButtonBase>

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

        <CartButton />

        {authReady ? (
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
        ) : (
          <div style={{ width: '143px' }} />
        )}
      </div>
    </Div>
  );
}

export default ClientAppBar;
