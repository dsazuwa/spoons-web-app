import Typography from '@mui/material/Typography';

import palette from '@utils/palette';

interface CategoryHeaderProps {
  id: string;
  title: string;
}

function CategoryHeader({ id, title }: CategoryHeaderProps) {
  return (
    <Typography
      id={id}
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
