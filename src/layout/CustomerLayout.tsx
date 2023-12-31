import Box from '@mui/material/Box';
import { NextRouter } from 'next/router';

import ClientAppBar from '@components/ClientAppBar';
import FullScreenLoader from '@components/FullScreenLoader';
import { PageAcceessType } from '@types';

function getCustomerLayout(
  page: React.ReactElement,
  pageConfig:
    | { pageAccess: 'public'; router: undefined }
    | { pageAccess: PageAcceessType; router: NextRouter },
  authReady: boolean,
  isAuthenticated: boolean,
) {
  const { pageAccess, router } = pageConfig;
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

  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <ClientAppBar />

      <Box marginTop='56px' />

      {page}
    </Box>
  );
}

export default getCustomerLayout;
