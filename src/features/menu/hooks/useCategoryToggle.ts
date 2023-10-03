import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import { setSelected } from '../api/menu.slice';

const useCategoryToggle = () => {
  const [isScrolledPast, setScrolledPast] = useState(false);

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

  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.menuState.categories,
  ).map((x) => x.category);

  useEffect(() => {
    const categoryIntersectionObserver = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            dispatch(setSelected(entries[i].target.id as CategoryType));
            break;
          }
        }
      },
      { threshold: 0.5, rootMargin: '-56px' },
    );

    categories.forEach((category) => {
      categoryIntersectionObserver.observe(
        document.getElementById(category) as Element,
      );
    });
  }, []);

  return { isScrolledPast };
};

export default useCategoryToggle;
