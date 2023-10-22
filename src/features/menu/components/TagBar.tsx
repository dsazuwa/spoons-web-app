import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

function TagBar() {
  const tags = [
    { name: 'V', description: 'Vegan' },
    { name: 'VG', description: 'Vegetarian' },
    { name: 'GF', description: 'Gluten-Free' },
    { name: 'RGF', description: 'Can be Requested Gluten-Free' },
    { name: 'N', description: 'Contains Nuts' },
  ];

  return (
    <Stack
      direction='row'
      justifyContent='center'
      flexWrap='wrap'
      spacing={{ xs: 1, sm: 1.5, md: 2 }}
    >
      {tags.map(({ name, description }, index) => (
        <Stack
          key={index}
          direction='row'
          spacing={{ xs: 0.25, sm: 0.5, md: 0.75 }}
        >
          <Typography
            sx={{
              color: palette.primary[900],
              fontSize: { xs: '6px', sm: '8px', md: '10px' },
              fontWeight: 600,
            }}
          >
            {name}
          </Typography>

          <Divider orientation='vertical' variant='middle' flexItem />

          <Typography
            sx={{
              color: palette.grey[400],
              fontSize: { xs: '6px', sm: '8px', md: '10px' },
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
