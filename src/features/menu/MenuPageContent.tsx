import Container from '@mui/material/Container';

import CategoryToggle from '@components/CategoryToggle';
import PageHeader from '@components/PageHeader';
import Menu from './components/Menu';
import MenuSkeleton from './components/skeletons/MenuSkeleton';
import useGetMenu from './hooks/useGetMenu';

function MenuPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='md'>
      <PageHeader text='Menu' />

      {isLoading || isFetching || data === undefined ? (
        <MenuSkeleton />
      ) : (
        <>
          <CategoryToggle categories={data.categories} />
          <Menu menu={data.menu} />
        </>
      )}
    </Container>
  );
}

export default MenuPageContent;
