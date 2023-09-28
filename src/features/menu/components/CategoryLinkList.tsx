import Stack from '@mui/material/Stack';

import CategoryLink from './CategoryLink';

function CategoryLinkList() {
  const categories = [
    { to: 'creations', title: "Chef's Creations" },
    { to: 'sandwiches', title: 'Cheffy Sandwiches' },
    { to: 'bowls', title: 'Bowls' },
    { to: 'salads', title: 'Salads' },
    { to: 'combos', title: '1/2 Sandwich Combos' },
    { to: 'kids', title: 'Kids' },
    { to: 'sides', title: 'Deli Sides & Soups' },
  ];

  return (
    <Stack direction='row' justifyContent='center' flexWrap='wrap' spacing={3}>
      {categories.map((category) => (
        <CategoryLink
          key={category.to}
          to={category.to}
          title={category.title}
        />
      ))}
    </Stack>
  );
}

export default CategoryLinkList;
