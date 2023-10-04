import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import useCategoryToggle from '../hooks/useCategoryToggle';

function CategoryToggle() {
  const { value, isScrolledPast, categories, handleClick } =
    useCategoryToggle();

  return (
    <>
      <div id='category-toggle-anchor'></div>
      <Box
        id='category-toggle'
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          bgcolor: 'background.paper',
          position: isScrolledPast ? 'sticky' : 'static',
          top: isScrolledPast ? '55px' : 'auto',
        }}
      >
        <Tabs
          value={value}
          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
        >
          {categories.map(({ title }, index) => (
            <Tab
              id={`tab-${index}`}
              key={`tab-${index}`}
              label={title}
              sx={{
                fontSize: { xs: '10px', sm: '12.5px', md: '12.5px' },
                padding: { xs: '8px 12px', sm: '10px 14px', md: '12px 16px' },
                textTransform: 'capitalize',
              }}
              onClick={handleClick}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
}

export default CategoryToggle;