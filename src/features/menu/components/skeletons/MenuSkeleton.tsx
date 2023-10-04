import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ItemSkeleton from './ItemSkeleton';

function MenuSkeleton() {
  return (
    <Stack alignItems='center' justifyContent='center' paddingTop='10px'>
      <Typography
        variant='h4'
        sx={{
          textAlign: 'center',
          width: '50%',
          fontSize: { xs: '20px', sm: '25px', md: '30px' },
        }}
      >
        <Skeleton />
      </Typography>

      <Typography variant='caption' sx={{ width: '90%', fontSize: '7px' }}>
        <Skeleton />
      </Typography>

      <Typography variant='caption' sx={{ width: '85%', fontSize: '7px' }}>
        <Skeleton />
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <ItemSkeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ItemSkeleton />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ItemSkeleton />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default MenuSkeleton;
