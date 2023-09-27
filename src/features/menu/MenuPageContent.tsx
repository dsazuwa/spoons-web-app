import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import palette from '@utils/palette';
import { useGetMenuQuery } from './api/menu.api';
import SandwichCategory from './components/SandwichCategory';
import StandardCategory from './components/StandardCategory';

function MenuPageContent() {
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

  // type size = 'sm' | 'md' | 'lg';

  return (
    <Container maxWidth='md' sx={{ padding: '20px' }}>
      <Typography
        variant='h3'
        sx={{
          color: palette.primary[950],
          textTransform: 'uppercase',
          letterSpacing: 3,
          fontWeight: 800,
          textAlign: 'center',
        }}
      >
        Menu
      </Typography>

      <Stack spacing={5}>
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
  );
}

export default MenuPageContent;
