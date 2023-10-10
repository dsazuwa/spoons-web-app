import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CategoryToggle from '@components/CategoryToggle';
import { PageHeaderStyles } from '@styles/typography.styles';
import Menu from './components/Menu';
import useGetMenu from './hooks/useGetMenu';

function OrderPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='lg' sx={{ paddingBottom: '10px' }}>
      <Typography variant='h3' sx={PageHeaderStyles}>
        Order
      </Typography>

      {isLoading || isFetching || data === undefined ? (
        <></>
      ) : (
        <>
          <CategoryToggle categories={data.categories} />
          <Menu menu={data.menu} />
        </>
      )}
    </Container>
  );
}

export default OrderPageContent;
