import { useEffect, useState } from 'react';

const useTagBarIntersectionObserver = () => {
  const [isScrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setScrolledPast(entries[0].isIntersecting ? false : true);
      },
      { threshold: 0, rootMargin: '-84px' }, // 56 (app bar height) + 18 (tag bar height) + 10 (tag bar padding)
    );

    observer.observe(document.querySelector('#tag-bar') as Element);
  }, []);

  return { isScrolledPast };
};

export default useTagBarIntersectionObserver;
