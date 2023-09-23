import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { NextRouter } from 'next/router';

import FullScreenLoader from '@components/FullScreenLoader';
import LogoButton from '@components/LogoButton';

function getSpoonsLayout(
  page: React.ReactElement,
  router: NextRouter,
  pageAccess: 'public' | 'private' | 'unauthenticated',
  authReady: boolean,
  isAuthenticated: boolean,
  isAccessAllowed: boolean = true,
) {
  const home = '/';

  if (!authReady) return <FullScreenLoader />;

  if (pageAccess === 'private' && !isAuthenticated) {
    if (router.pathname !== '/login') router.push('/login');
    return <FullScreenLoader />;
  }

  if (pageAccess === 'unauthenticated' && isAuthenticated) {
    if (router.pathname !== home) router.push(home);
    return <FullScreenLoader />;
  }

  if (!isAccessAllowed) {
    if (router.pathname !== home) router.push(home);
    return <FullScreenLoader />;
  }

  return (
    <Container maxWidth='sm'>
      <Stack minHeight='100vh' pt={20}>
        <LogoButton
          home={home}
          color='primary'
          sx={{ mb: 3, color: 'inherit' }}
        />
        {page}
      </Stack>
    </Container>
  );
}

export default getSpoonsLayout;
