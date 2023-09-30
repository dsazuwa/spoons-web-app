import Stack from '@mui/material/Stack';

import CategoryHeader from './CategoryHeader';
import CategoryNotes from './CategoryNotes';
import CategorySection from './CategorySection';
import TagBar from './TagBar';

function SandwichCategory({ data }: { data: GroupedMenuResponseType }) {
  const { foodie, classics } = data.menu;

  return (
    <div id='sandwiches'>
      <Stack alignItems='center' spacing={1.5}>
        <CategoryHeader title='Cheffy Sandwiches' />

        <CategoryNotes notes={foodie.notes} />

        <TagBar category='Cheffy Sandwiches' />

        <CategorySection category={classics.category} items={classics.items} />

        <CategorySection category={foodie.category} items={foodie.items} />
      </Stack>
    </div>
  );
}

export default SandwichCategory;
