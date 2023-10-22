import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

function CategoryHeader({ name }: { name: string }) {
  return (
    <Typography
      variant='h4'
      sx={{
        color: palette.primary[900],
        textTransform: 'uppercase',
        letterSpacing: { xs: 2, sm: 2.5, md: 3 },
        fontWeight: 1000,
        fontSize: { xs: '15px', sm: '17.5px', md: '20px' },
        paddingLeft: { xs: '10px', sm: '12.5px', md: '15px' },
      }}
    >
      {name}
    </Typography>
  );
}

export default CategoryHeader;
