import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

function CategoryHeader({ title }: { title: string }) {
  return (
    <Typography
      variant='h4'
      sx={{
        color: palette.primary[900],
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontWeight: 700,
      }}
    >
      {title}
    </Typography>
  );
}

export default CategoryHeader;
