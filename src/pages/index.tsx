import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Footer from '@components/Footer';
import { NextLinkComposed } from '@components/Link';
import getCustomerLayout from '@layout/CustomerLayout';

function HomePageContent() {
  return (
    <>
      <Container maxWidth='lg'>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          spacing={{ xs: 1, sm: 2 }}
          padding={{ xs: 2, sm: 5 }}
          alignItems='center'
          justifyContent='center'
        >
          <Stack
            spacing={2}
            px={{ xs: 2, sm: 5 }}
            border='0'
            alignItems='flex-start'
          >
            <Typography variant='h4'>
              Phasellus iaculis faucibus iaculis.
            </Typography>

            <Typography
              variant='body2'
              sx={{ display: { xs: 'none', md: 'inherit' } }}
            >
              {`Maecenas tellus libero, sodales sit amet lectus in, molestie ornare lacus. 
              In hac habitasse platea dictumst. 
              Vestibulum molestie nulla metus, vitae lacinia urna dignissim et.`}
            </Typography>

            <Button
              variant='contained'
              color='primary'
              component={NextLinkComposed}
              to={{ pathname: '/order' }}
            >
              Order Now
            </Button>
          </Stack>

          <Box
            component='img'
            height={{ xs: '100%', sm: '50%' }}
            width={{ xs: '100%', sm: '50%' }}
            alt='home page image'
            src='https://qichen-react.vercel.app/assets/images/hero/hero-1.jpg'
          />
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

function Home() {
  return getCustomerLayout(
    <HomePageContent />,
    { pageAccess: 'public', router: undefined },
    true,
    true,
  );
}

export default Home;
