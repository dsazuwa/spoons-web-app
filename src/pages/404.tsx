import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

import { NextLinkComposed } from '@components/Link';
import getSpoonsLayout from '@layout/SpoonsLayout';

function PageNotFound() {
  const router = useRouter();
  const refreshPage = () => router.reload();

  return getSpoonsLayout(
    <>
      <Typography
        variant='h4'
        sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}
      >
        404 Page not found
      </Typography>

      <Typography sx={{ mb: 3, textAlign: 'center' }}>
        We&apos;re sorry, the page you requested could not be found.
        <br />
        Please return to the homepage
      </Typography>

      <Box display='flex' justifyContent='center' alignItems='center'>
        <Button
          variant='contained'
          color='primary'
          component={NextLinkComposed}
          sx={{ mr: 2 }}
          to={{
            pathname: '/',
          }}
        >
          Go back to Homepage
        </Button>

        <Button onClick={() => refreshPage()}>Try Again</Button>
      </Box>
    </>,
    router,
    'public',
    true,
    true,
  );
}

export default PageNotFound;
