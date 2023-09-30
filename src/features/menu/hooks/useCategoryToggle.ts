import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import { setSelected } from '../api/menu.slice';

// rootMargin: 56 (app bar height) + 18 (tag bar height) + 10 (tag bar padding)

const useCategoryToggle = () => {
  const dispatch = useDispatch();
  const [isScrolledPast, setScrolledPast] = useState(false);

  const categories = useSelector(
    (state: RootState) => state.menuState.categories,
  ).map((x) => x.category);

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
    const categoryIntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            dispatch(setSelected(entry.target.id as CategoryType));
        });
      },
      { threshold: 0.5, rootMargin: '-84px' },
    );

    categories.forEach((category) => {
      categoryIntersectionObserver.observe(
        document.querySelector(`#${category}`) as Element,
      );
    });
  }, []);

  return { isScrolledPast };
};

export default useCategoryToggle;
