import { styled } from '@mui/material';
import Stack from '@mui/material/Stack';

import CategoryToggle from '@components/CategoryToggle';
import Footer from '@components/Footer';
import Loader from '@components/Loader';
import PageHeader from '@components/PageHeader';
import theme from '@utils/theme';
import useGetMenu from '../hooks/useGetMenu';
import Category from './Category';

const Div = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: 'calc(100vh - 56px)',

  '& .menu-box': {
    alignItems: 'center',
    maxWidth: '1200px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  '& .menu-sections': {
    padding: '0 8px 16px 8px',
    marginTop: '20px',
  },

  [theme.breakpoints.up('lg')]: {
    width: 'calc(100% - 340px)',
  },
}));

function Menu() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Div>
      <div id='menu-container'>
        <PageHeader text='Order' />

        {isLoading || isFetching || data === undefined ? (
          <Loader height='250px' />
        ) : (
          <div className='menu-box'>
            <CategoryToggle
              categories={data.categories}
              maxWidth={theme.breakpoints.values.lg}
            />

            <Stack className='menu-sections' spacing={3}>
              {data.menu.map(({ category, items }, index) => (
                <Category
                  key={`menu-section-${index}`}
                  category={category}
                  items={items}
                />
              ))}
            </Stack>
          </div>
        )}
      </div>

      <Footer />
    </Div>
  );
}

export default Menu;
