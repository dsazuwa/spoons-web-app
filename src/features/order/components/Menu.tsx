import Stack from '@mui/material/Stack';

import Category from './Category';

function Menu({ menu }: { menu: CategoryItemType[] }) {
  return (
    <Stack spacing={3} marginTop='20px'>
      {menu.map(({ category }, index) => (
        <Category key={`${category}-section`} index={index} menu={menu} />
      ))}
    </Stack>
  );
}

export default Menu;
