import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import CategoryNotes from './CategoryNotes';
import ItemGrid from './ItemGrid';
import TagBar from './TagBar';

interface StandardCategoryProps {
  index: number;
  menu: CategoryItemType[];
}

function StandardCategory({ index, menu }: StandardCategoryProps) {
  const { category, notes, items } = menu[index];

  return (
    <Stack id={category} alignItems='center' spacing={{ xs: 1, sm: 1.5 }}>
      <CategoryHeader title={category} />

      <CategoryNotes notes={notes} />

      <TagBar category={category} />

      <ItemGrid items={items} />
    </Stack>
  );
}

export default StandardCategory;
