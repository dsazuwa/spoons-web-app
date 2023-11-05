import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';

import CategoryToggle from '@components/CategoryToggle';
import FullScreenLoader from '@components/FullScreenLoader';
import PageHeader from '@components/PageHeader';
import theme from '@utils/theme';
import useGetMenu from '../hooks/useGetMenu';
import Category from './Category';

const Container = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  maxWidth: '1200px',
  width: '100%',
  paddingBottom: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',

  [theme.breakpoints.up('lg')]: {
    width: 'calc(100% - 340px)',
  },
}));

function Menu() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container'>
      <PageHeader text='Order' />

      {isLoading || isFetching || data === undefined ? (
        <FullScreenLoader />
      ) : (
        <>
          <CategoryToggle
            categories={data.categories}
            maxWidth={theme.breakpoints.values.lg}
          />

          <Stack spacing={3} marginTop='20px'>
            {data.menu.map(({ category }, index) => (
              <Category
                key={`${category}-section`}
                index={index}
                menu={data.menu}
              />
            ))}
          </Stack>
        </>
      )}
    </Container>
  );
}

export default Menu;
