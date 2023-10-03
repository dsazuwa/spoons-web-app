import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import useGetMenu from '@features/menu/hooks/useGetMenu';
import palette from '@utils/palette';
import CategoryToggle from './components/CategoryToggle';
import Menu from './components/Menu';

function OrderPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='lg'>
      <Box height={{ xs: '10px', sm: '15px' }} />
      <Typography
        variant='h3'
        sx={{
          color: palette.primary[950],
          paddingY: '10px',
          fontSize: { xs: '30px', sm: '35px', md: '40px' },
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 3,
          fontWeight: 800,
        }}
      >
        Order
      </Typography>

      <CategoryToggle />

      {isLoading || isFetching || data === undefined ? (
        <></>
      ) : (
        <Menu data={data} />
      )}
    </Container>
  );
}

export default OrderPageContent;
