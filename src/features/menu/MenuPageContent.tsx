import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';
import CategoryToggle from './components/CategoryToggle';
import SandwichCategory from './components/SandwichCategory';
import StandardCategory from './components/StandardCategory';
import useGetMenu from './hooks/useGetMenu';

function MenuPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <>
      <Container
        maxWidth='md'
        sx={{ marginTop: { xs: '10px', sm: '15px', md: '20px' } }}
      >
        <Typography
          variant='h3'
          sx={{
            color: palette.primary[950],
            marginBottom: { xs: '8px', sm: '12px', md: '15px' },
            fontSize: { xs: '30px', sm: '35px', md: '40px' },
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: 3,
            fontWeight: 800,
          }}
        >
          Menu
        </Typography>

        <CategoryToggle />

        <Stack
          spacing={{ xs: 2, sm: 3, md: 4 }}
          marginTop={{ xs: '8px', sm: '12px', md: '15px' }}
        >
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
