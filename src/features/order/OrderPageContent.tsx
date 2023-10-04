import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CategoryToggle from '@components/CategoryToggle';
import useGetMenu from '@features/menu/hooks/useGetMenu';
import palette from '@utils/palette';
import Menu from './components/Menu';

function OrderPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='lg' sx={{ padding: '10px' }}>
      <Typography
        variant='h3'
        sx={{
          color: palette.primary[950],
          paddingY: { xs: '5px', sm: '7.5px', md: '10px' },
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
