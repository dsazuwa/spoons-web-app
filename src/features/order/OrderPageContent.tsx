import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CategoryToggle from '@components/CategoryToggle';
import useGetMenu from '@features/menu/hooks/useGetMenu';
import { PageHeaderStyles } from '@styles/typography.styles';
import Menu from './components/Menu';

function OrderPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='lg'>
      <Typography variant='h3' sx={PageHeaderStyles}>
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
