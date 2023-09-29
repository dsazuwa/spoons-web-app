import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';
import Tag from './Tag';

function Item({ item }: { item: PublicMenuItemType }) {
  const { name, description, tags, photoUrl, notes } = item;

  const width = { xs: '350px', sm: '275px', md: '250px' };

  return (
    <Stack alignItems='center' sx={{ width }} spacing={0.5}>
      <Box
        component='img'
        src={`/menu-items/${photoUrl}`}
        alt={name}
        sx={{ width }}
      />

      <Typography
        variant='h6'
        sx={{
          color: palette.primary[900],
          textAlign: 'center',
          fontSize: '15px',
        }}
      >
        {name}
      </Typography>

      {tags && <Tag tags={tags} />}

      <Typography
        variant='caption'
        sx={{ fontSize: '10px', textAlign: 'center' }}
      >
        {description}
      </Typography>

      {notes && (
        <Typography
          variant='caption'
          sx={{ fontSize: '10px', textAlign: 'center', padding: '10px' }}
        >
          {notes}
        </Typography>
      )}
    </Stack>
  );
}

export default Item;
