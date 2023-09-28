import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import palette from '@utils/palette';
import { useGetMenuQuery } from './api/menu.api';
import CategoryLinkAppBar from './components/CategoryLinkAppBar';
import CategoryLinkBar from './components/CategoryLinkBar';
import SandwichCategory from './components/SandwichCategory';
import StandardCategory from './components/StandardCategory';

function MenuPageContent() {
  const [isScrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementTarget = document.getElementById('tag-bar');

      if (elementTarget) {
        const appBarHeight = 64;
        const linkAppBarHeight = 22.5;
        const linkAppBarPadding = 10;
        const offset = appBarHeight + linkAppBarHeight + linkAppBarPadding;

        const isScrolledPast =
          window.scrollY >
          elementTarget.offsetTop + elementTarget.offsetHeight - offset;
        setScrolledPast(isScrolledPast);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cachedMenu = useSelector((state: RootState) => state.menuState.menu);
  const isCached = cachedMenu !== undefined;

  const {
    isFetching,
    isLoading,
    data: retrievedData,
  } = useGetMenuQuery(undefined, {
    skip: isCached,
    refetchOnMountOrArgChange: true,
  });

  const data = isCached ? { menu: cachedMenu } : retrievedData;
  // const data = undefined;

  // type size = 'sm' | 'md' | 'lg';

  return (
    <>
      {isScrolledPast && <CategoryLinkAppBar />}

      <Container maxWidth='md' sx={{ marginTop: '20px' }}>
        <Typography
          variant='h3'
          sx={{
            color: palette.primary[950],
            textTransform: 'uppercase',
            letterSpacing: 3,
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '15px',
          }}
        >
          Menu
        </Typography>

        <CategoryLinkBar />

        <Stack spacing={5} marginTop={2}>
          <StandardCategory
            isFetching={isFetching}
            isLoading={isLoading}
            data={data}
            name='creations'
          />

          <SandwichCategory
            isFetching={isFetching}
            isLoading={isLoading}
            data={data}
          />

          <StandardCategory
            isFetching={isFetching}
            isLoading={isLoading}
            data={data}
            name='bowls'
          />

          <StandardCategory
            isFetching={isFetching}
            isLoading={isLoading}
            data={data}
            name='salads'
          />

          <StandardCategory
            isFetching={isFetching}
            isLoading={isLoading}
            data={data}
            name='combos'
          />

          <StandardCategory
            isFetching={isFetching}
            isLoading={isLoading}
            data={data}
            name='kids'
          />

          <StandardCategory
            isFetching={isFetching}
            isLoading={isLoading}
            data={data}
            name='sides'
          />
        </Stack>
      </Container>
    </>
  );
}

export default MenuPageContent;
