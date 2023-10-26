import Container from '@mui/material/Container';

import CategoryToggle from '@components/CategoryToggle';
import PageHeader from '@components/PageHeader';
import theme from '@utils/theme';
import Menu from './components/Menu';
import useGetMenu from './hooks/useGetMenu';

function OrderPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='lg' sx={{ paddingBottom: '10px' }}>
      <PageHeader text='Order' />

      {isLoading || isFetching || data === undefined ? (
        <></>
      ) : (
        <>
          <CategoryToggle
            categories={data.categories}
            maxWidth={theme.breakpoints.values.lg}
          />

          <Menu menu={data.menu} />
        </>
      )}
    </Container>
  );
}

export default OrderPageContent;
