import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import CategoryToggle from '@components/CategoryToggle';
import { PageHeaderStyles } from '@styles/typography.styles';
import Menu from './components/Menu';
import MenuSkeleton from './components/skeletons/MenuSkeleton';
import useGetMenu from './hooks/useGetMenu';

function MenuPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='md'>
      <Typography variant='h3' sx={PageHeaderStyles}>
        Menu
      </Typography>

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
