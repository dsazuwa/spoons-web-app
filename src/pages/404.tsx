import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

import { NextLinkComposed } from '@components/Link';
import getSpoonsLayout from '@layout/SpoonsLayout';

function PageNotFound() {
  const router = useRouter();
  const refreshPage = () => router.reload();

  return (
    <>
      <Typography variant='h4' sx={{ mb: 4, fontWeight: 700 }}>
        404 Page not found
      </Typography>

      <Typography sx={{ textAlign: 'center' }}>
        We&apos;re sorry, the page you requested could not be found.
        <br />
        Please return to the homepage
      </Typography>

      <Stack direction='row' spacing={3} mt={3}>
        <Button
          variant='contained'
          color='primary'
          component={NextLinkComposed}
          to={{
            pathname: '/',
          }}
        >
          Go back to Homepage
        </Button>

        <Button onClick={() => refreshPage()}>Try Again</Button>
      </Stack>
    </>
  );
}

PageNotFound.getLayout = getSpoonsLayout;

export default PageNotFound;
