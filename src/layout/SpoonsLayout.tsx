import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import LogoButton from '@components/LogoButton';

function getSpoonsLayout(page: React.ReactElement) {
  return (
    <Container maxWidth='sm'>
      <Stack minHeight='100vh' pt={20}>
        <LogoButton home='/' color='primary' sx={{ mb: 3, color: 'inherit' }} />
        {page}
      </Stack>
    </Container>
  );
}

export default getSpoonsLayout;
