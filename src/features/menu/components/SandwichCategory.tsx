import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import CategoryNotes from './CategoryNotes';
import CategorySection from './CategorySection';
import TagBar from './TagBar';

interface SandwichCategoryProps {
  index: number;
  menu: CategoryItemType[];
}

function SandwichCategory({ index, menu }: SandwichCategoryProps) {
  const { category, items, notes } = menu[index];

  const foodies = items.filter((x) => x.subCategory === 'foodie favorites');
  const classic = items.filter((x) => x.subCategory === 'craveable classics');

  return (
    <div id={category}>
      <Stack alignItems='center' spacing={1.5}>
        <CategoryHeader title={category} />

        <CategoryNotes notes={notes} />

        <TagBar />

        <CategorySection category='craveable classics' items={classic} />

        <CategorySection category='foodie favorites' items={foodies} />
      </Stack>
    </div>
  );
}

export default SandwichCategory;
