import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import palette from '@utils/palette';
import ItemTag from './ItemTag';
import ImageSkeleton from './skeletons/ImageSkeleton';

function Item({ item }: { item: MenuItemType }) {
  const { name, description, tags, photoUrl, notes } = item;
  const [loaded, setLoaded] = useState(false);

  return (
    <Stack alignItems='center' spacing={0.5} padding='10px' width='100%'>
      <div>
        {loaded ? null : <ImageSkeleton />}
        <Box
          component='img'
          src={`/menu-items/${photoUrl}`}
          alt={name}
          width='100%'
          sx={loaded ? {} : { display: 'none' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      <Typography
        variant='h6'
        sx={{
          color: palette.primary[900],
          textAlign: 'center',
          fontSize: { xs: '10px', sm: '12.5px', md: '15px' },
        }}
      >
        {name}
      </Typography>

      {tags && <ItemTag tags={tags} />}

      <Typography
        variant='caption'
        sx={{ fontSize: '10px', textAlign: 'center' }}
      >
        {description}
      </Typography>

      {notes && (
        <Typography
          variant='caption'
          sx={{ fontSize: '10px', padding: '10px', textAlign: 'center' }}
        >
          {notes}
        </Typography>
      )}
    </Stack>
  );
}

export default Item;
