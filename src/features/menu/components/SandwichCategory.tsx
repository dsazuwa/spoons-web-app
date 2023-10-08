import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import CategoryNotes from './CategoryNotes';
import CategorySection from './CategorySection';
import TagBar from './TagBar';

function SandwichCategory({ data }: { data: GroupedMenuResponseType }) {
  const sandwiches = data.menu['cheffy sandwiches'];

  const foodies = sandwiches.items.filter(
    (x) => x.subCategory === 'foodie favorites',
  );
  const classics = sandwiches.items.filter(
    (x) => x.subCategory === 'craveable classics',
  );

  return (
    <div id='cheffy sandwiches'>
      <Stack alignItems='center' spacing={1.5}>
        <CategoryHeader title='Cheffy Sandwiches' />

        <CategoryNotes notes={sandwiches.notes} />

        <TagBar category='Cheffy Sandwiches' />

        <CategorySection category='craveable classics' items={classics} />

        <CategorySection category='foodie favorites' items={foodies} />
      </Stack>
    </div>
  );
}

export default SandwichCategory;
