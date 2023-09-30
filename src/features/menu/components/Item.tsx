import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';
import ItemTag from './ItemTag';

function Item({ item }: { item: PublicMenuItemType }) {
  const { name, description, tags, photoUrl, notes } = item;

  return (
    <Stack alignItems='center' spacing={0.5} padding='10px' width='100%'>
      <Box
        component='img'
        src={`/menu-items/${photoUrl}`}
        alt={name}
        width='100%'
      />

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
