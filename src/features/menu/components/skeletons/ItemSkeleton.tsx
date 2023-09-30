import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ImageSkeleton from './ImageSkeleton';

function ItemSkeleton() {
  return (
    <Stack
      spacing={0.5}
      alignItems='center'
      justifyContent='center'
      padding='10px'
      width='100%'
    >
      <ImageSkeleton />

      <Typography
        variant='h6'
        sx={{
          width: '75%',
          fontSize: { xs: '10px', sm: '12.5px', md: '15px' },
        }}
      >
        <Skeleton />
      </Typography>

      <Typography variant='caption' sx={{ width: '40%', fontSize: '7px' }}>
        <Skeleton />
      </Typography>

      <Typography variant='caption' sx={{ width: '90%', fontSize: '7px' }}>
        <Skeleton />
      </Typography>

      <Typography variant='caption' sx={{ width: '85%', fontSize: '7px' }}>
        <Skeleton />
      </Typography>
    </Stack>
  );
}

export default ItemSkeleton;
