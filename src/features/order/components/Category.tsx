import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import ItemGrid from './ItemGrid';

interface CategoryProps {
  id: string;
  name: string;
  items: PublicMenuItemType[];
}

function Category({ id, name, items }: CategoryProps) {
  return (
    <Stack
      id={id}
      direction='column'
      spacing={1}
      paddingTop={{ xs: '5px', sm: '10px', md: '10px' }}
    >
      <CategoryHeader name={name} />
      <ItemGrid items={items} />
    </Stack>
  );
}

export default Category;
