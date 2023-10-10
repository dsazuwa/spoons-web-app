import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import ItemGrid from './ItemGrid';

interface CategoryProps {
  index: number;
  menu: CategoryItemType[];
}

function Category({ index, menu }: CategoryProps) {
  const { category, items } = menu[index];

  return (
    <Stack
      id={category}
      direction='column'
      spacing={1}
      paddingTop={{ xs: '5px', sm: '10px', md: '10px' }}
    >
      <CategoryHeader name={category} />
      <ItemGrid items={items} />
    </Stack>
  );
}

export default Category;
