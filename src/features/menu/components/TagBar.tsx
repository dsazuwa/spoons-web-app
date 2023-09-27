import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

const getTags = (category: string) => {
  const commonTags = [
    { name: 'V', description: 'Vegan' },
    { name: 'VG', description: 'Vegetarian' },
    { name: 'GF', description: 'Gluten-Free' },
  ];

  const nuts = { name: 'N', description: 'Contains Nuts' };

  const additionalTags =
    category === 'deli sides & soups'
      ? [nuts]
      : [{ name: 'RGF', description: 'Can be Requested Gluten-Free' }, nuts];

  return [...commonTags, ...additionalTags];
};

function TagBar({ category }: { category: string }) {
  const tags = getTags(category);

  return (
    <Stack direction='row' justifyContent='center' flexWrap='wrap' spacing={2}>
      {tags.map(({ name, description }, index) => (
        <Stack key={index} direction='row' spacing={1}>
          <Typography
            sx={{
              color: palette.primary[900],
              fontSize: '10px',
              fontWeight: 600,
            }}
          >
            {name}
          </Typography>

          <Divider orientation='vertical' variant='middle' flexItem />

          <Typography
            sx={{
              color: palette.grey[400],
              fontSize: '10px',
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default TagBar;
