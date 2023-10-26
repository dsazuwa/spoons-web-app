import { styled } from '@mui/material';
import MuiTab from '@mui/material/Tab';
import MuiTabs from '@mui/material/Tabs';

import useCategoryToggle from '@hooks/useCategoryToggle';

const Tabs = styled(MuiTabs)({
  zIndex: '1',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  backgroundColor: 'white',
  position: 'static',
  top: 'auto',
  left: 'auto',

  '&.fixed': {
    padding: '0 16px 0 16px',
    position: 'fixed',
    top: '55px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

const Tab = styled(MuiTab)(({ theme }) => ({
  minWidth: 0,
  padding: '0.625rem 0.875rem',
  fontWeight: 600,
  fontSize: '0.75rem',

  [theme.breakpoints.only('xs')]: {
    fontSize: '0.65rem',
  },

  [theme.breakpoints.only('sm')]: {
    fontSize: '0.7rem',
  },
}));

interface CategoryToggleProps {
  categories: string[];
  maxWidth: string | number;
}

function CategoryToggle({ categories, maxWidth }: CategoryToggleProps) {
  const { value, isScrolledPast, handleClick } = useCategoryToggle(categories);

  return (
    <>
      <div id='category-toggle-anchor'></div>

      <Tabs
        id='category-toggle'
        className={isScrolledPast ? 'fixed' : ''}
        sx={{ maxWidth }}
        value={value}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
      >
        {categories.map((title, index) => (
          <Tab
            id={`tab-${index}`}
            key={`tab-${index}`}
            label={title}
            onClick={handleClick}
          />
        ))}
      </Tabs>
    </>
  );
}

export default CategoryToggle;
