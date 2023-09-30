import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import CategoryNotes from './CategoryNotes';
import ItemGrid from './ItemGrid';
import TagBar from './TagBar';

interface StandardCategoryProps {
  data: GroupedMenuResponseType;
  name: string;
}

function StandardCategory({ data, name }: StandardCategoryProps) {
  const { category, notes, items } = (
    data.menu as Record<string, PublicCategoryItemType>
  )[name];

  return (
    <Stack id={name} alignItems='center' spacing={{ xs: 1, sm: 1.5 }}>
      <CategoryHeader title={category} />

      <CategoryNotes notes={notes} />

      <TagBar category={category} />

      <ItemGrid items={items} />
    </Stack>
  );
}

export default StandardCategory;
