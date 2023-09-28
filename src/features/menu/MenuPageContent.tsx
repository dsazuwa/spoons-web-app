import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';
import CategoryLinkAppBar from './components/CategoryLinkAppBar';
import CategoryLinkBar from './components/CategoryLinkBar';
import SandwichCategory from './components/SandwichCategory';
import StandardCategory from './components/StandardCategory';
import useGetMenu from './hooks/useGetMenu';
import useScrollHandler from './hooks/useScrollHandler';

function MenuPageContent() {
  const { isScrolledPast } = useScrollHandler();
  const { isFetching, isLoading, data } = useGetMenu();

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
