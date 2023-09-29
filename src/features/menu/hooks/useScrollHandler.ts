import { useEffect, useState } from 'react';

const useScrollHandler = () => {
  const [isScrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const scrolledPastListener = () => {
      const elementTarget = document.getElementById('tag-bar');

      if (elementTarget) {
        const appBarHeight = 64;
        const linkAppBarHeight = 22.5;
        const linkAppBarPadding = 10;
        const offset = appBarHeight + linkAppBarHeight + linkAppBarPadding;

        const isScrolledPast =
          window.scrollY >
          elementTarget.offsetTop + elementTarget.offsetHeight - offset;
        setScrolledPast(isScrolledPast);
      }
    };

    window.addEventListener('scroll', scrolledPastListener);

    return () => {
      window.removeEventListener('scroll', scrolledPastListener);
    };
  }, []);

  return { isScrolledPast };
};

export default useScrollHandler;
