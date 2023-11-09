import Container from '@mui/material/Container';

import CategoryToggle from '@components/CategoryToggle';
import Footer from '@components/Footer';
import PageHeader from '@components/PageHeader';
import theme from '@utils/theme';
import Menu from './components/Menu';
import MenuSkeleton from './components/skeletons/MenuSkeleton';
import useGetMenu from './hooks/useGetMenu';

function MenuPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <>
      <Container
        id='menu-container'
        maxWidth='md'
        sx={{ paddingBottom: '16px' }}
      >
        <PageHeader text='Menu' />

        {isLoading || isFetching || data === undefined ? (
          <MenuSkeleton />
        ) : (
          <>
            <CategoryToggle
              categories={data.categories}
              maxWidth={theme.breakpoints.values.md}
            />

            <Menu menu={data.menu} />
          </>
        )}
      </Container>

      <Footer />
    </>
  );
}

export default MenuPageContent;
