import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';

function CategoryToggle() {
  const [value, setValue] = useState(0);
  const [isScrolledPast, setScrolledPast] = useState(false);

  const categories = useSelector(
    (state: RootState) => state.menuState.categories,
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const categoryToggleObserver = new IntersectionObserver(
      (entries) => {
        setScrolledPast(!entries[0].isIntersecting);
      },
      { threshold: 0, rootMargin: '-56px' },
    );

    categoryToggleObserver.observe(
      document.querySelector('#category-toggle-anchor') as Element,
    );
  }, []);

  return (
    <>
      <div id='category-toggle-anchor'></div>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          position: isScrolledPast ? 'sticky' : 'static',
          top: isScrolledPast ? '55px' : 'auto',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
        >
          {categories.map(({ category, title }) => (
            <Tab
              key={`${category}-tab`}
              label={title}
              sx={{
                fontSize: { xs: '10px', sm: '12.5px', md: '12.5px' },
                padding: { xs: '8px 12px', sm: '10px 14px', md: '12px 16px' },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
}

export default CategoryToggle;
