import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';

function FullScreenLoader() {
  return (
    <Container maxWidth='sm' sx={{ height: '100vh' }}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ height: '100%' }}
      >
        <CircularProgress />
      </Box>
    </Container>
  );
}

export default FullScreenLoader;
