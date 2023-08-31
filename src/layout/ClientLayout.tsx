import Box from '@mui/material/Box';

import Footer from '@components/Footer';
import ClientAppBar from '@components/ClientAppBar';

function getClientLayout(page: React.ReactElement) {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <ClientAppBar />
      {page}
      <Footer />
    </Box>
  );
}

export default getClientLayout;
