import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

import { RootState } from '@store';
import palette from '@utils/palette';
import useCategoryToggle from '../hooks/useCategoryToggle';
import CategoryLink from './CategoryLink';

function CategoryToggle() {
  const { isScrolledPast } = useCategoryToggle();
  const categories = useSelector(
    (state: RootState) => state.menuState.categories,
  );

  return (
    <>
      <div id='category-toggle-anchor'></div>
      <Stack
        id='category-toggle'
        direction='row'
        justifyContent='center'
        flexWrap='wrap'
        spacing={{ xs: 1.5, sm: 3 }}
        padding='10px'
        position={isScrolledPast ? 'sticky' : 'static'}
        top={isScrolledPast ? '55px' : 'auto'}
        sx={{ background: palette.base.white }}
      >
        {categories.map(({ category, title }) => (
          <CategoryLink key={category} title={title} category={category} />
        ))}
      </Stack>
    </>
  );
}

export default CategoryToggle;
