import Stack from '@mui/material/Stack';

import SandwichCategory from './SandwichCategory';
import StandardCategory from './StandardCategory';

function MenuView({ data }: { data: GroupedMenuResponseType }) {
  return (
    <Stack spacing={{ xs: 2, sm: 3, md: 4 }} paddingTop='10px'>
      <StandardCategory data={data} name="chef's creations" />

      <SandwichCategory data={data} />

      <StandardCategory data={data} name='bowls' />

      <StandardCategory data={data} name='soulful salads' />

      <StandardCategory data={data} name='1/2 sandwich combos' />

      <StandardCategory data={data} name='kids' />

      <StandardCategory data={data} name='deli sides & soups' />
    </Stack>
  );
}

export default MenuView;
