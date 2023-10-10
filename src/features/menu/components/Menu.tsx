import Stack from '@mui/material/Stack';

import SandwichCategory from './SandwichCategory';
import StandardCategory from './StandardCategory';

function Menu({ menu }: { menu: CategoryItemType[] }) {
  return (
    <Stack spacing={{ xs: 2, sm: 3, md: 4 }} paddingTop='10px'>
      {menu.map(({ category }, index) =>
        category === 'cheffy sandwiches' ? (
          <SandwichCategory
            key={`category-${index}`}
            index={index}
            menu={menu}
          />
        ) : (
          <StandardCategory
            key={`category-${index}`}
            index={index}
            menu={menu}
          />
        ),
      )}
    </Stack>
  );
}

export default Menu;
