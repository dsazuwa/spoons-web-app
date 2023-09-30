import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@store';
import { setSelected } from '../api/menu.slice';

const useCategoryIntersectionObserver = () => {
  const dispatch = useDispatch();

  const categories = useSelector(
    (state: RootState) => state.menuState.categories,
  ).map((x) => x.category);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            dispatch(setSelected(entry.target.id as CategoryType));
        });
      },
      { threshold: 0.5, rootMargin: '-84px' }, // 56 (app bar height) + 18 (tag bar height) + 10 (tag bar padding)
    );

    categories.forEach((category) => {
      observer.observe(document.querySelector(`#${category}`) as Element);
    });
  }, []);
};

export default useCategoryIntersectionObserver;
