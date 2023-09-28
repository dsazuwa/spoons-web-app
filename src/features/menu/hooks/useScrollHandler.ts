import { useEffect, useState } from 'react';

const useScrollHandler = () => {
  const [isScrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolledPast };
};

export default useScrollHandler;
