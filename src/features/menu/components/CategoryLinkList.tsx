import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import CategoryLink from './CategoryLink';

function CategoryLinkList() {
  const categories = useSelector(
    (state: RootState) => state.menuState.categories,
  );

  return (
    <Stack
      direction='row'
      justifyContent='center'
      flexWrap='wrap'
      spacing={{ xs: 1.5, sm: 3 }}
    >
      {categories.map(({ category, title }) => (
        <CategoryLink key={category} title={title} category={category} />
      ))}
    </Stack>
  );
}

export default CategoryLinkList;
