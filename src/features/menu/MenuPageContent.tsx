import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';
import MenuView from './components/MenuView';
import MenuSkeleton from './components/skeletons/MenuSkeleton';
import useGetMenu from './hooks/useGetMenu';

function MenuPageContent() {
  const { isFetching, isLoading, data } = useGetMenu();

  return (
    <Container id='menu-container' maxWidth='md'>
      <Box height={{ xs: '10px', sm: '15px' }} />
      <Typography
        variant='h3'
        sx={{
          color: palette.primary[950],
          fontSize: { xs: '30px', sm: '35px', md: '40px' },
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: 3,
          fontWeight: 800,
        }}
      >
        Menu
      </Typography>

      {isLoading || isFetching || data === undefined ? (
        <MenuSkeleton />
      ) : (
        <MenuView data={data} />
      )}
    </Container>
  );
}

export default MenuPageContent;
