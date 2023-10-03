import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import ItemGrid from './ItemGrid';

interface CategoryProps {
  name: string;
  items: PublicMenuItemType[];
}

function Category({ name, items }: CategoryProps) {
  return (
    <Stack direction='column' spacing={1}>
      <CategoryHeader name={name} />
      <ItemGrid items={items} />
    </Stack>
  );
}

export default Category;
