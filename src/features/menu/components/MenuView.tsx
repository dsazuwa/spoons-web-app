import Stack from '@mui/material/Stack';

import SandwichCategory from './SandwichCategory';
import StandardCategory from './StandardCategory';
import CategoryToggle from './CategoryToggle';

function MenuView({ data }: { data: GroupedMenuResponseType }) {
  return (
    <>
      <CategoryToggle />

      <Stack spacing={{ xs: 2, sm: 3, md: 4 }}>
        <StandardCategory data={data} name='creations' />

        <SandwichCategory data={data} />

        <StandardCategory data={data} name='bowls' />

        <StandardCategory data={data} name='salads' />

        <StandardCategory data={data} name='combos' />

        <StandardCategory data={data} name='kids' />

        <StandardCategory data={data} name='sides' />
      </Stack>
    </>
  );
}

export default MenuView;
