import Typography from '@mui/material/Typography';

import palette from '@utils/palette';
import ItemGrid from './ItemGrid';

interface CategorySectionProps {
  category: string;
  items: PublicMenuItemType[];
}

function CategorySection({ category, items }: CategorySectionProps) {
  return (
    <>
      <Typography
        variant='h5'
        sx={{
          color: palette.primary[900],
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontWeight: 700,
          fontSize: { xs: '15px', sm: '20px', md: '25px' },
        }}
      >
        {category}
      </Typography>

      <ItemGrid items={items} />
    </>
  );
}

export default CategorySection;
