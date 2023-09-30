import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

interface CategoryHeaderProps {
  title: string;
}

function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <Typography
      variant='h4'
      sx={{
        color: palette.primary[900],
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 3,
        fontWeight: 1000,
        fontSize: { xs: '20px', sm: '25px', md: '30px' },
      }}
    >
      {title}
    </Typography>
  );
}

export default CategoryHeader;
