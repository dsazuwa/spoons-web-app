import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';

const useCategoryToggle = () => {
  const [value, setValue] = useState(0);
  const [isScrolledPast, setScrolledPast] = useState(false);

  const categories = useSelector(
    (state: RootState) => state.menuState.categories,
  );

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const index = Number(event.currentTarget.id.split('-')[1]);

    setValue(index);

    const scrollTarget = document.getElementById(categories[index]);
    const appBar = document.getElementById('client-app-bar');
    const categoryToggle = document.getElementById('category-toggle');

    if (scrollTarget && appBar && categoryToggle) {
      const offset = appBar?.offsetHeight + categoryToggle?.offsetHeight;

      window.scrollTo({
        top: scrollTarget.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth',
      });
    }
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(
        (category) => document.getElementById(category) as Element,
      );

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 0 && index !== value)
          setValue(index);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [categories]);

  return { value, isScrolledPast, categories, handleClick };
};

export default useCategoryToggle;
